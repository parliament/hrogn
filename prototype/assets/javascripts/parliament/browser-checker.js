PARLIAMENT.BrowserChecker = function() {

}

PARLIAMENT.BrowserChecker.checkBrowser = function() {
  
  var ua = window.navigator.userAgent.toLowerCase();

  var className, doc, ieVersionRE, ieVersionRE2, match, stringsToClassDictionary, testUA, v, _i, _len;
  ieVersionRE = /msie (\d+)/;
  ieVersionRE2 = /rv:(\d+)/;
  match = void 0;
  doc = $(document.documentElement);

  if (ua.indexOf("msie") > -1 || ua.indexOf("windows") > -1 && ua.indexOf("firefox") === -1 && ua.indexOf("chrome") === -1) {
    doc.addClass("ie");
    match = ua.match(ieVersionRE) || ua.match(ieVersionRE2);

    if (match) {
      v = match[1];
      if (v >= 9) {
        doc.addClass("ie" + v);
      } else {
        if (v < 9) {
          doc.addClass("lt-ie9");
        }
      }
    }
  }

  stringsToClassDictionary = [
    {
      label: "chrome"
    }, {
      label: "nexus"
    }, {
      label: "windows"
    }, {
      label: "firefox"
    }, {
      label: "mobile"
    }, {
      label: "phone"
    }, {
      label: "iphone"
    }, {
      label: "ipad"
    }, {
      label: "applewebkit",
      className: "ios"
    }, {
      label: "mac os x",
      className: "mac"
    }
  ];

  for (_i = 0, _len = stringsToClassDictionary.length; _i < _len; _i++) {
    testUA = stringsToClassDictionary[_i];
    if (ua.indexOf(testUA.label) > -1) {
      className = testUA.className ? testUA.className : testUA.label;
      if (this.logOutput != null) {
        console.log(className);
      }
      doc.addClass(className);
    }
  }

  if (ua.indexOf("safari") > -1 && ua.indexOf("chrome") === -1) {
    doc.addClass("safari");
  }
};

PARLIAMENT.BrowserChecker.is = function(label) {
  var ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf(label) > -1;
};

PARLIAMENT.BrowserChecker.isIE = function() {
  var ie, ua = window.navigator.userAgent.toLowerCase();
  ie = (ua.indexOf("msie") > -1 || ua.indexOf("windows") > -1 && ua.indexOf("firefox") === -1 && ua.indexOf("chrome") === -1)
  return ie;
};

PARLIAMENT.BrowserChecker.isIE8 = function() {
  var ieVersionRE, ieVersionRE2, match, v, ua = window.navigator.userAgent.toLowerCase();
  ieVersionRE = /msie (\d+)/;
  ieVersionRE2 = /rv:(\d+)/;
  match = void 0;
  if (ua.indexOf("msie") > -1 || ua.indexOf("windows") > -1 && ua.indexOf("firefox") === -1 && ua.indexOf("chrome") === -1) {
    match = ua.match(ieVersionRE) || ua.match(ieVersionRE2);
    if (match) {
      v = parseInt(match[1]);
      if (v < 9) {
        return true;
      }
    }
  }
  return false;
};

PARLIAMENT.BrowserChecker.isIE9 = function() {
  var ieVersionRE, ieVersionRE2, match, v, ua = window.navigator.userAgent.toLowerCase();
  ieVersionRE = /msie (\d+)/;
  ieVersionRE2 = /rv:(\d+)/;
  match = void 0;
  if (ua.indexOf("msie") > -1 || ua.indexOf("windows") > -1 && ua.indexOf("firefox") === -1 && ua.indexOf("chrome") === -1) {
    match = ua.match(ieVersionRE) || ua.match(ieVersionRE2);
    if (match) {
      v = parseInt(match[1]);
      if (v === 9) {
        return true;
      }
    }
  }
  return false;
};

PARLIAMENT.BrowserChecker.isDevice = function() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  }
  return false;
};

$(function() {
  return PARLIAMENT.BrowserChecker.checkBrowser();
});
