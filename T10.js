//  ex 1 

for (let nombre = 1; nombre <= 20; nombre++) 
    if (nombre % 2 === 0) 
        console.log(nombre); 

// ex 2 

let some = 0;
for (let nombre = 1; nombre <= 10; nombre++){
    some += nombre;
}
console.log(some);

// ex 3

let some2 = 0;
let compteur = 0;
for (let nombre = 1; nombre <= 20; nombre++){
    if (nombre % 2 === 0){
        some2 += nombre ;
        compteur++;
    }
}
console.log("Somme des pairs : " + some2);
console.log("Nombre de nombres : " + compteur);