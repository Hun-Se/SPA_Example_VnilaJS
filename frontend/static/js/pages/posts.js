import AbstractView from "./abstractView.js";

class Posts extends AbstractView {
  constructor(props) {
    super(props);
    this.setTitle("Posts");
  }

  async getHtml() {
    const container = document.createElement("div");
    const container_head = document.createElement("h1");
    const container_des = document.createElement("p");
    const container_anchor = document.createElement("div");
    const anchor1 = document.createElement("a");
    const anchor2 = document.createElement("a");
    const anchor3 = document.createElement("a");

    container_head.innerText = "Posts Page";
    container_des.innerText = "You are viewing the posts!";

    anchor1.innerText = "post1";
    anchor2.innerText = "post2";
    anchor3.innerText = "post3";

    anchor1.setAttribute("href", "/posts/1");
    anchor1.setAttribute("class", "post__link");
    anchor1.setAttribute("data-link", "");

    anchor2.setAttribute("href", "/posts/2");
    anchor2.setAttribute("class", "post__link");
    anchor2.setAttribute("data-link", "");

    anchor3.setAttribute("href", "/posts/3");
    anchor3.setAttribute("class", "post__link");
    anchor3.setAttribute("data-link", "");

    container_anchor.appendChild(anchor1);
    container_anchor.appendChild(anchor2);
    container_anchor.appendChild(anchor3);

    container.appendChild(container_head);
    container.appendChild(container_des);
    container.appendChild(container_anchor);
    return container;
  }
}

export default Posts;
