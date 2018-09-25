"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
var ST;
(function (ST) {
    var DATA;
    (function (DATA) {
        //入力：出力がN:Nになっているノード。無限ループもある
        class OmniNode extends Node_1.default {
            constructor(prop = {}) {
                super(prop);
            }
            static get All() {
                return OmniNode.$All.filter(o => o instanceof OmniNode);
            }
            // -- >> setter ここから
            set out(n) {
                //this. = n;
            }
            set in(n) {
            }
            // << -- setter ここまで
            // >>geter ここから
            get out() {
                return this;
            }
            get in() {
                return this;
            }
        }
        DATA.OmniNode = OmniNode;
    })(DATA = ST.DATA || (ST.DATA = {}));
})(ST || (ST = {}));
exports.default = ST.DATA.OmniNode;
