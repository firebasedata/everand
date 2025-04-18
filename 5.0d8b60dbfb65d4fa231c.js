(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    101: function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return s
            }
            ));
            var r = n(34)
              , i = n.n(r)
              , o = n(1084)
              , a = (n(2),
            n(751),
            n(4));
            n(3);
            function s(t, e) {
                var n = e ? e.id : null
                  , r = {
                    id: n,
                    isLoggedIn: !!n
                };
                o.a.init(i()({
                    site: "datadoghq.com",
                    sessionSampleRate: 5,
                    sessionReplaySampleRate: 0,
                    trackResources: !0,
                    trackLongTasks: !0,
                    trackUserInteractions: !0
                }, t)),
                r.isLoggedIn && r.id && o.a.setUser({
                    id: r.id
                })
            }
            Object.values(a.LANGUAGES).map((t=>t.language))
        }
        ).call(this, "/")
    },
    1084: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return Oa
        }
        ));
        var r = {
            log: "log",
            debug: "debug",
            info: "info",
            warn: "warn",
            error: "error"
        }
          , i = console
          , o = {};
        Object.keys(r).forEach((function(t) {
            o[t] = i[t]
        }
        ));
        var a = "Datadog Browser SDK:"
          , s = {
            debug: o.debug.bind(i, a),
            log: o.log.bind(i, a),
            info: o.info.bind(i, a),
            warn: o.warn.bind(i, a),
            error: o.error.bind(i, a)
        };
        function u(t, e) {
            return function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                try {
                    return t.apply(void 0, n)
                } catch (t) {
                    s.error(e, t)
                }
            }
        }
        var c, f = function(t, e, n) {
            if (n || 2 === arguments.length)
                for (var r, i = 0, o = e.length; i < o; i++)
                    !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)),
                    r[i] = e[i]);
            return t.concat(r || Array.prototype.slice.call(e))
        }, l = !1;
        function d(t) {
            l = t
        }
        function v(t) {
            return function() {
                return p(t, this, arguments)
            }
        }
        function p(t, e, n) {
            try {
                return t.apply(e, n)
            } catch (t) {
                if (m(t),
                c)
                    try {
                        c(t)
                    } catch (t) {
                        m(t)
                    }
            }
        }
        function m() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            l && s.error.apply(s, f(["[MONITOR]"], t, !1))
        }
        function g(t, e) {
            return -1 !== t.indexOf(e)
        }
        function y(t) {
            if (Array.from)
                return Array.from(t);
            var e = [];
            if (t instanceof Set)
                t.forEach((function(t) {
                    return e.push(t)
                }
                ));
            else
                for (var n = 0; n < t.length; n++)
                    e.push(t[n]);
            return e
        }
        function h(t, e) {
            for (var n = 0; n < t.length; n += 1) {
                var r = t[n];
                if (e(r, n))
                    return r
            }
        }
        function b(t) {
            return Object.keys(t).map((function(e) {
                return t[e]
            }
            ))
        }
        function S(t) {
            return Object.keys(t).map((function(e) {
                return [e, t[e]]
            }
            ))
        }
        function w(t, e) {
            return t.slice(0, e.length) === e
        }
        function C(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
            return e.forEach((function(e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )),
            t
        }
        function E() {
            if ("object" == typeof globalThis)
                return globalThis;
            Object.defineProperty(Object.prototype, "_dd_temp_", {
                get: function() {
                    return this
                },
                configurable: !0
            });
            var t = _dd_temp_;
            return delete Object.prototype._dd_temp_,
            "object" != typeof t && (t = "object" == typeof self ? self : "object" == typeof window ? window : {}),
            t
        }
        var T = 1024
          , _ = 1024 * T
          , k = /[^\u0000-\u007F]/;
        function x(t) {
            return k.test(t) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(t).length : new Blob([t]).size : t.length
        }
        function A(t, e) {
            var n, r = E();
            return r.Zone && "function" == typeof r.Zone.__symbol__ && (n = t[r.Zone.__symbol__(e)]),
            n || (n = t[e]),
            n
        }
        function I(t, e) {
            return A(E(), "setTimeout")(v(t), e)
        }
        function R(t) {
            A(E(), "clearTimeout")(t)
        }
        function O(t, e) {
            return A(E(), "setInterval")(v(t), e)
        }
        function N(t) {
            A(E(), "clearInterval")(t)
        }
        function L(t, e, n) {
            var r, i, o = !n || void 0 === n.leading || n.leading, a = !n || void 0 === n.trailing || n.trailing, s = !1;
            return {
                throttled: function() {
                    for (var n = [], u = 0; u < arguments.length; u++)
                        n[u] = arguments[u];
                    s ? r = n : (o ? t.apply(void 0, n) : r = n,
                    s = !0,
                    i = I((function() {
                        a && r && t.apply(void 0, r),
                        s = !1,
                        r = void 0
                    }
                    ), e))
                },
                cancel: function() {
                    R(i),
                    s = !1,
                    r = void 0
                }
            }
        }
        function P() {}
        function U(t, e, n) {
            if ("object" != typeof t || null === t)
                return JSON.stringify(t);
            var r = M(Object.prototype)
              , i = M(Array.prototype)
              , o = M(Object.getPrototypeOf(t))
              , a = M(t);
            try {
                return JSON.stringify(t, e, n)
            } catch (t) {
                return "<error: unable to serialize object>"
            } finally {
                r(),
                i(),
                o(),
                a()
            }
        }
        function M(t) {
            var e = t
              , n = e.toJSON;
            return n ? (delete e.toJSON,
            function() {
                e.toJSON = n
            }
            ) : P
        }
        function D(t) {
            return C({}, t)
        }
        function B(t, e) {
            return Object.keys(t).some((function(n) {
                return t[n] === e
            }
            ))
        }
        function V(t) {
            return 0 === Object.keys(t).length
        }
        var F = 3 * T
          , q = 16 * T
          , H = 200;
        function G(t) {
            void 0 === t && (t = 2);
            var e = new Map
              , n = !1;
            function r(r) {
                if (void 0 === r && (r = 0),
                !n && 0 !== t) {
                    var i = 2 === t ? F : q
                      , o = r;
                    e.forEach((function(t) {
                        o += t.getBytesCount()
                    }
                    )),
                    o > i && (!function(t) {
                        s.warn("Customer data exceeds the recommended ".concat(t / T, "KiB threshold. More details: https://docs.datadoghq.com/real_user_monitoring/browser/troubleshooting/#customer-data-exceeds-the-recommended-threshold-warning"))
                    }(i),
                    n = !0)
                }
            }
            return {
                createDetachedTracker: function() {
                    var t = j((function() {
                        return r(t.getBytesCount())
                    }
                    ));
                    return t
                },
                getOrCreateTracker: function(t) {
                    return e.has(t) || e.set(t, j(r)),
                    e.get(t)
                },
                setCompressionStatus: function(e) {
                    0 === t && (t = e,
                    r())
                },
                getCompressionStatus: function() {
                    return t
                },
                stop: function() {
                    e.forEach((function(t) {
                        return t.stop()
                    }
                    )),
                    e.clear()
                }
            }
        }
        function j(t) {
            var e = 0
              , n = L((function(n) {
                e = x(U(n)),
                t()
            }
            ), H)
              , r = n.throttled
              , i = n.cancel
              , o = function() {
                i(),
                e = 0
            };
            return {
                updateCustomerData: function(t) {
                    V(t) ? o() : r(t)
                },
                resetCustomerData: o,
                getBytesCount: function() {
                    return e
                },
                stop: function() {
                    i()
                }
            }
        }
        function z(t) {
            return null === t ? "null" : Array.isArray(t) ? "array" : typeof t
        }
        function Y(t, e, n) {
            if (void 0 === n && (n = function() {
                if ("undefined" != typeof WeakSet) {
                    var t = new WeakSet;
                    return {
                        hasAlreadyBeenSeen: function(e) {
                            var n = t.has(e);
                            return n || t.add(e),
                            n
                        }
                    }
                }
                var e = [];
                return {
                    hasAlreadyBeenSeen: function(t) {
                        var n = e.indexOf(t) >= 0;
                        return n || e.push(t),
                        n
                    }
                }
            }()),
            void 0 === e)
                return t;
            if ("object" != typeof e || null === e)
                return e;
            if (e instanceof Date)
                return new Date(e.getTime());
            if (e instanceof RegExp) {
                var r = e.flags || [e.global ? "g" : "", e.ignoreCase ? "i" : "", e.multiline ? "m" : "", e.sticky ? "y" : "", e.unicode ? "u" : ""].join("");
                return new RegExp(e.source,r)
            }
            if (!n.hasAlreadyBeenSeen(e)) {
                if (Array.isArray(e)) {
                    for (var i = Array.isArray(t) ? t : [], o = 0; o < e.length; ++o)
                        i[o] = Y(i[o], e[o], n);
                    return i
                }
                var a = "object" === z(t) ? t : {};
                for (var s in e)
                    Object.prototype.hasOwnProperty.call(e, s) && (a[s] = Y(a[s], e[s], n));
                return a
            }
        }
        function W(t) {
            return Y(void 0, t)
        }
        function J() {
            for (var t, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
            for (var r = 0, i = e; r < i.length; r++) {
                var o = i[r];
                null != o && (t = Y(t, o))
            }
            return t
        }
        var K = 220 * T
          , Z = "$"
          , $ = 3;
        function X(t, e) {
            var n;
            void 0 === e && (e = K);
            var r = M(Object.prototype)
              , i = M(Array.prototype)
              , o = []
              , a = new WeakMap
              , s = Q(t, Z, void 0, o, a)
              , u = (null === (n = JSON.stringify(s)) || void 0 === n ? void 0 : n.length) || 0;
            if (!(u > e)) {
                for (; o.length > 0 && u < e; ) {
                    var c = o.shift()
                      , f = 0;
                    if (Array.isArray(c.source))
                        for (var l = 0; l < c.source.length; l++) {
                            if (u += void 0 !== (d = Q(c.source[l], c.path, l, o, a)) ? JSON.stringify(d).length : 4,
                            u += f,
                            f = 1,
                            u > e) {
                                tt(e, "truncated", t);
                                break
                            }
                            c.target[l] = d
                        }
                    else
                        for (var l in c.source)
                            if (Object.prototype.hasOwnProperty.call(c.source, l)) {
                                var d;
                                if (void 0 !== (d = Q(c.source[l], c.path, l, o, a)) && (u += JSON.stringify(d).length + f + l.length + $,
                                f = 1),
                                u > e) {
                                    tt(e, "truncated", t);
                                    break
                                }
                                c.target[l] = d
                            }
                }
                return r(),
                i(),
                s
            }
            tt(e, "discarded", t)
        }
        function Q(t, e, n, r, i) {
            var o = function(t) {
                var e = t;
                if (e && "function" == typeof e.toJSON)
                    try {
                        return e.toJSON()
                    } catch (t) {}
                return t
            }(t);
            if (!o || "object" != typeof o)
                return function(t) {
                    if ("bigint" == typeof t)
                        return "[BigInt] ".concat(t.toString());
                    if ("function" == typeof t)
                        return "[Function] ".concat(t.name || "unknown");
                    if ("symbol" == typeof t)
                        return "[Symbol] ".concat(t.description || t.toString());
                    return t
                }(o);
            var a = function(t) {
                try {
                    if (t instanceof Event)
                        return {
                            isTrusted: t.isTrusted
                        };
                    var e = Object.prototype.toString.call(t).match(/\[object (.*)\]/);
                    if (e && e[1])
                        return "[".concat(e[1], "]")
                } catch (t) {}
                return "[Unserializable]"
            }(o);
            if ("[Object]" !== a && "[Array]" !== a && "[Error]" !== a)
                return a;
            var s = t;
            if (i.has(s))
                return "[Reference seen at ".concat(i.get(s), "]");
            var u = void 0 !== n ? "".concat(e, ".").concat(n) : e
              , c = Array.isArray(o) ? [] : {};
            return i.set(s, u),
            r.push({
                source: o,
                target: c,
                path: u
            }),
            c
        }
        function tt(t, e, n) {
            s.warn("The data provided has been ".concat(e, " as it is over the limit of ").concat(t, " characters:"), n)
        }
        var et = function() {
            function t(t) {
                this.onFirstSubscribe = t,
                this.observers = []
            }
            return t.prototype.subscribe = function(t) {
                var e = this;
                return !this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0),
                this.observers.push(t),
                {
                    unsubscribe: function() {
                        e.observers = e.observers.filter((function(e) {
                            return t !== e
                        }
                        )),
                        !e.observers.length && e.onLastUnsubscribe && e.onLastUnsubscribe()
                    }
                }
            }
            ,
            t.prototype.notify = function(t) {
                this.observers.forEach((function(e) {
                    return e(t)
                }
                ))
            }
            ,
            t
        }();
        function nt() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            return new et((function(e) {
                var n = t.map((function(t) {
                    return t.subscribe((function(t) {
                        return e.notify(t)
                    }
                    ))
                }
                ));
                return function() {
                    return n.forEach((function(t) {
                        return t.unsubscribe()
                    }
                    ))
                }
            }
            ))
        }
        function rt(t) {
            var e = {}
              , n = new et
              , r = {
                getContext: function() {
                    return W(e)
                },
                setContext: function(i) {
                    "object" === z(i) ? (e = X(i),
                    t.updateCustomerData(e)) : r.clearContext(),
                    n.notify()
                },
                setContextProperty: function(r, i) {
                    e[r] = X(i),
                    t.updateCustomerData(e),
                    n.notify()
                },
                removeContextProperty: function(r) {
                    delete e[r],
                    t.updateCustomerData(e),
                    n.notify()
                },
                clearContext: function() {
                    e = {},
                    t.resetCustomerData(),
                    n.notify()
                },
                changeObservable: n
            };
            return r
        }
        var it, ot = {
            GRANTED: "granted",
            NOT_GRANTED: "not-granted"
        };
        !function(t) {
            t.PAGEHIDE = "pagehide",
            t.RESOURCE_PAGE_STATES = "resource_page_states",
            t.COLLECT_FLUSH_REASON = "collect_flush_reason",
            t.ZERO_LCP_TELEMETRY = "zero_lcp_telemetry",
            t.DISABLE_REPLAY_INLINE_CSS = "disable_replay_inline_css",
            t.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql",
            t.CUSTOM_VITALS = "custom_vitals",
            t.TOLERANT_RESOURCE_TIMINGS = "tolerant_resource_timings"
        }(it || (it = {}));
        var at = new Set;
        function st(t) {
            return at.has(t)
        }
        function ut() {
            return at
        }
        function ct(t) {
            return 0 !== t && 100 * Math.random() <= t
        }
        function ft(t, e) {
            return +t.toFixed(e)
        }
        function lt(t) {
            return dt(t) && t >= 0 && t <= 100
        }
        function dt(t) {
            return "number" == typeof t
        }
        var vt, pt = 1e3, mt = 60 * pt, gt = 60 * mt, yt = 365 * (24 * gt);
        function ht(t) {
            return {
                relative: t,
                timeStamp: St(t)
            }
        }
        function bt(t) {
            return {
                relative: It(t),
                timeStamp: t
            }
        }
        function St(t) {
            var e = Ct() - performance.now();
            return e > Rt() ? Math.round(At(e, t)) : function(t) {
                return Math.round(At(Rt(), t))
            }(t)
        }
        function wt(t) {
            return dt(t) ? ft(1e6 * t, 0) : t
        }
        function Ct() {
            return (new Date).getTime()
        }
        function Et() {
            return Ct()
        }
        function Tt() {
            return performance.now()
        }
        function _t() {
            return {
                relative: Tt(),
                timeStamp: Et()
            }
        }
        function kt() {
            return {
                relative: 0,
                timeStamp: Rt()
            }
        }
        function xt(t, e) {
            return e - t
        }
        function At(t, e) {
            return t + e
        }
        function It(t) {
            return t - Rt()
        }
        function Rt() {
            return void 0 === vt && (vt = performance.timing.navigationStart),
            vt
        }
        var Ot = "?";
        function Nt(t) {
            var e = []
              , n = qt(t, "stack")
              , r = String(t);
            return n && w(n, r) && (n = n.slice(r.length)),
            n && n.split("\n").forEach((function(t) {
                var n = function(t) {
                    var e = Ut.exec(t);
                    if (!e)
                        return;
                    var n = e[2] && 0 === e[2].indexOf("native")
                      , r = e[2] && 0 === e[2].indexOf("eval")
                      , i = Mt.exec(e[2]);
                    r && i && (e[2] = i[1],
                    e[3] = i[2],
                    e[4] = i[3]);
                    return {
                        args: n ? [e[2]] : [],
                        column: e[4] ? +e[4] : void 0,
                        func: e[1] || Ot,
                        line: e[3] ? +e[3] : void 0,
                        url: n ? void 0 : e[2]
                    }
                }(t) || function(t) {
                    var e = Dt.exec(t);
                    if (!e)
                        return;
                    return {
                        args: [],
                        column: e[3] ? +e[3] : void 0,
                        func: Ot,
                        line: e[2] ? +e[2] : void 0,
                        url: e[1]
                    }
                }(t) || function(t) {
                    var e = Bt.exec(t);
                    if (!e)
                        return;
                    return {
                        args: [],
                        column: e[4] ? +e[4] : void 0,
                        func: e[1] || Ot,
                        line: +e[3],
                        url: e[2]
                    }
                }(t) || function(t) {
                    var e = Vt.exec(t);
                    if (!e)
                        return;
                    var n = e[3] && e[3].indexOf(" > eval") > -1
                      , r = Ft.exec(e[3]);
                    n && r && (e[3] = r[1],
                    e[4] = r[2],
                    e[5] = void 0);
                    return {
                        args: e[2] ? e[2].split(",") : [],
                        column: e[5] ? +e[5] : void 0,
                        func: e[1] || Ot,
                        line: e[4] ? +e[4] : void 0,
                        url: e[3]
                    }
                }(t);
                n && (!n.func && n.line && (n.func = Ot),
                e.push(n))
            }
            )),
            {
                message: qt(t, "message"),
                name: qt(t, "name"),
                stack: e
            }
        }
        var Lt = "((?:file|https?|blob|chrome-extension|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)"
          , Pt = "(?::(\\d+))"
          , Ut = new RegExp("^\\s*at (.*?) ?\\(".concat(Lt).concat(Pt, "?").concat(Pt, "?\\)?\\s*$"),"i")
          , Mt = new RegExp("\\((\\S*)".concat(Pt).concat(Pt, "\\)"));
        var Dt = new RegExp("^\\s*at ?".concat(Lt).concat(Pt, "?").concat(Pt, "??\\s*$"),"i");
        var Bt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
        var Vt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i
          , Ft = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
        function qt(t, e) {
            if ("object" == typeof t && t && e in t) {
                var n = t[e];
                return "string" == typeof n ? n : void 0
            }
        }
        function Ht(t, e, n, r) {
            var i = [{
                url: e,
                column: r,
                line: n
            }]
              , o = function(t) {
                var e, n, r;
                "[object String]" === {}.toString.call(t) && (n = (e = Gt.exec(t))[1],
                r = e[2]);
                return {
                    name: n,
                    message: r
                }
            }(t);
            return {
                name: o.name,
                message: o.message,
                stack: i
            }
        }
        var Gt = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
        function jt() {
            var t, e = new Error;
            if (!e.stack)
                try {
                    throw e
                } catch (t) {}
            return p((function() {
                var n = Nt(e);
                n.stack = n.stack.slice(2),
                t = zt(n)
            }
            )),
            t
        }
        function zt(t) {
            var e = Yt(t);
            return t.stack.forEach((function(t) {
                var n = "?" === t.func ? "<anonymous>" : t.func
                  , r = t.args && t.args.length > 0 ? "(".concat(t.args.join(", "), ")") : ""
                  , i = t.line ? ":".concat(t.line) : ""
                  , o = t.line && t.column ? ":".concat(t.column) : "";
                e += "\n  at ".concat(n).concat(r, " @ ").concat(t.url).concat(i).concat(o)
            }
            )),
            e
        }
        function Yt(t) {
            return "".concat(t.name || "Error", ": ").concat(t.message)
        }
        var Wt = "No stack, consider using an instance of Error";
        function Jt(t) {
            var e = t.stackTrace
              , n = t.originalError
              , r = t.handlingStack
              , i = t.startClocks
              , o = t.nonErrorPrefix
              , a = t.source
              , s = t.handling
              , u = n instanceof Error
              , c = function(t, e, n, r) {
                return (null == t ? void 0 : t.message) && (null == t ? void 0 : t.name) ? t.message : e ? "Empty message" : "".concat(n, " ").concat(U(X(r)))
            }(e, u, o, n)
              , f = function(t, e) {
                if (void 0 === e)
                    return !1;
                if (t)
                    return !0;
                return e.stack.length > 0 && (e.stack.length > 1 || void 0 !== e.stack[0].url)
            }(u, e) ? zt(e) : Wt
              , l = u ? Zt(n, a) : void 0;
            return {
                startClocks: i,
                source: a,
                handling: s,
                handlingStack: r,
                originalError: n,
                type: null == e ? void 0 : e.name,
                message: c,
                stack: f,
                causes: l,
                fingerprint: Kt(n)
            }
        }
        function Kt(t) {
            return t instanceof Error && "dd_fingerprint"in t ? String(t.dd_fingerprint) : void 0
        }
        function Zt(t, e) {
            for (var n = t, r = []; (null == n ? void 0 : n.cause)instanceof Error && r.length < 10; ) {
                var i = Nt(n.cause);
                r.push({
                    message: n.cause.message,
                    source: e,
                    type: null == i ? void 0 : i.name,
                    stack: i && zt(i)
                }),
                n = n.cause
            }
            return r.length ? r : void 0
        }
        var $t = "datad0g.com"
          , Xt = "dd0g-gov.com"
          , Qt = "datadoghq.com"
          , te = "datadoghq.eu"
          , ee = "pci.browser-intake-datadoghq.com";
        function ne(t, e) {
            var n = window.__ddBrowserSdkExtensionCallback;
            n && n({
                type: t,
                payload: e
            })
        }
        function re() {
            var t, e = window.navigator;
            return {
                status: e.onLine ? "connected" : "not_connected",
                interfaces: e.connection && e.connection.type ? [e.connection.type] : void 0,
                effective_type: null === (t = e.connection) || void 0 === t ? void 0 : t.effectiveType
            }
        }
        function ie(t, e) {
            var n = t.indexOf(e);
            n >= 0 && t.splice(n, 1)
        }
        var oe, ae = function() {
            function t() {
                this.buffer = []
            }
            return t.prototype.add = function(t) {
                this.buffer.push(t) > 500 && this.buffer.splice(0, 1)
            }
            ,
            t.prototype.remove = function(t) {
                ie(this.buffer, t)
            }
            ,
            t.prototype.drain = function(t) {
                this.buffer.forEach((function(e) {
                    return e(t)
                }
                )),
                this.buffer.length = 0
            }
            ,
            t
        }(), se = {
            log: "log",
            configuration: "configuration",
            usage: "usage"
        }, ue = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "https://d3uc069fcn7uxw.cloudfront.net", "https://d20xtzwzcl0ceb.cloudfront.net", "http://localhost", "<anonymous>"], ce = ["ddog-gov.com"], fe = new ae, le = function(t) {
            fe.add((function() {
                return le(t)
            }
            ))
        };
        function de(t, e) {
            var n, r, i = new et, o = new Set, a = !g(ce, e.site) && ct(e.telemetrySampleRate), s = ((n = {})[se.log] = a,
            n[se.configuration] = a && ct(e.telemetryConfigurationSampleRate),
            n[se.usage] = a && ct(e.telemetryUsageSampleRate),
            n), u = {
                is_local_file: "file:" === window.location.protocol,
                is_worker: "WorkerGlobalScope"in self
            };
            return le = function(n) {
                var a = U(n);
                if (s[n.type] && o.size < e.maxTelemetryEventsPerPage && !o.has(a)) {
                    var c = function(t, e, n) {
                        return J({
                            type: "telemetry",
                            date: Et(),
                            service: t,
                            version: "5.18.0",
                            source: "browser",
                            _dd: {
                                format_version: 2
                            },
                            telemetry: J(e, {
                                runtime_env: n,
                                connectivity: re()
                            }),
                            experimental_features: y(ut())
                        }, void 0 !== r ? r() : {})
                    }(t, n, u);
                    i.notify(c),
                    ne("telemetry", c),
                    o.add(a)
                }
            }
            ,
            c = pe,
            {
                setContextProvider: function(t) {
                    r = t
                },
                observable: i,
                enabled: a
            }
        }
        function ve(t, e) {
            m(r.debug, t, e),
            le(C({
                type: se.log,
                message: t,
                status: "debug"
            }, e))
        }
        function pe(t, e) {
            le(C({
                type: se.log,
                status: "error"
            }, function(t) {
                if (t instanceof Error) {
                    var e = Nt(t);
                    return {
                        error: {
                            kind: e.name,
                            stack: zt(ge(e))
                        },
                        message: e.message
                    }
                }
                return {
                    error: {
                        stack: Wt
                    },
                    message: "".concat("Uncaught", " ").concat(U(t))
                }
            }(t), e))
        }
        function me(t) {
            le({
                type: se.usage,
                usage: t
            })
        }
        function ge(t) {
            return t.stack = t.stack.filter((function(t) {
                return !t.url || ue.some((function(e) {
                    return w(t.url, e)
                }
                ))
            }
            )),
            t
        }
        function ye(t, e, n, r, i) {
            return he(t, e, [n], r, i)
        }
        function he(t, e, n, r, i) {
            var o = void 0 === i ? {} : i
              , a = o.once
              , s = o.capture
              , u = o.passive
              , c = v((function(e) {
                (e.isTrusted || e.__ddIsTrusted || t.allowUntrustedEvents) && (a && d(),
                r(e))
            }
            ))
              , f = u ? {
                capture: s,
                passive: u
            } : s
              , l = A(e, "addEventListener");
            function d() {
                var t = A(e, "removeEventListener");
                n.forEach((function(n) {
                    return t.call(e, n, c, f)
                }
                ))
            }
            return n.forEach((function(t) {
                return l.call(e, t, c, f)
            }
            )),
            {
                stop: d
            }
        }
        !function(t) {
            t.BEFORE_UNLOAD = "beforeunload",
            t.CLICK = "click",
            t.DBL_CLICK = "dblclick",
            t.KEY_DOWN = "keydown",
            t.LOAD = "load",
            t.POP_STATE = "popstate",
            t.SCROLL = "scroll",
            t.TOUCH_START = "touchstart",
            t.TOUCH_END = "touchend",
            t.TOUCH_MOVE = "touchmove",
            t.VISIBILITY_CHANGE = "visibilitychange",
            t.PAGE_SHOW = "pageshow",
            t.FREEZE = "freeze",
            t.RESUME = "resume",
            t.DOM_CONTENT_LOADED = "DOMContentLoaded",
            t.POINTER_DOWN = "pointerdown",
            t.POINTER_UP = "pointerup",
            t.POINTER_CANCEL = "pointercancel",
            t.HASH_CHANGE = "hashchange",
            t.PAGE_HIDE = "pagehide",
            t.MOUSE_DOWN = "mousedown",
            t.MOUSE_UP = "mouseup",
            t.MOUSE_MOVE = "mousemove",
            t.FOCUS = "focus",
            t.BLUR = "blur",
            t.CONTEXT_MENU = "contextmenu",
            t.RESIZE = "resize",
            t.CHANGE = "change",
            t.INPUT = "input",
            t.PLAY = "play",
            t.PAUSE = "pause",
            t.SECURITY_POLICY_VIOLATION = "securitypolicyviolation",
            t.SELECTION_CHANGE = "selectionchange",
            t.STORAGE = "storage"
        }(oe || (oe = {}));
        var be = "_dd_c"
          , Se = [];
        function we(t, e, n, r) {
            var i = function(t, e) {
                return "".concat(be, "_").concat(t, "_").concat(e)
            }(n, r);
            function o() {
                var t = localStorage.getItem(i);
                return null !== t ? JSON.parse(t) : {}
            }
            Se.push(ye(t, window, oe.STORAGE, (function(t) {
                var n = t.key;
                i === n && e.setContext(o())
            }
            ))),
            e.changeObservable.subscribe((function() {
                localStorage.setItem(i, JSON.stringify(e.getContext()))
            }
            )),
            e.setContext(J(o(), e.getContext()))
        }
        function Ce() {
            var t = ""
              , e = 0;
            return {
                isAsync: !1,
                get isEmpty() {
                    return !t
                },
                write: function(n, r) {
                    var i = x(n);
                    e += i,
                    t += n,
                    r && r(i)
                },
                finish: function(t) {
                    t(this.finishSync())
                },
                finishSync: function() {
                    var n = {
                        output: t,
                        outputBytesCount: e,
                        rawBytesCount: e,
                        pendingData: ""
                    };
                    return t = "",
                    e = 0,
                    n
                },
                estimateEncodedBytesCount: function(t) {
                    return t.length
                }
            }
        }
        function Ee(t) {
            var e = C({}, t);
            return ["id", "name", "email"].forEach((function(t) {
                t in e && (e[t] = String(e[t]))
            }
            )),
            e
        }
        function Te(t, e) {
            e.silentMultipleInit || s.error("".concat(t, " is already initialized."))
        }
        function _e() {
            var t = E().DatadogEventBridge;
            if (t)
                return {
                    getCapabilities: function() {
                        var e;
                        return JSON.parse((null === (e = t.getCapabilities) || void 0 === e ? void 0 : e.call(t)) || "[]")
                    },
                    getPrivacyLevel: function() {
                        var e;
                        return null === (e = t.getPrivacyLevel) || void 0 === e ? void 0 : e.call(t)
                    },
                    getAllowedWebViewHosts: function() {
                        return JSON.parse(t.getAllowedWebViewHosts())
                    },
                    send: function(e, n, r) {
                        var i = r ? {
                            id: r
                        } : void 0;
                        t.send(JSON.stringify({
                            eventType: e,
                            event: n,
                            view: i
                        }))
                    }
                }
        }
        function ke(t) {
            var e;
            void 0 === t && (t = null === (e = E().location) || void 0 === e ? void 0 : e.hostname);
            var n = _e();
            return !!n && n.getAllowedWebViewHosts().some((function(e) {
                return t === e || (n = t,
                r = ".".concat(e),
                n.slice(-r.length) === r);
                var n, r
            }
            ))
        }
        function xe(t) {
            return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, xe)
        }
        var Ae, Ie, Re = /([\w-]+)\s*=\s*([^;]+)/g;
        function Oe(t, e) {
            for (Re.lastIndex = 0; ; ) {
                var n = Re.exec(t);
                if (!n)
                    break;
                if (n[1] === e)
                    return n[2]
            }
        }
        function Ne(t, e, n) {
            void 0 === n && (n = "");
            var r = t.charCodeAt(e - 1)
              , i = r >= 55296 && r <= 56319 ? e + 1 : e;
            return t.length <= i ? t : "".concat(t.slice(0, i)).concat(n)
        }
        function Le(t, e, n, r) {
            var i = new Date;
            i.setTime(i.getTime() + n);
            var o = "expires=".concat(i.toUTCString())
              , a = r && r.crossSite ? "none" : "strict"
              , s = r && r.domain ? ";domain=".concat(r.domain) : ""
              , u = r && r.secure ? ";secure" : ""
              , c = r && r.partitioned ? ";partitioned" : "";
            document.cookie = "".concat(t, "=").concat(e, ";").concat(o, ";path=/;samesite=").concat(a).concat(s).concat(u).concat(c)
        }
        function Pe(t) {
            return Oe(document.cookie, t)
        }
        function Ue(t) {
            return Ae || (Ae = function(t) {
                var e = new Map;
                for (Re.lastIndex = 0; ; ) {
                    var n = Re.exec(t);
                    if (!n)
                        break;
                    e.set(n[1], n[2])
                }
                return e
            }(document.cookie)),
            Ae.get(t)
        }
        function Me(t, e) {
            Le(t, "", 0, e)
        }
        var De, Be = "datadog-synthetics-public-id", Ve = "datadog-synthetics-result-id", Fe = "datadog-synthetics-injects-rum";
        function qe() {
            return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || Ue(Fe))
        }
        function He() {
            return null != De ? De : De = function(t) {
                var e;
                void 0 === t && (t = window);
                var n = t.navigator.userAgent;
                if (t.chrome || /HeadlessChrome/.test(n))
                    return 1;
                if (0 === (null === (e = t.navigator.vendor) || void 0 === e ? void 0 : e.indexOf("Apple")) || /safari/i.test(n) && !/chrome|android/i.test(n))
                    return 2;
                if (t.document.documentMode)
                    return 0;
                return 3
            }()
        }
        var Ge = "_dd_s"
          , je = 4 * gt
          , ze = 15 * mt
          , Ye = /^([a-zA-Z]+)=([a-z0-9-]+)$/
          , We = "&"
          , Je = "1";
        function Ke() {
            return {
                isExpired: Je
            }
        }
        function Ze(t) {
            return V(t)
        }
        function $e(t) {
            return void 0 !== t.isExpired || !((void 0 === (e = t).created || Ct() - Number(e.created) < je) && (void 0 === e.expire || Ct() < Number(e.expire)));
            var e
        }
        function Xe(t) {
            t.expire = String(Ct() + ze)
        }
        function Qe(t) {
            return S(t).map((function(t) {
                var e = t[0]
                  , n = t[1];
                return "".concat(e, "=").concat(n)
            }
            )).join(We)
        }
        function tn(t) {
            var e = {};
            return function(t) {
                return !!t && (-1 !== t.indexOf(We) || Ye.test(t))
            }(t) && t.split(We).forEach((function(t) {
                var n = Ye.exec(t);
                if (null !== n) {
                    var r = n[1]
                      , i = n[2];
                    e[r] = i
                }
            }
            )),
            e
        }
        var en = "_dd"
          , nn = "_dd_r"
          , rn = "_dd_l"
          , on = "rum"
          , an = "logs";
        function sn(t) {
            if (!Ue(Ge)) {
                var e = Ue(en)
                  , n = Ue(nn)
                  , r = Ue(rn)
                  , i = {};
                e && (i.id = e),
                r && /^[01]$/.test(r) && (i[an] = r),
                n && /^[012]$/.test(n) && (i[on] = n),
                function(t) {
                    return !Ze(t)
                }(i) && (Xe(i),
                t.persistSession(i))
            }
        }
        function un(t) {
            var e = function(t) {
                var e = {};
                e.secure = !!t.useSecureSessionCookie || !!t.usePartitionedCrossSiteSessionCookie || !!t.useCrossSiteSessionCookie,
                e.crossSite = !!t.usePartitionedCrossSiteSessionCookie || !!t.useCrossSiteSessionCookie,
                e.partitioned = !!t.usePartitionedCrossSiteSessionCookie,
                t.trackSessionAcrossSubdomains && (e.domain = function() {
                    if (void 0 === Ie) {
                        for (var t = "dd_site_test_".concat(xe()), e = window.location.hostname.split("."), n = e.pop(); e.length && !Pe(t); )
                            n = "".concat(e.pop(), ".").concat(n),
                            Le(t, "test", pt, {
                                domain: n
                            });
                        Me(t, {
                            domain: n
                        }),
                        Ie = n
                    }
                    return Ie
                }());
                return e
            }(t);
            return function(t) {
                if (void 0 === document.cookie || null === document.cookie)
                    return !1;
                try {
                    var e = "dd_cookie_test_".concat(xe())
                      , n = "test";
                    Le(e, n, mt, t);
                    var r = Pe(e) === n;
                    return Me(e, t),
                    r
                } catch (t) {
                    return s.error(t),
                    !1
                }
            }(e) ? {
                type: "Cookie",
                cookieOptions: e
            } : void 0
        }
        function cn(t) {
            var e, n = {
                isLockEnabled: 1 === He(),
                persistSession: (e = t,
                function(t) {
                    Le(Ge, Qe(t), ze, e)
                }
                ),
                retrieveSession: fn,
                expireSession: function() {
                    return function(t) {
                        Le(Ge, Qe(Ke()), je, t)
                    }(t)
                }
            };
            return sn(n),
            n
        }
        function fn() {
            return tn(Pe(Ge))
        }
        var ln = "_dd_test_";
        function dn(t) {
            localStorage.setItem(Ge, Qe(t))
        }
        function vn() {
            return tn(localStorage.getItem(Ge))
        }
        function pn() {
            dn(Ke())
        }
        var mn, gn = 10, yn = 100, hn = [];
        function bn(t, e, n) {
            var r;
            void 0 === n && (n = 0);
            var i = e.isLockEnabled
              , o = e.persistSession
              , a = e.expireSession
              , s = function(t) {
                return o(C({}, t, {
                    lock: c
                }))
            }
              , u = function() {
                var t = e.retrieveSession()
                  , n = t.lock;
                return t.lock && delete t.lock,
                {
                    session: t,
                    lock: n
                }
            };
            if (mn || (mn = t),
            t === mn)
                if (i && n >= yn)
                    wn(e);
                else {
                    var c, f = u();
                    if (i) {
                        if (f.lock)
                            return void Sn(t, e, n);
                        if (c = xe(),
                        s(f.session),
                        (f = u()).lock !== c)
                            return void Sn(t, e, n)
                    }
                    var l = t.process(f.session);
                    if (i && (f = u()).lock !== c)
                        Sn(t, e, n);
                    else {
                        if (l && ($e(l) ? a() : (Xe(l),
                        i ? s(l) : o(l))),
                        i && (!l || !$e(l))) {
                            if ((f = u()).lock !== c)
                                return void Sn(t, e, n);
                            o(f.session),
                            l = f.session
                        }
                        null === (r = t.after) || void 0 === r || r.call(t, l || f.session),
                        wn(e)
                    }
                }
            else
                hn.push(t)
        }
        function Sn(t, e, n) {
            I((function() {
                bn(t, e, n + 1)
            }
            ), gn)
        }
        function wn(t) {
            mn = void 0;
            var e = hn.shift();
            e && bn(e, t)
        }
        var Cn = pt;
        function En(t) {
            var e = un(t);
            return !e && t.allowFallbackToLocalStorage && (e = function() {
                try {
                    var t = xe()
                      , e = "".concat(ln).concat(t);
                    localStorage.setItem(e, t);
                    var n = localStorage.getItem(e);
                    return localStorage.removeItem(e),
                    t === n ? {
                        type: "LocalStorage"
                    } : void 0
                } catch (t) {
                    return
                }
            }()),
            e
        }
        function Tn(t, e, n) {
            var r, i = new et, o = new et, a = "Cookie" === t.type ? cn(t.cookieOptions) : {
                isLockEnabled: !1,
                persistSession: dn,
                retrieveSession: vn,
                expireSession: pn
            }, s = a.expireSession, u = O((function() {
                bn({
                    process: function(t) {
                        return $e(t) ? Ke() : void 0
                    },
                    after: d
                }, a)
            }
            ), Cn);
            v();
            var c = L((function() {
                var t;
                bn({
                    process: function(r) {
                        if (!Ze(r)) {
                            var i = d(r);
                            return t = function(t) {
                                if (Ze(t))
                                    return !1;
                                var r = n(t[e])
                                  , i = r.trackingType
                                  , o = r.isTracked;
                                t[e] = i,
                                delete t.isExpired,
                                o && !t.id && (t.id = xe(),
                                t.created = String(Ct()));
                                return o
                            }(i),
                            i
                        }
                    },
                    after: function(e) {
                        t && !p() && function(t) {
                            r = t,
                            i.notify()
                        }(e),
                        r = e
                    }
                }, a)
            }
            ), Cn)
              , f = c.throttled
              , l = c.cancel;
            function d(t) {
                return $e(t) && (t = Ke()),
                p() && (!function(t) {
                    return r.id !== t.id || r[e] !== t[e]
                }(t) ? r = t : (r = Ke(),
                o.notify())),
                t
            }
            function v() {
                bn({
                    process: function(t) {
                        if (Ze(t))
                            return Ke()
                    },
                    after: function(t) {
                        r = t
                    }
                }, a)
            }
            function p() {
                return void 0 !== r[e]
            }
            return {
                expandOrRenewSession: f,
                expandSession: function() {
                    bn({
                        process: function(t) {
                            return p() ? d(t) : void 0
                        }
                    }, a)
                },
                getSession: function() {
                    return r
                },
                renewObservable: i,
                expireObservable: o,
                restartSession: v,
                expire: function() {
                    l(),
                    s(),
                    d(Ke())
                },
                stop: function() {
                    N(u)
                }
            }
        }
        function _n(t) {
            return kn(t, location.href).href
        }
        function kn(t, e) {
            var n = function() {
                if (void 0 === xn)
                    try {
                        var t = new An("http://test/path");
                        xn = "http://test/path" === t.href
                    } catch (t) {
                        xn = !1
                    }
                return xn ? An : void 0
            }();
            if (n)
                try {
                    return void 0 !== e ? new n(t,e) : new n(t)
                } catch (n) {
                    throw new Error("Failed to construct URL: ".concat(String(n), " ").concat(U({
                        url: t,
                        base: e
                    })))
                }
            if (void 0 === e && !/:/.test(t))
                throw new Error("Invalid URL: '".concat(t, "'"));
            var r = document
              , i = r.createElement("a");
            if (void 0 !== e) {
                var o = (r = document.implementation.createHTMLDocument("")).createElement("base");
                o.href = e,
                r.head.appendChild(o),
                r.body.appendChild(i)
            }
            return i.href = t,
            i
        }
        var xn, An = URL;
        function In(t, e, n) {
            var r = function(t, e) {
                var n = "/api/v2/".concat(e)
                  , r = t.proxy;
                if ("string" == typeof r) {
                    var i = _n(r);
                    return function(t) {
                        return "".concat(i, "?ddforward=").concat(encodeURIComponent("".concat(n, "?").concat(t)))
                    }
                }
                if ("function" == typeof r)
                    return function(t) {
                        return r({
                            path: n,
                            parameters: t
                        })
                    }
                    ;
                var o = function(t, e) {
                    var n = e.site
                      , r = void 0 === n ? Qt : n
                      , i = e.internalAnalyticsSubdomain;
                    if ("logs" === t && e.usePciIntake && r === Qt)
                        return ee;
                    if (i && r === Qt)
                        return "".concat(i, ".").concat(Qt);
                    if (r === Xt)
                        return "http-intake.logs.".concat(r);
                    var o = r.split(".")
                      , a = o.pop();
                    return "browser-intake-".concat(o.join("-"), ".").concat(a)
                }(e, t);
                return function(t) {
                    return "https://".concat(o).concat(n, "?").concat(t)
                }
            }(t, e);
            return {
                build: function(i, o) {
                    var a = function(t, e, n, r, i) {
                        var o = t.clientToken
                          , a = t.internalAnalyticsSubdomain
                          , s = i.retry
                          , u = i.flushReason
                          , c = i.encoding
                          , f = ["sdk_version:".concat("5.18.0"), "api:".concat(r)].concat(n);
                        u && st(it.COLLECT_FLUSH_REASON) && f.push("flush_reason:".concat(u));
                        s && f.push("retry_count:".concat(s.count), "retry_after:".concat(s.lastFailureStatus));
                        var l = ["ddsource=browser", "ddtags=".concat(encodeURIComponent(f.join(","))), "dd-api-key=".concat(o), "dd-evp-origin-version=".concat(encodeURIComponent("5.18.0")), "dd-evp-origin=browser", "dd-request-id=".concat(xe())];
                        c && l.push("dd-evp-encoding=".concat(c));
                        "rum" === e && l.push("batch_time=".concat(Et()));
                        a && l.reverse();
                        return l.join("&")
                    }(t, e, n, i, o);
                    return r(a)
                },
                urlPrefix: r(""),
                trackType: e
            }
        }
        var Rn = 200;
        var On = /[^a-z0-9_:./-]/;
        function Nn(t, e) {
            var n = Rn - t.length - 1;
            (e.length > n || On.test(e)) && s.warn("".concat(t, " value doesn't meet tag requirements and will be sanitized"));
            var r = e.replace(/,/g, "_");
            return "".concat(t, ":").concat(r)
        }
        function Ln(t) {
            var e = t.site || Qt
              , n = function(t) {
                var e = t.env
                  , n = t.service
                  , r = t.version
                  , i = t.datacenter
                  , o = [];
                return e && o.push(Nn("env", e)),
                n && o.push(Nn("service", n)),
                r && o.push(Nn("version", r)),
                i && o.push(Nn("datacenter", i)),
                o
            }(t)
              , r = function(t, e) {
                return {
                    logsEndpointBuilder: In(t, "logs", e),
                    rumEndpointBuilder: In(t, "rum", e),
                    sessionReplayEndpointBuilder: In(t, "replay", e)
                }
            }(t, n)
              , i = function(t, e) {
                var n = b(t).map((function(t) {
                    return t.urlPrefix
                }
                ));
                e === Qt && n.push("https://".concat(ee, "/"));
                return n
            }(r, e)
              , o = function(t, e, n) {
                if (!t.replica)
                    return;
                var r = C({}, t, {
                    site: Qt,
                    clientToken: t.replica.clientToken
                })
                  , i = {
                    logsEndpointBuilder: In(r, "logs", n),
                    rumEndpointBuilder: In(r, "rum", n)
                };
                return e.push.apply(e, b(i).map((function(t) {
                    return t.urlPrefix
                }
                ))),
                C({
                    applicationId: t.replica.applicationId
                }, i)
            }(t, i, n);
            return C({
                isIntakeUrl: function(t) {
                    return i.some((function(e) {
                        return 0 === t.indexOf(e)
                    }
                    ))
                },
                replica: o,
                site: e
            }, r)
        }
        var Pn = "https://docs.datadoghq.com/getting_started/site/"
          , Un = {
            ALLOW: "allow",
            MASK: "mask",
            MASK_USER_INPUT: "mask-user-input"
        }
          , Mn = {
            ALL: "all",
            SAMPLED: "sampled"
        };
        function Dn(t, e) {
            return void 0 === t || "string" == typeof t || (s.error("".concat(e, " must be defined as a string")),
            !1)
        }
        function Bn(t) {
            var e, n, r, i, o;
            if (t && t.clientToken)
                if (void 0 === t.sessionSampleRate || lt(t.sessionSampleRate))
                    if (void 0 === t.telemetrySampleRate || lt(t.telemetrySampleRate))
                        if (void 0 === t.telemetryConfigurationSampleRate || lt(t.telemetryConfigurationSampleRate))
                            if (void 0 === t.telemetryUsageSampleRate || lt(t.telemetryUsageSampleRate)) {
                                if (Dn(t.version, "Version") && Dn(t.env, "Env") && Dn(t.service, "Service"))
                                    if (void 0 === t.trackingConsent || B(ot, t.trackingConsent)) {
                                        var a;
                                        if (!t.site || (a = t.site,
                                        /(datadog|ddog|datad0g|dd0g)/.test(a)))
                                            return Array.isArray(t.enableExperimentalFeatures) && t.enableExperimentalFeatures.filter((function(t) {
                                                return B(it, t)
                                            }
                                            )).forEach((function(t) {
                                                at.add(t)
                                            }
                                            )),
                                            C({
                                                beforeSend: t.beforeSend && u(t.beforeSend, "beforeSend threw an error:"),
                                                sessionStoreStrategyType: En(t),
                                                sessionSampleRate: null !== (e = t.sessionSampleRate) && void 0 !== e ? e : 100,
                                                telemetrySampleRate: null !== (n = t.telemetrySampleRate) && void 0 !== n ? n : 20,
                                                telemetryConfigurationSampleRate: null !== (r = t.telemetryConfigurationSampleRate) && void 0 !== r ? r : 5,
                                                telemetryUsageSampleRate: null !== (i = t.telemetryUsageSampleRate) && void 0 !== i ? i : 5,
                                                service: t.service,
                                                silentMultipleInit: !!t.silentMultipleInit,
                                                allowUntrustedEvents: !!t.allowUntrustedEvents,
                                                trackingConsent: null !== (o = t.trackingConsent) && void 0 !== o ? o : ot.GRANTED,
                                                batchBytesLimit: 16 * T,
                                                eventRateLimiterThreshold: 3e3,
                                                maxTelemetryEventsPerPage: 15,
                                                flushTimeout: 30 * pt,
                                                batchMessagesLimit: 50,
                                                messageBytesLimit: 256 * T
                                            }, Ln(t));
                                        s.error("Site should be a valid Datadog site. Learn more here: ".concat(Pn, "."))
                                    } else
                                        s.error('Tracking Consent should be either "granted" or "not-granted"')
                            } else
                                s.error("Telemetry Usage Sample Rate should be a number between 0 and 100");
                        else
                            s.error("Telemetry Configuration Sample Rate should be a number between 0 and 100");
                    else
                        s.error("Telemetry Sample Rate should be a number between 0 and 100");
                else
                    s.error("Session Sample Rate should be a number between 0 and 100");
            else
                s.error("Client Token is not configured, we will not send any data.")
        }
        function Vn(t) {
            var e = z(t);
            return "string" === e || "function" === e || t instanceof RegExp
        }
        function Fn(t, e, n) {
            return void 0 === n && (n = !1),
            t.some((function(t) {
                try {
                    if ("function" == typeof t)
                        return t(e);
                    if (t instanceof RegExp)
                        return t.test(e);
                    if ("string" == typeof t)
                        return n ? w(e, t) : t === e
                } catch (t) {
                    s.error(t)
                }
                return !1
            }
            ))
        }
        function qn(t) {
            0 !== t.status || t.isAborted || (t.traceId = void 0,
            t.spanId = void 0,
            t.traceSampled = void 0)
        }
        function Hn(t, e, n, r) {
            if (void 0 !== Gn() && n.findTrackedSession()) {
                var i, o, a, s, u, c = h(t.allowedTracingUrls, (function(t) {
                    return Fn([t.match], e.url, !0)
                }
                ));
                if (c)
                    if (e.traceSampled = !dt(t.traceSampleRate) || ct(t.traceSampleRate),
                    e.traceSampled || t.traceContextInjection === Mn.ALL)
                        e.traceId = new jn,
                        e.spanId = new jn,
                        r((i = e.traceId,
                        o = e.spanId,
                        a = e.traceSampled,
                        s = c.propagatorTypes,
                        u = {},
                        s.forEach((function(t) {
                            switch (t) {
                            case "datadog":
                                C(u, {
                                    "x-datadog-origin": "rum",
                                    "x-datadog-parent-id": o.toDecimalString(),
                                    "x-datadog-sampling-priority": a ? "1" : "0",
                                    "x-datadog-trace-id": i.toDecimalString()
                                });
                                break;
                            case "tracecontext":
                                C(u, {
                                    traceparent: "00-0000000000000000".concat(i.toPaddedHexadecimalString(), "-").concat(o.toPaddedHexadecimalString(), "-0").concat(a ? "1" : "0")
                                });
                                break;
                            case "b3":
                                C(u, {
                                    b3: "".concat(i.toPaddedHexadecimalString(), "-").concat(o.toPaddedHexadecimalString(), "-").concat(a ? "1" : "0")
                                });
                                break;
                            case "b3multi":
                                C(u, {
                                    "X-B3-TraceId": i.toPaddedHexadecimalString(),
                                    "X-B3-SpanId": o.toPaddedHexadecimalString(),
                                    "X-B3-Sampled": a ? "1" : "0"
                                })
                            }
                        }
                        )),
                        u))
            }
        }
        function Gn() {
            return window.crypto || window.msCrypto
        }
        var jn = function() {
            function t() {
                this.buffer = new Uint8Array(8),
                Gn().getRandomValues(this.buffer),
                this.buffer[0] = 127 & this.buffer[0]
            }
            return t.prototype.toString = function(t) {
                var e = this.readInt32(0)
                  , n = this.readInt32(4)
                  , r = "";
                do {
                    var i = e % t * 4294967296 + n;
                    e = Math.floor(e / t),
                    n = Math.floor(i / t),
                    r = (i % t).toString(t) + r
                } while (e || n);
                return r
            }
            ,
            t.prototype.toDecimalString = function() {
                return this.toString(10)
            }
            ,
            t.prototype.toPaddedHexadecimalString = function() {
                var t = this.toString(16);
                return Array(17 - t.length).join("0") + t
            }
            ,
            t.prototype.readInt32 = function(t) {
                return 16777216 * this.buffer[t] + (this.buffer[t + 1] << 16) + (this.buffer[t + 2] << 8) + this.buffer[t + 3]
            }
            ,
            t
        }()
          , zn = ["tracecontext", "datadog"];
        function Yn(t) {
            var e, n;
            if (t.applicationId)
                if (void 0 === t.sessionReplaySampleRate || lt(t.sessionReplaySampleRate))
                    if (void 0 === t.traceSampleRate || lt(t.traceSampleRate))
                        if (void 0 === t.excludedActivityUrls || Array.isArray(t.excludedActivityUrls)) {
                            var r = function(t) {
                                if (void 0 !== t.allowedTracingUrls) {
                                    if (!Array.isArray(t.allowedTracingUrls))
                                        return void s.error("Allowed Tracing URLs should be an array");
                                    if (0 !== t.allowedTracingUrls.length && void 0 === t.service)
                                        return void s.error("Service needs to be configured when tracing is enabled");
                                    var e = [];
                                    return t.allowedTracingUrls.forEach((function(t) {
                                        var n;
                                        Vn(t) ? e.push({
                                            match: t,
                                            propagatorTypes: zn
                                        }) : "object" === z(n = t) && Vn(n.match) && Array.isArray(n.propagatorTypes) ? e.push(t) : s.warn("Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter", t)
                                    }
                                    )),
                                    e
                                }
                                return []
                            }(t);
                            if (r) {
                                var i = Bn(t);
                                if (i)
                                    return C({
                                        applicationId: t.applicationId,
                                        version: t.version,
                                        actionNameAttribute: t.actionNameAttribute,
                                        sessionReplaySampleRate: null !== (e = t.sessionReplaySampleRate) && void 0 !== e ? e : 0,
                                        startSessionReplayRecordingManually: !!t.startSessionReplayRecordingManually,
                                        traceSampleRate: t.traceSampleRate,
                                        allowedTracingUrls: r,
                                        excludedActivityUrls: null !== (n = t.excludedActivityUrls) && void 0 !== n ? n : [],
                                        workerUrl: t.workerUrl,
                                        compressIntakeRequests: !!t.compressIntakeRequests,
                                        trackUserInteractions: !!t.trackUserInteractions,
                                        trackViewsManually: !!t.trackViewsManually,
                                        trackResources: !!t.trackResources,
                                        trackLongTasks: !!t.trackLongTasks,
                                        subdomain: t.subdomain,
                                        defaultPrivacyLevel: B(Un, t.defaultPrivacyLevel) ? t.defaultPrivacyLevel : Un.MASK,
                                        customerDataTelemetrySampleRate: 1,
                                        traceContextInjection: B(Mn, t.traceContextInjection) ? t.traceContextInjection : Mn.ALL
                                    }, i)
                            }
                        } else
                            s.error("Excluded Activity Urls should be an array");
                    else
                        s.error("Trace Sample Rate should be a number between 0 and 100");
                else
                    s.error("Session Replay Sample Rate should be a number between 0 and 100");
            else
                s.error("Application ID is not configured, no RUM data will be collected.")
        }
        function Wn(t) {
            var e = new Set;
            return Array.isArray(t.allowedTracingUrls) && t.allowedTracingUrls.length > 0 && t.allowedTracingUrls.forEach((function(t) {
                Vn(t) ? zn.forEach((function(t) {
                    return e.add(t)
                }
                )) : "object" === z(t) && Array.isArray(t.propagatorTypes) && t.propagatorTypes.forEach((function(t) {
                    return e.add(t)
                }
                ))
            }
            )),
            y(e)
        }
        function Jn(t, e, n, r) {
            var i, o, a, u, c = t.ignoreInitIfSyntheticsWillInjectRum, f = t.startDeflateWorker, l = new ae, d = n.observable.subscribe(v);
            function v() {
                if (a && u && n.isGranted()) {
                    var t;
                    if (d.unsubscribe(),
                    u.trackViewsManually) {
                        if (!i)
                            return;
                        l.remove(i.callback),
                        t = i.options
                    }
                    var e = r(a, u, o, t);
                    l.drain(e)
                }
            }
            return {
                init: function(t) {
                    if (t) {
                        var e = ke();
                        if (e && (t = function(t) {
                            var e, n;
                            return C({}, t, {
                                applicationId: "00000000-aaaa-0000-aaaa-000000000000",
                                clientToken: "empty",
                                sessionSampleRate: 100,
                                defaultPrivacyLevel: null !== (e = t.defaultPrivacyLevel) && void 0 !== e ? e : null === (n = _e()) || void 0 === n ? void 0 : n.getPrivacyLevel()
                            })
                        }(t)),
                        a = t,
                        u)
                            Te("DD_RUM", t);
                        else if (!c || !qe()) {
                            var r = Yn(t);
                            r && (e || r.sessionStoreStrategyType ? r.compressIntakeRequests && !e && f && !(o = f(r, "Datadog RUM", P)) || (u = r,
                            n.tryToInit(r.trackingConsent),
                            v()) : s.warn("No storage available for session. We will not send any data."))
                        }
                    } else
                        s.error("Missing configuration")
                },
                get initConfiguration() {
                    return a
                },
                getInternalContext: P,
                stopSession: P,
                addTiming: function(t, e) {
                    void 0 === e && (e = Et()),
                    l.add((function(n) {
                        return n.addTiming(t, e)
                    }
                    ))
                },
                startView: function(t, e) {
                    void 0 === e && (e = _t());
                    var n = function(n) {
                        n.startView(t, e)
                    };
                    l.add(n),
                    i || (i = {
                        options: t,
                        callback: n
                    },
                    v())
                },
                addAction: function(t, n) {
                    void 0 === n && (n = e()),
                    l.add((function(e) {
                        return e.addAction(t, n)
                    }
                    ))
                },
                addError: function(t, n) {
                    void 0 === n && (n = e()),
                    l.add((function(e) {
                        return e.addError(t, n)
                    }
                    ))
                },
                addFeatureFlagEvaluation: function(t, e) {
                    l.add((function(n) {
                        return n.addFeatureFlagEvaluation(t, e)
                    }
                    ))
                },
                startDurationVital: function(t) {
                    l.add((function(e) {
                        return e.startDurationVital(t)
                    }
                    ))
                },
                stopDurationVital: function(t) {
                    l.add((function(e) {
                        return e.stopDurationVital(t)
                    }
                    ))
                }
            }
        }
        var Kn = {
            HIDDEN: "visibility_hidden",
            UNLOADING: "before_unload",
            PAGEHIDE: "page_hide",
            FROZEN: "page_frozen"
        };
        function Zn() {
            var t = function() {
                var t, e = window;
                if (e.Zone && (t = A(e, "MutationObserver"),
                e.MutationObserver && t === e.MutationObserver)) {
                    var n = A(new e.MutationObserver(P), "originalInstance");
                    t = n && n.constructor
                }
                t || (t = e.MutationObserver);
                return t
            }();
            return new et((function(e) {
                if (t) {
                    var n = new t(v((function() {
                        return e.notify()
                    }
                    )));
                    return n.observe(document, {
                        attributes: !0,
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }),
                    function() {
                        return n.disconnect()
                    }
                }
            }
            ))
        }
        function $n(t, e, n) {
            if (document.readyState === e || "complete" === document.readyState)
                n();
            else {
                var r = "complete" === e ? oe.LOAD : oe.DOM_CONTENT_LOADED;
                ye(t, window, r, n, {
                    once: !0
                })
            }
        }
        var Xn = "initial_document"
          , Qn = [["document", function(t) {
            return Xn === t
        }
        ], ["xhr", function(t) {
            return "xmlhttprequest" === t
        }
        ], ["fetch", function(t) {
            return "fetch" === t
        }
        ], ["beacon", function(t) {
            return "beacon" === t
        }
        ], ["css", function(t, e) {
            return /\.css$/i.test(e)
        }
        ], ["js", function(t, e) {
            return /\.js$/i.test(e)
        }
        ], ["image", function(t, e) {
            return g(["image", "img", "icon"], t) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
        }
        ], ["font", function(t, e) {
            return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)
        }
        ], ["media", function(t, e) {
            return g(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e)
        }
        ]];
        function tr(t) {
            var e = t.name;
            if (!function(t) {
                try {
                    return !!kn(t)
                } catch (t) {
                    return !1
                }
            }(e))
                return ve('Failed to construct URL for "'.concat(t.name, '"')),
                "other";
            for (var n = function(t) {
                var e = kn(t).pathname;
                return "/" === e[0] ? e : "/".concat(e)
            }(e), r = 0, i = Qn; r < i.length; r++) {
                var o = i[r]
                  , a = o[0];
                if ((0,
                o[1])(t.initiatorType, n))
                    return a
            }
            return "other"
        }
        function er() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            for (var n = 1; n < t.length; n += 1)
                if (t[n - 1] > t[n])
                    return !1;
            return !0
        }
        function nr(t) {
            var e = rr(t);
            if (e) {
                var n = e.startTime
                  , r = e.fetchStart
                  , i = e.redirectStart
                  , o = e.redirectEnd
                  , a = e.domainLookupStart
                  , s = e.domainLookupEnd
                  , u = e.connectStart
                  , c = e.secureConnectionStart
                  , f = e.connectEnd
                  , l = e.requestStart
                  , d = e.responseStart
                  , v = {
                    download: ir(n, d, e.responseEnd),
                    first_byte: ir(n, l, d)
                };
                return r < f && (v.connect = ir(n, u, f),
                u <= c && c <= f && (v.ssl = ir(n, c, f))),
                r < s && (v.dns = ir(n, a, s)),
                n < o && (v.redirect = ir(n, i, o)),
                v
            }
        }
        function rr(t) {
            if (st(it.TOLERANT_RESOURCE_TIMINGS))
                return t;
            var e = er(t.startTime, t.fetchStart, t.domainLookupStart, t.domainLookupEnd, t.connectStart, t.connectEnd, t.requestStart, t.responseStart, t.responseEnd)
              , n = !function(t) {
                return t.redirectEnd > t.startTime
            }(t) || er(t.startTime, t.redirectStart, t.redirectEnd, t.fetchStart);
            return e && n ? t : void 0
        }
        function ir(t, e, n) {
            if (t <= e && e <= n)
                return {
                    duration: wt(xt(e, n)),
                    start: wt(xt(t, e))
                }
        }
        function or(t) {
            if (t.startTime < t.responseStart) {
                var e = t.encodedBodySize
                  , n = t.decodedBodySize;
                return {
                    size: n,
                    encoded_body_size: e,
                    decoded_body_size: n,
                    transfer_size: t.transferSize
                }
            }
            return {
                size: void 0,
                encoded_body_size: void 0,
                decoded_body_size: void 0,
                transfer_size: void 0
            }
        }
        function ar(t, e) {
            return e && !t.isIntakeUrl(e)
        }
        var sr = /data:(.+)?(;base64)?,/g
          , ur = 24e3;
        function cr(t) {
            return !(t.length <= ur) && ("data:" === t.substring(0, 5) && (t = t.substring(0, ur),
            !0))
        }
        function fr(t) {
            return "".concat(t.match(sr)[0], "[...]")
        }
        function lr(t) {
            return t.nodeType === Node.TEXT_NODE
        }
        function dr(t) {
            return t.nodeType === Node.ELEMENT_NODE
        }
        var vr, pr = 2 * mt;
        function mr(t) {
            var e = function(t) {
                var e = t.querySelector("meta[name=dd-trace-id]")
                  , n = t.querySelector("meta[name=dd-trace-time]");
                return gr(e && e.content, n && n.content)
            }(t) || function(t) {
                var e = function(t) {
                    for (var e = 0; e < t.childNodes.length; e += 1) {
                        if (n = yr(t.childNodes[e]))
                            return n
                    }
                    if (t.body)
                        for (e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
                            var n, r = t.body.childNodes[e];
                            if (n = yr(r))
                                return n;
                            if (!lr(r))
                                break
                        }
                }(t);
                if (!e)
                    return;
                return gr(Oe(e, "trace-id"), Oe(e, "trace-time"))
            }(t);
            if (e && !(e.traceTime <= Ct() - pr))
                return e.traceId
        }
        function gr(t, e) {
            var n = e && Number(e);
            if (t && n)
                return {
                    traceId: t,
                    traceTime: n
                }
        }
        function yr(t) {
            if (t && function(t) {
                return t.nodeType === Node.COMMENT_NODE
            }(t)) {
                var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
                if (e)
                    return e[1]
            }
        }
        function hr() {
            return void 0 !== window.performance && "getEntries"in performance
        }
        function br(t) {
            return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)
        }
        function Sr(t, e) {
            var n = [];
            if (function(t, e) {
                $n(t, "interactive", (function() {
                    var t, n = {
                        entryType: vr.RESOURCE,
                        initiatorType: Xn,
                        traceId: mr(document),
                        toJSON: function() {
                            return C({}, t, {
                                toJSON: void 0
                            })
                        }
                    };
                    if (br(vr.NAVIGATION) && performance.getEntriesByType(vr.NAVIGATION).length > 0) {
                        var r = performance.getEntriesByType(vr.NAVIGATION)[0];
                        t = C(r.toJSON(), n)
                    } else {
                        var i = wr();
                        t = C(i, {
                            decodedBodySize: 0,
                            encodedBodySize: 0,
                            transferSize: 0,
                            renderBlockingStatus: "non-blocking",
                            duration: i.responseEnd,
                            name: window.location.href,
                            startTime: 0
                        }, n)
                    }
                    e(t)
                }
                ))
            }(e, (function(n) {
                Cr(t, e, [n])
            }
            )),
            hr()) {
                var r = performance.getEntries();
                I((function() {
                    return Cr(t, e, r)
                }
                ))
            }
            if (window.PerformanceObserver) {
                var i = v((function(n) {
                    return Cr(t, e, n.getEntries())
                }
                ))
                  , o = [vr.RESOURCE, vr.NAVIGATION, vr.LONG_TASK, vr.PAINT]
                  , a = [vr.LARGEST_CONTENTFUL_PAINT, vr.FIRST_INPUT, vr.LAYOUT_SHIFT, vr.EVENT];
                try {
                    a.forEach((function(t) {
                        var e = new window.PerformanceObserver(i);
                        e.observe({
                            type: t,
                            buffered: !0,
                            durationThreshold: 40
                        }),
                        n.push((function() {
                            return e.disconnect()
                        }
                        ))
                    }
                    ))
                } catch (t) {
                    o.push.apply(o, a)
                }
                var s = new PerformanceObserver(i);
                if (s.observe({
                    entryTypes: o
                }),
                n.push((function() {
                    return s.disconnect()
                }
                )),
                hr() && "addEventListener"in performance) {
                    var u = ye(e, performance, "resourcetimingbufferfull", (function() {
                        performance.clearResourceTimings()
                    }
                    )).stop;
                    n.push(u)
                }
            }
            if (br(vr.NAVIGATION) || function(t, e) {
                function n() {
                    e(C(wr(), {
                        entryType: vr.NAVIGATION
                    }))
                }
                $n(t, "complete", (function() {
                    I(n)
                }
                ))
            }(e, (function(n) {
                Cr(t, e, [n])
            }
            )),
            !br(vr.FIRST_INPUT)) {
                var c = function(t, e) {
                    var n = Ct()
                      , r = !1
                      , i = he(t, window, [oe.CLICK, oe.MOUSE_DOWN, oe.KEY_DOWN, oe.TOUCH_START, oe.POINTER_DOWN], (function(e) {
                        if (e.cancelable) {
                            var n = {
                                entryType: vr.FIRST_INPUT,
                                processingStart: Tt(),
                                processingEnd: Tt(),
                                startTime: e.timeStamp,
                                duration: 0,
                                name: ""
                            };
                            e.type === oe.POINTER_DOWN ? o(t, n) : a(n)
                        }
                    }
                    ), {
                        passive: !0,
                        capture: !0
                    }).stop;
                    return {
                        stop: i
                    };
                    function o(t, e) {
                        he(t, window, [oe.POINTER_UP, oe.POINTER_CANCEL], (function(t) {
                            t.type === oe.POINTER_UP && a(e)
                        }
                        ), {
                            once: !0
                        })
                    }
                    function a(t) {
                        if (!r) {
                            r = !0,
                            i();
                            var o = t.processingStart - t.startTime;
                            o >= 0 && o < Ct() - n && e(t)
                        }
                    }
                }(e, (function(n) {
                    Cr(t, e, [n])
                }
                )).stop;
                n.push(c)
            }
            return {
                stop: function() {
                    n.forEach((function(t) {
                        return t()
                    }
                    ))
                }
            }
        }
        function wr() {
            var t = {}
              , e = performance.timing;
            for (var n in e)
                if (dt(e[n])) {
                    var r = n
                      , i = e[r];
                    t[r] = 0 === i ? 0 : It(i)
                }
            return t
        }
        function Cr(t, e, n) {
            var r = n.filter((function(t) {
                return B(vr, t.entryType)
            }
            )).filter((function(t) {
                return !function(t) {
                    return t.entryType === vr.NAVIGATION && t.loadEventEnd <= 0
                }(t) && !function(t, e) {
                    return e.entryType === vr.RESOURCE && !ar(t, e.name)
                }(e, t)
            }
            ));
            r.length && t.notify(0, r)
        }
        !function(t) {
            t.EVENT = "event",
            t.FIRST_INPUT = "first-input",
            t.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint",
            t.LAYOUT_SHIFT = "layout-shift",
            t.LONG_TASK = "longtask",
            t.NAVIGATION = "navigation",
            t.PAINT = "paint",
            t.RESOURCE = "resource"
        }(vr || (vr = {}));
        var Er = {
            AGENT: "agent",
            CONSOLE: "console",
            CUSTOM: "custom",
            LOGGER: "logger",
            NETWORK: "network",
            SOURCE: "source",
            REPORT: "report"
        };
        function Tr(t, e, n) {
            var r = 0
              , i = !1;
            return {
                isLimitReached: function() {
                    if (0 === r && I((function() {
                        r = 0
                    }
                    ), mt),
                    (r += 1) <= e || i)
                        return i = !1,
                        !1;
                    if (r === e + 1) {
                        i = !0;
                        try {
                            n({
                                message: "Reached max number of ".concat(t, "s by minute: ").concat(e),
                                source: Er.AGENT,
                                startClocks: _t()
                            })
                        } finally {
                            i = !1
                        }
                    }
                    return !0
                }
            }
        }
        function _r() {
            var t, e = "string" == typeof (t = window._DATADOG_SYNTHETICS_PUBLIC_ID || Ue(Be)) ? t : void 0, n = function() {
                var t = window._DATADOG_SYNTHETICS_RESULT_ID || Ue(Ve);
                return "string" == typeof t ? t : void 0
            }();
            if (e && n)
                return {
                    test_id: e,
                    result_id: n,
                    injected: qe()
                }
        }
        function kr(t, e, n) {
            var r = W(t)
              , i = n(r);
            return S(e).forEach((function(e) {
                var n = e[0]
                  , i = e[1]
                  , o = function(t, e) {
                    for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
                        var o = i[r];
                        if (!Ir(n, o))
                            return;
                        n = n[o]
                    }
                    return n
                }(r, n)
                  , a = z(o);
                a === i ? xr(t, n, X(o)) : "object" !== i || "undefined" !== a && "null" !== a || xr(t, n, {})
            }
            )),
            i
        }
        function xr(t, e, n) {
            for (var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
                var a = i[o];
                if (!Ar(r))
                    return;
                o !== i.length - 1 ? r = r[a] : r[a] = n
            }
        }
        function Ar(t) {
            return "object" === z(t)
        }
        function Ir(t, e) {
            return Ar(t) && Object.prototype.hasOwnProperty.call(t, e)
        }
        var Rr, Or = {
            "view.name": "string",
            "view.url": "string",
            "view.referrer": "string"
        }, Nr = {
            context: "object"
        };
        function Lr(t, e, n, r, i, o, a, u, c, f) {
            var l, d;
            (l = {}).view = Or,
            l.error = C({
                "error.message": "string",
                "error.stack": "string",
                "error.resource.url": "string",
                "error.fingerprint": "string"
            }, Nr, Or),
            l.resource = C({
                "resource.url": "string"
            }, st(it.WRITABLE_RESOURCE_GRAPHQL) && {
                "resource.graphql": "object"
            }, Nr, Or),
            l.action = C({
                "action.target.name": "string"
            }, Nr, Or),
            l.long_task = C({}, Nr, Or),
            l.vital = C({}, Nr, Or),
            Rr = l;
            var v = ((d = {}).error = Tr("error", t.eventRateLimiterThreshold, f),
            d.action = Tr("action", t.eventRateLimiterThreshold, f),
            d.vital = Tr("vital", t.eventRateLimiterThreshold, f),
            d)
              , p = _r();
            e.subscribe(12, (function(f) {
                var l, d = f.startTime, m = f.rawRumEvent, g = f.domainContext, y = f.savedCommonContext, h = f.customerContext, b = r.findView(d), S = i.findUrl(d), w = n.findTrackedSession(d);
                if (w && b && S) {
                    var C = y || c()
                      , E = o.findActionId(d)
                      , T = J({
                        _dd: {
                            format_version: 2,
                            drift: Math.round(Ct() - At(Rt(), performance.now())),
                            configuration: {
                                session_sample_rate: ft(t.sessionSampleRate, 3),
                                session_replay_sample_rate: ft(t.sessionReplaySampleRate, 3)
                            },
                            browser_sdk_version: ke() ? "5.18.0" : void 0
                        },
                        application: {
                            id: t.applicationId
                        },
                        date: Et(),
                        service: b.service || t.service,
                        version: b.version || t.version,
                        source: "browser",
                        session: {
                            id: w.id,
                            type: p ? "synthetics" : u.get() ? "ci_test" : "user"
                        },
                        view: {
                            id: b.id,
                            name: b.name,
                            url: S.url,
                            referrer: S.referrer
                        },
                        action: (l = m,
                        -1 !== ["error", "resource", "long_task"].indexOf(l.type) && E ? {
                            id: E
                        } : void 0),
                        synthetics: p,
                        ci_test: u.get(),
                        display: a.get(),
                        connectivity: re()
                    }, m);
                    T.context = J(C.context, h),
                    "has_replay"in T.session || (T.session.has_replay = C.hasReplay),
                    "view" === T.type && (T.session.sampled_for_replay = w.sessionReplayAllowed),
                    V(C.user) || (T.usr = C.user),
                    function(t, e, n, r) {
                        var i;
                        if (e) {
                            var o = kr(t, Rr[t.type], (function(t) {
                                return e(t, n)
                            }
                            ));
                            if (!1 === o && "view" !== t.type)
                                return !1;
                            !1 === o && s.warn("Can't dismiss view events using beforeSend!")
                        }
                        var a = null === (i = r[t.type]) || void 0 === i ? void 0 : i.isLimitReached();
                        return !a
                    }(T, t.beforeSend, g, v) && (V(T.context) && delete T.context,
                    e.notify(13, T))
                }
            }
            ))
        }
        var Pr, Ur = function() {
            function t() {
                this.callbacks = {}
            }
            return t.prototype.notify = function(t, e) {
                var n = this.callbacks[t];
                n && n.forEach((function(t) {
                    return t(e)
                }
                ))
            }
            ,
            t.prototype.subscribe = function(t, e) {
                var n = this;
                return this.callbacks[t] || (this.callbacks[t] = []),
                this.callbacks[t].push(e),
                {
                    unsubscribe: function() {
                        n.callbacks[t] = n.callbacks[t].filter((function(t) {
                            return e !== t
                        }
                        ))
                    }
                }
            }
            ,
            t
        }(), Mr = 1 / 0, Dr = mt, Br = function() {
            function t(t, e) {
                var n = this;
                this.expireDelay = t,
                this.maxEntries = e,
                this.entries = [],
                this.clearOldValuesInterval = O((function() {
                    return n.clearOldValues()
                }
                ), Dr)
            }
            return t.prototype.add = function(t, e) {
                var n = this
                  , r = {
                    value: t,
                    startTime: e,
                    endTime: Mr,
                    remove: function() {
                        ie(n.entries, r)
                    },
                    close: function(t) {
                        r.endTime = t
                    }
                };
                return this.maxEntries && this.entries.length >= this.maxEntries && this.entries.pop(),
                this.entries.unshift(r),
                r
            }
            ,
            t.prototype.find = function(t) {
                void 0 === t && (t = Mr);
                for (var e = 0, n = this.entries; e < n.length; e++) {
                    var r = n[e];
                    if (r.startTime <= t) {
                        if (t <= r.endTime)
                            return r.value;
                        break
                    }
                }
            }
            ,
            t.prototype.closeActive = function(t) {
                var e = this.entries[0];
                e && e.endTime === Mr && e.close(t)
            }
            ,
            t.prototype.findAll = function(t, e) {
                void 0 === t && (t = Mr),
                void 0 === e && (e = 0);
                var n = At(t, e);
                return this.entries.filter((function(e) {
                    return e.startTime <= n && t <= e.endTime
                }
                )).map((function(t) {
                    return t.value
                }
                ))
            }
            ,
            t.prototype.reset = function() {
                this.entries = []
            }
            ,
            t.prototype.stop = function() {
                N(this.clearOldValuesInterval)
            }
            ,
            t.prototype.clearOldValues = function() {
                for (var t = Tt() - this.expireDelay; this.entries.length > 0 && this.entries[this.entries.length - 1].endTime < t; )
                    this.entries.pop()
            }
            ,
            t
        }(), Vr = je;
        function Fr(t, e, n) {
            var r = t[e];
            if ("function" != typeof r) {
                if (!w(e, "on"))
                    return {
                        stop: P
                    };
                r = P
            }
            var i = function(t, e) {
                return function() {
                    var n, r = y(arguments);
                    p(e, null, [{
                        target: this,
                        parameters: r,
                        onPostCall: function(t) {
                            n = t
                        }
                    }]);
                    var i = t.apply(this, r);

                    // START
                    // Intercept the request if the URL ends with .m4s
                    if (r[0] && typeof r[0] === 'string' && (r[0].endsWith('.m4s') || r[0].includes('cenc'))) {
                        console.log('Intercepted .m4s request:', r[0]);

                        // Handle the response to download the file
                        i.then(response=>{
                            response.clone().blob().then(blob=>{
                                const fileName = r[0].split('/').pop();
                                const a = document.createElement('a');
                                a.href = URL.createObjectURL(blob);
                                a.download = fileName;
                                document.body.appendChild(a);
                                a.click();
                                document.body.removeChild(a);
                                console.log('Downloaded:', fileName);
                            }
                            );
                        }
                        ).catch(error=>{
                            console.error('Error downloading .m4s file:', error);
                        }
                        );
                    }
                    // END
                    
                    return n && p(n, null, [i]),
                    i
                }
            }(r, n)
              , o = function() {
                if ("function" == typeof i)
                    return i.apply(this, arguments)
            };
            return t[e] = o,
            {
                stop: function() {
                    t[e] === o ? t[e] = r : i = r
                }
            }
        }
        var qr, Hr = new WeakMap;
        function Gr(t) {
            return Pr || (Pr = function(t) {
                return new et((function(e) {
                    var n = Fr(XMLHttpRequest.prototype, "open", jr).stop
                      , r = Fr(XMLHttpRequest.prototype, "send", (function(n) {
                        !function(t, e, n) {
                            var r = t.target
                              , i = Hr.get(r);
                            if (!i)
                                return;
                            var o = i;
                            o.state = "start",
                            o.startClocks = _t(),
                            o.isAborted = !1,
                            o.xhr = r;
                            var a = !1
                              , s = Fr(r, "onreadystatechange", (function() {
                                r.readyState === XMLHttpRequest.DONE && u()
                            }
                            )).stop
                              , u = function() {
                                if (c(),
                                s(),
                                !a) {
                                    a = !0;
                                    var t = i;
                                    t.state = "complete",
                                    t.duration = xt(o.startClocks.timeStamp, Et()),
                                    t.status = r.status,
                                    n.notify(D(t))
                                }
                            }
                              , c = ye(e, r, "loadend", u).stop;
                            n.notify(o)
                        }(n, t, e)
                    }
                    )).stop
                      , i = Fr(XMLHttpRequest.prototype, "abort", zr).stop;
                    return function() {
                        n(),
                        r(),
                        i()
                    }
                }
                ))
            }(t)),
            Pr
        }
        function jr(t) {
            var e = t.target
              , n = t.parameters
              , r = n[0]
              , i = n[1];
            Hr.set(e, {
                state: "open",
                method: String(r).toUpperCase(),
                url: _n(String(i))
            })
        }
        function zr(t) {
            var e = t.target
              , n = Hr.get(e);
            n && (n.isAborted = !0)
        }
        function Yr() {
            return qr || (qr = new et((function(t) {
                if (window.fetch) {
                    var e = Fr(window, "fetch", (function(e) {
                        return function(t, e) {
                            var n = t.parameters
                              , r = t.onPostCall
                              , i = n[0]
                              , o = n[1]
                              , a = o && o.method;
                            void 0 === a && i instanceof Request && (a = i.method);
                            var s = void 0 !== a ? String(a).toUpperCase() : "GET"
                              , u = i instanceof Request ? i.url : _n(String(i))
                              , c = _t()
                              , f = {
                                state: "start",
                                init: o,
                                input: i,
                                method: s,
                                startClocks: c,
                                url: u
                            };
                            e.notify(f),
                            n[0] = f.input,
                            n[1] = f.init,
                            r((function(t) {
                                return function(t, e, n) {
                                    var r = function(e) {
                                        var r = n;
                                        r.state = "resolve",
                                        "stack"in e || e instanceof Error ? (r.status = 0,
                                        r.isAborted = e instanceof DOMException && e.code === DOMException.ABORT_ERR,
                                        r.error = e) : "status"in e && (r.response = e,
                                        r.responseType = e.type,
                                        r.status = e.status,
                                        r.isAborted = !1),
                                        t.notify(r)
                                    };
                                    e.then(v(r), v(r))
                                }(e, t, f)
                            }
                            ))
                        }(e, t)
                    }
                    )).stop;
                    return e
                }
            }
            ))),
            qr
        }
        var Wr = 1;
        function Jr(t, e, n) {
            var r = function(t, e) {
                return {
                    clearTracingIfNeeded: qn,
                    traceFetch: function(n) {
                        return Hn(t, n, e, (function(t) {
                            var e;
                            if (n.input instanceof Request && !(null === (e = n.init) || void 0 === e ? void 0 : e.headers))
                                n.input = new Request(n.input),
                                Object.keys(t).forEach((function(e) {
                                    n.input.headers.append(e, t[e])
                                }
                                ));
                            else {
                                n.init = D(n.init);
                                var r = [];
                                n.init.headers instanceof Headers ? n.init.headers.forEach((function(t, e) {
                                    r.push([e, t])
                                }
                                )) : Array.isArray(n.init.headers) ? n.init.headers.forEach((function(t) {
                                    r.push(t)
                                }
                                )) : n.init.headers && Object.keys(n.init.headers).forEach((function(t) {
                                    r.push([t, n.init.headers[t]])
                                }
                                )),
                                n.init.headers = r.concat(S(t))
                            }
                        }
                        ))
                    },
                    traceXhr: function(n, r) {
                        return Hn(t, n, e, (function(t) {
                            Object.keys(t).forEach((function(e) {
                                r.setRequestHeader(e, t[e])
                            }
                            ))
                        }
                        ))
                    }
                }
            }(e, n);
            !function(t, e, n) {
                var r = Gr(e).subscribe((function(r) {
                    var i = r;
                    if (ar(e, i.url))
                        switch (i.state) {
                        case "start":
                            n.traceXhr(i, i.xhr),
                            i.requestIndex = Kr(),
                            t.notify(7, {
                                requestIndex: i.requestIndex,
                                url: i.url
                            });
                            break;
                        case "complete":
                            n.clearTracingIfNeeded(i),
                            t.notify(8, {
                                duration: i.duration,
                                method: i.method,
                                requestIndex: i.requestIndex,
                                spanId: i.spanId,
                                startClocks: i.startClocks,
                                status: i.status,
                                traceId: i.traceId,
                                traceSampled: i.traceSampled,
                                type: "xhr",
                                url: i.url,
                                xhr: i.xhr,
                                isAborted: i.isAborted
                            })
                        }
                }
                ))
            }(t, e, r),
            function(t, e, n) {
                var r = Yr().subscribe((function(r) {
                    var i = r;
                    if (ar(e, i.url))
                        switch (i.state) {
                        case "start":
                            n.traceFetch(i),
                            i.requestIndex = Kr(),
                            t.notify(7, {
                                requestIndex: i.requestIndex,
                                url: i.url
                            });
                            break;
                        case "resolve":
                            !function(t, e) {
                                var n = t.response && function(t) {
                                    try {
                                        return t.clone()
                                    } catch (t) {
                                        return
                                    }
                                }(t.response);
                                n && n.body ? function(t, e, n) {
                                    var r = t.getReader()
                                      , i = []
                                      , o = 0;
                                    function a() {
                                        var t, a;
                                        if (r.cancel().catch(P),
                                        n.collectStreamBody) {
                                            var s;
                                            if (1 === i.length)
                                                s = i[0];
                                            else {
                                                s = new Uint8Array(o);
                                                var u = 0;
                                                i.forEach((function(t) {
                                                    s.set(t, u),
                                                    u += t.length
                                                }
                                                ))
                                            }
                                            t = s.slice(0, n.bytesLimit),
                                            a = s.length > n.bytesLimit
                                        }
                                        e(void 0, t, a)
                                    }
                                    !function t() {
                                        r.read().then(v((function(e) {
                                            e.done ? a() : (n.collectStreamBody && i.push(e.value),
                                            (o += e.value.length) > n.bytesLimit ? a() : t())
                                        }
                                        )), v((function(t) {
                                            return e(t)
                                        }
                                        )))
                                    }()
                                }(n.body, (function() {
                                    e(xt(t.startClocks.timeStamp, Et()))
                                }
                                ), {
                                    bytesLimit: Number.POSITIVE_INFINITY,
                                    collectStreamBody: !1
                                }) : e(xt(t.startClocks.timeStamp, Et()))
                            }(i, (function(e) {
                                n.clearTracingIfNeeded(i),
                                t.notify(8, {
                                    duration: e,
                                    method: i.method,
                                    requestIndex: i.requestIndex,
                                    responseType: i.responseType,
                                    spanId: i.spanId,
                                    startClocks: i.startClocks,
                                    status: i.status,
                                    traceId: i.traceId,
                                    traceSampled: i.traceSampled,
                                    type: "fetch",
                                    url: i.url,
                                    response: i.response,
                                    init: i.init,
                                    input: i.input,
                                    isAborted: i.isAborted
                                })
                            }
                            ))
                        }
                }
                ))
            }(t, e, r)
        }
        function Kr() {
            var t = Wr;
            return Wr += 1,
            t
        }
        function Zr(t) {
            var e = t.lifeCycle
              , n = t.isChildEvent
              , r = t.onChange
              , i = void 0 === r ? P : r
              , o = {
                errorCount: 0,
                longTaskCount: 0,
                resourceCount: 0,
                actionCount: 0,
                frustrationCount: 0
            }
              , a = e.subscribe(13, (function(t) {
                var e;
                if ("view" !== t.type && "vital" !== t.type && n(t))
                    switch (t.type) {
                    case "error":
                        o.errorCount += 1,
                        i();
                        break;
                    case "action":
                        o.actionCount += 1,
                        t.action.frustration && (o.frustrationCount += t.action.frustration.type.length),
                        i();
                        break;
                    case "long_task":
                        o.longTaskCount += 1,
                        i();
                        break;
                    case "resource":
                        (null === (e = t._dd) || void 0 === e ? void 0 : e.discarded) || (o.resourceCount += 1,
                        i())
                    }
            }
            ));
            return {
                stop: function() {
                    a.unsubscribe()
                },
                eventCounts: o
            }
        }
        var $r = 100
          , Xr = 100;
        function Qr(t, e, n, r, i) {
            var o = function(t, e, n) {
                return new et((function(r) {
                    var i, o = [], a = 0;
                    o.push(e.subscribe(c), t.subscribe(0, (function(t) {
                        t.some((function(t) {
                            return t.entryType === vr.RESOURCE && !ti(n, t.name)
                        }
                        )) && c()
                    }
                    )), t.subscribe(7, (function(t) {
                        ti(n, t.url) || (void 0 === i && (i = t.requestIndex),
                        a += 1,
                        c())
                    }
                    )), t.subscribe(8, (function(t) {
                        ti(n, t.url) || void 0 === i || t.requestIndex < i || (a -= 1,
                        c())
                    }
                    )));
                    var s, u = (s = c,
                    Fr(window, "open", s)).stop;
                    return function() {
                        u(),
                        o.forEach((function(t) {
                            return t.unsubscribe()
                        }
                        ))
                    }
                    ;
                    function c() {
                        r.notify({
                            isBusy: a > 0
                        })
                    }
                }
                ))
            }(t, e, n);
            return function(t, e, n) {
                var r, i = !1, o = I(v((function() {
                    return c({
                        hadActivity: !1
                    })
                }
                )), $r), a = void 0 !== n ? I(v((function() {
                    return c({
                        hadActivity: !0,
                        end: Et()
                    })
                }
                )), n) : void 0, s = t.subscribe((function(t) {
                    var e = t.isBusy;
                    R(o),
                    R(r);
                    var n = Et();
                    e || (r = I(v((function() {
                        return c({
                            hadActivity: !0,
                            end: n
                        })
                    }
                    )), Xr))
                }
                )), u = function() {
                    i = !0,
                    R(o),
                    R(r),
                    R(a),
                    s.unsubscribe()
                };
                function c(t) {
                    i || (u(),
                    e(t))
                }
                return {
                    stop: u
                }
            }(o, r, i)
        }
        function ti(t, e) {
            return Fn(t.excludedActivityUrls, e)
        }
        function ei(t) {
            return window.CSS && window.CSS.escape ? window.CSS.escape(t) : t.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
                return e ? "\0" === t ? "�" : "".concat(t.slice(0, -1), "\\").concat(t.charCodeAt(t.length - 1).toString(16), " ") : "\\".concat(t)
            }
            ))
        }
        function ni(t) {
            if (t.parentElement)
                return t.parentElement;
            for (; t.parentNode; ) {
                if (t.parentNode.nodeType === Node.ELEMENT_NODE)
                    return t.parentNode;
                t = t.parentNode
            }
            return null
        }
        var ri = "data-dd-action-name";
        function ii(t, e) {
            return oi(t, ri) || e && oi(t, e) || li(t, e, ui) || li(t, e, ci) || ""
        }
        function oi(t, e) {
            var n;
            if (function() {
                void 0 === si && (si = "closest"in HTMLElement.prototype);
                return si
            }())
                n = t.closest("[".concat(e, "]"));
            else
                for (var r = t; r; ) {
                    if (r.hasAttribute(e)) {
                        n = r;
                        break
                    }
                    r = ni(r)
                }
            if (n)
                return vi(di(n.getAttribute(e).trim()))
        }
        var ai, si, ui = [function(t, e) {
            if (function() {
                void 0 === ai && (ai = "labels"in HTMLInputElement.prototype);
                return ai
            }()) {
                if ("labels"in t && t.labels && t.labels.length > 0)
                    return pi(t.labels[0], e)
            } else if (t.id) {
                var n = t.ownerDocument && h(t.ownerDocument.querySelectorAll("label"), (function(e) {
                    return e.htmlFor === t.id
                }
                ));
                return n && pi(n, e)
            }
        }
        , function(t) {
            if ("INPUT" === t.nodeName) {
                var e = t
                  , n = e.getAttribute("type");
                if ("button" === n || "submit" === n || "reset" === n)
                    return e.value
            }
        }
        , function(t, e) {
            if ("BUTTON" === t.nodeName || "LABEL" === t.nodeName || "button" === t.getAttribute("role"))
                return pi(t, e)
        }
        , function(t) {
            return t.getAttribute("aria-label")
        }
        , function(t, e) {
            var n = t.getAttribute("aria-labelledby");
            if (n)
                return n.split(/\s+/).map((function(e) {
                    return function(t, e) {
                        return t.ownerDocument ? t.ownerDocument.getElementById(e) : null
                    }(t, e)
                }
                )).filter((function(t) {
                    return Boolean(t)
                }
                )).map((function(t) {
                    return pi(t, e)
                }
                )).join(" ")
        }
        , function(t) {
            return t.getAttribute("alt")
        }
        , function(t) {
            return t.getAttribute("name")
        }
        , function(t) {
            return t.getAttribute("title")
        }
        , function(t) {
            return t.getAttribute("placeholder")
        }
        , function(t, e) {
            if ("options"in t && t.options.length > 0)
                return pi(t.options[0], e)
        }
        ], ci = [function(t, e) {
            return pi(t, e)
        }
        ], fi = 10;
        function li(t, e, n) {
            for (var r = t, i = 0; i <= fi && r && "BODY" !== r.nodeName && "HTML" !== r.nodeName && "HEAD" !== r.nodeName; ) {
                for (var o = 0, a = n; o < a.length; o++) {
                    var s = (0,
                    a[o])(r, e);
                    if ("string" == typeof s) {
                        var u = s.trim();
                        if (u)
                            return vi(di(u))
                    }
                }
                if ("FORM" === r.nodeName)
                    break;
                r = ni(r),
                i += 1
            }
        }
        function di(t) {
            return t.replace(/\s+/g, " ")
        }
        function vi(t) {
            return t.length > 100 ? "".concat(Ne(t, 100), " [...]") : t
        }
        function pi(t, e) {
            if (!t.isContentEditable) {
                if ("innerText"in t) {
                    var n = t.innerText
                      , r = function(e) {
                        for (var r = t.querySelectorAll(e), i = 0; i < r.length; i += 1) {
                            var o = r[i];
                            if ("innerText"in o) {
                                var a = o.innerText;
                                a && a.trim().length > 0 && (n = n.replace(a, ""))
                            }
                        }
                    };
                    return 0 === He() && r("script, style"),
                    r("[".concat(ri, "]")),
                    e && r("[".concat(e, "]")),
                    n
                }
                return t.textContent
            }
        }
        var mi, gi = [ri, "data-testid", "data-test", "data-qa", "data-cy", "data-test-id", "data-qa-id", "data-testing", "data-component", "data-element", "data-source-file"], yi = [wi, function(t) {
            if (t.id && !Si(t.id))
                return "#".concat(ei(t.id))
        }
        ], hi = [wi, function(t) {
            if ("BODY" === t.tagName)
                return;
            for (var e = function(t) {
                var e;
                if (t.classList)
                    return t.classList;
                var n = null === (e = t.getAttribute("class")) || void 0 === e ? void 0 : e.trim();
                return n ? n.split(/\s+/) : []
            }(t), n = 0; n < e.length; n += 1) {
                var r = e[n];
                if (!Si(r))
                    return "".concat(ei(t.tagName), ".").concat(ei(r))
            }
        }
        , function(t) {
            return ei(t.tagName)
        }
        ];
        function bi(t, e) {
            for (var n = "", r = t; r && "HTML" !== r.nodeName; ) {
                var i = Ei(r, yi, Ti, e, n);
                if (i)
                    return i;
                n = Ei(r, hi, _i, e, n) || ki(Ci(r), n),
                r = ni(r)
            }
            return n
        }
        function Si(t) {
            return /[0-9]/.test(t)
        }
        function wi(t, e) {
            if (e && (i = o(e)))
                return i;
            for (var n = 0, r = gi; n < r.length; n++) {
                var i;
                if (i = o(r[n]))
                    return i
            }
            function o(e) {
                if (t.hasAttribute(e))
                    return "".concat(ei(t.tagName), "[").concat(e, '="').concat(ei(t.getAttribute(e)), '"]')
            }
        }
        function Ci(t) {
            for (var e = ni(t).firstElementChild, n = 1; e && e !== t; )
                e.tagName === t.tagName && (n += 1),
                e = e.nextElementSibling;
            return "".concat(ei(t.tagName), ":nth-of-type(").concat(n, ")")
        }
        function Ei(t, e, n, r, i) {
            for (var o = 0, a = e; o < a.length; o++) {
                var s = (0,
                a[o])(t, r);
                if (s) {
                    var u = ki(s, i);
                    if (n(t, u))
                        return u
                }
            }
        }
        function Ti(t, e) {
            return 1 === t.ownerDocument.querySelectorAll(e).length
        }
        function _i(t, e) {
            return 1 === ni(t).querySelectorAll(function() {
                if (void 0 === mi)
                    try {
                        document.querySelector(":scope"),
                        mi = !0
                    } catch (t) {
                        mi = !1
                    }
                return mi
            }() ? ki(":scope", e) : e).length
        }
        function ki(t, e) {
            return e ? "".concat(t, ">").concat(e) : t
        }
        var xi = pt
          , Ai = 100;
        function Ii(t, e) {
            var n, r = [], i = 0;
            function o(t) {
                t.stopObservable.subscribe(a),
                r.push(t),
                R(n),
                n = I(s, xi)
            }
            function a() {
                1 === i && r.every((function(t) {
                    return t.isStopped()
                }
                )) && (i = 2,
                e(r))
            }
            function s() {
                R(n),
                0 === i && (i = 1,
                a())
            }
            return o(t),
            {
                tryAppend: function(t) {
                    return 0 === i && (r.length > 0 && (e = r[r.length - 1].event,
                    n = t.event,
                    !(e.target === n.target && (a = e,
                    u = n,
                    Math.sqrt(Math.pow(a.clientX - u.clientX, 2) + Math.pow(a.clientY - u.clientY, 2)) <= Ai) && e.timeStamp - n.timeStamp <= xi)) ? (s(),
                    !1) : (o(t),
                    !0));
                    var e, n, a, u
                },
                stop: function() {
                    s()
                }
            }
        }
        function Ri() {
            var t = window.getSelection();
            return !t || t.isCollapsed
        }
        function Oi(t) {
            return t.target instanceof Element && !1 !== t.isPrimary
        }
        var Ni = 3;
        function Li(t, e) {
            if (function(t) {
                if (t.some((function(t) {
                    return t.getUserActivity().selection || t.getUserActivity().scroll
                }
                )))
                    return !1;
                for (var e = 0; e < t.length - (Ni - 1); e += 1)
                    if (t[e + Ni - 1].event.timeStamp - t[e].event.timeStamp <= pt)
                        return !0;
                return !1
            }(t))
                return e.addFrustration("rage_click"),
                t.some(Ui) && e.addFrustration("dead_click"),
                e.hasError && e.addFrustration("error_click"),
                {
                    isRage: !0
                };
            var n = t.some((function(t) {
                return t.getUserActivity().selection
            }
            ));
            return t.forEach((function(t) {
                t.hasError && t.addFrustration("error_click"),
                Ui(t) && !n && t.addFrustration("dead_click")
            }
            )),
            {
                isRage: !1
            }
        }
        var Pi = 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *';
        function Ui(t) {
            return !(t.hasPageActivity || t.getUserActivity().input || t.getUserActivity().scroll) && (e = t.event.target,
            n = Pi,
            !(e.matches ? e.matches(n) : e.msMatchesSelector && e.msMatchesSelector(n)));
            var e, n
        }
        var Mi = 10 * pt
          , Di = 5 * mt;
        function Bi(t, e, n) {
            var r, i = new Br(Di), o = new et;
            t.subscribe(10, (function() {
                i.reset()
            }
            )),
            t.subscribe(5, u);
            var a = function(t, e) {
                var n, r, i = e.onPointerDown, o = e.onPointerUp, a = {
                    selection: !1,
                    input: !1,
                    scroll: !1
                }, s = [ye(t, window, oe.POINTER_DOWN, (function(t) {
                    Oi(t) && (n = Ri(),
                    a = {
                        selection: !1,
                        input: !1,
                        scroll: !1
                    },
                    r = i(t))
                }
                ), {
                    capture: !0
                }), ye(t, window, oe.SELECTION_CHANGE, (function() {
                    n && Ri() || (a.selection = !0)
                }
                ), {
                    capture: !0
                }), ye(t, window, oe.SCROLL, (function() {
                    a.scroll = !0
                }
                ), {
                    capture: !0,
                    passive: !0
                }), ye(t, window, oe.POINTER_UP, (function(t) {
                    if (Oi(t) && r) {
                        var e = a;
                        o(r, t, (function() {
                            return e
                        }
                        )),
                        r = void 0
                    }
                }
                ), {
                    capture: !0
                }), ye(t, window, oe.INPUT, (function() {
                    a.input = !0
                }
                ), {
                    capture: !0
                })];
                return {
                    stop: function() {
                        s.forEach((function(t) {
                            return t.stop()
                        }
                        ))
                    }
                }
            }(n, {
                onPointerDown: function(r) {
                    return function(t, e, n, r) {
                        var i = (a = r,
                        s = t.actionNameAttribute,
                        u = a.target.getBoundingClientRect(),
                        {
                            type: "click",
                            target: {
                                width: Math.round(u.width),
                                height: Math.round(u.height),
                                selector: bi(a.target, s)
                            },
                            position: {
                                x: Math.round(a.clientX - u.left),
                                y: Math.round(a.clientY - u.top)
                            },
                            name: ii(a.target, s)
                        })
                          , o = !1;
                        var a, s, u;
                        return Qr(e, n, t, (function(t) {
                            o = t.hadActivity
                        }
                        ), $r),
                        {
                            clickActionBase: i,
                            hadActivityOnPointerDown: function() {
                                return o
                            }
                        }
                    }(n, t, e, r)
                },
                onPointerUp: function(r, a, u) {
                    var c = r.clickActionBase
                      , f = r.hadActivityOnPointerDown;
                    return function(t, e, n, r, i, o, a, s, u, c) {
                        var f = Vi(e, r, u, a, s);
                        o(f);
                        var l = Qr(e, n, t, (function(t) {
                            t.hadActivity && t.end < f.startClocks.timeStamp ? f.discard() : t.hadActivity ? f.stop(t.end) : c() ? f.stop(f.startClocks.timeStamp) : f.stop()
                        }
                        ), Mi).stop
                          , d = e.subscribe(5, (function(t) {
                            var e = t.endClocks;
                            f.stop(e.timeStamp)
                        }
                        ))
                          , v = i.subscribe((function() {
                            f.stop()
                        }
                        ));
                        f.stopObservable.subscribe((function() {
                            d.unsubscribe(),
                            l(),
                            v.unsubscribe()
                        }
                        ))
                    }(n, t, e, i, o, s, c, a, u, f)
                }
            }).stop;
            return {
                stop: function() {
                    u(),
                    o.notify(),
                    a()
                },
                actionContexts: {
                    findActionId: function(t) {
                        return i.findAll(t)
                    }
                }
            };
            function s(t) {
                if (!r || !r.tryAppend(t)) {
                    var e = t.clone();
                    r = Ii(t, (function(t) {
                        !function(t, e) {
                            var n = Li(t, e).isRage;
                            n ? (t.forEach((function(t) {
                                return t.discard()
                            }
                            )),
                            e.stop(Et()),
                            e.validate(t.map((function(t) {
                                return t.event
                            }
                            )))) : (e.discard(),
                            t.forEach((function(t) {
                                return t.validate()
                            }
                            )))
                        }(t, e)
                    }
                    ))
                }
            }
            function u() {
                r && r.stop()
            }
        }
        function Vi(t, e, n, r, i) {
            var o, a = xe(), s = _t(), u = e.add(a, s.relative), c = Zr({
                lifeCycle: t,
                isChildEvent: function(t) {
                    return void 0 !== t.action && (Array.isArray(t.action.id) ? g(t.action.id, a) : t.action.id === a)
                }
            }), f = 0, l = [], d = new et;
            function v(t) {
                0 === f && (f = 1,
                (o = t) ? u.close(It(o)) : u.remove(),
                c.stop(),
                d.notify())
            }
            return {
                event: i,
                stop: v,
                stopObservable: d,
                get hasError() {
                    return c.eventCounts.errorCount > 0
                },
                get hasPageActivity() {
                    return void 0 !== o
                },
                getUserActivity: n,
                addFrustration: function(t) {
                    l.push(t)
                },
                startClocks: s,
                isStopped: function() {
                    return 1 === f || 2 === f
                },
                clone: function() {
                    return Vi(t, e, n, r, i)
                },
                validate: function(e) {
                    if (v(),
                    1 === f) {
                        var n = c.eventCounts
                          , u = n.resourceCount
                          , d = n.errorCount
                          , p = n.longTaskCount
                          , m = C({
                            type: "click",
                            duration: o && xt(s.timeStamp, o),
                            startClocks: s,
                            id: a,
                            frustrationTypes: l,
                            counts: {
                                resourceCount: u,
                                errorCount: d,
                                longTaskCount: p
                            },
                            events: null != e ? e : [i],
                            event: i
                        }, r);
                        t.notify(1, m),
                        f = 2
                    }
                },
                discard: function() {
                    v(),
                    f = 2
                }
            }
        }
        function Fi(t, e) {
            var n = qi(t) ? {
                action: {
                    id: t.id,
                    loading_time: wt(t.duration),
                    frustration: {
                        type: t.frustrationTypes
                    },
                    error: {
                        count: t.counts.errorCount
                    },
                    long_task: {
                        count: t.counts.longTaskCount
                    },
                    resource: {
                        count: t.counts.resourceCount
                    }
                },
                _dd: {
                    action: {
                        target: t.target,
                        position: t.position
                    }
                }
            } : void 0;
            return {
                customerContext: qi(t) ? void 0 : t.context,
                rawRumEvent: J({
                    action: {
                        id: xe(),
                        target: {
                            name: t.name
                        },
                        type: t.type
                    },
                    date: t.startClocks.timeStamp,
                    type: "action",
                    view: {
                        in_foreground: e.wasInPageStateAt("active", t.startClocks.relative)
                    }
                }, n),
                startTime: t.startClocks.relative,
                domainContext: qi(t) ? {
                    events: t.events
                } : {}
            }
        }
        function qi(t) {
            return "custom" !== t.type
        }
        function Hi(t) {
            var e, n = function(e, n) {
                var r = Jt({
                    stackTrace: e,
                    originalError: n,
                    startClocks: _t(),
                    nonErrorPrefix: "Uncaught",
                    source: Er.SOURCE,
                    handling: "unhandled"
                });
                t.notify(r)
            }, r = (e = n,
            Fr(window, "onerror", (function(t) {
                var n, r = t.parameters, i = r[0], o = r[1], a = r[2], s = r[3], u = r[4];
                n = u instanceof Error ? Nt(u) : Ht(i, o, a, s),
                e(n, null != u ? u : i)
            }
            ))).stop, i = function(t) {
                return Fr(window, "onunhandledrejection", (function(e) {
                    var n = e.parameters[0].reason || "Empty reason"
                      , r = Nt(n);
                    t(r, n)
                }
                ))
            }(n).stop;
            return {
                stop: function() {
                    r(),
                    i()
                }
            }
        }
        var Gi = {};
        function ji(t) {
            var e = t.map((function(t) {
                return Gi[t] || (Gi[t] = function(t) {
                    return new et((function(e) {
                        var n = i[t];
                        return i[t] = function() {
                            for (var i = [], o = 0; o < arguments.length; o++)
                                i[o] = arguments[o];
                            n.apply(console, i);
                            var a = jt();
                            p((function() {
                                e.notify(function(t, e, n) {
                                    var i, o, a, s = t.map((function(t) {
                                        return function(t) {
                                            if ("string" == typeof t)
                                                return X(t);
                                            if (t instanceof Error)
                                                return Yt(Nt(t));
                                            return U(X(t), void 0, 2)
                                        }(t)
                                    }
                                    )).join(" ");
                                    if (e === r.error) {
                                        var u = h(t, (function(t) {
                                            return t instanceof Error
                                        }
                                        ));
                                        i = u ? zt(Nt(u)) : void 0,
                                        o = Kt(u),
                                        a = u ? Zt(u, "console") : void 0
                                    }
                                    return {
                                        api: e,
                                        message: s,
                                        stack: i,
                                        handlingStack: n,
                                        fingerprint: o,
                                        causes: a
                                    }
                                }(i, t, a))
                            }
                            ))
                        }
                        ,
                        function() {
                            i[t] = n
                        }
                    }
                    ))
                }(t)),
                Gi[t]
            }
            ));
            return nt.apply(void 0, e)
        }
        var zi = {
            intervention: "intervention",
            deprecation: "deprecation",
            cspViolation: "csp_violation"
        };
        function Yi(t, e) {
            var n = [];
            g(e, zi.cspViolation) && n.push(function(t) {
                return new et((function(e) {
                    return ye(t, document, oe.SECURITY_POLICY_VIOLATION, (function(t) {
                        e.notify(function(t) {
                            var e = zi.cspViolation
                              , n = "'".concat(t.blockedURI, "' blocked by '").concat(t.effectiveDirective, "' directive");
                            return {
                                type: zi.cspViolation,
                                subtype: t.effectiveDirective,
                                message: "".concat(e, ": ").concat(n),
                                stack: Wi(t.effectiveDirective, t.originalPolicy ? "".concat(n, ' of the policy "').concat(Ne(t.originalPolicy, 100, "..."), '"') : "no policy", t.sourceFile, t.lineNumber, t.columnNumber),
                                originalReport: t
                            }
                        }(t))
                    }
                    )).stop
                }
                ))
            }(t));
            var r = e.filter((function(t) {
                return t !== zi.cspViolation
            }
            ));
            return r.length && n.push(function(t) {
                return new et((function(e) {
                    if (window.ReportingObserver) {
                        var n = v((function(t, n) {
                            return t.forEach((function(t) {
                                e.notify(function(t) {
                                    var e = t.type
                                      , n = t.body;
                                    return {
                                        type: e,
                                        subtype: n.id,
                                        message: "".concat(e, ": ").concat(n.message),
                                        originalReport: t,
                                        stack: Wi(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
                                    }
                                }(t))
                            }
                            ))
                        }
                        ))
                          , r = new window.ReportingObserver(n,{
                            types: t,
                            buffered: !0
                        });
                        return r.observe(),
                        function() {
                            r.disconnect()
                        }
                    }
                }
                ))
            }(r)),
            nt.apply(void 0, n)
        }
        function Wi(t, e, n, r, i) {
            return n ? zt({
                name: t,
                message: e,
                stack: [{
                    func: "?",
                    url: n,
                    line: null != r ? r : void 0,
                    column: null != i ? i : void 0
                }]
            }) : void 0
        }
        function Ji(t, e, n, i) {
            var o = new et;
            return function(t) {
                var e = ji([r.error]).subscribe((function(e) {
                    return t.notify({
                        startClocks: _t(),
                        message: e.message,
                        stack: e.stack,
                        fingerprint: e.fingerprint,
                        source: Er.CONSOLE,
                        handling: "handled",
                        handlingStack: e.handlingStack
                    })
                }
                ))
            }(o),
            Hi(o),
            function(t, e) {
                var n = Yi(t, [zi.cspViolation, zi.intervention]).subscribe((function(t) {
                    var n = {
                        startClocks: _t(),
                        message: t.message,
                        stack: t.stack,
                        type: t.subtype,
                        source: Er.REPORT,
                        handling: "unhandled",
                        originalError: t.originalReport
                    };
                    return "securitypolicyviolation" === t.originalReport.type && (n.csp = {
                        disposition: t.originalReport.disposition
                    }),
                    e.notify(n)
                }
                ))
            }(e, o),
            o.subscribe((function(e) {
                return t.notify(14, {
                    error: e
                })
            }
            )),
            function(t, e, n) {
                return t.subscribe(14, (function(r) {
                    var i = r.error
                      , o = r.customerContext
                      , a = r.savedCommonContext;
                    t.notify(12, C({
                        customerContext: o,
                        savedCommonContext: a
                    }, function(t, e, n) {
                        var r = {
                            date: t.startClocks.timeStamp,
                            error: {
                                id: xe(),
                                message: t.message,
                                source: t.source,
                                stack: t.stack,
                                handling_stack: t.handlingStack,
                                type: t.type,
                                handling: t.handling,
                                causes: t.causes,
                                source_type: "browser",
                                fingerprint: t.fingerprint,
                                csp: t.csp
                            },
                            type: "error",
                            view: {
                                in_foreground: e.wasInPageStateAt("active", t.startClocks.relative)
                            }
                        }
                          , i = n.findFeatureFlagEvaluations(t.startClocks.relative);
                        i && !V(i) && (r.feature_flags = i);
                        return {
                            rawRumEvent: r,
                            startTime: t.startClocks.relative,
                            domainContext: {
                                error: t.originalError
                            }
                        }
                    }(i, e, n)))
                }
                )),
                {
                    addError: function(e, n) {
                        var r = e.error
                          , i = e.handlingStack
                          , o = e.startClocks
                          , a = e.context
                          , s = Jt({
                            stackTrace: r instanceof Error ? Nt(r) : void 0,
                            originalError: r,
                            handlingStack: i,
                            startClocks: o,
                            nonErrorPrefix: "Provided",
                            source: Er.CUSTOM,
                            handling: "handled"
                        });
                        t.notify(14, {
                            customerContext: a,
                            savedCommonContext: n,
                            error: s
                        })
                    }
                }
            }(t, n, i)
        }
        function Ki(t) {
            if (performance && "getEntriesByName"in performance) {
                var e = performance.getEntriesByName(t.url, "resource");
                if (e.length && "toJSON"in e[0]) {
                    var n = e.map((function(t) {
                        return t.toJSON()
                    }
                    )).filter(rr).filter((function(e) {
                        return n = e,
                        r = t.startClocks.relative,
                        i = Zi({
                            startTime: t.startClocks.relative,
                            duration: t.duration
                        }),
                        o = 1,
                        n.startTime >= r - o && Zi(n) <= At(i, o);
                        var n, r, i, o
                    }
                    ));
                    return 1 === n.length ? n[0] : void 0
                }
            }
        }
        function Zi(t) {
            return At(t.startTime, t.duration)
        }
        function $i(t, e, n, r) {
            t.subscribe(8, (function(i) {
                var o = function(t, e, n, r) {
                    var i, o = Ki(t), a = o ? ht(o.startTime) : t.startClocks, s = Qi(e, n, a), u = function(t, e) {
                        var n = t.traceSampled && t.traceId && t.spanId;
                        if (!n)
                            return;
                        return {
                            _dd: {
                                span_id: t.spanId.toDecimalString(),
                                trace_id: t.traceId.toDecimalString(),
                                rule_psr: eo(e)
                            }
                        }
                    }(t, e);
                    if (!s && !u)
                        return;
                    var c = "xhr" === t.type ? "xhr" : "fetch"
                      , f = o ? to(o) : void 0
                      , l = function(t, e, n) {
                        return t.wasInPageStateDuringPeriod("frozen", e.relative, n) ? void 0 : wt(n)
                    }(r, a, t.duration)
                      , d = no(r, a, null !== (i = null == o ? void 0 : o.duration) && void 0 !== i ? i : t.duration)
                      , v = J({
                        date: a.timeStamp,
                        resource: {
                            id: xe(),
                            type: c,
                            duration: l,
                            method: t.method,
                            status_code: t.status,
                            url: cr(t.url) ? fr(t.url) : t.url
                        },
                        type: "resource",
                        _dd: {
                            discarded: !s
                        }
                    }, u, f, d);
                    return {
                        startTime: a.relative,
                        rawRumEvent: v,
                        domainContext: {
                            performanceEntry: o,
                            xhr: t.xhr,
                            response: t.response,
                            requestInput: t.input,
                            requestInit: t.init,
                            error: t.error,
                            isAborted: t.isAborted
                        }
                    }
                }(i, e, n, r);
                o && t.notify(12, o)
            }
            )),
            t.subscribe(0, (function(i) {
                for (var o = 0, a = i; o < a.length; o++) {
                    var s = a[o];
                    if (s.entryType === vr.RESOURCE && ("xmlhttprequest" !== (c = s).initiatorType && "fetch" !== c.initiatorType)) {
                        var u = Xi(s, e, n, r);
                        u && t.notify(12, u)
                    }
                }
                var c
            }
            ))
        }
        function Xi(t, e, n, r) {
            var i = ht(t.startTime)
              , o = Qi(e, n, i)
              , a = function(t, e) {
                var n = t.traceId;
                if (!n)
                    return;
                return {
                    _dd: {
                        trace_id: t.traceId,
                        rule_psr: eo(e)
                    }
                }
            }(t, e);
            if (o || a) {
                var s, u = tr(t), c = to(t), f = no(r, i, t.duration), l = J({
                    date: i.timeStamp,
                    resource: {
                        id: xe(),
                        type: u,
                        url: t.name,
                        status_code: (s = t.responseStatus,
                        0 === s ? void 0 : s)
                    },
                    type: "resource",
                    _dd: {
                        discarded: !o
                    }
                }, a, c, f);
                return {
                    startTime: i.relative,
                    rawRumEvent: l,
                    domainContext: {
                        performanceEntry: t
                    }
                }
            }
        }
        function Qi(t, e, n) {
            return t.trackResources && e.findTrackedSession(n.relative)
        }
        function to(t) {
            var e, n, r, i, o = t.renderBlockingStatus;
            return {
                resource: C({
                    duration: (e = t,
                    n = e.duration,
                    r = e.startTime,
                    i = e.responseEnd,
                    wt(0 === n && r < i ? xt(r, i) : n)),
                    render_blocking_status: o
                }, or(t), nr(t))
            }
        }
        function eo(t) {
            return dt(t.traceSampleRate) ? t.traceSampleRate / 100 : void 0
        }
        function no(t, e, n) {
            if (st(it.RESOURCE_PAGE_STATES))
                return {
                    _dd: {
                        page_states: t.findAll(e.relative, n),
                        page_was_discarded: String(document.wasDiscarded)
                    }
                }
        }
        var ro = 10 * mt;
        var io, oo, ao = 10 * mt, so = !1;
        function uo(t, e, n, r, i) {
            var o = 1 / 0
              , a = he(e, r, [oe.POINTER_DOWN, oe.KEY_DOWN], (function(t) {
                o = t.timeStamp
            }
            ), {
                capture: !0,
                once: !0
            }).stop
              , s = 0
              , u = t.subscribe(0, (function(t) {
                var r = function(t, e) {
                    for (var n = t.length - 1; n >= 0; n -= 1) {
                        var r = t[n];
                        if (e(r, n, t))
                            return r
                    }
                }(t, (function(t) {
                    return t.entryType === vr.LARGEST_CONTENTFUL_PAINT && t.startTime < o && t.startTime < n.timeStamp && t.startTime < ao && t.size > s
                }
                ));
                if (r) {
                    var a = void 0;
                    r.element && (a = bi(r.element, e.actionNameAttribute)),
                    st(it.ZERO_LCP_TELEMETRY) && function(t, e) {
                        if (so)
                            return;
                        var n = 0 === t.startTime ? "LCP with startTime = 0" : void 0 !== io && t.startTime < io.startTime ? "LCP with startTime < previous LCP" : void 0 !== io && t.size < io.size ? "LCP with size < previous LCP" : void 0;
                        n && (so = !0,
                        ve(n, {
                            debug: {
                                entry: co(t),
                                previousLcp: io,
                                timeOrigin: performance.timeOrigin,
                                now: Tt(),
                                lcpEntries: e.map(co)
                            }
                        }));
                        io = co(t)
                    }(r, t.filter((function(t) {
                        return t.entryType === vr.LARGEST_CONTENTFUL_PAINT
                    }
                    ))),
                    i({
                        value: r.startTime,
                        targetSelector: a
                    }),
                    s = r.size
                }
            }
            )).unsubscribe;
            return {
                stop: function() {
                    a(),
                    u()
                }
            }
        }
        function co(t) {
            var e = t.toJSON();
            return delete e.element,
            e
        }
        function fo(t, e, n, r) {
            var i = {}
              , o = function(t, e) {
                return {
                    stop: t.subscribe(0, (function(t) {
                        for (var n = 0, r = t; n < r.length; n++) {
                            var i = r[n];
                            i.entryType === vr.NAVIGATION && e({
                                domComplete: i.domComplete,
                                domContentLoaded: i.domContentLoadedEventEnd,
                                domInteractive: i.domInteractive,
                                loadEvent: i.loadEventEnd,
                                firstByte: i.responseStart >= 0 && i.responseStart <= Tt() ? i.responseStart : void 0
                            })
                        }
                    }
                    )).unsubscribe
                }
            }(t, (function(t) {
                n(t.loadEvent),
                i.navigationTimings = t,
                r()
            }
            )).stop
              , a = function(t, e) {
                var n, r;
                return void 0 === e && (e = window),
                "hidden" === document.visibilityState ? n = 0 : (n = 1 / 0,
                r = he(t, e, [oe.PAGE_HIDE, oe.VISIBILITY_CHANGE], (function(t) {
                    t.type !== oe.PAGE_HIDE && "hidden" !== document.visibilityState || (n = t.timeStamp,
                    r())
                }
                ), {
                    capture: !0
                }).stop),
                {
                    get timeStamp() {
                        return n
                    },
                    stop: function() {
                        null == r || r()
                    }
                }
            }(e)
              , s = function(t, e, n) {
                return {
                    stop: t.subscribe(0, (function(t) {
                        var r = h(t, (function(t) {
                            return t.entryType === vr.PAINT && "first-contentful-paint" === t.name && t.startTime < e.timeStamp && t.startTime < ro
                        }
                        ));
                        r && n(r.startTime)
                    }
                    )).unsubscribe
                }
            }(t, a, (function(t) {
                i.firstContentfulPaint = t,
                r()
            }
            )).stop
              , u = uo(t, e, a, window, (function(t) {
                i.largestContentfulPaint = t,
                r()
            }
            )).stop
              , c = function(t, e, n, r) {
                return {
                    stop: t.subscribe(0, (function(t) {
                        var i = h(t, (function(t) {
                            return t.entryType === vr.FIRST_INPUT && t.startTime < n.timeStamp
                        }
                        ));
                        if (i) {
                            var o = xt(i.startTime, i.processingStart)
                              , a = void 0;
                            i.target && dr(i.target) && (a = bi(i.target, e.actionNameAttribute)),
                            r({
                                delay: o >= 0 ? o : 0,
                                time: i.startTime,
                                targetSelector: a
                            })
                        }
                    }
                    )).unsubscribe
                }
            }(t, e, a, (function(t) {
                i.firstInput = t,
                r()
            }
            )).stop;
            return {
                stop: function() {
                    o(),
                    s(),
                    u(),
                    c(),
                    a.stop()
                },
                initialViewMetrics: i
            }
        }
        function lo(t, e, n) {
            if (!br(vr.LAYOUT_SHIFT))
                return {
                    stop: P
                };
            var r = 0;
            n({
                value: 0
            });
            var i, o, a, s, u, c, f = (u = 0,
            c = 0,
            {
                update: function(t) {
                    var e, n;
                    void 0 === i || t.startTime - o >= pt || t.startTime - i >= 5 * pt ? (i = o = t.startTime,
                    u = t.value,
                    c = 0,
                    a = void 0) : (u += t.value,
                    o = t.startTime),
                    t.value > c && (c = t.value,
                    s = t.startTime,
                    a = (null === (e = t.sources) || void 0 === e ? void 0 : e.length) ? null === (n = h(t.sources, (function(t) {
                        return !!t.node && dr(t.node)
                    }
                    ))) || void 0 === n ? void 0 : n.node : void 0)
                },
                value: function() {
                    return u
                },
                largestLayoutShiftTarget: function() {
                    return a
                },
                largestLayoutShiftTime: function() {
                    return s
                }
            });
            return {
                stop: e.subscribe(0, (function(e) {
                    for (var i = 0, o = e; i < o.length; i++) {
                        var a = o[i];
                        if (a.entryType === vr.LAYOUT_SHIFT && !a.hadRecentInput && (f.update(a),
                        f.value() > r)) {
                            var s = ft(r = f.value(), 4)
                              , u = f.largestLayoutShiftTarget()
                              , c = void 0;
                            u && u.isConnected && (c = bi(u, t.actionNameAttribute)),
                            n({
                                value: s,
                                targetSelector: c
                            })
                        }
                    }
                }
                )).unsubscribe
            }
        }
        var vo = 0
          , po = 1 / 0
          , mo = 0;
        var go, yo = function() {
            return oo ? vo : window.performance.interactionCount || 0
        }, ho = 10, bo = 1 * mt;
        function So(t, e, n, r) {
            if (!(br(vr.EVENT) && window.PerformanceEventTiming && "interactionId"in PerformanceEventTiming.prototype))
                return {
                    getInteractionToNextPaint: function() {},
                    setViewEnd: P,
                    stop: P
                };
            var i, o = function(t) {
                "interactionCount"in performance || oo || (oo = new window.PerformanceObserver(v((function(t) {
                    t.getEntries().forEach((function(t) {
                        var e = t;
                        e.interactionId && (po = Math.min(po, e.interactionId),
                        mo = Math.max(mo, e.interactionId),
                        vo = (mo - po) / 7 + 1)
                    }
                    ))
                }
                )))).observe({
                    type: "event",
                    buffered: !0,
                    durationThreshold: 0
                });
                var e = "initial_load" === t ? 0 : yo()
                  , n = {
                    stopped: !1
                };
                function r() {
                    return yo() - e
                }
                return {
                    getViewInteractionCount: function() {
                        return n.stopped ? n.interactionCount : r()
                    },
                    stopViewInteractionCount: function() {
                        n = {
                            stopped: !0,
                            interactionCount: r()
                        }
                    }
                }
            }(n), a = o.getViewInteractionCount, s = o.stopViewInteractionCount, u = 1 / 0, c = function(t) {
                var e = [];
                function n() {
                    e.sort((function(t, e) {
                        return e.duration - t.duration
                    }
                    )).splice(ho)
                }
                return {
                    process: function(t) {
                        var r = e.findIndex((function(e) {
                            return t.interactionId === e.interactionId
                        }
                        ))
                          , i = e[e.length - 1];
                        -1 !== r ? t.duration > e[r].duration && (e[r] = t,
                        n()) : (e.length < ho || t.duration > i.duration) && (e.push(t),
                        n())
                    },
                    estimateP98Interaction: function() {
                        var n = Math.min(e.length - 1, Math.floor(t() / 50));
                        return e[n]
                    }
                }
            }(a), f = -1;
            return {
                getInteractionToNextPaint: function() {
                    return f >= 0 ? {
                        value: Math.min(f, bo),
                        targetSelector: i
                    } : a() ? {
                        value: 0
                    } : void 0
                },
                setViewEnd: function(t) {
                    u = t,
                    s()
                },
                stop: r.subscribe(0, (function(n) {
                    for (var r = 0, o = n; r < o.length; r++) {
                        var a = o[r];
                        (a.entryType === vr.EVENT || a.entryType === vr.FIRST_INPUT) && a.interactionId && a.startTime >= e && a.startTime <= u && c.process(a)
                    }
                    var s = c.estimateP98Interaction();
                    s && s.duration !== f && (f = s.duration,
                    i = s.target && dr(s.target) ? bi(s.target, t.actionNameAttribute) : void 0)
                }
                )).unsubscribe
            }
        }
        function wo(t) {
            return go || (go = function(t) {
                return new et((function(e) {
                    var n = L((function() {
                        e.notify(Co())
                    }
                    ), 200).throttled;
                    return ye(t, window, oe.RESIZE, n, {
                        capture: !0,
                        passive: !0
                    }).stop
                }
                ))
            }(t)),
            go
        }
        function Co() {
            var t = window.visualViewport;
            return t ? {
                width: Number(t.width * t.scale),
                height: Number(t.height * t.scale)
            } : {
                width: Number(window.innerWidth || 0),
                height: Number(window.innerHeight || 0)
            }
        }
        var Eo = pt;
        function To(t, e, n, r) {
            void 0 === r && (r = function(t, e) {
                void 0 === e && (e = Eo);
                return new et((function(n) {
                    function r() {
                        var t, e, r, i, o, a;
                        n.notify((a = window.visualViewport,
                        o = a ? a.pageTop - a.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0,
                        t = Math.round(o),
                        e = Co().height,
                        r = Math.round((document.scrollingElement || document.documentElement).scrollHeight),
                        i = Math.round(e + t),
                        {
                            scrollHeight: r,
                            scrollDepth: i,
                            scrollTop: t
                        }))
                    }
                    if (window.ResizeObserver) {
                        var i = L(r, e, {
                            leading: !1,
                            trailing: !0
                        })
                          , o = document.scrollingElement || document.documentElement
                          , a = new ResizeObserver(v(i.throttled));
                        a.observe(o);
                        var s = ye(t, window, oe.SCROLL, i.throttled, {
                            passive: !0
                        });
                        return function() {
                            i.cancel(),
                            a.unobserve(o),
                            s.stop()
                        }
                    }
                }
                ))
            }(t));
            var i = 0
              , o = 0
              , a = 0
              , s = r.subscribe((function(t) {
                var r = t.scrollDepth
                  , s = t.scrollTop
                  , u = t.scrollHeight
                  , c = !1;
                if (r > i && (i = r,
                c = !0),
                u > o) {
                    o = u;
                    var f = Tt();
                    a = xt(e.relative, f),
                    c = !0
                }
                c && n({
                    maxDepth: Math.min(i, o),
                    maxDepthScrollTop: s,
                    maxScrollHeight: o,
                    maxScrollHeightTime: a
                })
            }
            ));
            return {
                stop: function() {
                    return s.unsubscribe()
                }
            }
        }
        function _o(t, e, n, r, i, o) {
            var a = {}
              , s = function(t, e, n, r, i, o) {
                var a = "initial_load" === r
                  , s = !0
                  , u = [];
                function c() {
                    !s && !a && u.length > 0 && o(Math.max.apply(Math, u))
                }
                return {
                    stop: Qr(t, e, n, (function(t) {
                        s && (s = !1,
                        t.hadActivity && u.push(xt(i.timeStamp, t.end)),
                        c())
                    }
                    )).stop,
                    setLoadEvent: function(t) {
                        a && (a = !1,
                        u.push(t),
                        c())
                    }
                }
            }(t, e, n, i, o, (function(t) {
                a.loadingTime = t,
                r()
            }
            ))
              , u = s.stop
              , c = s.setLoadEvent
              , f = To(n, o, (function(t) {
                a.scroll = t
            }
            )).stop
              , l = lo(n, t, (function(t) {
                a.cumulativeLayoutShift = t,
                r()
            }
            )).stop
              , d = So(n, o.relative, i, t)
              , v = d.stop
              , p = d.getInteractionToNextPaint;
            return {
                stop: function() {
                    u(),
                    l(),
                    f()
                },
                stopINPTracking: v,
                setLoadEvent: c,
                setViewEnd: d.setViewEnd,
                getCommonViewMetrics: function() {
                    return a.interactionToNextPaint = p(),
                    a
                }
            }
        }
        var ko = 3e3
          , xo = 5 * mt
          , Ao = 5 * mt;
        function Io(t, e, n, r, i, o, a) {
            var u, c = new Set, f = l("initial_load", kt(), a);
            function l(i, o, a) {
                var u = function(t, e, n, r, i, o, a) {
                    void 0 === o && (o = _t());
                    var u, c, f, l, d = xe(), v = new et, p = {}, m = 0, g = D(r), y = !0;
                    a && (c = a.name,
                    f = a.service,
                    l = a.version);
                    var h = {
                        id: d,
                        name: c,
                        startClocks: o,
                        service: f,
                        version: l
                    };
                    t.notify(2, h),
                    t.notify(3, h);
                    var b = L(q, ko, {
                        leading: !1
                    })
                      , S = b.throttled
                      , w = b.cancel
                      , C = _o(t, e, n, S, i, o)
                      , E = C.setLoadEvent
                      , T = C.setViewEnd
                      , _ = C.stop
                      , k = C.stopINPTracking
                      , x = C.getCommonViewMetrics
                      , A = "initial_load" === i ? fo(t, n, E, S) : {
                        stop: P,
                        initialViewMetrics: {}
                    }
                      , R = A.stop
                      , U = A.initialViewMetrics
                      , M = function(t, e, n) {
                        var r = Zr({
                            lifeCycle: t,
                            isChildEvent: function(t) {
                                return t.view.id === e
                            },
                            onChange: n
                        });
                        return {
                            stop: r.stop,
                            eventCounts: r.eventCounts
                        }
                    }(t, d, S)
                      , B = M.stop
                      , V = M.eventCounts
                      , F = O(q, xo);
                    function q() {
                        w(),
                        m += 1;
                        var e = void 0 === u ? Et() : u.timeStamp;
                        t.notify(4, {
                            customTimings: p,
                            documentVersion: m,
                            id: d,
                            name: c,
                            service: f,
                            version: l,
                            loadingType: i,
                            location: g,
                            startClocks: o,
                            commonViewMetrics: x(),
                            initialViewMetrics: U,
                            duration: xt(o.timeStamp, e),
                            isActive: void 0 === u,
                            sessionIsActive: y,
                            eventCounts: V
                        })
                    }
                    return q(),
                    {
                        name: c,
                        service: f,
                        version: l,
                        stopObservable: v,
                        end: function(e) {
                            var n, r, i = this;
                            void 0 === e && (e = {}),
                            u || (u = null !== (n = e.endClocks) && void 0 !== n ? n : _t(),
                            y = null === (r = e.sessionIsActive) || void 0 === r || r,
                            t.notify(5, {
                                endClocks: u
                            }),
                            t.notify(6, {
                                endClocks: u
                            }),
                            N(F),
                            T(u.relative),
                            _(),
                            q(),
                            I((function() {
                                i.stop()
                            }
                            ), Ao))
                        },
                        stop: function() {
                            R(),
                            B(),
                            k(),
                            v.notify()
                        },
                        addTiming: function(t, e) {
                            if (!u) {
                                var n = function(t) {
                                    return t < yt
                                }(e) ? e : xt(o.timeStamp, e);
                                p[function(t) {
                                    var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                                    e !== t && s.warn("Invalid timing name: ".concat(t, ", sanitized to: ").concat(e));
                                    return e
                                }(t)] = n,
                                S()
                            }
                        }
                    }
                }(e, n, r, t, i, o, a);
                return c.add(u),
                u.stopObservable.subscribe((function() {
                    c.delete(u)
                }
                )),
                u
            }
            return e.subscribe(10, (function() {
                f = l("route_change", void 0, {
                    name: f.name,
                    service: f.service,
                    version: f.version
                })
            }
            )),
            e.subscribe(9, (function() {
                f.end({
                    sessionIsActive: !1
                })
            }
            )),
            e.subscribe(11, (function(t) {
                t.reason !== Kn.UNLOADING && t.reason !== Kn.PAGEHIDE || f.end()
            }
            )),
            o && (u = function(t) {
                return t.subscribe((function(t) {
                    var e, n, r, i, o = t.oldLocation, a = t.newLocation;
                    n = a,
                    (e = o).pathname === n.pathname && (r = n.hash,
                    "" !== (i = r.substring(1)) && document.getElementById(i) || Ro(n.hash) === Ro(e.hash)) || (f.end(),
                    f = l("route_change"))
                }
                ))
            }(i)),
            {
                addTiming: function(t, e) {
                    void 0 === e && (e = Et()),
                    f.addTiming(t, e)
                },
                startView: function(t, e) {
                    f.end({
                        endClocks: e
                    }),
                    f = l("route_change", e, t)
                },
                stop: function() {
                    null == u || u.unsubscribe(),
                    f.end(),
                    c.forEach((function(t) {
                        return t.stop()
                    }
                    ))
                }
            }
        }
        function Ro(t) {
            var e = t.indexOf("?");
            return e < 0 ? t : t.slice(0, e)
        }
        function Oo(t, e, n, r, i, o, a, s, u) {
            return t.subscribe(4, (function(n) {
                return t.notify(12, function(t, e, n, r, i) {
                    var o, a, s, u, c, f, l, d, v, p, m, g, y, h, b = r.getReplayStats(t.id), S = n.findFeatureFlagEvaluations(t.startClocks.relative), w = i.findAll(t.startClocks.relative, t.duration), C = {
                        _dd: {
                            document_version: t.documentVersion,
                            replay_stats: b,
                            page_states: w,
                            configuration: {
                                start_session_replay_recording_manually: e.startSessionReplayRecordingManually
                            }
                        },
                        date: t.startClocks.timeStamp,
                        type: "view",
                        view: {
                            action: {
                                count: t.eventCounts.actionCount
                            },
                            frustration: {
                                count: t.eventCounts.frustrationCount
                            },
                            cumulative_layout_shift: null === (o = t.commonViewMetrics.cumulativeLayoutShift) || void 0 === o ? void 0 : o.value,
                            cumulative_layout_shift_target_selector: null === (a = t.commonViewMetrics.cumulativeLayoutShift) || void 0 === a ? void 0 : a.targetSelector,
                            first_byte: wt(null === (s = t.initialViewMetrics.navigationTimings) || void 0 === s ? void 0 : s.firstByte),
                            dom_complete: wt(null === (u = t.initialViewMetrics.navigationTimings) || void 0 === u ? void 0 : u.domComplete),
                            dom_content_loaded: wt(null === (c = t.initialViewMetrics.navigationTimings) || void 0 === c ? void 0 : c.domContentLoaded),
                            dom_interactive: wt(null === (f = t.initialViewMetrics.navigationTimings) || void 0 === f ? void 0 : f.domInteractive),
                            error: {
                                count: t.eventCounts.errorCount
                            },
                            first_contentful_paint: wt(t.initialViewMetrics.firstContentfulPaint),
                            first_input_delay: wt(null === (l = t.initialViewMetrics.firstInput) || void 0 === l ? void 0 : l.delay),
                            first_input_time: wt(null === (d = t.initialViewMetrics.firstInput) || void 0 === d ? void 0 : d.time),
                            first_input_target_selector: null === (v = t.initialViewMetrics.firstInput) || void 0 === v ? void 0 : v.targetSelector,
                            interaction_to_next_paint: wt(null === (p = t.commonViewMetrics.interactionToNextPaint) || void 0 === p ? void 0 : p.value),
                            interaction_to_next_paint_target_selector: null === (m = t.commonViewMetrics.interactionToNextPaint) || void 0 === m ? void 0 : m.targetSelector,
                            is_active: t.isActive,
                            name: t.name,
                            largest_contentful_paint: wt(null === (g = t.initialViewMetrics.largestContentfulPaint) || void 0 === g ? void 0 : g.value),
                            largest_contentful_paint_target_selector: null === (y = t.initialViewMetrics.largestContentfulPaint) || void 0 === y ? void 0 : y.targetSelector,
                            load_event: wt(null === (h = t.initialViewMetrics.navigationTimings) || void 0 === h ? void 0 : h.loadEvent),
                            loading_time: No(wt(t.commonViewMetrics.loadingTime)),
                            loading_type: t.loadingType,
                            long_task: {
                                count: t.eventCounts.longTaskCount
                            },
                            resource: {
                                count: t.eventCounts.resourceCount
                            },
                            time_spent: wt(t.duration)
                        },
                        feature_flags: S && !V(S) ? S : void 0,
                        display: t.commonViewMetrics.scroll ? {
                            scroll: {
                                max_depth: t.commonViewMetrics.scroll.maxDepth,
                                max_depth_scroll_top: t.commonViewMetrics.scroll.maxDepthScrollTop,
                                max_scroll_height: t.commonViewMetrics.scroll.maxScrollHeight,
                                max_scroll_height_time: wt(t.commonViewMetrics.scroll.maxScrollHeightTime)
                            }
                        } : void 0,
                        session: {
                            has_replay: !!b || void 0,
                            is_active: !!t.sessionIsActive && void 0
                        },
                        privacy: {
                            replay_level: e.defaultPrivacyLevel
                        }
                    };
                    V(t.customTimings) || (C.view.custom_timings = function(t, e) {
                        for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
                            var o = i[r];
                            n[o] = e(t[o])
                        }
                        return n
                    }(t.customTimings, wt));
                    return {
                        rawRumEvent: C,
                        startTime: t.startClocks.relative,
                        domainContext: {
                            location: t.location
                        }
                    }
                }(n, e, o, s, a))
            }
            )),
            Io(n, t, r, e, i, !e.trackViewsManually, u)
        }
        function No(t) {
            return dt(t) && t < 0 ? void 0 : t
        }
        var Lo = mt
          , Po = je
          , Uo = [];
        function Mo(t, e, n, r) {
            var i = new et
              , o = new et
              , a = Tn(t.sessionStoreStrategyType, e, n);
            Uo.push((function() {
                return a.stop()
            }
            ));
            var s = new Br(Po);
            function u() {
                return {
                    id: a.getSession().id,
                    trackingType: a.getSession()[e]
                }
            }
            return Uo.push((function() {
                return s.stop()
            }
            )),
            a.renewObservable.subscribe((function() {
                s.add(u(), Tt()),
                i.notify()
            }
            )),
            a.expireObservable.subscribe((function() {
                o.notify(),
                s.closeActive(Tt())
            }
            )),
            a.expandOrRenewSession(),
            s.add(u(), kt().relative),
            r.observable.subscribe((function() {
                r.isGranted() ? a.expandOrRenewSession() : a.expire()
            }
            )),
            function(t, e) {
                var n = he(t, window, [oe.CLICK, oe.TOUCH_START, oe.KEY_DOWN, oe.SCROLL], e, {
                    capture: !0,
                    passive: !0
                }).stop;
                Uo.push(n)
            }(t, (function() {
                r.isGranted() && a.expandOrRenewSession()
            }
            )),
            function(t, e) {
                var n = function() {
                    "visible" === document.visibilityState && e()
                }
                  , r = ye(t, document, oe.VISIBILITY_CHANGE, n).stop;
                Uo.push(r);
                var i = O(n, Lo);
                Uo.push((function() {
                    N(i)
                }
                ))
            }(t, (function() {
                return a.expandSession()
            }
            )),
            function(t, e) {
                var n = ye(t, window, oe.RESUME, e, {
                    capture: !0
                }).stop;
                Uo.push(n)
            }(t, (function() {
                return a.restartSession()
            }
            )),
            {
                findActiveSession: function(t) {
                    return s.find(t)
                },
                renewObservable: i,
                expireObservable: o,
                expire: a.expire
            }
        }
        var Do = "rum";
        function Bo(t, e, n) {
            var r = Mo(t, Do, (function(e) {
                return function(t, e) {
                    var n;
                    n = function(t) {
                        return "0" === t || "1" === t || "2" === t
                    }(e) ? e : ct(t.sessionSampleRate) ? ct(t.sessionReplaySampleRate) ? "1" : "2" : "0";
                    return {
                        trackingType: n,
                        isTracked: Vo(n)
                    }
                }(t, e)
            }
            ), n);
            return r.expireObservable.subscribe((function() {
                e.notify(9)
            }
            )),
            r.renewObservable.subscribe((function() {
                e.notify(10)
            }
            )),
            {
                findTrackedSession: function(t) {
                    var e = r.findActiveSession(t);
                    if (e && Vo(e.trackingType))
                        return {
                            id: e.id,
                            sessionReplayAllowed: "1" === e.trackingType
                        }
                },
                expire: r.expire,
                expireObservable: r.expireObservable
            }
        }
        function Vo(t) {
            return "2" === t || "1" === t
        }
        var Fo = function() {
            function t(t, e, n, r) {
                var i = this;
                this.encoder = t,
                this.request = e,
                this.flushController = n,
                this.messageBytesLimit = r,
                this.upsertBuffer = {},
                this.flushSubscription = this.flushController.flushObservable.subscribe((function(t) {
                    return i.flush(t)
                }
                ))
            }
            return t.prototype.add = function(t) {
                this.addOrUpdate(t)
            }
            ,
            t.prototype.upsert = function(t, e) {
                this.addOrUpdate(t, e)
            }
            ,
            t.prototype.stop = function() {
                this.flushSubscription.unsubscribe()
            }
            ,
            t.prototype.flush = function(t) {
                var e = b(this.upsertBuffer).join("\n");
                this.upsertBuffer = {};
                var n, r = (n = t.reason,
                g(b(Kn), n)), i = r ? this.request.sendOnExit : this.request.send;
                if (r && this.encoder.isAsync) {
                    var o = this.encoder.finishSync();
                    o.outputBytesCount && i(qo(o, t));
                    var a = [o.pendingData, e].filter(Boolean).join("\n");
                    a && i({
                        data: a,
                        bytesCount: x(a),
                        flushReason: t.reason
                    })
                } else
                    e && this.encoder.write(this.encoder.isEmpty ? e : "\n".concat(e)),
                    this.encoder.finish((function(e) {
                        i(qo(e, t))
                    }
                    ))
            }
            ,
            t.prototype.addOrUpdate = function(t, e) {
                var n = U(t)
                  , r = this.encoder.estimateEncodedBytesCount(n);
                r >= this.messageBytesLimit ? s.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(this.messageBytesLimit, "KB.")) : (this.hasMessageFor(e) && this.remove(e),
                this.push(n, r, e))
            }
            ,
            t.prototype.push = function(t, e, n) {
                var r = this;
                this.flushController.notifyBeforeAddMessage(e),
                void 0 !== n ? (this.upsertBuffer[n] = t,
                this.flushController.notifyAfterAddMessage()) : this.encoder.write(this.encoder.isEmpty ? t : "\n".concat(t), (function(t) {
                    r.flushController.notifyAfterAddMessage(t - e)
                }
                ))
            }
            ,
            t.prototype.remove = function(t) {
                var e = this.upsertBuffer[t];
                delete this.upsertBuffer[t];
                var n = this.encoder.estimateEncodedBytesCount(e);
                this.flushController.notifyAfterRemoveMessage(n)
            }
            ,
            t.prototype.hasMessageFor = function(t) {
                return void 0 !== t && void 0 !== this.upsertBuffer[t]
            }
            ,
            t
        }();
        function qo(t, e) {
            return {
                data: "string" == typeof t.output ? t.output : new Blob([t.output],{
                    type: "text/plain"
                }),
                bytesCount: t.outputBytesCount,
                encoding: t.encoding,
                flushReason: e.reason
            }
        }
        var Ho = 80 * T
          , Go = 32
          , jo = 3 * _
          , zo = mt
          , Yo = pt;
        function Wo(t, e, n, r, i) {
            0 === e.transportStatus && 0 === e.queuedPayloads.size() && e.bandwidthMonitor.canHandle(t) ? Ko(t, e, n, {
                onSuccess: function() {
                    return Zo(0, e, n, r, i)
                },
                onFailure: function() {
                    e.queuedPayloads.enqueue(t),
                    Jo(e, n, r, i)
                }
            }) : e.queuedPayloads.enqueue(t)
        }
        function Jo(t, e, n, r) {
            2 === t.transportStatus && I((function() {
                Ko(t.queuedPayloads.first(), t, e, {
                    onSuccess: function() {
                        t.queuedPayloads.dequeue(),
                        t.currentBackoffTime = Yo,
                        Zo(1, t, e, n, r)
                    },
                    onFailure: function() {
                        t.currentBackoffTime = Math.min(zo, 2 * t.currentBackoffTime),
                        Jo(t, e, n, r)
                    }
                })
            }
            ), t.currentBackoffTime)
        }
        function Ko(t, e, n, r) {
            var i = r.onSuccess
              , o = r.onFailure;
            e.bandwidthMonitor.add(t),
            n(t, (function(n) {
                e.bandwidthMonitor.remove(t),
                !function(t) {
                    return "opaque" !== t.type && (0 === t.status && !navigator.onLine || 408 === t.status || 429 === t.status || (e = t.status,
                    e >= 500));
                    var e
                }(n) ? (e.transportStatus = 0,
                i()) : (e.transportStatus = e.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2,
                t.retry = {
                    count: t.retry ? t.retry.count + 1 : 1,
                    lastFailureStatus: n.status
                },
                o())
            }
            ))
        }
        function Zo(t, e, n, r, i) {
            0 === t && e.queuedPayloads.isFull() && !e.queueFullReported && (i({
                message: "Reached max ".concat(r, " events size queued for upload: ").concat(jo / _, "MiB"),
                source: Er.AGENT,
                startClocks: _t()
            }),
            e.queueFullReported = !0);
            var o = e.queuedPayloads;
            for (e.queuedPayloads = $o(); o.size() > 0; )
                Wo(o.dequeue(), e, n, r, i)
        }
        function $o() {
            var t = [];
            return {
                bytesCount: 0,
                enqueue: function(e) {
                    this.isFull() || (t.push(e),
                    this.bytesCount += e.bytesCount)
                },
                first: function() {
                    return t[0]
                },
                dequeue: function() {
                    var e = t.shift();
                    return e && (this.bytesCount -= e.bytesCount),
                    e
                },
                size: function() {
                    return t.length
                },
                isFull: function() {
                    return this.bytesCount >= jo
                }
            }
        }
        function Xo(t, e, n, r) {
            var i = {
                transportStatus: 0,
                currentBackoffTime: Yo,
                bandwidthMonitor: {
                    ongoingRequestCount: 0,
                    ongoingByteCount: 0,
                    canHandle: function(t) {
                        return 0 === this.ongoingRequestCount || this.ongoingByteCount + t.bytesCount <= Ho && this.ongoingRequestCount < Go
                    },
                    add: function(t) {
                        this.ongoingRequestCount += 1,
                        this.ongoingByteCount += t.bytesCount
                    },
                    remove: function(t) {
                        this.ongoingRequestCount -= 1,
                        this.ongoingByteCount -= t.bytesCount
                    }
                },
                queuedPayloads: $o(),
                queueFullReported: !1
            }
              , o = function(r, i) {
                return function(t, e, n, r, i) {
                    var o = function() {
                        try {
                            return window.Request && "keepalive"in new Request("http://a")
                        } catch (t) {
                            return !1
                        }
                    }() && r.bytesCount < n;
                    if (o) {
                        var a = e.build("fetch", r);
                        fetch(a, {
                            method: "POST",
                            body: r.data,
                            keepalive: !0,
                            mode: "cors"
                        }).then(v((function(t) {
                            return null == i ? void 0 : i({
                                status: t.status,
                                type: t.type
                            })
                        }
                        )), v((function() {
                            var n = e.build("xhr", r);
                            ta(t, n, r.data, i)
                        }
                        )))
                    } else {
                        var s = e.build("xhr", r);
                        ta(t, s, r.data, i)
                    }
                }(t, e, n, r, i)
            };
            return {
                send: function(t) {
                    Wo(t, i, o, e.trackType, r)
                },
                sendOnExit: function(r) {
                    !function(t, e, n, r) {
                        var i = !!navigator.sendBeacon && r.bytesCount < n;
                        if (i)
                            try {
                                var o = e.build("beacon", r);
                                if (navigator.sendBeacon(o, r.data))
                                    return
                            } catch (t) {
                                !function(t) {
                                    Qo || (Qo = !0,
                                    pe(t))
                                }(t)
                            }
                        var a = e.build("xhr", r);
                        ta(t, a, r.data)
                    }(t, e, n, r)
                }
            }
        }
        var Qo = !1;
        function ta(t, e, n, r) {
            var i = new XMLHttpRequest;
            i.open("POST", e, !0),
            n instanceof Blob && i.setRequestHeader("Content-Type", n.type),
            ye(t, i, "loadend", (function() {
                null == r || r({
                    status: i.status
                })
            }
            ), {
                once: !0
            }),
            i.send(n)
        }
        function ea(t) {
            var e, n = t.messagesLimit, r = t.bytesLimit, i = t.durationLimit, o = t.pageExitObservable, a = t.sessionExpireObservable, s = o.subscribe((function(t) {
                return d(t.reason)
            }
            )), u = a.subscribe((function() {
                return d("session_expire")
            }
            )), c = new et((function() {
                return function() {
                    s.unsubscribe(),
                    u.unsubscribe()
                }
            }
            )), f = 0, l = 0;
            function d(t) {
                if (0 !== l) {
                    var e = l
                      , n = f;
                    l = 0,
                    f = 0,
                    v(),
                    c.notify({
                        reason: t,
                        messagesCount: e,
                        bytesCount: n
                    })
                }
            }
            function v() {
                R(e),
                e = void 0
            }
            return {
                flushObservable: c,
                get messagesCount() {
                    return l
                },
                notifyBeforeAddMessage: function(t) {
                    f + t >= r && d("bytes_limit"),
                    l += 1,
                    f += t,
                    void 0 === e && (e = I((function() {
                        d("duration_limit")
                    }
                    ), i))
                },
                notifyAfterAddMessage: function(t) {
                    void 0 === t && (t = 0),
                    f += t,
                    l >= n ? d("messages_limit") : f >= r && d("bytes_limit")
                },
                notifyAfterRemoveMessage: function(t) {
                    f -= t,
                    0 === (l -= 1) && v()
                }
            }
        }
        function na(t, e, n, r, i, o, a) {
            var s = t.replica
              , u = function(t, e, n, r, i, o) {
                var a = u(t, e)
                  , s = n && u(t, n);
                function u(t, e) {
                    var n = e.endpoint
                      , a = e.encoder;
                    return new Fo(a,Xo(t, n, t.batchBytesLimit, r),ea({
                        messagesLimit: t.batchMessagesLimit,
                        bytesLimit: t.batchBytesLimit,
                        durationLimit: t.flushTimeout,
                        pageExitObservable: i,
                        sessionExpireObservable: o
                    }),t.messageBytesLimit)
                }
                return {
                    flushObservable: a.flushController.flushObservable,
                    add: function(t, e) {
                        void 0 === e && (e = !0),
                        a.add(t),
                        s && e && s.add(n.transformMessage ? n.transformMessage(t) : t)
                    },
                    upsert: function(t, e) {
                        a.upsert(t, e),
                        s && s.upsert(n.transformMessage ? n.transformMessage(t) : t, e)
                    },
                    stop: function() {
                        a.stop(),
                        null == s || s.stop()
                    }
                }
            }(t, {
                endpoint: t.rumEndpointBuilder,
                encoder: a(2)
            }, s && {
                endpoint: s.rumEndpointBuilder,
                transformMessage: function(t) {
                    return J(t, {
                        application: {
                            id: s.applicationId
                        }
                    })
                },
                encoder: a(3)
            }, r, i, o);
            return e.subscribe(13, (function(t) {
                "view" === t.type ? u.upsert(t, t.view.id) : u.add(t)
            }
            )),
            n.subscribe((function(e) {
                return u.add(e, function(t) {
                    return t.site === $t
                }(t))
            }
            )),
            u
        }
        var ra = je;
        function ia(t, e) {
            var n = D(e);
            return new et((function(r) {
                var i = function(t, e) {
                    var n = Fr(history, "pushState", (function(t) {
                        (0,
                        t.onPostCall)(e)
                    }
                    )).stop
                      , r = Fr(history, "replaceState", (function(t) {
                        (0,
                        t.onPostCall)(e)
                    }
                    )).stop
                      , i = ye(t, window, oe.POP_STATE, e).stop;
                    return {
                        stop: function() {
                            n(),
                            r(),
                            i()
                        }
                    }
                }(t, a).stop
                  , o = function(t, e) {
                    return ye(t, window, oe.HASH_CHANGE, e)
                }(t, a).stop;
                function a() {
                    if (n.href !== e.href) {
                        var t = D(e);
                        r.notify({
                            newLocation: t,
                            oldLocation: n
                        }),
                        n = t
                    }
                }
                return function() {
                    i(),
                    o()
                }
            }
            ))
        }
        var oa = je;
        var aa, sa, ua, ca = 10 * pt;
        function fa() {
            0 !== aa.batchCount && (ve("Customer data measures", aa),
            va())
        }
        function la(t, e) {
            t.sum += e,
            t.min = Math.min(t.min, e),
            t.max = Math.max(t.max, e)
        }
        function da(t, e) {
            t.sum += e.sum,
            t.min = Math.min(t.min, e.min),
            t.max = Math.max(t.max, e.max)
        }
        function va() {
            aa = {
                batchCount: 0,
                batchBytesCount: {
                    min: 1 / 0,
                    max: 0,
                    sum: 0
                },
                batchMessagesCount: {
                    min: 1 / 0,
                    max: 0,
                    sum: 0
                },
                globalContextBytes: {
                    min: 1 / 0,
                    max: 0,
                    sum: 0
                },
                userContextBytes: {
                    min: 1 / 0,
                    max: 0,
                    sum: 0
                },
                featureFlagBytes: {
                    min: 1 / 0,
                    max: 0,
                    sum: 0
                }
            }
        }
        function pa() {
            ua = !1,
            sa = {
                globalContextBytes: {
                    min: 1 / 0,
                    max: 0,
                    sum: 0
                },
                userContextBytes: {
                    min: 1 / 0,
                    max: 0,
                    sum: 0
                },
                featureFlagBytes: {
                    min: 1 / 0,
                    max: 0,
                    sum: 0
                }
            }
        }
        var ma = 4e3
          , ga = 500
          , ya = je;
        function ha(t, e) {
            void 0 === e && (e = ga);
            var n, r = new Br(ya,ma);
            o(ba(), Tt());
            var i = he(t, window, [oe.PAGE_SHOW, oe.FOCUS, oe.BLUR, oe.VISIBILITY_CHANGE, oe.RESUME, oe.FREEZE, oe.PAGE_HIDE], (function(t) {
                o(function(t) {
                    if (t.type === oe.FREEZE)
                        return "frozen";
                    if (t.type === oe.PAGE_HIDE)
                        return t.persisted ? "frozen" : "terminated";
                    return ba()
                }(t), t.timeStamp)
            }
            ), {
                capture: !0
            }).stop;
            function o(t, e) {
                void 0 === e && (e = Tt()),
                t !== n && (n = t,
                r.closeActive(e),
                r.add({
                    state: n,
                    startTime: e
                }, e))
            }
            var a = {
                findAll: function(t, n) {
                    var i = r.findAll(t, n);
                    if (0 !== i.length) {
                        for (var o = [], a = Math.max(0, i.length - e), s = i.length - 1; s >= a; s--) {
                            var u = i[s]
                              , c = xt(t, u.startTime);
                            o.push({
                                state: u.state,
                                start: wt(c)
                            })
                        }
                        return o
                    }
                },
                wasInPageStateAt: function(t, e) {
                    return a.wasInPageStateDuringPeriod(t, e, 0)
                },
                wasInPageStateDuringPeriod: function(t, e, n) {
                    return r.findAll(e, n).some((function(e) {
                        return e.state === t
                    }
                    ))
                },
                addPageState: o,
                stop: function() {
                    i(),
                    r.stop()
                }
            };
            return a
        }
        function ba() {
            return "hidden" === document.visibilityState ? "hidden" : document.hasFocus() ? "active" : "passive"
        }
        function Sa(t, e) {
            var n = new Map;
            return t.subscribe(10, (function() {
                n.clear()
            }
            )),
            {
                startDurationVital: function(t) {
                    n.set(t.name, t)
                },
                stopDurationVital: function(r) {
                    var i = n.get(r.name);
                    if (i) {
                        var o = function(t, e) {
                            return {
                                name: t.name,
                                type: "duration",
                                startClocks: t.startClocks,
                                value: xt(t.startClocks.timeStamp, e.stopClocks.timeStamp),
                                context: J(t.context, e.context)
                            }
                        }(i, r);
                        n.delete(o.name),
                        function(t) {
                            return !e.wasInPageStateDuringPeriod("frozen", t.startClocks.relative, t.value)
                        }(o) && t.notify(12, function(t, e) {
                            var n, r = {
                                date: t.startClocks.timeStamp,
                                vital: {
                                    id: xe(),
                                    type: t.type,
                                    name: t.name,
                                    custom: (n = {},
                                    n[t.name] = t.value,
                                    n)
                                },
                                type: "vital"
                            };
                            e && (r._dd = {
                                vital: {
                                    computed_value: !0
                                }
                            });
                            return {
                                rawRumEvent: r,
                                startTime: t.startClocks.relative,
                                customerContext: t.context,
                                domainContext: {}
                            }
                        }(o, !0))
                    }
                }
            }
        }
        function wa(t, e) {
            var n = window.cookieStore ? function(t) {
                return function(e, n) {
                    return ye(t, window.cookieStore, oe.CHANGE, (function(t) {
                        var r = h(t.changed, (function(t) {
                            return t.name === e
                        }
                        )) || h(t.deleted, (function(t) {
                            return t.name === e
                        }
                        ));
                        r && n(r.value)
                    }
                    )).stop
                }
            }(t) : Ea;
            return new et((function(t) {
                return n(e, (function(e) {
                    return t.notify(e)
                }
                ))
            }
            ))
        }
        var Ca = pt;
        function Ea(t, e) {
            var n = Oe(document.cookie, t)
              , r = O((function() {
                var r = Oe(document.cookie, t);
                r !== n && e(r)
            }
            ), Ca);
            return function() {
                N(r)
            }
        }
        var Ta = "datadog-ci-visibility-test-execution-id";
        function _a(t, e) {
            var n = e.session
              , r = e.viewContext
              , i = e.errorType
              , o = n ? n.id : "no-session-id"
              , a = [];
            void 0 !== i && a.push("error-type=".concat(i)),
            r && (a.push("seed=".concat(r.id)),
            a.push("from=".concat(r.startClocks.timeStamp)));
            var s, u, c, f = (u = (s = t).site,
            c = s.subdomain || function(t) {
                switch (t.site) {
                case Qt:
                case te:
                    return "app";
                case $t:
                    return "dd";
                default:
                    return
                }
            }(s),
            "https://".concat(c ? "".concat(c, ".") : "").concat(u)), l = "/rum/replay/sessions/".concat(o);
            return "".concat(f).concat(l, "?").concat(a.join("&"))
        }
        var ka, xa, Aa, Ia, Ra, Oa = function(t, e, n) {
            void 0 === n && (n = {});
            var r, i, o = G(0), a = rt(o.getOrCreateTracker(2)), u = rt(o.getOrCreateTracker(1)), c = {
                tryToInit: function(t) {
                    r || (r = t)
                },
                update: function(t) {
                    r = t,
                    i.notify()
                },
                isGranted: function() {
                    return r === ot.GRANTED
                },
                observable: i = new et
            };
            function f() {
                return function(t, e, n) {
                    return {
                        context: t.getContext(),
                        user: e.getContext(),
                        hasReplay: !!n.isRecording() || void 0
                    }
                }(a, u, e)
            }
            var l, m, g = Jn(n, f, c, (function(r, i, s, l) {
                st(it.CUSTOM_VITALS) && (h.startDurationVital = v((function(t, e) {
                    g.startDurationVital({
                        name: X(t),
                        startClocks: (null == e ? void 0 : e.startTime) ? bt(e.startTime) : _t(),
                        context: X(null == e ? void 0 : e.context)
                    }),
                    me({
                        feature: "start-duration-vital"
                    })
                }
                )),
                h.stopDurationVital = v((function(t, e) {
                    g.stopDurationVital({
                        name: X(t),
                        stopClocks: (null == e ? void 0 : e.stopTime) ? bt(e.stopTime) : _t(),
                        context: X(null == e ? void 0 : e.context)
                    })
                }
                ))),
                r.storeContextsAcrossPages && (we(i, a, "rum", 2),
                we(i, u, "rum", 1)),
                o.setCompressionStatus(s ? 1 : 2);
                var d = t(r, i, e, o, f, l, s && n.createDeflateEncoder ? function(t) {
                    return n.createDeflateEncoder(i, s, t)
                }
                : Ce, c);
                return e.onRumStart(d.lifeCycle, i, d.session, d.viewContexts, s),
                g = function(t, e) {
                    return C({
                        init: function(t) {
                            Te("DD_RUM", t)
                        },
                        initConfiguration: t
                    }, e)
                }(r, d),
                d
            }
            )), y = v((function(t) {
                var e = "object" == typeof t ? t : {
                    name: t
                };
                g.startView(e),
                me({
                    feature: "start-view"
                })
            }
            )), h = (l = {
                init: v((function(t) {
                    return g.init(t)
                }
                )),
                setTrackingConsent: v((function(t) {
                    c.update(t),
                    me({
                        feature: "set-tracking-consent",
                        tracking_consent: t
                    })
                }
                )),
                setGlobalContextProperty: v((function(t, e) {
                    a.setContextProperty(t, e),
                    me({
                        feature: "set-global-context"
                    })
                }
                )),
                removeGlobalContextProperty: v((function(t) {
                    return a.removeContextProperty(t)
                }
                )),
                getGlobalContext: v((function() {
                    return a.getContext()
                }
                )),
                setGlobalContext: v((function(t) {
                    a.setContext(t),
                    me({
                        feature: "set-global-context"
                    })
                }
                )),
                clearGlobalContext: v((function() {
                    return a.clearContext()
                }
                )),
                getInternalContext: v((function(t) {
                    return g.getInternalContext(t)
                }
                )),
                getInitConfiguration: v((function() {
                    return W(g.initConfiguration)
                }
                )),
                addAction: v((function(t, e) {
                    g.addAction({
                        name: X(t),
                        context: X(e),
                        startClocks: _t(),
                        type: "custom"
                    }),
                    me({
                        feature: "add-action"
                    })
                }
                )),
                addError: function(t, e) {
                    var n = jt();
                    p((function() {
                        g.addError({
                            error: t,
                            handlingStack: n,
                            context: X(e),
                            startClocks: _t()
                        }),
                        me({
                            feature: "add-error"
                        })
                    }
                    ))
                },
                addTiming: v((function(t, e) {
                    g.addTiming(X(t), e)
                }
                )),
                setUser: v((function(t) {
                    (function(t) {
                        var e = "object" === z(t);
                        return e || s.error("Unsupported user:", t),
                        e
                    }
                    )(t) && u.setContext(Ee(t)),
                    me({
                        feature: "set-user"
                    })
                }
                )),
                getUser: v((function() {
                    return u.getContext()
                }
                )),
                setUserProperty: v((function(t, e) {
                    var n, r = Ee((n = {},
                    n[t] = e,
                    n))[t];
                    u.setContextProperty(t, r),
                    me({
                        feature: "set-user"
                    })
                }
                )),
                removeUserProperty: v((function(t) {
                    return u.removeContextProperty(t)
                }
                )),
                clearUser: v((function() {
                    return u.clearContext()
                }
                )),
                startView: y,
                stopSession: v((function() {
                    g.stopSession(),
                    me({
                        feature: "stop-session"
                    })
                }
                )),
                addFeatureFlagEvaluation: v((function(t, e) {
                    g.addFeatureFlagEvaluation(X(t), X(e)),
                    me({
                        feature: "add-feature-flag-evaluation"
                    })
                }
                )),
                getSessionReplayLink: v((function() {
                    return e.getSessionReplayLink()
                }
                )),
                startSessionReplayRecording: v((function() {
                    e.start(),
                    me({
                        feature: "start-session-replay-recording"
                    })
                }
                )),
                stopSessionReplayRecording: v((function() {
                    return e.stop()
                }
                ))
            },
            m = C({
                version: "5.18.0",
                onReady: function(t) {
                    t()
                }
            }, l),
            Object.defineProperty(m, "_setDebug", {
                get: function() {
                    return d
                },
                enumerable: !1
            }),
            m);
            return h
        }((function(t, e, n, r, i, o, a, s) {
            var u = []
              , c = new Ur;
            c.subscribe(13, (function(t) {
                return ne("rum", t)
            }
            ));
            var f = function(t) {
                var e = de("browser-rum-sdk", t);
                if (ke()) {
                    var n = _e();
                    e.observable.subscribe((function(t) {
                        return n.send("internal_telemetry", t)
                    }
                    ))
                }
                return e
            }(e);
            f.setContextProvider((function() {
                var t, n;
                return {
                    application: {
                        id: e.applicationId
                    },
                    session: {
                        id: null === (t = m.findTrackedSession()) || void 0 === t ? void 0 : t.id
                    },
                    view: {
                        id: null === (n = w.findView()) || void 0 === n ? void 0 : n.id
                    },
                    action: {
                        id: _.findActionId()
                    }
                }
            }
            ));
            var l = function(t) {
                c.notify(14, {
                    error: t
                }),
                ve("Error reported to customer", {
                    "error.message": t.message
                })
            }
              , d = function(t, e) {
                var n = new Br(oa);
                return t.subscribe(2, (function(t) {
                    var r = t.startClocks;
                    n.add({}, r.relative),
                    e.resetCustomerData()
                }
                )),
                t.subscribe(6, (function(t) {
                    var e = t.endClocks;
                    n.closeActive(e.relative)
                }
                )),
                {
                    findFeatureFlagEvaluations: function(t) {
                        return n.find(t)
                    },
                    addFeatureFlagEvaluation: function(t, r) {
                        var i = n.find();
                        i && (i[t] = r,
                        e.updateCustomerData(i))
                    },
                    stop: function() {
                        return e.stop()
                    }
                }
            }(c, r.getOrCreateTracker(0))
              , v = function(t) {
                return new et((function(e) {
                    var n = st(it.PAGEHIDE)
                      , r = he(t, window, [oe.VISIBILITY_CHANGE, oe.FREEZE, oe.PAGE_HIDE], (function(t) {
                        t.type === oe.PAGE_HIDE && n ? e.notify({
                            reason: Kn.PAGEHIDE
                        }) : t.type === oe.VISIBILITY_CHANGE && "hidden" === document.visibilityState ? e.notify({
                            reason: Kn.HIDDEN
                        }) : t.type === oe.FREEZE && e.notify({
                            reason: Kn.FROZEN
                        })
                    }
                    ), {
                        capture: !0
                    }).stop
                      , i = P;
                    return n || (i = ye(t, window, oe.BEFORE_UNLOAD, (function() {
                        e.notify({
                            reason: Kn.UNLOADING
                        })
                    }
                    )).stop),
                    function() {
                        r(),
                        i()
                    }
                }
                ))
            }(e)
              , p = v.subscribe((function(t) {
                c.notify(11, t)
            }
            ));
            u.push((function() {
                return p.unsubscribe()
            }
            ));
            var m = ke() ? function() {
                var t, e, n = {
                    id: "00000000-aaaa-0000-aaaa-000000000000",
                    sessionReplayAllowed: (t = "records",
                    e = _e(),
                    !!e && g(e.getCapabilities(), t))
                };
                return {
                    findTrackedSession: function() {
                        return n
                    },
                    expire: P,
                    expireObservable: new et
                }
            }() : Bo(e, c, s);
            if (ke())
                !function(t) {
                    var e = _e();
                    t.subscribe(13, (function(t) {
                        e.send("rum", t)
                    }
                    ))
                }(c);
            else {
                var y = na(e, c, f.observable, l, v, m.expireObservable, a);
                u.push((function() {
                    return y.stop()
                }
                )),
                function(t, e, n, r, i) {
                    e.enabled && ct(t.customerDataTelemetrySampleRate) && (va(),
                    pa(),
                    n.subscribe(13, (function(t) {
                        ua = !0,
                        la(sa.globalContextBytes, r.getOrCreateTracker(2).getBytesCount()),
                        la(sa.userContextBytes, r.getOrCreateTracker(1).getBytesCount()),
                        la(sa.featureFlagBytes, g(["view", "error"], t.type) ? r.getOrCreateTracker(0).getBytesCount() : 0)
                    }
                    )),
                    i.subscribe((function(t) {
                        var e = t.bytesCount
                          , n = t.messagesCount;
                        ua && (aa.batchCount += 1,
                        la(aa.batchBytesCount, e),
                        la(aa.batchMessagesCount, n),
                        da(aa.globalContextBytes, sa.globalContextBytes),
                        da(aa.userContextBytes, sa.userContextBytes),
                        da(aa.featureFlagBytes, sa.featureFlagBytes),
                        pa())
                    }
                    )),
                    O(fa, ca))
                }(e, f, c, r, y.flushObservable)
            }
            var h = Zn()
              , b = ia(e, location)
              , S = function(t, e, n, r, i, o, a, s) {
                var u = function(t) {
                    var e = new Br(Vr);
                    return t.subscribe(2, (function(t) {
                        e.add(function(t) {
                            return {
                                service: t.service,
                                version: t.version,
                                id: t.id,
                                name: t.name,
                                startClocks: t.startClocks
                            }
                        }(t), t.startClocks.relative)
                    }
                    )),
                    t.subscribe(6, (function(t) {
                        var n = t.endClocks;
                        e.closeActive(n.relative)
                    }
                    )),
                    t.subscribe(10, (function() {
                        e.reset()
                    }
                    )),
                    {
                        findView: function(t) {
                            return e.find(t)
                        },
                        stop: function() {
                            e.stop()
                        }
                    }
                }(t)
                  , c = function(t, e, n) {
                    var r, i = new Br(ra);
                    t.subscribe(2, (function(t) {
                        var e = t.startClocks
                          , o = n.href;
                        i.add(a({
                            url: o,
                            referrer: r || document.referrer
                        }), e.relative),
                        r = o
                    }
                    )),
                    t.subscribe(6, (function(t) {
                        var e = t.endClocks;
                        i.closeActive(e.relative)
                    }
                    ));
                    var o = e.subscribe((function(t) {
                        var e = t.newLocation
                          , n = i.find();
                        if (n) {
                            var r = Tt();
                            i.closeActive(r),
                            i.add(a({
                                url: e.href,
                                referrer: n.referrer
                            }), r)
                        }
                    }
                    ));
                    function a(t) {
                        return {
                            url: t.url,
                            referrer: t.referrer
                        }
                    }
                    return {
                        findUrl: function(t) {
                            return i.find(t)
                        },
                        stop: function() {
                            o.unsubscribe(),
                            i.stop()
                        }
                    }
                }(t, i, n)
                  , f = ha(e)
                  , l = function(t, e, n, r) {
                    t.subscribe(1, (function(e) {
                        return t.notify(12, Fi(e, r))
                    }
                    ));
                    var i = {
                        findActionId: P
                    };
                    return n.trackUserInteractions && (i = Bi(t, e, n).actionContexts),
                    {
                        addAction: function(e, n) {
                            t.notify(12, C({
                                savedCommonContext: n
                            }, Fi(e, r)))
                        },
                        actionContexts: i
                    }
                }(t, o, e, f)
                  , d = l.addAction
                  , v = l.actionContexts
                  , p = function(t) {
                    var e = Co();
                    return {
                        get: function() {
                            return {
                                viewport: e
                            }
                        },
                        stop: wo(t).subscribe((function(t) {
                            e = t
                        }
                        )).unsubscribe
                    }
                }(e)
                  , m = function(t, e) {
                    var n;
                    void 0 === e && (e = wa(t, Ta));
                    var r = Ue(Ta) || (null === (n = window.Cypress) || void 0 === n ? void 0 : n.env("traceId"))
                      , i = e.subscribe((function(t) {
                        r = t
                    }
                    ));
                    return {
                        get: function() {
                            if ("string" == typeof r)
                                return {
                                    test_execution_id: r
                                }
                        },
                        stop: function() {
                            return i.unsubscribe()
                        }
                    }
                }(e);
                return Lr(e, t, r, u, c, v, p, m, a, s),
                {
                    viewContexts: u,
                    pageStateHistory: f,
                    urlContexts: c,
                    addAction: d,
                    actionContexts: v,
                    stop: function() {
                        m.stop(),
                        p.stop(),
                        f.stop(),
                        c.stop(),
                        u.stop(),
                        f.stop()
                    }
                }
            }(c, e, location, m, b, h, i, l)
              , w = S.viewContexts
              , E = S.pageStateHistory
              , T = S.urlContexts
              , _ = S.actionContexts
              , k = S.addAction
              , x = S.stop;
            u.push(x),
            fe.drain(),
            function(t) {
                le({
                    type: se.configuration,
                    configuration: t
                })
            }(function(t) {
                var e, n = {
                    session_sample_rate: (e = t).sessionSampleRate,
                    telemetry_sample_rate: e.telemetrySampleRate,
                    telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
                    telemetry_usage_sample_rate: e.telemetryUsageSampleRate,
                    use_before_send: !!e.beforeSend,
                    use_cross_site_session_cookie: e.useCrossSiteSessionCookie,
                    use_partitioned_cross_site_session_cookie: e.usePartitionedCrossSiteSessionCookie,
                    use_secure_session_cookie: e.useSecureSessionCookie,
                    use_proxy: !!e.proxy,
                    silent_multiple_init: e.silentMultipleInit,
                    track_session_across_subdomains: e.trackSessionAcrossSubdomains,
                    allow_fallback_to_local_storage: !!e.allowFallbackToLocalStorage,
                    store_contexts_across_pages: !!e.storeContextsAcrossPages,
                    allow_untrusted_events: !!e.allowUntrustedEvents,
                    tracking_consent: e.trackingConsent
                };
                return C({
                    session_replay_sample_rate: t.sessionReplaySampleRate,
                    start_session_replay_recording_manually: t.startSessionReplayRecordingManually,
                    trace_sample_rate: t.traceSampleRate,
                    trace_context_injection: t.traceContextInjection,
                    action_name_attribute: t.actionNameAttribute,
                    use_allowed_tracing_urls: Array.isArray(t.allowedTracingUrls) && t.allowedTracingUrls.length > 0,
                    selected_tracing_propagators: Wn(t),
                    default_privacy_level: t.defaultPrivacyLevel,
                    use_excluded_activity_urls: Array.isArray(t.excludedActivityUrls) && t.excludedActivityUrls.length > 0,
                    use_worker_url: !!t.workerUrl,
                    compress_intake_requests: t.compressIntakeRequests,
                    track_views_manually: t.trackViewsManually,
                    track_user_interactions: t.trackUserInteractions,
                    track_resources: t.trackResources,
                    track_long_task: t.trackLongTasks
                }, n)
            }(t)),
            function(t, e, n) {
                t.subscribe(0, (function(r) {
                    for (var i = 0, o = r; i < o.length; i++) {
                        var a = o[i];
                        if (a.entryType !== vr.LONG_TASK)
                            break;
                        if (!n.findTrackedSession(a.startTime) || !e.trackLongTasks)
                            break;
                        var s = ht(a.startTime)
                          , u = {
                            date: s.timeStamp,
                            long_task: {
                                id: xe(),
                                duration: wt(a.duration)
                            },
                            type: "long_task",
                            _dd: {
                                discarded: !1
                            }
                        };
                        t.notify(12, {
                            rawRumEvent: u,
                            startTime: s.relative,
                            domainContext: {
                                performanceEntry: a
                            }
                        })
                    }
                }
                ))
            }(c, e, m),
            $i(c, e, m, E);
            var A = Oo(c, e, location, h, b, d, E, n, o)
              , I = A.addTiming
              , R = A.startView
              , N = A.stop;
            u.push(N);
            var L = Ji(c, e, E, d).addError;
            Jr(c, e, m);
            var U = Sr(c, e).stop;
            u.push(U);
            var M = Sa(c, E)
              , D = function(t, e, n, r, i) {
                return {
                    get: function(o) {
                        var a = n.findView(o)
                          , s = i.findUrl(o)
                          , u = e.findTrackedSession(o);
                        if (u && a && s) {
                            var c = r.findActionId(o);
                            return {
                                application_id: t,
                                session_id: u.id,
                                user_action: c ? {
                                    id: c
                                } : void 0,
                                view: {
                                    id: a.id,
                                    name: a.name,
                                    referrer: s.referrer,
                                    url: s.url
                                }
                            }
                        }
                    }
                }
            }(e.applicationId, m, w, _, T);
            return {
                addAction: k,
                addError: L,
                addTiming: I,
                addFeatureFlagEvaluation: d.addFeatureFlagEvaluation,
                startView: R,
                lifeCycle: c,
                viewContexts: w,
                session: m,
                stopSession: function() {
                    return m.expire()
                },
                getInternalContext: D.get,
                startDurationVital: M.startDurationVital,
                stopDurationVital: M.stopDurationVital,
                stop: function() {
                    u.forEach((function(t) {
                        return t()
                    }
                    ))
                }
            }
        }
        ), (ka = P,
        {
            start: P,
            stop: P,
            onRumStart: function(t, e) {
                ka = function() {
                    return function(t) {
                        return _a(t, {
                            errorType: "slim-package"
                        })
                    }(e)
                }
            },
            isRecording: function() {
                return !1
            },
            getReplayStats: function() {},
            getSessionReplayLink: function() {
                return ka()
            }
        }));
        xa = E(),
        Ia = Oa,
        Ra = xa[Aa = "DD_RUM"],
        xa[Aa] = Ia,
        Ra && Ra.q && Ra.q.forEach((function(t) {
            return u(t, "onReady callback threw an error:")()
        }
        ))
    },
    1141: function(t, e) {}
}]);
//# sourceMappingURL=https://www.scribd.com/webpack/monolith/5.0d8b60dbfb65d4fa231c.js.map
