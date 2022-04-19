function validate()
{
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(firstname.length < 3)
  {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if(lastname.length < 3)
  {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }

 
  if(email.indexOf("@") == -1 || email.length < 6)
  {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if(password.length < 8)
  {
    text = "Please Enter valid password";
    error_message.innerHTML = text;
    return false;
  }
  

  alert("Form Submitted Successfully!");
  return false;
  
}