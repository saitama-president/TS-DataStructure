import Component from "./Component";

  export default class Node {
    private static All: Array<Node> = [];

    private $parent: Node;
    private $prop: Object;
    private $id: number;
    private $components:Array<Component> = [];


    constructor(prop: Object = null ) {
      Node.All.push(this);
      this.$id = Node.All.length;
      this.$prop = prop;
    }
    // -- >> setter ここから
    set parent(p:Node){
      this.$parent = p;
    }


    // << -- setter ここまで

    // >>geter ここから
    get parent(): Node {
      return this.$parent;
    }

    get children(): Array<Node> {
      return Node.All.filter(r => r.parent == this);
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

    get root():Node{
      var needle:Node = this;
      while(needle.parent){
        needle=needle.parent;
      }
      return needle;
    }
    // << --getter ここまで


    public append(o:Node){
      o.parent = this;
    }  
  }
