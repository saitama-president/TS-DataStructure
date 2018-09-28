import Node from "../Node";

namespace ST.DATA {

  //入力：出力がN:Nになっているノード。無限ループもある
  export class OmniNode extends Node {

    private $next:Map<()=>boolean,OmniNode>=new Map<()=>boolean,OmniNode>();

    public static get All():Array<OmniNode>{
      return OmniNode.$All.filter(o=>o instanceof OmniNode);
    }

    public constructor(prop:Object={}){
      super(prop);
    }

    //次のノードを返す
    public Next():OmniNode{
      
      var success:()=>boolean = 
      Array.from(this.$next.keys()).find(
        $o=>$o()
      );
      var result = this.$next.get(success);
      return result;
    }

    public setNext(exp:()=>boolean,$o:OmniNode):boolean{
      if(this.$next.has(exp)){
        console.log("exists item");
        return false;
      }

      this.$next.set(exp,$o);
    }
    // << -- setter ここまで

    // >>geter ここから
    get Nexts(): Array<OmniNode>{
      return Array.from(this.$next.values());
    }
    
  }
}

export default ST.DATA.OmniNode;
