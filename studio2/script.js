( function(){
    window.addEventListener('load', function () {

        //variables here
        const posts = document.querySelectorAll('section');
        let postTops = [];
        let pageTop;
        let counter = 1;
        let prevCounter = 1;
        let doneResizing;
    

        resetPagePosition();
    
        /* Event handler is run when user scrolls up and down page*/
        window.addEventListener('scroll', function () {
            pageTop = window.pageYOffset + 300;
            //console.log(pagetop);
    
            // if the user is scrolling down
            if (pageTop > postTops[counter]) {
                counter++;
                console.log(`scrolling down ${counter}`);
            }
            // if the user is at the bottom of page and scrolls up, reposition to previous
            else if (counter > 1 && pageTop < postTops[counter - 1]) {
                counter--;
                console.log(`scrolling up ${counter}`);
            }
    
            // when the section changes
            if (counter != prevCounter) {
                // changes the class name on the image, which activates animation...
                document.querySelector('figure img').className = 'product' + counter;
                prevCounter = counter;
            }
    
        }); // end window scroll function
    
        // this event handler runs while the window size changes
        window.addEventListener('resize', function () {
    
            clearTimeout(doneResizing);
            // this runs after the window has stopped being resized
            doneResizing = setTimeout(function () {
    
                resetPagePosition();
    
            }, 500);
        });
    
        // this function resets variables, which may have changed based on resizing
        function resetPagePosition() {
            postTops = [];
            posts.forEach(function (post) {
                postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
            });
    
            const pagePosition = window.pageYOffset + 300;
            counter = 0;
    
            postTops.forEach(function (post) { if (pagePosition > post) { counter++; } });
    
        }
    
    }); // end window load function
} )();