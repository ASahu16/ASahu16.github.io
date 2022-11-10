import * as projectList from "../fixture/projectsData.json";
/**
 * Renders project section
 */
export class Projects {
  private readonly siteLinks: { link: string; title: string }[] = [
    {
      link: "https://abhisheksahu.netlify.app/",
      title: "Old Portfolio",
    },
    {
      link: 'https://leetcode.com/a-sahu-16/',
      title: 'LeetCode'
    },
    {
      link: 'https://auth.geeksforgeeks.org/user/asahum1608/',
      title: 'GeeksForGeeks'
    }
  ];
  

  /**
   * Responsible to created the whole section/screen
   */
  build() {
    // TODO: Make some interface or abstract class
    const body = document.getElementsByTagName("body");
    body[0].appendChild(this._section());
  }

  /**
   * Creates whole project section
   * @return {HTMLElement} The project section
   */
  _section(): HTMLElement {
    const projectSection = document.createElement("section");
    projectSection.className = "project";
    projectSection.id = "project";

    const wrapper = document.createElement("div");
    wrapper.classList.add("project-wrapper");
    // projectSection.appendChild(this._tagline());
    projectSection.appendChild(this._underDevelopment());
    projectSection.appendChild(this._siteLinks());

    // projectList.result.forEach((data) => {
    //   wrapper.appendChild(
    //       this._projectContainer(data.title,
    //           data.description,
    //           data.link,
    //           data.imgSet));
    // });
    // projectSection.appendChild(wrapper);
    return projectSection;
  }

  /**
   * Create a tagline div
   * @return {HTMLElement} The tagline for the project section
   */
  _tagline(): HTMLElement {
    const tagline1 = "# Projects ";
    const container = document.createElement("div");
    container.className = "tagline";

    const span1 = document.createElement("span");
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
   * @param {string} projectUrl - url to the project demo/code
   * @param {string[]} imgSet - Array of img associated with project
   * @return {HTMLElement} - project html element
   */
  _projectContainer(
    titleText: string,
    descriptionText: string,
    projectUrl: string,
    imgSet?: string[]
  ): HTMLElement {
    const container: HTMLElement = document.createElement("a");
    container.setAttribute("href", projectUrl);
    container.className = "itemContainer";

    const itemShowcase = document.createElement("div");
    itemShowcase.className = "item-showcase";

    if (imgSet) {
      const img = document.createElement("img");
      img.setAttribute("src", imgSet[0]);
      itemShowcase.appendChild(img);
    }

    const itemDetail = document.createElement("div");
    itemDetail.className = "item-detail";

    const title = document.createElement("h1");
    title.innerText = titleText;

    itemDetail.append(title);
    container.append(itemShowcase, itemDetail);
    return container;
  }

  /**
   * Create a tagline div
   * @return {HTMLElement} The tagline for the project section
   */
  _underDevelopment(): HTMLElement {
    const tagline1 =
      "This website is under construction," +
      "<br> meanwhile feel free to visit below links... ";
    const container = document.createElement("div");
    container.className = "tagline";
    const span1 = document.createElement("span");
    span1.innerHTML = tagline1;
    container.append(span1);
    return container;
  }

  /**
   * Creates a list of links to various platforms
   * @return {HTMLElement} A list for external site links
   */
  _siteLinks(): HTMLElement {
    const socialLinks: HTMLElement = document.createElement("ul");
    socialLinks.className = "links";

    for (let i: number = 0; i < this.siteLinks.length; i += 1) {
      const linkElement = document.createElement("li");
      const text: HTMLElement = document.createElement("a");
      text.setAttribute("href", this.siteLinks[i].link);
      text.setAttribute("target", "_blank");
      text.innerHTML = this.siteLinks[i].title;
      linkElement.append(text);
      socialLinks.appendChild(linkElement);
    }
    return socialLinks;
  }
}
