import Node from "./Node";
declare namespace ST.DATA.Gender {
    class GenderNode extends Node {
        private $mother;
        private $father;
        readonly Children: Array<GenderNode>;
        readonly Mother: FemaleNode;
        readonly Father: MaleNode;
    }
    class MaleNode extends GenderNode {
        private static $Adam;
        static readonly Adam: MaleNode;
    }
    class FemaleNode extends GenderNode {
        private static $Eve;
        static readonly Eve: MaleNode;
    }
}
declare const _default: typeof ST.DATA.Gender.GenderNode;
export default _default;
