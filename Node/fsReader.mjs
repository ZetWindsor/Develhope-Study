import * as fs from "node:fs";


fs.readFile("file-2.txt", { encoding: "utf-8" }, function (error, data) {
   console.log(data);
}) 