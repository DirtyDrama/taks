let x;
let y;

function division(x, y) {
    if (x % y == 0) {
        console.log("  divisible  ")

    } else if (x < y) {
        console.log("erreur")
    } else {
        let r = x % y;
        console.log(r)
    }
}
console.log(division(5, 3));