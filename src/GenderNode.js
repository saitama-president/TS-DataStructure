"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
var ST;
(function (ST) {
    var DATA;
    (function (DATA) {
        var Gender;
        (function (Gender) {
            class GenderNode extends Node_1.default {
                get Children() {
                    return null;
                }
                get Mother() {
                    return this.$mother;
                }
                get Father() {
                    return this.$father;
                }
            }
            Gender.GenderNode = GenderNode;
            class MaleNode extends GenderNode {
                static get Adam() {
                    return null;
                }
            }
            Gender.MaleNode = MaleNode;
            class FemaleNode extends GenderNode {
                static get Eve() {
                    return null;
                }
            }
            Gender.FemaleNode = FemaleNode;
        })(Gender = DATA.Gender || (DATA.Gender = {}));
    })(DATA = ST.DATA || (ST.DATA = {}));
})(ST || (ST = {}));
exports.default = ST.DATA.Gender.GenderNode;
