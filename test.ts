import Node from "./src/Node";
import testAttachment from "./sample/testAttachment";

import * as Express from "express";
import TreeNode from "./src/TreeNode";


var A=new TreeNode();
var B=new TreeNode();
var C=new TreeNode();

A.append(B);
B.append(C);

console.dir(`BEGIN ALL `);

console.log(`${A}`);

//var attach:testAttachment=N.getAttachment<testAttachment>(testAttachment);

//console.dir(attach);
