import math3d = require('math3d');
import { Relation } from './Relation';
import { 
  Vector3,
  Quaternion
  } from 'math3d';

export class Arm extends Relation{

  constructor(
      length:number = 1.0,
      normal:Vector3 = new Vector3()
      ){
    super({
      
    });
  }

  public Length=():number=>1;

}