window.onload=(event)=>{

    document.getElementById("start").onclick = gameReset
    document.getElementById("end").addEventListener("mouseover",gameEnd)
    for(var i=0;i<document.getElementsByClassName("boundary").length;i++){
    document.getElementsByClassName("boundary")[i].addEventListener("mouseover",accident)
    }

var addition=5
var subtraction=-10
var total=0

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
    boundary[i].style.background="red"
     }
  document.getElementById("status").innerHTML="You Lost"
  total += subtraction
  setTimeout(function() {
    alert ("You Lost! Total points earned "+ total)
  },1)
   }


function gameEnd(){
  if (document.getElementById("status").innerHTML!="You Lost"){
    document.getElementById("status").innerHTML="You Won"
    total+= addition
  }
  var boundary=document.getElementsByClassName("boundary")
  for(var i=0;i<boundary.length;i++){
    boundary[i].style.background="green"
  }
  setTimeout(function(){
  alert ("You Won! Total points earned " + total)
  },1)
}

}