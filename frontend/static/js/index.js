import Dashboard from "./pages/dashBoard.js";
import Posts from "./pages/posts.js";
import PostsView from "./pages/postView.js";
import Settings from "./pages/Settings.js";

const nav = document.querySelector(".nav");

const anchor1 = document.createElement("a");
const anchor2 = document.createElement("a");
const anchor3 = document.createElement("a");

anchor1.setAttribute("href", "/");
anchor1.setAttribute("class", "nav__link");
anchor1.setAttribute("data-link", "");
anchor1.innerText = "Dashboard";

anchor2.setAttribute("href", "/posts");
anchor2.setAttribute("class", "nav__link");
anchor2.setAttribute("data-link", "");
anchor2.innerText = "Posts";

anchor3.setAttribute("href", "/settings");
anchor3.setAttribute("class", "nav__link");
anchor3.setAttribute("data-link", "");
anchor3.innerText = "Settings";

nav.appendChild(anchor1);
nav.appendChild(anchor2);
nav.appendChild(anchor3);

//router
// [^]: 부정(not)을 의미한다. 얘를 들어 [^a-z]는 알파벳 소문자로 시작하지 않는 모든 문자를 의미한다.
// [] 바깥의 ^는 문자열의 처음을 의미한다.
const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  console.log(pathToRegex("/post/:id"));
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: PostsView },
    { path: "/settings", view: Settings },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));
  const getView = await view.getHtml();
  document.querySelector("#root").innerHTML = "";
  document.querySelector("#root").appendChild(getView);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
