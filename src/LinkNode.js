"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
var ST;
(function (ST) {
    var DATA;
    (function (DATA) {
        //一直線にfrom-toで繋がっている
        //最初と最後の概念は持たない
        class LinkNode extends Node_1.default {
            constructor() {
                super(...arguments);
                this.$next = null;
                this.$prev = null;
            }
            static get All() {
                return LinkNode.$All.filter(o => o instanceof LinkNode);
            }
            /* SETTER ここから */
            set Before(b) {
                //
                var $A = this.Prev;
                //右端から順に処理
                this.$prev = b;
                b.$next = this;
                if ($A) {
                    b.$prev = $A;
                    $A.$next = b;
                }
            }
            set After(a) {
                var $B = this.Next;
                //左端から処理
                this.$next = a;
                a.$prev = this;
                if ($B) {
                    a.$next = $B;
                    $B.$prev = a;
                }
            }
            /* GETTER ここから*/
            get After() {
                return this.$next;
            }
            get Before() {
                return this.$next;
            }
            get Next() {
                return this.$next;
            }
            get Prev() {
                return this.$prev;
            }
            /* GETTER ここまで */
            Move(i = 0) {
                return i == 0 ? this
                    : (0 < i
                        ? this.Next.Move(i - 1)
                        : this.Prev.Move(i + 1));
            }
            getRange(endPoint) {
                var result = [];
                /**
                 * 方向性を決める
                 */
                return result;
            }
        }
        DATA.LinkNode = LinkNode;
    })(DATA = ST.DATA || (ST.DATA = {}));
})(ST || (ST = {}));
exports.default = ST.DATA.LinkNode;
