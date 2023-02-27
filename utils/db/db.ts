import { MongoClient } from "mongodb";

export async function connectToDatabase(): Promise<MongoClient> {
  const uri =
    "mongodb+srv://visionx_user:GfdNb$XJ8R4t6!G@appdata.txphp.mongodb.net/visionx?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  await client.connect();

  return client;
}
