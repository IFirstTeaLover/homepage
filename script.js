let count = 0;
let clickPower = 1;
let upg1cost = 10;
let upg2cost = 25;
let persec = 0;
let upg3cost = 100;
let upg4cost = 250;

function increment() {//changing var on click
    count+=clickPower;     document.getElementById('text').innerText = count;
}
function u1() {//upgrade 1 buying
  if(count >= upg1cost){
    count-=upg1cost;
    clickPower++
    upg1cost = Math.round(upg1cost*1.1)
    document.getElementById('text').innerText = count;
    document.getElementById('upg1').innerText = "Better click    Cost="+upg1cost;}}

        function u2() {//upgrade 2 buying
  if(count >= upg2cost){
    count-=upg2cost;
    persec++
    upg2cost = Math.round(upg2cost*1.1)
    document.getElementById('text').innerText = count;
    document.getElementById('upg2').innerText = "Passive income    Cost="+upg2cost;

    }}

    function u3() {//upgrade 3 buying
  if(count >= upg3cost){
    count-=upg3cost;
    clickPower+=10
    upg3cost = Math.round(upg3cost*1.1)
    document.getElementById('text').innerText = count;
    document.getElementById('upg3').innerText = "10 times better click    Cost="+upg3cost;}}
    
  function u4() {//upgrade 4 buying
    if(count >= upg4cost){
      count-=upg4cost;
      persec+=10
      upg4cost = Math.round(upg4cost*1.1)
      document.getElementById('text').innerText = count;
      document.getElementById('upg4').innerText = "10 times better passive income    Cost="+upg4cost;}}

      setInterval(() => {//setting width for buttons and adding persecond value
        count = count+persec;
        document.getElementById('text').innerText = count;
        setWidth()
      },1000);

      function setWidth() {
        document.documentElement.style.setProperty('--width', Math.round(globalThis.outerWidth/6.7));// if more links then change that
        document.documentElement.style.setProperty('--upgradewidth', Math.round(globalThis.outerWidth));}// if more upgrades then change that
