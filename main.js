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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainPageComponent_div_4_Template, 23, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainPageComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Rajdhani\");\n@import url(\"https://fonts.googleapis.com/css?family=Questrial\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.card[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n}\n.boxes[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.small-buttons[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n.boxes[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  max-width: 100%;\n  position: sticky;\n  top: 0;\n}\n.d-sm-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.first-button[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n  border-radius: 4px;\n  box-shadow: 0px 10px 32px -19px rgba(0, 0, 0, 0.15);\n  background-color: #982630;\n  background-image: linear-gradient(315deg, #982630 0%, #9b444a 54%, #9c3038 100%);\n}\n.savebutton[_ngcontent-%COMP%] {\n  background: #982630;\n}\n.first-button[_ngcontent-%COMP%]   .button1[_ngcontent-%COMP%] {\n  width: 20%;\n  font-size: 40px;\n  color: #fff;\n  margin-bottom: 0;\n  text-align: center;\n  padding: 10px 0;\n  font-family: \"Rochester\", cursive;\n  align-items: center !important;\n}\n.move[_ngcontent-%COMP%] {\n  padding-top: 33px !important;\n}\n.groom[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 210px;\n}\n.image1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.time2[_ngcontent-%COMP%] {\n  font-family: Rajdhani;\n  font-size: 40px;\n  font-weight: 600;\n  padding-top: 7px;\n  margin-bottom: 5px;\n}\n.savedate[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: block;\n}\n.groomnames[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #aa3f48;\n  height: 100%;\n}\n.box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 370px;\n  position: relative;\n}\n#card-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  width: 210px;\n  height: 300px;\n  z-index: 1;\n  perspective: 1000px;\n  margin-top: 10%;\n}\nimg[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n#card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  transform-style: preserve-3d;\n  transition: all 0.8s linear;\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);\n}\n#card[_ngcontent-%COMP%]:hover {\n  transform: rotateY(180deg);\n  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3);\n}\n.clickimage[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n}\n.face[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.back[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 300px;\n  display: block;\n  transform: rotateY(180deg);\n  box-sizing: border-box;\n  padding: 10px;\n  text-align: center;\n  background: #F9F3E4;\n}\n.back1[_ngcontent-%COMP%] {\n  display: block;\n  transform: rotateY(180deg);\n  box-sizing: border-box;\n  text-align: center;\n}\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  font-family: \"Questrial\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-top: 15px;\n  color: #DD899E;\n}\n.artist[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.date[_ngcontent-%COMP%] {\n  color: #D0B2AF;\n}\n.pelliphoto[_ngcontent-%COMP%] {\n  height: 480px;\n  width: 100%;\n}\n@media (min-width: 320px) and (max-width: 360px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 15px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 19px !important;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 15px !important;\n  }\n}\n@media (min-width: 361px) and (max-width: 410px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 17px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 17px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 15px !important;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    padding-left: 1px !important;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 411px) and (max-width: 460px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 18px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 15px !important;\n  }\n}\n@media (min-width: 411px) and (max-width: 460px) and (min-width: 419px) and (max-width: 443px) {\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hoursleft[_ngcontent-%COMP%] {\n    margin-left: -7px;\n  }\n}\n@media (min-width: 411px) and (max-width: 460px) and (min-width: 444px) and (max-width: 460px) {\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hoursleft[_ngcontent-%COMP%] {\n    margin-left: -13px;\n  }\n}\n@media (min-width: 461px) and (max-width: 540px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 20px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 15px !important;\n  }\n}\n@media (min-width: 461px) and (max-width: 540px) and (min-width: 501px) and (max-width: 540px) {\n  .button1[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  .hoursleft[_ngcontent-%COMP%] {\n    margin-left: -7px;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 541px) and (max-width: 700px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 25px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .days[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .hours[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-left: 7px !important;\n    padding-top: 15px !important;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 701px) and (max-width: 767px) {\n  .first-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n\n  .button1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: block;\n    font-size: 25px !important;\n  }\n\n  .time2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-bottom: 0;\n  }\n\n  .savedate[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    padding-top: 15px !important;\n  }\n\n  .minutes[_ngcontent-%COMP%] {\n    margin-left: -7px;\n  }\n\n  .seconds[_ngcontent-%COMP%] {\n    margin-left: -7px;\n  }\n}\n@media (min-width: 768px) and (max-width: 860px) {\n  .button1[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n\n  .move[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwrREFBQTtBQUNBLGdFQUFBO0FBUVI7RUFDRSxzQkFBQTtBQU5GO0FBVUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVBGO0FBU0E7RUFDRSxVQUFBO0FBTkY7QUFRQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBTEo7QUFPQTtFQUVFLGtDQUFBO0FBSkY7QUFNQTtFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0FBSEY7QUFLQTtFQUNFLHdCQUFBO0FBRkY7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUdBLG1EQUFBO0VBQ0EseUJBQUE7RUFDQSxnRkFBQTtBQUhKO0FBb0JBO0VBQ0UsbUJBQUE7QUFqQkY7QUFtQkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7QUFqQko7QUFxQkE7RUFFRSw0QkFBQTtBQW5CRjtBQXFCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBbEJGO0FBcUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFsQko7QUFzQkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFuQko7QUFxQkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFsQko7QUFvQkU7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBakJKO0FBc0JFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtBQXBCSjtBQXVCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtBQXJCSjtBQXdCRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBckJKO0FBd0JF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ckJKOztFQXVCRTtJQUNFLGVBQUE7RUFwQko7O0VBc0JFO0lBQ0UsaUJBQUE7RUFuQko7O0VBcUJFO0lBQ0UsY0FBQTtFQWxCSjs7RUFvQkU7SUFDRSxjQUFBO0VBakJKOztFQW1CRTtJQUNFLGNBQUE7RUFoQko7O0VBbUJFO0lBQ0UsY0FBQTtFQWhCSjtBQUNGO0FBaUNBO0VBSUU7SUFDRSxlQUFBO0VBbENGOztFQW9DQTtJQUNFLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLDBCQUFBO0VBakNGOztFQW9DQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQWpDRjs7RUFtQ0E7SUFDRSxnQkFBQTtFQWhDRjs7RUFrQ0E7SUFDRSxjQUFBO0VBL0JGOztFQWtDQTtJQUNFLGNBQUE7RUEvQkY7O0VBa0NBO0lBQ0UsNEJBQUE7SUFDQSw0QkFBQTtFQS9CRjs7RUFpQ0E7SUFDRSxjQUFBO0VBOUJGOztFQWdDQTtJQUNFLGNBQUE7RUE3QkY7QUFDRjtBQWtDQTtFQUNFO0lBQ0UsZUFBQTtFQWhDRjs7RUFrQ0E7SUFDRSxzQkFBQTtJQUNBLGNBQUE7SUFDQSwwQkFBQTtFQS9CRjs7RUFrQ0E7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUEvQkY7O0VBaUNBO0lBQ0UsZ0JBQUE7RUE5QkY7O0VBZ0NBO0lBRUUsNEJBQUE7RUE5QkY7O0VBZ0NBO0lBQ0UsaUJBQUE7RUE3QkY7O0VBK0JBO0lBQ0UsaUJBQUE7RUE1QkY7QUFDRjtBQThCQTtFQUNFO0lBQ0UsZUFBQTtFQTVCRjs7RUE4QkE7SUFDRSxlQUFBO0VBM0JGO0FBQ0YiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWpkaGFuaScpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1ZXN0cmlhbCcpO1xyXG4kd2hpdGU6ICNGOUYzRTQ7XHJcbiRwaW5rOiAjRjI5REFCO1xyXG4kcm9zZTogI0REODk5RTtcclxuJHRhbjogI0YyQ0RDMTtcclxuJHRhdXBlOiAjRDBCMkFGO1xyXG4kZm9udDogJ1F1ZXN0cmlhbCcsIHNhbnMtc2VyaWY7XHJcblxyXG4qe1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgXHJcbn1cclxuLy8gI29vNGE3NiwgYTlkYWViXHJcbi5jYXJkIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJveGVzIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zbWFsbC1idXR0b25zIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJveGVzIHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxufVxyXG4uZC1zbS1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZpcnN0LWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2QyOTFiYztcclxuICAgIC8vIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMzJweCAtMTlweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4MjYzMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5ODI2MzAgMCUsICM5YjQ0NGEgNTQlLCAjOWMzMDM4IDEwMCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2E0MDYwNjtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNhNDA2MDYgMCUsICNkOTgzMjQgNzQlKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmY2UwNDM7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZmNlMDQzIDAlLCAjZmI3YmEyIDc0JSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2QzZDNkMyAwJSwgIzdmOGM4ZCA3NCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmY2I0MztcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTlkZWcsICNmZmNiNDMgMCUsICNmZjY0MjUgMzclLCAjZmYwMDE2IDEwMCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmY2ZkZjtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNmZmNmZGYgMCUsICNiMGYzZjEgNzQlKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmUxOTA7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE2ZGVnLCAjZmZlMTkwIDAlLCAjZmE5ZThjIDc0JSk7XHJcblxyXG5cclxuXHJcbn1cclxuLnNhdmVidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICM5ODI2MzA7XHJcbn1cclxuLmZpcnN0LWJ1dHRvbiAuYnV0dG9uMSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvY2hlc3RlclwiLCBjdXJzaXZlO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgLy8gZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuLm1vdmUge1xyXG4gIC8vIHBhZGRpbmc6IDEwcHggMDtcclxuICBwYWRkaW5nLXRvcDogMzNweCAhaW1wb3J0YW50O1xyXG59XHJcbi5ncm9vbSB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMjEwcHg7XHJcbiAgXHJcbn1cclxuLmltYWdlMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG5cclxuICAudGltZTIge1xyXG4gICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5zYXZlZGF0ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5ncm9vbW5hbWVzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYTNmNDg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuLy8gZmxpcCBpbWFnZXMgY29kZXNcclxuXHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzcwcHg7IFxyXG4gICAgLy8gbWFyZ2luOiAxMCUgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgI2NhcmQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAjY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjhzIGxpbmVhcjtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsMCwwLCAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gICNjYXJkIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgYm94LXNoYWRvdzogLTVweCA1cHggMTVweCByZ2JhKDAsMCwwLCAuMyk7XHJcbiAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jbGlja2ltYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZmFjZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2sge1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIG9wYWNpdHk6IC43O1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gIFxyXG4gIH1cclxuICAuYmFjazEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGgxLCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiAkcm9zZTtcclxuICB9XHJcbiAgXHJcbiAgLy8gcCB7XHJcbiAgLy8gICBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gfVxyXG4gIC5hcnRpc3Qge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGF0ZSB7XHJcbiAgICBjb2xvcjogJHRhdXBlO1xyXG4gIH1cclxuXHJcbiAgLnBlbGxpcGhvdG8ge1xyXG4gICAgaGVpZ2h0OiA0ODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbi8vIGZsaXAgaW1hZ2VzIGNvZGUgZW5kc1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAvLyAuZC1zbS1mbGV4IHtcclxuICAvLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICAuZmlyc3QtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbiAgLmJ1dHRvbjEge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuICAudGltZTIge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLnNhdmVkYXRlIHtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgfVxyXG4gIC5tb3ZlIHtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTlweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGF5cyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ob3VycyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5taW51dGVzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc2Vjb25kcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLm1vdmUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNjFweCkgYW5kIChtYXgtd2lkdGg6IDQxMHB4KSB7XHJcbiAgLy8gLmQtc20tZmxleCB7XHJcbiAgLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAvLyB9XHJcbiAgLmZpcnN0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG4gIC5idXR0b24xIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLnRpbWUyIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zYXZlZGF0ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIH1cclxuICAubW92ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmhvdXJzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kYXlzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmhvdXJzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1pbnV0ZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zZWNvbmRzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDExcHgpIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gIC8vIC5kLXNtLWZsZXgge1xyXG4gIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIC5maXJzdC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAuYnV0dG9uMSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4gIC50aW1lMiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2F2ZWRhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICB9XHJcbiAgLmRheXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaG91cnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWludXRlcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnNlY29uZHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5tb3ZlIHtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDE5cHgpIGFuZCAobWF4LXdpZHRoOiA0NDNweCkge1xyXG4gICAgLmRheXMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLy8gcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ob3VycyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhvdXJzbGVmdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDQ0cHgpIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gICAgLmRheXMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLy8gcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ob3VycyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhvdXJzbGVmdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ2MXB4KSBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAvLyAuZC1zbS1mbGV4IHtcclxuICAvLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICAuZmlyc3QtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbiAgLmJ1dHRvbjEge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuICAudGltZTIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLnNhdmVkYXRlIHtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgfVxyXG4gIC5kYXlzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmhvdXJzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1pbnV0ZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zZWNvbmRzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubW92ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAgIC5idXR0b24xIHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnRpbWUyIHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmhvdXJzbGVmdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gICAgfVxyXG4gICAgLm1pbnV0ZXMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5zZWNvbmRzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZGF5cyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhvdXJzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIC8vIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIEBtZWRpYSAobWluLXdpZHRoOiA0NDRweCkgYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgLy8gICAuZGF5cyB7XHJcbiAgLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vICAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIC8vICAgfVxyXG4gIC8vICAgLmhvdXJzIHtcclxuICAvLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gICAgIC8vIHBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gICB9XHJcbiAgLy8gICAuaG91cnNsZWZ0IHtcclxuICAvLyAgICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQxcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC8vIC5kLXNtLWZsZXgge1xyXG4gIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIC5maXJzdC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAuYnV0dG9uMSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4gIC50aW1lMiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2F2ZWRhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICB9XHJcbiAgLmRheXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaG91cnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubW92ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1pbnV0ZXMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zZWNvbmRzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5maXJzdC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICAuYnV0dG9uMSB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbiAgfVxyXG4gIC50aW1lMiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2F2ZWRhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICB9XHJcbiAgLm1vdmUge1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA3cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5taW51dGVzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gIH1cclxuICAuc2Vjb25kcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcclxuICAuYnV0dG9uMSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIC5tb3ZlIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


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