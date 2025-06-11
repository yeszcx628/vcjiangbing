const crypto = require('crypto');

// 实现 u() 函数，假设是 MD5 加密
function u(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

// 原始的参数处理函数
function c(t) {
    return u("".concat(t ? Object.keys(t).sort().reduce((function(e, r) {
        var n = t[r];
        if (void 0 === n)
            return e;
        if (Number.isNaN(n) && (n = ""),
        Array.isArray(n)) {
            if (0 === n.length)
                return "".concat(e).concat(r);
            var o = n.sort().map((function(t) {
                return t instanceof Object ? JSON.stringify(t) : t
            }
            )).reduce((function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                return t + (t ? "," : "") + e
            }
            ));
            return "".concat(e).concat(r).concat(o)
        }
        return n instanceof Object ? e + r + JSON.stringify(n) : e + r + n.toString()
    }
    ), "") : "", "048a9c4943398714b356a696503d2d36"))
}

// 测试数据
const t = {
    "pickRuleId": 644458,
    "pageNum": 1,
    "pageSize": 24,
    "filterUnbid": "true",
    "showCspu": "true"
};

// 运行测试
console.log(c(t));