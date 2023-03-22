( function(){
    'use strict';
    console.log('js running');
    
    const openBtns = document.querySelectorAll('.open');
    const closeBtns = document.querySelectorAll('.close');

    for (const eachBtn of openBtns){
       eachBtn.addEventListener('click', function(evt){
            evt.preventDefault();
            const thisBtn = evt.target.id;
            document.getElementById(`product-${thisBtn}`).className = 'overlay showing';
        });
    }

    for (const eachBtn of closeBtns){
        eachBtn.addEventListener('click', function(evt){
            evt.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }

} )();