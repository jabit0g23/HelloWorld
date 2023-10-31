import { readFile } from "node:fs/promises";

Promise.all([
    readFile("Torpedo/archivo.txt", "utf-8"),
    readFile("Torpedo/archivo2.txt", "utf-8")
]).then(([text, text2]) => {
    console.log("primer texto:",text);
    console.log("segundo texto:",text2);
})
