import express from "express";
import "./database";

const app = express();

app.listen(3333, () => console.log("Serve is running in port 3333"));
