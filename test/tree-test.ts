import { assert } from "chai";
import Node from "../src/Node";
import TreeNode from "../src/TreeNode";

describe("Node Test V", () => {
  var Root = new TreeNode({});
  var Middle = new TreeNode({});
  var Tip = new TreeNode({});
  console.dir(Root);
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
