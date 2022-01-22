import express from "express";
import shortenRoute from "./routes/shorten.route";
import status from "./routes/status.route";
import MongoConnection from './database'


const app = express();

const connectDatabase = async () => await MongoConnection()
connectDatabase()

app.use(express.json())
app.use(shortenRoute);
app.use(status)


app.listen(3000, () => console.log("Running on port 3000"));
