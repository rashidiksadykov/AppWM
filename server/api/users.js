import { connectToDatabase } from "../db";

export default defineEventHandler(async (event) => {
  const db = await connectToDatabase();
  const collection = db.collection("users"); // Укажите свою коллекцию
  const users = await collection.find().toArray();
  return users;
});
