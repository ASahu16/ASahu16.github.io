(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "result":[
    {
      "title":"National Library",
      "description":"National Library is a window based application in which the whole records of the books in the library would be managing the details about different students who have received the books would be kept.",
      "imgSet":["https://sahu.netlify.app/images/nationalibrary.jpg"]
    },    
    {
      "title":"Payroll Management.",
      "description":"Payroll Management System is a corporate sector oriented software for management of salary and associated services in a company.",
      "imgSet":["https://sahu.netlify.app/images/payroll.png"]
    },   
    {
      "title":"DDUKK Stock Management.",
      "description":"This project is aimed at developing a desktop based application named DDUKK - Stock Management System for managing the assets of any organization. This system can be used to store the details of the inventory, stock maintenance, update the inventory.",
      "imgSet":["https://sahu.netlify.app/images/ddukk.jpg"]
    },
    {
      "title":"Echo Music Player",
      "description":"An android music player application with features like shake to change, visualizer, mark as favorite and basic functionalities that a music player can provide. This Music Player App is made for learning to build User Interfaces, add Functionalities, Building Echo modules using Kotlin.",
      "imgSet":["https://sahu.netlify.app/images/echomusicplayer.png"]
    },
    {
      "title":"Raktamrit.com",
      "description":"An online blood bank management system that helps in managing various blood bank operations effectively. The entire project has been developed keeping in view of the distributed client server computing technology, in mind. Any person who is interested in donating the blood can register himself. ",
      "imgSet":["https://sahu.netlify.app/images/bloodbank.jpg"]
    }
  ]
}
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contact_1 = require("./portfolio/contact");
const home_1 = require("./portfolio/home");
const project_1 = require("./portfolio/project");
const floatingButton_1 = require("./util/elements/floatingButton");
const home = new home_1.Home();
const projects = new project_1.Projects();
const contact = new contact_1.Contact();
const themeBtn = new floatingButton_1.FloatingButton();
window.onload = function () {
    themeBtn.build();
    home.build();
    projects.build();
    contact.build();
};

},{"./portfolio/contact":3,"./portfolio/home":4,"./portfolio/project":5,"./util/elements/floatingButton":6}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
    constructor() {
        this.linkText = ['in/a-sahu16/',
            '@iamsahu16',
            'github.com/ASahu16',
            'asahu.m1608@gmail.com'];
        this.linkSrc = ['https://www.linkedin.com/in/a-sahu16/',
            'https://twitter.com/iamsahu16',
            'https://github.com/ASahu16',
            'mailto:asahu.m1608@gmail.com'];
        this.linksIcons = ['linked-in.svg',
            'twitter.svg',
            'github.svg',
            'chat-bubble.svg'];
    }
    build() {
        const body = document.getElementsByTagName('body');
        body[0].appendChild(this._section());
    }
    _section() {
        const contactSection = document.createElement('section');
        contactSection.className = 'contact';
        contactSection.id = 'contact';
        contactSection.appendChild(this._quickLinks());
        return contactSection;
    }
    _quickLinks() {
        const container = document.createElement('div');
        container.className = 'quick-links';
        container.append(this._tagline(), this._social());
        return container;
    }
    _tagline() {
        const tagline1 = 'Find me on:';
        const container = document.createElement('div');
        container.className = 'tagline';
        const span1 = document.createElement('span');
        span1.innerText = tagline1;
        container.append(span1);
        return container;
    }
    _social() {
        const socialLinks = document.createElement('ul');
        socialLinks.className = 'social';
        for (let i = 0; i < this.linkText.length; i += 1) {
            const linkElement = document.createElement('li');
            const icon = document.createElement('img');
            icon.src = `static/img/${this.linksIcons[i]}`;
            const text = document.createElement('a');
            text.innerHTML = this.linkText[i];
            text.setAttribute('href', this.linkSrc[i]);
            linkElement.append(icon, text);
            socialLinks.appendChild(linkElement);
        }
        return socialLinks;
    }
}
exports.Contact = Contact;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
class Home {
    build() {
        const body = document.getElementsByTagName('body');
        body[0].appendChild(this._section());
    }
    _section() {
        const homeSection = document.createElement('section');
        homeSection.className = 'banner';
        homeSection.id = 'home';
        homeSection.appendChild(this._tagline());
        return homeSection;
    }
    _tagline() {
        const tagline1 = 'Welcome to My World';
        const tagline2 = 'Hi I\'m Abhishek Sahu';
        const container = document.createElement('div');
        container.className = 'tagline';
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
        span1.innerText = tagline1;
        span2.innerText = tagline2;
        container.append(span1, span2, span3);
        return container;
    }
}
exports.Home = Home;

},{}],5:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const projects = __importStar(require("../fixture/projectsData.json"));
class Projects {
    build() {
        const body = document.getElementsByTagName('body');
        body[0].appendChild(this._section());
    }
    _section() {
        const projectSection = document.createElement('section');
        projectSection.className = 'project';
        projectSection.id = 'project';
        projects.result.forEach((data) => {
            projectSection.append(this._projectContainer(data.title, data.description, data.imgSet));
        });
        return projectSection;
    }
    _tagline() {
        const tagline1 = '# Projects ';
        const container = document.createElement('div');
        container.className = 'tagline';
        const span1 = document.createElement('span');
        span1.innerText = tagline1;
        container.append(span1);
        return container;
    }
    _projectContainer(titleText, descriptionText, imgSet) {
        const container = document.createElement('article');
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
        content.append(title);
        container.append(bg, preview, content);
        return container;
    }
}
exports.Projects = Projects;

},{"../fixture/projectsData.json":1}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatingButton = void 0;
class FloatingButton {
    build() {
        const icon = document.createElement('i');
        icon.className = 'fixed-action-btn material-icons';
        icon.innerHTML = 'light_mode';
        icon.addEventListener('click', this.toggle_theme);
        const body = document.getElementsByTagName('body');
        body[0].appendChild(icon);
    }
    toggle_theme() {
        const body = document.querySelector('body');
        const ele = document.querySelector('.btn-floating .material-icons');
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            ele.innerHTML = 'light_mode';
        }
        else {
            body.classList.add('dark-theme');
            ele.innerHTML = 'dark_mode';
        }
    }
}
exports.FloatingButton = FloatingButton;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvZml4dHVyZS9wcm9qZWN0c0RhdGEuanNvbiIsInNyYy90cy9tYWluLnRzIiwic3JjL3RzL3BvcnRmb2xpby9jb250YWN0LnRzIiwic3JjL3RzL3BvcnRmb2xpby9ob21lLnRzIiwic3JjL3RzL3BvcnRmb2xpby9wcm9qZWN0LnRzIiwic3JjL3RzL3V0aWwvZWxlbWVudHMvZmxvYXRpbmdCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUJBLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsaURBQTZDO0FBQzdDLG1FQUE4RDtBQUU5RCxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3hCLE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsRUFBRSxDQUFDO0FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBQzlCLE1BQU0sUUFBUSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDZCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsQixDQUFDLENBQUM7Ozs7OztBQ1hGLE1BQWEsT0FBTztJQUFwQjtRQUNtQixhQUFRLEdBQWEsQ0FBQyxjQUFjO1lBQ25ELFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsdUJBQXVCLENBQUMsQ0FBQztRQUNWLFlBQU8sR0FBYSxDQUFDLHVDQUF1QztZQUMzRSwrQkFBK0I7WUFDL0IsNEJBQTRCO1lBQzVCLDhCQUE4QixDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFhLENBQUMsZUFBZTtZQUN0RCxhQUFhO1lBQ2IsWUFBWTtZQUNaLGlCQUFpQixDQUFDLENBQUM7SUFvRXZCLENBQUM7SUEvREMsS0FBSztRQUVILE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFNRCxRQUFRO1FBQ04sTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxjQUFjLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNyQyxjQUFjLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUM5QixjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFNRCxXQUFXO1FBQ1QsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNsRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBTUQsUUFBUTtRQUNOLE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUMvQixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBTUQsT0FBTztRQUNMLE1BQU0sV0FBVyxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELFdBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBRWpDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsTUFBTSxJQUFJLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM5QyxNQUFNLElBQUksR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9CLFdBQVcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUFoRkQsMEJBZ0ZDOzs7Ozs7QUNoRkQsTUFBYSxJQUFJO0lBSWYsS0FBSztRQUVILE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFNRCxRQUFRO1FBQ04sTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxXQUFXLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxXQUFXLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUN4QixXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFNRCxRQUFRO1FBQ04sTUFBTSxRQUFRLEdBQUcscUJBQXFCLENBQUM7UUFDdkMsTUFBTSxRQUFRLEdBQUcsdUJBQXVCLENBQUM7UUFFekMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVoQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMzQixLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUUzQixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBMUNELG9CQTBDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDRCx1RUFBeUQ7QUFJekQsTUFBYSxRQUFRO0lBSW5CLEtBQUs7UUFFSCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBTUQsUUFBUTtRQUNOLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsY0FBYyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDckMsY0FBYyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFFOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMvQixjQUFjLENBQUMsTUFBTSxDQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQU1ELFFBQVE7UUFDTixNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDL0IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVoQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQVlELGlCQUFpQixDQUNiLFNBQWlCLEVBQ2pCLGVBQXVCLEVBQ3ZCLE1BQWlCO1FBQ25CLE1BQU0sU0FBUyxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBRXRDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM5QixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtRQUNELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFHOUIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUk1QixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBTXRCLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFyRkQsNEJBcUZDOzs7Ozs7QUNyRkQsTUFBYSxjQUFjO0lBSXpCLEtBQUs7UUFDSCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUNBQWlDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdELFlBQVk7UUFDVixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQzdDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsK0JBQStCLENBQUUsQ0FBQztRQUNyRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqQyxHQUFHLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztTQUM3QjtJQUNILENBQUM7Q0FDRjtBQXpCRCx3Q0F5QkMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwicmVzdWx0XCI6W1xuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIk5hdGlvbmFsIExpYnJhcnlcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpcIk5hdGlvbmFsIExpYnJhcnkgaXMgYSB3aW5kb3cgYmFzZWQgYXBwbGljYXRpb24gaW4gd2hpY2ggdGhlIHdob2xlIHJlY29yZHMgb2YgdGhlIGJvb2tzIGluIHRoZSBsaWJyYXJ5IHdvdWxkIGJlIG1hbmFnaW5nIHRoZSBkZXRhaWxzIGFib3V0IGRpZmZlcmVudCBzdHVkZW50cyB3aG8gaGF2ZSByZWNlaXZlZCB0aGUgYm9va3Mgd291bGQgYmUga2VwdC5cIixcbiAgICAgIFwiaW1nU2V0XCI6W1wiaHR0cHM6Ly9zYWh1Lm5ldGxpZnkuYXBwL2ltYWdlcy9uYXRpb25hbGlicmFyeS5qcGdcIl1cbiAgICB9LCAgICBcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJQYXlyb2xsIE1hbmFnZW1lbnQuXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJQYXlyb2xsIE1hbmFnZW1lbnQgU3lzdGVtIGlzIGEgY29ycG9yYXRlIHNlY3RvciBvcmllbnRlZCBzb2Z0d2FyZSBmb3IgbWFuYWdlbWVudCBvZiBzYWxhcnkgYW5kIGFzc29jaWF0ZWQgc2VydmljZXMgaW4gYSBjb21wYW55LlwiLFxuICAgICAgXCJpbWdTZXRcIjpbXCJodHRwczovL3NhaHUubmV0bGlmeS5hcHAvaW1hZ2VzL3BheXJvbGwucG5nXCJdXG4gICAgfSwgICBcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJERFVLSyBTdG9jayBNYW5hZ2VtZW50LlwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiVGhpcyBwcm9qZWN0IGlzIGFpbWVkIGF0IGRldmVsb3BpbmcgYSBkZXNrdG9wIGJhc2VkIGFwcGxpY2F0aW9uIG5hbWVkIEREVUtLIC0gU3RvY2sgTWFuYWdlbWVudCBTeXN0ZW0gZm9yIG1hbmFnaW5nIHRoZSBhc3NldHMgb2YgYW55IG9yZ2FuaXphdGlvbi4gVGhpcyBzeXN0ZW0gY2FuIGJlIHVzZWQgdG8gc3RvcmUgdGhlIGRldGFpbHMgb2YgdGhlIGludmVudG9yeSwgc3RvY2sgbWFpbnRlbmFuY2UsIHVwZGF0ZSB0aGUgaW52ZW50b3J5LlwiLFxuICAgICAgXCJpbWdTZXRcIjpbXCJodHRwczovL3NhaHUubmV0bGlmeS5hcHAvaW1hZ2VzL2RkdWtrLmpwZ1wiXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiRWNobyBNdXNpYyBQbGF5ZXJcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpcIkFuIGFuZHJvaWQgbXVzaWMgcGxheWVyIGFwcGxpY2F0aW9uIHdpdGggZmVhdHVyZXMgbGlrZSBzaGFrZSB0byBjaGFuZ2UsIHZpc3VhbGl6ZXIsIG1hcmsgYXMgZmF2b3JpdGUgYW5kIGJhc2ljIGZ1bmN0aW9uYWxpdGllcyB0aGF0IGEgbXVzaWMgcGxheWVyIGNhbiBwcm92aWRlLiBUaGlzIE11c2ljIFBsYXllciBBcHAgaXMgbWFkZSBmb3IgbGVhcm5pbmcgdG8gYnVpbGQgVXNlciBJbnRlcmZhY2VzLCBhZGQgRnVuY3Rpb25hbGl0aWVzLCBCdWlsZGluZyBFY2hvIG1vZHVsZXMgdXNpbmcgS290bGluLlwiLFxuICAgICAgXCJpbWdTZXRcIjpbXCJodHRwczovL3NhaHUubmV0bGlmeS5hcHAvaW1hZ2VzL2VjaG9tdXNpY3BsYXllci5wbmdcIl1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIlJha3RhbXJpdC5jb21cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpcIkFuIG9ubGluZSBibG9vZCBiYW5rIG1hbmFnZW1lbnQgc3lzdGVtIHRoYXQgaGVscHMgaW4gbWFuYWdpbmcgdmFyaW91cyBibG9vZCBiYW5rIG9wZXJhdGlvbnMgZWZmZWN0aXZlbHkuIFRoZSBlbnRpcmUgcHJvamVjdCBoYXMgYmVlbiBkZXZlbG9wZWQga2VlcGluZyBpbiB2aWV3IG9mIHRoZSBkaXN0cmlidXRlZCBjbGllbnQgc2VydmVyIGNvbXB1dGluZyB0ZWNobm9sb2d5LCBpbiBtaW5kLiBBbnkgcGVyc29uIHdobyBpcyBpbnRlcmVzdGVkIGluIGRvbmF0aW5nIHRoZSBibG9vZCBjYW4gcmVnaXN0ZXIgaGltc2VsZi4gXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvYmxvb2RiYW5rLmpwZ1wiXVxuICAgIH1cbiAgXVxufSIsImltcG9ydCB7Q29udGFjdH0gZnJvbSAnLi9wb3J0Zm9saW8vY29udGFjdCc7XG5pbXBvcnQge0hvbWV9IGZyb20gJy4vcG9ydGZvbGlvL2hvbWUnO1xuaW1wb3J0IHtQcm9qZWN0c30gZnJvbSAnLi9wb3J0Zm9saW8vcHJvamVjdCc7XG5pbXBvcnQge0Zsb2F0aW5nQnV0dG9ufSBmcm9tICcuL3V0aWwvZWxlbWVudHMvZmxvYXRpbmdCdXR0b24nO1xuXG5jb25zdCBob21lID0gbmV3IEhvbWUoKTtcbmNvbnN0IHByb2plY3RzID0gbmV3IFByb2plY3RzKCk7XG5jb25zdCBjb250YWN0ID0gbmV3IENvbnRhY3QoKTtcbmNvbnN0IHRoZW1lQnRuID0gbmV3IEZsb2F0aW5nQnV0dG9uKCk7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoZW1lQnRuLmJ1aWxkKCk7XG4gIGhvbWUuYnVpbGQoKTtcbiAgcHJvamVjdHMuYnVpbGQoKTtcbiAgY29udGFjdC5idWlsZCgpO1xufTtcbiIsIi8qKlxuICogUmVuZGVycyBjb250YWN0IHNlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IGxpbmtUZXh0OiBzdHJpbmdbXSA9IFsnaW4vYS1zYWh1MTYvJyxcbiAgICAnQGlhbXNhaHUxNicsXG4gICAgJ2dpdGh1Yi5jb20vQVNhaHUxNicsXG4gICAgJ2FzYWh1Lm0xNjA4QGdtYWlsLmNvbSddO1xuICBwcml2YXRlIHJlYWRvbmx5IGxpbmtTcmM6IHN0cmluZ1tdID0gWydodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYS1zYWh1MTYvJyxcbiAgICAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pYW1zYWh1MTYnLFxuICAgICdodHRwczovL2dpdGh1Yi5jb20vQVNhaHUxNicsXG4gICAgJ21haWx0bzphc2FodS5tMTYwOEBnbWFpbC5jb20nXTtcbiAgcHJpdmF0ZSByZWFkb25seSBsaW5rc0ljb25zOiBzdHJpbmdbXSA9IFsnbGlua2VkLWluLnN2ZycsXG4gICAgJ3R3aXR0ZXIuc3ZnJyxcbiAgICAnZ2l0aHViLnN2ZycsXG4gICAgJ2NoYXQtYnViYmxlLnN2ZyddO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGVkIHRoZSB3aG9sZSBzZWN0aW9uL3NjcmVlblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzb21lIGludGVyZmFjZSBvciBhYnN0cmFjdCBjbGFzc1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZXMgd2hvbGUgY29udGFjdCBzZWN0aW9uXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBjb250YWN0IHNlY3Rpb25cbiAgKi9cbiAgX3NlY3Rpb24oKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTmFtZSA9ICdjb250YWN0JztcbiAgICBjb250YWN0U2VjdGlvbi5pZCA9ICdjb250YWN0JztcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl9xdWlja0xpbmtzKCkpO1xuICAgIHJldHVybiBjb250YWN0U2VjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkaXYgd2l0aCBzb21lIHF1aWNrIGNvbnRhY3QgbGlua3NcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBxdWljayBsaW5rcyBzZWN0aW9uIGZvciB0aGUgY29udGFjdFxuICAgKi9cbiAgX3F1aWNrTGlua3MoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAncXVpY2stbGlua3MnO1xuICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fdGFnbGluZSgpLCB0aGlzLl9zb2NpYWwoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0YWdsaW5lIGRpdlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHRhZ2xpbmUgZm9yIHRoZSBjb250YWN0IHNlY3Rpb25cbiAgICovXG4gIF90YWdsaW5lKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YWdsaW5lMSA9ICdGaW5kIG1lIG9uOic7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YWdsaW5lJztcbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGxpbmtzIHRvIHZhcmlvdXMgcGxhdGZvcm1zXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBBIGxpc3QgZm9yIHNvY2lhbCBjb25uZWN0aW9uXG4gICAqL1xuICBfc29jaWFsKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzb2NpYWxMaW5rczogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHNvY2lhbExpbmtzLmNsYXNzTmFtZSA9ICdzb2NpYWwnO1xuXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubGlua1RleHQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvbnN0IGljb246IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGljb24uc3JjID0gYHN0YXRpYy9pbWcvJHt0aGlzLmxpbmtzSWNvbnNbaV19YDtcbiAgICAgIGNvbnN0IHRleHQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdGV4dC5pbm5lckhUTUwgPSB0aGlzLmxpbmtUZXh0W2ldO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLmxpbmtTcmNbaV0pO1xuICAgICAgbGlua0VsZW1lbnQuYXBwZW5kKGljb24sIHRleHQpO1xuICAgICAgc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gc29jaWFsTGlua3M7XG4gIH1cbn1cbiIsIi8qKlxuICogUmVuZGVycyBob21lIHNlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEhvbWUge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlZCB0aGUgd2hvbGUgc2VjdGlvbi9zY3JlZW5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIC8vIFRPRE86IE1ha2Ugc29tZSBpbnRlcmZhY2Ugb3IgYWJzdHJhY3QgY2xhc3NcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHRoaXMuX3NlY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGVzIHdob2xlIGhvbWUgc2VjdGlvblxuICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgaG9tZSBzZWN0aW9uXG4gICovXG4gIF9zZWN0aW9uKCk6SFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhvbWVTZWN0aW9uLmNsYXNzTmFtZSA9ICdiYW5uZXInO1xuICAgIGhvbWVTZWN0aW9uLmlkID0gJ2hvbWUnO1xuICAgIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3RhZ2xpbmUoKSk7XG4gICAgcmV0dXJuIGhvbWVTZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIGhvbWUgc2VjdGlvblxuICAgKi9cbiAgX3RhZ2xpbmUoKTpIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdGFnbGluZTEgPSAnV2VsY29tZSB0byBNeSBXb3JsZCc7XG4gICAgY29uc3QgdGFnbGluZTIgPSAnSGkgSVxcJ20gQWJoaXNoZWsgU2FodSc7XG4gICAgLy8gY29uc3QgdGFnbGluZTMgPSAnQSBkZXZlbG9wZXInO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFnbGluZSc7XG5cbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBzcGFuMi5pbm5lclRleHQgPSB0YWdsaW5lMjtcbiAgICAvLyBzcGFuMy5pbm5lclRleHQgPSB0YWdsaW5lMztcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xLCBzcGFuMiwgc3BhbjMpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHByb2plY3RzIGZyb20gJy4uL2ZpeHR1cmUvcHJvamVjdHNEYXRhLmpzb24nO1xuLyoqXG4gKiBSZW5kZXJzIHByb2plY3Qgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgUHJvamVjdHMge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlZCB0aGUgd2hvbGUgc2VjdGlvbi9zY3JlZW5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIC8vIFRPRE86IE1ha2Ugc29tZSBpbnRlcmZhY2Ugb3IgYWJzdHJhY3QgY2xhc3NcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHRoaXMuX3NlY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGVzIHdob2xlIHByb2plY3Qgc2VjdGlvblxuICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgcHJvamVjdCBzZWN0aW9uXG4gICovXG4gIF9zZWN0aW9uKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5jbGFzc05hbWUgPSAncHJvamVjdCc7XG4gICAgcHJvamVjdFNlY3Rpb24uaWQgPSAncHJvamVjdCc7XG4gICAgLy8gcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5fdGFnbGluZSgpKTtcbiAgICBwcm9qZWN0cy5yZXN1bHQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKFxuICAgICAgICAgIHRoaXMuX3Byb2plY3RDb250YWluZXIoZGF0YS50aXRsZSwgZGF0YS5kZXNjcmlwdGlvbiwgZGF0YS5pbWdTZXQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvamVjdFNlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgcHJvamVjdCBzZWN0aW9uXG4gICAqL1xuICBfdGFnbGluZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdGFnbGluZTEgPSAnIyBQcm9qZWN0cyAnO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFnbGluZSc7XG5cbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm9qZWN0IGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBCYXNpY2FsbHkgYSBkaXYgZm9yIHBlcnNvbiBwcm9qZWN0c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVUZXh0IC0gdGl0bGUgb2YgdGhlIHByb2plY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uVGV4dCAtIHByb2plY3QgZGVzY3JpcHRpb25cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gaW1nU2V0IC0gQXJyYXkgb2YgaW1nZXMgYXNzb2NpYXRlZCB3aXRoIHByb2plY3RcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gcHJvamVjdCBodG1sIGVsZW1lbnRcbiAgICovXG4gIF9wcm9qZWN0Q29udGFpbmVyKFxuICAgICAgdGl0bGVUZXh0OiBzdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvblRleHQ6IHN0cmluZyxcbiAgICAgIGltZ1NldD86IHN0cmluZ1tdKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdpdGVtQ29udGFpbmVyJztcblxuICAgIGNvbnN0IGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmcuY2xhc3NOYW1lID0gJ2JnJztcbiAgICBjb25zdCBwcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJldmlldy5jbGFzc05hbWUgPSAncHJldmlldyc7XG4gICAgaWYgKGltZ1NldCkge1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTZXRbMF0pO1xuICAgICAgcHJldmlldy5hcHBlbmRDaGlsZChpbWcpO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCc7XG5cblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XG4gICAgLy8gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25UZXh0O1xuXG4gICAgY29udGVudC5hcHBlbmQodGl0bGUpO1xuICAgIC8vIGlmIChpbWdTZXQpIHtcbiAgICAvLyAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIC8vICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nU2V0WzBdKTtcbiAgICAvLyAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpXG4gICAgLy8gfVxuICAgIGNvbnRhaW5lci5hcHBlbmQoYmcsIHByZXZpZXcsIGNvbnRlbnQpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cbiIsIlxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdCdXR0b24ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlIGEgZmxvYXRpbmcgYWN0aW9uIGJ1dHRvblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmaXhlZC1hY3Rpb24tYnRuIG1hdGVyaWFsLWljb25zJztcbiAgICBpY29uLmlubmVySFRNTCA9ICdsaWdodF9tb2RlJztcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVfdGhlbWUpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICB0b2dnbGVfdGhlbWUoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSE7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1mbG9hdGluZyAubWF0ZXJpYWwtaWNvbnMnKSE7XG4gICAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLXRoZW1lJykpIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xuICAgICAgZWxlLmlubmVySFRNTCA9ICdsaWdodF9tb2RlJztcbiAgICB9IGVsc2Uge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLXRoZW1lJyk7XG4gICAgICBlbGUuaW5uZXJIVE1MID0gJ2RhcmtfbW9kZSc7XG4gICAgfVxuICB9XG59XG4iXX0=
