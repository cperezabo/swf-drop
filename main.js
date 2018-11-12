function disableGlobalListeners() {
  window.addEventListener("dragover", function (e) {
    e = e || event;
    e.preventDefault();
  }, false);
  window.addEventListener("drop", function (e) {
    e = e || event;
    e.preventDefault();
  }, false);
}

function onDrop(event) {
  var _URL = window.URL || window.webkitURL;
  var file = event.dataTransfer.items[0].getAsFile();
  document.querySelector('embed').src = _URL.createObjectURL(file);
  document.querySelector('.message').style.display = 'none';
}

function checkNavigator() {
  if (navigator.userAgent.indexOf('Chrome') === -1) {
    window.alert('Está página funciona únicamente en Chrome');
    window.location.href = 'https://google.com.ar/chrome';
  }
}

function setMessage() {
  if (navigator.mimeTypes['application/x-shockwave-flash']) {
    document.querySelector('.flash-enabled').style.display = 'block';
  } else {
    document.querySelector('.flash-disabled').style.display = 'block';
  }
}

// -------

disableGlobalListeners();
checkNavigator();

window.onload = function () {
  setMessage();
};
