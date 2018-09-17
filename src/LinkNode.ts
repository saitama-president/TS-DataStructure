import Node from "./Node";

namespace ST.DATA {
  export class LinkNode extends Node {
    

    public static get All():Array<LinkNode>{
      return LinkNode.$All.filter(o=>o instanceof LinkNode);
    }

    public constructor(prop:Object={}){
      super(prop);
    }

    // -- >> setter ここから
    set from(p: LinkNode) {
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

export default ST.DATA.LinkNode;
