declare function require(x: string): any;

const math3d = require("math3d");

export class Obj {
  public prop: Object = {};
  constructor(prop: Object) {}
}

export class Joint {
  constructor(
    $rotate: Vector3,
    $normal: Vector3,
    $offset: Vector3 = new Vector3(0, 0, 0),
    $parent: Joint = null
  ) {
    this.$rotate = $rotate;
    this.$normal = $normal;
    this.$offset = $offset;
    this.$parent = $parent;
  }
  SetParent(p: Joint) {
    this.$parent = p;
    p.AddChild(this);
    return;
  }
  props: Object = {};
  //回転範囲
  $parent: Joint = null;
  $children: Array<Joint> = [];

  public $rotate: Vector3 = new Vector3(0, 0.5, 0);
  $normal: Vector3 = null;
  $offset: Vector3 = null;

  Position(): Vector3 {
    return new Vector3(1, 2, 3);
  }
  NormalAll(): number {
    //この先の手も加えた法線を取得
    let sum: number = this.$normal.magnitude;
    this.$children.forEach((j: Joint) => {
      sum += j.NormalAll();
    });
    return sum;
  }
  Length() {}

  //現在指示している位置
  Point(): Vector3 {
    return new Vector3(1, 2, 3);
  }

  SetAngle($a: Number) {
    console.log("回転");
  }
  SetAngleDeg($d: Number) {
    console.log("回転");
  }
  public AddChild(c: Joint) {
    this.$children.push(c);
  }
}

export class Vector3 extends math3d.Vector3 {
  constructor(A, B, C) {
    super(A, B, C);
  }
  public static Zero(): Vector3 {
    return new Vector3(0, 0, 0);
  }
}

export class Quaternion extends math3d.Quaternion {
  constructor(A, B, C, D) {
    super(A, B, C, D);
  }
}
