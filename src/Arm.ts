import math3d = require("math3d");
import { Relation } from "./Relation";
import { Component } from "./Component";
import { Vector3, Quaternion } from "math3d";

export class Arm extends Component{
  constructor(
    length: number = 1.0,
    normal: Vector3 = new Vector3(),//このアームの法線(デフォルト）
    offset: Vector3 = Vector3.zero
  ) {
    super({});
  }
  




  private $offset:Vector3;
  
  
  private Angle: number = 0; //この軸の回転量
  

  get Length(): number {
    return 1;
  }
  get Position(): Vector3 {
    //親の座標を辿る
    
    return Vector3.one;
  }

  get PositionTip():Vector3{
    return Vector3.one;
  }

  get PositionRoot():Vector3{
    return this.parent
      ?this.parent.PositionRoot()
      :this.Position();
  }

  public Calibrate() {
  }

  public MoveTo(to: Vector3):Map<Arm, number> {
    let result = {};
    var res;
    if (this.hasChildren) {
      //armだけ

      this.children.filter(o => o instanceof Arm).forEach((c:Arm) => {
        c.MoveTo(to);
      });
    }
    //本Armが回転するべき角度を返す
    return ;
  }

  public toString = (): string => `
    this.is Arm ID=${this.id}
    Legth = ${this.Length}
    
  `;
}
