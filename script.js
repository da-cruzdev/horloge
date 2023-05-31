function clock() {
  let hours = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  let secondes = document.getElementById("secondes");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  var am = "AM";
  if (h > 12) {
    h = h - 12;
    var am = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  secondes.innerHTML = s;
  ampm.innerHTML = am;
}
const interval = setInterval(clock, 1000);
