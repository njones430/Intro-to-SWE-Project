function edit(a, b) {
    localStorage.setItem("test", a);
    localStorage.setItem("test", b);
  
    return localStorage.getItem("test");
    }
    module.exports = edit;