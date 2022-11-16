import AbstractView from "./abstractView.js";

class Settings extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    const container = document.createElement("div");
    const container_head = document.createElement("h1");
    const container_des = document.createElement("p");

    container_head.innerText = "Setting Page";
    container_des.innerText = "You are viewing the setting Page!!";
    container.appendChild(container_head);
    container.appendChild(container_des);
    return container;
  }
}

export default Settings;
