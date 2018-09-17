import Node from "./Node";

namespace ST.DATA {

  //入力：出力がN:Nになっているノード。無限ループもある
  export class OmniNode extends Node {


    public static get All():Array<OmniNode>{
      return OmniNode.$All.filter(o=>o instanceof OmniNode);
    }

    public constructor(prop:Object={}){
      super(prop);
    }

    // -- >> setter ここから
    set out(n: OmniNode) {
      //this. = n;
    }

    set in(n:OmniNode){

    }

    // << -- setter ここまで

    // >>geter ここから
    get out(): OmniNode {
      return this;
    }
    get in(): OmniNode {
      return this;
    }

    // << --getter ここまで


    
  }
}

export default ST.DATA.OmniNode;
