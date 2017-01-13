/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _DataTable = __webpack_require__(2);

	var _DataTable2 = _interopRequireDefault(_DataTable);

	var _chance = __webpack_require__(9);

	var _chance2 = _interopRequireDefault(_chance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _vue2.default({
	  el: '#app',
	  data: {
	    tableData: {
	      options: {
	        sortable: true,
	        editable: true,
	        pageCount: 10
	      },

	      columns: [{
	        value: 'id',
	        text: 'ID',
	        sortable: true,
	        editable: false
	      }, {
	        value: 'name',
	        text: 'Name',
	        sortable: true,
	        editable: true
	      }, {
	        value: 'age',
	        text: 'Age',
	        sortable: true,
	        editable: true
	      }, {
	        value: 'sex',
	        text: 'Sex',
	        sortable: true,
	        editable: true
	      }, {
	        value: 'link',
	        text: 'Link',
	        sortable: false,
	        editable: false,
	        isHTML: true
	      }, {
	        value: 'action',
	        text: 'Action',
	        sortable: false,
	        editable: false,
	        isButton: true
	      }],

	      rows: [],

	      onPageChanged: function onPageChanged(page) {
	        console.log('Current page is ' + page);
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.$nextTick(function () {
	      var chance = new _chance2.default();
	      var length = chance.integer({ min: 0, max: 1000 });

	      for (var i = 0; i < length; i++) {
	        var obj = {
	          id: {
	            value: i + 1
	          },

	          name: {
	            value: chance.name(),
	            editable: chance.bool()
	          },

	          age: {
	            value: chance.age(),
	            editable: chance.bool()
	          },

	          sex: {
	            value: chance.gender(),
	            editable: chance.bool
	          },

	          link: {
	            value: '<a href="' + chance.url() + '">' + chance.url() + '</a>'
	          },

	          action: {
	            value: [{
	              text: 'action1',
	              class: ['red'],
	              func: function func(event, column, field) {
	                console.log('event', event);
	                console.log('column', column);
	                console.log('field', field);
	              }
	            }, {
	              text: 'action2',
	              class: ['green'],
	              func: function func(event, column, field) {
	                console.log('event', event);
	                console.log('column', column);
	                console.log('field', field);
	              }
	            }]
	          }
	        };

	        this.tableData.rows.push(obj);
	      }
	      console.log(JSON.stringify(this.$data));
	    });
	  },
	  components: {
	    DataTable: _DataTable2.default
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * Vue.js v2.1.8
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.Vue = t();
	}(undefined, function () {
	  "use strict";
	  function e(e) {
	    return null == e ? "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? JSON.stringify(e, null, 2) : String(e);
	  }function t(e) {
	    var t = parseFloat(e, 10);return t || 0 === t ? t : e;
	  }function n(e, t) {
	    for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) {
	      n[r[i]] = !0;
	    }return t ? function (e) {
	      return n[e.toLowerCase()];
	    } : function (e) {
	      return n[e];
	    };
	  }function r(e, t) {
	    if (e.length) {
	      var n = e.indexOf(t);if (n > -1) return e.splice(n, 1);
	    }
	  }function i(e, t) {
	    return ni.call(e, t);
	  }function a(e) {
	    return "string" == typeof e || "number" == typeof e;
	  }function o(e) {
	    var t = Object.create(null);return function (n) {
	      var r = t[n];return r || (t[n] = e(n));
	    };
	  }function s(e, t) {
	    function n(n) {
	      var r = arguments.length;return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
	    }return n._length = e.length, n;
	  }function c(e, t) {
	    t = t || 0;for (var n = e.length - t, r = new Array(n); n--;) {
	      r[n] = e[n + t];
	    }return r;
	  }function l(e, t) {
	    for (var n in t) {
	      e[n] = t[n];
	    }return e;
	  }function u(e) {
	    return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
	  }function f(e) {
	    return ci.call(e) === li;
	  }function d(e) {
	    for (var t = {}, n = 0; n < e.length; n++) {
	      e[n] && l(t, e[n]);
	    }return t;
	  }function p() {}function v(e) {
	    return e.reduce(function (e, t) {
	      return e.concat(t.staticKeys || []);
	    }, []).join(",");
	  }function h(e, t) {
	    var n = u(e),
	        r = u(t);return n && r ? JSON.stringify(e) === JSON.stringify(t) : !n && !r && String(e) === String(t);
	  }function m(e, t) {
	    for (var n = 0; n < e.length; n++) {
	      if (h(e[n], t)) return n;
	    }return -1;
	  }function g(e) {
	    var t = (e + "").charCodeAt(0);return 36 === t || 95 === t;
	  }function y(e, t, n, r) {
	    Object.defineProperty(e, t, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
	  }function _(e) {
	    if (!pi.test(e)) {
	      var t = e.split(".");return function (e) {
	        for (var n = 0; n < t.length; n++) {
	          if (!e) return;e = e[t[n]];
	        }return e;
	      };
	    }
	  }function b(e) {
	    return (/native code/.test(e.toString())
	    );
	  }function $(e) {
	    Si.target && Ti.push(Si.target), Si.target = e;
	  }function w() {
	    Si.target = Ti.pop();
	  }function C(e, t) {
	    e.__proto__ = t;
	  }function x(e, t, n) {
	    for (var r = 0, i = n.length; r < i; r++) {
	      var a = n[r];y(e, a, t[a]);
	    }
	  }function k(e, t) {
	    if (u(e)) {
	      var n;return i(e, "__ob__") && e.__ob__ instanceof Di ? n = e.__ob__ : Li.shouldConvert && !wi() && (Array.isArray(e) || f(e)) && Object.isExtensible(e) && !e._isVue && (n = new Di(e)), t && n && n.vmCount++, n;
	    }
	  }function A(e, t, n, r) {
	    var i = new Si(),
	        a = Object.getOwnPropertyDescriptor(e, t);if (!a || a.configurable !== !1) {
	      var o = a && a.get,
	          s = a && a.set,
	          c = k(n);Object.defineProperty(e, t, { enumerable: !0, configurable: !0, get: function get() {
	          var t = o ? o.call(e) : n;return Si.target && (i.depend(), c && c.dep.depend(), Array.isArray(t) && T(t)), t;
	        }, set: function set(t) {
	          var r = o ? o.call(e) : n;t === r || t !== t && r !== r || (s ? s.call(e, t) : n = t, c = k(t), i.notify());
	        } });
	    }
	  }function O(e, t, n) {
	    if (Array.isArray(e)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;if (i(e, t)) return void (e[t] = n);var r = e.__ob__;if (!(e._isVue || r && r.vmCount)) return r ? (A(r.value, t, n), r.dep.notify(), n) : void (e[t] = n);
	  }function S(e, t) {
	    var n = e.__ob__;e._isVue || n && n.vmCount || i(e, t) && (delete e[t], n && n.dep.notify());
	  }function T(e) {
	    for (var t = void 0, n = 0, r = e.length; n < r; n++) {
	      t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && T(t);
	    }
	  }function E(e, t) {
	    if (!t) return e;for (var n, r, a, o = Object.keys(t), s = 0; s < o.length; s++) {
	      n = o[s], r = e[n], a = t[n], i(e, n) ? f(r) && f(a) && E(r, a) : O(e, n, a);
	    }return e;
	  }function j(e, t) {
	    return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
	  }function N(e, t) {
	    var n = Object.create(e || null);return t ? l(n, t) : n;
	  }function L(e) {
	    var t = e.props;if (t) {
	      var n,
	          r,
	          i,
	          a = {};if (Array.isArray(t)) for (n = t.length; n--;) {
	        r = t[n], "string" == typeof r && (i = ii(r), a[i] = { type: null });
	      } else if (f(t)) for (var o in t) {
	        r = t[o], i = ii(o), a[i] = f(r) ? r : { type: r };
	      }e.props = a;
	    }
	  }function D(e) {
	    var t = e.directives;if (t) for (var n in t) {
	      var r = t[n];"function" == typeof r && (t[n] = { bind: r, update: r });
	    }
	  }function M(e, t, n) {
	    function r(r) {
	      var i = Mi[r] || Pi;u[r] = i(e[r], t[r], n, r);
	    }L(t), D(t);var a = t.extends;if (a && (e = "function" == typeof a ? M(e, a.options, n) : M(e, a, n)), t.mixins) for (var o = 0, s = t.mixins.length; o < s; o++) {
	      var c = t.mixins[o];c.prototype instanceof Be && (c = c.options), e = M(e, c, n);
	    }var l,
	        u = {};for (l in e) {
	      r(l);
	    }for (l in t) {
	      i(e, l) || r(l);
	    }return u;
	  }function P(e, t, n, r) {
	    if ("string" == typeof n) {
	      var a = e[t];if (i(a, n)) return a[n];var o = ii(n);if (i(a, o)) return a[o];var s = ai(o);if (i(a, s)) return a[s];var c = a[n] || a[o] || a[s];return c;
	    }
	  }function R(e, t, n, r) {
	    var a = t[e],
	        o = !i(n, e),
	        s = n[e];if (H(Boolean, a.type) && (o && !i(a, "default") ? s = !1 : H(String, a.type) || "" !== s && s !== si(e) || (s = !0)), void 0 === s) {
	      s = I(r, a, e);var c = Li.shouldConvert;Li.shouldConvert = !0, k(s), Li.shouldConvert = c;
	    }return s;
	  }function I(e, t, n) {
	    if (i(t, "default")) {
	      var r = t.default;return u(r), e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e[n] ? e[n] : "function" == typeof r && t.type !== Function ? r.call(e) : r;
	    }
	  }function F(e) {
	    var t = e && e.toString().match(/^\s*function (\w+)/);return t && t[1];
	  }function H(e, t) {
	    if (!Array.isArray(t)) return F(t) === F(e);for (var n = 0, r = t.length; n < r; n++) {
	      if (F(t[n]) === F(e)) return !0;
	    }return !1;
	  }function U() {
	    Ii.length = 0, Fi = {}, Hi = Ui = !1;
	  }function B() {
	    for (Ui = !0, Ii.sort(function (e, t) {
	      return e.id - t.id;
	    }), Bi = 0; Bi < Ii.length; Bi++) {
	      var e = Ii[Bi],
	          t = e.id;Fi[t] = null, e.run();
	    }Ci && di.devtools && Ci.emit("flush"), U();
	  }function z(e) {
	    var t = e.id;if (null == Fi[t]) {
	      if (Fi[t] = !0, Ui) {
	        for (var n = Ii.length - 1; n >= 0 && Ii[n].id > e.id;) {
	          n--;
	        }Ii.splice(Math.max(n, Bi) + 1, 0, e);
	      } else Ii.push(e);Hi || (Hi = !0, xi(B));
	    }
	  }function V(e) {
	    Ki.clear(), J(e, Ki);
	  }function J(e, t) {
	    var n,
	        r,
	        i = Array.isArray(e);if ((i || u(e)) && Object.isExtensible(e)) {
	      if (e.__ob__) {
	        var a = e.__ob__.dep.id;if (t.has(a)) return;t.add(a);
	      }if (i) for (n = e.length; n--;) {
	        J(e[n], t);
	      } else for (r = Object.keys(e), n = r.length; n--;) {
	        J(e[r[n]], t);
	      }
	    }
	  }function K(e) {
	    e._watchers = [];var t = e.$options;t.props && q(e, t.props), t.methods && Y(e, t.methods), t.data ? W(e) : k(e._data = {}, !0), t.computed && Z(e, t.computed), t.watch && Q(e, t.watch);
	  }function q(e, t) {
	    var n = e.$options.propsData || {},
	        r = e.$options._propKeys = Object.keys(t),
	        i = !e.$parent;Li.shouldConvert = i;for (var a = function a(i) {
	      var a = r[i];A(e, a, R(a, t, n, e));
	    }, o = 0; o < r.length; o++) {
	      a(o);
	    }Li.shouldConvert = !0;
	  }function W(e) {
	    var t = e.$options.data;t = e._data = "function" == typeof t ? t.call(e) : t || {}, f(t) || (t = {});for (var n = Object.keys(t), r = e.$options.props, a = n.length; a--;) {
	      r && i(r, n[a]) || te(e, n[a]);
	    }k(t, !0);
	  }function Z(e, t) {
	    for (var n in t) {
	      var r = t[n];"function" == typeof r ? (qi.get = G(r, e), qi.set = p) : (qi.get = r.get ? r.cache !== !1 ? G(r.get, e) : s(r.get, e) : p, qi.set = r.set ? s(r.set, e) : p), Object.defineProperty(e, n, qi);
	    }
	  }function G(e, t) {
	    var n = new Vi(t, e, p, { lazy: !0 });return function () {
	      return n.dirty && n.evaluate(), Si.target && n.depend(), n.value;
	    };
	  }function Y(e, t) {
	    for (var n in t) {
	      e[n] = null == t[n] ? p : s(t[n], e);
	    }
	  }function Q(e, t) {
	    for (var n in t) {
	      var r = t[n];if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
	        X(e, n, r[i]);
	      } else X(e, n, r);
	    }
	  }function X(e, t, n) {
	    var r;f(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
	  }function ee(e) {
	    var t = {};t.get = function () {
	      return this._data;
	    }, Object.defineProperty(e.prototype, "$data", t), e.prototype.$set = O, e.prototype.$delete = S, e.prototype.$watch = function (e, t, n) {
	      var r = this;n = n || {}, n.user = !0;var i = new Vi(r, e, t, n);return n.immediate && t.call(r, i.value), function () {
	        i.teardown();
	      };
	    };
	  }function te(e, t) {
	    g(t) || Object.defineProperty(e, t, { configurable: !0, enumerable: !0, get: function get() {
	        return e._data[t];
	      }, set: function set(n) {
	        e._data[t] = n;
	      } });
	  }function ne(e) {
	    return new Wi(void 0, void 0, void 0, String(e));
	  }function re(e) {
	    var t = new Wi(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions);return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isCloned = !0, t;
	  }function ie(e) {
	    for (var t = new Array(e.length), n = 0; n < e.length; n++) {
	      t[n] = re(e[n]);
	    }return t;
	  }function ae(e, t, n, r) {
	    r += t;var i = e.__injected || (e.__injected = {});if (!i[r]) {
	      i[r] = !0;var a = e[t];a ? e[t] = function () {
	        a.apply(this, arguments), n.apply(this, arguments);
	      } : e[t] = n;
	    }
	  }function oe(e, t, n, r, i) {
	    var a, o, s, c, l, u, f;for (a in e) {
	      if (o = e[a], s = t[a], o) {
	        if (s) {
	          if (o !== s) if (Array.isArray(s)) {
	            s.length = o.length;for (var d = 0; d < s.length; d++) {
	              s[d] = o[d];
	            }e[a] = s;
	          } else s.fn = o, e[a] = s;
	        } else f = "~" === a.charAt(0), l = f ? a.slice(1) : a, u = "!" === l.charAt(0), l = u ? l.slice(1) : l, Array.isArray(o) ? n(l, o.invoker = se(o), f, u) : (o.invoker || (c = o, o = e[a] = {}, o.fn = c, o.invoker = ce(o)), n(l, o.invoker, f, u));
	      } else ;
	    }for (a in t) {
	      e[a] || (f = "~" === a.charAt(0), l = f ? a.slice(1) : a, u = "!" === l.charAt(0), l = u ? l.slice(1) : l, r(l, t[a].invoker, u));
	    }
	  }function se(e) {
	    return function (t) {
	      for (var n = arguments, r = 1 === arguments.length, i = 0; i < e.length; i++) {
	        r ? e[i](t) : e[i].apply(null, n);
	      }
	    };
	  }function ce(e) {
	    return function (t) {
	      var n = 1 === arguments.length;n ? e.fn(t) : e.fn.apply(null, arguments);
	    };
	  }function le(e) {
	    for (var t = 0; t < e.length; t++) {
	      if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
	    }return e;
	  }function ue(e) {
	    return a(e) ? [ne(e)] : Array.isArray(e) ? fe(e) : void 0;
	  }function fe(e, t) {
	    var n,
	        r,
	        i,
	        o = [];for (n = 0; n < e.length; n++) {
	      r = e[n], null != r && "boolean" != typeof r && (i = o[o.length - 1], Array.isArray(r) ? o.push.apply(o, fe(r, (t || "") + "_" + n)) : a(r) ? i && i.text ? i.text += String(r) : "" !== r && o.push(ne(r)) : r.text && i && i.text ? o[o.length - 1] = ne(i.text + r.text) : (r.tag && null == r.key && null != t && (r.key = "__vlist" + t + "_" + n + "__"), o.push(r)));
	    }return o;
	  }function de(e) {
	    return e && e.filter(function (e) {
	      return e && e.componentOptions;
	    })[0];
	  }function pe(e) {
	    e._events = Object.create(null), e._hasHookEvent = !1;var t = e.$options._parentListeners;t && me(e, t);
	  }function ve(e, t, n) {
	    n ? Ji.$once(e, t) : Ji.$on(e, t);
	  }function he(e, t) {
	    Ji.$off(e, t);
	  }function me(e, t, n) {
	    Ji = e, oe(t, n || {}, ve, he, e);
	  }function ge(e) {
	    var t = /^hook:/;e.prototype.$on = function (e, n) {
	      var r = this;return (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0), r;
	    }, e.prototype.$once = function (e, t) {
	      function n() {
	        r.$off(e, n), t.apply(r, arguments);
	      }var r = this;return n.fn = t, r.$on(e, n), r;
	    }, e.prototype.$off = function (e, t) {
	      var n = this;if (!arguments.length) return n._events = Object.create(null), n;var r = n._events[e];if (!r) return n;if (1 === arguments.length) return n._events[e] = null, n;for (var i, a = r.length; a--;) {
	        if (i = r[a], i === t || i.fn === t) {
	          r.splice(a, 1);break;
	        }
	      }return n;
	    }, e.prototype.$emit = function (e) {
	      var t = this,
	          n = t._events[e];if (n) {
	        n = n.length > 1 ? c(n) : n;for (var r = c(arguments, 1), i = 0, a = n.length; i < a; i++) {
	          n[i].apply(t, r);
	        }
	      }return t;
	    };
	  }function ye(e) {
	    var t = e.$options,
	        n = t.parent;if (n && !t.abstract) {
	      for (; n.$options.abstract && n.$parent;) {
	        n = n.$parent;
	      }n.$children.push(e);
	    }e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
	  }function _e(e) {
	    e.prototype._mount = function (e, t) {
	      var n = this;return n.$el = e, n.$options.render || (n.$options.render = Zi), be(n, "beforeMount"), n._watcher = new Vi(n, function () {
	        n._update(n._render(), t);
	      }, p), t = !1, null == n.$vnode && (n._isMounted = !0, be(n, "mounted")), n;
	    }, e.prototype._update = function (e, t) {
	      var n = this;n._isMounted && be(n, "beforeUpdate");var r = n.$el,
	          i = n._vnode,
	          a = Gi;Gi = n, n._vnode = e, i ? n.$el = n.__patch__(i, e) : n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), Gi = a, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el), n._isMounted && be(n, "updated");
	    }, e.prototype._updateFromParent = function (e, t, n, r) {
	      var i = this,
	          a = !(!i.$options._renderChildren && !r);if (i.$options._parentVnode = n, i.$vnode = n, i._vnode && (i._vnode.parent = n), i.$options._renderChildren = r, e && i.$options.props) {
	        Li.shouldConvert = !1;for (var o = i.$options._propKeys || [], s = 0; s < o.length; s++) {
	          var c = o[s];i[c] = R(c, i.$options.props, e, i);
	        }Li.shouldConvert = !0, i.$options.propsData = e;
	      }if (t) {
	        var l = i.$options._parentListeners;i.$options._parentListeners = t, me(i, t, l);
	      }a && (i.$slots = Ie(r, n.context), i.$forceUpdate());
	    }, e.prototype.$forceUpdate = function () {
	      var e = this;e._watcher && e._watcher.update();
	    }, e.prototype.$destroy = function () {
	      var e = this;if (!e._isBeingDestroyed) {
	        be(e, "beforeDestroy"), e._isBeingDestroyed = !0;var t = e.$parent;!t || t._isBeingDestroyed || e.$options.abstract || r(t.$children, e), e._watcher && e._watcher.teardown();for (var n = e._watchers.length; n--;) {
	          e._watchers[n].teardown();
	        }e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, be(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.__patch__(e._vnode, null);
	      }
	    };
	  }function be(e, t) {
	    var n = e.$options[t];if (n) for (var r = 0, i = n.length; r < i; r++) {
	      n[r].call(e);
	    }e._hasHookEvent && e.$emit("hook:" + t);
	  }function $e(e, t, n, r, i) {
	    if (e) {
	      var a = n.$options._base;if (u(e) && (e = a.extend(e)), "function" == typeof e) {
	        if (!e.cid) if (e.resolved) e = e.resolved;else if (e = Se(e, a, function () {
	          n.$forceUpdate();
	        }), !e) return;Ue(e), t = t || {};var o = Te(t, e);if (e.options.functional) return we(e, o, t, n, r);var s = t.on;t.on = t.nativeOn, e.options.abstract && (t = {}), je(t);var c = e.options.name || i,
	            l = new Wi("vue-component-" + e.cid + (c ? "-" + c : ""), t, void 0, void 0, void 0, n, { Ctor: e, propsData: o, listeners: s, tag: i, children: r });return l;
	      }
	    }
	  }function we(e, t, n, r, i) {
	    var a = {},
	        o = e.options.props;if (o) for (var s in o) {
	      a[s] = R(s, o, t);
	    }var c = Object.create(r),
	        l = function l(e, t, n, r) {
	      return Le(c, e, t, n, r, !0);
	    },
	        u = e.options.render.call(null, l, { props: a, data: n, parent: r, children: i, slots: function slots() {
	        return Ie(i, r);
	      } });return u instanceof Wi && (u.functionalContext = r, n.slot && ((u.data || (u.data = {})).slot = n.slot)), u;
	  }function Ce(e, t, n, r) {
	    var i = e.componentOptions,
	        a = { _isComponent: !0, parent: t, propsData: i.propsData, _componentTag: i.tag, _parentVnode: e, _parentListeners: i.listeners, _renderChildren: i.children, _parentElm: n || null, _refElm: r || null },
	        o = e.data.inlineTemplate;return o && (a.render = o.render, a.staticRenderFns = o.staticRenderFns), new i.Ctor(a);
	  }function xe(e, t, n, r) {
	    if (!e.child || e.child._isDestroyed) {
	      var i = e.child = Ce(e, Gi, n, r);i.$mount(t ? e.elm : void 0, t);
	    } else if (e.data.keepAlive) {
	      var a = e;ke(a, a);
	    }
	  }function ke(e, t) {
	    var n = t.componentOptions,
	        r = t.child = e.child;r._updateFromParent(n.propsData, n.listeners, t, n.children);
	  }function Ae(e) {
	    e.child._isMounted || (e.child._isMounted = !0, be(e.child, "mounted")), e.data.keepAlive && (e.child._inactive = !1, be(e.child, "activated"));
	  }function Oe(e) {
	    e.child._isDestroyed || (e.data.keepAlive ? (e.child._inactive = !0, be(e.child, "deactivated")) : e.child.$destroy());
	  }function Se(e, t, n) {
	    if (!e.requested) {
	      e.requested = !0;var r = e.pendingCallbacks = [n],
	          i = !0,
	          a = function a(n) {
	        if (u(n) && (n = t.extend(n)), e.resolved = n, !i) for (var a = 0, o = r.length; a < o; a++) {
	          r[a](n);
	        }
	      },
	          o = function o(e) {},
	          s = e(a, o);return s && "function" == typeof s.then && !e.resolved && s.then(a, o), i = !1, e.resolved;
	    }e.pendingCallbacks.push(n);
	  }function Te(e, t) {
	    var n = t.options.props;if (n) {
	      var r = {},
	          i = e.attrs,
	          a = e.props,
	          o = e.domProps;if (i || a || o) for (var s in n) {
	        var c = si(s);Ee(r, a, s, c, !0) || Ee(r, i, s, c) || Ee(r, o, s, c);
	      }return r;
	    }
	  }function Ee(e, t, n, r, a) {
	    if (t) {
	      if (i(t, n)) return e[n] = t[n], a || delete t[n], !0;if (i(t, r)) return e[n] = t[r], a || delete t[r], !0;
	    }return !1;
	  }function je(e) {
	    e.hook || (e.hook = {});for (var t = 0; t < Qi.length; t++) {
	      var n = Qi[t],
	          r = e.hook[n],
	          i = Yi[n];e.hook[n] = r ? Ne(i, r) : i;
	    }
	  }function Ne(e, t) {
	    return function (n, r, i, a) {
	      e(n, r, i, a), t(n, r, i, a);
	    };
	  }function Le(e, t, n, r, i, o) {
	    return (Array.isArray(n) || a(n)) && (i = r, r = n, n = void 0), o && (i = ea), De(e, t, n, r, i);
	  }function De(e, t, n, r, i) {
	    if (n && n.__ob__) return Zi();if (!t) return Zi();Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), i === ea ? r = ue(r) : i === Xi && (r = le(r));var a, o;if ("string" == typeof t) {
	      var s;o = di.getTagNamespace(t), a = di.isReservedTag(t) ? new Wi(di.parsePlatformTagName(t), n, r, void 0, void 0, e) : (s = P(e.$options, "components", t)) ? $e(s, n, e, r, t) : new Wi(t, n, r, void 0, void 0, e);
	    } else a = $e(t, n, e, r);return a ? (o && Me(a, o), a) : Zi();
	  }function Me(e, t) {
	    if (e.ns = t, "foreignObject" !== e.tag && e.children) for (var n = 0, r = e.children.length; n < r; n++) {
	      var i = e.children[n];i.tag && !i.ns && Me(i, t);
	    }
	  }function Pe(e) {
	    e.$vnode = null, e._vnode = null, e._staticTrees = null;var t = e.$options._parentVnode,
	        n = t && t.context;e.$slots = Ie(e.$options._renderChildren, n), e.$scopedSlots = {}, e._c = function (t, n, r, i) {
	      return Le(e, t, n, r, i, !1);
	    }, e.$createElement = function (t, n, r, i) {
	      return Le(e, t, n, r, i, !0);
	    }, e.$options.el && e.$mount(e.$options.el);
	  }function Re(n) {
	    function r(e, t, n) {
	      if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
	        e[r] && "string" != typeof e[r] && i(e[r], t + "_" + r, n);
	      } else i(e, t, n);
	    }function i(e, t, n) {
	      e.isStatic = !0, e.key = t, e.isOnce = n;
	    }n.prototype.$nextTick = function (e) {
	      return xi(e, this);
	    }, n.prototype._render = function () {
	      var e = this,
	          t = e.$options,
	          n = t.render,
	          r = t.staticRenderFns,
	          i = t._parentVnode;if (e._isMounted) for (var a in e.$slots) {
	        e.$slots[a] = ie(e.$slots[a]);
	      }i && i.data.scopedSlots && (e.$scopedSlots = i.data.scopedSlots), r && !e._staticTrees && (e._staticTrees = []), e.$vnode = i;var o;try {
	        o = n.call(e._renderProxy, e.$createElement);
	      } catch (t) {
	        if (!di.errorHandler) throw t;di.errorHandler.call(null, t, e), o = e._vnode;
	      }return o instanceof Wi || (o = Zi()), o.parent = i, o;
	    }, n.prototype._s = e, n.prototype._v = ne, n.prototype._n = t, n.prototype._e = Zi, n.prototype._q = h, n.prototype._i = m, n.prototype._m = function (e, t) {
	      var n = this._staticTrees[e];return n && !t ? Array.isArray(n) ? ie(n) : re(n) : (n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), r(n, "__static__" + e, !1), n);
	    }, n.prototype._o = function (e, t, n) {
	      return r(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
	    }, n.prototype._f = function (e) {
	      return P(this.$options, "filters", e, !0) || fi;
	    }, n.prototype._l = function (e, t) {
	      var n, r, i, a, o;if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) {
	        n[r] = t(e[r], r);
	      } else if ("number" == typeof e) for (n = new Array(e), r = 0; r < e; r++) {
	        n[r] = t(r + 1, r);
	      } else if (u(e)) for (a = Object.keys(e), n = new Array(a.length), r = 0, i = a.length; r < i; r++) {
	        o = a[r], n[r] = t(e[o], o, r);
	      }return n;
	    }, n.prototype._t = function (e, t, n, r) {
	      var i = this.$scopedSlots[e];if (i) return n = n || {}, r && l(n, r), i(n) || t;var a = this.$slots[e];return a || t;
	    }, n.prototype._b = function (e, t, n, r) {
	      if (n) if (u(n)) {
	        Array.isArray(n) && (n = d(n));for (var i in n) {
	          if ("class" === i || "style" === i) e[i] = n[i];else {
	            var a = r || di.mustUseProp(t, i) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});a[i] = n[i];
	          }
	        }
	      } else ;return e;
	    }, n.prototype._k = function (e, t, n) {
	      var r = di.keyCodes[t] || n;return Array.isArray(r) ? r.indexOf(e) === -1 : r !== e;
	    };
	  }function Ie(e, t) {
	    var n = {};if (!e) return n;for (var r, i, a = [], o = 0, s = e.length; o < s; o++) {
	      if (i = e[o], (i.context === t || i.functionalContext === t) && i.data && (r = i.data.slot)) {
	        var c = n[r] || (n[r] = []);"template" === i.tag ? c.push.apply(c, i.children) : c.push(i);
	      } else a.push(i);
	    }return a.length && (1 !== a.length || " " !== a[0].text && !a[0].isComment) && (n.default = a), n;
	  }function Fe(e) {
	    e.prototype._init = function (e) {
	      var t = this;t._uid = ta++, t._isVue = !0, e && e._isComponent ? He(t, e) : t.$options = M(Ue(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, ye(t), pe(t), be(t, "beforeCreate"), K(t), be(t, "created"), Pe(t);
	    };
	  }function He(e, t) {
	    var n = e.$options = Object.create(e.constructor.options);n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, n._parentElm = t._parentElm, n._refElm = t._refElm, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
	  }function Ue(e) {
	    var t = e.options;if (e.super) {
	      var n = e.super.options,
	          r = e.superOptions,
	          i = e.extendOptions;n !== r && (e.superOptions = n, i.render = t.render, i.staticRenderFns = t.staticRenderFns, i._scopeId = t._scopeId, t = e.options = M(n, i), t.name && (t.components[t.name] = e));
	    }return t;
	  }function Be(e) {
	    this._init(e);
	  }function ze(e) {
	    e.use = function (e) {
	      if (!e.installed) {
	        var t = c(arguments, 1);return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : e.apply(null, t), e.installed = !0, this;
	      }
	    };
	  }function Ve(e) {
	    e.mixin = function (e) {
	      this.options = M(this.options, e);
	    };
	  }function Je(e) {
	    e.cid = 0;var t = 1;e.extend = function (e) {
	      e = e || {};var n = this,
	          r = n.cid,
	          i = e._Ctor || (e._Ctor = {});if (i[r]) return i[r];var a = e.name || n.options.name,
	          o = function o(e) {
	        this._init(e);
	      };return o.prototype = Object.create(n.prototype), o.prototype.constructor = o, o.cid = t++, o.options = M(n.options, e), o.super = n, o.extend = n.extend, o.mixin = n.mixin, o.use = n.use, di._assetTypes.forEach(function (e) {
	        o[e] = n[e];
	      }), a && (o.options.components[a] = o), o.superOptions = n.options, o.extendOptions = e, i[r] = o, o;
	    };
	  }function Ke(e) {
	    di._assetTypes.forEach(function (t) {
	      e[t] = function (e, n) {
	        return n ? ("component" === t && f(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
	      };
	    });
	  }function qe(e, t) {
	    return "string" == typeof e ? e.split(",").indexOf(t) > -1 : e.test(t);
	  }function We(e) {
	    var t = {};t.get = function () {
	      return di;
	    }, Object.defineProperty(e, "config", t), e.util = Ri, e.set = O, e.delete = S, e.nextTick = xi, e.options = Object.create(null), di._assetTypes.forEach(function (t) {
	      e.options[t + "s"] = Object.create(null);
	    }), e.options._base = e, l(e.options.components, ia), ze(e), Ve(e), Je(e), Ke(e);
	  }function Ze(e) {
	    for (var t = e.data, n = e, r = e; r.child;) {
	      r = r.child._vnode, r.data && (t = Ge(r.data, t));
	    }for (; n = n.parent;) {
	      n.data && (t = Ge(t, n.data));
	    }return Ye(t);
	  }function Ge(e, t) {
	    return { staticClass: Qe(e.staticClass, t.staticClass), class: e.class ? [e.class, t.class] : t.class };
	  }function Ye(e) {
	    var t = e.class,
	        n = e.staticClass;return n || t ? Qe(n, Xe(t)) : "";
	  }function Qe(e, t) {
	    return e ? t ? e + " " + t : e : t || "";
	  }function Xe(e) {
	    var t = "";if (!e) return t;if ("string" == typeof e) return e;if (Array.isArray(e)) {
	      for (var n, r = 0, i = e.length; r < i; r++) {
	        e[r] && (n = Xe(e[r])) && (t += n + " ");
	      }return t.slice(0, -1);
	    }if (u(e)) {
	      for (var a in e) {
	        e[a] && (t += a + " ");
	      }return t.slice(0, -1);
	    }return t;
	  }function et(e) {
	    return ga(e) ? "svg" : "math" === e ? "math" : void 0;
	  }function tt(e) {
	    if (!hi) return !0;if (_a(e)) return !1;if (e = e.toLowerCase(), null != ba[e]) return ba[e];var t = document.createElement(e);return e.indexOf("-") > -1 ? ba[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : ba[e] = /HTMLUnknownElement/.test(t.toString());
	  }function nt(e) {
	    if ("string" == typeof e) {
	      if (e = document.querySelector(e), !e) return document.createElement("div");
	    }return e;
	  }function rt(e, t) {
	    var n = document.createElement(e);return "select" !== e ? n : (t.data && t.data.attrs && "multiple" in t.data.attrs && n.setAttribute("multiple", "multiple"), n);
	  }function it(e, t) {
	    return document.createElementNS(ha[e], t);
	  }function at(e) {
	    return document.createTextNode(e);
	  }function ot(e) {
	    return document.createComment(e);
	  }function st(e, t, n) {
	    e.insertBefore(t, n);
	  }function ct(e, t) {
	    e.removeChild(t);
	  }function lt(e, t) {
	    e.appendChild(t);
	  }function ut(e) {
	    return e.parentNode;
	  }function ft(e) {
	    return e.nextSibling;
	  }function dt(e) {
	    return e.tagName;
	  }function pt(e, t) {
	    e.textContent = t;
	  }function vt(e, t, n) {
	    e.setAttribute(t, n);
	  }function ht(e, t) {
	    var n = e.data.ref;if (n) {
	      var i = e.context,
	          a = e.child || e.elm,
	          o = i.$refs;t ? Array.isArray(o[n]) ? r(o[n], a) : o[n] === a && (o[n] = void 0) : e.data.refInFor ? Array.isArray(o[n]) && o[n].indexOf(a) < 0 ? o[n].push(a) : o[n] = [a] : o[n] = a;
	    }
	  }function mt(e) {
	    return null == e;
	  }function gt(e) {
	    return null != e;
	  }function yt(e, t) {
	    return e.key === t.key && e.tag === t.tag && e.isComment === t.isComment && !e.data == !t.data;
	  }function _t(e, t, n) {
	    var r,
	        i,
	        a = {};for (r = t; r <= n; ++r) {
	      i = e[r].key, gt(i) && (a[i] = r);
	    }return a;
	  }function bt(e) {
	    function t(e) {
	      return new Wi(O.tagName(e).toLowerCase(), {}, [], void 0, e);
	    }function r(e, t) {
	      function n() {
	        0 === --n.listeners && i(e);
	      }return n.listeners = t, n;
	    }function i(e) {
	      var t = O.parentNode(e);t && O.removeChild(t, e);
	    }function o(e, t, n, r, i) {
	      if (e.isRootInsert = !i, !s(e, t, n, r)) {
	        var a = e.data,
	            o = e.children,
	            c = e.tag;gt(c) ? (e.elm = e.ns ? O.createElementNS(e.ns, c) : O.createElement(c, e), v(e), u(e, o, t), gt(a) && d(e, t), l(n, e.elm, r)) : e.isComment ? (e.elm = O.createComment(e.text), l(n, e.elm, r)) : (e.elm = O.createTextNode(e.text), l(n, e.elm, r));
	      }
	    }function s(e, t, n, r) {
	      var i = e.data;if (gt(i)) {
	        var a = gt(e.child) && i.keepAlive;if (gt(i = i.hook) && gt(i = i.init) && i(e, !1, n, r), gt(e.child)) return p(e, t), a && c(e, t, n, r), !0;
	      }
	    }function c(e, t, n, r) {
	      for (var i, a = e; a.child;) {
	        if (a = a.child._vnode, gt(i = a.data) && gt(i = i.transition)) {
	          for (i = 0; i < k.activate.length; ++i) {
	            k.activate[i](Ca, a);
	          }t.push(a);break;
	        }
	      }l(n, e.elm, r);
	    }function l(e, t, n) {
	      e && (n ? O.insertBefore(e, t, n) : O.appendChild(e, t));
	    }function u(e, t, n) {
	      if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) {
	        o(t[r], n, e.elm, null, !0);
	      } else a(e.text) && O.appendChild(e.elm, O.createTextNode(e.text));
	    }function f(e) {
	      for (; e.child;) {
	        e = e.child._vnode;
	      }return gt(e.tag);
	    }function d(e, t) {
	      for (var n = 0; n < k.create.length; ++n) {
	        k.create[n](Ca, e);
	      }C = e.data.hook, gt(C) && (C.create && C.create(Ca, e), C.insert && t.push(e));
	    }function p(e, t) {
	      e.data.pendingInsert && t.push.apply(t, e.data.pendingInsert), e.elm = e.child.$el, f(e) ? (d(e, t), v(e)) : (ht(e), t.push(e));
	    }function v(e) {
	      var t;gt(t = e.context) && gt(t = t.$options._scopeId) && O.setAttribute(e.elm, t, ""), gt(t = Gi) && t !== e.context && gt(t = t.$options._scopeId) && O.setAttribute(e.elm, t, "");
	    }function h(e, t, n, r, i, a) {
	      for (; r <= i; ++r) {
	        o(n[r], a, e, t);
	      }
	    }function m(e) {
	      var t,
	          n,
	          r = e.data;if (gt(r)) for (gt(t = r.hook) && gt(t = t.destroy) && t(e), t = 0; t < k.destroy.length; ++t) {
	        k.destroy[t](e);
	      }if (gt(t = e.children)) for (n = 0; n < e.children.length; ++n) {
	        m(e.children[n]);
	      }
	    }function g(e, t, n, r) {
	      for (; n <= r; ++n) {
	        var a = t[n];gt(a) && (gt(a.tag) ? (y(a), m(a)) : i(a.elm));
	      }
	    }function y(e, t) {
	      if (t || gt(e.data)) {
	        var n = k.remove.length + 1;for (t ? t.listeners += n : t = r(e.elm, n), gt(C = e.child) && gt(C = C._vnode) && gt(C.data) && y(C, t), C = 0; C < k.remove.length; ++C) {
	          k.remove[C](e, t);
	        }gt(C = e.data.hook) && gt(C = C.remove) ? C(e, t) : t();
	      } else i(e.elm);
	    }function _(e, t, n, r, i) {
	      for (var a, s, c, l, u = 0, f = 0, d = t.length - 1, p = t[0], v = t[d], m = n.length - 1, y = n[0], _ = n[m], $ = !i; u <= d && f <= m;) {
	        mt(p) ? p = t[++u] : mt(v) ? v = t[--d] : yt(p, y) ? (b(p, y, r), p = t[++u], y = n[++f]) : yt(v, _) ? (b(v, _, r), v = t[--d], _ = n[--m]) : yt(p, _) ? (b(p, _, r), $ && O.insertBefore(e, p.elm, O.nextSibling(v.elm)), p = t[++u], _ = n[--m]) : yt(v, y) ? (b(v, y, r), $ && O.insertBefore(e, v.elm, p.elm), v = t[--d], y = n[++f]) : (mt(a) && (a = _t(t, u, d)), s = gt(y.key) ? a[y.key] : null, mt(s) ? (o(y, r, e, p.elm), y = n[++f]) : (c = t[s], yt(c, y) ? (b(c, y, r), t[s] = void 0, $ && O.insertBefore(e, y.elm, p.elm), y = n[++f]) : (o(y, r, e, p.elm), y = n[++f])));
	      }u > d ? (l = mt(n[m + 1]) ? null : n[m + 1].elm, h(e, l, n, f, m, r)) : f > m && g(e, t, u, d);
	    }function b(e, t, n, r) {
	      if (e !== t) {
	        if (t.isStatic && e.isStatic && t.key === e.key && (t.isCloned || t.isOnce)) return t.elm = e.elm, void (t.child = e.child);var i,
	            a = t.data,
	            o = gt(a);o && gt(i = a.hook) && gt(i = i.prepatch) && i(e, t);var s = t.elm = e.elm,
	            c = e.children,
	            l = t.children;if (o && f(t)) {
	          for (i = 0; i < k.update.length; ++i) {
	            k.update[i](e, t);
	          }gt(i = a.hook) && gt(i = i.update) && i(e, t);
	        }mt(t.text) ? gt(c) && gt(l) ? c !== l && _(s, c, l, n, r) : gt(l) ? (gt(e.text) && O.setTextContent(s, ""), h(s, null, l, 0, l.length - 1, n)) : gt(c) ? g(s, c, 0, c.length - 1) : gt(e.text) && O.setTextContent(s, "") : e.text !== t.text && O.setTextContent(s, t.text), o && gt(i = a.hook) && gt(i = i.postpatch) && i(e, t);
	      }
	    }function $(e, t, n) {
	      if (n && e.parent) e.parent.data.pendingInsert = t;else for (var r = 0; r < t.length; ++r) {
	        t[r].data.hook.insert(t[r]);
	      }
	    }function w(e, t, n) {
	      t.elm = e;var r = t.tag,
	          i = t.data,
	          a = t.children;if (gt(i) && (gt(C = i.hook) && gt(C = C.init) && C(t, !0), gt(C = t.child))) return p(t, n), !0;if (gt(r)) {
	        if (gt(a)) if (e.hasChildNodes()) {
	          for (var o = !0, s = e.firstChild, c = 0; c < a.length; c++) {
	            if (!s || !w(s, a[c], n)) {
	              o = !1;break;
	            }s = s.nextSibling;
	          }if (!o || s) return !1;
	        } else u(t, a, n);if (gt(i)) for (var l in i) {
	          if (!S(l)) {
	            d(t, n);break;
	          }
	        }
	      } else e.data !== t.text && (e.data = t.text);return !0;
	    }var C,
	        x,
	        k = {},
	        A = e.modules,
	        O = e.nodeOps;for (C = 0; C < xa.length; ++C) {
	      for (k[xa[C]] = [], x = 0; x < A.length; ++x) {
	        void 0 !== A[x][xa[C]] && k[xa[C]].push(A[x][xa[C]]);
	      }
	    }var S = n("attrs,style,class,staticClass,staticStyle,key");return function (e, n, r, i, a, s) {
	      if (!n) return void (e && m(e));var c,
	          l,
	          u = !1,
	          d = [];if (e) {
	        var p = gt(e.nodeType);if (!p && yt(e, n)) b(e, n, d, i);else {
	          if (p) {
	            if (1 === e.nodeType && e.hasAttribute("server-rendered") && (e.removeAttribute("server-rendered"), r = !0), r && w(e, n, d)) return $(n, d, !0), e;e = t(e);
	          }if (c = e.elm, l = O.parentNode(c), o(n, d, l, O.nextSibling(c)), n.parent) {
	            for (var v = n.parent; v;) {
	              v.elm = n.elm, v = v.parent;
	            }if (f(n)) for (var h = 0; h < k.create.length; ++h) {
	              k.create[h](Ca, n.parent);
	            }
	          }null !== l ? g(l, [e], 0, 0) : gt(e.tag) && m(e);
	        }
	      } else u = !0, o(n, d, a, s);return $(n, d, u), n.elm;
	    };
	  }function $t(e, t) {
	    (e.data.directives || t.data.directives) && wt(e, t);
	  }function wt(e, t) {
	    var n,
	        r,
	        i,
	        a = e === Ca,
	        o = t === Ca,
	        s = Ct(e.data.directives, e.context),
	        c = Ct(t.data.directives, t.context),
	        l = [],
	        u = [];for (n in c) {
	      r = s[n], i = c[n], r ? (i.oldValue = r.value, kt(i, "update", t, e), i.def && i.def.componentUpdated && u.push(i)) : (kt(i, "bind", t, e), i.def && i.def.inserted && l.push(i));
	    }if (l.length) {
	      var f = function f() {
	        for (var n = 0; n < l.length; n++) {
	          kt(l[n], "inserted", t, e);
	        }
	      };a ? ae(t.data.hook || (t.data.hook = {}), "insert", f, "dir-insert") : f();
	    }if (u.length && ae(t.data.hook || (t.data.hook = {}), "postpatch", function () {
	      for (var n = 0; n < u.length; n++) {
	        kt(u[n], "componentUpdated", t, e);
	      }
	    }, "dir-postpatch"), !a) for (n in s) {
	      c[n] || kt(s[n], "unbind", e, e, o);
	    }
	  }function Ct(e, t) {
	    var n = Object.create(null);if (!e) return n;var r, i;for (r = 0; r < e.length; r++) {
	      i = e[r], i.modifiers || (i.modifiers = Aa), n[xt(i)] = i, i.def = P(t.$options, "directives", i.name, !0);
	    }return n;
	  }function xt(e) {
	    return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
	  }function kt(e, t, n, r, i) {
	    var a = e.def && e.def[t];a && a(n.elm, e, n, r, i);
	  }function At(e, t) {
	    if (e.data.attrs || t.data.attrs) {
	      var n,
	          r,
	          i,
	          a = t.elm,
	          o = e.data.attrs || {},
	          s = t.data.attrs || {};s.__ob__ && (s = t.data.attrs = l({}, s));for (n in s) {
	        r = s[n], i = o[n], i !== r && Ot(a, n, r);
	      }yi && s.value !== o.value && Ot(a, "value", s.value);for (n in o) {
	        null == s[n] && (da(n) ? a.removeAttributeNS(fa, pa(n)) : la(n) || a.removeAttribute(n));
	      }
	    }
	  }function Ot(e, t, n) {
	    ua(t) ? va(n) ? e.removeAttribute(t) : e.setAttribute(t, t) : la(t) ? e.setAttribute(t, va(n) || "false" === n ? "false" : "true") : da(t) ? va(n) ? e.removeAttributeNS(fa, pa(t)) : e.setAttributeNS(fa, t, n) : va(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
	  }function St(e, t) {
	    var n = t.elm,
	        r = t.data,
	        i = e.data;if (r.staticClass || r.class || i && (i.staticClass || i.class)) {
	      var a = Ze(t),
	          o = n._transitionClasses;o && (a = Qe(a, Xe(o))), a !== n._prevClass && (n.setAttribute("class", a), n._prevClass = a);
	    }
	  }function Tt(e, _t2, n, r) {
	    if (n) {
	      var i = _t2;_t2 = function t(n) {
	        Et(e, _t2, r), 1 === arguments.length ? i(n) : i.apply(null, arguments);
	      };
	    }aa.addEventListener(e, _t2, r);
	  }function Et(e, t, n) {
	    aa.removeEventListener(e, t, n);
	  }function jt(e, t) {
	    if (e.data.on || t.data.on) {
	      var n = t.data.on || {},
	          r = e.data.on || {};aa = t.elm, oe(n, r, Tt, Et, t.context);
	    }
	  }function Nt(e, t) {
	    if (e.data.domProps || t.data.domProps) {
	      var n,
	          r,
	          i = t.elm,
	          a = e.data.domProps || {},
	          o = t.data.domProps || {};o.__ob__ && (o = t.data.domProps = l({}, o));for (n in a) {
	        null == o[n] && (i[n] = "");
	      }for (n in o) {
	        if (r = o[n], ("textContent" !== n && "innerHTML" !== n || (t.children && (t.children.length = 0), r !== a[n])) && ("checked" !== n || Dt(i, r))) if ("value" === n) {
	          i._value = r;var s = null == r ? "" : String(r);Lt(i, t, s) && (i.value = s);
	        } else i[n] = r;
	      }
	    }
	  }function Lt(e, t, n) {
	    return !(e.composing || "option" !== t.tag && !Dt(e, n) && !Mt(t, n));
	  }function Dt(e, t) {
	    return document.activeElement !== e && e.value !== t;
	  }function Mt(e, n) {
	    var r = e.elm.value,
	        i = e.elm._vModifiers;return i && i.number || "number" === e.elm.type ? t(r) !== t(n) : i && i.trim ? r.trim() !== n.trim() : r !== n;
	  }function Pt(e) {
	    var t = Rt(e.style);return e.staticStyle ? l(e.staticStyle, t) : t;
	  }function Rt(e) {
	    return Array.isArray(e) ? d(e) : "string" == typeof e ? Na(e) : e;
	  }function It(e, t) {
	    var n,
	        r = {};if (t) for (var i = e; i.child;) {
	      i = i.child._vnode, i.data && (n = Pt(i.data)) && l(r, n);
	    }(n = Pt(e.data)) && l(r, n);for (var a = e; a = a.parent;) {
	      a.data && (n = Pt(a.data)) && l(r, n);
	    }return r;
	  }function Ft(e, t) {
	    var n = t.data,
	        r = e.data;if (n.staticStyle || n.style || r.staticStyle || r.style) {
	      var i,
	          a,
	          o = t.elm,
	          s = e.data.staticStyle,
	          c = e.data.style || {},
	          u = s || c,
	          f = Rt(t.data.style) || {};t.data.style = f.__ob__ ? l({}, f) : f;var d = It(t, !0);for (a in u) {
	        null == d[a] && Ma(o, a, "");
	      }for (a in d) {
	        i = d[a], i !== u[a] && Ma(o, a, null == i ? "" : i);
	      }
	    }
	  }function Ht(e, t) {
	    if (t && t.trim()) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
	      return e.classList.add(t);
	    }) : e.classList.add(t);else {
	      var n = " " + e.getAttribute("class") + " ";n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
	    }
	  }function Ut(e, t) {
	    if (t && t.trim()) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
	      return e.classList.remove(t);
	    }) : e.classList.remove(t);else {
	      for (var n = " " + e.getAttribute("class") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) {
	        n = n.replace(r, " ");
	      }e.setAttribute("class", n.trim());
	    }
	  }function Bt(e) {
	    Ka(function () {
	      Ka(e);
	    });
	  }function zt(e, t) {
	    (e._transitionClasses || (e._transitionClasses = [])).push(t), Ht(e, t);
	  }function Vt(e, t) {
	    e._transitionClasses && r(e._transitionClasses, t), Ut(e, t);
	  }function Jt(e, t, n) {
	    var r = Kt(e, t),
	        i = r.type,
	        a = r.timeout,
	        o = r.propCount;if (!i) return n();var s = i === Ha ? za : Ja,
	        c = 0,
	        l = function l() {
	      e.removeEventListener(s, u), n();
	    },
	        u = function u(t) {
	      t.target === e && ++c >= o && l();
	    };setTimeout(function () {
	      c < o && l();
	    }, a + 1), e.addEventListener(s, u);
	  }function Kt(e, t) {
	    var n,
	        r = window.getComputedStyle(e),
	        i = r[Ba + "Delay"].split(", "),
	        a = r[Ba + "Duration"].split(", "),
	        o = qt(i, a),
	        s = r[Va + "Delay"].split(", "),
	        c = r[Va + "Duration"].split(", "),
	        l = qt(s, c),
	        u = 0,
	        f = 0;t === Ha ? o > 0 && (n = Ha, u = o, f = a.length) : t === Ua ? l > 0 && (n = Ua, u = l, f = c.length) : (u = Math.max(o, l), n = u > 0 ? o > l ? Ha : Ua : null, f = n ? n === Ha ? a.length : c.length : 0);var d = n === Ha && qa.test(r[Ba + "Property"]);return { type: n, timeout: u, propCount: f, hasTransform: d };
	  }function qt(e, t) {
	    for (; e.length < t.length;) {
	      e = e.concat(e);
	    }return Math.max.apply(null, t.map(function (t, n) {
	      return Wt(t) + Wt(e[n]);
	    }));
	  }function Wt(e) {
	    return 1e3 * Number(e.slice(0, -1));
	  }function Zt(e, t) {
	    var n = e.elm;n._leaveCb && (n._leaveCb.cancelled = !0, n._leaveCb());var r = Yt(e.data.transition);if (r && !n._enterCb && 1 === n.nodeType) {
	      for (var i = r.css, a = r.type, o = r.enterClass, s = r.enterToClass, c = r.enterActiveClass, l = r.appearClass, u = r.appearToClass, f = r.appearActiveClass, d = r.beforeEnter, p = r.enter, v = r.afterEnter, h = r.enterCancelled, m = r.beforeAppear, g = r.appear, y = r.afterAppear, _ = r.appearCancelled, b = Gi, $ = Gi.$vnode; $ && $.parent;) {
	        $ = $.parent, b = $.context;
	      }var w = !b._isMounted || !e.isRootInsert;if (!w || g || "" === g) {
	        var C = w ? l : o,
	            x = w ? f : c,
	            k = w ? u : s,
	            A = w ? m || d : d,
	            O = w && "function" == typeof g ? g : p,
	            S = w ? y || v : v,
	            T = w ? _ || h : h,
	            E = i !== !1 && !yi,
	            j = O && (O._length || O.length) > 1,
	            N = n._enterCb = Qt(function () {
	          E && (Vt(n, k), Vt(n, x)), N.cancelled ? (E && Vt(n, C), T && T(n)) : S && S(n), n._enterCb = null;
	        });e.data.show || ae(e.data.hook || (e.data.hook = {}), "insert", function () {
	          var t = n.parentNode,
	              r = t && t._pending && t._pending[e.key];r && r.context === e.context && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), O && O(n, N);
	        }, "transition-insert"), A && A(n), E && (zt(n, C), zt(n, x), Bt(function () {
	          zt(n, k), Vt(n, C), N.cancelled || j || Jt(n, a, N);
	        })), e.data.show && (t && t(), O && O(n, N)), E || j || N();
	      }
	    }
	  }function Gt(e, t) {
	    function n() {
	      g.cancelled || (e.data.show || ((r.parentNode._pending || (r.parentNode._pending = {}))[e.key] = e), u && u(r), h && (zt(r, s), zt(r, l), Bt(function () {
	        zt(r, c), Vt(r, s), g.cancelled || m || Jt(r, o, g);
	      })), f && f(r, g), h || m || g());
	    }var r = e.elm;r._enterCb && (r._enterCb.cancelled = !0, r._enterCb());var i = Yt(e.data.transition);if (!i) return t();if (!r._leaveCb && 1 === r.nodeType) {
	      var a = i.css,
	          o = i.type,
	          s = i.leaveClass,
	          c = i.leaveToClass,
	          l = i.leaveActiveClass,
	          u = i.beforeLeave,
	          f = i.leave,
	          d = i.afterLeave,
	          p = i.leaveCancelled,
	          v = i.delayLeave,
	          h = a !== !1 && !yi,
	          m = f && (f._length || f.length) > 1,
	          g = r._leaveCb = Qt(function () {
	        r.parentNode && r.parentNode._pending && (r.parentNode._pending[e.key] = null), h && (Vt(r, c), Vt(r, l)), g.cancelled ? (h && Vt(r, s), p && p(r)) : (t(), d && d(r)), r._leaveCb = null;
	      });v ? v(n) : n();
	    }
	  }function Yt(e) {
	    if (e) {
	      if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
	        var t = {};return e.css !== !1 && l(t, Wa(e.name || "v")), l(t, e), t;
	      }return "string" == typeof e ? Wa(e) : void 0;
	    }
	  }function Qt(e) {
	    var t = !1;return function () {
	      t || (t = !0, e());
	    };
	  }function Xt(e, t) {
	    t.data.show || Zt(t);
	  }function en(e, t, n) {
	    var r = t.value,
	        i = e.multiple;if (!i || Array.isArray(r)) {
	      for (var a, o, s = 0, c = e.options.length; s < c; s++) {
	        if (o = e.options[s], i) a = m(r, nn(o)) > -1, o.selected !== a && (o.selected = a);else if (h(nn(o), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
	      }i || (e.selectedIndex = -1);
	    }
	  }function tn(e, t) {
	    for (var n = 0, r = t.length; n < r; n++) {
	      if (h(nn(t[n]), e)) return !1;
	    }return !0;
	  }function nn(e) {
	    return "_value" in e ? e._value : e.value;
	  }function rn(e) {
	    e.target.composing = !0;
	  }function an(e) {
	    e.target.composing = !1, on(e.target, "input");
	  }function on(e, t) {
	    var n = document.createEvent("HTMLEvents");n.initEvent(t, !0, !0), e.dispatchEvent(n);
	  }function sn(e) {
	    return !e.child || e.data && e.data.transition ? e : sn(e.child._vnode);
	  }function cn(e) {
	    var t = e && e.componentOptions;return t && t.Ctor.options.abstract ? cn(de(t.children)) : e;
	  }function ln(e) {
	    var t = {},
	        n = e.$options;for (var r in n.propsData) {
	      t[r] = e[r];
	    }var i = n._parentListeners;for (var a in i) {
	      t[ii(a)] = i[a].fn;
	    }return t;
	  }function un(e, t) {
	    return (/\d-keep-alive$/.test(t.tag) ? e("keep-alive") : null
	    );
	  }function fn(e) {
	    for (; e = e.parent;) {
	      if (e.data.transition) return !0;
	    }
	  }function dn(e, t) {
	    return t.key === e.key && t.tag === e.tag;
	  }function pn(e) {
	    e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
	  }function vn(e) {
	    e.data.newPos = e.elm.getBoundingClientRect();
	  }function hn(e) {
	    var t = e.data.pos,
	        n = e.data.newPos,
	        r = t.left - n.left,
	        i = t.top - n.top;if (r || i) {
	      e.data.moved = !0;var a = e.elm.style;a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)", a.transitionDuration = "0s";
	    }
	  }function mn(e, t) {
	    var n = document.createElement("div");return n.innerHTML = '<div a="' + e + '">', n.innerHTML.indexOf(t) > 0;
	  }function gn(e) {
	    return so = so || document.createElement("div"), so.innerHTML = e, so.textContent;
	  }function yn(e, t) {
	    return t && (e = e.replace(rs, "\n")), e.replace(ts, "<").replace(ns, ">").replace(is, "&").replace(as, '"');
	  }function _n(e, t) {
	    function n(t) {
	      f += t, e = e.substring(t);
	    }function r() {
	      var t = e.match(_o);if (t) {
	        var r = { tagName: t[1], attrs: [], start: f };n(t[0].length);for (var i, a; !(i = e.match(bo)) && (a = e.match(mo));) {
	          n(a[0].length), r.attrs.push(a);
	        }if (i) return r.unarySlash = i[1], n(i[0].length), r.end = f, r;
	      }
	    }function i(e) {
	      var n = e.tagName,
	          r = e.unarySlash;l && ("p" === s && fo(n) && a("", s), uo(n) && s === n && a("", n));for (var i = u(n) || "html" === n && "head" === s || !!r, o = e.attrs.length, f = new Array(o), d = 0; d < o; d++) {
	        var p = e.attrs[d];ko && p[0].indexOf('""') === -1 && ("" === p[3] && delete p[3], "" === p[4] && delete p[4], "" === p[5] && delete p[5]);var v = p[3] || p[4] || p[5] || "";f[d] = { name: p[1], value: yn(v, t.shouldDecodeNewlines) };
	      }i || (c.push({ tag: n, attrs: f }), s = n, r = ""), t.start && t.start(n, f, i, e.start, e.end);
	    }function a(e, n, r, i) {
	      var a;if (null == r && (r = f), null == i && (i = f), n) {
	        var o = n.toLowerCase();for (a = c.length - 1; a >= 0 && c[a].tag.toLowerCase() !== o; a--) {}
	      } else a = 0;if (a >= 0) {
	        for (var l = c.length - 1; l >= a; l--) {
	          t.end && t.end(c[l].tag, r, i);
	        }c.length = a, s = a && c[a - 1].tag;
	      } else "br" === n.toLowerCase() ? t.start && t.start(n, [], !0, r, i) : "p" === n.toLowerCase() && (t.start && t.start(n, [], !1, r, i), t.end && t.end(n, r, i));
	    }for (var o, s, c = [], l = t.expectHTML, u = t.isUnaryTag || ui, f = 0; e;) {
	      if (o = e, s && Xo(s, t.sfc, c)) {
	        var d = s.toLowerCase(),
	            p = es[d] || (es[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
	            v = 0,
	            h = e.replace(p, function (e, n, r) {
	          return v = r.length, "script" !== d && "style" !== d && "noscript" !== d && (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), t.chars && t.chars(n), "";
	        });f += e.length - h.length, e = h, a("</" + d + ">", d, f - v, f);
	      } else {
	        var m = e.indexOf("<");if (0 === m) {
	          if (Co.test(e)) {
	            var g = e.indexOf("-->");if (g >= 0) {
	              n(g + 3);continue;
	            }
	          }if (xo.test(e)) {
	            var y = e.indexOf("]>");if (y >= 0) {
	              n(y + 2);continue;
	            }
	          }var _ = e.match(wo);if (_) {
	            n(_[0].length);continue;
	          }var b = e.match($o);if (b) {
	            var $ = f;n(b[0].length), a(b[0], b[1], $, f);continue;
	          }var w = r();if (w) {
	            i(w);continue;
	          }
	        }var C = void 0,
	            x = void 0,
	            k = void 0;if (m > 0) {
	          for (x = e.slice(m); !($o.test(x) || _o.test(x) || Co.test(x) || xo.test(x) || (k = x.indexOf("<", 1), k < 0));) {
	            m += k, x = e.slice(m);
	          }C = e.substring(0, m), n(m);
	        }m < 0 && (C = e, e = ""), t.chars && C && t.chars(C);
	      }if (e === o && t.chars) {
	        t.chars(e);break;
	      }
	    }a();
	  }function bn(e) {
	    function t() {
	      (o || (o = [])).push(e.slice(v, i).trim()), v = i + 1;
	    }var n,
	        r,
	        i,
	        a,
	        o,
	        s = !1,
	        c = !1,
	        l = !1,
	        u = !1,
	        f = 0,
	        d = 0,
	        p = 0,
	        v = 0;for (i = 0; i < e.length; i++) {
	      if (r = n, n = e.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);else if (c) 34 === n && 92 !== r && (c = !1);else if (l) 96 === n && 92 !== r && (l = !1);else if (u) 47 === n && 92 !== r && (u = !1);else if (124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || f || d || p) {
	        switch (n) {case 34:
	            c = !0;break;case 39:
	            s = !0;break;case 96:
	            l = !0;break;case 40:
	            p++;break;case 41:
	            p--;break;case 91:
	            d++;break;case 93:
	            d--;break;case 123:
	            f++;break;case 125:
	            f--;}if (47 === n) {
	          for (var h = i - 1, m = void 0; h >= 0 && (m = e.charAt(h), " " === m); h--) {}m && /[\w$]/.test(m) || (u = !0);
	        }
	      } else void 0 === a ? (v = i + 1, a = e.slice(0, i).trim()) : t();
	    }if (void 0 === a ? a = e.slice(0, i).trim() : 0 !== v && t(), o) for (i = 0; i < o.length; i++) {
	      a = $n(a, o[i]);
	    }return a;
	  }function $n(e, t) {
	    var n = t.indexOf("(");if (n < 0) return '_f("' + t + '")(' + e + ")";var r = t.slice(0, n),
	        i = t.slice(n + 1);return '_f("' + r + '")(' + e + "," + i;
	  }function wn(e, t) {
	    var n = t ? cs(t) : os;if (n.test(e)) {
	      for (var r, i, a = [], o = n.lastIndex = 0; r = n.exec(e);) {
	        i = r.index, i > o && a.push(JSON.stringify(e.slice(o, i)));var s = bn(r[1].trim());a.push("_s(" + s + ")"), o = i + r[0].length;
	      }return o < e.length && a.push(JSON.stringify(e.slice(o))), a.join("+");
	    }
	  }function Cn(e) {
	    console.error("[Vue parser]: " + e);
	  }function xn(e, t) {
	    return e ? e.map(function (e) {
	      return e[t];
	    }).filter(function (e) {
	      return e;
	    }) : [];
	  }function kn(e, t, n) {
	    (e.props || (e.props = [])).push({ name: t, value: n });
	  }function An(e, t, n) {
	    (e.attrs || (e.attrs = [])).push({ name: t, value: n });
	  }function On(e, t, n, r, i, a) {
	    (e.directives || (e.directives = [])).push({ name: t, rawName: n, value: r, arg: i, modifiers: a });
	  }function Sn(e, t, n, r, i) {
	    r && r.capture && (delete r.capture, t = "!" + t), r && r.once && (delete r.once, t = "~" + t);var a;r && r.native ? (delete r.native, a = e.nativeEvents || (e.nativeEvents = {})) : a = e.events || (e.events = {});var o = { value: n, modifiers: r },
	        s = a[t];Array.isArray(s) ? i ? s.unshift(o) : s.push(o) : s ? a[t] = i ? [o, s] : [s, o] : a[t] = o;
	  }function Tn(e, t, n) {
	    var r = En(e, ":" + t) || En(e, "v-bind:" + t);if (null != r) return bn(r);if (n !== !1) {
	      var i = En(e, t);if (null != i) return JSON.stringify(i);
	    }
	  }function En(e, t) {
	    var n;if (null != (n = e.attrsMap[t])) for (var r = e.attrsList, i = 0, a = r.length; i < a; i++) {
	      if (r[i].name === t) {
	        r.splice(i, 1);break;
	      }
	    }return n;
	  }function jn(e) {
	    if (Oo = e, Ao = Oo.length, To = Eo = jo = 0, e.indexOf("[") < 0 || e.lastIndexOf("]") < Ao - 1) return { exp: e, idx: null };for (; !Ln();) {
	      So = Nn(), Dn(So) ? Pn(So) : 91 === So && Mn(So);
	    }return { exp: e.substring(0, Eo), idx: e.substring(Eo + 1, jo) };
	  }function Nn() {
	    return Oo.charCodeAt(++To);
	  }function Ln() {
	    return To >= Ao;
	  }function Dn(e) {
	    return 34 === e || 39 === e;
	  }function Mn(e) {
	    var t = 1;for (Eo = To; !Ln();) {
	      if (e = Nn(), Dn(e)) Pn(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
	        jo = To;break;
	      }
	    }
	  }function Pn(e) {
	    for (var t = e; !Ln() && (e = Nn(), e !== t);) {}
	  }function Rn(e, t) {
	    No = t.warn || Cn, Lo = t.getTagNamespace || ui, Do = t.mustUseProp || ui, Mo = t.isPreTag || ui, Po = xn(t.modules, "preTransformNode"), Ro = xn(t.modules, "transformNode"), Io = xn(t.modules, "postTransformNode"), Fo = t.delimiters;var n,
	        r,
	        i = [],
	        a = t.preserveWhitespace !== !1,
	        o = !1,
	        s = !1;return _n(e, { expectHTML: t.expectHTML, isUnaryTag: t.isUnaryTag, shouldDecodeNewlines: t.shouldDecodeNewlines, start: function start(e, a, c) {
	        function l(e) {}var u = r && r.ns || Lo(e);gi && "svg" === u && (a = tr(a));var f = { type: 1, tag: e, attrsList: a, attrsMap: Xn(a), parent: r, children: [] };u && (f.ns = u), er(f) && !wi() && (f.forbidden = !0);for (var d = 0; d < Po.length; d++) {
	          Po[d](f, t);
	        }if (o || (In(f), f.pre && (o = !0)), Mo(f.tag) && (s = !0), o) Fn(f);else {
	          Bn(f), zn(f), qn(f), Hn(f), f.plain = !f.key && !a.length, Un(f), Wn(f), Zn(f);for (var p = 0; p < Ro.length; p++) {
	            Ro[p](f, t);
	          }Gn(f);
	        }if (n ? i.length || n.if && (f.elseif || f.else) && (l(f), Kn(n, { exp: f.elseif, block: f })) : (n = f, l(n)), r && !f.forbidden) if (f.elseif || f.else) Vn(f, r);else if (f.slotScope) {
	          r.plain = !1;var v = f.slotTarget || "default";(r.scopedSlots || (r.scopedSlots = {}))[v] = f;
	        } else r.children.push(f), f.parent = r;c || (r = f, i.push(f));for (var h = 0; h < Io.length; h++) {
	          Io[h](f, t);
	        }
	      }, end: function end() {
	        var e = i[i.length - 1],
	            t = e.children[e.children.length - 1];t && 3 === t.type && " " === t.text && e.children.pop(), i.length -= 1, r = i[i.length - 1], e.pre && (o = !1), Mo(e.tag) && (s = !1);
	      }, chars: function chars(e) {
	        if (r && (!gi || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
	          var t = r.children;if (e = s || e.trim() ? ms(e) : a && t.length ? " " : "") {
	            var n;!o && " " !== e && (n = wn(e, Fo)) ? t.push({ type: 2, expression: n, text: e }) : " " === e && " " === t[t.length - 1].text || r.children.push({ type: 3, text: e });
	          }
	        }
	      } }), n;
	  }function In(e) {
	    null != En(e, "v-pre") && (e.pre = !0);
	  }function Fn(e) {
	    var t = e.attrsList.length;if (t) for (var n = e.attrs = new Array(t), r = 0; r < t; r++) {
	      n[r] = { name: e.attrsList[r].name, value: JSON.stringify(e.attrsList[r].value) };
	    } else e.pre || (e.plain = !0);
	  }function Hn(e) {
	    var t = Tn(e, "key");t && (e.key = t);
	  }function Un(e) {
	    var t = Tn(e, "ref");t && (e.ref = t, e.refInFor = Yn(e));
	  }function Bn(e) {
	    var t;if (t = En(e, "v-for")) {
	      var n = t.match(us);if (!n) return;e.for = n[2].trim();var r = n[1].trim(),
	          i = r.match(fs);i ? (e.alias = i[1].trim(), e.iterator1 = i[2].trim(), i[3] && (e.iterator2 = i[3].trim())) : e.alias = r;
	    }
	  }function zn(e) {
	    var t = En(e, "v-if");if (t) e.if = t, Kn(e, { exp: t, block: e });else {
	      null != En(e, "v-else") && (e.else = !0);var n = En(e, "v-else-if");n && (e.elseif = n);
	    }
	  }function Vn(e, t) {
	    var n = Jn(t.children);n && n.if && Kn(n, { exp: e.elseif, block: e });
	  }function Jn(e) {
	    for (var t = e.length; t--;) {
	      if (1 === e[t].type) return e[t];e.pop();
	    }
	  }function Kn(e, t) {
	    e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
	  }function qn(e) {
	    var t = En(e, "v-once");null != t && (e.once = !0);
	  }function Wn(e) {
	    if ("slot" === e.tag) e.slotName = Tn(e, "name");else {
	      var t = Tn(e, "slot");t && (e.slotTarget = '""' === t ? '"default"' : t), "template" === e.tag && (e.slotScope = En(e, "scope"));
	    }
	  }function Zn(e) {
	    var t;(t = Tn(e, "is")) && (e.component = t), null != En(e, "inline-template") && (e.inlineTemplate = !0);
	  }function Gn(e) {
	    var t,
	        n,
	        r,
	        i,
	        a,
	        o,
	        s,
	        c,
	        l = e.attrsList;for (t = 0, n = l.length; t < n; t++) {
	      if (r = i = l[t].name, a = l[t].value, ls.test(r)) {
	        if (e.hasBindings = !0, s = Qn(r), s && (r = r.replace(hs, "")), ds.test(r)) r = r.replace(ds, ""), a = bn(a), c = !1, s && (s.prop && (c = !0, r = ii(r), "innerHtml" === r && (r = "innerHTML")), s.camel && (r = ii(r))), c || Do(e.tag, r) ? kn(e, r, a) : An(e, r, a);else if (ps.test(r)) r = r.replace(ps, ""), Sn(e, r, a, s);else {
	          r = r.replace(ls, "");var u = r.match(vs);u && (o = u[1]) && (r = r.slice(0, -(o.length + 1))), On(e, r, i, a, o, s);
	        }
	      } else An(e, r, JSON.stringify(a)), Do(e.tag, r) && ("value" === r ? kn(e, r, JSON.stringify(a)) : kn(e, r, "true"));
	    }
	  }function Yn(e) {
	    for (var t = e; t;) {
	      if (void 0 !== t.for) return !0;t = t.parent;
	    }return !1;
	  }function Qn(e) {
	    var t = e.match(hs);if (t) {
	      var n = {};return t.forEach(function (e) {
	        n[e.slice(1)] = !0;
	      }), n;
	    }
	  }function Xn(e) {
	    for (var t = {}, n = 0, r = e.length; n < r; n++) {
	      t[e[n].name] = e[n].value;
	    }return t;
	  }function er(e) {
	    return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type);
	  }function tr(e) {
	    for (var t = [], n = 0; n < e.length; n++) {
	      var r = e[n];gs.test(r.name) || (r.name = r.name.replace(ys, ""), t.push(r));
	    }return t;
	  }function nr(e, t) {
	    e && (Ho = _s(t.staticKeys || ""), Uo = t.isReservedTag || ui, ir(e), ar(e, !1));
	  }function rr(e) {
	    return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""));
	  }function ir(e) {
	    if (e.static = sr(e), 1 === e.type) {
	      if (!Uo(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;for (var t = 0, n = e.children.length; t < n; t++) {
	        var r = e.children[t];ir(r), r.static || (e.static = !1);
	      }
	    }
	  }function ar(e, t) {
	    if (1 === e.type) {
	      if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);if (e.staticRoot = !1, e.children) for (var n = 0, r = e.children.length; n < r; n++) {
	        ar(e.children[n], t || !!e.for);
	      }e.ifConditions && or(e.ifConditions, t);
	    }
	  }function or(e, t) {
	    for (var n = 1, r = e.length; n < r; n++) {
	      ar(e[n].block, t);
	    }
	  }function sr(e) {
	    return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || ti(e.tag) || !Uo(e.tag) || cr(e) || !Object.keys(e).every(Ho))));
	  }function cr(e) {
	    for (; e.parent;) {
	      if (e = e.parent, "template" !== e.tag) return !1;if (e.for) return !0;
	    }return !1;
	  }function lr(e, t) {
	    var n = t ? "nativeOn:{" : "on:{";for (var r in e) {
	      n += '"' + r + '":' + ur(r, e[r]) + ",";
	    }return n.slice(0, -1) + "}";
	  }function ur(e, t) {
	    if (t) {
	      if (Array.isArray(t)) return "[" + t.map(function (t) {
	        return ur(e, t);
	      }).join(",") + "]";if (t.modifiers) {
	        var n = "",
	            r = [];for (var i in t.modifiers) {
	          Cs[i] ? n += Cs[i] : r.push(i);
	        }r.length && (n = fr(r) + n);var a = $s.test(t.value) ? t.value + "($event)" : t.value;return "function($event){" + n + a + "}";
	      }return bs.test(t.value) || $s.test(t.value) ? t.value : "function($event){" + t.value + "}";
	    }return "function(){}";
	  }function fr(e) {
	    return "if(" + e.map(dr).join("&&") + ")return;";
	  }function dr(e) {
	    var t = parseInt(e, 10);if (t) return "$event.keyCode!==" + t;var n = ws[e];return "_k($event.keyCode," + JSON.stringify(e) + (n ? "," + JSON.stringify(n) : "") + ")";
	  }function pr(e, t) {
	    e.wrapData = function (n) {
	      return "_b(" + n + ",'" + e.tag + "'," + t.value + (t.modifiers && t.modifiers.prop ? ",true" : "") + ")";
	    };
	  }function vr(e, t) {
	    var n = qo,
	        r = qo = [],
	        i = Wo;Wo = 0, Zo = t, Bo = t.warn || Cn, zo = xn(t.modules, "transformCode"), Vo = xn(t.modules, "genData"), Jo = t.directives || {}, Ko = t.isReservedTag || ui;var a = e ? hr(e) : '_c("div")';return qo = n, Wo = i, { render: "with(this){return " + a + "}", staticRenderFns: r };
	  }function hr(e) {
	    if (e.staticRoot && !e.staticProcessed) return mr(e);if (e.once && !e.onceProcessed) return gr(e);if (e.for && !e.forProcessed) return br(e);if (e.if && !e.ifProcessed) return yr(e);if ("template" !== e.tag || e.slotTarget) {
	      if ("slot" === e.tag) return Nr(e);var t;if (e.component) t = Lr(e.component, e);else {
	        var n = e.plain ? void 0 : $r(e),
	            r = e.inlineTemplate ? null : Ar(e, !0);t = "_c('" + e.tag + "'" + (n ? "," + n : "") + (r ? "," + r : "") + ")";
	      }for (var i = 0; i < zo.length; i++) {
	        t = zo[i](e, t);
	      }return t;
	    }return Ar(e) || "void 0";
	  }function mr(e) {
	    return e.staticProcessed = !0, qo.push("with(this){return " + hr(e) + "}"), "_m(" + (qo.length - 1) + (e.staticInFor ? ",true" : "") + ")";
	  }function gr(e) {
	    if (e.onceProcessed = !0, e.if && !e.ifProcessed) return yr(e);if (e.staticInFor) {
	      for (var t = "", n = e.parent; n;) {
	        if (n.for) {
	          t = n.key;break;
	        }n = n.parent;
	      }return t ? "_o(" + hr(e) + "," + Wo++ + (t ? "," + t : "") + ")" : hr(e);
	    }return mr(e);
	  }function yr(e) {
	    return e.ifProcessed = !0, _r(e.ifConditions.slice());
	  }function _r(e) {
	    function t(e) {
	      return e.once ? gr(e) : hr(e);
	    }if (!e.length) return "_e()";var n = e.shift();return n.exp ? "(" + n.exp + ")?" + t(n.block) + ":" + _r(e) : "" + t(n.block);
	  }function br(e) {
	    var t = e.for,
	        n = e.alias,
	        r = e.iterator1 ? "," + e.iterator1 : "",
	        i = e.iterator2 ? "," + e.iterator2 : "";return e.forProcessed = !0, "_l((" + t + "),function(" + n + r + i + "){return " + hr(e) + "})";
	  }function $r(e) {
	    var t = "{",
	        n = wr(e);n && (t += n + ","), e.key && (t += "key:" + e.key + ","), e.ref && (t += "ref:" + e.ref + ","), e.refInFor && (t += "refInFor:true,"), e.pre && (t += "pre:true,"), e.component && (t += 'tag:"' + e.tag + '",');for (var r = 0; r < Vo.length; r++) {
	      t += Vo[r](e);
	    }if (e.attrs && (t += "attrs:{" + Dr(e.attrs) + "},"), e.props && (t += "domProps:{" + Dr(e.props) + "},"), e.events && (t += lr(e.events) + ","), e.nativeEvents && (t += lr(e.nativeEvents, !0) + ","), e.slotTarget && (t += "slot:" + e.slotTarget + ","), e.scopedSlots && (t += xr(e.scopedSlots) + ","), e.inlineTemplate) {
	      var i = Cr(e);i && (t += i + ",");
	    }return t = t.replace(/,$/, "") + "}", e.wrapData && (t = e.wrapData(t)), t;
	  }function wr(e) {
	    var t = e.directives;if (t) {
	      var n,
	          r,
	          i,
	          a,
	          o = "directives:[",
	          s = !1;for (n = 0, r = t.length; n < r; n++) {
	        i = t[n], a = !0;var c = Jo[i.name] || xs[i.name];c && (a = !!c(e, i, Bo)), a && (s = !0, o += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},");
	      }return s ? o.slice(0, -1) + "]" : void 0;
	    }
	  }function Cr(e) {
	    var t = e.children[0];if (1 === t.type) {
	      var n = vr(t, Zo);return "inlineTemplate:{render:function(){" + n.render + "},staticRenderFns:[" + n.staticRenderFns.map(function (e) {
	        return "function(){" + e + "}";
	      }).join(",") + "]}";
	    }
	  }function xr(e) {
	    return "scopedSlots:{" + Object.keys(e).map(function (t) {
	      return kr(t, e[t]);
	    }).join(",") + "}";
	  }function kr(e, t) {
	    return e + ":function(" + String(t.attrsMap.scope) + "){return " + ("template" === t.tag ? Ar(t) || "void 0" : hr(t)) + "}";
	  }function Ar(e, t) {
	    var n = e.children;if (n.length) {
	      var r = n[0];if (1 === n.length && r.for && "template" !== r.tag && "slot" !== r.tag) return hr(r);var i = Or(n);return "[" + n.map(Er).join(",") + "]" + (t && i ? "," + i : "");
	    }
	  }function Or(e) {
	    for (var t = 0, n = 0; n < e.length; n++) {
	      var r = e[n];if (Sr(r) || r.if && r.ifConditions.some(function (e) {
	        return Sr(e.block);
	      })) {
	        t = 2;break;
	      }(Tr(r) || r.if && r.ifConditions.some(function (e) {
	        return Tr(e.block);
	      })) && (t = 1);
	    }return t;
	  }function Sr(e) {
	    return e.for || "template" === e.tag || "slot" === e.tag;
	  }function Tr(e) {
	    return 1 === e.type && !Ko(e.tag);
	  }function Er(e) {
	    return 1 === e.type ? hr(e) : jr(e);
	  }function jr(e) {
	    return "_v(" + (2 === e.type ? e.expression : Mr(JSON.stringify(e.text))) + ")";
	  }function Nr(e) {
	    var t = e.slotName || '"default"',
	        n = Ar(e),
	        r = "_t(" + t + (n ? "," + n : ""),
	        i = e.attrs && "{" + e.attrs.map(function (e) {
	      return ii(e.name) + ":" + e.value;
	    }).join(",") + "}",
	        a = e.attrsMap["v-bind"];return !i && !a || n || (r += ",null"), i && (r += "," + i), a && (r += (i ? "" : ",null") + "," + a), r + ")";
	  }function Lr(e, t) {
	    var n = t.inlineTemplate ? null : Ar(t, !0);return "_c(" + e + "," + $r(t) + (n ? "," + n : "") + ")";
	  }function Dr(e) {
	    for (var t = "", n = 0; n < e.length; n++) {
	      var r = e[n];t += '"' + r.name + '":' + Mr(r.value) + ",";
	    }return t.slice(0, -1);
	  }function Mr(e) {
	    return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
	  }function Pr(e, t) {
	    var n = Rn(e.trim(), t);nr(n, t);var r = vr(n, t);return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns };
	  }function Rr(e, t) {
	    var n = (t.warn || Cn, En(e, "class"));n && (e.staticClass = JSON.stringify(n));var r = Tn(e, "class", !1);r && (e.classBinding = r);
	  }function Ir(e) {
	    var t = "";return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
	  }function Fr(e, t) {
	    var n = (t.warn || Cn, En(e, "style"));n && (e.staticStyle = JSON.stringify(Na(n)));var r = Tn(e, "style", !1);r && (e.styleBinding = r);
	  }function Hr(e) {
	    var t = "";return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
	  }function Ur(e, t, n) {
	    Go = n;var r = t.value,
	        i = t.modifiers,
	        a = e.tag,
	        o = e.attrsMap.type;return "select" === a ? Jr(e, r, i) : "input" === a && "checkbox" === o ? Br(e, r, i) : "input" === a && "radio" === o ? zr(e, r, i) : Vr(e, r, i), !0;
	  }function Br(e, t, n) {
	    var r = n && n.number,
	        i = Tn(e, "value") || "null",
	        a = Tn(e, "true-value") || "true",
	        o = Tn(e, "false-value") || "false";kn(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === a ? ":(" + t + ")" : ":_q(" + t + "," + a + ")")), Sn(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + a + "):(" + o + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + t + "=$$a.concat($$v))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + t + "=$$c}", null, !0);
	  }function zr(e, t, n) {
	    var r = n && n.number,
	        i = Tn(e, "value") || "null";i = r ? "_n(" + i + ")" : i, kn(e, "checked", "_q(" + t + "," + i + ")"), Sn(e, "change", Kr(t, i), null, !0);
	  }function Vr(e, t, n) {
	    var r = e.attrsMap.type,
	        i = n || {},
	        a = i.lazy,
	        o = i.number,
	        s = i.trim,
	        c = a || gi && "range" === r ? "change" : "input",
	        l = !a && "range" !== r,
	        u = "input" === e.tag || "textarea" === e.tag,
	        f = u ? "$event.target.value" + (s ? ".trim()" : "") : s ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";f = o || "number" === r ? "_n(" + f + ")" : f;var d = Kr(t, f);u && l && (d = "if($event.target.composing)return;" + d), kn(e, "value", u ? "_s(" + t + ")" : "(" + t + ")"), Sn(e, c, d, null, !0), (s || o || "number" === r) && Sn(e, "blur", "$forceUpdate()");
	  }function Jr(e, t, n) {
	    var r = n && n.number,
	        i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})" + (null == e.attrsMap.multiple ? "[0]" : ""),
	        a = Kr(t, i);Sn(e, "change", a, null, !0);
	  }function Kr(e, t) {
	    var n = jn(e);return null === n.idx ? e + "=" + t : "var $$exp = " + n.exp + ", $$idx = " + n.idx + ";if (!Array.isArray($$exp)){" + e + "=" + t + "}else{$$exp.splice($$idx, 1, " + t + ")}";
	  }function qr(e, t) {
	    t.value && kn(e, "textContent", "_s(" + t.value + ")");
	  }function Wr(e, t) {
	    t.value && kn(e, "innerHTML", "_s(" + t.value + ")");
	  }function Zr(e, t) {
	    return t = t ? l(l({}, Es), t) : Es, Pr(e, t);
	  }function Gr(e, t, n) {
	    var r = (t && t.warn || Ai, t && t.delimiters ? String(t.delimiters) + e : e);if (Ts[r]) return Ts[r];var i = {},
	        a = Zr(e, t);i.render = Yr(a.render);var o = a.staticRenderFns.length;i.staticRenderFns = new Array(o);for (var s = 0; s < o; s++) {
	      i.staticRenderFns[s] = Yr(a.staticRenderFns[s]);
	    }return Ts[r] = i;
	  }function Yr(e) {
	    try {
	      return new Function(e);
	    } catch (e) {
	      return p;
	    }
	  }function Qr(e) {
	    if (e.outerHTML) return e.outerHTML;var t = document.createElement("div");return t.appendChild(e.cloneNode(!0)), t.innerHTML;
	  }var Xr,
	      ei,
	      ti = n("slot,component", !0),
	      ni = Object.prototype.hasOwnProperty,
	      ri = /-(\w)/g,
	      ii = o(function (e) {
	    return e.replace(ri, function (e, t) {
	      return t ? t.toUpperCase() : "";
	    });
	  }),
	      ai = o(function (e) {
	    return e.charAt(0).toUpperCase() + e.slice(1);
	  }),
	      oi = /([^-])([A-Z])/g,
	      si = o(function (e) {
	    return e.replace(oi, "$1-$2").replace(oi, "$1-$2").toLowerCase();
	  }),
	      ci = Object.prototype.toString,
	      li = "[object Object]",
	      ui = function ui() {
	    return !1;
	  },
	      fi = function fi(e) {
	    return e;
	  },
	      di = { optionMergeStrategies: Object.create(null), silent: !1, devtools: !1, errorHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: ui, isUnknownElement: ui, getTagNamespace: p, parsePlatformTagName: fi, mustUseProp: ui, _assetTypes: ["component", "directive", "filter"], _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"], _maxUpdateCount: 100 },
	      pi = /[^\w.$]/,
	      vi = "__proto__" in {},
	      hi = "undefined" != typeof window,
	      mi = hi && window.navigator.userAgent.toLowerCase(),
	      gi = mi && /msie|trident/.test(mi),
	      yi = mi && mi.indexOf("msie 9.0") > 0,
	      _i = mi && mi.indexOf("edge/") > 0,
	      bi = mi && mi.indexOf("android") > 0,
	      $i = mi && /iphone|ipad|ipod|ios/.test(mi),
	      wi = function wi() {
	    return void 0 === Xr && (Xr = !hi && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), Xr;
	  },
	      Ci = hi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
	      xi = function () {
	    function e() {
	      r = !1;var e = n.slice(0);n.length = 0;for (var t = 0; t < e.length; t++) {
	        e[t]();
	      }
	    }var t,
	        n = [],
	        r = !1;if ("undefined" != typeof Promise && b(Promise)) {
	      var i = Promise.resolve(),
	          a = function a(e) {
	        console.error(e);
	      };t = function t() {
	        i.then(e).catch(a), $i && setTimeout(p);
	      };
	    } else if ("undefined" == typeof MutationObserver || !b(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) t = function t() {
	      setTimeout(e, 0);
	    };else {
	      var o = 1,
	          s = new MutationObserver(e),
	          c = document.createTextNode(String(o));s.observe(c, { characterData: !0 }), t = function t() {
	        o = (o + 1) % 2, c.data = String(o);
	      };
	    }return function (e, i) {
	      var a;if (n.push(function () {
	        e && e.call(i), a && a(i);
	      }), r || (r = !0, t()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
	        a = e;
	      });
	    };
	  }();ei = "undefined" != typeof Set && b(Set) ? Set : function () {
	    function e() {
	      this.set = Object.create(null);
	    }return e.prototype.has = function (e) {
	      return this.set[e] === !0;
	    }, e.prototype.add = function (e) {
	      this.set[e] = !0;
	    }, e.prototype.clear = function () {
	      this.set = Object.create(null);
	    }, e;
	  }();var ki,
	      Ai = p,
	      Oi = 0,
	      Si = function Si() {
	    this.id = Oi++, this.subs = [];
	  };Si.prototype.addSub = function (e) {
	    this.subs.push(e);
	  }, Si.prototype.removeSub = function (e) {
	    r(this.subs, e);
	  }, Si.prototype.depend = function () {
	    Si.target && Si.target.addDep(this);
	  }, Si.prototype.notify = function () {
	    for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
	      e[t].update();
	    }
	  }, Si.target = null;var Ti = [],
	      Ei = Array.prototype,
	      ji = Object.create(Ei);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
	    var t = Ei[e];y(ji, e, function () {
	      for (var n = arguments, r = arguments.length, i = new Array(r); r--;) {
	        i[r] = n[r];
	      }var a,
	          o = t.apply(this, i),
	          s = this.__ob__;switch (e) {case "push":
	          a = i;break;case "unshift":
	          a = i;break;case "splice":
	          a = i.slice(2);}return a && s.observeArray(a), s.dep.notify(), o;
	    });
	  });var Ni = Object.getOwnPropertyNames(ji),
	      Li = { shouldConvert: !0, isSettingProps: !1 },
	      Di = function Di(e) {
	    if (this.value = e, this.dep = new Si(), this.vmCount = 0, y(e, "__ob__", this), Array.isArray(e)) {
	      var t = vi ? C : x;t(e, ji, Ni), this.observeArray(e);
	    } else this.walk(e);
	  };Di.prototype.walk = function (e) {
	    for (var t = Object.keys(e), n = 0; n < t.length; n++) {
	      A(e, t[n], e[t[n]]);
	    }
	  }, Di.prototype.observeArray = function (e) {
	    for (var t = 0, n = e.length; t < n; t++) {
	      k(e[t]);
	    }
	  };var Mi = di.optionMergeStrategies;Mi.data = function (e, t, n) {
	    return n ? e || t ? function () {
	      var r = "function" == typeof t ? t.call(n) : t,
	          i = "function" == typeof e ? e.call(n) : void 0;return r ? E(r, i) : i;
	    } : void 0 : t ? "function" != typeof t ? e : e ? function () {
	      return E(t.call(this), e.call(this));
	    } : t : e;
	  }, di._lifecycleHooks.forEach(function (e) {
	    Mi[e] = j;
	  }), di._assetTypes.forEach(function (e) {
	    Mi[e + "s"] = N;
	  }), Mi.watch = function (e, t) {
	    if (!t) return e;if (!e) return t;var n = {};l(n, e);for (var r in t) {
	      var i = n[r],
	          a = t[r];i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(a) : [a];
	    }return n;
	  }, Mi.props = Mi.methods = Mi.computed = function (e, t) {
	    if (!t) return e;if (!e) return t;var n = Object.create(null);return l(n, e), l(n, t), n;
	  };var Pi = function Pi(e, t) {
	    return void 0 === t ? e : t;
	  },
	      Ri = Object.freeze({ defineReactive: A, _toString: e, toNumber: t, makeMap: n, isBuiltInTag: ti, remove: r, hasOwn: i, isPrimitive: a, cached: o, camelize: ii, capitalize: ai, hyphenate: si, bind: s, toArray: c, extend: l, isObject: u, isPlainObject: f, toObject: d, noop: p, no: ui, identity: fi, genStaticKeys: v, looseEqual: h, looseIndexOf: m, isReserved: g, def: y, parsePath: _, hasProto: vi, inBrowser: hi, UA: mi, isIE: gi, isIE9: yi, isEdge: _i, isAndroid: bi, isIOS: $i, isServerRendering: wi, devtools: Ci, nextTick: xi, get _Set() {
	      return ei;
	    }, mergeOptions: M, resolveAsset: P, warn: Ai, formatComponentName: ki, validateProp: R }),
	      Ii = [],
	      Fi = {},
	      Hi = !1,
	      Ui = !1,
	      Bi = 0,
	      zi = 0,
	      Vi = function Vi(e, t, n, r) {
	    this.vm = e, e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++zi, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ei(), this.newDepIds = new ei(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = _(t), this.getter || (this.getter = function () {})), this.value = this.lazy ? void 0 : this.get();
	  };Vi.prototype.get = function () {
	    $(this);var e = this.getter.call(this.vm, this.vm);return this.deep && V(e), w(), this.cleanupDeps(), e;
	  }, Vi.prototype.addDep = function (e) {
	    var t = e.id;this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
	  }, Vi.prototype.cleanupDeps = function () {
	    for (var e = this, t = this.deps.length; t--;) {
	      var n = e.deps[t];e.newDepIds.has(n.id) || n.removeSub(e);
	    }var r = this.depIds;this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
	  }, Vi.prototype.update = function () {
	    this.lazy ? this.dirty = !0 : this.sync ? this.run() : z(this);
	  }, Vi.prototype.run = function () {
	    if (this.active) {
	      var e = this.get();if (e !== this.value || u(e) || this.deep) {
	        var t = this.value;if (this.value = e, this.user) try {
	          this.cb.call(this.vm, e, t);
	        } catch (e) {
	          if (!di.errorHandler) throw e;di.errorHandler.call(null, e, this.vm);
	        } else this.cb.call(this.vm, e, t);
	      }
	    }
	  }, Vi.prototype.evaluate = function () {
	    this.value = this.get(), this.dirty = !1;
	  }, Vi.prototype.depend = function () {
	    for (var e = this, t = this.deps.length; t--;) {
	      e.deps[t].depend();
	    }
	  }, Vi.prototype.teardown = function () {
	    var e = this;if (this.active) {
	      this.vm._isBeingDestroyed || r(this.vm._watchers, this);for (var t = this.deps.length; t--;) {
	        e.deps[t].removeSub(e);
	      }this.active = !1;
	    }
	  };var Ji,
	      Ki = new ei(),
	      qi = { enumerable: !0, configurable: !0, get: p, set: p },
	      Wi = function Wi(e, t, n, r, i, a, o) {
	    this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = a, this.functionalContext = void 0, this.key = t && t.key, this.componentOptions = o, this.child = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1;
	  },
	      Zi = function Zi() {
	    var e = new Wi();return e.text = "", e.isComment = !0, e;
	  },
	      Gi = null,
	      Yi = { init: xe, prepatch: ke, insert: Ae, destroy: Oe },
	      Qi = Object.keys(Yi),
	      Xi = 1,
	      ea = 2,
	      ta = 0;Fe(Be), ee(Be), ge(Be), _e(Be), Re(Be);var na = [String, RegExp],
	      ra = { name: "keep-alive", abstract: !0, props: { include: na, exclude: na }, created: function created() {
	      this.cache = Object.create(null);
	    }, render: function render() {
	      var e = de(this.$slots.default);if (e && e.componentOptions) {
	        var t = e.componentOptions,
	            n = t.Ctor.options.name || t.tag;if (n && (this.include && !qe(this.include, n) || this.exclude && qe(this.exclude, n))) return e;var r = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;this.cache[r] ? e.child = this.cache[r].child : this.cache[r] = e, e.data.keepAlive = !0;
	      }return e;
	    }, destroyed: function destroyed() {
	      var e = this;for (var t in this.cache) {
	        var n = e.cache[t];be(n.child, "deactivated"), n.child.$destroy();
	      }
	    } },
	      ia = { KeepAlive: ra };We(Be), Object.defineProperty(Be.prototype, "$isServer", { get: wi }), Be.version = "2.1.8";var aa,
	      oa,
	      sa = n("input,textarea,option,select"),
	      ca = function ca(e, t) {
	    return "value" === t && sa(e) || "selected" === t && "option" === e || "checked" === t && "input" === e || "muted" === t && "video" === e;
	  },
	      la = n("contenteditable,draggable,spellcheck"),
	      ua = n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
	      fa = "http://www.w3.org/1999/xlink",
	      da = function da(e) {
	    return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
	  },
	      pa = function pa(e) {
	    return da(e) ? e.slice(6, e.length) : "";
	  },
	      va = function va(e) {
	    return null == e || e === !1;
	  },
	      ha = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
	      ma = n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
	      ga = n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
	      ya = function ya(e) {
	    return "pre" === e;
	  },
	      _a = function _a(e) {
	    return ma(e) || ga(e);
	  },
	      ba = Object.create(null),
	      $a = Object.freeze({ createElement: rt, createElementNS: it, createTextNode: at, createComment: ot, insertBefore: st, removeChild: ct, appendChild: lt, parentNode: ut, nextSibling: ft, tagName: dt, setTextContent: pt, setAttribute: vt }),
	      wa = { create: function create(e, t) {
	      ht(t);
	    }, update: function update(e, t) {
	      e.data.ref !== t.data.ref && (ht(e, !0), ht(t));
	    }, destroy: function destroy(e) {
	      ht(e, !0);
	    } },
	      Ca = new Wi("", {}, []),
	      xa = ["create", "activate", "update", "remove", "destroy"],
	      ka = { create: $t, update: $t, destroy: function destroy(e) {
	      $t(e, Ca);
	    } },
	      Aa = Object.create(null),
	      Oa = [wa, ka],
	      Sa = { create: At, update: At },
	      Ta = { create: St, update: St },
	      Ea = { create: jt, update: jt },
	      ja = { create: Nt, update: Nt },
	      Na = o(function (e) {
	    var t = {},
	        n = /;(?![^(]*\))/g,
	        r = /:(.+)/;return e.split(n).forEach(function (e) {
	      if (e) {
	        var n = e.split(r);n.length > 1 && (t[n[0].trim()] = n[1].trim());
	      }
	    }), t;
	  }),
	      La = /^--/,
	      Da = /\s*!important$/,
	      Ma = function Ma(e, t, n) {
	    La.test(t) ? e.style.setProperty(t, n) : Da.test(n) ? e.style.setProperty(t, n.replace(Da, ""), "important") : e.style[Ra(t)] = n;
	  },
	      Pa = ["Webkit", "Moz", "ms"],
	      Ra = o(function (e) {
	    if (oa = oa || document.createElement("div"), e = ii(e), "filter" !== e && e in oa.style) return e;for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Pa.length; n++) {
	      var r = Pa[n] + t;if (r in oa.style) return r;
	    }
	  }),
	      Ia = { create: Ft, update: Ft },
	      Fa = hi && !yi,
	      Ha = "transition",
	      Ua = "animation",
	      Ba = "transition",
	      za = "transitionend",
	      Va = "animation",
	      Ja = "animationend";
	  Fa && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ba = "WebkitTransition", za = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Va = "WebkitAnimation", Ja = "webkitAnimationEnd"));var Ka = hi && window.requestAnimationFrame || setTimeout,
	      qa = /\b(transform|all)(,|$)/,
	      Wa = o(function (e) {
	    return { enterClass: e + "-enter", leaveClass: e + "-leave", appearClass: e + "-enter", enterToClass: e + "-enter-to", leaveToClass: e + "-leave-to", appearToClass: e + "-enter-to", enterActiveClass: e + "-enter-active", leaveActiveClass: e + "-leave-active", appearActiveClass: e + "-enter-active" };
	  }),
	      Za = hi ? { create: Xt, activate: Xt, remove: function remove(e, t) {
	      e.data.show ? t() : Gt(e, t);
	    } } : {},
	      Ga = [Sa, Ta, Ea, ja, Ia, Za],
	      Ya = Ga.concat(Oa),
	      Qa = bt({ nodeOps: $a, modules: Ya });yi && document.addEventListener("selectionchange", function () {
	    var e = document.activeElement;e && e.vmodel && on(e, "input");
	  });var Xa = { inserted: function inserted(e, t, n) {
	      if ("select" === n.tag) {
	        var r = function r() {
	          en(e, t, n.context);
	        };r(), (gi || _i) && setTimeout(r, 0);
	      } else "textarea" !== n.tag && "text" !== e.type || (e._vModifiers = t.modifiers, t.modifiers.lazy || (bi || (e.addEventListener("compositionstart", rn), e.addEventListener("compositionend", an)), yi && (e.vmodel = !0)));
	    }, componentUpdated: function componentUpdated(e, t, n) {
	      if ("select" === n.tag) {
	        en(e, t, n.context);var r = e.multiple ? t.value.some(function (t) {
	          return tn(t, e.options);
	        }) : t.value !== t.oldValue && tn(t.value, e.options);r && on(e, "change");
	      }
	    } },
	      eo = { bind: function bind(e, t, n) {
	      var r = t.value;n = sn(n);var i = n.data && n.data.transition,
	          a = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;r && i && !yi ? (n.data.show = !0, Zt(n, function () {
	        e.style.display = a;
	      })) : e.style.display = r ? a : "none";
	    }, update: function update(e, t, n) {
	      var r = t.value,
	          i = t.oldValue;if (r !== i) {
	        n = sn(n);var a = n.data && n.data.transition;a && !yi ? (n.data.show = !0, r ? Zt(n, function () {
	          e.style.display = e.__vOriginalDisplay;
	        }) : Gt(n, function () {
	          e.style.display = "none";
	        })) : e.style.display = r ? e.__vOriginalDisplay : "none";
	      }
	    }, unbind: function unbind(e, t, n, r, i) {
	      i || (e.style.display = e.__vOriginalDisplay);
	    } },
	      to = { model: Xa, show: eo },
	      no = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String },
	      ro = { name: "transition", props: no, abstract: !0, render: function render(e) {
	      var t = this,
	          n = this.$slots.default;if (n && (n = n.filter(function (e) {
	        return e.tag;
	      }), n.length)) {
	        var r = this.mode,
	            i = n[0];if (fn(this.$vnode)) return i;var a = cn(i);if (!a) return i;if (this._leaving) return un(e, i);var o = a.key = null == a.key || a.isStatic ? "__v" + (a.tag + this._uid) + "__" : a.key,
	            s = (a.data || (a.data = {})).transition = ln(this),
	            c = this._vnode,
	            u = cn(c);if (a.data.directives && a.data.directives.some(function (e) {
	          return "show" === e.name;
	        }) && (a.data.show = !0), u && u.data && !dn(a, u)) {
	          var f = u && (u.data.transition = l({}, s));if ("out-in" === r) return this._leaving = !0, ae(f, "afterLeave", function () {
	            t._leaving = !1, t.$forceUpdate();
	          }, o), un(e, i);if ("in-out" === r) {
	            var d,
	                p = function p() {
	              d();
	            };ae(s, "afterEnter", p, o), ae(s, "enterCancelled", p, o), ae(f, "delayLeave", function (e) {
	              d = e;
	            }, o);
	          }
	        }return i;
	      }
	    } },
	      io = l({ tag: String, moveClass: String }, no);delete io.mode;var ao = { props: io, render: function render(e) {
	      for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], a = this.children = [], o = ln(this), s = 0; s < i.length; s++) {
	        var c = i[s];c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (a.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = o);
	      }if (r) {
	        for (var l = [], u = [], f = 0; f < r.length; f++) {
	          var d = r[f];d.data.transition = o, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? l.push(d) : u.push(d);
	        }this.kept = e(t, null, l), this.removed = u;
	      }return e(t, null, a);
	    }, beforeUpdate: function beforeUpdate() {
	      this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
	    }, updated: function updated() {
	      var e = this.prevChildren,
	          t = this.moveClass || (this.name || "v") + "-move";if (e.length && this.hasMove(e[0].elm, t)) {
	        e.forEach(pn), e.forEach(vn), e.forEach(hn);document.body.offsetHeight;e.forEach(function (e) {
	          if (e.data.moved) {
	            var n = e.elm,
	                r = n.style;zt(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(za, n._moveCb = function e(r) {
	              r && !/transform$/.test(r.propertyName) || (n.removeEventListener(za, e), n._moveCb = null, Vt(n, t));
	            });
	          }
	        });
	      }
	    }, methods: { hasMove: function hasMove(e, t) {
	        if (!Fa) return !1;if (null != this._hasMove) return this._hasMove;zt(e, t);var n = Kt(e);return Vt(e, t), this._hasMove = n.hasTransform;
	      } } },
	      oo = { Transition: ro, TransitionGroup: ao };Be.config.isUnknownElement = tt, Be.config.isReservedTag = _a, Be.config.getTagNamespace = et, Be.config.mustUseProp = ca, l(Be.options.directives, to), l(Be.options.components, oo), Be.prototype.__patch__ = hi ? Qa : p, Be.prototype.$mount = function (e, t) {
	    return e = e && hi ? nt(e) : void 0, this._mount(e, t);
	  }, setTimeout(function () {
	    di.devtools && Ci && Ci.emit("init", Be);
	  }, 0);var so,
	      co = !!hi && mn("\n", "&#10;"),
	      lo = n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr", !0),
	      uo = n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source", !0),
	      fo = n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track", !0),
	      po = /([^\s"'<>\/=]+)/,
	      vo = /(?:=)/,
	      ho = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
	      mo = new RegExp("^\\s*" + po.source + "(?:\\s*(" + vo.source + ")\\s*(?:" + ho.join("|") + "))?"),
	      go = "[a-zA-Z_][\\w\\-\\.]*",
	      yo = "((?:" + go + "\\:)?" + go + ")",
	      _o = new RegExp("^<" + yo),
	      bo = /^\s*(\/?)>/,
	      $o = new RegExp("^<\\/" + yo + "[^>]*>"),
	      wo = /^<!DOCTYPE [^>]+>/i,
	      Co = /^<!--/,
	      xo = /^<!\[/,
	      ko = !1;"x".replace(/x(.)?/g, function (e, t) {
	    ko = "" === t;
	  });var Ao,
	      Oo,
	      So,
	      To,
	      Eo,
	      jo,
	      No,
	      Lo,
	      Do,
	      Mo,
	      Po,
	      Ro,
	      Io,
	      Fo,
	      Ho,
	      Uo,
	      Bo,
	      zo,
	      Vo,
	      Jo,
	      Ko,
	      qo,
	      Wo,
	      Zo,
	      Go,
	      Yo = n("script,style", !0),
	      Qo = function Qo(e) {
	    return "lang" === e.name && "html" !== e.value;
	  },
	      Xo = function Xo(e, t, n) {
	    return !!Yo(e) || !(!t || 1 !== n.length) && !("template" === e && !n[0].attrs.some(Qo));
	  },
	      es = {},
	      ts = /&lt;/g,
	      ns = /&gt;/g,
	      rs = /&#10;/g,
	      is = /&amp;/g,
	      as = /&quot;/g,
	      os = /\{\{((?:.|\n)+?)\}\}/g,
	      ss = /[-.*+?^${}()|[\]\/\\]/g,
	      cs = o(function (e) {
	    var t = e[0].replace(ss, "\\$&"),
	        n = e[1].replace(ss, "\\$&");return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
	  }),
	      ls = /^v-|^@|^:/,
	      us = /(.*?)\s+(?:in|of)\s+(.*)/,
	      fs = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
	      ds = /^:|^v-bind:/,
	      ps = /^@|^v-on:/,
	      vs = /:(.*)$/,
	      hs = /\.[^.]+/g,
	      ms = o(gn),
	      gs = /^xmlns:NS\d+/,
	      ys = /^NS\d+:/,
	      _s = o(rr),
	      bs = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
	      $s = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
	      ws = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
	      Cs = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: "if($event.target !== $event.currentTarget)return;", ctrl: "if(!$event.ctrlKey)return;", shift: "if(!$event.shiftKey)return;", alt: "if(!$event.altKey)return;", meta: "if(!$event.metaKey)return;" },
	      xs = { bind: pr, cloak: p },
	      ks = { staticKeys: ["staticClass"], transformNode: Rr, genData: Ir },
	      As = { staticKeys: ["staticStyle"], transformNode: Fr, genData: Hr },
	      Os = [ks, As],
	      Ss = { model: Ur, text: qr, html: Wr },
	      Ts = Object.create(null),
	      Es = { expectHTML: !0, modules: Os, staticKeys: v(Os), directives: Ss, isReservedTag: _a, isUnaryTag: lo, mustUseProp: ca, getTagNamespace: et, isPreTag: ya },
	      js = o(function (e) {
	    var t = nt(e);return t && t.innerHTML;
	  }),
	      Ns = Be.prototype.$mount;return Be.prototype.$mount = function (e, t) {
	    if (e = e && nt(e), e === document.body || e === document.documentElement) return this;var n = this.$options;if (!n.render) {
	      var r = n.template;if (r) {
	        if ("string" == typeof r) "#" === r.charAt(0) && (r = js(r));else {
	          if (!r.nodeType) return this;r = r.innerHTML;
	        }
	      } else e && (r = Qr(e));if (r) {
	        var i = Gr(r, { warn: Ai, shouldDecodeNewlines: co, delimiters: n.delimiters }, this),
	            a = i.render,
	            o = i.staticRenderFns;n.render = a, n.staticRenderFns = o;
	      }
	    }return Ns.call(this, e, t);
	  }, Be.compile = Gr, Be;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(3)

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mayako/WebstormProjects/vue-datatable/src/DataTable.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1ffd78e4"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1ffd78e4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1ffd78e4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] DataTable.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1ffd78e4&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTable.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1ffd78e4&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.v-table[data-v-1ffd78e4] {\n  margin-top: 120px;\n}\n.v-table table[data-v-1ffd78e4] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.v-table table thead[data-v-1ffd78e4] {\n  border-bottom: 1px solid #111111;\n}\n.v-table table thead th[data-v-1ffd78e4] {\n  position: relative;\n  padding: 10px 18px;\n  text-align: left;\n  background-color: #CBCCCD;\n  font-weight: bold;\n}\n.v-table table thead th.sort[data-v-1ffd78e4] {\n  cursor: pointer;\n}\n.v-table table thead th.sort[data-v-1ffd78e4]::after {\n  content: \"\";\n  position: absolute;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 10px solid #FAFAFA;\n  right: 5px;\n  top: 50%;\n  margin-top: -10px;\n}\n.v-table table thead th.sort[data-v-1ffd78e4]::before {\n  content: \"\";\n  position: absolute;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 10px solid #FAFAFA;\n  right: 5px;\n  top: 50%;\n  margin-top: 3px;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.v-table table thead th.sort.desc[data-v-1ffd78e4]::after {\n  display: none;\n}\n.v-table table thead th.sort.desc[data-v-1ffd78e4]::before {\n  content: \"\";\n  position: absolute;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 10px solid #333;\n  right: 5px;\n  top: 50%;\n  margin-top: -5px;\n}\n.v-table table thead th.sort.asc[data-v-1ffd78e4]::before {\n  display: none;\n}\n.v-table table thead th.sort.asc[data-v-1ffd78e4]::after {\n  content: \"\";\n  position: absolute;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 10px solid #333;\n  right: 5px;\n  top: 50%;\n  margin-top: -5px;\n}\n.v-table table tbody[data-v-1ffd78e4] {\n  border-bottom: 1px solid #111111;\n}\n.v-table table tbody tr[data-v-1ffd78e4] {\n  background-color: #fff;\n}\n.v-table table tbody tr td[data-v-1ffd78e4] {\n  text-align: left;\n  padding: 10px 8px;\n}\n.v-table table tbody tr[data-v-1ffd78e4]:nth-child(odd) {\n  background-color: #f9f9f9;\n}\n.v-table table tbody tr:nth-child(odd) td[data-v-1ffd78e4]:nth-child(1) {\n  background-color: #F1F1F2;\n}\n.v-table table tbody tr:nth-child(even) td[data-v-1ffd78e4]:nth-child(1) {\n  background-color: #fafafa;\n}\n.v-table .v-table-header[data-v-1ffd78e4], .v-table .v-table-footer[data-v-1ffd78e4] {\n  display: table;\n  height: 40px;\n  width: 100%;\n  line-height: 40px;\n}\n.v-table .v-table-header[data-v-1ffd78e4]::after, .v-table .v-table-footer[data-v-1ffd78e4]::after {\n  content: '';\n  clear: both;\n}\n.v-table .v-table-header-count[data-v-1ffd78e4] {\n  float: left;\n}\n.v-table .v-table-header-search[data-v-1ffd78e4] {\n  float: right;\n}\n.v-table .v-table-footer[data-v-1ffd78e4] {\n  margin-top: 10px;\n}\n.v-table .v-table-footer-info[data-v-1ffd78e4] {\n  float: left;\n}\n.v-table .v-table-footer-page[data-v-1ffd78e4] {\n  font-size: 0;\n  float: right;\n}\n.v-table .v-table-footer-page span[data-v-1ffd78e4] {\n  display: inline-block;\n  font-size: 1rem;\n  padding: 10px 15px;\n}\n.v-table .v-table-footer-page-btn[data-v-1ffd78e4] {\n  display: inline-block;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 0px 15px;\n  line-height: 40px;\n  text-decoration: none;\n  color: #000;\n  border-radius: 2px;\n  font-size: 1rem;\n}\n.v-table .v-table-footer-page-btn[data-v-1ffd78e4]:hover {\n  color: #fff;\n  border-top: 1px solid #333;\n  border-bottom: 1px solid #333;\n  background-color: #333;\n}\n.v-table .v-table-footer-page-btn[data-v-1ffd78e4]:nth-last-child(1) {\n  margin-right: 0;\n}\n.v-table .v-table-footer-page-btn.disabled[data-v-1ffd78e4] {\n  cursor: default;\n  color: #666;\n}\n.v-table .v-table-footer-page-btn.disabled[data-v-1ffd78e4]:hover {\n  color: #666;\n  background-color: transparent;\n  border: none;\n}\n.v-table .v-table-footer-page-btn.current[data-v-1ffd78e4] {\n  color: #000;\n  border: 1px solid #979797;\n  background-color: #fff;\n  background: -webkit-linear-gradient(top, #fff 0%, #dcdcdc 100%);\n  background: linear-gradient(to bottom, #fff 0%, #dcdcdc 100%);\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: ['dataTable'],

	  data: function data() {
	    return {
	      currentPage: 1,
	      searchBy: '',
	      rows: [],
	      sort: {
	        sortBy: '',
	        desc: true
	      }
	    };
	  },


	  computed: {
	    filteredRows: function filteredRows() {
	      //      console.log("currentpage"+this.currentPage)
	      //      console.log(this.dataTable.rows)
	      //      console.log("fif"+this.dataTable.options.pageCount)

	      //var obj = this.filterRows(this.dataTable.rows, this.dataTable.options, this.currentPage);
	      //return this.getPageRows(obj, this.currentPage, this.dataTable.options.pageCount);
	      return this.filterRows(this.dataTable.rows, this.dataTable.options, this.currentPage);
	    },
	    filteredRowsA: function filteredRowsA() {

	      return this.getPageRows(this.filteredRows, this.currentPage, this.dataTable.options.pageCount);
	      //return this.filterRows(this.dataTable.rows, this.dataTable.options, this.currentPage);
	    },
	    lastPage: function lastPage() {
	      return Math.ceil(this.filteredRows.length / this.dataTable.options.pageCount);
	    },
	    centerPartPage: function centerPartPage() {
	      if (this.lastPage > 10 && this.currentPage >= 5) {
	        if (this.lastPage - this.currentPage > 5) {
	          return this.currentPage === this.lastPage ? [this.currentPage - 3, this.currentPage - 2, this.currentPage - 1] : [this.currentPage - 2, this.currentPage - 1, this.currentPage];
	        } else {
	          var r = [];

	          for (var i = this.lastPage - 6; i < this.lastPage; i++) {
	            r.push(i);
	          }
	          return r;
	        }
	      } else if (this.lastPage > 10) {
	        var _r = [];

	        for (var _i = 1; _i < 5; _i++) {
	          _r.push(_i);
	        }
	        return _r;
	      } else {
	        var _r2 = [];

	        for (var _i2 = 1; _i2 < this.lastPage; _i2++) {
	          _r2.push(_i2);
	        }
	        return _r2;
	      }
	    },
	    lastPartPage: function lastPartPage() {
	      if (this.lastPage > 10 && this.lastPage - this.currentPage > 5) {
	        return [this.lastPage - 1];
	      } else {
	        return [];
	      }
	    },
	    firstRow: function firstRow() {
	      return this.currentPage === 1 ? 0 : this.dataTable.options.pageCount * (this.currentPage - 1);
	    },
	    lastRow: function lastRow() {
	      return this.dataTable.options.pageCount * this.currentPage > this.filteredRows.length ? this.filteredRows.length : this.dataTable.options.pageCount * this.currentPage;
	    }
	  },

	  watch: {
	    'dataTable.rows': function dataTableRows(rows) {
	      var _this = this;

	      rows.forEach(function (row, index) {
	        var _loop = function _loop(key) {
	          var column = _this.dataTable.columns.filter(function (column) {
	            return column.value === key;
	          })[0];

	          row[key] = Object.assign({
	            editable: column.editable,
	            editing: false,
	            tmpValue: ''
	          }, row[key]);
	        };

	        for (var key in row) {
	          _loop(key);
	        }

	        _this.dataTable.rows[index] = row;
	      });
	    },
	    'dataTable.columns': function dataTableColumns(columns) {
	      var _this2 = this;

	      columns.forEach(function (column, index) {
	        column = Object.assign({
	          editable: false,
	          sortable: false
	        }, column);

	        _this2.dataTable.columns[index] = column;
	      });
	    },
	    'searchBy': function searchBy(val) {
	      if (val) {
	        this.currentPage = 1;
	      }
	    }
	  },

	  filters: {
	    pagination: function pagination(rows, currentPage, pageCount) {
	      //      console.log('1')
	      //      console.log(rows);
	      //      console.log('2')
	      //      console.log("currentpage"+currentPage);
	      //      console.log('3')
	      //      console.log(pageCount);
	      return this.getPageRows(rows, currentPage, pageCount);
	    }
	  },

	  methods: {
	    onChangePageCount: function onChangePageCount() {
	      this.currentPage = 1;
	    },
	    filterRows: function filterRows(rows, options, currentPage) {
	      var _this3 = this;

	      rows = this.sort.sortBy ? this.sortRows(rows, this.sort.sortBy) : rows;

	      if (this.searchBy !== '') {
	        rows = rows.filter(function (row) {
	          var r = false;

	          for (var key in row) {
	            if (row[key].value.toString().toLowerCase().indexOf(_this3.searchBy.toLowerCase()) !== -1) {
	              r = true;
	            }
	          }

	          return r;
	        });
	      }

	      return rows;
	    },
	    getPageRows: function getPageRows(rows) {
	      return rows.slice(this.firstRow, this.lastRow);
	    },
	    togglePage: function togglePage(page) {
	      switch (page) {
	        case 'prev':
	          if (this.currentPage <= 1) return;
	          this.currentPage--;
	          break;
	        case 'next':
	          if (this.currentPage >= this.lastPage) return;
	          this.currentPage++;
	          break;
	        default:
	          if (this.currentPage == page) return;
	          this.currentPage = page;
	      }
	      if (this.dataTable.onPageChanged) {
	        this.dataTable.onPageChanged(this.currentPage);
	      }
	    },
	    sortBy: function sortBy(column) {
	      if (!column.sortable || !this.dataTable.options.sortable) return;

	      if (column.value === this.sort.sortBy) {
	        this.sort.desc = !this.sort.desc;
	      } else {
	        this.sort.sortBy = column.value;
	        this.sort.desc = true;
	      }
	    },
	    editField: function editField(field, key) {
	      if (!this.isEditable(field, key, true)) return;

	      field.tmpValue = field.value;
	      field.editing = true;
	    },
	    saveEdit: function saveEdit(field) {
	      field.value = field.tmpValue;
	      field.editing = false;
	      field.tmpValue = '';
	    },
	    cancelEdit: function cancelEdit(field) {
	      field.editing = false;
	      field.tmpValue = '';
	    },
	    sortRows: function sortRows(rows, sortBy) {
	      var _this4 = this;

	      var arr = rows.slice(0);

	      return arr.sort(function (a, b) {
	        var r = _this4.sort.desc ? a[sortBy].value < b[sortBy].value : a[sortBy].value > b[sortBy].value;

	        return r ? 1 : -1;
	      });
	    },
	    isSortable: function isSortable(column) {
	      return column.sortable && this.dataTable.options.sortable;
	    },
	    isEditable: function isEditable(field, key, beforeEditing) {
	      var column = this.dataTable.columns.filter(function (column) {
	        return column.value === key;
	      })[0];
	      if (beforeEditing) {
	        return field.editable && this.dataTable.options.editable && column.editable;
	      } else {
	        return field.editable && this.dataTable.options.editable && field.editing && column.editable;
	      }
	    },
	    isHTML: function isHTML(key) {
	      return this.dataTable.columns.filter(function (column) {
	        return column.value === key;
	      })[0].isHTML;
	    },
	    isButton: function isButton(key) {
	      return this.dataTable.columns.filter(function (column) {
	        return column.value === key;
	      })[0].isButton;
	    }
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function(){},staticRenderFns:[]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1ffd78e4", module.exports)
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	//  Chance.js 1.0.4
	//  http://chancejs.com
	//  (c) 2013 Victor Quinn
	//  Chance may be freely distributed or modified under the MIT license.

	(function () {

	    // Constants
	    var MAX_INT = 9007199254740992;
	    var MIN_INT = -MAX_INT;
	    var NUMBERS = '0123456789';
	    var CHARS_LOWER = 'abcdefghijklmnopqrstuvwxyz';
	    var CHARS_UPPER = CHARS_LOWER.toUpperCase();
	    var HEX_POOL = NUMBERS + "abcdef";

	    // Cached array helpers
	    var slice = Array.prototype.slice;

	    // Constructor
	    function Chance(seed) {
	        if (!(this instanceof Chance)) {
	            return seed == null ? new Chance() : new Chance(seed);
	        }

	        // if user has provided a function, use that as the generator
	        if (typeof seed === 'function') {
	            this.random = seed;
	            return this;
	        }

	        if (arguments.length) {
	            // set a starting value of zero so we can add to it
	            this.seed = 0;
	        }

	        // otherwise, leave this.seed blank so that MT will receive a blank

	        for (var i = 0; i < arguments.length; i++) {
	            var seedling = 0;
	            if (Object.prototype.toString.call(arguments[i]) === '[object String]') {
	                for (var j = 0; j < arguments[i].length; j++) {
	                    // create a numeric hash for each argument, add to seedling
	                    var hash = 0;
	                    for (var k = 0; k < arguments[i].length; k++) {
	                        hash = arguments[i].charCodeAt(k) + (hash << 6) + (hash << 16) - hash;
	                    }
	                    seedling += hash;
	                }
	            } else {
	                seedling = arguments[i];
	            }
	            this.seed += (arguments.length - i) * seedling;
	        }

	        // If no generator function was provided, use our MT
	        this.mt = this.mersenne_twister(this.seed);
	        this.bimd5 = this.blueimp_md5();
	        this.random = function () {
	            return this.mt.random(this.seed);
	        };

	        return this;
	    }

	    Chance.prototype.VERSION = "1.0.4";

	    // Random helper functions
	    function initOptions(options, defaults) {
	        options || (options = {});

	        if (defaults) {
	            for (var i in defaults) {
	                if (typeof options[i] === 'undefined') {
	                    options[i] = defaults[i];
	                }
	            }
	        }

	        return options;
	    }

	    function testRange(test, errorMessage) {
	        if (test) {
	            throw new RangeError(errorMessage);
	        }
	    }

	    /**
	     * Encode the input string with Base64.
	     */
	    var base64 = function base64() {
	        throw new Error('No Base64 encoder available.');
	    };

	    // Select proper Base64 encoder.
	    (function determineBase64Encoder() {
	        if (typeof btoa === 'function') {
	            base64 = btoa;
	        } else if (typeof Buffer === 'function') {
	            base64 = function base64(input) {
	                return new Buffer(input).toString('base64');
	            };
	        }
	    })();

	    // -- Basics --

	    /**
	     *  Return a random bool, either true or false
	     *
	     *  @param {Object} [options={ likelihood: 50 }] alter the likelihood of
	     *    receiving a true or false value back.
	     *  @throws {RangeError} if the likelihood is out of bounds
	     *  @returns {Bool} either true or false
	     */
	    Chance.prototype.bool = function (options) {
	        // likelihood of success (true)
	        options = initOptions(options, { likelihood: 50 });

	        // Note, we could get some minor perf optimizations by checking range
	        // prior to initializing defaults, but that makes code a bit messier
	        // and the check more complicated as we have to check existence of
	        // the object then existence of the key before checking constraints.
	        // Since the options initialization should be minor computationally,
	        // decision made for code cleanliness intentionally. This is mentioned
	        // here as it's the first occurrence, will not be mentioned again.
	        testRange(options.likelihood < 0 || options.likelihood > 100, "Chance: Likelihood accepts values from 0 to 100.");

	        return this.random() * 100 < options.likelihood;
	    };

	    /**
	     *  Return a random character.
	     *
	     *  @param {Object} [options={}] can specify a character pool, only alpha,
	     *    only symbols, and casing (lower or upper)
	     *  @returns {String} a single random character
	     *  @throws {RangeError} Can only specify alpha or symbols, not both
	     */
	    Chance.prototype.character = function (options) {
	        options = initOptions(options);
	        testRange(options.alpha && options.symbols, "Chance: Cannot specify both alpha and symbols.");

	        var symbols = "!@#$%^&*()[]",
	            letters,
	            pool;

	        if (options.casing === 'lower') {
	            letters = CHARS_LOWER;
	        } else if (options.casing === 'upper') {
	            letters = CHARS_UPPER;
	        } else {
	            letters = CHARS_LOWER + CHARS_UPPER;
	        }

	        if (options.pool) {
	            pool = options.pool;
	        } else if (options.alpha) {
	            pool = letters;
	        } else if (options.symbols) {
	            pool = symbols;
	        } else {
	            pool = letters + NUMBERS + symbols;
	        }

	        return pool.charAt(this.natural({ max: pool.length - 1 }));
	    };

	    // Note, wanted to use "float" or "double" but those are both JS reserved words.

	    // Note, fixed means N OR LESS digits after the decimal. This because
	    // It could be 14.9000 but in JavaScript, when this is cast as a number,
	    // the trailing zeroes are dropped. Left to the consumer if trailing zeroes are
	    // needed
	    /**
	     *  Return a random floating point number
	     *
	     *  @param {Object} [options={}] can specify a fixed precision, min, max
	     *  @returns {Number} a single floating point number
	     *  @throws {RangeError} Can only specify fixed or precision, not both. Also
	     *    min cannot be greater than max
	     */
	    Chance.prototype.floating = function (options) {
	        options = initOptions(options, { fixed: 4 });
	        testRange(options.fixed && options.precision, "Chance: Cannot specify both fixed and precision.");

	        var num;
	        var fixed = Math.pow(10, options.fixed);

	        var max = MAX_INT / fixed;
	        var min = -max;

	        testRange(options.min && options.fixed && options.min < min, "Chance: Min specified is out of range with fixed. Min should be, at least, " + min);
	        testRange(options.max && options.fixed && options.max > max, "Chance: Max specified is out of range with fixed. Max should be, at most, " + max);

	        options = initOptions(options, { min: min, max: max });

	        // Todo - Make this work!
	        // options.precision = (typeof options.precision !== "undefined") ? options.precision : false;

	        num = this.integer({ min: options.min * fixed, max: options.max * fixed });
	        var num_fixed = (num / fixed).toFixed(options.fixed);

	        return parseFloat(num_fixed);
	    };

	    /**
	     *  Return a random integer
	     *
	     *  NOTE the max and min are INCLUDED in the range. So:
	     *  chance.integer({min: 1, max: 3});
	     *  would return either 1, 2, or 3.
	     *
	     *  @param {Object} [options={}] can specify a min and/or max
	     *  @returns {Number} a single random integer number
	     *  @throws {RangeError} min cannot be greater than max
	     */
	    Chance.prototype.integer = function (options) {
	        // 9007199254740992 (2^53) is the max integer number in JavaScript
	        // See: http://vq.io/132sa2j
	        options = initOptions(options, { min: MIN_INT, max: MAX_INT });
	        testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");

	        return Math.floor(this.random() * (options.max - options.min + 1) + options.min);
	    };

	    /**
	     *  Return a random natural
	     *
	     *  NOTE the max and min are INCLUDED in the range. So:
	     *  chance.natural({min: 1, max: 3});
	     *  would return either 1, 2, or 3.
	     *
	     *  @param {Object} [options={}] can specify a min and/or max
	     *  @returns {Number} a single random integer number
	     *  @throws {RangeError} min cannot be greater than max
	     */
	    Chance.prototype.natural = function (options) {
	        options = initOptions(options, { min: 0, max: MAX_INT });
	        testRange(options.min < 0, "Chance: Min cannot be less than zero.");
	        return this.integer(options);
	    };

	    /**
	     *  Return a random string
	     *
	     *  @param {Object} [options={}] can specify a length
	     *  @returns {String} a string of random length
	     *  @throws {RangeError} length cannot be less than zero
	     */
	    Chance.prototype.string = function (options) {
	        options = initOptions(options, { length: this.natural({ min: 5, max: 20 }) });
	        testRange(options.length < 0, "Chance: Length cannot be less than zero.");
	        var length = options.length,
	            text = this.n(this.character, length, options);

	        return text.join("");
	    };

	    // -- End Basics --

	    // -- Helpers --

	    Chance.prototype.capitalize = function (word) {
	        return word.charAt(0).toUpperCase() + word.substr(1);
	    };

	    Chance.prototype.mixin = function (obj) {
	        for (var func_name in obj) {
	            Chance.prototype[func_name] = obj[func_name];
	        }
	        return this;
	    };

	    /**
	     *  Given a function that generates something random and a number of items to generate,
	     *    return an array of items where none repeat.
	     *
	     *  @param {Function} fn the function that generates something random
	     *  @param {Number} num number of terms to generate
	     *  @param {Object} options any options to pass on to the generator function
	     *  @returns {Array} an array of length `num` with every item generated by `fn` and unique
	     *
	     *  There can be more parameters after these. All additional parameters are provided to the given function
	     */
	    Chance.prototype.unique = function (fn, num, options) {
	        testRange(typeof fn !== "function", "Chance: The first argument must be a function.");

	        var comparator = function comparator(arr, val) {
	            return arr.indexOf(val) !== -1;
	        };

	        if (options) {
	            comparator = options.comparator || comparator;
	        }

	        var arr = [],
	            count = 0,
	            result,
	            MAX_DUPLICATES = num * 50,
	            params = slice.call(arguments, 2);

	        while (arr.length < num) {
	            var clonedParams = JSON.parse(JSON.stringify(params));
	            result = fn.apply(this, clonedParams);
	            if (!comparator(arr, result)) {
	                arr.push(result);
	                // reset count when unique found
	                count = 0;
	            }

	            if (++count > MAX_DUPLICATES) {
	                throw new RangeError("Chance: num is likely too large for sample set");
	            }
	        }
	        return arr;
	    };

	    /**
	     *  Gives an array of n random terms
	     *
	     *  @param {Function} fn the function that generates something random
	     *  @param {Number} n number of terms to generate
	     *  @returns {Array} an array of length `n` with items generated by `fn`
	     *
	     *  There can be more parameters after these. All additional parameters are provided to the given function
	     */
	    Chance.prototype.n = function (fn, n) {
	        testRange(typeof fn !== "function", "Chance: The first argument must be a function.");

	        if (typeof n === 'undefined') {
	            n = 1;
	        }
	        var i = n,
	            arr = [],
	            params = slice.call(arguments, 2);

	        // Providing a negative count should result in a noop.
	        i = Math.max(0, i);

	        for (null; i--; null) {
	            arr.push(fn.apply(this, params));
	        }

	        return arr;
	    };

	    // H/T to SO for this one: http://vq.io/OtUrZ5
	    Chance.prototype.pad = function (number, width, pad) {
	        // Default pad to 0 if none provided
	        pad = pad || '0';
	        // Convert number to a string
	        number = number + '';
	        return number.length >= width ? number : new Array(width - number.length + 1).join(pad) + number;
	    };

	    // DEPRECATED on 2015-10-01
	    Chance.prototype.pick = function (arr, count) {
	        if (arr.length === 0) {
	            throw new RangeError("Chance: Cannot pick() from an empty array");
	        }
	        if (!count || count === 1) {
	            return arr[this.natural({ max: arr.length - 1 })];
	        } else {
	            return this.shuffle(arr).slice(0, count);
	        }
	    };

	    // Given an array, returns a single random element
	    Chance.prototype.pickone = function (arr) {
	        if (arr.length === 0) {
	            throw new RangeError("Chance: Cannot pickone() from an empty array");
	        }
	        return arr[this.natural({ max: arr.length - 1 })];
	    };

	    // Given an array, returns a random set with 'count' elements
	    Chance.prototype.pickset = function (arr, count) {
	        if (count === 0) {
	            return [];
	        }
	        if (arr.length === 0) {
	            throw new RangeError("Chance: Cannot pickset() from an empty array");
	        }
	        if (count < 0) {
	            throw new RangeError("Chance: count must be positive number");
	        }
	        if (!count || count === 1) {
	            return [this.pickone(arr)];
	        } else {
	            return this.shuffle(arr).slice(0, count);
	        }
	    };

	    Chance.prototype.shuffle = function (arr) {
	        var old_array = arr.slice(0),
	            new_array = [],
	            j = 0,
	            length = Number(old_array.length);

	        for (var i = 0; i < length; i++) {
	            // Pick a random index from the array
	            j = this.natural({ max: old_array.length - 1 });
	            // Add it to the new array
	            new_array[i] = old_array[j];
	            // Remove that element from the original array
	            old_array.splice(j, 1);
	        }

	        return new_array;
	    };

	    // Returns a single item from an array with relative weighting of odds
	    Chance.prototype.weighted = function (arr, weights, trim) {
	        if (arr.length !== weights.length) {
	            throw new RangeError("Chance: length of array and weights must match");
	        }

	        // scan weights array and sum valid entries
	        var sum = 0;
	        var val;
	        for (var weightIndex = 0; weightIndex < weights.length; ++weightIndex) {
	            val = weights[weightIndex];
	            if (val > 0) {
	                sum += val;
	            }
	        }

	        if (sum === 0) {
	            throw new RangeError("Chance: no valid entries in array weights");
	        }

	        // select a value within range
	        var selected = this.random() * sum;

	        // find array entry corresponding to selected value
	        var total = 0;
	        var lastGoodIdx = -1;
	        var chosenIdx;
	        for (weightIndex = 0; weightIndex < weights.length; ++weightIndex) {
	            val = weights[weightIndex];
	            total += val;
	            if (val > 0) {
	                if (selected <= total) {
	                    chosenIdx = weightIndex;
	                    break;
	                }
	                lastGoodIdx = weightIndex;
	            }

	            // handle any possible rounding error comparison to ensure something is picked
	            if (weightIndex === weights.length - 1) {
	                chosenIdx = lastGoodIdx;
	            }
	        }

	        var chosen = arr[chosenIdx];
	        trim = typeof trim === 'undefined' ? false : trim;
	        if (trim) {
	            arr.splice(chosenIdx, 1);
	            weights.splice(chosenIdx, 1);
	        }

	        return chosen;
	    };

	    // -- End Helpers --

	    // -- Text --

	    Chance.prototype.paragraph = function (options) {
	        options = initOptions(options);

	        var sentences = options.sentences || this.natural({ min: 3, max: 7 }),
	            sentence_array = this.n(this.sentence, sentences);

	        return sentence_array.join(' ');
	    };

	    // Could get smarter about this than generating random words and
	    // chaining them together. Such as: http://vq.io/1a5ceOh
	    Chance.prototype.sentence = function (options) {
	        options = initOptions(options);

	        var words = options.words || this.natural({ min: 12, max: 18 }),
	            punctuation = options.punctuation,
	            text,
	            word_array = this.n(this.word, words);

	        text = word_array.join(' ');

	        // Capitalize first letter of sentence
	        text = this.capitalize(text);

	        // Make sure punctuation has a usable value
	        if (punctuation !== false && !/^[\.\?;!:]$/.test(punctuation)) {
	            punctuation = '.';
	        }

	        // Add punctuation mark
	        if (punctuation) {
	            text += punctuation;
	        }

	        return text;
	    };

	    Chance.prototype.syllable = function (options) {
	        options = initOptions(options);

	        var length = options.length || this.natural({ min: 2, max: 3 }),
	            consonants = 'bcdfghjklmnprstvwz',
	            // consonants except hard to speak ones
	        vowels = 'aeiou',
	            // vowels
	        all = consonants + vowels,
	            // all
	        text = '',
	            chr;

	        // I'm sure there's a more elegant way to do this, but this works
	        // decently well.
	        for (var i = 0; i < length; i++) {
	            if (i === 0) {
	                // First character can be anything
	                chr = this.character({ pool: all });
	            } else if (consonants.indexOf(chr) === -1) {
	                // Last character was a vowel, now we want a consonant
	                chr = this.character({ pool: consonants });
	            } else {
	                // Last character was a consonant, now we want a vowel
	                chr = this.character({ pool: vowels });
	            }

	            text += chr;
	        }

	        if (options.capitalize) {
	            text = this.capitalize(text);
	        }

	        return text;
	    };

	    Chance.prototype.word = function (options) {
	        options = initOptions(options);

	        testRange(options.syllables && options.length, "Chance: Cannot specify both syllables AND length.");

	        var syllables = options.syllables || this.natural({ min: 1, max: 3 }),
	            text = '';

	        if (options.length) {
	            // Either bound word by length
	            do {
	                text += this.syllable();
	            } while (text.length < options.length);
	            text = text.substring(0, options.length);
	        } else {
	            // Or by number of syllables
	            for (var i = 0; i < syllables; i++) {
	                text += this.syllable();
	            }
	        }

	        if (options.capitalize) {
	            text = this.capitalize(text);
	        }

	        return text;
	    };

	    // -- End Text --

	    // -- Person --

	    Chance.prototype.age = function (options) {
	        options = initOptions(options);
	        var ageRange;

	        switch (options.type) {
	            case 'child':
	                ageRange = { min: 0, max: 12 };
	                break;
	            case 'teen':
	                ageRange = { min: 13, max: 19 };
	                break;
	            case 'adult':
	                ageRange = { min: 18, max: 65 };
	                break;
	            case 'senior':
	                ageRange = { min: 65, max: 100 };
	                break;
	            case 'all':
	                ageRange = { min: 0, max: 100 };
	                break;
	            default:
	                ageRange = { min: 18, max: 65 };
	                break;
	        }

	        return this.natural(ageRange);
	    };

	    Chance.prototype.birthday = function (options) {
	        var age = this.age(options);
	        var currentYear = new Date().getFullYear();

	        if (options && options.type) {
	            var min = new Date();
	            var max = new Date();
	            min.setFullYear(currentYear - age - 1);
	            max.setFullYear(currentYear - age);

	            options = initOptions(options, {
	                min: min,
	                max: max
	            });
	        } else {
	            options = initOptions(options, {
	                year: currentYear - age
	            });
	        }

	        return this.date(options);
	    };

	    // CPF; ID to identify taxpayers in Brazil
	    Chance.prototype.cpf = function (options) {
	        options = initOptions(options, {
	            formatted: true
	        });

	        var n = this.n(this.natural, 9, { max: 9 });
	        var d1 = n[8] * 2 + n[7] * 3 + n[6] * 4 + n[5] * 5 + n[4] * 6 + n[3] * 7 + n[2] * 8 + n[1] * 9 + n[0] * 10;
	        d1 = 11 - d1 % 11;
	        if (d1 >= 10) {
	            d1 = 0;
	        }
	        var d2 = d1 * 2 + n[8] * 3 + n[7] * 4 + n[6] * 5 + n[5] * 6 + n[4] * 7 + n[3] * 8 + n[2] * 9 + n[1] * 10 + n[0] * 11;
	        d2 = 11 - d2 % 11;
	        if (d2 >= 10) {
	            d2 = 0;
	        }
	        var cpf = '' + n[0] + n[1] + n[2] + '.' + n[3] + n[4] + n[5] + '.' + n[6] + n[7] + n[8] + '-' + d1 + d2;
	        return options.formatted ? cpf : cpf.replace(/\D/g, '');
	    };

	    // CNPJ: ID to identify companies in Brazil
	    Chance.prototype.cnpj = function (options) {
	        options = initOptions(options, {
	            formatted: true
	        });

	        var n = this.n(this.natural, 12, { max: 12 });
	        var d1 = n[11] * 2 + n[10] * 3 + n[9] * 4 + n[8] * 5 + n[7] * 6 + n[6] * 7 + n[5] * 8 + n[4] * 9 + n[3] * 2 + n[2] * 3 + n[1] * 4 + n[0] * 5;
	        d1 = 11 - d1 % 11;
	        if (d1 < 2) {
	            d1 = 0;
	        }
	        var d2 = d1 * 2 + n[11] * 3 + n[10] * 4 + n[9] * 5 + n[8] * 6 + n[7] * 7 + n[6] * 8 + n[5] * 9 + n[4] * 2 + n[3] * 3 + n[2] * 4 + n[1] * 5 + n[0] * 6;
	        d2 = 11 - d2 % 11;
	        if (d2 < 2) {
	            d2 = 0;
	        }
	        var cnpj = '' + n[0] + n[1] + '.' + n[2] + n[3] + n[4] + '.' + n[5] + n[6] + n[7] + '/' + n[8] + n[9] + n[10] + n[11] + '-' + d1 + d2;
	        return options.formatted ? cnpj : cnpj.replace(/\D/g, '');
	    };

	    Chance.prototype.first = function (options) {
	        options = initOptions(options, { gender: this.gender(), nationality: 'en' });
	        return this.pick(this.get("firstNames")[options.gender.toLowerCase()][options.nationality.toLowerCase()]);
	    };

	    Chance.prototype.gender = function (options) {
	        options = initOptions(options, { extraGenders: [] });
	        return this.pick(['Male', 'Female'].concat(options.extraGenders));
	    };

	    Chance.prototype.last = function (options) {
	        options = initOptions(options, { nationality: 'en' });
	        return this.pick(this.get("lastNames")[options.nationality.toLowerCase()]);
	    };

	    Chance.prototype.israelId = function () {
	        var x = this.string({ pool: '0123456789', length: 8 });
	        var y = 0;
	        for (var i = 0; i < x.length; i++) {
	            var thisDigit = x[i] * (i / 2 === parseInt(i / 2) ? 1 : 2);
	            thisDigit = this.pad(thisDigit, 2).toString();
	            thisDigit = parseInt(thisDigit[0]) + parseInt(thisDigit[1]);
	            y = y + thisDigit;
	        }
	        x = x + (10 - parseInt(y.toString().slice(-1))).toString().slice(-1);
	        return x;
	    };

	    Chance.prototype.mrz = function (options) {
	        var checkDigit = function checkDigit(input) {
	            var alpha = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(''),
	                multipliers = [7, 3, 1],
	                runningTotal = 0;

	            if (typeof input !== 'string') {
	                input = input.toString();
	            }

	            input.split('').forEach(function (character, idx) {
	                var pos = alpha.indexOf(character);

	                if (pos !== -1) {
	                    character = pos === 0 ? 0 : pos + 9;
	                } else {
	                    character = parseInt(character, 10);
	                }
	                character *= multipliers[idx % multipliers.length];
	                runningTotal += character;
	            });
	            return runningTotal % 10;
	        };
	        var generate = function generate(opts) {
	            var pad = function pad(length) {
	                return new Array(length + 1).join('<');
	            };
	            var number = ['P<', opts.issuer, opts.last.toUpperCase(), '<<', opts.first.toUpperCase(), pad(39 - (opts.last.length + opts.first.length + 2)), opts.passportNumber, checkDigit(opts.passportNumber), opts.nationality, opts.dob, checkDigit(opts.dob), opts.gender, opts.expiry, checkDigit(opts.expiry), pad(14), checkDigit(pad(14))].join('');

	            return number + checkDigit(number.substr(44, 10) + number.substr(57, 7) + number.substr(65, 7));
	        };

	        var that = this;

	        options = initOptions(options, {
	            first: this.first(),
	            last: this.last(),
	            passportNumber: this.integer({ min: 100000000, max: 999999999 }),
	            dob: function () {
	                var date = that.birthday({ type: 'adult' });
	                return [date.getFullYear().toString().substr(2), that.pad(date.getMonth() + 1, 2), that.pad(date.getDate(), 2)].join('');
	            }(),
	            expiry: function () {
	                var date = new Date();
	                return [(date.getFullYear() + 5).toString().substr(2), that.pad(date.getMonth() + 1, 2), that.pad(date.getDate(), 2)].join('');
	            }(),
	            gender: this.gender() === 'Female' ? 'F' : 'M',
	            issuer: 'GBR',
	            nationality: 'GBR'
	        });
	        return generate(options);
	    };

	    Chance.prototype.name = function (options) {
	        options = initOptions(options);

	        var first = this.first(options),
	            last = this.last(options),
	            name;

	        if (options.middle) {
	            name = first + ' ' + this.first(options) + ' ' + last;
	        } else if (options.middle_initial) {
	            name = first + ' ' + this.character({ alpha: true, casing: 'upper' }) + '. ' + last;
	        } else {
	            name = first + ' ' + last;
	        }

	        if (options.prefix) {
	            name = this.prefix(options) + ' ' + name;
	        }

	        if (options.suffix) {
	            name = name + ' ' + this.suffix(options);
	        }

	        return name;
	    };

	    // Return the list of available name prefixes based on supplied gender.
	    // @todo introduce internationalization
	    Chance.prototype.name_prefixes = function (gender) {
	        gender = gender || "all";
	        gender = gender.toLowerCase();

	        var prefixes = [{ name: 'Doctor', abbreviation: 'Dr.' }];

	        if (gender === "male" || gender === "all") {
	            prefixes.push({ name: 'Mister', abbreviation: 'Mr.' });
	        }

	        if (gender === "female" || gender === "all") {
	            prefixes.push({ name: 'Miss', abbreviation: 'Miss' });
	            prefixes.push({ name: 'Misses', abbreviation: 'Mrs.' });
	        }

	        return prefixes;
	    };

	    // Alias for name_prefix
	    Chance.prototype.prefix = function (options) {
	        return this.name_prefix(options);
	    };

	    Chance.prototype.name_prefix = function (options) {
	        options = initOptions(options, { gender: "all" });
	        return options.full ? this.pick(this.name_prefixes(options.gender)).name : this.pick(this.name_prefixes(options.gender)).abbreviation;
	    };
	    //Hungarian ID number
	    Chance.prototype.HIDN = function () {
	        //Hungarian ID nuber structure: XXXXXXYY (X=number,Y=Capital Latin letter)
	        var idn_pool = "0123456789";
	        var idn_chrs = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
	        var idn = "";
	        idn += this.string({ pool: idn_pool, length: 6 });
	        idn += this.string({ pool: idn_chrs, length: 2 });
	        return idn;
	    };

	    Chance.prototype.ssn = function (options) {
	        options = initOptions(options, { ssnFour: false, dashes: true });
	        var ssn_pool = "1234567890",
	            ssn,
	            dash = options.dashes ? '-' : '';

	        if (!options.ssnFour) {
	            ssn = this.string({ pool: ssn_pool, length: 3 }) + dash + this.string({ pool: ssn_pool, length: 2 }) + dash + this.string({ pool: ssn_pool, length: 4 });
	        } else {
	            ssn = this.string({ pool: ssn_pool, length: 4 });
	        }
	        return ssn;
	    };

	    // Return the list of available name suffixes
	    // @todo introduce internationalization
	    Chance.prototype.name_suffixes = function () {
	        var suffixes = [{ name: 'Doctor of Osteopathic Medicine', abbreviation: 'D.O.' }, { name: 'Doctor of Philosophy', abbreviation: 'Ph.D.' }, { name: 'Esquire', abbreviation: 'Esq.' }, { name: 'Junior', abbreviation: 'Jr.' }, { name: 'Juris Doctor', abbreviation: 'J.D.' }, { name: 'Master of Arts', abbreviation: 'M.A.' }, { name: 'Master of Business Administration', abbreviation: 'M.B.A.' }, { name: 'Master of Science', abbreviation: 'M.S.' }, { name: 'Medical Doctor', abbreviation: 'M.D.' }, { name: 'Senior', abbreviation: 'Sr.' }, { name: 'The Third', abbreviation: 'III' }, { name: 'The Fourth', abbreviation: 'IV' }, { name: 'Bachelor of Engineering', abbreviation: 'B.E' }, { name: 'Bachelor of Technology', abbreviation: 'B.TECH' }];
	        return suffixes;
	    };

	    // Alias for name_suffix
	    Chance.prototype.suffix = function (options) {
	        return this.name_suffix(options);
	    };

	    Chance.prototype.name_suffix = function (options) {
	        options = initOptions(options);
	        return options.full ? this.pick(this.name_suffixes()).name : this.pick(this.name_suffixes()).abbreviation;
	    };

	    Chance.prototype.nationalities = function () {
	        return this.get("nationalities");
	    };

	    // Generate random nationality based on json list
	    Chance.prototype.nationality = function () {
	        var nationality = this.pick(this.nationalities());
	        return nationality.name;
	    };

	    // -- End Person --

	    // -- Mobile --
	    // Android GCM Registration ID
	    Chance.prototype.android_id = function () {
	        return "APA91" + this.string({ pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_", length: 178 });
	    };

	    // Apple Push Token
	    Chance.prototype.apple_token = function () {
	        return this.string({ pool: "abcdef1234567890", length: 64 });
	    };

	    // Windows Phone 8 ANID2
	    Chance.prototype.wp8_anid2 = function () {
	        return base64(this.hash({ length: 32 }));
	    };

	    // Windows Phone 7 ANID
	    Chance.prototype.wp7_anid = function () {
	        return 'A=' + this.guid().replace(/-/g, '').toUpperCase() + '&E=' + this.hash({ length: 3 }) + '&W=' + this.integer({ min: 0, max: 9 });
	    };

	    // BlackBerry Device PIN
	    Chance.prototype.bb_pin = function () {
	        return this.hash({ length: 8 });
	    };

	    // -- End Mobile --

	    // -- Web --
	    Chance.prototype.avatar = function (options) {
	        var url = null;
	        var URL_BASE = '//www.gravatar.com/avatar/';
	        var PROTOCOLS = {
	            http: 'http',
	            https: 'https'
	        };
	        var FILE_TYPES = {
	            bmp: 'bmp',
	            gif: 'gif',
	            jpg: 'jpg',
	            png: 'png'
	        };
	        var FALLBACKS = {
	            '404': '404', // Return 404 if not found
	            mm: 'mm', // Mystery man
	            identicon: 'identicon', // Geometric pattern based on hash
	            monsterid: 'monsterid', // A generated monster icon
	            wavatar: 'wavatar', // A generated face
	            retro: 'retro', // 8-bit icon
	            blank: 'blank' // A transparent png
	        };
	        var RATINGS = {
	            g: 'g',
	            pg: 'pg',
	            r: 'r',
	            x: 'x'
	        };
	        var opts = {
	            protocol: null,
	            email: null,
	            fileExtension: null,
	            size: null,
	            fallback: null,
	            rating: null
	        };

	        if (!options) {
	            // Set to a random email
	            opts.email = this.email();
	            options = {};
	        } else if (typeof options === 'string') {
	            opts.email = options;
	            options = {};
	        } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
	            return null;
	        } else if (options.constructor === 'Array') {
	            return null;
	        }

	        opts = initOptions(options, opts);

	        if (!opts.email) {
	            // Set to a random email
	            opts.email = this.email();
	        }

	        // Safe checking for params
	        opts.protocol = PROTOCOLS[opts.protocol] ? opts.protocol + ':' : '';
	        opts.size = parseInt(opts.size, 0) ? opts.size : '';
	        opts.rating = RATINGS[opts.rating] ? opts.rating : '';
	        opts.fallback = FALLBACKS[opts.fallback] ? opts.fallback : '';
	        opts.fileExtension = FILE_TYPES[opts.fileExtension] ? opts.fileExtension : '';

	        url = opts.protocol + URL_BASE + this.bimd5.md5(opts.email) + (opts.fileExtension ? '.' + opts.fileExtension : '') + (opts.size || opts.rating || opts.fallback ? '?' : '') + (opts.size ? '&s=' + opts.size.toString() : '') + (opts.rating ? '&r=' + opts.rating : '') + (opts.fallback ? '&d=' + opts.fallback : '');

	        return url;
	    };

	    /**
	     * #Description:
	     * ===============================================
	     * Generate random color value base on color type:
	     * -> hex
	     * -> rgb
	     * -> rgba
	     * -> 0x
	     * -> named color
	     *
	     * #Examples:
	     * ===============================================
	     * * Geerate random hex color
	     * chance.color() => '#79c157' / 'rgb(110,52,164)' / '0x67ae0b' / '#e2e2e2' / '#29CFA7'
	     *
	     * * Generate Hex based color value
	     * chance.color({format: 'hex'})    => '#d67118'
	     *
	     * * Generate simple rgb value
	     * chance.color({format: 'rgb'})    => 'rgb(110,52,164)'
	     *
	     * * Generate Ox based color value
	     * chance.color({format: '0x'})     => '0x67ae0b'
	     *
	     * * Generate graiscale based value
	     * chance.color({grayscale: true})  => '#e2e2e2'
	     *
	     * * Return valide color name
	     * chance.color({format: 'name'})   => 'red'
	     *
	     * * Make color uppercase
	     * chance.color({casing: 'upper'})  => '#29CFA7'
	     *
	     * @param  [object] options
	     * @return [string] color value
	     */
	    Chance.prototype.color = function (options) {

	        function gray(value, delimiter) {
	            return [value, value, value].join(delimiter || '');
	        }

	        function rgb(hasAlpha) {

	            var rgbValue = hasAlpha ? 'rgba' : 'rgb';
	            var alphaChanal = hasAlpha ? ',' + this.floating({ min: 0, max: 1 }) : "";
	            var colorValue = isGrayscale ? gray(this.natural({ max: 255 }), ',') : this.natural({ max: 255 }) + ',' + this.natural({ max: 255 }) + ',' + this.natural({ max: 255 });

	            return rgbValue + '(' + colorValue + alphaChanal + ')';
	        }

	        function hex(start, end, withHash) {

	            var simbol = withHash ? "#" : "";
	            var expression = isGrayscale ? gray(this.hash({ length: start })) : this.hash({ length: end });
	            return simbol + expression;
	        }

	        options = initOptions(options, {
	            format: this.pick(['hex', 'shorthex', 'rgb', 'rgba', '0x', 'name']),
	            grayscale: false,
	            casing: 'lower'
	        });

	        var isGrayscale = options.grayscale;
	        var colorValue;

	        if (options.format === 'hex') {
	            colorValue = hex.call(this, 2, 6, true);
	        } else if (options.format === 'shorthex') {
	            colorValue = hex.call(this, 1, 3, true);
	        } else if (options.format === 'rgb') {
	            colorValue = rgb.call(this, false);
	        } else if (options.format === 'rgba') {
	            colorValue = rgb.call(this, true);
	        } else if (options.format === '0x') {
	            colorValue = '0x' + hex.call(this, 2, 6);
	        } else if (options.format === 'name') {
	            return this.pick(this.get("colorNames"));
	        } else {
	            throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".');
	        }

	        if (options.casing === 'upper') {
	            colorValue = colorValue.toUpperCase();
	        }

	        return colorValue;
	    };

	    Chance.prototype.domain = function (options) {
	        options = initOptions(options);
	        return this.word() + '.' + (options.tld || this.tld());
	    };

	    Chance.prototype.email = function (options) {
	        options = initOptions(options);
	        return this.word({ length: options.length }) + '@' + (options.domain || this.domain());
	    };

	    Chance.prototype.fbid = function () {
	        return parseInt('10000' + this.natural({ max: 100000000000 }), 10);
	    };

	    Chance.prototype.google_analytics = function () {
	        var account = this.pad(this.natural({ max: 999999 }), 6);
	        var property = this.pad(this.natural({ max: 99 }), 2);

	        return 'UA-' + account + '-' + property;
	    };

	    Chance.prototype.hashtag = function () {
	        return '#' + this.word();
	    };

	    Chance.prototype.ip = function () {
	        // Todo: This could return some reserved IPs. See http://vq.io/137dgYy
	        // this should probably be updated to account for that rare as it may be
	        return this.natural({ min: 1, max: 254 }) + '.' + this.natural({ max: 255 }) + '.' + this.natural({ max: 255 }) + '.' + this.natural({ min: 1, max: 254 });
	    };

	    Chance.prototype.ipv6 = function () {
	        var ip_addr = this.n(this.hash, 8, { length: 4 });

	        return ip_addr.join(":");
	    };

	    Chance.prototype.klout = function () {
	        return this.natural({ min: 1, max: 99 });
	    };

	    Chance.prototype.semver = function (options) {
	        options = initOptions(options, { include_prerelease: true });

	        var range = this.pickone(["^", "~", "<", ">", "<=", ">=", "="]);
	        if (options.range) {
	            range = options.range;
	        }

	        var prerelease = "";
	        if (options.include_prerelease) {
	            prerelease = this.weighted(["", "-dev", "-beta", "-alpha"], [50, 10, 5, 1]);
	        }
	        return range + this.rpg('3d10').join('.') + prerelease;
	    };

	    Chance.prototype.tlds = function () {
	        return ['com', 'org', 'edu', 'gov', 'co.uk', 'net', 'io', 'ac', 'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'an', 'ao', 'aq', 'ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh', 'er', 'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'su', 'sv', 'sx', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tp', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'uk', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws', 'ye', 'yt', 'za', 'zm', 'zw'];
	    };

	    Chance.prototype.tld = function () {
	        return this.pick(this.tlds());
	    };

	    Chance.prototype.twitter = function () {
	        return '@' + this.word();
	    };

	    Chance.prototype.url = function (options) {
	        options = initOptions(options, { protocol: "http", domain: this.domain(options), domain_prefix: "", path: this.word(), extensions: [] });

	        var extension = options.extensions.length > 0 ? "." + this.pick(options.extensions) : "";
	        var domain = options.domain_prefix ? options.domain_prefix + "." + options.domain : options.domain;

	        return options.protocol + "://" + domain + "/" + options.path + extension;
	    };

	    // -- End Web --

	    // -- Location --

	    Chance.prototype.address = function (options) {
	        options = initOptions(options);
	        return this.natural({ min: 5, max: 2000 }) + ' ' + this.street(options);
	    };

	    Chance.prototype.altitude = function (options) {
	        options = initOptions(options, { fixed: 5, min: 0, max: 8848 });
	        return this.floating({
	            min: options.min,
	            max: options.max,
	            fixed: options.fixed
	        });
	    };

	    Chance.prototype.areacode = function (options) {
	        options = initOptions(options, { parens: true });
	        // Don't want area codes to start with 1, or have a 9 as the second digit
	        var areacode = this.natural({ min: 2, max: 9 }).toString() + this.natural({ min: 0, max: 8 }).toString() + this.natural({ min: 0, max: 9 }).toString();

	        return options.parens ? '(' + areacode + ')' : areacode;
	    };

	    Chance.prototype.city = function () {
	        return this.capitalize(this.word({ syllables: 3 }));
	    };

	    Chance.prototype.coordinates = function (options) {
	        return this.latitude(options) + ', ' + this.longitude(options);
	    };

	    Chance.prototype.countries = function () {
	        return this.get("countries");
	    };

	    Chance.prototype.country = function (options) {
	        options = initOptions(options);
	        var country = this.pick(this.countries());
	        return options.full ? country.name : country.abbreviation;
	    };

	    Chance.prototype.depth = function (options) {
	        options = initOptions(options, { fixed: 5, min: -10994, max: 0 });
	        return this.floating({
	            min: options.min,
	            max: options.max,
	            fixed: options.fixed
	        });
	    };

	    Chance.prototype.geohash = function (options) {
	        options = initOptions(options, { length: 7 });
	        return this.string({ length: options.length, pool: '0123456789bcdefghjkmnpqrstuvwxyz' });
	    };

	    Chance.prototype.geojson = function (options) {
	        return this.latitude(options) + ', ' + this.longitude(options) + ', ' + this.altitude(options);
	    };

	    Chance.prototype.latitude = function (options) {
	        options = initOptions(options, { fixed: 5, min: -90, max: 90 });
	        return this.floating({ min: options.min, max: options.max, fixed: options.fixed });
	    };

	    Chance.prototype.longitude = function (options) {
	        options = initOptions(options, { fixed: 5, min: -180, max: 180 });
	        return this.floating({ min: options.min, max: options.max, fixed: options.fixed });
	    };

	    Chance.prototype.phone = function (options) {
	        var self = this,
	            numPick,
	            ukNum = function ukNum(parts) {
	            var section = [];
	            //fills the section part of the phone number with random numbers.
	            parts.sections.forEach(function (n) {
	                section.push(self.string({ pool: '0123456789', length: n }));
	            });
	            return parts.area + section.join(' ');
	        };
	        options = initOptions(options, {
	            formatted: true,
	            country: 'us',
	            mobile: false
	        });
	        if (!options.formatted) {
	            options.parens = false;
	        }
	        var phone;
	        switch (options.country) {
	            case 'fr':
	                if (!options.mobile) {
	                    numPick = this.pick([
	                    // Valid zone and département codes.
	                    '01' + this.pick(['30', '34', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '53', '55', '56', '58', '60', '64', '69', '70', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83']) + self.string({ pool: '0123456789', length: 6 }), '02' + this.pick(['14', '18', '22', '23', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '40', '41', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '56', '57', '61', '62', '69', '72', '76', '77', '78', '85', '90', '96', '97', '98', '99']) + self.string({ pool: '0123456789', length: 6 }), '03' + this.pick(['10', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '39', '44', '45', '51', '52', '54', '55', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90']) + self.string({ pool: '0123456789', length: 6 }), '04' + this.pick(['11', '13', '15', '20', '22', '26', '27', '30', '32', '34', '37', '42', '43', '44', '50', '56', '57', '63', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '88', '89', '90', '91', '92', '93', '94', '95', '97', '98']) + self.string({ pool: '0123456789', length: 6 }), '05' + this.pick(['08', '16', '17', '19', '24', '31', '32', '33', '34', '35', '40', '45', '46', '47', '49', '53', '55', '56', '57', '58', '59', '61', '62', '63', '64', '65', '67', '79', '81', '82', '86', '87', '90', '94']) + self.string({ pool: '0123456789', length: 6 }), '09' + self.string({ pool: '0123456789', length: 8 })]);
	                    phone = options.formatted ? numPick.match(/../g).join(' ') : numPick;
	                } else {
	                    numPick = this.pick(['06', '07']) + self.string({ pool: '0123456789', length: 8 });
	                    phone = options.formatted ? numPick.match(/../g).join(' ') : numPick;
	                }
	                break;
	            case 'uk':
	                if (!options.mobile) {
	                    numPick = this.pick([
	                    //valid area codes of major cities/counties followed by random numbers in required format.
	                    { area: '01' + this.character({ pool: '234569' }) + '1 ', sections: [3, 4] }, { area: '020 ' + this.character({ pool: '378' }), sections: [3, 4] }, { area: '023 ' + this.character({ pool: '89' }), sections: [3, 4] }, { area: '024 7', sections: [3, 4] }, { area: '028 ' + this.pick(['25', '28', '37', '71', '82', '90', '92', '95']), sections: [2, 4] }, { area: '012' + this.pick(['04', '08', '54', '76', '97', '98']) + ' ', sections: [6] }, { area: '013' + this.pick(['63', '64', '84', '86']) + ' ', sections: [6] }, { area: '014' + this.pick(['04', '20', '60', '61', '80', '88']) + ' ', sections: [6] }, { area: '015' + this.pick(['24', '27', '62', '66']) + ' ', sections: [6] }, { area: '016' + this.pick(['06', '29', '35', '47', '59', '95']) + ' ', sections: [6] }, { area: '017' + this.pick(['26', '44', '50', '68']) + ' ', sections: [6] }, { area: '018' + this.pick(['27', '37', '84', '97']) + ' ', sections: [6] }, { area: '019' + this.pick(['00', '05', '35', '46', '49', '63', '95']) + ' ', sections: [6] }]);
	                    phone = options.formatted ? ukNum(numPick) : ukNum(numPick).replace(' ', '', 'g');
	                } else {
	                    numPick = this.pick([{ area: '07' + this.pick(['4', '5', '7', '8', '9']), sections: [2, 6] }, { area: '07624 ', sections: [6] }]);
	                    phone = options.formatted ? ukNum(numPick) : ukNum(numPick).replace(' ', '');
	                }
	                break;
	            case 'us':
	                var areacode = this.areacode(options).toString();
	                var exchange = this.natural({ min: 2, max: 9 }).toString() + this.natural({ min: 0, max: 9 }).toString() + this.natural({ min: 0, max: 9 }).toString();
	                var subscriber = this.natural({ min: 1000, max: 9999 }).toString(); // this could be random [0-9]{4}
	                phone = options.formatted ? areacode + ' ' + exchange + '-' + subscriber : areacode + exchange + subscriber;
	        }
	        return phone;
	    };

	    Chance.prototype.postal = function () {
	        // Postal District
	        var pd = this.character({ pool: "XVTSRPNKLMHJGECBA" });
	        // Forward Sortation Area (FSA)
	        var fsa = pd + this.natural({ max: 9 }) + this.character({ alpha: true, casing: "upper" });
	        // Local Delivery Unut (LDU)
	        var ldu = this.natural({ max: 9 }) + this.character({ alpha: true, casing: "upper" }) + this.natural({ max: 9 });

	        return fsa + " " + ldu;
	    };

	    Chance.prototype.counties = function (options) {
	        options = initOptions(options, { country: 'uk' });
	        return this.get("counties")[options.country.toLowerCase()];
	    };

	    Chance.prototype.county = function (options) {
	        return this.pick(this.counties(options)).name;
	    };

	    Chance.prototype.provinces = function (options) {
	        options = initOptions(options, { country: 'ca' });
	        return this.get("provinces")[options.country.toLowerCase()];
	    };

	    Chance.prototype.province = function (options) {
	        return options && options.full ? this.pick(this.provinces(options)).name : this.pick(this.provinces(options)).abbreviation;
	    };

	    Chance.prototype.state = function (options) {
	        return options && options.full ? this.pick(this.states(options)).name : this.pick(this.states(options)).abbreviation;
	    };

	    Chance.prototype.states = function (options) {
	        options = initOptions(options, { country: 'us', us_states_and_dc: true });

	        var states;

	        switch (options.country.toLowerCase()) {
	            case 'us':
	                var us_states_and_dc = this.get("us_states_and_dc"),
	                    territories = this.get("territories"),
	                    armed_forces = this.get("armed_forces");

	                states = [];

	                if (options.us_states_and_dc) {
	                    states = states.concat(us_states_and_dc);
	                }
	                if (options.territories) {
	                    states = states.concat(territories);
	                }
	                if (options.armed_forces) {
	                    states = states.concat(armed_forces);
	                }
	                break;
	            case 'it':
	                states = this.get("country_regions")[options.country.toLowerCase()];
	                break;
	            case 'uk':
	                states = this.get("counties")[options.country.toLowerCase()];
	                break;
	        }

	        return states;
	    };

	    Chance.prototype.street = function (options) {
	        options = initOptions(options, { country: 'us', syllables: 2 });
	        var street;

	        switch (options.country.toLowerCase()) {
	            case 'us':
	                street = this.word({ syllables: options.syllables });
	                street = this.capitalize(street);
	                street += ' ';
	                street += options.short_suffix ? this.street_suffix(options).abbreviation : this.street_suffix(options).name;
	                break;
	            case 'it':
	                street = this.word({ syllables: options.syllables });
	                street = this.capitalize(street);
	                street = (options.short_suffix ? this.street_suffix(options).abbreviation : this.street_suffix(options).name) + " " + street;
	                break;
	        }
	        return street;
	    };

	    Chance.prototype.street_suffix = function (options) {
	        options = initOptions(options, { country: 'us' });
	        return this.pick(this.street_suffixes(options));
	    };

	    Chance.prototype.street_suffixes = function (options) {
	        options = initOptions(options, { country: 'us' });
	        // These are the most common suffixes.
	        return this.get("street_suffixes")[options.country.toLowerCase()];
	    };

	    // Note: only returning US zip codes, internationalization will be a whole
	    // other beast to tackle at some point.
	    Chance.prototype.zip = function (options) {
	        var zip = this.n(this.natural, 5, { max: 9 });

	        if (options && options.plusfour === true) {
	            zip.push('-');
	            zip = zip.concat(this.n(this.natural, 4, { max: 9 }));
	        }

	        return zip.join("");
	    };

	    // -- End Location --

	    // -- Time

	    Chance.prototype.ampm = function () {
	        return this.bool() ? 'am' : 'pm';
	    };

	    Chance.prototype.date = function (options) {
	        var date_string, date;

	        // If interval is specified we ignore preset
	        if (options && (options.min || options.max)) {
	            options = initOptions(options, {
	                american: true,
	                string: false
	            });
	            var min = typeof options.min !== "undefined" ? options.min.getTime() : 1;
	            // 100,000,000 days measured relative to midnight at the beginning of 01 January, 1970 UTC. http://es5.github.io/#x15.9.1.1
	            var max = typeof options.max !== "undefined" ? options.max.getTime() : 8640000000000000;

	            date = new Date(this.integer({ min: min, max: max }));
	        } else {
	            var m = this.month({ raw: true });
	            var daysInMonth = m.days;

	            if (options && options.month) {
	                // Mod 12 to allow months outside range of 0-11 (not encouraged, but also not prevented).
	                daysInMonth = this.get('months')[(options.month % 12 + 12) % 12].days;
	            }

	            options = initOptions(options, {
	                year: parseInt(this.year(), 10),
	                // Necessary to subtract 1 because Date() 0-indexes month but not day or year
	                // for some reason.
	                month: m.numeric - 1,
	                day: this.natural({ min: 1, max: daysInMonth }),
	                hour: this.hour({ twentyfour: true }),
	                minute: this.minute(),
	                second: this.second(),
	                millisecond: this.millisecond(),
	                american: true,
	                string: false
	            });

	            date = new Date(options.year, options.month, options.day, options.hour, options.minute, options.second, options.millisecond);
	        }

	        if (options.american) {
	            // Adding 1 to the month is necessary because Date() 0-indexes
	            // months but not day for some odd reason.
	            date_string = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
	        } else {
	            date_string = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	        }

	        return options.string ? date_string : date;
	    };

	    Chance.prototype.hammertime = function (options) {
	        return this.date(options).getTime();
	    };

	    Chance.prototype.hour = function (options) {
	        options = initOptions(options, {
	            min: options && options.twentyfour ? 0 : 1,
	            max: options && options.twentyfour ? 23 : 12
	        });

	        testRange(options.min < 0, "Chance: Min cannot be less than 0.");
	        testRange(options.twentyfour && options.max > 23, "Chance: Max cannot be greater than 23 for twentyfour option.");
	        testRange(!options.twentyfour && options.max > 12, "Chance: Max cannot be greater than 12.");
	        testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");

	        return this.natural({ min: options.min, max: options.max });
	    };

	    Chance.prototype.millisecond = function () {
	        return this.natural({ max: 999 });
	    };

	    Chance.prototype.minute = Chance.prototype.second = function (options) {
	        options = initOptions(options, { min: 0, max: 59 });

	        testRange(options.min < 0, "Chance: Min cannot be less than 0.");
	        testRange(options.max > 59, "Chance: Max cannot be greater than 59.");
	        testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");

	        return this.natural({ min: options.min, max: options.max });
	    };

	    Chance.prototype.month = function (options) {
	        options = initOptions(options, { min: 1, max: 12 });

	        testRange(options.min < 1, "Chance: Min cannot be less than 1.");
	        testRange(options.max > 12, "Chance: Max cannot be greater than 12.");
	        testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");

	        var month = this.pick(this.months().slice(options.min - 1, options.max));
	        return options.raw ? month : month.name;
	    };

	    Chance.prototype.months = function () {
	        return this.get("months");
	    };

	    Chance.prototype.second = function () {
	        return this.natural({ max: 59 });
	    };

	    Chance.prototype.timestamp = function () {
	        return this.natural({ min: 1, max: parseInt(new Date().getTime() / 1000, 10) });
	    };

	    Chance.prototype.weekday = function (options) {
	        options = initOptions(options, { weekday_only: false });
	        var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	        if (!options.weekday_only) {
	            weekdays.push("Saturday");
	            weekdays.push("Sunday");
	        }
	        return this.pickone(weekdays);
	    };

	    Chance.prototype.year = function (options) {
	        // Default to current year as min if none specified
	        options = initOptions(options, { min: new Date().getFullYear() });

	        // Default to one century after current year as max if none specified
	        options.max = typeof options.max !== "undefined" ? options.max : options.min + 100;

	        return this.natural(options).toString();
	    };

	    // -- End Time

	    // -- Finance --

	    Chance.prototype.cc = function (options) {
	        options = initOptions(options);

	        var type, number, to_generate;

	        type = options.type ? this.cc_type({ name: options.type, raw: true }) : this.cc_type({ raw: true });

	        number = type.prefix.split("");
	        to_generate = type.length - type.prefix.length - 1;

	        // Generates n - 1 digits
	        number = number.concat(this.n(this.integer, to_generate, { min: 0, max: 9 }));

	        // Generates the last digit according to Luhn algorithm
	        number.push(this.luhn_calculate(number.join("")));

	        return number.join("");
	    };

	    Chance.prototype.cc_types = function () {
	        // http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
	        return this.get("cc_types");
	    };

	    Chance.prototype.cc_type = function (options) {
	        options = initOptions(options);
	        var types = this.cc_types(),
	            type = null;

	        if (options.name) {
	            for (var i = 0; i < types.length; i++) {
	                // Accept either name or short_name to specify card type
	                if (types[i].name === options.name || types[i].short_name === options.name) {
	                    type = types[i];
	                    break;
	                }
	            }
	            if (type === null) {
	                throw new RangeError("Credit card type '" + options.name + "'' is not supported");
	            }
	        } else {
	            type = this.pick(types);
	        }

	        return options.raw ? type : type.name;
	    };

	    //return all world currency by ISO 4217
	    Chance.prototype.currency_types = function () {
	        return this.get("currency_types");
	    };

	    //return random world currency by ISO 4217
	    Chance.prototype.currency = function () {
	        return this.pick(this.currency_types());
	    };

	    //return all timezones availabel
	    Chance.prototype.timezones = function () {
	        return this.get("timezones");
	    };

	    //return random timezone
	    Chance.prototype.timezone = function () {
	        return this.pick(this.timezones());
	    };

	    //Return random correct currency exchange pair (e.g. EUR/USD) or array of currency code
	    Chance.prototype.currency_pair = function (returnAsString) {
	        var currencies = this.unique(this.currency, 2, {
	            comparator: function comparator(arr, val) {

	                return arr.reduce(function (acc, item) {
	                    // If a match has been found, short circuit check and just return
	                    return acc || item.code === val.code;
	                }, false);
	            }
	        });

	        if (returnAsString) {
	            return currencies[0].code + '/' + currencies[1].code;
	        } else {
	            return currencies;
	        }
	    };

	    Chance.prototype.dollar = function (options) {
	        // By default, a somewhat more sane max for dollar than all available numbers
	        options = initOptions(options, { max: 10000, min: 0 });

	        var dollar = this.floating({ min: options.min, max: options.max, fixed: 2 }).toString(),
	            cents = dollar.split('.')[1];

	        if (cents === undefined) {
	            dollar += '.00';
	        } else if (cents.length < 2) {
	            dollar = dollar + '0';
	        }

	        if (dollar < 0) {
	            return '-$' + dollar.replace('-', '');
	        } else {
	            return '$' + dollar;
	        }
	    };

	    Chance.prototype.euro = function (options) {
	        return Number(this.dollar(options).replace("$", "")).toLocaleString() + "€";
	    };

	    Chance.prototype.exp = function (options) {
	        options = initOptions(options);
	        var exp = {};

	        exp.year = this.exp_year();

	        // If the year is this year, need to ensure month is greater than the
	        // current month or this expiration will not be valid
	        if (exp.year === new Date().getFullYear().toString()) {
	            exp.month = this.exp_month({ future: true });
	        } else {
	            exp.month = this.exp_month();
	        }

	        return options.raw ? exp : exp.month + '/' + exp.year;
	    };

	    Chance.prototype.exp_month = function (options) {
	        options = initOptions(options);
	        var month,
	            month_int,

	        // Date object months are 0 indexed
	        curMonth = new Date().getMonth() + 1;

	        if (options.future && curMonth !== 12) {
	            do {
	                month = this.month({ raw: true }).numeric;
	                month_int = parseInt(month, 10);
	            } while (month_int <= curMonth);
	        } else {
	            month = this.month({ raw: true }).numeric;
	        }

	        return month;
	    };

	    Chance.prototype.exp_year = function () {
	        var curMonth = new Date().getMonth() + 1,
	            curYear = new Date().getFullYear();

	        return this.year({ min: curMonth === 12 ? curYear + 1 : curYear, max: curYear + 10 });
	    };

	    Chance.prototype.vat = function (options) {
	        options = initOptions(options, { country: 'it' });
	        switch (options.country.toLowerCase()) {
	            case 'it':
	                return this.it_vat();
	        }
	    };

	    // -- End Finance

	    // -- Regional

	    Chance.prototype.it_vat = function () {
	        var it_vat = this.natural({ min: 1, max: 1800000 });

	        it_vat = this.pad(it_vat, 7) + this.pad(this.pick(this.provinces({ country: 'it' })).code, 3);
	        return it_vat + this.luhn_calculate(it_vat);
	    };

	    /*
	     * this generator is written following the official algorithm
	     * all data can be passed explicitely or randomized by calling chance.cf() without options
	     * the code does not check that the input data is valid (it goes beyond the scope of the generator)
	     *
	     * @param  [Object] options = { first: first name,
	     *                              last: last name,
	     *                              gender: female|male,
	                                    birthday: JavaScript date object,
	                                    city: string(4), 1 letter + 3 numbers
	                                   }
	     * @return [string] codice fiscale
	     *
	    */
	    Chance.prototype.cf = function (options) {
	        options = options || {};
	        var gender = !!options.gender ? options.gender : this.gender(),
	            first = !!options.first ? options.first : this.first({ gender: gender, nationality: 'it' }),
	            last = !!options.last ? options.last : this.last({ nationality: 'it' }),
	            birthday = !!options.birthday ? options.birthday : this.birthday(),
	            city = !!options.city ? options.city : this.pickone(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'Z']) + this.pad(this.natural({ max: 999 }), 3),
	            cf = [],
	            name_generator = function name_generator(name, isLast) {
	            var temp,
	                return_value = [];

	            if (name.length < 3) {
	                return_value = name.split("").concat("XXX".split("")).splice(0, 3);
	            } else {
	                temp = name.toUpperCase().split('').map(function (c) {
	                    return "BCDFGHJKLMNPRSTVWZ".indexOf(c) !== -1 ? c : undefined;
	                }).join('');
	                if (temp.length > 3) {
	                    if (isLast) {
	                        temp = temp.substr(0, 3);
	                    } else {
	                        temp = temp[0] + temp.substr(2, 2);
	                    }
	                }
	                if (temp.length < 3) {
	                    return_value = temp;
	                    temp = name.toUpperCase().split('').map(function (c) {
	                        return "AEIOU".indexOf(c) !== -1 ? c : undefined;
	                    }).join('').substr(0, 3 - return_value.length);
	                }
	                return_value = return_value + temp;
	            }

	            return return_value;
	        },
	            date_generator = function date_generator(birthday, gender, that) {
	            var lettermonths = ['A', 'B', 'C', 'D', 'E', 'H', 'L', 'M', 'P', 'R', 'S', 'T'];

	            return birthday.getFullYear().toString().substr(2) + lettermonths[birthday.getMonth()] + that.pad(birthday.getDate() + (gender.toLowerCase() === "female" ? 40 : 0), 2);
	        },
	            checkdigit_generator = function checkdigit_generator(cf) {
	            var range1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	                range2 = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ",
	                evens = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	                odds = "BAKPLCQDREVOSFTGUHMINJWZYX",
	                digit = 0;

	            for (var i = 0; i < 15; i++) {
	                if (i % 2 !== 0) {
	                    digit += evens.indexOf(range2[range1.indexOf(cf[i])]);
	                } else {
	                    digit += odds.indexOf(range2[range1.indexOf(cf[i])]);
	                }
	            }
	            return evens[digit % 26];
	        };

	        cf = cf.concat(name_generator(last, true), name_generator(first), date_generator(birthday, gender, this), city.toUpperCase().split("")).join("");
	        cf += checkdigit_generator(cf.toUpperCase(), this);

	        return cf.toUpperCase();
	    };

	    Chance.prototype.pl_pesel = function () {
	        var number = this.natural({ min: 1, max: 9999999999 });
	        var arr = this.pad(number, 10).split('');
	        for (var i = 0; i < arr.length; i++) {
	            arr[i] = parseInt(arr[i]);
	        }

	        var controlNumber = (1 * arr[0] + 3 * arr[1] + 7 * arr[2] + 9 * arr[3] + 1 * arr[4] + 3 * arr[5] + 7 * arr[6] + 9 * arr[7] + 1 * arr[8] + 3 * arr[9]) % 10;
	        if (controlNumber !== 0) {
	            controlNumber = 10 - controlNumber;
	        }

	        return arr.join('') + controlNumber;
	    };

	    Chance.prototype.pl_nip = function () {
	        var number = this.natural({ min: 1, max: 999999999 });
	        var arr = this.pad(number, 9).split('');
	        for (var i = 0; i < arr.length; i++) {
	            arr[i] = parseInt(arr[i]);
	        }

	        var controlNumber = (6 * arr[0] + 5 * arr[1] + 7 * arr[2] + 2 * arr[3] + 3 * arr[4] + 4 * arr[5] + 5 * arr[6] + 6 * arr[7] + 7 * arr[8]) % 11;
	        if (controlNumber === 10) {
	            return this.pl_nip();
	        }

	        return arr.join('') + controlNumber;
	    };

	    Chance.prototype.pl_regon = function () {
	        var number = this.natural({ min: 1, max: 99999999 });
	        var arr = this.pad(number, 8).split('');
	        for (var i = 0; i < arr.length; i++) {
	            arr[i] = parseInt(arr[i]);
	        }

	        var controlNumber = (8 * arr[0] + 9 * arr[1] + 2 * arr[2] + 3 * arr[3] + 4 * arr[4] + 5 * arr[5] + 6 * arr[6] + 7 * arr[7]) % 11;
	        if (controlNumber === 10) {
	            controlNumber = 0;
	        }

	        return arr.join('') + controlNumber;
	    };

	    // -- End Regional

	    // -- Miscellaneous --

	    // Dice - For all the board game geeks out there, myself included ;)
	    function diceFn(range) {
	        return function () {
	            return this.natural(range);
	        };
	    }
	    Chance.prototype.d4 = diceFn({ min: 1, max: 4 });
	    Chance.prototype.d6 = diceFn({ min: 1, max: 6 });
	    Chance.prototype.d8 = diceFn({ min: 1, max: 8 });
	    Chance.prototype.d10 = diceFn({ min: 1, max: 10 });
	    Chance.prototype.d12 = diceFn({ min: 1, max: 12 });
	    Chance.prototype.d20 = diceFn({ min: 1, max: 20 });
	    Chance.prototype.d30 = diceFn({ min: 1, max: 30 });
	    Chance.prototype.d100 = diceFn({ min: 1, max: 100 });

	    Chance.prototype.rpg = function (thrown, options) {
	        options = initOptions(options);
	        if (!thrown) {
	            throw new RangeError("A type of die roll must be included");
	        } else {
	            var bits = thrown.toLowerCase().split("d"),
	                rolls = [];

	            if (bits.length !== 2 || !parseInt(bits[0], 10) || !parseInt(bits[1], 10)) {
	                throw new Error("Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");
	            }
	            for (var i = bits[0]; i > 0; i--) {
	                rolls[i - 1] = this.natural({ min: 1, max: bits[1] });
	            }
	            return typeof options.sum !== 'undefined' && options.sum ? rolls.reduce(function (p, c) {
	                return p + c;
	            }) : rolls;
	        }
	    };

	    // Guid
	    Chance.prototype.guid = function (options) {
	        options = initOptions(options, { version: 5 });

	        var guid_pool = "abcdef1234567890",
	            variant_pool = "ab89",
	            guid = this.string({ pool: guid_pool, length: 8 }) + '-' + this.string({ pool: guid_pool, length: 4 }) + '-' +
	        // The Version
	        options.version + this.string({ pool: guid_pool, length: 3 }) + '-' +
	        // The Variant
	        this.string({ pool: variant_pool, length: 1 }) + this.string({ pool: guid_pool, length: 3 }) + '-' + this.string({ pool: guid_pool, length: 12 });
	        return guid;
	    };

	    // Hash
	    Chance.prototype.hash = function (options) {
	        options = initOptions(options, { length: 40, casing: 'lower' });
	        var pool = options.casing === 'upper' ? HEX_POOL.toUpperCase() : HEX_POOL;
	        return this.string({ pool: pool, length: options.length });
	    };

	    Chance.prototype.luhn_check = function (num) {
	        var str = num.toString();
	        var checkDigit = +str.substring(str.length - 1);
	        return checkDigit === this.luhn_calculate(+str.substring(0, str.length - 1));
	    };

	    Chance.prototype.luhn_calculate = function (num) {
	        var digits = num.toString().split("").reverse();
	        var sum = 0;
	        var digit;

	        for (var i = 0, l = digits.length; l > i; ++i) {
	            digit = +digits[i];
	            if (i % 2 === 0) {
	                digit *= 2;
	                if (digit > 9) {
	                    digit -= 9;
	                }
	            }
	            sum += digit;
	        }
	        return sum * 9 % 10;
	    };

	    // MD5 Hash
	    Chance.prototype.md5 = function (options) {
	        var opts = { str: '', key: null, raw: false };

	        if (!options) {
	            opts.str = this.string();
	            options = {};
	        } else if (typeof options === 'string') {
	            opts.str = options;
	            options = {};
	        } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
	            return null;
	        } else if (options.constructor === 'Array') {
	            return null;
	        }

	        opts = initOptions(options, opts);

	        if (!opts.str) {
	            throw new Error('A parameter is required to return an md5 hash.');
	        }

	        return this.bimd5.md5(opts.str, opts.key, opts.raw);
	    };

	    /**
	     * #Description:
	     * =====================================================
	     * Generate random file name with extention
	     *
	     * The argument provide extention type
	     * -> raster
	     * -> vector
	     * -> 3d
	     * -> document
	     *
	     * If noting is provided the function return random file name with random
	     * extention type of any kind
	     *
	     * The user can validate the file name length range
	     * If noting provided the generated file name is radom
	     *
	     * #Extention Pool :
	     * * Currently the supported extentions are
	     *  -> some of the most popular raster image extentions
	     *  -> some of the most popular vector image extentions
	     *  -> some of the most popular 3d image extentions
	     *  -> some of the most popular document extentions
	     *
	     * #Examples :
	     * =====================================================
	     *
	     * Return random file name with random extention. The file extention
	     * is provided by a predifined collection of extentions. More abouth the extention
	     * pool can be fond in #Extention Pool section
	     *
	     * chance.file()
	     * => dsfsdhjf.xml
	     *
	     * In order to generate a file name with sspecific length, specify the
	     * length property and integer value. The extention is going to be random
	     *
	     * chance.file({length : 10})
	     * => asrtineqos.pdf
	     *
	     * In order to geerate file with extention form some of the predifined groups
	     * of the extention pool just specify the extenton pool category in fileType property
	     *
	     * chance.file({fileType : 'raster'})
	     * => dshgssds.psd
	     *
	     * You can provide specific extention for your files
	     * chance.file({extention : 'html'})
	     * => djfsd.html
	     *
	     * Or you could pass custom collection of extentons bt array or by object
	     * chance.file({extentions : [...]})
	     * => dhgsdsd.psd
	     *
	     * chance.file({extentions : { key : [...], key : [...]}})
	     * => djsfksdjsd.xml
	     *
	     * @param  [collection] options
	     * @return [string]
	     *
	     */
	    Chance.prototype.file = function (options) {

	        var fileOptions = options || {};
	        var poolCollectionKey = "fileExtension";
	        var typeRange = Object.keys(this.get("fileExtension")); //['raster', 'vector', '3d', 'document'];
	        var fileName;
	        var fileExtention;

	        // Generate random file name
	        fileName = this.word({ length: fileOptions.length });

	        // Generate file by specific extention provided by the user
	        if (fileOptions.extention) {

	            fileExtention = fileOptions.extention;
	            return fileName + '.' + fileExtention;
	        }

	        // Generate file by specific axtention collection
	        if (fileOptions.extentions) {

	            if (Array.isArray(fileOptions.extentions)) {

	                fileExtention = this.pickone(fileOptions.extentions);
	                return fileName + '.' + fileExtention;
	            } else if (fileOptions.extentions.constructor === Object) {

	                var extentionObjectCollection = fileOptions.extentions;
	                var keys = Object.keys(extentionObjectCollection);

	                fileExtention = this.pickone(extentionObjectCollection[this.pickone(keys)]);
	                return fileName + '.' + fileExtention;
	            }

	            throw new Error("Expect collection of type Array or Object to be passed as an argument ");
	        }

	        // Generate file extention based on specific file type
	        if (fileOptions.fileType) {

	            var fileType = fileOptions.fileType;
	            if (typeRange.indexOf(fileType) !== -1) {

	                fileExtention = this.pickone(this.get(poolCollectionKey)[fileType]);
	                return fileName + '.' + fileExtention;
	            }

	            throw new Error("Expect file type value to be 'raster', 'vector', '3d' or 'document' ");
	        }

	        // Generate random file name if no extenton options are passed
	        fileExtention = this.pickone(this.get(poolCollectionKey)[this.pickone(typeRange)]);
	        return fileName + '.' + fileExtention;
	    };

	    var data = {

	        firstNames: {
	            "male": {
	                "en": ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "George", "Donald", "Anthony", "Paul", "Mark", "Edward", "Steven", "Kenneth", "Andrew", "Brian", "Joshua", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Frank", "Gary", "Ryan", "Nicholas", "Eric", "Stephen", "Jacob", "Larry", "Jonathan", "Scott", "Raymond", "Justin", "Brandon", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Henry", "Walter", "Dennis", "Jerry", "Alexander", "Peter", "Tyler", "Douglas", "Harold", "Aaron", "Jose", "Adam", "Arthur", "Zachary", "Carl", "Nathan", "Albert", "Kyle", "Lawrence", "Joe", "Willie", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Harry", "Ralph", "Sean", "Jesse", "Roy", "Louis", "Billy", "Austin", "Bruce", "Eugene", "Christian", "Bryan", "Wayne", "Russell", "Howard", "Fred", "Ethan", "Jordan", "Philip", "Alan", "Juan", "Randy", "Vincent", "Bobby", "Dylan", "Johnny", "Phillip", "Victor", "Clarence", "Ernest", "Martin", "Craig", "Stanley", "Shawn", "Travis", "Bradley", "Leonard", "Earl", "Gabriel", "Jimmy", "Francis", "Todd", "Noah", "Danny", "Dale", "Cody", "Carlos", "Allen", "Frederick", "Logan", "Curtis", "Alex", "Joel", "Luis", "Norman", "Marvin", "Glenn", "Tony", "Nathaniel", "Rodney", "Melvin", "Alfred", "Steve", "Cameron", "Chad", "Edwin", "Caleb", "Evan", "Antonio", "Lee", "Herbert", "Jeffery", "Isaac", "Derek", "Ricky", "Marcus", "Theodore", "Elijah", "Luke", "Jesus", "Eddie", "Troy", "Mike", "Dustin", "Ray", "Adrian", "Bernard", "Leroy", "Angel", "Randall", "Wesley", "Ian", "Jared", "Mason", "Hunter", "Calvin", "Oscar", "Clifford", "Jay", "Shane", "Ronnie", "Barry", "Lucas", "Corey", "Manuel", "Leo", "Tommy", "Warren", "Jackson", "Isaiah", "Connor", "Don", "Dean", "Jon", "Julian", "Miguel", "Bill", "Lloyd", "Charlie", "Mitchell", "Leon", "Jerome", "Darrell", "Jeremiah", "Alvin", "Brett", "Seth", "Floyd", "Jim", "Blake", "Micheal", "Gordon", "Trevor", "Lewis", "Erik", "Edgar", "Vernon", "Devin", "Gavin", "Jayden", "Chris", "Clyde", "Tom", "Derrick", "Mario", "Brent", "Marc", "Herman", "Chase", "Dominic", "Ricardo", "Franklin", "Maurice", "Max", "Aiden", "Owen", "Lester", "Gilbert", "Elmer", "Gene", "Francisco", "Glen", "Cory", "Garrett", "Clayton", "Sam", "Jorge", "Chester", "Alejandro", "Jeff", "Harvey", "Milton", "Cole", "Ivan", "Andre", "Duane", "Landon"],
	                // Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0163
	                "it": ["Adolfo", "Alberto", "Aldo", "Alessandro", "Alessio", "Alfredo", "Alvaro", "Andrea", "Angelo", "Angiolo", "Antonino", "Antonio", "Attilio", "Benito", "Bernardo", "Bruno", "Carlo", "Cesare", "Christian", "Claudio", "Corrado", "Cosimo", "Cristian", "Cristiano", "Daniele", "Dario", "David", "Davide", "Diego", "Dino", "Domenico", "Duccio", "Edoardo", "Elia", "Elio", "Emanuele", "Emiliano", "Emilio", "Enrico", "Enzo", "Ettore", "Fabio", "Fabrizio", "Federico", "Ferdinando", "Fernando", "Filippo", "Francesco", "Franco", "Gabriele", "Giacomo", "Giampaolo", "Giampiero", "Giancarlo", "Gianfranco", "Gianluca", "Gianmarco", "Gianni", "Gino", "Giorgio", "Giovanni", "Giuliano", "Giulio", "Giuseppe", "Graziano", "Gregorio", "Guido", "Iacopo", "Jacopo", "Lapo", "Leonardo", "Lorenzo", "Luca", "Luciano", "Luigi", "Manuel", "Marcello", "Marco", "Marino", "Mario", "Massimiliano", "Massimo", "Matteo", "Mattia", "Maurizio", "Mauro", "Michele", "Mirko", "Mohamed", "Nello", "Neri", "Niccolò", "Nicola", "Osvaldo", "Otello", "Paolo", "Pier Luigi", "Piero", "Pietro", "Raffaele", "Remo", "Renato", "Renzo", "Riccardo", "Roberto", "Rolando", "Romano", "Salvatore", "Samuele", "Sandro", "Sergio", "Silvano", "Simone", "Stefano", "Thomas", "Tommaso", "Ubaldo", "Ugo", "Umberto", "Valerio", "Valter", "Vasco", "Vincenzo", "Vittorio"]
	            },
	            "female": {
	                "en": ["Mary", "Emma", "Elizabeth", "Minnie", "Margaret", "Ida", "Alice", "Bertha", "Sarah", "Annie", "Clara", "Ella", "Florence", "Cora", "Martha", "Laura", "Nellie", "Grace", "Carrie", "Maude", "Mabel", "Bessie", "Jennie", "Gertrude", "Julia", "Hattie", "Edith", "Mattie", "Rose", "Catherine", "Lillian", "Ada", "Lillie", "Helen", "Jessie", "Louise", "Ethel", "Lula", "Myrtle", "Eva", "Frances", "Lena", "Lucy", "Edna", "Maggie", "Pearl", "Daisy", "Fannie", "Josephine", "Dora", "Rosa", "Katherine", "Agnes", "Marie", "Nora", "May", "Mamie", "Blanche", "Stella", "Ellen", "Nancy", "Effie", "Sallie", "Nettie", "Della", "Lizzie", "Flora", "Susie", "Maud", "Mae", "Etta", "Harriet", "Sadie", "Caroline", "Katie", "Lydia", "Elsie", "Kate", "Susan", "Mollie", "Alma", "Addie", "Georgia", "Eliza", "Lulu", "Nannie", "Lottie", "Amanda", "Belle", "Charlotte", "Rebecca", "Ruth", "Viola", "Olive", "Amelia", "Hannah", "Jane", "Virginia", "Emily", "Matilda", "Irene", "Kathryn", "Esther", "Willie", "Henrietta", "Ollie", "Amy", "Rachel", "Sara", "Estella", "Theresa", "Augusta", "Ora", "Pauline", "Josie", "Lola", "Sophia", "Leona", "Anne", "Mildred", "Ann", "Beulah", "Callie", "Lou", "Delia", "Eleanor", "Barbara", "Iva", "Louisa", "Maria", "Mayme", "Evelyn", "Estelle", "Nina", "Betty", "Marion", "Bettie", "Dorothy", "Luella", "Inez", "Lela", "Rosie", "Allie", "Millie", "Janie", "Cornelia", "Victoria", "Ruby", "Winifred", "Alta", "Celia", "Christine", "Beatrice", "Birdie", "Harriett", "Mable", "Myra", "Sophie", "Tillie", "Isabel", "Sylvia", "Carolyn", "Isabelle", "Leila", "Sally", "Ina", "Essie", "Bertie", "Nell", "Alberta", "Katharine", "Lora", "Rena", "Mina", "Rhoda", "Mathilda", "Abbie", "Eula", "Dollie", "Hettie", "Eunice", "Fanny", "Ola", "Lenora", "Adelaide", "Christina", "Lelia", "Nelle", "Sue", "Johanna", "Lilly", "Lucinda", "Minerva", "Lettie", "Roxie", "Cynthia", "Helena", "Hilda", "Hulda", "Bernice", "Genevieve", "Jean", "Cordelia", "Marian", "Francis", "Jeanette", "Adeline", "Gussie", "Leah", "Lois", "Lura", "Mittie", "Hallie", "Isabella", "Olga", "Phoebe", "Teresa", "Hester", "Lida", "Lina", "Winnie", "Claudia", "Marguerite", "Vera", "Cecelia", "Bess", "Emilie", "John", "Rosetta", "Verna", "Myrtie", "Cecilia", "Elva", "Olivia", "Ophelia", "Georgie", "Elnora", "Violet", "Adele", "Lily", "Linnie", "Loretta", "Madge", "Polly", "Virgie", "Eugenia", "Lucile", "Lucille", "Mabelle", "Rosalie"],
	                // Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0162
	                "it": ["Ada", "Adriana", "Alessandra", "Alessia", "Alice", "Angela", "Anna", "Anna Maria", "Annalisa", "Annita", "Annunziata", "Antonella", "Arianna", "Asia", "Assunta", "Aurora", "Barbara", "Beatrice", "Benedetta", "Bianca", "Bruna", "Camilla", "Carla", "Carlotta", "Carmela", "Carolina", "Caterina", "Catia", "Cecilia", "Chiara", "Cinzia", "Clara", "Claudia", "Costanza", "Cristina", "Daniela", "Debora", "Diletta", "Dina", "Donatella", "Elena", "Eleonora", "Elisa", "Elisabetta", "Emanuela", "Emma", "Eva", "Federica", "Fernanda", "Fiorella", "Fiorenza", "Flora", "Franca", "Francesca", "Gabriella", "Gaia", "Gemma", "Giada", "Gianna", "Gina", "Ginevra", "Giorgia", "Giovanna", "Giulia", "Giuliana", "Giuseppa", "Giuseppina", "Grazia", "Graziella", "Greta", "Ida", "Ilaria", "Ines", "Iolanda", "Irene", "Irma", "Isabella", "Jessica", "Laura", "Leda", "Letizia", "Licia", "Lidia", "Liliana", "Lina", "Linda", "Lisa", "Livia", "Loretta", "Luana", "Lucia", "Luciana", "Lucrezia", "Luisa", "Manuela", "Mara", "Marcella", "Margherita", "Maria", "Maria Cristina", "Maria Grazia", "Maria Luisa", "Maria Pia", "Maria Teresa", "Marina", "Marisa", "Marta", "Martina", "Marzia", "Matilde", "Melissa", "Michela", "Milena", "Mirella", "Monica", "Natalina", "Nella", "Nicoletta", "Noemi", "Olga", "Paola", "Patrizia", "Piera", "Pierina", "Raffaella", "Rebecca", "Renata", "Rina", "Rita", "Roberta", "Rosa", "Rosanna", "Rossana", "Rossella", "Sabrina", "Sandra", "Sara", "Serena", "Silvana", "Silvia", "Simona", "Simonetta", "Sofia", "Sonia", "Stefania", "Susanna", "Teresa", "Tina", "Tiziana", "Tosca", "Valentina", "Valeria", "Vanda", "Vanessa", "Vanna", "Vera", "Veronica", "Vilma", "Viola", "Virginia", "Vittoria"]
	            }
	        },

	        lastNames: {
	            "en": ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace', 'Woods', 'Cole', 'West', 'Jordan', 'Owens', 'Reynolds', 'Fisher', 'Ellis', 'Harrison', 'Gibson', 'McDonald', 'Cruz', 'Marshall', 'Ortiz', 'Gomez', 'Murray', 'Freeman', 'Wells', 'Webb', 'Simpson', 'Stevens', 'Tucker', 'Porter', 'Hunter', 'Hicks', 'Crawford', 'Henry', 'Boyd', 'Mason', 'Morales', 'Kennedy', 'Warren', 'Dixon', 'Ramos', 'Reyes', 'Burns', 'Gordon', 'Shaw', 'Holmes', 'Rice', 'Robertson', 'Hunt', 'Black', 'Daniels', 'Palmer', 'Mills', 'Nichols', 'Grant', 'Knight', 'Ferguson', 'Rose', 'Stone', 'Hawkins', 'Dunn', 'Perkins', 'Hudson', 'Spencer', 'Gardner', 'Stephens', 'Payne', 'Pierce', 'Berry', 'Matthews', 'Arnold', 'Wagner', 'Willis', 'Ray', 'Watkins', 'Olson', 'Carroll', 'Duncan', 'Snyder', 'Hart', 'Cunningham', 'Bradley', 'Lane', 'Andrews', 'Ruiz', 'Harper', 'Fox', 'Riley', 'Armstrong', 'Carpenter', 'Weaver', 'Greene', 'Lawrence', 'Elliott', 'Chavez', 'Sims', 'Austin', 'Peters', 'Kelley', 'Franklin', 'Lawson', 'Fields', 'Gutierrez', 'Ryan', 'Schmidt', 'Carr', 'Vasquez', 'Castillo', 'Wheeler', 'Chapman', 'Oliver', 'Montgomery', 'Richards', 'Williamson', 'Johnston', 'Banks', 'Meyer', 'Bishop', 'McCoy', 'Howell', 'Alvarez', 'Morrison', 'Hansen', 'Fernandez', 'Garza', 'Harvey', 'Little', 'Burton', 'Stanley', 'Nguyen', 'George', 'Jacobs', 'Reid', 'Kim', 'Fuller', 'Lynch', 'Dean', 'Gilbert', 'Garrett', 'Romero', 'Welch', 'Larson', 'Frazier', 'Burke', 'Hanson', 'Day', 'Mendoza', 'Moreno', 'Bowman', 'Medina', 'Fowler', 'Brewer', 'Hoffman', 'Carlson', 'Silva', 'Pearson', 'Holland', 'Douglas', 'Fleming', 'Jensen', 'Vargas', 'Byrd', 'Davidson', 'Hopkins', 'May', 'Terry', 'Herrera', 'Wade', 'Soto', 'Walters', 'Curtis', 'Neal', 'Caldwell', 'Lowe', 'Jennings', 'Barnett', 'Graves', 'Jimenez', 'Horton', 'Shelton', 'Barrett', 'Obrien', 'Castro', 'Sutton', 'Gregory', 'McKinney', 'Lucas', 'Miles', 'Craig', 'Rodriquez', 'Chambers', 'Holt', 'Lambert', 'Fletcher', 'Watts', 'Bates', 'Hale', 'Rhodes', 'Pena', 'Beck', 'Newman', 'Haynes', 'McDaniel', 'Mendez', 'Bush', 'Vaughn', 'Parks', 'Dawson', 'Santiago', 'Norris', 'Hardy', 'Love', 'Steele', 'Curry', 'Powers', 'Schultz', 'Barker', 'Guzman', 'Page', 'Munoz', 'Ball', 'Keller', 'Chandler', 'Weber', 'Leonard', 'Walsh', 'Lyons', 'Ramsey', 'Wolfe', 'Schneider', 'Mullins', 'Benson', 'Sharp', 'Bowen', 'Daniel', 'Barber', 'Cummings', 'Hines', 'Baldwin', 'Griffith', 'Valdez', 'Hubbard', 'Salazar', 'Reeves', 'Warner', 'Stevenson', 'Burgess', 'Santos', 'Tate', 'Cross', 'Garner', 'Mann', 'Mack', 'Moss', 'Thornton', 'Dennis', 'McGee', 'Farmer', 'Delgado', 'Aguilar', 'Vega', 'Glover', 'Manning', 'Cohen', 'Harmon', 'Rodgers', 'Robbins', 'Newton', 'Todd', 'Blair', 'Higgins', 'Ingram', 'Reese', 'Cannon', 'Strickland', 'Townsend', 'Potter', 'Goodwin', 'Walton', 'Rowe', 'Hampton', 'Ortega', 'Patton', 'Swanson', 'Joseph', 'Francis', 'Goodman', 'Maldonado', 'Yates', 'Becker', 'Erickson', 'Hodges', 'Rios', 'Conner', 'Adkins', 'Webster', 'Norman', 'Malone', 'Hammond', 'Flowers', 'Cobb', 'Moody', 'Quinn', 'Blake', 'Maxwell', 'Pope', 'Floyd', 'Osborne', 'Paul', 'McCarthy', 'Guerrero', 'Lindsey', 'Estrada', 'Sandoval', 'Gibbs', 'Tyler', 'Gross', 'Fitzgerald', 'Stokes', 'Doyle', 'Sherman', 'Saunders', 'Wise', 'Colon', 'Gill', 'Alvarado', 'Greer', 'Padilla', 'Simon', 'Waters', 'Nunez', 'Ballard', 'Schwartz', 'McBride', 'Houston', 'Christensen', 'Klein', 'Pratt', 'Briggs', 'Parsons', 'McLaughlin', 'Zimmerman', 'French', 'Buchanan', 'Moran', 'Copeland', 'Roy', 'Pittman', 'Brady', 'McCormick', 'Holloway', 'Brock', 'Poole', 'Frank', 'Logan', 'Owen', 'Bass', 'Marsh', 'Drake', 'Wong', 'Jefferson', 'Park', 'Morton', 'Abbott', 'Sparks', 'Patrick', 'Norton', 'Huff', 'Clayton', 'Massey', 'Lloyd', 'Figueroa', 'Carson', 'Bowers', 'Roberson', 'Barton', 'Tran', 'Lamb', 'Harrington', 'Casey', 'Boone', 'Cortez', 'Clarke', 'Mathis', 'Singleton', 'Wilkins', 'Cain', 'Bryan', 'Underwood', 'Hogan', 'McKenzie', 'Collier', 'Luna', 'Phelps', 'McGuire', 'Allison', 'Bridges', 'Wilkerson', 'Nash', 'Summers', 'Atkins'],
	            // Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0164 (first 1000)
	            "it": ["Acciai", "Aglietti", "Agostini", "Agresti", "Ahmed", "Aiazzi", "Albanese", "Alberti", "Alessi", "Alfani", "Alinari", "Alterini", "Amato", "Ammannati", "Ancillotti", "Andrei", "Andreini", "Andreoni", "Angeli", "Anichini", "Antonelli", "Antonini", "Arena", "Ariani", "Arnetoli", "Arrighi", "Baccani", "Baccetti", "Bacci", "Bacherini", "Badii", "Baggiani", "Baglioni", "Bagni", "Bagnoli", "Baldassini", "Baldi", "Baldini", "Ballerini", "Balli", "Ballini", "Balloni", "Bambi", "Banchi", "Bandinelli", "Bandini", "Bani", "Barbetti", "Barbieri", "Barchielli", "Bardazzi", "Bardelli", "Bardi", "Barducci", "Bargellini", "Bargiacchi", "Barni", "Baroncelli", "Baroncini", "Barone", "Baroni", "Baronti", "Bartalesi", "Bartoletti", "Bartoli", "Bartolini", "Bartoloni", "Bartolozzi", "Basagni", "Basile", "Bassi", "Batacchi", "Battaglia", "Battaglini", "Bausi", "Becagli", "Becattini", "Becchi", "Becucci", "Bellandi", "Bellesi", "Belli", "Bellini", "Bellucci", "Bencini", "Benedetti", "Benelli", "Beni", "Benini", "Bensi", "Benucci", "Benvenuti", "Berlincioni", "Bernacchioni", "Bernardi", "Bernardini", "Berni", "Bernini", "Bertelli", "Berti", "Bertini", "Bessi", "Betti", "Bettini", "Biagi", "Biagini", "Biagioni", "Biagiotti", "Biancalani", "Bianchi", "Bianchini", "Bianco", "Biffoli", "Bigazzi", "Bigi", "Biliotti", "Billi", "Binazzi", "Bindi", "Bini", "Biondi", "Bizzarri", "Bocci", "Bogani", "Bolognesi", "Bonaiuti", "Bonanni", "Bonciani", "Boncinelli", "Bondi", "Bonechi", "Bongini", "Boni", "Bonini", "Borchi", "Boretti", "Borghi", "Borghini", "Borgioli", "Borri", "Borselli", "Boschi", "Bottai", "Bracci", "Braccini", "Brandi", "Braschi", "Bravi", "Brazzini", "Breschi", "Brilli", "Brizzi", "Brogelli", "Brogi", "Brogioni", "Brunelli", "Brunetti", "Bruni", "Bruno", "Brunori", "Bruschi", "Bucci", "Bucciarelli", "Buccioni", "Bucelli", "Bulli", "Burberi", "Burchi", "Burgassi", "Burroni", "Bussotti", "Buti", "Caciolli", "Caiani", "Calabrese", "Calamai", "Calamandrei", "Caldini", "Calo'", "Calonaci", "Calosi", "Calvelli", "Cambi", "Camiciottoli", "Cammelli", "Cammilli", "Campolmi", "Cantini", "Capanni", "Capecchi", "Caponi", "Cappelletti", "Cappelli", "Cappellini", "Cappugi", "Capretti", "Caputo", "Carbone", "Carboni", "Cardini", "Carlesi", "Carletti", "Carli", "Caroti", "Carotti", "Carrai", "Carraresi", "Carta", "Caruso", "Casalini", "Casati", "Caselli", "Casini", "Castagnoli", "Castellani", "Castelli", "Castellucci", "Catalano", "Catarzi", "Catelani", "Cavaciocchi", "Cavallaro", "Cavallini", "Cavicchi", "Cavini", "Ceccarelli", "Ceccatelli", "Ceccherelli", "Ceccherini", "Cecchi", "Cecchini", "Cecconi", "Cei", "Cellai", "Celli", "Cellini", "Cencetti", "Ceni", "Cenni", "Cerbai", "Cesari", "Ceseri", "Checcacci", "Checchi", "Checcucci", "Cheli", "Chellini", "Chen", "Cheng", "Cherici", "Cherubini", "Chiaramonti", "Chiarantini", "Chiarelli", "Chiari", "Chiarini", "Chiarugi", "Chiavacci", "Chiesi", "Chimenti", "Chini", "Chirici", "Chiti", "Ciabatti", "Ciampi", "Cianchi", "Cianfanelli", "Cianferoni", "Ciani", "Ciapetti", "Ciappi", "Ciardi", "Ciatti", "Cicali", "Ciccone", "Cinelli", "Cini", "Ciobanu", "Ciolli", "Cioni", "Cipriani", "Cirillo", "Cirri", "Ciucchi", "Ciuffi", "Ciulli", "Ciullini", "Clemente", "Cocchi", "Cognome", "Coli", "Collini", "Colombo", "Colzi", "Comparini", "Conforti", "Consigli", "Conte", "Conti", "Contini", "Coppini", "Coppola", "Corsi", "Corsini", "Corti", "Cortini", "Cosi", "Costa", "Costantini", "Costantino", "Cozzi", "Cresci", "Crescioli", "Cresti", "Crini", "Curradi", "D'Agostino", "D'Alessandro", "D'Amico", "D'Angelo", "Daddi", "Dainelli", "Dallai", "Danti", "Davitti", "De Angelis", "De Luca", "De Marco", "De Rosa", "De Santis", "De Simone", "De Vita", "Degl'Innocenti", "Degli Innocenti", "Dei", "Del Lungo", "Del Re", "Di Marco", "Di Stefano", "Dini", "Diop", "Dobre", "Dolfi", "Donati", "Dondoli", "Dong", "Donnini", "Ducci", "Dumitru", "Ermini", "Esposito", "Evangelisti", "Fabbri", "Fabbrini", "Fabbrizzi", "Fabbroni", "Fabbrucci", "Fabiani", "Facchini", "Faggi", "Fagioli", "Failli", "Faini", "Falciani", "Falcini", "Falcone", "Fallani", "Falorni", "Falsini", "Falugiani", "Fancelli", "Fanelli", "Fanetti", "Fanfani", "Fani", "Fantappie'", "Fantechi", "Fanti", "Fantini", "Fantoni", "Farina", "Fattori", "Favilli", "Fedi", "Fei", "Ferrante", "Ferrara", "Ferrari", "Ferraro", "Ferretti", "Ferri", "Ferrini", "Ferroni", "Fiaschi", "Fibbi", "Fiesoli", "Filippi", "Filippini", "Fini", "Fioravanti", "Fiore", "Fiorentini", "Fiorini", "Fissi", "Focardi", "Foggi", "Fontana", "Fontanelli", "Fontani", "Forconi", "Formigli", "Forte", "Forti", "Fortini", "Fossati", "Fossi", "Francalanci", "Franceschi", "Franceschini", "Franchi", "Franchini", "Franci", "Francini", "Francioni", "Franco", "Frassineti", "Frati", "Fratini", "Frilli", "Frizzi", "Frosali", "Frosini", "Frullini", "Fusco", "Fusi", "Gabbrielli", "Gabellini", "Gagliardi", "Galanti", "Galardi", "Galeotti", "Galletti", "Galli", "Gallo", "Gallori", "Gambacciani", "Gargani", "Garofalo", "Garuglieri", "Gashi", "Gasperini", "Gatti", "Gelli", "Gensini", "Gentile", "Gentili", "Geri", "Gerini", "Gheri", "Ghini", "Giachetti", "Giachi", "Giacomelli", "Gianassi", "Giani", "Giannelli", "Giannetti", "Gianni", "Giannini", "Giannoni", "Giannotti", "Giannozzi", "Gigli", "Giordano", "Giorgetti", "Giorgi", "Giovacchini", "Giovannelli", "Giovannetti", "Giovannini", "Giovannoni", "Giuliani", "Giunti", "Giuntini", "Giusti", "Gonnelli", "Goretti", "Gori", "Gradi", "Gramigni", "Grassi", "Grasso", "Graziani", "Grazzini", "Greco", "Grifoni", "Grillo", "Grimaldi", "Grossi", "Gualtieri", "Guarducci", "Guarino", "Guarnieri", "Guasti", "Guerra", "Guerri", "Guerrini", "Guidi", "Guidotti", "He", "Hoxha", "Hu", "Huang", "Iandelli", "Ignesti", "Innocenti", "Jin", "La Rosa", "Lai", "Landi", "Landini", "Lanini", "Lapi", "Lapini", "Lari", "Lascialfari", "Lastrucci", "Latini", "Lazzeri", "Lazzerini", "Lelli", "Lenzi", "Leonardi", "Leoncini", "Leone", "Leoni", "Lepri", "Li", "Liao", "Lin", "Linari", "Lippi", "Lisi", "Livi", "Lombardi", "Lombardini", "Lombardo", "Longo", "Lopez", "Lorenzi", "Lorenzini", "Lorini", "Lotti", "Lu", "Lucchesi", "Lucherini", "Lunghi", "Lupi", "Madiai", "Maestrini", "Maffei", "Maggi", "Maggini", "Magherini", "Magini", "Magnani", "Magnelli", "Magni", "Magnolfi", "Magrini", "Malavolti", "Malevolti", "Manca", "Mancini", "Manetti", "Manfredi", "Mangani", "Mannelli", "Manni", "Mannini", "Mannucci", "Manuelli", "Manzini", "Marcelli", "Marchese", "Marchetti", "Marchi", "Marchiani", "Marchionni", "Marconi", "Marcucci", "Margheri", "Mari", "Mariani", "Marilli", "Marinai", "Marinari", "Marinelli", "Marini", "Marino", "Mariotti", "Marsili", "Martelli", "Martinelli", "Martini", "Martino", "Marzi", "Masi", "Masini", "Masoni", "Massai", "Materassi", "Mattei", "Matteini", "Matteucci", "Matteuzzi", "Mattioli", "Mattolini", "Matucci", "Mauro", "Mazzanti", "Mazzei", "Mazzetti", "Mazzi", "Mazzini", "Mazzocchi", "Mazzoli", "Mazzoni", "Mazzuoli", "Meacci", "Mecocci", "Meini", "Melani", "Mele", "Meli", "Mengoni", "Menichetti", "Meoni", "Merlini", "Messeri", "Messina", "Meucci", "Miccinesi", "Miceli", "Micheli", "Michelini", "Michelozzi", "Migliori", "Migliorini", "Milani", "Miniati", "Misuri", "Monaco", "Montagnani", "Montagni", "Montanari", "Montelatici", "Monti", "Montigiani", "Montini", "Morandi", "Morandini", "Morelli", "Moretti", "Morganti", "Mori", "Morini", "Moroni", "Morozzi", "Mugnai", "Mugnaini", "Mustafa", "Naldi", "Naldini", "Nannelli", "Nanni", "Nannini", "Nannucci", "Nardi", "Nardini", "Nardoni", "Natali", "Ndiaye", "Nencetti", "Nencini", "Nencioni", "Neri", "Nesi", "Nesti", "Niccolai", "Niccoli", "Niccolini", "Nigi", "Nistri", "Nocentini", "Noferini", "Novelli", "Nucci", "Nuti", "Nutini", "Oliva", "Olivieri", "Olmi", "Orlandi", "Orlandini", "Orlando", "Orsini", "Ortolani", "Ottanelli", "Pacciani", "Pace", "Paci", "Pacini", "Pagani", "Pagano", "Paggetti", "Pagliai", "Pagni", "Pagnini", "Paladini", "Palagi", "Palchetti", "Palloni", "Palmieri", "Palumbo", "Pampaloni", "Pancani", "Pandolfi", "Pandolfini", "Panerai", "Panichi", "Paoletti", "Paoli", "Paolini", "Papi", "Papini", "Papucci", "Parenti", "Parigi", "Parisi", "Parri", "Parrini", "Pasquini", "Passeri", "Pecchioli", "Pecorini", "Pellegrini", "Pepi", "Perini", "Perrone", "Peruzzi", "Pesci", "Pestelli", "Petri", "Petrini", "Petrucci", "Pettini", "Pezzati", "Pezzatini", "Piani", "Piazza", "Piazzesi", "Piazzini", "Piccardi", "Picchi", "Piccini", "Piccioli", "Pieraccini", "Pieraccioni", "Pieralli", "Pierattini", "Pieri", "Pierini", "Pieroni", "Pietrini", "Pini", "Pinna", "Pinto", "Pinzani", "Pinzauti", "Piras", "Pisani", "Pistolesi", "Poggesi", "Poggi", "Poggiali", "Poggiolini", "Poli", "Pollastri", "Porciani", "Pozzi", "Pratellesi", "Pratesi", "Prosperi", "Pruneti", "Pucci", "Puccini", "Puccioni", "Pugi", "Pugliese", "Puliti", "Querci", "Quercioli", "Raddi", "Radu", "Raffaelli", "Ragazzini", "Ranfagni", "Ranieri", "Rastrelli", "Raugei", "Raveggi", "Renai", "Renzi", "Rettori", "Ricci", "Ricciardi", "Ridi", "Ridolfi", "Rigacci", "Righi", "Righini", "Rinaldi", "Risaliti", "Ristori", "Rizzo", "Rocchi", "Rocchini", "Rogai", "Romagnoli", "Romanelli", "Romani", "Romano", "Romei", "Romeo", "Romiti", "Romoli", "Romolini", "Rontini", "Rosati", "Roselli", "Rosi", "Rossetti", "Rossi", "Rossini", "Rovai", "Ruggeri", "Ruggiero", "Russo", "Sabatini", "Saccardi", "Sacchetti", "Sacchi", "Sacco", "Salerno", "Salimbeni", "Salucci", "Salvadori", "Salvestrini", "Salvi", "Salvini", "Sanesi", "Sani", "Sanna", "Santi", "Santini", "Santoni", "Santoro", "Santucci", "Sardi", "Sarri", "Sarti", "Sassi", "Sbolci", "Scali", "Scarpelli", "Scarselli", "Scopetani", "Secci", "Selvi", "Senatori", "Senesi", "Serafini", "Sereni", "Serra", "Sestini", "Sguanci", "Sieni", "Signorini", "Silvestri", "Simoncini", "Simonetti", "Simoni", "Singh", "Sodi", "Soldi", "Somigli", "Sorbi", "Sorelli", "Sorrentino", "Sottili", "Spina", "Spinelli", "Staccioli", "Staderini", "Stefanelli", "Stefani", "Stefanini", "Stella", "Susini", "Tacchi", "Tacconi", "Taddei", "Tagliaferri", "Tamburini", "Tanganelli", "Tani", "Tanini", "Tapinassi", "Tarchi", "Tarchiani", "Targioni", "Tassi", "Tassini", "Tempesti", "Terzani", "Tesi", "Testa", "Testi", "Tilli", "Tinti", "Tirinnanzi", "Toccafondi", "Tofanari", "Tofani", "Tognaccini", "Tonelli", "Tonini", "Torelli", "Torrini", "Tosi", "Toti", "Tozzi", "Trambusti", "Trapani", "Tucci", "Turchi", "Ugolini", "Ulivi", "Valente", "Valenti", "Valentini", "Vangelisti", "Vanni", "Vannini", "Vannoni", "Vannozzi", "Vannucchi", "Vannucci", "Ventura", "Venturi", "Venturini", "Vestri", "Vettori", "Vichi", "Viciani", "Vieri", "Vigiani", "Vignoli", "Vignolini", "Vignozzi", "Villani", "Vinci", "Visani", "Vitale", "Vitali", "Viti", "Viviani", "Vivoli", "Volpe", "Volpi", "Wang", "Wu", "Xu", "Yang", "Ye", "Zagli", "Zani", "Zanieri", "Zanobini", "Zecchi", "Zetti", "Zhang", "Zheng", "Zhou", "Zhu", "Zingoni", "Zini", "Zoppi"]
	        },

	        // Data taken from https://github.com/umpirsky/country-list/blob/master/data/en_US/country.json
	        countries: [{ "name": "Afghanistan", "abbreviation": "AF" }, { "name": "Åland Islands", "abbreviation": "AX" }, { "name": "Albania", "abbreviation": "AL" }, { "name": "Algeria", "abbreviation": "DZ" }, { "name": "American Samoa", "abbreviation": "AS" }, { "name": "Andorra", "abbreviation": "AD" }, { "name": "Angola", "abbreviation": "AO" }, { "name": "Anguilla", "abbreviation": "AI" }, { "name": "Antarctica", "abbreviation": "AQ" }, { "name": "Antigua & Barbuda", "abbreviation": "AG" }, { "name": "Argentina", "abbreviation": "AR" }, { "name": "Armenia", "abbreviation": "AM" }, { "name": "Aruba", "abbreviation": "AW" }, { "name": "Ascension Island", "abbreviation": "AC" }, { "name": "Australia", "abbreviation": "AU" }, { "name": "Austria", "abbreviation": "AT" }, { "name": "Azerbaijan", "abbreviation": "AZ" }, { "name": "Bahamas", "abbreviation": "BS" }, { "name": "Bahrain", "abbreviation": "BH" }, { "name": "Bangladesh", "abbreviation": "BD" }, { "name": "Barbados", "abbreviation": "BB" }, { "name": "Belarus", "abbreviation": "BY" }, { "name": "Belgium", "abbreviation": "BE" }, { "name": "Belize", "abbreviation": "BZ" }, { "name": "Benin", "abbreviation": "BJ" }, { "name": "Bermuda", "abbreviation": "BM" }, { "name": "Bhutan", "abbreviation": "BT" }, { "name": "Bolivia", "abbreviation": "BO" }, { "name": "Bosnia & Herzegovina", "abbreviation": "BA" }, { "name": "Botswana", "abbreviation": "BW" }, { "name": "Brazil", "abbreviation": "BR" }, { "name": "British Indian Ocean Territory", "abbreviation": "IO" }, { "name": "British Virgin Islands", "abbreviation": "VG" }, { "name": "Brunei", "abbreviation": "BN" }, { "name": "Bulgaria", "abbreviation": "BG" }, { "name": "Burkina Faso", "abbreviation": "BF" }, { "name": "Burundi", "abbreviation": "BI" }, { "name": "Cambodia", "abbreviation": "KH" }, { "name": "Cameroon", "abbreviation": "CM" }, { "name": "Canada", "abbreviation": "CA" }, { "name": "Canary Islands", "abbreviation": "IC" }, { "name": "Cape Verde", "abbreviation": "CV" }, { "name": "Caribbean Netherlands", "abbreviation": "BQ" }, { "name": "Cayman Islands", "abbreviation": "KY" }, { "name": "Central African Republic", "abbreviation": "CF" }, { "name": "Ceuta & Melilla", "abbreviation": "EA" }, { "name": "Chad", "abbreviation": "TD" }, { "name": "Chile", "abbreviation": "CL" }, { "name": "China", "abbreviation": "CN" }, { "name": "Christmas Island", "abbreviation": "CX" }, { "name": "Cocos (Keeling) Islands", "abbreviation": "CC" }, { "name": "Colombia", "abbreviation": "CO" }, { "name": "Comoros", "abbreviation": "KM" }, { "name": "Congo - Brazzaville", "abbreviation": "CG" }, { "name": "Congo - Kinshasa", "abbreviation": "CD" }, { "name": "Cook Islands", "abbreviation": "CK" }, { "name": "Costa Rica", "abbreviation": "CR" }, { "name": "Côte d'Ivoire", "abbreviation": "CI" }, { "name": "Croatia", "abbreviation": "HR" }, { "name": "Cuba", "abbreviation": "CU" }, { "name": "Curaçao", "abbreviation": "CW" }, { "name": "Cyprus", "abbreviation": "CY" }, { "name": "Czech Republic", "abbreviation": "CZ" }, { "name": "Denmark", "abbreviation": "DK" }, { "name": "Diego Garcia", "abbreviation": "DG" }, { "name": "Djibouti", "abbreviation": "DJ" }, { "name": "Dominica", "abbreviation": "DM" }, { "name": "Dominican Republic", "abbreviation": "DO" }, { "name": "Ecuador", "abbreviation": "EC" }, { "name": "Egypt", "abbreviation": "EG" }, { "name": "El Salvador", "abbreviation": "SV" }, { "name": "Equatorial Guinea", "abbreviation": "GQ" }, { "name": "Eritrea", "abbreviation": "ER" }, { "name": "Estonia", "abbreviation": "EE" }, { "name": "Ethiopia", "abbreviation": "ET" }, { "name": "Falkland Islands", "abbreviation": "FK" }, { "name": "Faroe Islands", "abbreviation": "FO" }, { "name": "Fiji", "abbreviation": "FJ" }, { "name": "Finland", "abbreviation": "FI" }, { "name": "France", "abbreviation": "FR" }, { "name": "French Guiana", "abbreviation": "GF" }, { "name": "French Polynesia", "abbreviation": "PF" }, { "name": "French Southern Territories", "abbreviation": "TF" }, { "name": "Gabon", "abbreviation": "GA" }, { "name": "Gambia", "abbreviation": "GM" }, { "name": "Georgia", "abbreviation": "GE" }, { "name": "Germany", "abbreviation": "DE" }, { "name": "Ghana", "abbreviation": "GH" }, { "name": "Gibraltar", "abbreviation": "GI" }, { "name": "Greece", "abbreviation": "GR" }, { "name": "Greenland", "abbreviation": "GL" }, { "name": "Grenada", "abbreviation": "GD" }, { "name": "Guadeloupe", "abbreviation": "GP" }, { "name": "Guam", "abbreviation": "GU" }, { "name": "Guatemala", "abbreviation": "GT" }, { "name": "Guernsey", "abbreviation": "GG" }, { "name": "Guinea", "abbreviation": "GN" }, { "name": "Guinea-Bissau", "abbreviation": "GW" }, { "name": "Guyana", "abbreviation": "GY" }, { "name": "Haiti", "abbreviation": "HT" }, { "name": "Honduras", "abbreviation": "HN" }, { "name": "Hong Kong SAR China", "abbreviation": "HK" }, { "name": "Hungary", "abbreviation": "HU" }, { "name": "Iceland", "abbreviation": "IS" }, { "name": "India", "abbreviation": "IN" }, { "name": "Indonesia", "abbreviation": "ID" }, { "name": "Iran", "abbreviation": "IR" }, { "name": "Iraq", "abbreviation": "IQ" }, { "name": "Ireland", "abbreviation": "IE" }, { "name": "Isle of Man", "abbreviation": "IM" }, { "name": "Israel", "abbreviation": "IL" }, { "name": "Italy", "abbreviation": "IT" }, { "name": "Jamaica", "abbreviation": "JM" }, { "name": "Japan", "abbreviation": "JP" }, { "name": "Jersey", "abbreviation": "JE" }, { "name": "Jordan", "abbreviation": "JO" }, { "name": "Kazakhstan", "abbreviation": "KZ" }, { "name": "Kenya", "abbreviation": "KE" }, { "name": "Kiribati", "abbreviation": "KI" }, { "name": "Kosovo", "abbreviation": "XK" }, { "name": "Kuwait", "abbreviation": "KW" }, { "name": "Kyrgyzstan", "abbreviation": "KG" }, { "name": "Laos", "abbreviation": "LA" }, { "name": "Latvia", "abbreviation": "LV" }, { "name": "Lebanon", "abbreviation": "LB" }, { "name": "Lesotho", "abbreviation": "LS" }, { "name": "Liberia", "abbreviation": "LR" }, { "name": "Libya", "abbreviation": "LY" }, { "name": "Liechtenstein", "abbreviation": "LI" }, { "name": "Lithuania", "abbreviation": "LT" }, { "name": "Luxembourg", "abbreviation": "LU" }, { "name": "Macau SAR China", "abbreviation": "MO" }, { "name": "Macedonia", "abbreviation": "MK" }, { "name": "Madagascar", "abbreviation": "MG" }, { "name": "Malawi", "abbreviation": "MW" }, { "name": "Malaysia", "abbreviation": "MY" }, { "name": "Maldives", "abbreviation": "MV" }, { "name": "Mali", "abbreviation": "ML" }, { "name": "Malta", "abbreviation": "MT" }, { "name": "Marshall Islands", "abbreviation": "MH" }, { "name": "Martinique", "abbreviation": "MQ" }, { "name": "Mauritania", "abbreviation": "MR" }, { "name": "Mauritius", "abbreviation": "MU" }, { "name": "Mayotte", "abbreviation": "YT" }, { "name": "Mexico", "abbreviation": "MX" }, { "name": "Micronesia", "abbreviation": "FM" }, { "name": "Moldova", "abbreviation": "MD" }, { "name": "Monaco", "abbreviation": "MC" }, { "name": "Mongolia", "abbreviation": "MN" }, { "name": "Montenegro", "abbreviation": "ME" }, { "name": "Montserrat", "abbreviation": "MS" }, { "name": "Morocco", "abbreviation": "MA" }, { "name": "Mozambique", "abbreviation": "MZ" }, { "name": "Myanmar (Burma)", "abbreviation": "MM" }, { "name": "Namibia", "abbreviation": "NA" }, { "name": "Nauru", "abbreviation": "NR" }, { "name": "Nepal", "abbreviation": "NP" }, { "name": "Netherlands", "abbreviation": "NL" }, { "name": "New Caledonia", "abbreviation": "NC" }, { "name": "New Zealand", "abbreviation": "NZ" }, { "name": "Nicaragua", "abbreviation": "NI" }, { "name": "Niger", "abbreviation": "NE" }, { "name": "Nigeria", "abbreviation": "NG" }, { "name": "Niue", "abbreviation": "NU" }, { "name": "Norfolk Island", "abbreviation": "NF" }, { "name": "North Korea", "abbreviation": "KP" }, { "name": "Northern Mariana Islands", "abbreviation": "MP" }, { "name": "Norway", "abbreviation": "NO" }, { "name": "Oman", "abbreviation": "OM" }, { "name": "Pakistan", "abbreviation": "PK" }, { "name": "Palau", "abbreviation": "PW" }, { "name": "Palestinian Territories", "abbreviation": "PS" }, { "name": "Panama", "abbreviation": "PA" }, { "name": "Papua New Guinea", "abbreviation": "PG" }, { "name": "Paraguay", "abbreviation": "PY" }, { "name": "Peru", "abbreviation": "PE" }, { "name": "Philippines", "abbreviation": "PH" }, { "name": "Pitcairn Islands", "abbreviation": "PN" }, { "name": "Poland", "abbreviation": "PL" }, { "name": "Portugal", "abbreviation": "PT" }, { "name": "Puerto Rico", "abbreviation": "PR" }, { "name": "Qatar", "abbreviation": "QA" }, { "name": "Réunion", "abbreviation": "RE" }, { "name": "Romania", "abbreviation": "RO" }, { "name": "Russia", "abbreviation": "RU" }, { "name": "Rwanda", "abbreviation": "RW" }, { "name": "Samoa", "abbreviation": "WS" }, { "name": "San Marino", "abbreviation": "SM" }, { "name": "São Tomé and Príncipe", "abbreviation": "ST" }, { "name": "Saudi Arabia", "abbreviation": "SA" }, { "name": "Senegal", "abbreviation": "SN" }, { "name": "Serbia", "abbreviation": "RS" }, { "name": "Seychelles", "abbreviation": "SC" }, { "name": "Sierra Leone", "abbreviation": "SL" }, { "name": "Singapore", "abbreviation": "SG" }, { "name": "Sint Maarten", "abbreviation": "SX" }, { "name": "Slovakia", "abbreviation": "SK" }, { "name": "Slovenia", "abbreviation": "SI" }, { "name": "Solomon Islands", "abbreviation": "SB" }, { "name": "Somalia", "abbreviation": "SO" }, { "name": "South Africa", "abbreviation": "ZA" }, { "name": "South Georgia & South Sandwich Islands", "abbreviation": "GS" }, { "name": "South Korea", "abbreviation": "KR" }, { "name": "South Sudan", "abbreviation": "SS" }, { "name": "Spain", "abbreviation": "ES" }, { "name": "Sri Lanka", "abbreviation": "LK" }, { "name": "St. Barthélemy", "abbreviation": "BL" }, { "name": "St. Helena", "abbreviation": "SH" }, { "name": "St. Kitts & Nevis", "abbreviation": "KN" }, { "name": "St. Lucia", "abbreviation": "LC" }, { "name": "St. Martin", "abbreviation": "MF" }, { "name": "St. Pierre & Miquelon", "abbreviation": "PM" }, { "name": "St. Vincent & Grenadines", "abbreviation": "VC" }, { "name": "Sudan", "abbreviation": "SD" }, { "name": "Suriname", "abbreviation": "SR" }, { "name": "Svalbard & Jan Mayen", "abbreviation": "SJ" }, { "name": "Swaziland", "abbreviation": "SZ" }, { "name": "Sweden", "abbreviation": "SE" }, { "name": "Switzerland", "abbreviation": "CH" }, { "name": "Syria", "abbreviation": "SY" }, { "name": "Taiwan", "abbreviation": "TW" }, { "name": "Tajikistan", "abbreviation": "TJ" }, { "name": "Tanzania", "abbreviation": "TZ" }, { "name": "Thailand", "abbreviation": "TH" }, { "name": "Timor-Leste", "abbreviation": "TL" }, { "name": "Togo", "abbreviation": "TG" }, { "name": "Tokelau", "abbreviation": "TK" }, { "name": "Tonga", "abbreviation": "TO" }, { "name": "Trinidad & Tobago", "abbreviation": "TT" }, { "name": "Tristan da Cunha", "abbreviation": "TA" }, { "name": "Tunisia", "abbreviation": "TN" }, { "name": "Turkey", "abbreviation": "TR" }, { "name": "Turkmenistan", "abbreviation": "TM" }, { "name": "Turks & Caicos Islands", "abbreviation": "TC" }, { "name": "Tuvalu", "abbreviation": "TV" }, { "name": "U.S. Outlying Islands", "abbreviation": "UM" }, { "name": "U.S. Virgin Islands", "abbreviation": "VI" }, { "name": "Uganda", "abbreviation": "UG" }, { "name": "Ukraine", "abbreviation": "UA" }, { "name": "United Arab Emirates", "abbreviation": "AE" }, { "name": "United Kingdom", "abbreviation": "GB" }, { "name": "United States", "abbreviation": "US" }, { "name": "Uruguay", "abbreviation": "UY" }, { "name": "Uzbekistan", "abbreviation": "UZ" }, { "name": "Vanuatu", "abbreviation": "VU" }, { "name": "Vatican City", "abbreviation": "VA" }, { "name": "Venezuela", "abbreviation": "VE" }, { "name": "Vietnam", "abbreviation": "VN" }, { "name": "Wallis & Futuna", "abbreviation": "WF" }, { "name": "Western Sahara", "abbreviation": "EH" }, { "name": "Yemen", "abbreviation": "YE" }, { "name": "Zambia", "abbreviation": "ZM" }, { "name": "Zimbabwe", "abbreviation": "ZW" }],

	        counties: {
	            // Data taken from http://www.downloadexcelfiles.com/gb_en/download-excel-file-list-counties-uk
	            "uk": [{ name: 'Bath and North East Somerset' }, { name: 'Bedford' }, { name: 'Blackburn with Darwen' }, { name: 'Blackpool' }, { name: 'Bournemouth' }, { name: 'Bracknell Forest' }, { name: 'Brighton & Hove' }, { name: 'Bristol' }, { name: 'Buckinghamshire' }, { name: 'Cambridgeshire' }, { name: 'Central Bedfordshire' }, { name: 'Cheshire East' }, { name: 'Cheshire West and Chester' }, { name: 'Cornwall' }, { name: 'County Durham' }, { name: 'Cumbria' }, { name: 'Darlington' }, { name: 'Derby' }, { name: 'Derbyshire' }, { name: 'Devon' }, { name: 'Dorset' }, { name: 'East Riding of Yorkshire' }, { name: 'East Sussex' }, { name: 'Essex' }, { name: 'Gloucestershire' }, { name: 'Greater London' }, { name: 'Greater Manchester' }, { name: 'Halton' }, { name: 'Hampshire' }, { name: 'Hartlepool' }, { name: 'Herefordshire' }, { name: 'Hertfordshire' }, { name: 'Hull' }, { name: 'Isle of Wight' }, { name: 'Isles of Scilly' }, { name: 'Kent' }, { name: 'Lancashire' }, { name: 'Leicester' }, { name: 'Leicestershire' }, { name: 'Lincolnshire' }, { name: 'Luton' }, { name: 'Medway' }, { name: 'Merseyside' }, { name: 'Middlesbrough' }, { name: 'Milton Keynes' }, { name: 'Norfolk' }, { name: 'North East Lincolnshire' }, { name: 'North Lincolnshire' }, { name: 'North Somerset' }, { name: 'North Yorkshire' }, { name: 'Northamptonshire' }, { name: 'Northumberland' }, { name: 'Nottingham' }, { name: 'Nottinghamshire' }, { name: 'Oxfordshire' }, { name: 'Peterborough' }, { name: 'Plymouth' }, { name: 'Poole' }, { name: 'Portsmouth' }, { name: 'Reading' }, { name: 'Redcar and Cleveland' }, { name: 'Rutland' }, { name: 'Shropshire' }, { name: 'Slough' }, { name: 'Somerset' }, { name: 'South Gloucestershire' }, { name: 'South Yorkshire' }, { name: 'Southampton' }, { name: 'Southend-on-Sea' }, { name: 'Staffordshire' }, { name: 'Stockton-on-Tees' }, { name: 'Stoke-on-Trent' }, { name: 'Suffolk' }, { name: 'Surrey' }, { name: 'Swindon' }, { name: 'Telford and Wrekin' }, { name: 'Thurrock' }, { name: 'Torbay' }, { name: 'Tyne and Wear' }, { name: 'Warrington' }, { name: 'Warwickshire' }, { name: 'West Berkshire' }, { name: 'West Midlands' }, { name: 'West Sussex' }, { name: 'West Yorkshire' }, { name: 'Wiltshire' }, { name: 'Windsor and Maidenhead' }, { name: 'Wokingham' }, { name: 'Worcestershire' }, { name: 'York' }]
	        },
	        provinces: {
	            "ca": [{ name: 'Alberta', abbreviation: 'AB' }, { name: 'British Columbia', abbreviation: 'BC' }, { name: 'Manitoba', abbreviation: 'MB' }, { name: 'New Brunswick', abbreviation: 'NB' }, { name: 'Newfoundland and Labrador', abbreviation: 'NL' }, { name: 'Nova Scotia', abbreviation: 'NS' }, { name: 'Ontario', abbreviation: 'ON' }, { name: 'Prince Edward Island', abbreviation: 'PE' }, { name: 'Quebec', abbreviation: 'QC' }, { name: 'Saskatchewan', abbreviation: 'SK' },

	            // The case could be made that the following are not actually provinces
	            // since they are technically considered "territories" however they all
	            // look the same on an envelope!
	            { name: 'Northwest Territories', abbreviation: 'NT' }, { name: 'Nunavut', abbreviation: 'NU' }, { name: 'Yukon', abbreviation: 'YT' }],
	            "it": [{ name: "Agrigento", abbreviation: "AG", code: 84 }, { name: "Alessandria", abbreviation: "AL", code: 6 }, { name: "Ancona", abbreviation: "AN", code: 42 }, { name: "Aosta", abbreviation: "AO", code: 7 }, { name: "L'Aquila", abbreviation: "AQ", code: 66 }, { name: "Arezzo", abbreviation: "AR", code: 51 }, { name: "Ascoli-Piceno", abbreviation: "AP", code: 44 }, { name: "Asti", abbreviation: "AT", code: 5 }, { name: "Avellino", abbreviation: "AV", code: 64 }, { name: "Bari", abbreviation: "BA", code: 72 }, { name: "Barletta-Andria-Trani", abbreviation: "BT", code: 72 }, { name: "Belluno", abbreviation: "BL", code: 25 }, { name: "Benevento", abbreviation: "BN", code: 62 }, { name: "Bergamo", abbreviation: "BG", code: 16 }, { name: "Biella", abbreviation: "BI", code: 96 }, { name: "Bologna", abbreviation: "BO", code: 37 }, { name: "Bolzano", abbreviation: "BZ", code: 21 }, { name: "Brescia", abbreviation: "BS", code: 17 }, { name: "Brindisi", abbreviation: "BR", code: 74 }, { name: "Cagliari", abbreviation: "CA", code: 92 }, { name: "Caltanissetta", abbreviation: "CL", code: 85 }, { name: "Campobasso", abbreviation: "CB", code: 70 }, { name: "Carbonia Iglesias", abbreviation: "CI", code: 70 }, { name: "Caserta", abbreviation: "CE", code: 61 }, { name: "Catania", abbreviation: "CT", code: 87 }, { name: "Catanzaro", abbreviation: "CZ", code: 79 }, { name: "Chieti", abbreviation: "CH", code: 69 }, { name: "Como", abbreviation: "CO", code: 13 }, { name: "Cosenza", abbreviation: "CS", code: 78 }, { name: "Cremona", abbreviation: "CR", code: 19 }, { name: "Crotone", abbreviation: "KR", code: 101 }, { name: "Cuneo", abbreviation: "CN", code: 4 }, { name: "Enna", abbreviation: "EN", code: 86 }, { name: "Fermo", abbreviation: "FM", code: 86 }, { name: "Ferrara", abbreviation: "FE", code: 38 }, { name: "Firenze", abbreviation: "FI", code: 48 }, { name: "Foggia", abbreviation: "FG", code: 71 }, { name: "Forli-Cesena", abbreviation: "FC", code: 71 }, { name: "Frosinone", abbreviation: "FR", code: 60 }, { name: "Genova", abbreviation: "GE", code: 10 }, { name: "Gorizia", abbreviation: "GO", code: 31 }, { name: "Grosseto", abbreviation: "GR", code: 53 }, { name: "Imperia", abbreviation: "IM", code: 8 }, { name: "Isernia", abbreviation: "IS", code: 94 }, { name: "La-Spezia", abbreviation: "SP", code: 66 }, { name: "Latina", abbreviation: "LT", code: 59 }, { name: "Lecce", abbreviation: "LE", code: 75 }, { name: "Lecco", abbreviation: "LC", code: 97 }, { name: "Livorno", abbreviation: "LI", code: 49 }, { name: "Lodi", abbreviation: "LO", code: 98 }, { name: "Lucca", abbreviation: "LU", code: 46 }, { name: "Macerata", abbreviation: "MC", code: 43 }, { name: "Mantova", abbreviation: "MN", code: 20 }, { name: "Massa-Carrara", abbreviation: "MS", code: 45 }, { name: "Matera", abbreviation: "MT", code: 77 }, { name: "Medio Campidano", abbreviation: "VS", code: 77 }, { name: "Messina", abbreviation: "ME", code: 83 }, { name: "Milano", abbreviation: "MI", code: 15 }, { name: "Modena", abbreviation: "MO", code: 36 }, { name: "Monza-Brianza", abbreviation: "MB", code: 36 }, { name: "Napoli", abbreviation: "NA", code: 63 }, { name: "Novara", abbreviation: "NO", code: 3 }, { name: "Nuoro", abbreviation: "NU", code: 91 }, { name: "Ogliastra", abbreviation: "OG", code: 91 }, { name: "Olbia Tempio", abbreviation: "OT", code: 91 }, { name: "Oristano", abbreviation: "OR", code: 95 }, { name: "Padova", abbreviation: "PD", code: 28 }, { name: "Palermo", abbreviation: "PA", code: 82 }, { name: "Parma", abbreviation: "PR", code: 34 }, { name: "Pavia", abbreviation: "PV", code: 18 }, { name: "Perugia", abbreviation: "PG", code: 54 }, { name: "Pesaro-Urbino", abbreviation: "PU", code: 41 }, { name: "Pescara", abbreviation: "PE", code: 68 }, { name: "Piacenza", abbreviation: "PC", code: 33 }, { name: "Pisa", abbreviation: "PI", code: 50 }, { name: "Pistoia", abbreviation: "PT", code: 47 }, { name: "Pordenone", abbreviation: "PN", code: 93 }, { name: "Potenza", abbreviation: "PZ", code: 76 }, { name: "Prato", abbreviation: "PO", code: 100 }, { name: "Ragusa", abbreviation: "RG", code: 88 }, { name: "Ravenna", abbreviation: "RA", code: 39 }, { name: "Reggio-Calabria", abbreviation: "RC", code: 35 }, { name: "Reggio-Emilia", abbreviation: "RE", code: 35 }, { name: "Rieti", abbreviation: "RI", code: 57 }, { name: "Rimini", abbreviation: "RN", code: 99 }, { name: "Roma", abbreviation: "Roma", code: 58 }, { name: "Rovigo", abbreviation: "RO", code: 29 }, { name: "Salerno", abbreviation: "SA", code: 65 }, { name: "Sassari", abbreviation: "SS", code: 90 }, { name: "Savona", abbreviation: "SV", code: 9 }, { name: "Siena", abbreviation: "SI", code: 52 }, { name: "Siracusa", abbreviation: "SR", code: 89 }, { name: "Sondrio", abbreviation: "SO", code: 14 }, { name: "Taranto", abbreviation: "TA", code: 73 }, { name: "Teramo", abbreviation: "TE", code: 67 }, { name: "Terni", abbreviation: "TR", code: 55 }, { name: "Torino", abbreviation: "TO", code: 1 }, { name: "Trapani", abbreviation: "TP", code: 81 }, { name: "Trento", abbreviation: "TN", code: 22 }, { name: "Treviso", abbreviation: "TV", code: 26 }, { name: "Trieste", abbreviation: "TS", code: 32 }, { name: "Udine", abbreviation: "UD", code: 30 }, { name: "Varese", abbreviation: "VA", code: 12 }, { name: "Venezia", abbreviation: "VE", code: 27 }, { name: "Verbania", abbreviation: "VB", code: 27 }, { name: "Vercelli", abbreviation: "VC", code: 2 }, { name: "Verona", abbreviation: "VR", code: 23 }, { name: "Vibo-Valentia", abbreviation: "VV", code: 102 }, { name: "Vicenza", abbreviation: "VI", code: 24 }, { name: "Viterbo", abbreviation: "VT", code: 56 }]
	        },

	        // from: https://github.com/samsargent/Useful-Autocomplete-Data/blob/master/data/nationalities.json
	        nationalities: [{ name: 'Afghan' }, { name: 'Albanian' }, { name: 'Algerian' }, { name: 'American' }, { name: 'Andorran' }, { name: 'Angolan' }, { name: 'Antiguans' }, { name: 'Argentinean' }, { name: 'Armenian' }, { name: 'Australian' }, { name: 'Austrian' }, { name: 'Azerbaijani' }, { name: 'Bahami' }, { name: 'Bahraini' }, { name: 'Bangladeshi' }, { name: 'Barbadian' }, { name: 'Barbudans' }, { name: 'Batswana' }, { name: 'Belarusian' }, { name: 'Belgian' }, { name: 'Belizean' }, { name: 'Beninese' }, { name: 'Bhutanese' }, { name: 'Bolivian' }, { name: 'Bosnian' }, { name: 'Brazilian' }, { name: 'British' }, { name: 'Bruneian' }, { name: 'Bulgarian' }, { name: 'Burkinabe' }, { name: 'Burmese' }, { name: 'Burundian' }, { name: 'Cambodian' }, { name: 'Cameroonian' }, { name: 'Canadian' }, { name: 'Cape Verdean' }, { name: 'Central African' }, { name: 'Chadian' }, { name: 'Chilean' }, { name: 'Chinese' }, { name: 'Colombian' }, { name: 'Comoran' }, { name: 'Congolese' }, { name: 'Costa Rican' }, { name: 'Croatian' }, { name: 'Cuban' }, { name: 'Cypriot' }, { name: 'Czech' }, { name: 'Danish' }, { name: 'Djibouti' }, { name: 'Dominican' }, { name: 'Dutch' }, { name: 'East Timorese' }, { name: 'Ecuadorean' }, { name: 'Egyptian' }, { name: 'Emirian' }, { name: 'Equatorial Guinean' }, { name: 'Eritrean' }, { name: 'Estonian' }, { name: 'Ethiopian' }, { name: 'Fijian' }, { name: 'Filipino' }, { name: 'Finnish' }, { name: 'French' }, { name: 'Gabonese' }, { name: 'Gambian' }, { name: 'Georgian' }, { name: 'German' }, { name: 'Ghanaian' }, { name: 'Greek' }, { name: 'Grenadian' }, { name: 'Guatemalan' }, { name: 'Guinea-Bissauan' }, { name: 'Guinean' }, { name: 'Guyanese' }, { name: 'Haitian' }, { name: 'Herzegovinian' }, { name: 'Honduran' }, { name: 'Hungarian' }, { name: 'I-Kiribati' }, { name: 'Icelander' }, { name: 'Indian' }, { name: 'Indonesian' }, { name: 'Iranian' }, { name: 'Iraqi' }, { name: 'Irish' }, { name: 'Israeli' }, { name: 'Italian' }, { name: 'Ivorian' }, { name: 'Jamaican' }, { name: 'Japanese' }, { name: 'Jordanian' }, { name: 'Kazakhstani' }, { name: 'Kenyan' }, { name: 'Kittian and Nevisian' }, { name: 'Kuwaiti' }, { name: 'Kyrgyz' }, { name: 'Laotian' }, { name: 'Latvian' }, { name: 'Lebanese' }, { name: 'Liberian' }, { name: 'Libyan' }, { name: 'Liechtensteiner' }, { name: 'Lithuanian' }, { name: 'Luxembourger' }, { name: 'Macedonian' }, { name: 'Malagasy' }, { name: 'Malawian' }, { name: 'Malaysian' }, { name: 'Maldivan' }, { name: 'Malian' }, { name: 'Maltese' }, { name: 'Marshallese' }, { name: 'Mauritanian' }, { name: 'Mauritian' }, { name: 'Mexican' }, { name: 'Micronesian' }, { name: 'Moldovan' }, { name: 'Monacan' }, { name: 'Mongolian' }, { name: 'Moroccan' }, { name: 'Mosotho' }, { name: 'Motswana' }, { name: 'Mozambican' }, { name: 'Namibian' }, { name: 'Nauruan' }, { name: 'Nepalese' }, { name: 'New Zealander' }, { name: 'Nicaraguan' }, { name: 'Nigerian' }, { name: 'Nigerien' }, { name: 'North Korean' }, { name: 'Northern Irish' }, { name: 'Norwegian' }, { name: 'Omani' }, { name: 'Pakistani' }, { name: 'Palauan' }, { name: 'Panamanian' }, { name: 'Papua New Guinean' }, { name: 'Paraguayan' }, { name: 'Peruvian' }, { name: 'Polish' }, { name: 'Portuguese' }, { name: 'Qatari' }, { name: 'Romani' }, { name: 'Russian' }, { name: 'Rwandan' }, { name: 'Saint Lucian' }, { name: 'Salvadoran' }, { name: 'Samoan' }, { name: 'San Marinese' }, { name: 'Sao Tomean' }, { name: 'Saudi' }, { name: 'Scottish' }, { name: 'Senegalese' }, { name: 'Serbian' }, { name: 'Seychellois' }, { name: 'Sierra Leonean' }, { name: 'Singaporean' }, { name: 'Slovakian' }, { name: 'Slovenian' }, { name: 'Solomon Islander' }, { name: 'Somali' }, { name: 'South African' }, { name: 'South Korean' }, { name: 'Spanish' }, { name: 'Sri Lankan' }, { name: 'Sudanese' }, { name: 'Surinamer' }, { name: 'Swazi' }, { name: 'Swedish' }, { name: 'Swiss' }, { name: 'Syrian' }, { name: 'Taiwanese' }, { name: 'Tajik' }, { name: 'Tanzanian' }, { name: 'Thai' }, { name: 'Togolese' }, { name: 'Tongan' }, { name: 'Trinidadian or Tobagonian' }, { name: 'Tunisian' }, { name: 'Turkish' }, { name: 'Tuvaluan' }, { name: 'Ugandan' }, { name: 'Ukrainian' }, { name: 'Uruguaya' }, { name: 'Uzbekistani' }, { name: 'Venezuela' }, { name: 'Vietnamese' }, { name: 'Wels' }, { name: 'Yemenit' }, { name: 'Zambia' }, { name: 'Zimbabwe' }],

	        us_states_and_dc: [{ name: 'Alabama', abbreviation: 'AL' }, { name: 'Alaska', abbreviation: 'AK' }, { name: 'Arizona', abbreviation: 'AZ' }, { name: 'Arkansas', abbreviation: 'AR' }, { name: 'California', abbreviation: 'CA' }, { name: 'Colorado', abbreviation: 'CO' }, { name: 'Connecticut', abbreviation: 'CT' }, { name: 'Delaware', abbreviation: 'DE' }, { name: 'District of Columbia', abbreviation: 'DC' }, { name: 'Florida', abbreviation: 'FL' }, { name: 'Georgia', abbreviation: 'GA' }, { name: 'Hawaii', abbreviation: 'HI' }, { name: 'Idaho', abbreviation: 'ID' }, { name: 'Illinois', abbreviation: 'IL' }, { name: 'Indiana', abbreviation: 'IN' }, { name: 'Iowa', abbreviation: 'IA' }, { name: 'Kansas', abbreviation: 'KS' }, { name: 'Kentucky', abbreviation: 'KY' }, { name: 'Louisiana', abbreviation: 'LA' }, { name: 'Maine', abbreviation: 'ME' }, { name: 'Maryland', abbreviation: 'MD' }, { name: 'Massachusetts', abbreviation: 'MA' }, { name: 'Michigan', abbreviation: 'MI' }, { name: 'Minnesota', abbreviation: 'MN' }, { name: 'Mississippi', abbreviation: 'MS' }, { name: 'Missouri', abbreviation: 'MO' }, { name: 'Montana', abbreviation: 'MT' }, { name: 'Nebraska', abbreviation: 'NE' }, { name: 'Nevada', abbreviation: 'NV' }, { name: 'New Hampshire', abbreviation: 'NH' }, { name: 'New Jersey', abbreviation: 'NJ' }, { name: 'New Mexico', abbreviation: 'NM' }, { name: 'New York', abbreviation: 'NY' }, { name: 'North Carolina', abbreviation: 'NC' }, { name: 'North Dakota', abbreviation: 'ND' }, { name: 'Ohio', abbreviation: 'OH' }, { name: 'Oklahoma', abbreviation: 'OK' }, { name: 'Oregon', abbreviation: 'OR' }, { name: 'Pennsylvania', abbreviation: 'PA' }, { name: 'Rhode Island', abbreviation: 'RI' }, { name: 'South Carolina', abbreviation: 'SC' }, { name: 'South Dakota', abbreviation: 'SD' }, { name: 'Tennessee', abbreviation: 'TN' }, { name: 'Texas', abbreviation: 'TX' }, { name: 'Utah', abbreviation: 'UT' }, { name: 'Vermont', abbreviation: 'VT' }, { name: 'Virginia', abbreviation: 'VA' }, { name: 'Washington', abbreviation: 'WA' }, { name: 'West Virginia', abbreviation: 'WV' }, { name: 'Wisconsin', abbreviation: 'WI' }, { name: 'Wyoming', abbreviation: 'WY' }],

	        territories: [{ name: 'American Samoa', abbreviation: 'AS' }, { name: 'Federated States of Micronesia', abbreviation: 'FM' }, { name: 'Guam', abbreviation: 'GU' }, { name: 'Marshall Islands', abbreviation: 'MH' }, { name: 'Northern Mariana Islands', abbreviation: 'MP' }, { name: 'Puerto Rico', abbreviation: 'PR' }, { name: 'Virgin Islands, U.S.', abbreviation: 'VI' }],

	        armed_forces: [{ name: 'Armed Forces Europe', abbreviation: 'AE' }, { name: 'Armed Forces Pacific', abbreviation: 'AP' }, { name: 'Armed Forces the Americas', abbreviation: 'AA' }],

	        country_regions: {
	            it: [{ name: "Valle d'Aosta", abbreviation: "VDA" }, { name: "Piemonte", abbreviation: "PIE" }, { name: "Lombardia", abbreviation: "LOM" }, { name: "Veneto", abbreviation: "VEN" }, { name: "Trentino Alto Adige", abbreviation: "TAA" }, { name: "Friuli Venezia Giulia", abbreviation: "FVG" }, { name: "Liguria", abbreviation: "LIG" }, { name: "Emilia Romagna", abbreviation: "EMR" }, { name: "Toscana", abbreviation: "TOS" }, { name: "Umbria", abbreviation: "UMB" }, { name: "Marche", abbreviation: "MAR" }, { name: "Abruzzo", abbreviation: "ABR" }, { name: "Lazio", abbreviation: "LAZ" }, { name: "Campania", abbreviation: "CAM" }, { name: "Puglia", abbreviation: "PUG" }, { name: "Basilicata", abbreviation: "BAS" }, { name: "Molise", abbreviation: "MOL" }, { name: "Calabria", abbreviation: "CAL" }, { name: "Sicilia", abbreviation: "SIC" }, { name: "Sardegna", abbreviation: "SAR" }]
	        },

	        street_suffixes: {
	            'us': [{ name: 'Avenue', abbreviation: 'Ave' }, { name: 'Boulevard', abbreviation: 'Blvd' }, { name: 'Center', abbreviation: 'Ctr' }, { name: 'Circle', abbreviation: 'Cir' }, { name: 'Court', abbreviation: 'Ct' }, { name: 'Drive', abbreviation: 'Dr' }, { name: 'Extension', abbreviation: 'Ext' }, { name: 'Glen', abbreviation: 'Gln' }, { name: 'Grove', abbreviation: 'Grv' }, { name: 'Heights', abbreviation: 'Hts' }, { name: 'Highway', abbreviation: 'Hwy' }, { name: 'Junction', abbreviation: 'Jct' }, { name: 'Key', abbreviation: 'Key' }, { name: 'Lane', abbreviation: 'Ln' }, { name: 'Loop', abbreviation: 'Loop' }, { name: 'Manor', abbreviation: 'Mnr' }, { name: 'Mill', abbreviation: 'Mill' }, { name: 'Park', abbreviation: 'Park' }, { name: 'Parkway', abbreviation: 'Pkwy' }, { name: 'Pass', abbreviation: 'Pass' }, { name: 'Path', abbreviation: 'Path' }, { name: 'Pike', abbreviation: 'Pike' }, { name: 'Place', abbreviation: 'Pl' }, { name: 'Plaza', abbreviation: 'Plz' }, { name: 'Point', abbreviation: 'Pt' }, { name: 'Ridge', abbreviation: 'Rdg' }, { name: 'River', abbreviation: 'Riv' }, { name: 'Road', abbreviation: 'Rd' }, { name: 'Square', abbreviation: 'Sq' }, { name: 'Street', abbreviation: 'St' }, { name: 'Terrace', abbreviation: 'Ter' }, { name: 'Trail', abbreviation: 'Trl' }, { name: 'Turnpike', abbreviation: 'Tpke' }, { name: 'View', abbreviation: 'Vw' }, { name: 'Way', abbreviation: 'Way' }],
	            'it': [{ name: 'Accesso', abbreviation: 'Acc.' }, { name: 'Alzaia', abbreviation: 'Alz.' }, { name: 'Arco', abbreviation: 'Arco' }, { name: 'Archivolto', abbreviation: 'Acv.' }, { name: 'Arena', abbreviation: 'Arena' }, { name: 'Argine', abbreviation: 'Argine' }, { name: 'Bacino', abbreviation: 'Bacino' }, { name: 'Banchi', abbreviation: 'Banchi' }, { name: 'Banchina', abbreviation: 'Ban.' }, { name: 'Bastioni', abbreviation: 'Bas.' }, { name: 'Belvedere', abbreviation: 'Belv.' }, { name: 'Borgata', abbreviation: 'B.ta' }, { name: 'Borgo', abbreviation: 'B.go' }, { name: 'Calata', abbreviation: 'Cal.' }, { name: 'Calle', abbreviation: 'Calle' }, { name: 'Campiello', abbreviation: 'Cam.' }, { name: 'Campo', abbreviation: 'Cam.' }, { name: 'Canale', abbreviation: 'Can.' }, { name: 'Carraia', abbreviation: 'Carr.' }, { name: 'Cascina', abbreviation: 'Cascina' }, { name: 'Case sparse', abbreviation: 'c.s.' }, { name: 'Cavalcavia', abbreviation: 'Cv.' }, { name: 'Circonvallazione', abbreviation: 'Cv.' }, { name: 'Complanare', abbreviation: 'C.re' }, { name: 'Contrada', abbreviation: 'C.da' }, { name: 'Corso', abbreviation: 'C.so' }, { name: 'Corte', abbreviation: 'C.te' }, { name: 'Cortile', abbreviation: 'C.le' }, { name: 'Diramazione', abbreviation: 'Dir.' }, { name: 'Fondaco', abbreviation: 'F.co' }, { name: 'Fondamenta', abbreviation: 'F.ta' }, { name: 'Fondo', abbreviation: 'F.do' }, { name: 'Frazione', abbreviation: 'Fr.' }, { name: 'Isola', abbreviation: 'Is.' }, { name: 'Largo', abbreviation: 'L.go' }, { name: 'Litoranea', abbreviation: 'Lit.' }, { name: 'Lungolago', abbreviation: 'L.go lago' }, { name: 'Lungo Po', abbreviation: 'l.go Po' }, { name: 'Molo', abbreviation: 'Molo' }, { name: 'Mura', abbreviation: 'Mura' }, { name: 'Passaggio privato', abbreviation: 'pass. priv.' }, { name: 'Passeggiata', abbreviation: 'Pass.' }, { name: 'Piazza', abbreviation: 'P.zza' }, { name: 'Piazzale', abbreviation: 'P.le' }, { name: 'Ponte', abbreviation: 'P.te' }, { name: 'Portico', abbreviation: 'P.co' }, { name: 'Rampa', abbreviation: 'Rampa' }, { name: 'Regione', abbreviation: 'Reg.' }, { name: 'Rione', abbreviation: 'R.ne' }, { name: 'Rio', abbreviation: 'Rio' }, { name: 'Ripa', abbreviation: 'Ripa' }, { name: 'Riva', abbreviation: 'Riva' }, { name: 'Rondò', abbreviation: 'Rondò' }, { name: 'Rotonda', abbreviation: 'Rot.' }, { name: 'Sagrato', abbreviation: 'Sagr.' }, { name: 'Salita', abbreviation: 'Sal.' }, { name: 'Scalinata', abbreviation: 'Scal.' }, { name: 'Scalone', abbreviation: 'Scal.' }, { name: 'Slargo', abbreviation: 'Sl.' }, { name: 'Sottoportico', abbreviation: 'Sott.' }, { name: 'Strada', abbreviation: 'Str.' }, { name: 'Stradale', abbreviation: 'Str.le' }, { name: 'Strettoia', abbreviation: 'Strett.' }, { name: 'Traversa', abbreviation: 'Trav.' }, { name: 'Via', abbreviation: 'V.' }, { name: 'Viale', abbreviation: 'V.le' }, { name: 'Vicinale', abbreviation: 'Vic.le' }, { name: 'Vicolo', abbreviation: 'Vic.' }]
	        },

	        months: [{ name: 'January', short_name: 'Jan', numeric: '01', days: 31 },
	        // Not messing with leap years...
	        { name: 'February', short_name: 'Feb', numeric: '02', days: 28 }, { name: 'March', short_name: 'Mar', numeric: '03', days: 31 }, { name: 'April', short_name: 'Apr', numeric: '04', days: 30 }, { name: 'May', short_name: 'May', numeric: '05', days: 31 }, { name: 'June', short_name: 'Jun', numeric: '06', days: 30 }, { name: 'July', short_name: 'Jul', numeric: '07', days: 31 }, { name: 'August', short_name: 'Aug', numeric: '08', days: 31 }, { name: 'September', short_name: 'Sep', numeric: '09', days: 30 }, { name: 'October', short_name: 'Oct', numeric: '10', days: 31 }, { name: 'November', short_name: 'Nov', numeric: '11', days: 30 }, { name: 'December', short_name: 'Dec', numeric: '12', days: 31 }],

	        // http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
	        cc_types: [{ name: "American Express", short_name: 'amex', prefix: '34', length: 15 }, { name: "Bankcard", short_name: 'bankcard', prefix: '5610', length: 16 }, { name: "China UnionPay", short_name: 'chinaunion', prefix: '62', length: 16 }, { name: "Diners Club Carte Blanche", short_name: 'dccarte', prefix: '300', length: 14 }, { name: "Diners Club enRoute", short_name: 'dcenroute', prefix: '2014', length: 15 }, { name: "Diners Club International", short_name: 'dcintl', prefix: '36', length: 14 }, { name: "Diners Club United States & Canada", short_name: 'dcusc', prefix: '54', length: 16 }, { name: "Discover Card", short_name: 'discover', prefix: '6011', length: 16 }, { name: "InstaPayment", short_name: 'instapay', prefix: '637', length: 16 }, { name: "JCB", short_name: 'jcb', prefix: '3528', length: 16 }, { name: "Laser", short_name: 'laser', prefix: '6304', length: 16 }, { name: "Maestro", short_name: 'maestro', prefix: '5018', length: 16 }, { name: "Mastercard", short_name: 'mc', prefix: '51', length: 16 }, { name: "Solo", short_name: 'solo', prefix: '6334', length: 16 }, { name: "Switch", short_name: 'switch', prefix: '4903', length: 16 }, { name: "Visa", short_name: 'visa', prefix: '4', length: 16 }, { name: "Visa Electron", short_name: 'electron', prefix: '4026', length: 16 }],

	        //return all world currency by ISO 4217
	        currency_types: [{ 'code': 'AED', 'name': 'United Arab Emirates Dirham' }, { 'code': 'AFN', 'name': 'Afghanistan Afghani' }, { 'code': 'ALL', 'name': 'Albania Lek' }, { 'code': 'AMD', 'name': 'Armenia Dram' }, { 'code': 'ANG', 'name': 'Netherlands Antilles Guilder' }, { 'code': 'AOA', 'name': 'Angola Kwanza' }, { 'code': 'ARS', 'name': 'Argentina Peso' }, { 'code': 'AUD', 'name': 'Australia Dollar' }, { 'code': 'AWG', 'name': 'Aruba Guilder' }, { 'code': 'AZN', 'name': 'Azerbaijan New Manat' }, { 'code': 'BAM', 'name': 'Bosnia and Herzegovina Convertible Marka' }, { 'code': 'BBD', 'name': 'Barbados Dollar' }, { 'code': 'BDT', 'name': 'Bangladesh Taka' }, { 'code': 'BGN', 'name': 'Bulgaria Lev' }, { 'code': 'BHD', 'name': 'Bahrain Dinar' }, { 'code': 'BIF', 'name': 'Burundi Franc' }, { 'code': 'BMD', 'name': 'Bermuda Dollar' }, { 'code': 'BND', 'name': 'Brunei Darussalam Dollar' }, { 'code': 'BOB', 'name': 'Bolivia Boliviano' }, { 'code': 'BRL', 'name': 'Brazil Real' }, { 'code': 'BSD', 'name': 'Bahamas Dollar' }, { 'code': 'BTN', 'name': 'Bhutan Ngultrum' }, { 'code': 'BWP', 'name': 'Botswana Pula' }, { 'code': 'BYR', 'name': 'Belarus Ruble' }, { 'code': 'BZD', 'name': 'Belize Dollar' }, { 'code': 'CAD', 'name': 'Canada Dollar' }, { 'code': 'CDF', 'name': 'Congo/Kinshasa Franc' }, { 'code': 'CHF', 'name': 'Switzerland Franc' }, { 'code': 'CLP', 'name': 'Chile Peso' }, { 'code': 'CNY', 'name': 'China Yuan Renminbi' }, { 'code': 'COP', 'name': 'Colombia Peso' }, { 'code': 'CRC', 'name': 'Costa Rica Colon' }, { 'code': 'CUC', 'name': 'Cuba Convertible Peso' }, { 'code': 'CUP', 'name': 'Cuba Peso' }, { 'code': 'CVE', 'name': 'Cape Verde Escudo' }, { 'code': 'CZK', 'name': 'Czech Republic Koruna' }, { 'code': 'DJF', 'name': 'Djibouti Franc' }, { 'code': 'DKK', 'name': 'Denmark Krone' }, { 'code': 'DOP', 'name': 'Dominican Republic Peso' }, { 'code': 'DZD', 'name': 'Algeria Dinar' }, { 'code': 'EGP', 'name': 'Egypt Pound' }, { 'code': 'ERN', 'name': 'Eritrea Nakfa' }, { 'code': 'ETB', 'name': 'Ethiopia Birr' }, { 'code': 'EUR', 'name': 'Euro Member Countries' }, { 'code': 'FJD', 'name': 'Fiji Dollar' }, { 'code': 'FKP', 'name': 'Falkland Islands (Malvinas) Pound' }, { 'code': 'GBP', 'name': 'United Kingdom Pound' }, { 'code': 'GEL', 'name': 'Georgia Lari' }, { 'code': 'GGP', 'name': 'Guernsey Pound' }, { 'code': 'GHS', 'name': 'Ghana Cedi' }, { 'code': 'GIP', 'name': 'Gibraltar Pound' }, { 'code': 'GMD', 'name': 'Gambia Dalasi' }, { 'code': 'GNF', 'name': 'Guinea Franc' }, { 'code': 'GTQ', 'name': 'Guatemala Quetzal' }, { 'code': 'GYD', 'name': 'Guyana Dollar' }, { 'code': 'HKD', 'name': 'Hong Kong Dollar' }, { 'code': 'HNL', 'name': 'Honduras Lempira' }, { 'code': 'HRK', 'name': 'Croatia Kuna' }, { 'code': 'HTG', 'name': 'Haiti Gourde' }, { 'code': 'HUF', 'name': 'Hungary Forint' }, { 'code': 'IDR', 'name': 'Indonesia Rupiah' }, { 'code': 'ILS', 'name': 'Israel Shekel' }, { 'code': 'IMP', 'name': 'Isle of Man Pound' }, { 'code': 'INR', 'name': 'India Rupee' }, { 'code': 'IQD', 'name': 'Iraq Dinar' }, { 'code': 'IRR', 'name': 'Iran Rial' }, { 'code': 'ISK', 'name': 'Iceland Krona' }, { 'code': 'JEP', 'name': 'Jersey Pound' }, { 'code': 'JMD', 'name': 'Jamaica Dollar' }, { 'code': 'JOD', 'name': 'Jordan Dinar' }, { 'code': 'JPY', 'name': 'Japan Yen' }, { 'code': 'KES', 'name': 'Kenya Shilling' }, { 'code': 'KGS', 'name': 'Kyrgyzstan Som' }, { 'code': 'KHR', 'name': 'Cambodia Riel' }, { 'code': 'KMF', 'name': 'Comoros Franc' }, { 'code': 'KPW', 'name': 'Korea (North) Won' }, { 'code': 'KRW', 'name': 'Korea (South) Won' }, { 'code': 'KWD', 'name': 'Kuwait Dinar' }, { 'code': 'KYD', 'name': 'Cayman Islands Dollar' }, { 'code': 'KZT', 'name': 'Kazakhstan Tenge' }, { 'code': 'LAK', 'name': 'Laos Kip' }, { 'code': 'LBP', 'name': 'Lebanon Pound' }, { 'code': 'LKR', 'name': 'Sri Lanka Rupee' }, { 'code': 'LRD', 'name': 'Liberia Dollar' }, { 'code': 'LSL', 'name': 'Lesotho Loti' }, { 'code': 'LTL', 'name': 'Lithuania Litas' }, { 'code': 'LYD', 'name': 'Libya Dinar' }, { 'code': 'MAD', 'name': 'Morocco Dirham' }, { 'code': 'MDL', 'name': 'Moldova Leu' }, { 'code': 'MGA', 'name': 'Madagascar Ariary' }, { 'code': 'MKD', 'name': 'Macedonia Denar' }, { 'code': 'MMK', 'name': 'Myanmar (Burma) Kyat' }, { 'code': 'MNT', 'name': 'Mongolia Tughrik' }, { 'code': 'MOP', 'name': 'Macau Pataca' }, { 'code': 'MRO', 'name': 'Mauritania Ouguiya' }, { 'code': 'MUR', 'name': 'Mauritius Rupee' }, { 'code': 'MVR', 'name': 'Maldives (Maldive Islands) Rufiyaa' }, { 'code': 'MWK', 'name': 'Malawi Kwacha' }, { 'code': 'MXN', 'name': 'Mexico Peso' }, { 'code': 'MYR', 'name': 'Malaysia Ringgit' }, { 'code': 'MZN', 'name': 'Mozambique Metical' }, { 'code': 'NAD', 'name': 'Namibia Dollar' }, { 'code': 'NGN', 'name': 'Nigeria Naira' }, { 'code': 'NIO', 'name': 'Nicaragua Cordoba' }, { 'code': 'NOK', 'name': 'Norway Krone' }, { 'code': 'NPR', 'name': 'Nepal Rupee' }, { 'code': 'NZD', 'name': 'New Zealand Dollar' }, { 'code': 'OMR', 'name': 'Oman Rial' }, { 'code': 'PAB', 'name': 'Panama Balboa' }, { 'code': 'PEN', 'name': 'Peru Nuevo Sol' }, { 'code': 'PGK', 'name': 'Papua New Guinea Kina' }, { 'code': 'PHP', 'name': 'Philippines Peso' }, { 'code': 'PKR', 'name': 'Pakistan Rupee' }, { 'code': 'PLN', 'name': 'Poland Zloty' }, { 'code': 'PYG', 'name': 'Paraguay Guarani' }, { 'code': 'QAR', 'name': 'Qatar Riyal' }, { 'code': 'RON', 'name': 'Romania New Leu' }, { 'code': 'RSD', 'name': 'Serbia Dinar' }, { 'code': 'RUB', 'name': 'Russia Ruble' }, { 'code': 'RWF', 'name': 'Rwanda Franc' }, { 'code': 'SAR', 'name': 'Saudi Arabia Riyal' }, { 'code': 'SBD', 'name': 'Solomon Islands Dollar' }, { 'code': 'SCR', 'name': 'Seychelles Rupee' }, { 'code': 'SDG', 'name': 'Sudan Pound' }, { 'code': 'SEK', 'name': 'Sweden Krona' }, { 'code': 'SGD', 'name': 'Singapore Dollar' }, { 'code': 'SHP', 'name': 'Saint Helena Pound' }, { 'code': 'SLL', 'name': 'Sierra Leone Leone' }, { 'code': 'SOS', 'name': 'Somalia Shilling' }, { 'code': 'SPL', 'name': 'Seborga Luigino' }, { 'code': 'SRD', 'name': 'Suriname Dollar' }, { 'code': 'STD', 'name': 'São Tomé and Príncipe Dobra' }, { 'code': 'SVC', 'name': 'El Salvador Colon' }, { 'code': 'SYP', 'name': 'Syria Pound' }, { 'code': 'SZL', 'name': 'Swaziland Lilangeni' }, { 'code': 'THB', 'name': 'Thailand Baht' }, { 'code': 'TJS', 'name': 'Tajikistan Somoni' }, { 'code': 'TMT', 'name': 'Turkmenistan Manat' }, { 'code': 'TND', 'name': 'Tunisia Dinar' }, { 'code': 'TOP', 'name': 'Tonga Pa\'anga' }, { 'code': 'TRY', 'name': 'Turkey Lira' }, { 'code': 'TTD', 'name': 'Trinidad and Tobago Dollar' }, { 'code': 'TVD', 'name': 'Tuvalu Dollar' }, { 'code': 'TWD', 'name': 'Taiwan New Dollar' }, { 'code': 'TZS', 'name': 'Tanzania Shilling' }, { 'code': 'UAH', 'name': 'Ukraine Hryvnia' }, { 'code': 'UGX', 'name': 'Uganda Shilling' }, { 'code': 'USD', 'name': 'United States Dollar' }, { 'code': 'UYU', 'name': 'Uruguay Peso' }, { 'code': 'UZS', 'name': 'Uzbekistan Som' }, { 'code': 'VEF', 'name': 'Venezuela Bolivar' }, { 'code': 'VND', 'name': 'Viet Nam Dong' }, { 'code': 'VUV', 'name': 'Vanuatu Vatu' }, { 'code': 'WST', 'name': 'Samoa Tala' }, { 'code': 'XAF', 'name': 'Communauté Financière Africaine (BEAC) CFA Franc BEAC' }, { 'code': 'XCD', 'name': 'East Caribbean Dollar' }, { 'code': 'XDR', 'name': 'International Monetary Fund (IMF) Special Drawing Rights' }, { 'code': 'XOF', 'name': 'Communauté Financière Africaine (BCEAO) Franc' }, { 'code': 'XPF', 'name': 'Comptoirs Français du Pacifique (CFP) Franc' }, { 'code': 'YER', 'name': 'Yemen Rial' }, { 'code': 'ZAR', 'name': 'South Africa Rand' }, { 'code': 'ZMW', 'name': 'Zambia Kwacha' }, { 'code': 'ZWD', 'name': 'Zimbabwe Dollar' }],

	        // return the names of all valide colors
	        colorNames: ["AliceBlue", "Black", "Navy", "DarkBlue", "MediumBlue", "Blue", "DarkGreen", "Green", "Teal", "DarkCyan", "DeepSkyBlue", "DarkTurquoise", "MediumSpringGreen", "Lime", "SpringGreen", "Aqua", "Cyan", "MidnightBlue", "DodgerBlue", "LightSeaGreen", "ForestGreen", "SeaGreen", "DarkSlateGray", "LimeGreen", "MediumSeaGreen", "Turquoise", "RoyalBlue", "SteelBlue", "DarkSlateBlue", "MediumTurquoise", "Indigo", "DarkOliveGreen", "CadetBlue", "CornflowerBlue", "RebeccaPurple", "MediumAquaMarine", "DimGray", "SlateBlue", "OliveDrab", "SlateGray", "LightSlateGray", "MediumSlateBlue", "LawnGreen", "Chartreuse", "Aquamarine", "Maroon", "Purple", "Olive", "Gray", "SkyBlue", "LightSkyBlue", "BlueViolet", "DarkRed", "DarkMagenta", "SaddleBrown", "Ivory", "White", "DarkSeaGreen", "LightGreen", "MediumPurple", "DarkViolet", "PaleGreen", "DarkOrchid", "YellowGreen", "Sienna", "Brown", "DarkGray", "LightBlue", "GreenYellow", "PaleTurquoise", "LightSteelBlue", "PowderBlue", "FireBrick", "DarkGoldenRod", "MediumOrchid", "RosyBrown", "DarkKhaki", "Silver", "MediumVioletRed", "IndianRed", "Peru", "Chocolate", "Tan", "LightGray", "Thistle", "Orchid", "GoldenRod", "PaleVioletRed", "Crimson", "Gainsboro", "Plum", "BurlyWood", "LightCyan", "Lavender", "DarkSalmon", "Violet", "PaleGoldenRod", "LightCoral", "Khaki", "AliceBlue", "HoneyDew", "Azure", "SandyBrown", "Wheat", "Beige", "WhiteSmoke", "MintCream", "GhostWhite", "Salmon", "AntiqueWhite", "Linen", "LightGoldenRodYellow", "OldLace", "Red", "Fuchsia", "Magenta", "DeepPink", "OrangeRed", "Tomato", "HotPink", "Coral", "DarkOrange", "LightSalmon", "Orange", "LightPink", "Pink", "Gold", "PeachPuff", "NavajoWhite", "Moccasin", "Bisque", "MistyRose", "BlanchedAlmond", "PapayaWhip", "LavenderBlush", "SeaShell", "Cornsilk", "LemonChiffon", "FloralWhite", "Snow", "Yellow", "LightYellow"],

	        fileExtension: {
	            "raster": ["bmp", "gif", "gpl", "ico", "jpeg", "psd", "png", "psp", "raw", "tiff"],
	            "vector": ["3dv", "amf", "awg", "ai", "cgm", "cdr", "cmx", "dxf", "e2d", "egt", "eps", "fs", "odg", "svg", "xar"],
	            "3d": ["3dmf", "3dm", "3mf", "3ds", "an8", "aoi", "blend", "cal3d", "cob", "ctm", "iob", "jas", "max", "mb", "mdx", "obj", "x", "x3d"],
	            "document": ["doc", "docx", "dot", "html", "xml", "odt", "odm", "ott", "csv", "rtf", "tex", "xhtml", "xps"]
	        },

	        // Data taken from https://github.com/dmfilipenko/timezones.json/blob/master/timezones.json
	        timezones: [{
	            "name": "Dateline Standard Time",
	            "abbr": "DST",
	            "offset": -12,
	            "isdst": false,
	            "text": "(UTC-12:00) International Date Line West",
	            "utc": ["Etc/GMT+12"]
	        }, {
	            "name": "UTC-11",
	            "abbr": "U",
	            "offset": -11,
	            "isdst": false,
	            "text": "(UTC-11:00) Coordinated Universal Time-11",
	            "utc": ["Etc/GMT+11", "Pacific/Midway", "Pacific/Niue", "Pacific/Pago_Pago"]
	        }, {
	            "name": "Hawaiian Standard Time",
	            "abbr": "HST",
	            "offset": -10,
	            "isdst": false,
	            "text": "(UTC-10:00) Hawaii",
	            "utc": ["Etc/GMT+10", "Pacific/Honolulu", "Pacific/Johnston", "Pacific/Rarotonga", "Pacific/Tahiti"]
	        }, {
	            "name": "Alaskan Standard Time",
	            "abbr": "AKDT",
	            "offset": -8,
	            "isdst": true,
	            "text": "(UTC-09:00) Alaska",
	            "utc": ["America/Anchorage", "America/Juneau", "America/Nome", "America/Sitka", "America/Yakutat"]
	        }, {
	            "name": "Pacific Standard Time (Mexico)",
	            "abbr": "PDT",
	            "offset": -7,
	            "isdst": true,
	            "text": "(UTC-08:00) Baja California",
	            "utc": ["America/Santa_Isabel"]
	        }, {
	            "name": "Pacific Standard Time",
	            "abbr": "PDT",
	            "offset": -7,
	            "isdst": true,
	            "text": "(UTC-08:00) Pacific Time (US & Canada)",
	            "utc": ["America/Dawson", "America/Los_Angeles", "America/Tijuana", "America/Vancouver", "America/Whitehorse", "PST8PDT"]
	        }, {
	            "name": "US Mountain Standard Time",
	            "abbr": "UMST",
	            "offset": -7,
	            "isdst": false,
	            "text": "(UTC-07:00) Arizona",
	            "utc": ["America/Creston", "America/Dawson_Creek", "America/Hermosillo", "America/Phoenix", "Etc/GMT+7"]
	        }, {
	            "name": "Mountain Standard Time (Mexico)",
	            "abbr": "MDT",
	            "offset": -6,
	            "isdst": true,
	            "text": "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
	            "utc": ["America/Chihuahua", "America/Mazatlan"]
	        }, {
	            "name": "Mountain Standard Time",
	            "abbr": "MDT",
	            "offset": -6,
	            "isdst": true,
	            "text": "(UTC-07:00) Mountain Time (US & Canada)",
	            "utc": ["America/Boise", "America/Cambridge_Bay", "America/Denver", "America/Edmonton", "America/Inuvik", "America/Ojinaga", "America/Yellowknife", "MST7MDT"]
	        }, {
	            "name": "Central America Standard Time",
	            "abbr": "CAST",
	            "offset": -6,
	            "isdst": false,
	            "text": "(UTC-06:00) Central America",
	            "utc": ["America/Belize", "America/Costa_Rica", "America/El_Salvador", "America/Guatemala", "America/Managua", "America/Tegucigalpa", "Etc/GMT+6", "Pacific/Galapagos"]
	        }, {
	            "name": "Central Standard Time",
	            "abbr": "CDT",
	            "offset": -5,
	            "isdst": true,
	            "text": "(UTC-06:00) Central Time (US & Canada)",
	            "utc": ["America/Chicago", "America/Indiana/Knox", "America/Indiana/Tell_City", "America/Matamoros", "America/Menominee", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Rainy_River", "America/Rankin_Inlet", "America/Resolute", "America/Winnipeg", "CST6CDT"]
	        }, {
	            "name": "Central Standard Time (Mexico)",
	            "abbr": "CDT",
	            "offset": -5,
	            "isdst": true,
	            "text": "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
	            "utc": ["America/Bahia_Banderas", "America/Cancun", "America/Merida", "America/Mexico_City", "America/Monterrey"]
	        }, {
	            "name": "Canada Central Standard Time",
	            "abbr": "CCST",
	            "offset": -6,
	            "isdst": false,
	            "text": "(UTC-06:00) Saskatchewan",
	            "utc": ["America/Regina", "America/Swift_Current"]
	        }, {
	            "name": "SA Pacific Standard Time",
	            "abbr": "SPST",
	            "offset": -5,
	            "isdst": false,
	            "text": "(UTC-05:00) Bogota, Lima, Quito",
	            "utc": ["America/Bogota", "America/Cayman", "America/Coral_Harbour", "America/Eirunepe", "America/Guayaquil", "America/Jamaica", "America/Lima", "America/Panama", "America/Rio_Branco", "Etc/GMT+5"]
	        }, {
	            "name": "Eastern Standard Time",
	            "abbr": "EDT",
	            "offset": -4,
	            "isdst": true,
	            "text": "(UTC-05:00) Eastern Time (US & Canada)",
	            "utc": ["America/Detroit", "America/Havana", "America/Indiana/Petersburg", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Iqaluit", "America/Kentucky/Monticello", "America/Louisville", "America/Montreal", "America/Nassau", "America/New_York", "America/Nipigon", "America/Pangnirtung", "America/Port-au-Prince", "America/Thunder_Bay", "America/Toronto", "EST5EDT"]
	        }, {
	            "name": "US Eastern Standard Time",
	            "abbr": "UEDT",
	            "offset": -4,
	            "isdst": true,
	            "text": "(UTC-05:00) Indiana (East)",
	            "utc": ["America/Indiana/Marengo", "America/Indiana/Vevay", "America/Indianapolis"]
	        }, {
	            "name": "Venezuela Standard Time",
	            "abbr": "VST",
	            "offset": -4.5,
	            "isdst": false,
	            "text": "(UTC-04:30) Caracas",
	            "utc": ["America/Caracas"]
	        }, {
	            "name": "Paraguay Standard Time",
	            "abbr": "PST",
	            "offset": -4,
	            "isdst": false,
	            "text": "(UTC-04:00) Asuncion",
	            "utc": ["America/Asuncion"]
	        }, {
	            "name": "Atlantic Standard Time",
	            "abbr": "ADT",
	            "offset": -3,
	            "isdst": true,
	            "text": "(UTC-04:00) Atlantic Time (Canada)",
	            "utc": ["America/Glace_Bay", "America/Goose_Bay", "America/Halifax", "America/Moncton", "America/Thule", "Atlantic/Bermuda"]
	        }, {
	            "name": "Central Brazilian Standard Time",
	            "abbr": "CBST",
	            "offset": -4,
	            "isdst": false,
	            "text": "(UTC-04:00) Cuiaba",
	            "utc": ["America/Campo_Grande", "America/Cuiaba"]
	        }, {
	            "name": "SA Western Standard Time",
	            "abbr": "SWST",
	            "offset": -4,
	            "isdst": false,
	            "text": "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
	            "utc": ["America/Anguilla", "America/Antigua", "America/Aruba", "America/Barbados", "America/Blanc-Sablon", "America/Boa_Vista", "America/Curacao", "America/Dominica", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guyana", "America/Kralendijk", "America/La_Paz", "America/Lower_Princes", "America/Manaus", "America/Marigot", "America/Martinique", "America/Montserrat", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Santo_Domingo", "America/St_Barthelemy", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Tortola", "Etc/GMT+4"]
	        }, {
	            "name": "Pacific SA Standard Time",
	            "abbr": "PSST",
	            "offset": -4,
	            "isdst": false,
	            "text": "(UTC-04:00) Santiago",
	            "utc": ["America/Santiago", "Antarctica/Palmer"]
	        }, {
	            "name": "Newfoundland Standard Time",
	            "abbr": "NDT",
	            "offset": -2.5,
	            "isdst": true,
	            "text": "(UTC-03:30) Newfoundland",
	            "utc": ["America/St_Johns"]
	        }, {
	            "name": "E. South America Standard Time",
	            "abbr": "ESAST",
	            "offset": -3,
	            "isdst": false,
	            "text": "(UTC-03:00) Brasilia",
	            "utc": ["America/Sao_Paulo"]
	        }, {
	            "name": "Argentina Standard Time",
	            "abbr": "AST",
	            "offset": -3,
	            "isdst": false,
	            "text": "(UTC-03:00) Buenos Aires",
	            "utc": ["America/Argentina/La_Rioja", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Buenos_Aires", "America/Catamarca", "America/Cordoba", "America/Jujuy", "America/Mendoza"]
	        }, {
	            "name": "SA Eastern Standard Time",
	            "abbr": "SEST",
	            "offset": -3,
	            "isdst": false,
	            "text": "(UTC-03:00) Cayenne, Fortaleza",
	            "utc": ["America/Araguaina", "America/Belem", "America/Cayenne", "America/Fortaleza", "America/Maceio", "America/Paramaribo", "America/Recife", "America/Santarem", "Antarctica/Rothera", "Atlantic/Stanley", "Etc/GMT+3"]
	        }, {
	            "name": "Greenland Standard Time",
	            "abbr": "GDT",
	            "offset": -2,
	            "isdst": true,
	            "text": "(UTC-03:00) Greenland",
	            "utc": ["America/Godthab"]
	        }, {
	            "name": "Montevideo Standard Time",
	            "abbr": "MST",
	            "offset": -3,
	            "isdst": false,
	            "text": "(UTC-03:00) Montevideo",
	            "utc": ["America/Montevideo"]
	        }, {
	            "name": "Bahia Standard Time",
	            "abbr": "BST",
	            "offset": -3,
	            "isdst": false,
	            "text": "(UTC-03:00) Salvador",
	            "utc": ["America/Bahia"]
	        }, {
	            "name": "UTC-02",
	            "abbr": "U",
	            "offset": -2,
	            "isdst": false,
	            "text": "(UTC-02:00) Coordinated Universal Time-02",
	            "utc": ["America/Noronha", "Atlantic/South_Georgia", "Etc/GMT+2"]
	        }, {
	            "name": "Mid-Atlantic Standard Time",
	            "abbr": "MDT",
	            "offset": -1,
	            "isdst": true,
	            "text": "(UTC-02:00) Mid-Atlantic - Old"
	        }, {
	            "name": "Azores Standard Time",
	            "abbr": "ADT",
	            "offset": 0,
	            "isdst": true,
	            "text": "(UTC-01:00) Azores",
	            "utc": ["America/Scoresbysund", "Atlantic/Azores"]
	        }, {
	            "name": "Cape Verde Standard Time",
	            "abbr": "CVST",
	            "offset": -1,
	            "isdst": false,
	            "text": "(UTC-01:00) Cape Verde Is.",
	            "utc": ["Atlantic/Cape_Verde", "Etc/GMT+1"]
	        }, {
	            "name": "Morocco Standard Time",
	            "abbr": "MDT",
	            "offset": 1,
	            "isdst": true,
	            "text": "(UTC) Casablanca",
	            "utc": ["Africa/Casablanca", "Africa/El_Aaiun"]
	        }, {
	            "name": "UTC",
	            "abbr": "CUT",
	            "offset": 0,
	            "isdst": false,
	            "text": "(UTC) Coordinated Universal Time",
	            "utc": ["America/Danmarkshavn", "Etc/GMT"]
	        }, {
	            "name": "GMT Standard Time",
	            "abbr": "GDT",
	            "offset": 1,
	            "isdst": true,
	            "text": "(UTC) Dublin, Edinburgh, Lisbon, London",
	            "utc": ["Atlantic/Canary", "Atlantic/Faeroe", "Atlantic/Madeira", "Europe/Dublin", "Europe/Guernsey", "Europe/Isle_of_Man", "Europe/Jersey", "Europe/Lisbon", "Europe/London"]
	        }, {
	            "name": "Greenwich Standard Time",
	            "abbr": "GST",
	            "offset": 0,
	            "isdst": false,
	            "text": "(UTC) Monrovia, Reykjavik",
	            "utc": ["Africa/Abidjan", "Africa/Accra", "Africa/Bamako", "Africa/Banjul", "Africa/Bissau", "Africa/Conakry", "Africa/Dakar", "Africa/Freetown", "Africa/Lome", "Africa/Monrovia", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Sao_Tome", "Atlantic/Reykjavik", "Atlantic/St_Helena"]
	        }, {
	            "name": "W. Europe Standard Time",
	            "abbr": "WEDT",
	            "offset": 2,
	            "isdst": true,
	            "text": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
	            "utc": ["Arctic/Longyearbyen", "Europe/Amsterdam", "Europe/Andorra", "Europe/Berlin", "Europe/Busingen", "Europe/Gibraltar", "Europe/Luxembourg", "Europe/Malta", "Europe/Monaco", "Europe/Oslo", "Europe/Rome", "Europe/San_Marino", "Europe/Stockholm", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Zurich"]
	        }, {
	            "name": "Central Europe Standard Time",
	            "abbr": "CEDT",
	            "offset": 2,
	            "isdst": true,
	            "text": "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
	            "utc": ["Europe/Belgrade", "Europe/Bratislava", "Europe/Budapest", "Europe/Ljubljana", "Europe/Podgorica", "Europe/Prague", "Europe/Tirane"]
	        }, {
	            "name": "Romance Standard Time",
	            "abbr": "RDT",
	            "offset": 2,
	            "isdst": true,
	            "text": "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
	            "utc": ["Africa/Ceuta", "Europe/Brussels", "Europe/Copenhagen", "Europe/Madrid", "Europe/Paris"]
	        }, {
	            "name": "Central European Standard Time",
	            "abbr": "CEDT",
	            "offset": 2,
	            "isdst": true,
	            "text": "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
	            "utc": ["Europe/Sarajevo", "Europe/Skopje", "Europe/Warsaw", "Europe/Zagreb"]
	        }, {
	            "name": "W. Central Africa Standard Time",
	            "abbr": "WCAST",
	            "offset": 1,
	            "isdst": false,
	            "text": "(UTC+01:00) West Central Africa",
	            "utc": ["Africa/Algiers", "Africa/Bangui", "Africa/Brazzaville", "Africa/Douala", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Luanda", "Africa/Malabo", "Africa/Ndjamena", "Africa/Niamey", "Africa/Porto-Novo", "Africa/Tunis", "Etc/GMT-1"]
	        }, {
	            "name": "Namibia Standard Time",
	            "abbr": "NST",
	            "offset": 1,
	            "isdst": false,
	            "text": "(UTC+01:00) Windhoek",
	            "utc": ["Africa/Windhoek"]
	        }, {
	            "name": "GTB Standard Time",
	            "abbr": "GDT",
	            "offset": 3,
	            "isdst": true,
	            "text": "(UTC+02:00) Athens, Bucharest",
	            "utc": ["Asia/Nicosia", "Europe/Athens", "Europe/Bucharest", "Europe/Chisinau"]
	        }, {
	            "name": "Middle East Standard Time",
	            "abbr": "MEDT",
	            "offset": 3,
	            "isdst": true,
	            "text": "(UTC+02:00) Beirut",
	            "utc": ["Asia/Beirut"]
	        }, {
	            "name": "Egypt Standard Time",
	            "abbr": "EST",
	            "offset": 2,
	            "isdst": false,
	            "text": "(UTC+02:00) Cairo",
	            "utc": ["Africa/Cairo"]
	        }, {
	            "name": "Syria Standard Time",
	            "abbr": "SDT",
	            "offset": 3,
	            "isdst": true,
	            "text": "(UTC+02:00) Damascus",
	            "utc": ["Asia/Damascus"]
	        }, {
	            "name": "E. Europe Standard Time",
	            "abbr": "EEDT",
	            "offset": 3,
	            "isdst": true,
	            "text": "(UTC+02:00) E. Europe"
	        }, {
	            "name": "South Africa Standard Time",
	            "abbr": "SAST",
	            "offset": 2,
	            "isdst": false,
	            "text": "(UTC+02:00) Harare, Pretoria",
	            "utc": ["Africa/Blantyre", "Africa/Bujumbura", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Kigali", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Etc/GMT-2"]
	        }, {
	            "name": "FLE Standard Time",
	            "abbr": "FDT",
	            "offset": 3,
	            "isdst": true,
	            "text": "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
	            "utc": ["Europe/Helsinki", "Europe/Kiev", "Europe/Mariehamn", "Europe/Riga", "Europe/Sofia", "Europe/Tallinn", "Europe/Uzhgorod", "Europe/Vilnius", "Europe/Zaporozhye"]
	        }, {
	            "name": "Turkey Standard Time",
	            "abbr": "TDT",
	            "offset": 3,
	            "isdst": true,
	            "text": "(UTC+02:00) Istanbul",
	            "utc": ["Europe/Istanbul"]
	        }, {
	            "name": "Israel Standard Time",
	            "abbr": "JDT",
	            "offset": 3,
	            "isdst": true,
	            "text": "(UTC+02:00) Jerusalem",
	            "utc": ["Asia/Jerusalem"]
	        }, {
	            "name": "Libya Standard Time",
	            "abbr": "LST",
	            "offset": 2,
	            "isdst": false,
	            "text": "(UTC+02:00) Tripoli",
	            "utc": ["Africa/Tripoli"]
	        }, {
	            "name": "Jordan Standard Time",
	            "abbr": "JST",
	            "offset": 3,
	            "isdst": false,
	            "text": "(UTC+03:00) Amman",
	            "utc": ["Asia/Amman"]
	        }, {
	            "name": "Arabic Standard Time",
	            "abbr": "AST",
	            "offset": 3,
	            "isdst": false,
	            "text": "(UTC+03:00) Baghdad",
	            "utc": ["Asia/Baghdad"]
	        }, {
	            "name": "Kaliningrad Standard Time",
	            "abbr": "KST",
	            "offset": 3,
	            "isdst": false,
	            "text": "(UTC+03:00) Kaliningrad, Minsk",
	            "utc": ["Europe/Kaliningrad", "Europe/Minsk"]
	        }, {
	            "name": "Arab Standard Time",
	            "abbr": "AST",
	            "offset": 3,
	            "isdst": false,
	            "text": "(UTC+03:00) Kuwait, Riyadh",
	            "utc": ["Asia/Aden", "Asia/Bahrain", "Asia/Kuwait", "Asia/Qatar", "Asia/Riyadh"]
	        }, {
	            "name": "E. Africa Standard Time",
	            "abbr": "EAST",
	            "offset": 3,
	            "isdst": false,
	            "text": "(UTC+03:00) Nairobi",
	            "utc": ["Africa/Addis_Ababa", "Africa/Asmera", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Mogadishu", "Africa/Nairobi", "Antarctica/Syowa", "Etc/GMT-3", "Indian/Antananarivo", "Indian/Comoro", "Indian/Mayotte"]
	        }, {
	            "name": "Iran Standard Time",
	            "abbr": "IDT",
	            "offset": 4.5,
	            "isdst": true,
	            "text": "(UTC+03:30) Tehran",
	            "utc": ["Asia/Tehran"]
	        }, {
	            "name": "Arabian Standard Time",
	            "abbr": "AST",
	            "offset": 4,
	            "isdst": false,
	            "text": "(UTC+04:00) Abu Dhabi, Muscat",
	            "utc": ["Asia/Dubai", "Asia/Muscat", "Etc/GMT-4"]
	        }, {
	            "name": "Azerbaijan Standard Time",
	            "abbr": "ADT",
	            "offset": 5,
	            "isdst": true,
	            "text": "(UTC+04:00) Baku",
	            "utc": ["Asia/Baku"]
	        }, {
	            "name": "Russian Standard Time",
	            "abbr": "RST",
	            "offset": 4,
	            "isdst": false,
	            "text": "(UTC+04:00) Moscow, St. Petersburg, Volgograd",
	            "utc": ["Europe/Moscow", "Europe/Samara", "Europe/Simferopol", "Europe/Volgograd"]
	        }, {
	            "name": "Mauritius Standard Time",
	            "abbr": "MST",
	            "offset": 4,
	            "isdst": false,
	            "text": "(UTC+04:00) Port Louis",
	            "utc": ["Indian/Mahe", "Indian/Mauritius", "Indian/Reunion"]
	        }, {
	            "name": "Georgian Standard Time",
	            "abbr": "GST",
	            "offset": 4,
	            "isdst": false,
	            "text": "(UTC+04:00) Tbilisi",
	            "utc": ["Asia/Tbilisi"]
	        }, {
	            "name": "Caucasus Standard Time",
	            "abbr": "CST",
	            "offset": 4,
	            "isdst": false,
	            "text": "(UTC+04:00) Yerevan",
	            "utc": ["Asia/Yerevan"]
	        }, {
	            "name": "Afghanistan Standard Time",
	            "abbr": "AST",
	            "offset": 4.5,
	            "isdst": false,
	            "text": "(UTC+04:30) Kabul",
	            "utc": ["Asia/Kabul"]
	        }, {
	            "name": "West Asia Standard Time",
	            "abbr": "WAST",
	            "offset": 5,
	            "isdst": false,
	            "text": "(UTC+05:00) Ashgabat, Tashkent",
	            "utc": ["Antarctica/Mawson", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Dushanbe", "Asia/Oral", "Asia/Samarkand", "Asia/Tashkent", "Etc/GMT-5", "Indian/Kerguelen", "Indian/Maldives"]
	        }, {
	            "name": "Pakistan Standard Time",
	            "abbr": "PST",
	            "offset": 5,
	            "isdst": false,
	            "text": "(UTC+05:00) Islamabad, Karachi",
	            "utc": ["Asia/Karachi"]
	        }, {
	            "name": "India Standard Time",
	            "abbr": "IST",
	            "offset": 5.5,
	            "isdst": false,
	            "text": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
	            "utc": ["Asia/Calcutta"]
	        }, {
	            "name": "Sri Lanka Standard Time",
	            "abbr": "SLST",
	            "offset": 5.5,
	            "isdst": false,
	            "text": "(UTC+05:30) Sri Jayawardenepura",
	            "utc": ["Asia/Colombo"]
	        }, {
	            "name": "Nepal Standard Time",
	            "abbr": "NST",
	            "offset": 5.75,
	            "isdst": false,
	            "text": "(UTC+05:45) Kathmandu",
	            "utc": ["Asia/Katmandu"]
	        }, {
	            "name": "Central Asia Standard Time",
	            "abbr": "CAST",
	            "offset": 6,
	            "isdst": false,
	            "text": "(UTC+06:00) Astana",
	            "utc": ["Antarctica/Vostok", "Asia/Almaty", "Asia/Bishkek", "Asia/Qyzylorda", "Asia/Urumqi", "Etc/GMT-6", "Indian/Chagos"]
	        }, {
	            "name": "Bangladesh Standard Time",
	            "abbr": "BST",
	            "offset": 6,
	            "isdst": false,
	            "text": "(UTC+06:00) Dhaka",
	            "utc": ["Asia/Dhaka", "Asia/Thimphu"]
	        }, {
	            "name": "Ekaterinburg Standard Time",
	            "abbr": "EST",
	            "offset": 6,
	            "isdst": false,
	            "text": "(UTC+06:00) Ekaterinburg",
	            "utc": ["Asia/Yekaterinburg"]
	        }, {
	            "name": "Myanmar Standard Time",
	            "abbr": "MST",
	            "offset": 6.5,
	            "isdst": false,
	            "text": "(UTC+06:30) Yangon (Rangoon)",
	            "utc": ["Asia/Rangoon", "Indian/Cocos"]
	        }, {
	            "name": "SE Asia Standard Time",
	            "abbr": "SAST",
	            "offset": 7,
	            "isdst": false,
	            "text": "(UTC+07:00) Bangkok, Hanoi, Jakarta",
	            "utc": ["Antarctica/Davis", "Asia/Bangkok", "Asia/Hovd", "Asia/Jakarta", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Saigon", "Asia/Vientiane", "Etc/GMT-7", "Indian/Christmas"]
	        }, {
	            "name": "N. Central Asia Standard Time",
	            "abbr": "NCAST",
	            "offset": 7,
	            "isdst": false,
	            "text": "(UTC+07:00) Novosibirsk",
	            "utc": ["Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk"]
	        }, {
	            "name": "China Standard Time",
	            "abbr": "CST",
	            "offset": 8,
	            "isdst": false,
	            "text": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
	            "utc": ["Asia/Hong_Kong", "Asia/Macau", "Asia/Shanghai"]
	        }, {
	            "name": "North Asia Standard Time",
	            "abbr": "NAST",
	            "offset": 8,
	            "isdst": false,
	            "text": "(UTC+08:00) Krasnoyarsk",
	            "utc": ["Asia/Krasnoyarsk"]
	        }, {
	            "name": "Singapore Standard Time",
	            "abbr": "MPST",
	            "offset": 8,
	            "isdst": false,
	            "text": "(UTC+08:00) Kuala Lumpur, Singapore",
	            "utc": ["Asia/Brunei", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Makassar", "Asia/Manila", "Asia/Singapore", "Etc/GMT-8"]
	        }, {
	            "name": "W. Australia Standard Time",
	            "abbr": "WAST",
	            "offset": 8,
	            "isdst": false,
	            "text": "(UTC+08:00) Perth",
	            "utc": ["Antarctica/Casey", "Australia/Perth"]
	        }, {
	            "name": "Taipei Standard Time",
	            "abbr": "TST",
	            "offset": 8,
	            "isdst": false,
	            "text": "(UTC+08:00) Taipei",
	            "utc": ["Asia/Taipei"]
	        }, {
	            "name": "Ulaanbaatar Standard Time",
	            "abbr": "UST",
	            "offset": 8,
	            "isdst": false,
	            "text": "(UTC+08:00) Ulaanbaatar",
	            "utc": ["Asia/Choibalsan", "Asia/Ulaanbaatar"]
	        }, {
	            "name": "North Asia East Standard Time",
	            "abbr": "NAEST",
	            "offset": 9,
	            "isdst": false,
	            "text": "(UTC+09:00) Irkutsk",
	            "utc": ["Asia/Irkutsk"]
	        }, {
	            "name": "Tokyo Standard Time",
	            "abbr": "TST",
	            "offset": 9,
	            "isdst": false,
	            "text": "(UTC+09:00) Osaka, Sapporo, Tokyo",
	            "utc": ["Asia/Dili", "Asia/Jayapura", "Asia/Tokyo", "Etc/GMT-9", "Pacific/Palau"]
	        }, {
	            "name": "Korea Standard Time",
	            "abbr": "KST",
	            "offset": 9,
	            "isdst": false,
	            "text": "(UTC+09:00) Seoul",
	            "utc": ["Asia/Pyongyang", "Asia/Seoul"]
	        }, {
	            "name": "Cen. Australia Standard Time",
	            "abbr": "CAST",
	            "offset": 9.5,
	            "isdst": false,
	            "text": "(UTC+09:30) Adelaide",
	            "utc": ["Australia/Adelaide", "Australia/Broken_Hill"]
	        }, {
	            "name": "AUS Central Standard Time",
	            "abbr": "ACST",
	            "offset": 9.5,
	            "isdst": false,
	            "text": "(UTC+09:30) Darwin",
	            "utc": ["Australia/Darwin"]
	        }, {
	            "name": "E. Australia Standard Time",
	            "abbr": "EAST",
	            "offset": 10,
	            "isdst": false,
	            "text": "(UTC+10:00) Brisbane",
	            "utc": ["Australia/Brisbane", "Australia/Lindeman"]
	        }, {
	            "name": "AUS Eastern Standard Time",
	            "abbr": "AEST",
	            "offset": 10,
	            "isdst": false,
	            "text": "(UTC+10:00) Canberra, Melbourne, Sydney",
	            "utc": ["Australia/Melbourne", "Australia/Sydney"]
	        }, {
	            "name": "West Pacific Standard Time",
	            "abbr": "WPST",
	            "offset": 10,
	            "isdst": false,
	            "text": "(UTC+10:00) Guam, Port Moresby",
	            "utc": ["Antarctica/DumontDUrville", "Etc/GMT-10", "Pacific/Guam", "Pacific/Port_Moresby", "Pacific/Saipan", "Pacific/Truk"]
	        }, {
	            "name": "Tasmania Standard Time",
	            "abbr": "TST",
	            "offset": 10,
	            "isdst": false,
	            "text": "(UTC+10:00) Hobart",
	            "utc": ["Australia/Currie", "Australia/Hobart"]
	        }, {
	            "name": "Yakutsk Standard Time",
	            "abbr": "YST",
	            "offset": 10,
	            "isdst": false,
	            "text": "(UTC+10:00) Yakutsk",
	            "utc": ["Asia/Chita", "Asia/Khandyga", "Asia/Yakutsk"]
	        }, {
	            "name": "Central Pacific Standard Time",
	            "abbr": "CPST",
	            "offset": 11,
	            "isdst": false,
	            "text": "(UTC+11:00) Solomon Is., New Caledonia",
	            "utc": ["Antarctica/Macquarie", "Etc/GMT-11", "Pacific/Efate", "Pacific/Guadalcanal", "Pacific/Kosrae", "Pacific/Noumea", "Pacific/Ponape"]
	        }, {
	            "name": "Vladivostok Standard Time",
	            "abbr": "VST",
	            "offset": 11,
	            "isdst": false,
	            "text": "(UTC+11:00) Vladivostok",
	            "utc": ["Asia/Sakhalin", "Asia/Ust-Nera", "Asia/Vladivostok"]
	        }, {
	            "name": "New Zealand Standard Time",
	            "abbr": "NZST",
	            "offset": 12,
	            "isdst": false,
	            "text": "(UTC+12:00) Auckland, Wellington",
	            "utc": ["Antarctica/McMurdo", "Pacific/Auckland"]
	        }, {
	            "name": "UTC+12",
	            "abbr": "U",
	            "offset": 12,
	            "isdst": false,
	            "text": "(UTC+12:00) Coordinated Universal Time+12",
	            "utc": ["Etc/GMT-12", "Pacific/Funafuti", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Nauru", "Pacific/Tarawa", "Pacific/Wake", "Pacific/Wallis"]
	        }, {
	            "name": "Fiji Standard Time",
	            "abbr": "FST",
	            "offset": 12,
	            "isdst": false,
	            "text": "(UTC+12:00) Fiji",
	            "utc": ["Pacific/Fiji"]
	        }, {
	            "name": "Magadan Standard Time",
	            "abbr": "MST",
	            "offset": 12,
	            "isdst": false,
	            "text": "(UTC+12:00) Magadan",
	            "utc": ["Asia/Anadyr", "Asia/Kamchatka", "Asia/Magadan", "Asia/Srednekolymsk"]
	        }, {
	            "name": "Kamchatka Standard Time",
	            "abbr": "KDT",
	            "offset": 13,
	            "isdst": true,
	            "text": "(UTC+12:00) Petropavlovsk-Kamchatsky - Old"
	        }, {
	            "name": "Tonga Standard Time",
	            "abbr": "TST",
	            "offset": 13,
	            "isdst": false,
	            "text": "(UTC+13:00) Nuku'alofa",
	            "utc": ["Etc/GMT-13", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Tongatapu"]
	        }, {
	            "name": "Samoa Standard Time",
	            "abbr": "SST",
	            "offset": 13,
	            "isdst": false,
	            "text": "(UTC+13:00) Samoa",
	            "utc": ["Pacific/Apia"]
	        }]
	    };

	    var o_hasOwnProperty = Object.prototype.hasOwnProperty;
	    var o_keys = Object.keys || function (obj) {
	        var result = [];
	        for (var key in obj) {
	            if (o_hasOwnProperty.call(obj, key)) {
	                result.push(key);
	            }
	        }

	        return result;
	    };

	    function _copyObject(source, target) {
	        var keys = o_keys(source);
	        var key;

	        for (var i = 0, l = keys.length; i < l; i++) {
	            key = keys[i];
	            target[key] = source[key] || target[key];
	        }
	    }

	    function _copyArray(source, target) {
	        for (var i = 0, l = source.length; i < l; i++) {
	            target[i] = source[i];
	        }
	    }

	    function copyObject(source, _target) {
	        var isArray = Array.isArray(source);
	        var target = _target || (isArray ? new Array(source.length) : {});

	        if (isArray) {
	            _copyArray(source, target);
	        } else {
	            _copyObject(source, target);
	        }

	        return target;
	    }

	    /** Get the data based on key**/
	    Chance.prototype.get = function (name) {
	        return copyObject(data[name]);
	    };

	    // Mac Address
	    Chance.prototype.mac_address = function (options) {
	        // typically mac addresses are separated by ":"
	        // however they can also be separated by "-"
	        // the network variant uses a dot every fourth byte

	        options = initOptions(options);
	        if (!options.separator) {
	            options.separator = options.networkVersion ? "." : ":";
	        }

	        var mac_pool = "ABCDEF1234567890",
	            mac = "";
	        if (!options.networkVersion) {
	            mac = this.n(this.string, 6, { pool: mac_pool, length: 2 }).join(options.separator);
	        } else {
	            mac = this.n(this.string, 3, { pool: mac_pool, length: 4 }).join(options.separator);
	        }

	        return mac;
	    };

	    Chance.prototype.normal = function (options) {
	        options = initOptions(options, { mean: 0, dev: 1, pool: [] });

	        testRange(options.pool.constructor !== Array, "Chance: The pool option must be a valid array.");

	        // If a pool has been passed, then we are returning an item from that pool,
	        // using the normal distribution settings that were passed in
	        if (options.pool.length > 0) {
	            return this.normal_pool(options);
	        }

	        // The Marsaglia Polar method
	        var s,
	            u,
	            v,
	            norm,
	            mean = options.mean,
	            dev = options.dev;

	        do {
	            // U and V are from the uniform distribution on (-1, 1)
	            u = this.random() * 2 - 1;
	            v = this.random() * 2 - 1;

	            s = u * u + v * v;
	        } while (s >= 1);

	        // Compute the standard normal variate
	        norm = u * Math.sqrt(-2 * Math.log(s) / s);

	        // Shape and scale
	        return dev * norm + mean;
	    };

	    Chance.prototype.normal_pool = function (options) {
	        var performanceCounter = 0;
	        do {
	            var idx = Math.round(this.normal({ mean: options.mean, dev: options.dev }));
	            if (idx < options.pool.length && idx >= 0) {
	                return options.pool[idx];
	            } else {
	                performanceCounter++;
	            }
	        } while (performanceCounter < 100);

	        throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.");
	    };

	    Chance.prototype.radio = function (options) {
	        // Initial Letter (Typically Designated by Side of Mississippi River)
	        options = initOptions(options, { side: "?" });
	        var fl = "";
	        switch (options.side.toLowerCase()) {
	            case "east":
	            case "e":
	                fl = "W";
	                break;
	            case "west":
	            case "w":
	                fl = "K";
	                break;
	            default:
	                fl = this.character({ pool: "KW" });
	                break;
	        }

	        return fl + this.character({ alpha: true, casing: "upper" }) + this.character({ alpha: true, casing: "upper" }) + this.character({ alpha: true, casing: "upper" });
	    };

	    // Set the data as key and data or the data map
	    Chance.prototype.set = function (name, values) {
	        if (typeof name === "string") {
	            data[name] = values;
	        } else {
	            data = copyObject(name, data);
	        }
	    };

	    Chance.prototype.tv = function (options) {
	        return this.radio(options);
	    };

	    // ID number for Brazil companies
	    Chance.prototype.cnpj = function () {
	        var n = this.n(this.natural, 8, { max: 9 });
	        var d1 = 2 + n[7] * 6 + n[6] * 7 + n[5] * 8 + n[4] * 9 + n[3] * 2 + n[2] * 3 + n[1] * 4 + n[0] * 5;
	        d1 = 11 - d1 % 11;
	        if (d1 >= 10) {
	            d1 = 0;
	        }
	        var d2 = d1 * 2 + 3 + n[7] * 7 + n[6] * 8 + n[5] * 9 + n[4] * 2 + n[3] * 3 + n[2] * 4 + n[1] * 5 + n[0] * 6;
	        d2 = 11 - d2 % 11;
	        if (d2 >= 10) {
	            d2 = 0;
	        }
	        return '' + n[0] + n[1] + '.' + n[2] + n[3] + n[4] + '.' + n[5] + n[6] + n[7] + '/0001-' + d1 + d2;
	    };

	    // -- End Miscellaneous --

	    Chance.prototype.mersenne_twister = function (seed) {
	        return new MersenneTwister(seed);
	    };

	    Chance.prototype.blueimp_md5 = function () {
	        return new BlueImpMD5();
	    };

	    // Mersenne Twister from https://gist.github.com/banksean/300494
	    var MersenneTwister = function MersenneTwister(seed) {
	        if (seed === undefined) {
	            // kept random number same size as time used previously to ensure no unexpected results downstream
	            seed = Math.floor(Math.random() * Math.pow(10, 13));
	        }
	        /* Period parameters */
	        this.N = 624;
	        this.M = 397;
	        this.MATRIX_A = 0x9908b0df; /* constant vector a */
	        this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
	        this.LOWER_MASK = 0x7fffffff; /* least significant r bits */

	        this.mt = new Array(this.N); /* the array for the state vector */
	        this.mti = this.N + 1; /* mti==N + 1 means mt[N] is not initialized */

	        this.init_genrand(seed);
	    };

	    /* initializes mt[N] with a seed */
	    MersenneTwister.prototype.init_genrand = function (s) {
	        this.mt[0] = s >>> 0;
	        for (this.mti = 1; this.mti < this.N; this.mti++) {
	            s = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
	            this.mt[this.mti] = (((s & 0xffff0000) >>> 16) * 1812433253 << 16) + (s & 0x0000ffff) * 1812433253 + this.mti;
	            /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
	            /* In the previous versions, MSBs of the seed affect   */
	            /* only MSBs of the array mt[].                        */
	            /* 2002/01/09 modified by Makoto Matsumoto             */
	            this.mt[this.mti] >>>= 0;
	            /* for >32 bit machines */
	        }
	    };

	    /* initialize by an array with array-length */
	    /* init_key is the array for initializing keys */
	    /* key_length is its length */
	    /* slight change for C++, 2004/2/26 */
	    MersenneTwister.prototype.init_by_array = function (init_key, key_length) {
	        var i = 1,
	            j = 0,
	            k,
	            s;
	        this.init_genrand(19650218);
	        k = this.N > key_length ? this.N : key_length;
	        for (; k; k--) {
	            s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
	            this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1664525 << 16) + (s & 0x0000ffff) * 1664525) + init_key[j] + j; /* non linear */
	            this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
	            i++;
	            j++;
	            if (i >= this.N) {
	                this.mt[0] = this.mt[this.N - 1];i = 1;
	            }
	            if (j >= key_length) {
	                j = 0;
	            }
	        }
	        for (k = this.N - 1; k; k--) {
	            s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
	            this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1566083941 << 16) + (s & 0x0000ffff) * 1566083941) - i; /* non linear */
	            this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
	            i++;
	            if (i >= this.N) {
	                this.mt[0] = this.mt[this.N - 1];i = 1;
	            }
	        }

	        this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */
	    };

	    /* generates a random number on [0,0xffffffff]-interval */
	    MersenneTwister.prototype.genrand_int32 = function () {
	        var y;
	        var mag01 = new Array(0x0, this.MATRIX_A);
	        /* mag01[x] = x * MATRIX_A  for x=0,1 */

	        if (this.mti >= this.N) {
	            /* generate N words at one time */
	            var kk;

	            if (this.mti === this.N + 1) {
	                /* if init_genrand() has not been called, */
	                this.init_genrand(5489); /* a default initial seed is used */
	            }
	            for (kk = 0; kk < this.N - this.M; kk++) {
	                y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
	                this.mt[kk] = this.mt[kk + this.M] ^ y >>> 1 ^ mag01[y & 0x1];
	            }
	            for (; kk < this.N - 1; kk++) {
	                y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
	                this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ y >>> 1 ^ mag01[y & 0x1];
	            }
	            y = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
	            this.mt[this.N - 1] = this.mt[this.M - 1] ^ y >>> 1 ^ mag01[y & 0x1];

	            this.mti = 0;
	        }

	        y = this.mt[this.mti++];

	        /* Tempering */
	        y ^= y >>> 11;
	        y ^= y << 7 & 0x9d2c5680;
	        y ^= y << 15 & 0xefc60000;
	        y ^= y >>> 18;

	        return y >>> 0;
	    };

	    /* generates a random number on [0,0x7fffffff]-interval */
	    MersenneTwister.prototype.genrand_int31 = function () {
	        return this.genrand_int32() >>> 1;
	    };

	    /* generates a random number on [0,1]-real-interval */
	    MersenneTwister.prototype.genrand_real1 = function () {
	        return this.genrand_int32() * (1.0 / 4294967295.0);
	        /* divided by 2^32-1 */
	    };

	    /* generates a random number on [0,1)-real-interval */
	    MersenneTwister.prototype.random = function () {
	        return this.genrand_int32() * (1.0 / 4294967296.0);
	        /* divided by 2^32 */
	    };

	    /* generates a random number on (0,1)-real-interval */
	    MersenneTwister.prototype.genrand_real3 = function () {
	        return (this.genrand_int32() + 0.5) * (1.0 / 4294967296.0);
	        /* divided by 2^32 */
	    };

	    /* generates a random number on [0,1) with 53-bit resolution*/
	    MersenneTwister.prototype.genrand_res53 = function () {
	        var a = this.genrand_int32() >>> 5,
	            b = this.genrand_int32() >>> 6;
	        return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
	    };

	    // BlueImp MD5 hashing algorithm from https://github.com/blueimp/JavaScript-MD5
	    var BlueImpMD5 = function BlueImpMD5() {};

	    BlueImpMD5.prototype.VERSION = '1.0.1';

	    /*
	    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	    * to work around bugs in some JS interpreters.
	    */
	    BlueImpMD5.prototype.safe_add = function safe_add(x, y) {
	        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
	            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	        return msw << 16 | lsw & 0xFFFF;
	    };

	    /*
	    * Bitwise rotate a 32-bit number to the left.
	    */
	    BlueImpMD5.prototype.bit_roll = function (num, cnt) {
	        return num << cnt | num >>> 32 - cnt;
	    };

	    /*
	    * These functions implement the five basic operations the algorithm uses.
	    */
	    BlueImpMD5.prototype.md5_cmn = function (q, a, b, x, s, t) {
	        return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
	    };
	    BlueImpMD5.prototype.md5_ff = function (a, b, c, d, x, s, t) {
	        return this.md5_cmn(b & c | ~b & d, a, b, x, s, t);
	    };
	    BlueImpMD5.prototype.md5_gg = function (a, b, c, d, x, s, t) {
	        return this.md5_cmn(b & d | c & ~d, a, b, x, s, t);
	    };
	    BlueImpMD5.prototype.md5_hh = function (a, b, c, d, x, s, t) {
	        return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
	    };
	    BlueImpMD5.prototype.md5_ii = function (a, b, c, d, x, s, t) {
	        return this.md5_cmn(c ^ (b | ~d), a, b, x, s, t);
	    };

	    /*
	    * Calculate the MD5 of an array of little-endian words, and a bit length.
	    */
	    BlueImpMD5.prototype.binl_md5 = function (x, len) {
	        /* append padding */
	        x[len >> 5] |= 0x80 << len % 32;
	        x[(len + 64 >>> 9 << 4) + 14] = len;

	        var i,
	            olda,
	            oldb,
	            oldc,
	            oldd,
	            a = 1732584193,
	            b = -271733879,
	            c = -1732584194,
	            d = 271733878;

	        for (i = 0; i < x.length; i += 16) {
	            olda = a;
	            oldb = b;
	            oldc = c;
	            oldd = d;

	            a = this.md5_ff(a, b, c, d, x[i], 7, -680876936);
	            d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
	            c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
	            b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
	            a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
	            d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
	            c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
	            b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
	            a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
	            d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
	            c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
	            b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
	            a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
	            d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
	            c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
	            b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

	            a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
	            d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
	            c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
	            b = this.md5_gg(b, c, d, a, x[i], 20, -373897302);
	            a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
	            d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
	            c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
	            b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
	            a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
	            d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
	            c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
	            b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
	            a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
	            d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
	            c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
	            b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

	            a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
	            d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
	            c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
	            b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
	            a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
	            d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
	            c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
	            b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
	            a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
	            d = this.md5_hh(d, a, b, c, x[i], 11, -358537222);
	            c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
	            b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
	            a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
	            d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
	            c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
	            b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

	            a = this.md5_ii(a, b, c, d, x[i], 6, -198630844);
	            d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
	            c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
	            b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
	            a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
	            d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
	            c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
	            b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
	            a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
	            d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
	            c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
	            b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
	            a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
	            d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
	            c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
	            b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

	            a = this.safe_add(a, olda);
	            b = this.safe_add(b, oldb);
	            c = this.safe_add(c, oldc);
	            d = this.safe_add(d, oldd);
	        }
	        return [a, b, c, d];
	    };

	    /*
	    * Convert an array of little-endian words to a string
	    */
	    BlueImpMD5.prototype.binl2rstr = function (input) {
	        var i,
	            output = '';
	        for (i = 0; i < input.length * 32; i += 8) {
	            output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);
	        }
	        return output;
	    };

	    /*
	    * Convert a raw string to an array of little-endian words
	    * Characters >255 have their high-byte silently ignored.
	    */
	    BlueImpMD5.prototype.rstr2binl = function (input) {
	        var i,
	            output = [];
	        output[(input.length >> 2) - 1] = undefined;
	        for (i = 0; i < output.length; i += 1) {
	            output[i] = 0;
	        }
	        for (i = 0; i < input.length * 8; i += 8) {
	            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;
	        }
	        return output;
	    };

	    /*
	    * Calculate the MD5 of a raw string
	    */
	    BlueImpMD5.prototype.rstr_md5 = function (s) {
	        return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
	    };

	    /*
	    * Calculate the HMAC-MD5, of a key and some data (raw strings)
	    */
	    BlueImpMD5.prototype.rstr_hmac_md5 = function (key, data) {
	        var i,
	            bkey = this.rstr2binl(key),
	            ipad = [],
	            opad = [],
	            hash;
	        ipad[15] = opad[15] = undefined;
	        if (bkey.length > 16) {
	            bkey = this.binl_md5(bkey, key.length * 8);
	        }
	        for (i = 0; i < 16; i += 1) {
	            ipad[i] = bkey[i] ^ 0x36363636;
	            opad[i] = bkey[i] ^ 0x5C5C5C5C;
	        }
	        hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
	        return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
	    };

	    /*
	    * Convert a raw string to a hex string
	    */
	    BlueImpMD5.prototype.rstr2hex = function (input) {
	        var hex_tab = '0123456789abcdef',
	            output = '',
	            x,
	            i;
	        for (i = 0; i < input.length; i += 1) {
	            x = input.charCodeAt(i);
	            output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
	        }
	        return output;
	    };

	    /*
	    * Encode a string as utf-8
	    */
	    BlueImpMD5.prototype.str2rstr_utf8 = function (input) {
	        return unescape(encodeURIComponent(input));
	    };

	    /*
	    * Take string arguments and return either raw or hex encoded strings
	    */
	    BlueImpMD5.prototype.raw_md5 = function (s) {
	        return this.rstr_md5(this.str2rstr_utf8(s));
	    };
	    BlueImpMD5.prototype.hex_md5 = function (s) {
	        return this.rstr2hex(this.raw_md5(s));
	    };
	    BlueImpMD5.prototype.raw_hmac_md5 = function (k, d) {
	        return this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d));
	    };
	    BlueImpMD5.prototype.hex_hmac_md5 = function (k, d) {
	        return this.rstr2hex(this.raw_hmac_md5(k, d));
	    };

	    BlueImpMD5.prototype.md5 = function (string, key, raw) {
	        if (!key) {
	            if (!raw) {
	                return this.hex_md5(string);
	            }

	            return this.raw_md5(string);
	        }

	        if (!raw) {
	            return this.hex_hmac_md5(key, string);
	        }

	        return this.raw_hmac_md5(key, string);
	    };

	    // CommonJS module
	    if (true) {
	        if (typeof module !== 'undefined' && module.exports) {
	            exports = module.exports = Chance;
	        }
	        exports.Chance = Chance;
	    }

	    // Register as an anonymous AMD module
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return Chance;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	    // if there is a importsScrips object define chance for worker
	    if (typeof importScripts !== 'undefined') {
	        chance = new Chance();
	    }

	    // If there is a window object, that at least has a document property,
	    // instantiate and define chance on the window
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object" && _typeof(window.document) === "object") {
	        window.Chance = Chance;
	        window.chance = new Chance();
	    }
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10).Buffer))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict';

	var base64 = __webpack_require__(11);
	var ieee754 = __webpack_require__(12);
	var isArray = __webpack_require__(13);

	exports.Buffer = Buffer;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength();

	function typedArraySupport() {
	  try {
	    var arr = new Uint8Array(1);
	    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
	        return 42;
	      } };
	    return arr.foo() === 42 && // typed array instances can be augmented
	    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
	  } catch (e) {
	    return false;
	  }
	}

	function kMaxLength() {
	  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
	}

	function createBuffer(that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length');
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }

	  return that;
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer(arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length);
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error('If encoding is specified then the first argument must be a string');
	    }
	    return allocUnsafe(this, arg);
	  }
	  return from(this, arg, encodingOrOffset, length);
	}

	Buffer.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr;
	};

	function from(that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length);
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset);
	  }

	  return fromObject(that, value);
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length);
	};

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    });
	  }
	}

	function assertSize(size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number');
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative');
	  }
	}

	function alloc(that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size);
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
	  }
	  return createBuffer(that, size);
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding);
	};

	function allocUnsafe(that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that;
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size);
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size);
	};

	function fromString(that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding');
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that;
	}

	function fromArrayLike(that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that;
	}

	function fromArrayBuffer(that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds');
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds');
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that;
	}

	function fromObject(that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that;
	    }

	    obj.copy(that, 0, 0, len);
	    return that;
	  }

	  if (obj) {
	    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0);
	      }
	      return fromArrayLike(that, obj);
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data);
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
	}

	function checked(length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
	  }
	  return length | 0;
	}

	function SlowBuffer(length) {
	  if (+length != length) {
	    // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer.alloc(+length);
	}

	Buffer.isBuffer = function isBuffer(b) {
	  return !!(b != null && b._isBuffer);
	};

	Buffer.compare = function compare(a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers');
	  }

	  if (a === b) return 0;

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }

	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	Buffer.isEncoding = function isEncoding(encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true;
	    default:
	      return false;
	  }
	};

	Buffer.concat = function concat(list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers');
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0);
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers');
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer;
	};

	function byteLength(string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length;
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength;
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0;

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len;
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length;
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2;
	      case 'hex':
	        return len >>> 1;
	      case 'base64':
	        return base64ToBytes(string).length;
	      default:
	        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString(encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return '';
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return '';
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return '';
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end);

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end);

	      case 'ascii':
	        return asciiSlice(this, start, end);

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end);

	      case 'base64':
	        return base64Slice(this, start, end);

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end);

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;

	function swap(b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16() {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits');
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this;
	};

	Buffer.prototype.swap32 = function swap32() {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits');
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this;
	};

	Buffer.prototype.swap64 = function swap64() {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits');
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this;
	};

	Buffer.prototype.toString = function toString() {
	  var length = this.length | 0;
	  if (length === 0) return '';
	  if (arguments.length === 0) return utf8Slice(this, 0, length);
	  return slowToString.apply(this, arguments);
	};

	Buffer.prototype.equals = function equals(b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
	  if (this === b) return true;
	  return Buffer.compare(this, b) === 0;
	};

	Buffer.prototype.inspect = function inspect() {
	  var str = '';
	  var max = exports.INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>';
	};

	Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer');
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index');
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0;
	  }
	  if (thisStart >= thisEnd) {
	    return -1;
	  }
	  if (start >= end) {
	    return 1;
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0;

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break;
	    }
	  }

	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1;

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset; // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : buffer.length - 1;
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1;else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;else return -1;
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1;
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
	      }
	    }
	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
	  }

	  throw new TypeError('val must be string, number or Buffer');
	}

	function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1;
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read(buf, i) {
	    if (indexSize === 1) {
	      return buf[i];
	    } else {
	      return buf.readUInt16BE(i * indexSize);
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break;
	        }
	      }
	      if (found) return i;
	    }
	  }

	  return -1;
	}

	Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1;
	};

	Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
	};

	function hexWrite(buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i;
	    buf[offset + i] = parsed;
	  }
	  return i;
	}

	function utf8Write(buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
	}

	function asciiWrite(buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length);
	}

	function latin1Write(buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length);
	}

	function base64Write(buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length);
	}

	function ucs2Write(buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
	}

	Buffer.prototype.write = function write(string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	    // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds');
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length);

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length);

	      case 'ascii':
	        return asciiWrite(this, string, offset, length);

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length);

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length);

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length);

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON() {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  };
	};

	function base64Slice(buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf);
	  } else {
	    return base64.fromByteArray(buf.slice(start, end));
	  }
	}

	function utf8Slice(buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break;
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res);
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray(codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
	  }
	  return res;
	}

	function asciiSlice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret;
	}

	function latin1Slice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret;
	}

	function hexSlice(buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out;
	}

	function utf16leSlice(buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res;
	}

	Buffer.prototype.slice = function slice(start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf;
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset(offset, ext, length) {
	  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
	}

	Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val;
	};

	Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val;
	};

	Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset];
	};

	Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | this[offset + 1] << 8;
	};

	Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] << 8 | this[offset + 1];
	};

	Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
	};

	Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
	};

	Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val;
	};

	Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val;
	};

	Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return this[offset];
	  return (0xff - this[offset] + 1) * -1;
	};

	Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | this[offset + 1] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};

	Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | this[offset] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};

	Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
	};

	Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
	};

	Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, true, 23, 4);
	};

	Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, false, 23, 4);
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, true, 52, 8);
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, false, 52, 8);
	};

	function checkInt(buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = value & 0xff;
	  return offset + 1;
	};

	function objectWriteUInt16(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};

	function objectWriteUInt32(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = value >>> 24;
	    this[offset + 2] = value >>> 16;
	    this[offset + 1] = value >>> 8;
	    this[offset] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = value & 0xff;
	  return offset + 1;
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	    this[offset + 2] = value >>> 16;
	    this[offset + 3] = value >>> 24;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};

	function checkIEEE754(buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	  if (offset < 0) throw new RangeError('Index out of range');
	}

	function writeFloat(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4;
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert);
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert);
	};

	function writeDouble(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8;
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert);
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert);
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy(target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0;
	  if (target.length === 0 || this.length === 0) return 0;

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds');
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
	  if (end < 0) throw new RangeError('sourceEnd out of bounds');

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
	  }

	  return len;
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill(val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string');
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding);
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index');
	  }

	  if (end <= start) {
	    return this;
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this;
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean(str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return '';
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str;
	}

	function stringtrim(str) {
	  if (str.trim) return str.trim();
	  return str.replace(/^\s+|\s+$/g, '');
	}

	function toHex(n) {
	  if (n < 16) return '0' + n.toString(16);
	  return n.toString(16);
	}

	function utf8ToBytes(string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue;
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue;
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break;
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break;
	      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break;
	      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break;
	      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else {
	      throw new Error('Invalid code point');
	    }
	  }

	  return bytes;
	}

	function asciiToBytes(str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray;
	}

	function utf16leToBytes(str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break;

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray;
	}

	function base64ToBytes(str) {
	  return base64.toByteArray(base64clean(str));
	}

	function blitBuffer(src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if (i + offset >= dst.length || i >= src.length) break;
	    dst[i + offset] = src[i];
	  }
	  return i;
	}

	function isnan(val) {
	  return val !== val; // eslint-disable-line no-self-compare
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	exports.byteLength = byteLength;
	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}

	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;

	function placeHoldersCount(b64) {
	  var len = b64.length;
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4');
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
	}

	function byteLength(b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64);
	}

	function toByteArray(b64) {
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;
	  placeHolders = placeHoldersCount(b64);

	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = tmp >> 16 & 0xFF;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr;
	}

	function tripletToBase64(num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}

	function encodeChunk(uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('');
	}

	function fromByteArray(uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[tmp << 4 & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    output += lookup[tmp >> 10];
	    output += lookup[tmp >> 4 & 0x3F];
	    output += lookup[tmp << 2 & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('');
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? nBytes - 1 : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & (1 << -nBits) - 1;
	  s >>= -nBits;
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : (s ? -1 : 1) * Infinity;
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
	  var i = isLE ? 0 : nBytes - 1;
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

/***/ }
/******/ ]);