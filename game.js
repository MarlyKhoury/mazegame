
window.onload=(event)=>{

    document.getElementById("start").addEventListener("mouseover",startAgain)
    document.getElementById("start").onclick = gameReset
    document.getElementById("end").addEventListener("mouseover",gameEnd)
    document.getElementById("game").addEventListener("mouseleave",cheating)    
    for(var i=0;i<document.getElementsByClassName("boundary").length;i++){
      document.getElementsByClassName("boundary")[i].addEventListener("mouseover",accident)    
    }
     
   

var addition=5
var subtraction=-10
var total=0
var out_bound=false


function gameReset() {
     var boundary=document.getElementsByClassName("boundary")
   for(var i=0;i<boundary.length;i++){
     boundary[i].style.background="#eeeeee"
   }
   document.getElementById("status").innerHTML='Begin by moving your mouse over the "S."'
   total= 0

}

function accident() {
    var boundary=document.getElementsByClassName("boundary")
  for(var i=0;i<boundary.length;i++){
    boundary[i].style.background="#ff8888"   
     }
  
  document.getElementById("status").innerHTML="You Lost"
  total += subtraction
  setTimeout(function() {
    alert ("You Lost! Total points earned "+ total)
  },1)

}

function gameEnd(){
  if ((document.getElementById("status").innerHTML!="You Lost")&&(out_bound==false)){
      document.getElementById("status").innerHTML="You Won"
      total+= addition 
  
      var boundary=document.getElementsByClassName("boundary")
      for(var i=0;i<boundary.length;i++){
        boundary[i].style.background="#88ff88"
      }
        setTimeout(function(){
          alert ("You Won! Total points earned " + total)
        },1)

    }
  
  else {document.getElementById("status").innerHTML="Nice Try"}

}


function startAgain(){
  var boundary= document.getElementsByClassName("boundary")
  for (var i=0; i<boundary.length;i++){
    boundary[i].style.background="#eeeeee"
  }
  document.getElementById("status").innerHTML='Begin by moving your mouse over the "S."'
  out_bound=false

}


function cheating(){
  out_bound=true
  
}



}
