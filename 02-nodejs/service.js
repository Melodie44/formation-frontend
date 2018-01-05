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

