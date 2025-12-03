let firstTime = 1
setInterval(() => {
setWidth()
},1000);
let clickedIcon = 1
setInterval(() => {
  clickedIcon = localStorage.getItem("icon")
  }, 100);
  

var device = localStorage.getItem("device");


function setWidth() {
  document.documentElement.style.setProperty('--height', Math.round(globalThis.outerHeight/15));
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


slider.addEventListener("input", function() {
    rows = slider.value
    localStorage.setItem("rows", rows);
    setWidth()
});


var settings = 1
function settingas(){
  settings = 1 - settings
  if(settings == 1){
    document.documentElement.style.setProperty("--settingsA",1)
    document.documentElement.style.setProperty("--settingsB","all")
  }else{
    document.documentElement.style.setProperty("--settingsA",0)
    document.documentElement.style.setProperty("--settingsB","none")
  }
}
settingas()

function destroyDefault(){
  for (let index = 1; index < 9; index++) {
    document.getElementById(index+'link').remove()
  }
}
const CstLnk = localStorage.getItem('CstLnk')
const CustomLinksList = CstLnk ? JSON.parse(CstLnk):[]

const Links = CustomLinksList;
console.log(Links)
const abababa = localStorage.getItem('iscustom')
function destroyCustom(){
  if (abababa == 1) {
    for (let index = 1; index < Links.length; index++) {
      document.getElementById(index+'link').remove()
    }
  } else {
    for (let index = 1; index < Links.length+1; index++) {
      document.getElementById(index+'link').remove()
    }
  }
}

const siteNames = [
  "Youtube",
  "Discord",
  "Scratch",
  "Classroom",
  "Roblox",
  "Translator",
  "Chess",
  "Telegram"
]
const deflinks = [
  { href: "https://www.youtube.com/", icon: "fab fa-youtube", name: "YouTube" },
  { href: "https://discord.com/app", icon: "fab fa-discord", name: "Discord" },
  { href: "https://scratch.mit.edu/", icon: "fas fa-cat", name: "Scratch" },
  { href: "https://classroom.google.com/", icon: "fas fa-chalkboard-teacher", name: "Classroom" },
  { href: "https://www.roblox.com/home", icon: "fas fa-gamepad", name: "Roblox" },
  { href: "https://translate.google.com/?hl=ru", icon: "fas fa-language", name: "Translator" },
  { href: "https://chess.com/", icon: "fas fa-chess-pawn", name: "Chess" },
  { href: "https://web.telegram.org/k/", icon: "fab fa-telegram", name: "Telegram" }
];

function GetCustom(){
  const btn = document.getElementById("btn");
  Links.forEach((link, index) => {
    const iconDiv = document.createElement('a'); // Create an <a> element
    iconDiv.href = link.href; // Set the href attribute
    iconDiv.className = `icon${index + 1}`; // Set dynamic class (icon1, icon2, etc.)
    iconDiv.id = `${index + 1}link`; // Set dynamic id (link1, link2, etc.)
    iconDiv.innerHTML = `
      <i class="${link.icon}"></i><br>${link.name}`;
    btn.appendChild(iconDiv);
  });
}
  GetCustom()

function GetDefault() {
  const btn = document.getElementById("btn");
  destroyCustom()

  deflinks.forEach((link, index) => {
    const iconDiv = document.createElement('a'); // Create an <a> element
    iconDiv.href = link.href; // Set the href attribute
    iconDiv.className = `icon${index + 1}`; // Set dynamic class (icon1, icon2, etc.)
    iconDiv.id = `${index + 1}link`; // Set dynamic id (link1, link2, etc.)
    iconDiv.innerHTML = `
      <i class="${link.icon}"></i><br>${link.name}`;
    btn.appendChild(iconDiv);
  });
}

var custom = document.getElementById('custom')
const myass = localStorage.getItem('iscustom')
if (myass == 1) {
  custom.checked = true
  custom1()
} else {
  custom.checked = false
  custom1()
}

function custom1(){
  if(custom.checked){
    localStorage.setItem('iscustom', 1)
    checkbababa()
  }else{
    localStorage.setItem('iscustom', 0)
    checkbababa()
  }
}

function checkbababa(){
const abababa = localStorage.getItem('iscustom')
if (abababa == 1) {
  destroyDefault()
  document.documentElement.style.setProperty("--pe","all")
  document.documentElement.style.setProperty("--opac","1")
}else{
  if (firstTime == 1) {
    destroyDefault();
    firstTime = 0;
  }
  GetDefault()
  document.documentElement.style.setProperty("--pe","none")
  document.documentElement.style.setProperty("--opac","0")
}
}


custom.addEventListener("input", function(){
  location.reload()
  custom1()
})

var square = 0
const squarelink = document.getElementById('sqrl')
squarelink.addEventListener("input", function(){
  square = 1 - square
})


document.addEventListener("DOMContentLoaded", () => {
window.AddCustom = AddCustom;
})

function AddCustom(){
  let clink = 0;
  let cname = 0;

  const linkBox = document.getElementById('httpInput');
  const nameBox = document.getElementById('NameInput');
  console.log(linkBox)
  console.log(nameBox)

  cname = nameBox.value;
  clink = linkBox.value;
      Links.push({ href: clink, icon: clickedIcon, name: cname },);
      localStorage.setItem('CstLnk',JSON.stringify(Links))
      destroyCustom();
      GetCustom();}
