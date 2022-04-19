let valeur1;
let valeur2;
let i = 0;
let max;
let verify = false;

function randomvalue {
    valeur2 = Math.Floor(Math.random() * max)
    return valeur2;
}

function randomvalueverif(valeur1, valeur2) {

    if valeur2 == valeur1 {
        console.log("nombre trouvé aprés " + i)
        verify = true;
        else if (valeur2 > valeur1) {
            console.log("le nombre est plus petit")
        } else if (valeur2 < valeur1) {
            console.log("le nombre est plus grand")
        }
        return verify;

    }