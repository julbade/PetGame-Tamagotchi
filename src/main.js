import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { pet } from './../src/hungrypet.js';

let foodLevelBar = pet.setHunger() ;
$(function(){
foodLevelBar = parseFloat($("#progress-bar").css("width")) + 1;

setInterval(function() {
$(".progress-bar").text(pet.foodLevel);
 $(".progress-bar").css("width", pet.foodLevel);
  if (pet.foodLevel <= 0)
  {
    $("#death").show();
    $("#game").hide();
  }
},100);
})

  $(document).ready(function() {
  $('#play').click(function(){
    pet.play("play");
    $(".progress-bar").text(pet.foodLevel);

  })

  $('#sleep').click(function() {
    pet.sleep("sleep");
    $(".progress-bar").text(pet.foodLevel);
  })

  $('#feed').click(function(){
    pet.feed("feed");
    $(".progress-bar").text(pet.foodLevel);
  })

  $('#hurt').click(function(){
    pet.hurt("hurt");
    $(".progress-bar").text(pet.foodLevel);
  })

  $('#walk').click(function(){
    pet.walk("walk");
    $(".progress-bar").text(pet.foodLevel);
  })
    console.log(pet.foodLevel);
});