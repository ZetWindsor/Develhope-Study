`Use a method with a callback

Create a script that uses the Node.js core fs.writeFile() (callback API) method to write a text file. The documentation for this method is on the Node.js File system page:

 https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback`

import * as fs from "node:fs";

const newTextFile = "adesso il file1 txt conterra questo messaggio";

fs.writeFile("file-1.txt", newTextFile, { encoding: "utf-8" }, function (error) {
   if (error) {
      console.error(error);
      return;
   }

   console.log("File has been written successfully!");
});


/* fs.readFile("file-1.txt", { encoding: "utf-8" }, function (error, data) {
   console.log(data);
<<<<<<< HEAD
})  */
=======
}) */
>>>>>>> 3577cbef6cbde3c3b444eb320cf279049487dd98
