import Node from "./Node";

namespace ST.DATA.Gender{
  namespace Gender{
    export class GenderNode extends Node{
      private $mother;
      private $father;

      public get Children():Array<GenderNode>{
        return null;
      }
    }

    export class MaleNode extends GenderNode{

    }

    export class FemaleNode extends FemaleNode{
    }

  }
}

export default ST.DATA.Gender.GenderNode;
