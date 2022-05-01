(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "result":[
    {
      "title":"National Library",
      "description":"National Library is a window based application in which the whole records of the books in the library would be managing the details about different students who have received the books would be kept."
    },    
    {
      "title":"Payroll Management.",
      "description":"Payroll Management System is a corporate sector oriented software for management of salary and associated services in a company."
    },   
    {
      "title":"DDUKK Stock Management.",
      "description":"This project is aimed at developing a desktop based application named DDUKK - Stock Management System for managing the assets of any organization. This system can be used to store the details of the inventory, stock maintenance, update the inventory."
    },
    {
      "title":"Echo Music Player",
      "description":"An android music player application with features like shake to change, visualizer, mark as favorite and basic functionalities that a music player can provide. This Music Player App is made for learning to build User Interfaces, add Functionalities, Building Echo modules using Kotlin."
    },
    {
      "title":"Raktamrit.com",
      "description":"An online blood bank management system that helps in managing various blood bank operations effectively. The entire project has been developed keeping in view of the distributed client server computing technology, in mind. Any person who is interested in donating the blood can register himself. "
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
        workSection.appendChild(this._tagline());
        projects.result.forEach((data) => {
            workSection.append(this._workContainer(data.title, data.description));
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
    _workContainer(titleText, descriptionText) {
        const container = document.createElement('div');
        container.className = 'work-item';
        const title = document.createElement('h1');
        title.innerText = titleText;
        const description = document.createElement('p');
        description.innerText = descriptionText;
        container.append(title, description);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvZml4dHVyZS93b3JrLmpzb24iLCJzcmMvdHMvbWFpbi50cyIsInNyYy90cy9wb3J0Zm9saW8vY29udGFjdC50cyIsInNyYy90cy9wb3J0Zm9saW8vaG9tZS50cyIsInNyYy90cy9wb3J0Zm9saW8vd29yay50cyIsInNyYy90cy91dGlsL2VsZW1lbnRzL2Zsb2F0aW5nQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMsMkNBQXNDO0FBQ3RDLG1FQUE4RDtBQUU5RCxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFDOUIsTUFBTSxRQUFRLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFDdEMsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDOzs7Ozs7QUNYRixNQUFhLE9BQU87SUFBcEI7UUFDbUIsYUFBUSxHQUFhLENBQUMsY0FBYztZQUNuRCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLHVCQUF1QixDQUFDLENBQUM7UUFDVixZQUFPLEdBQWEsQ0FBQyx1Q0FBdUM7WUFDM0UsK0JB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QUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqQyxHQUFHLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztTQUM3QjtJQUNILENBQUM7Q0FDRjtBQXpCRCx3Q0F5QkMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwicmVzdWx0XCI6W1xuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIk5hdGlvbmFsIExpYnJhcnlcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpcIk5hdGlvbmFsIExpYnJhcnkgaXMgYSB3aW5kb3cgYmFzZWQgYXBwbGljYXRpb24gaW4gd2hpY2ggdGhlIHdob2xlIHJlY29yZHMgb2YgdGhlIGJvb2tzIGluIHRoZSBsaWJyYXJ5IHdvdWxkIGJlIG1hbmFnaW5nIHRoZSBkZXRhaWxzIGFib3V0IGRpZmZlcmVudCBzdHVkZW50cyB3aG8gaGF2ZSByZWNlaXZlZCB0aGUgYm9va3Mgd291bGQgYmUga2VwdC5cIlxuICAgIH0sICAgIFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIlBheXJvbGwgTWFuYWdlbWVudC5cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpcIlBheXJvbGwgTWFuYWdlbWVudCBTeXN0ZW0gaXMgYSBjb3Jwb3JhdGUgc2VjdG9yIG9yaWVudGVkIHNvZnR3YXJlIGZvciBtYW5hZ2VtZW50IG9mIHNhbGFyeSBhbmQgYXNzb2NpYXRlZCBzZXJ2aWNlcyBpbiBhIGNvbXBhbnkuXCJcbiAgICB9LCAgIFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIkREVUtLIFN0b2NrIE1hbmFnZW1lbnQuXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJUaGlzIHByb2plY3QgaXMgYWltZWQgYXQgZGV2ZWxvcGluZyBhIGRlc2t0b3AgYmFzZWQgYXBwbGljYXRpb24gbmFtZWQgRERVS0sgLSBTdG9jayBNYW5hZ2VtZW50IFN5c3RlbSBmb3IgbWFuYWdpbmcgdGhlIGFzc2V0cyBvZiBhbnkgb3JnYW5pemF0aW9uLiBUaGlzIHN5c3RlbSBjYW4gYmUgdXNlZCB0byBzdG9yZSB0aGUgZGV0YWlscyBvZiB0aGUgaW52ZW50b3J5LCBzdG9jayBtYWludGVuYW5jZSwgdXBkYXRlIHRoZSBpbnZlbnRvcnkuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIkVjaG8gTXVzaWMgUGxheWVyXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJBbiBhbmRyb2lkIG11c2ljIHBsYXllciBhcHBsaWNhdGlvbiB3aXRoIGZlYXR1cmVzIGxpa2Ugc2hha2UgdG8gY2hhbmdlLCB2aXN1YWxpemVyLCBtYXJrIGFzIGZhdm9yaXRlIGFuZCBiYXNpYyBmdW5jdGlvbmFsaXRpZXMgdGhhdCBhIG11c2ljIHBsYXllciBjYW4gcHJvdmlkZS4gVGhpcyBNdXNpYyBQbGF5ZXIgQXBwIGlzIG1hZGUgZm9yIGxlYXJuaW5nIHRvIGJ1aWxkIFVzZXIgSW50ZXJmYWNlcywgYWRkIEZ1bmN0aW9uYWxpdGllcywgQnVpbGRpbmcgRWNobyBtb2R1bGVzIHVzaW5nIEtvdGxpbi5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0aXRsZVwiOlwiUmFrdGFtcml0LmNvbVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiQW4gb25saW5lIGJsb29kIGJhbmsgbWFuYWdlbWVudCBzeXN0ZW0gdGhhdCBoZWxwcyBpbiBtYW5hZ2luZyB2YXJpb3VzIGJsb29kIGJhbmsgb3BlcmF0aW9ucyBlZmZlY3RpdmVseS4gVGhlIGVudGlyZSBwcm9qZWN0IGhhcyBiZWVuIGRldmVsb3BlZCBrZWVwaW5nIGluIHZpZXcgb2YgdGhlIGRpc3RyaWJ1dGVkIGNsaWVudCBzZXJ2ZXIgY29tcHV0aW5nIHRlY2hub2xvZ3ksIGluIG1pbmQuIEFueSBwZXJzb24gd2hvIGlzIGludGVyZXN0ZWQgaW4gZG9uYXRpbmcgdGhlIGJsb29kIGNhbiByZWdpc3RlciBoaW1zZWxmLiBcIlxuICAgIH1cbiAgXVxufSIsImltcG9ydCB7Q29udGFjdH0gZnJvbSAnLi9wb3J0Zm9saW8vY29udGFjdCc7XG5pbXBvcnQge0hvbWV9IGZyb20gJy4vcG9ydGZvbGlvL2hvbWUnO1xuaW1wb3J0IHtXb3JrfSBmcm9tICcuL3BvcnRmb2xpby93b3JrJztcbmltcG9ydCB7RmxvYXRpbmdCdXR0b259IGZyb20gJy4vdXRpbC9lbGVtZW50cy9mbG9hdGluZ0J1dHRvbic7XG5cbmNvbnN0IGhvbWUgPSBuZXcgSG9tZSgpO1xuY29uc3Qgd29yayA9IG5ldyBXb3JrKCk7XG5jb25zdCBjb250YWN0ID0gbmV3IENvbnRhY3QoKTtcbmNvbnN0IHRoZW1lQnRuID0gbmV3IEZsb2F0aW5nQnV0dG9uKCk7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoZW1lQnRuLmJ1aWxkKCk7XG4gIGhvbWUuYnVpbGQoKTtcbiAgd29yay5idWlsZCgpO1xuICBjb250YWN0LmJ1aWxkKCk7XG59O1xuIiwiLyoqXG4gKiBSZW5kZXJzIGNvbnRhY3Qgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlua1RleHQ6IHN0cmluZ1tdID0gWydpbi9hLXNhaHUxNi8nLFxuICAgICdAaWFtc2FodTE2JyxcbiAgICAnZ2l0aHViLmNvbS9BU2FodTE2JyxcbiAgICAnYXNhaHUubTE2MDhAZ21haWwuY29tJ107XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlua1NyYzogc3RyaW5nW10gPSBbJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hLXNhaHUxNi8nLFxuICAgICdodHRwczovL3R3aXR0ZXIuY29tL2lhbXNhaHUxNicsXG4gICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BU2FodTE2JyxcbiAgICAnbWFpbHRvOmFzYWh1Lm0xNjA4QGdtYWlsLmNvbSddO1xuICBwcml2YXRlIHJlYWRvbmx5IGxpbmtzSWNvbnM6IHN0cmluZ1tdID0gWydsaW5rZWQtaW4uc3ZnJyxcbiAgICAndHdpdHRlci5zdmcnLFxuICAgICdnaXRodWIuc3ZnJyxcbiAgICAnY2hhdC1idWJibGUuc3ZnJ107XG5cbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIHRvIGNyZWF0ZWQgdGhlIHdob2xlIHNlY3Rpb24vc2NyZWVuXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHNvbWUgaW50ZXJmYWNlIG9yIGFic3RyYWN0IGNsYXNzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aGlzLl9zZWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlcyB3aG9sZSBjb250YWN0IHNlY3Rpb25cbiAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIGNvbnRhY3Qgc2VjdGlvblxuICAqL1xuICBfc2VjdGlvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3RTZWN0aW9uLmlkID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3F1aWNrTGlua3MoKSk7XG4gICAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGRpdiB3aXRoIHNvbWUgcXVpY2sgY29udGFjdCBsaW5rc1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHF1aWNrIGxpbmtzIHNlY3Rpb24gZm9yIHRoZSBjb250YWN0XG4gICAqL1xuICBfcXVpY2tMaW5rcygpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdxdWljay1saW5rcyc7XG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLl90YWdsaW5lKCksIHRoaXMuX3NvY2lhbCgpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIGNvbnRhY3Qgc2VjdGlvblxuICAgKi9cbiAgX3RhZ2xpbmUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhZ2xpbmUxID0gJ0ZpbmQgbWUgb246JztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3RhZ2xpbmUnO1xuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4xLmlubmVyVGV4dCA9IHRhZ2xpbmUxO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxpc3Qgb2YgbGlua3MgdG8gdmFyaW91cyBwbGF0Zm9ybXNcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEEgbGlzdCBmb3Igc29jaWFsIGNvbm5lY3Rpb25cbiAgICovXG4gIF9zb2NpYWwoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNvY2lhbExpbmtzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgc29jaWFsTGlua3MuY2xhc3NOYW1lID0gJ3NvY2lhbCc7XG5cbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5saW5rVGV4dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgaWNvbjogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaWNvbi5zcmMgPSBgc3RhdGljL2ltZy8ke3RoaXMubGlua3NJY29uc1tpXX1gO1xuICAgICAgY29uc3QgdGV4dDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB0ZXh0LmlubmVySFRNTCA9IHRoaXMubGlua1RleHRbaV07XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMubGlua1NyY1tpXSk7XG4gICAgICBsaW5rRWxlbWVudC5hcHBlbmQoaWNvbiwgdGV4dCk7XG4gICAgICBzb2NpYWxMaW5rcy5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBzb2NpYWxMaW5rcztcbiAgfVxufVxuIiwiLyoqXG4gKiBSZW5kZXJzIGhvbWUgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgSG9tZSB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGVkIHRoZSB3aG9sZSBzZWN0aW9uL3NjcmVlblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzb21lIGludGVyZmFjZSBvciBhYnN0cmFjdCBjbGFzc1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZXMgd2hvbGUgaG9tZSBzZWN0aW9uXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBob21lIHNlY3Rpb25cbiAgKi9cbiAgX3NlY3Rpb24oKTpIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaG9tZVNlY3Rpb24uY2xhc3NOYW1lID0gJ2Jhbm5lcic7XG4gICAgaG9tZVNlY3Rpb24uaWQgPSAnaG9tZSc7XG4gICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5fdGFnbGluZSgpKTtcbiAgICByZXR1cm4gaG9tZVNlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgaG9tZSBzZWN0aW9uXG4gICAqL1xuICBfdGFnbGluZSgpOkhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YWdsaW5lMSA9ICdXZWxjb21lIHRvIE15IFdvcmxkJztcbiAgICBjb25zdCB0YWdsaW5lMiA9ICdIaSBJXFwnbSBBYmhpc2hlayBTYWh1JztcbiAgICAvLyBjb25zdCB0YWdsaW5lMyA9ICdBIGRldmVsb3Blcic7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YWdsaW5lJztcblxuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4xLmlubmVyVGV4dCA9IHRhZ2xpbmUxO1xuICAgIHNwYW4yLmlubmVyVGV4dCA9IHRhZ2xpbmUyO1xuICAgIC8vIHNwYW4zLmlubmVyVGV4dCA9IHRhZ2xpbmUzO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEsIHNwYW4yLCBzcGFuMyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcHJvamVjdHMgZnJvbSAnLi4vZml4dHVyZS93b3JrLmpzb24nO1xuLyoqXG4gKiBSZW5kZXJzIHdvcmsgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgV29yayB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGVkIHRoZSB3aG9sZSBzZWN0aW9uL3NjcmVlblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzb21lIGludGVyZmFjZSBvciBhYnN0cmFjdCBjbGFzc1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZXMgd2hvbGUgd29yayBzZWN0aW9uXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB3b3JrIHNlY3Rpb25cbiAgKi9cbiAgX3NlY3Rpb24oKTpIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgd29ya1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgd29ya1NlY3Rpb24uY2xhc3NOYW1lID0gJ3dvcmsnO1xuICAgIHdvcmtTZWN0aW9uLmlkID0gJ3dvcmsnO1xuICAgIHdvcmtTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3RhZ2xpbmUoKSk7XG4gICAgcHJvamVjdHMucmVzdWx0LmZvckVhY2goKGRhdGEpID0+e1xuICAgICAgd29ya1NlY3Rpb24uYXBwZW5kKHRoaXMuX3dvcmtDb250YWluZXIoZGF0YS50aXRsZSwgZGF0YS5kZXNjcmlwdGlvbikpO1xuICAgIH0pO1xuICAgIHJldHVybiB3b3JrU2VjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0YWdsaW5lIGRpdlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHRhZ2xpbmUgZm9yIHRoZSB3b3JrIHNlY3Rpb25cbiAgICovXG4gIF90YWdsaW5lKCk6SFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhZ2xpbmUxID0gJyMgV29yayAnO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFnbGluZSc7XG5cbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB3b3JrIGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBCYXNpY2FsbHkgYSBkaXYgZm9yIHBlcnNvbiBwcm9qZWN0c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVUZXh0IC0gdGl0bGUgb2YgdGhlIHByb2plY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uVGV4dCAtIHByb2plY3QgZGVzY3JpcHRpb25cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gd29yayBodG1sIGVsZW1lbnRcbiAgICovXG4gIF93b3JrQ29udGFpbmVyKHRpdGxlVGV4dDpzdHJpbmcsIGRlc2NyaXB0aW9uVGV4dDpzdHJpbmcpOkhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd3b3JrLWl0ZW0nO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvblRleHQ7XG4gICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cbiIsIlxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdCdXR0b24ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlIGEgZmxvYXRpbmcgYWN0aW9uIGJ1dHRvblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmaXhlZC1hY3Rpb24tYnRuIG1hdGVyaWFsLWljb25zJztcbiAgICBpY29uLmlubmVySFRNTCA9ICdsaWdodF9tb2RlJztcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVfdGhlbWUpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICB0b2dnbGVfdGhlbWUoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSE7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1mbG9hdGluZyAubWF0ZXJpYWwtaWNvbnMnKSE7XG4gICAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLXRoZW1lJykpIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xuICAgICAgZWxlLmlubmVySFRNTCA9ICdsaWdodF9tb2RlJztcbiAgICB9IGVsc2Uge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLXRoZW1lJyk7XG4gICAgICBlbGUuaW5uZXJIVE1MID0gJ2RhcmtfbW9kZSc7XG4gICAgfVxuICB9XG59XG4iXX0=
