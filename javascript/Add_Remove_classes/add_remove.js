var mainHeading = document.getElementById("main-heading");

var btn = document.getElementById('btn-click');
var sidebar = document.getElementById('sidebar');

var toggleButton = document.getElementById('toggle-icons');

// console.log (mainHeading.classList);
mainHeading.classList.add('big');

 btn.addEventListener('click', function(){
     mainHeading.classList.remove('big') 
    });

toggleButton.addEventListener('click', function(){
    if(sidebar.classList.contains('show')){
      sidebar.classList.remove('show');
         sidebar.classList.add('hide');
    }else{
          sidebar.classList.remove('hide');
        sidebar.classList.add('show');
    }
 });

// setTimeout(function(){
//     mainHeading.classList.remove('big')

// }, 1500);

