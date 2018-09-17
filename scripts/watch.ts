import * as fs from "fs";
import { exec, execSync } from "child_process";
import { debug } from "util";

const command = process.argv[2];

console.log("command=" + command);

function z(s: string) {
  console.dir(s);
  try {
    console.log(execSync(command).toString());
  } catch (e) {
    console.log("Exceotion");
  }
}

fs.readdir(
  "./src/",
  (e, files) =>
    files
      .filter(name => {
        return /\.ts$/.test(name);
      })
      .forEach(f => {
        console.dir(f);
        fs.watch(`./src/${f}`, (e: string, f: string) => {
          z(`${e}+${f}`); //実行
        });
      })
  //  console.dir(files);
);

console.log("watch start");
