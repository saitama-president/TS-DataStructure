import Node from "../Node";

namespace ST.DATA {

  //入力：出力がN:Nになっているノード。無限ループもある
  export class OmniNode extends Node {

    private $out:Map<()=>boolean,OmniNode>;

    public static get All():Array<OmniNode>{
      return OmniNode.$All.filter(o=>o instanceof OmniNode);
    }

    public constructor(prop:Object={}){
      super(prop);
    }

    //次のノードを返す
    public Next():OmniNode{
      
      var success:()=>boolean = 
      Array.from(this.$out.keys()).find(
        $o=>$o()
      );
      var result = this.$out.get(success);
      return result;
    }
    // << -- setter ここまで

    // >>geter ここから
    get Nexts(): OmniNode {
      return this;
    }
    
  }
}

export default ST.DATA.OmniNode;
