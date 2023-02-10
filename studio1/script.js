( function(){
    'use strict';
    console.log('running js');

    const openBtns = getElementById('#send-form');

    for (const eachBtn of openBtns){
        eachBtn.addEventListener('click', function(event){
             event.preventDefault();
             const thisBtn = event.target.id;
             document.getElementById(`message${thisBtn}`).className = 'overlay showing';
         });
     }
    
} )();