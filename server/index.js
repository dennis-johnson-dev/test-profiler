const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const StatsD = require("node-statsd");

const port = 3000;

const client = new StatsD({
  host: "127.0.0.1",
  port: 8125,
  prefix: "local."
});

app.use(cors());

const jsonParser = bodyParser.json();

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/", jsonParser, (req, res) => {
  console.log(req.body);
  const { timing, phase, actualTime, baseTime } = req.body;
  // console.log(req.body.baseTime);
  client.timing(`response_time.${timing}.actual`, actualTime);
  client.timing(`response_time.${timing}.base`, baseTime);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
