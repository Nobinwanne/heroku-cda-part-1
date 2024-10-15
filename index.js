import express from "express";
const app = express();

const PORT = process.env.PORT || 5050;
console.log(PORT);
console.log("process.env:", process.env);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my Express App on Heroku </h1>`);
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
