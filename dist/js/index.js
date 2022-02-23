(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = require("./portfolio/home");
const home = new home_1.Home();
window.onload = function () {
    home.build();
};

},{"./portfolio/home":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
class Home {
    build() {
        const body = document.getElementsByTagName("body");
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
        const tagline1 = "Hi,";
        const tagline2 = "I'm Abhishek Sahu";
        const tagline3 = "A developer";
        const container = document.createElement("div");
        container.className = 'tagline';
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        const span3 = document.createElement("span");
        span1.innerText = tagline1;
        span2.innerText = tagline2;
        container.append(span1, span2, span3);
        return container;
    }
}
exports.Home = Home;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvbWFpbi50cyIsInNyYy90cy9wb3J0Zm9saW8vaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsMkNBQXdDO0FBRXhDLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDeEIsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQzs7Ozs7O0FDTEYsTUFBYSxJQUFJO0lBQ2YsS0FBSztRQUNILE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxXQUFXLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxXQUFXLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUN4QixXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLE1BQU0sUUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQ3JDLE1BQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUMvQixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO1FBRS9CLE1BQU0sS0FBSyxHQUFLLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsTUFBTSxLQUFLLEdBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxNQUFNLEtBQUssR0FBSyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzNCLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBRTNCLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBRUY7QUEvQkQsb0JBK0JDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL3BvcnRmb2xpby9ob21lXCI7XG5cbmNvbnN0IGhvbWUgPSBuZXcgSG9tZSgpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBob21lLmJ1aWxkKCk7XG59OyIsImV4cG9ydCBjbGFzcyBIb21lIHtcbiAgYnVpbGQoKXsgIFxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIik7XG4gICAgYm9keVswXS5hcHBlbmRDaGlsZCh0aGlzLl9zZWN0aW9uKCkpO1xuICB9XG4gIFxuICBfc2VjdGlvbigpOkhUTUxFbGVtZW50e1xuICAgIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhvbWVTZWN0aW9uLmNsYXNzTmFtZSA9ICdiYW5uZXInO1xuICAgIGhvbWVTZWN0aW9uLmlkID0gJ2hvbWUnO1xuICAgIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3RhZ2xpbmUoKSk7XG4gICAgcmV0dXJuIGhvbWVTZWN0aW9uXG4gIH1cblxuICBfdGFnbGluZSgpOkhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0YWdsaW5lMSA9IFwiSGksXCI7XG4gICAgY29uc3QgdGFnbGluZTIgPSBcIkknbSBBYmhpc2hlayBTYWh1XCI7XG4gICAgY29uc3QgdGFnbGluZTMgPSBcIkEgZGV2ZWxvcGVyXCI7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3RhZ2xpbmUnXG5cbiAgICBjb25zdCBzcGFuMSA9ICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3Qgc3BhbjIgPSAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHNwYW4zID0gICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuMS5pbm5lclRleHQgPSB0YWdsaW5lMTtcbiAgICBzcGFuMi5pbm5lclRleHQgPSB0YWdsaW5lMjtcbiAgICAvLyBzcGFuMy5pbm5lclRleHQgPSB0YWdsaW5lMztcbiAgICBjb250YWluZXIuYXBwZW5kKHNwYW4xLHNwYW4yLHNwYW4zKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbn0iXX0=
