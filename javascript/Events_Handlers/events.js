var btn = document.getElementById("btn-click");
var mainbody = document.querySelector("body");
console.log(mainbody);

// function onBtnClick(){

//      alert("Button Clicked");
// }
function onBtnClick(){
    // var randomNum = Math.floor(Math.random() * 255);

//    alert(Math.floor(Math.random() * 255));
// alert("rgb("+Math.floor(Math.random() * 255)+","+ Math.floor(Math.random() * 255)
// +", "+Math.floor(Math.random() * 255) +")");
 
    //  mainButton.style.backgroundColor = "lightcoral"

    mainbody.style.backgroundColor = "rgb("+Math.floor(Math.random() * 255)+","+ Math.floor(Math.random() * 255)
+", "+Math.floor(Math.random() * 255) +")"
}





// btn.onclick = onBtnClick ();


// btn.addEventListener('click', function(){
//     alert('Anonymous Function Called');
// })


// btn.onclick = function() {
//     alert("Button Clicked");
// }

btn.addEventListener('click', onBtnClick);