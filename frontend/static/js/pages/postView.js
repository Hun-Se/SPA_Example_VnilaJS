import AbstractView from "./abstractView.js";

class PostsView extends AbstractView {
  constructor(props) {
    super(props);
    this.setTitle("Viewing Post");
    this.props.id = props.id;
  }

  async getHtml() {
    const container = document.createElement("div");
    const container_head = document.createElement("h1");
    const container_des = document.createElement("p");

    container_head.innerText = "PostView";
    container_des.innerText = `Post ${this.props.id} Page`;
    container.appendChild(container_head);
    container.appendChild(container_des);

    return container;
  }
}

export default PostsView;
