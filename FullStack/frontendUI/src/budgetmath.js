function math(a, b, c, d, e) {
    localStorage.setItem("testa", a);
    localStorage.setItem("testb", b);
    localStorage.setItem("testc", c);
    localStorage.setItem("testd", d);
    localStorage.setItem("teste", e);
  
      return Number((parseInt(localStorage.getItem("testa")))/-6 - parseInt(localStorage.getItem("testb")) - (parseInt(localStorage.getItem("testc"))/6) + (parseInt(localStorage.getItem("testd"))*4) + (parseInt(localStorage.getItem("teste"))/6));
    }
    module.exports = math;