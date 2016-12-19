(function (global) {
  // Set up a namespace for our utility
  var ajaxUtils = {};

  // Returns an HTTP request object
  function getRequestObject() {
    if (global.XMLHttpRequest) {
      return (new XMLHttpRequest());
    } else if (global.ActiveXObject) {
      // For old IE browsers (optional)
      return (new ActiveXObject('Microsoft.XMLHTTP'));
    } else {
      global.alert('Ajax is not supported!');
      return(null);
    }
  }

  // Makes an Ajax GET request to requestUrl
  ajaxUtils.sendGetRequest = function (req, res, jsonRes) {
    var request = getRequestObject();
    request.onreadystatechange = function () {
      handleResponse(request, res, jsonRes);
    };

    request.open('GET', req, true);
    request.send(null); // For POST only
  }

  function handleResponse(req, res, jsonRes) {
    if ((req.readyState === 4) && (req.status === 200)) {
      // Default to jsonRes = true
      if (jsonRes === undefined) {
        jsonRes = true;
      }

      if (jsonRes) {
        res(JSON.parse(req.responseText));
      } else {
        res(req.responseText);
      }
    }
  }

  // Expose utility to the global object
  global.$ajaxUtils = ajaxUtils;
})(window);
