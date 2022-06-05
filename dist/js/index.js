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
const work_1 = require("./portfolio/work");
const floatingButton_1 = require("./util/elements/floatingButton");
const home = new home_1.Home();
const work = new work_1.Work();
const contact = new contact_1.Contact();
const themeBtn = new floatingButton_1.FloatingButton();
window.onload = function () {
    themeBtn.build();
    home.build();
    work.build();
    contact.build();
};

},{"./portfolio/contact":3,"./portfolio/home":4,"./portfolio/work":5,"./util/elements/floatingButton":6}],3:[function(require,module,exports){
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
exports.Work = void 0;
const projects = __importStar(require("../fixture/work.json"));
class Work {
    build() {
        const body = document.getElementsByTagName('body');
        body[0].appendChild(this._section());
    }
    _section() {
        const workSection = document.createElement('section');
        workSection.className = 'work';
        workSection.id = 'work';
        projects.result.forEach((data) => {
            workSection.append(this._workContainer(data.title, data.description, data.imgSet));
        });
        return workSection;
    }
    _tagline() {
        const tagline1 = '# Work ';
        const container = document.createElement('div');
        container.className = 'tagline';
        const span1 = document.createElement('span');
        span1.innerText = tagline1;
        container.append(span1);
        return container;
    }
    _workContainer(titleText, descriptionText, imgSet) {
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
exports.Work = Work;

},{"../fixture/work.json":1}],6:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvZml4dHVyZS93b3JrLmpzb24iLCJzcmMvdHMvbWFpbi50cyIsInNyYy90cy9wb3J0Zm9saW8vY29udGFjdC50cyIsInNyYy90cy9wb3J0Zm9saW8vaG9tZS50cyIsInNyYy90cy9wb3J0Zm9saW8vd29yay50cyIsInNyYy90cy91dGlsL2VsZW1lbnRzL2Zsb2F0aW5nQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVCQSxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLDJDQUFzQztBQUN0QyxtRUFBOEQ7QUFFOUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3hCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBQzlCLE1BQU0sUUFBUSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDZCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQzs7Ozs7O0FDWEYsTUFBYSxPQUFPO0lBQXBCO1FBQ21CLGFBQVEsR0FBYSxDQUFDLGNBQWM7WUFDbkQsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQix1QkFBdUIsQ0FBQyxDQUFDO1FBQ1YsWUFBTyxHQUFhLENBQUMsdUNBQXVDO1lBQzNFLCtCQUErQjtZQUMvQiw0QkFBNEI7WUFDNUIsOEJBQThCLENBQUMsQ0FBQztRQUNqQixlQUFVLEdBQWEsQ0FBQyxlQUFlO1lBQ3RELGFBQWE7WUFDYixZQUFZO1lBQ1osaUJBQWlCLENBQUMsQ0FBQztJQW9FdkIsQ0FBQztJQS9EQyxLQUFLO1FBRUgsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQU1ELFFBQVE7UUFDTixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELGNBQWMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQzlCLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDL0MsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQU1ELFdBQVc7UUFDVCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFNRCxRQUFRO1FBQ04sTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQy9CLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDaEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFNRCxPQUFPO1FBQ0wsTUFBTSxXQUFXLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsV0FBVyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFFakMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxNQUFNLElBQUksR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLGNBQWMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzlDLE1BQU0sSUFBSSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0IsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQWhGRCwwQkFnRkM7Ozs7OztBQ2hGRCxNQUFhLElBQUk7SUFJZixLQUFLO1FBRUgsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQU1ELFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDekMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQU1ELFFBQVE7UUFDTixNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUN2QyxNQUFNLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUV6QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRWhDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzNCLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBRTNCLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUExQ0Qsb0JBMENDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NELCtEQUFpRDtBQUlqRCxNQUFhLElBQUk7SUFJZixLQUFLO1FBRUgsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQU1ELFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBRXhCLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDL0IsV0FBVyxDQUFDLE1BQU0sQ0FDZCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFNRCxRQUFRO1FBQ04sTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzNCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFaEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFZRCxjQUFjLENBQ1YsU0FBaUIsRUFDakIsZUFBdUIsRUFDdkIsTUFBaUI7UUFDbkIsTUFBTSxTQUFTLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsU0FBUyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFFdEMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNwQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUc5QixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBSTVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFNdEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQXJGRCxvQkFxRkM7Ozs7OztBQ3JGRCxNQUFhLGNBQWM7SUFJekIsS0FBSztRQUNILE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQ0FBaUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBR0QsWUFBWTtRQUNWLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDN0MsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBRSxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztDQUNGO0FBekJELHdDQXlCQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJyZXN1bHRcIjpbXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiTmF0aW9uYWwgTGlicmFyeVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiTmF0aW9uYWwgTGlicmFyeSBpcyBhIHdpbmRvdyBiYXNlZCBhcHBsaWNhdGlvbiBpbiB3aGljaCB0aGUgd2hvbGUgcmVjb3JkcyBvZiB0aGUgYm9va3MgaW4gdGhlIGxpYnJhcnkgd291bGQgYmUgbWFuYWdpbmcgdGhlIGRldGFpbHMgYWJvdXQgZGlmZmVyZW50IHN0dWRlbnRzIHdobyBoYXZlIHJlY2VpdmVkIHRoZSBib29rcyB3b3VsZCBiZSBrZXB0LlwiLFxuICAgICAgXCJpbWdTZXRcIjpbXCJodHRwczovL3NhaHUubmV0bGlmeS5hcHAvaW1hZ2VzL25hdGlvbmFsaWJyYXJ5LmpwZ1wiXVxuICAgIH0sICAgIFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIlBheXJvbGwgTWFuYWdlbWVudC5cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlBheXJvbGwgTWFuYWdlbWVudCBTeXN0ZW0gaXMgYSBjb3Jwb3JhdGUgc2VjdG9yIG9yaWVudGVkIHNvZnR3YXJlIGZvciBtYW5hZ2VtZW50IG9mIHNhbGFyeSBhbmQgYXNzb2NpYXRlZCBzZXJ2aWNlcyBpbiBhIGNvbXBhbnkuXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvcGF5cm9sbC5wbmdcIl1cbiAgICB9LCAgIFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIkREVUtLIFN0b2NrIE1hbmFnZW1lbnQuXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJUaGlzIHByb2plY3QgaXMgYWltZWQgYXQgZGV2ZWxvcGluZyBhIGRlc2t0b3AgYmFzZWQgYXBwbGljYXRpb24gbmFtZWQgRERVS0sgLSBTdG9jayBNYW5hZ2VtZW50IFN5c3RlbSBmb3IgbWFuYWdpbmcgdGhlIGFzc2V0cyBvZiBhbnkgb3JnYW5pemF0aW9uLiBUaGlzIHN5c3RlbSBjYW4gYmUgdXNlZCB0byBzdG9yZSB0aGUgZGV0YWlscyBvZiB0aGUgaW52ZW50b3J5LCBzdG9jayBtYWludGVuYW5jZSwgdXBkYXRlIHRoZSBpbnZlbnRvcnkuXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvZGR1a2suanBnXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJFY2hvIE11c2ljIFBsYXllclwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiQW4gYW5kcm9pZCBtdXNpYyBwbGF5ZXIgYXBwbGljYXRpb24gd2l0aCBmZWF0dXJlcyBsaWtlIHNoYWtlIHRvIGNoYW5nZSwgdmlzdWFsaXplciwgbWFyayBhcyBmYXZvcml0ZSBhbmQgYmFzaWMgZnVuY3Rpb25hbGl0aWVzIHRoYXQgYSBtdXNpYyBwbGF5ZXIgY2FuIHByb3ZpZGUuIFRoaXMgTXVzaWMgUGxheWVyIEFwcCBpcyBtYWRlIGZvciBsZWFybmluZyB0byBidWlsZCBVc2VyIEludGVyZmFjZXMsIGFkZCBGdW5jdGlvbmFsaXRpZXMsIEJ1aWxkaW5nIEVjaG8gbW9kdWxlcyB1c2luZyBLb3RsaW4uXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvZWNob211c2ljcGxheWVyLnBuZ1wiXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiUmFrdGFtcml0LmNvbVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiQW4gb25saW5lIGJsb29kIGJhbmsgbWFuYWdlbWVudCBzeXN0ZW0gdGhhdCBoZWxwcyBpbiBtYW5hZ2luZyB2YXJpb3VzIGJsb29kIGJhbmsgb3BlcmF0aW9ucyBlZmZlY3RpdmVseS4gVGhlIGVudGlyZSBwcm9qZWN0IGhhcyBiZWVuIGRldmVsb3BlZCBrZWVwaW5nIGluIHZpZXcgb2YgdGhlIGRpc3RyaWJ1dGVkIGNsaWVudCBzZXJ2ZXIgY29tcHV0aW5nIHRlY2hub2xvZ3ksIGluIG1pbmQuIEFueSBwZXJzb24gd2hvIGlzIGludGVyZXN0ZWQgaW4gZG9uYXRpbmcgdGhlIGJsb29kIGNhbiByZWdpc3RlciBoaW1zZWxmLiBcIixcbiAgICAgIFwiaW1nU2V0XCI6W1wiaHR0cHM6Ly9zYWh1Lm5ldGxpZnkuYXBwL2ltYWdlcy9ibG9vZGJhbmsuanBnXCJdXG4gICAgfVxuICBdXG59IiwiaW1wb3J0IHtDb250YWN0fSBmcm9tICcuL3BvcnRmb2xpby9jb250YWN0JztcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9wb3J0Zm9saW8vaG9tZSc7XG5pbXBvcnQge1dvcmt9IGZyb20gJy4vcG9ydGZvbGlvL3dvcmsnO1xuaW1wb3J0IHtGbG9hdGluZ0J1dHRvbn0gZnJvbSAnLi91dGlsL2VsZW1lbnRzL2Zsb2F0aW5nQnV0dG9uJztcblxuY29uc3QgaG9tZSA9IG5ldyBIb21lKCk7XG5jb25zdCB3b3JrID0gbmV3IFdvcmsoKTtcbmNvbnN0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xuY29uc3QgdGhlbWVCdG4gPSBuZXcgRmxvYXRpbmdCdXR0b24oKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhlbWVCdG4uYnVpbGQoKTtcbiAgaG9tZS5idWlsZCgpO1xuICB3b3JrLmJ1aWxkKCk7XG4gIGNvbnRhY3QuYnVpbGQoKTtcbn07XG4iLCIvKipcbiAqIFJlbmRlcnMgY29udGFjdCBzZWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBsaW5rVGV4dDogc3RyaW5nW10gPSBbJ2luL2Etc2FodTE2LycsXG4gICAgJ0BpYW1zYWh1MTYnLFxuICAgICdnaXRodWIuY29tL0FTYWh1MTYnLFxuICAgICdhc2FodS5tMTYwOEBnbWFpbC5jb20nXTtcbiAgcHJpdmF0ZSByZWFkb25seSBsaW5rU3JjOiBzdHJpbmdbXSA9IFsnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Etc2FodTE2LycsXG4gICAgJ2h0dHBzOi8vdHdpdHRlci5jb20vaWFtc2FodTE2JyxcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tL0FTYWh1MTYnLFxuICAgICdtYWlsdG86YXNhaHUubTE2MDhAZ21haWwuY29tJ107XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlua3NJY29uczogc3RyaW5nW10gPSBbJ2xpbmtlZC1pbi5zdmcnLFxuICAgICd0d2l0dGVyLnN2ZycsXG4gICAgJ2dpdGh1Yi5zdmcnLFxuICAgICdjaGF0LWJ1YmJsZS5zdmcnXTtcblxuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlZCB0aGUgd2hvbGUgc2VjdGlvbi9zY3JlZW5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIC8vIFRPRE86IE1ha2Ugc29tZSBpbnRlcmZhY2Ugb3IgYWJzdHJhY3QgY2xhc3NcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHRoaXMuX3NlY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGVzIHdob2xlIGNvbnRhY3Qgc2VjdGlvblxuICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgY29udGFjdCBzZWN0aW9uXG4gICovXG4gIF9zZWN0aW9uKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb250YWN0U2VjdGlvbi5jbGFzc05hbWUgPSAnY29udGFjdCc7XG4gICAgY29udGFjdFNlY3Rpb24uaWQgPSAnY29udGFjdCc7XG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5fcXVpY2tMaW5rcygpKTtcbiAgICByZXR1cm4gY29udGFjdFNlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZGl2IHdpdGggc29tZSBxdWljayBjb250YWN0IGxpbmtzXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgcXVpY2sgbGlua3Mgc2VjdGlvbiBmb3IgdGhlIGNvbnRhY3RcbiAgICovXG4gIF9xdWlja0xpbmtzKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3F1aWNrLWxpbmtzJztcbiAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuX3RhZ2xpbmUoKSwgdGhpcy5fc29jaWFsKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgY29udGFjdCBzZWN0aW9uXG4gICAqL1xuICBfdGFnbGluZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdGFnbGluZTEgPSAnRmluZCBtZSBvbjonO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFnbGluZSc7XG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3BhbjEuaW5uZXJUZXh0ID0gdGFnbGluZTE7XG4gICAgY29udGFpbmVyLmFwcGVuZChzcGFuMSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbGlzdCBvZiBsaW5rcyB0byB2YXJpb3VzIHBsYXRmb3Jtc1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gQSBsaXN0IGZvciBzb2NpYWwgY29ubmVjdGlvblxuICAgKi9cbiAgX3NvY2lhbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc29jaWFsTGlua3M6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzb2NpYWxMaW5rcy5jbGFzc05hbWUgPSAnc29jaWFsJztcblxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLmxpbmtUZXh0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBjb25zdCBpY29uOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpY29uLnNyYyA9IGBzdGF0aWMvaW1nLyR7dGhpcy5saW5rc0ljb25zW2ldfWA7XG4gICAgICBjb25zdCB0ZXh0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHRleHQuaW5uZXJIVE1MID0gdGhpcy5saW5rVGV4dFtpXTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5saW5rU3JjW2ldKTtcbiAgICAgIGxpbmtFbGVtZW50LmFwcGVuZChpY29uLCB0ZXh0KTtcbiAgICAgIHNvY2lhbExpbmtzLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHNvY2lhbExpbmtzO1xuICB9XG59XG4iLCIvKipcbiAqIFJlbmRlcnMgaG9tZSBzZWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBIb21lIHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIHRvIGNyZWF0ZWQgdGhlIHdob2xlIHNlY3Rpb24vc2NyZWVuXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHNvbWUgaW50ZXJmYWNlIG9yIGFic3RyYWN0IGNsYXNzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aGlzLl9zZWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlcyB3aG9sZSBob21lIHNlY3Rpb25cbiAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIGhvbWUgc2VjdGlvblxuICAqL1xuICBfc2VjdGlvbigpOkhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBob21lU2VjdGlvbi5jbGFzc05hbWUgPSAnYmFubmVyJztcbiAgICBob21lU2VjdGlvbi5pZCA9ICdob21lJztcbiAgICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl90YWdsaW5lKCkpO1xuICAgIHJldHVybiBob21lU2VjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0YWdsaW5lIGRpdlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHRhZ2xpbmUgZm9yIHRoZSBob21lIHNlY3Rpb25cbiAgICovXG4gIF90YWdsaW5lKCk6SFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhZ2xpbmUxID0gJ1dlbGNvbWUgdG8gTXkgV29ybGQnO1xuICAgIGNvbnN0IHRhZ2xpbmUyID0gJ0hpIElcXCdtIEFiaGlzaGVrIFNhaHUnO1xuICAgIC8vIGNvbnN0IHRhZ2xpbmUzID0gJ0EgZGV2ZWxvcGVyJztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3RhZ2xpbmUnO1xuXG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3Qgc3BhbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3BhbjEuaW5uZXJUZXh0ID0gdGFnbGluZTE7XG4gICAgc3BhbjIuaW5uZXJUZXh0ID0gdGFnbGluZTI7XG4gICAgLy8gc3BhbjMuaW5uZXJUZXh0ID0gdGFnbGluZTM7XG4gICAgY29udGFpbmVyLmFwcGVuZChzcGFuMSwgc3BhbjIsIHNwYW4zKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwcm9qZWN0cyBmcm9tICcuLi9maXh0dXJlL3dvcmsuanNvbic7XG4vKipcbiAqIFJlbmRlcnMgd29yayBzZWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBXb3JrIHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIHRvIGNyZWF0ZWQgdGhlIHdob2xlIHNlY3Rpb24vc2NyZWVuXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHNvbWUgaW50ZXJmYWNlIG9yIGFic3RyYWN0IGNsYXNzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aGlzLl9zZWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlcyB3aG9sZSB3b3JrIHNlY3Rpb25cbiAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHdvcmsgc2VjdGlvblxuICAqL1xuICBfc2VjdGlvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgd29ya1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgd29ya1NlY3Rpb24uY2xhc3NOYW1lID0gJ3dvcmsnO1xuICAgIHdvcmtTZWN0aW9uLmlkID0gJ3dvcmsnO1xuICAgIC8vIHdvcmtTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3RhZ2xpbmUoKSk7XG4gICAgcHJvamVjdHMucmVzdWx0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIHdvcmtTZWN0aW9uLmFwcGVuZChcbiAgICAgICAgICB0aGlzLl93b3JrQ29udGFpbmVyKGRhdGEudGl0bGUsIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEuaW1nU2V0KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHdvcmtTZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIHdvcmsgc2VjdGlvblxuICAgKi9cbiAgX3RhZ2xpbmUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhZ2xpbmUxID0gJyMgV29yayAnO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFnbGluZSc7XG5cbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB3b3JrIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBCYXNpY2FsbHkgYSBkaXYgZm9yIHBlcnNvbiBwcm9qZWN0c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVUZXh0IC0gdGl0bGUgb2YgdGhlIHByb2plY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uVGV4dCAtIHByb2plY3QgZGVzY3JpcHRpb25cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gaW1nU2V0IC0gQXJyYXkgb2YgaW1nZXMgYXNzb2NpYXRlZCB3aXRoIHByb2plY3RcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gd29yayBodG1sIGVsZW1lbnRcbiAgICovXG4gIF93b3JrQ29udGFpbmVyKFxuICAgICAgdGl0bGVUZXh0OiBzdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvblRleHQ6IHN0cmluZyxcbiAgICAgIGltZ1NldD86IHN0cmluZ1tdKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdpdGVtQ29udGFpbmVyJztcblxuICAgIGNvbnN0IGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmcuY2xhc3NOYW1lID0gJ2JnJztcbiAgICBjb25zdCBwcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJldmlldy5jbGFzc05hbWUgPSAncHJldmlldyc7XG4gICAgaWYgKGltZ1NldCkge1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTZXRbMF0pO1xuICAgICAgcHJldmlldy5hcHBlbmRDaGlsZChpbWcpO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCc7XG5cblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XG4gICAgLy8gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25UZXh0O1xuXG4gICAgY29udGVudC5hcHBlbmQodGl0bGUpO1xuICAgIC8vIGlmIChpbWdTZXQpIHtcbiAgICAvLyAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIC8vICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nU2V0WzBdKTtcbiAgICAvLyAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpXG4gICAgLy8gfVxuICAgIGNvbnRhaW5lci5hcHBlbmQoYmcsIHByZXZpZXcsIGNvbnRlbnQpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cbiIsIlxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdCdXR0b24ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlIGEgZmxvYXRpbmcgYWN0aW9uIGJ1dHRvblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmaXhlZC1hY3Rpb24tYnRuIG1hdGVyaWFsLWljb25zJztcbiAgICBpY29uLmlubmVySFRNTCA9ICdsaWdodF9tb2RlJztcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVfdGhlbWUpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICB0b2dnbGVfdGhlbWUoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSE7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1mbG9hdGluZyAubWF0ZXJpYWwtaWNvbnMnKSE7XG4gICAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLXRoZW1lJykpIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xuICAgICAgZWxlLmlubmVySFRNTCA9ICdsaWdodF9tb2RlJztcbiAgICB9IGVsc2Uge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLXRoZW1lJyk7XG4gICAgICBlbGUuaW5uZXJIVE1MID0gJ2RhcmtfbW9kZSc7XG4gICAgfVxuICB9XG59XG4iXX0=
