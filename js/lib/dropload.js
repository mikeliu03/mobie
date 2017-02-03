(function($){
	$.fn.dropload = function(options){
		return new MyDropload(this, options);
	};

	var MyDropload = function(element, options){
		this.init(options);
	};

	MyDropload.prototype.init = function(option){

	};
})(window.Zepto || window.jQuery);