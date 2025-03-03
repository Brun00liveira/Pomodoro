import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let db;
try {
    const conn  = await client.connect();
    db = conn.db("sample_training");
  } catch(e) {
    console.error(e);
  }

export default db;