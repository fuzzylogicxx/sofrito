;(function () {

  'use strict';

  if (!('fonts' in document)) return;

  var getCookie = function (name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  };

  // Speed up repeat visits
  if (getCookie('fontsLoaded')) {
    document.documentElement.className += ' fonts-loaded';
    return;
  }

  // Detect support for CSS font-display: swap
  // ref: https://css-tricks.com/font-display-masses/
  try {
    var e = document.createElement("style");
    e.textContent = "@font-face { font-display: swap; }";
    document.documentElement.appendChild(e);
    var isFontDisplaySupported = e.sheet.cssRules[0].cssText.indexOf("font-display") != -1;
    e.remove();
  } catch (e) {
    // Do something with an error if you want
  }

  // If font-display: swap not supported, handle FOIT with a custom solution.
  if (isFontDisplaySupported === false) {
    Promise.all([
      document.fonts.load("1em Source Sans Pro"),
      document.fonts.load("700 1em Source Sans Pro"),
      document.fonts.load("italic 1em Source Sans Pro"),
      //document.fonts.load("italic 700 1em Lato")
    ]).then(function () {
      document.documentElement.className += ' fonts-loaded';

      // Optimization for Repeat Views
      var expires = new Date(+new Date() + (7 * 24 * 60 * 60 * 1000)).toUTCString();
      document.cookie = 'fontsLoaded=true; expires=' + expires;
    });
  }

})();
