for (var i = 0; i <=10; i++) {

var i =  Math.round(Math.random()*4)+1);

function hotel1(name1, rooms1, booked1){
  this.name = name1;
  this.rooms = rooms1;
  this.booked = i;
  this.checkAvailability = function(){
    return this.rooms - this.booked;
  };

}

var user1 = new hotel1('Hilton', 20, 7 );

document.getElementById('hotel1').innerHTML=
'The name of the hotel: ' + user1.name +
'<br/>The total amount of rooms: '+user1.rooms +
'<br/>The number of booked rooms: '+user1.booked +
'<br/>The number of available rooms: '+ user1.checkAvailability();
}
