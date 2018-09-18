import Node from "./Node";

namespace ST.DATA {

  //縦横座標を持つノード。
  export class XYNode extends Node {
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
        x:$x,
        y:$y
      });
    }

    // -- >> setter ここから
    set out(n: XYNode) {
      //this. = n;
    }

    set in(n:XYNode){

    }

    // << -- setter ここまで

    // >>geter ここから
    get X():number{
      return this.prop.x;
    }
    get Y():number{
      return this.prop.y;
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
    // << --getter ここまで
  }
}

export default ST.DATA.XYNode;