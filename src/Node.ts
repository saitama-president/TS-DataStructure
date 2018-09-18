import Attachment from "./Attachment";
import testAttachment from "../sample/testAttachment";

namespace ST.DATA {
  export abstract class Node {
    protected $prop: Object = {};
    protected $id: number;
    protected $attachments: Array<Attachment> = [];

    protected static $All: Array<any> = [];
    public static get All(): Array<Node> { return Node.$All };
    public constructor(prop: Object = {}) {
      this.$prop = prop;
      this.$id = Node.All.length + 1;
      Node.All.push(this);

    }

    public Remove(): void {
      let needle = this;
      let result = Node.All.filter(a => {
        return a != needle;
      });
      console.dir(result);
      Node.$All = result;
    }

    public Attachment(a: Attachment): void {
      this.$attachments.push(a);
    }

    public getAttachment<T extends Attachment>(ctor: { new(): T }): T {
      return this.$attachments.find(o => o instanceof ctor) as T;
    }

    public toSVG(): string {
      return "";
    }
  }
}

export default ST.DATA.Node;
