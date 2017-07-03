'use strict';

var arr = [];
arr.appendCounter = 0; //number to append
arr.nLoops = 0; // count number of total loops
var $resolvedUl = $('.resolved').find('ul');


export function callback(key) {
  arr.push(key);

  loopAndAppend();

  function loopAndAppend() {
    arr.found = false; // flag to determine if item was found
    for (var i = 0; i < arr.length; i++) { // loop over array of currently displayed items

      arr.nLoops++;
      if (arr.appendCounter == arr[i]) {

        arr.found = true;
        break;
      };
    }; // end of for loop
    if (arr.found == true) { // if match found, append number and reiterate
      arr.found = false;
      var index = arr.indexOf(arr.appendCounter);
      console.log('The current array: ' + arr)
      console.log(arr[i] + ' in array to be spliced at index: ' + index)
      arr.splice(index, 1); // remove item from array after it has been found - reduces total number of literations

      $resolvedUl.append('<li>' + (arr.appendCounter) + ' is ready</li>'); // append number if item is first or previous are ready
      console.log((arr.appendCounter) + ' has been appended ----------------')
      arr.appendCounter++;;
      if (arr.appendCounter == 10) { // count total loops
        console.log('Total number of loops: ' + arr.nLoops)
      }
      if (arr.appendCounter < 10) {
        console.log('loops counted: ' + arr.nLoops)
        loopAndAppend();
      }

    }


  }; // end of loopAndAppend function

}; // end of callback function
