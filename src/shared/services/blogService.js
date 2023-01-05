import { v4 } from "uuid";
import DbService from "./dbService";

export class BlogService {
  #dbContext;

  constructor() {
    this.#dbContext = new DbService("Blog");
  }

  addBlog(payload) {
    let blogs = this.#dbContext.getData() ?? [];
    payload = {
      ...payload,
      id: v4(),
    };
    blogs.push(payload);
    this.#dbContext.saveChanges(blogs);
    return true;
  }

  getAll() {
    if (this.#dbContext.getData()) {
      return this.#dbContext.getData();
    } else {
      return [];
    }
  }

  getBlog(id) {
    return this.#dbContext.getData().find((x) => x.id === id);
  }

  deleteBlog(id) {
    let blogs = this.#dbContext.getData();
    for (var i = 0; i < blogs.length; i++) {
      if (blogs[i].id == id) {
        blogs.splice(i, 1);
        break;
      }
    }
    blogs.filter((x) => x.id === id);
    this.#dbContext.saveChanges(blogs);
    return true;
  }

  updateBlog(id, payload) {
    let blogs = this.getAll();
    for (let i = 0; i < blogs.length; i++) {
      let blog = blogs[i];
      if (blog.id === id) {
        blog.title = payload.title;
        blog.content = payload.content;
        blog.authorName = payload.authorName;
        break;
      }
    }
    this.#dbContext.saveChanges(blogs);
    return true;
  }
}
