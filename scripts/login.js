
const uname = document.querySelector("#login");
const pass = document.querySelector("#exist");
const btn = document.querySelector("#logBtn");


function makedata() {
  let data = JSON.parse(localStorage.getItem("data"));
  if (data === null) {
    localStorage.setItem("data", JSON.stringify([]));
    return data;
  } else 
  {
    return data;
  }
}

function makeLoggedin() {
  let loggedin = JSON.parse(localStorage.getItem("loggedin"));
  if (loggedin === null) {
    localStorage.setItem("loggedin", JSON.stringify([]));
    return loggedin;
  } else 
  {
    return loggedin;
  }
}


function LoggedIn(userNameInput, passWordInput) {
  let loggedin = makeLoggedin();
  
  const Person = {
    uname: userNameInput,
    pass: passWordInput,
  }

  loggedin.unshift(Person);
  localStorage.setItem("loggedin", JSON.stringify(loggedin));
  return true;
};

function userDetails() {
  let data = makedata();
  // let loggedin = makeLoggedin();
  let userNameInput = uname.value.trim();
  let passWordInput = pass.value.trim();


  for (const [key, value] of Object.entries(data)) {
    if(userNameInput == value['uname']){
      if(passWordInput == value['pass']){
        alert(`Hello ${userNameInput} Were Pleased To Have You Here \n Click Okay To Continue`);
        LoggedIn(userNameInput, passWordInput);
        return true;
      } else { alert('Incorrect Password');
        return false;
      }
    } else { alert(`Hello ${userNameInput} I See you Tried To Login But Unfortunatly \n Your Not Registered With Us \n Please Sign Up First To Be Able To Login`);
      return false;
    }
  }

  //validating user name
  if (uname.value === "") {
    alert('your name pliz')
    uname.innerHTML = "name"
    uname.style.border = "3px solid red";
    uname.focus();
    return false;
  }


// // validating password fields
  if (pass.value === "") {
    alert('pass word required')
    pass.style.border = "3px solid red";
    pass.focus();
    return false;
  }




  if (pass.value.length < 5) {
    alert('pass word should be atleast 5 characters long')
    pass.style.border = "3px solid red";
    pass.focus();
    return false;
  }

 
}


btn.onclick = userDetails;
// form.onsubmit = displayName

