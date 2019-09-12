function Hotel(name, rooms){
  this.name=name;
  this.rooms=rooms;
};

var hotel1 = new Hotel('Hilton', 100);
var hotel2 = new Hotel('Sheraton', 75);
var hotel3 = new Hotel('Marriott', 50);
var hotel4=  new Hotel('Holiday Inn', 25);

var bookedHotel1=0;
var bookedHotel2=0;
var bookedHotel3=0;
var bookedHotel4=0;

for (i=1; i<11; i++){
  var randomNum = Math.floor((Math.random()*4)+1);
  console.log(randomNum);
  if(randomNum==1){
    bookedHotel1++;
  }
  else if (randomNum==2){
    bookedHotel2++;
  }
  else if (randomNum==3){
    bookedHotel3++;
  }
  else {
    bookedHotel4++;
  }
}

var available1 = hotel1.rooms-bookedHotel1;
var available2 = hotel2.rooms-bookedHotel2;
var available3 = hotel3.rooms-bookedHotel3;
var available4 = hotel4.rooms-bookedHotel4;

var a = document.createElement("IMG"),
    b = document.createElement("IMG");
    c = document.createElement("IMG");
    d = document.createElement("IMG");

    a.setAttribute("src", "images/hotel1.jpeg");
    b.setAttribute("src", "images/sheraton.jpeg");
    c.setAttribute("src", "images/marriott.jpeg");
    d.setAttribute("src", "images/holiday inn.jpeg");


document.getElementById('hotel1').innerHTML = "The name of the Hotel is: " + hotel1.name + "<br/>The total amount of rooms is: " + hotel1.rooms + "<br/>The number of booked rooms is: " + bookedHotel1 + "<br/>The number of available rooms is: " + available1 + "<br/>Hotel rating: "+ "&#x2605" + "&#x2605" + "&#x2605" + "&#x2605" + "&#x2605" +'<br/>' + '<br/>';
document.getElementById('hotel1').appendChild(a);

document.getElementById('hotel2').innerHTML= "The name of the Hotel is: " + hotel2.name + "<br/>The total amount of rooms is: " + hotel2.rooms + "<br/>The number of booked rooms is: " + bookedHotel2 + "<br/>The number of available rooms is: " + available2 + "<br/>Hotel rating: "+ "&#x2605" + "&#x2605" + "&#x2605" + "&#x2605" +'<br/>'+'<br/>';
document.getElementById('hotel2').appendChild(b);

document.getElementById('hotel3').innerHTML= "The name of the Hotel is: " + hotel3.name + "<br/>The total amount of rooms is: " + hotel3.rooms + "<br/>The number of booked rooms is: " + bookedHotel3 + "<br/>The number of available rooms is: " + available3 + "<br/>Hotel rating: "+ "&#x2605" + "&#x2605" + "&#x2605" + "&#x2605" +'<br/>'+'<br/>';
document.getElementById('hotel3').appendChild(c);

document.getElementById('hotel4').innerHTML= "The name of the Hotel is: " + hotel4.name + "<br/>The total amount of rooms is: " + hotel4.rooms + "<br/>The number of booked rooms is: " + bookedHotel4 + "<br/>The number of available rooms is: " + available4 + "<br/>Hotel rating: "+ "&#x2605" + "&#x2605" + "&#x2605" + "&#x2605" +'<br/>'+'<br/>';
document.getElementById('hotel4').appendChild(d);


var msg = '<div class="header"><a id="close" href="#">Close X</a><div>';
msg+='<div id="msgNote"><h2>Attention!</h2>';
msg+= '<hr/>Stay with us for 4 nights get 3 nights free!<br/>';
msg += 'Happy Travels! </div>' ;

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;

document.body.appendChild(elNote);

function dismissNote(){
  document.body.removeChild(elNote);
}
var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);
