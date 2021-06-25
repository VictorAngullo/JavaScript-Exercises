const houses = [];

var gryffindor = {
    houseName: "Gryffindor",
    founder: "Godric Gryffindor",
    members: [
        "Harry Potter",
        "Hermione Granger",
        "Ron Weasley",
        "Neville Longbottom",
    ],
};

var hufflepuff = {
    houseName: "Hufflepuff",
    founder: "Helga Hufflepuff",
    members: [
        "Cedric Diggory",
        "Justin Finch-Fletchley",
        "Pomona Sprout",
        "Silvanus Kettleburn",
    ],
};

var ravenclaw = {
    houseName: "Ravenclaw",
    founder: "Rowena Ravenclaw",
    members: [
        "Luna Lovegood",
        "Cho Chang",
        "Gilderoy Lockhart",
        "Garrick Ollivander",
    ],
};

var slytherin = {
    houseName: "Slytherin",
    founder: "Salazar Slytherin",
    members: ["Draco Malfoy", "Severus Snape", "Tom Ryddle", "Severus Snape"],
};

var newMembers = [
    {
        houseName: "Gryffindor",
        name: "Manuel Carrillo",
    },
    {
        houseName: "Hufflepuff",
        name: "Antonio García",
    },
    {
        houseName: "Ravenclaw",
        name: "Yeray Castillo",
    },
    {
        houseName: "Slytherin",
        name: "Pablo Mendez",
    },
    {
        houseName: "Hufflepuff",
        name: "Adriana Rodríguez",
    },
    {
        houseName: "Gryffindor",
        name: "Miguel Huerta",
    },
    {
        houseName: "Slytherin",
        name: "Loreto Diaz",
    },
    {
        houseName: "Ravenclaw",
        name: "Victor Angullo",
    },
];


var school = {
    name: "Howarts",
    createHouse: function () {
        var house = {};
        house.name = this.houseName;
        house.members = this.members;
        return house;
    },
};

// ---- Solo puedes programar a partir de aquí ----

function createHouse(house) {
    return school.createHouse.call(house);
}

function addHouses() {
    for (var house of arguments) {
        houses.push(house);
    }
}

function searchCharacter(initialLetter) {
    var result = [];

    for (var house of houses) {
        for (var member of house.members) {
            if(member[0] === initialLetter) {
                result.push(member)
            }
        }
    }

    console.log('Magos que empiezan con ' + initialLetter + ': ', result)
    return result;
}

function addMember(member) {
    // Recibe 1 miembro.

    // Busca la casa correspondiente (iterando sobre houses)

    // Si House coincide con member.houseName, añade la casa

    for (var i = 0; i < houses.length; i++) {
        if(houses[i].name === member.houseName) {
            houses[i].members.push(member.name);
        }
    }
}

function addFounder(house) {
    // code here

    // Busca la casa correspondiente (iterando sobre houses)

    // Si House coincide con member.name, añade house.founder

    for (var i = 0; i < houses.length; i++) {
        if(houses[i].name === house.houseName) {
            houses[i].founder = house.founder;
        }
    }
}

// Iteration 1 - Your code here
var g = createHouse(gryffindor);
var h = createHouse(hufflepuff);
var s = createHouse(slytherin);
var r = createHouse(ravenclaw);

// Iteration 2 - Your code here
addHouses(g, h, s, r);

// Iteration 3 - Your code here
searchCharacter('G');
searchCharacter('H');
searchCharacter('C');


// Iteration 4 - Your code here
for (var member of newMembers) {
    addMember(member); // {name: 'Victor', houseName: 'Gryffindor'}
}

// Iteration 5 - Your code here
// Llamar a addFounder(gryffindor)
addFounder(gryffindor);
addFounder(slytherin);
addFounder(hufflepuff);
addFounder(ravenclaw);

console.log(houses);
