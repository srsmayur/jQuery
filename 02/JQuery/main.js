function alertme(){
    alert("me")
}
$(document).ready(function(){

    alert("On Fire");

    var el = document.getElementById('text');

    console.log("EL in vanilla JS:",el);

    console.log("EL in jQuery:",$(el));

    document.getElementById('go-button').addEventListener('click',alertme);






});