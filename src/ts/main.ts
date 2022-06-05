import {Contact} from './portfolio/contact';
import {Home} from './portfolio/home';
import {Work} from './portfolio/work';
import {FloatingButton} from './util/elements/floatingButton';

const home = new Home();
const work = new Work();
const contact = new Contact();
const themeBtn = new FloatingButton();
// Render container
window.onload = function() {
  themeBtn.build();
  home.build();
  work.build();
  contact.build();
};
