import express from "express";
import shortenRoute from "./routes/shorten.route";
import MongoConnection from './database'


const app = express();
MongoConnection()


app.use(shortenRoute);
app.get("/", (req, res) => res.send("Hello World"));





app.listen(3000, () => console.log("Running on port 3000"));
