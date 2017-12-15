var createSlideshow = function(slideshowElem, duration) {
if (duration==null)
duration=5000;
slideshowElem.children("img").hide();
var pic = slideshowElem.children("img").first();
var length=slideshowElem.children("img").length;
pic.fadeIn();
var x=0;
setInterval(function(){pic.fadeOut(function(){
x++;
if(x==length){
pic=slideshowElem.children("img").first();
x=0;}
else
pic=pic.next();
pic.fadeIn();});},duration);};
$(document).ready(function() {
createSlideshow($(".slideshow"),2500);});