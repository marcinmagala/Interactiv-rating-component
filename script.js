const btnSubmit = document.querySelector(".btn");
const btnRate = document.querySelectorAll(".rate_value");
const rateForm = document.querySelector(".rate_form");
const thanksState = document.querySelector(".thanks_state");
const thanksRateInfo = document.querySelector(".thanks-rate_info");

const btnRateClicked = function (e) {
  e.preventDefault();
  btnRate.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
};

let rate_Value;

const changeState = function () {
  //   thanksState.style.opacity = 1;
};

const btnSubmitClicked = function (e) {
  e.preventDefault();
  btnRate.forEach((btn) => {
    if (btn.classList.contains("active")) {
      rate_Value = btn.dataset.value;
    }
  });

  rateForm.classList.add("hidden");
  thanksState.classList.remove("hidden");

  const thanksRateInfoText = document.createElement("p");
  thanksRateInfoText.innerText = `You selected ${rate_Value} out of 5`;

  thanksRateInfo.appendChild(thanksRateInfoText);
};

btnRate.forEach((btn) => btn.addEventListener("click", btnRateClicked));
btnSubmit.addEventListener("click", btnSubmitClicked);
