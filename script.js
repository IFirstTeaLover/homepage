setInterval(() => {
setWidth()
},1000);

var device = localStorage.getItem("device");


function setWidth() {
  checkLoop()
  device = localStorage.getItem("device");
  document.documentElement.style.setProperty('--upgradewidth', Math.round(globalThis.outerWidth));
  if (device === 'mobile') {
    document.documentElement.style.setProperty('--width', Math.round(globalThis.outerWidth/0.45));
  } else {
    document.documentElement.style.setProperty('--width', Math.round(globalThis.outerWidth/6.7));
  }
}