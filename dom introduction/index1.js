var btn = document.querySelector("button");
var lal= document.querySelector("h2")

btn.addEventListener("dblclick",function(){
  var h1= document.querySelector("h1");
  h1.style.color="red";
  h1.style.backgroundColor="black"
  alert("you have clicked button twice");
})

lal.addEventListener("mouseover", function(){
  var h2 = document.querySelector("h2");
  h2.style.color="purple";
})