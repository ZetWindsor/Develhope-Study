import figlet from "figlet";

figlet("Ciao belli, figata sta roba", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});