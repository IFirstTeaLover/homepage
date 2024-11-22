setInterval(() => {
setWidth()
},1000);

var device = localStorage.getItem("device");
const userLanguage = navigator.language || navigator.userLanguage; // Fallback for older browsers
console.log("The user's language is:", userLanguage);

function setWidth() {
  checkLoop()
  device = localStorage.getItem("device");
  document.documentElement.style.setProperty('--upgradewidth', Math.round(globalThis.outerWidth));
  if (device === 'mobile') {
    document.documentElement.style.setProperty('--width', Math.round(globalThis.outerWidth/0.45));
  } else {
    document.documentElement.style.setProperty('--width', Math.round(globalThis.outerWidth/rows));
  }
}
const slider = document.getElementById('linksPerRow');
var rows = slider.value
slider.value = localStorage.getItem("rows");
rows = slider.value

// Обновляем значение в консоли при изменении положения слайдера
slider.addEventListener("input", function() {
    rows = slider.value
    localStorage.setItem("rows", rows);
    setWidth()
});
