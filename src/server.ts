import "./database";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Rota get ok" });
});

app.post("/", (req, res) => {
  return res.json({ message: "Rota post ok" });
});

app.listen(3333, () => console.log("Server is run in port 3333"));
