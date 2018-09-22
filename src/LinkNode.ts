import Node from "./Node";

namespace ST.DATA {

  //一直線にfrom-toで繋がっている
  //最初と最後の概念は持たない
  export class LinkNode extends Node {

    private $next:LinkNode=null;
    private $prev:LinkNode=null;

    public static get All():Array<LinkNode>{
      return LinkNode.$All.filter(o=>o instanceof LinkNode);
    }
    /* SETTER ここから */
    public set Before(b:LinkNode){
      //
      var $A:LinkNode =this.Prev;
      
      //右端から順に処理
      this.$prev = b;
      b.$next = this;
      if($A){
        b.$prev = $A;
        $A.$next = b;
      }
    }

    public set After(a:LinkNode){
      var $B:LinkNode =this.Next;

      //左端から処理
      this.$next = a;
      a.$prev =this;
      if($B){
        a.$next = $B;
        $B.$prev = a;
      }
    }

    /* GETTER ここから*/
    public get After():LinkNode{
      return this.$next;
    }
    public get Before():LinkNode{
      return this.$next;
    }

    public get Next():LinkNode{
      return this.$next;
    } 

    public get Prev():LinkNode{
      return this.$prev;
    }

    /* GETTER ここまで */

    public Move(i:number = 0){
      var needle:LinkNode=this;

      while(i != 0){
        needle= 0<i?  needle.Next:needle.Prev;
      }
      return needle;
    }
  }
}

export default ST.DATA.LinkNode;
