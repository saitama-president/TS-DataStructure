import Node from "./src/Node";
import testAttachment from "./src/sample/testAttachment";

import * as Express from "express";


var N=new Node();

N.Attachment(new testAttachment());

console.dir(`BEGIN ALL `);

console.dir(N);

var attach:testAttachment=N.getAttachment<testAttachment>(testAttachment);

console.dir(attach);
