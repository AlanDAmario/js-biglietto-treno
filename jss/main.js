"use strict";
// variabile età//

const travelerAge = Number(prompt('inserire l\' eta'));
console.log(travelerAge);

//variabile km da percorerre//

const travelerKM = Number(prompt('inserire km da percorrere'));
console.log('travelKM', travelerKM);

//variabile prezzo per km//

const priceKM = 0.21;
console.log('priceKM', priceKM);

//PERCENTUALI//

const discount20 = 20;

const discount40 = 40;

//svolgimento//

let total = priceKM * travelerKM;
console.log('total', total);


// }

if (travelerAge < 18) {
    total = (total / 100) * (100 - discount20);

} else if (travelerAge > 65) {
    total = total * (discount40 / 100);

}
//ARROTONDAMENTO DECIMALE//

console.log(Math.round(total * 100) / 100);