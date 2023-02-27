import { connectToDatabase } from "../../../utils/db/db";
import validator from "validator";
import { hashPassword } from "../../../utils/auth/auth";

async function signupHandler(req: any, res: any) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { email, password } = data;

  const validatePassword = validator.isStrongPassword(password, {
    minLength: 5,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });

  const validateEmail = validator.isEmail(email);

  if (!validatePassword || !validateEmail) {
    res.status(422).json({ message: "Ungültige Email oder Passwort!" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "Benutzer existiert bereits!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User created!" });
  client.close();
}

export default signupHandler;
