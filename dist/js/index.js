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
        const wrapper = document.createElement('div');
        wrapper.classList.add('project-wrapper');
        projects.result.forEach((data) => {
            wrapper.appendChild(this._projectContainer(data.title, data.description, data.imgSet));
        });
        projectSection.appendChild(wrapper);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvZml4dHVyZS9wcm9qZWN0c0RhdGEuanNvbiIsInNyYy90cy9tYWluLnRzIiwic3JjL3RzL3BvcnRmb2xpby9jb250YWN0LnRzIiwic3JjL3RzL3BvcnRmb2xpby9ob21lLnRzIiwic3JjL3RzL3BvcnRmb2xpby9wcm9qZWN0LnRzIiwic3JjL3RzL3V0aWwvZWxlbWVudHMvZmxvYXRpbmdCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUJBLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsaURBQTZDO0FBQzdDLG1FQUE4RDtBQUU5RCxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3hCLE1BQU0sUUFBUSxHQUFHLElBQUksa0JBQVEsRUFBRSxDQUFDO0FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBQzlCLE1BQU0sUUFBUSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDZCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsQixDQUFDLENBQUM7Ozs7OztBQ1hGLE1BQWEsT0FBTztJQUFwQjtRQUNtQixhQUFRLEdBQWEsQ0FBQyxjQUFjO1lBQ25ELFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsdUJBQXVCLENBQUMsQ0FB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QU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQXpGRCw0QkF5RkM7Ozs7OztBQ3pGRCxNQUFhLGNBQWM7SUFJekIsS0FBSztRQUNILE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBR0QsWUFBWTtRQUNWLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDN0MsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBRSxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztDQUNGO0FBekJELHdDQXlCQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJyZXN1bHRcIjpbXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiTmF0aW9uYWwgTGlicmFyeVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiTmF0aW9uYWwgTGlicmFyeSBpcyBhIHdpbmRvdyBiYXNlZCBhcHBsaWNhdGlvbiBpbiB3aGljaCB0aGUgd2hvbGUgcmVjb3JkcyBvZiB0aGUgYm9va3MgaW4gdGhlIGxpYnJhcnkgd291bGQgYmUgbWFuYWdpbmcgdGhlIGRldGFpbHMgYWJvdXQgZGlmZmVyZW50IHN0dWRlbnRzIHdobyBoYXZlIHJlY2VpdmVkIHRoZSBib29rcyB3b3VsZCBiZSBrZXB0LlwiLFxuICAgICAgXCJpbWdTZXRcIjpbXCJodHRwczovL3NhaHUubmV0bGlmeS5hcHAvaW1hZ2VzL25hdGlvbmFsaWJyYXJ5LmpwZ1wiXVxuICAgIH0sICAgIFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIlBheXJvbGwgTWFuYWdlbWVudC5cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlBheXJvbGwgTWFuYWdlbWVudCBTeXN0ZW0gaXMgYSBjb3Jwb3JhdGUgc2VjdG9yIG9yaWVudGVkIHNvZnR3YXJlIGZvciBtYW5hZ2VtZW50IG9mIHNhbGFyeSBhbmQgYXNzb2NpYXRlZCBzZXJ2aWNlcyBpbiBhIGNvbXBhbnkuXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvcGF5cm9sbC5wbmdcIl1cbiAgICB9LCAgIFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIkREVUtLIFN0b2NrIE1hbmFnZW1lbnQuXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJUaGlzIHByb2plY3QgaXMgYWltZWQgYXQgZGV2ZWxvcGluZyBhIGRlc2t0b3AgYmFzZWQgYXBwbGljYXRpb24gbmFtZWQgRERVS0sgLSBTdG9jayBNYW5hZ2VtZW50IFN5c3RlbSBmb3IgbWFuYWdpbmcgdGhlIGFzc2V0cyBvZiBhbnkgb3JnYW5pemF0aW9uLiBUaGlzIHN5c3RlbSBjYW4gYmUgdXNlZCB0byBzdG9yZSB0aGUgZGV0YWlscyBvZiB0aGUgaW52ZW50b3J5LCBzdG9jayBtYWludGVuYW5jZSwgdXBkYXRlIHRoZSBpbnZlbnRvcnkuXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvZGR1a2suanBnXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJFY2hvIE11c2ljIFBsYXllclwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiQW4gYW5kcm9pZCBtdXNpYyBwbGF5ZXIgYXBwbGljYXRpb24gd2l0aCBmZWF0dXJlcyBsaWtlIHNoYWtlIHRvIGNoYW5nZSwgdmlzdWFsaXplciwgbWFyayBhcyBmYXZvcml0ZSBhbmQgYmFzaWMgZnVuY3Rpb25hbGl0aWVzIHRoYXQgYSBtdXNpYyBwbGF5ZXIgY2FuIHByb3ZpZGUuIFRoaXMgTXVzaWMgUGxheWVyIEFwcCBpcyBtYWRlIGZvciBsZWFybmluZyB0byBidWlsZCBVc2VyIEludGVyZmFjZXMsIGFkZCBGdW5jdGlvbmFsaXRpZXMsIEJ1aWxkaW5nIEVjaG8gbW9kdWxlcyB1c2luZyBLb3RsaW4uXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvZWNob211c2ljcGxheWVyLnBuZ1wiXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiUmFrdGFtcml0LmNvbVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiQW4gb25saW5lIGJsb29kIGJhbmsgbWFuYWdlbWVudCBzeXN0ZW0gdGhhdCBoZWxwcyBpbiBtYW5hZ2luZyB2YXJpb3VzIGJsb29kIGJhbmsgb3BlcmF0aW9ucyBlZmZlY3RpdmVseS4gVGhlIGVudGlyZSBwcm9qZWN0IGhhcyBiZWVuIGRldmVsb3BlZCBrZWVwaW5nIGluIHZpZXcgb2YgdGhlIGRpc3RyaWJ1dGVkIGNsaWVudCBzZXJ2ZXIgY29tcHV0aW5nIHRlY2hub2xvZ3ksIGluIG1pbmQuIEFueSBwZXJzb24gd2hvIGlzIGludGVyZXN0ZWQgaW4gZG9uYXRpbmcgdGhlIGJsb29kIGNhbiByZWdpc3RlciBoaW1zZWxmLiBcIixcbiAgICAgIFwiaW1nU2V0XCI6W1wiaHR0cHM6Ly9zYWh1Lm5ldGxpZnkuYXBwL2ltYWdlcy9ibG9vZGJhbmsuanBnXCJdXG4gICAgfVxuICBdXG59IiwiaW1wb3J0IHtDb250YWN0fSBmcm9tICcuL3BvcnRmb2xpby9jb250YWN0JztcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9wb3J0Zm9saW8vaG9tZSc7XG5pbXBvcnQge1Byb2plY3RzfSBmcm9tICcuL3BvcnRmb2xpby9wcm9qZWN0JztcbmltcG9ydCB7RmxvYXRpbmdCdXR0b259IGZyb20gJy4vdXRpbC9lbGVtZW50cy9mbG9hdGluZ0J1dHRvbic7XG5cbmNvbnN0IGhvbWUgPSBuZXcgSG9tZSgpO1xuY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcbmNvbnN0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xuY29uc3QgdGhlbWVCdG4gPSBuZXcgRmxvYXRpbmdCdXR0b24oKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhlbWVCdG4uYnVpbGQoKTtcbiAgaG9tZS5idWlsZCgpO1xuICBwcm9qZWN0cy5idWlsZCgpO1xuICBjb250YWN0LmJ1aWxkKCk7XG59O1xuIiwiLyoqXG4gKiBSZW5kZXJzIGNvbnRhY3Qgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlua1RleHQ6IHN0cmluZ1tdID0gWydpbi9hLXNhaHUxNi8nLFxuICAgICdAaWFtc2FodTE2JyxcbiAgICAnZ2l0aHViLmNvbS9BU2FodTE2JyxcbiAgICAnYXNhaHUubTE2MDhAZ21haWwuY29tJ107XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlua1NyYzogc3RyaW5nW10gPSBbJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hLXNhaHUxNi8nLFxuICAgICdodHRwczovL3R3aXR0ZXIuY29tL2lhbXNhaHUxNicsXG4gICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BU2FodTE2JyxcbiAgICAnbWFpbHRvOmFzYWh1Lm0xNjA4QGdtYWlsLmNvbSddO1xuICBwcml2YXRlIHJlYWRvbmx5IGxpbmtzSWNvbnM6IHN0cmluZ1tdID0gWydsaW5rZWQtaW4uc3ZnJyxcbiAgICAndHdpdHRlci5zdmcnLFxuICAgICdnaXRodWIuc3ZnJyxcbiAgICAnY2hhdC1idWJibGUuc3ZnJ107XG5cbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIHRvIGNyZWF0ZWQgdGhlIHdob2xlIHNlY3Rpb24vc2NyZWVuXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHNvbWUgaW50ZXJmYWNlIG9yIGFic3RyYWN0IGNsYXNzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aGlzLl9zZWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlcyB3aG9sZSBjb250YWN0IHNlY3Rpb25cbiAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIGNvbnRhY3Qgc2VjdGlvblxuICAqL1xuICBfc2VjdGlvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3RTZWN0aW9uLmlkID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3F1aWNrTGlua3MoKSk7XG4gICAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGRpdiB3aXRoIHNvbWUgcXVpY2sgY29udGFjdCBsaW5rc1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHF1aWNrIGxpbmtzIHNlY3Rpb24gZm9yIHRoZSBjb250YWN0XG4gICAqL1xuICBfcXVpY2tMaW5rcygpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdxdWljay1saW5rcyc7XG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLl90YWdsaW5lKCksIHRoaXMuX3NvY2lhbCgpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIGNvbnRhY3Qgc2VjdGlvblxuICAgKi9cbiAgX3RhZ2xpbmUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhZ2xpbmUxID0gJ0ZpbmQgbWUgb246JztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3RhZ2xpbmUnO1xuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4xLmlubmVyVGV4dCA9IHRhZ2xpbmUxO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxpc3Qgb2YgbGlua3MgdG8gdmFyaW91cyBwbGF0Zm9ybXNcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEEgbGlzdCBmb3Igc29jaWFsIGNvbm5lY3Rpb25cbiAgICovXG4gIF9zb2NpYWwoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNvY2lhbExpbmtzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgc29jaWFsTGlua3MuY2xhc3NOYW1lID0gJ3NvY2lhbCc7XG5cbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5saW5rVGV4dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgaWNvbjogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaWNvbi5zcmMgPSBgc3RhdGljL2ltZy8ke3RoaXMubGlua3NJY29uc1tpXX1gO1xuICAgICAgY29uc3QgdGV4dDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB0ZXh0LmlubmVySFRNTCA9IHRoaXMubGlua1RleHRbaV07XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMubGlua1NyY1tpXSk7XG4gICAgICBsaW5rRWxlbWVudC5hcHBlbmQoaWNvbiwgdGV4dCk7XG4gICAgICBzb2NpYWxMaW5rcy5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBzb2NpYWxMaW5rcztcbiAgfVxufVxuIiwiLyoqXG4gKiBSZW5kZXJzIGhvbWUgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgSG9tZSB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGVkIHRoZSB3aG9sZSBzZWN0aW9uL3NjcmVlblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzb21lIGludGVyZmFjZSBvciBhYnN0cmFjdCBjbGFzc1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZXMgd2hvbGUgaG9tZSBzZWN0aW9uXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBob21lIHNlY3Rpb25cbiAgKi9cbiAgX3NlY3Rpb24oKTpIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaG9tZVNlY3Rpb24uY2xhc3NOYW1lID0gJ2Jhbm5lcic7XG4gICAgaG9tZVNlY3Rpb24uaWQgPSAnaG9tZSc7XG4gICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5fdGFnbGluZSgpKTtcbiAgICByZXR1cm4gaG9tZVNlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgaG9tZSBzZWN0aW9uXG4gICAqL1xuICBfdGFnbGluZSgpOkhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YWdsaW5lMSA9ICdXZWxjb21lIHRvIE15IFdvcmxkJztcbiAgICBjb25zdCB0YWdsaW5lMiA9ICdIaSBJXFwnbSBBYmhpc2hlayBTYWh1JztcbiAgICAvLyBjb25zdCB0YWdsaW5lMyA9ICdBIGRldmVsb3Blcic7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YWdsaW5lJztcblxuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4xLmlubmVyVGV4dCA9IHRhZ2xpbmUxO1xuICAgIHNwYW4yLmlubmVyVGV4dCA9IHRhZ2xpbmUyO1xuICAgIC8vIHNwYW4zLmlubmVyVGV4dCA9IHRhZ2xpbmUzO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEsIHNwYW4yLCBzcGFuMyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSAnLi4vZml4dHVyZS9wcm9qZWN0c0RhdGEuanNvbic7XG4vKipcbiAqIFJlbmRlcnMgcHJvamVjdCBzZWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9qZWN0cyB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGVkIHRoZSB3aG9sZSBzZWN0aW9uL3NjcmVlblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzb21lIGludGVyZmFjZSBvciBhYnN0cmFjdCBjbGFzc1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZXMgd2hvbGUgcHJvamVjdCBzZWN0aW9uXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBwcm9qZWN0IHNlY3Rpb25cbiAgKi9cbiAgX3NlY3Rpb24oKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHByb2plY3RTZWN0aW9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcbiAgICBwcm9qZWN0U2VjdGlvbi5pZCA9ICdwcm9qZWN0JztcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtd3JhcHBlcicpO1xuICAgIC8vIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3RhZ2xpbmUoKSk7XG4gICAgcHJvamVjdHMucmVzdWx0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgdGhpcy5fcHJvamVjdENvbnRhaW5lcihkYXRhLnRpdGxlLCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLmltZ1NldCkpO1xuICAgIH0pO1xuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIHJldHVybiBwcm9qZWN0U2VjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0YWdsaW5lIGRpdlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHRhZ2xpbmUgZm9yIHRoZSBwcm9qZWN0IHNlY3Rpb25cbiAgICovXG4gIF90YWdsaW5lKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YWdsaW5lMSA9ICcjIFByb2plY3RzICc7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YWdsaW5lJztcblxuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4xLmlubmVyVGV4dCA9IHRhZ2xpbmUxO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHByb2plY3QgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEJhc2ljYWxseSBhIGRpdiBmb3IgcGVyc29uIHByb2plY3RzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVRleHQgLSB0aXRsZSBvZiB0aGUgcHJvamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25UZXh0IC0gcHJvamVjdCBkZXNjcmlwdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBpbWdTZXQgLSBBcnJheSBvZiBpbWdlcyBhc3NvY2lhdGVkIHdpdGggcHJvamVjdFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBwcm9qZWN0IGh0bWwgZWxlbWVudFxuICAgKi9cbiAgX3Byb2plY3RDb250YWluZXIoXG4gICAgICB0aXRsZVRleHQ6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uVGV4dDogc3RyaW5nLFxuICAgICAgaW1nU2V0Pzogc3RyaW5nW10pOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2l0ZW1Db250YWluZXInO1xuXG4gICAgY29uc3QgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiZy5jbGFzc05hbWUgPSAnYmcnO1xuICAgIGNvbnN0IHByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmV2aWV3LmNsYXNzTmFtZSA9ICdwcmV2aWV3JztcbiAgICBpZiAoaW1nU2V0KSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZ1NldFswXSk7XG4gICAgICBwcmV2aWV3LmFwcGVuZENoaWxkKGltZyk7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50JztcblxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvLyBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvblRleHQ7XG5cbiAgICBjb250ZW50LmFwcGVuZCh0aXRsZSk7XG4gICAgLy8gaWYgKGltZ1NldCkge1xuICAgIC8vICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgLy8gICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTZXRbMF0pO1xuICAgIC8vICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZylcbiAgICAvLyB9XG4gICAgY29udGFpbmVyLmFwcGVuZChiZywgcHJldmlldywgY29udGVudCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuIiwiXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG9hdGluZ0J1dHRvbiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGUgYSBmbG9hdGluZyBhY3Rpb24gYnV0dG9uXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGljb24uY2xhc3NOYW1lID0gJ2ZpeGVkLWFjdGlvbi1idG4gbWF0ZXJpYWwtaWNvbnMnO1xuICAgIGljb24uaW5uZXJIVE1MID0gJ2xpZ2h0X21vZGUnO1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZV90aGVtZSk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZChpY29uKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIHRvZ2dsZV90aGVtZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpITtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWZsb2F0aW5nIC5tYXRlcmlhbC1pY29ucycpITtcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstdGhlbWUnKSkge1xuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLXRoZW1lJyk7XG4gICAgICBlbGUuaW5uZXJIVE1MID0gJ2xpZ2h0X21vZGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstdGhlbWUnKTtcbiAgICAgIGVsZS5pbm5lckhUTUwgPSAnZGFya19tb2RlJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==
