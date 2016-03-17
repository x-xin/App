var Ajax = function(){
    function request(url,opt){
        function fn(){}
        var async   = opt.async !== false,
            method  = opt.method    || 'GET',
            encode  = opt.encode    || 'UTF-8',
            data    = opt.data      || null,
            success = opt.success   || fn,
            failure = opt.failure   || fn,
			before  = opt.before    || fn,
            method  = method.toUpperCase(); 
        if(data && typeof data == 'object'){//对象转换成字符串键值对
            data = _serialize(data);
        }
        if(method == 'GET' && data){
            url += (url.indexOf('?') == -1 ? '?' : '&') + data;
            data = null;
        }
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.onreadystatechange = function(){
            _onStateChange(xhr, success, failure, before);
        };
        xhr.open(method,url,async);
        if(method == 'POST'){
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=' + encode);
        }
		xhr.setRequestHeader('If-Modified-Since', '0');   
		xhr.setRequestHeader('Cache-Control', 'no-cache');  
        xhr.send(data);
        return xhr;
    }
    function _serialize(obj){
        var a = [];
        for(var k in obj){
            var val = obj[k];
            if(val.constructor == Array){
                for(var i=0,len=val.length;i<len;i++){
                    a.push(k + '[]=' + encodeURIComponent(val[i]));
                }
            }else{
                a.push(k + '=' + encodeURIComponent(val));
            }
        }
        return a.join('&');
    }
    function _onStateChange(xhr, success, failure, before){
		var readyState = xhr.readyState;
        if(readyState == 4){
            var s = xhr.status;
            if(s>= 200 && s < 300){
                success(xhr);
            }else{
                failure(xhr);
            }
        }else if(readyState == 3){
			before(xhr);
		}
    }
    return {request:request};
}();

/**
 * 把表单内容转换为hash对象
 * @param {HTMLElement} form对象
 * @return {hash}
 * @example
 *         formToHash(document.forms[0]);
 */
function formToHash(form){
    var hash = {}, el;
    for(var i = 0,len = form.elements.length;i < len;i++){
        el = form.elements[i];
        if(el.name == "" || el.disabled) continue;
        switch(el.tagName.toLowerCase()){
        case "fieldset":
            break;
        case "input":
            switch(el.type.toLowerCase()){
            case "radio":
                if(el.checked)
                    hash[el.name] = el.value;
                break;
            case "checkbox":
                if(el.checked){
                    if(!hash[el.name]){
                        hash[el.name] = [el.value];
                    }else{
                        hash[el.name].push(el.value);
                    }
                }
                break;
            case "button":
                break;
            case "image":
                break;
            default:
                hash[el.name] = el.value;
                break;
            }
            break;
        case "select":
            if(el.multiple){
                for(var j = 0, lens = el.options.length;j < lens; j++){
                    if(el.options[j].selected){
                        if(!hash[el.name]){
                            hash[el.name] = [el.options[j].value];
                        }else{
                            hash[el.name].push(el.options[j].value);
                        }
                    }
                }
            }else{
                hash[el.name] = el.value;
            }
            break;
        default:
            hash[el.name] = el.value;
            break;
        }
    }
    form = el = null;
    return hash;
};