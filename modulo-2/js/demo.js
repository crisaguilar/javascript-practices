 //Parte 1

// var hotel = {
//   name: "Cerro de Hijar",
//   location: "Tolox",
//   img:
//     "https://static.booking.weekendesk.fr/image_cache/A955000/955142/955142_640_360_FSImage_1_EDIT_front1.jpg",
// };

// document.getElementById("hotelName").innerHTML = "Hotel " + hotel.name;
// document.getElementById("hotelLocation").innerHTML =
//   "Ubicado en " + hotel.location;
// document.getElementById("image").src = hotel.img;

// var rating = prompt("Puntue del 1 al 5");

// document.getElementById("score").innerHTML = rating + " Estrellas";

// var anonymous = confirm("¿Te gustaría que la respuesta fuera anonima?")
// document.getElementById("anonymous").checked = anonymous

// Parte 2


var hotels = {
"Cerro de hijar": {
  name: "Cerro de hijar",
  location: "Tolox",
  img: "https://static.booking.weekendesk.fr/image_cache/A955000/955142/955142_640_360_FSImage_1_EDIT_front1.jpg", 
},
"h10" : {
  name: "h10",
  location: "Málaga",
  img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/387177197.jpg?k=51fc4336bb67ed366eb2d872e2c53d9e5ed745056d51d36e692787e17f76bae3&o=&hp=1",
},
"Puente Romano" :{
  name: "Puente Romano",
  location: "Marbella",
  img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/47/ef/50/sea-grill-swimming-pool.jpg?w=700&h=-1&s=1",
},};

var selectedHotel = prompt("Le gustaría puntuar el hotel Cerro de hijar, h10 o Puente Romano? ");

document.getElementById("hotelName").innerHTML =
  "Hotel " + hotels[selectedHotel].name;

document.getElementById("hotelLocation").innerHTML =
"Ubicado en " + hotels[selectedHotel].location;

document.getElementById("image").src = hotels[selectedHotel].img;


var stars = {
una: 
"<span>&#9733</span> <span>&#9734</span> <span>&#9734</span> <span>&#9734</span> <span>&#9734</span>",
dos:
"<span>&#9733</span> <span>&#9733</span> <span>&#9734</span> <span>&#9734</span> <span>&#9734</span>",
tres: 
"<span>&#9733</span> <span>&#9733</span> <span>&#9733</span> <span>&#9734</span> <span>&#9734</span>",
cuatro: 
"<span>&#9733</span> <span>&#9733</span> <span>&#9733</span> <span>&#9733</span> <span>&#9734</span>",
cinco:
  "<span>&#9733</span> <span>&#9733</span> <span>&#9733</span> <span>&#9733</span> <span>&#9733</span>",
}

var rating = prompt("Puntue el hotel con una, dos, tres cuatro o cinco estrrellas");

document.getElementById("score").innerHTML = stars[rating];

var anonymous = confirm("¿Te gustaría que la respuesta fuera anonima?")
document.getElementById("anonymous").checked = anonymous

