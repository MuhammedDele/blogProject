export default class DbService {
  constructor(key) {
    this.key = key;
  }

  saveChanges(payload) {
    localStorage.setItem(this.key, JSON.stringify(payload));
  }

  getData() {
    return JSON.parse(localStorage.getItem(this.key));
  }

}
