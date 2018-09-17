import Node from "./Node";


/**
本クラスはクラスに取り付けられるモジュール式オブジェクト
Unityのcomponentと同じ
*/
namespace ST.DATA {
  export abstract class Attachment {
    private $parent: Node;

    get Node(): Node {
      return this.$parent;
    }
  }
}
export default ST.DATA.Attachment;
