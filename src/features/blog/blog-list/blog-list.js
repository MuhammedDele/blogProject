import { BlogService } from "../../../shared/services/blogService.js";
import createBlog from "../BlogPost.js";
import { AuthService } from "../../../shared/services/authService";
document.getElementById("signOut_id").addEventListener("click", signOut);
// new service blogService
let blogService = new BlogService();
let authService = new AuthService();
let blogs = blogService.getAll();

if (blogs.length === 0) {
  const empty = document.createElement("div");
  empty.innerText = "No Blogs yet, add some!";
  document.querySelector(".empty-list").appendChild(empty);
} else {
  for (let i = 0; i < blogs.length; i++) {
    let item = blogs[i];
    createBlog(item);
  }
}
function signOut() {
  authService.signOut();
}
