// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

function getRandomAvailability(myTeam) {
  let getRandom = () => Math.random() < 0.5;
  for (people of myTeam) {
    for (let i = 0; i < people.availability.length; i++) {
      people.availability[i] = getRandom();
    }
  }
  return people.availability;
}
getRandomAvailability(myTeam);

function getAgenda(myTeam, WORK_HOURS) {
  for (people of myTeam) {
    console.log(" Disponibilidad de " + people.name);
    for (let i = 0; i < WORK_HOURS.length; i++) {
      console.log(WORK_HOURS[i] + " " + (people.availability[i] ? "Si" : "No"));
    }
  }
}
getAgenda(myTeam, WORK_HOURS);

function comunSlot(WORK_HOURS, myTeam) {
  let slotFound = false;
  for (let i = 0; i < WORK_HOURS.length; i++) {
    let confirmation = true;
    for (people of myTeam) {
      confirmation = confirmation && people.availability[i];
    }
    if (confirmation) {
      console.log("Hueco encontrado en el horario " + WORK_HOURS[i]);
      slotFound = true;
    }
  }
  if (!slotFound) {
    console.log("No he encontrado ningun hueco.");
  }
}

comunSlot(WORK_HOURS, myTeam);
