import { assert } from "chai";
import Node from "../src/Node";
import LinkNode from "../src/Nodes/LinkNode";

describe("リンクノードのテスト", () => {
  var A = new LinkNode();
  var B = new LinkNode();
  var C = new LinkNode();
  var D = new LinkNode();
  var E = new LinkNode();
 
  A.After = B;
  B.After = C;
  C.After = D;
  D.After = E;
  E.After = A;

  it("A -> B になってる？ ", () => {
      assert(A.Next == B,"あかん");
  });
  it("B -> C になってる？ ", () => {
    assert(B.Next == C,"あかん");
  });
  it("C -> D になってる？ ", () => {
    assert(C.Next == D,"あかん");
  });
  it(" B <- C になってる？ ", () => {
    assert(B == C.Prev);
  });
  it(" C <- D になってる？ ", () => {
    assert(C == D.Prev);
  });

  it(" E -> A になってる？ ", () => {
    assert(E.Next == A);
  });
  it(" E <- A になってる？ ", () => {
    assert(A.Prev == E);
  });

  it(" A >> 2 は C になってる？ ", () => {
    assert(A.Move(2) == C);
  });
  it(" D << 3 は A になってる？ ", () => {
    assert(D.Move(-3) == A);
  });

});
