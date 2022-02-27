import {Contact} from './portfolio/contact';
import {Home} from './portfolio/home';

const home = new Home();
const contact = new Contact();
window.onload = function() {
  home.build();
  contact.build();
};
