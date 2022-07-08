let person1 = {
    name: 'Olivia',
    age: 20
}

let person2 = {
    name: 'Ricardo',
    age: 24
}

function calcAge(years){
    return console.log(`Daqui a ${years} anos, ${this.name} terá ${
		this.age + years
	} anos de idade.`)
}

calcAge.call(person1, 8)
calcAge.call(person2, 8)

calcAge.apply(person1, [8])
calcAge.apply(person2, [8])