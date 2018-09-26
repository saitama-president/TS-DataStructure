import Node from "../Node";

namespace ST.DATA {

  //入力：出力がN:Nになっているノード。無限ループもある
  export class OmniNode extends Node {

    private $out:Map<()=>boolean,Node>;

    public static get All():Array<OmniNode>{
      return OmniNode.$All.filter(o=>o instanceof OmniNode);
    }

    public constructor(prop:Object={}){
      super(prop);
    }

    public next():OmniNode{

      for(var k in this.$out.keys()){
        //
      }
      return this;
    }
    // << -- setter ここまで

    // >>geter ここから
    get out(): OmniNode {
      return this;
    }
    
  }
}

export default ST.DATA.OmniNode;
