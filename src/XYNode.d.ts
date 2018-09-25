import Node from "./Node";
declare namespace ST.DATA {
    class XYNode extends Node {
        private $x;
        private $y;
        static Generate(width: number, height: number): Array<XYNode>;
        static readonly All: Array<XYNode>;
        static find(x: number, y: number): XYNode;
        constructor($x: number, $y: number);
        readonly X: number;
        readonly Y: number;
        readonly Left: XYNode;
        readonly Right: XYNode;
        readonly Up: XYNode;
        readonly Down: XYNode;
    }
}
declare const _default: typeof ST.DATA.XYNode;
export default _default;
