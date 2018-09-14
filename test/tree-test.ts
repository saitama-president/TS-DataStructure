import { assert } from "chai";
import * as TS from "../src/Node";

describe("Node Test V", () => {

  var Root = new Node({});
  var Middle = new Node({});
  var Tip = new Node({});
  console.dir(Root);
  //Tip.parent = Middle;
  //Middle.parent =Root;
  

  it("Root->Root Test ", () => {
//    console.log(Root.root);
//    assert.isTrue(Root == Root.root);
  });
  it("Middle->Root Test ", () => {
//    console.log(Tip.root);
//    assert.isTrue(Root == Middle.root);
  });
  it("Tip->Root Test ", () => {
//    console.log(Tip.root);
//    assert.isTrue(Root == Tip.root);
  });

});

