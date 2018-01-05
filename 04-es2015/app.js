// let
let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

// const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);

/*citiesId = [""];
console.log(citiesId);*/

citiesId.push("tokyo");
console.log(citiesId);

// Création d'objet
function getWeather(cityId){
    var city = citiesId.filter(c => c == cityId).map(c => c.toUpperCase()).toString();
    var temperature = 20;

    return {city, temperature};
}
const weather = getWeather(favoriteCityId);
console.log("Object ", weather);

// Affectation destructurée
const {city, temperature} = weather
console.log(city);
console.log(temperature);

// Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

// Classe
class Trip{
    constructor(id, name, imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price(){
        return this._price;
    }

    set price(newPrice){
        this._price = newPrice;
    }

    static getDefaultTrip(){

        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }

    toString(){
        return "Trip ["+this.id+", "+this.name+", "+this.imageUrl+", "+this._price+"]";
    }
}
var parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());
parisTrip.price = 100;
console.log(parisTrip.toString());
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

// Héritage
class FreeTrip extends Trip{
    constructor(id, name, imageUrl){
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString(){
        return "Free"+super.toString();
    }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nanges.jpg");
console.log(freeTrip.toString());

// promise, set, map, arrow function
class TripService {
    constructor() {
    // TODO Set of 3 trips
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }
    findByName(tripName) {
    // TODO return promise

        var tripsA = Array.from(this.trips);
        var trip = tripsA.filter(t => t.name == tripName);

        return new Promise(function(resolve, reject){
            setTimeout(function(){
                if(trip != null){
                    resolve(trip[0]);
                }else{
                    reject("No trip with name "+tripName);
                }
            }, 2000);
        })
    }
}
class PriceService {
    constructor() {
    // TODO Map of 2 trips
        this.prices = new Map();
        this.prices.set('price', 100);
        this.prices.set('rio-de-janeiro', 800);
    }
    findPriceByTripId(tripId) {
    // TODO return promise

        var price = this.prices.get(tripId);    

        return new Promise(function(resolve, reject){
            setTimeout(function(){

                if(price != null){
                    resolve(price);
                }else{
                    reject("No price found for id "+tripId);
                }
            }, 2000);
        });
    }
}
var tripService = new TripService();
var priceService = new PriceService();
tripService.findByName('Paris')
           .then(function(trip){
                console.log("Trip found : "+trip);
            }, function(erreur){
                console.log(erreur);
            }
        );
priceService.findPriceByTripId('Toulouse')
            .then(function(price){
                console.log(price);
            }, function(erreur){
                console.log(erreur);
            }
        );

tripService.findByName('Rio de Janeiro')
           .then(function(trip){
                return priceService.findPriceByTripId(trip.id)         
           }, function(erreur){
            console.log(erreur);

        }).then(function(price){
            console.log("Price found : " + price);
        }, function(erreur){
            console.log(erreur);

        });

tripService.findByName('Nantes')
        .then(function(trip){
             return priceService.findPriceByTripId(trip.id)         
        }, function(erreur){
         console.log(erreur);

     }).then(function(price){
         console.log("Price found : " + price);
     }, function(erreur){
         console.log(erreur);

     });