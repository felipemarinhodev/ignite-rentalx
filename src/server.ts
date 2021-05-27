import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Felipe Marinho" });
});

app.listen(3333, () => console.log("Server is running"));
