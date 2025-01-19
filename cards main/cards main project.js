var arr = [
  {name:"Kiyoko Hori", img:"https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:"strangers"},

  {name:"Omkar gaikwad", img:"https://images.unsplash.com/photo-1497290756760-23ac55edf36f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:"strangers"},

  {name:"Tanmay rale", img:"https://images.unsplash.com/photo-1622519407650-3df9883f76a5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:"strangers"}
]

var flag=0;

function chalprint (){
  var clutter="";

  arr.forEach(function(val,index){
     
    clutter+=` 
   
    <div id="card">
    
    <img src="${val.img}" alt="">
    
    <h1>${val.name}</h1>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam inventore modi repellat, rem nisi. Magni minus sed dolorem illum?</p>
    
    <button class ="${val.status==="strangers" ? "blue" : "red" }" id = "${index}">  ${val.status==="strangers" ? "Add Friend" : "Remove Friend"} </button>
    
    <h4 id = "${val.status}">${val.status}</h4>
   </div>`
  })
  
  document.querySelector("#main").innerHTML=clutter;
  
}

chalprint();

var abc = document.querySelector("#main")


abc.addEventListener("click", function (details) {
    if(flag==0){
      arr[details.target.id].status="Friends";
      chalprint();
      flag=1;
    }
    else{
      arr[details.target.id].status="strangers";
      chalprint();
      flag=1;
    } 
    
})