import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

// Create a new MongoClient
const client = new MongoClient(process.env.MONGO_CONNECTION);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export default run;
