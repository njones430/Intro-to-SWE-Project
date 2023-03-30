function wage(a, b) {
    localStorage.setItem("wagey", a);
    localStorage.setItem("time", b);
  
    return Number(parseInt(localStorage.getItem("wagey")))*Number(parseInt(localStorage.getItem("time")));
    }
    module.exports = wage;