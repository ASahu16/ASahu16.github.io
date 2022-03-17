import * as projects from '../fixture/work.json';
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
    projects.result.forEach((data) =>{
      workSection.append(this._workContainer(data.title, data.description));
    });
    return workSection;
  }

  /**
   * Create a tagline div
   * @return {HTMLElement} The tagline for the work section
   */
  _tagline():HTMLElement {
    const tagline1 = '# Work ';
    const container = document.createElement('div');
    container.className = 'tagline';

    const span1 = document.createElement('span');
    span1.innerText = tagline1;
    container.append(span1);
    return container;
  }

  /**
   * Creates a work container element.
   *
   * Basically a div for person projects
   *
   * @param {string} titleText - title of the project
   * @param {string} descriptionText - project description
   * @return {HTMLElement} - work html element
   */
  _workContainer(titleText:string, descriptionText:string):HTMLElement {
    const container: HTMLDivElement = document.createElement('div');
    container.className = 'work-item';

    const title = document.createElement('h1');
    title.innerText = titleText;
    const description = document.createElement('p');
    description.innerText = descriptionText;
    container.append(title, description);
    return container;
  }
}
