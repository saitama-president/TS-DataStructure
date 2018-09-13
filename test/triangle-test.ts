import { assert } from "chai";
import { Relation } from "../src/Relation";
import { Arm } from "../src/Arm";
import "../src/Triangle";
import { Vector3, Quaternion } from "math3d";
import { Triangle } from "../src/Triangle";

describe("TRIANGLE Test", () => {
  console.dir("TEST BEGIN");

  it("直角二等辺三角形", () => {
    var t: Triangle = new Triangle(Vector3.up, Vector3.zero, Vector3.forward);
    console.dir(t);
    assert.isTrue(true);
  });

  console.dir("TEST END");
});
