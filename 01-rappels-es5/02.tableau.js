var ville = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

ville.forEach( v => console.log(v));
console.log(ville.forEach(function(element, index, array){
    return element;
}));

console.log("lettreADansToutesLesVilles == ", ville.every(function(element, index, array){ 
    var patt = /a/; 
    return patt.test(element);
}));

console.log("auMoinsUneVilleAvecUnTiret == ", ville.some(function(element, index, array){ 
    var patt = /-/; 
    return patt.test(element);
}));

var villesSansTiretSansEspace = ville.filter(function(element, index, array){ 
    var patt = /-/; 
    var patt2 = / /;
    return !patt.test(element) && !patt2.test(element);
});
console.log("villesSansTiretSansEspace == ", villesSansTiretSansEspace);

// Chainer les fonctions
var villesMajusculeSeTerminantParS = ville.filter(function(element, index, array){
    return element.endsWith("s");
}).map(v => v.toUpperCase());
console.log("villesMajusculeSeTerminantParS = ", villesMajusculeSeTerminantParS);