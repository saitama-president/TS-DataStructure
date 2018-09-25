import Node from "./Node";
/**
本クラスはクラスに取り付けられるモジュール式オブジェクト
Unityのcomponentと同じ
*/
declare namespace ST.DATA {
    abstract class Attachment {
        private $parent;
        readonly Node: Node;
    }
}
declare const _default: typeof ST.DATA.Attachment;
export default _default;
