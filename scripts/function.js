
function change(){
    var element = document.getElementById("my");
   
    element.style.backgroundColor = "green";
   
}

function change1(){
    var element = document.getElementById("id");
    element.style.backgroundColor = "green";
   
}



let blog=()=>{

    window.location.href="blog-1.html"
    console.log("yes")
}

document.getElementById("div-1").addEventListener("click",blog)


import {navbar ,footer} from '../commonarea/nav-foot.js'
document.getElementById("nav").innerHTML=navbar();

document.getElementById("footer").innerHTML=footer();


console.log("connect")