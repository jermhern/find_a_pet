parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({12:[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,o){if("function"==typeof e&&e.amd)e(["exports","module"],o);else if("undefined"!=typeof exports&&"undefined"!=typeof module)o(exports,module);else{var n={exports:{}};o(n.exports,n),t.fetchJsonp=n.exports}}(this,function(e,t){"use strict";var o={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function n(e){try{delete window[e]}catch(t){window[e]=void 0}}function r(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=e,a=t.timeout||o.timeout,u=t.jsonpCallback||o.jsonpCallback,c=void 0;return new Promise(function(o,s){var l=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),d=u+"_"+l;window[l]=function(e){o({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),r(d),n(l)},i+=-1===i.indexOf("?")?"?":"&";var m=document.createElement("script");m.setAttribute("src",""+i+u+"="+l),t.charset&&m.setAttribute("charset",t.charset),m.id=d,document.getElementsByTagName("head")[0].appendChild(m),c=setTimeout(function(){s(new Error("JSONP request to "+e+" timed out")),n(l),r(d),window[l]=function(){n(l)}},a),m.onerror=function(){s(new Error("JSONP request to "+e+" failed")),n(l),r(d),c&&clearTimeout(c)}})}});
},{}],10:[function(require,module,exports) {
"use strict";function e(e){return/^\d{5}(-\d{4})?$/.test(e)}function t(e,t){var r=document.createElement("div");r.className="alert alert-"+t,r.appendChild(document.createTextNode(e));var o=document.querySelector(".container"),n=document.querySelector("#pet-form");o.insertBefore(r,n),setTimeout(function(){return document.querySelector(".alert").remove()},3e3)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isValidZip=e,exports.showAlert=t;
},{}],5:[function(require,module,exports) {
"use strict";var t=require("fetch-jsonp"),e=a(t),n=require("./validate");function a(t){return t&&t.__esModule?t:{default:t}}var c=document.querySelector("#pet-form");function l(t){t.preventDefault();var a=document.querySelector("#animal").value,c=document.querySelector("#zip").value;(0,n.isValidZip)(c)?(0,e.default)("http://api.petfinder.com/pet.find?format=json&key=8b1b71173dac030527a6ddc9b88192c4&animal="+a+"&location="+c+"&callback=callback",{jsonpCallbackFunction:"callback"}).then(function(t){return t.json()}).then(function(t){return i(t.petfinder.pets.pet)}).catch(function(t){return console.log(t)}):(0,n.showAlert)("please enter a valid zipcode!","danger")}function i(t){var e=document.querySelector("#results");e.innerHTML="",t.forEach(function(t){var n=document.createElement("div");n.classList.add("card","card-body","mb-3"),console.log(t),n.innerHTML=' \n\n\t\t<div class="row">\n\t\t\t<div class="col-sm-6">\n\t\t\t\t<h4>'+t.name.$t+" ("+t.age.$t+")</h4>\n\t\t\t\t"+(t.breeds.breed.$t?'<p class="text-secondary">'+t.breeds.breed.$t+"</p>":'<p class="text-secondary">No breed information available.</p>')+"\n\t\t\t\t"+(t.contact.address1.$t?"<p>"+t.contact.address1.$t+" "+t.contact.city.$t+" "+t.contact.state.$t+" "+t.contact.zip.$t+"</p>":"<p>No address information available.</p>")+'\n\t\t\t\t<ul class="list-group">\n\t\t\t\t\t<li class="list-group-item">Phone: '+t.contact.phone.$t+"</li>\n\t\t\t\t\t"+(t.contact.email.$t?'<li class="list-group-item">Email: '+t.contact.email.$t+"</li>":'<li class="list-group-item">No email availeble.</li>')+'\n\t\t\t\t\t<li class="list-group-item">Shelter ID: '+t.shelterId.$t+'</li>\n\t\t\t\t</ul>\n\t\t\t\t<p class="text-secondary m-3">'+t.description.$t+'</p>\n\t\t\t</div>\n\n\t\t\t<div class="col-sm-6 text-center">\n\t\t\t\t<img class="img-fluid rounded-circle mt-2" src="'+t.media.photos.photo[3].$t+'">\n\t\t\t</div>\n\t\t</div>\n\n\t\t',e.appendChild(n)})}c.addEventListener("submit",l);
},{"fetch-jsonp":12,"./validate":10}]},{},[5], null)
//# sourceMappingURL=/main.70bb6edf.map