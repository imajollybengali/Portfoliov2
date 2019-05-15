$(document).ready(function(){

$('#text2').hide();
$('#text3').hide();

$("#tab1").click(function(){
  $("#text1").show('fast');
  $("#text2").hide();
  $("#text3").hide();
});

$("#tab2").click(function(){
  $("#text2").show('fast');
  $("#text3").hide();
  $("#text1").hide();
});

$("#tab3").click(function(){
  $("#text3").show('fast');
  $("#text1").hide();
  $("#text2").hide();
});

});
