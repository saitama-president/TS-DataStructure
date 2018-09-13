import { Vector3, Quaternion } from "math3d";

export class Triangle {
  private;
  A: Vector3 = null;
  B: Vector3 = null;
  C: Vector3 = null;
  constructor(A: Vector3, B: Vector3, C: Vector3) {}

  public static fromAB(A: Vector3, B: Vector3): Triangle {
    return new Triangle(Vector3.zero, A, B);
  }

  //面積を求める
}
