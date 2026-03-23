/*
Program name- Cura Cardiology Clinic patient form.html 
Name- Daisy Que
date created-2/24/2026
version 1.0-2/24/26, 2.0-2/25/26,
Description- This document will be the javascript portion of hw1 
NOTE: I used the TP resources from MISSO but I used my own variables 
*/
/* for date*/
const d= new Date ();
let text=d.toLocaleDateString();
document.getElementById("today").innerHTML=text;

/*for slider*/
let slider=document.getElementById("range")
let output=document.getElementById("range-scale")
output.innerHTML=slider.value;
slider.oninput=function() {output.innerHTML=this.value;};