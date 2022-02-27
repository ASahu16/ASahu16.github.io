/**
 * Renders contact section
 */
export class Contact {
  private readonly linkText: string[] = ['in/a-sahu16/',
    '@iamsahu16',
    'github.com/ASahu16',
    'asahu.m1608@gmail.com'];
  private readonly linkSrc: string[] = ['https://www.linkedin.com/in/a-sahu16/',
    'https://twitter.com/iamsahu16',
    'https://github.com/ASahu16',
    'mailto:asahu.m1608@gmail.com'];
  private readonly linksIcons: string[] = ['linked-in.svg',
    'twitter.svg',
    'github.svg',
    'chat-bubble.svg'];

  /**
   * Responsible to created the whole section/screen
   */
  build() {
    // TODO: Make some interface or abstract class
    const body = document.getElementsByTagName('body');
    body[0].appendChild(this._section());
  }

  /**
  * Creates whole contact section
  * @return {HTMLElement} The contact section
  */
  _section(): HTMLElement {
    const contactSection = document.createElement('section');
    contactSection.className = 'contact';
    contactSection.id = 'contact';
    contactSection.appendChild(this._quickLinks());
    return contactSection;
  }

  /**
   * Create a div with some quick contact links
   * @return {HTMLElement} The quick links section for the contact
   */
  _quickLinks(): HTMLElement {
    const container = document.createElement('div');
    container.className = 'quick-links';
    container.append(this._tagline(), this._social());
    return container;
  }

  /**
   * Create a tagline div
   * @return {HTMLElement} The tagline for the contact section
   */
  _tagline(): HTMLElement {
    const tagline1 = 'Find me on:';
    const container = document.createElement('div');
    container.className = 'tagline';
    const span1 = document.createElement('span');
    span1.innerText = tagline1;
    container.append(span1);
    return container;
  }

  /**
   * Creates a list of links to various platforms
   * @return {HTMLElement} A list for social connection
   */
  _social(): HTMLElement {
    const socialLinks: HTMLElement = document.createElement('ul');
    socialLinks.className = 'social';

    for (let i: number = 0; i < this.linkText.length; i += 1) {
      const linkElement = document.createElement('li');
      const icon: HTMLImageElement = document.createElement('img');
      icon.src = `static/img/${this.linksIcons[i]}`;
      const text: HTMLElement = document.createElement('a');
      text.innerHTML = this.linkText[i];
      text.setAttribute('href', this.linkSrc[i]);
      linkElement.append(icon, text);
      socialLinks.appendChild(linkElement);
    }
    return socialLinks;
  }
}
