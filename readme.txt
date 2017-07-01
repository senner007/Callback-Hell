Each colored item will display itself after a random delay.
The item can then be used but only if it is the first element or if all the previous items have been displayed


In the jquery.slim.js, the following function of code are removed:

jQuery.fn.extend
jquery.fn.load
jquery.each // Attach a bunch of functions for handling common AJAX events
jQuery.expr.filters.animated
ajax settings like jQuery.ajaxSettings.xhr, jQuery.ajaxPrefilter, jQuery.ajaxSetup, jQuery.ajaxPrefilter, jQuery.ajaxTransport, jQuery.ajaxSetup
xml parsing like jQuery.parseXML,
animation effects like jQuery.easing, jQuery.Animation, jQuery.speed

https://stackoverflow.com/questions/35424053/what-are-the-differences-between-normal-and-slim-package-of-jquery
