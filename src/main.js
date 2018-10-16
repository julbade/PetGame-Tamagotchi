import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { pet } from './../src/hungrypet.js';

let funLevelBar = pet.setFun() ;
let sleepLevelBar = pet.setSleep();
let foodLevelBar = pet.setHunger();

$(function(){
  funLevelBar = parseFloat($(".progress-bar").css("width")) + 1;
  sleepLevelBar = parseFloat($(".progress-bar").css("width")) + 1;
  foodLevelBar = parseFloat($(".progress-bar").css("width")) + 1;
  setInterval(function() {
    $("#fun-progress").text(pet.funLevel);
    $("#fun-progress").css("width", pet.funLevel);
    if (pet.funLevel <= 0)
    {
      $("#death").show();
      $("#game").hide();
    }
  },1000);

  setInterval(function() {
    $("#sleep-progress").text(pet.sleepLevel);
    $("#sleep-progress").css("width", pet.sleepLevel);
    if (pet.sleepLevel <= 0)
    {
      $("#death").show();
      $("#game").hide();
    }
  },850);

  setInterval(function() {
    $("#food-progress").text(pet.foodLevel);
    $("#food-progress").css("width", pet.foodLevel);
    if (pet.foodLevel <= 0)
    {
      $("#death").show();
      $("#game").hide();
    }
  },750);
});

$(document).ready(function() {
  var count = 0
  $('#play').click(function(){
    count++;
    pet.interact("play");
    $("#fun-progress").text(pet.funLevel);
    $("#score").html("Your score is: "+ count);
  });

  $('#sleep').click(function() {
    count++;
    pet.sleep("sleep");
    $("#sleep-progress").text(pet.sleepLevel);
    $("#score").html("Your score is: "+ count);

  });

  $('#feed').click(function(){
    count++;
    pet.feed("feed");
    $("#food-progress").text(pet.foodLevel);
    $("#score").html("Your score is: "+ count);

  });
});
