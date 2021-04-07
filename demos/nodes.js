#!/usr/bin/node

var Ease = require('../lib/ease.js');

var e2 = new Ease();

console.log('Interpolate: '+e2.interpolate(0.1));

var z = 0;
e2.run(function(x){
	z++;
	console.log('Run: '+z+', '+x);
}, 3, 30);


