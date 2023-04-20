function logout(a, b, c) {
    localStorage.setItem(a, b);
  
    return localStorage.getItem(c);
    }
    module.exports = logout;