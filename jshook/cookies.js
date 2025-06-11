// 重写document.cookie 让函数在执行时打印出调用栈 检查是否包含v
(function() {
    'use strict';
    var cookie_cache = document.cookie;
    
    console.log('Cookie hook installed. Current cookies:', cookie_cache);
    
    Object.defineProperty(document, 'cookie', {
        get: function() {
            return cookie_cache;
        },
        set: function(val) {
            console.log('Setting cookie', val);
            // 检查是否包含v
            if (val.indexOf('v') != -1) {
                console.log('Found v in cookie!', val);
                debugger;
            }
            var cookie = val.split(";")[0];
            var ncookie = cookie.split("=");
            var flag = false;
            var cache = cookie_cache.split("; ");
            cache = cache.map(function(a) {
                if (a.split("=")[0] === ncookie[0]) {
                    flag = true;
                    return cookie;
                }
                return a;
            });
            cookie_cache = cache.join("; ");
            if (!flag) {
                cookie_cache += cookie + "; ";
            }
            return cookie_cache;
        }
    });
    
    console.log('Cookie hook setup complete.');
})();

// 检查document.cookie 进行断点
Object.defineProperty(document, 'cookie', {
    set:function (val){
    
      debugger;
    
      console.log('Hook捕获到cookie的位置->', val)
    
}})

// 重写 Function.prototype.constructor，阻止通过 Function 构造器动态创建函数
// 这样可以防止页面通过 new Function、eval 等方式动态执行代码
Function.prototype.constructor = function(){}


