let s = 0;
const t = [1, 2, 3, 4, 5, 6]

function somme(t) {
    for (i = 0; i < t.length; i++)
        s += t[i];
    return s;
}
console.log(somme(t))