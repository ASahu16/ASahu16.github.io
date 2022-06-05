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
        container.addEventListener('mousemove', (event) => {
            const currCard = event.currentTarget;
            let mouseX = event.clientX;
            let mouseY = event.clientY;
            let degrees = 20;
            let ry = 2 * (mouseX - (currCard.getBoundingClientRect().left + (currCard.offsetWidth / 2))) / (currCard.offsetWidth);
            let rx = 2 * (currCard.getBoundingClientRect().top + (currCard.offsetHeight / 2) - mouseY) / (currCard.offsetHeight);
            currCard.style.transform = "rotate3d(" + rx + "," + ry + ",0," + degrees + "deg) scale(1.1)";
            const imgEle = currCard.querySelector('img');
        });
        container.addEventListener('mouseout', (event) => {
            let currCard = event.currentTarget;
            currCard.style.transform = "";
            currCard.style.boxShadow = "none";
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvZml4dHVyZS93b3JrLmpzb24iLCJzcmMvdHMvbWFpbi50cyIsInNyYy90cy9wb3J0Zm9saW8vY29udGFjdC50cyIsInNyYy90cy9wb3J0Zm9saW8vaG9tZS50cyIsInNyYy90cy9wb3J0Zm9saW8vd29yay50cyIsInNyYy90cy91dGlsL2VsZW1lbnRzL2Zsb2F0aW5nQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVCQSxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLDJDQUFzQztBQUN0QyxtRUFBOEQ7QUFFOUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3hCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBQzlCLE1BQU0sUUFBUSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDZCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQzs7Ozs7O0FDWEYsTUFBYSxPQUFPO0lBQXBCO1FBQ21CLGFBQVEsR0FBYSxDQUFDLGNBQWM7WUFDbkQsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQix1QkFBdUIsQ0FBQyxDQUFDO1FBQ1YsWUFBTyxH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QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxZQUFZO1FBQ1YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUM3QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFFLENBQUM7UUFDckUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwQyxHQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBQ0Y7QUF6QkQsd0NBeUJDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcInJlc3VsdFwiOltcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJOYXRpb25hbCBMaWJyYXJ5XCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJOYXRpb25hbCBMaWJyYXJ5IGlzIGEgd2luZG93IGJhc2VkIGFwcGxpY2F0aW9uIGluIHdoaWNoIHRoZSB3aG9sZSByZWNvcmRzIG9mIHRoZSBib29rcyBpbiB0aGUgbGlicmFyeSB3b3VsZCBiZSBtYW5hZ2luZyB0aGUgZGV0YWlscyBhYm91dCBkaWZmZXJlbnQgc3R1ZGVudHMgd2hvIGhhdmUgcmVjZWl2ZWQgdGhlIGJvb2tzIHdvdWxkIGJlIGtlcHQuXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvbmF0aW9uYWxpYnJhcnkuanBnXCJdXG4gICAgfSwgICAgXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiUGF5cm9sbCBNYW5hZ2VtZW50LlwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiUGF5cm9sbCBNYW5hZ2VtZW50IFN5c3RlbSBpcyBhIGNvcnBvcmF0ZSBzZWN0b3Igb3JpZW50ZWQgc29mdHdhcmUgZm9yIG1hbmFnZW1lbnQgb2Ygc2FsYXJ5IGFuZCBhc3NvY2lhdGVkIHNlcnZpY2VzIGluIGEgY29tcGFueS5cIixcbiAgICAgIFwiaW1nU2V0XCI6W1wiaHR0cHM6Ly9zYWh1Lm5ldGxpZnkuYXBwL2ltYWdlcy9wYXlyb2xsLnBuZ1wiXVxuICAgIH0sICAgXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiRERVS0sgU3RvY2sgTWFuYWdlbWVudC5cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlRoaXMgcHJvamVjdCBpcyBhaW1lZCBhdCBkZXZlbG9waW5nIGEgZGVza3RvcCBiYXNlZCBhcHBsaWNhdGlvbiBuYW1lZCBERFVLSyAtIFN0b2NrIE1hbmFnZW1lbnQgU3lzdGVtIGZvciBtYW5hZ2luZyB0aGUgYXNzZXRzIG9mIGFueSBvcmdhbml6YXRpb24uIFRoaXMgc3lzdGVtIGNhbiBiZSB1c2VkIHRvIHN0b3JlIHRoZSBkZXRhaWxzIG9mIHRoZSBpbnZlbnRvcnksIHN0b2NrIG1haW50ZW5hbmNlLCB1cGRhdGUgdGhlIGludmVudG9yeS5cIixcbiAgICAgIFwiaW1nU2V0XCI6W1wiaHR0cHM6Ly9zYWh1Lm5ldGxpZnkuYXBwL2ltYWdlcy9kZHVray5qcGdcIl1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIkVjaG8gTXVzaWMgUGxheWVyXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJBbiBhbmRyb2lkIG11c2ljIHBsYXllciBhcHBsaWNhdGlvbiB3aXRoIGZlYXR1cmVzIGxpa2Ugc2hha2UgdG8gY2hhbmdlLCB2aXN1YWxpemVyLCBtYXJrIGFzIGZhdm9yaXRlIGFuZCBiYXNpYyBmdW5jdGlvbmFsaXRpZXMgdGhhdCBhIG11c2ljIHBsYXllciBjYW4gcHJvdmlkZS4gVGhpcyBNdXNpYyBQbGF5ZXIgQXBwIGlzIG1hZGUgZm9yIGxlYXJuaW5nIHRvIGJ1aWxkIFVzZXIgSW50ZXJmYWNlcywgYWRkIEZ1bmN0aW9uYWxpdGllcywgQnVpbGRpbmcgRWNobyBtb2R1bGVzIHVzaW5nIEtvdGxpbi5cIixcbiAgICAgIFwiaW1nU2V0XCI6W1wiaHR0cHM6Ly9zYWh1Lm5ldGxpZnkuYXBwL2ltYWdlcy9lY2hvbXVzaWNwbGF5ZXIucG5nXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJSYWt0YW1yaXQuY29tXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJBbiBvbmxpbmUgYmxvb2QgYmFuayBtYW5hZ2VtZW50IHN5c3RlbSB0aGF0IGhlbHBzIGluIG1hbmFnaW5nIHZhcmlvdXMgYmxvb2QgYmFuayBvcGVyYXRpb25zIGVmZmVjdGl2ZWx5LiBUaGUgZW50aXJlIHByb2plY3QgaGFzIGJlZW4gZGV2ZWxvcGVkIGtlZXBpbmcgaW4gdmlldyBvZiB0aGUgZGlzdHJpYnV0ZWQgY2xpZW50IHNlcnZlciBjb21wdXRpbmcgdGVjaG5vbG9neSwgaW4gbWluZC4gQW55IHBlcnNvbiB3aG8gaXMgaW50ZXJlc3RlZCBpbiBkb25hdGluZyB0aGUgYmxvb2QgY2FuIHJlZ2lzdGVyIGhpbXNlbGYuIFwiLFxuICAgICAgXCJpbWdTZXRcIjpbXCJodHRwczovL3NhaHUubmV0bGlmeS5hcHAvaW1hZ2VzL2Jsb29kYmFuay5qcGdcIl1cbiAgICB9XG4gIF1cbn0iLCJpbXBvcnQge0NvbnRhY3R9IGZyb20gJy4vcG9ydGZvbGlvL2NvbnRhY3QnO1xuaW1wb3J0IHtIb21lfSBmcm9tICcuL3BvcnRmb2xpby9ob21lJztcbmltcG9ydCB7V29ya30gZnJvbSAnLi9wb3J0Zm9saW8vd29yayc7XG5pbXBvcnQge0Zsb2F0aW5nQnV0dG9ufSBmcm9tICcuL3V0aWwvZWxlbWVudHMvZmxvYXRpbmdCdXR0b24nO1xuXG5jb25zdCBob21lID0gbmV3IEhvbWUoKTtcbmNvbnN0IHdvcmsgPSBuZXcgV29yaygpO1xuY29uc3QgY29udGFjdCA9IG5ldyBDb250YWN0KCk7XG5jb25zdCB0aGVtZUJ0biA9IG5ldyBGbG9hdGluZ0J1dHRvbigpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0aGVtZUJ0bi5idWlsZCgpO1xuICBob21lLmJ1aWxkKCk7XG4gIHdvcmsuYnVpbGQoKTtcbiAgY29udGFjdC5idWlsZCgpO1xufTtcbiIsIi8qKlxuICogUmVuZGVycyBjb250YWN0IHNlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IGxpbmtUZXh0OiBzdHJpbmdbXSA9IFsnaW4vYS1zYWh1MTYvJyxcbiAgICAnQGlhbXNhaHUxNicsXG4gICAgJ2dpdGh1Yi5jb20vQVNhaHUxNicsXG4gICAgJ2FzYWh1Lm0xNjA4QGdtYWlsLmNvbSddO1xuICBwcml2YXRlIHJlYWRvbmx5IGxpbmtTcmM6IHN0cmluZ1tdID0gWydodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYS1zYWh1MTYvJyxcbiAgICAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pYW1zYWh1MTYnLFxuICAgICdodHRwczovL2dpdGh1Yi5jb20vQVNhaHUxNicsXG4gICAgJ21haWx0bzphc2FodS5tMTYwOEBnbWFpbC5jb20nXTtcbiAgcHJpdmF0ZSByZWFkb25seSBsaW5rc0ljb25zOiBzdHJpbmdbXSA9IFsnbGlua2VkLWluLnN2ZycsXG4gICAgJ3R3aXR0ZXIuc3ZnJyxcbiAgICAnZ2l0aHViLnN2ZycsXG4gICAgJ2NoYXQtYnViYmxlLnN2ZyddO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGVkIHRoZSB3aG9sZSBzZWN0aW9uL3NjcmVlblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzb21lIGludGVyZmFjZSBvciBhYnN0cmFjdCBjbGFzc1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZXMgd2hvbGUgY29udGFjdCBzZWN0aW9uXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBjb250YWN0IHNlY3Rpb25cbiAgKi9cbiAgX3NlY3Rpb24oKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTmFtZSA9ICdjb250YWN0JztcbiAgICBjb250YWN0U2VjdGlvbi5pZCA9ICdjb250YWN0JztcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl9xdWlja0xpbmtzKCkpO1xuICAgIHJldHVybiBjb250YWN0U2VjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkaXYgd2l0aCBzb21lIHF1aWNrIGNvbnRhY3QgbGlua3NcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBxdWljayBsaW5rcyBzZWN0aW9uIGZvciB0aGUgY29udGFjdFxuICAgKi9cbiAgX3F1aWNrTGlua3MoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAncXVpY2stbGlua3MnO1xuICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fdGFnbGluZSgpLCB0aGlzLl9zb2NpYWwoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0YWdsaW5lIGRpdlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHRhZ2xpbmUgZm9yIHRoZSBjb250YWN0IHNlY3Rpb25cbiAgICovXG4gIF90YWdsaW5lKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YWdsaW5lMSA9ICdGaW5kIG1lIG9uOic7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YWdsaW5lJztcbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGxpbmtzIHRvIHZhcmlvdXMgcGxhdGZvcm1zXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBBIGxpc3QgZm9yIHNvY2lhbCBjb25uZWN0aW9uXG4gICAqL1xuICBfc29jaWFsKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzb2NpYWxMaW5rczogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHNvY2lhbExpbmtzLmNsYXNzTmFtZSA9ICdzb2NpYWwnO1xuXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubGlua1RleHQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvbnN0IGljb246IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGljb24uc3JjID0gYHN0YXRpYy9pbWcvJHt0aGlzLmxpbmtzSWNvbnNbaV19YDtcbiAgICAgIGNvbnN0IHRleHQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdGV4dC5pbm5lckhUTUwgPSB0aGlzLmxpbmtUZXh0W2ldO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLmxpbmtTcmNbaV0pO1xuICAgICAgbGlua0VsZW1lbnQuYXBwZW5kKGljb24sIHRleHQpO1xuICAgICAgc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gc29jaWFsTGlua3M7XG4gIH1cbn1cbiIsIi8qKlxuICogUmVuZGVycyBob21lIHNlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEhvbWUge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlZCB0aGUgd2hvbGUgc2VjdGlvbi9zY3JlZW5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIC8vIFRPRE86IE1ha2Ugc29tZSBpbnRlcmZhY2Ugb3IgYWJzdHJhY3QgY2xhc3NcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHRoaXMuX3NlY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGVzIHdob2xlIGhvbWUgc2VjdGlvblxuICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgaG9tZSBzZWN0aW9uXG4gICovXG4gIF9zZWN0aW9uKCk6SFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhvbWVTZWN0aW9uLmNsYXNzTmFtZSA9ICdiYW5uZXInO1xuICAgIGhvbWVTZWN0aW9uLmlkID0gJ2hvbWUnO1xuICAgIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3RhZ2xpbmUoKSk7XG4gICAgcmV0dXJuIGhvbWVTZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIGhvbWUgc2VjdGlvblxuICAgKi9cbiAgX3RhZ2xpbmUoKTpIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdGFnbGluZTEgPSAnV2VsY29tZSB0byBNeSBXb3JsZCc7XG4gICAgY29uc3QgdGFnbGluZTIgPSAnSGkgSVxcJ20gQWJoaXNoZWsgU2FodSc7XG4gICAgLy8gY29uc3QgdGFnbGluZTMgPSAnQSBkZXZlbG9wZXInO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFnbGluZSc7XG5cbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBzcGFuMi5pbm5lclRleHQgPSB0YWdsaW5lMjtcbiAgICAvLyBzcGFuMy5pbm5lclRleHQgPSB0YWdsaW5lMztcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xLCBzcGFuMiwgc3BhbjMpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHByb2plY3RzIGZyb20gJy4uL2ZpeHR1cmUvd29yay5qc29uJztcbi8qKlxuICogUmVuZGVycyB3b3JrIHNlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmsge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlZCB0aGUgd2hvbGUgc2VjdGlvbi9zY3JlZW5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIC8vIFRPRE86IE1ha2Ugc29tZSBpbnRlcmZhY2Ugb3IgYWJzdHJhY3QgY2xhc3NcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHRoaXMuX3NlY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGVzIHdob2xlIHdvcmsgc2VjdGlvblxuICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgd29yayBzZWN0aW9uXG4gICovXG4gIF9zZWN0aW9uKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB3b3JrU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICB3b3JrU2VjdGlvbi5jbGFzc05hbWUgPSAnd29yayc7XG4gICAgd29ya1NlY3Rpb24uaWQgPSAnd29yayc7XG4gICAgLy8gd29ya1NlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5fdGFnbGluZSgpKTtcbiAgICBwcm9qZWN0cy5yZXN1bHQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgd29ya1NlY3Rpb24uYXBwZW5kKFxuICAgICAgICAgIHRoaXMuX3dvcmtDb250YWluZXIoZGF0YS50aXRsZSwgZGF0YS5kZXNjcmlwdGlvbiwgZGF0YS5pbWdTZXQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gd29ya1NlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgd29yayBzZWN0aW9uXG4gICAqL1xuICBfdGFnbGluZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdGFnbGluZTEgPSAnIyBXb3JrICc7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YWdsaW5lJztcblxuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4xLmlubmVyVGV4dCA9IHRhZ2xpbmUxO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHdvcmsgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEJhc2ljYWxseSBhIGRpdiBmb3IgcGVyc29uIHByb2plY3RzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVRleHQgLSB0aXRsZSBvZiB0aGUgcHJvamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25UZXh0IC0gcHJvamVjdCBkZXNjcmlwdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBpbWdTZXQgLSBBcnJheSBvZiBpbWdlcyBhc3NvY2lhdGVkIHdpdGggcHJvamVjdFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSB3b3JrIGh0bWwgZWxlbWVudFxuICAgKi9cbiAgX3dvcmtDb250YWluZXIoXG4gICAgICB0aXRsZVRleHQ6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uVGV4dDogc3RyaW5nLFxuICAgICAgaW1nU2V0Pzogc3RyaW5nW10pOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2l0ZW1Db250YWluZXInO1xuXG4gICAgY29uc3QgYmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiZy5jbGFzc05hbWUgPSAnYmcnO1xuICAgIGNvbnN0IHByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmV2aWV3LmNsYXNzTmFtZSA9ICdwcmV2aWV3JztcbiAgICBpZiAoaW1nU2V0KSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZ1NldFswXSk7XG4gICAgICBwcmV2aWV3LmFwcGVuZENoaWxkKGltZyk7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50JztcblxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcbiAgICAvLyBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvLyBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvblRleHQ7XG5cbiAgICBjb250ZW50LmFwcGVuZCh0aXRsZSk7XG4gICAgLy8gaWYgKGltZ1NldCkge1xuICAgIC8vICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgLy8gICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTZXRbMF0pO1xuICAgIC8vICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZylcbiAgICAvLyB9XG4gICAgY29udGFpbmVyLmFwcGVuZChiZywgcHJldmlldywgY29udGVudCk7XG5cbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywoZXZlbnQpPT57XG4gICAgICBjb25zdCBjdXJyQ2FyZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQhIGFzIEhUTUxFbGVtZW50O1xuICAgICAgbGV0IG1vdXNlWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICBsZXQgbW91c2VZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgIGxldCBkZWdyZWVzID0gMjA7XG4gICAgICBsZXQgcnkgPSAyKihtb3VzZVgtIChjdXJyQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KyhjdXJyQ2FyZC5vZmZzZXRXaWR0aC8yKSkpLyhjdXJyQ2FyZC5vZmZzZXRXaWR0aCk7XG4gICAgICAgbGV0IHJ4ID0gMiooY3VyckNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKyhjdXJyQ2FyZC5vZmZzZXRIZWlnaHQvMiktbW91c2VZKS8oY3VyckNhcmQub2Zmc2V0SGVpZ2h0KTtcbiAgICAgIGN1cnJDYXJkLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlM2QoXCIrcngrXCIsXCIrcnkrXCIsMCxcIitkZWdyZWVzK1wiZGVnKSBzY2FsZSgxLjEpXCI7XG5cbiAgICAgIGNvbnN0IGltZ0VsZSA9IGN1cnJDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgLy8gVE9ETzogZml4IHBhcmFsbGV4IGVmZmVjdCBvbiBjYXJkIFxuICAgICAgLy8gaW1nRWxlIS5zdHlsZS5ib3hTaGFkb3cgPSAzKi1yeStcInB4IFwiKzMqcngrXCJweCA1cHggM3B4IHJnYmEoMCwwLDAsMC40KVwiO1xuICAgICAgLy8gY3VyckNhcmQuc3R5bGUuYm94U2hhZG93ID0gMyotcnkrXCJweCBcIiszKnJ4K1wicHggNXB4IDNweCByZ2JhKDAsMCwwLDAuNClcIjtcbiAgICAgIC8vIGN1cnJDYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkLW51bWJlclwiKVswXS5zdHlsZS50ZXh0U2hhZG93ID0gNCotcnkrXCJweCBcIiszKnJ4K1wicHggM3B4IHJnYmEoMCwwLDAsMC44KVwiO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsKGV2ZW50KT0+e1xuICAgICAgbGV0IGN1cnJDYXJkID0gZXZlbnQuY3VycmVudFRhcmdldCEgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjdXJyQ2FyZCk7XG4gICAgICBjdXJyQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgY3VyckNhcmQuc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7XG4gICAgICAvLyBjdXJyQ2FyZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZC1udW1iZXJcIilbMF0uc3R5bGUudGV4dFNoYWRvdyA9IFwiMHB4IDBweCA0cHggcmdiYSgwLDAsMCwwLjgpXCI7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cbiIsIlxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdCdXR0b24ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlIGEgZmxvYXRpbmcgYWN0aW9uIGJ1dHRvblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmaXhlZC1hY3Rpb24tYnRuIG1hdGVyaWFsLWljb25zJztcbiAgICBpY29uLmlubmVySFRNTCA9ICdsaWdodF9tb2RlJztcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVfdGhlbWUpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICB0b2dnbGVfdGhlbWUoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSE7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1mbG9hdGluZyAubWF0ZXJpYWwtaWNvbnMnKSE7XG4gICAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLXRoZW1lJykpIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xuICAgICAgZWxlLmlubmVySFRNTCA9ICdsaWdodF9tb2RlJztcbiAgICB9IGVsc2Uge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLXRoZW1lJyk7XG4gICAgICBlbGUuaW5uZXJIVE1MID0gJ2RhcmtfbW9kZSc7XG4gICAgfVxuICB9XG59XG4iXX0=
