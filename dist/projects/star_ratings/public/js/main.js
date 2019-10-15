const ratings = {
  product_1: 5,
  product_2: 2.5,
  product_3: 4.2,
  product_4: 1.3,
  product_5: 3.7
};

const starsMax = 5;

document.addEventListener("DOMContentLoaded", getRatings);

const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

let product;

productSelect.addEventListener("change", e => {
  product = e.target.value;

  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

ratingControl.addEventListener("blur", e => {
  const rating = e.target.value;

  if (rating > 5) {
    alert("Please rate 1 - 5");
    return;
  }

  ratings[product] = rating;
  getRatings();
});

function getRatings() {
  for (let rating in ratings) {
    const starPercentage = (ratings[rating] / starsMax) * 100;

    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starPercentageRounded;

    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}
