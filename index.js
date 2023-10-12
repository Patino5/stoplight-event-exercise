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
  })

  slowBtn.addEventListener('click', function(){
    slowLight.classList.toggle('slow')
  })

  goBtn.addEventListener('click', function (){
    goLight.classList.toggle('go')
  })

})();
