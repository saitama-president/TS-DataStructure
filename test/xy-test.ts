import { assert } from "chai";
import Node from "../src/Node";
import XYNode from "../src/XYNode";

describe("XYNode Test V", () => {
  var XY:Array<XYNode> = XYNode.Generate(8,8);
  console.dir(XY);

  console.log(XY[0].X);

  it("Root->Root Test ", () => {
  });
  it("Middle->Root Test ", () => {
  });
});
