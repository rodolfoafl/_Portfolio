const countdown = document.querySelector(".countdown");

//Set the launch data(ms)
const launchDate = new Date("Dec 24, 2022 13:00:00").getTime();

//Update every second
const interval = setInterval(() => {
  //Get todays date and time(ms)
  const now = new Date().getTime();

  //Difference frow now to the launch date
  const differece = launchDate - now;

  //Time calculations
  const days = Math.floor(differece / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (differece % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((differece % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differece % (1000 * 60)) / 1000);

  //Display the result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  //Check if launch date passed
  if (differece < 0) {
    //Stop countdown
    clearInterval(interval);

    //Style and output text
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched!";
  }
}, 1000);
