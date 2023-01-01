import { AuthService } from "../../../shared/services/authService.js";
import { NotificationService } from "../../../shared/services/NotificationService.js";

// event listners
document.getElementById('login_btn').addEventListener('click', login, true);


let service = new AuthService();
let notification = new NotificationService();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = service.login(email, password);
  if (user) {
    window.location.href("../blog/blog-list.html");
  } else {
    notification.error("Invalid Credentials");
  }
}
