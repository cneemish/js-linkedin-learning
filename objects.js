var emptyObject = {};
console.log(emptyObject);

var building = {
    name : `Taj Mahal`,
    city : `Agra`,
    areaSqft: 100000,
    isItOpen: true
}

console.log(building);

building.name = 'Church gate';
building.city = 'Mumbai';
building.isItOpen =false;
console.log(building);

building['name'] = 'National park';
building['city'] = 'borivali';
building['areaSqft'] = '2000 acrs';
building['isItOpen'] = "Closed on Monday";
console.log(building);

Object.assign(building, {name: 'Statue of Unity', city: 'Ahembdabad', isItOpen: true});
console.log(building);

let building2 = building;
console.log(building2);

building2.name = 'vasai fort';
building2['city'] = 'Vasai';
building2.isItOpen = true;
console.log(building2);

const cosntentstackKeys = {
    api_key: 'bltf77b53f0d68a90f1',
    access_token: '',
    delivery_token: '',
    environment: 'Production'
}

console.log(cosntentstackKeys.environment);

let contentstackKeys2 = cosntentstackKeys;

contentstackKeys2.api_key ='bltb9190ab51259fa07';
console.log(contentstackKeys2); 

building2 = Object.assign({},building);
building2 = JSON.parse(JSON.stringify(building));
console.log(building2);
/* cosntentstackKeys.api_key = bltf77b53f0d68a90f1;
console.log(cosntentstackKeys); */
 