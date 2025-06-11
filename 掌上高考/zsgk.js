const CryptoJS = require('crypto-js');
// sign  找到sign = o 然后跟栈找到加密方法d 然后补全方法

// md5 加密
function md5(e) {
    return CryptoJS.MD5(e).toString();
}

// 加密方法
function r(e) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function o(e) {
    e = function(e, t) {
        if ("object" != r(e) || !e)
            return e;
        var n;
        if (void 0 === (n = e[Symbol.toPrimitive]))
            return ("string" === t ? String : Number)(e);
        if ("object" != r(n = n.call(e, t || "default")))
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }(e, "string");
    return "symbol" == r(e) ? e : String(e)
}
function i(e, t, n) {
    (t = o(t))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n
}
function a(e, t) {
    var n, r = Object.keys(e);
    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e),
    t && (n = n.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
    }
    ))),
    r.push.apply(r, n)),
    r
}
function cc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(n), !0).forEach((function(t) {
            i(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}

function ct(t) {
    var n, e = [];
    let c = 0;
    for (n in t)
        e[c] = n,
        c++;
    var o, r = e.sort(), a = {};
    for (o in r)
        a[r[o]] = t[r[o]];
    return a
}

function d(e) {
    var t, n = {
        appVersion: navigator.appVersion,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        appName: navigator.appName
    }, r = Object(ct)(n);
    let o = "";
    for (t in r)
        o += t + "=" + r[t] + "&";
    o = o.slice(0, o.length - 1);
    n = CryptoJS.MD5(o).toString();
    var u, l = (new Date).getTime(), s = (e = Object(cc)(Object(cc)({}, e), {}, {
        time: parseInt(Number(l) / 1e3),
        mac: n
    }),
    ct(e));
    let d = "";
    for (u in s)
        d += u + "=" + s[u] + "&";
    d = d.slice(0, d.length - 1);
    l = "XfqauTPSQHSpwJX6",
    n = CryptoJS.enc.Latin1.parse("CernetFIT4206Sun"),
    e = CryptoJS.enc.Latin1.parse(l),
    l = CryptoJS.AES.encrypt(d, n, {
        iv: e,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    return CryptoJS.enc.Base64.parse(l).toString()
}



function w() { // 显示用法
    var {SIGN: t, str: h} = t
    , {n} = decodeURI(n)
    CryptoJS.HmacSHA1(CryptoJS.enc.Utf8.parse(n), t);
    t = CryptoJS.enc.Base64.stringify(n).toString();
    return md5(t)
  }
  
  obj1 = {"visitor_id": "d2c7e3f0645e4c67bb8f7c8fb0ea8c5b"}
  sign = d(obj1)
  t = 'https://api.zjzw.cn/web/api/'
  obj2 = {
    "url": "apigkcx/api/wxmini/getwxcode",
    "sign": sign
  }
  
  xxx = t + JSON.stringify(obj2)
  signsafe = w({
    SIGN: "D23ABC@56",
    str: xxx.replace(/^\/|https?:\/\/\/?/, "")
})
  console.log('sign:', sign)
  console.log(signsafe)