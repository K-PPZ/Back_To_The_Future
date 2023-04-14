let depart = 1985;
let anniversaire = '04-30';
let sauts = ['1992-02-11', '1998-11-28', '1983-08-12', '1970-02-09', '1984-11-05'];


let annee = "";
let resultat = "";

let i = 0;
let date = sauts[i];

function ans (annee, date, i) {


    for (let y = 0; y < date.length; y++) {
        if (date[y] != "-") {
            annee += date[y];
        } else {
            if (annee < depart) {
                return resultat += (depart - parseInt(annee)) - 1;
            } else {
               return resultat += (parseInt(annee) - depart) - 1;
            }
        }
    }
}
console.log(ans(annee, date, i));



let month = "";
let anniv = "";

function mois (month, anniv, annee, date, i) {
    let h = 0;

    for (let y = 0; y < date.length; y++) {
        if (date[y] == "-") {
            month += date[y+1];
            month += date[y+2];
            month += date[y+4];
            month += date[y+5];

            anniv += anniversaire[0];
            anniv += anniversaire[h+1];
            anniv += anniversaire[h+3];
            anniv += anniversaire[h+4];
            console.log(anniv);

            if (month > anniv) {
                annee +1;
            }
            return annee;
        }
    }
}
console.log(mois(month, anniv, annee, date, i));