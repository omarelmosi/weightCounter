result = document.getElementsByClassName("result")[0];
button = document.getElementsByClassName("btn")[0];
select = document.getElementById("select");
input = document.getElementById("in");

weight = input.value;

input.oninput = function (e) {
  weight = Number(input.value);
};

planet = select.value;

select.oninput = function (e) {
  planet = select.value;
};

button.onclick = function (e) {
  if (planet === "عطارد") {
    result.textContent = `وزنك علي كوكب ${planet} ${Math.round(
      weight * 0.38
    )} كجم`;
  }
  if (planet === "الزهرة") {
    result.textContent = `وزنك علي كوكب ${planet} ${Math.round(
      weight * 0.91
    )} كجم`;
  }
  if (planet === "المريخ") {
    result.textContent = `وزنك علي كوكب ${planet} ${Math.round(
      weight * 0.38
    )} كجم`;
  }
  if (planet === "المشتري") {
    result.textContent = `وزنك علي كوكب ${planet} ${Math.round(
      weight * 2.53
    )} كجم`;
  }
  if (planet === "زحل") {
    result.textContent = `وزنك علي كوكب ${planet} ${Math.round(
      weight * 1.06
    )} كجم`;
  }
  if (planet === "أورانوس") {
    result.textContent = `وزنك علي كوكب ${planet} ${Math.round(
      weight * 0.92
    )} كجم`;
  }
  if (planet === "نبتون") {
    result.textContent = `وزنك علي كوكب ${planet} ${Math.round(
      weight * 1.19
    )} كجم`;
  }
  if (planet === "بلوتو") {
    result.textContent = `وزنك علي كوكب ${planet} ${Math.round(
      weight * 0.06
    )} كجم`;
  }
};
