import Node from "../Node";

namespace ST.DATA.Gender {

  export class GenderNode extends Node {
    private $mother: FemaleNode;
    private $father: MaleNode;
    public static get All(): Array<GenderNode> {
      return GenderNode.$All.filter(
        o => o instanceof GenderNode);
    }

    public get Children(): Array<GenderNode> {
      return GenderNode.All.filter(
        (v: GenderNode) =>
          v.Father == this || v.Mother == this
      );
    }

    public get Mother(): FemaleNode {
      return this.$mother;
    }
    public get Father(): MaleNode {
      return this.$father;
    }

    //兄弟（父母のどちらかが一致）
    public get Siblings(): Array<GenderNode> {
      return GenderNode.All.filter(
        (v: GenderNode) =>
          v != this
          && (this.Father == v.Father
            || this.Mother == v.Mother)
      );
    }

    //兄弟(父母両方が一致)
    public get TrueSiblings(): Array<GenderNode> {
      return GenderNode.All.filter(
        (v: GenderNode) =>
          v != this
          && (this.Father == v.Father
            && this.Mother == v.Mother)
      );
    }


  }

  export class MaleNode extends GenderNode {
    private static $Adam: MaleNode;

    public static get Adam(): MaleNode {
      return null;
    }
  }

  export class FemaleNode extends GenderNode {
    private static $Eve: MaleNode;

    public static get Eve(): MaleNode {
      return null;
    }
  }
}

export default ST.DATA.Gender.GenderNode;
