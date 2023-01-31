// 1 Chiedere quanti km si vuole percorrere
const km = parseFloat(prompt('Quanti km vuole percorrere?'))
console.log('Km', km)
// 2 Chidedere l'età
const age = parseInt(prompt('Quanti anni hai?'))
console.log('Anni', age)
// 3 Calcolare il prezzo del biglietto in base ai km
const priceKm= km * 0.21
console.log('Prezzo biglietto in base ai km: €', parseFloat(priceKm).toFixed(2))
// 4 Applicare lo sconto in base l'età
let priceMinorenni 
let priceOver65
if (age < 18){
    priceMinorenni = priceKm - priceKm * 0.2  
    console.log('Prezzo finale del biglietto: €', parseFloat(priceMinorenni).toFixed(2))
} else if (age >= 65){
    priceOver65 = priceKm - priceKm * 0.4
    console.log('Prezzo finale del biglietto: €', parseFloat(priceOver65).toFixed(2))
} else
    console.log('Prezzo finale del biglietto: €', parseFloat(priceKm).toFixed(2))
