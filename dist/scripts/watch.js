"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const child_process_1 = require("child_process");
const command = process.argv[2];
console.log("command=" + command);
function z(s) {
    console.dir(s);
    try {
        console.log(child_process_1.execSync(command).toString());
    }
    catch (e) {
        console.log("Exceotion");
    }
}
fs.readdir("./src/", (e, files) => files
    .filter(name => {
    return /\.ts$/.test(name);
})
    .forEach(f => {
    console.dir(f);
    fs.watch(`./src/${f}`, (e, f) => {
        z(`${e}+${f}`); //実行
    });
})
//  console.dir(files);
);
console.log("watch start");
