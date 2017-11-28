$(document).ready(function(){
    $("#evSlide").carousel();
    $(".left").click(function(){
        $("#evSlide").carousel("prev");
    });
    $(".right").click(function(){
        $("#evSlide").carousel("next");
    });
});
var srcbox = document.getElementById('srcbox');
var src = document.getElementById("src");
var srcS = document.getElementById("srcSub");
var close = document.getElementsByClassName("close")[0];
var menu = document.getElementById('menu');
var xMenu = document.getElementById("xMenu");
var xClose = document.getElementsByClassName("xClose")[0];
src.onclick = function() {
    srcbox.style.display = "block";
}
srcS.onclick = function() {
    srcbox.style.display = "none";
}
close.onclick = function() {
    srcbox.style.display = "none";
}
menu.onclick = function() {
    xMenu.style.display = "block";
}
xClose.onclick = function() {
    xMenu.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == srcbox) {
        srcbox.style.display = "none";
    }
}