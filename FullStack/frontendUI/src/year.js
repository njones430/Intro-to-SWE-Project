function year(a, b, c, d, e) {
    localStorage.setItem("testa", a);
    localStorage.setItem("testb", b);
    localStorage.setItem("testc", c);
    localStorage.setItem("testd", d);
    localStorage.setItem("teste", e);
  
      return Number((parseInt(localStorage.getItem("testa"))*-2) - (parseInt(localStorage.getItem("testb"))*12) - (parseInt(localStorage.getItem("testc"))*2) + (parseInt(localStorage.getItem("testd"))*52) + (parseInt(localStorage.getItem("teste"))*2));
    }
    module.exports = year;