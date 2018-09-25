"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
本クラスはクラスに取り付けられるモジュール式オブジェクト
Unityのcomponentと同じ
*/
var ST;
(function (ST) {
    var DATA;
    (function (DATA) {
        class Attachment {
            get Node() {
                return this.$parent;
            }
        }
        DATA.Attachment = Attachment;
    })(DATA = ST.DATA || (ST.DATA = {}));
})(ST || (ST = {}));
exports.default = ST.DATA.Attachment;
