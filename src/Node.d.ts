import Attachment from "./Attachment";
declare namespace ST.DATA {
    abstract class Node {
        protected $prop: Object;
        protected $id: number;
        protected $attachments: Array<Attachment>;
        protected static $All: Array<any>;
        static readonly All: Array<Node>;
        constructor(prop?: Object);
        Remove(): void;
        Attachment(a: Attachment): void;
        getAttachment<T extends Attachment>(ctor: {
            new (): T;
        }): T;
        toSVG(): string;
    }
}
declare const _default: typeof ST.DATA.Node;
export default _default;
