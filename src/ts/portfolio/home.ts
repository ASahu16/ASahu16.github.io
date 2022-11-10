/**
 * Renders home section
 */
export class Home {
  /**
   * Responsible to created the whole section/screen
   */
  build() {
    // TODO: Make some interface or abstract class
    const body = document.getElementsByTagName('body');
    body[0].appendChild(this._section());
  }

  /**
  * Creates whole home section
  * @return {HTMLElement} The home section
  */
  _section():HTMLElement {
    const homeSection = document.createElement('section');
    homeSection.className = 'banner';
    homeSection.id = 'home';
    homeSection.appendChild(this._tagline());
    return homeSection;
  }

  /**
   * Create a tagline div
   * @return {HTMLElement} The tagline for the home section
   */
  _tagline():HTMLElement {
    const tagline1 = 'Welcome to My World';
    const tagline2 = 'Hi I\'m Abhishek Sahu';
    // const tagline3 = 'A developer';
    const container = document.createElement('div');
    container.className = 'tagline';

    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    // span1.innerText = tagline1;
    span2.innerText = tagline2;
    // span3.innerText = tagline3;
    container.append(span1, span2, span3);
    return container;
  }
}
