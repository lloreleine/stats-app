const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
const path = require("path");
const PG = require("pg");
const bodyParser = require("body-parser");

if (!process.env.DATABASE_URL) {
  console.error("environment variables not sourced");
  exit();
}

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(
  "/static",
  express.static(path.join(__dirname, "build/static"))
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Put an origin here, * means everything which is bad.
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Needed by ExpressJS
  next();
});


app.get("/favicon.ico", function (req, res) {
  res.sendFile(path.join(__dirname, "build/favicon.ico"));
});


// POST requests

// Save statistics
app.post("/stats", function(req, res) {
  const client = new PG.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
  });
  client.connect();
  console.log(req.body);
  let labels = Object.keys(req.body.labelsCounts);

  client
    .query(
      'INSERT INTO "users_stats" (date, userid, statsid) VALUES (Now(), $1, uuid_generate_v4()) RETURNING statsid',
      [req.body.userid]
    )
    .then(res1 => {
      return client
        .query(
          "INSERT INTO statistics (id, globalcount, datacount) VALUES ($1,$2,uuid_generate_v4()) RETURNING datacount",
          [res1.rows[0].statsid, req.body.globalCount]
        )
    })
    .then(res2 => {
      return Promise.all(labels
        .map(label =>
          client.query(
            "INSERT INTO counts (id, label, count) VALUES ($1,$2,$3)",
            [res2.rows[0].datacount, label, req.body.labelsCounts[label]]
          )
        )
      )
    })
    .then(res1 => {
      client.end();
      res.send({ result: "success" });
    })
    .catch(error => {
      client.end();
      res.send({ result: "failed" });
      console.warn(error);
    });
});


// GET requests

app.get("/dashboard", function(req, res) {
  // const client = new PG.Client({
  //   connectionString: process.env.DATABASE_URL,
  //   ssl: true
  // });
  // client.connect();
  // client
  //   .query("INSERT INTO users  (id, name, region, job) VALUES (uuid_generate_v4(), $1, $2, $3)", ["Loreleine", "lille", "front-end dev"])
  //   .then(resSQL => {
  //     client.end();
  //     console.log("insert successful");
  //     //res.send({ data: "success" });
  //   })
  //   .catch(e => {
  //     client.end();
  //     // res.send({ data: "failed" });
  //     console.warn(e);
  //   });
});

app.get("*", (request, result) => {
  result.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(port, function listening() {
  console.log("Listening on port ", port);
});
