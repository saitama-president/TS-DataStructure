declare function require(x: string): any;
import {
  Joint,
  Vector3,
  Quaternion
} from "./classes/Joint"
import RoboArm from "./classes/RoboArm";

const express = require("express");
const app = express();


function main(){
  const server = app.listen(9999,()=>{
      console.log("Node.js is listening to PORT:" + server.address().port);
  });
  app.get("/test", function(req, res, next){
      res.json([1,2,3,4,5]);
  });
}
console.dir("BEGIN ALL");

class Obj{
  parent:Obj = null;
  children:Array<Obj> = [];
}


let ArmRoot=new Joint(
    new Vector3(0,1,0),//回転方向
    new Vector3(0,0.2,0)//棒
);
let ArmA2=new Joint(
    new Vector3(1,0,0),//回転方向
    new Vector3(1,0,0),
    Vector3.zero,
    ArmRoot
);

console.dir(ArmA2);
ArmA2.SetParent( ArmRoot );



let arm = new RoboArm(
[
  ArmRoot,
  ArmA2
]
);

console.log(` ${arm}`);
arm.move(Vector3.up);
console.log("NORMAL="+ArmRoot.NormalAll());
console.log(` OKITE `);
//let R=AFV(Vector3.up,Vector3.right);

//console.log(` R = ${R} `);


