setInterval(() => {
	(function (_0x2e8e89) {
	  return function (_0x37e22c) {
		return Function("Function(arguments[0]+\"" + _0x37e22c + "\")()");
	  }(_0x2e8e89);
	})("bugger")("de", 0, 0, (0, 0));
  }, 1000);
  
  function h(_0x26b5cf, _0x41a4dc) {
	var _0x27bd6f, _0x56c5bf, _0x1d88bb, _0x1629f5, _0x5ad387;
  
	_0x1d88bb = _0x26b5cf & 2147483648;
	_0x1629f5 = _0x41a4dc & 2147483648;
	_0x27bd6f = _0x26b5cf & 1073741824;
	_0x56c5bf = _0x41a4dc & 1073741824;
	_0x5ad387 = (_0x26b5cf & 1073741823) + (_0x41a4dc & 1073741823);
	return _0x27bd6f & _0x56c5bf ? _0x5ad387 ^ 2147483648 ^ _0x1d88bb ^ _0x1629f5 : _0x27bd6f | _0x56c5bf ? _0x5ad387 & 1073741824 ? _0x5ad387 ^ 3221225472 ^ _0x1d88bb ^ _0x1629f5 : _0x5ad387 ^ 1073741824 ^ _0x1d88bb ^ _0x1629f5 : _0x5ad387 ^ _0x1d88bb ^ _0x1629f5;
  }
  
  function k(_0x1f8a75, _0x4a3bd3, _0x5a3070, _0x25f36f, _0x4a9473, _0x451bed, _0x437fcb) {
	_0x1f8a75 = h(_0x1f8a75, h(h(_0x4a3bd3 & _0x5a3070 | ~_0x4a3bd3 & _0x25f36f, _0x4a9473), _0x437fcb));
	return h(_0x1f8a75 << _0x451bed | _0x1f8a75 >>> 32 - _0x451bed, _0x4a3bd3);
  }
  
  function l(_0x4fcfd0, _0x791862, _0x545c62, _0x492884, _0x1b9409, _0x4f627e, _0x4c98ec) {
	_0x4fcfd0 = h(_0x4fcfd0, h(h(_0x791862 & _0x492884 | _0x545c62 & ~_0x492884, _0x1b9409), _0x4c98ec));
	return h(_0x4fcfd0 << _0x4f627e | _0x4fcfd0 >>> 32 - _0x4f627e, _0x791862);
  }
  
  function m(_0x130849, _0x4b0430, _0x4ba0ed, _0x4e52aa, _0x25e079, _0x56e69f, _0x40ef4c) {
	_0x130849 = h(_0x130849, h(h(_0x4b0430 ^ _0x4ba0ed ^ _0x4e52aa, _0x25e079), _0x40ef4c));
	return h(_0x130849 << _0x56e69f | _0x130849 >>> 32 - _0x56e69f, _0x4b0430);
  }
  
  $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    // 调用xxx函数生成随机值
    xxx(1, 2, 3, 4, 5, 6, 7);
    
    // 确保headers存在
    options.headers = options.headers || {};
    
    // 生成加密参数
    let encryptedParam = OOOO(options.url);
    
    // 添加到URL
    options.url = options.url + "&t=" + encryptedParam;
    
    console.log(options.url);
});
  !function () {
	'use strict';
  
	var _0x1e9e98 = "input is invalid type",
		_0xf015bd = "object" == typeof window,
		_0x15ef03 = _0xf015bd ? window : {};
  
	_0x15ef03["JS_SHA256_NO_WINDOW"] && (_0xf015bd = false);
  
	var _0x10f38e = !_0xf015bd && "object" == typeof self,
		_0x7ed6b3 = !_0x15ef03["JS_SHA256_NO_NODE_JS"] && "object" == typeof process && process["versions"] && process["versions"]["node"];
  
	_0x7ed6b3 ? _0x15ef03 = global : _0x10f38e && (_0x15ef03 = self);
  
	var _0x370bf8 = !_0x15ef03["JS_SHA256_NO_COMMON_JS"] && "object" == typeof module && module["exports"],
		_0x45e279 = "function" == typeof define && define["amd"],
		_0x2cd597 = !_0x15ef03["JS_SHA256_NO_ARRAY_BUFFER"] && "undefined" != typeof ArrayBuffer,
		_0x1d090b = "0123456789abcdef"["split"](''),
		_0x36a98e = [-2147483648, 8388608, 32768, 128],
		_0x13b4ab = [24, 16, 8, 0],
		_0x4239a7 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
		_0x14b3d0 = ["hex", "array", "digest", "arrayBuffer"],
		_0x159519 = [];
  
	!_0x15ef03["JS_SHA256_NO_NODE_JS"] && Array["isArray"] || (Array["isArray"] = function (_0x1d9680) {
	  return "[object Array]" === Object["prototype"]["toString"]["call"](_0x1d9680);
	});
	!_0x2cd597 || !_0x15ef03["JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW"] && ArrayBuffer["isView"] || (ArrayBuffer["isView"] = function (_0x3e8a3e) {
	  return "object" == typeof _0x3e8a3e && _0x3e8a3e["buffer"] && _0x3e8a3e["buffer"]["constructor"] === ArrayBuffer;
	});
  
	var _0x215260 = function (_0x50c45c, _0xb571bb) {
	  return function (_0x5a1594) {
		return new _0x2f5ec1(_0xb571bb, true)["update"](_0x5a1594)[_0x50c45c]();
	  };
	},
		_0x509871 = function (_0x2e838e) {
	  var _0x3f2979 = _0x215260("hex", _0x2e838e);
  
	  _0x7ed6b3 && (_0x3f2979 = _0x8c30e(_0x3f2979, _0x2e838e));
  
	  _0x3f2979["create"] = function () {
		return new _0x2f5ec1(_0x2e838e);
	  };
  
	  _0x3f2979["update"] = function (_0x29c544) {
		return _0x3f2979["create"]()["update"](_0x29c544);
	  };
  
	  for (var _0x264639 = 0; _0x264639 < _0x14b3d0["length"]; ++_0x264639) {
		var _0x1c2072 = _0x14b3d0[_0x264639];
		_0x3f2979[_0x1c2072] = _0x215260(_0x1c2072, _0x2e838e);
	  }
  
	  return _0x3f2979;
	},
		_0x8c30e = function (_0x1c4764, _0x41cd7b) {
	  var _0x586445,
		  _0x44da73 = require("crypto"),
		  _0xb43ad7 = require("buffer")["Buffer"],
		  _0x2a77d5 = _0x41cd7b ? "sha224" : "sha256";
  
	  _0x586445 = _0xb43ad7["from"] && !_0x15ef03["JS_SHA256_NO_BUFFER_FROM"] ? _0xb43ad7["from"] : function (_0x2b832a) {
		return new _0xb43ad7(_0x2b832a);
	  };
	  return function (_0x24d6f1) {
		if ("string" == typeof _0x24d6f1) {
		  return _0x44da73["createHash"](_0x2a77d5)["update"](_0x24d6f1, "utf8")["digest"]("hex");
		}
  
		if (null == _0x24d6f1) {
		  throw new Error(_0x1e9e98);
		}
  
		_0x24d6f1["constructor"] === ArrayBuffer && (_0x24d6f1 = new Uint8Array(_0x24d6f1));
		return Array["isArray"](_0x24d6f1) || ArrayBuffer["isView"](_0x24d6f1) || _0x24d6f1["constructor"] === _0xb43ad7 ? _0x44da73["createHash"](_0x2a77d5)["update"](_0x586445(_0x24d6f1))["digest"]("hex") : _0x1c4764(_0x24d6f1);
	  };
	},
		_0x1709cc = function (_0xbd7ef5, _0x28a23d) {
	  return function (_0x121787, _0x3ca081) {
		return new _0xdf9958(_0x121787, _0x28a23d, true)["update"](_0x3ca081)[_0xbd7ef5]();
	  };
	},
		_0x4fa5ce = function (_0x34149e) {
	  var _0x33cb3a = _0x1709cc("hex", _0x34149e);
  
	  _0x33cb3a["create"] = function (_0x315f68) {
		return new _0xdf9958(_0x315f68, _0x34149e);
	  };
  
	  _0x33cb3a["update"] = function (_0x403ad8, _0x1419ad) {
		return _0x33cb3a["create"](_0x403ad8)["update"](_0x1419ad);
	  };
  
	  for (var _0x16124d = 0; _0x16124d < _0x14b3d0["length"]; ++_0x16124d) {
		var _0x5cfded = _0x14b3d0[_0x16124d];
		_0x33cb3a[_0x5cfded] = _0x1709cc(_0x5cfded, _0x34149e);
	  }
  
	  return _0x33cb3a;
	};
  
	function _0x2f5ec1(_0x506d56, _0x142c98) {
	  _0x142c98 ? (_0x159519[0] = _0x159519[16] = _0x159519[1] = _0x159519[2] = _0x159519[3] = _0x159519[4] = _0x159519[5] = _0x159519[6] = _0x159519[7] = _0x159519[8] = _0x159519[9] = _0x159519[10] = _0x159519[11] = _0x159519[12] = _0x159519[13] = _0x159519[14] = _0x159519[15] = 0, this["blocks"] = _0x159519) : this["blocks"] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	  _0x506d56 ? (this["h0"] = 3238371032, this["h1"] = 914150663, this["h2"] = 812702999, this["h3"] = 4144912697, this["h4"] = 4290775857, this["h5"] = 1750603025, this["h6"] = 1694076839, this["h7"] = 3204075428) : (this["h0"] = 1779033703, this["h1"] = 3144134277, this["h2"] = 1013904242, this["h3"] = 2773480762, this["h4"] = 1359893119, this["h5"] = 2600822924, this["h6"] = 528734635, this["h7"] = 1541459225);
	  this["block"] = this["start"] = this["bytes"] = this["hBytes"] = 0;
	  this["finalized"] = this["hashed"] = false;
	  this["first"] = true;
	  this["is224"] = _0x506d56;
	}
  
	function _0xdf9958(_0x4a38fb, _0x538b02, _0x508458) {
	  var _0x2e6b26,
		  _0x3fa881 = typeof _0x4a38fb;
  
	  if ("string" === _0x3fa881) {
		var _0x2fbaea,
			_0x56c38a = [],
			_0x39d282 = _0x4a38fb["length"],
			_0xbad7b = 0;
  
		for (_0x2e6b26 = 0; _0x2e6b26 < _0x39d282; ++_0x2e6b26) {
		  (_0x2fbaea = _0x4a38fb["charCodeAt"](_0x2e6b26)) < 128 ? _0x56c38a[_0xbad7b++] = _0x2fbaea : _0x2fbaea < 2048 ? (_0x56c38a[_0xbad7b++] = 192 | _0x2fbaea >>> 6, _0x56c38a[_0xbad7b++] = 128 | 63 & _0x2fbaea) : _0x2fbaea < 55296 || _0x2fbaea >= 57344 ? (_0x56c38a[_0xbad7b++] = 224 | _0x2fbaea >>> 12, _0x56c38a[_0xbad7b++] = 128 | _0x2fbaea >>> 6 & 63, _0x56c38a[_0xbad7b++] = 128 | 63 & _0x2fbaea) : (_0x2fbaea = 65536 + ((1023 & _0x2fbaea) << 10 | 1023 & _0x4a38fb["charCodeAt"](++_0x2e6b26)), _0x56c38a[_0xbad7b++] = 240 | _0x2fbaea >>> 18, _0x56c38a[_0xbad7b++] = 128 | _0x2fbaea >>> 12 & 63, _0x56c38a[_0xbad7b++] = 128 | _0x2fbaea >>> 6 & 63, _0x56c38a[_0xbad7b++] = 128 | 63 & _0x2fbaea);
		}
  
		_0x4a38fb = _0x56c38a;
	  } else {
		if ("object" !== _0x3fa881) {
		  throw new Error(_0x1e9e98);
		}
  
		if (null === _0x4a38fb) {
		  throw new Error(_0x1e9e98);
		}
  
		if (_0x2cd597 && _0x4a38fb["constructor"] === ArrayBuffer) {
		  _0x4a38fb = new Uint8Array(_0x4a38fb);
		} else {
		  if (!(Array["isArray"](_0x4a38fb) || _0x2cd597 && ArrayBuffer["isView"](_0x4a38fb))) {
			throw new Error(_0x1e9e98);
		  }
		}
	  }
  
	  _0x4a38fb["length"] > 64 && (_0x4a38fb = new _0x2f5ec1(_0x538b02, true)["update"](_0x4a38fb)["array"]());
	  var _0x342754 = [],
		  _0x2ba707 = [];
  
	  for (_0x2e6b26 = 0; _0x2e6b26 < 64; ++_0x2e6b26) {
		var _0x14308f = _0x4a38fb[_0x2e6b26] || 0;
  
		_0x342754[_0x2e6b26] = 92 ^ _0x14308f;
		_0x2ba707[_0x2e6b26] = 54 ^ _0x14308f;
	  }
  
	  _0x2f5ec1["call"](this, _0x538b02, _0x508458);
  
	  this["update"](_0x2ba707);
	  this["oKeyPad"] = _0x342754;
	  this["inner"] = true;
	  this["sharedMemory"] = _0x508458;
	}
  
	_0x2f5ec1["prototype"]["update"] = function (_0x12ccc4) {
	  if (!this["finalized"]) {
		var _0x3e60f0,
			_0x1f3147 = typeof _0x12ccc4;
  
		if ("string" !== _0x1f3147) {
		  if ("object" !== _0x1f3147) {
			throw new Error(_0x1e9e98);
		  }
  
		  if (null === _0x12ccc4) {
			throw new Error(_0x1e9e98);
		  }
  
		  if (_0x2cd597 && _0x12ccc4["constructor"] === ArrayBuffer) {
			_0x12ccc4 = new Uint8Array(_0x12ccc4);
		  } else {
			if (!(Array["isArray"](_0x12ccc4) || _0x2cd597 && ArrayBuffer["isView"](_0x12ccc4))) {
			  throw new Error(_0x1e9e98);
			}
		  }
  
		  _0x3e60f0 = true;
		}
  
		for (var _0x1eac44, _0x5ae714, _0x232dbe = 0, _0x1a64c7 = _0x12ccc4["length"], _0x433824 = this["blocks"]; _0x232dbe < _0x1a64c7;) {
		  if (this["hashed"] && (this["hashed"] = false, _0x433824[0] = this["block"], this["block"] = _0x433824[16] = _0x433824[1] = _0x433824[2] = _0x433824[3] = _0x433824[4] = _0x433824[5] = _0x433824[6] = _0x433824[7] = _0x433824[8] = _0x433824[9] = _0x433824[10] = _0x433824[11] = _0x433824[12] = _0x433824[13] = _0x433824[14] = _0x433824[15] = 0), _0x3e60f0) {
			for (_0x5ae714 = this["start"]; _0x232dbe < _0x1a64c7 && _0x5ae714 < 64; ++_0x232dbe) {
			  _0x433824[_0x5ae714 >>> 2] |= _0x12ccc4[_0x232dbe] << _0x13b4ab[3 & _0x5ae714++];
			}
		  } else {
			for (_0x5ae714 = this["start"]; _0x232dbe < _0x1a64c7 && _0x5ae714 < 64; ++_0x232dbe) {
			  (_0x1eac44 = _0x12ccc4["charCodeAt"](_0x232dbe)) < 128 ? _0x433824[_0x5ae714 >>> 2] |= _0x1eac44 << _0x13b4ab[3 & _0x5ae714++] : _0x1eac44 < 2048 ? (_0x433824[_0x5ae714 >>> 2] |= (192 | _0x1eac44 >>> 6) << _0x13b4ab[3 & _0x5ae714++], _0x433824[_0x5ae714 >>> 2] |= (128 | 63 & _0x1eac44) << _0x13b4ab[3 & _0x5ae714++]) : _0x1eac44 < 55296 || _0x1eac44 >= 57344 ? (_0x433824[_0x5ae714 >>> 2] |= (224 | _0x1eac44 >>> 12) << _0x13b4ab[3 & _0x5ae714++], _0x433824[_0x5ae714 >>> 2] |= (128 | _0x1eac44 >>> 6 & 63) << _0x13b4ab[3 & _0x5ae714++], _0x433824[_0x5ae714 >>> 2] |= (128 | 63 & _0x1eac44) << _0x13b4ab[3 & _0x5ae714++]) : (_0x1eac44 = 65536 + ((1023 & _0x1eac44) << 10 | 1023 & _0x12ccc4["charCodeAt"](++_0x232dbe)), _0x433824[_0x5ae714 >>> 2] |= (240 | _0x1eac44 >>> 18) << _0x13b4ab[3 & _0x5ae714++], _0x433824[_0x5ae714 >>> 2] |= (128 | _0x1eac44 >>> 12 & 63) << _0x13b4ab[3 & _0x5ae714++], _0x433824[_0x5ae714 >>> 2] |= (128 | _0x1eac44 >>> 6 & 63) << _0x13b4ab[3 & _0x5ae714++], _0x433824[_0x5ae714 >>> 2] |= (128 | 63 & _0x1eac44) << _0x13b4ab[3 & _0x5ae714++]);
			}
		  }
  
		  this["lastByteIndex"] = _0x5ae714;
		  this["bytes"] += _0x5ae714 - this["start"];
		  _0x5ae714 >= 64 ? (this["block"] = _0x433824[16], this["start"] = _0x5ae714 - 64, this["hash"](), this["hashed"] = true) : this["start"] = _0x5ae714;
		}
  
		this["bytes"] > 4294967295 && (this["hBytes"] += this["bytes"] / 4294967296 << 0, this["bytes"] = this["bytes"] % 4294967296);
		return this;
	  }
	};
  
	_0x2f5ec1["prototype"]["finalize"] = function () {
	  if (!this["finalized"]) {
		this["finalized"] = true;
		var _0x596268 = this["blocks"],
			_0xc4eb28 = this["lastByteIndex"];
		_0x596268[16] = this["block"];
		_0x596268[_0xc4eb28 >>> 2] |= _0x36a98e[3 & _0xc4eb28];
		this["block"] = _0x596268[16];
		_0xc4eb28 >= 56 && (this["hashed"] || this["hash"](), _0x596268[0] = this["block"], _0x596268[16] = _0x596268[1] = _0x596268[2] = _0x596268[3] = _0x596268[4] = _0x596268[5] = _0x596268[6] = _0x596268[7] = _0x596268[8] = _0x596268[9] = _0x596268[10] = _0x596268[11] = _0x596268[12] = _0x596268[13] = _0x596268[14] = _0x596268[15] = 0);
		_0x596268[14] = this["hBytes"] << 3 | this["bytes"] >>> 29;
		_0x596268[15] = this["bytes"] << 3;
		this["hash"]();
	  }
	};
  
	_0x2f5ec1["prototype"]["hash"] = function () {
	  var _0x3016bf,
		  _0x446928,
		  _0x5e7b33,
		  _0x3a4c3a,
		  _0x599202,
		  _0x910c6f,
		  _0x1ba87a,
		  _0x5de766,
		  _0x451132,
		  _0x1beb23 = this["h0"],
		  _0x43e799 = this["h1"],
		  _0x538181 = this["h2"],
		  _0x3b26fb = this["h3"],
		  _0x4f122e = this["h4"],
		  _0x3a1bfd = this["h5"],
		  _0x19be1d = this["h6"],
		  _0x3bcd00 = this["h7"],
		  _0x209954 = this["blocks"];
  
	  for (_0x3016bf = 16; _0x3016bf < 64; ++_0x3016bf) {
		_0x446928 = ((_0x599202 = _0x209954[_0x3016bf - 15]) >>> 7 | _0x599202 << 25) ^ (_0x599202 >>> 18 | _0x599202 << 14) ^ _0x599202 >>> 3;
		_0x5e7b33 = ((_0x599202 = _0x209954[_0x3016bf - 2]) >>> 17 | _0x599202 << 15) ^ (_0x599202 >>> 19 | _0x599202 << 13) ^ _0x599202 >>> 10;
		_0x209954[_0x3016bf] = _0x209954[_0x3016bf - 16] + _0x446928 + _0x209954[_0x3016bf - 7] + _0x5e7b33 << 0;
	  }
  
	  for (_0x451132 = _0x43e799 & _0x538181, _0x3016bf = 0; _0x3016bf < 64; _0x3016bf += 4) {
		this["first"] ? (this["is224"] ? (_0x910c6f = 300032, _0x3bcd00 = (_0x599202 = _0x209954[0] - 1413257819) - 150054599 << 0, _0x3b26fb = _0x599202 + 24177077 << 0) : (_0x910c6f = 704751109, _0x3bcd00 = (_0x599202 = _0x209954[0] - 210244248) - 1521486534 << 0, _0x3b26fb = _0x599202 + 143694565 << 0), this["first"] = false) : (_0x446928 = (_0x1beb23 >>> 2 | _0x1beb23 << 30) ^ (_0x1beb23 >>> 13 | _0x1beb23 << 19) ^ (_0x1beb23 >>> 22 | _0x1beb23 << 10), _0x3a4c3a = (_0x910c6f = _0x1beb23 & _0x43e799) ^ _0x1beb23 & _0x538181 ^ _0x451132, _0x3bcd00 = _0x3b26fb + (_0x599202 = _0x3bcd00 + (_0x5e7b33 = (_0x4f122e >>> 6 | _0x4f122e << 26) ^ (_0x4f122e >>> 11 | _0x4f122e << 21) ^ (_0x4f122e >>> 25 | _0x4f122e << 7)) + (_0x4f122e & _0x3a1bfd ^ ~_0x4f122e & _0x19be1d) + _0x4239a7[_0x3016bf] + _0x209954[_0x3016bf]) << 0, _0x3b26fb = _0x599202 + (_0x446928 + _0x3a4c3a) << 0);
		_0x446928 = (_0x3b26fb >>> 2 | _0x3b26fb << 30) ^ (_0x3b26fb >>> 13 | _0x3b26fb << 19) ^ (_0x3b26fb >>> 22 | _0x3b26fb << 10);
		_0x3a4c3a = (_0x1ba87a = _0x3b26fb & _0x1beb23) ^ _0x3b26fb & _0x43e799 ^ _0x910c6f;
		_0x19be1d = _0x538181 + (_0x599202 = _0x19be1d + (_0x5e7b33 = (_0x3bcd00 >>> 6 | _0x3bcd00 << 26) ^ (_0x3bcd00 >>> 11 | _0x3bcd00 << 21) ^ (_0x3bcd00 >>> 25 | _0x3bcd00 << 7)) + (_0x3bcd00 & _0x4f122e ^ ~_0x3bcd00 & _0x3a1bfd) + _0x4239a7[_0x3016bf + 1] + _0x209954[_0x3016bf + 1]) << 0;
		_0x446928 = ((_0x538181 = _0x599202 + (_0x446928 + _0x3a4c3a) << 0) >>> 2 | _0x538181 << 30) ^ (_0x538181 >>> 13 | _0x538181 << 19) ^ (_0x538181 >>> 22 | _0x538181 << 10);
		_0x3a4c3a = (_0x5de766 = _0x538181 & _0x3b26fb) ^ _0x538181 & _0x1beb23 ^ _0x1ba87a;
		_0x3a1bfd = _0x43e799 + (_0x599202 = _0x3a1bfd + (_0x5e7b33 = (_0x19be1d >>> 6 | _0x19be1d << 26) ^ (_0x19be1d >>> 11 | _0x19be1d << 21) ^ (_0x19be1d >>> 25 | _0x19be1d << 7)) + (_0x19be1d & _0x3bcd00 ^ ~_0x19be1d & _0x4f122e) + _0x4239a7[_0x3016bf + 2] + _0x209954[_0x3016bf + 2]) << 0;
		_0x446928 = ((_0x43e799 = _0x599202 + (_0x446928 + _0x3a4c3a) << 0) >>> 2 | _0x43e799 << 30) ^ (_0x43e799 >>> 13 | _0x43e799 << 19) ^ (_0x43e799 >>> 22 | _0x43e799 << 10);
		_0x3a4c3a = (_0x451132 = _0x43e799 & _0x538181) ^ _0x43e799 & _0x3b26fb ^ _0x5de766;
		_0x4f122e = _0x1beb23 + (_0x599202 = _0x4f122e + (_0x5e7b33 = (_0x3a1bfd >>> 6 | _0x3a1bfd << 26) ^ (_0x3a1bfd >>> 11 | _0x3a1bfd << 21) ^ (_0x3a1bfd >>> 25 | _0x3a1bfd << 7)) + (_0x3a1bfd & _0x19be1d ^ ~_0x3a1bfd & _0x3bcd00) + _0x4239a7[_0x3016bf + 3] + _0x209954[_0x3016bf + 3]) << 0;
		_0x1beb23 = _0x599202 + (_0x446928 + _0x3a4c3a) << 0;
		this["chromeBugWorkAround"] = true;
	  }
  
	  this["h0"] = this["h0"] + _0x1beb23 << 0;
	  this["h1"] = this["h1"] + _0x43e799 << 0;
	  this["h2"] = this["h2"] + _0x538181 << 0;
	  this["h3"] = this["h3"] + _0x3b26fb << 0;
	  this["h4"] = this["h4"] + _0x4f122e << 0;
	  this["h5"] = this["h5"] + _0x3a1bfd << 0;
	  this["h6"] = this["h6"] + _0x19be1d << 0;
	  this["h7"] = this["h7"] + _0x3bcd00 << 0;
	};
  
	_0x2f5ec1["prototype"]["hex"] = function () {
	  this["finalize"]();
  
	  var _0x47c3b2 = this["h0"],
		  _0x69a47f = this["h1"],
		  _0x3b8092 = this["h2"],
		  _0x4fcff2 = this["h3"],
		  _0x309f87 = this["h4"],
		  _0xebcba2 = this["h5"],
		  _0x137053 = this["h6"],
		  _0x445e35 = this["h7"],
		  _0x291a21 = _0x1d090b[_0x47c3b2 >>> 28 & 15] + _0x1d090b[_0x47c3b2 >>> 24 & 15] + _0x1d090b[_0x47c3b2 >>> 20 & 15] + _0x1d090b[_0x47c3b2 >>> 16 & 15] + _0x1d090b[_0x47c3b2 >>> 12 & 15] + _0x1d090b[_0x47c3b2 >>> 8 & 15] + _0x1d090b[_0x47c3b2 >>> 4 & 15] + _0x1d090b[15 & _0x47c3b2] + _0x1d090b[_0x69a47f >>> 28 & 15] + _0x1d090b[_0x69a47f >>> 24 & 15] + _0x1d090b[_0x69a47f >>> 20 & 15] + _0x1d090b[_0x69a47f >>> 16 & 15] + _0x1d090b[_0x69a47f >>> 12 & 15] + _0x1d090b[_0x69a47f >>> 8 & 15] + _0x1d090b[_0x69a47f >>> 4 & 15] + _0x1d090b[15 & _0x69a47f] + _0x1d090b[_0x3b8092 >>> 28 & 15] + _0x1d090b[_0x3b8092 >>> 24 & 15] + _0x1d090b[_0x3b8092 >>> 20 & 15] + _0x1d090b[_0x3b8092 >>> 16 & 15] + _0x1d090b[_0x3b8092 >>> 12 & 15] + _0x1d090b[_0x3b8092 >>> 8 & 15] + _0x1d090b[_0x3b8092 >>> 4 & 15] + _0x1d090b[15 & _0x3b8092] + _0x1d090b[_0x4fcff2 >>> 28 & 15] + _0x1d090b[_0x4fcff2 >>> 24 & 15] + _0x1d090b[_0x4fcff2 >>> 20 & 15] + _0x1d090b[_0x4fcff2 >>> 16 & 15] + _0x1d090b[_0x4fcff2 >>> 12 & 15] + _0x1d090b[_0x4fcff2 >>> 8 & 15] + _0x1d090b[_0x4fcff2 >>> 4 & 15] + _0x1d090b[15 & _0x4fcff2] + _0x1d090b[_0x309f87 >>> 28 & 15] + _0x1d090b[_0x309f87 >>> 24 & 15] + _0x1d090b[_0x309f87 >>> 20 & 15] + _0x1d090b[_0x309f87 >>> 16 & 15] + _0x1d090b[_0x309f87 >>> 12 & 15] + _0x1d090b[_0x309f87 >>> 8 & 15] + _0x1d090b[_0x309f87 >>> 4 & 15] + _0x1d090b[15 & _0x309f87] + _0x1d090b[_0xebcba2 >>> 28 & 15] + _0x1d090b[_0xebcba2 >>> 24 & 15] + _0x1d090b[_0xebcba2 >>> 20 & 15] + _0x1d090b[_0xebcba2 >>> 16 & 15] + _0x1d090b[_0xebcba2 >>> 12 & 15] + _0x1d090b[_0xebcba2 >>> 8 & 15] + _0x1d090b[_0xebcba2 >>> 4 & 15] + _0x1d090b[15 & _0xebcba2] + _0x1d090b[_0x137053 >>> 28 & 15] + _0x1d090b[_0x137053 >>> 24 & 15] + _0x1d090b[_0x137053 >>> 20 & 15] + _0x1d090b[_0x137053 >>> 16 & 15] + _0x1d090b[_0x137053 >>> 12 & 15] + _0x1d090b[_0x137053 >>> 8 & 15] + _0x1d090b[_0x137053 >>> 4 & 15] + _0x1d090b[15 & _0x137053];
  
	  this["is224"] || (_0x291a21 += _0x1d090b[_0x445e35 >>> 28 & 15] + _0x1d090b[_0x445e35 >>> 24 & 15] + _0x1d090b[_0x445e35 >>> 20 & 15] + _0x1d090b[_0x445e35 >>> 16 & 15] + _0x1d090b[_0x445e35 >>> 12 & 15] + _0x1d090b[_0x445e35 >>> 8 & 15] + _0x1d090b[_0x445e35 >>> 4 & 15] + _0x1d090b[15 & _0x445e35]);
	  return _0x291a21;
	};
  
	_0x2f5ec1["prototype"]["toString"] = _0x2f5ec1["prototype"]["hex"];
  
	_0x2f5ec1["prototype"]["digest"] = function () {
	  this["finalize"]();
	  var _0x3a9868 = this["h0"],
		  _0x157c51 = this["h1"],
		  _0x51115b = this["h2"],
		  _0x31bca8 = this["h3"],
		  _0x41f701 = this["h4"],
		  _0x526157 = this["h5"],
		  _0x131560 = this["h6"],
		  _0x571794 = this["h7"],
		  _0x3f3ec2 = [_0x3a9868 >>> 24 & 255, _0x3a9868 >>> 16 & 255, _0x3a9868 >>> 8 & 255, 255 & _0x3a9868, _0x157c51 >>> 24 & 255, _0x157c51 >>> 16 & 255, _0x157c51 >>> 8 & 255, 255 & _0x157c51, _0x51115b >>> 24 & 255, _0x51115b >>> 16 & 255, _0x51115b >>> 8 & 255, 255 & _0x51115b, _0x31bca8 >>> 24 & 255, _0x31bca8 >>> 16 & 255, _0x31bca8 >>> 8 & 255, 255 & _0x31bca8, _0x41f701 >>> 24 & 255, _0x41f701 >>> 16 & 255, _0x41f701 >>> 8 & 255, 255 & _0x41f701, _0x526157 >>> 24 & 255, _0x526157 >>> 16 & 255, _0x526157 >>> 8 & 255, 255 & _0x526157, _0x131560 >>> 24 & 255, _0x131560 >>> 16 & 255, _0x131560 >>> 8 & 255, 255 & _0x131560];
	  this["is224"] || _0x3f3ec2["push"](_0x571794 >>> 24 & 255, _0x571794 >>> 16 & 255, _0x571794 >>> 8 & 255, 255 & _0x571794);
	  return _0x3f3ec2;
	};
  
	_0x2f5ec1["prototype"]["array"] = _0x2f5ec1["prototype"]["digest"];
  
	_0x2f5ec1["prototype"]["arrayBuffer"] = function () {
	  this["finalize"]();
  
	  var _0x58bfc5 = new ArrayBuffer(this["is224"] ? 28 : 32),
		  _0x22a8d9 = new DataView(_0x58bfc5);
  
	  _0x22a8d9["setUint32"](0, this["h0"]);
  
	  _0x22a8d9["setUint32"](4, this["h1"]);
  
	  _0x22a8d9["setUint32"](8, this["h2"]);
  
	  _0x22a8d9["setUint32"](12, this["h3"]);
  
	  _0x22a8d9["setUint32"](16, this["h4"]);
  
	  _0x22a8d9["setUint32"](20, this["h5"]);
  
	  _0x22a8d9["setUint32"](24, this["h6"]);
  
	  this["is224"] || _0x22a8d9["setUint32"](28, this["h7"]);
	  return _0x58bfc5;
	};
  
	_0xdf9958["prototype"] = new _0x2f5ec1();
  
	_0xdf9958["prototype"]["finalize"] = function () {
	  if (_0x2f5ec1["prototype"]["finalize"]["call"](this), this["inner"]) {
		this["inner"] = false;
  
		var _0x3eff9e = this["array"]();
  
		_0x2f5ec1["call"](this, this["is224"], this["sharedMemory"]);
  
		this["update"](this["oKeyPad"]);
		this["update"](_0x3eff9e);
  
		_0x2f5ec1["prototype"]["finalize"]["call"](this);
	  }
	};
  
	var _0x35a996 = _0x509871();
  
	_0x35a996["sha256"] = _0x35a996;
	_0x35a996["sha224"] = _0x509871(true);
	_0x35a996["sha256"]["hmac"] = _0x4fa5ce();
	_0x35a996["sha224"]["hmac"] = _0x4fa5ce(true);
	_0x370bf8 ? module["exports"] = _0x35a996 : (_0x15ef03["sha256"] = _0x35a996["sha256"], _0x15ef03["sha224"] = _0x35a996["sha224"], _0x45e279 && define(function () {
	  return _0x35a996;
	}));
  }();
  
  function xxx(a, b, c, d, e, f, g) {
    // 定义变量数组和运算符数组
    const variables = ["var1", "var2", "var3", "var4", "var5"];
    const operators = ["+", "-", "*", "/"];
    
    // 生成随机运算表达式
    let expressions = '';
    for(let i = 0; i < 5; i++) {
        const var1 = variables[Math.floor(Math.random() * variables.length)];
        const var2 = variables[Math.floor(Math.random() * variables.length)];
        const op = operators[Math.floor(Math.random() * operators.length)];
        expressions += `let ${var1} = ${var2} ${op} ${Math.floor(Math.random() * 10)};\n`;
    }
    
    // 计算输入参数的和
    let sum = a + b + c + d + e + f + g;
    
    // 添加随机生成的变量值
    for(let i = 0; i < 5; i++) {
        const varName = variables[i];
        if(typeof window[varName] !== "undefined") {
            sum += window[varName];
        }
    }
    
    return sum;
}
  
  function n(_0x4968e1, _0x1093ec, _0x4c5f59, _0x474b35, _0x353c24, _0xc168b9, _0x46b192) {
	_0x4968e1 = h(_0x4968e1, h(h(_0x4c5f59 ^ (_0x1093ec | ~_0x474b35), _0x353c24), _0x46b192));
	return h(_0x4968e1 << _0xc168b9 | _0x4968e1 >>> 32 - _0xc168b9, _0x1093ec);
  }
  
  function xooo(_0xbece56) {
	function _0x50a213(_0x47e4e0) {
	  var _0x4a8091 = '',
		  _0x32f23e = '',
		  _0x1a2975;
  
	  for (_0x1a2975 = 0; 3 >= _0x1a2975; _0x1a2975++) {
		_0x32f23e = _0x47e4e0 >>> 8 * _0x1a2975 & 255;
		_0x32f23e = "0" + _0x32f23e["toString"](16);
		_0x4a8091 += _0x32f23e["substr"](_0x32f23e["length"] - 2, 2);
	  }
  
	  return _0x4a8091;
	}
  
	var _0x1b8333 = [],
		_0x28207d,
		_0x383438,
		_0x11fccf,
		_0x3ce4d1,
		_0x452f67,
		_0x20d302,
		_0x3a8a59,
		_0x58cff2;
  
	_0xbece56 = function (_0x1a1913) {
	  _0x1a1913 = _0x1a1913["replace"](/\\r\\n/g, "\\n");
  
	  for (var _0x34d0f0 = '', _0x52db02 = 0; _0x52db02 < _0x1a1913["length"]; _0x52db02++) {
		var _0x23313b = _0x1a1913["charCodeAt"](_0x52db02);
  
		128 > _0x23313b ? _0x34d0f0 += String["fromCharCode"](_0x23313b) : (127 < _0x23313b && 2048 > _0x23313b ? _0x34d0f0 += String["fromCharCode"](_0x23313b >> 6 | 192) : (_0x34d0f0 += String["fromCharCode"](_0x23313b >> 12 | 224), _0x34d0f0 += String["fromCharCode"](_0x23313b >> 6 & 63 | 128)), _0x34d0f0 += String["fromCharCode"](_0x23313b & 63 | 128));
	  }
  
	  return _0x34d0f0;
	}(_0xbece56);
  
	_0x1b8333 = function (_0x857796) {
	  var _0x1608a4,
		  _0x7de62 = _0x857796["length"];
  
	  _0x1608a4 = _0x7de62 + 8;
  
	  for (var _0x1b0bcd = 16 * ((_0x1608a4 - _0x1608a4 % 64) / 64 + 1), _0x26393 = Array(_0x1b0bcd - 1), _0x5e2c4a = 0, _0x5038ff = 0; _0x5038ff < _0x7de62;) {
		_0x1608a4 = (_0x5038ff - _0x5038ff % 4) / 4;
		_0x5e2c4a = _0x5038ff % 4 * 8;
		_0x26393[_0x1608a4] |= _0x857796["charCodeAt"](_0x5038ff) << _0x5e2c4a;
		_0x5038ff++;
	  }
  
	  _0x1608a4 = (_0x5038ff - _0x5038ff % 4) / 4;
	  _0x26393[_0x1608a4] |= 128 << _0x5038ff % 4 * 8;
	  _0x26393[_0x1b0bcd - 2] = _0x7de62 << 3;
	  _0x26393[_0x1b0bcd - 1] = _0x7de62 >>> 29;
	  return _0x26393;
	}(_0xbece56);
  
	_0x452f67 = 271733878;
	_0x20d302 = 2562383102;
	_0x3a8a59 = 4023233417;
	_0x58cff2 = 1732584193;
  
	for (_0xbece56 = 0; _0xbece56 < _0x1b8333["length"]; _0xbece56 += 16) {
	  _0x28207d = _0x452f67;
	  _0x383438 = _0x20d302;
	  _0x11fccf = _0x3a8a59;
	  _0x3ce4d1 = _0x58cff2;
	  _0x452f67 = k(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 0], 7, 3614090360);
	  _0x58cff2 = k(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 1], 12, 3905402710);
	  _0x3a8a59 = k(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 2], 17, 606105819);
	  _0x20d302 = k(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 3], 22, 3250441966);
	  _0x452f67 = k(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 4], 7, 4118548399);
	  _0x58cff2 = k(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 5], 12, 1200080426);
	  _0x3a8a59 = k(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 6], 17, 2821735955);
	  _0x20d302 = k(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 7], 22, 4249261313);
	  _0x452f67 = k(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 8], 7, 1770035416);
	  _0x58cff2 = k(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 9], 12, 2336552879);
	  _0x3a8a59 = k(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 10], 17, 4294925233);
	  _0x20d302 = k(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 11], 22, 2304563134);
	  _0x452f67 = k(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 12], 7, 1804603682);
	  _0x58cff2 = k(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 13], 12, 4254626195);
	  _0x3a8a59 = k(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 14], 17, 2792965006);
	  _0x20d302 = k(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 15], 22, 1236535329);
	  _0x452f67 = l(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 1], 5, 4129170786);
	  _0x58cff2 = l(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 6], 9, 3225465664);
	  _0x3a8a59 = l(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 11], 14, 643717713);
	  _0x20d302 = l(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 0], 20, 3921069994);
	  _0x452f67 = l(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 5], 5, 3593408605);
	  _0x58cff2 = l(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 10], 9, 38016083);
	  _0x3a8a59 = l(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 15], 14, 3634488961);
	  _0x20d302 = l(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 4], 20, 3889429448);
	  _0x452f67 = l(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 9], 5, 568446438);
	  _0x58cff2 = l(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 14], 9, 3275163606);
	  _0x3a8a59 = l(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 3], 14, 4107603335);
	  _0x20d302 = l(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 8], 20, 1163531501);
	  _0x452f67 = l(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 13], 5, 2850285829);
	  _0x58cff2 = l(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 2], 9, 4243563512);
	  _0x3a8a59 = l(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 7], 14, 1735328473);
	  _0x20d302 = l(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 12], 20, 2368359562);
	  _0x452f67 = m(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 5], 4, 4294588738);
	  _0x58cff2 = m(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 8], 11, 2272392833);
	  _0x3a8a59 = m(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 11], 16, 1839030562);
	  _0x20d302 = m(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 14], 23, 4259657740);
	  _0x452f67 = m(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 1], 4, 2763975236);
	  _0x58cff2 = m(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 4], 11, 1272893353);
	  _0x3a8a59 = m(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 7], 16, 4139469664);
	  _0x20d302 = m(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 10], 23, 3200236656);
	  _0x452f67 = m(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 13], 4, 681279174);
	  _0x58cff2 = m(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 0], 11, 3936430074);
	  _0x3a8a59 = m(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 3], 16, 3572445317);
	  _0x20d302 = m(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 6], 23, 76029189);
	  _0x452f67 = m(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 9], 4, 3654602809);
	  _0x58cff2 = m(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 12], 11, 3873151461);
	  _0x3a8a59 = m(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 15], 16, 530742520);
	  _0x20d302 = m(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 2], 23, 3299628645);
	  _0x452f67 = n(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 0], 6, 4096336452);
	  _0x58cff2 = n(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 7], 10, 1126891415);
	  _0x3a8a59 = n(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 14], 15, 2878612391);
	  _0x20d302 = n(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 5], 21, 4237533241);
	  _0x452f67 = n(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 12], 6, 1700485571);
	  _0x58cff2 = n(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 3], 10, 2399980690);
	  _0x3a8a59 = n(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 10], 15, 4293915773);
	  _0x20d302 = n(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 1], 21, 2240044497);
	  _0x452f67 = n(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 8], 6, 1873313359);
	  _0x58cff2 = n(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 15], 10, 4264355552);
	  _0x3a8a59 = n(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 6], 15, 2734768916);
	  _0x20d302 = n(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 13], 21, 1309151649);
	  _0x452f67 = n(_0x452f67, _0x20d302, _0x3a8a59, _0x58cff2, _0x1b8333[_0xbece56 + 4], 6, 4149444226);
	  _0x58cff2 = n(_0x58cff2, _0x452f67, _0x20d302, _0x3a8a59, _0x1b8333[_0xbece56 + 11], 10, 3174756917);
	  _0x3a8a59 = n(_0x3a8a59, _0x58cff2, _0x452f67, _0x20d302, _0x1b8333[_0xbece56 + 2], 15, 718787259);
	  _0x20d302 = n(_0x20d302, _0x3a8a59, _0x58cff2, _0x452f67, _0x1b8333[_0xbece56 + 9], 21, 3951481745);
	  _0x452f67 = h(_0x452f67, _0x28207d);
	  _0x20d302 = h(_0x20d302, _0x383438);
	  _0x3a8a59 = h(_0x3a8a59, _0x11fccf);
	  _0x58cff2 = h(_0x58cff2, _0x3ce4d1);
	}
  
	return (_0x50a213(_0x452f67) + _0x50a213(_0x20d302) + _0x50a213(_0x3a8a59) + _0x50a213(_0x58cff2))["toLowerCase"]();
  }
  
  function hoo(_0xc82e03, _0x164dc2) {
	return sha256(_0xc82e03);
  }
  
  // 原始的OOXX函数生成一个固定的字符串
  function OOXX() {
    // 原数组 [98, 115, 98, 115, 98, 115, 98, 115, 98, 108]
    // 转换为字符串: "bsbsbsbsbl"
    return "bsbsbsbsbl";
  }
  
  // xo函数就是简单的字符串拼接
  function xo(str1, str2) {
    return str1 + str2;
  }
  
  // hoo函数是对SHA256的直接调用
  function hoo(input) {
    return sha256(input);
  }
  
  // xoo函数组合了加密操作
  function xoo(hashFunc, input) {
    return hoo(hashFunc(input));
  }
  
  // OOOO是主要的加密函数
  function OOOO(url) {
    let salt = OOXX(); // 获取salt字符串
    return xoo(xooo, xo(url, salt)); // 对url+salt进行MD5+SHA256双重加密
  }
  
  function load(page) {
    const params = {
        page: page
    };
    const queryString = new URLSearchParams(params).toString();
    
    $.ajax({
        url: `/api/problem-detail/${problemId}/data/?${queryString}`,
        method: "GET",
        async: true,
        dataType: "json",
        beforeSend: function(xhr) {
            // 空函数
        },
        success: function(response) {
            updatePageContent(response);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching problem details:", status, error);
        }
    });
}
  
  window["loadPage"] = load;