import {Contact} from './portfolio/contact';
import {Home} from './portfolio/home';
import {Work} from './portfolio/work';

const home = new Home();
const work = new Work();
const contact = new Contact();
window.onload = function() {
  home.build();
  work.build();
  contact.build();
};
