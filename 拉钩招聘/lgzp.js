const CryptoJS = require('crypto-js');


// 搜索X-S-HEADER参数位置 然后跟代码三元运算 是拼接一个url和字符  然后进行sha256加密 然后进行aes加密
// 返回结果是加密的跟栈 找到解析位置 
// aes_encrypt(t)
function aes_encrypt(t) {
  let kt = CryptoJS.enc.Utf8.parse("lAcFiuSv=R5K4DhMgI3XmwMitcXJED");
  let iv = CryptoJS.enc.Utf8.parse("c559Q8YQk2OUI1Nc");
  let encrypted = CryptoJS.AES.encrypt(t, kt, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

function aes_decrypt(t) {
    let kt = CryptoJS.enc.Utf8.parse('lMckFuShv=R5K48khHgI3kmvMitcxJED');
    let decrypted = CryptoJS.AES.decrypt(t, kt, {
      iv: CryptoJS.enc.Utf8.parse("c558gQ0YQK2OUI1Mc"),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
  
    try {
      t = JSON.parse(decrypted); // Assuming 't' here refers to the decrypted string
    } catch (e) { // Changed 't' to 'e' for the catch block parameter to avoid confusion
      // Handle parsing error if needed
    }
    return t;
  }

// head_arg()
function head_arg() {
  let arg1 = '{"devicetype":1,"https://www.lagou.com/jobs/v2/positionAjax.json?first=true","needAdditionalResult":false,"city":"北京","pn":"1","kd":"Java"}';

  let t = CryptoJS.SHA256(arg1).toString().toUpperCase();

  return aes_encrypt(JSON.stringify({
    originHeader: JSON.stringify({
      value: {
        devicetype: 1
      }
    }),
    code: t
  }));
}

// console.log(head_arg());
var arg = 'QYEHZf1TLqxVK88yxJy281YMf9dw8jkiWD9Sv9weu2ZiJgUB4G/+y1d6H2eu21N7qRavnWB8q/cseHyzViWCdYazqV+tQbt19oOjlphOJHjCfy+zyE1AkWE9BE9YXHn5Uvtt9oG173g+9v334ktre38/9+Km7WR6Mu6yhxajy7o='

console.log(aes_decrypt(arg));