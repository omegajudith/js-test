
const uname = document.querySelector("#uname");
const pass = document.querySelector("#pass");
const comfirm = document.querySelector("#comfirm");
// const email = document.querySelector("#email");

const btn = document.querySelector("#btn");
// const form = document.querySelector("#form");

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

// makedata();


function userDetails() {
  let data = makedata();
  let userNameInput = uname.value.trim();
  let passWordInput = pass.value.trim();
  let comfirmPass = comfirm.value.trim();



  // let emailInput = email.value.trim();

  //validating user name
  if (uname.value === "") {
    alert('Input Your User Name Please')
    uname.innerHTML = "name"
    uname.style.border = "3px solid red";
    uname.focus();
    return false;
  }


// validating password fields
if (pass.value === "") {
  alert('Password required')
  pass.style.border = "3px solid red";
  pass.focus();
  return false;
}


if (pass.value.length < 5) {
  alert('Password should be atleast 5 characters long')
  pass.style.border = "3px solid red";
  pass.focus();
  return false;
}

//validating password fields
if (comfirm.value === "") {
  alert('Confirm Password')
  pass.style.border = "3px solid red";
  pass.focus();
  return false;
}

  // check if the two passwords match
  if (pass.value !== comfirm.value) {
    alert('PassWords Do Not Match')
    comfirm.style.border = "3px solid red";
    comfirm.focus()
    return false;
  }
  
  const Person = {
    uname: userNameInput,
    pass: passWordInput,
    comfirmPass: comfirmPass
    // email: emailInput
  };

  data.unshift(Person);
  localStorage.setItem("data", JSON.stringify(data));
}

btn.onclick = userDetails;
// form.onsubmit = displayName

