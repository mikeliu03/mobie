(function(factory){
	if(typeof define == 'function' && define.amd){
		//AMD
		define([], function(){
			return factory(jQuery, window);
		});
	}else if(typeof exports == 'object'){
		//CommonJS
		module.exports = function(){
			return factory(jQuery, window);
		}
	}else{
		factory(jQuery, window);
	}
}(function($, global){
	if(typeof global["CEM"] == "undefined"){
		global["CEM"] = this;
	}
	var self = this;
	var jThis = $(this);
	this.prototype.watch = function(selector, handler){
		/*var random = Math.random().toString().substr(2);
		Object.defineProperty(self, "__watch" + random, {
			get: function(){
				return jThis.val();
			},
			set: function(value){
				handler(value);
				jThis.val(value);
			}
		});*/
	};

	return this;
}));