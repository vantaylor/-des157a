(function(){
    'use strict';
    console.log('reading js');

    //variables here...
    const posts = document.querySelectorAll('section')
    let postTops = [];
    let pageTop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;

    resetPagePosition();

    window.addEventListener('scroll', function() {
        pageTop = window.pageYOffset 
    })
})();