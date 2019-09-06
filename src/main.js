import { Galactica } from './galactica.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputtedAge = $("input#userage").val();
    var newGalactica = new Galactica (inputtedAge);
     $("#mars-age").text(newGalactica.marsAge());
     $("#venus-age").text(newGalactica.venusAge());
     $("#mercury-age").text(newGalactica.mercuryAge());
     $("#jupiter-age").text(newGalactica.jupiterAge());
     $("#left-mars").text(newGalactica.leftMarsAge());
     $("#left-mercury").text(newGalactica.leftMercuryAge());
     $("#left-venus").text(newGalactica.leftVenusAge());
     $("#left-jupiter").text(newGalactica.leftJupiterAge());
     $("#surpassed").text("You've surpassed the average life expectancy " + newGalactica.surpassedAge() + " years.Good Job!");
     $("#leftAgeEarth").text("You've " + newGalactica.leftAgeEarth() + " years to live!Good Lock!");
  });
});
