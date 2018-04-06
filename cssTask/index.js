/*jslint browser: true*/
/*global $, jQuery, console, alert*/

var innercircle = document.getElementById("inner-circle");
var button = document.getElementById("button");

innercircle.onclick= function(){
    innercircle.classList.add("clicked");
}

button.onclick= function(){
    document.getElementById("container").classList.add('animated' , 'bounce');
    innercircle.classList.add('moveAround');
    
}
