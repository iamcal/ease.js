# ease.js - Easing in JavaScript

[![Build Status](https://travis-ci.org/iamcal/ease.js.svg)](https://travis-ci.org/iamcal/ease.js)
[![Coverage Status](https://coveralls.io/repos/iamcal/ease.js/badge.svg)](https://coveralls.io/r/iamcal/ease.js)


# Usage

From Node, load as a module:

    var Ease = require('./lib/ease.js');


From the browser, just include the script:

    <script src="./lib/ease.js"></script>


Once loaded, you can create a new instance of the Ease object to start using it.
You can pass in an easing algorithm to use (see below for a list of supported choices), otherwise it will default to `easeInOutSine`.

    var myEase = new Ease('easeInSine');


The most straight forward way to use the object is to call `.run()`, which will call your passed-in callback to allow you to animate your objects.
A single argument is passed to the callback, a value between 0 (at the start) and 1 (at the end).
For some algorithms, values below 0 or above 1 can be returned (e.g. for overshooting).

    var callback = function(x){ console.log(x); }; // called on each iteration
    var duration = 1; // duration in seconds
    var fps = 30; // frames per second

    myEase.run(callback, duration, fps);


If you want to handle the timing yourself, you can call the `.interpolate()` method, which just runs the selected easing algorithm.
Pass in a value between 0 and 1 (representing the absolute progress of the animation) and get back the mapped value.

    function iterateDiv(x){
        var y = myEase.interpolate(x);
        moveDiv(y * 100);
    }


# Supported easing functions

 * `easeInSine`, `easeOutSine`, `easeInOutSine` - Sine function
 * ...

