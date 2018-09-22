import Node from "./Node";

namespace ST.DATA.Gender{

    export class GenderNode extends Node{
      private $mother:FemaleNode;
      private $father:MaleNode;

      public get Children():Array<GenderNode>{
        return null;
      }

      public get Mother():FemaleNode{
        return this.$mother;
      }
      public get Father():MaleNode{
        return this.$father;
      }
      
    }

    export class MaleNode extends GenderNode{
      private static $Adam:MaleNode;

      public static get Adam():MaleNode{
        return null;
      }
    }

    export class FemaleNode extends GenderNode{
      private static $Eve:MaleNode;

      public static get Eve():MaleNode{
        return null;
      }

    }
}

export default ST.DATA.Gender.GenderNode;
