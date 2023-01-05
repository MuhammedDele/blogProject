import { BlogService } from "../../shared/services/blogService";
import { NotificationService } from "../../shared/services/NotificationService";

export default function createBlog(formData) {
  const blogs = document.querySelector(".blogs");

  const column = document.createElement("div");
  column.className = "row mb-4";

  const card = document.createElement("div");
  card.className = "card";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = formData["title"];

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText = formData["content"];

  const blogAuthor = document.createElement("div");
  blogAuthor.className = "btn btn-primary";
  blogAuthor.innerText = `Author : ${formData["authorName"]}`;

  const manageBlog = document.createElement("div");
  manageBlog.className = "row mt-4 d-flex flex-row-reverse";

  const editButton = document.createElement("a");
  editButton.href = `./edit-blog.html`;
  editButton.className = "btn btn-success m-2 col-md-2";
  editButton.innerText = "Edit Blog";

  editButton.addEventListener("click", () => {
    localStorage.setItem("blogId", formData["id"]);
  });

  const deleteButton = document.createElement("a");
  deleteButton.className = "btn btn-danger deleteBtn m-2 col-md-2";
  deleteButton.innerText = "Delete Blog";

  manageBlog.appendChild(deleteButton);

  // todo : add the deleteBlog service
  deleteButton.addEventListener("click", () => {
    deleteBlog(formData["id"]);
  });

  manageBlog.appendChild(editButton);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(blogAuthor);
  cardBody.appendChild(manageBlog);
  card.appendChild(cardBody);
  column.appendChild(card);
  blogs.appendChild(column);
}

let blogService = new BlogService();
let notification = new NotificationService();
function deleteBlog(id) {
  blogService.deleteBlog(id);
  notification.success("blog deleted Successfully");
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}
