import AbstractView from "./abstractView.js";

class Dashboard extends AbstractView {
  constructor(props) {
    super(props);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    const container = document.createElement("div");
    const container_head = document.createElement("h1");
    const container_des = document.createElement("p");

    container_head.innerText = "DashBord Page";
    container_des.innerText = "This is DashBord Page!!!";
    container.appendChild(container_head);
    container.appendChild(container_des);

    return container;
  }
}

export default Dashboard;
