parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HYMH":[function(require,module,exports) {

},{}],"epnb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DOM=exports.CONST=void 0;var e={TIME_SHORT:100,TIME_LONG:200};exports.CONST=e;var t={body:document.body,error:{text:document.getElementById("errorMessage"),closeBtn:document.getElementById("errorCloseBtn")},nav:{button:document.getElementById("navMenuBtn"),top:document.getElementById("navTop"),blinder:document.getElementById("navBlinder"),contents:{darkModeBtn:document.getElementById("darkModeBtn")}},text:{sub:document.getElementById("textSub"),main:document.getElementById("textMain")},memoryBtn:{clear:document.getElementById("memoryClearBtn"),read:document.getElementById("memoryReadBtn"),plus:document.getElementById("memoryPlusBtn"),minus:document.getElementById("memoryMinusBtn"),store:document.getElementById("memoryStoreBtn")},mainBtn:{num1:document.getElementById("num1Btn"),num2:document.getElementById("num2Btn"),num3:document.getElementById("num3Btn"),num4:document.getElementById("num4Btn"),num5:document.getElementById("num5Btn"),num6:document.getElementById("num6Btn"),num7:document.getElementById("num7Btn"),num8:document.getElementById("num8Btn"),num9:document.getElementById("num9Btn"),num0:document.getElementById("num0Btn"),dot:document.getElementById("dotBtn"),clearEntry:document.getElementById("clearEntryBtn"),clear:document.getElementById("clearBtn"),backspace:document.getElementById("backspaceBtn"),percent:document.getElementById("percentBtn"),fraction:document.getElementById("fractionBtn"),square:document.getElementById("squareBtn"),squareRoot:document.getElementById("squareRootBtn"),toggleSign:document.getElementById("toggleSignBtn"),plus:document.getElementById("plusBtn"),minus:document.getElementById("minusBtn"),multiply:document.getElementById("multiplyBtn"),divide:document.getElementById("divideBtn"),equal:document.getElementById("equalBtn")},aside:{wrapper:document.getElementById("asideWrapper"),historyTab:document.getElementById("historyTabBtn"),historyWrapper:document.getElementById("historyWrapper"),memoryTab:document.getElementById("memoryTabBtn"),memoryWrapper:document.getElementById("memoryWrapper")}};exports.DOM=t;
},{}],"nfFM":[function(require,module,exports) {
"use strict";var n=require("./_config.js"),i={isMoving:!1,isShown:!1},o={on:function(){i.isMoving||(i.isMoving=!0,n.DOM.nav.button.classList.add("on"),n.DOM.body.classList.add("menu_pressed"),setTimeout(function(){return n.DOM.body.classList.add("menu_shown")},n.CONST.TIME_SHORT),setTimeout(function(){i.isShown=!0},n.CONST.TIME_LONG),setTimeout(function(){i.isMoving=!1},n.CONST.TIME_LONG))},off:function(){i.isMoving||(i.isMoving=!0,n.DOM.nav.button.classList.remove("on"),n.DOM.body.classList.remove("menu_shown"),setTimeout(function(){return n.DOM.body.classList.remove("menu_pressed")},n.CONST.TIME_LONG),setTimeout(function(){i.isShown=!1},n.CONST.TIME_LONG),setTimeout(function(){i.isMoving=!1},n.CONST.TIME_LONG))},init:function(){n.DOM.nav.button.addEventListener("click",function(){return i.isShown?o.off():o.on()}),n.DOM.nav.blinder.addEventListener("click",o.off),window.addEventListener("resize",o.off);var t=n.DOM.nav.contents;for(var s in t)t[s].addEventListener("click",o.off)}};o.init();
},{"./_config.js":"epnb"}],"kkm1":[function(require,module,exports) {
"use strict";var e=require("./_config.js"),t={};t.current=localStorage.getItem("theme"),t.preferDarkScheme=window.matchMedia("prefers-color-scheme: dark"),"dark"===t.current?e.DOM.body.classList.toggle("dark-theme"):"light"===t.current&&e.DOM.body.classList.toggle("light-theme");var r={toggleTheme:function(){var r;t.preferDarkScheme.matches?(e.DOM.body.classList.toggle("light-theme"),r=e.DOM.body.classList.contains("light-theme")?"light":"dark"):(e.DOM.body.classList.toggle("dark-theme"),r=e.DOM.body.classList.contains("dark-theme")?"dark":"light"),localStorage.setItem("theme",r)},init:function(){e.DOM.nav.contents.darkModeBtn.addEventListener("click",this.toggleTheme)}};r.init();
},{"./_config.js":"epnb"}],"rbaR":[function(require,module,exports) {
"use strict";var i=require("./_config.js"),s={current:"history",isChanging:!1},e={show:{memory:function(){s.isChanging||(s.isChanging=!0,s.current="memory",i.DOM.aside.historyTab.classList.remove("actived"),i.DOM.aside.memoryTab.classList.add("actived"),i.DOM.aside.wrapper.classList.remove("history_shown"),setTimeout(function(){i.DOM.aside.wrapper.classList.remove("history_clicked")},i.CONST.TIME_LONG),setTimeout(function(){i.DOM.aside.wrapper.classList.add("memory_clicked")},i.CONST.TIME_SHORT+i.CONST.TIME_LONG),setTimeout(function(){i.DOM.aside.wrapper.classList.add("memory_shown")},i.CONST.TIME_SHORT+2*i.CONST.TIME_LONG),setTimeout(function(){s.isChanging=!1},i.CONST.TIME_SHORT+2*i.CONST.TIME_LONG))},history:function(){s.isChanging||(s.isChanging=!0,s.current="history",i.DOM.aside.memoryTab.classList.remove("actived"),i.DOM.aside.historyTab.classList.add("actived"),i.DOM.aside.wrapper.classList.remove("memory_shown"),setTimeout(function(){i.DOM.aside.wrapper.classList.remove("memory_clicked")},i.CONST.TIME_LONG),setTimeout(function(){i.DOM.aside.wrapper.classList.add("history_clicked")},i.CONST.TIME_SHORT+i.CONST.TIME_LONG),setTimeout(function(){i.DOM.aside.wrapper.classList.add("history_shown")},i.CONST.TIME_SHORT+2*i.CONST.TIME_LONG),setTimeout(function(){s.isChanging=!1},i.CONST.TIME_SHORT+2*i.CONST.TIME_LONG))}},init:function(){i.DOM.aside.historyTab.addEventListener("click",function(){"memory"===s.current&&e.show.history()}),i.DOM.aside.memoryTab.addEventListener("click",function(){"history"===s.current&&e.show.memory()})}};e.init();
},{"./_config.js":"epnb"}],"PHJk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={isOperator:function(e){return"+"===e||"-"===e||"*"===e||"/"===e||"="===e},isNumber:function(e){return!isNaN(e)},filterNum:function(e){return"."===String(e)[e.length-1]?String(e).slice(0,e.length-1):String(e)}},t=e;exports.default=t;
},{}],"jNwU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=require("./_config.js");function t(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=r(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var a=0,i=function(){};return{s:i,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,u=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return l=n.done,n},e:function(n){u=!0,o=n},f:function(){try{l||null==e.return||e.return()}finally{if(u)throw o}}}}function r(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var a={_disable:function(n){n.disabled=!0},_able:function(n){n.disabled=!1},_toggle:function(n){n.disabled?a._able(n):a._disable(n)},main:{_errorBtns:[n.DOM.mainBtn.toggleSign,n.DOM.mainBtn.percent,n.DOM.mainBtn.fraction,n.DOM.mainBtn.square,n.DOM.mainBtn.squareRoot,n.DOM.mainBtn.divide,n.DOM.mainBtn.multiply,n.DOM.mainBtn.minus,n.DOM.mainBtn.plus,n.DOM.mainBtn.dot],disableError:function(){var n,r=t(this._errorBtns);try{for(r.s();!(n=r.n()).done;){var e=n.value;a._disable(e)}}catch(i){r.e(i)}finally{r.f()}},enableError:function(){var n,r=t(this._errorBtns);try{for(r.s();!(n=r.n()).done;){var e=n.value;a._able(e)}}catch(i){r.e(i)}finally{r.f()}},disableAll:function(){for(var t in n.DOM.mainBtn)a._disable(n.DOM.mainBtn[t])},enableAll:function(){for(var t in n.DOM.mainBtn)a._able(n.DOM.mainBtn[t])}}},i=a;exports.default=i;
},{"./_config.js":"epnb"}],"l0Mx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./_config.js"),t=r(require("./btnStatus"));function r(e){return e&&e.__esModule?e:{default:e}}var i="",n={message:{show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unknown Error";e.DOM.error.text.innerText=t,e.DOM.body.classList.add("error")},hide:function(){e.DOM.body.classList.remove("error")}},_handlers:{release:function(){t.default.main.enableAll(),n.message.hide()},divideByZero:function(){t.default.main.disableError(),n.message.show("Can't divide with 0.")},misorderDataList:function(){t.default.main.disableError(),n.message.show("Misorder in operation list.")},cannotReplaceRecentItem:function(){t.default.main.disableError(),n.message.show("Can't replace different type of item.")},cannotPutItemNextToSameType:function(){t.default.main.disableError(),n.message.show("Can't put item next to the same type.")}},isError:function(){return""!==i},set:function(e){i=e},release:function(){this.set("")},check:function(){this.isError()?(e.DOM.text.main.value="Error",this._handlers[i]()):(this.release(),this._handlers.release())},init:function(){e.DOM.error.closeBtn.addEventListener("click",this.message.hide),e.DOM.nav.button.addEventListener("click",this.message.hide)}};n.init();var s=n;exports.default=s;
},{"./_config.js":"epnb","./btnStatus":"jNwU"}],"ek52":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dataFunc=exports.dataItem=exports.dataList=void 0;var t=r(require("./helper")),e=r(require("./errorHandle"));function r(t){return t&&t.__esModule?t:{default:t}}var a=[];exports.dataList=a;var n="0";exports.dataItem=n;var i={_operate:function(t,r,a){var n=function(t){return-1!==String(t).indexOf(".")?String(t).length-String(t).indexOf(".")-1:0};try{if("/"===r&&0===Number(a))throw"divideByZero"}catch(d){e.default.set(d)}var i=n(t),o=n(a),u=0,s=0;if("+"===r||"-"===r){s=i>o?i:o;var p=t*Math.pow(10,s),c=a*Math.pow(10,s);"+"===r&&(u=p+c),"-"===r&&(u=p-c)}if("*"===r||"/"===r){var f=t*Math.pow(10,i),l=a*Math.pow(10,o);"*"===r?(u=f*l,s=i+o):(u=f/l,s=i-o)}return u/=Math.pow(10,s),Number(u)},list:{isEmpty:function(){return!a.length},reset:function(){a.splice(0,a.length)},backspace:function(){a.pop()},input:function(r){if(a.length){try{if(t.default.isOperator(r)&&t.default.isOperator(a[a.length-1]))throw"cannotPutItemNextToSameType";if(t.default.isNumber(r)&&t.default.isNumber(a[a.length-1]))throw"cannotPutItemNextToSameType"}catch(n){e.default.set(n)}a.push(r)}else a.push(r)},replaceRecent:function(r){if(a.length){var n=a[a.length-1];try{if(t.default.isOperator(r)&&t.default.isNumber(n))throw"cannotRelaceRecentItem";if(t.default.isNumber(r)&&t.default.isOperator(n))throw"cannotRelaceRecentItem"}catch(o){e.default.set(o)}i.list.backspace(),i.list.input(r)}else i.list.input(r)},calculate:function(){if(!a.length)return 0;if(a.length<=2)return a[0];var r=0;try{if(t.default.isOperator(a[0]))throw"misorderedDataList";r=Number(a[0]);for(var n=1;n<a.length-1;n+=2){if(!t.default.isOperator(a[n])||!t.default.isNumber(a[n+1]))throw"misorderedDataList";r=i._operate(r,a[n],Number(a[n+1]))}}catch(o){e.default.set(o)}return String(r)}},item:{reset:function(){exports.dataItem=n="0"},backspace:function(){exports.dataItem=n=n.slice(0,n.length-1)},replace:function(t){exports.dataItem=n=t},input:function(t){exports.dataItem=n+=t},toggleSign:function(){exports.dataItem=n*=-1,exports.dataItem=n=String(n)},fraction:function(){exports.dataItem=n=String(i._operate(1,"/",Number(n)))},square:function(){exports.dataItem=n=String(i._operate(Number(n),"*",Number(n)))},squareRoot:function(){exports.dataItem=n=String(Math.pow(Number(n),.5))},percent:function(t,e){var r=i._operate(Number(t),"/",100);return String(i._operate(r,"*",Number(e)))}}};exports.dataFunc=i;
},{"./helper":"PHJk","./errorHandle":"l0Mx"}],"H8is":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.btnHistoryFunc=exports.historyFunc=exports.history=void 0;var t=require("./_config"),n={recentInput:"",recentResult:"",recentButton:null,recentOperator:"="};exports.history=n;var e={reset:function(){n.recentInput="",n.recentResult="",r.update(null),n.recentOperator="="}};exports.historyFunc=e;var r={update:function(t){n.recentButton=t},isNum:function(){for(var e=0;e<10;e++)if(n.recentButton===t.DOM.mainBtn["num".concat(e)])return!0;return!1},isOperator:function(){return n.recentButton===t.DOM.mainBtn.plus||(n.recentButton===t.DOM.mainBtn.minus||(n.recentButton===t.DOM.mainBtn.multiply||n.recentButton===t.DOM.mainBtn.divide))},isEqual:function(){return n.recentButton===t.DOM.mainBtn.equal},isDot:function(){return n.recentButton===t.DOM.mainBtn.dot},isToggleSign:function(){return n.recentButton===t.DOM.mainBtn.toggleSign},isShortcut:function(){return n.recentButton===t.DOM.mainBtn.percent||(n.recentButton===t.DOM.mainBtn.fraction||(n.recentButton===t.DOM.mainBtn.square||n.recentButton===t.DOM.mainBtn.squareRoot))}};exports.btnHistoryFunc=r;
},{"./_config":"epnb"}],"YwAa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./_config.js"),e=require("./calculate.js"),a=u(require("./helper")),n=require("./history");function u(t){return t&&t.__esModule?t:{default:t}}var i={sub:{update:function(){t.DOM.text.sub.value="";for(var a=0;a<e.dataList.length;a++){var n="".concat(e.dataList[a]," ");t.DOM.text.sub.value+=n}" "===t.DOM.text.sub.value[t.DOM.text.sub.value.length-1]&&(t.DOM.text.sub.value=t.DOM.text.sub.value.slice(0,t.DOM.text.sub.value.length-1))},clear:function(){t.DOM.text.sub.value="",e.dataFunc.list.reset()},input:function(t){n.btnHistoryFunc.isShortcut()||n.btnHistoryFunc.isToggleSign()?e.dataFunc.list.input(t):n.btnHistoryFunc.isOperator()?e.dataFunc.list.replaceRecent(t):n.btnHistoryFunc.isEqual()?(e.dataFunc.list.reset(),e.dataFunc.list.input(n.history.recentResult),e.dataFunc.list.input(t)):(e.dataFunc.list.input(a.default.filterNum(e.dataItem)),e.dataFunc.list.input(t)),n.history.recentOperator=t,n.history.recentInput=e.dataItem},preCalculate:function(){var t;t=e.dataFunc.list.calculate(),i.main.replace(t),n.history.recentResult=String(t)},calculate:function(){n.btnHistoryFunc.isShortcut()||n.btnHistoryFunc.isToggleSign()?e.dataFunc.list.input("="):n.btnHistoryFunc.isOperator()?(e.dataFunc.list.input(i.main.get()),n.history.recentInput=i.main.get(),e.dataFunc.list.input("=")):n.btnHistoryFunc.isEqual()?(i.sub.clear(),e.dataFunc.list.input(n.history.recentResult),e.dataFunc.list.input(n.history.recentOperator),"="!==n.history.recentOperator&&(e.dataFunc.list.input(n.history.recentInput),e.dataFunc.list.input("="))):("="===n.history.recentOperator?(e.dataFunc.list.input(a.default.filterNum(e.dataItem)),n.history.recentInput=a.default.filterNum(e.dataItem)):e.dataFunc.list.isEmpty()?(e.dataFunc.list.input(a.default.filterNum(e.dataItem)),e.dataFunc.list.input(n.history.recentOperator),e.dataFunc.list.input(n.history.recentInput)):(e.dataFunc.list.input(a.default.filterNum(e.dataItem)),n.history.recentInput=a.default.filterNum(e.dataItem)),e.dataFunc.list.input("="));var t;t=e.dataFunc.list.calculate(),i.main.replace(t),n.history.recentResult=String(t)}},main:{get:function(){return a.default.filterNum(t.DOM.text.main.value)},update:function(){t.DOM.text.main.value=e.dataItem},replace:function(e){t.DOM.text.main.value=e},clear:function(){n.btnHistoryFunc.isEqual()&&i.sub.clear(),t.DOM.text.main.value="0",e.dataFunc.item.replace("0")},backspace:function(){if(!n.btnHistoryFunc.isOperator()&&"0"!==e.dataItem)return n.btnHistoryFunc.isEqual()?(i.sub.clear(),void e.dataFunc.item.replace(n.history.recentResult)):void(1===e.dataItem.length?i.main.clear():e.dataFunc.item.backspace())},input:function(t){if("0"!==t||"0"!==e.dataItem){if("."===t&&e.dataItem.includes(".")){if(!n.btnHistoryFunc.isOperator()&&!n.btnHistoryFunc.isEqual())return;e.dataFunc.item.replace("0.")}n.btnHistoryFunc.isShortcut()||n.btnHistoryFunc.isToggleSign()?(e.dataFunc.list.backspace(),"."===t?e.dataFunc.item.replace("0."):e.dataFunc.item.replace(t)):n.btnHistoryFunc.isOperator()||"0"===e.dataItem?"."===t?e.dataFunc.item.replace("0."):e.dataFunc.item.replace(t):n.btnHistoryFunc.isEqual()?(i.sub.clear(),"."===t?e.dataFunc.item.replace("0."):e.dataFunc.item.replace(t)):e.dataFunc.item.input(t)}},shortcut:{_template:function(t){n.btnHistoryFunc.isEqual()&&(i.sub.clear(),e.dataFunc.item.replace(n.history.recentInput)),t(),n.btnHistoryFunc.isShortcut()||n.btnHistoryFunc.isToggleSign()||"="===n.history.recentOperator?e.dataFunc.list.replaceRecent(a.default.filterNum(e.dataItem)):(e.dataFunc.list.input(a.default.filterNum(e.dataItem)),n.history.recentInput=a.default.filterNum(e.dataItem))},toggleSign:function(){i.main.shortcut._template(function(){e.dataFunc.item.toggleSign()})},percent:function(){"0"===e.dataItem&&e.dataFunc.item.replace("0"),i.main.shortcut._template(function(){e.dataFunc.item.replace(e.dataFunc.item.percent(e.dataItem,n.history.recentResult))})},fraction:function(){i.main.shortcut._template(function(){e.dataFunc.item.fraction()})},square:function(){i.main.shortcut._template(function(){e.dataFunc.item.square()})},squareRoot:function(){i.main.shortcut._template(function(){e.dataFunc.item.squareRoot()})}}}},c=i;exports.default=c;
},{"./_config.js":"epnb","./calculate.js":"ek52","./helper":"PHJk","./history":"H8is"}],"FdOE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mainNumBtnFunc=void 0;var e=require("./_config.js"),t=i(require("./text")),n=require("./history"),u=i(require("./errorHandle"));function i(e){return e&&e.__esModule?e:{default:e}}var r={event:function(i){u.default.isError()&&(u.default.release(),t.default.main.clear(),t.default.sub.clear(),n.historyFunc.reset()),t.default.main.input(String(i)),t.default.main.update(),t.default.sub.update(),"."===i?n.btnHistoryFunc.update(e.DOM.mainBtn.dot):n.btnHistoryFunc.update(e.DOM.mainBtn["num".concat(i)]),u.default.check()},init:function(){for(var t=function(t){e.DOM.mainBtn["num".concat(t)].addEventListener("click",function(e){r.event(t)})},n=0;n<10;n++)t(n);e.DOM.mainBtn.dot.addEventListener("click",function(){r.event(".")})}};exports.mainNumBtnFunc=r,r.init();
},{"./_config.js":"epnb","./text":"YwAa","./history":"H8is","./errorHandle":"l0Mx"}],"eQhQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mainCtrlBtnFunc=void 0;var e=require("./_config.js"),a=c(require("./text")),r=require("./history"),t=c(require("./errorHandle"));function c(e){return e&&e.__esModule?e:{default:e}}var n={clearEntry:function(){t.default.isError()?(t.default.release(),a.default.main.clear(),a.default.sub.clear(),r.historyFunc.reset()):a.default.main.clear(),t.default.check()},clear:function(){t.default.isError()&&t.default.release(),a.default.main.clear(),a.default.sub.clear(),r.historyFunc.reset(),t.default.check()},backspace:function(){t.default.isError()?(t.default.release(),a.default.main.clear(),a.default.sub.clear(),r.historyFunc.reset()):(a.default.main.backspace(),a.default.main.update()),t.default.check()},init:function(){e.DOM.mainBtn.clearEntry.addEventListener("click",n.clearEntry),e.DOM.mainBtn.clear.addEventListener("click",n.clear),e.DOM.mainBtn.backspace.addEventListener("click",n.backspace)}};exports.mainCtrlBtnFunc=n,n.init();
},{"./_config.js":"epnb","./text":"YwAa","./history":"H8is","./errorHandle":"l0Mx"}],"FcK6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mainOperatorBtnFunc=void 0;var t=require("./_config.js"),e=a(require("./text")),n=require("./history"),u=a(require("./errorHandle"));function a(t){return t&&t.__esModule?t:{default:t}}var i={operator:function(a){e.default.sub.input(a),e.default.sub.preCalculate(),e.default.sub.update(),"+"===a&&n.btnHistoryFunc.update(t.DOM.mainBtn.plus),"-"===a&&n.btnHistoryFunc.update(t.DOM.mainBtn.minus),"*"===a&&n.btnHistoryFunc.update(t.DOM.mainBtn.multiply),"/"===a&&n.btnHistoryFunc.update(t.DOM.mainBtn.divide),u.default.check()},equal:function(){u.default.isError()?(u.default.release(),e.default.main.clear(),e.default.sub.clear(),n.historyFunc.reset(),e.default.sub.update()):(e.default.sub.calculate(),e.default.sub.update(),n.btnHistoryFunc.update(t.DOM.mainBtn.equal)),u.default.check()},init:function(){t.DOM.mainBtn.plus.addEventListener("click",function(){i.operator("+")}),t.DOM.mainBtn.minus.addEventListener("click",function(){i.operator("-")}),t.DOM.mainBtn.multiply.addEventListener("click",function(){i.operator("*")}),t.DOM.mainBtn.divide.addEventListener("click",function(){i.operator("/")}),t.DOM.mainBtn.equal.addEventListener("click",i.equal)}};exports.mainOperatorBtnFunc=i,i.init();
},{"./_config.js":"epnb","./text":"YwAa","./history":"H8is","./errorHandle":"l0Mx"}],"Imke":[function(require,module,exports) {
"use strict";var t=require("./_config.js"),e=u(require("./text")),n=require("./history"),a=u(require("./errorHandle"));function u(t){return t&&t.__esModule?t:{default:t}}var i={toggleSign:function(){e.default.main.shortcut.toggleSign(),e.default.main.update(),e.default.sub.update(),n.btnHistoryFunc.update(t.DOM.mainBtn.toggleSign)},percent:function(){e.default.main.shortcut.percent(),e.default.main.update(),e.default.sub.update(),n.btnHistoryFunc.update(t.DOM.mainBtn.percent)},fraction:function(){e.default.main.shortcut.fraction(),e.default.main.update(),e.default.sub.update(),a.default.check(),n.btnHistoryFunc.update(t.DOM.mainBtn.fraction)},square:function(){e.default.main.shortcut.square(),e.default.main.update(),e.default.sub.update(),n.btnHistoryFunc.update(t.DOM.mainBtn.square)},squareRoot:function(){e.default.main.shortcut.squareRoot(),e.default.main.update(),e.default.sub.update(),n.btnHistoryFunc.update(t.DOM.mainBtn.squareRoot)},init:function(){t.DOM.mainBtn.toggleSign.addEventListener("click",i.toggleSign),t.DOM.mainBtn.percent.addEventListener("click",i.percent),t.DOM.mainBtn.fraction.addEventListener("click",i.fraction),t.DOM.mainBtn.square.addEventListener("click",i.square),t.DOM.mainBtn.squareRoot.addEventListener("click",i.squareRoot)}};i.init();
},{"./_config.js":"epnb","./text":"YwAa","./history":"H8is","./errorHandle":"l0Mx"}],"D3DA":[function(require,module,exports) {
"use strict";var n=require("./_config.js"),e=require("./mainNumBtn"),t=require("./mainCtrlBtn"),a=require("./mainOperatorBtn"),r=i(require("./helper.js"));function i(n){return n&&n.__esModule?n:{default:n}}var u={_handler:function(e,t){t.disabled||(e(),t.classList.add("pressed"),setTimeout(function(){t.classList.remove("pressed")},n.CONST.TIME_SHORT))},_keydown:function(i){r.default.isNumber(i.key)&&u._handler(function(){e.mainNumBtnFunc.event(i.key)},n.DOM.mainBtn["num".concat(i.key)]),"."===i.key&&u._handler(function(){e.mainNumBtnFunc.event(".")},n.DOM.mainBtn.dot),"Backspace"===i.key&&u._handler(function(){t.mainCtrlBtnFunc.backspace()},n.DOM.mainBtn.backspace),"Escape"===i.key&&u._handler(function(){t.mainCtrlBtnFunc.clear()},n.DOM.mainBtn.clear),"+"===i.key&&u._handler(function(){a.mainOperatorBtnFunc.operator("+")},n.DOM.mainBtn.plus),"-"===i.key&&u._handler(function(){a.mainOperatorBtnFunc.operator("-")},n.DOM.mainBtn.minus),"*"===i.key&&u._handler(function(){a.mainOperatorBtnFunc.operator("*")},n.DOM.mainBtn.multiply),"/"===i.key&&u._handler(function(){a.mainOperatorBtnFunc.operator("/")},n.DOM.mainBtn.divide),"="!==i.key&&"Enter"!==i.key||(i.preventDefault(),u._handler(function(){a.mainOperatorBtnFunc.equal()},n.DOM.mainBtn.equal))},init:function(){document.addEventListener("keydown",function(n){u._keydown(n)})}};u.init();
},{"./_config.js":"epnb","./mainNumBtn":"FdOE","./mainCtrlBtn":"eQhQ","./mainOperatorBtn":"FcK6","./helper.js":"PHJk"}],"mahc":[function(require,module,exports) {
"use strict";require("./../scss/index.scss"),require("./nav"),require("./navcontent"),require("./aside"),require("./mainNumBtn"),require("./mainCtrlBtn"),require("./mainOperatorBtn"),require("./mainShortcutBtn"),require("./keydown");
},{"./../scss/index.scss":"HYMH","./nav":"nfFM","./navcontent":"kkm1","./aside":"rbaR","./mainNumBtn":"FdOE","./mainCtrlBtn":"eQhQ","./mainOperatorBtn":"FcK6","./mainShortcutBtn":"Imke","./keydown":"D3DA"}]},{},["mahc"], null)
//# sourceMappingURL=/Nyong-calculator/js.826d6203.js.map