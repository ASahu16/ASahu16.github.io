(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    
    },{"./portfolio/contact":2,"./portfolio/home":3,"./portfolio/project":4,"./util/elements/floatingButton":5}],2:[function(require,module,exports){
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
    
    },{}],3:[function(require,module,exports){
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
            span2.innerText = tagline2;
            container.append(span1, span2, span3);
            return container;
        }
    }
    exports.Home = Home;
    
    },{}],4:[function(require,module,exports){
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Projects = void 0;
    class Projects {
        constructor() {
            this.siteLinks = [
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
        }
        build() {
            const body = document.getElementsByTagName("body");
            body[0].appendChild(this._section());
        }
        _section() {
            const projectSection = document.createElement("section");
            projectSection.className = "project";
            projectSection.id = "project";
            const wrapper = document.createElement("div");
            wrapper.classList.add("project-wrapper");
            projectSection.appendChild(this._underDevelopment());
            projectSection.appendChild(this._siteLinks());
            return projectSection;
        }
        _tagline() {
            const tagline1 = "# Projects ";
            const container = document.createElement("div");
            container.className = "tagline";
            const span1 = document.createElement("span");
            span1.innerText = tagline1;
            container.append(span1);
            return container;
        }
        _projectContainer(titleText, descriptionText, projectUrl, imgSet) {
            const container = document.createElement("a");
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
        _underDevelopment() {
            const tagline1 = "This website is under construction," +
                "<br> meanwhile feel free to visit below links... ";
            const container = document.createElement("div");
            container.className = "tagline";
            const span1 = document.createElement("span");
            span1.innerHTML = tagline1;
            container.append(span1);
            return container;
        }
        _siteLinks() {
            const socialLinks = document.createElement("ul");
            socialLinks.className = "links";
            for (let i = 0; i < this.siteLinks.length; i += 1) {
                const linkElement = document.createElement("li");
                const text = document.createElement("a");
                text.setAttribute("href", this.siteLinks[i].link);
                text.setAttribute("target", "_blank");
                text.innerHTML = this.siteLinks[i].title;
                linkElement.append(text);
                socialLinks.appendChild(linkElement);
            }
            return socialLinks;
        }
    }
    exports.Projects = Projects;
    
    },{}],5:[function(require,module,exports){
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
    
    },{}]},{},[1])
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvbWFpbi50cyIsInNyYy90cy9wb3J0Zm9saW8vY29udGFjdC50cyIsInNyYy90cy9wb3J0Zm9saW8vaG9tZS50cyIsInNyYy90cy9wb3J0Zm9saW8vcHJvamVjdC50cyIsInNyYy90cy91dGlsL2VsZW1lbnRzL2Zsb2F0aW5nQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLGlEQUE2QztBQUM3QyxtRUFBOEQ7QUFFOUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN4QixNQUFNLFFBQVEsR0FBRyxJQUFJLGtCQUFRLEVBQUUsQ0FBQztBQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUN0QyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDOzs7Ozs7QUNYRixNQUFhLE9BQU87SUFBcEI7UUFDbUIsYUFBUSxHQUFhLENBQUMsY0FBYztZQUNuRCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLHVCQUF1QixDQUFDLENBQUM7UUFDVixZQUFPLEdBQWEsQ0FBQyx1Q0FBdUM7WUFDM0UsK0JBQStCO1lBQy9CLDRCQUE0QjtZQUM1Qiw4QkFBOEIsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBYSxDQUFDLGVBQWU7WUFDdEQsYUFBYTtZQUNiLFlBQVk7WUFDWixpQkFBaUIsQ0FBQyxDQUFDO0lBb0V2QixDQUFDO0lBL0RDLEtBQUs7UUFFSCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBTUQsUUFBUTtRQUNOLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsY0FBYyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDckMsY0FBYyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDOUIsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMvQyxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBTUQsV0FBVztRQUNULE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDcEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQU1ELFFBQVE7UUFDTixNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDL0IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQU1ELE9BQU87UUFDTCxNQUFNLFdBQVcsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxXQUFXLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUVqQyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4RCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELE1BQU0sSUFBSSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxHQUFHLEdBQUcsY0FBYyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUMsTUFBTSxJQUFJLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMvQixXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBaEZELDBCQWdGQzs7Ozs7O0FDaEZELE1BQWEsSUFBSTtJQUlmLEtBQUs7UUFFSCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBTUQsUUFBUTtRQUNOLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDakMsV0FBVyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDeEIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBTUQsUUFBUTtRQUNOLE1BQU0sUUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ3ZDLE1BQU0sUUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBRXpDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFaEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFFM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQTFDRCxvQkEwQ0M7Ozs7OztBQ3pDRCxNQUFhLFFBQVE7SUFBckI7UUFDbUIsY0FBUyxHQUFzQztZQUM5RDtnQkFDRSxJQUFJLEVBQUUsbUNBQW1DO2dCQUN6QyxLQUFLLEVBQUUsZUFBZTthQUN2QjtZQUNEO2dCQUNFLElBQUksRUFBRSxpQ0FBaUM7Z0JBQ3ZDLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGlEQUFpRDtnQkFDdkQsS0FBSyxFQUFFLGVBQWU7YUFDdkI7U0FDRixDQUFDO0lBaUlKLENBQUM7SUEzSEMsS0FBSztRQUVILE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFNRCxRQUFRO1FBQ04sTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxjQUFjLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNyQyxjQUFjLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUU5QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFekMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFVOUMsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQU1ELFFBQVE7UUFDTixNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDL0IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUVoQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQWFELGlCQUFpQixDQUNmLFNBQWlCLEVBQ2pCLGVBQXVCLEVBQ3ZCLFVBQWtCLEVBQ2xCLE1BQWlCO1FBRWpCLE1BQU0sU0FBUyxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNELFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBRXRDLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsWUFBWSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFFekMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFFRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELFVBQVUsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBRXJDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFNUIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBTUQsaUJBQWlCO1FBQ2YsTUFBTSxRQUFRLEdBQ1oscUNBQXFDO1lBQ3JDLG1EQUFtRCxDQUFDO1FBQ3RELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDaEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFNRCxVQUFVO1FBQ1IsTUFBTSxXQUFXLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsV0FBVyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFFaEMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxNQUFNLElBQUksR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDekMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBL0lELDRCQStJQzs7Ozs7O0FDL0lELE1BQWEsY0FBYztJQUl6QixLQUFLO1FBQ0gsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxZQUFZO1FBQ1YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUM3QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFFLENBQUM7UUFDckUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwQyxHQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBQ0Y7QUF6QkQsd0NBeUJDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtDb250YWN0fSBmcm9tICcuL3BvcnRmb2xpby9jb250YWN0JztcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9wb3J0Zm9saW8vaG9tZSc7XG5pbXBvcnQge1Byb2plY3RzfSBmcm9tICcuL3BvcnRmb2xpby9wcm9qZWN0JztcbmltcG9ydCB7RmxvYXRpbmdCdXR0b259IGZyb20gJy4vdXRpbC9lbGVtZW50cy9mbG9hdGluZ0J1dHRvbic7XG5cbmNvbnN0IGhvbWUgPSBuZXcgSG9tZSgpO1xuY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcbmNvbnN0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xuY29uc3QgdGhlbWVCdG4gPSBuZXcgRmxvYXRpbmdCdXR0b24oKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhlbWVCdG4uYnVpbGQoKTtcbiAgaG9tZS5idWlsZCgpO1xuICBwcm9qZWN0cy5idWlsZCgpO1xuICBjb250YWN0LmJ1aWxkKCk7XG59O1xuIiwiLyoqXG4gKiBSZW5kZXJzIGNvbnRhY3Qgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlua1RleHQ6IHN0cmluZ1tdID0gWydpbi9hLXNhaHUxNi8nLFxuICAgICdAaWFtc2FodTE2JyxcbiAgICAnZ2l0aHViLmNvbS9BU2FodTE2JyxcbiAgICAnYXNhaHUubTE2MDhAZ21haWwuY29tJ107XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlua1NyYzogc3RyaW5nW10gPSBbJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hLXNhaHUxNi8nLFxuICAgICdodHRwczovL3R3aXR0ZXIuY29tL2lhbXNhaHUxNicsXG4gICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BU2FodTE2JyxcbiAgICAnbWFpbHRvOmFzYWh1Lm0xNjA4QGdtYWlsLmNvbSddO1xuICBwcml2YXRlIHJlYWRvbmx5IGxpbmtzSWNvbnM6IHN0cmluZ1tdID0gWydsaW5rZWQtaW4uc3ZnJyxcbiAgICAndHdpdHRlci5zdmcnLFxuICAgICdnaXRodWIuc3ZnJyxcbiAgICAnY2hhdC1idWJibGUuc3ZnJ107XG5cbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIHRvIGNyZWF0ZWQgdGhlIHdob2xlIHNlY3Rpb24vc2NyZWVuXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHNvbWUgaW50ZXJmYWNlIG9yIGFic3RyYWN0IGNsYXNzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aGlzLl9zZWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlcyB3aG9sZSBjb250YWN0IHNlY3Rpb25cbiAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIGNvbnRhY3Qgc2VjdGlvblxuICAqL1xuICBfc2VjdGlvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3RTZWN0aW9uLmlkID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3F1aWNrTGlua3MoKSk7XG4gICAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGRpdiB3aXRoIHNvbWUgcXVpY2sgY29udGFjdCBsaW5rc1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHF1aWNrIGxpbmtzIHNlY3Rpb24gZm9yIHRoZSBjb250YWN0XG4gICAqL1xuICBfcXVpY2tMaW5rcygpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdxdWljay1saW5rcyc7XG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLl90YWdsaW5lKCksIHRoaXMuX3NvY2lhbCgpKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIGNvbnRhY3Qgc2VjdGlvblxuICAgKi9cbiAgX3RhZ2xpbmUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhZ2xpbmUxID0gJ0ZpbmQgbWUgb246JztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3RhZ2xpbmUnO1xuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4xLmlubmVyVGV4dCA9IHRhZ2xpbmUxO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxpc3Qgb2YgbGlua3MgdG8gdmFyaW91cyBwbGF0Zm9ybXNcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEEgbGlzdCBmb3Igc29jaWFsIGNvbm5lY3Rpb25cbiAgICovXG4gIF9zb2NpYWwoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNvY2lhbExpbmtzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgc29jaWFsTGlua3MuY2xhc3NOYW1lID0gJ3NvY2lhbCc7XG5cbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5saW5rVGV4dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgaWNvbjogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaWNvbi5zcmMgPSBgc3RhdGljL2ltZy8ke3RoaXMubGlua3NJY29uc1tpXX1gO1xuICAgICAgY29uc3QgdGV4dDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB0ZXh0LmlubmVySFRNTCA9IHRoaXMubGlua1RleHRbaV07XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMubGlua1NyY1tpXSk7XG4gICAgICBsaW5rRWxlbWVudC5hcHBlbmQoaWNvbiwgdGV4dCk7XG4gICAgICBzb2NpYWxMaW5rcy5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBzb2NpYWxMaW5rcztcbiAgfVxufVxuIiwiLyoqXG4gKiBSZW5kZXJzIGhvbWUgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgSG9tZSB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGVkIHRoZSB3aG9sZSBzZWN0aW9uL3NjcmVlblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzb21lIGludGVyZmFjZSBvciBhYnN0cmFjdCBjbGFzc1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZXMgd2hvbGUgaG9tZSBzZWN0aW9uXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBob21lIHNlY3Rpb25cbiAgKi9cbiAgX3NlY3Rpb24oKTpIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaG9tZVNlY3Rpb24uY2xhc3NOYW1lID0gJ2Jhbm5lcic7XG4gICAgaG9tZVNlY3Rpb24uaWQgPSAnaG9tZSc7XG4gICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5fdGFnbGluZSgpKTtcbiAgICByZXR1cm4gaG9tZVNlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgaG9tZSBzZWN0aW9uXG4gICAqL1xuICBfdGFnbGluZSgpOkhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YWdsaW5lMSA9ICdXZWxjb21lIHRvIE15IFdvcmxkJztcbiAgICBjb25zdCB0YWdsaW5lMiA9ICdIaSBJXFwnbSBBYmhpc2hlayBTYWh1JztcbiAgICAvLyBjb25zdCB0YWdsaW5lMyA9ICdBIGRldmVsb3Blcic7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YWdsaW5lJztcblxuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNwYW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IHNwYW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIC8vIHNwYW4xLmlubmVyVGV4dCA9IHRhZ2xpbmUxO1xuICAgIHNwYW4yLmlubmVyVGV4dCA9IHRhZ2xpbmUyO1xuICAgIC8vIHNwYW4zLmlubmVyVGV4dCA9IHRhZ2xpbmUzO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEsIHNwYW4yLCBzcGFuMyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcHJvamVjdExpc3QgZnJvbSBcIi4uL2ZpeHR1cmUvcHJvamVjdHNEYXRhLmpzb25cIjtcbi8qKlxuICogUmVuZGVycyBwcm9qZWN0IHNlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFByb2plY3RzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzaXRlTGlua3M6IHsgbGluazogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH1bXSA9IFtcbiAgICB7XG4gICAgICBsaW5rOiBcImh0dHBzOi8vYWJoaXNoZWtzYWh1Lm5ldGxpZnkuYXBwL1wiLFxuICAgICAgdGl0bGU6IFwiT2xkIFBvcnRmb2xpb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJ2h0dHBzOi8vbGVldGNvZGUuY29tL2Etc2FodS0xNi8nLFxuICAgICAgdGl0bGU6ICdMZWV0Q29kZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICdodHRwczovL2F1dGguZ2Vla3Nmb3JnZWVrcy5vcmcvdXNlci9hc2FodW0xNjA4LycsXG4gICAgICB0aXRsZTogJ0dlZWtzRm9yR2Vla3MnXG4gICAgfVxuICBdO1xuICBcblxuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlZCB0aGUgd2hvbGUgc2VjdGlvbi9zY3JlZW5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIC8vIFRPRE86IE1ha2Ugc29tZSBpbnRlcmZhY2Ugb3IgYWJzdHJhY3QgY2xhc3NcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHdob2xlIHByb2plY3Qgc2VjdGlvblxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHByb2plY3Qgc2VjdGlvblxuICAgKi9cbiAgX3NlY3Rpb24oKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgcHJvamVjdFNlY3Rpb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgcHJvamVjdFNlY3Rpb24uaWQgPSBcInByb2plY3RcIjtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtd3JhcHBlclwiKTtcbiAgICAvLyBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl90YWdsaW5lKCkpO1xuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3VuZGVyRGV2ZWxvcG1lbnQoKSk7XG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5fc2l0ZUxpbmtzKCkpO1xuXG4gICAgLy8gcHJvamVjdExpc3QucmVzdWx0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAvLyAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgLy8gICAgICAgdGhpcy5fcHJvamVjdENvbnRhaW5lcihkYXRhLnRpdGxlLFxuICAgIC8vICAgICAgICAgICBkYXRhLmRlc2NyaXB0aW9uLFxuICAgIC8vICAgICAgICAgICBkYXRhLmxpbmssXG4gICAgLy8gICAgICAgICAgIGRhdGEuaW1nU2V0KSk7XG4gICAgLy8gfSk7XG4gICAgLy8gcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgcmV0dXJuIHByb2plY3RTZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIHByb2plY3Qgc2VjdGlvblxuICAgKi9cbiAgX3RhZ2xpbmUoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhZ2xpbmUxID0gXCIjIFByb2plY3RzIFwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFnbGluZVwiO1xuXG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm9qZWN0IGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBCYXNpY2FsbHkgYSBkaXYgZm9yIHBlcnNvbiBwcm9qZWN0c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVUZXh0IC0gdGl0bGUgb2YgdGhlIHByb2plY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uVGV4dCAtIHByb2plY3QgZGVzY3JpcHRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2plY3RVcmwgLSB1cmwgdG8gdGhlIHByb2plY3QgZGVtby9jb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGltZ1NldCAtIEFycmF5IG9mIGltZyBhc3NvY2lhdGVkIHdpdGggcHJvamVjdFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBwcm9qZWN0IGh0bWwgZWxlbWVudFxuICAgKi9cbiAgX3Byb2plY3RDb250YWluZXIoXG4gICAgdGl0bGVUZXh0OiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb25UZXh0OiBzdHJpbmcsXG4gICAgcHJvamVjdFVybDogc3RyaW5nLFxuICAgIGltZ1NldD86IHN0cmluZ1tdXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcHJvamVjdFVybCk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaXRlbUNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgaXRlbVNob3djYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtU2hvd2Nhc2UuY2xhc3NOYW1lID0gXCJpdGVtLXNob3djYXNlXCI7XG5cbiAgICBpZiAoaW1nU2V0KSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWdTZXRbMF0pO1xuICAgICAgaXRlbVNob3djYXNlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbURldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbURldGFpbC5jbGFzc05hbWUgPSBcIml0ZW0tZGV0YWlsXCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XG5cbiAgICBpdGVtRGV0YWlsLmFwcGVuZCh0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChpdGVtU2hvd2Nhc2UsIGl0ZW1EZXRhaWwpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgcHJvamVjdCBzZWN0aW9uXG4gICAqL1xuICBfdW5kZXJEZXZlbG9wbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdGFnbGluZTEgPVxuICAgICAgXCJUaGlzIHdlYnNpdGUgaXMgdW5kZXIgY29uc3RydWN0aW9uLFwiICtcbiAgICAgIFwiPGJyPiBtZWFud2hpbGUgZmVlbCBmcmVlIHRvIHZpc2l0IGJlbG93IGxpbmtzLi4uIFwiO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFnbGluZVwiO1xuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3BhbjEuaW5uZXJIVE1MID0gdGFnbGluZTE7XG4gICAgY29udGFpbmVyLmFwcGVuZChzcGFuMSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbGlzdCBvZiBsaW5rcyB0byB2YXJpb3VzIHBsYXRmb3Jtc1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gQSBsaXN0IGZvciBleHRlcm5hbCBzaXRlIGxpbmtzXG4gICAqL1xuICBfc2l0ZUxpbmtzKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzb2NpYWxMaW5rczogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgc29jaWFsTGlua3MuY2xhc3NOYW1lID0gXCJsaW5rc1wiO1xuXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuc2l0ZUxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGNvbnN0IHRleHQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdGhpcy5zaXRlTGlua3NbaV0ubGluayk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICAgIHRleHQuaW5uZXJIVE1MID0gdGhpcy5zaXRlTGlua3NbaV0udGl0bGU7XG4gICAgICBsaW5rRWxlbWVudC5hcHBlbmQodGV4dCk7XG4gICAgICBzb2NpYWxMaW5rcy5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBzb2NpYWxMaW5rcztcbiAgfVxufVxuIiwiXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBGbG9hdGluZ0J1dHRvbiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGUgYSBmbG9hdGluZyBhY3Rpb24gYnV0dG9uXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGljb24uY2xhc3NOYW1lID0gJ2ZpeGVkLWFjdGlvbi1idG4gbWF0ZXJpYWwtaWNvbnMnO1xuICAgIGljb24uaW5uZXJIVE1MID0gJ2xpZ2h0X21vZGUnO1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZV90aGVtZSk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZChpY29uKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZXF1aXJlLWpzZG9jXG4gIHRvZ2dsZV90aGVtZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpITtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWZsb2F0aW5nIC5tYXRlcmlhbC1pY29ucycpITtcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstdGhlbWUnKSkge1xuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLXRoZW1lJyk7XG4gICAgICBlbGUuaW5uZXJIVE1MID0gJ2xpZ2h0X21vZGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstdGhlbWUnKTtcbiAgICAgIGVsZS5pbm5lckhUTUwgPSAnZGFya19tb2RlJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==
    