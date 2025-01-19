var btn = document.querySelector("button")
var h4 =  document.querySelector("h4")


var flag=0

btn.addEventListener("click",function(){
  if(flag==0)
  {
    h4.innerHTML="FRIENDS"
    h4.style.color="lightgreen"
    btn.innerHTML="REMOVE FRIEND"
    flag=1;
  }
  else
  {
    h4.innerHTML="STRANGERS"
    h4.style.color="RED"
    btn.innerHTML="ADD FRIEND"
    flag=1;
  }
  
})