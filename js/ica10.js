let my_var = 100;
var my_other_var = "hello world";
const this_is_a_constant = "constant";
console.log(my_other_var);
my_other_var += "!";


// how to interact with the DOM 

document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1");
    document.getElementById("my_head").innerHTML = "BON IVER";
    document.getElementById("paragraph").innerHTML = "this is now about Bon Iver's second studio album, 'bon iver'";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("image").src = "/img/Bon_iver.jpg";
})

console.log(document.getElementById("my_head").innerHTML);

document.getElementById("image").addEventListener("mouseenter", function(e){
    document.getElementById("image").src = "/img/logo.png";
})

document.getElementById("image").addEventListener("mouseleave", function(e){
    document.getElementById("image").src = "/img/Bon_iver.jpg";
})