import * from "./Relation";

/**
本クラスはクラスに取り付けられるモジュール式オブジェクト
Unityのcomponentと同じ
*/
export default abstract class Component{
  
  private $parent:Relation;

  get tree():Relation{
  }

}
