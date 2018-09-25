import Node from "./Node";
declare namespace ST.DATA {
    class TreeNode extends Node {
        private $parent;
        static readonly All: Array<TreeNode>;
        constructor(prop?: Object);
        toString(): string;
        parent: TreeNode;
        readonly children: Array<Node>;
        readonly isRoot: boolean;
        readonly hasChildren: boolean;
        readonly id: number;
        readonly root: TreeNode;
        append(o: TreeNode): void;
    }
}
declare const _default: typeof ST.DATA.TreeNode;
export default _default;
