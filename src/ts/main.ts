import {Contact} from './portfolio/contact';
import {Home} from './portfolio/home';
import {Projects} from './portfolio/project';
import {FloatingButton} from './util/elements/floatingButton';

const home = new Home();
const projects = new Projects();
const contact = new Contact();
const themeBtn = new FloatingButton();
window.onload = function() {
  themeBtn.build();
  home.build();
  projects.build();
  contact.build();
};
