window.onload=(event)=>{

    document.getElementById("start").onclick = gameReset
    document.getElementById("end").addEventListener("mouseover",gameEnd)
    for(var i=0;i<document.getElementsByClassName("boundary").length;i++){
    document.getElementsByClassName("boundary")[i].addEventListener("mouseover",accident)
    }



function gameReset() {
     var boundary=document.getElementsByClassName("boundary")
   for(var i=0;i<boundary.length;i++){
     boundary[i].style.background="#eeeeee"
   }
}

function accident() {
    var boundary=document.getElementsByClassName("boundary")
  for(var i=0;i<boundary.length;i++){
    boundary[i].style.background="red"
     }
  document.getElementById("status").innerHTML="You Lost"
   }


function gameEnd(){
    document.getElementById("status").innerHTML="You Win"
}

}