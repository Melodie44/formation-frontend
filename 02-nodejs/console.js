var service = require("./service.js");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.write("*** Application Conférence *** \n");
  rl.write("1. Liste de tous les présentateurs \n");
  rl.write("2. Top présentateurs \n");
  rl.write("3. Liste des sessions \n");
  rl.write("4. Détail d'une session \n");

  rl.question('', (answer) => {
      switch(answer){
          case "1" : service.listerTousLesPresentateurs().forEach((p) => {for(variable in p){console.log(variable, ": ",p[variable])}}); break;
          case "2" : service.listerTopPresentateurs().forEach((p) => {for(variable in p){console.log(variable, ": ",p[variable])}}); break;
          case "3" : service.listerToutesLesSessions().forEach((s) => {for(variable in s){console.log(variable, ": ",s[variable])}}); break;
          case "4" : {
            rl.question('Id de la session recherchée: ', (answer2) =>{
                console.log(service.trouverUneSession(answer2));
              })
              break;
          }
      }
      rl.close();        
  })