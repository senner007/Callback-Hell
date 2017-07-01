$(document).ready(function() {

  var arr = [];
  arr.toAppend = 0; //number to append
  arr.nLoops = 0; // count number of total loops
  var $resolvedUl = $('.resolved').find('ul');
  function callback(key) {
    arr.push(key);


    loopAndAppend();

    function loopAndAppend() {
      arr.found = false;
      for (i = 0; i < arr.length; i++) {  // loop over array of currently displayed items

        arr.nLoops++;
        if (arr.toAppend == arr[i]) {

          arr.found = true;
          break;
        };
      }; // end of for loop
      if (arr.toAppend == 9) { // count total loops
        console.log('Total number of loops: ' + arr.nLoops)
      }
      if (arr.found == true) { // if match found, append number and reiterate
        arr.found = false;
        var index = arr.indexOf(arr.toAppend); // remove item from array after it has been found - reduces total number of literations
        console.log('The current array: '+  arr)
        console.log(arr[i] + ' in array to be spliced at index: ' + index)
         arr.splice(index, 1);

        $resolvedUl.append('<li>' + (arr.toAppend) + ' is ready</li>'); // append number if item is first or previous are ready
        console.log((arr.toAppend) + ' has been appended ----------------')
        arr.toAppend = arr.toAppend + 1;
        if (arr.toAppend < 10) {
          console.log('loops counted: ' + arr.nLoops)
          loopAndAppend();
        }
      }

    }; // end of loopAndAppend function

  }; // end of callback function

  $('li').each(function(key, value) {
    var newRandom = Math.floor((Math.random() * 2000) + 1); // set a new random number
    setTimeout(function() { // wait random time and then display item
      $(value).css('opacity', 1)
      callback(key); // once displayed, fire callback
    }, newRandom)
  });

});
