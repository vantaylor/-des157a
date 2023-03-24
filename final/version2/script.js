( function(){
    'use strict';
    console.log('js running');

    /*define variables to activate pop-up modal*/
    const openBtns = document.querySelectorAll('.open');
    const closeBtns = document.querySelectorAll('.close');

    /*opens pop-up modal when user clicks on images*/
    for (const eachBtn of openBtns){
       eachBtn.addEventListener('click', function(evt){
            evt.preventDefault();
            const thisBtn = evt.target.id;
            document.getElementById(`pic-${thisBtn}`).className = 'overlay showing';
        });
    }

    /*deactivated modal and closes it when button is clicked*/
    for (const eachBtn of closeBtns){
        eachBtn.addEventListener('click', function(evt){
            evt.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }

} )();