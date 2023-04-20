function wage(a, b, c, d, e) {
    localStorage.setItem("testa", a);
    localStorage.setItem("testb", b);
  
      return Number((parseInt(localStorage.getItem("testa"))) / (parseInt(localStorage.getItem("testb"))));
    }
    module.exports = wage;