import { MongoClient } from 'mongodb';

let client;
let db;

export async function connectToDatabase() {
  if (!client) {
    try {
      client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
      db = client.db(process.env.MONGODB_DB_NAME);
      console.log("✅ Connected to MongoDB");
    } catch (err) {
      console.error("❌ Failed to connect to MongoDB:", err);
      throw err;
    }
  }
  return db;
}
