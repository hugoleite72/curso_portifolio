"use strict";

var switchText = document.getElementById("faq");  
var elToggled = document.getElementById("lad");  
elToggled.style.display = "none";  
switchText.addEventListener("click", function(){  
    if(elToggled.style.display == "none") {  
        elToggled.style.display = "block";  
    } else {  
        elToggled.style.display = "none";  
    }  
}, false);  




    