# ease.js - Easing in JavaScript

<span class="badge-npmversion"><a href="https://npmjs.org/package/@iamcal/ease.js" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@iamcal/ease.js.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@iamcal/ease.js" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@iamcal/ease.js.svg" alt="NPM downloads" /></a></span>
[![Build Status](https://github.com/iamcal/ease.js/actions/workflows/build.yml/badge.svg)](https://github.com/iamcal/ease.js/actions)
[![Coverage Status](https://coveralls.io/repos/iamcal/ease.js/badge.svg)](https://coveralls.io/r/iamcal/ease.js)

When an object changes position in real life, it rarely moves linearly.
It can start slow, speed up, slow down, then come to rest.
This is called _easing_.

This library provides easing functions for producing natural-looking animations in JavaScript.

For more on easing in general, see [Robert Penner's page](http://robertpenner.com/easing/).


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


If you're performing animations in a modern browser that supports `window.requestAnimationFrame`, then you can use the `.runRAF()`
method to sync your changes to frame updates, for a smoother result.

    myEase.runRAF(callback, duration);


If you want to handle the timing yourself, you can call the `.interpolate()` method, which just runs the selected easing algorithm.
Pass in a value between 0 and 1 (representing the absolute progress of the animation) and get back the mapped value.

    function iterateDiv(x){
        var y = myEase.interpolate(x);
        moveDiv(y * 100);
    }


# Supported easing functions

We support 30 easing functions, 3 variations (in, out and in-out) for each of 10 approaches.
You can read more about each easing function at https://easings.net/.

* Sine functions - `easeInSine`, `easeOutSine`, `easeInOutSine`
* Quadratic functions - `easeInQuad`, `easeOutQuad`, `easeInOutQuad`
* Cubic functions - `easeInCubic`, `easeOutCubic`, `easeInOutCubic`
* Quartic functions - `easeInQuart`, `easeOutQuart`, `easeInOutQuart`
* Quintic functions - `easeInQuint`, `easeOutQuint`, `easeInOutQuint`
* Exponential functions - `easeInExpo`, `easeOutExpo`, `easeInOutExpo`
* Circular functions - `easeInCirc`, `easeOutCirc`, `easeInOutCirc`
* Pull-back functions - `easeInBack`, `easeOutBack`, `easeInOutBack`
* Elastic functions - `easeInElastic`, `easeOutElastic`, `easeInOutElastic`
* Bounce functions - `easeInBounce`, `easeOutBounce`, `easeInOutBounce`

You can get an array of supported algorithms via the `.algorithms()` method.

In the future, I may add support for further functions, with tunable parameters, similar to [d3-ease](https://github.com/d3/d3-ease).
