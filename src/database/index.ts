import { connect } from "mongoose";

import dotenv from "dotenv";
dotenv.config();

async function run(): Promise<void> {
  await connect(process.env.MONGO_CONNECTION);

  console.log("database conected");
}

export default run;
