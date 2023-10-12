(function() {
  'use strict';

  // YOUR CODE HERE
  // declare btn var for each button
  const stopBtn = document.querySelector('#stopButton')
  const slowBtn = document.querySelector('#slowButton')
  const goBtn = document.querySelector('#goButton')

  // declare light var for each light
  let stopLight = document.querySelector('#stopLight')
  let slowLight = document.querySelector('#slowLight')
  let goLight = document.querySelector('#goLight')

  // add eventListener for on click to add/remove class name to stop to stopLight
  stopBtn.addEventListener('click', function(){
    stopLight.classList.toggle('stop')
    if (stopLight.classList.contains('stop')){
      console.log('StopLight on');
    } else {
      console.log('StopLight off')
    }
  })

  slowBtn.addEventListener('click', function(){
    slowLight.classList.toggle('slow')
    if (slowLight.classList.contains('slow')){
      console.log('SlowLight on');
    } else {
      console.log('Slowlight off')
    }
  })

  goBtn.addEventListener('click', function (){
    goLight.classList.toggle('go')
    if (goLight.classList.contains('go')){
      console.log('GoLight on');
    } else {
      console.log('GoLight off')
    }
  })

    // enters button and leaves button log 'Entered <textContent> button"

    // stopBtn.addEventListener('mouseenter', function(){
    //   console.log(`Entered Stop Button button`)
    // })
  
    // stopBtn.addEventListener('mouseleave', function(){
    //   console.log(`Left Stop Button button`)
    // })
  
    // slowBtn.addEventListener('mouseenter', function(){
    //   console.log(`Entered Slow Button button`)
    // })
  
    // slowBtn.addEventListener('mouseleave', function(){
    //   console.log(`Left Slow Button button`)
    // })
  
  
    // goBtn.addEventListener('mouseenter', function(){
    //   console.log(`Entered Go Button button`)
    // })
  
    // goBtn.addEventListener('mouseleave', function(){
    //   console.log(`Left Go Button button`)
    // })

    addEnterAndLeftListeners(stopBtn)
    addEnterAndLeftListeners(slowBtn)
    addEnterAndLeftListeners(goBtn)


})();


// function that adds event listeners 
function addEnterAndLeftListeners(button){
  let action = button.textContent;
  // 
  button.addEventListener('mouseenter', function(){
    console.log(`Entered ${action} button`)
  });
  button.addEventListener('mouseleave', function (){
    console.log(`Left ${action} button`)
  })

}
/* Steffan's code base

(function() {
  'use strict';
// YOUR CODE HERE

  //===============REFACTORED FINAL VERSION===============
  // Create NodeList holding all elements with class of button
  const buttons = document.querySelectorAll('.button');

  // Create object that holds button id and bulb information
  const buttonsObj = {
    'stopButton' : {id: 'stopLight', color: 'red'},
    'slowButton' : {id: 'slowLight', color: 'yellow'},
    'goButton' : {id: 'goLight', color: 'green'}
  }

  // forEach loop to iterate over the buttons NodeList
  buttons.forEach(button => {

    // Creates a listoner for mouseover on the currently iterated button
    button.addEventListener('mouseover', function(e) {
      // Logs text along with the id of the current button being iterated
      console.log(`Entered ${e.target.id} button`);
    });

    // Creates a listoner for mouseout on the currently iterated button
    button.addEventListener('mouseout', function(e) {
      // Logs text along with the id of the current button being iterated
      console.log(`Left ${e.target.id} button`);
    });

    // Create listoner for click 
    button.addEventListener('click', function(e) {
      // Create variable that holds the current buttons associated bulb attributes 
      const btnObj = buttonsObj[e.target.id]; 
      if (btnObj) {
        const bulb = document.getElementById(btnObj.id);
        if (bulb) {
          bulb.style.backgroundColor = bulb.style.backgroundColor === 'black' ? btnObj.color : 'black';
          console.log(`${btnObj.id} bulb is ${bulb.style.backgroundColor === 'black' ? 'off' : 'on'}`)
        }
      }
    });
  });
})();

*/