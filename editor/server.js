const path = require("path");
const express = require("express");
const app = express();
const PORT = 4000;

app.get("/index.js", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./index.js"));
});

//  index.html
app.get("/*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./index.html"));
});

//  catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
