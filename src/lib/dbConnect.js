import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function dbConnect(collectionName) {
  // const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    if (!client.isConnected?.()) await client.connect();
    // console.log("Connected to MongoDB");

    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(collectionName);
    return collection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
