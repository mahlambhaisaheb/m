
function validationForm() {
    var email= document.login.email.value;

    var password= document.login.password.value;

    if (email=="") {
        
        document.getElementById('notify').innerHTML="Email cannot be blank!";

        return false;
    }

   

    else if (password=="") {

        document.getElementById('notify').innerHTML="Password cannot be blank!";

        return false;
    }

   

    else if (password.length<6) {
        
        document.getElementById('notify').innerHTML="Password must be more than six characters!";

        return false;
    }

  

}



  function regisValidation() {


    var username= document.getElementById("nameone").value;


    var email= document.getElementById("emailone").value;


    var number= document.getElementById("numberone").value;

    
    var password= document.getElementById("passwordone").value;

    
    var confirmpassword= document.getElementById("confirmpasswordone").value;

    
    var warning= document.getElementById("warningregis");

    var regOne= /^[A-Za-z]+$/;

    var regTwo= /^[0-9]+$/;



    if ( username=="") { 

       warning.innerHTML="Name cannot be blank!";
      
        return false;
    }

    else if (email=="") {

        warning.innerHTML="Email cannot be blank!";
        return false;
    }
    
    else if (number=="") {

       warning.innerHTML="Number cannot be blank!";
        return false;
    }

    else if (number.length<10) {

        warning.innerHTML="Number must be 10 characters!";
        return false;
    }
    
    else if (number.length>10) {

       warning.innerHTML="Number must be 10 characters!";
        return false;
    }

    else if (password=="") {
        
       warning.innerHTML="Password cannot be blank!";
        return false;
    }

     else if (password.length<6) {

        warning.innerHTML="Password must be more than six characters!";
        return false;
    } 

    else if (confirmpassword=="") {

       warning.innerHTML="Please confirm your password!";
        return false;
    }

    else if (password!=confirmpassword) {

        warning.innerHTML="Passwords are not the same!";
        return false;
    }
    

}
  function focusfunc(x) {
    document.getElementById(x).style.background="lightgray";

    
  }

  function blurfunc(y) {
    document.getElementById(y).style.background="white";
  }

  function characCheck() {

    if (username.match(regOne) ) { 
        return true;
        
    }
    
    else {
        warning.innerHTML="Please only enter Alphabets!";

        return false;
    }
  }


  function loader() {
    alert('Page Loaded')
  }
  
   


