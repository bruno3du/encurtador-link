import { connect } from "mongoose";

import dotenv from "dotenv";
dotenv.config();

async function run(): Promise<void> {
  try {
    await connect(process.env.MONGO_CONNECTION);
    console.log("database conected");
  } catch {
    console.log("error connection database");
  }
}

export default run;
