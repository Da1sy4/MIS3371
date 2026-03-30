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
 
function validatepasword(){//password validation// may be problem
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
    pasword1=document.getElementById("pasword").value;
    pasword2=document.getElementById("con_pasword").value;
  if(pasword1 !== pasword2){
       document.getElementById("pasword2-error").innerHTML="paswords don't match";
       return false;
    }else{
       document.getElementById("pasword-error").innerHTML="passwords match";
       return true;
    }   
}
/*function reviewInput(){ //problem
    var formcontent=document.getElementById("signup");
    var formoutput="<table class='output'><tr><th colspan='2'>Review your infromation:</th></tr>";
    for(var i=0;i<formcontent.nextElementSibling.length;i++){
        var el=formcontent.elements[i];
        var datatype=el.type;
        var Name=el.Name;
        var value=el.value;
       /* if(!Name)continue;
        switch(datatype){
          case "checkbox":
           /* if(el.checked){
                formoutput += "<tr><td align='right'>"+Name+"</td>";
                formoutput += "<td class='outputdata'>&#x2713;</td></tr>"; //got >&#x2713 from MISSO resource//
           } 
           <br/>;
           case "range":
           /* if(value !=="0"){
                formoutput += "<tr><td align='right'>"+Name+"</td>";
                 formoutput += "<td class='outputdata'>"+value+"</td></tr>";
                
            } 
            <br/>;
            case "button":
            case "submit":
            case "reset":
            <br/>;
            default:
                if(value !==""){
                    formoutput += "<tr><td align='right>" +Name + "</td>";
                    formoutput += "<td class='outputdata'>"+ value + "</td></tr>";

                }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML=formoutput;
}
/*function removeReview(){
    document.getElementById("showInput").innerHTML="";

/*}*/
