(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\samplewebsite\RamBabuandSupriya.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "0PS2":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function MainPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.days, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.hours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.minutes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.seconds, " ");
} }
function MainPageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " They got Engaged.... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainPageComponent {
    constructor() {
        this.countDownDate = new Date("May 27, 2021 01:45:00").getTime();
    }
    ngOnInit() {
        setInterval(() => this.settime(), 100);
    }
    settime() {
        this.now = new Date().getTime();
        this.distances = this.countDownDate - this.now;
        this.days = Math.floor(this.distances / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((this.distances % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((this.distances % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((this.distances % (1000 * 60)) / 1000);
        this.showMessage = false;
        if (this.distances < 1) {
            this.showMessage = true;
        }
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 37, vars: 2, consts: [[1, "card"], [1, "small-buttons", "row", "col-12"], [1, "background-image1"], ["src", "../../assets/Web_page1.jpg", 1, "image1"], ["class", "col-md-12 boxes", 4, "ngIf"], [1, "col-12", "row", "groomnames"], [1, "box", "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12", "ramraju"], ["id", "card-container"], ["id", "card"], [1, "front", "face"], ["src", "../../assets/groom_2.jpg", 1, "groom"], [1, "clickimage"], [1, "back", "face"], [1, "artist"], [1, "date"], [1, "box", "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12", "supriya"], [1, "col-12", "groomnames"], ["src", "../../assets/Time_line.jpg", 1, "pelliphoto"], [1, "col-md-12", "boxes"], [1, "first-button", "d-sm-flex"], [1, "button1", "savebutton"], [1, "w-100", "time2"], [1, "savedate"], [1, "button1", "move"], [1, "days"], [1, "button1", "move", "hoursleft"], [1, "hours"], [1, "minutes"], [1, "seconds"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainPageComponent_div_4_Template, 23, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainPageComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Click the image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "RamRaju");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Click the image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "RamBabu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Rajdhani\");\n@import url(\"https://fonts.googleapis.com/css?family=Questrial\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.card[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n}\n.boxes[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  flex: 0 0 auto;\n  max-width: 100%;\n  z-index: 10;\n  padding: 0;\n}\n.small-buttons[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n.d-sm-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.first-button[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 10px 32px -19px rgba(0, 0, 0, 0.15);\n  background-color: #982630;\n  background-image: linear-gradient(315deg, #982630 0%, #9b444a 54%, #9c3038 100%);\n}\n.savebutton[_ngcontent-%COMP%] {\n  background: #982630;\n}\n.first-button[_ngcontent-%COMP%]   .button1[_ngcontent-%COMP%] {\n  width: 20%;\n  font-size: 40px;\n  color: #fff;\n  margin-bottom: 0;\n  text-align: center;\n  padding: 10px 0;\n  font-family: \"Rochester\", cursive;\n  align-items: center !important;\n}\n.move[_ngcontent-%COMP%] {\n  padding-top: 33px !important;\n}\n.groom[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 210px;\n}\n.image1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.time2[_ngcontent-%COMP%] {\n  font-family: Rajdhani;\n  font-size: 40px;\n  font-weight: 600;\n  padding-top: 7px;\n  margin-bottom: 5px;\n}\n.savedate[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: block;\n}\n.groomnames[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #aa3f48;\n  height: 100%;\n}\n.box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 370px;\n  position: relative;\n}\n#card-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  width: 210px;\n  height: 300px;\n  z-index: 1;\n  perspective: 1000px;\n  margin-top: 10%;\n}\nimg[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n#card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  transform-style: preserve-3d;\n  transition: all 0.8s linear;\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);\n}\n#card[_ngcontent-%COMP%]:hover {\n  transform: rotateY(180deg);\n  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3);\n}\n.clickimage[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n}\n.face[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.back[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 300px;\n  display: block;\n  transform: rotateY(180deg);\n  box-sizing: border-box;\n  padding: 10px;\n  text-align: center;\n  background: #F9F3E4;\n}\n.back1[_ngcontent-%COMP%] {\n  display: block;\n  transform: rotateY(180deg);\n  box-sizing: border-box;\n  text-align: center;\n}\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: \"Questrial\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-top: 15px;\n  color: #DD899E;\n}\n.artist[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.date[_ngcontent-%COMP%] {\n  color: #D0B2AF;\n}\n.pelliphoto[_ngcontent-%COMP%] {\n  height: 480px;\n  width: 100%;\n}\n@media (min-width: 320px) and (max-width: 360px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 15px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 19px !important;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 15px !important;\n  }\n}\n@media (min-width: 361px) and (max-width: 410px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 17px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 17px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 15px !important;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    padding-left: 1px !important;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 411px) and (max-width: 460px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 18px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 15px !important;\n  }\n}\n@media (min-width: 411px) and (max-width: 460px) and (min-width: 419px) and (max-width: 443px) {\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hoursleft[_ngcontent-%COMP%] {\n    margin-left: -7px;\n  }\n}\n@media (min-width: 411px) and (max-width: 460px) and (min-width: 444px) and (max-width: 460px) {\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hoursleft[_ngcontent-%COMP%] {\n    margin-left: -13px;\n  }\n}\n@media (min-width: 461px) and (max-width: 540px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 20px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 15px !important;\n  }\n}\n@media (min-width: 461px) and (max-width: 540px) and (min-width: 501px) and (max-width: 540px) {\n  .button1[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  .hoursleft[_ngcontent-%COMP%] {\n    margin-left: -7px;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 541px) and (max-width: 700px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 25px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 15px !important;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 701px) and (max-width: 767px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 25px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    margin-left: -7px;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    margin-left: -7px;\n  }\n}\n@media (min-width: 768px) and (max-width: 860px) {\n  .button1[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwrREFBQTtBQUNBLGdFQUFBO0FBUVI7RUFDRSxzQkFBQTtBQU5GO0FBVUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVBGO0FBU0E7RUFFRSxnQkFBQTtFQUNBLE1BQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBTkY7QUFVQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBUEo7QUFTQTtFQUVFLGtDQUFBO0FBTkY7QUFTQTtFQUNFLHdCQUFBO0FBTkY7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUdBLG1EQUFBO0VBQ0EseUJBQUE7RUFDQSxnRkFBQTtBQVBKO0FBd0JBO0VBQ0UsbUJBQUE7QUFyQkY7QUF1QkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7QUFyQko7QUF5QkE7RUFFRSw0QkFBQTtBQXZCRjtBQXlCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBdEJGO0FBeUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUF0Qko7QUEwQkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF2Qko7QUF5QkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUF0Qko7QUF3QkU7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBckJKO0FBMEJFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtBQXhCSjtBQTJCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtBQXpCSjtBQTRCRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBekJKO0FBNEJF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ekJKOztFQTJCRTtJQUNFLGVBQUE7RUF4Qko7O0VBMEJFO0lBQ0UsaUJBQUE7RUF2Qko7O0VBeUJFO0lBQ0UsY0FBQTtFQXRCSjs7RUF3QkU7SUFDRSxjQUFBO0VBckJKOztFQXVCRTtJQUNFLGNBQUE7RUFwQko7O0VBdUJFO0lBQ0UsY0FBQTtFQXBCSjtBQUNGO0FBcUNBO0VBSUU7SUFDRSxlQUFBO0VBdENGOztFQXdDQTtJQUNFLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLDBCQUFBO0VBckNGOztFQXdDQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQXJDRjs7RUF1Q0E7SUFDRSxnQkFBQTtFQXBDRjs7RUFzQ0E7SUFDRSxjQUFBO0VBbkNGOztFQXNDQTtJQUNFLGNBQUE7RUFuQ0Y7O0VBc0NBO0lBQ0UsNEJBQUE7SUFDQSw0QkFBQTtFQW5DRjs7RUFxQ0E7SUFDRSxjQUFBO0VBbENGOztFQW9DQTtJQUNFLGNBQUE7RUFqQ0Y7QUFDRjtBQXNDQTtFQUNFO0lBQ0UsZUFBQTtFQXBDRjs7RUFzQ0E7SUFDRSxzQkFBQTtJQUNBLGNBQUE7SUFDQSwwQkFBQTtFQW5DRjs7RUFzQ0E7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFuQ0Y7O0VBcUNBO0lBQ0UsZ0JBQUE7RUFsQ0Y7O0VBb0NBO0lBRUUsNEJBQUE7RUFsQ0Y7O0VBb0NBO0lBQ0UsaUJBQUE7RUFqQ0Y7O0VBbUNBO0lBQ0UsaUJBQUE7RUFoQ0Y7QUFDRjtBQWtDQTtFQUNFO0lBQ0UsZUFBQTtFQWhDRjs7RUFrQ0E7SUFDRSxlQUFBO0VBL0JGO0FBQ0YiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWpkaGFuaScpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1ZXN0cmlhbCcpO1xyXG4kd2hpdGU6ICNGOUYzRTQ7XHJcbiRwaW5rOiAjRjI5REFCO1xyXG4kcm9zZTogI0REODk5RTtcclxuJHRhbjogI0YyQ0RDMTtcclxuJHRhdXBlOiAjRDBCMkFGO1xyXG4kZm9udDogJ1F1ZXN0cmlhbCcsIHNhbnMtc2VyaWY7XHJcblxyXG4qe1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgXHJcbn1cclxuLy8gI29vNGE3NiwgYTlkYWViXHJcbi5jYXJkIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJveGVzIHtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbi5zbWFsbC1idXR0b25zIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kLXNtLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG4uZmlyc3QtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZDI5MWJjO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMnB4IC0xOXB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTgyNjMwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk4MjYzMCAwJSwgIzliNDQ0YSA1NCUsICM5YzMwMzggMTAwJSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQwNjA2O1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2E0MDYwNiAwJSwgI2Q5ODMyNCA3NCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZjZTA0MztcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmY2UwNDMgMCUsICNmYjdiYTIgNzQlKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZDNkM2QzIDAlLCAjN2Y4YzhkIDc0JSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjQzO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxOWRlZywgI2ZmY2I0MyAwJSwgI2ZmNjQyNSAzNyUsICNmZjAwMTYgMTAwJSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZmRmO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2ZmY2ZkZiAwJSwgI2IwZjNmMSA3NCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZTE5MDtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTZkZWcsICNmZmUxOTAgMCUsICNmYTllOGMgNzQlKTtcclxuXHJcblxyXG5cclxufVxyXG4uc2F2ZWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogIzk4MjYzMDtcclxufVxyXG4uZmlyc3QtYnV0dG9uIC5idXR0b24xIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9jaGVzdGVyXCIsIGN1cnNpdmU7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4ubW92ZSB7XHJcbiAgLy8gcGFkZGluZzogMTBweCAwO1xyXG4gIHBhZGRpbmctdG9wOiAzM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmdyb29tIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAyMTBweDtcclxuICBcclxufVxyXG4uaW1hZ2UxIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcblxyXG4gIC50aW1lMiB7XHJcbiAgICBmb250LWZhbWlseTogUmFqZGhhbmk7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLnNhdmVkYXRlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmdyb29tbmFtZXMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhM2Y0ODtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4vLyBmbGlwIGltYWdlcyBjb2Rlc1xyXG5cclxuICAuYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNzBweDsgXHJcbiAgICAvLyBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAjY2FyZC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC8vIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuOHMgbGluZWFyO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoMCwwLDAsIC4zKTtcclxuICB9XHJcbiAgXHJcbiAgI2NhcmQge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICBib3gtc2hhZG93OiAtNXB4IDVweCAxNXB4IHJnYmEoMCwwLDAsIC4zKTtcclxuICBcclxuICAgIH1cclxuICB9XHJcbiAgLmNsaWNraW1hZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuYmFjayB7XHJcbiAgICB3aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gb3BhY2l0eTogLjc7XHJcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgXHJcbiAgfVxyXG4gIC5iYWNrMSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgaDEsIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgY29sb3I6ICRyb3NlO1xyXG4gIH1cclxuICBcclxuICAvLyBwIHtcclxuICAvLyAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAvLyB9XHJcbiAgLmFydGlzdCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRlIHtcclxuICAgIGNvbG9yOiAkdGF1cGU7XHJcbiAgfVxyXG5cclxuICAucGVsbGlwaG90byB7XHJcbiAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuLy8gZmxpcCBpbWFnZXMgY29kZSBlbmRzXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gIC8vIC5kLXNtLWZsZXgge1xyXG4gIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIC5maXJzdC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAuYnV0dG9uMSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4gIC50aW1lMiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2F2ZWRhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICB9XHJcbiAgLm1vdmUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kYXlzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmhvdXJzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1pbnV0ZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zZWNvbmRzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubW92ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDM2MXB4KSBhbmQgKG1heC13aWR0aDogNDEwcHgpIHtcclxuICAvLyAuZC1zbS1mbGV4IHtcclxuICAvLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICAuZmlyc3QtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbiAgLmJ1dHRvbjEge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuICAudGltZTIge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLnNhdmVkYXRlIHtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgfVxyXG4gIC5tb3ZlIHtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaG91cnMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRheXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaG91cnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWludXRlcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnNlY29uZHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MTFweCkgYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgLy8gLmQtc20tZmxleCB7XHJcbiAgLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAvLyB9XHJcbiAgLmZpcnN0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5idXR0b24xIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLnRpbWUyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zYXZlZGF0ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIH1cclxuICAuZGF5cyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ob3VycyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5taW51dGVzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc2Vjb25kcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLm1vdmUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MTlweCkgYW5kIChtYXgtd2lkdGg6IDQ0M3B4KSB7XHJcbiAgICAuZGF5cyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhvdXJzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIC8vIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaG91cnNsZWZ0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0NDRweCkgYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAuZGF5cyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhvdXJzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIC8vIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaG91cnNsZWZ0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDYxcHgpIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gIC8vIC5kLXNtLWZsZXgge1xyXG4gIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIC5maXJzdC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAuYnV0dG9uMSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4gIC50aW1lMiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2F2ZWRhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICB9XHJcbiAgLmRheXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaG91cnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWludXRlcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnNlY29uZHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5tb3ZlIHtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTAxcHgpIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgLmJ1dHRvbjEge1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAudGltZTIge1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuaG91cnNsZWZ0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgICB9XHJcbiAgICAubWludXRlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnNlY29uZHMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5kYXlzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIC8vIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaG91cnMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLy8gcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDQ0NHB4KSBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAvLyAgIC5kYXlzIHtcclxuICAvLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gICAgIC8vIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAuaG91cnMge1xyXG4gIC8vICAgICBkaXNwbGF5OiBibG9jaztcclxuICAvLyAgICAgLy8gcGFkZGluZy1sZWZ0OiA2cHggIWltcG9ydGFudDtcclxuICAvLyAgIH1cclxuICAvLyAgIC5ob3Vyc2xlZnQge1xyXG4gIC8vICAgICBtYXJnaW4tbGVmdDogLTEzcHg7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDFweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLy8gLmQtc20tZmxleCB7XHJcbiAgLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAvLyB9XHJcbiAgLmZpcnN0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5idXR0b24xIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLnRpbWUyIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zYXZlZGF0ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIH1cclxuICAuZGF5cyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ob3VycyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tb3ZlIHtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWludXRlcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnNlY29uZHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmZpcnN0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5idXR0b24xIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLnRpbWUyIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zYXZlZGF0ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIH1cclxuICAubW92ZSB7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1pbnV0ZXMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgfVxyXG4gIC5zZWNvbmRzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xyXG4gIC5idXR0b24xIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgLm1vdmUge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");


class AppComponent {
    constructor() {
        this.title = 'ram-supi';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-page");
    } }, directives: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map