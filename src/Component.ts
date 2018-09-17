import Node from "./Node";

/**
本クラスはクラスに取り付けられるモジュール式オブジェクト
Unityのcomponentと同じ
*/

namespace ST {
  export abstract class Component {
    private $parent: Node;

    get tree(): Node {
      return null;
    }
  }
}
export default ST.Component;
