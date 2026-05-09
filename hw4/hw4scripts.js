/*
Program name- Cura Cardiology Clinic patient form.html 
Name- Daisy Que
date created-5/8/2026
Description- This document will be the javascript portion of hw4
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

function validateFname(){
   fname= document.getElementById("fname").value.trim();
   var namePattern = /^[a-zA-Z'-]+$/;
   if(fname == ""){
      document.getElementById("Fname-error").innerHTML= "First name can't be empty";
      return false;
   } else if (fname != ""){
      if (!fname.match(namePattern)){ //sees if first name matches pattern//
      document.getElementById("Fname-error").innerHTML="only include letters, apostrophes, and dashes";
      return false;
   } else if (fname.length<2){
      document.getElementById("Fname-error").innerHTML = "First name can't be less than 2 characters";
      return false;
   } else if (fname.length>30){ 
      document.getElementById("Fname-error").innerHTML= "First name can't be more than 30 characters";
      return false;
   } else{
      document.getElementById("Fname-error").innerHTML="";
      return true;
   }
}
}
function validatemini(){
   let mini= document.getElementById("mini").value;
   const namePattern = /^[A-Z]$/;
   mini= mini.toUpperCase();
   document.getElementById("mini").value = mini;
   
   if(!mini.match(namePattern)){
      document.getElementById("mini-error").innerHTML= "Middle initial can only be a single uppercase letter";
      return false; 
  
   } else{
      document.getElementById("mini-error").innerHTML="";
      return true;
   }
}
function validateLname(){
   lname= document.getElementById("lname").value.trim();
   var namePattern = /^[a-zA-Z'-]+$/;
   if(lname == ""){
      document.getElementById("Lname-error").innerHTML= "Last name can't be empty";
      return false;
   } else if (lname != ""){
      if (!lname.match(namePattern)){ //sees if first name matches pattern//
      document.getElementById("Lname-error").innerHTML="only include letters, apostrophes, and dashes";
      return false;
   } else if (lname.length<2){
      document.getElementById("Lname-error").innerHTML = "Last name can't be less than 2 characters";
      return false;
   } else if (lname.length>30){ 
      document.getElementById("Lname-error").innerHTML= "First name can't be more than 30 characters";
      return false;
   } else{
      document.getElementById("Lname-error").innerHTML="";
      return true;
   }
}
}

function validateDOB()
{
 const DOBInput=document.getElementById("DOB").innerHTML;
 const DOB=DOBInput.valueOf;  //.value 
 let date=new Date(DOB.valueOf);
 let maxDate=new Date().setFullYear(new Date()-120);

 if(date>newDate()) /*validating DOb, cant figure out why it doesnt work */{
   document.getElementById("DOB-error").innerHTML="Date can't be in the future"
   DOB.value="";
   return false;
 } else if(date<new Date(maxDate))
    {document.getElementById("DOB-error").innerHTML="Date can't be more than 120 years ago"
     DOB.value="";
     return false;
    } else{
        document.getElementById("DOB-error").innerHTML="";
     return true;
    }
}
 
function validateSSN()/*validating SSN*/
{    
const SSN=document.getElementById("SSN").innerHTML//value;
const SSNR=/^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/; /* got this from TP resource*/
if(!SSNR.test(SSN))
 {
    document.getElementById("SSN-error").innerHTML="Enter a valid SSN"
    return false;
 } else{
    document.getElementById("SSN-error").innerHTML="";
    return true;
 }

}

function validateAddress1(){ /*doesnt work, dont know why come back*/
    var ad1=document.getElementById("address1").innerHTML//value;
    console.log(ad1);
    console.log(ad1.length);
    if(ad1.length<2){
        document.getElementById("address1-error").innerHTML="Enter your address on this line";
        return false;
 }else{
    document.getElementById("address1-error").innerHTML="";
    return true;
 }
    
}

function validateCity(){
   city = document.getElementById("city").value.trim();
   if(!city){
      document.getElementById("City-error").innerHTML= "City can't be blank";
      return false;
   }else{
      document.getElementById("City-error").innerHTML= "";
      return true;
   }
}

function validateZipcode(){ /*validate zip*/
const zipInput=document.getElementById("zipcode");
let zip=zipInput.value.replace(/[^\d-]/g,"")
if(!zip){
    document.getElementById("zipcode-error").innerHTML="can't leave zipcode blank";
    return false;
}
if(zip.length>5){
    zip=zip.slice(0,5);
}
zipInput.value=zip;
document.getElementById("zipcode-error").innerHTML="";
return true;
}

function validateEmail(){
const EmailInput=document.getElementById("email");//value;
const Email= EmailInput.value.replace(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);//regex pattern//
if(Email==""){
    document.getElementById("email-error").innerHTML="email line can't be empty";
    return false;
}else if(!Email.match(Email)){
    document.getElementById("email-error").innerHTML="enter a valid email";
    return false;
}else{
    document.getElementById("email-error").innerHTML="";
    return true;
}

}

function validatePhnum(){
    const phoneInput=document.getElementById("phnum");
    const phone=phoneInput.value.replace(/\D/g,"");
    if(phone.length !==10){
        document.getElementById("phnum-error").innerHTML="Phone number can't be blank";
        return false;
    }
    const formattedPhone=phone.slice(0,3)+"-"+phone.slice(6);
    phoneInput.vale=formattedPhone;
    document.getElementById("phnum-error").innerHTML="";
    return true;
}

function validateusename(){ //validate username
 usename=document.getElementById("usename").innerHTML;
 usename=usename.toLowerCase();
 document.getElementById("usename").value=usename;
 if(usename.length==0){
    document.getElementById("usename-error").innerHTML="username can't be empty";
    return false;
 } 
 if (!isNaN(usename.charAt(0))){
    document.getElementById("usename-error").innerHTML="username can't begin with a number";
    return false;
 }  
 let regex=/^[a-zA-Z0-9-]+$/;
 if(!regex.test(usename)){
    document.getElementById("usename-error").innerHTML="username can only have letters, numbers, or underscores";
    return false;
 }else if(usename.length<5){
   document.getElementById("usename-error").innerHTML="username must be at least 5 characters";

 }
 
 else if(usename.length>30){
    document.getElementById("usename=error").innerHTML="username can't exceed 30 characters";
    return false;
 }else{
    document.getElementById("usename-error").innerHTML="";
    return true;
 }
}
 
function validatepasword(){
 const pasword=document.getElementById("pasword-error").value;
 const usename=document.getElementById("usename-error").value;
 const errorMessage=[];
 if (pasword.match(/[a-z]/)){
    errorMessage.push("enter at least one lowercase letter");
 }

 if (pasword.match(/[A-Z]/)){
    errorMessage.push("enter at least one uppercase letter");
 }

 if (pasword.match(/[0-0]/)){
    errorMessage.push("enter at least one number");
 }

 if (pasword.match((/[!\@#\$%&*\-_\\.+\(\)]/)))
    errorMessage.push("enter at least one special character");
 }
  
if (pasword==usename|| pasword.includes(usename)){ //check to see if unamee isnt in passsword//
    errorMessage.push("password can't contain username");
}

const errorContainer=document.querySelector(".pasword-message");
errorContainer.innerHTML= 'errorMesssage'
.map((message)=> '<span>($message)</span><br/>')
.join("");
     

function confirmpasword(){
    pasword1=document.getElementById("cpasword").value;
    pasword2=document.getElementById("cpasword").value;
  if(pasword1 !== pasword2){
       document.getElementById("pasword2-error").innerHTML="passwords don't match";
       return false;
    }else{
       document.getElementById("pasword-error").innerHTML="passwords match";
       return true;
    }   
}
 function reviewInput() { 
    var formcontent=document.getElementById("signup");
    var formoutput="<table class='output'><tr><th colspan='2'>Review your infromation:</th></tr>";
    for(var i = 0; i <formcontent.elements.length;i++){
        var el= formcontent.elements[i];
        var datatype= el.type;
        var name= el.name;
        var value= el.value;
        if (!name) continue;
        switch (datatype) {
          case "checkbox":
           if (el.checked) {
                formoutput += "<tr><td align='right'>"+name+"</td>";
                formoutput += "<td class='outputdata'>&#x2713;</td></tr>"; //got >&#x2713 from MISSO resource//
           } 
           break;
           case "range":
           if (value !=="0"){
                formoutput += "<tr><td align='right'>"+ name +"</td>";
                formoutput += "<td class='outputdata'>"+ value +"</td></tr>";
                
            } 
            break;
            case "button":
            case "submit":
            case "reset":
            break;
            default:
                if(value !==""){
                    formoutput += "<tr><td align='right>" + name + "</td>";
                    formoutput += "<td class='outputdata'>"+ value + "</td></tr>";

                }
        }
    }
    formoutput += "</table>";
    document.getElementById("review").innerHTML=formoutput;
}
function removeReview(){
    document.getElementById("review").innerHTML="";// showInput before 

 }

 function displayAlert(){
   var alertsBox = document.getElementById("alerts-box");
   var stopAlert = document.getElementById("stop-alert");
   alertsBox.style.display = "block";
   stopAlert.onClick = function (){
      alertsBox.style.display = "none";
   }
 }

 function validateAll(){
  let valid = true; 
  if (!validateFname()){
   valid =false;
  }
  if (!validatemini()){
   valid =false;
  }
  if (!validateLname()){
   valid =false;
  }
  
  if (!validateSSN()){
   valid =false;
  }
  if (!validateAddress1()){
   valid =false;
  }
  if (!validateCity()){
   valid =false;
  }
  if (!validateZipcode()){
   valid =false;
  }
  if (!validateEmail()){
   valid =false;
  }
  if (!validatePhnum()){
   valid =false;
  }
  if (!validateusename()){
   valid =false;
  }
  if (!validatepasword()){
   valid =false;
  }
  if (!confirmpasword()){
   valid =false;
  }
  if (!validateDOB()){
   valid =false;
  }
  if (valid){
   document.getElementById("submit").disabled = false; // pulls from id in html
  }else{
    showAlert();
  }
 }

 //for cookies//
 function setCookie(NAME, CVALUE, expireDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = NAME + "=" + CVALUE + ";" + expires + ";path=/";
}
function getCookie(NAME) {
    var cookiename = NAME+ "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cook = cookies[i].trim();
        while(cook.charAt (0) ==' '){
         cook == cook.substring(1);
        }
        
        if (cook.indexOf(cookiename) == 0) {
            return cook.substring(cookiename.length, cook.length);
        }
    }
    return ""; 
}
var inputs = [
   {id:"fname", cookieName: "fname"},
   {id:"mini", cookieName: "mini"},
   {id:"lname", cookieName: "lname"},
   {id:"g1", cookieName: "pgender"},
   {id:"DOB", cookieName: "DOB"},
   {id:"SSN", cookieName: "SSN"},
   {id:"address1", cookieName: "address1"},
   {id:"address2", cookieName: "address2"},
   {id:"city", cookieName: "city"},
   {id:"zipcode", cookieName: "zipcode"},
   {id:"email", cookieName: "email"},
   {id:"phnum", cookieName: "phnum"},
   {id:"n1", cookieName: "notifytext"},
   {id:"usename", cookieName: "usename"}
]
inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // fill input fields
    var cookValue = getCookie(input.cookieName);
    if (cookValue !== "") {
        inputElement.value = cookValue;
    }

    // Sets cookie when  input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});
var fname = getCookie("fname");
if (fname !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + fname + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + fname + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}
