import styled from "styled-components";
import { Spacer, Button } from "@nextui-org/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/client";
import { useStoreActions } from "../../store/GlobalState";
import { useRouter } from "next/router";
//import { createUser } from "../../utils/auth/auth";

interface NavbarProps {
  onConfirm: () => void;
  onCancel: () => void;
}

interface MyFormValues {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required("Bitte geben Sie ein Passwort ein.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
      "Muss mindestens 5 Ziffern enthalten, ein Großbuchstabe, ein Kleinbuchstabe und ein Sonderzeichen."
    ),
  email: Yup.string()
    .email("Email ist ungültig. Bitte korrekte Email eingeben.")
    .required("Bitte geben Sie eine Email ein."),
});

export const LoginModal: React.FC<NavbarProps> = (props: NavbarProps) => {
  const initialValues: MyFormValues = { email: "", password: "" };
  const setAlert = useStoreActions((state) => state.setAlert);
  const router = useRouter();

  // const handleCreateUser = async (email: string, password: string) => {
  //   try {
  //     await createUser(email, password);
  //   } catch (error: any) {
  //     setAlert({ message: error.message, type: "warning" });
  //   }
  // };

  const handleSignIn = async (email: string, password: string) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (result) {
      if (!result.error) {
        router.replace("/workspace");
      } else {
        setAlert({ message: result.error, type: "warning" });
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        handleSignIn(values.email, values.password);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <Form>
            <Field
              id="email"
              label="Email"
              name="email"
              placeholder="Email"
              size="xl"
              fullWidth={true}
              autoFocus={true}
            />

            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
            <Spacer />
            <Field
              id="password"
              label="Passwort"
              name="password"
              type="password"
              placeholder="Passwort"
              size="xl"
              fullWidth={true}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
            <Spacer y={2} />
            <Button
              type="submit"
              size="xl"
              css={{ width: "100%", fontSize: "2rem" }}
            >
              Login
            </Button>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

const FormWrapper = styled.div`
  width: 40vw;
  padding: 30px;
  font-size: 1.5rem;
  caret-color: black;
  max-height: 40vh;

  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 7px;
    color: black;
    font-size: 2rem;
  }

  .error-message {
    color: red;
    font-size: 1.5rem;
  }
`;
