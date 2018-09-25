"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const XYNode_1 = require("../src/XYNode");
describe("XYNode Test V", () => {
    var XY = XYNode_1.default.Generate(8, 8);
    var p01 = XYNode_1.default.find(0, 1);
    it("0 X:0,Y:1 の右隣は X:1,Y:1で合ってる？ ", () => {
        chai_1.assert(true, "あかん");
    });
    it("Middle->Root Test ", () => {
    });
});
