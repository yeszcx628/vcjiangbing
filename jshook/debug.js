// 重写Function.prototype.constructor 让函数在执行时打印出调用栈
Function.prototype.constructor = function(){} 


// 关闭禁止f12 
var originalValue = localStorage.getItem('devtool');
localStorage.setItem('devtool', 'open');