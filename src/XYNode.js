"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
var ST;
(function (ST) {
    var DATA;
    (function (DATA) {
        //縦横座標を持つノード。
        class XYNode extends Node_1.default {
            constructor($x, $y) {
                super({
                    "x": $x,
                    "y": $y
                });
                this.$x = 0;
                this.$y = 0;
                this.$x = $x;
                this.$y = $y;
            }
            static Generate(width, height) {
                var result = [];
                for (var y = 0; y < height; y++)
                    for (var x = 0; x < width; x++)
                        result.push(new XYNode(x, y));
                return result;
            }
            static get All() {
                return XYNode.$All.filter(o => o instanceof XYNode);
            }
            static find(x, y) {
                return XYNode.All.find(n => n.X == x && n.Y == y);
            }
            // >>geter ここから
            get X() {
                return this.$x;
            }
            get Y() {
                return this.$y;
            }
            get Left() {
                return this;
            }
            get Right() {
                return this;
            }
            get Up() {
                return this;
            }
            get Down() {
                return this;
            }
        }
        DATA.XYNode = XYNode;
    })(DATA = ST.DATA || (ST.DATA = {}));
})(ST || (ST = {}));
exports.default = ST.DATA.XYNode;
