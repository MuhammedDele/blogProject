import { AuthService } from "../../../shared/services/authService.js";
import { BlogService } from "../../../shared/services/blogService.js";
import validateForm from "../validateForm.js";

const form = document.querySelector(".edit-blog-form");
document.getElementById("signOut_id").addEventListener("click", signOut);
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const authorNameInput = document.getElementById("authorName");

let blogService = new BlogService();
let blogId = localStorage.getItem("blogId");
let authService = new AuthService();
const blogDate = blogService.getBlog(blogId);
intilizeForm(blogDate);

//  get id from the href
function intilizeForm(blogDate) {
  titleInput.value = blogDate["title"];
  contentInput.value = blogDate["content"];
  authorNameInput.value = blogDate["authorName"];
}

form.addEventListener("submit", validate);

function validate(e) {
  e.preventDefault();

  const formData = validateForm(titleInput, contentInput, authorNameInput);

  if (formData != null) {
    console.log(formData);
    blogService.updateBlog(blogId, formData);
    window.location.assign("./blog-list.html");
  }
}

function signOut() {
  authService.signOut();
}
