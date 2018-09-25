"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ST;
(function (ST) {
    var DATA;
    (function (DATA) {
        class Node {
            constructor(prop = {}) {
                this.$prop = {};
                this.$attachments = [];
                this.$prop = prop;
                this.$id = Node.All.length + 1;
                Node.All.push(this);
            }
            static get All() { return Node.$All; }
            ;
            Remove() {
                let needle = this;
                let result = Node.All.filter(a => {
                    return a != needle;
                });
                console.dir(result);
                Node.$All = result;
            }
            Attachment(a) {
                this.$attachments.push(a);
            }
            getAttachment(ctor) {
                return this.$attachments.find(o => o instanceof ctor);
            }
            toSVG() {
                return "";
            }
        }
        Node.$All = [];
        DATA.Node = Node;
    })(DATA = ST.DATA || (ST.DATA = {}));
})(ST || (ST = {}));
exports.default = ST.DATA.Node;
