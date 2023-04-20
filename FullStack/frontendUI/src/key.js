function key(a) {
    localStorage.setItem("keytest", a);
    localStorage.setItem("tester", "testing");
  
    return localStorage.getItem("keytest") + localStorage.getItem("tester");
    }
    module.exports = key;