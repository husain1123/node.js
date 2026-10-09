const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kata: ", function(kata) {
    let hasil = kata.split("").reverse().join("");

    console.log("Kata setelah dibalik:", hasil);

    rl.close();
});