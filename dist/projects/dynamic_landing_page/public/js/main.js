const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");
const date = document.getElementById("date");

const showAmPm = true;

//Event listeners
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//Set name
function setName(e) {
  if (e.type === "keypress") {
    //Check if enter was pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//Set focus
function setFocus(e) {
  if (e.type === "keypress") {
    //Check if enter was pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

//Function to show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    year = today.getFullYear(),
    month = today.getMonth(),
    day = today.getDate();

  //Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr format
  hour = hour % 12 || 12;

  //Output date
  date.innerHTML = `${day} - ${month} - ${year}`;

  //Output the time
  time.innerHTML = `${addLeftZero(hour)}<span>:</span>${addLeftZero(
    min
  )}<span>:</span>${addLeftZero(sec)} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

//Add zeros
function addLeftZero(number) {
  return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

//Set background and greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    //Evening
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "#fff";
  }
}

//Get name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//Get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//Setup page
setBgGreet();
showTime();
getName();
getFocus();
