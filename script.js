setInterval(() => {
setWidth()
},1000);

function setWidth() {
  document.documentElement.style.setProperty('--width', Math.round(globalThis.outerWidth/6.7));// if more links then change that
  document.documentElement.style.setProperty('--upgradewidth', Math.round(globalThis.outerWidth));}// if more upgrades then change that