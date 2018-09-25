"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const LinkNode_1 = require("../src/LinkNode");
describe("リンクノードのテスト", () => {
    var A = new LinkNode_1.default();
    var B = new LinkNode_1.default();
    var C = new LinkNode_1.default();
    var D = new LinkNode_1.default();
    var E = new LinkNode_1.default();
    A.After = B;
    B.After = C;
    C.After = D;
    D.After = E;
    E.After = A;
    it("A -> B になってる？ ", () => {
        chai_1.assert(A.Next == B, "あかん");
    });
    it("B -> C になってる？ ", () => {
        chai_1.assert(B.Next == C, "あかん");
    });
    it("C -> D になってる？ ", () => {
        chai_1.assert(C.Next == D, "あかん");
    });
    it(" B <- C になってる？ ", () => {
        chai_1.assert(B == C.Prev);
    });
    it(" C <- D になってる？ ", () => {
        chai_1.assert(C == D.Prev);
    });
    it(" E -> A になってる？ ", () => {
        chai_1.assert(E.Next == A);
    });
    it(" E <- A になってる？ ", () => {
        chai_1.assert(A.Prev == E);
    });
    it(" A >> 2 は C になってる？ ", () => {
        chai_1.assert(A.Move(2) == C);
    });
    it(" D << 3 は A になってる？ ", () => {
        chai_1.assert(D.Move(-3) == A);
    });
});
