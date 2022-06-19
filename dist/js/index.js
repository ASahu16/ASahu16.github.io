(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    module.exports={
      "result":[
        {
          "title":"National Library",
          "description":"National Library is a window based application in which the whole records of the books in the library would be managing the details about different students who have received the books would be kept.",
          "imgSet":["https://sahu.netlify.app/images/nationalibrary.jpg"],
          "link":"https://www.youtube.com/watch?v=XJIRcwg7nhM&t=18s"
        },    
        {
          "title":"Payroll Management.",
          "description":"Payroll Management System is a corporate sector oriented software for management of salary and associated services in a company.",
          "imgSet":["https://sahu.netlify.app/images/payroll.png"],
          "link":"https://github.com/ASahu16/Payroll"
        },   
        {
          "title":"DDUKK Stock Management.",
          "description":"This project is aimed at developing a desktop based application named DDUKK - Stock Management System for managing the assets of any organization. This system can be used to store the details of the inventory, stock maintenance, update the inventory.",
          "imgSet":["https://sahu.netlify.app/images/ddukk.jpg"],
          "link":"https://www.youtube.com/watch?v=jViwjbtbpa8&t=15s"
        },
        {
          "title":"Echo Music Player",
          "description":"An android music player application with features like shake to change, visualizer, mark as favorite and basic functionalities that a music player can provide. This Music Player App is made for learning to build User Interfaces, add Functionalities, Building Echo modules using Kotlin.",
          "imgSet":["https://sahu.netlify.app/images/echomusicplayer.png"],
          "link":"https://github.com/ASahu16/Music-App-Android-Java"
        },
        {
          "title":"Raktamrit.com",
          "description":"An online blood bank management system that helps in managing various blood bank operations effectively. The entire project has been developed keeping in view of the distributed client server computing technology, in mind. Any person who is interested in donating the blood can register himself. ",
          "imgSet":["https://sahu.netlify.app/images/bloodbank.jpg"],
          "link":"https://www.youtube.com/watch?v=qfUmBn5H4xs"
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
    const projectList = __importStar(require("../fixture/projectsData.json"));
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
            projectList.result.forEach((data) => {
                wrapper.appendChild(this._projectContainer(data.title, data.description, data.link, data.imgSet));
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
        _projectContainer(titleText, descriptionText, projectUrl, imgSet) {
            const container = document.createElement('a');
            container.setAttribute('href', projectUrl);
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
            container.append(itemShowcase, itemDetail);
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
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvZml4dHVyZS9wcm9qZWN0c0RhdGEuanNvbiIsInNyYy90cy9tYWluLnRzIiwic3JjL3RzL3BvcnRmb2xpby9jb250YWN0LnRzIiwic3JjL3RzL3BvcnRmb2xpby9ob21lLnRzIiwic3JjL3RzL3BvcnRmb2xpby9wcm9qZWN0LnRzIiwic3JjL3RzL3V0aWwvZWxlbWVudHMvZmxvYXRpbmdCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2pDQSxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLGlEQUE2QztBQUM3QyxtRUFBOEQ7QUFFOUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN4QixNQUFNLFFBQVEsR0FBRyxJQUFJLGtCQUFRLEVBQUUsQ0FBQztBQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUN0QyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDOzs7Ozs7QUNYRixNQUFhLE9BQU87SUFBcEI7UUFDbUIsYUFBUSxHQUFhLENBQUMsY0FBYztZQUNuRCxZQUFZO1lBQ1osb0JB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UUFDM0MsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBeEZELDRCQXdGQzs7Ozs7O0FDeEZELE1BQWEsY0FBYztJQUl6QixLQUFLO1FBQ0gsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxZQUFZO1FBQ1YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUM3QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFFLENBQUM7UUFDckUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwQyxHQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBQ0Y7QUF6QkQsd0NBeUJDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcInJlc3VsdFwiOltcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJOYXRpb25hbCBMaWJyYXJ5XCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJOYXRpb25hbCBMaWJyYXJ5IGlzIGEgd2luZG93IGJhc2VkIGFwcGxpY2F0aW9uIGluIHdoaWNoIHRoZSB3aG9sZSByZWNvcmRzIG9mIHRoZSBib29rcyBpbiB0aGUgbGlicmFyeSB3b3VsZCBiZSBtYW5hZ2luZyB0aGUgZGV0YWlscyBhYm91dCBkaWZmZXJlbnQgc3R1ZGVudHMgd2hvIGhhdmUgcmVjZWl2ZWQgdGhlIGJvb2tzIHdvdWxkIGJlIGtlcHQuXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvbmF0aW9uYWxpYnJhcnkuanBnXCJdLFxuICAgICAgXCJsaW5rXCI6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVhKSVJjd2c3bmhNJnQ9MThzXCJcbiAgICB9LCAgICBcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJQYXlyb2xsIE1hbmFnZW1lbnQuXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJQYXlyb2xsIE1hbmFnZW1lbnQgU3lzdGVtIGlzIGEgY29ycG9yYXRlIHNlY3RvciBvcmllbnRlZCBzb2Z0d2FyZSBmb3IgbWFuYWdlbWVudCBvZiBzYWxhcnkgYW5kIGFzc29jaWF0ZWQgc2VydmljZXMgaW4gYSBjb21wYW55LlwiLFxuICAgICAgXCJpbWdTZXRcIjpbXCJodHRwczovL3NhaHUubmV0bGlmeS5hcHAvaW1hZ2VzL3BheXJvbGwucG5nXCJdLFxuICAgICAgXCJsaW5rXCI6XCJodHRwczovL2dpdGh1Yi5jb20vQVNhaHUxNi9QYXlyb2xsXCJcbiAgICB9LCAgIFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIkREVUtLIFN0b2NrIE1hbmFnZW1lbnQuXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJUaGlzIHByb2plY3QgaXMgYWltZWQgYXQgZGV2ZWxvcGluZyBhIGRlc2t0b3AgYmFzZWQgYXBwbGljYXRpb24gbmFtZWQgRERVS0sgLSBTdG9jayBNYW5hZ2VtZW50IFN5c3RlbSBmb3IgbWFuYWdpbmcgdGhlIGFzc2V0cyBvZiBhbnkgb3JnYW5pemF0aW9uLiBUaGlzIHN5c3RlbSBjYW4gYmUgdXNlZCB0byBzdG9yZSB0aGUgZGV0YWlscyBvZiB0aGUgaW52ZW50b3J5LCBzdG9jayBtYWludGVuYW5jZSwgdXBkYXRlIHRoZSBpbnZlbnRvcnkuXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvZGR1a2suanBnXCJdLFxuICAgICAgXCJsaW5rXCI6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWpWaXdqYnRicGE4JnQ9MTVzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIkVjaG8gTXVzaWMgUGxheWVyXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJBbiBhbmRyb2lkIG11c2ljIHBsYXllciBhcHBsaWNhdGlvbiB3aXRoIGZlYXR1cmVzIGxpa2Ugc2hha2UgdG8gY2hhbmdlLCB2aXN1YWxpemVyLCBtYXJrIGFzIGZhdm9yaXRlIGFuZCBiYXNpYyBmdW5jdGlvbmFsaXRpZXMgdGhhdCBhIG11c2ljIHBsYXllciBjYW4gcHJvdmlkZS4gVGhpcyBNdXNpYyBQbGF5ZXIgQXBwIGlzIG1hZGUgZm9yIGxlYXJuaW5nIHRvIGJ1aWxkIFVzZXIgSW50ZXJmYWNlcywgYWRkIEZ1bmN0aW9uYWxpdGllcywgQnVpbGRpbmcgRWNobyBtb2R1bGVzIHVzaW5nIEtvdGxpbi5cIixcbiAgICAgIFwiaW1nU2V0XCI6W1wiaHR0cHM6Ly9zYWh1Lm5ldGxpZnkuYXBwL2ltYWdlcy9lY2hvbXVzaWNwbGF5ZXIucG5nXCJdLFxuICAgICAgXCJsaW5rXCI6XCJodHRwczovL2dpdGh1Yi5jb20vQVNhaHUxNi9NdXNpYy1BcHAtQW5kcm9pZC1KYXZhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIlJha3RhbXJpdC5jb21cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpcIkFuIG9ubGluZSBibG9vZCBiYW5rIG1hbmFnZW1lbnQgc3lzdGVtIHRoYXQgaGVscHMgaW4gbWFuYWdpbmcgdmFyaW91cyBibG9vZCBiYW5rIG9wZXJhdGlvbnMgZWZmZWN0aXZlbHkuIFRoZSBlbnRpcmUgcHJvamVjdCBoYXMgYmVlbiBkZXZlbG9wZWQga2VlcGluZyBpbiB2aWV3IG9mIHRoZSBkaXN0cmlidXRlZCBjbGllbnQgc2VydmVyIGNvbXB1dGluZyB0ZWNobm9sb2d5LCBpbiBtaW5kLiBBbnkgcGVyc29uIHdobyBpcyBpbnRlcmVzdGVkIGluIGRvbmF0aW5nIHRoZSBibG9vZCBjYW4gcmVnaXN0ZXIgaGltc2VsZi4gXCIsXG4gICAgICBcImltZ1NldFwiOltcImh0dHBzOi8vc2FodS5uZXRsaWZ5LmFwcC9pbWFnZXMvYmxvb2RiYW5rLmpwZ1wiXSxcbiAgICAgIFwibGlua1wiOlwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1xZlVtQm41SDR4c1wiXG4gICAgfVxuICBdXG59IiwiaW1wb3J0IHtDb250YWN0fSBmcm9tICcuL3BvcnRmb2xpby9jb250YWN0JztcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9wb3J0Zm9saW8vaG9tZSc7XG5pbXBvcnQge1Byb2plY3RzfSBmcm9tICcuL3BvcnRmb2xpby9wcm9qZWN0JztcbmltcG9ydCB7RmxvYXRpbmdCdXR0b259IGZyb20gJy4vdXRpbC9lbGVtZW50cy9mbG9hdGluZ0J1dHRvbic7XG5cbmNvbnN0IGhvbWUgPSBuZXcgSG9tZSgpO1xuY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcbmNvbnN0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xuY29uc3QgdGhlbWVCdG4gPSBuZXcgRmxvYXRpbmdCdXR0b24oKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhlbWVCdG4uYnVpbGQoKTtcbiAgaG9tZS5idWlsZCgpO1xuICBwcm9qZWN0cy5idWlsZCgpO1xuICBjb250YWN0LmJ1aWxkKCk7XG59O1xuIiwiLyoqXG4gKiBSZW5kZXJzIGNvbnRhY3Qgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlua1RleHQ6IHN0cmluZ1tdID0gWydpbi9hLXNhaHUxNi8nLFxuICAgICdAaWFtc2FodTE2JyxcbiAgICAnZ2l0aHViLmNvbS9BU2FodTE2JyxcbiAgICAnYXNhaHUubTE2MDhAZ21haWwuY29tJ107XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlua1NyYzogc3RyaW5nW10gPSBbJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hLXNhaHUxNi8nLFxuICAgICdodHRwczovL3R3aXR0ZXIuY29tL2lhbXNhaHUxNicsXG4gICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BU2FodTE2JyxcbiAgICAnbWFpbHRvOmFzYWh1Lm0xNjA4QGdtYWlsLmNvbSddO1xuICBwcml2YXRlIHJlYWRvbmx5IGxpbmtzSWNvbnM6IHN0cmluZ1tdID0gWydsaW5rZWQtaW4uc3ZnJyxcbiAgICAndHdpdHRlci5zdmcnLFxuICAgICdnaXRodWIuc3ZnJyxcbiAgICAnY2hhdC1idWJibGUuc3ZnJ107XG5cbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIHRvIGNyZWF0ZWQgdGhlIHdob2xlIHNlY3Rpb24vc2NyZWVuXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHNvbWUgaW50ZXJmYWNlIG9yIGFic3RyYWN0IGNsYXNzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aGlzLl9zZWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlcyB3aG9sZSBjb250YWN0IHNlY3Rpb25cbiAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIGNvbnRhY3Qgc2VjdGlvblxuICAqL1xuICBfc2VjdGlvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3RTZWN0aW9uLmlkID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3F1aWNrTGlua3MoKSk7XG4gICAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGRpdiB3aXRoIHNvbWUgcXVpY2sgY29udGFjdCBsaW5rc1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHF1aWNrIGxpbmtzIHNlY3Rpb24gZm9yIHRoZSBjb250YWN0XG4gICAqL1xuICBfcXVpY2tMaW5rcygpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdxdWljay1saW5rcyc7XG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLl90YWdsaW5lKCksIHRoaXMuX3NvY2lhbCgpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIGNvbnRhY3Qgc2VjdGlvblxuICAgKi9cbiAgX3RhZ2xpbmUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhZ2xpbmUxID0gJ0ZpbmQgbWUgb246JztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3RhZ2xpbmUnO1xuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4xLmlubmVyVGV4dCA9IHRhZ2xpbmUxO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxpc3Qgb2YgbGlua3MgdG8gdmFyaW91cyBwbGF0Zm9ybXNcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEEgbGlzdCBmb3Igc29jaWFsIGNvbm5lY3Rpb25cbiAgICovXG4gIF9zb2NpYWwoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNvY2lhbExpbmtzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgc29jaWFsTGlua3MuY2xhc3NOYW1lID0gJ3NvY2lhbCc7XG5cbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5saW5rVGV4dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgaWNvbjogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaWNvbi5zcmMgPSBgc3RhdGljL2ltZy8ke3RoaXMubGlua3NJY29uc1tpXX1gO1xuICAgICAgY29uc3QgdGV4dDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB0ZXh0LmlubmVySFRNTCA9IHRoaXMubGlua1RleHRbaV07XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMubGlua1NyY1tpXSk7XG4gICAgICBsaW5rRWxlbWVudC5hcHBlbmQoaWNvbiwgdGV4dCk7XG4gICAgICBzb2NpYWxMaW5rcy5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBzb2NpYWxMaW5rcztcbiAgfVxufVxuIiwiLyoqXG4gKiBSZW5kZXJzIGhvbWUgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgSG9tZSB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGVkIHRoZSB3aG9sZSBzZWN0aW9uL3NjcmVlblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzb21lIGludGVyZmFjZSBvciBhYnN0cmFjdCBjbGFzc1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZXMgd2hvbGUgaG9tZSBzZWN0aW9uXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBob21lIHNlY3Rpb25cbiAgKi9cbiAgX3NlY3Rpb24oKTpIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaG9tZVNlY3Rpb24uY2xhc3NOYW1lID0gJ2Jhbm5lcic7XG4gICAgaG9tZVNlY3Rpb24uaWQgPSAnaG9tZSc7XG4gICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5fdGFnbGluZSgpKTtcbiAgICByZXR1cm4gaG9tZVNlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgaG9tZSBzZWN0aW9uXG4gICAqL1xuICBfdGFnbGluZSgpOkhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YWdsaW5lMSA9ICdXZWxjb21lIHRvIE15IFdvcmxkJztcbiAgICBjb25zdCB0YWdsaW5lMiA9ICdIaSBJXFwnbSBBYmhpc2hlayBTYWh1JztcbiAgICAvLyBjb25zdCB0YWdsaW5lMyA9ICdBIGRldmVsb3Blcic7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YWdsaW5lJztcblxuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4xLmlubmVyVGV4dCA9IHRhZ2xpbmUxO1xuICAgIHNwYW4yLmlubmVyVGV4dCA9IHRhZ2xpbmUyO1xuICAgIC8vIHNwYW4zLmlubmVyVGV4dCA9IHRhZ2xpbmUzO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEsIHNwYW4yLCBzcGFuMyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcHJvamVjdExpc3QgZnJvbSAnLi4vZml4dHVyZS9wcm9qZWN0c0RhdGEuanNvbic7XG4vKipcbiAqIFJlbmRlcnMgcHJvamVjdCBzZWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9qZWN0cyB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGVkIHRoZSB3aG9sZSBzZWN0aW9uL3NjcmVlblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzb21lIGludGVyZmFjZSBvciBhYnN0cmFjdCBjbGFzc1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZXMgd2hvbGUgcHJvamVjdCBzZWN0aW9uXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBwcm9qZWN0IHNlY3Rpb25cbiAgKi9cbiAgX3NlY3Rpb24oKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHByb2plY3RTZWN0aW9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcbiAgICBwcm9qZWN0U2VjdGlvbi5pZCA9ICdwcm9qZWN0JztcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtd3JhcHBlcicpO1xuICAgIC8vIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3RhZ2xpbmUoKSk7XG4gICAgcHJvamVjdExpc3QucmVzdWx0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgdGhpcy5fcHJvamVjdENvbnRhaW5lcihkYXRhLnRpdGxlLFxuICAgICAgICAgICAgICBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBkYXRhLmxpbmssXG4gICAgICAgICAgICAgIGRhdGEuaW1nU2V0KSk7XG4gICAgfSk7XG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgcmV0dXJuIHByb2plY3RTZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIHByb2plY3Qgc2VjdGlvblxuICAgKi9cbiAgX3RhZ2xpbmUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhZ2xpbmUxID0gJyMgUHJvamVjdHMgJztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3RhZ2xpbmUnO1xuXG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3BhbjEuaW5uZXJUZXh0ID0gdGFnbGluZTE7XG4gICAgY29udGFpbmVyLmFwcGVuZChzcGFuMSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcHJvamVjdCBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQmFzaWNhbGx5IGEgZGl2IGZvciBwZXJzb24gcHJvamVjdHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlVGV4dCAtIHRpdGxlIG9mIHRoZSBwcm9qZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblRleHQgLSBwcm9qZWN0IGRlc2NyaXB0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9qZWN0VXJsIC0gdXJsIHRvIHRoZSBwcm9qZWN0IGRlbW8vY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBpbWdTZXQgLSBBcnJheSBvZiBpbWdlcyBhc3NvY2lhdGVkIHdpdGggcHJvamVjdFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBwcm9qZWN0IGh0bWwgZWxlbWVudFxuICAgKi9cbiAgX3Byb2plY3RDb250YWluZXIoXG4gICAgICB0aXRsZVRleHQ6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uVGV4dDogc3RyaW5nLFxuICAgICAgcHJvamVjdFVybDogc3RyaW5nLFxuICAgICAgaW1nU2V0Pzogc3RyaW5nW10pOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdocmVmJywgcHJvamVjdFVybCk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdpdGVtQ29udGFpbmVyJztcblxuICAgIGNvbnN0IGl0ZW1TaG93Y2FzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1TaG93Y2FzZS5jbGFzc05hbWUgPSAnaXRlbS1zaG93Y2FzZSc7XG5cbiAgICBpZiAoaW1nU2V0KSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZ1NldFswXSk7XG4gICAgICBpdGVtU2hvd2Nhc2UuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURldGFpbC5jbGFzc05hbWUgPSAnaXRlbS1kZXRhaWwnO1xuXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVUZXh0O1xuXG4gICAgaXRlbURldGFpbC5hcHBlbmQodGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoaXRlbVNob3djYXNlLCBpdGVtRGV0YWlsKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG59XG4iLCJcbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEZsb2F0aW5nQnV0dG9uIHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIHRvIGNyZWF0ZSBhIGZsb2F0aW5nIGFjdGlvbiBidXR0b25cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAnZml4ZWQtYWN0aW9uLWJ0biBtYXRlcmlhbC1pY29ucyc7XG4gICAgaWNvbi5pbm5lckhUTUwgPSAnbGlnaHRfbW9kZSc7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlX3RoZW1lKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKGljb24pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlcXVpcmUtanNkb2NcbiAgdG9nZ2xlX3RoZW1lKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykhO1xuICAgIGNvbnN0IGVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZmxvYXRpbmcgLm1hdGVyaWFsLWljb25zJykhO1xuICAgIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay10aGVtZScpKSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstdGhlbWUnKTtcbiAgICAgIGVsZS5pbm5lckhUTUwgPSAnbGlnaHRfbW9kZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay10aGVtZScpO1xuICAgICAgZWxlLmlubmVySFRNTCA9ICdkYXJrX21vZGUnO1xuICAgIH1cbiAgfVxufVxuIl19
    