/**
 * Renders work section
 */
export class Work {
  /**
   * Responsible to created the whole section/screen
   */
  build() {
    // TODO: Make some interface or abstract class
    const body = document.getElementsByTagName('body');
    body[0].appendChild(this._section());
  }

  /**
  * Creates whole work section
  * @return {HTMLElement} The work section
  */
  _section():HTMLElement {
    const workSection = document.createElement('section');
    workSection.className = 'work';
    workSection.id = 'work';
    workSection.appendChild(this._tagline());
    return workSection;
  }

  /**
   * Create a tagline div
   * @return {HTMLElement} The tagline for the work section
   */
  _tagline():HTMLElement {
    const tagline1 = 'Work ';
    // const tagline2 = 'I\'m Abhishek Sahu';
    // const tagline3 = 'A developer';
    const container = document.createElement('div');
    container.className = 'tagline';

    const span1 = document.createElement('span');
    // const span2 = document.createElement('span');
    // const span3 = document.createElement('span');
    span1.innerText = tagline1;
    // span2.innerText = tagline2;
    // span3.innerText = tagline3;
    container.append(span1);
    return container;
  }
}
