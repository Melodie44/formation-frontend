var datas = require("./data/devfest-2015.js")
const readline = require('readline');

function listerTousLesPresentateurs(){
    return datas.speakers;
}
exports.listerTousLesPresentateurs = listerTousLesPresentateurs;

function listerToutesLesSessions(){
    return datas.sessions;
}
exports.listerToutesLesSessions = listerToutesLesSessions;

function trouverUneSession(idSession){
    var sessions = listerToutesLesSessions();
    return sessions.filter(s => s.id == idSession);
}
exports.trouverUneSession = trouverUneSession;

function listerTopPresentateurs(){
    var pres = listerTousLesPresentateurs();
    return pres.filter(p => p.topspeaker);
}
exports.listerTopPresentateurs = listerTopPresentateurs;

function afficherMenu(){

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.write("*** Application Conférence ***");
      rl.write("1. Liste de tous les présentateurs");
      rl.write("2. Top présentateurs");
      rl.write("3. Liste des sessions");
      rl.write("4. Détail d'une session");

      rl.question('', (answer) => {
          switch(answer){
              case 1 : console.log(listerTousLesPresentateurs()); break;
              case 2 : console.log(listerTopPresentateurs()); break;
              case 3 : console.log(listerToutesLesSessions()); break;
              case 4 : {
                rl.question('Id de la session recherchée: ', (answer2) =>{
                    console.log(trouverUneSession(answer2));
                  })
                  break;
              }
          }
      })
}