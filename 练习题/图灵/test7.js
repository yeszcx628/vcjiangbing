// 引入 CryptoJS
const CryptoJS = require('crypto-js');

// MD5 相关函数定义
function md5(text) {
  return CryptoJS.MD5(text);
}

function hexMD5(text) {
  return CryptoJS.MD5(text).toString();
}

function hmacMD5(key, text) {
  return CryptoJS.HmacMD5(text, key);
}

function hexHmacMD5(key, text) {
  return CryptoJS.HmacMD5(text, key).toString();
}

eeee = function(text, key, raw) {
  if (key) {
      // 有密钥的情况
      if (raw) {
          // 原始输出模式
          return hmacMD5(key, text);
      } else {
          // 十六进制输出模式
          return hexHmacMD5(key, text);
      }
  } else {
      // 无密钥的情况
      if (raw) {
          // 原始输出模式
          return md5(text);
      } else {
          // 十六进制输出模式
          return hexMD5(text);
      }
  }
};

// 修正函数调用
let _0x2498e1 = new Date().getTime(),
    _0x48003c = eeee("xialuo" + _0x2498e1);
console.log(_0x48003c);

// var headers = _0x2410d2["headers"] || {};
var m = _0x48003c;
var ts = _0x2498e1;
var url = "&x=" + CryptoJS.SHA256(_0x48003c + "xxoo").toString();
console.log(url);
