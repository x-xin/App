(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.JsBridge = factory();
	}
}(this, function (){

	var JsBridge = function(obj){
		this.target           = document.getElementById(obj.target);
		this.responseCallback = obj.responseCallback;
		this.url              = obj.url;
	};
	
	JsBridge.prototype.show = function(responseData){
		var that             = this,
			responseCallback = that.responseCallback,
			data             = JSON.parse(responseData);
		
		data = data.userInfo ? data.userInfo : data;
		if( data.code != 1 ) return that.error();
		responseCallback(data);
	};
	
	JsBridge.prototype.error = function(){
		var that             = this,
			responseCallback = that.responseCallback;
		
		responseCallback({
			code: 0
		});
	};
	
	JsBridge.prototype.send = function(data){
	
		var that     = this,
			target   = that.target,
			ajaxData = function(){
							Ajax.request(that.url, {
								method: "GET",
								success:function(xhr){
									that.show(xhr.responseText);
								},
								failure:function(){
									that.error();
								},
								before:function(xhr){
									//console.log(xhr)
								}
							});
						}
	
		if( window.java && window.java.send ){
		
			if( target ){
				target.addEventListener('touchend', function(){
					window.java.send(data);
				});
			}else{
				window.java.send(data);
			}
			
		}else if( window.isIOS ){
		
			function connectWebViewJavascriptBridge(callback) {
				if (window.WebViewJavascriptBridge) {
					callback(WebViewJavascriptBridge);
				} else {
					document.addEventListener('WebViewJavascriptBridgeReady', function() {
						callback(WebViewJavascriptBridge);
					}, false)
				}
			}
			
			connectWebViewJavascriptBridge(function(bridge) {
			
				bridge.init(function(message, responseCallback) {
					that.show(message);
				});
				
				if( target ){
					target.addEventListener('touchend', function(){
						bridge.send(data, function(responseData){
							that.show(responseData);
						});
					});
				}else{
					bridge.send(data, function(responseData){
						that.show(responseData);
					});
				}
			});
			
		}else{
		
			if( target ){
				target.addEventListener('touchend', function(){
					ajaxData();
				});
			}else{
				ajaxData();
			}
			
		}
	};
	
	return function(o){
		return o ? new JsBridge(o) : {};
	};
	
}));