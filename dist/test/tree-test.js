"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const TreeNode_1 = require("../src/TreeNode");
describe("Node Test V", () => {
    var Root = new TreeNode_1.default({});
    var Middle = new TreeNode_1.default({});
    var Tip = new TreeNode_1.default({});
    console.dir(Root);
    Tip.parent = Middle;
    Middle.parent = Root;
    it("Root->Root Test ", () => {
        chai_1.assert.isTrue(Root == Root.root);
    });
    it("Middle->Root Test ", () => {
        chai_1.assert.isTrue(Root == Middle.root);
    });
    it("Tip->Root Test ", () => {
        chai_1.assert.isTrue(Root == Tip.root);
    });
});
