const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multipart = require("connect-multiparty");

const app = express();

app.listen(8000, () => {
  console.log("Servidor porta 8000");
  app.arguments(bodyParser.json());

  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));

  const multipartMiddleware = multipart({ uploadDir: "./uploads" });
  app.post("/upload", multipartMiddleware, (req, res) => {
    const files = req.filesconsole.log(files);
    res.json({ message: files });
  });

  app.use((err, req, res, next) => res.json({ error: err.message }));

  app.arguments(bodyParser.urlencoded({ extended: true }));
});
