
// for (let i = 0; i < 10; i++) {

     

//      if (i==5){
//           continue;
//      }

//      if (i==2){
//           break;
//      }
     
//      console.log(i);

     

// }


let lista2= ["Diana","Andrea","Dayana"];
let lista= ["Miguel","Diego",lista2,"loza"];

// for (let i=0; i < lista.length; i++) {

//        if(lista[i] == "Diego" || lista[i] == "Miguel"){

//           continue;
//        } 

//        console.log(lista[i]);


// }

// for (let i=0; i < lista.length; i++) {

//      if(typeof lista[i] == "object"){

//         for (let chicas of lista[i]){

//           console.log(`Chicas en el diplomado ${chicas}`)
//         }
//      } 

//      console.log(lista[i]);


// }


let lista_chicas= ["Diana","Andrea","Dayana"];
let lista_chicos = ["Miguel","Diego",lista_chicas,"loza"];

for (let chicos in lista_chicos) {

       if(typeof lista_chicos[chicos] == "object"){

          for (let chicas of lista_chicos[chicos]){

               console.log(`Chicas en el diplomado ${chicas}`);
          }

       } 

       console.log(lista_chicos[chicos]);


}

for (let i=0; i < lista.length; i++) {

     if(typeof lista[i] == "object"){

        for (let chicas of lista[i]){

          console.log(`Chicas en el diplomado ${chicas}`)
        }
     } 

     console.log(lista[i]);


}


let animeles_aerios = ["Agila", "Paloma", "Loro", "Colibri"];
let animeles_terrestres = ["Perro", "Gato", "Vaca", "Raton"];
let animeles_acuticos = ["Pez", "Trucha", "Salmon", "Delfin"];


cliclo_aerios:
for(let aerios of animeles_aerios){
    cliclo_terrestres:
    for(let terrestres of animeles_terrestres){
            cliclo_acuaticos:
            for(let acuticos of animeles_acuticos){
                console.count();
                // break cliclo_acuaticos;
                console.log(`Animales Acuticos: ${acuticos}`);
            }
        break cliclo_terrestres;
        console.log(`Animales Terrestres: ${terrestres}`);
    }
    break cliclo_aerios;
    console.log(`Animales Aerios: ${aerios}`);
}






