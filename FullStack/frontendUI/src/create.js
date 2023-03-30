function sum(a, b, c, d, e) {
  localStorage.setItem("testa", a);
  localStorage.setItem("testb", b);
  localStorage.setItem("testc", c);
  localStorage.setItem("testd", d);
  localStorage.setItem("teste", e);

    return parseInt(localStorage.getItem("testa")) + parseInt(localStorage.getItem("testb")) + parseInt(localStorage.getItem("testc")) + parseInt(localStorage.getItem("testd")) + parseInt(localStorage.getItem("teste"));
  }
  module.exports = sum;