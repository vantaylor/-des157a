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
        pageTop = window.pageYOffset + 300;
        //console.log(pageTop);

        //if the user is scrolling down the page
        if (pageTop > postTops[counter]) {
            counter++;
            console.log(`scrolling down ${counter}`);
        }
        //if the user is at the bottom and scrolls up the page
        else if (counter > 1 && pageTop < postTops[counter -1]) {
            counter--;
            console.log(`scrolling up ${counter}`);
        }
    })
})();