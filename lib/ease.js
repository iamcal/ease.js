"use strict";

;(function() {

	var root = this;
	var previous_ease = root.Ease;


	var ease = function(alg){
		var self = this;

		self.alg = alg;

		return self;
	}

	ease.prototype.functions = {
		'easeInSine'	: function(x){ return 1 - Math.cos((x * Math.PI) / 2); },
		'easeOutSine'	: function(x){ return Math.sin((x * Math.PI) / 2); },
		'easeInOutSine'	: function(x){ return -(Math.cos(Math.PI * x) - 1) / 2; },
	};

	ease.prototype.interpolate = function(x){
		var self = this;
		if (!self.functions[self.alg]){
			self.alg = 'easeInOutSine';
		}
		return self.functions[self.alg](x);
	}

	ease.prototype._move = function(){
		var self = this;

		self.position += self.increment;

		if (self.position >= 1){
			self.callback(1);
			root.clearInterval(self.handler);
		}else{
			var ease = self.interpolate(self.position);
			self.callback(ease);
		}
	}

	ease.prototype.run = function(callback, duration, fps){
		var self = this;

		self.callback = callback;
		self.increment = 1 / (duration * fps);
		self.position = 0;

		if (self.handler){
			root.clearInterval(self.handler);
		}

		self.handler = root.setInterval(function(){ self._move(); }, 1000 / fps);
	}


	// export
	if (typeof exports !== 'undefined'){
		if (typeof module !== 'undefined' && module.exports){
			exports = module.exports = ease;
		}
		exports.Ease = ease;
	}else if (typeof define === 'function' && define.amd){
		define(function() { return ease; })
	}else{
		root.Ease = ease;
	}

}).call(function(){
	return this || (typeof window !== 'undefined' ? window : global);
}());
