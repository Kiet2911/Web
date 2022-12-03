function check() {
    // Form đăng ký 
    let a = document.getElementById("name").value;
    let b = document.getElementById("password").value;
    let c = document.getElementById("repassword").value;
    let x = document.getElementById("number").value;
    let y = document.getElementById("button1");
    if (a == "") {
      alert("Please enter your username");
      return false;
    }
    if (b == "") {
      alert("Please enter your password ");
      return false;
    }
    if (c == "") {
      alert("Please re-enter your password ");
      return false;
    }
    if(c != b){
        alert("Wrong repassword");
        return false;
    }
    if(isNaN(x)){
        alert("Wrong number")
    }
}

// Contact 
function contact() {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let c = document.getElementById("input3").value;
  let x = document.getElementById("input4").value;
  if (a == "") {
  alert("Please enter your username");
  return false;
}
  else if (b == "") {
  alert("Please enter your email ");
  return false;
}
  else if (c == "") {
  alert("Please enter your number ");
  return false;
}
  else if (x == "") {
  alert("Please enter the blank ");
  return false;
}
  else if(isNaN(c)){
  alert("Wrong number");
}
  else{
  alert("Thanks your send");
}
}


// About
function changeImage() {
  window.location = "food.html"
}

function changeImage1() {
  window.location = "emotion.html"
}

function changeImage2() {
  window.location = "sport.html"
}

function sayHi(){
  console.log(name);
  console.log(age);
  var name = 'duthaho';
  let age = 69;
}