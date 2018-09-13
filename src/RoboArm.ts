import { Vector3, Quaternion, Joint } from "./Joint";

function getDiffFromV3(A: Vector3, B: Vector3) {}

function get_vector_length(v: Vector3) {
  return Math.pow(v.x * v.x + v.y * v.y + v.z * v.z, 0.5);
}

function dot_product(vl: Vector3, vr: Vector3) {
  return vl.x * vr.x + vl.y * vr.y + vl.z * vr.z;
}

//２つのベクトルABのなす角度θを求める
function AFV(A: Vector3, B: Vector3) {
  let length_A = get_vector_length(A);
  let length_B = get_vector_length(B);
  let cos_sita = dot_product(A, B) / (length_A * length_B);

  //cosθからθを求める
  let sita = Math.acos(cos_sita);
  sita = (sita * 180.0) / Math.PI;

  return sita;
}

export default class RoboArm {
  base_position: Vector3;
  Joints: Array<Joint> = [];

  Root(): Joint {
    return this.Joints[0];
  }

  constructor(a: Array<Joint>) {
    this.Joints = a;
    for (let j in a) {
    }
  }

  Point(): Vector3 {
    let V = Vector3.Zero();

    this.Joints.forEach((j: Joint) => {
      V = V.add(j.$normal);
    });

    return V;
  }

  move($T: Vector3) {
    var $result = [];

    console.log(`MOVE TO [${$T.x},${$T.y},${$T.z}  ] `);
    //var q1 = Quaternion.Euler(0, 90, 0);
    //q1.mulVector3(v1);                // (0, 0, -1) <- v1 rotated 90 degrees in y-Axis
    //q1.angleAxis;

    //回転すべき方向を割り出そう！

    this.Joints.forEach(($j: Joint) => {
      let $r: Vector3 = Quaternion.Euler(0, 30, 0).mulVector3($j.$normal);
    });

    console.log(`T=${$T}`);
    //三角形を割り出すぞ
    this.Joints.reverse().forEach((j: Joint) => {
      if (!j.$parent) return;

      let A: Joint = j.$parent;
      let B: Joint = j;
      let C = $T;

      let $tri: Triangle = this.getTriangle(A, B, C);
    });

    return true;
  }

  toString(): string {
    return `RObo-Arm
      JOINTS = ${this.Joints.length}
      Point = ${this.Point()}
    `;
  }

  private getTriangle($root: Joint, T: Joint, Target: Vector3): Triangle {
    //まず三つの長さを取得

    console.log("仮想三角形取得開始");

    let A: number = $root.$normal.magnitude;
    let B: number = $root.$parent
      ? $root.$parent.NormalAll()
      : $root.NormalAll();
    let C: number = Target.magnitude;

    console.log(`長さ: ${A} - ${B} - ${C} `);
    return new Triangle(A, B, C);
  }
}

class Triangle {
  A: number;
  B: number;
  C: number;

  constructor(A: number, B: number, C: number) {
    this.A = A;
    this.B = B;
    this.C = C;
  }

  acos(): number {
    let $cos =
      (Math.pow(this.B, 2.0) + Math.pow(this.C, 2.0) - Math.pow(this.A, 2.0)) /
      (2.0 * this.B * this.C);
    console.log("COS=" + $cos);
    return (Math.acos($cos) * 180.0) / Math.PI;
  }
}

function ACos(A: number, B: number, C: number) {
  let $cos =
    (Math.pow(B, 2.0) + Math.pow(C, 2.0) - Math.pow(A, 2.0)) / (2.0 * B * C);
  console.log("COS=" + $cos);
  return (Math.acos($cos) * 180.0) / Math.PI;
}
