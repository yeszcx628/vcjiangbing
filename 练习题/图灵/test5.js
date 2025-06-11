const CryptoJS = require('crypto-js');

function encrypt(data) {
    let key = CryptoJS.enc.Utf8.parse('jo8j9wGw%6HbxfFn'),
        iv = CryptoJS.enc.Utf8.parse('0123456789ABCDEF');

    let parsedData = CryptoJS.enc.Utf8.parse(data),
        encrypted = CryptoJS.AES.encrypt(parsedData, key, {
            'mode': CryptoJS.mode.CBC,
            'padding': CryptoJS.pad.Pkcs7,
            'iv': iv
        });
    
    return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}

// 导出函数
module.exports = { encrypt };