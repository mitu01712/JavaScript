var countdownElement = document.getElementById("countdown");
var bgImage = document.getElementById("bg-image");
var initialCountdownVal = countdownElement.innerHTML;


 var interval = setInterval(function() {
    // initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal -1 : 0;
     initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal -1 : 10;
    // countdownElement.innerHTML = initialCountdownVal -= 1;
    countdownElement.innerHTML = initialCountdownVal ;
    countdownElement.style.fontSize =initialCountdownVal *100 + "px"
    console.log(initialCountdownVal* 100 + "px");
    bgImage.style.width = initialCountdownVal * 10 + "%"

   
    if(initialCountdownVal <=0){
         clearInterval(interval);

    }
 }, 1000);