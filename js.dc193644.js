parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HYMH":[function(require,module,exports) {

},{}],"epnb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DOM=exports.CONST=void 0;var e={TIME_SHORT:100,TIME_LONG:200};exports.CONST=e;var t={body:document.body,nav:{button:document.getElementById("navMenuBtn"),top:document.getElementById("navTop"),blinder:document.getElementById("navBlinder"),contents:{darkModeBtn:document.getElementById("darkModeBtn")}},text:{sub:document.getElementById("textSub"),main:document.getElementById("textMain")},memoryBtn:{clear:document.getElementById("memoryClearBtn"),read:document.getElementById("memoryReadBtn"),plus:document.getElementById("memoryPlusBtn"),minus:document.getElementById("memoryMinusBtn"),store:document.getElementById("memoryStoreBtn")},mainBtn:{num1:document.getElementById("num1Btn"),num2:document.getElementById("num2Btn"),num3:document.getElementById("num3Btn"),num4:document.getElementById("num4Btn"),num5:document.getElementById("num5Btn"),num6:document.getElementById("num6Btn"),num7:document.getElementById("num7Btn"),num8:document.getElementById("num8Btn"),num9:document.getElementById("num9Btn"),num0:document.getElementById("num0Btn"),dot:document.getElementById("dotBtn"),clearEntry:document.getElementById("clearEntryBtn"),clear:document.getElementById("clearBtn"),backspace:document.getElementById("backspaceBtn"),percent:document.getElementById("percentBtn"),fraction:document.getElementById("fractionBtn"),square:document.getElementById("squareBtn"),squareRoot:document.getElementById("squareRootBtn"),toggleSign:document.getElementById("toggleSignBtn"),plus:document.getElementById("plusBtn"),minus:document.getElementById("minusBtn"),multiply:document.getElementById("multiplyBtn"),divide:document.getElementById("divideBtn"),equal:document.getElementById("equalBtn")},aside:{wrapper:document.getElementById("asideWrapper"),historyTab:document.getElementById("historyTabBtn"),historyWrapper:document.getElementById("historyWrapper"),memoryTab:document.getElementById("memoryTabBtn"),memoryWrapper:document.getElementById("memoryWrapper")}};exports.DOM=t;
},{}],"nfFM":[function(require,module,exports) {
"use strict";var n=require("./_config.js"),i={isMoving:!1,isShown:!1},o={on:function(){i.isMoving||(i.isMoving=!0,n.DOM.nav.button.classList.add("on"),n.DOM.body.classList.add("menu_pressed"),setTimeout(function(){return n.DOM.body.classList.add("menu_shown")},n.CONST.TIME_SHORT),setTimeout(function(){i.isShown=!0},n.CONST.TIME_LONG),setTimeout(function(){i.isMoving=!1},n.CONST.TIME_LONG))},off:function(){i.isMoving||(i.isMoving=!0,n.DOM.nav.button.classList.remove("on"),n.DOM.body.classList.remove("menu_shown"),setTimeout(function(){return n.DOM.body.classList.remove("menu_pressed")},n.CONST.TIME_LONG),setTimeout(function(){i.isShown=!1},n.CONST.TIME_LONG),setTimeout(function(){i.isMoving=!1},n.CONST.TIME_LONG))},init:function(){n.DOM.nav.button.addEventListener("click",function(){return i.isShown?o.off():o.on()}),n.DOM.nav.blinder.addEventListener("click",o.off),window.addEventListener("resize",o.off);var t=n.DOM.nav.contents;for(var s in t)t[s].addEventListener("click",o.off)}};o.init();
},{"./_config.js":"epnb"}],"kkm1":[function(require,module,exports) {
"use strict";var e=require("./_config.js"),t={};t.current=localStorage.getItem("theme"),t.preferDarkScheme=window.matchMedia("prefers-color-scheme: dark"),"dark"===t.current?e.DOM.body.classList.toggle("dark-theme"):"light"===t.current&&e.DOM.body.classList.toggle("light-theme");var r={toggleTheme:function(){var r;t.preferDarkScheme.matches?(e.DOM.body.classList.toggle("light-theme"),r=e.DOM.body.classList.contains("light-theme")?"light":"dark"):(e.DOM.body.classList.toggle("dark-theme"),r=e.DOM.body.classList.contains("dark-theme")?"dark":"light"),localStorage.setItem("theme",r)},init:function(){e.DOM.nav.contents.darkModeBtn.addEventListener("click",this.toggleTheme)}};r.init();
},{"./_config.js":"epnb"}],"rbaR":[function(require,module,exports) {
"use strict";var i=require("./_config.js"),s={current:"history",isChanging:!1},e={show:{memory:function(){s.isChanging||(s.isChanging=!0,s.current="memory",i.DOM.aside.historyTab.classList.remove("actived"),i.DOM.aside.memoryTab.classList.add("actived"),i.DOM.aside.wrapper.classList.remove("history_shown"),setTimeout(function(){i.DOM.aside.wrapper.classList.remove("history_clicked")},i.CONST.TIME_LONG),setTimeout(function(){i.DOM.aside.wrapper.classList.add("memory_clicked")},i.CONST.TIME_SHORT+i.CONST.TIME_LONG),setTimeout(function(){i.DOM.aside.wrapper.classList.add("memory_shown")},i.CONST.TIME_SHORT+2*i.CONST.TIME_LONG),setTimeout(function(){s.isChanging=!1},i.CONST.TIME_SHORT+2*i.CONST.TIME_LONG))},history:function(){s.isChanging||(s.isChanging=!0,s.current="history",i.DOM.aside.memoryTab.classList.remove("actived"),i.DOM.aside.historyTab.classList.add("actived"),i.DOM.aside.wrapper.classList.remove("memory_shown"),setTimeout(function(){i.DOM.aside.wrapper.classList.remove("memory_clicked")},i.CONST.TIME_LONG),setTimeout(function(){i.DOM.aside.wrapper.classList.add("history_clicked")},i.CONST.TIME_SHORT+i.CONST.TIME_LONG),setTimeout(function(){i.DOM.aside.wrapper.classList.add("history_shown")},i.CONST.TIME_SHORT+2*i.CONST.TIME_LONG),setTimeout(function(){s.isChanging=!1},i.CONST.TIME_SHORT+2*i.CONST.TIME_LONG))}},init:function(){i.DOM.aside.historyTab.addEventListener("click",function(){"memory"===s.current&&e.show.history()}),i.DOM.aside.memoryTab.addEventListener("click",function(){"history"===s.current&&e.show.memory()})}};e.init();
},{"./_config.js":"epnb"}],"PHJk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={isOperator:function(e){return"+"===e||"-"===e||"*"===e||"/"===e||"="===e},isNumber:function(e){return!isNaN(e)},filterNum:function(e){return"."===String(e)[e.length-1]?String(e).slice(0,e.length-1):String(e)}},t=e;exports.default=t;
},{}],"ek52":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dataFunc=exports.dataItem=exports.dataList=void 0;var t=e(require("./helper"));function e(t){return t&&t.__esModule?t:{default:t}}var r=[];exports.dataList=r;var a="0";exports.dataItem=a;var n={list:{_operate:function(t,e,r){var a=function(t){return-1!==String(t).indexOf(".")?String(t).length-String(t).indexOf(".")-1:0};try{if("/"===e&&0===Number(r))throw"Can't divide with 0"}catch(p){console.error(p)}var n=a(t),o=a(r),i=0,u=0;"+"===e&&(u=n>o?n:o,i=t*Math.pow(10,u)+r*Math.pow(10,u));"-"===e&&(u=n>o?n:o,i=t*Math.pow(10,u)-r*Math.pow(10,u));"*"===e&&(u=n+o,i=t*Math.pow(10,n)*(r*Math.pow(10,o)));"/"===e&&(u=n-o,i=t*Math.pow(10,n)/(r*Math.pow(10,o)));return i/=Math.pow(10,u),Number(i)},isEmpty:function(){return!r.length},reset:function(){r.splice(0,r.length)},backspace:function(){r.pop()},input:function(e){if(r.length){try{if(t.default.isOperator(e)&&t.default.isOperator(r[r.length-1]))throw"Operator cannot be input next to operator.";if(t.default.isNumber(e)&&t.default.isNumber(r[r.length-1]))throw"Number cannot be input next to number."}catch(a){console.error(a)}r.push(e)}else r.push(e)},replaceRecent:function(e){if(r.length){var a=r[r.length-1];try{if(t.default.isOperator(e)&&t.default.isNumber(a))throw"Operator cannot replace number.";if(t.default.isNumber(e)&&t.default.isOperator(a))throw"Number cannot replace operator."}catch(o){console.error(o)}n.list.backspace(),n.list.input(e)}else n.list.input(e)},preCalculate:function(){if(!r.length)return 0;if(r.length<=2)return r[0];for(var e=Number(r[0]),a=1;a<r.length-1;a+=2){try{if(t.default.isOperator(r[a+1]))throw"Misordered item in dataList."}catch(n){console.error(n)}e=this._operate(e,r[a],Number(r[a+1]))}return String(e)},calculate:function(){if(!r.length)return 0;if(r.length<=2)return r[0];for(var e=Number(r[0]),a=1;a<r.length-1;a+=2){try{if(t.default.isOperator(r[a+1]))throw"Misordered item in dataList."}catch(n){console.error(n)}e=this._operate(e,r[a],Number(r[a+1]))}return String(e)}},item:{reset:function(){exports.dataItem=a="0"},backspace:function(){exports.dataItem=a=a.slice(0,a.length-1)},replace:function(t){exports.dataItem=a=t},input:function(t){exports.dataItem=a+=t},toggleSign:function(){exports.dataItem=a*=-1,exports.dataItem=a=String(a)},fraction:function(){exports.dataItem=a=String(n.list._operate(1,"/",Number(a)))},square:function(){exports.dataItem=a=String(n.list._operate(Number(a),"*",Number(a)))},squareRoot:function(){exports.dataItem=a=String(Math.pow(Number(a),.5))},percent:function(t,e){var r=n.list._operate(Number(t),"/",100);return String(n.list._operate(r,"*",Number(e)))}}};exports.dataFunc=n;
},{"./helper":"PHJk"}],"J9yM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.btnHistoryFunc=exports.historyFunc=exports.history=void 0;var t=require("./_config"),n={recentInput:"",recentResult:"",recentButton:null,recentOperator:"="};exports.history=n;var e={reset:function(){n.recentInput="",n.recentResult="",r.update(null),n.recentOperator="="}};exports.historyFunc=e;var r={update:function(t){n.recentButton=t},isNum:function(){for(var e=0;e<10;e++)if(n.recentButton===t.DOM.mainBtn["num".concat(e)])return!0;return!1},isOperator:function(){return n.recentButton===t.DOM.mainBtn.plus||(n.recentButton===t.DOM.mainBtn.minus||(n.recentButton===t.DOM.mainBtn.multiply||n.recentButton===t.DOM.mainBtn.divide))},isEqual:function(){return n.recentButton===t.DOM.mainBtn.equal},isDot:function(){return n.recentButton===t.DOM.mainBtn.dot},isToggleSign:function(){return n.recentButton===t.DOM.mainBtn.toggleSign},isShortcut:function(){return n.recentButton===t.DOM.mainBtn.percent||(n.recentButton===t.DOM.mainBtn.fraction||(n.recentButton===t.DOM.mainBtn.square||n.recentButton===t.DOM.mainBtn.squareRoot))}};exports.btnHistoryFunc=r;
},{"./_config":"epnb"}],"YwAa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./_config.js"),e=require("./calculate.js"),a=n(require("./helper")),u=require("./status");function n(t){return t&&t.__esModule?t:{default:t}}var i={sub:{update:function(){t.DOM.text.sub.value="";for(var u=0;u<e.dataList.length;u++){var n=e.dataList[u];a.default.isOperator(n)&&(n=" ".concat(n," ")),t.DOM.text.sub.value+=n}" "===t.DOM.text.sub.value[t.DOM.text.sub.value.length-1]&&(t.DOM.text.sub.value=t.DOM.text.sub.value.slice(0,t.DOM.text.sub.value.length-1))},clear:function(){t.DOM.text.sub.value="",e.dataFunc.list.reset()},input:function(t){u.btnHistoryFunc.isShortcut()?e.dataFunc.list.input(t):u.btnHistoryFunc.isOperator()?e.dataFunc.list.replaceRecent(t):u.btnHistoryFunc.isEqual()?(e.dataFunc.list.reset(),e.dataFunc.list.input(u.history.recentResult),e.dataFunc.list.input(t)):(e.dataFunc.list.input(a.default.filterNum(e.dataItem)),e.dataFunc.list.input(t)),u.history.recentOperator=t,u.history.recentInput=e.dataItem},preCalculate:function(){var t;t=e.dataFunc.list.preCalculate(),i.main.replace(t),u.history.recentResult=String(t)},calculate:function(){u.btnHistoryFunc.isShortcut()?e.dataFunc.list.input("="):u.btnHistoryFunc.isOperator()?(e.dataFunc.list.input(i.main.get()),u.history.recentInput=i.main.get(),e.dataFunc.list.input("=")):u.btnHistoryFunc.isEqual()?(i.sub.clear(),e.dataFunc.list.input(u.history.recentResult),e.dataFunc.list.input(u.history.recentOperator),"="!==u.history.recentOperator&&(e.dataFunc.list.input(u.history.recentInput),e.dataFunc.list.input("="))):(u.btnHistoryFunc.isDot()&&i.sub.clear(),"="===u.history.recentOperator?(e.dataFunc.list.input(a.default.filterNum(e.dataItem)),u.history.recentInput=a.default.filterNum(e.dataItem)):!u.btnHistoryFunc.isNum()&&!u.btnHistoryFunc.isShortcut()&&!u.btnHistoryFunc.isToggleSign()||e.dataFunc.list.isEmpty()?(e.dataFunc.list.input(a.default.filterNum(e.dataItem)),e.dataFunc.list.input(u.history.recentOperator),e.dataFunc.list.input(u.history.recentInput)):(e.dataFunc.list.input(a.default.filterNum(e.dataItem)),u.history.recentInput=a.default.filterNum(e.dataItem)),e.dataFunc.list.input("="));var t;t=e.dataFunc.list.calculate(),i.main.replace(t),u.history.recentResult=String(t)}},main:{get:function(){return a.default.filterNum(t.DOM.text.main.value)},update:function(){t.DOM.text.main.value=e.dataItem},replace:function(e){t.DOM.text.main.value=e},clear:function(){u.btnHistoryFunc.isEqual()&&i.sub.clear(),t.DOM.text.main.value="0",e.dataFunc.item.replace("0")},backspace:function(){if(!u.btnHistoryFunc.isOperator()&&"0"!==e.dataItem)return u.btnHistoryFunc.isEqual()?(i.sub.clear(),void e.dataFunc.item.replace(u.history.recentResult)):void(1===e.dataItem.length?i.main.clear():e.dataFunc.item.backspace())},input:function(t){if("0"!==t||"0"!==e.dataItem){if("."===t&&e.dataItem.includes(".")){if(!u.btnHistoryFunc.isOperator()&&!u.btnHistoryFunc.isEqual())return;e.dataFunc.item.replace("0.")}u.btnHistoryFunc.isEqual()?(i.sub.clear(),"."===t?e.dataFunc.item.replace("0."):e.dataFunc.item.replace(t)):u.btnHistoryFunc.isOperator()||u.btnHistoryFunc.isToggleSign()||u.btnHistoryFunc.isShortcut()||"0"===e.dataItem?"."===t?e.dataFunc.item.replace("0."):e.dataFunc.item.replace(t):e.dataFunc.item.input(t)}},toggleSign:function(){u.btnHistoryFunc.isEqual()&&(i.sub.clear(),e.dataFunc.item.replace(u.history.recentResult)),e.dataFunc.item.toggleSign(),u.btnHistoryFunc.isShortcut()?e.dataFunc.list.replaceRecent(a.default.filterNum(e.dataItem)):e.dataFunc.list.input(a.default.filterNum(e.dataItem))},percent:function(){"0"===e.dataItem?e.dataFunc.item.replace("0"):u.btnHistoryFunc.isEqual()&&(i.sub.clear(),e.dataFunc.item.replace(u.history.recentResult)),e.dataFunc.item.replace(e.dataFunc.item.percent(e.dataItem,u.history.recentResult)),u.btnHistoryFunc.isShortcut()?e.dataFunc.list.replaceRecent(a.default.filterNum(e.dataItem)):e.dataFunc.list.input(a.default.filterNum(e.dataItem))},fraction:function(){u.btnHistoryFunc.isEqual()&&(i.sub.clear(),e.dataFunc.item.replace(u.history.recentResult)),e.dataFunc.item.fraction(),u.btnHistoryFunc.isShortcut()?e.dataFunc.list.replaceRecent(a.default.filterNum(e.dataItem)):e.dataFunc.list.input(a.default.filterNum(e.dataItem))},square:function(){u.btnHistoryFunc.isEqual()&&(i.sub.clear(),e.dataFunc.item.replace(u.history.recentResult)),e.dataFunc.item.square(),u.btnHistoryFunc.isShortcut()?e.dataFunc.list.replaceRecent(a.default.filterNum(e.dataItem)):e.dataFunc.list.input(a.default.filterNum(e.dataItem))},squareRoot:function(){u.btnHistoryFunc.isEqual()&&(i.sub.clear(),e.dataFunc.item.replace(u.history.recentResult)),e.dataFunc.item.squareRoot(),u.btnHistoryFunc.isShortcut()?e.dataFunc.list.replaceRecent(a.default.filterNum(e.dataItem)):e.dataFunc.list.input(a.default.filterNum(e.dataItem))}}},r=i;exports.default=r;
},{"./_config.js":"epnb","./calculate.js":"ek52","./helper":"PHJk","./status":"J9yM"}],"FdOE":[function(require,module,exports) {
"use strict";var n=require("./_config.js"),t=a(require("./text")),e=require("./status"),i=a(require("./helper.js"));function a(n){return n&&n.__esModule?n:{default:n}}var u={event:function(n){t.default.main.input(n),t.default.main.update()},keyDown:function(t,e){u.event(t),e.classList.add("pressed"),setTimeout(function(){e.classList.remove("pressed")},n.CONST.TIME_SHORT)},toggleSign:function(){t.default.main.toggleSign(),t.default.main.update()},init:function(){for(var t=function(t){n.DOM.mainBtn["num".concat(t)].addEventListener("click",function(n){u.event(String(t)),e.btnHistoryFunc.update(n.target)})},a=0;a<10;a++)t(a);document.addEventListener("keydown",function(t){n.DOM.mainBtn["num".concat(t.key)]&&i.default.isNumber(t.key)&&!n.DOM.mainBtn["num".concat(t.key)].disabled&&(u.keyDown(t.key,n.DOM.mainBtn["num".concat(t.key)]),e.btnHistoryFunc.update(n.DOM.mainBtn["num".concat(t.key)]))}),n.DOM.mainBtn.dot.addEventListener("click",function(){u.event("."),e.btnHistoryFunc.update(n.DOM.mainBtn.dot)}),document.addEventListener("keydown",function(t){"."!==t.key||n.DOM.mainBtn.dot.disabled||(u.keyDown(t.key,n.DOM.mainBtn.dot),e.btnHistoryFunc.update(n.DOM.mainBtn.dot))}),n.DOM.mainBtn.toggleSign.addEventListener("click",function(){u.toggleSign(),e.btnHistoryFunc.update(n.DOM.mainBtn.toggleSign)})}};u.init();
},{"./_config.js":"epnb","./text":"YwAa","./status":"J9yM","./helper.js":"PHJk"}],"eQhQ":[function(require,module,exports) {
"use strict";var e=require("./_config.js"),a=c(require("./text")),n=require("./status");function c(e){return e&&e.__esModule?e:{default:e}}var t={clearEntry:function(){a.default.main.clear()},clear:function(){a.default.main.clear(),a.default.sub.clear(),n.historyFunc.reset()},backspace:function(){a.default.main.backspace(),a.default.main.update()},backspaceKeyDown:function(){t.backspace(),e.DOM.mainBtn.backspace.classList.add("pressed"),setTimeout(function(){e.DOM.mainBtn.backspace.classList.remove("pressed")},e.CONST.TIME_SHORT)},init:function(){e.DOM.mainBtn.clearEntry.addEventListener("click",t.clearEntry),e.DOM.mainBtn.clear.addEventListener("click",t.clear),e.DOM.mainBtn.backspace.addEventListener("click",t.backspace),document.addEventListener("keydown",function(a){"Backspace"!==a.key||e.DOM.mainBtn.backspace.disabled||t.backspaceKeyDown()})}};t.init();
},{"./_config.js":"epnb","./text":"YwAa","./status":"J9yM"}],"FcK6":[function(require,module,exports) {
"use strict";var n=require("./_config.js"),t=u(require("./text")),e=require("./status"),i=u(require("./helper.js"));function u(n){return n&&n.__esModule?n:{default:n}}var a={operator:function(n){t.default.sub.input(n),t.default.sub.preCalculate(),t.default.sub.update()},operatorKeydown:function(t,e){a.operator(t),e.classList.add("pressed"),setTimeout(function(){e.classList.remove("pressed")},n.CONST.TIME_SHORT)},equal:function(){t.default.sub.calculate(),t.default.sub.update()},equalKeydown:function(){a.equal(),n.DOM.mainBtn.equal.classList.add("pressed"),setTimeout(function(){n.DOM.mainBtn.equal.classList.remove("pressed")},n.CONST.TIME_SHORT)},init:function(){n.DOM.mainBtn.plus.addEventListener("click",function(){a.operator("+"),e.btnHistoryFunc.update(n.DOM.mainBtn.plus)}),document.addEventListener("keydown",function(t){"+"!==t.key||n.DOM.mainBtn.plus.disabled||(a.operatorKeydown(t.key,n.DOM.mainBtn.plus),e.btnHistoryFunc.update(n.DOM.mainBtn.plus))}),n.DOM.mainBtn.minus.addEventListener("click",function(){a.operator("-"),e.btnHistoryFunc.update(n.DOM.mainBtn.minus)}),document.addEventListener("keydown",function(t){"-"!==t.key||n.DOM.mainBtn.minus.disabled||(a.operatorKeydown(t.key,n.DOM.mainBtn.minus),e.btnHistoryFunc.update(n.DOM.mainBtn.minus))}),n.DOM.mainBtn.multiply.addEventListener("click",function(){a.operator("*"),e.btnHistoryFunc.update(n.DOM.mainBtn.multiply)}),document.addEventListener("keydown",function(t){"*"!==t.key||n.DOM.mainBtn.multiply.disabled||(a.operatorKeydown(t.key,n.DOM.mainBtn.multiply),e.btnHistoryFunc.update(n.DOM.mainBtn.multiply))}),n.DOM.mainBtn.divide.addEventListener("click",function(){a.operator("/"),e.btnHistoryFunc.update(n.DOM.mainBtn.divide)}),document.addEventListener("keydown",function(t){"/"!==t.key||n.DOM.mainBtn.divide.disabled||(a.operatorKeydown(t.key,n.DOM.mainBtn.divide),e.btnHistoryFunc.update(n.DOM.mainBtn.divide))}),n.DOM.mainBtn.equal.addEventListener("click",function(){a.equal(),e.btnHistoryFunc.update(n.DOM.mainBtn.equal)}),document.addEventListener("keydown",function(t){"="!==t.key&&"Enter"!==t.key||n.DOM.mainBtn.equal.disabled||(t.preventDefault(),a.equalKeydown(),e.btnHistoryFunc.update(n.DOM.mainBtn.equal))})}};a.init();
},{"./_config.js":"epnb","./text":"YwAa","./status":"J9yM","./helper.js":"PHJk"}],"Imke":[function(require,module,exports) {
"use strict";var t=require("./_config.js"),n=a(require("./text")),e=require("./status");function a(t){return t&&t.__esModule?t:{default:t}}var u={percent:function(){n.default.main.percent(),n.default.main.update(),n.default.sub.update()},fraction:function(){n.default.main.fraction(),n.default.main.update(),n.default.sub.update()},square:function(){n.default.main.square(),n.default.main.update(),n.default.sub.update()},squareRoot:function(){n.default.main.squareRoot(),n.default.main.update(),n.default.sub.update()},init:function(){t.DOM.mainBtn.percent.addEventListener("click",function(){u.percent(),e.btnHistoryFunc.update(t.DOM.mainBtn.percent)}),t.DOM.mainBtn.fraction.addEventListener("click",function(){u.fraction(),e.btnHistoryFunc.update(t.DOM.mainBtn.fraction)}),t.DOM.mainBtn.square.addEventListener("click",function(){u.square(),e.btnHistoryFunc.update(t.DOM.mainBtn.square)}),t.DOM.mainBtn.squareRoot.addEventListener("click",function(){u.squareRoot(),e.btnHistoryFunc.update(t.DOM.mainBtn.squareRoot)})}};u.init();
},{"./_config.js":"epnb","./text":"YwAa","./status":"J9yM"}],"mahc":[function(require,module,exports) {
"use strict";require("./../scss/index.scss"),require("./nav"),require("./navcontent"),require("./aside"),require("./mainNumBtn"),require("./mainCtrlBtn"),require("./mainOperatorBtn"),require("./mainShortcutBtn");
},{"./../scss/index.scss":"HYMH","./nav":"nfFM","./navcontent":"kkm1","./aside":"rbaR","./mainNumBtn":"FdOE","./mainCtrlBtn":"eQhQ","./mainOperatorBtn":"FcK6","./mainShortcutBtn":"Imke"}]},{},["mahc"], null)
//# sourceMappingURL=/Nyong-calculator/js.dc193644.js.map