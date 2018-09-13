import { Joint, Quaternion, Vector3 } from "./src/Joint";
import { Relation } from "./src/Relation";
import { Arm } from "./src/Arm";

import * as Express from "express";

const app = Express();

function main() {
  const server = app.listen(9999, () => {
    console.log("Node.js is listening to PORT:" + server.address().port);
  });
  app.get("/test", function(req, res, next) {
    res.json([1, 2, 3, 4, 5]);
  });
}
console.dir("BEGIN ALL");




