"use strict";

;(function() {

	var root = this;
	var previous_ease = root.Ease;


	var ease = function(){
		var self = this;

		return self;
	}

	ease.prototype.foo = function(){
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
