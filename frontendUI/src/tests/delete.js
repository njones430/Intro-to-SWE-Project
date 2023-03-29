function del(a) {
    localStorage.setItem("test", a);
    localStorage.removeItem("test");
  
    return localStorage.getItem("test");
    }
    module.exports = del;