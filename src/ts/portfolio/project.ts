import * as projects from '../fixture/projectsData.json';
/**
 * Renders project section
 */
export class Projects {
  /**
   * Responsible to created the whole section/screen
   */
  build() {
    // TODO: Make some interface or abstract class
    const body = document.getElementsByTagName('body');
    body[0].appendChild(this._section());
  }

  /**
  * Creates whole project section
  * @return {HTMLElement} The project section
  */
  _section(): HTMLElement {
    const projectSection = document.createElement('section');
    projectSection.className = 'project';
    projectSection.id = 'project';

    const wrapper = document.createElement('div');
    wrapper.classList.add('project-wrapper');
    // projectSection.appendChild(this._tagline());
    projects.result.forEach((data) => {
      wrapper.appendChild(
          this._projectContainer(data.title, data.description, data.imgSet));
    });
    projectSection.appendChild(wrapper);
    return projectSection;
  }

  /**
   * Create a tagline div
   * @return {HTMLElement} The tagline for the project section
   */
  _tagline(): HTMLElement {
    const tagline1 = '# Projects ';
    const container = document.createElement('div');
    container.className = 'tagline';

    const span1 = document.createElement('span');
    span1.innerText = tagline1;
    container.append(span1);
    return container;
  }

  /**
   * Creates a project container element.
   *
   * Basically a div for person projects
   *
   * @param {string} titleText - title of the project
   * @param {string} descriptionText - project description
   * @param {string[]} imgSet - Array of imges associated with project
   * @return {HTMLElement} - project html element
   */
  _projectContainer(
      titleText: string,
      descriptionText: string,
      imgSet?: string[]): HTMLElement {
    const container: HTMLElement = document.createElement('article');
    container.className = 'itemContainer';

    const itemShowcase = document.createElement('div');
    itemShowcase.className = 'item-showcase';
    
    if (imgSet) {
      const img = document.createElement('img');
      img.setAttribute('src', imgSet[0]);
      itemShowcase.appendChild(img);
    }
    
    const itemDetail = document.createElement('div');
    itemDetail.className = 'item-detail';


    const title = document.createElement('h1');
    title.innerText = titleText;

    itemDetail.append(title);
    container.append( itemShowcase, itemDetail);
    return container;
  }
}
