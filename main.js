$(document).ready(function() {

  var arr = [];
  var counter = 0;
  var $resolvedUl = $('.resolved').find('ul');
  var nLoops = 0; // count number of total loops

  function callback(key) {
    arr.push(key);

    loopOverArr();

    function loopOverArr() {
      var flag = false;
      for (i = 0; i < arr.length; i++) {  // loop over array of currently displayed items
        console.log('new loop');
        nLoops++;
        if (counter == arr[i]) {
          counter = counter + 1;
          flag = true;
          break;
        };
      }; // end of for loop
      if (counter == 10) { // count total loops
        console.log('number of loops: ' + nLoops)
      }
      if (flag == true) { // if match found, append number and reiterate
        flag = false;
        $resolvedUl.append('<li>' + (counter - 1) + ' is ready</li>'); // append number if item is first or previous are ready
        console.log('after append')
        if (counter < 10) {
          loopOverArr();
        }
      }

    };

  }

  $('li').each(function(key, value) {
    var newRandom = Math.floor((Math.random() * 5000) + 1); // set a new random number
    setTimeout(function() { // wait random time and then display item
      $(value).css('opacity', 1)
      callback(key); // once displayed, fire callback
    }, newRandom)
  });

});
