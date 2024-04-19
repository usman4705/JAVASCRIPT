const forms = document.querySelector("form");

forms.addEventListener("submit", function (e) {
  e.preventDefault();

  var height = parseInt(document.querySelector("#height").value);
  var weight = parseInt(document.querySelector("#weight").value);
  var result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please provide correct height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please provide correct height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
