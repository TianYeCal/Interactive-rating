const button = document.querySelector(".submit-btn");
const ratesForm = document.querySelector(".rates-form");
const rates = document.getElementsByName("rate");
console.log(Array.from(rates));
const rateNumber = document.querySelector(".rate-number");

const mainCard = document.querySelector(".feedback");
const hiddenCard = document.querySelector(".thankyou-card");

const toggleHidden = () => {
  mainCard.classList.add("hidden");
  hiddenCard.classList.remove("hidden");
};

ratesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let selected = Array.from(rates).find((rate) => rate.checked);
  console.log(selected);
  rateNumber.textContent = ` ${selected.value} `;
  toggleHidden();
  return () => ratesForm.submit();
});
