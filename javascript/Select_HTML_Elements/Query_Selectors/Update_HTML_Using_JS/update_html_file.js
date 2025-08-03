console.log('JS Loaded');

var countdownElement = document.getElementById('countdown');
var bgImageElement = document.getElementById('bg-image');
console.log(bgImageElement);

var initialCountdownVal = countdownElement.innerHTML;
setInterval(function(){
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;
 countdownElement.innerHTML = initialCountdownVal;
 var backImgPath = initialCountdownVal % 2 === 0 ? '/image/background.jpg' : '/image/background-1.jpg'
}, 1000);
