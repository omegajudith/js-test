function makedata() {
    let data = JSON.parse(localStorage.getItem("loggedin"));
    return data;
  }

function userDetails () {
    // console.log(value['uname'])

    const data = makedata();
    console.log(data);

    for (const [key, value] of Object.entries(data)) {
        let paragraph = document.getElementById("store");
        // console.log(paragraph)
        let text = document.createTextNode(value['uname']);
        paragraph.appendChild(text);
        return false;
      }
    

}

userDetails();
  