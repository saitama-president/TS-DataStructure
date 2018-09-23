import Node from "./Node";

namespace ST.DATA {

  //縦横座標を持つノード。
  export class XYNode extends Node {
    private $x:number=0;
    private $y:number=0;
    public static Generate(width:number,height:number):Array<XYNode>{

      var result:Array<XYNode> = [];
      for(var y:number =0 ;y < height;y++ )
        for(var x:number =0 ;x < width;x++ )
          result.push(new XYNode(x,y));
      return result;
    }

    public static get All():Array<XYNode>{
      return XYNode.$All.filter(o=>o instanceof XYNode);
    }
    public static find(x:number,y:number):XYNode {
      return XYNode.All.find(n=> n.X == x && n.Y == y);
    }

    public constructor($x:number,$y:number){
      super({
        "x":$x,
        "y":$y
      });
      this.$x=$x;
      this.$y=$y;
    }

    // >>geter ここから
    get X():number{
      return this.$x;
    }
    get Y():number{
      return this.$y;
    }

    get Left(): XYNode {
      return this;
    }

    get Right(): XYNode {
      return this;
    }

    get Up(): XYNode {
      return this;
    }
    get Down(): XYNode {
      return this;
    }

  }
}

export default ST.DATA.XYNode;
