
!function(e) {
    function c(c) {
        for (var d, t, a = c[0], o = c[1], u = c[2], i = 0, l = []; i < a.length; i++)
            t = a[i],
            Object.prototype.hasOwnProperty.call(r, t) && r[t] && l.push(r[t][0]),
            r[t] = 0;
        for (d in o)
            Object.prototype.hasOwnProperty.call(o, d) && (e[d] = o[d]);
        for (b && b(c); l.length; )
            l.shift()();
        return n.push.apply(n, u || []),
        f()
    }
    function f() {
        for (var e, c = 0; c < n.length; c++) {
            for (var f = n[c], d = !0, t = 1; t < f.length; t++) {
                var o = f[t];
                0 !== r[o] && (d = !1)
            }
            d && (n.splice(c--, 1),
            e = a(a.s = f[0]))
        }
        return e
    }
    var d = {}
      , t = {
        24: 0
    }
      , r = {
        24: 0
    }
      , n = [];
    function a(c) {
        console.log('load', c);
        if (d[c])
            return d[c].exports;
        var f = d[c] = {
            i: c,
            l: !1,
            exports: {}
        };
        return e[c].call(f.exports, f, f.exports, a),
        f.l = !0,
        f.exports
    }
    global.o = a;
    a.e = function(e) {
        var c = [];
        t[e] ? c.push(t[e]) : 0 !== t[e] && {
            17: 1,
            82: 1
        }[e] && c.push(t[e] = new Promise((function(c, f) {
            for (var d = "static/css/" + ({}[e] || e) + "." + {
                0: "31d6cfe0",
                1: "31d6cfe0",
                2: "31d6cfe0",
                3: "31d6cfe0",
                4: "31d6cfe0",
                5: "31d6cfe0",
                6: "31d6cfe0",
                7: "31d6cfe0",
                8: "31d6cfe0",
                9: "31d6cfe0",
                10: "31d6cfe0",
                11: "31d6cfe0",
                12: "31d6cfe0",
                13: "31d6cfe0",
                14: "31d6cfe0",
                15: "31d6cfe0",
                16: "31d6cfe0",
                17: "545b2bed",
                18: "31d6cfe0",
                19: "31d6cfe0",
                20: "31d6cfe0",
                21: "31d6cfe0",
                22: "31d6cfe0",
                26: "31d6cfe0",
                27: "31d6cfe0",
                28: "31d6cfe0",
                29: "31d6cfe0",
                30: "31d6cfe0",
                31: "31d6cfe0",
                32: "31d6cfe0",
                33: "31d6cfe0",
                34: "31d6cfe0",
                35: "31d6cfe0",
                36: "31d6cfe0",
                37: "31d6cfe0",
                38: "31d6cfe0",
                39: "31d6cfe0",
                40: "31d6cfe0",
                41: "31d6cfe0",
                42: "31d6cfe0",
                43: "31d6cfe0",
                44: "31d6cfe0",
                45: "31d6cfe0",
                46: "31d6cfe0",
                47: "31d6cfe0",
                48: "31d6cfe0",
                49: "31d6cfe0",
                50: "31d6cfe0",
                51: "31d6cfe0",
                52: "31d6cfe0",
                53: "31d6cfe0",
                54: "31d6cfe0",
                55: "31d6cfe0",
                56: "31d6cfe0",
                57: "31d6cfe0",
                58: "31d6cfe0",
                59: "31d6cfe0",
                60: "31d6cfe0",
                61: "31d6cfe0",
                62: "31d6cfe0",
                63: "31d6cfe0",
                64: "31d6cfe0",
                65: "31d6cfe0",
                66: "31d6cfe0",
                67: "31d6cfe0",
                68: "31d6cfe0",
                69: "31d6cfe0",
                70: "31d6cfe0",
                71: "31d6cfe0",
                72: "31d6cfe0",
                73: "31d6cfe0",
                74: "31d6cfe0",
                75: "31d6cfe0",
                76: "31d6cfe0",
                77: "31d6cfe0",
                78: "31d6cfe0",
                79: "31d6cfe0",
                80: "31d6cfe0",
                81: "31d6cfe0",
                82: "d2424176",
                83: "31d6cfe0"
            }[e] + ".chunk.css", r = a.p + d, n = document.getElementsByTagName("link"), o = 0; o < n.length; o++) {
                var u = (b = n[o]).getAttribute("data-href") || b.getAttribute("href");
                if ("stylesheet" === b.rel && (u === d || u === r))
                    return c()
            }
            var i = document.getElementsByTagName("style");
            for (o = 0; o < i.length; o++) {
                var b;
                if ((u = (b = i[o]).getAttribute("data-href")) === d || u === r)
                    return c()
            }
            var l = document.createElement("link");
            l.rel = "stylesheet",
            l.type = "text/css",
            l.onload = c,
            l.onerror = function(c) {
                var d = c && c.target && c.target.src || r
                  , n = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                n.code = "CSS_CHUNK_LOAD_FAILED",
                n.request = d,
                delete t[e],
                l.parentNode.removeChild(l),
                f(n)
            }
            ,
            l.href = r,
            document.getElementsByTagName("head")[0].appendChild(l)
        }
        )).then((function() {
            t[e] = 0
        }
        )));
        var f = r[e];
        if (0 !== f)
            if (f)
                c.push(f[2]);
            else {
                var d = new Promise((function(c, d) {
                    f = r[e] = [c, d]
                }
                ));
                c.push(f[2] = d);
                var n, o = document.createElement("script");
                o.charset = "utf-8",
                o.timeout = 120,
                a.nc && o.setAttribute("nonce", a.nc),
                o.src = function(e) {
                    return a.p + "static/js/" + ({}[e] || e) + "." + {
                        0: "95000127",
                        1: "2d6d919b",
                        2: "fc7f7961",
                        3: "3d3697a2",
                        4: "11927c11",
                        5: "b9754293",
                        6: "5dafd3a5",
                        7: "99925572",
                        8: "b1e71a75",
                        9: "b485b0c4",
                        10: "043b15ec",
                        11: "9fe569a3",
                        12: "ed9445d0",
                        13: "49e3bf98",
                        14: "578be66b",
                        15: "62a64d9f",
                        16: "f4b72db6",
                        17: "a967a664",
                        18: "5221cf47",
                        19: "54e1852c",
                        20: "d99d2385",
                        21: "fa08e45c",
                        22: "ca7cbc43",
                        26: "77e07b8e",
                        27: "5aa7176f",
                        28: "569974c8",
                        29: "c74be242",
                        30: "6543d290",
                        31: "0d32b191",
                        32: "1e339bf4",
                        33: "165bbd7b",
                        34: "d5de1f0e",
                        35: "1d3d8441",
                        36: "928bc0cd",
                        37: "1a094cc5",
                        38: "0a26a607",
                        39: "c60975ed",
                        40: "520be303",
                        41: "99c1ab74",
                        42: "1cd1be18",
                        43: "db41b479",
                        44: "0e282eb5",
                        45: "5a92ddd5",
                        46: "5465f0f4",
                        47: "cd72c07b",
                        48: "3fe3bc94",
                        49: "d89b929a",
                        50: "1c2f361c",
                        51: "6b9a026c",
                        52: "35a57b09",
                        53: "6c887a52",
                        54: "b5ac5711",
                        55: "f32fd02d",
                        56: "fd61f965",
                        57: "11266a5a",
                        58: "295c7faf",
                        59: "383f2e40",
                        60: "469d8cdb",
                        61: "012ee49f",
                        62: "a661a08a",
                        63: "f4ef3575",
                        64: "6b743da4",
                        65: "de84abcc",
                        66: "08f4de7f",
                        67: "21844195",
                        68: "0c5887bd",
                        69: "f43932ab",
                        70: "6c2cd882",
                        71: "c38ae312",
                        72: "40aefd31",
                        73: "3ab0fef6",
                        74: "f5bdb3ba",
                        75: "db8c8112",
                        76: "2dcca562",
                        77: "4ddbaae1",
                        78: "696913a0",
                        79: "67bf4026",
                        80: "0785aace",
                        81: "20db1637",
                        82: "d9557c5c",
                        83: "6058b768"
                    }[e] + ".chunk.js"
                }(e);
                var u = new Error;
                n = function(c) {
                    o.onerror = o.onload = null,
                    clearTimeout(i);
                    var f = r[e];
                    if (0 !== f) {
                        if (f) {
                            var d = c && ("load" === c.type ? "missing" : c.type)
                              , t = c && c.target && c.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + d + ": " + t + ")",
                            u.name = "ChunkLoadError",
                            u.type = d,
                            u.request = t,
                            f[1](u)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var i = setTimeout((function() {
                    n({
                        type: "timeout",
                        target: o
                    })
                }
                ), 12e4);
                o.onerror = o.onload = n,
                document.head.appendChild(o)
            }
        return Promise.all(c)
    }
    ,
    a.m = e,
    a.c = d,
    a.d = function(e, c, f) {
        a.o(e, c) || Object.defineProperty(e, c, {
            enumerable: !0,
            get: f
        })
    }
    ,
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(e, c) {
        if (1 & c && (e = a(e)),
        8 & c)
            return e;
        if (4 & c && "object" == typeof e && e && e.__esModule)
            return e;
        var f = Object.create(null);
        if (a.r(f),
        Object.defineProperty(f, "default", {
            enumerable: !0,
            value: e
        }),
        2 & c && "string" != typeof e)
            for (var d in e)
                a.d(f, d, function(c) {
                    return e[c]
                }
                .bind(null, d));
        return f
    }
    ,
    a.n = function(e) {
        var c = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(c, "a", c),
        c
    }
    ,
    a.o = function(e, c) {
        return Object.prototype.hasOwnProperty.call(e, c)
    }
    ,
    a.p = "/",
    a.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var o = this["webpackJsonpfutures-web"] = this["webpackJsonpfutures-web"] || []
      , u = o.push.bind(o);
    o.push = c,
    o = o.slice();
    for (var i = 0; i < o.length; i++)
        c(o[i]);
    var b = u;
    f()
}({165:function(e, t, r) {
    "use strict";
    var n = r(318);
    r.d(t, "a", (function() {
        return n.a
    }
    ));
    n.a
},318:function(e, t, r) {
    "use strict";
    (function(e) {
        r.d(t, "a", (function() {
            return s
        }
        ));
        var n, a = r(145), o = r(432), i = "undefined" !== typeof e ? null === (n = Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            REACT_APP_COUNTLY_WEB_SITE: "www.mgbx.com|www.megabit.vip|www.megabitex.vip|www.mgbx.vip|www.mgbx.io|www.mgbx.ai|www.megabit.one",
            REACT_APP_GOOGLE_CLIENT_ID: "413503380431-sldr0u9fep1a411rm81dj6mei53rf8n6.apps.googleusercontent.com",
            REACT_APP_APPLE_CLIENT_ID: "mega.sign.with.apple",
            REACT_APP_TG_BOT_CONFIG: "7710543161|https://www.mgbx.com"
        })) || void 0 === n ? void 0 : n.npm_package_version : void 0, s = function() {
            function e(e) {
                void 0 === e && (e = {}),
                e = e || {},
                this.default_key_size = e.default_key_size ? parseInt(e.default_key_size, 10) : 1024,
                this.default_public_exponent = e.default_public_exponent || "010001",
                this.log = e.log || !1,
                this.key = null
            }
            return e.prototype.setKey = function(e) {
                this.log && this.key && console.warn("A key was already set, overriding existing."),
                this.key = new o.a(e)
            }
            ,
            e.prototype.setPrivateKey = function(e) {
                this.setKey(e)
            }
            ,
            e.prototype.setPublicKey = function(e) {
                this.setKey(e)
            }
            ,
            e.prototype.decrypt = function(e) {
                try {
                    return this.getKey().decrypt(Object(a.a)(e))
                } catch (t) {
                    return !1
                }
            }
            ,
            e.prototype.encrypt = function(e) {
                try {
                    return Object(a.b)(this.getKey().encrypt(e))
                } catch (t) {
                    return !1
                }
            }
            ,
            e.prototype.sign = function(e, t, r) {
                try {
                    return Object(a.b)(this.getKey().sign(e, t, r))
                } catch (n) {
                    return !1
                }
            }
            ,
            e.prototype.verify = function(e, t, r) {
                try {
                    return this.getKey().verify(e, Object(a.a)(t), r)
                } catch (n) {
                    return !1
                }
            }
            ,
            e.prototype.getKey = function(e) {
                if (!this.key) {
                    if (this.key = new o.a,
                    e && "[object Function]" === {}.toString.call(e))
                        return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, e);
                    this.key.generate(this.default_key_size, this.default_public_exponent)
                }
                return this.key
            }
            ,
            e.prototype.getPrivateKey = function() {
                return this.getKey().getPrivateKey()
            }
            ,
            e.prototype.getPrivateKeyB64 = function() {
                return this.getKey().getPrivateBaseKeyB64()
            }
            ,
            e.prototype.getPublicKey = function() {
                return this.getKey().getPublicKey()
            }
            ,
            e.prototype.getPublicKeyB64 = function() {
                return this.getKey().getPublicBaseKeyB64()
            }
            ,
            e.version = i,
            e
        }()
    }
    ).call(this, r(187))
},
187:function(e, t) {
    var r, n, a = e.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
        if (r === setTimeout)
            return setTimeout(e, 0);
        if ((r === o || !r) && setTimeout)
            return r = setTimeout,
            setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            r = "function" === typeof setTimeout ? setTimeout : o
        } catch (e) {
            r = o
        }
        try {
            n = "function" === typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            n = i
        }
    }();
    var l, u = [], c = !1, d = -1;
    function f() {
        c && l && (c = !1,
        l.length ? u = l.concat(u) : d = -1,
        u.length && p())
    }
    function p() {
        if (!c) {
            var e = s(f);
            c = !0;
            for (var t = u.length; t; ) {
                for (l = u,
                u = []; ++d < t; )
                    l && l[d].run();
                d = -1,
                t = u.length
            }
            l = null,
            c = !1,
            function(e) {
                if (n === clearTimeout)
                    return clearTimeout(e);
                if ((n === i || !n) && clearTimeout)
                    return n = clearTimeout,
                    clearTimeout(e);
                try {
                    n(e)
                } catch (t) {
                    try {
                        return n.call(null, e)
                    } catch (t) {
                        return n.call(this, e)
                    }
                }
            }(e)
        }
    }
    function h(e, t) {
        this.fun = e,
        this.array = t
    }
    function _() {}
    a.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
        u.push(new h(e,t)),
        1 !== u.length || c || s(p)
    }
    ,
    h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    a.title = "browser",
    a.browser = !0,
    a.env = {},
    a.argv = [],
    a.version = "",
    a.versions = {},
    a.on = _,
    a.addListener = _,
    a.once = _,
    a.off = _,
    a.removeListener = _,
    a.removeAllListeners = _,
    a.emit = _,
    a.prependListener = _,
    a.prependOnceListener = _,
    a.listeners = function(e) {
        return []
    }
    ,
    a.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    a.cwd = function() {
        return "/"
    }
    ,
    a.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    a.umask = function() {
        return 0
    }
},
145:function(e, t, r) {
    "use strict";
    r.d(t, "b", (function() {
        return o
    }
    )),
    r.d(t, "a", (function() {
        return i
    }
    ));
    var n = r(65)
      , a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function o(e) {
        var t, r, n = "";
        for (t = 0; t + 3 <= e.length; t += 3)
            r = parseInt(e.substring(t, t + 3), 16),
            n += a.charAt(r >> 6) + a.charAt(63 & r);
        for (t + 1 == e.length ? (r = parseInt(e.substring(t, t + 1), 16),
        n += a.charAt(r << 2)) : t + 2 == e.length && (r = parseInt(e.substring(t, t + 2), 16),
        n += a.charAt(r >> 2) + a.charAt((3 & r) << 4)); (3 & n.length) > 0; )
            n += "=";
        return n
    }
    function i(e) {
        var t, r = "", o = 0, i = 0;
        for (t = 0; t < e.length && "=" != e.charAt(t); ++t) {
            var s = a.indexOf(e.charAt(t));
            s < 0 || (0 == o ? (r += Object(n.b)(s >> 2),
            i = 3 & s,
            o = 1) : 1 == o ? (r += Object(n.b)(i << 2 | s >> 4),
            i = 15 & s,
            o = 2) : 2 == o ? (r += Object(n.b)(i),
            r += Object(n.b)(s >> 2),
            i = 3 & s,
            o = 3) : (r += Object(n.b)(i << 2 | s >> 4),
            r += Object(n.b)(15 & s),
            o = 0))
        }
        return 1 == o && (r += Object(n.b)(i << 2)),
        r
    }
},
65:function(e, t, r) {
    "use strict";
    r.d(t, "b", (function() {
        return n
    }
    )),
    r.d(t, "d", (function() {
        return a
    }
    )),
    r.d(t, "f", (function() {
        return o
    }
    )),
    r.d(t, "g", (function() {
        return i
    }
    )),
    r.d(t, "e", (function() {
        return s
    }
    )),
    r.d(t, "c", (function() {
        return l
    }
    )),
    r.d(t, "a", (function() {
        return u
    }
    ));
    function n(e) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)
    }
    function a(e, t) {
        return e & t
    }
    function o(e, t) {
        return e | t
    }
    function i(e, t) {
        return e ^ t
    }
    function s(e, t) {
        return e & ~t
    }
    function l(e) {
        if (0 == e)
            return -1;
        var t = 0;
        return 0 == (65535 & e) && (e >>= 16,
        t += 16),
        0 == (255 & e) && (e >>= 8,
        t += 8),
        0 == (15 & e) && (e >>= 4,
        t += 4),
        0 == (3 & e) && (e >>= 2,
        t += 2),
        0 == (1 & e) && ++t,
        t
    }
    function u(e) {
        for (var t = 0; 0 != e; )
            e &= e - 1,
            ++t;
        return t
    }
},
432:function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return $
    }
    ));
    var n, a, o = r(145), i = function(e) {
        var t;
        if (void 0 === n) {
            var r = "0123456789ABCDEF";
            for (n = {},
            t = 0; t < 16; ++t)
                n[r.charAt(t)] = t;
            for (r = r.toLowerCase(),
            t = 10; t < 16; ++t)
                n[r.charAt(t)] = t;
            for (t = 0; t < " \f\n\r\t\xa0\u2028\u2029".length; ++t)
                n[" \f\n\r\t\xa0\u2028\u2029".charAt(t)] = -1
        }
        var a = []
          , o = 0
          , i = 0;
        for (t = 0; t < e.length; ++t) {
            var s = e.charAt(t);
            if ("=" == s)
                break;
            if (-1 != (s = n[s])) {
                if (void 0 === s)
                    throw new Error("Illegal character at offset " + t);
                o |= s,
                ++i >= 2 ? (a[a.length] = o,
                o = 0,
                i = 0) : o <<= 4
            }
        }
        if (i)
            throw new Error("Hex encoding incomplete: 4 bits missing");
        return a
    }, s = {
        decode: function(e) {
            var t;
            if (void 0 === a) {
                for (a = Object.create(null),
                t = 0; t < 64; ++t)
                    a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)] = t;
                for (a["-"] = 62,
                a._ = 63,
                t = 0; t < "= \f\n\r\t\xa0\u2028\u2029".length; ++t)
                    a["= \f\n\r\t\xa0\u2028\u2029".charAt(t)] = -1
            }
            var r = []
              , n = 0
              , o = 0;
            for (t = 0; t < e.length; ++t) {
                var i = e.charAt(t);
                if ("=" == i)
                    break;
                if (-1 != (i = a[i])) {
                    if (void 0 === i)
                        throw new Error("Illegal character at offset " + t);
                    n |= i,
                    ++o >= 4 ? (r[r.length] = n >> 16,
                    r[r.length] = n >> 8 & 255,
                    r[r.length] = 255 & n,
                    n = 0,
                    o = 0) : n <<= 6
                }
            }
            switch (o) {
            case 1:
                throw new Error("Base64 encoding incomplete: at least 2 bits missing");
            case 2:
                r[r.length] = n >> 10;
                break;
            case 3:
                r[r.length] = n >> 16,
                r[r.length] = n >> 8 & 255
            }
            return r
        },
        re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
        unarmor: function(e) {
            var t = s.re.exec(e);
            if (t)
                if (t[1])
                    e = t[1];
                else {
                    if (!t[2])
                        throw new Error("RegExp out of sync");
                    e = t[2]
                }
            return s.decode(e)
        }
    }, l = 1e13, u = function() {
        function e(e) {
            this.buf = [+e || 0]
        }
        return e.prototype.mulAdd = function(e, t) {
            var r, n, a = this.buf, o = a.length;
            for (r = 0; r < o; ++r)
                (n = a[r] * e + t) < l ? t = 0 : n -= (t = 0 | n / l) * l,
                a[r] = n;
            t > 0 && (a[r] = t)
        }
        ,
        e.prototype.sub = function(e) {
            var t, r, n = this.buf, a = n.length;
            for (t = 0; t < a; ++t)
                (r = n[t] - e) < 0 ? (r += l,
                e = 1) : e = 0,
                n[t] = r;
            for (; 0 === n[n.length - 1]; )
                n.pop()
        }
        ,
        e.prototype.toString = function(e) {
            if (10 != (e || 10))
                throw new Error("only base 10 is supported");
            for (var t = this.buf, r = t[t.length - 1].toString(), n = t.length - 2; n >= 0; --n)
                r += (l + t[n]).toString().substring(1);
            return r
        }
        ,
        e.prototype.valueOf = function() {
            for (var e = this.buf, t = 0, r = e.length - 1; r >= 0; --r)
                t = t * l + e[r];
            return t
        }
        ,
        e.prototype.simplify = function() {
            var e = this.buf;
            return 1 == e.length ? e[0] : this
        }
        ,
        e
    }(), c = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, d = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
    function f(e, t) {
        return e.length > t && (e = e.substring(0, t) + "\u2026"),
        e
    }
    var p, h = function() {
        function e(t, r) {
            this.hexDigits = "0123456789ABCDEF",
            t instanceof e ? (this.enc = t.enc,
            this.pos = t.pos) : (this.enc = t,
            this.pos = r)
        }
        return e.prototype.get = function(e) {
            if (void 0 === e && (e = this.pos++),
            e >= this.enc.length)
                throw new Error("Requesting byte offset ".concat(e, " on a stream of length ").concat(this.enc.length));
            return "string" === typeof this.enc ? this.enc.charCodeAt(e) : this.enc[e]
        }
        ,
        e.prototype.hexByte = function(e) {
            return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(15 & e)
        }
        ,
        e.prototype.hexDump = function(e, t, r) {
            for (var n = "", a = e; a < t; ++a)
                if (n += this.hexByte(this.get(a)),
                !0 !== r)
                    switch (15 & a) {
                    case 7:
                        n += "  ";
                        break;
                    case 15:
                        n += "\n";
                        break;
                    default:
                        n += " "
                    }
            return n
        }
        ,
        e.prototype.isASCII = function(e, t) {
            for (var r = e; r < t; ++r) {
                var n = this.get(r);
                if (n < 32 || n > 176)
                    return !1
            }
            return !0
        }
        ,
        e.prototype.parseStringISO = function(e, t) {
            for (var r = "", n = e; n < t; ++n)
                r += String.fromCharCode(this.get(n));
            return r
        }
        ,
        e.prototype.parseStringUTF = function(e, t) {
            for (var r = "", n = e; n < t; ) {
                var a = this.get(n++);
                r += a < 128 ? String.fromCharCode(a) : a > 191 && a < 224 ? String.fromCharCode((31 & a) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & a) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++))
            }
            return r
        }
        ,
        e.prototype.parseStringBMP = function(e, t) {
            for (var r, n, a = "", o = e; o < t; )
                r = this.get(o++),
                n = this.get(o++),
                a += String.fromCharCode(r << 8 | n);
            return a
        }
        ,
        e.prototype.parseTime = function(e, t, r) {
            var n = this.parseStringISO(e, t)
              , a = (r ? c : d).exec(n);
            return a ? (r && (a[1] = +a[1],
            a[1] += +a[1] < 70 ? 2e3 : 1900),
            n = a[1] + "-" + a[2] + "-" + a[3] + " " + a[4],
            a[5] && (n += ":" + a[5],
            a[6] && (n += ":" + a[6],
            a[7] && (n += "." + a[7]))),
            a[8] && (n += " UTC",
            "Z" != a[8] && (n += a[8],
            a[9] && (n += ":" + a[9]))),
            n) : "Unrecognized time: " + n
        }
        ,
        e.prototype.parseInteger = function(e, t) {
            for (var r, n = this.get(e), a = n > 127, o = a ? 255 : 0, i = ""; n == o && ++e < t; )
                n = this.get(e);
            if (0 === (r = t - e))
                return a ? -1 : 0;
            if (r > 4) {
                for (i = n,
                r <<= 3; 0 == (128 & (+i ^ o)); )
                    i = +i << 1,
                    --r;
                i = "(" + r + " bit)\n"
            }
            a && (n -= 256);
            for (var s = new u(n), l = e + 1; l < t; ++l)
                s.mulAdd(256, this.get(l));
            return i + s.toString()
        }
        ,
        e.prototype.parseBitString = function(e, t, r) {
            for (var n = this.get(e), a = "(" + ((t - e - 1 << 3) - n) + " bit)\n", o = "", i = e + 1; i < t; ++i) {
                for (var s = this.get(i), l = i == t - 1 ? n : 0, u = 7; u >= l; --u)
                    o += s >> u & 1 ? "1" : "0";
                if (o.length > r)
                    return a + f(o, r)
            }
            return a + o
        }
        ,
        e.prototype.parseOctetString = function(e, t, r) {
            if (this.isASCII(e, t))
                return f(this.parseStringISO(e, t), r);
            var n = t - e
              , a = "(" + n + " byte)\n";
            n > (r /= 2) && (t = e + r);
            for (var o = e; o < t; ++o)
                a += this.hexByte(this.get(o));
            return n > r && (a += "\u2026"),
            a
        }
        ,
        e.prototype.parseOID = function(e, t, r) {
            for (var n = "", a = new u, o = 0, i = e; i < t; ++i) {
                var s = this.get(i);
                if (a.mulAdd(128, 127 & s),
                o += 7,
                !(128 & s)) {
                    if ("" === n)
                        if ((a = a.simplify())instanceof u)
                            a.sub(80),
                            n = "2." + a.toString();
                        else {
                            var l = a < 80 ? a < 40 ? 0 : 1 : 2;
                            n = l + "." + (a - 40 * l)
                        }
                    else
                        n += "." + a.toString();
                    if (n.length > r)
                        return f(n, r);
                    a = new u,
                    o = 0
                }
            }
            return o > 0 && (n += ".incomplete"),
            n
        }
        ,
        e
    }(), _ = function() {
        function e(e, t, r, n, a) {
            if (!(n instanceof m))
                throw new Error("Invalid tag value.");
            this.stream = e,
            this.header = t,
            this.length = r,
            this.tag = n,
            this.sub = a
        }
        return e.prototype.typeName = function() {
            switch (this.tag.tagClass) {
            case 0:
                switch (this.tag.tagNumber) {
                case 0:
                    return "EOC";
                case 1:
                    return "BOOLEAN";
                case 2:
                    return "INTEGER";
                case 3:
                    return "BIT_STRING";
                case 4:
                    return "OCTET_STRING";
                case 5:
                    return "NULL";
                case 6:
                    return "OBJECT_IDENTIFIER";
                case 7:
                    return "ObjectDescriptor";
                case 8:
                    return "EXTERNAL";
                case 9:
                    return "REAL";
                case 10:
                    return "ENUMERATED";
                case 11:
                    return "EMBEDDED_PDV";
                case 12:
                    return "UTF8String";
                case 16:
                    return "SEQUENCE";
                case 17:
                    return "SET";
                case 18:
                    return "NumericString";
                case 19:
                    return "PrintableString";
                case 20:
                    return "TeletexString";
                case 21:
                    return "VideotexString";
                case 22:
                    return "IA5String";
                case 23:
                    return "UTCTime";
                case 24:
                    return "GeneralizedTime";
                case 25:
                    return "GraphicString";
                case 26:
                    return "VisibleString";
                case 27:
                    return "GeneralString";
                case 28:
                    return "UniversalString";
                case 30:
                    return "BMPString"
                }
                return "Universal_" + this.tag.tagNumber.toString();
            case 1:
                return "Application_" + this.tag.tagNumber.toString();
            case 2:
                return "[" + this.tag.tagNumber.toString() + "]";
            case 3:
                return "Private_" + this.tag.tagNumber.toString()
            }
        }
        ,
        e.prototype.content = function(e) {
            if (void 0 === this.tag)
                return null;
            void 0 === e && (e = 1 / 0);
            var t = this.posContent()
              , r = Math.abs(this.length);
            if (!this.tag.isUniversal())
                return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + r, e);
            switch (this.tag.tagNumber) {
            case 1:
                return 0 === this.stream.get(t) ? "false" : "true";
            case 2:
                return this.stream.parseInteger(t, t + r);
            case 3:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(t, t + r, e);
            case 4:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + r, e);
            case 6:
                return this.stream.parseOID(t, t + r, e);
            case 16:
            case 17:
                return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
            case 12:
                return f(this.stream.parseStringUTF(t, t + r), e);
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 26:
                return f(this.stream.parseStringISO(t, t + r), e);
            case 30:
                return f(this.stream.parseStringBMP(t, t + r), e);
            case 23:
            case 24:
                return this.stream.parseTime(t, t + r, 23 == this.tag.tagNumber)
            }
            return null
        }
        ,
        e.prototype.toString = function() {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
        }
        ,
        e.prototype.toPrettyString = function(e) {
            void 0 === e && (e = "");
            var t = e + this.typeName() + " @" + this.stream.pos;
            if (this.length >= 0 && (t += "+"),
            t += this.length,
            this.tag.tagConstructed ? t += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (t += " (encapsulates)"),
            t += "\n",
            null !== this.sub) {
                e += "  ";
                for (var r = 0, n = this.sub.length; r < n; ++r)
                    t += this.sub[r].toPrettyString(e)
            }
            return t
        }
        ,
        e.prototype.posStart = function() {
            return this.stream.pos
        }
        ,
        e.prototype.posContent = function() {
            return this.stream.pos + this.header
        }
        ,
        e.prototype.posEnd = function() {
            return this.stream.pos + this.header + Math.abs(this.length)
        }
        ,
        e.prototype.toHexString = function() {
            return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
        }
        ,
        e.decodeLength = function(e) {
            var t = e.get()
              , r = 127 & t;
            if (r == t)
                return r;
            if (r > 6)
                throw new Error("Length over 48 bits not supported at position " + (e.pos - 1));
            if (0 === r)
                return null;
            t = 0;
            for (var n = 0; n < r; ++n)
                t = 256 * t + e.get();
            return t
        }
        ,
        e.prototype.getHexStringValue = function() {
            var e = this.toHexString()
              , t = 2 * this.header
              , r = 2 * this.length;
            return e.substr(t, r)
        }
        ,
        e.decode = function(t) {
            var r;
            r = t instanceof h ? t : new h(t,0);
            var n = new h(r)
              , a = new m(r)
              , o = e.decodeLength(r)
              , i = r.pos
              , s = i - n.pos
              , l = null
              , u = function() {
                var t = [];
                if (null !== o) {
                    for (var n = i + o; r.pos < n; )
                        t[t.length] = e.decode(r);
                    if (r.pos != n)
                        throw new Error("Content size is not correct for container starting at offset " + i)
                } else
                    try {
                        for (; ; ) {
                            var a = e.decode(r);
                            if (a.tag.isEOC())
                                break;
                            t[t.length] = a
                        }
                        o = i - r.pos
                    } catch (s) {
                        throw new Error("Exception while decoding undefined length content: " + s)
                    }
                return t
            };
            if (a.tagConstructed)
                l = u();
            else if (a.isUniversal() && (3 == a.tagNumber || 4 == a.tagNumber))
                try {
                    if (3 == a.tagNumber && 0 != r.get())
                        throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                    l = u();
                    for (var c = 0; c < l.length; ++c)
                        if (l[c].tag.isEOC())
                            throw new Error("EOC is not supposed to be actual content.")
                } catch (d) {
                    l = null
                }
            if (null === l) {
                if (null === o)
                    throw new Error("We can't skip over an invalid tag with undefined length at offset " + i);
                r.pos = i + Math.abs(o)
            }
            return new e(n,s,o,a,l)
        }
        ,
        e
    }(), m = function() {
        function e(e) {
            var t = e.get();
            if (this.tagClass = t >> 6,
            this.tagConstructed = 0 !== (32 & t),
            this.tagNumber = 31 & t,
            31 == this.tagNumber) {
                var r = new u;
                do {
                    t = e.get(),
                    r.mulAdd(128, 127 & t)
                } while (128 & t);
                this.tagNumber = r.simplify()
            }
        }
        return e.prototype.isUniversal = function() {
            return 0 === this.tagClass
        }
        ,
        e.prototype.isEOC = function() {
            return 0 === this.tagClass && 0 === this.tagNumber
        }
        ,
        e
    }(), b = r(65), v = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], g = (1 << 26) / v[v.length - 1], y = function() {
        function e(e, t, r) {
            null != e && ("number" == typeof e ? this.fromNumber(e, t, r) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
        }
        return e.prototype.toString = function(e) {
            if (this.s < 0)
                return "-" + this.negate().toString(e);
            var t;
            if (16 == e)
                t = 4;
            else if (8 == e)
                t = 3;
            else if (2 == e)
                t = 1;
            else if (32 == e)
                t = 5;
            else {
                if (4 != e)
                    return this.toRadix(e);
                t = 2
            }
            var r, n = (1 << t) - 1, a = !1, o = "", i = this.t, s = this.DB - i * this.DB % t;
            if (i-- > 0)
                for (s < this.DB && (r = this[i] >> s) > 0 && (a = !0,
                o = Object(b.b)(r)); i >= 0; )
                    s < t ? (r = (this[i] & (1 << s) - 1) << t - s,
                    r |= this[--i] >> (s += this.DB - t)) : (r = this[i] >> (s -= t) & n,
                    s <= 0 && (s += this.DB,
                    --i)),
                    r > 0 && (a = !0),
                    a && (o += Object(b.b)(r));
            return a ? o : "0"
        }
        ,
        e.prototype.negate = function() {
            var t = O();
            return e.ZERO.subTo(this, t),
            t
        }
        ,
        e.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this
        }
        ,
        e.prototype.compareTo = function(e) {
            var t = this.s - e.s;
            if (0 != t)
                return t;
            var r = this.t;
            if (0 != (t = r - e.t))
                return this.s < 0 ? -t : t;
            for (; --r >= 0; )
                if (0 != (t = this[r] - e[r]))
                    return t;
            return 0
        }
        ,
        e.prototype.bitLength = function() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + R(this[this.t - 1] ^ this.s & this.DM)
        }
        ,
        e.prototype.mod = function(t) {
            var r = O();
            return this.abs().divRemTo(t, null, r),
            this.s < 0 && r.compareTo(e.ZERO) > 0 && t.subTo(r, r),
            r
        }
        ,
        e.prototype.modPowInt = function(e, t) {
            var r;
            return r = e < 256 || t.isEven() ? new k(t) : new C(t),
            this.exp(e, r)
        }
        ,
        e.prototype.clone = function() {
            var e = O();
            return this.copyTo(e),
            e
        }
        ,
        e.prototype.intValue = function() {
            if (this.s < 0) {
                if (1 == this.t)
                    return this[0] - this.DV;
                if (0 == this.t)
                    return -1
            } else {
                if (1 == this.t)
                    return this[0];
                if (0 == this.t)
                    return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }
        ,
        e.prototype.byteValue = function() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24
        }
        ,
        e.prototype.shortValue = function() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16
        }
        ,
        e.prototype.signum = function() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }
        ,
        e.prototype.toByteArray = function() {
            var e = this.t
              , t = [];
            t[0] = this.s;
            var r, n = this.DB - e * this.DB % 8, a = 0;
            if (e-- > 0)
                for (n < this.DB && (r = this[e] >> n) != (this.s & this.DM) >> n && (t[a++] = r | this.s << this.DB - n); e >= 0; )
                    n < 8 ? (r = (this[e] & (1 << n) - 1) << 8 - n,
                    r |= this[--e] >> (n += this.DB - 8)) : (r = this[e] >> (n -= 8) & 255,
                    n <= 0 && (n += this.DB,
                    --e)),
                    0 != (128 & r) && (r |= -256),
                    0 == a && (128 & this.s) != (128 & r) && ++a,
                    (a > 0 || r != this.s) && (t[a++] = r);
            return t
        }
        ,
        e.prototype.equals = function(e) {
            return 0 == this.compareTo(e)
        }
        ,
        e.prototype.min = function(e) {
            return this.compareTo(e) < 0 ? this : e
        }
        ,
        e.prototype.max = function(e) {
            return this.compareTo(e) > 0 ? this : e
        }
        ,
        e.prototype.and = function(e) {
            var t = O();
            return this.bitwiseTo(e, b.d, t),
            t
        }
        ,
        e.prototype.or = function(e) {
            var t = O();
            return this.bitwiseTo(e, b.f, t),
            t
        }
        ,
        e.prototype.xor = function(e) {
            var t = O();
            return this.bitwiseTo(e, b.g, t),
            t
        }
        ,
        e.prototype.andNot = function(e) {
            var t = O();
            return this.bitwiseTo(e, b.e, t),
            t
        }
        ,
        e.prototype.not = function() {
            for (var e = O(), t = 0; t < this.t; ++t)
                e[t] = this.DM & ~this[t];
            return e.t = this.t,
            e.s = ~this.s,
            e
        }
        ,
        e.prototype.shiftLeft = function(e) {
            var t = O();
            return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t),
            t
        }
        ,
        e.prototype.shiftRight = function(e) {
            var t = O();
            return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t),
            t
        }
        ,
        e.prototype.getLowestSetBit = function() {
            for (var e = 0; e < this.t; ++e)
                if (0 != this[e])
                    return e * this.DB + Object(b.c)(this[e]);
            return this.s < 0 ? this.t * this.DB : -1
        }
        ,
        e.prototype.bitCount = function() {
            for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r)
                e += Object(b.a)(this[r] ^ t);
            return e
        }
        ,
        e.prototype.testBit = function(e) {
            var t = Math.floor(e / this.DB);
            return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
        }
        ,
        e.prototype.setBit = function(e) {
            return this.changeBit(e, b.f)
        }
        ,
        e.prototype.clearBit = function(e) {
            return this.changeBit(e, b.e)
        }
        ,
        e.prototype.flipBit = function(e) {
            return this.changeBit(e, b.g)
        }
        ,
        e.prototype.add = function(e) {
            var t = O();
            return this.addTo(e, t),
            t
        }
        ,
        e.prototype.subtract = function(e) {
            var t = O();
            return this.subTo(e, t),
            t
        }
        ,
        e.prototype.multiply = function(e) {
            var t = O();
            return this.multiplyTo(e, t),
            t
        }
        ,
        e.prototype.divide = function(e) {
            var t = O();
            return this.divRemTo(e, t, null),
            t
        }
        ,
        e.prototype.remainder = function(e) {
            var t = O();
            return this.divRemTo(e, null, t),
            t
        }
        ,
        e.prototype.divideAndRemainder = function(e) {
            var t = O()
              , r = O();
            return this.divRemTo(e, t, r),
            [t, r]
        }
        ,
        e.prototype.modPow = function(e, t) {
            var r, n, a = e.bitLength(), o = D(1);
            if (a <= 0)
                return o;
            r = a < 18 ? 1 : a < 48 ? 3 : a < 144 ? 4 : a < 768 ? 5 : 6,
            n = a < 8 ? new k(t) : t.isEven() ? new x(t) : new C(t);
            var i = []
              , s = 3
              , l = r - 1
              , u = (1 << r) - 1;
            if (i[1] = n.convert(this),
            r > 1) {
                var c = O();
                for (n.sqrTo(i[1], c); s <= u; )
                    i[s] = O(),
                    n.mulTo(c, i[s - 2], i[s]),
                    s += 2
            }
            var d, f, p = e.t - 1, h = !0, _ = O();
            for (a = R(e[p]) - 1; p >= 0; ) {
                for (a >= l ? d = e[p] >> a - l & u : (d = (e[p] & (1 << a + 1) - 1) << l - a,
                p > 0 && (d |= e[p - 1] >> this.DB + a - l)),
                s = r; 0 == (1 & d); )
                    d >>= 1,
                    --s;
                if ((a -= s) < 0 && (a += this.DB,
                --p),
                h)
                    i[d].copyTo(o),
                    h = !1;
                else {
                    for (; s > 1; )
                        n.sqrTo(o, _),
                        n.sqrTo(_, o),
                        s -= 2;
                    s > 0 ? n.sqrTo(o, _) : (f = o,
                    o = _,
                    _ = f),
                    n.mulTo(_, i[d], o)
                }
                for (; p >= 0 && 0 == (e[p] & 1 << a); )
                    n.sqrTo(o, _),
                    f = o,
                    o = _,
                    _ = f,
                    --a < 0 && (a = this.DB - 1,
                    --p)
            }
            return n.revert(o)
        }
        ,
        e.prototype.modInverse = function(t) {
            var r = t.isEven();
            if (this.isEven() && r || 0 == t.signum())
                return e.ZERO;
            for (var n = t.clone(), a = this.clone(), o = D(1), i = D(0), s = D(0), l = D(1); 0 != n.signum(); ) {
                for (; n.isEven(); )
                    n.rShiftTo(1, n),
                    r ? (o.isEven() && i.isEven() || (o.addTo(this, o),
                    i.subTo(t, i)),
                    o.rShiftTo(1, o)) : i.isEven() || i.subTo(t, i),
                    i.rShiftTo(1, i);
                for (; a.isEven(); )
                    a.rShiftTo(1, a),
                    r ? (s.isEven() && l.isEven() || (s.addTo(this, s),
                    l.subTo(t, l)),
                    s.rShiftTo(1, s)) : l.isEven() || l.subTo(t, l),
                    l.rShiftTo(1, l);
                n.compareTo(a) >= 0 ? (n.subTo(a, n),
                r && o.subTo(s, o),
                i.subTo(l, i)) : (a.subTo(n, a),
                r && s.subTo(o, s),
                l.subTo(i, l))
            }
            return 0 != a.compareTo(e.ONE) ? e.ZERO : l.compareTo(t) >= 0 ? l.subtract(t) : l.signum() < 0 ? (l.addTo(t, l),
            l.signum() < 0 ? l.add(t) : l) : l
        }
        ,
        e.prototype.pow = function(e) {
            return this.exp(e, new w)
        }
        ,
        e.prototype.gcd = function(e) {
            var t = this.s < 0 ? this.negate() : this.clone()
              , r = e.s < 0 ? e.negate() : e.clone();
            if (t.compareTo(r) < 0) {
                var n = t;
                t = r,
                r = n
            }
            var a = t.getLowestSetBit()
              , o = r.getLowestSetBit();
            if (o < 0)
                return t;
            for (a < o && (o = a),
            o > 0 && (t.rShiftTo(o, t),
            r.rShiftTo(o, r)); t.signum() > 0; )
                (a = t.getLowestSetBit()) > 0 && t.rShiftTo(a, t),
                (a = r.getLowestSetBit()) > 0 && r.rShiftTo(a, r),
                t.compareTo(r) >= 0 ? (t.subTo(r, t),
                t.rShiftTo(1, t)) : (r.subTo(t, r),
                r.rShiftTo(1, r));
            return o > 0 && r.lShiftTo(o, r),
            r
        }
        ,
        e.prototype.isProbablePrime = function(e) {
            var t, r = this.abs();
            if (1 == r.t && r[0] <= v[v.length - 1]) {
                for (t = 0; t < v.length; ++t)
                    if (r[0] == v[t])
                        return !0;
                return !1
            }
            if (r.isEven())
                return !1;
            for (t = 1; t < v.length; ) {
                for (var n = v[t], a = t + 1; a < v.length && n < g; )
                    n *= v[a++];
                for (n = r.modInt(n); t < a; )
                    if (n % v[t++] == 0)
                        return !1
            }
            return r.millerRabin(e)
        }
        ,
        e.prototype.copyTo = function(e) {
            for (var t = this.t - 1; t >= 0; --t)
                e[t] = this[t];
            e.t = this.t,
            e.s = this.s
        }
        ,
        e.prototype.fromInt = function(e) {
            this.t = 1,
            this.s = e < 0 ? -1 : 0,
            e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
        }
        ,
        e.prototype.fromString = function(t, r) {
            var n;
            if (16 == r)
                n = 4;
            else if (8 == r)
                n = 3;
            else if (256 == r)
                n = 8;
            else if (2 == r)
                n = 1;
            else if (32 == r)
                n = 5;
            else {
                if (4 != r)
                    return void this.fromRadix(t, r);
                n = 2
            }
            this.t = 0,
            this.s = 0;
            for (var a = t.length, o = !1, i = 0; --a >= 0; ) {
                var s = 8 == n ? 255 & +t[a] : M(t, a);
                s < 0 ? "-" == t.charAt(a) && (o = !0) : (o = !1,
                0 == i ? this[this.t++] = s : i + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i,
                this[this.t++] = s >> this.DB - i) : this[this.t - 1] |= s << i,
                (i += n) >= this.DB && (i -= this.DB))
            }
            8 == n && 0 != (128 & +t[0]) && (this.s = -1,
            i > 0 && (this[this.t - 1] |= (1 << this.DB - i) - 1 << i)),
            this.clamp(),
            o && e.ZERO.subTo(this, this)
        }
        ,
        e.prototype.clamp = function() {
            for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
                --this.t
        }
        ,
        e.prototype.dlShiftTo = function(e, t) {
            var r;
            for (r = this.t - 1; r >= 0; --r)
                t[r + e] = this[r];
            for (r = e - 1; r >= 0; --r)
                t[r] = 0;
            t.t = this.t + e,
            t.s = this.s
        }
        ,
        e.prototype.drShiftTo = function(e, t) {
            for (var r = e; r < this.t; ++r)
                t[r - e] = this[r];
            t.t = Math.max(this.t - e, 0),
            t.s = this.s
        }
        ,
        e.prototype.lShiftTo = function(e, t) {
            for (var r = e % this.DB, n = this.DB - r, a = (1 << n) - 1, o = Math.floor(e / this.DB), i = this.s << r & this.DM, s = this.t - 1; s >= 0; --s)
                t[s + o + 1] = this[s] >> n | i,
                i = (this[s] & a) << r;
            for (s = o - 1; s >= 0; --s)
                t[s] = 0;
            t[o] = i,
            t.t = this.t + o + 1,
            t.s = this.s,
            t.clamp()
        }
        ,
        e.prototype.rShiftTo = function(e, t) {
            t.s = this.s;
            var r = Math.floor(e / this.DB);
            if (r >= this.t)
                t.t = 0;
            else {
                var n = e % this.DB
                  , a = this.DB - n
                  , o = (1 << n) - 1;
                t[0] = this[r] >> n;
                for (var i = r + 1; i < this.t; ++i)
                    t[i - r - 1] |= (this[i] & o) << a,
                    t[i - r] = this[i] >> n;
                n > 0 && (t[this.t - r - 1] |= (this.s & o) << a),
                t.t = this.t - r,
                t.clamp()
            }
        }
        ,
        e.prototype.subTo = function(e, t) {
            for (var r = 0, n = 0, a = Math.min(e.t, this.t); r < a; )
                n += this[r] - e[r],
                t[r++] = n & this.DM,
                n >>= this.DB;
            if (e.t < this.t) {
                for (n -= e.s; r < this.t; )
                    n += this[r],
                    t[r++] = n & this.DM,
                    n >>= this.DB;
                n += this.s
            } else {
                for (n += this.s; r < e.t; )
                    n -= e[r],
                    t[r++] = n & this.DM,
                    n >>= this.DB;
                n -= e.s
            }
            t.s = n < 0 ? -1 : 0,
            n < -1 ? t[r++] = this.DV + n : n > 0 && (t[r++] = n),
            t.t = r,
            t.clamp()
        }
        ,
        e.prototype.multiplyTo = function(t, r) {
            var n = this.abs()
              , a = t.abs()
              , o = n.t;
            for (r.t = o + a.t; --o >= 0; )
                r[o] = 0;
            for (o = 0; o < a.t; ++o)
                r[o + n.t] = n.am(0, a[o], r, o, 0, n.t);
            r.s = 0,
            r.clamp(),
            this.s != t.s && e.ZERO.subTo(r, r)
        }
        ,
        e.prototype.squareTo = function(e) {
            for (var t = this.abs(), r = e.t = 2 * t.t; --r >= 0; )
                e[r] = 0;
            for (r = 0; r < t.t - 1; ++r) {
                var n = t.am(r, t[r], e, 2 * r, 0, 1);
                (e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, n, t.t - r - 1)) >= t.DV && (e[r + t.t] -= t.DV,
                e[r + t.t + 1] = 1)
            }
            e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)),
            e.s = 0,
            e.clamp()
        }
        ,
        e.prototype.divRemTo = function(t, r, n) {
            var a = t.abs();
            if (!(a.t <= 0)) {
                var o = this.abs();
                if (o.t < a.t)
                    return null != r && r.fromInt(0),
                    void (null != n && this.copyTo(n));
                null == n && (n = O());
                var i = O()
                  , s = this.s
                  , l = t.s
                  , u = this.DB - R(a[a.t - 1]);
                u > 0 ? (a.lShiftTo(u, i),
                o.lShiftTo(u, n)) : (a.copyTo(i),
                o.copyTo(n));
                var c = i.t
                  , d = i[c - 1];
                if (0 != d) {
                    var f = d * (1 << this.F1) + (c > 1 ? i[c - 2] >> this.F2 : 0)
                      , p = this.FV / f
                      , h = (1 << this.F1) / f
                      , _ = 1 << this.F2
                      , m = n.t
                      , b = m - c
                      , v = null == r ? O() : r;
                    for (i.dlShiftTo(b, v),
                    n.compareTo(v) >= 0 && (n[n.t++] = 1,
                    n.subTo(v, n)),
                    e.ONE.dlShiftTo(c, v),
                    v.subTo(i, i); i.t < c; )
                        i[i.t++] = 0;
                    for (; --b >= 0; ) {
                        var g = n[--m] == d ? this.DM : Math.floor(n[m] * p + (n[m - 1] + _) * h);
                        if ((n[m] += i.am(0, g, n, b, 0, c)) < g)
                            for (i.dlShiftTo(b, v),
                            n.subTo(v, n); n[m] < --g; )
                                n.subTo(v, n)
                    }
                    null != r && (n.drShiftTo(c, r),
                    s != l && e.ZERO.subTo(r, r)),
                    n.t = c,
                    n.clamp(),
                    u > 0 && n.rShiftTo(u, n),
                    s < 0 && e.ZERO.subTo(n, n)
                }
            }
        }
        ,
        e.prototype.invDigit = function() {
            if (this.t < 1)
                return 0;
            var e = this[0];
            if (0 == (1 & e))
                return 0;
            var t = 3 & e;
            return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
        }
        ,
        e.prototype.isEven = function() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        ,
        e.prototype.exp = function(t, r) {
            if (t > 4294967295 || t < 1)
                return e.ONE;
            var n = O()
              , a = O()
              , o = r.convert(this)
              , i = R(t) - 1;
            for (o.copyTo(n); --i >= 0; )
                if (r.sqrTo(n, a),
                (t & 1 << i) > 0)
                    r.mulTo(a, o, n);
                else {
                    var s = n;
                    n = a,
                    a = s
                }
            return r.revert(n)
        }
        ,
        e.prototype.chunkSize = function(e) {
            return Math.floor(Math.LN2 * this.DB / Math.log(e))
        }
        ,
        e.prototype.toRadix = function(e) {
            if (null == e && (e = 10),
            0 == this.signum() || e < 2 || e > 36)
                return "0";
            var t = this.chunkSize(e)
              , r = Math.pow(e, t)
              , n = D(r)
              , a = O()
              , o = O()
              , i = "";
            for (this.divRemTo(n, a, o); a.signum() > 0; )
                i = (r + o.intValue()).toString(e).substr(1) + i,
                a.divRemTo(n, a, o);
            return o.intValue().toString(e) + i
        }
        ,
        e.prototype.fromRadix = function(t, r) {
            this.fromInt(0),
            null == r && (r = 10);
            for (var n = this.chunkSize(r), a = Math.pow(r, n), o = !1, i = 0, s = 0, l = 0; l < t.length; ++l) {
                var u = M(t, l);
                u < 0 ? "-" == t.charAt(l) && 0 == this.signum() && (o = !0) : (s = r * s + u,
                ++i >= n && (this.dMultiply(a),
                this.dAddOffset(s, 0),
                i = 0,
                s = 0))
            }
            i > 0 && (this.dMultiply(Math.pow(r, i)),
            this.dAddOffset(s, 0)),
            o && e.ZERO.subTo(this, this)
        }
        ,
        e.prototype.fromNumber = function(t, r, n) {
            if ("number" == typeof r)
                if (t < 2)
                    this.fromInt(1);
                else
                    for (this.fromNumber(t, n),
                    this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), b.f, this),
                    this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(r); )
                        this.dAddOffset(2, 0),
                        this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
            else {
                var a = []
                  , o = 7 & t;
                a.length = 1 + (t >> 3),
                r.nextBytes(a),
                o > 0 ? a[0] &= (1 << o) - 1 : a[0] = 0,
                this.fromString(a, 256)
            }
        }
        ,
        e.prototype.bitwiseTo = function(e, t, r) {
            var n, a, o = Math.min(e.t, this.t);
            for (n = 0; n < o; ++n)
                r[n] = t(this[n], e[n]);
            if (e.t < this.t) {
                for (a = e.s & this.DM,
                n = o; n < this.t; ++n)
                    r[n] = t(this[n], a);
                r.t = this.t
            } else {
                for (a = this.s & this.DM,
                n = o; n < e.t; ++n)
                    r[n] = t(a, e[n]);
                r.t = e.t
            }
            r.s = t(this.s, e.s),
            r.clamp()
        }
        ,
        e.prototype.changeBit = function(t, r) {
            var n = e.ONE.shiftLeft(t);
            return this.bitwiseTo(n, r, n),
            n
        }
        ,
        e.prototype.addTo = function(e, t) {
            for (var r = 0, n = 0, a = Math.min(e.t, this.t); r < a; )
                n += this[r] + e[r],
                t[r++] = n & this.DM,
                n >>= this.DB;
            if (e.t < this.t) {
                for (n += e.s; r < this.t; )
                    n += this[r],
                    t[r++] = n & this.DM,
                    n >>= this.DB;
                n += this.s
            } else {
                for (n += this.s; r < e.t; )
                    n += e[r],
                    t[r++] = n & this.DM,
                    n >>= this.DB;
                n += e.s
            }
            t.s = n < 0 ? -1 : 0,
            n > 0 ? t[r++] = n : n < -1 && (t[r++] = this.DV + n),
            t.t = r,
            t.clamp()
        }
        ,
        e.prototype.dMultiply = function(e) {
            this[this.t] = this.am(0, e - 1, this, 0, 0, this.t),
            ++this.t,
            this.clamp()
        }
        ,
        e.prototype.dAddOffset = function(e, t) {
            if (0 != e) {
                for (; this.t <= t; )
                    this[this.t++] = 0;
                for (this[t] += e; this[t] >= this.DV; )
                    this[t] -= this.DV,
                    ++t >= this.t && (this[this.t++] = 0),
                    ++this[t]
            }
        }
        ,
        e.prototype.multiplyLowerTo = function(e, t, r) {
            var n = Math.min(this.t + e.t, t);
            for (r.s = 0,
            r.t = n; n > 0; )
                r[--n] = 0;
            for (var a = r.t - this.t; n < a; ++n)
                r[n + this.t] = this.am(0, e[n], r, n, 0, this.t);
            for (a = Math.min(e.t, t); n < a; ++n)
                this.am(0, e[n], r, n, 0, t - n);
            r.clamp()
        }
        ,
        e.prototype.multiplyUpperTo = function(e, t, r) {
            --t;
            var n = r.t = this.t + e.t - t;
            for (r.s = 0; --n >= 0; )
                r[n] = 0;
            for (n = Math.max(t - this.t, 0); n < e.t; ++n)
                r[this.t + n - t] = this.am(t - n, e[n], r, 0, 0, this.t + n - t);
            r.clamp(),
            r.drShiftTo(1, r)
        }
        ,
        e.prototype.modInt = function(e) {
            if (e <= 0)
                return 0;
            var t = this.DV % e
              , r = this.s < 0 ? e - 1 : 0;
            if (this.t > 0)
                if (0 == t)
                    r = this[0] % e;
                else
                    for (var n = this.t - 1; n >= 0; --n)
                        r = (t * r + this[n]) % e;
            return r
        }
        ,
        e.prototype.millerRabin = function(t) {
            var r = this.subtract(e.ONE)
              , n = r.getLowestSetBit();
            if (n <= 0)
                return !1;
            var a = r.shiftRight(n);
            (t = t + 1 >> 1) > v.length && (t = v.length);
            for (var o = O(), i = 0; i < t; ++i) {
                o.fromInt(v[Math.floor(Math.random() * v.length)]);
                var s = o.modPow(a, this);
                if (0 != s.compareTo(e.ONE) && 0 != s.compareTo(r)) {
                    for (var l = 1; l++ < n && 0 != s.compareTo(r); )
                        if (0 == (s = s.modPowInt(2, this)).compareTo(e.ONE))
                            return !1;
                    if (0 != s.compareTo(r))
                        return !1
                }
            }
            return !0
        }
        ,
        e.prototype.square = function() {
            var e = O();
            return this.squareTo(e),
            e
        }
        ,
        e.prototype.gcda = function(e, t) {
            var r = this.s < 0 ? this.negate() : this.clone()
              , n = e.s < 0 ? e.negate() : e.clone();
            if (r.compareTo(n) < 0) {
                var a = r;
                r = n,
                n = a
            }
            var o = r.getLowestSetBit()
              , i = n.getLowestSetBit();
            if (i < 0)
                t(r);
            else {
                o < i && (i = o),
                i > 0 && (r.rShiftTo(i, r),
                n.rShiftTo(i, n));
                var s = function() {
                    (o = r.getLowestSetBit()) > 0 && r.rShiftTo(o, r),
                    (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
                    r.compareTo(n) >= 0 ? (r.subTo(n, r),
                    r.rShiftTo(1, r)) : (n.subTo(r, n),
                    n.rShiftTo(1, n)),
                    r.signum() > 0 ? setTimeout(s, 0) : (i > 0 && n.lShiftTo(i, n),
                    setTimeout((function() {
                        t(n)
                    }
                    ), 0))
                };
                setTimeout(s, 10)
            }
        }
        ,
        e.prototype.fromNumberAsync = function(t, r, n, a) {
            if ("number" == typeof r)
                if (t < 2)
                    this.fromInt(1);
                else {
                    this.fromNumber(t, n),
                    this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), b.f, this),
                    this.isEven() && this.dAddOffset(1, 0);
                    var o = this
                      , i = function() {
                        o.dAddOffset(2, 0),
                        o.bitLength() > t && o.subTo(e.ONE.shiftLeft(t - 1), o),
                        o.isProbablePrime(r) ? setTimeout((function() {
                            a()
                        }
                        ), 0) : setTimeout(i, 0)
                    };
                    setTimeout(i, 0)
                }
            else {
                var s = []
                  , l = 7 & t;
                s.length = 1 + (t >> 3),
                r.nextBytes(s),
                l > 0 ? s[0] &= (1 << l) - 1 : s[0] = 0,
                this.fromString(s, 256)
            }
        }
        ,
        e
    }(), w = function() {
        function e() {}
        return e.prototype.convert = function(e) {
            return e
        }
        ,
        e.prototype.revert = function(e) {
            return e
        }
        ,
        e.prototype.mulTo = function(e, t, r) {
            e.multiplyTo(t, r)
        }
        ,
        e.prototype.sqrTo = function(e, t) {
            e.squareTo(t)
        }
        ,
        e
    }(), k = function() {
        function e(e) {
            this.m = e
        }
        return e.prototype.convert = function(e) {
            return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
        }
        ,
        e.prototype.revert = function(e) {
            return e
        }
        ,
        e.prototype.reduce = function(e) {
            e.divRemTo(this.m, null, e)
        }
        ,
        e.prototype.mulTo = function(e, t, r) {
            e.multiplyTo(t, r),
            this.reduce(r)
        }
        ,
        e.prototype.sqrTo = function(e, t) {
            e.squareTo(t),
            this.reduce(t)
        }
        ,
        e
    }(), C = function() {
        function e(e) {
            this.m = e,
            this.mp = e.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << e.DB - 15) - 1,
            this.mt2 = 2 * e.t
        }
        return e.prototype.convert = function(e) {
            var t = O();
            return e.abs().dlShiftTo(this.m.t, t),
            t.divRemTo(this.m, null, t),
            e.s < 0 && t.compareTo(y.ZERO) > 0 && this.m.subTo(t, t),
            t
        }
        ,
        e.prototype.revert = function(e) {
            var t = O();
            return e.copyTo(t),
            this.reduce(t),
            t
        }
        ,
        e.prototype.reduce = function(e) {
            for (; e.t <= this.mt2; )
                e[e.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var r = 32767 & e[t]
                  , n = r * this.mpl + ((r * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                for (e[r = t + this.m.t] += this.m.am(0, n, e, t, 0, this.m.t); e[r] >= e.DV; )
                    e[r] -= e.DV,
                    e[++r]++
            }
            e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
        }
        ,
        e.prototype.mulTo = function(e, t, r) {
            e.multiplyTo(t, r),
            this.reduce(r)
        }
        ,
        e.prototype.sqrTo = function(e, t) {
            e.squareTo(t),
            this.reduce(t)
        }
        ,
        e
    }(), x = function() {
        function e(e) {
            this.m = e,
            this.r2 = O(),
            this.q3 = O(),
            y.ONE.dlShiftTo(2 * e.t, this.r2),
            this.mu = this.r2.divide(e)
        }
        return e.prototype.convert = function(e) {
            if (e.s < 0 || e.t > 2 * this.m.t)
                return e.mod(this.m);
            if (e.compareTo(this.m) < 0)
                return e;
            var t = O();
            return e.copyTo(t),
            this.reduce(t),
            t
        }
        ,
        e.prototype.revert = function(e) {
            return e
        }
        ,
        e.prototype.reduce = function(e) {
            for (e.drShiftTo(this.m.t - 1, this.r2),
            e.t > this.m.t + 1 && (e.t = this.m.t + 1,
            e.clamp()),
            this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
            this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0; )
                e.dAddOffset(1, this.m.t + 1);
            for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
                e.subTo(this.m, e)
        }
        ,
        e.prototype.mulTo = function(e, t, r) {
            e.multiplyTo(t, r),
            this.reduce(r)
        }
        ,
        e.prototype.sqrTo = function(e, t) {
            e.squareTo(t),
            this.reduce(t)
        }
        ,
        e
    }();
    function O() {
        return new y(null)
    }
    function E(e, t) {
        return new y(e,t)
    }
    var T = "undefined" !== typeof navigator;
    T && "Microsoft Internet Explorer" == navigator.appName ? (y.prototype.am = function(e, t, r, n, a, o) {
        for (var i = 32767 & t, s = t >> 15; --o >= 0; ) {
            var l = 32767 & this[e]
              , u = this[e++] >> 15
              , c = s * l + u * i;
            a = ((l = i * l + ((32767 & c) << 15) + r[n] + (1073741823 & a)) >>> 30) + (c >>> 15) + s * u + (a >>> 30),
            r[n++] = 1073741823 & l
        }
        return a
    }
    ,
    p = 30) : T && "Netscape" != navigator.appName ? (y.prototype.am = function(e, t, r, n, a, o) {
        for (; --o >= 0; ) {
            var i = t * this[e++] + r[n] + a;
            a = Math.floor(i / 67108864),
            r[n++] = 67108863 & i
        }
        return a
    }
    ,
    p = 26) : (y.prototype.am = function(e, t, r, n, a, o) {
        for (var i = 16383 & t, s = t >> 14; --o >= 0; ) {
            var l = 16383 & this[e]
              , u = this[e++] >> 14
              , c = s * l + u * i;
            a = ((l = i * l + ((16383 & c) << 14) + r[n] + a) >> 28) + (c >> 14) + s * u,
            r[n++] = 268435455 & l
        }
        return a
    }
    ,
    p = 28),
    y.prototype.DB = p,
    y.prototype.DM = (1 << p) - 1,
    y.prototype.DV = 1 << p;
    y.prototype.FV = Math.pow(2, 52),
    y.prototype.F1 = 52 - p,
    y.prototype.F2 = 2 * p - 52;
    var S, P, j = [];
    for (S = "0".charCodeAt(0),
    P = 0; P <= 9; ++P)
        j[S++] = P;
    for (S = "a".charCodeAt(0),
    P = 10; P < 36; ++P)
        j[S++] = P;
    for (S = "A".charCodeAt(0),
    P = 10; P < 36; ++P)
        j[S++] = P;
    function M(e, t) {
        var r = j[e.charCodeAt(t)];
        return null == r ? -1 : r
    }
    function D(e) {
        var t = O();
        return t.fromInt(e),
        t
    }
    function R(e) {
        var t, r = 1;
        return 0 != (t = e >>> 16) && (e = t,
        r += 16),
        0 != (t = e >> 8) && (e = t,
        r += 8),
        0 != (t = e >> 4) && (e = t,
        r += 4),
        0 != (t = e >> 2) && (e = t,
        r += 2),
        0 != (t = e >> 1) && (e = t,
        r += 1),
        r
    }
    y.ZERO = D(0),
    y.ONE = D(1);
    var N = function() {
        function e() {
            this.i = 0,
            this.j = 0,
            this.S = []
        }
        return e.prototype.init = function(e) {
            var t, r, n;
            for (t = 0; t < 256; ++t)
                this.S[t] = t;
            for (r = 0,
            t = 0; t < 256; ++t)
                r = r + this.S[t] + e[t % e.length] & 255,
                n = this.S[t],
                this.S[t] = this.S[r],
                this.S[r] = n;
            this.i = 0,
            this.j = 0
        }
        ,
        e.prototype.next = function() {
            var e;
            return this.i = this.i + 1 & 255,
            this.j = this.j + this.S[this.i] & 255,
            e = this.S[this.i],
            this.S[this.i] = this.S[this.j],
            this.S[this.j] = e,
            this.S[e + this.S[this.i] & 255]
        }
        ,
        e
    }();
    var L, A, q = null;
    if (null == q) {
        q = [],
        A = 0;
        var I = void 0;
        if ("undefined" !== typeof window && window.crypto && window.crypto.getRandomValues) {
            var H = new Uint32Array(256);
            for (window.crypto.getRandomValues(H),
            I = 0; I < H.length; ++I)
                q[A++] = 255 & H[I]
        }
        var F = 0
          , B = function(e) {
            if ((F = F || 0) >= 256 || A >= 256)
                window.removeEventListener ? window.removeEventListener("mousemove", B, !1) : window.detachEvent && window.detachEvent("onmousemove", B);
            else
                try {
                    var t = e.x + e.y;
                    q[A++] = 255 & t,
                    F += 1
                } catch (r) {}
        };
        "undefined" !== typeof window && (window.addEventListener ? window.addEventListener("mousemove", B, !1) : window.attachEvent && window.attachEvent("onmousemove", B))
    }
    function G() {
        if (null == L) {
            for (L = new N; A < 256; ) {
                var e = Math.floor(65536 * Math.random());
                q[A++] = 255 & e
            }
            for (L.init(q),
            A = 0; A < q.length; ++A)
                q[A] = 0;
            A = 0
        }
        return L.next()
    }
    var z = function() {
        function e() {}
        return e.prototype.nextBytes = function(e) {
            for (var t = 0; t < e.length; ++t)
                e[t] = G()
        }
        ,
        e
    }();
    var V = function() {
        function e() {
            this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
        }
        return e.prototype.doPublic = function(e) {
            return e.modPowInt(this.e, this.n)
        }
        ,
        e.prototype.doPrivate = function(e) {
            if (null == this.p || null == this.q)
                return e.modPow(this.d, this.n);
            for (var t = e.mod(this.p).modPow(this.dmp1, this.p), r = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(r) < 0; )
                t = t.add(this.p);
            return t.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r)
        }
        ,
        e.prototype.setPublic = function(e, t) {
            null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = E(e, 16),
            this.e = parseInt(t, 16)) : console.error("Invalid RSA public key")
        }
        ,
        e.prototype.encrypt = function(e) {
            var t = this.n.bitLength() + 7 >> 3
              , r = function(e, t) {
                if (t < e.length + 11)
                    return console.error("Message too long for RSA"),
                    null;
                for (var r = [], n = e.length - 1; n >= 0 && t > 0; ) {
                    var a = e.charCodeAt(n--);
                    a < 128 ? r[--t] = a : a > 127 && a < 2048 ? (r[--t] = 63 & a | 128,
                    r[--t] = a >> 6 | 192) : (r[--t] = 63 & a | 128,
                    r[--t] = a >> 6 & 63 | 128,
                    r[--t] = a >> 12 | 224)
                }
                r[--t] = 0;
                for (var o = new z, i = []; t > 2; ) {
                    for (i[0] = 0; 0 == i[0]; )
                        o.nextBytes(i);
                    r[--t] = i[0]
                }
                return r[--t] = 2,
                r[--t] = 0,
                new y(r)
            }(e, t);
            if (null == r)
                return null;
            var n = this.doPublic(r);
            if (null == n)
                return null;
            for (var a = n.toString(16), o = a.length, i = 0; i < 2 * t - o; i++)
                a = "0" + a;
            return a
        }
        ,
        e.prototype.setPrivate = function(e, t, r) {
            null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = E(e, 16),
            this.e = parseInt(t, 16),
            this.d = E(r, 16)) : console.error("Invalid RSA private key")
        }
        ,
        e.prototype.setPrivateEx = function(e, t, r, n, a, o, i, s) {
            null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = E(e, 16),
            this.e = parseInt(t, 16),
            this.d = E(r, 16),
            this.p = E(n, 16),
            this.q = E(a, 16),
            this.dmp1 = E(o, 16),
            this.dmq1 = E(i, 16),
            this.coeff = E(s, 16)) : console.error("Invalid RSA private key")
        }
        ,
        e.prototype.generate = function(e, t) {
            var r = new z
              , n = e >> 1;
            this.e = parseInt(t, 16);
            for (var a = new y(t,16); ; ) {
                for (; this.p = new y(e - n,1,r),
                0 != this.p.subtract(y.ONE).gcd(a).compareTo(y.ONE) || !this.p.isProbablePrime(10); )
                    ;
                for (; this.q = new y(n,1,r),
                0 != this.q.subtract(y.ONE).gcd(a).compareTo(y.ONE) || !this.q.isProbablePrime(10); )
                    ;
                if (this.p.compareTo(this.q) <= 0) {
                    var o = this.p;
                    this.p = this.q,
                    this.q = o
                }
                var i = this.p.subtract(y.ONE)
                  , s = this.q.subtract(y.ONE)
                  , l = i.multiply(s);
                if (0 == l.gcd(a).compareTo(y.ONE)) {
                    this.n = this.p.multiply(this.q),
                    this.d = a.modInverse(l),
                    this.dmp1 = this.d.mod(i),
                    this.dmq1 = this.d.mod(s),
                    this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }
        ,
        e.prototype.decrypt = function(e) {
            var t = E(e, 16)
              , r = this.doPrivate(t);
            return null == r ? null : function(e, t) {
                var r = e.toByteArray()
                  , n = 0;
                for (; n < r.length && 0 == r[n]; )
                    ++n;
                if (r.length - n != t - 1 || 2 != r[n])
                    return null;
                ++n;
                for (; 0 != r[n]; )
                    if (++n >= r.length)
                        return null;
                var a = "";
                for (; ++n < r.length; ) {
                    var o = 255 & r[n];
                    o < 128 ? a += String.fromCharCode(o) : o > 191 && o < 224 ? (a += String.fromCharCode((31 & o) << 6 | 63 & r[n + 1]),
                    ++n) : (a += String.fromCharCode((15 & o) << 12 | (63 & r[n + 1]) << 6 | 63 & r[n + 2]),
                    n += 2)
                }
                return a
            }(r, this.n.bitLength() + 7 >> 3)
        }
        ,
        e.prototype.generateAsync = function(e, t, r) {
            var n = new z
              , a = e >> 1;
            this.e = parseInt(t, 16);
            var o = new y(t,16)
              , i = this
              , s = function() {
                var t = function() {
                    if (i.p.compareTo(i.q) <= 0) {
                        var e = i.p;
                        i.p = i.q,
                        i.q = e
                    }
                    var t = i.p.subtract(y.ONE)
                      , n = i.q.subtract(y.ONE)
                      , a = t.multiply(n);
                    0 == a.gcd(o).compareTo(y.ONE) ? (i.n = i.p.multiply(i.q),
                    i.d = o.modInverse(a),
                    i.dmp1 = i.d.mod(t),
                    i.dmq1 = i.d.mod(n),
                    i.coeff = i.q.modInverse(i.p),
                    setTimeout((function() {
                        r()
                    }
                    ), 0)) : setTimeout(s, 0)
                }
                  , l = function() {
                    i.q = O(),
                    i.q.fromNumberAsync(a, 1, n, (function() {
                        i.q.subtract(y.ONE).gcda(o, (function(e) {
                            0 == e.compareTo(y.ONE) && i.q.isProbablePrime(10) ? setTimeout(t, 0) : setTimeout(l, 0)
                        }
                        ))
                    }
                    ))
                }
                  , u = function() {
                    i.p = O(),
                    i.p.fromNumberAsync(e - a, 1, n, (function() {
                        i.p.subtract(y.ONE).gcda(o, (function(e) {
                            0 == e.compareTo(y.ONE) && i.p.isProbablePrime(10) ? setTimeout(l, 0) : setTimeout(u, 0)
                        }
                        ))
                    }
                    ))
                };
                setTimeout(u, 0)
            };
            setTimeout(s, 0)
        }
        ,
        e.prototype.sign = function(e, t, r) {
            var n = function(e, t) {
                if (t < e.length + 22)
                    return console.error("Message too long for RSA"),
                    null;
                for (var r = t - e.length - 6, n = "", a = 0; a < r; a += 2)
                    n += "ff";
                return E("0001" + n + "00" + e, 16)
            }((W[r] || "") + t(e).toString(), this.n.bitLength() / 4);
            if (null == n)
                return null;
            var a = this.doPrivate(n);
            if (null == a)
                return null;
            var o = a.toString(16);
            return 0 == (1 & o.length) ? o : "0" + o
        }
        ,
        e.prototype.verify = function(e, t, r) {
            var n = E(t, 16)
              , a = this.doPublic(n);
            return null == a ? null : function(e) {
                for (var t in W)
                    if (W.hasOwnProperty(t)) {
                        var r = W[t]
                          , n = r.length;
                        if (e.substr(0, n) == r)
                            return e.substr(n)
                    }
                return e
            }(a.toString(16).replace(/^1f+00/, "")) == r(e).toString()
        }
        ,
        e
    }();
    var W = {
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        ripemd160: "3021300906052b2403020105000414"
    };
    var U = {};
    U.lang = {
        extend: function(e, t, r) {
            if (!t || !e)
                throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
            var n = function() {};
            if (n.prototype = t.prototype,
            e.prototype = new n,
            e.prototype.constructor = e,
            e.superclass = t.prototype,
            t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t),
            r) {
                var a;
                for (a in r)
                    e.prototype[a] = r[a];
                var o = function() {}
                  , i = ["toString", "valueOf"];
                try {
                    /MSIE/.test(navigator.userAgent) && (o = function(e, t) {
                        for (a = 0; a < i.length; a += 1) {
                            var r = i[a]
                              , n = t[r];
                            "function" === typeof n && n != Object.prototype[r] && (e[r] = n)
                        }
                    }
                    )
                } catch (s) {}
                o(e.prototype, r)
            }
        }
    };
    var Y = {};
    "undefined" != typeof Y.asn1 && Y.asn1 || (Y.asn1 = {}),
    Y.asn1.ASN1Util = new function() {
        this.integerToByteHex = function(e) {
            var t = e.toString(16);
            return t.length % 2 == 1 && (t = "0" + t),
            t
        }
        ,
        this.bigIntToMinTwosComplementsHex = function(e) {
            var t = e.toString(16);
            if ("-" != t.substr(0, 1))
                t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t);
            else {
                var r = t.substr(1).length;
                r % 2 == 1 ? r += 1 : t.match(/^[0-7]/) || (r += 2);
                for (var n = "", a = 0; a < r; a++)
                    n += "f";
                t = new y(n,16).xor(e).add(y.ONE).toString(16).replace(/^-/, "")
            }
            return t
        }
        ,
        this.getPEMStringFromHex = function(e, t) {
            return hextopem(e, t)
        }
        ,
        this.newObject = function(e) {
            var t = Y.asn1
              , r = t.DERBoolean
              , n = t.DERInteger
              , a = t.DERBitString
              , o = t.DEROctetString
              , i = t.DERNull
              , s = t.DERObjectIdentifier
              , l = t.DEREnumerated
              , u = t.DERUTF8String
              , c = t.DERNumericString
              , d = t.DERPrintableString
              , f = t.DERTeletexString
              , p = t.DERIA5String
              , h = t.DERUTCTime
              , _ = t.DERGeneralizedTime
              , m = t.DERSequence
              , b = t.DERSet
              , v = t.DERTaggedObject
              , g = t.ASN1Util.newObject
              , y = Object.keys(e);
            if (1 != y.length)
                throw "key of param shall be only one.";
            var w = y[0];
            if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + w + ":"))
                throw "undefined key: " + w;
            if ("bool" == w)
                return new r(e[w]);
            if ("int" == w)
                return new n(e[w]);
            if ("bitstr" == w)
                return new a(e[w]);
            if ("octstr" == w)
                return new o(e[w]);
            if ("null" == w)
                return new i(e[w]);
            if ("oid" == w)
                return new s(e[w]);
            if ("enum" == w)
                return new l(e[w]);
            if ("utf8str" == w)
                return new u(e[w]);
            if ("numstr" == w)
                return new c(e[w]);
            if ("prnstr" == w)
                return new d(e[w]);
            if ("telstr" == w)
                return new f(e[w]);
            if ("ia5str" == w)
                return new p(e[w]);
            if ("utctime" == w)
                return new h(e[w]);
            if ("gentime" == w)
                return new _(e[w]);
            if ("seq" == w) {
                for (var k = e[w], C = [], x = 0; x < k.length; x++) {
                    var O = g(k[x]);
                    C.push(O)
                }
                return new m({
                    array: C
                })
            }
            if ("set" == w) {
                for (k = e[w],
                C = [],
                x = 0; x < k.length; x++) {
                    O = g(k[x]);
                    C.push(O)
                }
                return new b({
                    array: C
                })
            }
            if ("tag" == w) {
                var E = e[w];
                if ("[object Array]" === Object.prototype.toString.call(E) && 3 == E.length) {
                    var T = g(E[2]);
                    return new v({
                        tag: E[0],
                        explicit: E[1],
                        obj: T
                    })
                }
                var S = {};
                if (void 0 !== E.explicit && (S.explicit = E.explicit),
                void 0 !== E.tag && (S.tag = E.tag),
                void 0 === E.obj)
                    throw "obj shall be specified for 'tag'.";
                return S.obj = g(E.obj),
                new v(S)
            }
        }
        ,
        this.jsonToASN1HEX = function(e) {
            return this.newObject(e).getEncodedHex()
        }
    }
    ,
    Y.asn1.ASN1Util.oidHexToInt = function(e) {
        for (var t = "", r = parseInt(e.substr(0, 2), 16), n = (t = Math.floor(r / 40) + "." + r % 40,
        ""), a = 2; a < e.length; a += 2) {
            var o = ("00000000" + parseInt(e.substr(a, 2), 16).toString(2)).slice(-8);
            if (n += o.substr(1, 7),
            "0" == o.substr(0, 1))
                t = t + "." + new y(n,2).toString(10),
                n = ""
        }
        return t
    }
    ,
    Y.asn1.ASN1Util.oidIntToHex = function(e) {
        var t = function(e) {
            var t = e.toString(16);
            return 1 == t.length && (t = "0" + t),
            t
        }
          , r = function(e) {
            var r = ""
              , n = new y(e,10).toString(2)
              , a = 7 - n.length % 7;
            7 == a && (a = 0);
            for (var o = "", i = 0; i < a; i++)
                o += "0";
            n = o + n;
            for (i = 0; i < n.length - 1; i += 7) {
                var s = n.substr(i, 7);
                i != n.length - 7 && (s = "1" + s),
                r += t(parseInt(s, 2))
            }
            return r
        };
        if (!e.match(/^[0-9.]+$/))
            throw "malformed oid string: " + e;
        var n = ""
          , a = e.split(".")
          , o = 40 * parseInt(a[0]) + parseInt(a[1]);
        n += t(o),
        a.splice(0, 2);
        for (var i = 0; i < a.length; i++)
            n += r(a[i]);
        return n
    }
    ,
    Y.asn1.ASN1Object = function() {
        this.getLengthHexFromValue = function() {
            if ("undefined" == typeof this.hV || null == this.hV)
                throw "this.hV is null or undefined.";
            if (this.hV.length % 2 == 1)
                throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
            var e = this.hV.length / 2
              , t = e.toString(16);
            if (t.length % 2 == 1 && (t = "0" + t),
            e < 128)
                return t;
            var r = t.length / 2;
            if (r > 15)
                throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
            return (128 + r).toString(16) + t
        }
        ,
        this.getEncodedHex = function() {
            return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
            this.hL = this.getLengthHexFromValue(),
            this.hTLV = this.hT + this.hL + this.hV,
            this.isModified = !1),
            this.hTLV
        }
        ,
        this.getValueHex = function() {
            return this.getEncodedHex(),
            this.hV
        }
        ,
        this.getFreshValueHex = function() {
            return ""
        }
    }
    ,
    Y.asn1.DERAbstractString = function(e) {
        Y.asn1.DERAbstractString.superclass.constructor.call(this);
        this.getString = function() {
            return this.s
        }
        ,
        this.setString = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.s = e,
            this.hV = stohex(this.s)
        }
        ,
        this.setStringHex = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.s = null,
            this.hV = e
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        "undefined" != typeof e && ("string" == typeof e ? this.setString(e) : "undefined" != typeof e.str ? this.setString(e.str) : "undefined" != typeof e.hex && this.setStringHex(e.hex))
    }
    ,
    U.lang.extend(Y.asn1.DERAbstractString, Y.asn1.ASN1Object),
    Y.asn1.DERAbstractTime = function(e) {
        Y.asn1.DERAbstractTime.superclass.constructor.call(this);
        this.localDateToUTC = function(e) {
            return utc = e.getTime() + 6e4 * e.getTimezoneOffset(),
            new Date(utc)
        }
        ,
        this.formatDate = function(e, t, r) {
            var n = this.zeroPadding
              , a = this.localDateToUTC(e)
              , o = String(a.getFullYear());
            "utc" == t && (o = o.substr(2, 2));
            var i = o + n(String(a.getMonth() + 1), 2) + n(String(a.getDate()), 2) + n(String(a.getHours()), 2) + n(String(a.getMinutes()), 2) + n(String(a.getSeconds()), 2);
            if (!0 === r) {
                var s = a.getMilliseconds();
                if (0 != s) {
                    var l = n(String(s), 3);
                    i = i + "." + (l = l.replace(/[0]+$/, ""))
                }
            }
            return i + "Z"
        }
        ,
        this.zeroPadding = function(e, t) {
            return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
        }
        ,
        this.getString = function() {
            return this.s
        }
        ,
        this.setString = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.s = e,
            this.hV = stohex(e)
        }
        ,
        this.setByDateValue = function(e, t, r, n, a, o) {
            var i = new Date(Date.UTC(e, t - 1, r, n, a, o, 0));
            this.setByDate(i)
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
    }
    ,
    U.lang.extend(Y.asn1.DERAbstractTime, Y.asn1.ASN1Object),
    Y.asn1.DERAbstractStructured = function(e) {
        Y.asn1.DERAbstractString.superclass.constructor.call(this);
        this.setByASN1ObjectArray = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.asn1Array = e
        }
        ,
        this.appendASN1Object = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.asn1Array.push(e)
        }
        ,
        this.asn1Array = new Array,
        "undefined" != typeof e && "undefined" != typeof e.array && (this.asn1Array = e.array)
    }
    ,
    U.lang.extend(Y.asn1.DERAbstractStructured, Y.asn1.ASN1Object),
    Y.asn1.DERBoolean = function() {
        Y.asn1.DERBoolean.superclass.constructor.call(this),
        this.hT = "01",
        this.hTLV = "0101ff"
    }
    ,
    U.lang.extend(Y.asn1.DERBoolean, Y.asn1.ASN1Object),
    Y.asn1.DERInteger = function(e) {
        Y.asn1.DERInteger.superclass.constructor.call(this),
        this.hT = "02",
        this.setByBigInteger = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.hV = Y.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e)
        }
        ,
        this.setByInteger = function(e) {
            var t = new y(String(e),10);
            this.setByBigInteger(t)
        }
        ,
        this.setValueHex = function(e) {
            this.hV = e
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        "undefined" != typeof e && ("undefined" != typeof e.bigint ? this.setByBigInteger(e.bigint) : "undefined" != typeof e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : "undefined" != typeof e.hex && this.setValueHex(e.hex))
    }
    ,
    U.lang.extend(Y.asn1.DERInteger, Y.asn1.ASN1Object),
    Y.asn1.DERBitString = function(e) {
        if (void 0 !== e && "undefined" !== typeof e.obj) {
            var t = Y.asn1.ASN1Util.newObject(e.obj);
            e.hex = "00" + t.getEncodedHex()
        }
        Y.asn1.DERBitString.superclass.constructor.call(this),
        this.hT = "03",
        this.setHexValueIncludingUnusedBits = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.hV = e
        }
        ,
        this.setUnusedBitsAndHexValue = function(e, t) {
            if (e < 0 || 7 < e)
                throw "unused bits shall be from 0 to 7: u = " + e;
            var r = "0" + e;
            this.hTLV = null,
            this.isModified = !0,
            this.hV = r + t
        }
        ,
        this.setByBinaryString = function(e) {
            var t = 8 - (e = e.replace(/0+$/, "")).length % 8;
            8 == t && (t = 0);
            for (var r = 0; r <= t; r++)
                e += "0";
            var n = "";
            for (r = 0; r < e.length - 1; r += 8) {
                var a = e.substr(r, 8)
                  , o = parseInt(a, 2).toString(16);
                1 == o.length && (o = "0" + o),
                n += o
            }
            this.hTLV = null,
            this.isModified = !0,
            this.hV = "0" + t + n
        }
        ,
        this.setByBooleanArray = function(e) {
            for (var t = "", r = 0; r < e.length; r++)
                1 == e[r] ? t += "1" : t += "0";
            this.setByBinaryString(t)
        }
        ,
        this.newFalseArray = function(e) {
            for (var t = new Array(e), r = 0; r < e; r++)
                t[r] = !1;
            return t
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        "undefined" != typeof e && ("string" == typeof e && e.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(e) : "undefined" != typeof e.hex ? this.setHexValueIncludingUnusedBits(e.hex) : "undefined" != typeof e.bin ? this.setByBinaryString(e.bin) : "undefined" != typeof e.array && this.setByBooleanArray(e.array))
    }
    ,
    U.lang.extend(Y.asn1.DERBitString, Y.asn1.ASN1Object),
    Y.asn1.DEROctetString = function(e) {
        if (void 0 !== e && "undefined" !== typeof e.obj) {
            var t = Y.asn1.ASN1Util.newObject(e.obj);
            e.hex = t.getEncodedHex()
        }
        Y.asn1.DEROctetString.superclass.constructor.call(this, e),
        this.hT = "04"
    }
    ,
    U.lang.extend(Y.asn1.DEROctetString, Y.asn1.DERAbstractString),
    Y.asn1.DERNull = function() {
        Y.asn1.DERNull.superclass.constructor.call(this),
        this.hT = "05",
        this.hTLV = "0500"
    }
    ,
    U.lang.extend(Y.asn1.DERNull, Y.asn1.ASN1Object),
    Y.asn1.DERObjectIdentifier = function(e) {
        var t = function(e) {
            var t = e.toString(16);
            return 1 == t.length && (t = "0" + t),
            t
        }
          , r = function(e) {
            var r = ""
              , n = new y(e,10).toString(2)
              , a = 7 - n.length % 7;
            7 == a && (a = 0);
            for (var o = "", i = 0; i < a; i++)
                o += "0";
            n = o + n;
            for (i = 0; i < n.length - 1; i += 7) {
                var s = n.substr(i, 7);
                i != n.length - 7 && (s = "1" + s),
                r += t(parseInt(s, 2))
            }
            return r
        };
        Y.asn1.DERObjectIdentifier.superclass.constructor.call(this),
        this.hT = "06",
        this.setValueHex = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.s = null,
            this.hV = e
        }
        ,
        this.setValueOidString = function(e) {
            if (!e.match(/^[0-9.]+$/))
                throw "malformed oid string: " + e;
            var n = ""
              , a = e.split(".")
              , o = 40 * parseInt(a[0]) + parseInt(a[1]);
            n += t(o),
            a.splice(0, 2);
            for (var i = 0; i < a.length; i++)
                n += r(a[i]);
            this.hTLV = null,
            this.isModified = !0,
            this.s = null,
            this.hV = n
        }
        ,
        this.setValueName = function(e) {
            var t = Y.asn1.x509.OID.name2oid(e);
            if ("" === t)
                throw "DERObjectIdentifier oidName undefined: " + e;
            this.setValueOidString(t)
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        void 0 !== e && ("string" === typeof e ? e.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(e) : this.setValueName(e) : void 0 !== e.oid ? this.setValueOidString(e.oid) : void 0 !== e.hex ? this.setValueHex(e.hex) : void 0 !== e.name && this.setValueName(e.name))
    }
    ,
    U.lang.extend(Y.asn1.DERObjectIdentifier, Y.asn1.ASN1Object),
    Y.asn1.DEREnumerated = function(e) {
        Y.asn1.DEREnumerated.superclass.constructor.call(this),
        this.hT = "0a",
        this.setByBigInteger = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.hV = Y.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e)
        }
        ,
        this.setByInteger = function(e) {
            var t = new y(String(e),10);
            this.setByBigInteger(t)
        }
        ,
        this.setValueHex = function(e) {
            this.hV = e
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        "undefined" != typeof e && ("undefined" != typeof e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : "undefined" != typeof e.hex && this.setValueHex(e.hex))
    }
    ,
    U.lang.extend(Y.asn1.DEREnumerated, Y.asn1.ASN1Object),
    Y.asn1.DERUTF8String = function(e) {
        Y.asn1.DERUTF8String.superclass.constructor.call(this, e),
        this.hT = "0c"
    }
    ,
    U.lang.extend(Y.asn1.DERUTF8String, Y.asn1.DERAbstractString),
    Y.asn1.DERNumericString = function(e) {
        Y.asn1.DERNumericString.superclass.constructor.call(this, e),
        this.hT = "12"
    }
    ,
    U.lang.extend(Y.asn1.DERNumericString, Y.asn1.DERAbstractString),
    Y.asn1.DERPrintableString = function(e) {
        Y.asn1.DERPrintableString.superclass.constructor.call(this, e),
        this.hT = "13"
    }
    ,
    U.lang.extend(Y.asn1.DERPrintableString, Y.asn1.DERAbstractString),
    Y.asn1.DERTeletexString = function(e) {
        Y.asn1.DERTeletexString.superclass.constructor.call(this, e),
        this.hT = "14"
    }
    ,
    U.lang.extend(Y.asn1.DERTeletexString, Y.asn1.DERAbstractString),
    Y.asn1.DERIA5String = function(e) {
        Y.asn1.DERIA5String.superclass.constructor.call(this, e),
        this.hT = "16"
    }
    ,
    U.lang.extend(Y.asn1.DERIA5String, Y.asn1.DERAbstractString),
    Y.asn1.DERUTCTime = function(e) {
        Y.asn1.DERUTCTime.superclass.constructor.call(this, e),
        this.hT = "17",
        this.setByDate = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.date = e,
            this.s = this.formatDate(this.date, "utc"),
            this.hV = stohex(this.s)
        }
        ,
        this.getFreshValueHex = function() {
            return "undefined" == typeof this.date && "undefined" == typeof this.s && (this.date = new Date,
            this.s = this.formatDate(this.date, "utc"),
            this.hV = stohex(this.s)),
            this.hV
        }
        ,
        void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{12}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date))
    }
    ,
    U.lang.extend(Y.asn1.DERUTCTime, Y.asn1.DERAbstractTime),
    Y.asn1.DERGeneralizedTime = function(e) {
        Y.asn1.DERGeneralizedTime.superclass.constructor.call(this, e),
        this.hT = "18",
        this.withMillis = !1,
        this.setByDate = function(e) {
            this.hTLV = null,
            this.isModified = !0,
            this.date = e,
            this.s = this.formatDate(this.date, "gen", this.withMillis),
            this.hV = stohex(this.s)
        }
        ,
        this.getFreshValueHex = function() {
            return void 0 === this.date && void 0 === this.s && (this.date = new Date,
            this.s = this.formatDate(this.date, "gen", this.withMillis),
            this.hV = stohex(this.s)),
            this.hV
        }
        ,
        void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{14}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date),
        !0 === e.millis && (this.withMillis = !0))
    }
    ,
    U.lang.extend(Y.asn1.DERGeneralizedTime, Y.asn1.DERAbstractTime),
    Y.asn1.DERSequence = function(e) {
        Y.asn1.DERSequence.superclass.constructor.call(this, e),
        this.hT = "30",
        this.getFreshValueHex = function() {
            for (var e = "", t = 0; t < this.asn1Array.length; t++) {
                e += this.asn1Array[t].getEncodedHex()
            }
            return this.hV = e,
            this.hV
        }
    }
    ,
    U.lang.extend(Y.asn1.DERSequence, Y.asn1.DERAbstractStructured),
    Y.asn1.DERSet = function(e) {
        Y.asn1.DERSet.superclass.constructor.call(this, e),
        this.hT = "31",
        this.sortFlag = !0,
        this.getFreshValueHex = function() {
            for (var e = new Array, t = 0; t < this.asn1Array.length; t++) {
                var r = this.asn1Array[t];
                e.push(r.getEncodedHex())
            }
            return 1 == this.sortFlag && e.sort(),
            this.hV = e.join(""),
            this.hV
        }
        ,
        "undefined" != typeof e && "undefined" != typeof e.sortflag && 0 == e.sortflag && (this.sortFlag = !1)
    }
    ,
    U.lang.extend(Y.asn1.DERSet, Y.asn1.DERAbstractStructured),
    Y.asn1.DERTaggedObject = function(e) {
        Y.asn1.DERTaggedObject.superclass.constructor.call(this),
        this.hT = "a0",
        this.hV = "",
        this.isExplicit = !0,
        this.asn1Object = null,
        this.setASN1Object = function(e, t, r) {
            this.hT = t,
            this.isExplicit = e,
            this.asn1Object = r,
            this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
            this.hTLV = null,
            this.isModified = !0) : (this.hV = null,
            this.hTLV = r.getEncodedHex(),
            this.hTLV = this.hTLV.replace(/^../, t),
            this.isModified = !1)
        }
        ,
        this.getFreshValueHex = function() {
            return this.hV
        }
        ,
        "undefined" != typeof e && ("undefined" != typeof e.tag && (this.hT = e.tag),
        "undefined" != typeof e.explicit && (this.isExplicit = e.explicit),
        "undefined" != typeof e.obj && (this.asn1Object = e.obj,
        this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
    }
    ,
    U.lang.extend(Y.asn1.DERTaggedObject, Y.asn1.ASN1Object);
    var K = function() {
        var e = function(t, r) {
            return (e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            )(t, r)
        };
        return function(t, r) {
            if ("function" !== typeof r && null !== r)
                throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            function n() {
                this.constructor = t
            }
            e(t, r),
            t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
            new n)
        }
    }()
      , $ = function(e) {
        function t(r) {
            var n = e.call(this) || this;
            return r && ("string" === typeof r ? n.parseKey(r) : (t.hasPrivateKeyProperty(r) || t.hasPublicKeyProperty(r)) && n.parsePropertiesFrom(r)),
            n
        }
        return K(t, e),
        t.prototype.parseKey = function(e) {
            try {
                var t = 0
                  , r = 0
                  , n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(e) ? i(e) : s.unarmor(e)
                  , a = _.decode(n);
                if (3 === a.sub.length && (a = a.sub[2].sub[0]),
                9 === a.sub.length) {
                    t = a.sub[1].getHexStringValue(),
                    this.n = E(t, 16),
                    r = a.sub[2].getHexStringValue(),
                    this.e = parseInt(r, 16);
                    var o = a.sub[3].getHexStringValue();
                    this.d = E(o, 16);
                    var l = a.sub[4].getHexStringValue();
                    this.p = E(l, 16);
                    var u = a.sub[5].getHexStringValue();
                    this.q = E(u, 16);
                    var c = a.sub[6].getHexStringValue();
                    this.dmp1 = E(c, 16);
                    var d = a.sub[7].getHexStringValue();
                    this.dmq1 = E(d, 16);
                    var f = a.sub[8].getHexStringValue();
                    this.coeff = E(f, 16)
                } else {
                    if (2 !== a.sub.length)
                        return !1;
                    if (a.sub[0].sub) {
                        var p = a.sub[1].sub[0];
                        t = p.sub[0].getHexStringValue(),
                        this.n = E(t, 16),
                        r = p.sub[1].getHexStringValue(),
                        this.e = parseInt(r, 16)
                    } else
                        t = a.sub[0].getHexStringValue(),
                        this.n = E(t, 16),
                        r = a.sub[1].getHexStringValue(),
                        this.e = parseInt(r, 16)
                }
                return !0
            } catch (h) {
                return !1
            }
        }
        ,
        t.prototype.getPrivateBaseKey = function() {
            var e = {
                array: [new Y.asn1.DERInteger({
                    int: 0
                }), new Y.asn1.DERInteger({
                    bigint: this.n
                }), new Y.asn1.DERInteger({
                    int: this.e
                }), new Y.asn1.DERInteger({
                    bigint: this.d
                }), new Y.asn1.DERInteger({
                    bigint: this.p
                }), new Y.asn1.DERInteger({
                    bigint: this.q
                }), new Y.asn1.DERInteger({
                    bigint: this.dmp1
                }), new Y.asn1.DERInteger({
                    bigint: this.dmq1
                }), new Y.asn1.DERInteger({
                    bigint: this.coeff
                })]
            };
            return new Y.asn1.DERSequence(e).getEncodedHex()
        }
        ,
        t.prototype.getPrivateBaseKeyB64 = function() {
            return Object(o.b)(this.getPrivateBaseKey())
        }
        ,
        t.prototype.getPublicBaseKey = function() {
            var e = new Y.asn1.DERSequence({
                array: [new Y.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.1.1"
                }), new Y.asn1.DERNull]
            })
              , t = new Y.asn1.DERSequence({
                array: [new Y.asn1.DERInteger({
                    bigint: this.n
                }), new Y.asn1.DERInteger({
                    int: this.e
                })]
            })
              , r = new Y.asn1.DERBitString({
                hex: "00" + t.getEncodedHex()
            });
            return new Y.asn1.DERSequence({
                array: [e, r]
            }).getEncodedHex()
        }
        ,
        t.prototype.getPublicBaseKeyB64 = function() {
            return Object(o.b)(this.getPublicBaseKey())
        }
        ,
        t.wordwrap = function(e, t) {
            if (!e)
                return e;
            var r = "(.{1," + (t = t || 64) + "})( +|$\n?)|(.{1," + t + "})";
            return e.match(RegExp(r, "g")).join("\n")
        }
        ,
        t.prototype.getPrivateKey = function() {
            var e = "-----BEGIN RSA PRIVATE KEY-----\n";
            return e += t.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
            e += "-----END RSA PRIVATE KEY-----"
        }
        ,
        t.prototype.getPublicKey = function() {
            var e = "-----BEGIN PUBLIC KEY-----\n";
            return e += t.wordwrap(this.getPublicBaseKeyB64()) + "\n",
            e += "-----END PUBLIC KEY-----"
        }
        ,
        t.hasPublicKeyProperty = function(e) {
            return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e")
        }
        ,
        t.hasPrivateKeyProperty = function(e) {
            return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e") && e.hasOwnProperty("d") && e.hasOwnProperty("p") && e.hasOwnProperty("q") && e.hasOwnProperty("dmp1") && e.hasOwnProperty("dmq1") && e.hasOwnProperty("coeff")
        }
        ,
        t.prototype.parsePropertiesFrom = function(e) {
            this.n = e.n,
            this.e = e.e,
            e.hasOwnProperty("d") && (this.d = e.d,
            this.p = e.p,
            this.q = e.q,
            this.dmp1 = e.dmp1,
            this.dmq1 = e.dmq1,
            this.coeff = e.coeff)
        }
        ,
        t
    }(V)
},
})

const n = new (o(165).a);
n.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCCNZa8N5Su41ESvsZMDkVspW0o1uVKbz0vxFZpMnub90ORr0OChD4d1npmB9nrlr7CqX1XxsS2Mwr2LqNKv06MOvXXETdu2jfc1IdsavCXMPj4QKvuam2F/ZrVfL2D550czh0m9Xe9n1ayGaldhva2AdvtByPFgzdizmYU4bMmywIDAQAB");

const e = [Date.now()+''];
l = e => e.map(e => n.encrypt(e));
r = l(e).join(",");
console.log(r);




// 先找到 sign 位置 是一个三元运算 然后找到生产l的地方 再找到其过程 是e 然后调用了分发器就看出来了是webpock 根据输出一步步找到具体方法 补充后完成