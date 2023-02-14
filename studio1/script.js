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
        const petName = document.querySelector('#petName').value;
        const color = document.querySelector('#color').value;
        const bodyPart = document.querySelector('#body').value;
        const exclamation = document.querySelector('#exclamation').value;
        const noun = document.querySelector('#noun').value;
        const verb = document.querySelector('#verb').value;

        let myText;

        if (name == ''){
            myText = 'Uh oh! Santa needs your name on the list!';
            document.querySelector('#name').focus();
        }
        else if (adj1 == ''){
            myText = 'Please enter an adjective';
            document.querySelector('#adj1').value;
        }
        else if (petName == ''){
            myText = 'Please enter a funny pet name';
            document.querySelector('#petName').value;
        }
        else if (color == ''){
            myText = 'Please enter a color';
            document.querySelector('#color').value;
        }
        else if (bodyPart == ''){
            myText = 'Please enter a funny pet name';
            document.querySelector('#body').value;
        }
        else if (adj2 == ''){
            myText = 'Please enter an adjective';
            document.querySelector('#adj2').value;
        }
        else if (exclamation == ''){
            myText = 'Please enter an exclamation';
            document.querySelector('#exclamation').value;
        }
        else if (noun == ''){
            myText = 'Please enter a noun';
            document.querySelector('#noun').value;
        }
        else if (verb == ''){
            myText = 'Please enter a verb';
            document.querySelector('#verb').value;
        }
        else {
            myText = `Merry Christmas ${name}! Welcome to Santa's Top Secret Workshop. Oh you look ${adj1}! Did you happen to meet ${petName}, the ${color} ${bodyPart} Reindeer`;
        }
        

        madlib.innerHTML = myText;
    
    });
        

} )();