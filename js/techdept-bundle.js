! function(e) {
    function t(r) { if (n[r]) return n[r].exports; var a = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports } var n = {};
    t.m = e, t.c = n, t.d = function(e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "/", t(t.s = 71) }([function(e, t) { var n = e.exports = { version: "2.6.11" }; "number" == typeof __e && (__e = n) }, function(e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(e, t, n) { var r = n(31)("wks"),
        a = n(21),
        o = n(1).Symbol,
        i = "function" == typeof o;
    (e.exports = function(e) { return r[e] || (r[e] = i && o[e] || (i ? o : a)("Symbol." + e)) }).store = r }, function(e, t, n) { var r = n(1),
        a = n(0),
        o = n(13),
        i = n(10),
        s = n(9),
        c = function(e, t, n) { var u, l, f, p = e & c.F,
                d = e & c.G,
                h = e & c.S,
                g = e & c.P,
                m = e & c.B,
                _ = e & c.W,
                b = d ? a : a[t] || (a[t] = {}),
                v = b.prototype,
                w = d ? r : h ? r[t] : (r[t] || {}).prototype;
            d && (n = t); for (u in n)(l = !p && w && void 0 !== w[u]) && s(b, u) || (f = l ? w[u] : n[u], b[u] = d && "function" != typeof w[u] ? n[u] : m && l ? o(f, r) : _ && w[u] == f ? function(e) { var t = function(t, n, r) { if (this instanceof e) { switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n) } return new e(t, n, r) } return e.apply(this, arguments) }; return t.prototype = e.prototype, t }(f) : g && "function" == typeof f ? o(Function.call, f) : f, g && ((b.virtual || (b.virtual = {}))[u] = f, e & c.R && v && !v[u] && i(v, u, f))) };
    c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c }, function(e, t, n) { var r = n(5),
        a = n(45),
        o = n(34),
        i = Object.defineProperty;
    t.f = n(6) ? Object.defineProperty : function(e, t, n) { if (r(e), t = o(t, !0), r(n), a) try { return i(e, t, n) } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } }, function(e, t, n) { var r = n(7);
    e.exports = function(e) { if (!r(e)) throw TypeError(e + " is not an object!"); return e } }, function(e, t, n) { e.exports = !n(14)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t, n) { "use strict";

    function r(e, t) { return 3 === a(t) ? p[e] ? t : t + "px" : t }

    function a(e) { return null === e ? 1 : void 0 === e ? 0 : f[l.call(e)] || 8 }

    function o(e, t) { return e.type === t.type && e.key === t.key }

    function i(e) { var t = {}; return e.forEach(function(e, n) { e.key && (t[e.key] = n) }), t }

    function s(e) { return /^on[A-Z]/.test(e) }

    function c(e) { return /^on[a-z]/.test(e) }

    function u(e, t) { for (var n in t) e[n] = t[n]; return e }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.styleHelper = r, t.typeNumber = a, t.isSameVnode = o, t.mapKeyToIndex = i, t.isEventName = s, t.isEventNameLowerCase = c, t.extend = u; var l = Object.prototype.toString,
        f = (t.options = { async: !1, dirtyComponent: {} }, { "[object Boolean]": 2, "[object Number]": 3, "[object String]": 4, "[object Function]": 5, "[object Symbol]": 6, "[object Array]": 7 }),
        p = { zIndex: 1 } }, function(e, t) { var n = {}.hasOwnProperty;
    e.exports = function(e, t) { return n.call(e, t) } }, function(e, t, n) { var r = n(4),
        a = n(19);
    e.exports = n(6) ? function(e, t, n) { return r.f(e, t, a(1, n)) } : function(e, t, n) { return e[t] = n, e } }, function(e, t, n) { var r = n(27);
    e.exports = function(e) { return Object(r(e)) } }, function(e, t, n) { var r = n(43),
        a = n(27);
    e.exports = function(e) { return r(a(e)) } }, function(e, t, n) { var r = n(22);
    e.exports = function(e, t, n) { if (r(e), void 0 === t) return e; switch (n) {
            case 1:
                return function(n) { return e.call(t, n) };
            case 2:
                return function(n, r) { return e.call(t, n, r) };
            case 3:
                return function(n, r, a) { return e.call(t, n, r, a) } } return function() { return e.apply(t, arguments) } } }, function(e, t) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } }, function(e, t, n) { "use strict";

    function r(e, t, n, r) { this.owner = s.currentOwner.cur, this.type = e, this.props = t, this.key = n, this.ref = r }

    function a(e, t) { for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) a[o - 2] = arguments[o]; var s = {},
            u = null,
            l = null,
            f = a.length; if (null != t) { u = void 0 === t.key ? null : "" + t.key, l = void 0 === t.ref ? null : t.ref; for (var p in t) c.hasOwnProperty(p) || t.hasOwnProperty(p) && (s[p] = t[p]) }
        1 === f ? s.children = (0, i.typeNumber)(a[0]) > 2 ? a[0] : [] : f > 1 && (s.children = a); var d = e.defaultProps; if (d)
            for (var h in d) void 0 === s[h] && (s[h] = d[h]); return new r(e, s, u, l) }

    function o(e) { if (void 0 === e) return new r("#text", "", null, null); var t = e.length,
            n = [],
            a = !1,
            o = "",
            s = (0, i.typeNumber)(e); return 4 === s || 3 === s ? new r("#text", e, null, null) : 7 !== s ? e : (e.forEach(function(e, r) { 7 === (0, i.typeNumber)(e) && (a && n.push(o), e.forEach(function(e) { n.push(e) }), o = "", a = !1), 3 !== (0, i.typeNumber)(e) && 4 !== (0, i.typeNumber)(e) || (o += e, a = !0), 3 !== (0, i.typeNumber)(e) && 4 !== (0, i.typeNumber)(e) && 7 !== (0, i.typeNumber)(e) && (a ? (n.push(o), n.push(e), o = "", a = !1) : n.push(e)), t - 1 === r && o && n.push(o) }), n = n.map(function(e) { return 4 === (0, i.typeNumber)(e) && (e = new r("#text", e, null, null)), e })) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Vnode = t.createElement = void 0, t.flattenChildren = o; var i = n(8),
        s = n(26),
        c = { ref: !0, key: !0, __self: !0, __source: !0 };
    t.createElement = a, t.Vnode = r }, function(e, t, n) { var r = n(42),
        a = n(32);
    e.exports = Object.keys || function(e) { return r(e, a) } }, function(e, t) { var n = {}.toString;
    e.exports = function(e) { return n.call(e).slice(8, -1) } }, function(e, t) { e.exports = !0 }, function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t) { e.exports = {} }, function(e, t) { var n = 0,
        r = Math.random();
    e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36)) } }, function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } }, function(e, t) { t.f = {}.propertyIsEnumerable }, function(e, t, n) { var r = n(4).f,
        a = n(9),
        o = n(2)("toStringTag");
    e.exports = function(e, t, n) { e && !a(e = n ? e : e.prototype, o) && r(e, o, { configurable: !0, value: t }) } }, function(e, t, n) { var r = n(73).default;
    e.exports = r }, function(e, t, n) { "use strict";

    function r(e, t) { if (!t) throw new Error("请给portal一个插入的目标");
        Array.isArray(e) ? d(e, t) : m(e, t); var n = new b.Vnode("#text", "createPortal", null, null); return n._PortalHostNode = t, n }

    function a(e) { return { oldState: e._instance.state, oldProps: e._instance.props, oldContext: e._instance.context, oldVnode: e._instance.Vnode } }

    function o() { return x++ }

    function i(e, t, n) { var r = e._hostNode;
        e.props !== t.props && (r.nodeValue = t.props) }

    function s(e, t, n, r) { t = (0, b.flattenChildren)(t), e = e || [], Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]); var a = e.length,
            o = t.length,
            i = 0,
            s = 0,
            c = a - 1,
            l = o - 1,
            f = e[0],
            p = t[0],
            d = e[c],
            h = t[l],
            m = {}; if (o >= 0 && !a) return t.forEach(function(e, a) { g(e, n, !1, r), t[a] = e }), t; if (!o && a >= 0) return e.forEach(function(e) {
            (0, y.disposeVnode)(e) }), t[0]; for (; i <= c && s <= l;) { if (void 0 === f || null === f) f = e[++i];
            else if (void 0 === d || null === d) d = e[--c];
            else if (void 0 === p || null === p) p = t[++s];
            else if (void 0 === h || null === h) h = t[--l];
            else if ((0, _.isSameVnode)(f, p)) u(f, p, p._hostNode, r), f = e[++i], p = t[++s];
            else if ((0, _.isSameVnode)(d, h)) u(d, h, h._hostNode, r), d = e[--c], h = t[--l];
            else if ((0, _.isSameVnode)(f, h)) { var v = f._hostNode;
                n.insertBefore(v, d.nextSibling), u(f, h, f._hostNode._hostNode, r), f = e[++i], h = t[--l] } else if ((0, _.isSameVnode)(d, p)) { var w = d._hostNode;
                n.insertBefore(w, f._hostNode), u(f, h, f._hostNode, r), d = e[--c], p = t[++s] } else { void 0 === m && (m = (0, _.mapKeyToIndex)(e)); var k = m[p.key]; if (void 0 === k) { var x = g(p, n, !0, r);
                    n.insertBefore(x, f._hostNode), p = t[++s] } else { var P = e[k];
                    u(P, p, P._hostNode, r), n.insertBefore(P._hostNode, f._hostNode), e[k] = void 0, p = t[++s] } } if (i > c) { for (; s - 1 < l; s++)
                    if (t[s]) { var S = g(t[s], n, !0, r);
                        n.appendChild(S), t[s]._hostNode = S } } else if (s > l)
                for (; i - 1 < c; i++)
                    if (e[i]) { var j = e[i];
                        (0, y.disposeVnode)(j) } } return t }

    function c(e, t, n, r) { var o = a(e),
            i = o.oldState,
            s = o.oldProps,
            c = o.oldContext,
            l = o.oldVnode,
            f = t.props,
            p = n,
            d = e._instance; if (e._instance.props = f, d.getChildContext ? e._instance.context = (0, _.extend)((0, _.extend)({}, p), d.getChildContext()) : e._instance.context = (0, _.extend)({}, p), e._instance.lifeCycle = k.Com.UPDATING, e._instance.componentWillReceiveProps) { e._instance.componentWillReceiveProps(f, p); var h = e._instance.state;
            e._instance._penddingState.forEach(function(e) { h = (0, _.extend)((0, _.extend)({}, h), e.partialNewState) }), e._instance.state = h } if (e._instance.shouldComponentUpdate && !e._instance.shouldComponentUpdate(f, i, p)) return e._instance.props = f, void(e._instance.context = p);
        e._instance.componentWillUpdate && e._instance.componentWillUpdate(f, i, p); var g = S.cur;
        S.cur = e._instance; var m = e._instance.render ? e._instance.render() : new t.type(f, p);
        m = m || new b.Vnode("#text", "", null, null); var v = l || e._instance;
        S.cur = g, _.options.dirtyComponent[e._instance._uniqueId] && delete _.options.dirtyComponent[e._instance._uniqueId], u(v, m, e._hostNode, d.context), e._hostNode = m._hostNode, e._instance.Vnode ? e._instance.Vnode = m : e._instance = m, e._instance && (e._instance.componentDidUpdate && e._instance.componentDidUpdate(s, i, c), e._instance.lifeCycle = k.Com.UPDATED) }

    function u(e, t, n, r) { if (t._hostNode = e._hostNode, e.type === t.type) { if ("#text" === e.type) return t._hostNode = e._hostNode, i(e, t), t; if ("string" == typeof e.type && ((0, v.updateProps)(e.props, t.props, t._hostNode), e.ref !== t.ref && (0, w.setRef)(t, e.owner, t._hostNode), t.props.children = s(e.props.children, t.props.children, e._hostNode, r)), "function" == typeof e.type) { if (!e._instance.render) { var a = t.props,
                        o = new t.type(a, r); return u(e._instance, o, n, r), o.owner = e._instance.owner, o.ref = e._instance.ref, o.key = e._instance.key, t._instance = o, t }
                c(e, t, r, n), t.owner = e.owner, t.ref = e.ref, t.key = e.key, t._instance = e._instance, t._PortalHostNode = e._PortalHostNode ? e._PortalHostNode : void 0 } } else { var l = g(t, n, !0, r),
                f = n.parentNode;
            t._hostNode ? (f.insertBefore(l, e._hostNode), (0, y.disposeVnode)(e)) : (f.appendChild(l), t._hostNode = l) } return t }

    function l(e, t, n) { var r = e.type,
            a = e.props,
            i = e.key,
            s = (e.ref, r),
            c = new s(a, n); if (!c.render) return e._instance = c, g(c, t, !1, n);
        c.getChildContext ? c.context = (0, _.extend)((0, _.extend)({}, c.context), c.getChildContext()) : c.context = (0, _.extend)({}, n), c.componentWillMount && c.componentWillMount(); var u = S.cur;
        S.cur = c; var l = c.render(); if (S.cur = u, void 0 === l) return void console.warn("你可能忘记在组件render()方法中返回jsx了");
        l = l || new b.Vnode("#text", "", null, null); var f = g(l, t, !1, c.context, c); return c.componentDidMount && (c.lifeCycle = k.Com.MOUNTTING, c.componentDidMount(), c.componentDidMount = null, c.lifeCycle = k.Com.MOUNT), l.key = i || null, c.Vnode = l, c.Vnode._hostNode = f, c.Vnode._mountIndex = o(), e._instance = c, e._hostNode = f, (0, w.setRef)(e, c, f), l._PortalHostNode && (e._PortalHostNode = l._PortalHostNode, l._PortalHostNode._PortalHostNode = f), c._updateInLifeCycle(), f }

    function f(e, t, n) { var r = g(e, t, !1, n); return e._hostNode = r, e._mountIndex = o(), r }

    function p(e, t) { var n = "createPortal" === e.props ? "" : e.props,
            r = document.createTextNode(n); return t.appendChild(r), e._hostNode = r, e._mountIndex = o(), r }

    function d(e, t, n, r) { var a = (0, _.typeNumber)(e),
            o = e; return void 0 === e && (o = (0, b.flattenChildren)(e)), 8 === a && void 0 !== e && (5 === (0, _.typeNumber)(e.type) ? o._hostNode = g(o, t, !1, n, r) : 3 !== (0, _.typeNumber)(e.type) && 4 !== (0, _.typeNumber)(e.type) || (o._hostNode = f(o, t, r))), 7 === a && (o = (0, b.flattenChildren)(e), o.forEach(function(e) { e && ("function" == typeof e.type ? l(e, t, n) : g(e, t, !1, n, r)) })), 4 !== a && 3 !== a || (o = (0, b.flattenChildren)(e), p(o, t)), o }

    function h(e) { return null == e ? null : 1 === e.nodeType ? e : e.__dom || null }

    function g(e, t, n, r, a) { var i = e.type,
            s = e.props; if (i) { var c = s.children,
                u = void 0; if (u = "function" == typeof i ? l(e, t, r || {}) : "string" == typeof i && "#text" === i ? p(e, t) : document.createElement(i), "function" != typeof i && (0, _.typeNumber)(c) > 2 && void 0 !== c) { var f = d(c, u, r, a);
                s.children = f } return (0, w.setRef)(e, a, u), (0, v.mapProp)(u, s, e), e._hostNode = u, n ? u : (e._mountIndex = o(), t && u && "#text" !== t.nodeName && t.appendChild(u), u) } }

    function m(e, t) { if (8 !== (0, _.typeNumber)(t)) throw new Error("Target container is not a DOM element."); var n = t.UniqueKey; if (t.UniqueKey) { return u(P[n], e, t), e._instance } return t.UniqueKey = Date.now(), P[t.UniqueKey] = e, g(e, t), e._instance }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.currentOwner = void 0, t.createPortal = r, t.update = u, t.findDOMNode = h, t.render = m; var _ = n(8),
        b = n(15),
        v = n(74),
        w = n(46),
        y = n(81),
        k = n(47),
        x = 0,
        P = {},
        S = t.currentOwner = { cur: null } }, function(e, t) { e.exports = function(e) { if (void 0 == e) throw TypeError("Can't call method on  " + e); return e } }, function(e, t, n) { var r = n(29),
        a = Math.min;
    e.exports = function(e) { return e > 0 ? a(r(e), 9007199254740991) : 0 } }, function(e, t) { var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e) } }, function(e, t, n) { var r = n(31)("keys"),
        a = n(21);
    e.exports = function(e) { return r[e] || (r[e] = a(e)) } }, function(e, t, n) { var r = n(0),
        a = n(1),
        o = a["__core-js_shared__"] || (a["__core-js_shared__"] = {});
    (e.exports = function(e, t) { return o[e] || (o[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: r.version, mode: n(18) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" }) }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t, n) { var r = n(7),
        a = n(1).document,
        o = r(a) && r(a.createElement);
    e.exports = function(e) { return o ? a.createElement(e) : {} } }, function(e, t, n) { var r = n(7);
    e.exports = function(e, t) { if (!r(e)) return e; var n, a; if (t && "function" == typeof(n = e.toString) && !r(a = n.call(e))) return a; if ("function" == typeof(n = e.valueOf) && !r(a = n.call(e))) return a; if (!t && "function" == typeof(n = e.toString) && !r(a = n.call(e))) return a; throw TypeError("Can't convert object to primitive value") } }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t, n) { "use strict"; var r = n(88)(!0);
    n(50)(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() { var e, t = this._t,
            n = this._i; return n >= t.length ? { value: void 0, done: !0 } : (e = r(t, n), this._i += e.length, { value: e, done: !1 }) }) }, function(e, t, n) { var r = n(5),
        a = n(90),
        o = n(32),
        i = n(30)("IE_PROTO"),
        s = function() {},
        c = function() { var e, t = n(33)("iframe"),
                r = o.length; for (t.style.display = "none", n(52).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; r--;) delete c.prototype[o[r]]; return c() };
    e.exports = Object.create || function(e, t) { var n; return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[i] = e) : n = c(), void 0 === t ? n : a(n, t) } }, function(e, t, n) { t.f = n(2) }, function(e, t, n) { var r = n(1),
        a = n(0),
        o = n(18),
        i = n(38),
        s = n(4).f;
    e.exports = function(e) { var t = a.Symbol || (a.Symbol = o ? {} : r.Symbol || {}); "_" == e.charAt(0) || e in t || s(t, e, { value: i.f(e) }) } }, function(e, t, n) { "use strict";

    function r(e) { var t, n;
        this.promise = new e(function(e, r) { if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = r }), this.resolve = a(t), this.reject = a(n) } var a = n(22);
    e.exports.f = function(e) { return new r(e) } }, function(e, t, n) { e.exports = { default: n(75), __esModule: !0 } }, function(e, t, n) { var r = n(9),
        a = n(12),
        o = n(77)(!1),
        i = n(30)("IE_PROTO");
    e.exports = function(e, t) { var n, s = a(e),
            c = 0,
            u = []; for (n in s) n != i && r(s, n) && u.push(n); for (; t.length > c;) r(s, n = t[c++]) && (~o(u, n) || u.push(n)); return u } }, function(e, t, n) { var r = n(17);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == r(e) ? e.split("") : Object(e) } }, function(e, t, n) { var r = n(3),
        a = n(0),
        o = n(14);
    e.exports = function(e, t) { var n = (a.Object || {})[e] || Object[e],
            i = {};
        i[e] = t(n), r(r.S + r.F * o(function() { n(1) }), "Object", i) } }, function(e, t, n) { e.exports = !n(6) && !n(14)(function() { return 7 != Object.defineProperty(n(33)("div"), "a", { get: function() { return 7 } }).a }) }, function(e, t, n) { "use strict";

    function r(e, t, n) { if (t) { var r = (0, o.typeNumber)(e.ref);
            i[r] && i[r](e, e.owner, n) } }

    function a(e) { if ("function" == typeof e) e(null);
        else
            for (var t in e) e[t] = null }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.setRef = r, t.clearRefs = a; var o = n(8),
        i = { 3: function(e, t, n) { e._instance ? t.refs[e.ref] = e._instance : t.refs[e.ref] = n }, 4: function(e, t, n) { i[3](e, t, n) }, 5: function(e, t, n) { e._instance ? e.ref(e._instance) : e.ref(n) } } }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ReactClass = t.Com = void 0; var a = n(48),
        o = r(a),
        i = n(85),
        s = r(i),
        c = n(49),
        u = r(c),
        l = n(59),
        f = r(l),
        p = n(60),
        d = r(p),
        h = n(26),
        g = n(8),
        m = n(15),
        _ = t.Com = { CREATE: 0, MOUNT: 1, UPDATING: 2, UPDATED: 3, MOUNTTING: 4 },
        b = 0,
        v = function() {
            function e(t, n) {
                (0, f.default)(this, e), this.props = t, this.context = n, this.state = this.state || {}, this.nextState = null, this._renderCallbacks = [], this.lifeCycle = _.CREATE, this.stateMergeQueue = [], this._penddingState = [], this.refs = {}, this._uniqueId = b, b++ } return (0, d.default)(e, [{ key: "updateComponent", value: function() { var e = this,
                        t = this.state,
                        n = this.Vnode,
                        r = this.context;
                    this.nextState = this.state; for (var a in this._penddingState) { var o = this._penddingState[a]; "function" == typeof o.partialNewState ? this.nextState = (0, u.default)({}, this.nextState, o.partialNewState(this.nextState, this.props)) : this.nextState = (0, u.default)({}, this.state, o.partialNewState) }
                    this.nextState !== t && (this.state = this.nextState), this.getChildContext && (this.context = (0, g.extend)((0, g.extend)({}, this.context), this.getChildContext())), this.componentWillUpdate && this.componentWillUpdate(this.props, this.nextState, this.context), this.nextState = null; var i = this.render();
                    i = i || new m.Vnode("#text", "", null, null), this.Vnode = (0, h.update)(n, i, this.Vnode._hostNode, this.context), this.componentDidUpdate && this.componentDidUpdate(this.props, t, r), this._penddingState.forEach(function(t) { "function" == typeof t.callback && t.callback(e.state, e.props) }), this._penddingState = [] } }, { key: "_updateInLifeCycle", value: function() { if (this.stateMergeQueue.length > 0) { var e = this.state;
                        this._penddingState.forEach(function(t) { e = u.default.apply(Object, [{}, e].concat((0, s.default)(t.partialNewState))) }), this.nextState = (0, o.default)({}, e), this.stateMergeQueue = [], this.updateComponent() } } }, { key: "setState", value: function(e, t) { if (this._penddingState.push({ partialNewState: e, callback: t }), !this.shouldComponentUpdate || this.shouldComponentUpdate(this.props, this.nextState, this.context))
                        if (this.lifeCycle === _.CREATE);
                        else { if (this.lifeCycle === _.UPDATING) return; if (this.lifeCycle === _.MOUNTTING) return void this.stateMergeQueue.push(1); if (!0 === g.options.async) return void(g.options.dirtyComponent[this._uniqueId] || (g.options.dirtyComponent[this._uniqueId] = this));
                            this.updateComponent() } } }, { key: "componentWillReceiveProps", value: function() {} }, { key: "componentWillMount", value: function() {} }, { key: "componentDidMount", value: function() {} }, { key: "componentWillUnmount", value: function() {} }, { key: "componentDidUnmount", value: function() {} }, { key: "render", value: function() {} }]), e }();
    t.ReactClass = v }, function(e, t, n) { "use strict";
    t.__esModule = !0; var r = n(49),
        a = function(e) { return e && e.__esModule ? e : { default: e } }(r);
    t.default = a.default || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e } }, function(e, t, n) { e.exports = { default: n(82), __esModule: !0 } }, function(e, t, n) { "use strict"; var r = n(18),
        a = n(3),
        o = n(51),
        i = n(10),
        s = n(20),
        c = n(89),
        u = n(24),
        l = n(53),
        f = n(2)("iterator"),
        p = !([].keys && "next" in [].keys()),
        d = function() { return this };
    e.exports = function(e, t, n, h, g, m, _) { c(n, t, h); var b, v, w, y = function(e) { if (!p && e in S) return S[e]; switch (e) {
                    case "keys":
                    case "values":
                        return function() { return new n(this, e) } } return function() { return new n(this, e) } },
            k = t + " Iterator",
            x = "values" == g,
            P = !1,
            S = e.prototype,
            j = S[f] || S["@@iterator"] || g && S[g],
            E = j || y(g),
            C = g ? x ? y("entries") : E : void 0,
            M = "Array" == t ? S.entries || j : j; if (M && (w = l(M.call(new e))) !== Object.prototype && w.next && (u(w, k, !0), r || "function" == typeof w[f] || i(w, f, d)), x && j && "values" !== j.name && (P = !0, E = function() { return j.call(this) }), r && !_ || !p && !P && S[f] || i(S, f, E), s[t] = E, s[k] = d, g)
            if (b = { values: x ? E : y("values"), keys: m ? E : y("keys"), entries: C }, _)
                for (v in b) v in S || o(S, v, b[v]);
            else a(a.P + a.F * (p || P), t, b);
        return b } }, function(e, t, n) { e.exports = n(10) }, function(e, t, n) { var r = n(1).document;
    e.exports = r && r.documentElement }, function(e, t, n) { var r = n(9),
        a = n(11),
        o = n(30)("IE_PROTO"),
        i = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) { return e = a(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? i : null } }, function(e, t, n) { var r = n(5);
    e.exports = function(e, t, n, a) { try { return a ? t(r(n)[0], n[1]) : t(n) } catch (t) { var o = e.return; throw void 0 !== o && r(o.call(e)), t } } }, function(e, t, n) { var r = n(20),
        a = n(2)("iterator"),
        o = Array.prototype;
    e.exports = function(e) { return void 0 !== e && (r.Array === e || o[a] === e) } }, function(e, t, n) { var r = n(57),
        a = n(2)("iterator"),
        o = n(20);
    e.exports = n(0).getIteratorMethod = function(e) { if (void 0 != e) return e[a] || e["@@iterator"] || o[r(e)] } }, function(e, t, n) { var r = n(17),
        a = n(2)("toStringTag"),
        o = "Arguments" == r(function() { return arguments }()),
        i = function(e, t) { try { return e[t] } catch (e) {} };
    e.exports = function(e) { var t, n, s; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = i(t = Object(e), a)) ? n : o ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s } }, function(e, t, n) { var r = n(2)("iterator"),
        a = !1; try { var o = [7][r]();
        o.return = function() { a = !0 }, Array.from(o, function() { throw 2 }) } catch (e) {}
    e.exports = function(e, t) { if (!t && !a) return !1; var n = !1; try { var o = [7],
                i = o[r]();
            i.next = function() { return { done: n = !0 } }, o[r] = function() { return i }, e(o) } catch (e) {} return n } }, function(e, t, n) { "use strict";
    t.__esModule = !0, t.default = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, function(e, t, n) { "use strict";
    t.__esModule = !0; var r = n(93),
        a = function(e) { return e && e.__esModule ? e : { default: e } }(r);
    t.default = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, a.default)(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }() }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }
    t.__esModule = !0; var a = n(103),
        o = r(a),
        i = n(108),
        s = r(i),
        c = "function" == typeof s.default && "symbol" == typeof o.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e };
    t.default = "function" == typeof s.default && "symbol" === c(o.default) ? function(e) { return void 0 === e ? "undefined" : c(e) } : function(e) { return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : c(e) } }, function(e, t, n) { n(105); for (var r = n(1), a = n(10), o = n(20), i = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) { var u = s[c],
            l = r[u],
            f = l && l.prototype;
        f && !f[i] && a(f, i, u), o[u] = o.Array } }, function(e, t, n) { var r = n(42),
        a = n(32).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) { return r(e, a) } }, function(e, t, n) { var r = n(23),
        a = n(19),
        o = n(12),
        i = n(34),
        s = n(9),
        c = n(45),
        u = Object.getOwnPropertyDescriptor;
    t.f = n(6) ? u : function(e, t) { if (e = o(e), t = i(t, !0), c) try { return u(e, t) } catch (e) {}
        if (s(e, t)) return a(!r.f.call(e, t), e[t]) } }, function(e, t) {}, function(e, t, n) { e.exports = { default: n(129), __esModule: !0 } }, function(e, t, n) { var r = n(5),
        a = n(22),
        o = n(2)("species");
    e.exports = function(e, t) { var n, i = r(e).constructor; return void 0 === i || void 0 == (n = r(i)[o]) ? t : a(n) } }, function(e, t, n) { var r, a, o, i = n(13),
        s = n(133),
        c = n(52),
        u = n(33),
        l = n(1),
        f = l.process,
        p = l.setImmediate,
        d = l.clearImmediate,
        h = l.MessageChannel,
        g = l.Dispatch,
        m = 0,
        _ = {},
        b = function() { var e = +this; if (_.hasOwnProperty(e)) { var t = _[e];
                delete _[e], t() } },
        v = function(e) { b.call(e.data) };
    p && d || (p = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return _[++m] = function() { s("function" == typeof e ? e : Function(e), t) }, r(m), m }, d = function(e) { delete _[e] }, "process" == n(17)(f) ? r = function(e) { f.nextTick(i(b, e, 1)) } : g && g.now ? r = function(e) { g.now(i(b, e, 1)) } : h ? (a = new h, o = a.port2, a.port1.onmessage = v, r = i(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) { l.postMessage(e + "", "*") }, l.addEventListener("message", v, !1)) : r = "onreadystatechange" in u("script") ? function(e) { c.appendChild(u("script")).onreadystatechange = function() { c.removeChild(this), b.call(e) } } : function(e) { setTimeout(i(b, e, 1), 0) }), e.exports = { set: p, clear: d } }, function(e, t) { e.exports = function(e) { try { return { e: !1, v: e() } } catch (e) { return { e: !0, v: e } } } }, function(e, t, n) { var r = n(5),
        a = n(7),
        o = n(40);
    e.exports = function(e, t) { if (r(e), a(t) && t.constructor === e) return t; var n = o.f(e); return (0, n.resolve)(t), n.promise } }, function(e, t, n) { e.exports = n(72) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(25),
        a = n.n(r),
        o = n(98);
    a.a.render(a.a.createElement("div", null, a.a.createElement(o.a, null)), document.getElementById("root")) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.createElement = t.Children = t.Component = void 0; var r = n(15),
        a = n(96),
        o = n(97),
        i = n(26),
        s = n(47),
        c = { findDOMNode: i.findDOMNode, createElement: r.createElement, render: i.render, cloneElement: a.cloneElement, createPortal: i.createPortal, Children: o.Children, Component: s.ReactClass };
    t.Component = s.ReactClass, t.Children = o.Children, t.createElement = r.createElement, t.default = c }, function(e, t, n) { "use strict";

    function r(e) { return m[e.nodeName] }

    function a(e, t, n) { if (!n || "function" != typeof n.type) { r(e) && (0, g.mapControlledElement)(e, t); for (var a in t)
                if ("children" !== a)
                    if ((0, d.isEventName)(a)) { var o = a.slice(2).toLowerCase();
                        v.event(e, t[a], o) } else "function" == typeof v[a] && v[a](e, t[a]), void 0 === v[a] && v.otherProps(e, t[a], a) } }

    function o(e, t, n) { for (var r in e) "children" !== r && e[r] !== t[r] && a(n, t); var o = {}; for (var i in t) void 0 === e[i] && (o[i] = t[i]);
        a(n, o) }

    function i(e) { c(e, "change") }

    function s(e, t, n) { e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent && e.attachEvent("on" + n, t) }

    function c(e, t, n) { var r = l(e, n),
            a = new h.SyntheticEvent(e);
        d.options.async = !0, t && (a.type = t), u(a, r), d.options.async = !1; for (var o in d.options.dirtyComponent) d.options.dirtyComponent[o].updateComponent();
        d.options.dirtyComponent = {} }

    function u(e, t) { for (var n = e.type, r = 0; r < t.length; r++) { var a = t[r].__events; for (var o in a) { var i = a[o];
                e.currentTarget = t[r], "function" == typeof i && n === o && i.call(t[r], e) } } }

    function l(e, t) { for (var n = [], r = (t || document, e.target); r.__events && n.push(r), r = r.parentNode, r && r._PortalHostNode && (r = r._PortalHostNode), r;); return n }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.mappingStrategy = void 0; var f = n(41),
        p = function(e) { return e && e.__esModule ? e : { default: e } }(f);
    t.mapProp = a, t.updateProps = o; var d = n(8),
        h = n(79),
        g = n(80),
        m = { INPUT: !0, SELECT: !0, TEXTAREA: !0 },
        _ = {},
        b = { change: function(e) { /text|password/.test(e.type) && s(document, i, "input") } },
        v = t.mappingStrategy = { style: function(e, t) { void 0 !== t && (0, p.default)(t).forEach(function(n) { e.style[n] = (0, d.styleHelper)(n, t[n]) }) }, event: function(e, t, n) { var r = e.__events || {};
                r[n] = t, e.__events = r, _[n] || (_[n] = 1, b[n] && b[n](e), s(document, c, n)) }, className: function(e, t) { void 0 !== t && (e.className = t) }, dangerouslySetInnerHTML: function(e, t) { var n = e.innerHTML;
                t.__html !== n && (e.innerHTML = t.__html) }, otherProps: function(e, t, n) { void 0 === t && void 0 === n || (e[n] = t) } } }, function(e, t, n) { n(76), e.exports = n(0).Object.keys }, function(e, t, n) { var r = n(11),
        a = n(16);
    n(44)("keys", function() { return function(e) { return a(r(e)) } }) }, function(e, t, n) { var r = n(12),
        a = n(28),
        o = n(78);
    e.exports = function(e) { return function(t, n, i) { var s, c = r(t),
                u = a(c.length),
                l = o(i, u); if (e && n != n) { for (; u > l;)
                    if ((s = c[l++]) != s) return !0 } else
                for (; u > l; l++)
                    if ((e || l in c) && c[l] === n) return e || l || 0; return !e && -1 } } }, function(e, t, n) { var r = n(29),
        a = Math.max,
        o = Math.min;
    e.exports = function(e, t) { return e = r(e), e < 0 ? a(e + t, 0) : o(e, t) } }, function(e, t, n) { "use strict";

    function r(e) { if (e.nativeEvent) return e; for (var t in e) a[t] || (this[t] = e[t]);
        this.target || (this.target = e.srcElement), this.fixEvent(), this.timeStamp = new Date - 0, this.nativeEvent = e }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.SyntheticEvent = r; var a = r.prototype = { fixEvent: function() {}, preventDefault: function() { var e = this.nativeEvent || {};
            e.returnValue = this.returnValue = !1, e.preventDefault && e.preventDefault() }, fixHooks: function() {}, stopPropagation: function() { var e = this.nativeEvent || {};
            e.cancelBubble = this._stopPropagation = !0, e.stopPropagation && e.stopPropagation() }, persist: function() {}, stopImmediatePropagation: function() { this.stopPropagation(), this.stopImmediate = !0 }, toString: function() { return "[object Event]" } } }, function(e, t, n) { "use strict";

    function r(e, t) { for (var n in e)
            if (t[n]) return !0 }

    function a(e) { var t = e.target;
        t["textarea" === e.type ? "innerHTML" : "value"] = t._lastValue }

    function o(e) { var t = e.target,
            n = t._lastValue,
            r = t.options;
        t.multiple || s(r, r.length, n) }

    function i(e) { e.preventDefault() }

    function s(e, t, n) { console.log(e); for (var r = 0; r < t; r++) { var a = e[r]; if (a.value === n) return void(a.selected = !0) }
        t && (e[0].selected = !0) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.mapControlledElement = void 0; var c = n(41),
        u = function(e) { return e && e.__esModule ? e : { default: e } }(c),
        l = { color: 1, date: 1, datetime: 1, "datetime-local": 1, email: 1, month: 1, number: 1, password: 1, range: 1, search: 1, tel: 1, text: 1, time: 1, url: 1, week: 1, textarea: 1, checkbox: 2, radio: 2, "select-one": 3, "select-multiple": 3 },
        f = { 1: ["value", { onChange: 1, onInput: 1, readOnly: 1, disabled: 1 }, "oninput", a], 2: ["checked", { onChange: 1, onClick: 1, readOnly: 1, disabled: 1 }, "onclick", i], 3: ["value", { onChange: 1, disabled: 1 }, "onchange", o] };
    t.mapControlledElement = function(e, t) { var n = e.type,
            a = l[n]; if (a) { var o = f[a],
                i = o[0],
                s = o[1],
                c = o[2];
            i in t && !r(t, s) && (console.warn("你为" + e.nodeName + "[type=" + n + "]元素指定了" + i + "属性，\n            但是没有提供另外的" + (0, u.default)(s) + "来控制" + i + "属性的变化\n            那么它即为一个非受控组件，用户无法通过输入改变元素的" + i + "值"), e._lastValue = t[i], e[c] = o[3]) } } }, function(e, t, n) { "use strict";

    function r(e) { var t = e.type; if (e.props, t) { if ("function" == typeof e.type && (e._instance.componentWillUnMount && e._instance.componentWillUnMount(), (0, i.clearRefs)(e._instance.ref)), e.props.children && a(e.props.children), e._PortalHostNode) e._PortalHostNode.parentNode.removeChild(e._PortalHostNode);
            else if (e._hostNode) { var n = e._hostNode.parentNode;
                n.removeChild(e._hostNode) }
            e._hostNode = null } }

    function a(e) { var t = e;
        7 !== (0, o.typeNumber)(t) && (t = [t]), t.forEach(function(e) { "function" == typeof e.type && e._instance.componentWillUnMount && e._instance.componentWillUnMount(), e._hostNode = null, e._instance = null, e.props.children && a(e.props.children) }) }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.disposeVnode = r; var o = n(8),
        i = n(46) }, function(e, t, n) { n(83), e.exports = n(0).Object.assign }, function(e, t, n) { var r = n(3);
    r(r.S + r.F, "Object", { assign: n(84) }) }, function(e, t, n) { "use strict"; var r = n(6),
        a = n(16),
        o = n(35),
        i = n(23),
        s = n(11),
        c = n(43),
        u = Object.assign;
    e.exports = !u || n(14)(function() { var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst"; return e[n] = 7, r.split("").forEach(function(e) { t[e] = e }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r }) ? function(e, t) { for (var n = s(e), u = arguments.length, l = 1, f = o.f, p = i.f; u > l;)
            for (var d, h = c(arguments[l++]), g = f ? a(h).concat(f(h)) : a(h), m = g.length, _ = 0; m > _;) d = g[_++], r && !p.call(h, d) || (n[d] = h[d]); return n } : u }, function(e, t, n) { "use strict";
    t.__esModule = !0; var r = n(86),
        a = function(e) { return e && e.__esModule ? e : { default: e } }(r);
    t.default = function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return (0, a.default)(e) } }, function(e, t, n) { e.exports = { default: n(87), __esModule: !0 } }, function(e, t, n) { n(36), n(91), e.exports = n(0).Array.from }, function(e, t, n) { var r = n(29),
        a = n(27);
    e.exports = function(e) { return function(t, n) { var o, i, s = String(a(t)),
                c = r(n),
                u = s.length; return c < 0 || c >= u ? e ? "" : void 0 : (o = s.charCodeAt(c), o < 55296 || o > 56319 || c + 1 === u || (i = s.charCodeAt(c + 1)) < 56320 || i > 57343 ? e ? s.charAt(c) : o : e ? s.slice(c, c + 2) : i - 56320 + (o - 55296 << 10) + 65536) } } }, function(e, t, n) { "use strict"; var r = n(37),
        a = n(19),
        o = n(24),
        i = {};
    n(10)(i, n(2)("iterator"), function() { return this }), e.exports = function(e, t, n) { e.prototype = r(i, { next: a(1, n) }), o(e, t + " Iterator") } }, function(e, t, n) { var r = n(4),
        a = n(5),
        o = n(16);
    e.exports = n(6) ? Object.defineProperties : function(e, t) { a(e); for (var n, i = o(t), s = i.length, c = 0; s > c;) r.f(e, n = i[c++], t[n]); return e } }, function(e, t, n) { "use strict"; var r = n(13),
        a = n(3),
        o = n(11),
        i = n(54),
        s = n(55),
        c = n(28),
        u = n(92),
        l = n(56);
    a(a.S + a.F * !n(58)(function(e) { Array.from(e) }), "Array", { from: function(e) { var t, n, a, f, p = o(e),
                d = "function" == typeof this ? this : Array,
                h = arguments.length,
                g = h > 1 ? arguments[1] : void 0,
                m = void 0 !== g,
                _ = 0,
                b = l(p); if (m && (g = r(g, h > 2 ? arguments[2] : void 0, 2)), void 0 == b || d == Array && s(b))
                for (t = c(p.length), n = new d(t); t > _; _++) u(n, _, m ? g(p[_], _) : p[_]);
            else
                for (f = b.call(p), n = new d; !(a = f.next()).done; _++) u(n, _, m ? i(f, g, [a.value, _], !0) : a.value); return n.length = _, n } }) }, function(e, t, n) { "use strict"; var r = n(4),
        a = n(19);
    e.exports = function(e, t, n) { t in e ? r.f(e, t, a(0, n)) : e[t] = n } }, function(e, t, n) { e.exports = { default: n(94), __esModule: !0 } }, function(e, t, n) { n(95); var r = n(0).Object;
    e.exports = function(e, t, n) { return r.defineProperty(e, t, n) } }, function(e, t, n) { var r = n(3);
    r(r.S + r.F * !n(6), "Object", { defineProperty: n(4).f }) }, function(e, t, n) { "use strict";

    function r(e, t) { var n = void 0,
            r = void 0; for (var a in e.props) "children" === a ? r = e.props[a] : n[a] = e.props[a];
        n = (0, o.default)({}, n, t); var s = t.key ? t.key : e.key,
            c = t.ref ? t.ref : e.ref; return n.key = s, n.ref = c, (0, i.createElement)(e.type, n, r) }
    Object.defineProperty(t, "__esModule", { value: !0 }); var a = n(48),
        o = function(e) { return e && e.__esModule ? e : { default: e } }(a);
    t.cloneElement = r; var i = n(15) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Children = void 0; var r = n(15),
        a = n(8),
        o = t.Children = { map: function(e, t, n) { if (null === e || void 0 === e) return e; if (7 !== (0, a.typeNumber)(e)) return t.call(n, e, 0); var o = []; return (0, r.flattenChildren)(e).forEach(function(e, r) { var a = t.call(n, e, r);
                    null !== a && o.push(a) }), o }, only: function(e) { if (7 !== (0, a.typeNumber)(e)) return e; throw new Error("React.Children.only expect only one child, which means you cannot use a list inside a component") }, count: function(e) { return null === e ? 0 : 7 !== (0, a.typeNumber)(e) ? 1 : (0, r.flattenChildren)(e).length }, forEach: function(e, t, n) { var o = (0, r.flattenChildren)(e);
                7 === (0, a.typeNumber)(o) ? (0, r.flattenChildren)(e).forEach(t, n) : t.call(n, e) }, toArray: function(e) { return null == e ? [] : o.map(e, function(e) { return e }) } } }, function(e, t, n) { "use strict"; var r = n(99),
        a = n.n(r),
        o = n(59),
        i = n.n(o),
        s = n(60),
        c = n.n(s),
        u = n(102),
        l = n.n(u),
        f = n(117),
        p = n.n(f),
        d = n(125),
        h = n.n(d),
        g = n(128),
        m = n.n(g),
        _ = n(66),
        b = n.n(_),
        v = n(25),
        w = n.n(v),
        y = n(143),
        k = n.n(y),
        x = n(144),
        P = n.n(x),
        S = n(146),
        j = (n.n(S), this),
        E = n(140),
        C = n(141),
        M = n(142),
        A = void 0,
        O = function(e, t, n) { return new b.a(function(r) { setTimeout(function() { if ("workArea" == t) { var a = e.state.DOMStyleText + n,
                            o = P.a.highlight(a, P.a.languages.css);
                        e.setState({ styleText: o, DOMStyleText: a }), e.contentNode.scrollTop = e.contentNode.scrollHeight } else if ("introduction" == t) { var i = e.state.resumeText + n,
                            s = new k.a.Converter,
                            c = s.makeHtml(i);
                        e.setState({ resumeText: i, DOMResumeText: c }), e.resumeNode.scrollTop = e.resumeNode.scrollHeight }
                    A = "？" == n || "，" == n || "！" == n || "。" == n ? 800 : 10, r() }, A) }) },
        N = function() { var e = m()(h.a.mark(function e(t, n, r, a) { var o, i; return h.a.wrap(function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (o = 1, i = a.slice(r, r + o), !((r += o) > a.length)) { e.next = 5; break } return e.abrupt("return");
                        case 5:
                            return e.next = 7, O(t, n, i);
                        case 7:
                            return e.next = 9, N(t, n, r, a);
                        case 9:
                        case "end":
                            return e.stop() } }, e, j) })); return function(t, n, r, a) { return e.apply(this, arguments) } }(),
        L = function(e) {
            function t() { var e;
                i()(this, t); for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o]; var s = l()(this, (e = t.__proto__ || a()(t)).call.apply(e, [this].concat(r))); return s.state = { styleText: "", DOMStyleText: "", resumeText: "", DOMResumeText: "" }, s } return p()(t, e), c()(t, [{ key: "componentDidMount", value: function() { var e = this;! function() { var t = m()(h.a.mark(function t(n) { return h.a.wrap(function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, N(n, "workArea", 0, E);
                                    case 2:
                                        return e.next = 4, N(n, "introduction", 0, M);
                                    case 4:
                                        return e.next = 6, N(n, "workArea", 0, C);
                                    case 6:
                                    case "end":
                                        return e.stop() } }, t, e) })); return function(e) { return t.apply(this, arguments) } }()(this) } }, { key: "render", value: function() { var e = this; return w.a.createElement("div", null, w.a.createElement("div", { className: "workArea", ref: function(t) { e.contentNode = t } }, w.a.createElement("div", { dangerouslySetInnerHTML: { __html: this.state.styleText } }), w.a.createElement("style", { dangerouslySetInnerHTML: { __html: this.state.DOMStyleText } })), w.a.createElement("div", { className: "introduction", dangerouslySetInnerHTML: { __html: this.state.DOMResumeText }, ref: function(t) { e.resumeNode = t } }), w.a.createElement("div", { id: "bot", style: { border: "2px solid gray", background: "white", borderRadius: "25px", width: "200px", padding: "10px", textAlign: "center", margin: "100px auto", fontSize: "20px", color: "rgba(150, 150, 150, 0.8)" } }, w.a.createElement("a", { href: "index.html" }, "返回首页"))) } }]), t }(w.a.Component);
    t.a = L }, function(e, t, n) { e.exports = { default: n(100), __esModule: !0 } }, function(e, t, n) { n(101), e.exports = n(0).Object.getPrototypeOf }, function(e, t, n) { var r = n(11),
        a = n(53);
    n(44)("getPrototypeOf", function() { return function(e) { return a(r(e)) } }) }, function(e, t, n) { "use strict";
    t.__esModule = !0; var r = n(61),
        a = function(e) { return e && e.__esModule ? e : { default: e } }(r);
    t.default = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== (void 0 === t ? "undefined" : (0, a.default)(t)) && "function" != typeof t ? e : t } }, function(e, t, n) { e.exports = { default: n(104), __esModule: !0 } }, function(e, t, n) { n(36), n(62), e.exports = n(38).f("iterator") }, function(e, t, n) { "use strict"; var r = n(106),
        a = n(107),
        o = n(20),
        i = n(12);
    e.exports = n(50)(Array, "Array", function(e, t) { this._t = i(e), this._i = 0, this._k = t }, function() { var e = this._t,
            t = this._k,
            n = this._i++; return !e || n >= e.length ? (this._t = void 0, a(1)) : "keys" == t ? a(0, n) : "values" == t ? a(0, e[n]) : a(0, [n, e[n]]) }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries") }, function(e, t) { e.exports = function() {} }, function(e, t) { e.exports = function(e, t) { return { value: t, done: !!e } } }, function(e, t, n) { e.exports = { default: n(109), __esModule: !0 } }, function(e, t, n) { n(110), n(65), n(115), n(116), e.exports = n(0).Symbol }, function(e, t, n) { "use strict"; var r = n(1),
        a = n(9),
        o = n(6),
        i = n(3),
        s = n(51),
        c = n(111).KEY,
        u = n(14),
        l = n(31),
        f = n(24),
        p = n(21),
        d = n(2),
        h = n(38),
        g = n(39),
        m = n(112),
        _ = n(113),
        b = n(5),
        v = n(7),
        w = n(11),
        y = n(12),
        k = n(34),
        x = n(19),
        P = n(37),
        S = n(114),
        j = n(64),
        E = n(35),
        C = n(4),
        M = n(16),
        A = j.f,
        O = C.f,
        N = S.f,
        L = r.Symbol,
        T = r.JSON,
        z = T && T.stringify,
        F = d("_hidden"),
        I = d("toPrimitive"),
        H = {}.propertyIsEnumerable,
        $ = l("symbol-registry"),
        B = l("symbols"),
        R = l("op-symbols"),
        U = Object.prototype,
        D = "function" == typeof L && !!E.f,
        V = r.QObject,
        q = !V || !V.prototype || !V.prototype.findChild,
        G = o && u(function() { return 7 != P(O({}, "a", { get: function() { return O(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) { var r = A(U, t);
            r && delete U[t], O(e, t, n), r && e !== U && O(U, t, r) } : O,
        W = function(e) { var t = B[e] = P(L.prototype); return t._k = e, t },
        K = D && "symbol" == typeof L.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof L },
        Z = function(e, t, n) { return e === U && Z(R, t, n), b(e), t = k(t, !0), b(n), a(B, t) ? (n.enumerable ? (a(e, F) && e[F][t] && (e[F][t] = !1), n = P(n, { enumerable: x(0, !1) })) : (a(e, F) || O(e, F, x(1, {})), e[F][t] = !0), G(e, t, n)) : O(e, t, n) },
        J = function(e, t) { b(e); for (var n, r = m(t = y(t)), a = 0, o = r.length; o > a;) Z(e, n = r[a++], t[n]); return e },
        Q = function(e, t) { return void 0 === t ? P(e) : J(P(e), t) },
        X = function(e) { var t = H.call(this, e = k(e, !0)); return !(this === U && a(B, e) && !a(R, e)) && (!(t || !a(this, e) || !a(B, e) || a(this, F) && this[F][e]) || t) },
        Y = function(e, t) { if (e = y(e), t = k(t, !0), e !== U || !a(B, t) || a(R, t)) { var n = A(e, t); return !n || !a(B, t) || a(e, F) && e[F][t] || (n.enumerable = !0), n } },
        ee = function(e) { for (var t, n = N(y(e)), r = [], o = 0; n.length > o;) a(B, t = n[o++]) || t == F || t == c || r.push(t); return r },
        te = function(e) { for (var t, n = e === U, r = N(n ? R : y(e)), o = [], i = 0; r.length > i;) !a(B, t = r[i++]) || n && !a(U, t) || o.push(B[t]); return o };
    D || (L = function() { if (this instanceof L) throw TypeError("Symbol is not a constructor!"); var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) { this === U && t.call(R, n), a(this, F) && a(this[F], e) && (this[F][e] = !1), G(this, e, x(1, n)) }; return o && q && G(U, e, { configurable: !0, set: t }), W(e) }, s(L.prototype, "toString", function() { return this._k }), j.f = Y, C.f = Z, n(63).f = S.f = ee, n(23).f = X, E.f = te, o && !n(18) && s(U, "propertyIsEnumerable", X, !0), h.f = function(e) { return W(d(e)) }), i(i.G + i.W + i.F * !D, { Symbol: L }); for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; ne.length > re;) d(ne[re++]); for (var ae = M(d.store), oe = 0; ae.length > oe;) g(ae[oe++]);
    i(i.S + i.F * !D, "Symbol", { for: function(e) { return a($, e += "") ? $[e] : $[e] = L(e) }, keyFor: function(e) { if (!K(e)) throw TypeError(e + " is not a symbol!"); for (var t in $)
                if ($[t] === e) return t }, useSetter: function() { q = !0 }, useSimple: function() { q = !1 } }), i(i.S + i.F * !D, "Object", { create: Q, defineProperty: Z, defineProperties: J, getOwnPropertyDescriptor: Y, getOwnPropertyNames: ee, getOwnPropertySymbols: te }); var ie = u(function() { E.f(1) });
    i(i.S + i.F * ie, "Object", { getOwnPropertySymbols: function(e) { return E.f(w(e)) } }), T && i(i.S + i.F * (!D || u(function() { var e = L(); return "[null]" != z([e]) || "{}" != z({ a: e }) || "{}" != z(Object(e)) })), "JSON", { stringify: function(e) { for (var t, n, r = [e], a = 1; arguments.length > a;) r.push(arguments[a++]); if (n = t = r[1], (v(t) || void 0 !== e) && !K(e)) return _(t) || (t = function(e, t) { if ("function" == typeof n && (t = n.call(this, e, t)), !K(t)) return t }), r[1] = t, z.apply(T, r) } }), L.prototype[I] || n(10)(L.prototype, I, L.prototype.valueOf), f(L, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0) }, function(e, t, n) { var r = n(21)("meta"),
        a = n(7),
        o = n(9),
        i = n(4).f,
        s = 0,
        c = Object.isExtensible || function() { return !0 },
        u = !n(14)(function() { return c(Object.preventExtensions({})) }),
        l = function(e) { i(e, r, { value: { i: "O" + ++s, w: {} } }) },
        f = function(e, t) { if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!o(e, r)) { if (!c(e)) return "F"; if (!t) return "E";
                l(e) } return e[r].i },
        p = function(e, t) { if (!o(e, r)) { if (!c(e)) return !0; if (!t) return !1;
                l(e) } return e[r].w },
        d = function(e) { return u && h.NEED && c(e) && !o(e, r) && l(e), e },
        h = e.exports = { KEY: r, NEED: !1, fastKey: f, getWeak: p, onFreeze: d } }, function(e, t, n) { var r = n(16),
        a = n(35),
        o = n(23);
    e.exports = function(e) { var t = r(e),
            n = a.f; if (n)
            for (var i, s = n(e), c = o.f, u = 0; s.length > u;) c.call(e, i = s[u++]) && t.push(i); return t } }, function(e, t, n) { var r = n(17);
    e.exports = Array.isArray || function(e) { return "Array" == r(e) } }, function(e, t, n) { var r = n(12),
        a = n(63).f,
        o = {}.toString,
        i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function(e) { try { return a(e) } catch (e) { return i.slice() } };
    e.exports.f = function(e) { return i && "[object Window]" == o.call(e) ? s(e) : a(r(e)) } }, function(e, t, n) { n(39)("asyncIterator") }, function(e, t, n) { n(39)("observable") }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } }
    t.__esModule = !0; var a = n(118),
        o = r(a),
        i = n(122),
        s = r(i),
        c = n(61),
        u = r(c);
    t.default = function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, u.default)(t)));
        e.prototype = (0, s.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t) } }, function(e, t, n) { e.exports = { default: n(119), __esModule: !0 } }, function(e, t, n) { n(120), e.exports = n(0).Object.setPrototypeOf }, function(e, t, n) { var r = n(3);
    r(r.S, "Object", { setPrototypeOf: n(121).set }) }, function(e, t, n) { var r = n(7),
        a = n(5),
        o = function(e, t) { if (a(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!") };
    e.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) { try { r = n(13)(Function.call, n(64).f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array) } catch (e) { t = !0 } return function(e, n) { return o(e, n), t ? e.__proto__ = n : r(e, n), e } }({}, !1) : void 0), check: o } }, function(e, t, n) { e.exports = { default: n(123), __esModule: !0 } }, function(e, t, n) { n(124); var r = n(0).Object;
    e.exports = function(e, t) { return r.create(e, t) } }, function(e, t, n) { var r = n(3);
    r(r.S, "Object", { create: n(37) }) }, function(e, t, n) { e.exports = n(126) }, function(e, t, n) { var r = function() { return this }() || Function("return this")(),
        a = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        o = a && r.regeneratorRuntime; if (r.regeneratorRuntime = void 0, e.exports = n(127), a) r.regeneratorRuntime = o;
    else try { delete r.regeneratorRuntime } catch (e) { r.regeneratorRuntime = void 0 } }, function(e, t) {! function(t) { "use strict";

        function n(e, t, n, r) { var o = t && t.prototype instanceof a ? t : a,
                i = Object.create(o.prototype),
                s = new d(r || []); return i._invoke = u(e, n, s), i }

        function r(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (e) { return { type: "throw", arg: e } } }

        function a() {}

        function o() {}

        function i() {}

        function s(e) {
            ["next", "throw", "return"].forEach(function(t) { e[t] = function(e) { return this._invoke(t, e) } }) }

        function c(e) {
            function t(n, a, o, i) { var s = r(e[n], e, a); if ("throw" !== s.type) { var c = s.arg,
                        u = c.value; return u && "object" == typeof u && b.call(u, "__await") ? Promise.resolve(u.__await).then(function(e) { t("next", e, o, i) }, function(e) { t("throw", e, o, i) }) : Promise.resolve(u).then(function(e) { c.value = e, o(c) }, i) }
                i(s.arg) }

            function n(e, n) {
                function r() { return new Promise(function(r, a) { t(e, n, r, a) }) } return a = a ? a.then(r, r) : r() } var a;
            this._invoke = n }

        function u(e, t, n) { var a = S; return function(o, i) { if (a === E) throw new Error("Generator is already running"); if (a === C) { if ("throw" === o) throw i; return g() } for (n.method = o, n.arg = i;;) { var s = n.delegate; if (s) { var c = l(s, n); if (c) { if (c === M) continue; return c } } if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) { if (a === S) throw a = C, n.arg;
                        n.dispatchException(n.arg) } else "return" === n.method && n.abrupt("return", n.arg);
                    a = E; var u = r(e, t, n); if ("normal" === u.type) { if (a = n.done ? C : j, u.arg === M) continue; return { value: u.arg, done: n.done } } "throw" === u.type && (a = C, n.method = "throw", n.arg = u.arg) } } }

        function l(e, t) { var n = e.iterator[t.method]; if (n === m) { if (t.delegate = null, "throw" === t.method) { if (e.iterator.return && (t.method = "return", t.arg = m, l(e, t), "throw" === t.method)) return M;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method") } return M } var a = r(n, e.iterator, t.arg); if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, M; var o = a.arg; return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = m), t.delegate = null, M) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, M) }

        function f(e) { var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t) }

        function p(e) { var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t }

        function d(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(f, this), this.reset(!0) }

        function h(e) { if (e) { var t = e[w]; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var n = -1,
                        r = function t() { for (; ++n < e.length;)
                                if (b.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = m, t.done = !0, t }; return r.next = r } } return { next: g } }

        function g() { return { value: m, done: !0 } } var m, _ = Object.prototype,
            b = _.hasOwnProperty,
            v = "function" == typeof Symbol ? Symbol : {},
            w = v.iterator || "@@iterator",
            y = v.asyncIterator || "@@asyncIterator",
            k = v.toStringTag || "@@toStringTag",
            x = "object" == typeof e,
            P = t.regeneratorRuntime; if (P) return void(x && (e.exports = P));
        P = t.regeneratorRuntime = x ? e.exports : {}, P.wrap = n; var S = "suspendedStart",
            j = "suspendedYield",
            E = "executing",
            C = "completed",
            M = {},
            A = {};
        A[w] = function() { return this }; var O = Object.getPrototypeOf,
            N = O && O(O(h([])));
        N && N !== _ && b.call(N, w) && (A = N); var L = i.prototype = a.prototype = Object.create(A);
        o.prototype = L.constructor = i, i.constructor = o, i[k] = o.displayName = "GeneratorFunction", P.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name)) }, P.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, i) : (e.__proto__ = i, k in e || (e[k] = "GeneratorFunction")), e.prototype = Object.create(L), e }, P.awrap = function(e) { return { __await: e } }, s(c.prototype), c.prototype[y] = function() { return this }, P.AsyncIterator = c, P.async = function(e, t, r, a) { var o = new c(n(e, t, r, a)); return P.isGeneratorFunction(t) ? o : o.next().then(function(e) { return e.done ? e.value : o.next() }) }, s(L), L[k] = "Generator", L[w] = function() { return this }, L.toString = function() { return "[object Generator]" }, P.keys = function(e) { var t = []; for (var n in e) t.push(n); return t.reverse(),
                function n() { for (; t.length;) { var r = t.pop(); if (r in e) return n.value = r, n.done = !1, n } return n.done = !0, n } }, P.values = h, d.prototype = { constructor: d, reset: function(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, this.method = "next", this.arg = m, this.tryEntries.forEach(p), !e)
                    for (var t in this) "t" === t.charAt(0) && b.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = m) }, stop: function() { this.done = !0; var e = this.tryEntries[0],
                    t = e.completion; if ("throw" === t.type) throw t.arg; return this.rval }, dispatchException: function(e) {
                function t(t, r) { return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = m), !!r } if (this.done) throw e; for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) { var a = this.tryEntries[r],
                        o = a.completion; if ("root" === a.tryLoc) return t("end"); if (a.tryLoc <= this.prev) { var i = b.call(a, "catchLoc"),
                            s = b.call(a, "finallyLoc"); if (i && s) { if (this.prev < a.catchLoc) return t(a.catchLoc, !0); if (this.prev < a.finallyLoc) return t(a.finallyLoc) } else if (i) { if (this.prev < a.catchLoc) return t(a.catchLoc, !0) } else { if (!s) throw new Error("try statement without catch or finally"); if (this.prev < a.finallyLoc) return t(a.finallyLoc) } } } }, abrupt: function(e, t) { for (var n = this.tryEntries.length - 1; n >= 0; --n) { var r = this.tryEntries[n]; if (r.tryLoc <= this.prev && b.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var a = r; break } }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null); var o = a ? a.completion : {}; return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, M) : this.complete(o) }, complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), M }, finish: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), p(n), M } }, catch: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.tryLoc === e) { var r = n.completion; if ("throw" === r.type) { var a = r.arg;
                            p(n) } return a } } throw new Error("illegal catch attempt") }, delegateYield: function(e, t, n) { return this.delegate = { iterator: h(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = m), M } } }(function() { return this }() || Function("return this")()) }, function(e, t, n) { "use strict";
    t.__esModule = !0; var r = n(66),
        a = function(e) { return e && e.__esModule ? e : { default: e } }(r);
    t.default = function(e) { return function() { var t = e.apply(this, arguments); return new a.default(function(e, n) {
                function r(o, i) { try { var s = t[o](i),
                            c = s.value } catch (e) { return void n(e) } if (!s.done) return a.default.resolve(c).then(function(e) { r("next", e) }, function(e) { r("throw", e) });
                    e(c) } return r("next") }) } } }, function(e, t, n) { n(65), n(36), n(62), n(130), n(138), n(139), e.exports = n(0).Promise }, function(e, t, n) { "use strict"; var r, a, o, i, s = n(18),
        c = n(1),
        u = n(13),
        l = n(57),
        f = n(3),
        p = n(7),
        d = n(22),
        h = n(131),
        g = n(132),
        m = n(67),
        _ = n(68).set,
        b = n(134)(),
        v = n(40),
        w = n(69),
        y = n(135),
        k = n(70),
        x = c.TypeError,
        P = c.process,
        S = P && P.versions,
        j = S && S.v8 || "",
        E = c.Promise,
        C = "process" == l(P),
        M = function() {},
        A = a = v.f,
        O = !! function() { try { var e = E.resolve(1),
                    t = (e.constructor = {})[n(2)("species")] = function(e) { e(M, M) }; return (C || "function" == typeof PromiseRejectionEvent) && e.then(M) instanceof t && 0 !== j.indexOf("6.6") && -1 === y.indexOf("Chrome/66") } catch (e) {} }(),
        N = function(e) { var t; return !(!p(e) || "function" != typeof(t = e.then)) && t },
        L = function(e, t) { if (!e._n) { e._n = !0; var n = e._c;
                b(function() { for (var r = e._v, a = 1 == e._s, o = 0; n.length > o;) ! function(t) { var n, o, i, s = a ? t.ok : t.fail,
                            c = t.resolve,
                            u = t.reject,
                            l = t.domain; try { s ? (a || (2 == e._h && F(e), e._h = 1), !0 === s ? n = r : (l && l.enter(), n = s(r), l && (l.exit(), i = !0)), n === t.promise ? u(x("Promise-chain cycle")) : (o = N(n)) ? o.call(n, c, u) : c(n)) : u(r) } catch (e) { l && !i && l.exit(), u(e) } }(n[o++]);
                    e._c = [], e._n = !1, t && !e._h && T(e) }) } },
        T = function(e) { _.call(c, function() { var t, n, r, a = e._v,
                    o = z(e); if (o && (t = w(function() { C ? P.emit("unhandledRejection", a, e) : (n = c.onunhandledrejection) ? n({ promise: e, reason: a }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", a) }), e._h = C || z(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v }) },
        z = function(e) { return 1 !== e._h && 0 === (e._a || e._c).length },
        F = function(e) { _.call(c, function() { var t;
                C ? P.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v }) }) },
        I = function(e) { var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), L(t, !0)) },
        H = function(e) { var t, n = this; if (!n._d) { n._d = !0, n = n._w || n; try { if (n === e) throw x("Promise can't be resolved itself");
                    (t = N(e)) ? b(function() { var r = { _w: n, _d: !1 }; try { t.call(e, u(H, r, 1), u(I, r, 1)) } catch (e) { I.call(r, e) } }): (n._v = e, n._s = 1, L(n, !1)) } catch (e) { I.call({ _w: n, _d: !1 }, e) } } };
    O || (E = function(e) { h(this, E, "Promise", "_h"), d(e), r.call(this); try { e(u(H, this, 1), u(I, this, 1)) } catch (e) { I.call(this, e) } }, r = function(e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }, r.prototype = n(136)(E.prototype, { then: function(e, t) { var n = A(m(this, E)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = C ? P.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && L(this, !1), n.promise }, catch: function(e) { return this.then(void 0, e) } }), o = function() { var e = new r;
        this.promise = e, this.resolve = u(H, e, 1), this.reject = u(I, e, 1) }, v.f = A = function(e) { return e === E || e === i ? new o(e) : a(e) }), f(f.G + f.W + f.F * !O, { Promise: E }), n(24)(E, "Promise"), n(137)("Promise"), i = n(0).Promise, f(f.S + f.F * !O, "Promise", { reject: function(e) { var t = A(this); return (0, t.reject)(e), t.promise } }), f(f.S + f.F * (s || !O), "Promise", { resolve: function(e) { return k(s && this === i ? E : this, e) } }), f(f.S + f.F * !(O && n(58)(function(e) { E.all(e).catch(M) })), "Promise", { all: function(e) { var t = this,
                n = A(t),
                r = n.resolve,
                a = n.reject,
                o = w(function() { var n = [],
                        o = 0,
                        i = 1;
                    g(e, !1, function(e) { var s = o++,
                            c = !1;
                        n.push(void 0), i++, t.resolve(e).then(function(e) { c || (c = !0, n[s] = e, --i || r(n)) }, a) }), --i || r(n) }); return o.e && a(o.v), n.promise }, race: function(e) { var t = this,
                n = A(t),
                r = n.reject,
                a = w(function() { g(e, !1, function(e) { t.resolve(e).then(n.resolve, r) }) }); return a.e && r(a.v), n.promise } }) }, function(e, t) { e.exports = function(e, t, n, r) { if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!"); return e } }, function(e, t, n) { var r = n(13),
        a = n(54),
        o = n(55),
        i = n(5),
        s = n(28),
        c = n(56),
        u = {},
        l = {},
        t = e.exports = function(e, t, n, f, p) { var d, h, g, m, _ = p ? function() { return e } : c(e),
                b = r(n, f, t ? 2 : 1),
                v = 0; if ("function" != typeof _) throw TypeError(e + " is not iterable!"); if (o(_)) { for (d = s(e.length); d > v; v++)
                    if ((m = t ? b(i(h = e[v])[0], h[1]) : b(e[v])) === u || m === l) return m } else
                for (g = _.call(e); !(h = g.next()).done;)
                    if ((m = a(g, b, h.value, t)) === u || m === l) return m };
    t.BREAK = u, t.RETURN = l }, function(e, t) { e.exports = function(e, t, n) { var r = void 0 === n; switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]) } return e.apply(n, t) } }, function(e, t, n) { var r = n(1),
        a = n(68).set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        i = r.process,
        s = r.Promise,
        c = "process" == n(17)(i);
    e.exports = function() { var e, t, n, u = function() { var r, a; for (c && (r = i.domain) && r.exit(); e;) { a = e.fn, e = e.next; try { a() } catch (r) { throw e ? n() : t = void 0, r } }
            t = void 0, r && r.enter() }; if (c) n = function() { i.nextTick(u) };
        else if (!o || r.navigator && r.navigator.standalone)
            if (s && s.resolve) { var l = s.resolve(void 0);
                n = function() { l.then(u) } } else n = function() { a.call(r, u) };
        else { var f = !0,
                p = document.createTextNode("");
            new o(u).observe(p, { characterData: !0 }), n = function() { p.data = f = !f } } return function(r) { var a = { fn: r, next: void 0 };
            t && (t.next = a), e || (e = a, n()), t = a } } }, function(e, t, n) { var r = n(1),
        a = r.navigator;
    e.exports = a && a.userAgent || "" }, function(e, t, n) { var r = n(10);
    e.exports = function(e, t, n) { for (var a in t) n && e[a] ? e[a] = t[a] : r(e, a, t[a]); return e } }, function(e, t, n) { "use strict"; var r = n(1),
        a = n(0),
        o = n(4),
        i = n(6),
        s = n(2)("species");
    e.exports = function(e) { var t = "function" == typeof a[e] ? a[e] : r[e];
        i && t && !t[s] && o.f(t, s, { configurable: !0, get: function() { return this } }) } }, function(e, t, n) { "use strict"; var r = n(3),
        a = n(0),
        o = n(1),
        i = n(67),
        s = n(70);
    r(r.P + r.R, "Promise", { finally: function(e) { var t = i(this, a.Promise || o.Promise),
                n = "function" == typeof e; return this.then(n ? function(n) { return s(t, e()).then(function() { return n }) } : e, n ? function(n) { return s(t, e()).then(function() { throw n }) } : e) } }) }, function(e, t, n) { "use strict"; var r = n(3),
        a = n(40),
        o = n(69);
    r(r.S, "Promise", { try: function(e) { var t = a.f(this),
                n = o(e); return (n.e ? t.reject : t.resolve)(n.v), t.promise } }) }, function(e, t) { e.exports = "/* 大家好！我们是南京大学天健社技术部，以一种很特别的方式和大家见面了。\n*\n* 这张页面好无聊啊！我们加一点小东西如何？\n* 首先,先来添加一下全局的动画效果！\n*/\n\n*{\n  -webkit-transition: all .8s;\n  transition: all .8s;\n}\n\nhtml {\n  background: rgb(0,43,54); \n}\n\n.token.comment{ \n    color: white \n}\n\n\n/* 哈哈！厉害吧！？\n* 你的眼睛是不是要瞎了?那字体也变一下呗? \n*/\n\n.workArea{\n  color: rgb(222,222,222); \n  overflow: auto;\n  background: rgb(25, 25, 25);\n  border: 1px solid #ccc;\n  max-height: 44.6%;\n  width: 35%;\n  font-size: 14px;\n  font-family: monospace;\n  padding: 10px 10px 20px;\n  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);\n  white-space: pre-wrap;\n  outline: 0;\n}\n\n\n\n/* \n* ！\n* 抱歉让你的眼睛损伤啦～ \n* 接下来我们玩一点高端的「代码高亮」！\n\n*/\n\n\n.token.comment{ color: #857F6B; font-style: italic; }\n.token.selector{ color: #E69F0F; }\n.token.property{ color: #64D5EA; }\n.token.punctuation{ color: #64D5EA; }\n.token.function{ color: #BE84F2; }\n\n\n/*\n\n* 哈哈，是不是非常不错？\n* 嗯,我们准备写一点其他的东西，把这个东西往右移动一下！\n\n*/\n\n.workArea {\n  -webkit-transform: translateX(150%);\n  transform:translateX(150%);\n}\n\n/*\n* 接下来我们写一个部门介绍好不好？\n* 首先我们先准备一个打字框！\n*/\n\n.introduction{\n  position:fixed;\n  top:0;\n  padding: .5em;  margin: .5em;\n  background: white; color: #222;\n  width: 40vw; height:500px; \n  border: 1px solid;\n  overflow: auto;\n  color: rgb(222,222,222); \n  background: rgb(25, 25, 25);\n}\n\n/*\n* 好,我们立马开写！\n*/\n" }, function(e, t) { e.exports = ".introduction{\n  height:600px;\n}\n\n/* \n部门介绍结束啦~欢迎加入南京大学天健社哦！一起做最好的公益，遇见更好的自己！\n*/" }, function(e, t) { e.exports = "# 网站开发组\n\n## 职能\n* 以独特技术优势为天健社的公益事业助力。\n* 维护网站正常运行、负责信息更新\n\n## 成员\n* 张帅：15级计算机科学与技术系学生，先后任天健社人资部部长、唐氏之家主席，天健社网站的主要开发者之一，天健唐小虎创造者，天健社新生指南创立者，天健社家文化提出者，小唐组创造者。\n* 程鉴如：16级地球科学与工程学院学生，曾任天健社项目部部员，天健社网站文案与界面设计者之一，南京大学校刊《教衡》记者。南京市博物馆讲解员，“黄金四分钟—急救医疗知识进校园进社区”项目志愿者，曾策划南京市博物馆志愿者讲解大赛。\n* 史婷婷：16级软件学院学生，曾任天健社活动部部长，天健社网站的主要开发者之一。在任活动部部长期间，活动部的“青春伴夕阳”被评为“校十佳活动”，入选“崇孝项目”，活动部被评为社优秀部门。\n* 梁孟杰：16级医学院学生，曾任天健社全媒体中心副部长，天健社网站界面设计者之一。\n* 陈昕元：16级计算机科学与技术系学生，曾任天健社副社长。\n* 张迪：16级医学院学生，曾任天健社项目部副部长，医学院记者团成员。曾担任精品活动“探访南大退休老教授”项目的负责人。\n* 唐金麟：17级计算机科学与技术系学生，唐氏之家成员，2020年10月份起负责网站维护运行。\n\n## 特别鸣谢\n* 陈智麒：15级计算机科学与技术系学生，天健社网站首页的主要开发者。\n* 陈博钏：15级计算机科学与技术系学生，为天健社网站的开发提供了帮助。\n\n## 链接\n天健社网站Github地址在[这里](https://github.com/NJUTianJian/NJUTianJian.github.io)，欢迎提issue与Pull Request！\n" }, function(e, t, n) {
    var r; /*! showdown v 1.9.1 - 02-11-2019 */
    (function() {
        function a(e) { "use strict"; var t = { omitExtraWLInCodeBlocks: { defaultValue: !1, describe: "Omit the default extra whiteline added to code blocks", type: "boolean" }, noHeaderId: { defaultValue: !1, describe: "Turn on/off generated header id", type: "boolean" }, prefixHeaderId: { defaultValue: !1, describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix", type: "string" }, rawPrefixHeaderId: { defaultValue: !1, describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)', type: "boolean" }, ghCompatibleHeaderId: { defaultValue: !1, describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)", type: "boolean" }, rawHeaderId: { defaultValue: !1, describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids", type: "boolean" }, headerLevelStart: { defaultValue: !1, describe: "The header blocks level start", type: "integer" }, parseImgDimensions: { defaultValue: !1, describe: "Turn on/off image dimension parsing", type: "boolean" }, simplifiedAutoLink: { defaultValue: !1, describe: "Turn on/off GFM autolink style", type: "boolean" }, excludeTrailingPunctuationFromURLs: { defaultValue: !1, describe: "Excludes trailing punctuation from links generated with autoLinking", type: "boolean" }, literalMidWordUnderscores: { defaultValue: !1, describe: "Parse midword underscores as literal underscores", type: "boolean" }, literalMidWordAsterisks: { defaultValue: !1, describe: "Parse midword asterisks as literal asterisks", type: "boolean" }, strikethrough: { defaultValue: !1, describe: "Turn on/off strikethrough support", type: "boolean" }, tables: { defaultValue: !1, describe: "Turn on/off tables support", type: "boolean" }, tablesHeaderId: { defaultValue: !1, describe: "Add an id to table headers", type: "boolean" }, ghCodeBlocks: { defaultValue: !0, describe: "Turn on/off GFM fenced code blocks support", type: "boolean" }, tasklists: { defaultValue: !1, describe: "Turn on/off GFM tasklist support", type: "boolean" }, smoothLivePreview: { defaultValue: !1, describe: "Prevents weird effects in live previews due to incomplete input", type: "boolean" }, smartIndentationFix: { defaultValue: !1, description: "Tries to smartly fix indentation in es6 strings", type: "boolean" }, disableForced4SpacesIndentedSublists: { defaultValue: !1, description: "Disables the requirement of indenting nested sublists by 4 spaces", type: "boolean" }, simpleLineBreaks: { defaultValue: !1, description: "Parses simple line breaks as <br> (GFM Style)", type: "boolean" }, requireSpaceBeforeHeadingText: { defaultValue: !1, description: "Makes adding a space between `#` and the header text mandatory (GFM Style)", type: "boolean" }, ghMentions: { defaultValue: !1, description: "Enables github @mentions", type: "boolean" }, ghMentionsLink: { defaultValue: "https://github.com/{u}", description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.", type: "string" }, encodeEmails: { defaultValue: !0, description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities", type: "boolean" }, openLinksInNewWindow: { defaultValue: !1, description: "Open all links in new windows", type: "boolean" }, backslashEscapesHTMLTags: { defaultValue: !1, description: "Support for HTML Tag escaping. ex: <div>foo</div>", type: "boolean" }, emoji: { defaultValue: !1, description: "Enable emoji support. Ex: `this is a :smile: emoji`", type: "boolean" }, underline: { defaultValue: !1, description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`", type: "boolean" }, completeHTMLDocument: { defaultValue: !1, description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags", type: "boolean" }, metadata: { defaultValue: !1, description: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).", type: "boolean" }, splitAdjacentBlockquotes: { defaultValue: !1, description: "Split adjacent blockquote blocks", type: "boolean" } }; if (!1 === e) return JSON.parse(JSON.stringify(t)); var n = {}; for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r].defaultValue); return n }

        function o(e, t) { "use strict"; var n = t ? "Error in " + t + " extension->" : "Error in unnamed extension",
                r = { valid: !0, error: "" };
            s.helper.isArray(e) || (e = [e]); for (var a = 0; a < e.length; ++a) { var o = n + " sub-extension " + a + ": ",
                    i = e[a]; if ("object" != typeof i) return r.valid = !1, r.error = o + "must be an object, but " + typeof i + " given", r; if (!s.helper.isString(i.type)) return r.valid = !1, r.error = o + 'property "type" must be a string, but ' + typeof i.type + " given", r; var c = i.type = i.type.toLowerCase(); if ("language" === c && (c = i.type = "lang"), "html" === c && (c = i.type = "output"), "lang" !== c && "output" !== c && "listener" !== c) return r.valid = !1, r.error = o + "type " + c + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', r; if ("listener" === c) { if (s.helper.isUndefined(i.listeners)) return r.valid = !1, r.error = o + '. Extensions of type "listener" must have a property called "listeners"', r } else if (s.helper.isUndefined(i.filter) && s.helper.isUndefined(i.regex)) return r.valid = !1, r.error = o + c + ' extensions must define either a "regex" property or a "filter" method', r; if (i.listeners) { if ("object" != typeof i.listeners) return r.valid = !1, r.error = o + '"listeners" property must be an object but ' + typeof i.listeners + " given", r; for (var u in i.listeners)
                        if (i.listeners.hasOwnProperty(u) && "function" != typeof i.listeners[u]) return r.valid = !1, r.error = o + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + u + " must be a function but " + typeof i.listeners[u] + " given", r } if (i.filter) { if ("function" != typeof i.filter) return r.valid = !1, r.error = o + '"filter" must be a function, but ' + typeof i.filter + " given", r } else if (i.regex) { if (s.helper.isString(i.regex) && (i.regex = new RegExp(i.regex, "g")), !(i.regex instanceof RegExp)) return r.valid = !1, r.error = o + '"regex" property must either be a string or a RegExp object, but ' + typeof i.regex + " given", r; if (s.helper.isUndefined(i.replace)) return r.valid = !1, r.error = o + '"regex" extensions must implement a replace string or function', r } } return r }

        function i(e, t) { "use strict"; return "¨E" + t.charCodeAt(0) + "E" } var s = {},
            c = {},
            u = {},
            l = a(!0),
            f = "vanilla",
            p = { github: { omitExtraWLInCodeBlocks: !0, simplifiedAutoLink: !0, excludeTrailingPunctuationFromURLs: !0, literalMidWordUnderscores: !0, strikethrough: !0, tables: !0, tablesHeaderId: !0, ghCodeBlocks: !0, tasklists: !0, disableForced4SpacesIndentedSublists: !0, simpleLineBreaks: !0, requireSpaceBeforeHeadingText: !0, ghCompatibleHeaderId: !0, ghMentions: !0, backslashEscapesHTMLTags: !0, emoji: !0, splitAdjacentBlockquotes: !0 }, original: { noHeaderId: !0, ghCodeBlocks: !1 }, ghost: { omitExtraWLInCodeBlocks: !0, parseImgDimensions: !0, simplifiedAutoLink: !0, excludeTrailingPunctuationFromURLs: !0, literalMidWordUnderscores: !0, strikethrough: !0, tables: !0, tablesHeaderId: !0, ghCodeBlocks: !0, tasklists: !0, smoothLivePreview: !0, simpleLineBreaks: !0, requireSpaceBeforeHeadingText: !0, ghMentions: !1, encodeEmails: !0 }, vanilla: a(!0), allOn: function() { "use strict"; var e = a(!0),
                        t = {}; for (var n in e) e.hasOwnProperty(n) && (t[n] = !0); return t }() };
        s.helper = {}, s.extensions = {}, s.setOption = function(e, t) { "use strict"; return l[e] = t, this }, s.getOption = function(e) { "use strict"; return l[e] }, s.getOptions = function() { "use strict"; return l }, s.resetOptions = function() { "use strict";
            l = a(!0) }, s.setFlavor = function(e) { "use strict"; if (!p.hasOwnProperty(e)) throw Error(e + " flavor was not found");
            s.resetOptions(); var t = p[e];
            f = e; for (var n in t) t.hasOwnProperty(n) && (l[n] = t[n]) }, s.getFlavor = function() { "use strict"; return f }, s.getFlavorOptions = function(e) { "use strict"; if (p.hasOwnProperty(e)) return p[e] }, s.getDefaultOptions = function(e) { "use strict"; return a(e) }, s.subParser = function(e, t) { "use strict"; if (s.helper.isString(e)) { if (void 0 === t) { if (c.hasOwnProperty(e)) return c[e]; throw Error("SubParser named " + e + " not registered!") }
                c[e] = t } }, s.extension = function(e, t) { "use strict"; if (!s.helper.isString(e)) throw Error("Extension 'name' must be a string"); if (e = s.helper.stdExtName(e), s.helper.isUndefined(t)) { if (!u.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!"); return u[e] } "function" == typeof t && (t = t()), s.helper.isArray(t) || (t = [t]); var n = o(t, e); if (!n.valid) throw Error(n.error);
            u[e] = t }, s.getAllExtensions = function() { "use strict"; return u }, s.removeExtension = function(e) { "use strict";
            delete u[e] }, s.resetExtensions = function() { "use strict";
            u = {} }, s.validateExtension = function(e) { "use strict"; var t = o(e, null); return !!t.valid || (console.warn(t.error), !1) }, s.hasOwnProperty("helper") || (s.helper = {}), s.helper.isString = function(e) { "use strict"; return "string" == typeof e || e instanceof String }, s.helper.isFunction = function(e) { "use strict"; var t = {}; return e && "[object Function]" === t.toString.call(e) }, s.helper.isArray = function(e) { "use strict"; return Array.isArray(e) }, s.helper.isUndefined = function(e) { "use strict"; return void 0 === e }, s.helper.forEach = function(e, t) { "use strict"; if (s.helper.isUndefined(e)) throw new Error("obj param is required"); if (s.helper.isUndefined(t)) throw new Error("callback param is required"); if (!s.helper.isFunction(t)) throw new Error("callback param must be a function/closure"); if ("function" == typeof e.forEach) e.forEach(t);
            else if (s.helper.isArray(e))
                for (var n = 0; n < e.length; n++) t(e[n], n, e);
            else { if ("object" != typeof e) throw new Error("obj does not seem to be an array or an iterable object"); for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e) } }, s.helper.stdExtName = function(e) { "use strict"; return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase() }, s.helper.escapeCharactersCallback = i, s.helper.escapeCharacters = function(e, t, n) { "use strict"; var r = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
            n && (r = "\\\\" + r); var a = new RegExp(r, "g"); return e = e.replace(a, i) }, s.helper.unescapeHTMLEntities = function(e) { "use strict"; return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&") }; var d = function(e, t, n, r) { "use strict"; var a, o, i, s, c, u = r || "",
                l = u.indexOf("g") > -1,
                f = new RegExp(t + "|" + n, "g" + u.replace(/g/g, "")),
                p = new RegExp(t, u.replace(/g/g, "")),
                d = [];
            do { for (a = 0; i = f.exec(e);)
                    if (p.test(i[0])) a++ || (o = f.lastIndex, s = o - i[0].length);
                    else if (a && !--a) { c = i.index + i[0].length; var h = { left: { start: s, end: o }, match: { start: o, end: i.index }, right: { start: i.index, end: c }, wholeMatch: { start: s, end: c } }; if (d.push(h), !l) return d } } while (a && (f.lastIndex = o)); return d };
        s.helper.matchRecursiveRegExp = function(e, t, n, r) { "use strict"; for (var a = d(e, t, n, r), o = [], i = 0; i < a.length; ++i) o.push([e.slice(a[i].wholeMatch.start, a[i].wholeMatch.end), e.slice(a[i].match.start, a[i].match.end), e.slice(a[i].left.start, a[i].left.end), e.slice(a[i].right.start, a[i].right.end)]); return o }, s.helper.replaceRecursiveRegExp = function(e, t, n, r, a) { "use strict"; if (!s.helper.isFunction(t)) { var o = t;
                t = function() { return o } } var i = d(e, n, r, a),
                c = e,
                u = i.length; if (u > 0) { var l = [];
                0 !== i[0].wholeMatch.start && l.push(e.slice(0, i[0].wholeMatch.start)); for (var f = 0; f < u; ++f) l.push(t(e.slice(i[f].wholeMatch.start, i[f].wholeMatch.end), e.slice(i[f].match.start, i[f].match.end), e.slice(i[f].left.start, i[f].left.end), e.slice(i[f].right.start, i[f].right.end))), f < u - 1 && l.push(e.slice(i[f].wholeMatch.end, i[f + 1].wholeMatch.start));
                i[u - 1].wholeMatch.end < e.length && l.push(e.slice(i[u - 1].wholeMatch.end)), c = l.join("") } return c }, s.helper.regexIndexOf = function(e, t, n) { "use strict"; if (!s.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string"; if (t instanceof RegExp == 0) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp"; var r = e.substring(n || 0).search(t); return r >= 0 ? r + (n || 0) : r }, s.helper.splitAtIndex = function(e, t) { "use strict"; if (!s.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string"; return [e.substring(0, t), e.substring(t)] }, s.helper.encodeEmailAddress = function(e) { "use strict"; var t = [function(e) { return "&#" + e.charCodeAt(0) + ";" }, function(e) { return "&#x" + e.charCodeAt(0).toString(16) + ";" }, function(e) { return e }]; return e = e.replace(/./g, function(e) { if ("@" === e) e = t[Math.floor(2 * Math.random())](e);
                else { var n = Math.random();
                    e = n > .9 ? t[2](e) : n > .45 ? t[1](e) : t[0](e) } return e }) }, s.helper.padEnd = function(e, t, n) { "use strict"; return t >>= 0, n = String(n || " "), e.length > t ? String(e) : (t -= e.length, t > n.length && (n += n.repeat(t / n.length)), String(e) + n.slice(0, t)) }, "undefined" == typeof console && (console = { warn: function(e) { "use strict";
                alert(e) }, log: function(e) { "use strict";
                alert(e) }, error: function(e) { "use strict"; throw e } }), s.helper.regexes = { asteriskDashAndColon: /([*_:~])/g }, s.helper.emojis = { "+1": "👍", "-1": "👎", 100: "💯", 1234: "🔢", "1st_place_medal": "🥇", "2nd_place_medal": "🥈", "3rd_place_medal": "🥉", "8ball": "🎱", a: "🅰️", ab: "🆎", abc: "🔤", abcd: "🔡", accept: "🉑", aerial_tramway: "🚡", airplane: "✈️", alarm_clock: "⏰", alembic: "⚗️", alien: "👽", ambulance: "🚑", amphora: "🏺", anchor: "⚓️", angel: "👼", anger: "💢", angry: "😠", anguished: "😧", ant: "🐜", apple: "🍎", aquarius: "♒️", aries: "♈️", arrow_backward: "◀️", arrow_double_down: "⏬", arrow_double_up: "⏫", arrow_down: "⬇️", arrow_down_small: "🔽", arrow_forward: "▶️", arrow_heading_down: "⤵️", arrow_heading_up: "⤴️", arrow_left: "⬅️", arrow_lower_left: "↙️", arrow_lower_right: "↘️", arrow_right: "➡️", arrow_right_hook: "↪️", arrow_up: "⬆️", arrow_up_down: "↕️", arrow_up_small: "🔼", arrow_upper_left: "↖️", arrow_upper_right: "↗️", arrows_clockwise: "🔃", arrows_counterclockwise: "🔄", art: "🎨", articulated_lorry: "🚛", artificial_satellite: "🛰", astonished: "😲", athletic_shoe: "👟", atm: "🏧", atom_symbol: "⚛️", avocado: "🥑", b: "🅱️", baby: "👶", baby_bottle: "🍼", baby_chick: "🐤", baby_symbol: "🚼", back: "🔙", bacon: "🥓", badminton: "🏸", baggage_claim: "🛄", baguette_bread: "🥖", balance_scale: "⚖️", balloon: "🎈", ballot_box: "🗳", ballot_box_with_check: "☑️", bamboo: "🎍", banana: "🍌", bangbang: "‼️", bank: "🏦", bar_chart: "📊", barber: "💈", baseball: "⚾️", basketball: "🏀", basketball_man: "⛹️", basketball_woman: "⛹️&zwj;♀️", bat: "🦇", bath: "🛀", bathtub: "🛁", battery: "🔋", beach_umbrella: "🏖", bear: "🐻", bed: "🛏", bee: "🐝", beer: "🍺", beers: "🍻", beetle: "🐞", beginner: "🔰", bell: "🔔", bellhop_bell: "🛎", bento: "🍱", biking_man: "🚴", bike: "🚲", biking_woman: "🚴&zwj;♀️", bikini: "👙", biohazard: "☣️", bird: "🐦", birthday: "🎂", black_circle: "⚫️", black_flag: "🏴", black_heart: "🖤", black_joker: "🃏", black_large_square: "⬛️", black_medium_small_square: "◾️", black_medium_square: "◼️", black_nib: "✒️", black_small_square: "▪️", black_square_button: "🔲", blonde_man: "👱", blonde_woman: "👱&zwj;♀️", blossom: "🌼", blowfish: "🐡", blue_book: "📘", blue_car: "🚙", blue_heart: "💙", blush: "😊", boar: "🐗", boat: "⛵️", bomb: "💣", book: "📖", bookmark: "🔖", bookmark_tabs: "📑", books: "📚", boom: "💥", boot: "👢", bouquet: "💐", bowing_man: "🙇", bow_and_arrow: "🏹", bowing_woman: "🙇&zwj;♀️", bowling: "🎳", boxing_glove: "🥊", boy: "👦", bread: "🍞", bride_with_veil: "👰", bridge_at_night: "🌉", briefcase: "💼", broken_heart: "💔", bug: "🐛", building_construction: "🏗", bulb: "💡", bullettrain_front: "🚅", bullettrain_side: "🚄", burrito: "🌯", bus: "🚌", business_suit_levitating: "🕴", busstop: "🚏", bust_in_silhouette: "👤", busts_in_silhouette: "👥", butterfly: "🦋", cactus: "🌵", cake: "🍰", calendar: "📆", call_me_hand: "🤙", calling: "📲", camel: "🐫", camera: "📷", camera_flash: "📸", camping: "🏕", cancer: "♋️", candle: "🕯", candy: "🍬", canoe: "🛶", capital_abcd: "🔠", capricorn: "♑️", car: "🚗", card_file_box: "🗃", card_index: "📇", card_index_dividers: "🗂", carousel_horse: "🎠", carrot: "🥕", cat: "🐱", cat2: "🐈", cd: "💿", chains: "⛓", champagne: "🍾", chart: "💹", chart_with_downwards_trend: "📉", chart_with_upwards_trend: "📈", checkered_flag: "🏁", cheese: "🧀", cherries: "🍒", cherry_blossom: "🌸", chestnut: "🌰", chicken: "🐔", children_crossing: "🚸", chipmunk: "🐿", chocolate_bar: "🍫", christmas_tree: "🎄", church: "⛪️", cinema: "🎦", circus_tent: "🎪", city_sunrise: "🌇", city_sunset: "🌆", cityscape: "🏙", cl: "🆑", clamp: "🗜", clap: "👏", clapper: "🎬", classical_building: "🏛", clinking_glasses: "🥂", clipboard: "📋", clock1: "🕐", clock10: "🕙", clock1030: "🕥", clock11: "🕚", clock1130: "🕦", clock12: "🕛", clock1230: "🕧", clock130: "🕜", clock2: "🕑", clock230: "🕝", clock3: "🕒", clock330: "🕞", clock4: "🕓", clock430: "🕟", clock5: "🕔", clock530: "🕠", clock6: "🕕", clock630: "🕡", clock7: "🕖", clock730: "🕢", clock8: "🕗", clock830: "🕣", clock9: "🕘", clock930: "🕤", closed_book: "📕", closed_lock_with_key: "🔐", closed_umbrella: "🌂", cloud: "☁️", cloud_with_lightning: "🌩", cloud_with_lightning_and_rain: "⛈", cloud_with_rain: "🌧", cloud_with_snow: "🌨", clown_face: "🤡", clubs: "♣️", cocktail: "🍸", coffee: "☕️", coffin: "⚰️", cold_sweat: "😰", comet: "☄️", computer: "💻", computer_mouse: "🖱", confetti_ball: "🎊", confounded: "😖", confused: "😕", congratulations: "㊗️", construction: "🚧", construction_worker_man: "👷", construction_worker_woman: "👷&zwj;♀️", control_knobs: "🎛", convenience_store: "🏪", cookie: "🍪", cool: "🆒", policeman: "👮", copyright: "©️", corn: "🌽", couch_and_lamp: "🛋", couple: "👫", couple_with_heart_woman_man: "💑", couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨", couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩", couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨", couplekiss_man_woman: "💏", couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩", cow: "🐮", cow2: "🐄", cowboy_hat_face: "🤠", crab: "🦀", crayon: "🖍", credit_card: "💳", crescent_moon: "🌙", cricket: "🏏", crocodile: "🐊", croissant: "🥐", crossed_fingers: "🤞", crossed_flags: "🎌", crossed_swords: "⚔️", crown: "👑", cry: "😢", crying_cat_face: "😿", crystal_ball: "🔮", cucumber: "🥒", cupid: "💘", curly_loop: "➰", currency_exchange: "💱", curry: "🍛", custard: "🍮", customs: "🛃", cyclone: "🌀", dagger: "🗡", dancer: "💃", dancing_women: "👯", dancing_men: "👯&zwj;♂️", dango: "🍡", dark_sunglasses: "🕶", dart: "🎯", dash: "💨", date: "📅", deciduous_tree: "🌳", deer: "🦌", department_store: "🏬", derelict_house: "🏚", desert: "🏜", desert_island: "🏝", desktop_computer: "🖥", male_detective: "🕵️", diamond_shape_with_a_dot_inside: "💠", diamonds: "♦️", disappointed: "😞", disappointed_relieved: "😥", dizzy: "💫", dizzy_face: "😵", do_not_litter: "🚯", dog: "🐶", dog2: "🐕", dollar: "💵", dolls: "🎎", dolphin: "🐬", door: "🚪", doughnut: "🍩", dove: "🕊", dragon: "🐉", dragon_face: "🐲", dress: "👗", dromedary_camel: "🐪", drooling_face: "🤤", droplet: "💧", drum: "🥁", duck: "🦆", dvd: "📀", "e-mail": "📧", eagle: "🦅", ear: "👂", ear_of_rice: "🌾", earth_africa: "🌍", earth_americas: "🌎", earth_asia: "🌏", egg: "🥚", eggplant: "🍆", eight_pointed_black_star: "✴️", eight_spoked_asterisk: "✳️", electric_plug: "🔌", elephant: "🐘", email: "✉️", end: "🔚", envelope_with_arrow: "📩", euro: "💶", european_castle: "🏰", european_post_office: "🏤", evergreen_tree: "🌲", exclamation: "❗️", expressionless: "😑", eye: "👁", eye_speech_bubble: "👁&zwj;🗨", eyeglasses: "👓", eyes: "👀", face_with_head_bandage: "🤕", face_with_thermometer: "🤒", fist_oncoming: "👊", factory: "🏭", fallen_leaf: "🍂", family_man_woman_boy: "👪", family_man_boy: "👨&zwj;👦", family_man_boy_boy: "👨&zwj;👦&zwj;👦", family_man_girl: "👨&zwj;👧", family_man_girl_boy: "👨&zwj;👧&zwj;👦", family_man_girl_girl: "👨&zwj;👧&zwj;👧", family_man_man_boy: "👨&zwj;👨&zwj;👦", family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦", family_man_man_girl: "👨&zwj;👨&zwj;👧", family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦", family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧", family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦", family_man_woman_girl: "👨&zwj;👩&zwj;👧", family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦", family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧", family_woman_boy: "👩&zwj;👦", family_woman_boy_boy: "👩&zwj;👦&zwj;👦", family_woman_girl: "👩&zwj;👧", family_woman_girl_boy: "👩&zwj;👧&zwj;👦", family_woman_girl_girl: "👩&zwj;👧&zwj;👧", family_woman_woman_boy: "👩&zwj;👩&zwj;👦", family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦", family_woman_woman_girl: "👩&zwj;👩&zwj;👧", family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦", family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧", fast_forward: "⏩", fax: "📠", fearful: "😨", feet: "🐾", female_detective: "🕵️&zwj;♀️", ferris_wheel: "🎡", ferry: "⛴", field_hockey: "🏑", file_cabinet: "🗄", file_folder: "📁", film_projector: "📽", film_strip: "🎞", fire: "🔥", fire_engine: "🚒", fireworks: "🎆", first_quarter_moon: "🌓", first_quarter_moon_with_face: "🌛", fish: "🐟", fish_cake: "🍥", fishing_pole_and_fish: "🎣", fist_raised: "✊", fist_left: "🤛", fist_right: "🤜", flags: "🎏", flashlight: "🔦", fleur_de_lis: "⚜️", flight_arrival: "🛬", flight_departure: "🛫", floppy_disk: "💾", flower_playing_cards: "🎴", flushed: "😳", fog: "🌫", foggy: "🌁", football: "🏈", footprints: "👣", fork_and_knife: "🍴", fountain: "⛲️", fountain_pen: "🖋", four_leaf_clover: "🍀", fox_face: "🦊", framed_picture: "🖼", free: "🆓", fried_egg: "🍳", fried_shrimp: "🍤", fries: "🍟", frog: "🐸", frowning: "😦", frowning_face: "☹️", frowning_man: "🙍&zwj;♂️", frowning_woman: "🙍", middle_finger: "🖕", fuelpump: "⛽️", full_moon: "🌕", full_moon_with_face: "🌝", funeral_urn: "⚱️", game_die: "🎲", gear: "⚙️", gem: "💎", gemini: "♊️", ghost: "👻", gift: "🎁", gift_heart: "💝", girl: "👧", globe_with_meridians: "🌐", goal_net: "🥅", goat: "🐐", golf: "⛳️", golfing_man: "🏌️", golfing_woman: "🏌️&zwj;♀️", gorilla: "🦍", grapes: "🍇", green_apple: "🍏", green_book: "📗", green_heart: "💚", green_salad: "🥗", grey_exclamation: "❕", grey_question: "❔", grimacing: "😬", grin: "😁", grinning: "😀", guardsman: "💂", guardswoman: "💂&zwj;♀️", guitar: "🎸", gun: "🔫", haircut_woman: "💇", haircut_man: "💇&zwj;♂️", hamburger: "🍔", hammer: "🔨", hammer_and_pick: "⚒", hammer_and_wrench: "🛠", hamster: "🐹", hand: "✋", handbag: "👜", handshake: "🤝", hankey: "💩", hatched_chick: "🐥", hatching_chick: "🐣", headphones: "🎧", hear_no_evil: "🙉", heart: "❤️", heart_decoration: "💟", heart_eyes: "😍", heart_eyes_cat: "😻", heartbeat: "💓", heartpulse: "💗", hearts: "♥️", heavy_check_mark: "✔️", heavy_division_sign: "➗", heavy_dollar_sign: "💲", heavy_heart_exclamation: "❣️", heavy_minus_sign: "➖", heavy_multiplication_x: "✖️", heavy_plus_sign: "➕", helicopter: "🚁", herb: "🌿", hibiscus: "🌺", high_brightness: "🔆", high_heel: "👠", hocho: "🔪", hole: "🕳", honey_pot: "🍯", horse: "🐴", horse_racing: "🏇", hospital: "🏥", hot_pepper: "🌶", hotdog: "🌭", hotel: "🏨", hotsprings: "♨️", hourglass: "⌛️", hourglass_flowing_sand: "⏳", house: "🏠", house_with_garden: "🏡", houses: "🏘", hugs: "🤗", hushed: "😯", ice_cream: "🍨", ice_hockey: "🏒", ice_skate: "⛸", icecream: "🍦", id: "🆔", ideograph_advantage: "🉐", imp: "👿", inbox_tray: "📥", incoming_envelope: "📨", tipping_hand_woman: "💁", information_source: "ℹ️", innocent: "😇", interrobang: "⁉️", iphone: "📱", izakaya_lantern: "🏮", jack_o_lantern: "🎃", japan: "🗾", japanese_castle: "🏯", japanese_goblin: "👺", japanese_ogre: "👹", jeans: "👖", joy: "😂", joy_cat: "😹", joystick: "🕹", kaaba: "🕋", key: "🔑", keyboard: "⌨️", keycap_ten: "🔟", kick_scooter: "🛴", kimono: "👘", kiss: "💋", kissing: "😗", kissing_cat: "😽", kissing_closed_eyes: "😚", kissing_heart: "😘", kissing_smiling_eyes: "😙", kiwi_fruit: "🥝", koala: "🐨", koko: "🈁", label: "🏷", large_blue_circle: "🔵", large_blue_diamond: "🔷", large_orange_diamond: "🔶", last_quarter_moon: "🌗", last_quarter_moon_with_face: "🌜", latin_cross: "✝️", laughing: "😆", leaves: "🍃", ledger: "📒", left_luggage: "🛅", left_right_arrow: "↔️", leftwards_arrow_with_hook: "↩️", lemon: "🍋", leo: "♌️", leopard: "🐆", level_slider: "🎚", libra: "♎️", light_rail: "🚈", link: "🔗", lion: "🦁", lips: "👄", lipstick: "💄", lizard: "🦎", lock: "🔒", lock_with_ink_pen: "🔏", lollipop: "🍭", loop: "➿", loud_sound: "🔊", loudspeaker: "📢", love_hotel: "🏩", love_letter: "💌", low_brightness: "🔅", lying_face: "🤥", m: "Ⓜ️", mag: "🔍", mag_right: "🔎", mahjong: "🀄️", mailbox: "📫", mailbox_closed: "📪", mailbox_with_mail: "📬", mailbox_with_no_mail: "📭", man: "👨", man_artist: "👨&zwj;🎨", man_astronaut: "👨&zwj;🚀", man_cartwheeling: "🤸&zwj;♂️", man_cook: "👨&zwj;🍳", man_dancing: "🕺", man_facepalming: "🤦&zwj;♂️", man_factory_worker: "👨&zwj;🏭", man_farmer: "👨&zwj;🌾", man_firefighter: "👨&zwj;🚒", man_health_worker: "👨&zwj;⚕️", man_in_tuxedo: "🤵", man_judge: "👨&zwj;⚖️", man_juggling: "🤹&zwj;♂️", man_mechanic: "👨&zwj;🔧", man_office_worker: "👨&zwj;💼", man_pilot: "👨&zwj;✈️", man_playing_handball: "🤾&zwj;♂️", man_playing_water_polo: "🤽&zwj;♂️", man_scientist: "👨&zwj;🔬", man_shrugging: "🤷&zwj;♂️", man_singer: "👨&zwj;🎤", man_student: "👨&zwj;🎓", man_teacher: "👨&zwj;🏫", man_technologist: "👨&zwj;💻", man_with_gua_pi_mao: "👲", man_with_turban: "👳", tangerine: "🍊", mans_shoe: "👞", mantelpiece_clock: "🕰", maple_leaf: "🍁", martial_arts_uniform: "🥋", mask: "😷", massage_woman: "💆", massage_man: "💆&zwj;♂️", meat_on_bone: "🍖", medal_military: "🎖", medal_sports: "🏅", mega: "📣", melon: "🍈", memo: "📝", men_wrestling: "🤼&zwj;♂️", menorah: "🕎", mens: "🚹", metal: "🤘", metro: "🚇", microphone: "🎤", microscope: "🔬", milk_glass: "🥛", milky_way: "🌌", minibus: "🚐", minidisc: "💽", mobile_phone_off: "📴", money_mouth_face: "🤑", money_with_wings: "💸", moneybag: "💰", monkey: "🐒", monkey_face: "🐵", monorail: "🚝", moon: "🌔", mortar_board: "🎓", mosque: "🕌", motor_boat: "🛥", motor_scooter: "🛵", motorcycle: "🏍", motorway: "🛣", mount_fuji: "🗻", mountain: "⛰", mountain_biking_man: "🚵", mountain_biking_woman: "🚵&zwj;♀️", mountain_cableway: "🚠", mountain_railway: "🚞", mountain_snow: "🏔", mouse: "🐭", mouse2: "🐁", movie_camera: "🎥", moyai: "🗿", mrs_claus: "🤶", muscle: "💪", mushroom: "🍄", musical_keyboard: "🎹", musical_note: "🎵", musical_score: "🎼", mute: "🔇", nail_care: "💅", name_badge: "📛", national_park: "🏞", nauseated_face: "🤢", necktie: "👔", negative_squared_cross_mark: "❎", nerd_face: "🤓", neutral_face: "😐", new: "🆕", new_moon: "🌑", new_moon_with_face: "🌚", newspaper: "📰", newspaper_roll: "🗞", next_track_button: "⏭", ng: "🆖", no_good_man: "🙅&zwj;♂️", no_good_woman: "🙅", night_with_stars: "🌃", no_bell: "🔕", no_bicycles: "🚳", no_entry: "⛔️", no_entry_sign: "🚫", no_mobile_phones: "📵", no_mouth: "😶", no_pedestrians: "🚷", no_smoking: "🚭", "non-potable_water": "🚱", nose: "👃", notebook: "📓", notebook_with_decorative_cover: "📔", notes: "🎶", nut_and_bolt: "🔩", o: "⭕️", o2: "🅾️", ocean: "🌊", octopus: "🐙", oden: "🍢", office: "🏢", oil_drum: "🛢", ok: "🆗", ok_hand: "👌", ok_man: "🙆&zwj;♂️", ok_woman: "🙆", old_key: "🗝", older_man: "👴", older_woman: "👵", om: "🕉", on: "🔛", oncoming_automobile: "🚘", oncoming_bus: "🚍", oncoming_police_car: "🚔", oncoming_taxi: "🚖", open_file_folder: "📂", open_hands: "👐", open_mouth: "😮", open_umbrella: "☂️", ophiuchus: "⛎", orange_book: "📙", orthodox_cross: "☦️", outbox_tray: "📤", owl: "🦉", ox: "🐂", package: "📦", page_facing_up: "📄", page_with_curl: "📃", pager: "📟", paintbrush: "🖌", palm_tree: "🌴", pancakes: "🥞", panda_face: "🐼", paperclip: "📎", paperclips: "🖇", parasol_on_ground: "⛱", parking: "🅿️", part_alternation_mark: "〽️", partly_sunny: "⛅️", passenger_ship: "🛳", passport_control: "🛂", pause_button: "⏸", peace_symbol: "☮️", peach: "🍑", peanuts: "🥜", pear: "🍐", pen: "🖊", pencil2: "✏️", penguin: "🐧", pensive: "😔", performing_arts: "🎭", persevere: "😣", person_fencing: "🤺", pouting_woman: "🙎", phone: "☎️", pick: "⛏", pig: "🐷", pig2: "🐖", pig_nose: "🐽", pill: "💊", pineapple: "🍍", ping_pong: "🏓", pisces: "♓️", pizza: "🍕", place_of_worship: "🛐", plate_with_cutlery: "🍽", play_or_pause_button: "⏯", point_down: "👇", point_left: "👈", point_right: "👉", point_up: "☝️", point_up_2: "👆", police_car: "🚓", policewoman: "👮&zwj;♀️", poodle: "🐩", popcorn: "🍿", post_office: "🏣", postal_horn: "📯", postbox: "📮", potable_water: "🚰", potato: "🥔", pouch: "👝", poultry_leg: "🍗", pound: "💷", rage: "😡", pouting_cat: "😾", pouting_man: "🙎&zwj;♂️", pray: "🙏", prayer_beads: "📿", pregnant_woman: "🤰", previous_track_button: "⏮", prince: "🤴", princess: "👸", printer: "🖨", purple_heart: "💜", purse: "👛", pushpin: "📌", put_litter_in_its_place: "🚮", question: "❓", rabbit: "🐰", rabbit2: "🐇", racehorse: "🐎", racing_car: "🏎", radio: "📻", radio_button: "🔘", radioactive: "☢️", railway_car: "🚃", railway_track: "🛤", rainbow: "🌈", rainbow_flag: "🏳️&zwj;🌈", raised_back_of_hand: "🤚", raised_hand_with_fingers_splayed: "🖐", raised_hands: "🙌", raising_hand_woman: "🙋", raising_hand_man: "🙋&zwj;♂️", ram: "🐏", ramen: "🍜", rat: "🐀", record_button: "⏺", recycle: "♻️", red_circle: "🔴", registered: "®️", relaxed: "☺️", relieved: "😌", reminder_ribbon: "🎗", repeat: "🔁", repeat_one: "🔂", rescue_worker_helmet: "⛑", restroom: "🚻", revolving_hearts: "💞", rewind: "⏪", rhinoceros: "🦏", ribbon: "🎀", rice: "🍚", rice_ball: "🍙", rice_cracker: "🍘", rice_scene: "🎑", right_anger_bubble: "🗯", ring: "💍", robot: "🤖", rocket: "🚀", rofl: "🤣", roll_eyes: "🙄", roller_coaster: "🎢", rooster: "🐓", rose: "🌹", rosette: "🏵", rotating_light: "🚨", round_pushpin: "📍", rowing_man: "🚣", rowing_woman: "🚣&zwj;♀️", rugby_football: "🏉", running_man: "🏃", running_shirt_with_sash: "🎽", running_woman: "🏃&zwj;♀️", sa: "🈂️", sagittarius: "♐️", sake: "🍶", sandal: "👡", santa: "🎅", satellite: "📡", saxophone: "🎷", school: "🏫", school_satchel: "🎒", scissors: "✂️", scorpion: "🦂", scorpius: "♏️", scream: "😱", scream_cat: "🙀", scroll: "📜", seat: "💺", secret: "㊙️", see_no_evil: "🙈", seedling: "🌱", selfie: "🤳", shallow_pan_of_food: "🥘", shamrock: "☘️", shark: "🦈", shaved_ice: "🍧", sheep: "🐑", shell: "🐚", shield: "🛡", shinto_shrine: "⛩", ship: "🚢", shirt: "👕", shopping: "🛍", shopping_cart: "🛒", shower: "🚿", shrimp: "🦐", signal_strength: "📶", six_pointed_star: "🔯", ski: "🎿", skier: "⛷", skull: "💀", skull_and_crossbones: "☠️", sleeping: "😴", sleeping_bed: "🛌", sleepy: "😪", slightly_frowning_face: "🙁", slightly_smiling_face: "🙂", slot_machine: "🎰", small_airplane: "🛩", small_blue_diamond: "🔹", small_orange_diamond: "🔸", small_red_triangle: "🔺", small_red_triangle_down: "🔻", smile: "😄", smile_cat: "😸", smiley: "😃", smiley_cat: "😺", smiling_imp: "😈", smirk: "😏", smirk_cat: "😼", smoking: "🚬", snail: "🐌", snake: "🐍", sneezing_face: "🤧", snowboarder: "🏂", snowflake: "❄️", snowman: "⛄️", snowman_with_snow: "☃️", sob: "😭", soccer: "⚽️", soon: "🔜", sos: "🆘", sound: "🔉", space_invader: "👾", spades: "♠️", spaghetti: "🍝", sparkle: "❇️", sparkler: "🎇", sparkles: "✨", sparkling_heart: "💖", speak_no_evil: "🙊", speaker: "🔈", speaking_head: "🗣", speech_balloon: "💬", speedboat: "🚤", spider: "🕷", spider_web: "🕸", spiral_calendar: "🗓", spiral_notepad: "🗒", spoon: "🥄", squid: "🦑", stadium: "🏟", star: "⭐️", star2: "🌟", star_and_crescent: "☪️", star_of_david: "✡️", stars: "🌠", station: "🚉", statue_of_liberty: "🗽", steam_locomotive: "🚂", stew: "🍲", stop_button: "⏹", stop_sign: "🛑", stopwatch: "⏱", straight_ruler: "📏", strawberry: "🍓", stuck_out_tongue: "😛", stuck_out_tongue_closed_eyes: "😝", stuck_out_tongue_winking_eye: "😜", studio_microphone: "🎙", stuffed_flatbread: "🥙", sun_behind_large_cloud: "🌥", sun_behind_rain_cloud: "🌦", sun_behind_small_cloud: "🌤", sun_with_face: "🌞", sunflower: "🌻", sunglasses: "😎", sunny: "☀️", sunrise: "🌅", sunrise_over_mountains: "🌄", surfing_man: "🏄", surfing_woman: "🏄&zwj;♀️", sushi: "🍣", suspension_railway: "🚟", sweat: "😓", sweat_drops: "💦", sweat_smile: "😅", sweet_potato: "🍠", swimming_man: "🏊", swimming_woman: "🏊&zwj;♀️", symbols: "🔣", synagogue: "🕍", syringe: "💉", taco: "🌮", tada: "🎉", tanabata_tree: "🎋", taurus: "♉️", taxi: "🚕", tea: "🍵", telephone_receiver: "📞", telescope: "🔭", tennis: "🎾", tent: "⛺️", thermometer: "🌡", thinking: "🤔", thought_balloon: "💭", ticket: "🎫", tickets: "🎟", tiger: "🐯", tiger2: "🐅", timer_clock: "⏲", tipping_hand_man: "💁&zwj;♂️", tired_face: "😫", tm: "™️", toilet: "🚽", tokyo_tower: "🗼", tomato: "🍅", tongue: "👅", top: "🔝", tophat: "🎩", tornado: "🌪", trackball: "🖲", tractor: "🚜", traffic_light: "🚥", train: "🚋", train2: "🚆", tram: "🚊", triangular_flag_on_post: "🚩", triangular_ruler: "📐", trident: "🔱", triumph: "😤", trolleybus: "🚎", trophy: "🏆", tropical_drink: "🍹", tropical_fish: "🐠", truck: "🚚", trumpet: "🎺", tulip: "🌷", tumbler_glass: "🥃", turkey: "🦃", turtle: "🐢", tv: "📺", twisted_rightwards_arrows: "🔀", two_hearts: "💕", two_men_holding_hands: "👬", two_women_holding_hands: "👭", u5272: "🈹", u5408: "🈴", u55b6: "🈺", u6307: "🈯️", u6708: "🈷️", u6709: "🈶", u6e80: "🈵", u7121: "🈚️", u7533: "🈸", u7981: "🈲", u7a7a: "🈳", umbrella: "☔️", unamused: "😒", underage: "🔞", unicorn: "🦄", unlock: "🔓", up: "🆙", upside_down_face: "🙃", v: "✌️", vertical_traffic_light: "🚦", vhs: "📼", vibration_mode: "📳", video_camera: "📹", video_game: "🎮", violin: "🎻", virgo: "♍️", volcano: "🌋", volleyball: "🏐", vs: "🆚", vulcan_salute: "🖖", walking_man: "🚶", walking_woman: "🚶&zwj;♀️", waning_crescent_moon: "🌘", waning_gibbous_moon: "🌖", warning: "⚠️", wastebasket: "🗑", watch: "⌚️", water_buffalo: "🐃", watermelon: "🍉", wave: "👋", wavy_dash: "〰️", waxing_crescent_moon: "🌒", wc: "🚾", weary: "😩", wedding: "💒", weight_lifting_man: "🏋️", weight_lifting_woman: "🏋️&zwj;♀️", whale: "🐳", whale2: "🐋", wheel_of_dharma: "☸️", wheelchair: "♿️", white_check_mark: "✅", white_circle: "⚪️", white_flag: "🏳️", white_flower: "💮", white_large_square: "⬜️", white_medium_small_square: "◽️", white_medium_square: "◻️", white_small_square: "▫️", white_square_button: "🔳", wilted_flower: "🥀", wind_chime: "🎐", wind_face: "🌬", wine_glass: "🍷", wink: "😉", wolf: "🐺", woman: "👩", woman_artist: "👩&zwj;🎨", woman_astronaut: "👩&zwj;🚀", woman_cartwheeling: "🤸&zwj;♀️", woman_cook: "👩&zwj;🍳", woman_facepalming: "🤦&zwj;♀️", woman_factory_worker: "👩&zwj;🏭", woman_farmer: "👩&zwj;🌾", woman_firefighter: "👩&zwj;🚒", woman_health_worker: "👩&zwj;⚕️", woman_judge: "👩&zwj;⚖️", woman_juggling: "🤹&zwj;♀️", woman_mechanic: "👩&zwj;🔧", woman_office_worker: "👩&zwj;💼", woman_pilot: "👩&zwj;✈️", woman_playing_handball: "🤾&zwj;♀️", woman_playing_water_polo: "🤽&zwj;♀️", woman_scientist: "👩&zwj;🔬", woman_shrugging: "🤷&zwj;♀️", woman_singer: "👩&zwj;🎤", woman_student: "👩&zwj;🎓", woman_teacher: "👩&zwj;🏫", woman_technologist: "👩&zwj;💻", woman_with_turban: "👳&zwj;♀️", womans_clothes: "👚", womans_hat: "👒", women_wrestling: "🤼&zwj;♀️", womens: "🚺", world_map: "🗺", worried: "😟", wrench: "🔧", writing_hand: "✍️", x: "❌", yellow_heart: "💛", yen: "💴", yin_yang: "☯️", yum: "😋", zap: "⚡️", zipper_mouth_face: "🤐", zzz: "💤", octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">', showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>" }, s.Converter = function(e) { "use strict";

            function t(e, t) { if (t = t || null, s.helper.isString(e)) { if (e = s.helper.stdExtName(e), t = e, s.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), void n(s.extensions[e], e); if (s.helper.isUndefined(u[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                    e = u[e] } "function" == typeof e && (e = e()), s.helper.isArray(e) || (e = [e]); var a = o(e, t); if (!a.valid) throw Error(a.error); for (var i = 0; i < e.length; ++i) { switch (e[i].type) {
                        case "lang":
                            c.push(e[i]); break;
                        case "output":
                            d.push(e[i]) } if (e[i].hasOwnProperty("listeners"))
                        for (var l in e[i].listeners) e[i].listeners.hasOwnProperty(l) && r(l, e[i].listeners[l]) } }

            function n(e, t) { "function" == typeof e && (e = e(new s.Converter)), s.helper.isArray(e) || (e = [e]); var n = o(e, t); if (!n.valid) throw Error(n.error); for (var r = 0; r < e.length; ++r) switch (e[r].type) {
                    case "lang":
                        c.push(e[r]); break;
                    case "output":
                        d.push(e[r]); break;
                    default:
                        throw Error("Extension loader error: Type unrecognized!!!") } }

            function r(e, t) { if (!s.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given"); if ("function" != typeof t) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof t + " given");
                h.hasOwnProperty(e) || (h[e] = []), h[e].push(t) }

            function a(e) { var t = e.match(/^\s*/)[0].length,
                    n = new RegExp("^\\s{0," + t + "}", "gm"); return e.replace(n, "") } var i = {},
                c = [],
                d = [],
                h = {},
                g = f,
                m = { parsed: {}, raw: "", format: "" };! function() { e = e || {}; for (var n in l) l.hasOwnProperty(n) && (i[n] = l[n]); if ("object" != typeof e) throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead."); for (var r in e) e.hasOwnProperty(r) && (i[r] = e[r]);
                i.extensions && s.helper.forEach(i.extensions, t) }(), this._dispatch = function(e, t, n, r) { if (h.hasOwnProperty(e))
                    for (var a = 0; a < h[e].length; ++a) { var o = h[e][a](e, t, this, n, r);
                        o && void 0 !== o && (t = o) }
                return t }, this.listen = function(e, t) { return r(e, t), this }, this.makeHtml = function(e) { if (!e) return e; var t = { gHtmlBlocks: [], gHtmlMdBlocks: [], gHtmlSpans: [], gUrls: {}, gTitles: {}, gDimensions: {}, gListLevel: 0, hashLinkCounts: {}, langExtensions: c, outputModifiers: d, converter: this, ghCodeBlocks: [], metadata: { parsed: {}, raw: "", format: "" } }; return e = e.replace(/¨/g, "¨T"), e = e.replace(/\$/g, "¨D"), e = e.replace(/\r\n/g, "\n"), e = e.replace(/\r/g, "\n"), e = e.replace(/\u00A0/g, "&nbsp;"), i.smartIndentationFix && (e = a(e)), e = "\n\n" + e + "\n\n", e = s.subParser("detab")(e, i, t), e = e.replace(/^[ \t]+$/gm, ""), s.helper.forEach(c, function(n) { e = s.subParser("runExtension")(n, e, i, t) }), e = s.subParser("metadata")(e, i, t), e = s.subParser("hashPreCodeTags")(e, i, t), e = s.subParser("githubCodeBlocks")(e, i, t), e = s.subParser("hashHTMLBlocks")(e, i, t), e = s.subParser("hashCodeTags")(e, i, t), e = s.subParser("stripLinkDefinitions")(e, i, t), e = s.subParser("blockGamut")(e, i, t), e = s.subParser("unhashHTMLSpans")(e, i, t), e = s.subParser("unescapeSpecialChars")(e, i, t), e = e.replace(/¨D/g, "$$"), e = e.replace(/¨T/g, "¨"), e = s.subParser("completeHTMLDocument")(e, i, t), s.helper.forEach(d, function(n) { e = s.subParser("runExtension")(n, e, i, t) }), m = t.metadata, e }, this.makeMarkdown = this.makeMd = function(e, t) {
                function n(e) { for (var t = 0; t < e.childNodes.length; ++t) { var r = e.childNodes[t];
                        3 === r.nodeType ? /\S/.test(r.nodeValue) ? (r.nodeValue = r.nodeValue.split("\n").join(" "), r.nodeValue = r.nodeValue.replace(/(\s)+/g, "$1")) : (e.removeChild(r), --t) : 1 === r.nodeType && n(r) } } if (e = e.replace(/\r\n/g, "\n"), e = e.replace(/\r/g, "\n"), e = e.replace(/>[ \t]+</, ">¨NBSP;<"), !t) { if (!window || !window.document) throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
                    t = window.document } var r = t.createElement("div");
                r.innerHTML = e; var a = { preList: function(e) { for (var t = e.querySelectorAll("pre"), n = [], r = 0; r < t.length; ++r)
                            if (1 === t[r].childElementCount && "code" === t[r].firstChild.tagName.toLowerCase()) { var a = t[r].firstChild.innerHTML.trim(),
                                    o = t[r].firstChild.getAttribute("data-language") || ""; if ("" === o)
                                    for (var i = t[r].firstChild.className.split(" "), c = 0; c < i.length; ++c) { var u = i[c].match(/^language-(.+)$/); if (null !== u) { o = u[1]; break } }
                                a = s.helper.unescapeHTMLEntities(a), n.push(a), t[r].outerHTML = '<precode language="' + o + '" precodenum="' + r.toString() + '"></precode>' } else n.push(t[r].innerHTML), t[r].innerHTML = "", t[r].setAttribute("prenum", r.toString());
                        return n }(r) };
                n(r); for (var o = r.childNodes, i = "", c = 0; c < o.length; c++) i += s.subParser("makeMarkdown.node")(o[c], a); return i }, this.setOption = function(e, t) { i[e] = t }, this.getOption = function(e) { return i[e] }, this.getOptions = function() { return i }, this.addExtension = function(e, n) { n = n || null, t(e, n) }, this.useExtension = function(e) { t(e) }, this.setFlavor = function(e) { if (!p.hasOwnProperty(e)) throw Error(e + " flavor was not found"); var t = p[e];
                g = e; for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]) }, this.getFlavor = function() { return g }, this.removeExtension = function(e) { s.helper.isArray(e) || (e = [e]); for (var t = 0; t < e.length; ++t) { for (var n = e[t], r = 0; r < c.length; ++r) c[r] === n && c[r].splice(r, 1); for (; 0 < d.length; ++r) d[0] === n && d[0].splice(r, 1) } }, this.getAllExtensions = function() { return { language: c, output: d } }, this.getMetadata = function(e) { return e ? m.raw : m.parsed }, this.getMetadataFormat = function() { return m.format }, this._setMetadataPair = function(e, t) { m.parsed[e] = t }, this._setMetadataFormat = function(e) { m.format = e }, this._setMetadataRaw = function(e) { m.raw = e } }, s.subParser("anchors", function(e, t, n) { "use strict";
            e = n.converter._dispatch("anchors.before", e, t, n); var r = function(e, r, a, o, i, c, u) { if (s.helper.isUndefined(u) && (u = ""), a = a.toLowerCase(), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) o = "";
                else if (!o) { if (a || (a = r.toLowerCase().replace(/ ?\n/g, " ")), o = "#" + a, s.helper.isUndefined(n.gUrls[a])) return e;
                    o = n.gUrls[a], s.helper.isUndefined(n.gTitles[a]) || (u = n.gTitles[a]) }
                o = o.replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback); var l = '<a href="' + o + '"'; return "" !== u && null !== u && (u = u.replace(/"/g, "&quot;"), u = u.replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback), l += ' title="' + u + '"'), t.openLinksInNewWindow && !/^#/.test(o) && (l += ' rel="noopener noreferrer" target="¨E95Eblank"'), l += ">" + r + "</a>" }; return e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, r), e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, r), e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, r), e = e.replace(/\[([^\[\]]+)]()()()()()/g, r), t.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, function(e, n, r, a, o) { if ("\\" === r) return n + a; if (!s.helper.isString(t.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string"); var i = t.ghMentionsLink.replace(/\{u}/g, o),
                    c = ""; return t.openLinksInNewWindow && (c = ' rel="noopener noreferrer" target="¨E95Eblank"'), n + '<a href="' + i + '"' + c + ">" + a + "</a>" })), e = n.converter._dispatch("anchors.after", e, t, n) }); var h = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
            g = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
            m = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
            _ = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
            b = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
            v = function(e) { "use strict"; return function(t, n, r, a, o, i, c) { r = r.replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback); var u = r,
                        l = "",
                        f = "",
                        p = n || "",
                        d = c || ""; return /^www\./i.test(r) && (r = r.replace(/^www\./i, "http://www.")), e.excludeTrailingPunctuationFromURLs && i && (l = i), e.openLinksInNewWindow && (f = ' rel="noopener noreferrer" target="¨E95Eblank"'), p + '<a href="' + r + '"' + f + ">" + u + "</a>" + l + d } },
            w = function(e, t) { "use strict"; return function(n, r, a) { var o = "mailto:"; return r = r || "", a = s.subParser("unescapeSpecialChars")(a, e, t), e.encodeEmails ? (o = s.helper.encodeEmailAddress(o + a), a = s.helper.encodeEmailAddress(a)) : o += a, r + '<a href="' + o + '">' + a + "</a>" } };
        s.subParser("autoLinks", function(e, t, n) { "use strict"; return e = n.converter._dispatch("autoLinks.before", e, t, n), e = e.replace(m, v(t)), e = e.replace(b, w(t, n)), e = n.converter._dispatch("autoLinks.after", e, t, n) }), s.subParser("simplifiedAutoLinks", function(e, t, n) { "use strict"; return t.simplifiedAutoLink ? (e = n.converter._dispatch("simplifiedAutoLinks.before", e, t, n), e = t.excludeTrailingPunctuationFromURLs ? e.replace(g, v(t)) : e.replace(h, v(t)), e = e.replace(_, w(t, n)), e = n.converter._dispatch("simplifiedAutoLinks.after", e, t, n)) : e }), s.subParser("blockGamut", function(e, t, n) { "use strict"; return e = n.converter._dispatch("blockGamut.before", e, t, n), e = s.subParser("blockQuotes")(e, t, n), e = s.subParser("headers")(e, t, n), e = s.subParser("horizontalRule")(e, t, n), e = s.subParser("lists")(e, t, n), e = s.subParser("codeBlocks")(e, t, n), e = s.subParser("tables")(e, t, n), e = s.subParser("hashHTMLBlocks")(e, t, n), e = s.subParser("paragraphs")(e, t, n), e = n.converter._dispatch("blockGamut.after", e, t, n) }), s.subParser("blockQuotes", function(e, t, n) { "use strict";
            e = n.converter._dispatch("blockQuotes.before", e, t, n), e += "\n\n"; var r = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm; return t.splitAdjacentBlockquotes && (r = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = e.replace(r, function(e) { return e = e.replace(/^[ \t]*>[ \t]?/gm, ""), e = e.replace(/¨0/g, ""), e = e.replace(/^[ \t]+$/gm, ""), e = s.subParser("githubCodeBlocks")(e, t, n), e = s.subParser("blockGamut")(e, t, n), e = e.replace(/(^|\n)/g, "$1  "), e = e.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, t) { var n = t; return n = n.replace(/^  /gm, "¨0"), n = n.replace(/¨0/g, "") }), s.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", t, n) }), e = n.converter._dispatch("blockQuotes.after", e, t, n) }), s.subParser("codeBlocks", function(e, t, n) { "use strict";
            e = n.converter._dispatch("codeBlocks.before", e, t, n), e += "¨0"; var r = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g; return e = e.replace(r, function(e, r, a) { var o = r,
                    i = a,
                    c = "\n"; return o = s.subParser("outdent")(o, t, n), o = s.subParser("encodeCode")(o, t, n), o = s.subParser("detab")(o, t, n), o = o.replace(/^\n+/g, ""), o = o.replace(/\n+$/g, ""), t.omitExtraWLInCodeBlocks && (c = ""), o = "<pre><code>" + o + c + "</code></pre>", s.subParser("hashBlock")(o, t, n) + i }), e = e.replace(/¨0/, ""), e = n.converter._dispatch("codeBlocks.after", e, t, n) }), s.subParser("codeSpans", function(e, t, n) { "use strict"; return e = n.converter._dispatch("codeSpans.before", e, t, n), void 0 === e && (e = ""), e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, r, a, o) { var i = o; return i = i.replace(/^([ \t]*)/g, ""), i = i.replace(/[ \t]*$/g, ""), i = s.subParser("encodeCode")(i, t, n), i = r + "<code>" + i + "</code>", i = s.subParser("hashHTMLSpans")(i, t, n) }), e = n.converter._dispatch("codeSpans.after", e, t, n) }), s.subParser("completeHTMLDocument", function(e, t, n) { "use strict"; if (!t.completeHTMLDocument) return e;
            e = n.converter._dispatch("completeHTMLDocument.before", e, t, n); var r = "html",
                a = "<!DOCTYPE HTML>\n",
                o = "",
                i = '<meta charset="utf-8">\n',
                s = "",
                c = "";
            void 0 !== n.metadata.parsed.doctype && (a = "<!DOCTYPE " + n.metadata.parsed.doctype + ">\n", "html" !== (r = n.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== r || (i = '<meta charset="utf-8">')); for (var u in n.metadata.parsed)
                if (n.metadata.parsed.hasOwnProperty(u)) switch (u.toLowerCase()) {
                    case "doctype":
                        break;
                    case "title":
                        o = "<title>" + n.metadata.parsed.title + "</title>\n"; break;
                    case "charset":
                        i = "html" === r || "html5" === r ? '<meta charset="' + n.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + n.metadata.parsed.charset + '">\n'; break;
                    case "language":
                    case "lang":
                        s = ' lang="' + n.metadata.parsed[u] + '"', c += '<meta name="' + u + '" content="' + n.metadata.parsed[u] + '">\n'; break;
                    default:
                        c += '<meta name="' + u + '" content="' + n.metadata.parsed[u] + '">\n' }
                return e = a + "<html" + s + ">\n<head>\n" + o + i + c + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>", e = n.converter._dispatch("completeHTMLDocument.after", e, t, n) }), s.subParser("detab", function(e, t, n) { "use strict"; return e = n.converter._dispatch("detab.before", e, t, n), e = e.replace(/\t(?=\t)/g, "    "), e = e.replace(/\t/g, "¨A¨B"), e = e.replace(/¨B(.+?)¨A/g, function(e, t) { for (var n = t, r = 4 - n.length % 4, a = 0; a < r; a++) n += " "; return n }), e = e.replace(/¨A/g, "    "), e = e.replace(/¨B/g, ""), e = n.converter._dispatch("detab.after", e, t, n) }), s.subParser("ellipsis", function(e, t, n) { "use strict"; return e = n.converter._dispatch("ellipsis.before", e, t, n), e = e.replace(/\.\.\./g, "…"), e = n.converter._dispatch("ellipsis.after", e, t, n) }), s.subParser("emoji", function(e, t, n) { "use strict"; if (!t.emoji) return e;
            e = n.converter._dispatch("emoji.before", e, t, n); var r = /:([\S]+?):/g; return e = e.replace(r, function(e, t) { return s.helper.emojis.hasOwnProperty(t) ? s.helper.emojis[t] : e }), e = n.converter._dispatch("emoji.after", e, t, n) }), s.subParser("encodeAmpsAndAngles", function(e, t, n) { "use strict"; return e = n.converter._dispatch("encodeAmpsAndAngles.before", e, t, n), e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), e = e.replace(/<(?![a-z\/?$!])/gi, "&lt;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = n.converter._dispatch("encodeAmpsAndAngles.after", e, t, n) }), s.subParser("encodeBackslashEscapes", function(e, t, n) { "use strict"; return e = n.converter._dispatch("encodeBackslashEscapes.before", e, t, n), e = e.replace(/\\(\\)/g, s.helper.escapeCharactersCallback), e = e.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, s.helper.escapeCharactersCallback), e = n.converter._dispatch("encodeBackslashEscapes.after", e, t, n) }), s.subParser("encodeCode", function(e, t, n) { "use strict"; return e = n.converter._dispatch("encodeCode.before", e, t, n), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, s.helper.escapeCharactersCallback), e = n.converter._dispatch("encodeCode.after", e, t, n) }), s.subParser("escapeSpecialCharsWithinTagAttributes", function(e, t, n) { "use strict";
            e = n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, t, n); var r = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
                a = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi; return e = e.replace(r, function(e) { return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, s.helper.escapeCharactersCallback) }), e = e.replace(a, function(e) { return e.replace(/([\\`*_~=|])/g, s.helper.escapeCharactersCallback) }), e = n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, t, n) }), s.subParser("githubCodeBlocks", function(e, t, n) { "use strict"; return t.ghCodeBlocks ? (e = n.converter._dispatch("githubCodeBlocks.before", e, t, n), e += "¨0", e = e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(e, r, a, o) { var i = t.omitExtraWLInCodeBlocks ? "" : "\n"; return o = s.subParser("encodeCode")(o, t, n), o = s.subParser("detab")(o, t, n), o = o.replace(/^\n+/g, ""), o = o.replace(/\n+$/g, ""), o = "<pre><code" + (a ? ' class="' + a + " language-" + a + '"' : "") + ">" + o + i + "</code></pre>", o = s.subParser("hashBlock")(o, t, n), "\n\n¨G" + (n.ghCodeBlocks.push({ text: e, codeblock: o }) - 1) + "G\n\n" }), e = e.replace(/¨0/, ""), n.converter._dispatch("githubCodeBlocks.after", e, t, n)) : e }), s.subParser("hashBlock", function(e, t, n) { "use strict"; return e = n.converter._dispatch("hashBlock.before", e, t, n), e = e.replace(/(^\n+|\n+$)/g, ""), e = "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n", e = n.converter._dispatch("hashBlock.after", e, t, n) }), s.subParser("hashCodeTags", function(e, t, n) { "use strict";
            e = n.converter._dispatch("hashCodeTags.before", e, t, n); var r = function(e, r, a, o) { var i = a + s.subParser("encodeCode")(r, t, n) + o; return "¨C" + (n.gHtmlSpans.push(i) - 1) + "C" }; return e = s.helper.replaceRecursiveRegExp(e, r, "<code\\b[^>]*>", "</code>", "gim"), e = n.converter._dispatch("hashCodeTags.after", e, t, n) }), s.subParser("hashElement", function(e, t, n) { "use strict"; return function(e, t) { var r = t; return r = r.replace(/\n\n/g, "\n"), r = r.replace(/^\n/, ""), r = r.replace(/\n+$/g, ""), r = "\n\n¨K" + (n.gHtmlBlocks.push(r) - 1) + "K\n\n" } }), s.subParser("hashHTMLBlocks", function(e, t, n) { "use strict";
            e = n.converter._dispatch("hashHTMLBlocks.before", e, t, n); var r = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"],
                a = function(e, t, r, a) { var o = e; return -1 !== r.search(/\bmarkdown\b/) && (o = r + n.converter.makeHtml(t) + a), "\n\n¨K" + (n.gHtmlBlocks.push(o) - 1) + "K\n\n" };
            t.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, function(e, t) { return "&lt;" + t + "&gt;" })); for (var o = 0; o < r.length; ++o)
                for (var i, c = new RegExp("^ {0,3}(<" + r[o] + "\\b[^>]*>)", "im"), u = "<" + r[o] + "\\b[^>]*>", l = "</" + r[o] + ">"; - 1 !== (i = s.helper.regexIndexOf(e, c));) { var f = s.helper.splitAtIndex(e, i),
                        p = s.helper.replaceRecursiveRegExp(f[1], a, u, l, "im"); if (p === f[1]) break;
                    e = f[0].concat(p) }
            return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, s.subParser("hashElement")(e, t, n)), e = s.helper.replaceRecursiveRegExp(e, function(e) { return "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n" }, "^ {0,3}\x3c!--", "--\x3e", "gm"), e = e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, s.subParser("hashElement")(e, t, n)), e = n.converter._dispatch("hashHTMLBlocks.after", e, t, n) }), s.subParser("hashHTMLSpans", function(e, t, n) { "use strict";

            function r(e) { return "¨C" + (n.gHtmlSpans.push(e) - 1) + "C" } return e = n.converter._dispatch("hashHTMLSpans.before", e, t, n), e = e.replace(/<[^>]+?\/>/gi, function(e) { return r(e) }), e = e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(e) { return r(e) }), e = e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(e) { return r(e) }), e = e.replace(/<[^>]+?>/gi, function(e) { return r(e) }), e = n.converter._dispatch("hashHTMLSpans.after", e, t, n) }), s.subParser("unhashHTMLSpans", function(e, t, n) { "use strict";
            e = n.converter._dispatch("unhashHTMLSpans.before", e, t, n); for (var r = 0; r < n.gHtmlSpans.length; ++r) { for (var a = n.gHtmlSpans[r], o = 0;
                    /¨C(\d+)C/.test(a);) { var i = RegExp.$1; if (a = a.replace("¨C" + i + "C", n.gHtmlSpans[i]), 10 === o) { console.error("maximum nesting of 10 spans reached!!!"); break }++o }
                e = e.replace("¨C" + r + "C", a) } return e = n.converter._dispatch("unhashHTMLSpans.after", e, t, n) }), s.subParser("hashPreCodeTags", function(e, t, n) { "use strict";
            e = n.converter._dispatch("hashPreCodeTags.before", e, t, n); var r = function(e, r, a, o) { var i = a + s.subParser("encodeCode")(r, t, n) + o; return "\n\n¨G" + (n.ghCodeBlocks.push({ text: e, codeblock: i }) - 1) + "G\n\n" }; return e = s.helper.replaceRecursiveRegExp(e, r, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), e = n.converter._dispatch("hashPreCodeTags.after", e, t, n) }), s.subParser("headers", function(e, t, n) { "use strict";

            function r(e) { var r, a; if (t.customizedHeaderId) { var o = e.match(/\{([^{]+?)}\s*$/);
                    o && o[1] && (e = o[1]) } return r = e, a = s.helper.isString(t.prefixHeaderId) ? t.prefixHeaderId : !0 === t.prefixHeaderId ? "section-" : "", t.rawPrefixHeaderId || (r = a + r), r = t.ghCompatibleHeaderId ? r.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : t.rawHeaderId ? r.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : r.replace(/[^\w]/g, "").toLowerCase(), t.rawPrefixHeaderId && (r = a + r), n.hashLinkCounts[r] ? r = r + "-" + n.hashLinkCounts[r]++ : n.hashLinkCounts[r] = 1, r }
            e = n.converter._dispatch("headers.before", e, t, n); var a = isNaN(parseInt(t.headerLevelStart)) ? 1 : parseInt(t.headerLevelStart),
                o = t.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
                i = t.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
            e = e.replace(o, function(e, o) { var i = s.subParser("spanGamut")(o, t, n),
                    c = t.noHeaderId ? "" : ' id="' + r(o) + '"',
                    u = a,
                    l = "<h" + u + c + ">" + i + "</h" + u + ">"; return s.subParser("hashBlock")(l, t, n) }), e = e.replace(i, function(e, o) { var i = s.subParser("spanGamut")(o, t, n),
                    c = t.noHeaderId ? "" : ' id="' + r(o) + '"',
                    u = a + 1,
                    l = "<h" + u + c + ">" + i + "</h" + u + ">"; return s.subParser("hashBlock")(l, t, n) }); var c = t.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm; return e = e.replace(c, function(e, o, i) { var c = i;
                t.customizedHeaderId && (c = i.replace(/\s?\{([^{]+?)}\s*$/, "")); var u = s.subParser("spanGamut")(c, t, n),
                    l = t.noHeaderId ? "" : ' id="' + r(i) + '"',
                    f = a - 1 + o.length,
                    p = "<h" + f + l + ">" + u + "</h" + f + ">"; return s.subParser("hashBlock")(p, t, n) }), e = n.converter._dispatch("headers.after", e, t, n) }), s.subParser("horizontalRule", function(e, t, n) { "use strict";
            e = n.converter._dispatch("horizontalRule.before", e, t, n); var r = s.subParser("hashBlock")("<hr />", t, n); return e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, r), e = e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, r), e = e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, r), e = n.converter._dispatch("horizontalRule.after", e, t, n) }), s.subParser("images", function(e, t, n) { "use strict";

            function r(e, t, n, r, o, i, s, c) { return r = r.replace(/\s/g, ""), a(e, t, n, r, o, i, s, c) }

            function a(e, t, r, a, o, i, c, u) { var l = n.gUrls,
                    f = n.gTitles,
                    p = n.gDimensions; if (r = r.toLowerCase(), u || (u = ""), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) a = "";
                else if ("" === a || null === a) { if ("" !== r && null !== r || (r = t.toLowerCase().replace(/ ?\n/g, " ")), a = "#" + r, s.helper.isUndefined(l[r])) return e;
                    a = l[r], s.helper.isUndefined(f[r]) || (u = f[r]), s.helper.isUndefined(p[r]) || (o = p[r].width, i = p[r].height) }
                t = t.replace(/"/g, "&quot;").replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback), a = a.replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback); var d = '<img src="' + a + '" alt="' + t + '"'; return u && s.helper.isString(u) && (u = u.replace(/"/g, "&quot;").replace(s.helper.regexes.asteriskDashAndColon, s.helper.escapeCharactersCallback), d += ' title="' + u + '"'), o && i && (o = "*" === o ? "auto" : o, i = "*" === i ? "auto" : i, d += ' width="' + o + '"', d += ' height="' + i + '"'), d += " />" }
            e = n.converter._dispatch("images.before", e, t, n); var o = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
                i = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
                c = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
                u = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
                l = /!\[([^\[\]]+)]()()()()()/g; return e = e.replace(u, a), e = e.replace(c, r), e = e.replace(i, a), e = e.replace(o, a), e = e.replace(l, a), e = n.converter._dispatch("images.after", e, t, n) }), s.subParser("italicsAndBold", function(e, t, n) { "use strict";

            function r(e, t, n) { return t + e + n } return e = n.converter._dispatch("italicsAndBold.before", e, t, n), t.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(e, t) { return r(t, "<strong><em>", "</em></strong>") }), e = e.replace(/\b__(\S[\s\S]*?)__\b/g, function(e, t) { return r(t, "<strong>", "</strong>") }), e = e.replace(/\b_(\S[\s\S]*?)_\b/g, function(e, t) { return r(t, "<em>", "</em>") })) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(e, t) { return /\S$/.test(t) ? r(t, "<strong><em>", "</em></strong>") : e }), e = e.replace(/__(\S[\s\S]*?)__/g, function(e, t) { return /\S$/.test(t) ? r(t, "<strong>", "</strong>") : e }), e = e.replace(/_([^\s_][\s\S]*?)_/g, function(e, t) { return /\S$/.test(t) ? r(t, "<em>", "</em>") : e })), t.literalMidWordAsterisks ? (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(e, t, n) { return r(n, t + "<strong><em>", "</em></strong>") }), e = e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(e, t, n) { return r(n, t + "<strong>", "</strong>") }), e = e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(e, t, n) { return r(n, t + "<em>", "</em>") })) : (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(e, t) { return /\S$/.test(t) ? r(t, "<strong><em>", "</em></strong>") : e }), e = e.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(e, t) { return /\S$/.test(t) ? r(t, "<strong>", "</strong>") : e }), e = e.replace(/\*([^\s*][\s\S]*?)\*/g, function(e, t) { return /\S$/.test(t) ? r(t, "<em>", "</em>") : e })), e = n.converter._dispatch("italicsAndBold.after", e, t, n) }), s.subParser("lists", function(e, t, n) { "use strict";

            function r(e, r) { n.gListLevel++, e = e.replace(/\n{2,}$/, "\n"), e += "¨0"; var a = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                    o = /\n[ \t]*\n(?!¨0)/.test(e); return t.disableForced4SpacesIndentedSublists && (a = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), e = e.replace(a, function(e, r, a, i, c, u, l) { l = l && "" !== l.trim(); var f = s.subParser("outdent")(c, t, n),
                        p = ""; return u && t.tasklists && (p = ' class="task-list-item" style="list-style-type: none;"', f = f.replace(/^[ \t]*\[(x|X| )?]/m, function() { var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"'; return l && (e += " checked"), e += ">" })), f = f.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(e) { return "¨A" + e }), r || f.search(/\n{2,}/) > -1 ? (f = s.subParser("githubCodeBlocks")(f, t, n), f = s.subParser("blockGamut")(f, t, n)) : (f = s.subParser("lists")(f, t, n), f = f.replace(/\n$/, ""), f = s.subParser("hashHTMLBlocks")(f, t, n), f = f.replace(/\n\n+/g, "\n\n"), f = o ? s.subParser("paragraphs")(f, t, n) : s.subParser("spanGamut")(f, t, n)), f = f.replace("¨A", ""), f = "<li" + p + ">" + f + "</li>\n" }), e = e.replace(/¨0/g, ""), n.gListLevel--, r && (e = e.replace(/\s+$/, "")), e }

            function a(e, t) { if ("ol" === t) { var n = e.match(/^ *(\d+)\./); if (n && "1" !== n[1]) return ' start="' + n[1] + '"' } return "" }

            function o(e, n, o) { var i = t.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
                    s = t.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
                    c = "ul" === n ? i : s,
                    u = ""; if (-1 !== e.search(c)) ! function t(l) { var f = l.search(c),
                        p = a(e, n); - 1 !== f ? (u += "\n\n<" + n + p + ">\n" + r(l.slice(0, f), !!o) + "</" + n + ">\n", n = "ul" === n ? "ol" : "ul", c = "ul" === n ? i : s, t(l.slice(f))) : u += "\n\n<" + n + p + ">\n" + r(l, !!o) + "</" + n + ">\n" }(e);
                else { var l = a(e, n);
                    u = "\n\n<" + n + l + ">\n" + r(e, !!o) + "</" + n + ">\n" } return u } return e = n.converter._dispatch("lists.before", e, t, n), e += "¨0", e = n.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(e, t, n) { return o(t, n.search(/[*+-]/g) > -1 ? "ul" : "ol", !0) }) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(e, t, n, r) { return o(n, r.search(/[*+-]/g) > -1 ? "ul" : "ol", !1) }), e = e.replace(/¨0/, ""), e = n.converter._dispatch("lists.after", e, t, n) }), s.subParser("metadata", function(e, t, n) { "use strict";

            function r(e) { n.metadata.raw = e, e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), e = e.replace(/\n {4}/g, " "), e.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(e, t, r) { return n.metadata.parsed[t] = r, "" }) } return t.metadata ? (e = n.converter._dispatch("metadata.before", e, t, n), e = e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(e, t, n) { return r(n), "¨M" }), e = e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(e, t, a) { return t && (n.metadata.format = t), r(a), "¨M" }), e = e.replace(/¨M/g, ""), e = n.converter._dispatch("metadata.after", e, t, n)) : e }), s.subParser("outdent", function(e, t, n) { "use strict"; return e = n.converter._dispatch("outdent.before", e, t, n), e = e.replace(/^(\t|[ ]{1,4})/gm, "¨0"), e = e.replace(/¨0/g, ""), e = n.converter._dispatch("outdent.after", e, t, n) }), s.subParser("paragraphs", function(e, t, n) { "use strict";
            e = n.converter._dispatch("paragraphs.before", e, t, n), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, ""); for (var r = e.split(/\n{2,}/g), a = [], o = r.length, i = 0; i < o; i++) { var c = r[i];
                c.search(/¨(K|G)(\d+)\1/g) >= 0 ? a.push(c) : c.search(/\S/) >= 0 && (c = s.subParser("spanGamut")(c, t, n), c = c.replace(/^([ \t]*)/g, "<p>"), c += "</p>", a.push(c)) } for (o = a.length, i = 0; i < o; i++) { for (var u = "", l = a[i], f = !1;
                    /¨(K|G)(\d+)\1/.test(l);) { var p = RegExp.$1,
                        d = RegExp.$2;
                    u = "K" === p ? n.gHtmlBlocks[d] : f ? s.subParser("encodeCode")(n.ghCodeBlocks[d].text, t, n) : n.ghCodeBlocks[d].codeblock, u = u.replace(/\$/g, "$$$$"), l = l.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, u), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(l) && (f = !0) }
                a[i] = l } return e = a.join("\n"), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, ""), n.converter._dispatch("paragraphs.after", e, t, n) }), s.subParser("runExtension", function(e, t, n, r) { "use strict"; if (e.filter) t = e.filter(t, r.converter, n);
            else if (e.regex) { var a = e.regex;
                a instanceof RegExp || (a = new RegExp(a, "g")), t = t.replace(a, e.replace) } return t }), s.subParser("spanGamut", function(e, t, n) { "use strict"; return e = n.converter._dispatch("spanGamut.before", e, t, n), e = s.subParser("codeSpans")(e, t, n), e = s.subParser("escapeSpecialCharsWithinTagAttributes")(e, t, n), e = s.subParser("encodeBackslashEscapes")(e, t, n), e = s.subParser("images")(e, t, n), e = s.subParser("anchors")(e, t, n), e = s.subParser("autoLinks")(e, t, n), e = s.subParser("simplifiedAutoLinks")(e, t, n), e = s.subParser("emoji")(e, t, n), e = s.subParser("underline")(e, t, n), e = s.subParser("italicsAndBold")(e, t, n), e = s.subParser("strikethrough")(e, t, n), e = s.subParser("ellipsis")(e, t, n), e = s.subParser("hashHTMLSpans")(e, t, n), e = s.subParser("encodeAmpsAndAngles")(e, t, n), t.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"), e = n.converter._dispatch("spanGamut.after", e, t, n) }), s.subParser("strikethrough", function(e, t, n) { "use strict";

            function r(e) { return t.simplifiedAutoLink && (e = s.subParser("simplifiedAutoLinks")(e, t, n)), "<del>" + e + "</del>" } return t.strikethrough && (e = n.converter._dispatch("strikethrough.before", e, t, n), e = e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(e, t) { return r(t) }), e = n.converter._dispatch("strikethrough.after", e, t, n)), e }), s.subParser("stripLinkDefinitions", function(e, t, n) { "use strict"; var r = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
                a = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
            e += "¨0"; var o = function(e, r, a, o, i, c, u) { return r = r.toLowerCase(), a.match(/^data:.+?\/.+?;base64,/) ? n.gUrls[r] = a.replace(/\s/g, "") : n.gUrls[r] = s.subParser("encodeAmpsAndAngles")(a, t, n), c ? c + u : (u && (n.gTitles[r] = u.replace(/"|'/g, "&quot;")), t.parseImgDimensions && o && i && (n.gDimensions[r] = { width: o, height: i }), "") }; return e = e.replace(a, o), e = e.replace(r, o), e = e.replace(/¨0/, "") }), s.subParser("tables", function(e, t, n) { "use strict";

            function r(e) { return /^:[ \t]*--*$/.test(e) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(e) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(e) ? ' style="text-align:center;"' : "" }

            function a(e, r) { var a = ""; return e = e.trim(), (t.tablesHeaderId || t.tableHeaderId) && (a = ' id="' + e.replace(/ /g, "_").toLowerCase() + '"'), e = s.subParser("spanGamut")(e, t, n), "<th" + a + r + ">" + e + "</th>\n" }

            function o(e, r) { return "<td" + r + ">" + s.subParser("spanGamut")(e, t, n) + "</td>\n" }

            function i(e, t) { for (var n = "<table>\n<thead>\n<tr>\n", r = e.length, a = 0; a < r; ++a) n += e[a]; for (n += "</tr>\n</thead>\n<tbody>\n", a = 0; a < t.length; ++a) { n += "<tr>\n"; for (var o = 0; o < r; ++o) n += t[a][o];
                    n += "</tr>\n" } return n += "</tbody>\n</table>\n" }

            function c(e) { var c, u = e.split("\n"); for (c = 0; c < u.length; ++c) /^ {0,3}\|/.test(u[c]) && (u[c] = u[c].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(u[c]) && (u[c] = u[c].replace(/\|[ \t]*$/, "")), u[c] = s.subParser("codeSpans")(u[c], t, n); var l = u[0].split("|").map(function(e) { return e.trim() }),
                    f = u[1].split("|").map(function(e) { return e.trim() }),
                    p = [],
                    d = [],
                    h = [],
                    g = []; for (u.shift(), u.shift(), c = 0; c < u.length; ++c) "" !== u[c].trim() && p.push(u[c].split("|").map(function(e) { return e.trim() })); if (l.length < f.length) return e; for (c = 0; c < f.length; ++c) h.push(r(f[c])); for (c = 0; c < l.length; ++c) s.helper.isUndefined(h[c]) && (h[c] = ""), d.push(a(l[c], h[c])); for (c = 0; c < p.length; ++c) { for (var m = [], _ = 0; _ < d.length; ++_) s.helper.isUndefined(p[c][_]), m.push(o(p[c][_], h[_]));
                    g.push(m) } return i(d, g) } if (!t.tables) return e; var u = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
                l = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm; return e = n.converter._dispatch("tables.before", e, t, n), e = e.replace(/\\(\|)/g, s.helper.escapeCharactersCallback), e = e.replace(u, c), e = e.replace(l, c), e = n.converter._dispatch("tables.after", e, t, n) }), s.subParser("underline", function(e, t, n) { "use strict"; return t.underline ? (e = n.converter._dispatch("underline.before", e, t, n), t.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(e, t) { return "<u>" + t + "</u>" }), e = e.replace(/\b__(\S[\s\S]*?)__\b/g, function(e, t) { return "<u>" + t + "</u>" })) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(e, t) { return /\S$/.test(t) ? "<u>" + t + "</u>" : e }), e = e.replace(/__(\S[\s\S]*?)__/g, function(e, t) { return /\S$/.test(t) ? "<u>" + t + "</u>" : e })), e = e.replace(/(_)/g, s.helper.escapeCharactersCallback), e = n.converter._dispatch("underline.after", e, t, n)) : e }), s.subParser("unescapeSpecialChars", function(e, t, n) { "use strict"; return e = n.converter._dispatch("unescapeSpecialChars.before", e, t, n), e = e.replace(/¨E(\d+)E/g, function(e, t) { var n = parseInt(t); return String.fromCharCode(n) }), e = n.converter._dispatch("unescapeSpecialChars.after", e, t, n) }), s.subParser("makeMarkdown.blockquote", function(e, t) { "use strict"; var n = ""; if (e.hasChildNodes())
                for (var r = e.childNodes, a = r.length, o = 0; o < a; ++o) { var i = s.subParser("makeMarkdown.node")(r[o], t); "" !== i && (n += i) }
            return n = n.trim(), n = "> " + n.split("\n").join("\n> ") }), s.subParser("makeMarkdown.codeBlock", function(e, t) { "use strict"; var n = e.getAttribute("language"),
                r = e.getAttribute("precodenum"); return "```" + n + "\n" + t.preList[r] + "\n```" }), s.subParser("makeMarkdown.codeSpan", function(e) { "use strict"; return "`" + e.innerHTML + "`" }), s.subParser("makeMarkdown.emphasis", function(e, t) { "use strict"; var n = ""; if (e.hasChildNodes()) { n += "*"; for (var r = e.childNodes, a = r.length, o = 0; o < a; ++o) n += s.subParser("makeMarkdown.node")(r[o], t);
                n += "*" } return n }), s.subParser("makeMarkdown.header", function(e, t, n) { "use strict"; var r = new Array(n + 1).join("#"),
                a = ""; if (e.hasChildNodes()) { a = r + " "; for (var o = e.childNodes, i = o.length, c = 0; c < i; ++c) a += s.subParser("makeMarkdown.node")(o[c], t) } return a }), s.subParser("makeMarkdown.hr", function() { "use strict"; return "---" }), s.subParser("makeMarkdown.image", function(e) { "use strict"; var t = ""; return e.hasAttribute("src") && (t += "![" + e.getAttribute("alt") + "](", t += "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (t += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'), t += ")"), t }), s.subParser("makeMarkdown.links", function(e, t) { "use strict"; var n = ""; if (e.hasChildNodes() && e.hasAttribute("href")) { var r = e.childNodes,
                    a = r.length;
                n = "["; for (var o = 0; o < a; ++o) n += s.subParser("makeMarkdown.node")(r[o], t);
                n += "](", n += "<" + e.getAttribute("href") + ">", e.hasAttribute("title") && (n += ' "' + e.getAttribute("title") + '"'), n += ")" } return n }), s.subParser("makeMarkdown.list", function(e, t, n) { "use strict"; var r = ""; if (!e.hasChildNodes()) return ""; for (var a = e.childNodes, o = a.length, i = e.getAttribute("start") || 1, c = 0; c < o; ++c)
                if (void 0 !== a[c].tagName && "li" === a[c].tagName.toLowerCase()) { var u = "";
                    u = "ol" === n ? i.toString() + ". " : "- ", r += u + s.subParser("makeMarkdown.listItem")(a[c], t), ++i }
            return r += "\n\x3c!-- --\x3e\n", r.trim() }), s.subParser("makeMarkdown.listItem", function(e, t) { "use strict"; for (var n = "", r = e.childNodes, a = r.length, o = 0; o < a; ++o) n += s.subParser("makeMarkdown.node")(r[o], t); return /\n$/.test(n) ? n = n.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : n += "\n", n }), s.subParser("makeMarkdown.node", function(e, t, n) { "use strict";
            n = n || !1; var r = ""; if (3 === e.nodeType) return s.subParser("makeMarkdown.txt")(e, t); if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n"; if (1 !== e.nodeType) return ""; switch (e.tagName.toLowerCase()) {
                case "h1":
                    n || (r = s.subParser("makeMarkdown.header")(e, t, 1) + "\n\n"); break;
                case "h2":
                    n || (r = s.subParser("makeMarkdown.header")(e, t, 2) + "\n\n"); break;
                case "h3":
                    n || (r = s.subParser("makeMarkdown.header")(e, t, 3) + "\n\n"); break;
                case "h4":
                    n || (r = s.subParser("makeMarkdown.header")(e, t, 4) + "\n\n"); break;
                case "h5":
                    n || (r = s.subParser("makeMarkdown.header")(e, t, 5) + "\n\n"); break;
                case "h6":
                    n || (r = s.subParser("makeMarkdown.header")(e, t, 6) + "\n\n"); break;
                case "p":
                    n || (r = s.subParser("makeMarkdown.paragraph")(e, t) + "\n\n"); break;
                case "blockquote":
                    n || (r = s.subParser("makeMarkdown.blockquote")(e, t) + "\n\n"); break;
                case "hr":
                    n || (r = s.subParser("makeMarkdown.hr")(e, t) + "\n\n"); break;
                case "ol":
                    n || (r = s.subParser("makeMarkdown.list")(e, t, "ol") + "\n\n"); break;
                case "ul":
                    n || (r = s.subParser("makeMarkdown.list")(e, t, "ul") + "\n\n"); break;
                case "precode":
                    n || (r = s.subParser("makeMarkdown.codeBlock")(e, t) + "\n\n"); break;
                case "pre":
                    n || (r = s.subParser("makeMarkdown.pre")(e, t) + "\n\n"); break;
                case "table":
                    n || (r = s.subParser("makeMarkdown.table")(e, t) + "\n\n"); break;
                case "code":
                    r = s.subParser("makeMarkdown.codeSpan")(e, t); break;
                case "em":
                case "i":
                    r = s.subParser("makeMarkdown.emphasis")(e, t); break;
                case "strong":
                case "b":
                    r = s.subParser("makeMarkdown.strong")(e, t); break;
                case "del":
                    r = s.subParser("makeMarkdown.strikethrough")(e, t); break;
                case "a":
                    r = s.subParser("makeMarkdown.links")(e, t); break;
                case "img":
                    r = s.subParser("makeMarkdown.image")(e, t); break;
                default:
                    r = e.outerHTML + "\n\n" } return r }), s.subParser("makeMarkdown.paragraph", function(e, t) { "use strict"; var n = ""; if (e.hasChildNodes())
                for (var r = e.childNodes, a = r.length, o = 0; o < a; ++o) n += s.subParser("makeMarkdown.node")(r[o], t); return n = n.trim() }), s.subParser("makeMarkdown.pre", function(e, t) { "use strict"; var n = e.getAttribute("prenum"); return "<pre>" + t.preList[n] + "</pre>" }), s.subParser("makeMarkdown.strikethrough", function(e, t) { "use strict"; var n = ""; if (e.hasChildNodes()) { n += "~~"; for (var r = e.childNodes, a = r.length, o = 0; o < a; ++o) n += s.subParser("makeMarkdown.node")(r[o], t);
                n += "~~" } return n }), s.subParser("makeMarkdown.strong", function(e, t) { "use strict"; var n = ""; if (e.hasChildNodes()) { n += "**"; for (var r = e.childNodes, a = r.length, o = 0; o < a; ++o) n += s.subParser("makeMarkdown.node")(r[o], t);
                n += "**" } return n }), s.subParser("makeMarkdown.table", function(e, t) { "use strict"; var n, r, a = "",
                o = [
                    [],
                    []
                ],
                i = e.querySelectorAll("thead>tr>th"),
                c = e.querySelectorAll("tbody>tr"); for (n = 0; n < i.length; ++n) { var u = s.subParser("makeMarkdown.tableCell")(i[n], t),
                    l = "---"; if (i[n].hasAttribute("style")) switch (i[n].getAttribute("style").toLowerCase().replace(/\s/g, "")) {
                    case "text-align:left;":
                        l = ":---"; break;
                    case "text-align:right;":
                        l = "---:"; break;
                    case "text-align:center;":
                        l = ":---:" }
                o[0][n] = u.trim(), o[1][n] = l } for (n = 0; n < c.length; ++n) { var f = o.push([]) - 1,
                    p = c[n].getElementsByTagName("td"); for (r = 0; r < i.length; ++r) { var d = " ";
                    void 0 !== p[r] && (d = s.subParser("makeMarkdown.tableCell")(p[r], t)), o[f].push(d) } } var h = 3; for (n = 0; n < o.length; ++n)
                for (r = 0; r < o[n].length; ++r) { var g = o[n][r].length;
                    g > h && (h = g) }
            for (n = 0; n < o.length; ++n) { for (r = 0; r < o[n].length; ++r) 1 === n ? ":" === o[n][r].slice(-1) ? o[n][r] = s.helper.padEnd(o[n][r].slice(-1), h - 1, "-") + ":" : o[n][r] = s.helper.padEnd(o[n][r], h, "-") : o[n][r] = s.helper.padEnd(o[n][r], h);
                a += "| " + o[n].join(" | ") + " |\n" } return a.trim() }), s.subParser("makeMarkdown.tableCell", function(e, t) { "use strict"; var n = ""; if (!e.hasChildNodes()) return ""; for (var r = e.childNodes, a = r.length, o = 0; o < a; ++o) n += s.subParser("makeMarkdown.node")(r[o], t, !0); return n.trim() }), s.subParser("makeMarkdown.txt", function(e) { "use strict"; var t = e.nodeValue; return t = t.replace(/ +/g, " "), t = t.replace(/¨NBSP;/g, " "), t = s.helper.unescapeHTMLEntities(t), t = t.replace(/([*_~|`])/g, "\\$1"), t = t.replace(/^(\s*)>/g, "\\$1>"), t = t.replace(/^#/gm, "\\#"), t = t.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), t = t.replace(/^( {0,3}\d+)\./gm, "$1\\."), t = t.replace(/^( {0,3})([+-])/gm, "$1\\$2"), t = t.replace(/]([\s]*)\(/g, "\\]$1\\("), t = t.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:") }), void 0 !== (r = function() { "use strict"; return s }.call(t, n, t, e)) && (e.exports = r) }).call(this)
}, function(e, t, n) {
    (function(t) { var n = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
            r = function(e) {
                function t(e, t, n, r) { this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length }

                function n(e, r, i, s, c, u) { for (var f in i)
                        if (i.hasOwnProperty(f) && i[f]) { var p = i[f];
                            p = Array.isArray(p) ? p : [p]; for (var d = 0; d < p.length; ++d) { if (u && u.cause == f + "," + d) return; var h = p[d],
                                    g = h.inside,
                                    m = !!h.lookbehind,
                                    _ = !!h.greedy,
                                    b = 0,
                                    v = h.alias; if (_ && !h.pattern.global) { var w = h.pattern.toString().match(/[imsuy]*$/)[0];
                                    h.pattern = RegExp(h.pattern.source, w + "g") } for (var y = h.pattern || h, k = s.next, x = c; k !== r.tail && !(u && x >= u.reach); x += k.value.length, k = k.next) { var P = k.value; if (r.length > e.length) return; if (!(P instanceof t)) { var S = 1; if (_ && k != r.tail.prev) { y.lastIndex = x; var j = y.exec(e); if (!j) break; var E = j.index + (m && j[1] ? j[1].length : 0),
                                                C = j.index + j[0].length,
                                                M = x; for (M += k.value.length; E >= M;) k = k.next, M += k.value.length; if (M -= k.value.length, x = M, k.value instanceof t) continue; for (var A = k; A !== r.tail && (M < C || "string" == typeof A.value); A = A.next) S++, M += A.value.length;
                                            S--, P = e.slice(x, M), j.index -= x } else { y.lastIndex = 0; var j = y.exec(P) } if (j) { m && (b = j[1] ? j[1].length : 0); var E = j.index + b,
                                                O = j[0].slice(b),
                                                C = E + O.length,
                                                N = P.slice(0, E),
                                                L = P.slice(C),
                                                T = x + P.length;
                                            u && T > u.reach && (u.reach = T); var z = k.prev;
                                            N && (z = a(r, z, N), x += N.length), o(r, z, S); var F = new t(f, g ? l.tokenize(O, g) : O, v, O);
                                            k = a(r, z, F), L && a(r, k, L), S > 1 && n(e, r, i, k.prev, x, { cause: f + "," + d, reach: T }) } } } } } }

                function r() { var e = { value: null, prev: null, next: null },
                        t = { value: null, prev: e, next: null };
                    e.next = t, this.head = e, this.tail = t, this.length = 0 }

                function a(e, t, n) { var r = t.next,
                        a = { value: n, prev: t, next: r }; return t.next = a, r.prev = a, e.length++, a }

                function o(e, t, n) { for (var r = t.next, a = 0; a < n && r !== e.tail; a++) r = r.next;
                    t.next = r, r.prev = t, e.length -= a }

                function i(e) { for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next; return t }

                function s() { l.manual || l.highlightAll() } var c = /\blang(?:uage)?-([\w-]+)\b/i,
                    u = 0,
                    l = { manual: e.Prism && e.Prism.manual, disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler, util: { encode: function e(n) { return n instanceof t ? new t(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ") }, type: function(e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId: function(e) { return e.__id || Object.defineProperty(e, "__id", { value: ++u }), e.__id }, clone: function e(t, n) { n = n || {}; var r, a; switch (l.util.type(t)) {
                                    case "Object":
                                        if (a = l.util.objId(t), n[a]) return n[a];
                                        r = {}, n[a] = r; for (var o in t) t.hasOwnProperty(o) && (r[o] = e(t[o], n)); return r;
                                    case "Array":
                                        return a = l.util.objId(t), n[a] ? n[a] : (r = [], n[a] = r, t.forEach(function(t, a) { r[a] = e(t, n) }), r);
                                    default:
                                        return t } }, getLanguage: function(e) { for (; e && !c.test(e.className);) e = e.parentElement; return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none" }, currentScript: function() { if ("undefined" == typeof document) return null; if ("currentScript" in document) return document.currentScript; try { throw new Error } catch (r) { var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack) || [])[1]; if (e) { var t = document.getElementsByTagName("script"); for (var n in t)
                                            if (t[n].src == e) return t[n] } return null } }, isActive: function(e, t, n) { for (var r = "no-" + t; e;) { var a = e.classList; if (a.contains(t)) return !0; if (a.contains(r)) return !1;
                                    e = e.parentElement } return !!n } }, languages: { extend: function(e, t) { var n = l.util.clone(l.languages[e]); for (var r in t) n[r] = t[r]; return n }, insertBefore: function(e, t, n, r) { r = r || l.languages; var a = r[e],
                                    o = {}; for (var i in a)
                                    if (a.hasOwnProperty(i)) { if (i == t)
                                            for (var s in n) n.hasOwnProperty(s) && (o[s] = n[s]);
                                        n.hasOwnProperty(i) || (o[i] = a[i]) }
                                var c = r[e]; return r[e] = o, l.languages.DFS(l.languages, function(t, n) { n === c && t != e && (this[t] = o) }), o }, DFS: function e(t, n, r, a) { a = a || {}; var o = l.util.objId; for (var i in t)
                                    if (t.hasOwnProperty(i)) { n.call(t, i, t[i], r || i); var s = t[i],
                                            c = l.util.type(s); "Object" !== c || a[o(s)] ? "Array" !== c || a[o(s)] || (a[o(s)] = !0, e(s, n, i, a)) : (a[o(s)] = !0, e(s, n, null, a)) } } }, plugins: {}, highlightAll: function(e, t) { l.highlightAllUnder(document, e, t) }, highlightAllUnder: function(e, t, n) { var r = { callback: n, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
                            l.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), l.hooks.run("before-all-elements-highlight", r); for (var a, o = 0; a = r.elements[o++];) l.highlightElement(a, !0 === t, r.callback) }, highlightElement: function(t, n, r) {
                            function a(e) { f.highlightedCode = e, l.hooks.run("before-insert", f), f.element.innerHTML = f.highlightedCode, l.hooks.run("after-highlight", f), l.hooks.run("complete", f), r && r.call(f.element) } var o = l.util.getLanguage(t),
                                i = l.languages[o];
                            t.className = t.className.replace(c, "").replace(/\s+/g, " ") + " language-" + o; var s = t.parentElement;
                            s && "pre" === s.nodeName.toLowerCase() && (s.className = s.className.replace(c, "").replace(/\s+/g, " ") + " language-" + o); var u = t.textContent,
                                f = { element: t, language: o, grammar: i, code: u }; if (l.hooks.run("before-sanity-check", f), !f.code) return l.hooks.run("complete", f), void(r && r.call(f.element)); if (l.hooks.run("before-highlight", f), !f.grammar) return void a(l.util.encode(f.code)); if (n && e.Worker) { var p = new Worker(l.filename);
                                p.onmessage = function(e) { a(e.data) }, p.postMessage(JSON.stringify({ language: f.language, code: f.code, immediateClose: !0 })) } else a(l.highlight(f.code, f.grammar, f.language)) }, highlight: function(e, n, r) { var a = { code: e, grammar: n, language: r }; return l.hooks.run("before-tokenize", a), a.tokens = l.tokenize(a.code, a.grammar), l.hooks.run("after-tokenize", a), t.stringify(l.util.encode(a.tokens), a.language) }, tokenize: function(e, t) { var o = t.rest; if (o) { for (var s in o) t[s] = o[s];
                                delete t.rest } var c = new r; return a(c, c.head, e), n(e, c, t, c.head, 0), i(c) }, hooks: { all: {}, add: function(e, t) { var n = l.hooks.all;
                                n[e] = n[e] || [], n[e].push(t) }, run: function(e, t) { var n = l.hooks.all[e]; if (n && n.length)
                                    for (var r, a = 0; r = n[a++];) r(t) } }, Token: t }; if (e.Prism = l, t.stringify = function e(t, n) { if ("string" == typeof t) return t; if (Array.isArray(t)) { var r = ""; return t.forEach(function(t) { r += e(t, n) }), r } var a = { type: t.type, content: e(t.content, n), tag: "span", classes: ["token", t.type], attributes: {}, language: n },
                            o = t.alias;
                        o && (Array.isArray(o) ? Array.prototype.push.apply(a.classes, o) : a.classes.push(o)), l.hooks.run("wrap", a); var i = ""; for (var s in a.attributes) i += " " + s + '="' + (a.attributes[s] || "").replace(/"/g, "&quot;") + '"'; return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + i + ">" + a.content + "</" + a.tag + ">" }, !e.document) return e.addEventListener ? (l.disableWorkerMessageHandler || e.addEventListener("message", function(t) { var n = JSON.parse(t.data),
                        r = n.language,
                        a = n.code,
                        o = n.immediateClose;
                    e.postMessage(l.highlight(a, l.languages[r], r)), o && e.close() }, !1), l) : l; var f = l.util.currentScript(); if (f && (l.filename = f.src, f.hasAttribute("data-manual") && (l.manual = !0)), !l.manual) { var p = document.readyState; "loading" === p || "interactive" === p && f && f.defer ? document.addEventListener("DOMContentLoaded", s) : window.requestAnimationFrame ? window.requestAnimationFrame(s) : window.setTimeout(s, 16) } return l }(n);
        void 0 !== e && e.exports && (e.exports = r), void 0 !== t && (t.Prism = r), r.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/, name: /[^\s<>'"]+/ } }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup, r.hooks.add("wrap", function(e) { "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&")) }), Object.defineProperty(r.languages.markup.tag, "addInlined", { value: function(e, t) { var n = {};
                    n["language-" + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: r.languages[t] }, n.cdata = /^<!\[CDATA\[|\]\]>$/i; var a = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
                    a["language-" + t] = { pattern: /[\s\S]+/, inside: r.languages[t] }; var o = {};
                    o[e] = { pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() { return e }), "i"), lookbehind: !0, greedy: !0, inside: a }, r.languages.insertBefore("markup", "cdata", o) } }), r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.xml = r.languages.extend("markup", {}), r.languages.ssml = r.languages.xml, r.languages.atom = r.languages.xml, r.languages.rss = r.languages.xml,
            function(e) { var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + t.source + "$"), alias: "url" } } }, selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"), string: { pattern: t, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css; var n = e.languages.markup;
                n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: n.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: e.languages.css } }, alias: "language-css" } }, n.tag)) }(r), r.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, r.languages.javascript = r.languages.extend("clike", { "class-name": [r.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), r.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, r.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: r.languages.regex }, "regex-flags": /[a-z]+$/, "regex-delimiter": /^\/|\/$/ } }, "function-variable": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: r.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: r.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: r.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: r.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), r.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: r.languages.javascript } }, string: /[\s\S]+/ } } }), r.languages.markup && r.languages.markup.tag.addInlined("script", "javascript"), r.languages.js = r.languages.javascript,
            function() {
                function e(e, t) { var n = e.className;
                    n = n.replace(o, " ") + " language-" + t, e.className = n.replace(/\s+/g, " ").trim() } if ("undefined" != typeof self && self.Prism && self.document) { var t = window.Prism,
                        n = function(e, t) { return "✖ Error " + e + " while fetching file: " + t },
                        r = { js: "javascript", py: "python", rb: "ruby", ps1: "powershell", psm1: "powershell", sh: "bash", bat: "batch", h: "c", tex: "latex" },
                        a = 'pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',
                        o = /\blang(?:uage)?-([\w-]+)\b/i;
                    t.hooks.add("before-highlightall", function(e) { e.selector += ", " + a }), t.hooks.add("before-sanity-check", function(o) { var i = o.element; if (i.matches(a)) { o.code = "", i.setAttribute("data-src-status", "loading"); var s = i.appendChild(document.createElement("CODE"));
                            s.textContent = "Loading…"; var c = i.getAttribute("data-src"),
                                u = o.language; if ("none" === u) { var l = (/\.(\w+)$/.exec(c) || [, "none"])[1];
                                u = r[l] || l }
                            e(s, u), e(i, u); var f = t.plugins.autoloader;
                            f && f.loadLanguages(u); var p = new XMLHttpRequest;
                            p.open("GET", c, !0), p.onreadystatechange = function() { 4 == p.readyState && (p.status < 400 && p.responseText ? (i.setAttribute("data-src-status", "loaded"), s.textContent = p.responseText, t.highlightElement(s)) : (i.setAttribute("data-src-status", "failed"), p.status >= 400 ? s.textContent = n(p.status, p.statusText) : s.textContent = "✖ Error: File does not exist or is empty")) }, p.send(null) } }), t.plugins.fileHighlight = { highlight: function(e) { for (var n, r = (e || document).querySelectorAll(a), o = 0; n = r[o++];) t.highlightElement(n) } }; var i = !1;
                    t.fileHighlight = function() { i || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), i = !0), t.plugins.fileHighlight.highlight.apply(this, arguments) } } }() }).call(t, n(145)) }, function(e, t) { var n;
    n = function() { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) }
    e.exports = n }, function(e, t, n) { var r = n(147); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var a = {};
    a.transform = void 0, n(149)(r, a), r.locals && (e.exports = r.locals) }, function(e, t, n) { t = e.exports = n(148)(!1), t.push([e.i, ".introduction{width:0;height:0}.introduction,.workArea{font-family:monospace;white-space:pre-wrap;outline:0}.workArea{height:500px;left:0}.workArea,body{width:100%}", ""]) }, function(e, t) {
    function n(e, t) { var n = e[1] || "",
            a = e[3]; if (!a) return n; if (t && "function" == typeof btoa) { var o = r(a); return [n].concat(a.sources.map(function(e) { return "/*# sourceURL=" + a.sourceRoot + e + " */" })).concat([o]).join("\n") } return [n].join("\n") }

    function r(e) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */" }
    e.exports = function(e) { var t = []; return t.toString = function() { return this.map(function(t) { var r = n(t, e); return t[2] ? "@media " + t[2] + "{" + r + "}" : r }).join("") }, t.i = function(e, n) { "string" == typeof e && (e = [
                [null, e, ""]
            ]); for (var r = {}, a = 0; a < this.length; a++) { var o = this[a][0]; "number" == typeof o && (r[o] = !0) } for (a = 0; a < e.length; a++) { var i = e[a]; "number" == typeof i[0] && r[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), t.push(i)) } }, t } }, function(e, t, n) {
    function r(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n],
                a = h[r.id]; if (a) { a.refs++; for (var o = 0; o < a.parts.length; o++) a.parts[o](r.parts[o]); for (; o < r.parts.length; o++) a.parts.push(l(r.parts[o], t)) } else { for (var i = [], o = 0; o < r.parts.length; o++) i.push(l(r.parts[o], t));
                h[r.id] = { id: r.id, refs: 1, parts: i } } } }

    function a(e, t) { for (var n = [], r = {}, a = 0; a < e.length; a++) { var o = e[a],
                i = t.base ? o[0] + t.base : o[0],
                s = o[1],
                c = o[2],
                u = o[3],
                l = { css: s, media: c, sourceMap: u };
            r[i] ? r[i].parts.push(l) : n.push(r[i] = { id: i, parts: [l] }) } return n }

    function o(e, t) { var n = m(e.insertInto); if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); var r = v[v.length - 1]; if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), v.push(t);
        else { if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t) } }

    function i(e) { if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e); var t = v.indexOf(e);
        t >= 0 && v.splice(t, 1) }

    function s(e) { var t = document.createElement("style"); return e.attrs.type = "text/css", u(t, e.attrs), o(e, t), t }

    function c(e) { var t = document.createElement("link"); return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", u(t, e.attrs), o(e, t), t }

    function u(e, t) { Object.keys(t).forEach(function(n) { e.setAttribute(n, t[n]) }) }

    function l(e, t) { var n, r, a, o; if (t.transform && e.css) { if (!(o = t.transform(e.css))) return function() {};
            e.css = o } if (t.singleton) { var u = b++;
            n = _ || (_ = s(t)), r = f.bind(null, n, u, !1), a = f.bind(null, n, u, !0) } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t), r = d.bind(null, n, t), a = function() { i(n), n.href && URL.revokeObjectURL(n.href) }) : (n = s(t), r = p.bind(null, n), a = function() { i(n) }); return r(e),
            function(t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t) } else a() } }

    function f(e, t, n, r) { var a = n ? "" : r.css; if (e.styleSheet) e.styleSheet.cssText = y(t, a);
        else { var o = document.createTextNode(a),
                i = e.childNodes;
            i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(o, i[t]) : e.appendChild(o) } }

    function p(e, t) { var n = t.css,
            r = t.media; if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
        else { for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n)) } }

    function d(e, t, n) { var r = n.css,
            a = n.sourceMap,
            o = void 0 === t.convertToAbsoluteUrls && a;
        (t.convertToAbsoluteUrls || o) && (r = w(r)), a && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"); var i = new Blob([r], { type: "text/css" }),
            s = e.href;
        e.href = URL.createObjectURL(i), s && URL.revokeObjectURL(s) } var h = {},
        g = function(e) { var t; return function() { return void 0 === t && (t = e.apply(this, arguments)), t } }(function() { return window && document && document.all && !window.atob }),
        m = function(e) { var t = {}; return function(n) { return void 0 === t[n] && (t[n] = e.call(this, n)), t[n] } }(function(e) { return document.querySelector(e) }),
        _ = null,
        b = 0,
        v = [],
        w = n(150);
    e.exports = function(e, t) { if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = g()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom"); var n = a(e, t); return r(n, t),
            function(e) { for (var o = [], i = 0; i < n.length; i++) { var s = n[i],
                        c = h[s.id];
                    c.refs--, o.push(c) }
                e && r(a(e, t), t); for (var i = 0; i < o.length; i++) { var c = o[i]; if (0 === c.refs) { for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                        delete h[c.id] } } } }; var y = function() { var e = []; return function(t, n) { return e[t] = n, e.filter(Boolean).join("\n") } }() }, function(e, t) { e.exports = function(e) { var t = "undefined" != typeof window && window.location; if (!t) throw new Error("fixUrls requires window.location"); if (!e || "string" != typeof e) return e; var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/"); return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) { var a = t.trim().replace(/^"(.*)"$/, function(e, t) { return t }).replace(/^'(.*)'$/, function(e, t) { return t }); if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a)) return e; var o; return o = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")" }) } }]);
