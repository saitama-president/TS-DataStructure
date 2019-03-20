import Attachment from "./Attachment";
import * as md5 from "md5";
import testAttachment from "../sample/testAttachment";

namespace ST.DATA {
  interface NodeIdentifierInterface{
    readonly ID:number;
    Name:string;
    readonly HashCode:string;
  }

  export abstract class Node implements NodeIdentifierInterface{
    protected $prop: Object = {};
    protected $id: number;
    protected $name:string = "no name";
    protected $attachments: Array<Attachment> = [];

    protected static $All: Array<any> = [];
    public static get All(): Array<Node> { return Node.$All };

    /** >> Getter -Setter 
    **/

    /* >> >> Getter
    */
    public get ID(){
      return this.$id;
    }
    public get Name(){
      return this.$name;
    }
    
    public get HashCode(){
      return md5(this.ID.toString());
    }

    /* << << Getter
    */

    /* >> >> Setter
    */
    

    /* << << Setter
    */
    
    /** << Getter -Setter 
    **/

    /**
      
    */
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
