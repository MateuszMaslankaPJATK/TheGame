function h(s) {
  let r = 0;
  for (let i = 0; i < s.length; i++) {
    r = (r << 5) - r + s.charCodeAt(i);
    r |= 0;
  }
  return r;
}

const a = 1111;  
const b = 2222;       
const c = 3333;       

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const l = h(document.getElementById("login").value);
    const p = h(document.getElementById("password").value);
    const s = h(document.getElementById("sqd").value);

    if (l === a && p === b && s === c) {
      window.location.href = "POZIOM1.html";
    } else {
      document.getElementById("error").style.display = "block";
    }
  });
});
