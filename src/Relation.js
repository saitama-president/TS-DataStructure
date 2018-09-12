"use strict";
exports.__esModule = true;
var Relation = /** @class */ (function () {
    function Relation(prop) {
        var _this = this;
        this.parent = function () {
            return _this.$parent;
        };
        this.children = function () {
            return Relation.All.filter(function (r) { return r.parent() == _this; });
        };
        this.isRoot = function () { return !_this.parent(); };
        this.hasChildren = function () { return 0 < _this.children().length; };
        this.$prop = prop;
    }
    Relation.Generate = function (prop) {
        var result = new Relation(prop);
        return result;
    };
    Relation.a = function () { return 1; };
    return Relation;
}());
exports.Relation = Relation;
console.log("OK");
console.log(Relation.a());
