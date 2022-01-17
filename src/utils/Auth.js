const TOKEN_KEY = 'jwt';

class Auth {
  static saveSession(session) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(session));
  }

  static getSession() {
    return JSON.parse(localStorage.getItem(TOKEN_KEY));
  }

  static deleteSession() {
    localStorage.removeItem(TOKEN_KEY);
  }

  static isLogin() {
    if (this.getSession()) {
      return true;
    }
    return false;
  }
}

export default Auth;
