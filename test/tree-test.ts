import { assert } from "chai";
import Node from "../src/Node";
import TreeNode from "../src/Nodes/TreeNode";

describe("Tree Node Test", () => {
  var Root = new TreeNode({});
  var Middle = new TreeNode({});
  var Tip = new TreeNode({});
  console.dir(Root);
  Tip.parent = Middle;
  Middle.parent =Root;

  it("Root->Root Test ", () => {
        assert.isTrue(Root == Root.root);
  });
  it("Middle->Root Test ", () => {
        assert.isTrue(Root == Middle.root);
  });
  it("Tip->Root Test ", () => {
        assert.isTrue(Root == Tip.root);
  });
});
