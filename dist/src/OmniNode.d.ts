import Node from "./Node";
declare namespace ST.DATA {
    class OmniNode extends Node {
        static readonly All: Array<OmniNode>;
        constructor(prop?: Object);
        out: OmniNode;
        in: OmniNode;
    }
}
declare const _default: typeof ST.DATA.OmniNode;
export default _default;
