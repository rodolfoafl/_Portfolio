const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");

const opacity = 0.6;

//Set first image opacity
imgs[0].style.opacity = opacity;

document.addEventListener(
  "click",
  e => {
    if (e.target.matches("img")) {
      //Reset non-clicked images opacity
      imgs.forEach(img => (img.style.opacity = 1));

      //Change current image to src of clicked image
      current.src = e.target.src;

      //Add fade-in class
      current.classList.add("fade-in");

      //Remove fade-in class after .5 seconds
      setTimeout(() => current.classList.remove("fade-in"), 500);

      //Change image opacity to opacity var
      e.target.style.opacity = opacity;
    }
  },
  false
);
