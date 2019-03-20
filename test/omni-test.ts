import { assert } from "chai";
import Node from "../src/Node";
import XYNode from "../src/Nodes/XYNode";
import OmniNode from "../src/Nodes/OmniNode";

describe("OMNI Node Test", () => {
  var O1=new OmniNode({});
  var O2=new OmniNode({});

  var O2T=new OmniNode({});
  var O2F=new OmniNode({});

  var O3=new OmniNode({});

  O1.setNext(()=>true,O2);

  O2.setNext(()=>true,O2T);
  O2.setNext(()=>false,O2F);

  console.log(`O1=${O1.ID} O2=${O2.ID} O2T=${O2T.ID} O2F=${O2F.ID}`);

  //O3.setNext(()=>true,O2);
  it("O1 -> O2 ? ", () => {
      assert(O1.Next() == O2 ,"あかん");
  });
  it("O2 -> O2T ? ", () => {
      assert(O2.Next() == O2T ,
      `あかん:${O2.Next().ID}`);
  });

});
