import Node from "../Node";


namespace ST.DATA {
  export class TreeNode extends Node {
    private $parent: TreeNode;

    public static get All():Array<TreeNode>{
      return TreeNode.$All.filter(o=>o instanceof TreeNode);
    }

    public constructor(prop:Object={}){
      super(prop);
    }

    public toString():string{
      return `\v TreeNode ID=${this.id}
      \v CHILDREN:${this.children.reduce((carry:string,item:Node)=>{
        carry+="<"+item+">";
        return carry;
      },"")}
      `;
    }

    // -- >> setter ここから
    set parent(p: TreeNode) {
      this.$parent = p;
    }

    // << -- setter ここまで

    // >>geter ここから
    get parent(): TreeNode {
      return this.$parent;
    }

    get children(): Array<Node> {
      return TreeNode.All.filter(r => r.parent ==this);
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

    get root(): TreeNode {
      let nee:TreeNode = this;
      while (nee.parent) {
        nee = nee.parent;
      }
      return nee;
    }
    // << --getter ここまで

    public append(o: TreeNode) {
      o.parent = this;
    }
  }
}

export default ST.DATA.TreeNode;
