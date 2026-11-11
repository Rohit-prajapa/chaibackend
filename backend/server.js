import express from "express";
const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Server Is Ready</h1>");
// });
app.use(express.static('dist'));

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      joke: "Why did the developer go broke? Because he used up all his cache!",
    },
    {
      id: 3,
      joke: "Why do Java developers wear glasses? Because they can't C#!",
    },
    {
      id: 4,
      joke: "Why was the computer cold? Because it left its Windows open!",
    },
    {
      id: 5,
      joke: "What is a programmer's favourite place? The Foo Bar!",
    },
  ];

  res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
