import { Home } from "./portfolio/home";

const home = new Home();
window.onload = function() {
  home.build();
};