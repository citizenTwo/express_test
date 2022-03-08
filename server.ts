import express from "express";

const app = express();
const port = 3000;

app.get("/test", (_, res) => {
  res.status(200).json({ success: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
