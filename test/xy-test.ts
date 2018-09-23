import { assert } from "chai";
import Node from "../src/Node";
import XYNode from "../src/XYNode";

describe("XYNode Test V", () => {
  var XY:Array<XYNode> = XYNode.Generate(8,8);
  var p01:XYNode = XYNode.find(0,1);
  it("0 X:0,Y:1 の右隣は X:1,Y:1で合ってる？ ", () => {
      assert(true,"あかん");
  });
  it("Middle->Root Test ", () => {
  });
});
