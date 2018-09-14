import { assert } from "chai";
import { tree } from "../src/Tree";
import { Arm } from "../src/Arm";

describe("Relation Test V", () => {

  var Root = new Relation({});
  var Middle = new Relation({});
  var Tip = new Relation({});

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

