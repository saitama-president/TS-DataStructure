import math3d = require("math3d");

export class Relation {
  private static All: Array<Relation>;

  private $parent: Relation;
  private $prop: Object;
  public static Generate(prop: Object): Relation {
    var result = new Relation(prop);
    return result;
  }

  constructor(prop: Object) {
    this.$prop = prop;
  }

  public parent = (): Relation => this.$parent;

  public children = (): Array<Relation> =>
    Relation.All.filter(r => r.parent() == this);

  public isRoot = (): boolean => !this.parent();
  public hasChildren = (): boolean => 0 < this.children().length;

  public static a = (): number => 1;
}

console.log("OK");
console.log(Relation.a());
