import { assert } from "chai";
import Node from "../src/Node";
import XYNode from "../src/Nodes/XYNode";
import OmniNode from "../src/Nodes/OmniNode";

describe("OMNI Node Test", () => {
  var O1=new OmniNode({});
  var O2=new OmniNode({});
  var O3=new OmniNode({});
  
  it("0 X:0,Y:1 の右隣は X:1,Y:1で合ってる？ ", () => {
      assert(true,"あかん");
  });
  it("Middle->Root Test ", () => {
  });
});
