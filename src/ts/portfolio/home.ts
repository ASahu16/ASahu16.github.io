export class Home {
  build(){  
    const body = document.getElementsByTagName("body");
    body[0].appendChild(this._section());
  }
  
  _section():HTMLElement{
    const homeSection = document.createElement('section');
    homeSection.className = 'banner';
    homeSection.id = 'home';
    homeSection.appendChild(this._tagline());
    return homeSection
  }

  _tagline():HTMLElement {
    const tagline1 = "Hi,";
    const tagline2 = "I'm Abhishek Sahu";
    const tagline3 = "A developer";
    const container = document.createElement("div");
    container.className = 'tagline'

    const span1 =   document.createElement("span");
    const span2 =   document.createElement("span");
    const span3 =   document.createElement("span");
    span1.innerText = tagline1;
    span2.innerText = tagline2;
    // span3.innerText = tagline3;
    container.append(span1,span2,span3);
    return container;
  }

}