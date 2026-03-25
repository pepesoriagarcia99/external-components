const path = require("path");
const fs = require("fs");

const express = require("express");
const cors = require("cors");
const compression = require("compression");

const PORT = 3000;
const app = express();
const STATIC_DIR = path.join(__dirname, "static");

app.use(cors());
app.use(compression());

app.get("/cdn", (req, res) => {
  fs.readdir(STATIC_DIR, (err, files) => {
    if (err) {
      return res.status(500).send("Error leyendo directorio");
    }

    res.json(files);
  });
});

app.use("/cdn", (req, res, next) => {
  let url = req.url;
  const modulo = url.replace(/^\/+/, "");
  const isValid = /^[a-zA-Z0-9-_]+$/.test(modulo);

  if (!isValid) {
    return res.status(400).send("Nombre de módulo inválido");
  }

  req.url = `/${modulo}.js`;

  next();
});

app.use(
  "/cdn",
  express.static(STATIC_DIR, {
    // etag: true,
    // lastModified: true,
    // maxAge: "1d",
    // immutable: true,
    // setHeaders: (res) => {
    //   res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    // },
  }),
);

app.listen(PORT, () => {
  console.log(`CDN corriendo en http://localhost:${PORT}`);
});
