import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json("rota get funcionando");
});

app.post("/", (req, res) => {
  return res.json("rota post funcionando");
});

app.listen(3333, () => console.log("Serve is running in port 3333"));
