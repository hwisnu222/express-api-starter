const express = require("express"),
  app = express(),
  cors = require("cors"),
  morgan = require("morgan");
require("dotenv").config({ path: __dirname + "/env/main.env" });
// routes
const router = require("./src/routes/index");

const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan(
    ":remote-addr - :remote-user [:date[clf]] :method :url :status :res[content-length] - :response-time ms "
  )
);

// routes
app
  .route("/")
  .get((req, res) => res.send({ message: "Welcome to Express API Starter" }));
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(
    `Express starter run at port ${PORT}\nURL : ${process.env.HOSTNAME}:${PORT}`
  );
});
