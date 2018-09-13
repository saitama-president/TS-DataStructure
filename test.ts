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


var a = new Arm(0.15, 0);
a.MoveTo(new Vector3(1,2,3));
console.log(`${a}`);

console.dir(`BEGIN ALL ${a}`);
