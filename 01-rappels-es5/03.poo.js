function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return this.nom+" "+this.prenom+" "+this.pseudo;
    }
}

var jules = new Personne("LEMAIRE", "jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

function afficherPersonne(personne){
    for( variable in personne){
        if(variable != "getNomComplet" && variable != "getInfos"){
            console.log(personne[variable]);
        }else{
            console.log(personne[variable]());
        }
    }
}
afficherPersonne(paul);

jules.pseudo = "jules44";
console.log(jules.getNomComplet());

console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);

jules.age = 30;
console.log(jules.age);

Personne.prototype.getInitiales = function(){ return this.prenom.charAt(0)+this.nom.charAt(0);};
console.log(jules.getInitiales());

var robert = {prenom:"Robert", nom:"LEPREFET", pseudo:"robert77", getNomComplet: function(){return nom+" "+prenom+" "+pseudo}};
//afficherPersonne(robert);

function Client(nom, prenom, pseudo, numero){
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numero;
    this.getInfos = function(){
        return this.numeroClient+" "+this.nom+" "+this.prenom;
    };
}

var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());

