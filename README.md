# ease.js - Easing in JavaScript

[![Build Status](https://travis-ci.org/iamcal/ease.js.svg)](https://travis-ci.org/iamcal/ease.js)
[![Coverage Status](https://coveralls.io/repos/iamcal/ease.js/badge.svg)](https://coveralls.io/r/iamcal/ease.js)


# Usage

    var Ease = require('./lib/ease.js');

    var myEase = new Ease('easeInSine');

    var callback = function(x){ console.log(x); }; // called on each iteration
    var duration = 1; // duration in seconds
    var fps = 30; // frames per second

    myEase.run(callback, duration, fps);


# Supported easing functions

 * `easeInSine`, `easeOutSine`, `easeInOutSine` - Sine function
 * ...

