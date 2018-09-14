import { assert } from "chai";
import { Relation } from "../src/Relation";
import {
    Vector3,
    Quaternion
  } from "math3d";
import { Arm } from "../src/Arm";

describe("Arm Position Test V", () => {

  var Root = new Arm(1,Vector3.zero);
  var Middle = new Arm(1,Vector3.zero);
  var Tip = new Arm(1,Vector3.zero);

  Tip.parent = Middle;
  Middle.parent =Root;

  it("Root->Root Test ", () => {
    console.log(Root.root);
    assert.isTrue(Root == Root.root);
  });
  it("Middle->Root Test ", () => {
    console.log(Tip.root);
    assert.isTrue(Root == Middle.root);
  });
  it("Tip->Root Test ", () => {
    console.log(Tip.root);
    assert.isTrue(Root == Tip.root);
  });

});

