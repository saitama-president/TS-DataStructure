import * as fs from "fs"
import {exec,execSync} from "child_process"

function z(s: string) {
  console.dir(s);
  console.log(execSync("echo 12345").toString() );
  
}

fs.readdir("./src/", (e, files) =>
  files.filter(name => {
     return /\.ts$/.test(name);
  }).forEach(f => {
      console.dir(f);
      fs.watch(`./src/${f}`, (e: string, f: string) => {
        z(`${e}+${f}`);//実行
      })
    })
  //  console.dir(files);
);

console.log("watch start");