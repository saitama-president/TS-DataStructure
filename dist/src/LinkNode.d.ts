import Node from "./Node";
declare namespace ST.DATA {
    class LinkNode extends Node {
        private $next;
        private $prev;
        static readonly All: Array<LinkNode>;
        Before: LinkNode;
        /* GETTER ここから*/
        After: LinkNode;
        readonly Next: LinkNode;
        readonly Prev: LinkNode;
        Move(i?: number): LinkNode;
        getRange(endPoint: number): Array<LinkNode>;
    }
}
declare const _default: typeof ST.DATA.LinkNode;
export default _default;
