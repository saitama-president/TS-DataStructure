import math3d = require("math3d");

export class Relation {
  private static All: Array<Relation> = [];

  private $parent: Relation;
  private $prop: Object;
  private $id: number;

  constructor(prop: Object) {
    Relation.All.push(this);
    this.$id = Relation.All.length;
    this.$prop = prop;
  }

  // >>geter ここから
  get parent(): Relation {
    return this.$parent;
  }

  get children(): Array<Relation>{
    return Relation.All.filter((r)=>r.parent==this);
  }

  get isRoot(): boolean {
    return !this.parent;
  }
  get hasChildren(): boolean {
    return 0 < this.children.length;
  }
  get id(): number {
    return this.$id;
  }

  // <<geter ここまで

  // >> setter　ここから
  //set parent(p: Relation) {}

  // << setter ここまで
}
