( function(){
    'use strict';
    console.log('running js');

    const form = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    form.addEventListener('submit', function(event){

        event.preventDefault();

        const name = document.querySelector('#name').value;
        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;
        const exclamation = document.querySelector('#exclamation').value;
        const noun = document.querySelector('#noun').value;
        const verb = document.querySelector('#verb').value;

        let myText;

        if (name == ''){
            myText = 'Uh oh! Santa needs your name on the list!';
            document.querySelector('#name').focus();
        }
        else if (adj1 == ''){
            myText = 'Please enter an adjective'
        }
    
    });
        

} )();