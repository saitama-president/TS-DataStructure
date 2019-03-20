import Node from "../Node";

namespace ST.DATA {

  //ニューロンが如く接続先を重み評価して次を判断する
  export class NewralNode extends Node {

    private $next:Map<()=>boolean,NewralNode>;

    public static get All():Array<NewralNode>{
      return NewralNode.$All.filter(o=>o instanceof NewralNode);
    }

    public constructor(prop:Object={}){
      super(prop);
    }

    //次のノードを返す
    public Next():NewralNode{
      
      var success:()=>boolean = 
      Array.from(this.$next.keys()).find(
        $o=>$o()
      );
      var result = this.$next.get(success);
      return result;
    }

    public setNext(exp:()=>boolean,$o:NewralNode):boolean{
      if(this.$next.has(exp))return false;

      this.$next.set(exp,$o);
    }
    // << -- setter ここまで

    // >>geter ここから
    get Nexts(): NewralNode {
      return this;
    }
    
  }
}

export default ST.DATA.NewralNode;
