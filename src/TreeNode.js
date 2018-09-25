"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
var ST;
(function (ST) {
    var DATA;
    (function (DATA) {
        class TreeNode extends Node_1.default {
            constructor(prop = {}) {
                super(prop);
            }
            static get All() {
                return TreeNode.$All.filter(o => o instanceof TreeNode);
            }
            toString() {
                return `\v TreeNode ID=${this.id}
      \v CHILDREN:${this.children.reduce((carry, item) => {
                    carry += "<" + item + ">";
                    return carry;
                }, "")}
      `;
            }
            // -- >> setter ここから
            set parent(p) {
                this.$parent = p;
            }
            // << -- setter ここまで
            // >>geter ここから
            get parent() {
                return this.$parent;
            }
            get children() {
                return TreeNode.All.filter(r => r.parent == this);
            }
            get isRoot() {
                return !this.parent;
            }
            get hasChildren() {
                return 0 < this.children.length;
            }
            get id() {
                return this.$id;
            }
            get root() {
                let nee = this;
                while (nee.parent) {
                    nee = nee.parent;
                }
                return nee;
            }
            // << --getter ここまで
            append(o) {
                o.parent = this;
            }
        }
        DATA.TreeNode = TreeNode;
    })(DATA = ST.DATA || (ST.DATA = {}));
})(ST || (ST = {}));
exports.default = ST.DATA.TreeNode;
