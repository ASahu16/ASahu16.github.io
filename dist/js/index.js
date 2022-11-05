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
            span1.innerText = tagline1;
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
            this.siteLinks = ["abhisheksahu.netlify.app",
                "sahu.netlify.app"];
        }
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
            projectSection.appendChild(this._underDevelopment());
            projectSection.appendChild(this._siteLinks());
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
        _underDevelopment() {
            const tagline1 = 'This website is under construction,' +
                '<br> meanwhile feel free to visit old portfolio... ' +
                '<br> or reach out to me on below channels... ';
            const container = document.createElement('div');
            container.className = 'tagline';
            const span1 = document.createElement('span');
            span1.innerHTML = tagline1;
            container.append(span1);
            return container;
        }
        _siteLinks() {
            const socialLinks = document.createElement('ul');
            socialLinks.className = 'links';
            for (let i = 0; i < this.siteLinks.length; i += 1) {
                const linkElement = document.createElement('li');
                const text = document.createElement('a');
                text.setAttribute('href', `https://${this.siteLinks[i]}`);
                text.setAttribute('target', '_blank');
                text.innerHTML = this.siteLinks[i];
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
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvbWFpbi50cyIsInNyYy90cy9wb3J0Zm9saW8vY29udGFjdC50cyIsInNyYy90cy9wb3J0Zm9saW8vaG9tZS50cyIsInNyYy90cy9wb3J0Zm9saW8vcHJvamVjdC50cyIsInNyYy90cy91dGlsL2VsZW1lbnRzL2Zsb2F0aW5nQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLGlEQUE2QztBQUM3QyxtRUFBOEQ7QUFFOUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUN4QixNQUFNLFFBQVEsR0FBRyxJQUFJLGtCQUFRLEVBQUUsQ0FBQztBQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUN0QyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDOzs7Ozs7QUNYRixNQUFhLE9BQU87SUFBcEI7UUFDbUIsYUFBUSxHQUFhLENBQUMsY0FBYztZQUNuRCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLHVCQUF1QixDQUFDLENBQUM7UUFDVixZQUFPLEdBQWEsQ0FBQyx1Q0FBdUM7WUFDM0UsK0JBQStCO1lBQy9CLDRCQUE0QjtZQUM1Qiw4QkFBOEIsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBYSxDQUFDLGVBQWU7WUFDdEQsYUFBYTtZQUNiLFlBQVk7WUFDWixpQkFBaUIsQ0FBQyxDQUFDO0lBb0V2QixDQUFDO0lBL0RDLEtBQUs7UUFFSCxNQUFNLElB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QyxZQUFZLENBQUMsQ0FBQztRQUNsRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBR0QsWUFBWTtRQUNWLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDN0MsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBRSxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztDQUNGO0FBekJELHdDQXlCQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7Q29udGFjdH0gZnJvbSAnLi9wb3J0Zm9saW8vY29udGFjdCc7XG5pbXBvcnQge0hvbWV9IGZyb20gJy4vcG9ydGZvbGlvL2hvbWUnO1xuaW1wb3J0IHtQcm9qZWN0c30gZnJvbSAnLi9wb3J0Zm9saW8vcHJvamVjdCc7XG5pbXBvcnQge0Zsb2F0aW5nQnV0dG9ufSBmcm9tICcuL3V0aWwvZWxlbWVudHMvZmxvYXRpbmdCdXR0b24nO1xuXG5jb25zdCBob21lID0gbmV3IEhvbWUoKTtcbmNvbnN0IHByb2plY3RzID0gbmV3IFByb2plY3RzKCk7XG5jb25zdCBjb250YWN0ID0gbmV3IENvbnRhY3QoKTtcbmNvbnN0IHRoZW1lQnRuID0gbmV3IEZsb2F0aW5nQnV0dG9uKCk7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoZW1lQnRuLmJ1aWxkKCk7XG4gIGhvbWUuYnVpbGQoKTtcbiAgcHJvamVjdHMuYnVpbGQoKTtcbiAgY29udGFjdC5idWlsZCgpO1xufTtcbiIsIi8qKlxuICogUmVuZGVycyBjb250YWN0IHNlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IGxpbmtUZXh0OiBzdHJpbmdbXSA9IFsnaW4vYS1zYWh1MTYvJyxcbiAgICAnQGlhbXNhaHUxNicsXG4gICAgJ2dpdGh1Yi5jb20vQVNhaHUxNicsXG4gICAgJ2FzYWh1Lm0xNjA4QGdtYWlsLmNvbSddO1xuICBwcml2YXRlIHJlYWRvbmx5IGxpbmtTcmM6IHN0cmluZ1tdID0gWydodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYS1zYWh1MTYvJyxcbiAgICAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pYW1zYWh1MTYnLFxuICAgICdodHRwczovL2dpdGh1Yi5jb20vQVNhaHUxNicsXG4gICAgJ21haWx0bzphc2FodS5tMTYwOEBnbWFpbC5jb20nXTtcbiAgcHJpdmF0ZSByZWFkb25seSBsaW5rc0ljb25zOiBzdHJpbmdbXSA9IFsnbGlua2VkLWluLnN2ZycsXG4gICAgJ3R3aXR0ZXIuc3ZnJyxcbiAgICAnZ2l0aHViLnN2ZycsXG4gICAgJ2NoYXQtYnViYmxlLnN2ZyddO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSB0byBjcmVhdGVkIHRoZSB3aG9sZSBzZWN0aW9uL3NjcmVlblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgLy8gVE9ETzogTWFrZSBzb21lIGludGVyZmFjZSBvciBhYnN0cmFjdCBjbGFzc1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQodGhpcy5fc2VjdGlvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAqIENyZWF0ZXMgd2hvbGUgY29udGFjdCBzZWN0aW9uXG4gICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBjb250YWN0IHNlY3Rpb25cbiAgKi9cbiAgX3NlY3Rpb24oKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTmFtZSA9ICdjb250YWN0JztcbiAgICBjb250YWN0U2VjdGlvbi5pZCA9ICdjb250YWN0JztcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl9xdWlja0xpbmtzKCkpO1xuICAgIHJldHVybiBjb250YWN0U2VjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkaXYgd2l0aCBzb21lIHF1aWNrIGNvbnRhY3QgbGlua3NcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBxdWljayBsaW5rcyBzZWN0aW9uIGZvciB0aGUgY29udGFjdFxuICAgKi9cbiAgX3F1aWNrTGlua3MoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAncXVpY2stbGlua3MnO1xuICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fdGFnbGluZSgpLCB0aGlzLl9zb2NpYWwoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0YWdsaW5lIGRpdlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHRhZ2xpbmUgZm9yIHRoZSBjb250YWN0IHNlY3Rpb25cbiAgICovXG4gIF90YWdsaW5lKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YWdsaW5lMSA9ICdGaW5kIG1lIG9uOic7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YWdsaW5lJztcbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGxpbmtzIHRvIHZhcmlvdXMgcGxhdGZvcm1zXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBBIGxpc3QgZm9yIHNvY2lhbCBjb25uZWN0aW9uXG4gICAqL1xuICBfc29jaWFsKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzb2NpYWxMaW5rczogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHNvY2lhbExpbmtzLmNsYXNzTmFtZSA9ICdzb2NpYWwnO1xuXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubGlua1RleHQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvbnN0IGljb246IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGljb24uc3JjID0gYHN0YXRpYy9pbWcvJHt0aGlzLmxpbmtzSWNvbnNbaV19YDtcbiAgICAgIGNvbnN0IHRleHQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdGV4dC5pbm5lckhUTUwgPSB0aGlzLmxpbmtUZXh0W2ldO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLmxpbmtTcmNbaV0pO1xuICAgICAgbGlua0VsZW1lbnQuYXBwZW5kKGljb24sIHRleHQpO1xuICAgICAgc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gc29jaWFsTGlua3M7XG4gIH1cbn1cbiIsIi8qKlxuICogUmVuZGVycyBob21lIHNlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEhvbWUge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlZCB0aGUgd2hvbGUgc2VjdGlvbi9zY3JlZW5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIC8vIFRPRE86IE1ha2Ugc29tZSBpbnRlcmZhY2Ugb3IgYWJzdHJhY3QgY2xhc3NcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHRoaXMuX3NlY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGVzIHdob2xlIGhvbWUgc2VjdGlvblxuICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgaG9tZSBzZWN0aW9uXG4gICovXG4gIF9zZWN0aW9uKCk6SFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhvbWVTZWN0aW9uLmNsYXNzTmFtZSA9ICdiYW5uZXInO1xuICAgIGhvbWVTZWN0aW9uLmlkID0gJ2hvbWUnO1xuICAgIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3RhZ2xpbmUoKSk7XG4gICAgcmV0dXJuIGhvbWVTZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIGhvbWUgc2VjdGlvblxuICAgKi9cbiAgX3RhZ2xpbmUoKTpIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdGFnbGluZTEgPSAnV2VsY29tZSB0byBNeSBXb3JsZCc7XG4gICAgY29uc3QgdGFnbGluZTIgPSAnSGkgSVxcJ20gQWJoaXNoZWsgU2FodSc7XG4gICAgLy8gY29uc3QgdGFnbGluZTMgPSAnQSBkZXZlbG9wZXInO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFnbGluZSc7XG5cbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBzcGFuMi5pbm5lclRleHQgPSB0YWdsaW5lMjtcbiAgICAvLyBzcGFuMy5pbm5lclRleHQgPSB0YWdsaW5lMztcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xLCBzcGFuMiwgc3BhbjMpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHByb2plY3RMaXN0IGZyb20gJy4uL2ZpeHR1cmUvcHJvamVjdHNEYXRhLmpzb24nO1xuLyoqXG4gKiBSZW5kZXJzIHByb2plY3Qgc2VjdGlvblxuICovXG5leHBvcnQgY2xhc3MgUHJvamVjdHMge1xuICBwcml2YXRlIHJlYWRvbmx5IHNpdGVMaW5rcyA9IFtcImFiaGlzaGVrc2FodS5uZXRsaWZ5LmFwcFwiLFxuICBcInNhaHUubmV0bGlmeS5hcHBcIl07XG5cbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIHRvIGNyZWF0ZWQgdGhlIHdob2xlIHNlY3Rpb24vc2NyZWVuXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHNvbWUgaW50ZXJmYWNlIG9yIGFic3RyYWN0IGNsYXNzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aGlzLl9zZWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlcyB3aG9sZSBwcm9qZWN0IHNlY3Rpb25cbiAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHByb2plY3Qgc2VjdGlvblxuICAqL1xuICBfc2VjdGlvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgcHJvamVjdFNlY3Rpb24uY2xhc3NOYW1lID0gJ3Byb2plY3QnO1xuICAgIHByb2plY3RTZWN0aW9uLmlkID0gJ3Byb2plY3QnO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC13cmFwcGVyJyk7XG4gICAgLy8gcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5fdGFnbGluZSgpKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl91bmRlckRldmVsb3BtZW50KCkpO1xuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3NpdGVMaW5rcygpKTtcbiAgICBcbiAgICAvLyBwcm9qZWN0TGlzdC5yZXN1bHQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgIC8vICAgd3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICAvLyAgICAgICB0aGlzLl9wcm9qZWN0Q29udGFpbmVyKGRhdGEudGl0bGUsXG4gICAgLy8gICAgICAgICAgIGRhdGEuZGVzY3JpcHRpb24sXG4gICAgLy8gICAgICAgICAgIGRhdGEubGluayxcbiAgICAvLyAgICAgICAgICAgZGF0YS5pbWdTZXQpKTtcbiAgICAvLyB9KTtcbiAgICAvLyBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICByZXR1cm4gcHJvamVjdFNlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgcHJvamVjdCBzZWN0aW9uXG4gICAqL1xuICBfdGFnbGluZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdGFnbGluZTEgPSAnIyBQcm9qZWN0cyAnO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFnbGluZSc7XG5cbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm9qZWN0IGNvbnRhaW5lciBlbGVtZW50LlxuICAgKlxuICAgKiBCYXNpY2FsbHkgYSBkaXYgZm9yIHBlcnNvbiBwcm9qZWN0c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVUZXh0IC0gdGl0bGUgb2YgdGhlIHByb2plY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uVGV4dCAtIHByb2plY3QgZGVzY3JpcHRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2plY3RVcmwgLSB1cmwgdG8gdGhlIHByb2plY3QgZGVtby9jb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGltZ1NldCAtIEFycmF5IG9mIGltZyBhc3NvY2lhdGVkIHdpdGggcHJvamVjdFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBwcm9qZWN0IGh0bWwgZWxlbWVudFxuICAgKi9cbiAgX3Byb2plY3RDb250YWluZXIoXG4gICAgICB0aXRsZVRleHQ6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uVGV4dDogc3RyaW5nLFxuICAgICAgcHJvamVjdFVybDogc3RyaW5nLFxuICAgICAgaW1nU2V0Pzogc3RyaW5nW10pOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdocmVmJywgcHJvamVjdFVybCk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdpdGVtQ29udGFpbmVyJztcblxuICAgIGNvbnN0IGl0ZW1TaG93Y2FzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1TaG93Y2FzZS5jbGFzc05hbWUgPSAnaXRlbS1zaG93Y2FzZSc7XG5cbiAgICBpZiAoaW1nU2V0KSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZ1NldFswXSk7XG4gICAgICBpdGVtU2hvd2Nhc2UuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURldGFpbC5jbGFzc05hbWUgPSAnaXRlbS1kZXRhaWwnO1xuXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVUZXh0O1xuXG4gICAgaXRlbURldGFpbC5hcHBlbmQodGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoaXRlbVNob3djYXNlLCBpdGVtRGV0YWlsKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRhZ2xpbmUgZGl2XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgdGFnbGluZSBmb3IgdGhlIHByb2plY3Qgc2VjdGlvblxuICAgKi9cbiAgICAgX3VuZGVyRGV2ZWxvcG1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgY29uc3QgdGFnbGluZTEgPSAnVGhpcyB3ZWJzaXRlIGlzIHVuZGVyIGNvbnN0cnVjdGlvbiwnK1xuICAgICAgICc8YnI+IG1lYW53aGlsZSBmZWVsIGZyZWUgdG8gdmlzaXQgb2xkIHBvcnRmb2xpby4uLiAnK1xuICAgICAgICc8YnI+IG9yIHJlYWNoIG91dCB0byBtZSBvbiBiZWxvdyBjaGFubmVscy4uLiAnO1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3RhZ2xpbmUnO1xuICAgICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuMS5pbm5lckhUTUwgPSB0YWdsaW5lMTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoc3BhbjEpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAgLyoqXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGxpbmtzIHRvIHZhcmlvdXMgcGxhdGZvcm1zXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBBIGxpc3QgZm9yIGV4dGVybmFsIHNpdGUgbGlua3NcbiAgICovXG4gIF9zaXRlTGlua3MoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNvY2lhbExpbmtzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgc29jaWFsTGlua3MuY2xhc3NOYW1lID0gJ2xpbmtzJztcblxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnNpdGVMaW5rcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgdGV4dDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaHJlZicsIGBodHRwczovLyR7dGhpcy5zaXRlTGlua3NbaV19YCk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgndGFyZ2V0JywnX2JsYW5rJyk7XG4gICAgICB0ZXh0LmlubmVySFRNTCA9IHRoaXMuc2l0ZUxpbmtzW2ldO1xuICAgICAgbGlua0VsZW1lbnQuYXBwZW5kKHRleHQpO1xuICAgICAgc29jaWFsTGlua3MuYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gc29jaWFsTGlua3M7XG4gIH1cbn1cbiIsIlxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdCdXR0b24ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlIGEgZmxvYXRpbmcgYWN0aW9uIGJ1dHRvblxuICAgKi9cbiAgYnVpbGQoKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmaXhlZC1hY3Rpb24tYnRuIG1hdGVyaWFsLWljb25zJztcbiAgICBpY29uLmlubmVySFRNTCA9ICdsaWdodF9tb2RlJztcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVfdGhlbWUpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGJvZHlbMF0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVxdWlyZS1qc2RvY1xuICB0b2dnbGVfdGhlbWUoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSE7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1mbG9hdGluZyAubWF0ZXJpYWwtaWNvbnMnKSE7XG4gICAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLXRoZW1lJykpIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay10aGVtZScpO1xuICAgICAgZWxlLmlubmVySFRNTCA9ICdsaWdodF9tb2RlJztcbiAgICB9IGVsc2Uge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLXRoZW1lJyk7XG4gICAgICBlbGUuaW5uZXJIVE1MID0gJ2RhcmtfbW9kZSc7XG4gICAgfVxuICB9XG59XG4iXX0=
    