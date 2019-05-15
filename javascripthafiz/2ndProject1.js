function Hotel(name, rooms, stars){
  this.name=name;
  this.rooms=rooms;
  this.stars= stars;
};

var hotel1 = new Hotel (Royalton, 170, '&#127775; &#127775; &#127775; &#127775;' );
 var hotel2 = new Hotel(The Quin, 120, &#127775; &#127775;
  &#127775; &#127775; &#127775;);
var hotel3 = new Hotel(The Rossevelt, 250, &#127775; &#127775; &#127775;);
var hotel4= new Hotel(The Iroquois New York, 150, &#127775; &#127775;&#127775; &#127775; );
console.log(hotel1.name,hotel1.rooms,hotel1.stars);

// set up initial booked number for each hotel. assuming that booked initially=0

var bookedHotel1=0;
var bookedHotel2=0;
var bookedHotel3=0;
var bookedHotel4=0;

for (runs=0, runs<10; runs++){
  var randomNum = Math.floor((Math.random()*4)+1);
  console.log(randomNum);
  if(randomNum=1);
}
