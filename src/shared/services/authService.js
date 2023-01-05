import DbService from "./dbService.js";

import { v4 } from "uuid";

// Generate the token
export class AuthService {
  #dbContext;

  constructor() {
    this.#dbContext = new DbService("Auth");
  }
  login(email, password) {
    const user = this.#dbContext
      .getData()
      .find((x) => x.email === email && x.password === password);
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        email: user.email,
        fullName: user.fullName,
      })
    );
    return user;
  }

  register(model) {
    let users = this.#dbContext.getData() ?? [];
    model = {
      ...model,
      id: v4(),
    };
    users.push(model);
    this.#dbContext.saveChanges(users);
    return true;
  }
  checkIfEmailExist(email) {
    const users = this.#dbContext.getData();
    if (users) {
      return users.findIndex((x) => x.email === email) !== -1 ? true : false;
    }
    return false;
  }

  signOut() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser != null) {
      localStorage.removeItem("currentUser");
      window.location.assign("/index.html");
      return true;
    }
    return false;
  }
}
