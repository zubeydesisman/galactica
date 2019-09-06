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

  });
});
