let myMap = new Map()
let myAdmins = [];

myMap.set('Ricardo', 'user');
myMap.set('Julia', 'admin');
myMap.set('Maressa', 'admin');

function getAdmins(map){
    for([key, value] of map) {
        if(value === 'admin'){
            myAdmins.push(key)
        }
    }
    console.log(myAdmins)
}

getAdmins(myMap)