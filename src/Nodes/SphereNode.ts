import Node from "../Node";

namespace ST.DATA {
  export  interface SphereInterface{
     Latitude:number;
     Longitude:number;
    
     N:SphereNode,
     E:SphereNode,
     W:SphereNode,
     S:SphereNode,

     NearOne():SphereNode,
     Range(sec:number):Array<SphereNode>

  }

  //地球のような球体に点在するノードを扱う。
  export class SphereNode extends Node implements SphereInterface{
    $N: SphereNode;
    $E: SphereNode;
    $W: SphereNode;
    $S: SphereNode;
    public get N():SphereNode{
      return this;
    }
    public set N(SN:SphereNode){

    }
    public get E():SphereNode{
      return this;
    }
    public set E(SN:SphereNode){
      
    }
    public get W():SphereNode{
      return this;
    }
    public set W(SN:SphereNode){
      
    }
    public get S():SphereNode{
      return this;
    }
    public set S(SN:SphereNode){
      
    }


    public Latitude: number;
    public Longitude: number;


    NearOne=(): SphereNode =>null;
      

    Range(sec: number): SphereNode[] {
      throw new Error("Method not implemented.");
    }

    public static get All():Array<SphereNode>{
      return SphereNode.$All.filter(o=>o instanceof SphereNode);
    }

    public constructor(lat:number,lon:number){
      super({
      });
      this.Latitude=lat;
      this.Longitude=lon;
    }

  }

  export class SphereCollection extends Array<SphereNode>{

  }
}

export default ST.DATA.SphereNode;
