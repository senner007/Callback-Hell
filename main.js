
 import {callback} from './callback.js'

  $('li').each(function(key, value) {
    var newRandom = Math.floor((Math.random() * 200) + 1); // set a new random number
    setTimeout(function() { // wait random time and then display item
      $(value).css('opacity', 1)
      callback(key); // once displayed, fire callback
    }, newRandom)
  });
