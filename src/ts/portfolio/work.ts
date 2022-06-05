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
  _section(): HTMLElement {
    const workSection = document.createElement('section');
    workSection.className = 'work';
    workSection.id = 'work';
    // workSection.appendChild(this._tagline());
    projects.result.forEach((data) => {
      workSection.append(
          this._workContainer(data.title, data.description, data.imgSet));
    });
    return workSection;
  }

  /**
   * Create a tagline div
   * @return {HTMLElement} The tagline for the work section
   */
  _tagline(): HTMLElement {
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
   * @param {string[]} imgSet - Array of imges associated with project
   * @return {HTMLElement} - work html element
   */
  _workContainer(
      titleText: string,
      descriptionText: string,
      imgSet?: string[]): HTMLElement {
    const container: HTMLElement = document.createElement('article');
    container.className = 'itemContainer';

    const bg = document.createElement('div');
    bg.className = 'bg';
    const preview = document.createElement('div');
    preview.className = 'preview';
    if (imgSet) {
      const img = document.createElement('img');
      img.setAttribute('src', imgSet[0]);
      preview.appendChild(img);
    }
    const content = document.createElement('div');
    content.className = 'content';


    const title = document.createElement('h1');
    title.innerText = titleText;
    // const description = document.createElement('p');
    // description.innerText = descriptionText;

    content.append(title);
    // if (imgSet) {
    //   const img = document.createElement('img');
    //   img.setAttribute('src', imgSet[0]);
    //   container.appendChild(img)
    // }
    container.append(bg, preview, content);

    container.addEventListener('mousemove',(event)=>{
      const currCard = event.currentTarget! as HTMLElement;
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      let degrees = 20;
      let ry = 2*(mouseX- (currCard.getBoundingClientRect().left+(currCard.offsetWidth/2)))/(currCard.offsetWidth);
       let rx = 2*(currCard.getBoundingClientRect().top+(currCard.offsetHeight/2)-mouseY)/(currCard.offsetHeight);
      currCard.style.transform = "rotate3d("+rx+","+ry+",0,"+degrees+"deg) scale(1.1)";

      const imgEle = currCard.querySelector('img');
      // TODO: fix parallex effect on card 
      // imgEle!.style.boxShadow = 3*-ry+"px "+3*rx+"px 5px 3px rgba(0,0,0,0.4)";
      // currCard.style.boxShadow = 3*-ry+"px "+3*rx+"px 5px 3px rgba(0,0,0,0.4)";
      // currCard.getElementsByClassName("card-number")[0].style.textShadow = 4*-ry+"px "+3*rx+"px 3px rgba(0,0,0,0.8)";
    });
    
    container.addEventListener('mouseout',(event)=>{
      let currCard = event.currentTarget! as HTMLElement;
      // console.log(currCard);
      currCard.style.transform = "";
      currCard.style.boxShadow = "none";
      // currCard.getElementsByClassName("card-number")[0].style.textShadow = "0px 0px 4px rgba(0,0,0,0.8)";
    });


    return container;
  }
}
