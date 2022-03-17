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
const home = new home_1.Home();
const work = new work_1.Work();
const contact = new contact_1.Contact();
window.onload = function () {
    home.build();
    work.build();
    contact.build();
};

},{"./portfolio/contact":3,"./portfolio/home":4,"./portfolio/work":5}],3:[function(require,module,exports){
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
        const tagline1 = 'Hi,';
        const tagline2 = 'I\'m Abhishek Sahu';
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

},{"../fixture/work.json":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvZml4dHVyZS93b3JrLmpzb24iLCJzcmMvdHMvbWFpbi50cyIsInNyYy90cy9wb3J0Zm9saW8vY29udGFjdC50cyIsInNyYy90cy9wb3J0Zm9saW8vaG9tZS50cyIsInNyYy90cy9wb3J0Zm9saW8vd29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQSxpREFBNEM7QUFDNUMsMkNBQXNDO0FBQ3RDLDJDQUFzQztBQUV0QyxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNsQixDQUFDLENBQUM7Ozs7OztBQ1JGLE1BQWEsT0FBTztJQUFwQjtRQUNtQixhQUFRLEdBQWEsQ0FBQyxjQUFjO1lBQ25ELFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsdUJBQXVCLENBQUMsQ0FBQztRQUNWLFlBQU8sR0FBYSxDQUFDLHVDQUF1QztZQUMzRSwrQkFBK0I7WUFDL0IsNEJBQTRCO1lBQzVCLDhCQUE4QixDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFhLENBQUMsZUFBZTtZQUN0RCxhQUFhO1lBQ2IsWUFBWTtZQUNaLGlCQUFpQixDQUFDLENBQUM7SUFvRXZCLENBQUM7SUEvREMs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SyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDNUIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxXQUFXLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUN4QyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUE1REQsb0JBNERDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcInJlc3VsdFwiOltcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJOYXRpb25hbCBMaWJyYXJ5XCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJOYXRpb25hbCBMaWJyYXJ5IGlzIGEgd2luZG93IGJhc2VkIGFwcGxpY2F0aW9uIGluIHdoaWNoIHRoZSB3aG9sZSByZWNvcmRzIG9mIHRoZSBib29rcyBpbiB0aGUgbGlicmFyeSB3b3VsZCBiZSBtYW5hZ2luZyB0aGUgZGV0YWlscyBhYm91dCBkaWZmZXJlbnQgc3R1ZGVudHMgd2hvIGhhdmUgcmVjZWl2ZWQgdGhlIGJvb2tzIHdvdWxkIGJlIGtlcHQuXCJcbiAgICB9LCAgICBcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJQYXlyb2xsIE1hbmFnZW1lbnQuXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6XCJQYXlyb2xsIE1hbmFnZW1lbnQgU3lzdGVtIGlzIGEgY29ycG9yYXRlIHNlY3RvciBvcmllbnRlZCBzb2Z0d2FyZSBmb3IgbWFuYWdlbWVudCBvZiBzYWxhcnkgYW5kIGFzc29jaWF0ZWQgc2VydmljZXMgaW4gYSBjb21wYW55LlwiXG4gICAgfSwgICBcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJERFVLSyBTdG9jayBNYW5hZ2VtZW50LlwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiVGhpcyBwcm9qZWN0IGlzIGFpbWVkIGF0IGRldmVsb3BpbmcgYSBkZXNrdG9wIGJhc2VkIGFwcGxpY2F0aW9uIG5hbWVkIEREVUtLIC0gU3RvY2sgTWFuYWdlbWVudCBTeXN0ZW0gZm9yIG1hbmFnaW5nIHRoZSBhc3NldHMgb2YgYW55IG9yZ2FuaXphdGlvbi4gVGhpcyBzeXN0ZW0gY2FuIGJlIHVzZWQgdG8gc3RvcmUgdGhlIGRldGFpbHMgb2YgdGhlIGludmVudG9yeSwgc3RvY2sgbWFpbnRlbmFuY2UsIHVwZGF0ZSB0aGUgaW52ZW50b3J5LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInRpdGxlXCI6XCJFY2hvIE11c2ljIFBsYXllclwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOlwiQW4gYW5kcm9pZCBtdXNpYyBwbGF5ZXIgYXBwbGljYXRpb24gd2l0aCBmZWF0dXJlcyBsaWtlIHNoYWtlIHRvIGNoYW5nZSwgdmlzdWFsaXplciwgbWFyayBhcyBmYXZvcml0ZSBhbmQgYmFzaWMgZnVuY3Rpb25hbGl0aWVzIHRoYXQgYSBtdXNpYyBwbGF5ZXIgY2FuIHByb3ZpZGUuIFRoaXMgTXVzaWMgUGxheWVyIEFwcCBpcyBtYWRlIGZvciBsZWFybmluZyB0byBidWlsZCBVc2VyIEludGVyZmFjZXMsIGFkZCBGdW5jdGlvbmFsaXRpZXMsIEJ1aWxkaW5nIEVjaG8gbW9kdWxlcyB1c2luZyBLb3RsaW4uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidGl0bGVcIjpcIlJha3RhbXJpdC5jb21cIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjpcIkFuIG9ubGluZSBibG9vZCBiYW5rIG1hbmFnZW1lbnQgc3lzdGVtIHRoYXQgaGVscHMgaW4gbWFuYWdpbmcgdmFyaW91cyBibG9vZCBiYW5rIG9wZXJhdGlvbnMgZWZmZWN0aXZlbHkuIFRoZSBlbnRpcmUgcHJvamVjdCBoYXMgYmVlbiBkZXZlbG9wZWQga2VlcGluZyBpbiB2aWV3IG9mIHRoZSBkaXN0cmlidXRlZCBjbGllbnQgc2VydmVyIGNvbXB1dGluZyB0ZWNobm9sb2d5LCBpbiBtaW5kLiBBbnkgcGVyc29uIHdobyBpcyBpbnRlcmVzdGVkIGluIGRvbmF0aW5nIHRoZSBibG9vZCBjYW4gcmVnaXN0ZXIgaGltc2VsZi4gXCJcbiAgICB9XG4gIF1cbn0iLCJpbXBvcnQge0NvbnRhY3R9IGZyb20gJy4vcG9ydGZvbGlvL2NvbnRhY3QnO1xuaW1wb3J0IHtIb21lfSBmcm9tICcuL3BvcnRmb2xpby9ob21lJztcbmltcG9ydCB7V29ya30gZnJvbSAnLi9wb3J0Zm9saW8vd29yayc7XG5cbmNvbnN0IGhvbWUgPSBuZXcgSG9tZSgpO1xuY29uc3Qgd29yayA9IG5ldyBXb3JrKCk7XG5jb25zdCBjb250YWN0ID0gbmV3IENvbnRhY3QoKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgaG9tZS5idWlsZCgpO1xuICB3b3JrLmJ1aWxkKCk7XG4gIGNvbnRhY3QuYnVpbGQoKTtcbn07XG4iLCIvKipcbiAqIFJlbmRlcnMgY29udGFjdCBzZWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBsaW5rVGV4dDogc3RyaW5nW10gPSBbJ2luL2Etc2FodTE2LycsXG4gICAgJ0BpYW1zYWh1MTYnLFxuICAgICdnaXRodWIuY29tL0FTYWh1MTYnLFxuICAgICdhc2FodS5tMTYwOEBnbWFpbC5jb20nXTtcbiAgcHJpdmF0ZSByZWFkb25seSBsaW5rU3JjOiBzdHJpbmdbXSA9IFsnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Etc2FodTE2LycsXG4gICAgJ2h0dHBzOi8vdHdpdHRlci5jb20vaWFtc2FodTE2JyxcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tL0FTYWh1MTYnLFxuICAgICdtYWlsdG86YXNhaHUubTE2MDhAZ21haWwuY29tJ107XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlua3NJY29uczogc3RyaW5nW10gPSBbJ2xpbmtlZC1pbi5zdmcnLFxuICAgICd0d2l0dGVyLnN2ZycsXG4gICAgJ2dpdGh1Yi5zdmcnLFxuICAgICdjaGF0LWJ1YmJsZS5zdmcnXTtcblxuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlZCB0aGUgd2hvbGUgc2VjdGlvbi9zY3JlZW5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIC8vIFRPRE86IE1ha2Ugc29tZSBpbnRlcmZhY2Ugb3IgYWJzdHJhY3QgY2xhc3NcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHRoaXMuX3NlY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGVzIHdob2xlIGNvbnRhY3Qgc2VjdGlvblxuICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgY29udGFjdCBzZWN0aW9uXG4gICovXG4gIF9zZWN0aW9uKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb250YWN0U2VjdGlvbi5jbGFzc05hbWUgPSAnY29udGFjdCc7XG4gICAgY29udGFjdFNlY3Rpb24uaWQgPSAnY29udGFjdCc7XG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy5fcXVpY2tMaW5rcygpKTtcbiAgICByZXR1cm4gY29udGFjdFNlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZGl2IHdpdGggc29tZSBxdWljayBjb250YWN0IGxpbmtzXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgcXVpY2sgbGlua3Mgc2VjdGlvbiBmb3IgdGhlIGNvbnRhY3RcbiAgICovXG4gIF9xdWlja0xpbmtzKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3F1aWNrLWxpbmtzJztcbiAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuX3RhZ2xpbmUoKSwgdGhpcy5fc29jaWFsKCkpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgY29udGFjdCBzZWN0aW9uXG4gICAqL1xuICBfdGFnbGluZSgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgdGFnbGluZTEgPSAnRmluZCBtZSBvbjonO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFnbGluZSc7XG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3BhbjEuaW5uZXJUZXh0ID0gdGFnbGluZTE7XG4gICAgY29udGFpbmVyLmFwcGVuZChzcGFuMSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbGlzdCBvZiBsaW5rcyB0byB2YXJpb3VzIHBsYXRmb3Jtc1xuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gQSBsaXN0IGZvciBzb2NpYWwgY29ubmVjdGlvblxuICAgKi9cbiAgX3NvY2lhbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc29jaWFsTGlua3M6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzb2NpYWxMaW5rcy5jbGFzc05hbWUgPSAnc29jaWFsJztcblxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLmxpbmtUZXh0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBjb25zdCBpY29uOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpY29uLnNyYyA9IGBzdGF0aWMvaW1nLyR7dGhpcy5saW5rc0ljb25zW2ldfWA7XG4gICAgICBjb25zdCB0ZXh0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHRleHQuaW5uZXJIVE1MID0gdGhpcy5saW5rVGV4dFtpXTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5saW5rU3JjW2ldKTtcbiAgICAgIGxpbmtFbGVtZW50LmFwcGVuZChpY29uLCB0ZXh0KTtcbiAgICAgIHNvY2lhbExpbmtzLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHNvY2lhbExpbmtzO1xuICB9XG59XG4iLCIvKipcbiAqIFJlbmRlcnMgaG9tZSBzZWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBIb21lIHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIHRvIGNyZWF0ZWQgdGhlIHdob2xlIHNlY3Rpb24vc2NyZWVuXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHNvbWUgaW50ZXJmYWNlIG9yIGFic3RyYWN0IGNsYXNzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aGlzLl9zZWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICogQ3JlYXRlcyB3aG9sZSBob21lIHNlY3Rpb25cbiAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIGhvbWUgc2VjdGlvblxuICAqL1xuICBfc2VjdGlvbigpOkhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBob21lU2VjdGlvbi5jbGFzc05hbWUgPSAnYmFubmVyJztcbiAgICBob21lU2VjdGlvbi5pZCA9ICdob21lJztcbiAgICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl90YWdsaW5lKCkpO1xuICAgIHJldHVybiBob21lU2VjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB0YWdsaW5lIGRpdlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIHRhZ2xpbmUgZm9yIHRoZSBob21lIHNlY3Rpb25cbiAgICovXG4gIF90YWdsaW5lKCk6SFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRhZ2xpbmUxID0gJ0hpLCc7XG4gICAgY29uc3QgdGFnbGluZTIgPSAnSVxcJ20gQWJoaXNoZWsgU2FodSc7XG4gICAgLy8gY29uc3QgdGFnbGluZTMgPSAnQSBkZXZlbG9wZXInO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFnbGluZSc7XG5cbiAgICBjb25zdCBzcGFuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBzcGFuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBzcGFuMi5pbm5lclRleHQgPSB0YWdsaW5lMjtcbiAgICAvLyBzcGFuMy5pbm5lclRleHQgPSB0YWdsaW5lMztcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xLCBzcGFuMiwgc3BhbjMpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHByb2plY3RzIGZyb20gJy4uL2ZpeHR1cmUvd29yay5qc29uJztcbi8qKlxuICogUmVuZGVycyB3b3JrIHNlY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmsge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgdG8gY3JlYXRlZCB0aGUgd2hvbGUgc2VjdGlvbi9zY3JlZW5cbiAgICovXG4gIGJ1aWxkKCkge1xuICAgIC8vIFRPRE86IE1ha2Ugc29tZSBpbnRlcmZhY2Ugb3IgYWJzdHJhY3QgY2xhc3NcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBib2R5WzBdLmFwcGVuZENoaWxkKHRoaXMuX3NlY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgKiBDcmVhdGVzIHdob2xlIHdvcmsgc2VjdGlvblxuICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgd29yayBzZWN0aW9uXG4gICovXG4gIF9zZWN0aW9uKCk6SFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHdvcmtTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHdvcmtTZWN0aW9uLmNsYXNzTmFtZSA9ICd3b3JrJztcbiAgICB3b3JrU2VjdGlvbi5pZCA9ICd3b3JrJztcbiAgICB3b3JrU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl90YWdsaW5lKCkpO1xuICAgIHByb2plY3RzLnJlc3VsdC5mb3JFYWNoKChkYXRhKSA9PntcbiAgICAgIHdvcmtTZWN0aW9uLmFwcGVuZCh0aGlzLl93b3JrQ29udGFpbmVyKGRhdGEudGl0bGUsIGRhdGEuZGVzY3JpcHRpb24pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gd29ya1NlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdGFnbGluZSBkaXZcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSB0YWdsaW5lIGZvciB0aGUgd29yayBzZWN0aW9uXG4gICAqL1xuICBfdGFnbGluZSgpOkhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YWdsaW5lMSA9ICcjIFdvcmsgJztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3RhZ2xpbmUnO1xuXG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3BhbjEuaW5uZXJUZXh0ID0gdGFnbGluZTE7XG4gICAgY29udGFpbmVyLmFwcGVuZChzcGFuMSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgd29yayBjb250YWluZXIgZWxlbWVudC5cbiAgICpcbiAgICogQmFzaWNhbGx5IGEgZGl2IGZvciBwZXJzb24gcHJvamVjdHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlVGV4dCAtIHRpdGxlIG9mIHRoZSBwcm9qZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblRleHQgLSBwcm9qZWN0IGRlc2NyaXB0aW9uXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIHdvcmsgaHRtbCBlbGVtZW50XG4gICAqL1xuICBfd29ya0NvbnRhaW5lcih0aXRsZVRleHQ6c3RyaW5nLCBkZXNjcmlwdGlvblRleHQ6c3RyaW5nKTpIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnd29yay1pdGVtJztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVRleHQ7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb25UZXh0O1xuICAgIGNvbnRhaW5lci5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG59XG4iXX0=
