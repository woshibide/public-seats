(self.webpackChunk_roots_bud_sage = self.webpackChunk_roots_bud_sage || []).push([[143], {
    "./styles/app.css":
        function () { }, "../node_modules/paper/dist/paper-core.js":
        function (t, e, n) {
            var i, r;
            (
                function (s, a) {
                    var o = (s = s || n("?7e0a")).window, h = s.document, l = new
                        function () {
                            var t = /^(statics|enumerable|beans|preserve)$/, e = [], n = e.slice, i = Object.create, r = Object.getOwnPropertyDescriptor, s = Object.defineProperty, o = e.forEach ||
                                function (t, e) {
                                    for (var n = 0, i = this.length;
                                        n < i;
                                        n++)t.call(e, this[n], n, this)
                                }, h =
                                    function (t, e) { for (var n in this) this.hasOwnProperty(n) && t.call(e, this[n], n, this) }, l = Object.assign ||
                                        function (t) {
                                            for (var e = 1, n = arguments.length;
                                                e < n;
                                                e++) {
                                                    var i = arguments[e];
                                                for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r])
                                            } return t
                                        }, u =
                                    function (t, e, n) {
                                        if (t) {
                                            var i = r(t, "length");
                                            (i && "number" == typeof i.value ? o : h).call(t, e, n = n || t)
                                        } return n
                                    };


                            function c(e, n, i, a, o) {
                                var h = {};


                                function l(t, l) {
                                    "string" == typeof (l = l || (l = r(n, t)) && (l.get ? l : l.value)) && "#" === l[0] && (l = e[l.substring(1)] || l);
                                    var u, c = "function" == typeof l, d = l, _ = o || c && !l.base ? l && l.get ? t in e : e[t] : null;
                                    o && _ || (c && _ && (l.base = _), c && !1 !== a && (u = t.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (h[u[3].toLowerCase() + u[4]] = u[2]), d && !c && d.get && "function" == typeof d.get && f.isPlainObject(d) || (d = { value: d, writable: !0 }), (r(e, t) || { configurable: !0 }).configurable && (d.configurable = !0, d.enumerable = null != i ? i : !u), s(e, t, d))
                                } if (n) {
                                    for (var u in n) n.hasOwnProperty(u) && !t.test(u) && l(u);
                                    for (var u in h) {
                                        var c = h[u], d = e["set" + c], _ = e["get" + c] || d && e["is" + c];
                                        !_ || !0 !== a && 0 !== _.length || l(u, { get: _, set: d })
                                    }
                                } return e
                            }
                            function f() {
                                for (var t = 0, e = arguments.length;
                                    t < e;
                                    t++) {
                                        var n = arguments[t];
                                    n && l(this, n)
                                } return this
                            } return c(f, {
                                inject:
                                    function (t) {
                                        if (t) {
                                            var e = !0 === t.statics ? t : t.statics, n = t.beans, i = t.preserve;
                                            e !== t && c(this.prototype, t, t.enumerable, n, i), c(this, e, null, n, i)
                                        } for (var r = 1, s = arguments.length;
                                            r < s;
                                            r++)this.inject(arguments[r]);
                                        return this
                                    }, extend:
                                    function () {
                                        for (var t, e, n, r = this, a = 0, o = arguments.length;
                                            a < o && (!t || !e);
                                            a++)n = arguments[a], t = t || n.initialize, e = e || n.prototype;
                                        return t = t ||
                                            function () { r.apply(this, arguments) }, e = t.prototype = e || i(this.prototype), s(e, "constructor", { value: t, writable: !0, configurable: !0 }), c(t, this), arguments.length && this.inject.apply(t, arguments), t.base = r, t
                                    }
                            }).inject({
                                enumerable: !1, initialize: f, set: f, inject:
                                    function () {
                                        for (var t = 0, e = arguments.length;
                                            t < e;
                                            t++) {
                                                var n = arguments[t];
                                            n && c(this, n, n.enumerable, n.beans, n.preserve)
                                        } return this
                                    }, extend:
                                    function () {
                                        var t = i(this);
                                        return t.inject.apply(t, arguments)
                                    }, each:
                                    function (t, e) { return u(this, t, e) }, clone:
                                    function () { return new this.constructor(this) }, statics: {
                                        set: l, each: u, create: i, define: s, describe: r, clone:
                                            function (t) { return l(new t.constructor, t) }, isPlainObject:
                                            function (t) {
                                                var e = null != t && t.constructor;
                                                return e && (e === Object || e === f || "Object" === e.name)
                                            }, pick:
                                            function (t, e) { return t !== a ? t : e }, slice:
                                            function (t, e, i) { return n.call(t, e, i) }
                                    }
                            })
                        };

                    t.exports = l, l.inject({
                        enumerable: !1, toString:
                            function () {
                                return null != this._id ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + l.each(this, (
                                    function (t, e) {
                                        if (!/^_/.test(e)) {
                                            var n = typeof t;
                                            this.push(e + ": " + ("number" === n ? _.instance.number(t) : "string" === n ? "'" + t + "'" : t))
                                        }
                                    }), []).join(", ") + " }"
                            }, getClassName:
                            function () { return this._class || "" }, importJSON:
                            function (t) { return l.importJSON(t, this) }, exportJSON:
                            function (t) { return l.exportJSON(this, t) }, toJSON:
                            function () { return l.serialize(this) }, set:
                            function (t, e) { return t && l.filter(this, t, e, this._prioritize), this }
                    }, {
                        beans: !1, statics: {
                            exports: {}, extend:
                                function t() {
                                    var e = t.base.apply(this, arguments), n = e.prototype._class;
                                    return n && !l.exports[n] && (l.exports[n] = e), e
                                }, equals:
                                function (t, e) {
                                    if (t === e) return !0;
                                    if (t && t.equals) return t.equals(e);
                                    if (e && e.equals) return e.equals(t);
                                    if (t && e && "object" == typeof t && "object" == typeof e) {
                                        if (Array.isArray(t) && Array.isArray(e)) {
                                            if ((n = t.length) !== e.length) return !1;
                                            for (;
                                                n--;
                                            )if (!l.equals(t[n], e[n])) return !1
                                        } else {
                                            var n, i = Object.keys(t);
                                            if ((n = i.length) !== Object.keys(e).length) return !1;
                                            for (;
                                                n--;
                                            ) {
                                                var r = i[n];
                                                if (!e.hasOwnProperty(r) || !l.equals(t[r], e[r])) return !1
                                            }
                                        } return !0
                                    } return !1
                                }, read:
                                function (t, e, n, i) {
                                    if (this === l) {
                                        var r = this.peek(t, e);
                                        return t.__index++, r
                                    } var s = this.prototype, o = s._readIndex, h = e || o && t.__index || 0, u = t.length, c = t[h];
                                    if (i = i || u - h, c instanceof this || n && n.readNull && null == c && i <= 1) return o && (t.__index = h + 1), c && n && n.clone ? c.clone() : c;
                                    if (c = l.create(s), o && (c.__read = !0), c = c.initialize.apply(c, h > 0 || h + i < u ? l.slice(t, h, h + i) : t) || c, o) {
                                        t.__index = h + c.__read;
                                        var f = c.__filtered;
                                        f && (t.__filtered = f, c.__filtered = a), c.__read = a
                                    } return c
                                }, peek:
                                function (t, e) { return t[t.__index = e || t.__index || 0] }, remain:
                                function (t) { return t.length - (t.__index || 0) }, readList:
                                function (t, e, n, i) {
                                    for (var r, s = [], a = e || 0, o = i ? a + i : t.length, h = a;
                                        h < o;
                                        h++)s.push(Array.isArray(r = t[h]) ? this.read(r, 0, n) : this.read(t, h, n, 1));
                                    return s
                                }, readNamed:
                                function (t, e, n, i, r) {
                                    var s = this.getNamed(t, e), o = s !== a;
                                    if (o) {
                                        var h = t.__filtered;
                                        if (!h) {
                                            var u = this.getSource(t);
                                            (h = t.__filtered = l.create(u)).__unfiltered = u
                                        } h[e] = a
                                    } return this.read(o ? [s] : t, n, i, r)
                                }, readSupported:
                                function (t, e) {
                                    var n = this.getSource(t), i = this, r = !1;
                                    return n && Object.keys(n).forEach((
                                        function (n) {
                                            if (n in e) {
                                                var s = i.readNamed(t, n);
                                                s !== a && (e[n] = s), r = !0
                                            }
                                        })), r
                                }, getSource:
                                function (t) {
                                    var e = t.__source;
                                    if (e === a) {
                                        var n = 1 === t.length && t[0];
                                        e = t.__source = n && l.isPlainObject(n) ? n : null
                                    } return e
                                }, getNamed:
                                function (t, e) {
                                    var n = this.getSource(t);
                                    if (n) return e ? n[e] : t.__filtered || n
                                }, hasNamed:
                                function (t, e) { return !!this.getNamed(t, e) }, filter:
                                function (t, e, n, i) {
                                    var r;

                                    function s(i) {
                                        if (!(n && i in n || r && i in r)) {
                                            var s = e[i];
                                            s !== a && (t[i] = s)
                                        }
                                    } if (i) {
                                        for (var o, h = {}, l = 0, u = i.length;
                                            l < u;
                                            l++)(o = i[l]) in e && (s(o), h[o] = !0);
                                        r = h
                                    } return Object.keys(e.__unfiltered || e).forEach(s), t
                                }, isPlainValue:
                                function (t, e) { return l.isPlainObject(t) || Array.isArray(t) || e && "string" == typeof t }, serialize:
                                function (t, e, n, i) {
                                    e = e || {};

                                    var r, s = !i;
                                    if (s && (e.formatter = new _(e.precision), i = {
                                        length: 0, definitions: {}, references: {}, add:
                                            function (t, e) {
                                                var n = "#" + t._id, i = this.references[n];
                                                if (!i) {
                                                    this.length++;
                                                    var r = e.call(t), s = t._class;
                                                    s && r[0] !== s && r.unshift(s), this.definitions[n] = r, i = this.references[n] = [n]
                                                } return i
                                            }
                                    }), t && t._serialize) {
                                        r = t._serialize(e, i);
                                        var a = t._class;
                                        !a || t._compactSerialize || !s && n || r[0] === a || r.unshift(a)
                                    } else if (Array.isArray(t)) {
                                        r = [];
                                        for (var o = 0, h = t.length;
                                            o < h;
                                            o++)r[o] = l.serialize(t[o], e, n, i)
                                    } else if (l.isPlainObject(t)) {
                                        r = {};

                                        var u = Object.keys(t);
                                        for (o = 0, h = u.length;
                                            o < h;
                                            o++) {
                                                var c = u[o];
                                            r[c] = l.serialize(t[c], e, n, i)
                                        }
                                    } else r = "number" == typeof t ? e.formatter.number(t, e.precision) : t;
                                    return s && i.length > 0 ? [["dictionary", i.definitions], r] : r
                                }, deserialize:
                                function (t, e, n, i, r) {
                                    var s = t, a = !n, o = a && t && t.length && "dictionary" === t[0][0];
                                    if (n = n || {}, Array.isArray(t)) {
                                        var h = t[0], u = "dictionary" === h;
                                        if (1 == t.length && /^#/.test(h)) return n.dictionary[h];
                                        s = [];
                                        for (var c = (h = l.exports[h]) ? 1 : 0, f = t.length;
                                            c < f;
                                            c++)s.push(l.deserialize(t[c], e, n, u, o));
                                        if (h) {
                                            var d = s;
                                            s = e ? e(h, d, a || r) : new h(d)
                                        }
                                    } else if (l.isPlainObject(t)) for (var _ in s = {}, i && (n.dictionary = s), t) s[_] = l.deserialize(t[_], e, n);
                                    return o ? s[1] : s
                                }, exportJSON:
                                function (t, e) {
                                    var n = l.serialize(t, e);
                                    return e && 0 == e.asString ? n : JSON.stringify(n)
                                }, importJSON:
                                function (t, e) {
                                    return l.deserialize("string" == typeof t ? JSON.parse(t) : t, (
                                        function (t, n, i) {
                                            var r = i && e && e.constructor === t, s = r ? e : l.create(t.prototype);
                                            if (1 === n.length && s instanceof P && (r || !(s instanceof O))) {
                                                var a = n[0];
                                                l.isPlainObject(a) && (a.insert = !1, r && (n = n.concat([P.INSERT])))
                                            } return (r ? s.set : t).apply(s, n), r && (e = null), s
                                        }))
                                }, push:
                                function (t, e) {
                                    var n = e.length;
                                    if (n < 4096) t.push.apply(t, e);
                                    else {
                                        var i = t.length;
                                        t.length += n;
                                        for (var r = 0;
                                            r < n;
                                            r++)t[i + r] = e[r]
                                    } return t
                                }, splice:
                                function (t, e, n, i) {
                                    var r = e && e.length, s = n === a;
                                    (n = s ? t.length : n) > t.length && (n = t.length);
                                    for (var o = 0;
                                        o < r;
                                        o++)e[o]._index = n + o;
                                    if (s) return l.push(t, e), [];
                                    var h = [n, i];
                                    e && l.push(h, e);
                                    for (var u = t.splice.apply(t, h), c = (o = 0, u.length);
                                        o < c;
                                        o++)u[o]._index = a;
                                    for (o = n + r, c = t.length;
                                        o < c;
                                        o++)t[o]._index = o;
                                    return u
                                }, capitalize:
                                function (t) {
                                    return t.replace(/\b[a-z]/g, (
                                        function (t) { return t.toUpperCase() }))
                                }, camelize:
                                function (t) {
                                    return t.replace(/-(.)/g, (
                                        function (t, e) { return e.toUpperCase() }))
                                }, hyphenate:
                                function (t) { return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() }
                        }
                    });
                    var u = {
                        on:
                            function (t, e) {
                                if ("string" != typeof t) l.each(t, (
                                    function (t, e) { this.on(e, t) }), this);
                                else {
                                    var n = this._eventTypes, i = n && n[t], r = this._callbacks = this._callbacks || {};

                                    -1 === (r = r[t] = r[t] || []).indexOf(e) && (r.push(e), i && i.install && 1 === r.length && i.install.call(this, t))
                                } return this
                            }, off:
                            function (t, e) {
                                if ("string" == typeof t) {
                                    var n, i = this._eventTypes, r = i && i[t], s = this._callbacks && this._callbacks[t];
                                    return s && (!e || -1 !== (n = s.indexOf(e)) && 1 === s.length ? (r && r.uninstall && r.uninstall.call(this, t), delete this._callbacks[t]) : -1 !== n && s.splice(n, 1)), this
                                } l.each(t, (
                                    function (t, e) { this.off(e, t) }), this)
                            }, once:
                            function (t, e) {
                                return this.on(t, (
                                    function n() { e.apply(this, arguments), this.off(t, n) }))
                            }, emit:
                            function (t, e) {
                                var n = this._callbacks && this._callbacks[t];
                                if (!n) return !1;
                                var i = l.slice(arguments, 1), r = e && e.target && !e.currentTarget;
                                n = n.slice(), r && (e.currentTarget = this);
                                for (var s = 0, a = n.length;
                                    s < a;
                                    s++)if (0 == n[s].apply(this, i)) {
                                        e && e.stop && e.stop();
                                        break
                                    } return r && delete e.currentTarget, !0
                            }, responds:
                            function (t) { return !(!this._callbacks || !this._callbacks[t]) }, attach: "#on", detach: "#off", fire: "#emit", _installEvents:
                            function (t) {
                                var e = this._eventTypes, n = this._callbacks, i = t ? "install" : "uninstall";
                                if (e) for (var r in n) if (n[r].length > 0) {
                                    var s = e[r], a = s && s[i];
                                    a && a.call(this, r)
                                }
                            }, statics: {
                                inject:
                                    function t(e) {
                                        var n = e._events;
                                        if (n) {
                                            var i = {};

                                            l.each(n, (
                                                function (t, n) {
                                                    var r = "string" == typeof t, s = r ? t : n, a = l.capitalize(s), o = s.substring(2).toLowerCase();
                                                    i[o] = r ? {} : t, s = "_" + s, e["get" + a] =
                                                        function () { return this[s] }, e["set" + a] =
                                                        function (t) {
                                                            var e = this[s];
                                                            e && this.off(o, e), t && this.on(o, t), this[s] = t
                                                        }
                                                })), e._eventTypes = i
                                        } return t.base.apply(this, arguments)
                                    }
                            }
                    }, c = l.extend({
                        _class: "PaperScope", initialize:
                            function t() {
                                ut = this, this.settings = new l({ applyMatrix: !0, insertItems: !0, handleSize: 4, hitTolerance: 0 }), this.project = null, this.projects = [], this.tools = [], this._id = t._id++, t._scopes[this._id] = this;
                                var e = t.prototype;
                                if (!this.support) {
                                    var n = at.getContext(1, 1) || {};

                                    e.support = { nativeDash: "setLineDash" in n || "mozDash" in n, nativeBlendModes: ot.nativeModes }, at.release(n)
                                } if (!this.agent) {
                                    var i = s.navigator.userAgent.toLowerCase(), r = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(i) || [])[0], a = "darwin" === r ? "mac" : r, o = e.agent = e.browser = { platform: a };

                                    a && (o[a] = !0), i.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g, (
                                        function (t, e, n, i, r) {
                                            if (!o.chrome) {
                                                var s = "opera" === e ? i : /^(node|trident)$/.test(e) ? r : n;
                                                o.version = s, o.versionNumber = parseFloat(s), e = { trident: "msie", jsdom: "node" }[e] || e, o.name = e, o[e] = !0
                                            }
                                        })), o.chrome && delete o.webkit, o.atom && delete o.chrome
                                }
                            }, version: "0.12.18", getView:
                            function () {
                                var t = this.project;
                                return t && t._view
                            }, getPaper:
                            function () { return this }, execute:
                            function (t, e) { }, install:
                            function (t) {
                                var e = this;
                                for (var n in l.each(["project", "view", "tool"], (
                                    function (n) {
                                        l.define(t, n, {
                                            configurable: !0, get:
                                                function () { return e[n] }
                                        })
                                    })), this) !/^_/.test(n) && this[n] && (t[n] = this[n])
                            }, setup:
                            function (t) { return ut = this, this.project = new k(t), this }, createCanvas:
                            function (t, e) { return at.getCanvas(t, e) }, activate:
                            function () { ut = this }, clear:
                            function () {
                                for (var t = this.projects, e = this.tools, n = t.length - 1;
                                    n >= 0;
                                    n--)t[n].remove();
                                for (n = e.length - 1;
                                    n >= 0;
                                    n--)e[n].remove()
                            }, remove:
                            function () { this.clear(), delete c._scopes[this._id] }, statics: new
                                function () {
                                    function t(t) {
                                        return t += "Attribute",
                                            function (e, n) { return e[t](n) || e[t]("data-paper-" + n) }
                                    } return {
                                        _scopes: {}, _id: 0, get:
                                            function (t) { return this._scopes[t] || null }, getAttribute: t("get"), hasAttribute: t("has")
                                    }
                                }
                    }), f = l.extend(u, {
                        initialize:
                            function (t) { this._scope = ut, this._index = this._scope[this._list].push(this) - 1, !t && this._scope[this._reference] || this.activate() }, activate:
                            function () {
                                if (!this._scope) return !1;
                                var t = this._scope[this._reference];
                                return t && t !== this && t.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", t), !0
                            }, isActive:
                            function () { return this._scope[this._reference] === this }, remove:
                            function () { return null != this._index && (l.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0) }, getView:
                            function () { return this._scope.getView() }
                    }), d = {
                        findItemBoundsCollisions:
                            function (t, e, n) {
                                function i(t) {
                                    for (var e = new Array(t.length), n = 0;
                                        n < t.length;
                                        n++) {
                                            var i = t[n].getBounds();
                                        e[n] = [i.left, i.top, i.right, i.bottom]
                                    } return e
                                } var r = i(t), s = e && e !== t ? i(e) : r;
                                return this.findBoundsCollisions(r, s, n || 0)
                            }, findCurveBoundsCollisions:
                            function (t, e, n, i) {

                                function r(t) {
                                    for (var e = Math.min, n = Math.max, i = new Array(t.length), r = 0;
                                        r < t.length;
                                        r++) {
                                            var s = t[r];
                                        i[r] = [e(s[0], s[2], s[4], s[6]), e(s[1], s[3], s[5], s[7]), n(s[0], s[2], s[4], s[6]), n(s[1], s[3], s[5], s[7])]
                                    } return i
                                } var s = r(t), a = e && e !== t ? r(e) : s;
                                if (i) {
                                    for (var o = this.findBoundsCollisions(s, a, n || 0, !1, !0), h = this.findBoundsCollisions(s, a, n || 0, !0, !0), l = [], u = 0, c = o.length;
                                        u < c;
                                        u++)l[u] = { hor: o[u], ver: h[u] };

                                    return l
                                } return this.findBoundsCollisions(s, a, n || 0)
                            }, findBoundsCollisions:
                            function (t, e, n, i, r) {
                                var s = !e || t === e, a = s ? t : t.concat(e), o = t.length, h = a.length;

                                function l(t, e, n) {
                                    for (var i = 0, r = t.length;
                                        i < r;
                                    ) {
                                        var s = r + i >>> 1;
                                        a[t[s]][e] < n ? i = s + 1 : r = s
                                    } return i - 1
                                } for (var u = i ? 1 : 0, c = u + 2, f = i ? 0 : 1, d = f + 2, _ = new Array(h), g = 0;
                                    g < h;
                                    g++)_[g] = g;
                                _.sort((
                                    function (t, e) { return a[t][u] - a[e][u] }));
                                var p = [], v = new Array(o);
                                for (g = 0;
                                    g < h;
                                    g++) {
                                        var m = _[g], y = a[m], x = s ? m : m - o, w = m < o, b = s || !w, S = w ? [] : null;
                                    if (p.length) {
                                        var C = l(p, c, y[u] - n) + 1;
                                        if (p.splice(0, C), s && r) {
                                            S = S.concat(p);
                                            for (var k = 0;
                                                k < p.length;
                                                k++) { v[O = p[k]].push(x) }
                                        } else {
                                            var P = y[d], M = y[f];
                                            for (k = 0;
                                                k < p.length;
                                                k++) {
                                                    var O = p[k], A = a[O], I = O < o, T = s || O >= o;
                                                (r || (w && T || b && I) && P >= A[f] - n && M <= A[d] + n) && (w && T && S.push(s ? O : O - o), b && I && v[O].push(x))
                                            }
                                        }
                                    } if (w && (t === e && S.push(m), v[m] = S), p.length) {
                                        var z = l(p, c, y[c]);
                                        p.splice(z + 1, 0, m)
                                    } else p.push(m)
                                } for (g = 0;
                                    g < v.length;
                                    g++) {
                                    var E = v[g];
                                    E && E.sort((
                                        function (t, e) { return t - e }))
                                } return v
                            }
                    }, _ = l.extend({
                        initialize:
                            function (t) { this.precision = l.pick(t, 5), this.multiplier = Math.pow(10, this.precision) }, number:
                            function (t) { return this.precision < 16 ? Math.round(t * this.multiplier) / this.multiplier : t }, pair:
                            function (t, e, n) { return this.number(t) + (n || ",") + this.number(e) }, point:
                            function (t, e) { return this.number(t.x) + (e || ",") + this.number(t.y) }, size:
                            function (t, e) { return this.number(t.width) + (e || ",") + this.number(t.height) }, rectangle:
                            function (t, e) { return this.point(t, e) + (e || ",") + this.size(t, e) }
                    });
                    _.instance = new _;
                    var g = new
                        function () {
                            var t = [[.5773502691896257], [0, .7745966692414834], [.33998104358485626, .8611363115940526], [0, .5384693101056831, .906179845938664], [.2386191860831969, .6612093864662645, .932469514203152], [0, .4058451513773972, .7415311855993945, .9491079123427585], [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363], [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261], [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717], [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057], [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192], [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881], [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123], [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854], [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]], e = [[1], [.8888888888888888, .5555555555555556], [.6521451548625461, .34785484513745385], [.5688888888888889, .47862867049936647, .23692688505618908], [.46791393457269104, .3607615730481386, .17132449237917036], [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697], [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626], [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441], [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814], [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366], [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183], [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588], [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186], [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727], [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]], n = Math.abs, i = Math.sqrt, r = Math.pow, s = Math.log2 ||
                                function (t) { return Math.log(t) * Math.LOG2E }, a = 1e-12, o = 112e-18;

                            function h(t, e, n) { return t < e ? e : t > n ? n : t }
                            function l(t, e, i) {
                                function r(t) {
                                    var e = 134217729 * t, n = t - e + e;
                                    return [n, t - n]
                                } var s = e * e - t * i, a = e * e + t * i;
                                if (3 * n(s) < a) {
                                    var o = r(t), h = r(e), l = r(i), u = e * e, c = t * i;
                                    s = u - c + (h[0] * h[0] - u + 2 * h[0] * h[1] + h[1] * h[1] - (o[0] * l[0] - c + o[0] * l[1] + o[1] * l[0] + o[1] * l[1]))
                                } return s
                            }
                            function u() {
                                var t = Math.max.apply(Math, arguments);
                                return t && (t < 1e-8 || t > 1e8) ? r(2, -Math.round(s(t))) : 0
                            } return {
                                EPSILON: a, MACHINE_EPSILON: o, CURVETIME_EPSILON: 1e-8, GEOMETRIC_EPSILON: 1e-7, TRIGONOMETRIC_EPSILON: 1e-8, ANGULAR_EPSILON: 1e-5, KAPPA: 4 * (i(2) - 1) / 3, isZero:
                                    function (t) { return t >= -1e-12 && t <= a }, isMachineZero:
                                    function (t) { return t >= -112e-18 && t <= o }, clamp: h, integrate:
                                    function (n, i, r, s) {
                                        for (var a = t[s - 2], o = e[s - 2], h = .5 * (r - i), l = h + i, u = 0, c = s + 1 >> 1, f = 1 & s ? o[u++] * n(l) : 0;
                                            u < c;
                                        ) {
                                            var d = h * a[u];
                                            f += o[u++] * (n(l + d) + n(l - d))
                                        } return h * f
                                    }, findRoot:
                                    function (t, e, i, r, s, a, o) {
                                        for (var l = 0;
                                            l < a;
                                            l++) {
                                                var u = t(i), c = u / e(i), f = i - c;
                                            if (n(c) < o) {
                                                i = f;
                                                break
                                            } u > 0 ? (s = i, i = f <= r ? .5 * (r + s) : f) : (r = i, i = f >= s ? .5 * (r + s) : f)
                                        } return h(i, r, s)
                                    }, solveQuadratic:
                                    function (t, e, r, s, c, f) {
                                        var d, _ = 1 / 0;
                                        if (n(t) < a) {
                                            if (n(e) < a) return n(r) < a ? -1 : 0;
                                            d = -r / e
                                        } else {
                                            var g = l(t, e *= -.5, r);
                                            if (g && n(g) < o) {
                                                var p = u(n(t), n(e), n(r));
                                                p && (g = l(t *= p, e *= p, r *= p))
                                            } if (g >= -112e-18) {
                                                var v = g < 0 ? 0 : i(g), m = e + (e < 0 ? -v : v);
                                                0 === m ? _ = -(d = r / t) : (d = m / t, _ = r / m)
                                            }
                                        } var y = 0, x = null == c, w = c - a, b = f + a;
                                        return isFinite(d) && (x || d > w && d < b) && (s[y++] = x ? d : h(d, c, f)), _ !== d && isFinite(_) && (x || _ > w && _ < b) && (s[y++] = x ? _ : h(_, c, f)), y
                                    }, solveCubic:
                                    function (t, e, s, l, c, f, d) {
                                        var _, p, v, m, y, x = u(n(t), n(e), n(s), n(l));

                                        function w(n) {
                                            var i = t * (_ = n);
                                            m = (i + (p = i + e)) * _ + (v = p * _ + s), y = v * _ + l
                                        } if (x && (t *= x, e *= x, s *= x, l *= x), n(t) < a) t = e, p = s, v = l, _ = 1 / 0;
                                        else if (n(l) < a) p = e, v = s, _ = 0;
                                        else {
                                            w(-e / t / 3);
                                            var b = y / t, S = r(n(b), 1 / 3), C = b < 0 ? -1 : 1, k = -m / t, P = k > 0 ? 1.324717957244746 * Math.max(S, i(k)) : S, M = _ - C * P;
                                            if (M !== _) {
                                                do { w(M), M = 0 === m ? _ : _ - y / m / (1 + o) } while (C * M > C * _);
                                                n(t) * _ * _ > n(l / _) && (p = ((v = -l / _) - s) / _)
                                            }
                                        } var O = g.solveQuadratic(t, p, v, c, f, d), A = null == f;
                                        return isFinite(_) && (0 === O || O > 0 && _ !== c[0] && _ !== c[1]) && (A || _ > f - a && _ < d + a) && (c[O++] = A ? _ : h(_, f, d)), O
                                    }
                            }
                        }, p = {
                            _id: 1, _pools: {}, get:
                                function (t) {
                                    if (t) {
                                        var e = this._pools[t];
                                        return e || (e = this._pools[t] = { _id: 1 }), e._id++
                                    } return this._id++
                                }
                        }, v = l.extend({
                            _class: "Point", _readIndex: !0, initialize:
                                function (t, e) {
                                    var n = typeof t, i = this.__read, r = 0;
                                    if ("number" === n) {
                                        var s = "number" == typeof e;
                                        this._set(t, s ? e : t), i && (r = s ? 2 : 1)
                                    } else if ("undefined" === n || null === t) this._set(0, 0), i && (r = null === t ? 1 : 0);
                                    else {
                                        var a = "string" === n ? t.split(/[\s,]+/) || [] : t;
                                        r = 1, Array.isArray(a) ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0])) : "x" in a ? this._set(a.x || 0, a.y || 0) : "width" in a ? this._set(a.width || 0, a.height || 0) : "angle" in a ? (this._set(a.length || 0, 0), this.setAngle(a.angle || 0)) : (this._set(0, 0), r = 0)
                                    } return i && (this.__read = r), this
                                }, set: "#initialize", _set:
                                function (t, e) { return this.x = t, this.y = e, this }, equals:
                                function (t) { return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1 }, clone:
                                function () { return new v(this.x, this.y) }, toString:
                                function () {
                                    var t = _.instance;
                                    return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }"
                                }, _serialize:
                                function (t) {
                                    var e = t.formatter;
                                    return [e.number(this.x), e.number(this.y)]
                                }, getLength:
                                function () { return Math.sqrt(this.x * this.x + this.y * this.y) }, setLength:
                                function (t) {
                                    if (this.isZero()) {
                                        var e = this._angle || 0;
                                        this._set(Math.cos(e) * t, Math.sin(e) * t)
                                    } else {
                                        var n = t / this.getLength();
                                        g.isZero(n) && this.getAngle(), this._set(this.x * n, this.y * n)
                                    }
                                }, getAngle:
                                function () { return 180 * this.getAngleInRadians.apply(this, arguments) / Math.PI }, setAngle:
                                function (t) { this.setAngleInRadians.call(this, t * Math.PI / 180) }, getAngleInDegrees: "#getAngle", setAngleInDegrees: "#setAngle", getAngleInRadians:
                                function () {
                                    if (arguments.length) {
                                        var t = v.read(arguments), e = this.getLength() * t.getLength();
                                        if (g.isZero(e)) return NaN;
                                        var n = this.dot(t) / e;
                                        return Math.acos(n < -1 ? -1 : n > 1 ? 1 : n)
                                    } return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x)
                                }, setAngleInRadians:
                                function (t) {
                                    if (this._angle = t, !this.isZero()) {
                                        var e = this.getLength();
                                        this._set(Math.cos(t) * e, Math.sin(t) * e)
                                    }
                                }, getQuadrant:
                                function () { return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3 }
                        }, {
                            beans: !1, getDirectedAngle:
                                function () {
                                    var t = v.read(arguments);
                                    return 180 * Math.atan2(this.cross(t), this.dot(t)) / Math.PI
                                }, getDistance:
                                function () {
                                    var t = arguments, e = v.read(t), n = e.x - this.x, i = e.y - this.y, r = n * n + i * i;
                                    return l.read(t) ? r : Math.sqrt(r)
                                }, normalize:
                                function (t) {
                                    t === a && (t = 1);
                                    var e = this.getLength(), n = 0 !== e ? t / e : 0, i = new v(this.x * n, this.y * n);
                                    return n >= 0 && (i._angle = this._angle), i
                                }, rotate:
                                function (t, e) {
                                    if (0 === t) return this.clone();
                                    t = t * Math.PI / 180;
                                    var n = e ? this.subtract(e) : this, i = Math.sin(t), r = Math.cos(t);
                                    return n = new v(n.x * r - n.y * i, n.x * i + n.y * r), e ? n.add(e) : n
                                }, transform:
                                function (t) { return t ? t._transformPoint(this) : this }, add:
                                function () {
                                    var t = v.read(arguments);
                                    return new v(this.x + t.x, this.y + t.y)
                                }, subtract:
                                function () {
                                    var t = v.read(arguments);
                                    return new v(this.x - t.x, this.y - t.y)
                                }, multiply:
                                function () {
                                    var t = v.read(arguments);
                                    return new v(this.x * t.x, this.y * t.y)
                                }, divide:
                                function () {
                                    var t = v.read(arguments);
                                    return new v(this.x / t.x, this.y / t.y)
                                }, modulo:
                                function () {
                                    var t = v.read(arguments);
                                    return new v(this.x % t.x, this.y % t.y)
                                }, negate:
                                function () { return new v(-this.x, -this.y) }, isInside:
                                function () { return w.read(arguments).contains(this) }, isClose:
                                function () {
                                    var t = arguments, e = v.read(t), n = l.read(t);
                                    return this.getDistance(e) <= n
                                }, isCollinear:
                                function () {
                                    var t = v.read(arguments);
                                    return v.isCollinear(this.x, this.y, t.x, t.y)
                                }, isColinear: "#isCollinear", isOrthogonal:
                                function () {
                                    var t = v.read(arguments);
                                    return v.isOrthogonal(this.x, this.y, t.x, t.y)
                                }, isZero:
                                function () {
                                    var t = g.isZero;
                                    return t(this.x) && t(this.y)
                                }, isNaN:
                                function () { return isNaN(this.x) || isNaN(this.y) }, isInQuadrant:
                                function (t) { return this.x * (t > 1 && t < 4 ? -1 : 1) >= 0 && this.y * (t > 2 ? -1 : 1) >= 0 }, dot:
                                function () {
                                    var t = v.read(arguments);
                                    return this.x * t.x + this.y * t.y
                                }, cross:
                                function () {
                                    var t = v.read(arguments);
                                    return this.x * t.y - this.y * t.x
                                }, project:
                                function () {
                                    var t = v.read(arguments), e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
                                    return new v(t.x * e, t.y * e)
                                }, statics: {
                                    min:
                                        function () {
                                            var t = arguments, e = v.read(t), n = v.read(t);
                                            return new v(Math.min(e.x, n.x), Math.min(e.y, n.y))
                                        }, max:
                                        function () {
                                            var t = arguments, e = v.read(t), n = v.read(t);
                                            return new v(Math.max(e.x, n.x), Math.max(e.y, n.y))
                                        }, random:
                                        function () { return new v(Math.random(), Math.random()) }, isCollinear:
                                        function (t, e, n, i) { return Math.abs(t * i - e * n) <= 1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i)) }, isOrthogonal:
                                        function (t, e, n, i) { return Math.abs(t * n + e * i) <= 1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i)) }
                                }
                        }, l.each(["round", "ceil", "floor", "abs"], (
                            function (t) {
                                var e = Math[t];
                                this[t] =
                                    function () { return new v(e(this.x), e(this.y)) }
                            }), {})), m = v.extend({
                                initialize:
                                    function (t, e, n, i) { this._x = t, this._y = e, this._owner = n, this._setter = i }, _set:
                                    function (t, e, n) { return this._x = t, this._y = e, n || this._owner[this._setter](this), this }, getX:
                                    function () { return this._x }, setX:
                                    function (t) { this._x = t, this._owner[this._setter](this) }, getY:
                                    function () { return this._y }, setY:
                                    function (t) { this._y = t, this._owner[this._setter](this) }, isSelected:
                                    function () { return !!(this._owner._selection & this._getSelection()) }, setSelected:
                                    function (t) { this._owner._changeSelection(this._getSelection(), t) }, _getSelection:
                                    function () { return "setPosition" === this._setter ? 4 : 0 }
                            }), y = l.extend({
                                _class: "Size", _readIndex: !0, initialize:
                                    function (t, e) {
                                        var n = typeof t, i = this.__read, r = 0;
                                        if ("number" === n) {
                                            var s = "number" == typeof e;
                                            this._set(t, s ? e : t), i && (r = s ? 2 : 1)
                                        } else if ("undefined" === n || null === t) this._set(0, 0), i && (r = null === t ? 1 : 0);
                                        else {
                                            var a = "string" === n ? t.split(/[\s,]+/) || [] : t;
                                            r = 1, Array.isArray(a) ? this._set(+a[0], +(a.length > 1 ? a[1] : a[0])) : "width" in a ? this._set(a.width || 0, a.height || 0) : "x" in a ? this._set(a.x || 0, a.y || 0) : (this._set(0, 0), r = 0)
                                        } return i && (this.__read = r), this
                                    }, set: "#initialize", _set:
                                    function (t, e) { return this.width = t, this.height = e, this }, equals:
                                    function (t) { return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1 }, clone:
                                    function () { return new y(this.width, this.height) }, toString:
                                    function () {
                                        var t = _.instance;
                                        return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
                                    }, _serialize:
                                    function (t) {
                                        var e = t.formatter;
                                        return [e.number(this.width), e.number(this.height)]
                                    }, add:
                                    function () {
                                        var t = y.read(arguments);
                                        return new y(this.width + t.width, this.height + t.height)
                                    }, subtract:
                                    function () {
                                        var t = y.read(arguments);
                                        return new y(this.width - t.width, this.height - t.height)
                                    }, multiply:
                                    function () {
                                        var t = y.read(arguments);
                                        return new y(this.width * t.width, this.height * t.height)
                                    }, divide:
                                    function () {
                                        var t = y.read(arguments);
                                        return new y(this.width / t.width, this.height / t.height)
                                    }, modulo:
                                    function () {
                                        var t = y.read(arguments);
                                        return new y(this.width % t.width, this.height % t.height)
                                    }, negate:
                                    function () { return new y(-this.width, -this.height) }, isZero:
                                    function () {
                                        var t = g.isZero;
                                        return t(this.width) && t(this.height)
                                    }, isNaN:
                                    function () { return isNaN(this.width) || isNaN(this.height) }, statics: {
                                        min:
                                            function (t, e) { return new y(Math.min(t.width, e.width), Math.min(t.height, e.height)) }, max:
                                            function (t, e) { return new y(Math.max(t.width, e.width), Math.max(t.height, e.height)) }, random:
                                            function () { return new y(Math.random(), Math.random()) }
                                    }
                            }, l.each(["round", "ceil", "floor", "abs"], (
                                function (t) {
                                    var e = Math[t];
                                    this[t] =
                                        function () { return new y(e(this.width), e(this.height)) }
                                }), {})), x = y.extend({
                                    initialize:
                                        function (t, e, n, i) { this._width = t, this._height = e, this._owner = n, this._setter = i }, _set:
                                        function (t, e, n) { return this._width = t, this._height = e, n || this._owner[this._setter](this), this }, getWidth:
                                        function () { return this._width }, setWidth:
                                        function (t) { this._width = t, this._owner[this._setter](this) }, getHeight:
                                        function () { return this._height }, setHeight:
                                        function (t) { this._height = t, this._owner[this._setter](this) }
                                }), w = l.extend({
                                    _class: "Rectangle", _readIndex: !0, beans: !0, initialize:
                                        function (t, e, n, i) {
                                            var r, s = arguments, o = typeof t;
                                            if ("number" === o ? (this._set(t, e, n, i), r = 4) : "undefined" === o || null === t ? (this._set(0, 0, 0, 0), r = null === t ? 1 : 0) : 1 === s.length && (Array.isArray(t) ? (this._set.apply(this, t), r = 1) : t.x !== a || t.width !== a ? (this._set(t.x || 0, t.y || 0, t.width || 0, t.height || 0), r = 1) : t.from === a && t.to === a && (this._set(0, 0, 0, 0), l.readSupported(s, this) && (r = 1))), r === a) {
                                                var h, u, c = v.readNamed(s, "from"), f = l.peek(s), d = c.x, _ = c.y;
                                                if (f && f.x !== a || l.hasNamed(s, "to")) {
                                                    var g = v.readNamed(s, "to");
                                                    h = g.x - d, u = g.y - _, h < 0 && (d = g.x, h = -h), u < 0 && (_ = g.y, u = -u)
                                                } else {
                                                    var p = y.read(s);
                                                    h = p.width, u = p.height
                                                } this._set(d, _, h, u), r = s.__index
                                            } var m = s.__filtered;
                                            return m && (this.__filtered = m), this.__read && (this.__read = r), this
                                        }, set: "#initialize", _set:
                                        function (t, e, n, i) { return this.x = t, this.y = e, this.width = n, this.height = i, this }, clone:
                                        function () { return new w(this.x, this.y, this.width, this.height) }, equals:
                                        function (t) {
                                            var e = l.isPlainValue(t) ? w.read(arguments) : t;
                                            return e === this || e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height || !1
                                        }, toString:
                                        function () {
                                            var t = _.instance;
                                            return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
                                        }, _serialize:
                                        function (t) {
                                            var e = t.formatter;
                                            return [e.number(this.x), e.number(this.y), e.number(this.width), e.number(this.height)]
                                        }, getPoint:
                                        function (t) { return new (t ? v : m)(this.x, this.y, this, "setPoint") }, setPoint:
                                        function () {
                                            var t = v.read(arguments);
                                            this.x = t.x, this.y = t.y
                                        }, getSize:
                                        function (t) { return new (t ? y : x)(this.width, this.height, this, "setSize") }, _fw: 1, _fh: 1, setSize:
                                        function () {
                                            var t = y.read(arguments), e = this._sx, n = this._sy, i = t.width, r = t.height;
                                            e && (this.x += (this.width - i) * e), n && (this.y += (this.height - r) * n), this.width = i, this.height = r, this._fw = this._fh = 1
                                        }, getLeft:
                                        function () { return this.x }, setLeft:
                                        function (t) {
                                            if (!this._fw) {
                                                var e = t - this.x;
                                                this.width -= .5 === this._sx ? 2 * e : e
                                            } this.x = t, this._sx = this._fw = 0
                                        }, getTop:
                                        function () { return this.y }, setTop:
                                        function (t) {
                                            if (!this._fh) {
                                                var e = t - this.y;
                                                this.height -= .5 === this._sy ? 2 * e : e
                                            } this.y = t, this._sy = this._fh = 0
                                        }, getRight:
                                        function () { return this.x + this.width }, setRight:
                                        function (t) {
                                            if (!this._fw) {
                                                var e = t - this.x;
                                                this.width = .5 === this._sx ? 2 * e : e
                                            } this.x = t - this.width, this._sx = 1, this._fw = 0
                                        }, getBottom:
                                        function () { return this.y + this.height }, setBottom:
                                        function (t) {
                                            if (!this._fh) {
                                                var e = t - this.y;
                                                this.height = .5 === this._sy ? 2 * e : e
                                            } this.y = t - this.height, this._sy = 1, this._fh = 0
                                        }, getCenterX:
                                        function () { return this.x + this.width / 2 }, setCenterX:
                                        function (t) { this._fw || .5 === this._sx ? this.x = t - this.width / 2 : (this._sx && (this.x += 2 * (t - this.x) * this._sx), this.width = 2 * (t - this.x)), this._sx = .5, this._fw = 0 }, getCenterY:
                                        function () { return this.y + this.height / 2 }, setCenterY:
                                        function (t) { this._fh || .5 === this._sy ? this.y = t - this.height / 2 : (this._sy && (this.y += 2 * (t - this.y) * this._sy), this.height = 2 * (t - this.y)), this._sy = .5, this._fh = 0 }, getCenter:
                                        function (t) { return new (t ? v : m)(this.getCenterX(), this.getCenterY(), this, "setCenter") }, setCenter:
                                        function () {
                                            var t = v.read(arguments);
                                            return this.setCenterX(t.x), this.setCenterY(t.y), this
                                        }, getArea:
                                        function () { return this.width * this.height }, isEmpty:
                                        function () { return 0 === this.width || 0 === this.height }, contains:
                                        function (t) { return t && t.width !== a || 4 === (Array.isArray(t) ? t : arguments).length ? this._containsRectangle(w.read(arguments)) : this._containsPoint(v.read(arguments)) }, _containsPoint:
                                        function (t) {
                                            var e = t.x, n = t.y;
                                            return e >= this.x && n >= this.y && e <= this.x + this.width && n <= this.y + this.height
                                        }, _containsRectangle:
                                        function (t) {
                                            var e = t.x, n = t.y;
                                            return e >= this.x && n >= this.y && e + t.width <= this.x + this.width && n + t.height <= this.y + this.height
                                        }, intersects:
                                        function () {
                                            var t = w.read(arguments), e = l.read(arguments) || 0;
                                            return t.x + t.width > this.x - e && t.y + t.height > this.y - e && t.x < this.x + this.width + e && t.y < this.y + this.height + e
                                        }, intersect:
                                        function () {
                                            var t = w.read(arguments), e = Math.max(this.x, t.x), n = Math.max(this.y, t.y), i = Math.min(this.x + this.width, t.x + t.width), r = Math.min(this.y + this.height, t.y + t.height);
                                            return new w(e, n, i - e, r - n)
                                        }, unite:
                                        function () {
                                            var t = w.read(arguments), e = Math.min(this.x, t.x), n = Math.min(this.y, t.y), i = Math.max(this.x + this.width, t.x + t.width), r = Math.max(this.y + this.height, t.y + t.height);
                                            return new w(e, n, i - e, r - n)
                                        }, include:
                                        function () {
                                            var t = v.read(arguments), e = Math.min(this.x, t.x), n = Math.min(this.y, t.y), i = Math.max(this.x + this.width, t.x), r = Math.max(this.y + this.height, t.y);
                                            return new w(e, n, i - e, r - n)
                                        }, expand:
                                        function () {
                                            var t = y.read(arguments), e = t.width, n = t.height;
                                            return new w(this.x - e / 2, this.y - n / 2, this.width + e, this.height + n)
                                        }, scale:
                                        function (t, e) { return this.expand(this.width * t - this.width, this.height * (e === a ? t : e) - this.height) }
                                }, l.each([["Top", "Left"], ["Top", "Right"], ["Bottom", "Left"], ["Bottom", "Right"], ["Left", "Center"], ["Top", "Center"], ["Right", "Center"], ["Bottom", "Center"]], (
                                    function (t, e) {
                                        var n = t.join(""), i = /^[RL]/.test(n);
                                        e >= 4 && (t[1] += i ? "Y" : "X");
                                        var r = t[i ? 0 : 1], s = t[i ? 1 : 0], a = "get" + r, o = "get" + s, h = "set" + r, l = "set" + s, u = "set" + n;
                                        this["get" + n] =
                                            function (t) { return new (t ? v : m)(this[a](), this[o](), this, u) }, this[u] =
                                            function () {
                                                var t = v.read(arguments);
                                                this[h](t.x), this[l](t.y)
                                            }
                                    }), { beans: !0 })), b = w.extend({
                                        initialize:
                                            function (t, e, n, i, r, s) { this._set(t, e, n, i, !0), this._owner = r, this._setter = s }, _set:
                                            function (t, e, n, i, r) { return this._x = t, this._y = e, this._width = n, this._height = i, r || this._owner[this._setter](this), this }
                                    }, new
                                        function () {
                                            var t = w.prototype;
                                            return l.each(["x", "y", "width", "height"], (
                                                function (t) {
                                                    var e = l.capitalize(t), n = "_" + t;
                                                    this["get" + e] =
                                                        function () { return this[n] }, this["set" + e] =
                                                        function (t) { this[n] = t, this._dontNotify || this._owner[this._setter](this) }
                                                }), l.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], (
                                                    function (e) {
                                                        var n = "set" + e;
                                                        this[n] =
                                                            function () { this._dontNotify = !0, t[n].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this) }
                                                    }), {
                                                    isSelected:
                                                        function () { return !!(2 & this._owner._selection) }, setSelected:
                                                        function (t) {
                                                            var e = this._owner;
                                                            e._changeSelection && e._changeSelection(2, t)
                                                        }
                                                }))
                                        }), S = l.extend({
                                            _class: "Matrix", initialize:
                                                function t(e, n) {
                                                    var i = arguments, r = i.length, s = !0;
                                                    if (r >= 6 ? this._set.apply(this, i) : 1 === r || 2 === r ? e instanceof t ? this._set(e._a, e._b, e._c, e._d, e._tx, e._ty, n) : Array.isArray(e) ? this._set.apply(this, n ? e.concat([n]) : e) : s = !1 : r ? s = !1 : this.reset(), !s) throw new Error("Unsupported matrix parameters");
                                                    return this
                                                }, set: "#initialize", _set:
                                                function (t, e, n, i, r, s, a) { return this._a = t, this._b = e, this._c = n, this._d = i, this._tx = r, this._ty = s, a || this._changed(), this }, _serialize:
                                                function (t, e) { return l.serialize(this.getValues(), t, !0, e) }, _changed:
                                                function () {
                                                    var t = this._owner;
                                                    t && (t._applyMatrix ? t.transform(null, !0) : t._changed(25))
                                                }, clone:
                                                function () { return new S(this._a, this._b, this._c, this._d, this._tx, this._ty) }, equals:
                                                function (t) { return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty }, toString:
                                                function () {
                                                    var t = _.instance;
                                                    return "[[" + [t.number(this._a), t.number(this._c), t.number(this._tx)].join(", ") + "], [" + [t.number(this._b), t.number(this._d), t.number(this._ty)].join(", ") + "]]"
                                                }, reset:
                                                function (t) { return this._a = this._d = 1, this._b = this._c = this._tx = this._ty = 0, t || this._changed(), this }, apply:
                                                function (t, e) {
                                                    var n = this._owner;
                                                    return !!n && (n.transform(null, l.pick(t, !0), e), this.isIdentity())
                                                }, translate:
                                                function () {
                                                    var t = v.read(arguments), e = t.x, n = t.y;
                                                    return this._tx += e * this._a + n * this._c, this._ty += e * this._b + n * this._d, this._changed(), this
                                                }, scale:
                                                function () {
                                                    var t = arguments, e = v.read(t), n = v.read(t, 0, { readNull: !0 });
                                                    return n && this.translate(n), this._a *= e.x, this._b *= e.x, this._c *= e.y, this._d *= e.y, n && this.translate(n.negate()), this._changed(), this
                                                }, rotate:
                                                function (t) {
                                                    t *= Math.PI / 180;
                                                    var e = v.read(arguments, 1), n = e.x, i = e.y, r = Math.cos(t), s = Math.sin(t), a = n - n * r + i * s, o = i - n * s - i * r, h = this._a, l = this._b, u = this._c, c = this._d;
                                                    return this._a = r * h + s * u, this._b = r * l + s * c, this._c = -s * h + r * u, this._d = -s * l + r * c, this._tx += a * h + o * u, this._ty += a * l + o * c, this._changed(), this
                                                }, shear:
                                                function () {
                                                    var t = arguments, e = v.read(t), n = v.read(t, 0, { readNull: !0 });
                                                    n && this.translate(n);
                                                    var i = this._a, r = this._b;
                                                    return this._a += e.y * this._c, this._b += e.y * this._d, this._c += e.x * i, this._d += e.x * r, n && this.translate(n.negate()), this._changed(), this
                                                }, skew:
                                                function () {
                                                    var t = arguments, e = v.read(t), n = v.read(t, 0, { readNull: !0 }), i = Math.PI / 180, r = new v(Math.tan(e.x * i), Math.tan(e.y * i));
                                                    return this.shear(r, n)
                                                }, append:
                                                function (t, e) {
                                                    if (t) {
                                                        var n = this._a, i = this._b, r = this._c, s = this._d, a = t._a, o = t._c, h = t._b, l = t._d, u = t._tx, c = t._ty;
                                                        this._a = a * n + h * r, this._c = o * n + l * r, this._b = a * i + h * s, this._d = o * i + l * s, this._tx += u * n + c * r, this._ty += u * i + c * s, e || this._changed()
                                                    } return this
                                                }, prepend:
                                                function (t, e) {
                                                    if (t) {
                                                        var n = this._a, i = this._b, r = this._c, s = this._d, a = this._tx, o = this._ty, h = t._a, l = t._c, u = t._b, c = t._d, f = t._tx, d = t._ty;
                                                        this._a = h * n + l * i, this._c = h * r + l * s, this._b = u * n + c * i, this._d = u * r + c * s, this._tx = h * a + l * o + f, this._ty = u * a + c * o + d, e || this._changed()
                                                    } return this
                                                }, appended:
                                                function (t) { return this.clone().append(t) }, prepended:
                                                function (t) { return this.clone().prepend(t) }, invert:
                                                function () {
                                                    var t = this._a, e = this._b, n = this._c, i = this._d, r = this._tx, s = this._ty, a = t * i - e * n, o = null;
                                                    return a && !isNaN(a) && isFinite(r) && isFinite(s) && (this._a = i / a, this._b = -e / a, this._c = -n / a, this._d = t / a, this._tx = (n * s - i * r) / a, this._ty = (e * r - t * s) / a, o = this), o
                                                }, inverted:
                                                function () { return this.clone().invert() }, concatenate: "#append", preConcatenate: "#prepend", chain: "#appended", _shiftless:
                                                function () { return new S(this._a, this._b, this._c, this._d, 0, 0) }, _orNullIfIdentity:
                                                function () { return this.isIdentity() ? null : this }, isIdentity:
                                                function () { return 1 === this._a && 0 === this._b && 0 === this._c && 1 === this._d && 0 === this._tx && 0 === this._ty }, isInvertible:
                                                function () {
                                                    var t = this._a * this._d - this._c * this._b;
                                                    return t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty)
                                                }, isSingular:
                                                function () { return !this.isInvertible() }, transform:
                                                function (t, e, n) { return arguments.length < 3 ? this._transformPoint(v.read(arguments)) : this._transformCoordinates(t, e, n) }, _transformPoint:
                                                function (t, e, n) {
                                                    var i = t.x, r = t.y;
                                                    return e || (e = new v), e._set(i * this._a + r * this._c + this._tx, i * this._b + r * this._d + this._ty, n)
                                                }, _transformCoordinates:
                                                function (t, e, n) {
                                                    for (var i = 0, r = 2 * n;
                                                        i < r;
                                                        i += 2) {
                                                            var s = t[i], a = t[i + 1];
                                                        e[i] = s * this._a + a * this._c + this._tx, e[i + 1] = s * this._b + a * this._d + this._ty
                                                    } return e
                                                }, _transformCorners:
                                                function (t) {
                                                    var e = t.x, n = t.y, i = e + t.width, r = n + t.height, s = [e, n, i, n, i, r, e, r];
                                                    return this._transformCoordinates(s, s, 4)
                                                }, _transformBounds:
                                                function (t, e, n) {
                                                    for (var i = this._transformCorners(t), r = i.slice(0, 2), s = r.slice(), a = 2;
                                                        a < 8;
                                                        a++) {
                                                            var o = i[a], h = 1 & a;
                                                        o < r[h] ? r[h] = o : o > s[h] && (s[h] = o)
                                                    } return e || (e = new w), e._set(r[0], r[1], s[0] - r[0], s[1] - r[1], n)
                                                }, inverseTransform:
                                                function () { return this._inverseTransform(v.read(arguments)) }, _inverseTransform:
                                                function (t, e, n) {
                                                    var i = this._a, r = this._b, s = this._c, a = this._d, o = this._tx, h = this._ty, l = i * a - r * s, u = null;
                                                    if (l && !isNaN(l) && isFinite(o) && isFinite(h)) {
                                                        var c = t.x - this._tx, f = t.y - this._ty;
                                                        e || (e = new v), u = e._set((c * a - f * s) / l, (f * i - c * r) / l, n)
                                                    } return u
                                                }, decompose:
                                                function () {
                                                    var t, e, n, i = this._a, r = this._b, s = this._c, a = this._d, o = i * a - r * s, h = Math.sqrt, l = Math.atan2, u = 180 / Math.PI;
                                                    if (0 !== i || 0 !== r) {
                                                        var c = h(i * i + r * r);
                                                        t = Math.acos(i / c) * (r > 0 ? 1 : -1), e = [c, o / c], n = [l(i * s + r * a, c * c), 0]
                                                    } else if (0 !== s || 0 !== a) {
                                                        var f = h(s * s + a * a);
                                                        t = Math.asin(s / f) * (a > 0 ? 1 : -1), e = [o / f, f], n = [0, l(i * s + r * a, f * f)]
                                                    } else t = 0, n = e = [0, 0];
                                                    return { translation: this.getTranslation(), rotation: t * u, scaling: new v(e), skewing: new v(n[0] * u, n[1] * u) }
                                                }, getValues:
                                                function () { return [this._a, this._b, this._c, this._d, this._tx, this._ty] }, getTranslation:
                                                function () { return new v(this._tx, this._ty) }, getScaling:
                                                function () { return this.decompose().scaling }, getRotation:
                                                function () { return this.decompose().rotation }, applyToContext:
                                                function (t) { this.isIdentity() || t.transform(this._a, this._b, this._c, this._d, this._tx, this._ty) }
                                        }, l.each(["a", "b", "c", "d", "tx", "ty"], (
                                            function (t) {
                                                var e = l.capitalize(t), n = "_" + t;
                                                this["get" + e] =
                                                    function () { return this[n] }, this["set" + e] =
                                                    function (t) { this[n] = t, this._changed() }
                                            }), {})), C = l.extend({
                                                _class: "Line", initialize:
                                                    function (t, e, n, i, r) {
                                                        var s = !1;
                                                        arguments.length >= 4 ? (this._px = t, this._py = e, this._vx = n, this._vy = i, s = r) : (this._px = t.x, this._py = t.y, this._vx = e.x, this._vy = e.y, s = n), s || (this._vx -= this._px, this._vy -= this._py)
                                                    }, getPoint:
                                                    function () { return new v(this._px, this._py) }, getVector:
                                                    function () { return new v(this._vx, this._vy) }, getLength:
                                                    function () { return this.getVector().getLength() }, intersect:
                                                    function (t, e) { return C.intersect(this._px, this._py, this._vx, this._vy, t._px, t._py, t._vx, t._vy, !0, e) }, getSide:
                                                    function (t, e) { return C.getSide(this._px, this._py, this._vx, this._vy, t.x, t.y, !0, e) }, getDistance:
                                                    function (t) { return Math.abs(this.getSignedDistance(t)) }, getSignedDistance:
                                                    function (t) { return C.getSignedDistance(this._px, this._py, this._vx, this._vy, t.x, t.y, !0) }, isCollinear:
                                                    function (t) { return v.isCollinear(this._vx, this._vy, t._vx, t._vy) }, isOrthogonal:
                                                    function (t) { return v.isOrthogonal(this._vx, this._vy, t._vx, t._vy) }, statics: {
                                                        intersect:
                                                            function (t, e, n, i, r, s, a, o, h, l) {
                                                                h || (n -= t, i -= e, a -= r, o -= s);
                                                                var u = n * o - i * a;
                                                                if (!g.isMachineZero(u)) {
                                                                    var c = t - r, f = e - s, d = (a * f - o * c) / u, _ = (n * f - i * c) / u, p = -1e-12, m = 1 + 1e-12;
                                                                    if (l || p < d && d < m && p < _ && _ < m) return l || (d = d <= 0 ? 0 : d >= 1 ? 1 : d), new v(t + d * n, e + d * i)
                                                                }
                                                            }, getSide:
                                                            function (t, e, n, i, r, s, a, o) {
                                                                a || (n -= t, i -= e);
                                                                var h = r - t, l = h * i - (s - e) * n;
                                                                return !o && g.isMachineZero(l) && (l = (h * n + h * n) / (n * n + i * i)) >= 0 && l <= 1 && (l = 0), l < 0 ? -1 : l > 0 ? 1 : 0
                                                            }, getSignedDistance:
                                                            function (t, e, n, i, r, s, a) { return a || (n -= t, i -= e), 0 === n ? i > 0 ? r - t : t - r : 0 === i ? n < 0 ? s - e : e - s : ((r - t) * i - (s - e) * n) / (i > n ? i * Math.sqrt(1 + n * n / (i * i)) : n * Math.sqrt(1 + i * i / (n * n))) }, getDistance:
                                                            function (t, e, n, i, r, s, a) { return Math.abs(C.getSignedDistance(t, e, n, i, r, s, a)) }
                                                    }
                                            }), k = f.extend({
                                                _class: "Project", _list: "projects", _reference: "project", _compactSerialize: !0, initialize:
                                                    function (t) { f.call(this, !0), this._children = [], this._namedChildren = {}, this._activeLayer = null, this._currentStyle = new G(null, null, this), this._view = Y.create(this, t || at.getCanvas(1, 1)), this._selectionItems = {}, this._selectionCount = 0, this._updateVersion = 0 }, _serialize:
                                                    function (t, e) { return l.serialize(this._children, t, !0, e) }, _changed:
                                                    function (t, e) {
                                                        if (1 & t) {
                                                            var n = this._view;
                                                            n && (n._needsUpdate = !0, !n._requested && n._autoUpdate && n.requestUpdate())
                                                        } var i = this._changes;
                                                        if (i && e) {
                                                            var r = this._changesById, s = e._id, a = r[s];
                                                            a ? a.flags |= t : i.push(r[s] = { item: e, flags: t })
                                                        }
                                                    }, clear:
                                                    function () {
                                                        for (var t = this._children, e = t.length - 1;
                                                            e >= 0;
                                                            e--)t[e].remove()
                                                    }, isEmpty:
                                                    function () { return !this._children.length }, remove:
                                                    function t() { return !!t.base.call(this) && (this._view && this._view.remove(), !0) }, getView:
                                                    function () { return this._view }, getCurrentStyle:
                                                    function () { return this._currentStyle }, setCurrentStyle:
                                                    function (t) { this._currentStyle.set(t) }, getIndex:
                                                    function () { return this._index }, getOptions:
                                                    function () { return this._scope.settings }, getLayers:
                                                    function () { return this._children }, getActiveLayer:
                                                    function () { return this._activeLayer || new O({ project: this, insert: !0 }) }, getSymbolDefinitions:
                                                    function () {
                                                        var t = [], e = {};

                                                        return this.getItems({
                                                            class: T, match:
                                                                function (n) {
                                                                    var i = n._definition, r = i._id;
                                                                    return e[r] || (e[r] = !0, t.push(i)), !1
                                                                }
                                                        }), t
                                                    }, getSymbols: "getSymbolDefinitions", getSelectedItems:
                                                    function () {
                                                        var t = this._selectionItems, e = [];
                                                        for (var n in t) {
                                                            var i = t[n], r = i._selection;
                                                            1 & r && i.isInserted() ? e.push(i) : r || this._updateSelection(i)
                                                        } return e
                                                    }, _updateSelection:
                                                    function (t) {
                                                        var e = t._id, n = this._selectionItems;
                                                        t._selection ? n[e] !== t && (this._selectionCount++, n[e] = t) : n[e] === t && (this._selectionCount--, delete n[e])
                                                    }, selectAll:
                                                    function () {
                                                        for (var t = this._children, e = 0, n = t.length;
                                                            e < n;
                                                            e++)t[e].setFullySelected(!0)
                                                    }, deselectAll:
                                                    function () {
                                                        var t = this._selectionItems;
                                                        for (var e in t) t[e].setFullySelected(!1)
                                                    }, addLayer:
                                                    function (t) { return this.insertLayer(a, t) }, insertLayer:
                                                    function (t, e) {
                                                        if (e instanceof O) {
                                                            e._remove(!1, !0), l.splice(this._children, [e], t, 0), e._setProject(this, !0);
                                                            var n = e._name;
                                                            n && e.setName(n), this._changes && e._changed(5), this._activeLayer || (this._activeLayer = e)
                                                        } else e = null;
                                                        return e
                                                    }, _insertItem:
                                                    function (t, e, n) { return e = this.insertLayer(t, e) || (this._activeLayer || this._insertItem(a, new O(P.NO_INSERT), !0)).insertChild(t, e), n && e.activate && e.activate(), e }, getItems:
                                                    function (t) { return P._getItems(this, t) }, getItem:
                                                    function (t) { return P._getItems(this, t, null, null, !0)[0] || null }, importJSON:
                                                    function (t) {
                                                        this.activate();
                                                        var e = this._activeLayer;
                                                        return l.importJSON(t, e && e.isEmpty() && e)
                                                    }, removeOn:
                                                    function (t) {
                                                        var e = this._removeSets;
                                                        if (e) {
                                                            "mouseup" === t && (e.mousedrag = null);
                                                            var n = e[t];
                                                            if (n) {
                                                                for (var i in n) {
                                                                    var r = n[i];
                                                                    for (var s in e) {
                                                                        var a = e[s];
                                                                        a && a != n && delete a[r._id]
                                                                    } r.remove()
                                                                } e[t] = null
                                                            }
                                                        }
                                                    }, draw:
                                                    function (t, e, n) {
                                                        this._updateVersion++, t.save(), e.applyToContext(t);
                                                        for (var i = this._children, r = new l({ offset: new v(0, 0), pixelRatio: n, viewMatrix: e.isIdentity() ? null : e, matrices: [new S], updateMatrix: !0 }), s = 0, a = i.length;
                                                            s < a;
                                                            s++)i[s].draw(t, r);
                                                        if (t.restore(), this._selectionCount > 0) {
                                                            t.save(), t.strokeWidth = 1;
                                                            var o = this._selectionItems, h = this._scope.settings.handleSize, u = this._updateVersion;
                                                            for (var c in o) o[c]._drawSelection(t, e, h, o, u);
                                                            t.restore()
                                                        }
                                                    }
                                            }), P = l.extend(u, {
                                                statics: {
                                                    extend:
                                                        function t(e) { return e._serializeFields && (e._serializeFields = l.set({}, this.prototype._serializeFields, e._serializeFields)), t.base.apply(this, arguments) }, INSERT: { insert: !0 }, NO_INSERT: { insert: !1 }
                                                }, _class: "Item", _name: null, _applyMatrix: !0, _canApplyMatrix: !0, _canScaleStroke: !1, _pivot: null, _visible: !0, _blendMode: "normal", _opacity: 1, _locked: !1, _guide: !1, _clipMask: !1, _selection: 0, _selectBounds: !0, _selectChildren: !1, _serializeFields: { name: null, applyMatrix: null, matrix: new S, pivot: null, visible: !0, blendMode: "normal", opacity: 1, locked: !1, guide: !1, clipMask: !1, selected: !1, data: {} }, _prioritize: ["applyMatrix"]
                                            }, new
                                                function () {
                                                    var t = ["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"];
                                                    return l.each(t, (
                                                        function (t) {
                                                            this._events[t] = {
                                                                install:
                                                                    function (t) { this.getView()._countItemEvent(t, 1) }, uninstall:
                                                                    function (t) { this.getView()._countItemEvent(t, -1) }
                                                            }
                                                        }), {
                                                        _events: {
                                                            onFrame: {
                                                                install:
                                                                    function () { this.getView()._animateItem(this, !0) }, uninstall:
                                                                    function () { this.getView()._animateItem(this, !1) }
                                                            }, onLoad: {}, onError: {}
                                                        }, statics: { _itemHandlers: t }
                                                    })
                                                }, {
                                                initialize:
                                                    function () { }, _initialize:
                                                    function (t, e) {
                                                        var n = t && l.isPlainObject(t), i = n && !0 === t.internal, r = this._matrix = new S, s = n && t.project || ut.project, o = ut.settings;
                                                        return this._id = i ? null : p.get(), this._parent = this._index = null, this._applyMatrix = this._canApplyMatrix && o.applyMatrix, e && r.translate(e), r._owner = this, this._style = new G(s._currentStyle, this, s), i || n && 0 == t.insert || !o.insertItems && (!n || 1 != t.insert) ? this._setProject(s) : (n && t.parent || s)._insertItem(a, this, !0), n && t !== P.NO_INSERT && t !== P.INSERT && this.set(t, { internal: !0, insert: !0, project: !0, parent: !0 }), n
                                                    }, _serialize:
                                                    function (t, e) {
                                                        var n = {}, i = this;

                                                        function r(r) {
                                                            for (var s in r) {
                                                                var a = i[s];
                                                                l.equals(a, "leading" === s ? 1.2 * r.fontSize : r[s]) || (n[s] = l.serialize(a, t, "data" !== s, e))
                                                            }
                                                        } return r(this._serializeFields), this instanceof M || r(this._style._defaults), [this._class, n]
                                                    }, _changed:
                                                    function (t) {
                                                        var e = this._symbol, n = this._parent || e, i = this._project;
                                                        8 & t && (this._bounds = this._position = this._decomposed = a), 16 & t && (this._globalMatrix = a), n && 72 & t && P._clearBoundsCache(n), 2 & t && P._clearBoundsCache(this), i && i._changed(t, this), e && e._changed(t)
                                                    }, getId:
                                                    function () { return this._id }, getName:
                                                    function () { return this._name }, setName:
                                                    function (t) {
                                                        if (this._name && this._removeNamed(), t === +t + "") throw new Error("Names consisting only of numbers are not supported.");
                                                        var e = this._getOwner();
                                                        if (t && e) {
                                                            var n = e._children, i = e._namedChildren;
                                                            (i[t] = i[t] || []).push(this), t in n || (n[t] = this)
                                                        } this._name = t || a, this._changed(256)
                                                    }, getStyle:
                                                    function () { return this._style }, setStyle:
                                                    function (t) { this.getStyle().set(t) }
                                            }, l.each(["locked", "visible", "blendMode", "opacity", "guide"], (
                                                function (t) {
                                                    var e = l.capitalize(t), n = "_" + t, i = { locked: 256, visible: 265 };

                                                    this["get" + e] =
                                                        function () { return this[n] }, this["set" + e] =
                                                        function (e) { e != this[n] && (this[n] = e, this._changed(i[t] || 257)) }
                                                }), {}), {
                                                beans: !0, getSelection:
                                                    function () { return this._selection }, setSelection:
                                                    function (t) {
                                                        if (t !== this._selection) {
                                                            this._selection = t;
                                                            var e = this._project;
                                                            e && (e._updateSelection(this), this._changed(257))
                                                        }
                                                    }, _changeSelection:
                                                    function (t, e) {
                                                        var n = this._selection;
                                                        this.setSelection(e ? n | t : n & ~t)
                                                    }, isSelected:
                                                    function () {
                                                        if (this._selectChildren) for (var t = this._children, e = 0, n = t.length;
                                                            e < n;
                                                            e++)if (t[e].isSelected()) return !0;
                                                        return !!(1 & this._selection)
                                                    }, setSelected:
                                                    function (t) {
                                                        if (this._selectChildren) for (var e = this._children, n = 0, i = e.length;
                                                            n < i;
                                                            n++)e[n].setSelected(t);
                                                        this._changeSelection(1, t)
                                                    }, isFullySelected:
                                                    function () {
                                                        var t = this._children, e = !!(1 & this._selection);
                                                        if (t && e) {
                                                            for (var n = 0, i = t.length;
                                                                n < i;
                                                                n++)if (!t[n].isFullySelected()) return !1;
                                                            return !0
                                                        } return e
                                                    }, setFullySelected:
                                                    function (t) {
                                                        var e = this._children;
                                                        if (e) for (var n = 0, i = e.length;
                                                            n < i;
                                                            n++)e[n].setFullySelected(t);
                                                        this._changeSelection(1, t)
                                                    }, isClipMask:
                                                    function () { return this._clipMask }, setClipMask:
                                                    function (t) { this._clipMask != (t = !!t) && (this._clipMask = t, t && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(257), this._parent && this._parent._changed(2048)) }, getData:
                                                    function () { return this._data || (this._data = {}), this._data }, setData:
                                                    function (t) { this._data = t }, getPosition:
                                                    function (t) {
                                                        var e = t ? v : m, n = this._position || (this._position = this._getPositionFromBounds());
                                                        return new e(n.x, n.y, this, "setPosition")
                                                    }, setPosition:
                                                    function () { this.translate(v.read(arguments).subtract(this.getPosition(!0))) }, _getPositionFromBounds:
                                                    function (t) { return this._pivot ? this._matrix._transformPoint(this._pivot) : (t || this.getBounds()).getCenter(!0) }, getPivot:
                                                    function () {
                                                        var t = this._pivot;
                                                        return t ? new m(t.x, t.y, this, "setPivot") : null
                                                    }, setPivot:
                                                    function () { this._pivot = v.read(arguments, 0, { clone: !0, readNull: !0 }), this._position = a }
                                            }, l.each({ getStrokeBounds: { stroke: !0 }, getHandleBounds: { handle: !0 }, getInternalBounds: { internal: !0 } }, (
                                                function (t, e) {
                                                    this[e] =
                                                        function (e) { return this.getBounds(e, t) }
                                                }), {
                                                beans: !0, getBounds:
                                                    function (t, e) {
                                                        var n = e || t instanceof S, i = l.set({}, n ? e : t, this._boundsOptions);
                                                        i.stroke && !this.getStrokeScaling() || (i.cacheItem = this);
                                                        var r = this._getCachedBounds(n && t, i).rect;
                                                        return arguments.length ? r : new b(r.x, r.y, r.width, r.height, this, "setBounds")
                                                    }, setBounds:
                                                    function () {
                                                        var t = w.read(arguments), e = this.getBounds(), n = this._matrix, i = new S, r = t.getCenter();
                                                        i.translate(r), t.width == e.width && t.height == e.height || (n.isInvertible() || (n.set(n._backup || (new S).translate(n.getTranslation())), e = this.getBounds()), i.scale(0 !== e.width ? t.width / e.width : 0, 0 !== e.height ? t.height / e.height : 0)), r = e.getCenter(), i.translate(-r.x, -r.y), this.transform(i)
                                                    }, _getBounds:
                                                    function (t, e) {
                                                        var n = this._children;
                                                        return n && n.length ? (P._updateBoundsCache(this, e.cacheItem), P._getBounds(n, t, e)) : new w
                                                    }, _getBoundsCacheKey:
                                                    function (t, e) { return [t.stroke ? 1 : 0, t.handle ? 1 : 0, e ? 1 : 0].join("") }, _getCachedBounds:
                                                    function (t, e, n) {
                                                        t = t && t._orNullIfIdentity();
                                                        var i = e.internal && !n, r = e.cacheItem, s = i ? null : this._matrix._orNullIfIdentity(), a = r && (!t || t.equals(s)) && this._getBoundsCacheKey(e, i), o = this._bounds;
                                                        if (P._updateBoundsCache(this._parent || this._symbol, r), a && o && a in o) return { rect: (f = o[a]).rect.clone(), nonscaling: f.nonscaling };

                                                        var h = this._getBounds(t || s, e), l = h.rect || h, u = this._style, c = h.nonscaling || u.hasStroke() && !u.getStrokeScaling();
                                                        if (a) {
                                                            o || (this._bounds = o = {});
                                                            var f = o[a] = { rect: l.clone(), nonscaling: c, internal: i }
                                                        } return { rect: l, nonscaling: c }
                                                    }, _getStrokeMatrix:
                                                    function (t, e) {
                                                        var n = this.getStrokeScaling() ? null : e && e.internal ? this : this._parent || this._symbol && this._symbol._item, i = n ? n.getViewMatrix().invert() : t;
                                                        return i && i._shiftless()
                                                    }, statics: {
                                                        _updateBoundsCache:
                                                            function (t, e) {
                                                                if (t && e) {
                                                                    var n = e._id, i = t._boundsCache = t._boundsCache || { ids: {}, list: [] };

                                                                    i.ids[n] || (i.list.push(e), i.ids[n] = e)
                                                                }
                                                            }, _clearBoundsCache:
                                                            function (t) {
                                                                var e = t._boundsCache;
                                                                if (e) {
                                                                    t._bounds = t._position = t._boundsCache = a;
                                                                    for (var n = 0, i = e.list, r = i.length;
                                                                        n < r;
                                                                        n++) {
                                                                            var s = i[n];
                                                                        s !== t && (s._bounds = s._position = a, s._boundsCache && P._clearBoundsCache(s))
                                                                    }
                                                                }
                                                            }, _getBounds:
                                                            function (t, e, n) {
                                                                var i = 1 / 0, r = -i, s = i, a = r, o = !1;
                                                                n = n || {};

                                                                for (var h = 0, l = t.length;
                                                                    h < l;
                                                                    h++) {
                                                                        var u = t[h];
                                                                    if (u._visible && !u.isEmpty(!0)) {
                                                                        var c = u._getCachedBounds(e && e.appended(u._matrix), n, !0), f = c.rect;
                                                                        i = Math.min(f.x, i), s = Math.min(f.y, s), r = Math.max(f.x + f.width, r), a = Math.max(f.y + f.height, a), c.nonscaling && (o = !0)
                                                                    }
                                                                } return { rect: isFinite(i) ? new w(i, s, r - i, a - s) : new w, nonscaling: o }
                                                            }
                                                    }
                                            }), {
                                                beans: !0, _decompose:
                                                    function () { return this._applyMatrix ? null : this._decomposed || (this._decomposed = this._matrix.decompose()) }, getRotation:
                                                    function () {
                                                        var t = this._decompose();
                                                        return t ? t.rotation : 0
                                                    }, setRotation:
                                                    function (t) {
                                                        var e = this.getRotation();
                                                        if (null != e && null != t) {
                                                            var n = this._decomposed;
                                                            this.rotate(t - e), n && (n.rotation = t, this._decomposed = n)
                                                        }
                                                    }, getScaling:
                                                    function () {
                                                        var t = this._decompose(), e = t && t.scaling;
                                                        return new m(e ? e.x : 1, e ? e.y : 1, this, "setScaling")
                                                    }, setScaling:
                                                    function () {
                                                        var t = this.getScaling(), e = v.read(arguments, 0, { clone: !0, readNull: !0 });
                                                        if (t && e && !t.equals(e)) {
                                                            var n = this.getRotation(), i = this._decomposed, r = new S, s = g.isZero;
                                                            if (s(t.x) || s(t.y)) r.translate(i.translation), n && r.rotate(n), r.scale(e.x, e.y), this._matrix.set(r);
                                                            else {
                                                                var a = this.getPosition(!0);
                                                                r.translate(a), n && r.rotate(n), r.scale(e.x / t.x, e.y / t.y), n && r.rotate(-n), r.translate(a.negate()), this.transform(r)
                                                            } i && (i.scaling = e, this._decomposed = i)
                                                        }
                                                    }, getMatrix:
                                                    function () { return this._matrix }, setMatrix:
                                                    function () {
                                                        var t = this._matrix;
                                                        t.set.apply(t, arguments)
                                                    }, getGlobalMatrix:
                                                    function (t) {
                                                        var e = this._globalMatrix;
                                                        if (e) for (var n = this._parent, i = [];
                                                            n;
                                                        ) {
                                                            if (!n._globalMatrix) {
                                                                e = null;
                                                                for (var r = 0, s = i.length;
                                                                    r < s;
                                                                    r++)i[r]._globalMatrix = null;
                                                                break
                                                            } i.push(n), n = n._parent
                                                        } e || (e = this._globalMatrix = this._matrix.clone(), (n = this._parent) && e.prepend(n.getGlobalMatrix(!0)));
                                                        return t ? e : e.clone()
                                                    }, getViewMatrix:
                                                    function () { return this.getGlobalMatrix().prepend(this.getView()._matrix) }, getApplyMatrix:
                                                    function () { return this._applyMatrix }, setApplyMatrix:
                                                    function (t) { (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0) }, getTransformContent: "#getApplyMatrix", setTransformContent: "#setApplyMatrix"
                                            }, {
                                                getProject:
                                                    function () { return this._project }, _setProject:
                                                    function (t, e) {
                                                        if (this._project !== t) {
                                                            this._project && this._installEvents(!1), this._project = t;
                                                            for (var n = this._children, i = 0, r = n && n.length;
                                                                i < r;
                                                                i++)n[i]._setProject(t);
                                                            e = !0
                                                        } e && this._installEvents(!0)
                                                    }, getView:
                                                    function () { return this._project._view }, _installEvents:
                                                    function t(e) {
                                                        t.base.call(this, e);
                                                        for (var n = this._children, i = 0, r = n && n.length;
                                                            i < r;
                                                            i++)n[i]._installEvents(e)
                                                    }, getLayer:
                                                    function () {
                                                        for (var t = this;
                                                            t = t._parent;
                                                        )if (t instanceof O) return t;
                                                        return null
                                                    }, getParent:
                                                    function () { return this._parent }, setParent:
                                                    function (t) { return t.addChild(this) }, _getOwner: "#getParent", getChildren:
                                                    function () { return this._children }, setChildren:
                                                    function (t) { this.removeChildren(), this.addChildren(t) }, getFirstChild:
                                                    function () { return this._children && this._children[0] || null }, getLastChild:
                                                    function () { return this._children && this._children[this._children.length - 1] || null }, getNextSibling:
                                                    function () {
                                                        var t = this._getOwner();
                                                        return t && t._children[this._index + 1] || null
                                                    }, getPreviousSibling:
                                                    function () {
                                                        var t = this._getOwner();
                                                        return t && t._children[this._index - 1] || null
                                                    }, getIndex:
                                                    function () { return this._index }, setIndex:
                                                    function (t) {
                                                        var e = this._parent, n = e && e._children;
                                                        n && e.insertChildren(t in n ? t : a, [this])
                                                    }, equals:
                                                    function (t) { return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1 }, _equals:
                                                    function (t) { return l.equals(this._children, t._children) }, clone:
                                                    function (t) {
                                                        var e = new this.constructor(P.NO_INSERT), n = this._children, i = l.pick(t ? t.insert : a, t === a || !0 === t), r = l.pick(t ? t.deep : a, !0);
                                                        n && e.copyAttributes(this), n && !r || e.copyContent(this), n || e.copyAttributes(this), i && e.insertAbove(this);
                                                        var s = this._name, o = this._parent;
                                                        if (s && o) {
                                                            n = o._children;
                                                            for (var h = s, u = 1;
                                                                n[s];
                                                            )s = h + " " + u++;
                                                            s !== h && e.setName(s)
                                                        } return e
                                                    }, copyContent:
                                                    function (t) {
                                                        for (var e = t._children, n = 0, i = e && e.length;
                                                            n < i;
                                                            n++)this.addChild(e[n].clone(!1), !0)
                                                    }, copyAttributes:
                                                    function (t, e) {
                                                        this.setStyle(t._style);
                                                        for (var n = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide"], i = 0, r = n.length;
                                                            i < r;
                                                            i++) {
                                                                var s = n[i];
                                                            t.hasOwnProperty(s) && (this[s] = t[s])
                                                        } e || this._matrix.set(t._matrix, !0), this.setApplyMatrix(t._applyMatrix), this.setPivot(t._pivot), this.setSelection(t._selection);
                                                        var a = t._data, o = t._name;
                                                        this._data = a ? l.clone(a) : null, o && this.setName(o)
                                                    }, rasterize:
                                                    function (t, e) {
                                                        var n, i, r;
                                                        l.isPlainObject(t) ? (n = t.resolution, i = t.insert, r = t.raster) : (n = t, i = e), r || (r = new I(P.NO_INSERT));
                                                        var s = this.getStrokeBounds(), o = (n || this.getView().getResolution()) / 72, h = s.getTopLeft().floor(), u = s.getBottomRight().ceil(), c = new y(u.subtract(h)), f = c.multiply(o);
                                                        if (r.setSize(f, !0), !f.isZero()) {
                                                            var d = r.getContext(!0), _ = (new S).scale(o).translate(h.negate());
                                                            d.save(), _.applyToContext(d), this.draw(d, new l({ matrices: [_] })), d.restore()
                                                        } return r._matrix.set((new S).translate(h.add(c.divide(2))).scale(1 / o)), (i === a || i) && r.insertAbove(this), r
                                                    }, contains:
                                                    function () {
                                                        var t = this._matrix;
                                                        return t.isInvertible() && !!this._contains(t._inverseTransform(v.read(arguments)))
                                                    }, _contains:
                                                    function (t) {
                                                        var e = this._children;
                                                        if (e) {
                                                            for (var n = e.length - 1;
                                                                n >= 0;
                                                                n--)if (e[n].contains(t)) return !0;
                                                            return !1
                                                        } return t.isInside(this.getInternalBounds())
                                                    }, isInside:
                                                    function () { return w.read(arguments).contains(this.getBounds()) }, _asPathItem:
                                                    function () { return new D.Rectangle({ rectangle: this.getInternalBounds(), matrix: this._matrix, insert: !1 }) }, intersects:
                                                    function (t, e) { return t instanceof P && this._asPathItem().getIntersections(t._asPathItem(), null, e, !0).length > 0 }
                                            }, new
                                                function () {
                                                    function t() {
                                                        var t = arguments;
                                                        return this._hitTest(v.read(t), E.getOptions(t))
                                                    }
                                                    function e() {
                                                        var t = arguments, e = v.read(t), n = E.getOptions(t), i = [];
                                                        return this._hitTest(e, new l({ all: i }, n)), i
                                                    }
                                                    function n(t, e, n, i) {
                                                        var r = this._children;
                                                        if (r) for (var s = r.length - 1;
                                                            s >= 0;
                                                            s--) {
                                                                var a = r[s], o = a !== i && a._hitTest(t, e, n);
                                                            if (o && !e.all) return o
                                                        } return null
                                                    } return k.inject({ hitTest: t, hitTestAll: e, _hitTest: n }), { hitTest: t, hitTestAll: e, _hitTestChildren: n }
                                                }, {
                                                _hitTest:
                                                    function (t, e, n) {
                                                        if (this._locked || !this._visible || this._guide && !e.guides || this.isEmpty()) return null;
                                                        var i = this._matrix, r = n ? n.appended(i) : this.getGlobalMatrix().prepend(this.getView()._matrix), s = Math.max(e.tolerance, 1e-12), a = e._tolerancePadding = new y(D._getStrokePadding(s, i._shiftless().invert()));
                                                        if (!(t = i._inverseTransform(t)) || !this._children && !this.getBounds({ internal: !0, stroke: !0, handle: !0 }).expand(a.multiply(2))._containsPoint(t)) return null;
                                                        var o, h, u = !(e.guides && !this._guide || e.selected && !this.isSelected() || e.type && e.type !== l.hyphenate(this._class) || e.class && !(this instanceof e.class)), c = e.match, f = this;

                                                        function d(t) { return t && c && !c(t) && (t = null), t && e.all && e.all.push(t), t }
                                                        function _(e, n) {
                                                            var i = n ? o["get" + n]() : f.getPosition();
                                                            if (t.subtract(i).divide(a).length <= 1) return new E(e, f, { name: n ? l.hyphenate(n) : e, point: i })
                                                        } var g = e.position, p = e.center, v = e.bounds;
                                                        if (u && this._parent && (g || p || v)) {
                                                            if ((p || v) && (o = this.getInternalBounds()), !(h = g && _("position") || p && _("center", "Center")) && v) for (var m = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], x = 0;
                                                                x < 8 && !h;
                                                                x++)h = _("bounds", m[x]);
                                                            h = d(h)
                                                        } return h || (h = this._hitTestChildren(t, e, r) || u && d(this._hitTestSelf(t, e, r, this.getStrokeScaling() ? null : r._shiftless().invert())) || null), h && h.point && (h.point = i.transform(h.point)), h
                                                    }, _hitTestSelf:
                                                    function (t, e) { if (e.fill && this.hasFill() && this._contains(t)) return new E("fill", this) }, matches:
                                                    function (t, e) {
                                                        var n = typeof t;
                                                        if ("object" === n) {
                                                            for (var i in t) if (t.hasOwnProperty(i) && !this.matches(i, t[i])) return !1;
                                                            return !0
                                                        } if ("function" === n) return t(this);
                                                        if ("match" === t) return e(this);
                                                        var r = /^(empty|editable)$/.test(t) ? this["is" + l.capitalize(t)]() : "type" === t ? l.hyphenate(this._class) : this[t];
                                                        if ("class" === t) {
                                                            if ("function" == typeof e) return this instanceof e;
                                                            r = this._class
                                                        } if ("function" == typeof e) return !!e(r);
                                                        if (e) {
                                                            if (e.test) return e.test(r);
                                                            if (l.isPlainObject(e)) return
                                                            function t(e, n) {
                                                                for (var i in e) if (e.hasOwnProperty(i)) {
                                                                    var r = e[i], s = n[i];
                                                                    if (l.isPlainObject(r) && l.isPlainObject(s)) { if (!t(r, s)) return !1 } else if (!l.equals(r, s)) return !1
                                                                } return !0
                                                            } (e, r)
                                                        } return l.equals(r, e)
                                                    }, getItems:
                                                    function (t) { return P._getItems(this, t, this._matrix) }, getItem:
                                                    function (t) { return P._getItems(this, t, this._matrix, null, !0)[0] || null }, statics: {
                                                        _getItems:
                                                            function t(e, n, i, r, s) {
                                                                if (!r) {
                                                                    var a = "object" == typeof n && n, o = a && a.overlapping, h = a && a.inside, u = (m = o || h) && w.read([m]);
                                                                    r = { items: [], recursive: a && !1 !== a.recursive, inside: !!h, overlapping: !!o, rect: u, path: o && new D.Rectangle({ rectangle: u, insert: !1 }) }, a && (n = l.filter({}, n, { recursive: !0, inside: !0, overlapping: !0 }))
                                                                } var c = e._children, f = r.items;
                                                                i = (u = r.rect) && (i || new S);
                                                                for (var d = 0, _ = c && c.length;
                                                                    d < _;
                                                                    d++) {
                                                                        var g = c[d], p = i && i.appended(g._matrix), v = !0;
                                                                    if (u) {
                                                                        var m = g.getBounds(p);
                                                                        if (!u.intersects(m)) continue;
                                                                        u.contains(m) || r.overlapping && (m.contains(u) || r.path.intersects(g, p)) || (v = !1)
                                                                    } if (v && g.matches(n) && (f.push(g), s)) break;
                                                                    if (!1 !== r.recursive && t(g, n, p, r, s), s && f.length > 0) break
                                                                } return f
                                                            }
                                                    }
                                            }, {
                                                importJSON:
                                                    function (t) {
                                                        var e = l.importJSON(t, this);
                                                        return e !== this ? this.addChild(e) : e
                                                    }, addChild:
                                                    function (t) { return this.insertChild(a, t) }, insertChild:
                                                    function (t, e) {
                                                        var n = e ? this.insertChildren(t, [e]) : null;
                                                        return n && n[0]
                                                    }, addChildren:
                                                    function (t) { return this.insertChildren(this._children.length, t) }, insertChildren:
                                                    function (t, e) {
                                                        var n = this._children;
                                                        if (n && e && e.length > 0) {
                                                            for (var i = {}, r = (e = l.slice(e)).length - 1;
                                                                r >= 0;
                                                                r--) {
                                                                    var s = (u = e[r]) && u._id;
                                                                !u || i[s] ? e.splice(r, 1) : (u._remove(!1, !0), i[s] = !0)
                                                            } l.splice(n, e, t, 0);
                                                            for (var a = this._project, o = a._changes, h = (r = 0, e.length);
                                                                r < h;
                                                                r++) {
                                                                    var u, c = (u = e[r])._name;
                                                                u._parent = this, u._setProject(a, !0), c && u.setName(c), o && u._changed(5)
                                                            } this._changed(11)
                                                        } else e = null;
                                                        return e
                                                    }, _insertItem: "#insertChild", _insertAt:
                                                    function (t, e) {
                                                        var n = t && t._getOwner(), i = t !== this && n ? this : null;
                                                        return i && (i._remove(!1, !0), n._insertItem(t._index + e, i)), i
                                                    }, insertAbove:
                                                    function (t) { return this._insertAt(t, 1) }, insertBelow:
                                                    function (t) { return this._insertAt(t, 0) }, sendToBack:
                                                    function () {
                                                        var t = this._getOwner();
                                                        return t ? t._insertItem(0, this) : null
                                                    }, bringToFront:
                                                    function () {
                                                        var t = this._getOwner();
                                                        return t ? t._insertItem(a, this) : null
                                                    }, appendTop: "#addChild", appendBottom:
                                                    function (t) { return this.insertChild(0, t) }, moveAbove: "#insertAbove", moveBelow: "#insertBelow", addTo:
                                                    function (t) { return t._insertItem(a, this) }, copyTo:
                                                    function (t) { return this.clone(!1).addTo(t) }, reduce:
                                                    function (t) {
                                                        var e = this._children;
                                                        if (e && 1 === e.length) {
                                                            var n = e[0].reduce(t);
                                                            return this._parent ? (n.insertAbove(this), this.remove()) : n.remove(), n
                                                        } return this
                                                    }, _removeNamed:
                                                    function () {
                                                        var t = this._getOwner();
                                                        if (t) {
                                                            var e = t._children, n = t._namedChildren, i = this._name, r = n[i], s = r ? r.indexOf(this) : -1;
                                                            -1 !== s && (e[i] == this && delete e[i], r.splice(s, 1), r.length ? e[i] = r[0] : delete n[i])
                                                        }
                                                    }, _remove:
                                                    function (t, e) {
                                                        var n = this._getOwner(), i = this._project, r = this._index;
                                                        return this._style && this._style._dispose(), !!n && (this._name && this._removeNamed(), null != r && (i._activeLayer === this && (i._activeLayer = this.getNextSibling() || this.getPreviousSibling()), l.splice(n._children, null, r, 1)), this._installEvents(!1), t && i._changes && this._changed(5), e && n._changed(11, this), this._parent = null, !0)
                                                    }, remove:
                                                    function () { return this._remove(!0, !0) }, replaceWith:
                                                    function (t) {
                                                        var e = t && t.insertBelow(this);
                                                        return e && this.remove(), e
                                                    }, removeChildren:
                                                    function (t, e) {
                                                        if (!this._children) return null;
                                                        t = t || 0, e = l.pick(e, this._children.length);
                                                        for (var n = l.splice(this._children, null, t, e - t), i = n.length - 1;
                                                            i >= 0;
                                                            i--)n[i]._remove(!0, !1);
                                                        return n.length > 0 && this._changed(11), n
                                                    }, clear: "#removeChildren", reverseChildren:
                                                    function () {
                                                        if (this._children) {
                                                            this._children.reverse();
                                                            for (var t = 0, e = this._children.length;
                                                                t < e;
                                                                t++)this._children[t]._index = t;
                                                            this._changed(11)
                                                        }
                                                    }, isEmpty:
                                                    function (t) {
                                                        var e = this._children, n = e ? e.length : 0;
                                                        if (t) {
                                                            for (var i = 0;
                                                                i < n;
                                                                i++)if (!e[i].isEmpty(t)) return !1;
                                                            return !0
                                                        } return !n
                                                    }, isEditable:
                                                    function () {
                                                        for (var t = this;
                                                            t;
                                                        ) {
                                                            if (!t._visible || t._locked) return !1;
                                                            t = t._parent
                                                        } return !0
                                                    }, hasFill:
                                                    function () { return this.getStyle().hasFill() }, hasStroke:
                                                    function () { return this.getStyle().hasStroke() }, hasShadow:
                                                    function () { return this.getStyle().hasShadow() }, _getOrder:
                                                    function (t) {
                                                        function e(t) {
                                                            var e = [];
                                                            do { e.unshift(t) } while (t = t._parent);
                                                            return e
                                                        } for (var n = e(this), i = e(t), r = 0, s = Math.min(n.length, i.length);
                                                            r < s;
                                                            r++)if (n[r] != i[r]) return n[r]._index < i[r]._index ? 1 : -1;
                                                        return 0
                                                    }, hasChildren:
                                                    function () { return this._children && this._children.length > 0 }, isInserted:
                                                    function () { return !!this._parent && this._parent.isInserted() }, isAbove:
                                                    function (t) { return -1 === this._getOrder(t) }, isBelow:
                                                    function (t) { return 1 === this._getOrder(t) }, isParent:
                                                    function (t) { return this._parent === t }, isChild:
                                                    function (t) { return t && t._parent === this }, isDescendant:
                                                    function (t) {
                                                        for (var e = this;
                                                            e = e._parent;
                                                        )if (e === t) return !0;
                                                        return !1
                                                    }, isAncestor:
                                                    function (t) { return !!t && t.isDescendant(this) }, isSibling:
                                                    function (t) { return this._parent === t._parent }, isGroupedWith:
                                                    function (t) {
                                                        for (var e = this._parent;
                                                            e;
                                                        ) {
                                                            if (e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e)) return !0;
                                                            e = e._parent
                                                        } return !1
                                                    }
                                            }, l.each(["rotate", "scale", "shear", "skew"], (
                                                function (t) {
                                                    var e = "rotate" === t;
                                                    this[t] =
                                                        function () {
                                                            var n = arguments, i = (e ? l : v).read(n), r = v.read(n, 0, { readNull: !0 });
                                                            return this.transform((new S)[t](i, r || this.getPosition(!0)))
                                                        }
                                                }), {
                                                translate:
                                                    function () {
                                                        var t = new S;
                                                        return this.transform(t.translate.apply(t, arguments))
                                                    }, transform:
                                                    function (t, e, n) {
                                                        var i = this._matrix, r = t && !t.isIdentity(), s = n && this._canApplyMatrix || this._applyMatrix && (r || !i.isIdentity() || e && this._children);
                                                        if (!r && !s) return this;
                                                        if (r) {
                                                            !t.isInvertible() && i.isInvertible() && (i._backup = i.getValues()), i.prepend(t, !0);
                                                            var a = this._style, o = a.getFillColor(!0), h = a.getStrokeColor(!0);
                                                            o && o.transform(t), h && h.transform(t)
                                                        } if (s && (s = this._transformContent(i, e, n))) {
                                                            var l = this._pivot;
                                                            l && i._transformPoint(l, l, !0), i.reset(!0), n && this._canApplyMatrix && (this._applyMatrix = !0)
                                                        } var u = this._bounds, c = this._position;
                                                        (r || s) && this._changed(25);
                                                        var f = r && u && t.decompose();
                                                        if (f && f.skewing.isZero() && f.rotation % 90 == 0) {
                                                            for (var d in u) {
                                                                var _ = u[d];
                                                                if (_.nonscaling) delete u[d];
                                                                else if (s || !_.internal) {
                                                                    var g = _.rect;
                                                                    t._transformBounds(g, g)
                                                                }
                                                            } this._bounds = u;
                                                            var p = u[this._getBoundsCacheKey(this._boundsOptions || {})];
                                                            p && (this._position = this._getPositionFromBounds(p.rect))
                                                        } else r && c && this._pivot && (this._position = t._transformPoint(c, c));
                                                        return this
                                                    }, _transformContent:
                                                    function (t, e, n) {
                                                        var i = this._children;
                                                        if (i) {
                                                            for (var r = 0, s = i.length;
                                                                r < s;
                                                                r++)i[r].transform(t, e, n);
                                                            return !0
                                                        }
                                                    }, globalToLocal:
                                                    function () { return this.getGlobalMatrix(!0)._inverseTransform(v.read(arguments)) }, localToGlobal:
                                                    function () { return this.getGlobalMatrix(!0)._transformPoint(v.read(arguments)) }, parentToLocal:
                                                    function () { return this._matrix._inverseTransform(v.read(arguments)) }, localToParent:
                                                    function () { return this._matrix._transformPoint(v.read(arguments)) }, fitBounds:
                                                    function (t, e) {
                                                        t = w.read(arguments);
                                                        var n = this.getBounds(), i = n.height / n.width, r = t.height / t.width, s = (e ? i > r : i < r) ? t.width / n.width : t.height / n.height, a = new w(new v, new y(n.width * s, n.height * s));
                                                        a.setCenter(t.getCenter()), this.setBounds(a)
                                                    }
                                            }), {
                                                _setStyles:
                                                    function (t, e, n) {
                                                        var i = this._style, r = this._matrix;
                                                        if (i.hasFill() && (t.fillStyle = i.getFillColor().toCanvasStyle(t, r)), i.hasStroke()) {
                                                            t.strokeStyle = i.getStrokeColor().toCanvasStyle(t, r), t.lineWidth = i.getStrokeWidth();
                                                            var s = i.getStrokeJoin(), a = i.getStrokeCap(), o = i.getMiterLimit();
                                                            if (s && (t.lineJoin = s), a && (t.lineCap = a), o && (t.miterLimit = o), ut.support.nativeDash) {
                                                                var h = i.getDashArray(), l = i.getDashOffset();
                                                                h && h.length && ("setLineDash" in t ? (t.setLineDash(h), t.lineDashOffset = l) : (t.mozDash = h, t.mozDashOffset = l))
                                                            }
                                                        } if (i.hasShadow()) {
                                                            var u = e.pixelRatio || 1, c = n._shiftless().prepend((new S).scale(u, u)), f = c.transform(new v(i.getShadowBlur(), 0)), d = c.transform(this.getShadowOffset());
                                                            t.shadowColor = i.getShadowColor().toCanvasStyle(t), t.shadowBlur = f.getLength(), t.shadowOffsetX = d.x, t.shadowOffsetY = d.y
                                                        }
                                                    }, draw:
                                                    function (t, e, n) {
                                                        this._updateVersion = this._project._updateVersion;
                                                        if (this._visible && 0 !== this._opacity) {
                                                            var i = e.matrices, r = e.viewMatrix, s = this._matrix, a = i[i.length - 1].appended(s);
                                                            if (a.isInvertible()) {
                                                                r = r ? r.appended(a) : a, i.push(a), e.updateMatrix && (this._globalMatrix = a);
                                                                var o, h, l, u = this._blendMode, c = g.clamp(this._opacity, 0, 1), f = "normal" === u, d = ot.nativeModes[u], _ = f && 1 === c || e.dontStart || e.clip || (d || f && c < 1) && this._canComposite(), p = e.pixelRatio || 1;
                                                                if (!_) {
                                                                    var v = this.getStrokeBounds(r);
                                                                    if (!v.width || !v.height) return void i.pop();
                                                                    l = e.offset, h = e.offset = v.getTopLeft().floor(), o = t, t = at.getContext(v.getSize().ceil().add(1).multiply(p)), 1 !== p && t.scale(p, p)
                                                                } t.save();
                                                                var m = n ? n.appended(s) : this._canScaleStroke && !this.getStrokeScaling(!0) && r, y = !_ && e.clipItem, x = !m || y;
                                                                if (_ ? (t.globalAlpha = c, d && (t.globalCompositeOperation = u)) : x && t.translate(-h.x, -h.y), x && (_ ? s : r).applyToContext(t), y && e.clipItem.draw(t, e.extend({ clip: !0 })), m) {
                                                                    t.setTransform(p, 0, 0, p, 0, 0);
                                                                    var w = e.offset;
                                                                    w && t.translate(-w.x, -w.y)
                                                                } this._draw(t, e, r, m), t.restore(), i.pop(), e.clip && !e.dontFinish && t.clip(this.getFillRule()), _ || (ot.process(u, t, o, c, h.subtract(l).multiply(p)), at.release(t), e.offset = l)
                                                            }
                                                        }
                                                    }, _isUpdated:
                                                    function (t) {
                                                        var e = this._parent;
                                                        if (e instanceof F) return e._isUpdated(t);
                                                        var n = this._updateVersion === t;
                                                        return !n && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, n = !0), n
                                                    }, _drawSelection:
                                                    function (t, e, n, i, r) {
                                                        var s = this._selection, a = 1 & s, o = 2 & s || a && this._selectBounds, h = 4 & s;
                                                        if (this._drawSelected || (a = !1), (a || o || h) && this._isUpdated(r)) {
                                                            var l, u = this.getSelectedColor(!0) || (l = this.getLayer()) && l.getSelectedColor(!0), c = e.appended(this.getGlobalMatrix(!0)), f = n / 2;
                                                            if (t.strokeStyle = t.fillStyle = u ? u.toCanvasStyle(t) : "#009dec", a && this._drawSelected(t, c, i), h) {
                                                                var d = this.getPosition(!0), _ = this._parent, g = _ ? _.localToGlobal(d) : d, p = g.x, v = g.y;
                                                                t.beginPath(), t.arc(p, v, f, 0, 2 * Math.PI, !0), t.stroke();
                                                                for (var m = [[0, -1], [1, 0], [0, 1], [-1, 0]], y = f, x = n + 1, w = 0;
                                                                    w < 4;
                                                                    w++) {
                                                                        var b = m[w], S = b[0], C = b[1];
                                                                    t.moveTo(p + S * y, v + C * y), t.lineTo(p + S * x, v + C * x), t.stroke()
                                                                }
                                                            } if (o) {
                                                                var k = c._transformCorners(this.getInternalBounds());
                                                                t.beginPath();
                                                                for (w = 0;
                                                                    w < 8;
                                                                    w++)t[w ? "lineTo" : "moveTo"](k[w], k[++w]);
                                                                t.closePath(), t.stroke();
                                                                for (w = 0;
                                                                    w < 8;
                                                                    w++)t.fillRect(k[w] - f, k[++w] - f, n, n)
                                                            }
                                                        }
                                                    }, _canComposite:
                                                    function () { return !1 }
                                            }, l.each(["down", "drag", "up", "move"], (
                                                function (t) {
                                                    this["removeOn" + l.capitalize(t)] =
                                                        function () {
                                                            var e = {};

                                                            return e[t] = !0, this.removeOn(e)
                                                        }
                                                }), {
                                                removeOn:
                                                    function (t) {
                                                        for (var e in t) if (t[e]) {
                                                            var n = "mouse" + e, i = this._project, r = i._removeSets = i._removeSets || {};

                                                            r[n] = r[n] || {}, r[n][this._id] = this
                                                        } return this
                                                    }
                                            }), {
                                                tween:
                                                    function (t, e, n) {
                                                        n || (n = e, e = t, t = null, n || (n = e, e = null));
                                                        var i = n && n.easing, r = n && n.start, s = null != n && ("number" == typeof n ? n : n.duration), a = new rt(this, t, e, s, i, r);
                                                        return s && this.on("frame", (
                                                            function t(e) { a._handleFrame(1e3 * e.time), a.running || this.off("frame", t) })), a
                                                    }, tweenTo:
                                                    function (t, e) { return this.tween(null, t, e) }, tweenFrom:
                                                    function (t, e) { return this.tween(t, null, e) }
                                            }), M = P.extend({
                                                _class: "Group", _selectBounds: !1, _selectChildren: !0, _serializeFields: { children: [] }, initialize:
                                                    function (t) { this._children = [], this._namedChildren = {}, this._initialize(t) || this.addChildren(Array.isArray(t) ? t : arguments) }, _changed:
                                                    function t(e) { t.base.call(this, e), 2050 & e && (this._clipItem = a) }, _getClipItem:
                                                    function () {
                                                        var t = this._clipItem;
                                                        if (t === a) {
                                                            t = null;
                                                            for (var e = this._children, n = 0, i = e.length;
                                                                n < i;
                                                                n++)if (e[n]._clipMask) {
                                                                    t = e[n];
                                                                    break
                                                                } this._clipItem = t
                                                        } return t
                                                    }, isClipped:
                                                    function () { return !!this._getClipItem() }, setClipped:
                                                    function (t) {
                                                        var e = this.getFirstChild();
                                                        e && e.setClipMask(t)
                                                    }, _getBounds:
                                                    function t(e, n) {
                                                        var i = this._getClipItem();
                                                        return i ? i._getCachedBounds(i._matrix.prepended(e), l.set({}, n, { stroke: !1 })) : t.base.call(this, e, n)
                                                    }, _hitTestChildren:
                                                    function t(e, n, i) {
                                                        var r = this._getClipItem();
                                                        return (!r || r.contains(e)) && t.base.call(this, e, n, i, r)
                                                    }, _draw:
                                                    function (t, e) {
                                                        var n = e.clip, i = !n && this._getClipItem();
                                                        e = e.extend({ clipItem: i, clip: !1 }), n ? (t.beginPath(), e.dontStart = e.dontFinish = !0) : i && i.draw(t, e.extend({ clip: !0 }));
                                                        for (var r = this._children, s = 0, a = r.length;
                                                            s < a;
                                                            s++) {
                                                                var o = r[s];
                                                            o !== i && o.draw(t, e)
                                                        }
                                                    }
                                            }), O = M.extend({
                                                _class: "Layer", initialize:
                                                    function () { M.apply(this, arguments) }, _getOwner:
                                                    function () { return this._parent || null != this._index && this._project }, isInserted:
                                                    function t() { return this._parent ? t.base.call(this) : null != this._index }, activate:
                                                    function () { this._project._activeLayer = this }, _hitTestSelf:
                                                    function () { }
                                            }), A = P.extend({
                                                _class: "Shape", _applyMatrix: !1, _canApplyMatrix: !1, _canScaleStroke: !0, _serializeFields: { type: null, size: null, radius: null }, initialize:
                                                    function (t, e) { this._initialize(t, e) }, _equals:
                                                    function (t) { return this._type === t._type && this._size.equals(t._size) && l.equals(this._radius, t._radius) }, copyContent:
                                                    function (t) { this.setType(t._type), this.setSize(t._size), this.setRadius(t._radius) }, getType:
                                                    function () { return this._type }, setType:
                                                    function (t) { this._type = t }, getShape: "#getType", setShape: "#setType", getSize:
                                                    function () {
                                                        var t = this._size;
                                                        return new x(t.width, t.height, this, "setSize")
                                                    }, setSize:
                                                    function () {
                                                        var t = y.read(arguments);
                                                        if (this._size) {
                                                            if (!this._size.equals(t)) {
                                                                var e = this._type, n = t.width, i = t.height;
                                                                "rectangle" === e ? this._radius.set(y.min(this._radius, t.divide(2).abs())) : "circle" === e ? (n = i = (n + i) / 2, this._radius = n / 2) : "ellipse" === e && this._radius._set(n / 2, i / 2), this._size._set(n, i), this._changed(9)
                                                            }
                                                        } else this._size = t.clone()
                                                    }, getRadius:
                                                    function () {
                                                        var t = this._radius;
                                                        return "circle" === this._type ? t : new x(t.width, t.height, this, "setRadius")
                                                    }, setRadius:
                                                    function (t) {
                                                        var e = this._type;
                                                        if ("circle" === e) {
                                                            if (t === this._radius) return;
                                                            var n = 2 * t;
                                                            this._radius = t, this._size._set(n, n)
                                                        } else if (t = y.read(arguments), this._radius) {
                                                            if (this._radius.equals(t)) return;
                                                            if (this._radius.set(t), "rectangle" === e) {
                                                                n = y.max(this._size, t.multiply(2));
                                                                this._size.set(n)
                                                            } else "ellipse" === e && this._size._set(2 * t.width, 2 * t.height)
                                                        } else this._radius = t.clone();
                                                        this._changed(9)
                                                    }, isEmpty:
                                                    function () { return !1 }, toPath:
                                                    function (t) {
                                                        var e = new (D[l.capitalize(this._type)])({ center: new v, size: this._size, radius: this._radius, insert: !1 });
                                                        return e.copyAttributes(this), ut.settings.applyMatrix && e.setApplyMatrix(!0), (t === a || t) && e.insertAbove(this), e
                                                    }, toShape: "#clone", _asPathItem:
                                                    function () { return this.toPath(!1) }, _draw:
                                                    function (t, e, n, i) {
                                                        var r = this._style, s = r.hasFill(), a = r.hasStroke(), o = e.dontFinish || e.clip, h = !i;
                                                        if (s || a || o) {
                                                            var l = this._type, u = this._radius, c = "circle" === l;
                                                            if (e.dontStart || t.beginPath(), h && c) t.arc(0, 0, u, 0, 2 * Math.PI, !0);
                                                            else {
                                                                var f = c ? u : u.width, d = c ? u : u.height, _ = this._size, g = _.width, p = _.height;
                                                                if (h && "rectangle" === l && 0 === f && 0 === d) t.rect(-g / 2, -p / 2, g, p);
                                                                else {
                                                                    var v = g / 2, m = p / 2, y = .44771525016920644, x = f * y, w = d * y, b = [-v, -m + d, -v, -m + w, -v + x, -m, -v + f, -m, v - f, -m, v - x, -m, v, -m + w, v, -m + d, v, m - d, v, m - w, v - x, m, v - f, m, -v + f, m, -v + x, m, -v, m - w, -v, m - d];
                                                                    i && i.transform(b, b, 32), t.moveTo(b[0], b[1]), t.bezierCurveTo(b[2], b[3], b[4], b[5], b[6], b[7]), v !== f && t.lineTo(b[8], b[9]), t.bezierCurveTo(b[10], b[11], b[12], b[13], b[14], b[15]), m !== d && t.lineTo(b[16], b[17]), t.bezierCurveTo(b[18], b[19], b[20], b[21], b[22], b[23]), v !== f && t.lineTo(b[24], b[25]), t.bezierCurveTo(b[26], b[27], b[28], b[29], b[30], b[31])
                                                                }
                                                            } t.closePath()
                                                        } o || !s && !a || (this._setStyles(t, e, n), s && (t.fill(r.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), a && t.stroke())
                                                    }, _canComposite:
                                                    function () { return !(this.hasFill() && this.hasStroke()) }, _getBounds:
                                                    function (t, e) {
                                                        var n = new w(this._size).setCenter(0, 0), i = this._style, r = e.stroke && i.hasStroke() && i.getStrokeWidth();
                                                        return t && (n = t._transformBounds(n)), r ? n.expand(D._getStrokePadding(r, this._getStrokeMatrix(t, e))) : n
                                                    }
                                            }, new
                                                function () {
                                                    function t(t, e, n) {
                                                        var i = t._radius;
                                                        if (!i.isZero()) for (var r = t._size.divide(2), s = 1;
                                                            s <= 4;
                                                            s++) {
                                                                var a = new v(s > 1 && s < 4 ? -1 : 1, s > 2 ? -1 : 1), o = a.multiply(r), h = o.subtract(a.multiply(i));
                                                            if (new w(n ? o.add(a.multiply(n)) : o, h).contains(e)) return { point: h, quadrant: s }
                                                        }
                                                    }
                                                    function e(t, e, n, i) {
                                                        var r = t.divide(e);
                                                        return (!i || r.isInQuadrant(i)) && r.subtract(r.normalize()).multiply(e).divide(n).length <= 1
                                                    } return {
                                                        _contains:
                                                            function e(n) {
                                                                if ("rectangle" === this._type) {
                                                                    var i = t(this, n);
                                                                    return i ? n.subtract(i.point).divide(this._radius).getLength() <= 1 : e.base.call(this, n)
                                                                } return n.divide(this.size).getLength() <= .5
                                                            }, _hitTestSelf:
                                                            function n(i, r, s, a) {
                                                                var o = !1, h = this._style, l = r.stroke && h.hasStroke(), u = r.fill && h.hasFill();
                                                                if (l || u) {
                                                                    var c = this._type, f = this._radius, d = l ? h.getStrokeWidth() / 2 : 0, _ = r._tolerancePadding.add(D._getStrokePadding(d, !h.getStrokeScaling() && a));
                                                                    if ("rectangle" === c) {
                                                                        var g = _.multiply(2), p = t(this, i, g);
                                                                        if (p) o = e(i.subtract(p.point), f, _, p.quadrant);
                                                                        else {
                                                                            var v = new w(this._size).setCenter(0, 0), m = v.expand(g), y = v.expand(g.negate());
                                                                            o = m._containsPoint(i) && !y._containsPoint(i)
                                                                        }
                                                                    } else o = e(i, f, _)
                                                                } return o ? new E(l ? "stroke" : "fill", this) : n.base.apply(this, arguments)
                                                            }
                                                    }
                                                }, {
                                                statics: new
                                                    function () {
                                                        function t(t, e, n, i, r) {
                                                            var s = l.create(A.prototype);
                                                            return s._type = t, s._size = n, s._radius = i, s._initialize(l.getNamed(r), e), s
                                                        } return {
                                                            Circle:
                                                                function () {
                                                                    var e = arguments, n = v.readNamed(e, "center"), i = l.readNamed(e, "radius");
                                                                    return t("circle", n, new y(2 * i), i, e)
                                                                }, Rectangle:
                                                                function () {
                                                                    var e = arguments, n = w.readNamed(e, "rectangle"), i = y.min(y.readNamed(e, "radius"), n.getSize(!0).divide(2));
                                                                    return t("rectangle", n.getCenter(!0), n.getSize(!0), i, e)
                                                                }, Ellipse:
                                                                function () {
                                                                    var e = arguments, n = A._readEllipse(e), i = n.radius;
                                                                    return t("ellipse", n.center, i.multiply(2), i, e)
                                                                }, _readEllipse:
                                                                function (t) {
                                                                    var e, n;
                                                                    if (l.hasNamed(t, "radius")) e = v.readNamed(t, "center"), n = y.readNamed(t, "radius");
                                                                    else {
                                                                        var i = w.readNamed(t, "rectangle");
                                                                        e = i.getCenter(!0), n = i.getSize(!0).divide(2)
                                                                    } return { center: e, radius: n }
                                                                }
                                                        }
                                                    }
                                            }), I = P.extend({
                                                _class: "Raster", _applyMatrix: !1, _canApplyMatrix: !1, _boundsOptions: { stroke: !1, handle: !1 }, _serializeFields: { crossOrigin: null, source: null }, _prioritize: ["crossOrigin"], _smoothing: "low", beans: !0, initialize:
                                                    function (t, e) {
                                                        if (!this._initialize(t, e !== a && v.read(arguments))) {
                                                            var n, i = typeof t, r = "string" === i ? h.getElementById(t) : "object" === i ? t : null;
                                                            if (r && r !== P.NO_INSERT) if (r.getContext || null != r.naturalHeight) n = r;
                                                            else if (r) {
                                                                var s = y.read(arguments);
                                                                s.isZero() || (n = at.getCanvas(s))
                                                            } n ? this.setImage(n) : this.setSource(t)
                                                        } this._size || (this._size = new y, this._loaded = !1)
                                                    }, _equals:
                                                    function (t) { return this.getSource() === t.getSource() }, copyContent:
                                                    function (t) {
                                                        var e = t._image, n = t._canvas;
                                                        if (e) this._setImage(e);
                                                        else if (n) {
                                                            var i = at.getCanvas(t._size);
                                                            i.getContext("2d").drawImage(n, 0, 0), this._setImage(i)
                                                        } this._crossOrigin = t._crossOrigin
                                                    }, getSize:
                                                    function () {
                                                        var t = this._size;
                                                        return new x(t ? t.width : 0, t ? t.height : 0, this, "setSize")
                                                    }, setSize:
                                                    function (t, e) {
                                                        var n = y.read(arguments);
                                                        if (n.equals(this._size)) e && this.clear();
                                                        else if (n.width > 0 && n.height > 0) {
                                                            var i = !e && this.getElement();
                                                            this._setImage(at.getCanvas(n)), i && this.getContext(!0).drawImage(i, 0, 0, n.width, n.height)
                                                        } else this._canvas && at.release(this._canvas), this._size = n.clone()
                                                    }, getWidth:
                                                    function () { return this._size ? this._size.width : 0 }, setWidth:
                                                    function (t) { this.setSize(t, this.getHeight()) }, getHeight:
                                                    function () { return this._size ? this._size.height : 0 }, setHeight:
                                                    function (t) { this.setSize(this.getWidth(), t) }, getLoaded:
                                                    function () { return this._loaded }, isEmpty:
                                                    function () {
                                                        var t = this._size;
                                                        return !t || 0 === t.width && 0 === t.height
                                                    }, getResolution:
                                                    function () {
                                                        var t = this._matrix, e = new v(0, 0).transform(t), n = new v(1, 0).transform(t).subtract(e), i = new v(0, 1).transform(t).subtract(e);
                                                        return new y(72 / n.getLength(), 72 / i.getLength())
                                                    }, getPpi: "#getResolution", getImage:
                                                    function () { return this._image }, setImage:
                                                    function (t) {
                                                        var e = this;

                                                        function n(t) {
                                                            var n = e.getView(), i = t && t.type || "load";
                                                            n && e.responds(i) && (ut = n._scope, e.emit(i, new Q(t)))
                                                        } this._setImage(t), this._loaded ? setTimeout(n, 0) : t && K.add(t, {
                                                            load:
                                                                function (i) { e._setImage(t), n(i) }, error: n
                                                        })
                                                    }, _setImage:
                                                    function (t) { this._canvas && at.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t, this._loaded = !0) : (this._image = t, this._canvas = null, this._loaded = !!(t && t.src && t.complete)), this._size = new y(t ? t.naturalWidth || t.width : 0, t ? t.naturalHeight || t.height : 0), this._context = null, this._changed(1033) }, getCanvas:
                                                    function () {
                                                        if (!this._canvas) {
                                                            var t = at.getContext(this._size);
                                                            try { this._image && t.drawImage(this._image, 0, 0), this._canvas = t.canvas } catch (e) { at.release(t) }
                                                        } return this._canvas
                                                    }, setCanvas: "#setImage", getContext:
                                                    function (t) { return this._context || (this._context = this.getCanvas().getContext("2d")), t && (this._image = null, this._changed(1025)), this._context }, setContext:
                                                    function (t) { this._context = t }, getSource:
                                                    function () {
                                                        var t = this._image;
                                                        return t && t.src || this.toDataURL()
                                                    }, setSource:
                                                    function (t) {
                                                        var e = new s.Image, n = this._crossOrigin;
                                                        n && (e.crossOrigin = n), t && (e.src = t), this.setImage(e)
                                                    }, getCrossOrigin:
                                                    function () {
                                                        var t = this._image;
                                                        return t && t.crossOrigin || this._crossOrigin || ""
                                                    }, setCrossOrigin:
                                                    function (t) {
                                                        this._crossOrigin = t;
                                                        var e = this._image;
                                                        e && (e.crossOrigin = t)
                                                    }, getSmoothing:
                                                    function () { return this._smoothing }, setSmoothing:
                                                    function (t) { this._smoothing = "string" == typeof t ? t : t ? "low" : "off", this._changed(257) }, getElement:
                                                    function () { return this._canvas || this._loaded && this._image }
                                            }, {
                                                beans: !1, getSubCanvas:
                                                    function () {
                                                        var t = w.read(arguments), e = at.getContext(t.getSize());
                                                        return e.drawImage(this.getCanvas(), t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), e.canvas
                                                    }, getSubRaster:
                                                    function () {
                                                        var t = w.read(arguments), e = new I(P.NO_INSERT);
                                                        return e._setImage(this.getSubCanvas(t)), e.translate(t.getCenter().subtract(this.getSize().divide(2))), e._matrix.prepend(this._matrix), e.insertAbove(this), e
                                                    }, toDataURL:
                                                    function () {
                                                        var t = this._image, e = t && t.src;
                                                        if (/^data:/.test(e)) return e;
                                                        var n = this.getCanvas();
                                                        return n ? n.toDataURL.apply(n, arguments) : null
                                                    }, drawImage:
                                                    function (t) {
                                                        var e = v.read(arguments, 1);
                                                        this.getContext(!0).drawImage(t, e.x, e.y)
                                                    }, getAverageColor:
                                                    function (t) {
                                                        var e, n;
                                                        if (t ? t instanceof B ? (n = t, e = t.getBounds()) : "object" == typeof t && ("width" in t ? e = new w(t) : "x" in t && (e = new w(t.x - .5, t.y - .5, 1, 1))) : e = this.getBounds(), !e) return null;
                                                        var i = Math.min(e.width, 32), r = Math.min(e.height, 32), s = I._sampleContext;
                                                        s ? s.clearRect(0, 0, 33, 33) : s = I._sampleContext = at.getContext(new y(32)), s.save();
                                                        var a = (new S).scale(i / e.width, r / e.height).translate(-e.x, -e.y);
                                                        a.applyToContext(s), n && n.draw(s, new l({ clip: !0, matrices: [a] })), this._matrix.applyToContext(s);
                                                        var o = this.getElement(), h = this._size;
                                                        o && s.drawImage(o, -h.width / 2, -h.height / 2), s.restore();
                                                        for (var u = s.getImageData(.5, .5, Math.ceil(i), Math.ceil(r)).data, c = [0, 0, 0], f = 0, d = 0, _ = u.length;
                                                            d < _;
                                                            d += 4) {
                                                                var g = u[d + 3];
                                                            f += g, g /= 255, c[0] += u[d] * g, c[1] += u[d + 1] * g, c[2] += u[d + 2] * g
                                                        } for (d = 0;
                                                            d < 3;
                                                            d++)c[d] /= f;
                                                        return f ? W.read(c) : null
                                                    }, getPixel:
                                                    function () {
                                                        var t = v.read(arguments), e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                                                        return new W("rgb", [e[0] / 255, e[1] / 255, e[2] / 255], e[3] / 255)
                                                    }, setPixel:
                                                    function () {
                                                        var t = arguments, e = v.read(t), n = W.read(t), i = n._convert("rgb"), r = n._alpha, s = this.getContext(!0), a = s.createImageData(1, 1), o = a.data;
                                                        o[0] = 255 * i[0], o[1] = 255 * i[1], o[2] = 255 * i[2], o[3] = null != r ? 255 * r : 255, s.putImageData(a, e.x, e.y)
                                                    }, clear:
                                                    function () {
                                                        var t = this._size;
                                                        this.getContext(!0).clearRect(0, 0, t.width + 1, t.height + 1)
                                                    }, createImageData:
                                                    function () {
                                                        var t = y.read(arguments);
                                                        return this.getContext().createImageData(t.width, t.height)
                                                    }, getImageData:
                                                    function () {
                                                        var t = w.read(arguments);
                                                        return t.isEmpty() && (t = new w(this._size)), this.getContext().getImageData(t.x, t.y, t.width, t.height)
                                                    }, putImageData:
                                                    function (t) {
                                                        var e = v.read(arguments, 1);
                                                        this.getContext(!0).putImageData(t, e.x, e.y)
                                                    }, setImageData:
                                                    function (t) { this.setSize(t), this.getContext(!0).putImageData(t, 0, 0) }, _getBounds:
                                                    function (t, e) {
                                                        var n = new w(this._size).setCenter(0, 0);
                                                        return t ? t._transformBounds(n) : n
                                                    }, _hitTestSelf:
                                                    function (t) {
                                                        if (this._contains(t)) {
                                                            var e = this;
                                                            return new E("pixel", e, {
                                                                offset: t.add(e._size.divide(2)).round(), color: {
                                                                    get:
                                                                        function () { return e.getPixel(this.offset) }
                                                                }
                                                            })
                                                        }
                                                    }, _draw:
                                                    function (t, e, n) {
                                                        var i = this.getElement();
                                                        if (i && i.width > 0 && i.height > 0) {
                                                            t.globalAlpha = g.clamp(this._opacity, 0, 1), this._setStyles(t, e, n);
                                                            var r = this._smoothing, s = "off" === r;
                                                            J.setPrefixed(t, s ? "imageSmoothingEnabled" : "imageSmoothingQuality", !s && r), t.drawImage(i, -this._size.width / 2, -this._size.height / 2)
                                                        }
                                                    }, _canComposite:
                                                    function () { return !0 }
                                            }), T = P.extend({
                                                _class: "SymbolItem", _applyMatrix: !1, _canApplyMatrix: !1, _boundsOptions: { stroke: !0 }, _serializeFields: { symbol: null }, initialize:
                                                    function (t, e) { this._initialize(t, e !== a && v.read(arguments, 1)) || this.setDefinition(t instanceof z ? t : new z(t)) }, _equals:
                                                    function (t) { return this._definition === t._definition }, copyContent:
                                                    function (t) { this.setDefinition(t._definition) }, getDefinition:
                                                    function () { return this._definition }, setDefinition:
                                                    function (t) { this._definition = t, this._changed(9) }, getSymbol: "#getDefinition", setSymbol: "#setDefinition", isEmpty:
                                                    function () { return this._definition._item.isEmpty() }, _getBounds:
                                                    function (t, e) {
                                                        var n = this._definition._item;
                                                        return n._getCachedBounds(n._matrix.prepended(t), e)
                                                    }, _hitTestSelf:
                                                    function (t, e, n) {
                                                        var i = e.extend({ all: !1 }), r = this._definition._item._hitTest(t, i, n);
                                                        return r && (r.item = this), r
                                                    }, _draw:
                                                    function (t, e) { this._definition._item.draw(t, e) }
                                            }), z = l.extend({
                                                _class: "SymbolDefinition", initialize:
                                                    function (t, e) { this._id = p.get(), this.project = ut.project, t && this.setItem(t, e) }, _serialize:
                                                    function (t, e) {
                                                        return e.add(this, (
                                                            function () { return l.serialize([this._class, this._item], t, !1, e) }))
                                                    }, _changed:
                                                    function (t) { 8 & t && P._clearBoundsCache(this), 1 & t && this.project._changed(t) }, getItem:
                                                    function () { return this._item }, setItem:
                                                    function (t, e) { t._symbol && (t = t.clone()), this._item && (this._item._symbol = null), this._item = t, t.remove(), t.setSelected(!1), e || t.setPosition(new v), t._symbol = this, this._changed(9) }, getDefinition: "#getItem", setDefinition: "#setItem", place:
                                                    function (t) { return new T(this, t) }, clone:
                                                    function () { return new z(this._item.clone(!1)) }, equals:
                                                    function (t) { return t === this || t && this._item.equals(t._item) || !1 }
                                            }), E = l.extend({
                                                _class: "HitResult", initialize:
                                                    function (t, e, n) { this.type = t, this.item = e, n && this.inject(n) }, statics: {
                                                        getOptions:
                                                            function (t) {
                                                                var e = t && l.read(t);
                                                                return new l({ type: null, tolerance: ut.settings.hitTolerance, fill: !e, stroke: !e, segments: !e, handles: !1, ends: !1, position: !1, center: !1, bounds: !1, guides: !1, selected: !1 }, e)
                                                            }
                                                    }
                                            }), L = l.extend({
                                                _class: "Segment", beans: !0, _selection: 0, initialize:
                                                    function (t, e, n, i, r, s) {
                                                        var o, h, l, u, c = arguments.length;
                                                        c > 0 && (null == t || "object" == typeof t ? 1 === c && t && "point" in t ? (o = t.point, h = t.handleIn, l = t.handleOut, u = t.selection) : (o = t, h = e, l = n, u = i) : (o = [t, e], h = n !== a ? [n, i] : null, l = r !== a ? [r, s] : null)), new N(o, this, "_point"), new N(h, this, "_handleIn"), new N(l, this, "_handleOut"), u && this.setSelection(u)
                                                    }, _serialize:
                                                    function (t, e) {
                                                        var n = this._point, i = this._selection, r = i || this.hasHandles() ? [n, this._handleIn, this._handleOut] : n;
                                                        return i && r.push(i), l.serialize(r, t, !0, e)
                                                    }, _changed:
                                                    function (t) {
                                                        var e = this._path;
                                                        if (e) {
                                                            var n, i = e._curves, r = this._index;
                                                            i && (t && t !== this._point && t !== this._handleIn || !(n = r > 0 ? i[r - 1] : e._closed ? i[i.length - 1] : null) || n._changed(), t && t !== this._point && t !== this._handleOut || !(n = i[r]) || n._changed()), e._changed(41)
                                                        }
                                                    }, getPoint:
                                                    function () { return this._point }, setPoint:
                                                    function () { this._point.set(v.read(arguments)) }, getHandleIn:
                                                    function () { return this._handleIn }, setHandleIn:
                                                    function () { this._handleIn.set(v.read(arguments)) }, getHandleOut:
                                                    function () { return this._handleOut }, setHandleOut:
                                                    function () { this._handleOut.set(v.read(arguments)) }, hasHandles:
                                                    function () { return !this._handleIn.isZero() || !this._handleOut.isZero() }, isSmooth:
                                                    function () {
                                                        var t = this._handleIn, e = this._handleOut;
                                                        return !t.isZero() && !e.isZero() && t.isCollinear(e)
                                                    }, clearHandles:
                                                    function () { this._handleIn._set(0, 0), this._handleOut._set(0, 0) }, getSelection:
                                                    function () { return this._selection }, setSelection:
                                                    function (t) {
                                                        var e = this._selection, n = this._path;
                                                        this._selection = t = t || 0, n && t !== e && (n._updateSelection(this, e, t), n._changed(257))
                                                    }, _changeSelection:
                                                    function (t, e) {
                                                        var n = this._selection;
                                                        this.setSelection(e ? n | t : n & ~t)
                                                    }, isSelected:
                                                    function () { return !!(7 & this._selection) }, setSelected:
                                                    function (t) { this._changeSelection(7, t) }, getIndex:
                                                    function () { return this._index !== a ? this._index : null }, getPath:
                                                    function () { return this._path || null }, getCurve:
                                                    function () {
                                                        var t = this._path, e = this._index;
                                                        return t ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null
                                                    }, getLocation:
                                                    function () {
                                                        var t = this.getCurve();
                                                        return t ? new R(t, this === t._segment1 ? 0 : 1) : null
                                                    }, getNext:
                                                    function () {
                                                        var t = this._path && this._path._segments;
                                                        return t && (t[this._index + 1] || this._path._closed && t[0]) || null
                                                    }, smooth:
                                                    function (t, e, n) {
                                                        var i = t || {}, r = i.type, s = i.factor, o = this.getPrevious(), h = this.getNext(), l = (o || this)._point, u = this._point, c = (h || this)._point, f = l.getDistance(u), d = u.getDistance(c);
                                                        if (r && "catmull-rom" !== r) {
                                                            if ("geometric" !== r) throw new Error("Smoothing method '" + r + "' not supported.");
                                                            if (o && h) {
                                                                var _ = l.subtract(c), g = s === a ? .4 : s, p = g * f / (f + d);
                                                                e || this.setHandleIn(_.multiply(p)), n || this.setHandleOut(_.multiply(p - g))
                                                            }
                                                        } else {
                                                            var m = s === a ? .5 : s, y = Math.pow(f, m), x = y * y, w = Math.pow(d, m), b = w * w;
                                                            if (!e && o) {
                                                                var S = 2 * b + 3 * w * y + x, C = 3 * w * (w + y);
                                                                this.setHandleIn(0 !== C ? new v((b * l._x + S * u._x - x * c._x) / C - u._x, (b * l._y + S * u._y - x * c._y) / C - u._y) : new v)
                                                            } if (!n && h) {
                                                                S = 2 * x + 3 * y * w + b, C = 3 * y * (y + w);
                                                                this.setHandleOut(0 !== C ? new v((x * c._x + S * u._x - b * l._x) / C - u._x, (x * c._y + S * u._y - b * l._y) / C - u._y) : new v)
                                                            }
                                                        }
                                                    }, getPrevious:
                                                    function () {
                                                        var t = this._path && this._path._segments;
                                                        return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null
                                                    }, isFirst:
                                                    function () { return !this._index }, isLast:
                                                    function () {
                                                        var t = this._path;
                                                        return t && this._index === t._segments.length - 1 || !1
                                                    }, reverse:
                                                    function () {
                                                        var t = this._handleIn, e = this._handleOut, n = t.clone();
                                                        t.set(e), e.set(n)
                                                    }, reversed:
                                                    function () { return new L(this._point, this._handleOut, this._handleIn) }, remove:
                                                    function () { return !!this._path && !!this._path.removeSegment(this._index) }, clone:
                                                    function () { return new L(this._point, this._handleIn, this._handleOut) }, equals:
                                                    function (t) { return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1 }, toString:
                                                    function () {
                                                        var t = ["point: " + this._point];
                                                        return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }"
                                                    }, transform:
                                                    function (t) { this._transformCoordinates(t, new Array(6), !0), this._changed() }, interpolate:
                                                    function (t, e, n) {
                                                        var i = 1 - n, r = n, s = t._point, a = e._point, o = t._handleIn, h = e._handleIn, l = e._handleOut, u = t._handleOut;
                                                        this._point._set(i * s._x + r * a._x, i * s._y + r * a._y, !0), this._handleIn._set(i * o._x + r * h._x, i * o._y + r * h._y, !0), this._handleOut._set(i * u._x + r * l._x, i * u._y + r * l._y, !0), this._changed()
                                                    }, _transformCoordinates:
                                                    function (t, e, n) {
                                                        var i = this._point, r = n && this._handleIn.isZero() ? null : this._handleIn, s = n && this._handleOut.isZero() ? null : this._handleOut, a = i._x, o = i._y, h = 2;
                                                        return e[0] = a, e[1] = o, r && (e[h++] = r._x + a, e[h++] = r._y + o), s && (e[h++] = s._x + a, e[h++] = s._y + o), t && (t._transformCoordinates(e, e, h / 2), a = e[0], o = e[1], n ? (i._x = a, i._y = o, h = 2, r && (r._x = e[h++] - a, r._y = e[h++] - o), s && (s._x = e[h++] - a, s._y = e[h++] - o)) : (r || (e[h++] = a, e[h++] = o), s || (e[h++] = a, e[h++] = o))), e
                                                    }
                                            }), N = v.extend({
                                                initialize:
                                                    function (t, e, n) {
                                                        var i, r, s;
                                                        if (t) if ((i = t[0]) !== a) r = t[1];
                                                        else {
                                                            var o = t;
                                                            (i = o.x) === a && (i = (o = v.read(arguments)).x), r = o.y, s = o.selected
                                                        } else i = r = 0;
                                                        this._x = i, this._y = r, this._owner = e, e[n] = this, s && this.setSelected(!0)
                                                    }, _set:
                                                    function (t, e) { return this._x = t, this._y = e, this._owner._changed(this), this }, getX:
                                                    function () { return this._x }, setX:
                                                    function (t) { this._x = t, this._owner._changed(this) }, getY:
                                                    function () { return this._y }, setY:
                                                    function (t) { this._y = t, this._owner._changed(this) }, isZero:
                                                    function () {
                                                        var t = g.isZero;
                                                        return t(this._x) && t(this._y)
                                                    }, isSelected:
                                                    function () { return !!(this._owner._selection & this._getSelection()) }, setSelected:
                                                    function (t) { this._owner._changeSelection(this._getSelection(), t) }, _getSelection:
                                                    function () {
                                                        var t = this._owner;
                                                        return this === t._point ? 1 : this === t._handleIn ? 2 : this === t._handleOut ? 4 : 0
                                                    }
                                            }), j = l.extend({
                                                _class: "Curve", beans: !0, initialize:
                                                    function (t, e, n, i, r, s, a, o) {
                                                        var h, l, u, c, f, d, _ = arguments.length;
                                                        3 === _ ? (this._path = t, h = e, l = n) : _ ? 1 === _ ? "segment1" in t ? (h = new L(t.segment1), l = new L(t.segment2)) : "point1" in t ? (u = t.point1, f = t.handle1, d = t.handle2, c = t.point2) : Array.isArray(t) && (u = [t[0], t[1]], c = [t[6], t[7]], f = [t[2] - t[0], t[3] - t[1]], d = [t[4] - t[6], t[5] - t[7]]) : 2 === _ ? (h = new L(t), l = new L(e)) : 4 === _ ? (u = t, f = e, d = n, c = i) : 8 === _ && (u = [t, e], c = [a, o], f = [n - t, i - e], d = [r - a, s - o]) : (h = new L, l = new L), this._segment1 = h || new L(u, null, f), this._segment2 = l || new L(c, d, null)
                                                    }, _serialize:
                                                    function (t, e) { return l.serialize(this.hasHandles() ? [this.getPoint1(), this.getHandle1(), this.getHandle2(), this.getPoint2()] : [this.getPoint1(), this.getPoint2()], t, !0, e) }, _changed:
                                                    function () { this._length = this._bounds = a }, clone:
                                                    function () { return new j(this._segment1, this._segment2) }, toString:
                                                    function () {
                                                        var t = ["point1: " + this._segment1._point];
                                                        return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }"
                                                    }, classify:
                                                    function () { return j.classify(this.getValues()) }, remove:
                                                    function () {
                                                        var t = !1;
                                                        if (this._path) {
                                                            var e = this._segment2, n = e._handleOut;
                                                            (t = e.remove()) && this._segment1._handleOut.set(n)
                                                        } return t
                                                    }, getPoint1:
                                                    function () { return this._segment1._point }, setPoint1:
                                                    function () { this._segment1._point.set(v.read(arguments)) }, getPoint2:
                                                    function () { return this._segment2._point }, setPoint2:
                                                    function () { this._segment2._point.set(v.read(arguments)) }, getHandle1:
                                                    function () { return this._segment1._handleOut }, setHandle1:
                                                    function () { this._segment1._handleOut.set(v.read(arguments)) }, getHandle2:
                                                    function () { return this._segment2._handleIn }, setHandle2:
                                                    function () { this._segment2._handleIn.set(v.read(arguments)) }, getSegment1:
                                                    function () { return this._segment1 }, getSegment2:
                                                    function () { return this._segment2 }, getPath:
                                                    function () { return this._path }, getIndex:
                                                    function () { return this._segment1._index }, getNext:
                                                    function () {
                                                        var t = this._path && this._path._curves;
                                                        return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null
                                                    }, getPrevious:
                                                    function () {
                                                        var t = this._path && this._path._curves;
                                                        return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null
                                                    }, isFirst:
                                                    function () { return !this._segment1._index }, isLast:
                                                    function () {
                                                        var t = this._path;
                                                        return t && this._segment1._index === t._curves.length - 1 || !1
                                                    }, isSelected:
                                                    function () { return this.getPoint1().isSelected() && this.getHandle1().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected() }, setSelected:
                                                    function (t) { this.getPoint1().setSelected(t), this.getHandle1().setSelected(t), this.getHandle2().setSelected(t), this.getPoint2().setSelected(t) }, getValues:
                                                    function (t) { return j.getValues(this._segment1, this._segment2, t) }, getPoints:
                                                    function () {
                                                        for (var t = this.getValues(), e = [], n = 0;
                                                            n < 8;
                                                            n += 2)e.push(new v(t[n], t[n + 1]));
                                                        return e
                                                    }
                                            }, {
                                                getLength:
                                                    function () { return null == this._length && (this._length = j.getLength(this.getValues(), 0, 1)), this._length }, getArea:
                                                    function () { return j.getArea(this.getValues()) }, getLine:
                                                    function () { return new C(this._segment1._point, this._segment2._point) }, getPart:
                                                    function (t, e) { return new j(j.getPart(this.getValues(), t, e)) }, getPartLength:
                                                    function (t, e) { return j.getLength(this.getValues(), t, e) }, divideAt:
                                                    function (t) { return this.divideAtTime(t && t.curve === this ? t.time : this.getTimeAt(t)) }, divideAtTime:
                                                    function (t, e) {
                                                        var n = null;
                                                        if (t >= 1e-8 && t <= .99999999) {
                                                            var i = j.subdivide(this.getValues(), t), r = i[0], s = i[1], a = e || this.hasHandles(), o = this._segment1, h = this._segment2, l = this._path;
                                                            a && (o._handleOut._set(r[2] - r[0], r[3] - r[1]), h._handleIn._set(s[4] - s[6], s[5] - s[7]));
                                                            var u = r[6], c = r[7], f = new L(new v(u, c), a && new v(r[4] - u, r[5] - c), a && new v(s[2] - u, s[3] - c));
                                                            l ? (l.insert(o._index + 1, f), n = this.getNext()) : (this._segment2 = f, this._changed(), n = new j(f, h))
                                                        } return n
                                                    }, splitAt:
                                                    function (t) {
                                                        var e = this._path;
                                                        return e ? e.splitAt(t) : null
                                                    }, splitAtTime:
                                                    function (t) { return this.splitAt(this.getLocationAtTime(t)) }, divide:
                                                    function (t, e) { return this.divideAtTime(t === a ? .5 : e ? t : this.getTimeAt(t)) }, split:
                                                    function (t, e) { return this.splitAtTime(t === a ? .5 : e ? t : this.getTimeAt(t)) }, reversed:
                                                    function () { return new j(this._segment2.reversed(), this._segment1.reversed()) }, clearHandles:
                                                    function () { this._segment1._handleOut._set(0, 0), this._segment2._handleIn._set(0, 0) }, statics: {
                                                        getValues:
                                                            function (t, e, n, i) {
                                                                var r = t._point, s = t._handleOut, a = e._handleIn, o = e._point, h = r.x, l = r.y, u = o.x, c = o.y, f = i ? [h, l, h, l, u, c, u, c] : [h, l, h + s._x, l + s._y, u + a._x, c + a._y, u, c];
                                                                return n && n._transformCoordinates(f, f, 4), f
                                                            }, subdivide:
                                                            function (t, e) {
                                                                var n = t[0], i = t[1], r = t[2], s = t[3], o = t[4], h = t[5], l = t[6], u = t[7];
                                                                e === a && (e = .5);
                                                                var c = 1 - e, f = c * n + e * r, d = c * i + e * s, _ = c * r + e * o, g = c * s + e * h, p = c * o + e * l, v = c * h + e * u, m = c * f + e * _, y = c * d + e * g, x = c * _ + e * p, w = c * g + e * v, b = c * m + e * x, S = c * y + e * w;
                                                                return [[n, i, f, d, m, y, b, S], [b, S, x, w, p, v, l, u]]
                                                            }, getMonoCurves:
                                                            function (t, e) {
                                                                var n = [], i = e ? 0 : 1, r = t[i + 0], s = t[i + 2], a = t[i + 4], o = t[i + 6];
                                                                if (r >= s == s >= a && s >= a == a >= o || j.isStraight(t)) n.push(t);
                                                                else {
                                                                    var h = 3 * (s - a) - r + o, l = 2 * (r + a) - 4 * s, u = s - r, c = [], f = g.solveQuadratic(h, l, u, c, 1e-8, .99999999);
                                                                    if (f) {
                                                                        c.sort();
                                                                        var d = c[0], _ = j.subdivide(t, d);
                                                                        n.push(_[0]), f > 1 && (d = (c[1] - d) / (1 - d), _ = j.subdivide(_[1], d), n.push(_[0])), n.push(_[1])
                                                                    } else n.push(t)
                                                                } return n
                                                            }, solveCubic:
                                                            function (t, e, n, i, r, s) {
                                                                var a = t[e], o = t[e + 2], h = t[e + 4], l = t[e + 6], u = 0;
                                                                if (!(a < n && l < n && o < n && h < n || a > n && l > n && o > n && h > n)) {
                                                                    var c = 3 * (o - a), f = 3 * (h - o) - c, d = l - a - c - f;
                                                                    u = g.solveCubic(d, f, c, a - n, i, r, s)
                                                                } return u
                                                            }, getTimeOf:
                                                            function (t, e) {
                                                                var n = new v(t[0], t[1]), i = new v(t[6], t[7]), r = 1e-7;
                                                                if (null === (e.isClose(n, 1e-12) ? 0 : e.isClose(i, 1e-12) ? 1 : null)) for (var s = [e.x, e.y], a = [], o = 0;
                                                                    o < 2;
                                                                    o++)for (var h = j.solveCubic(t, o, s[o], a, 0, 1), l = 0;
                                                                        l < h;
                                                                        l++) {
                                                                            var u = a[l];
                                                                        if (e.isClose(j.getPoint(t, u), r)) return u
                                                                    } return e.isClose(n, r) ? 0 : e.isClose(i, r) ? 1 : null
                                                            }, getNearestTime:
                                                            function (t, e) {
                                                                if (j.isStraight(t)) {
                                                                    var n = t[0], i = t[1], r = t[6] - n, s = t[7] - i, a = r * r + s * s;
                                                                    if (0 === a) return 0;
                                                                    var o = ((e.x - n) * r + (e.y - i) * s) / a;
                                                                    return o < 1e-12 ? 0 : o > .999999999999 ? 1 : j.getTimeOf(t, new v(n + o * r, i + o * s))
                                                                } var h = 1 / 0, l = 0;

                                                                function u(n) {
                                                                    if (n >= 0 && n <= 1) {
                                                                        var i = e.getDistance(j.getPoint(t, n), !0);
                                                                        if (i < h) return h = i, l = n, !0
                                                                    }
                                                                } for (var c = 0;
                                                                    c <= 100;
                                                                    c++)u(c / 100);
                                                                for (var f = .005;
                                                                    f > 1e-8;
                                                                )u(l - f) || u(l + f) || (f /= 2);
                                                                return l
                                                            }, getPart:
                                                            function (t, e, n) {
                                                                var i = e > n;
                                                                if (i) {
                                                                    var r = e;
                                                                    e = n, n = r
                                                                } return e > 0 && (t = j.subdivide(t, e)[1]), n < 1 && (t = j.subdivide(t, (n - e) / (1 - e))[0]), i ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t
                                                            }, isFlatEnough:
                                                            function (t, e) {
                                                                var n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], h = t[6], l = t[7], u = 3 * r - 2 * n - h, c = 3 * s - 2 * i - l, f = 3 * a - 2 * h - n, d = 3 * o - 2 * l - i;
                                                                return Math.max(u * u, f * f) + Math.max(c * c, d * d) <= 16 * e * e
                                                            }, getArea:
                                                            function (t) {
                                                                var e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], h = t[7];
                                                                return 3 * ((h - n) * (i + s) - (o - e) * (r + a) + r * (e - s) - i * (n - a) + h * (s + e / 3) - o * (a + n / 3)) / 20
                                                            }, getBounds:
                                                            function (t) {
                                                                for (var e = t.slice(0, 2), n = e.slice(), i = [0, 0], r = 0;
                                                                    r < 2;
                                                                    r++)j._addBounds(t[r], t[r + 2], t[r + 4], t[r + 6], r, 0, e, n, i);
                                                                return new w(e[0], e[1], n[0] - e[0], n[1] - e[1])
                                                            }, _addBounds:
                                                            function (t, e, n, i, r, s, a, o, h) {
                                                                function l(t, e) {
                                                                    var n = t - e, i = t + e;
                                                                    n < a[r] && (a[r] = n), i > o[r] && (o[r] = i)
                                                                } s /= 2;
                                                                var u = a[r] + s, c = o[r] - s;
                                                                if (t < u || e < u || n < u || i < u || t > c || e > c || n > c || i > c) if (e < t != e < i && n < t != n < i) l(t, 0), l(i, 0);
                                                                else {
                                                                    var f = 3 * (e - n) - t + i, d = 2 * (t + n) - 4 * e, _ = e - t, p = g.solveQuadratic(f, d, _, h);
                                                                    l(i, 0);
                                                                    for (var v = 0;
                                                                        v < p;
                                                                        v++) {
                                                                            var m = h[v], y = 1 - m;
                                                                        1e-8 <= m && m <= .99999999 && l(y * y * y * t + 3 * y * y * m * e + 3 * y * m * m * n + m * m * m * i, s)
                                                                    }
                                                                }
                                                            }
                                                    }
                                            }, l.each(["getBounds", "getStrokeBounds", "getHandleBounds"], (
                                                function (t) {
                                                    this[t] =
                                                        function () {
                                                            this._bounds || (this._bounds = {});
                                                            var e = this._bounds[t];
                                                            return e || (e = this._bounds[t] = D[t]([this._segment1, this._segment2], !1, this._path)), e.clone()
                                                        }
                                                }), {}), l.each({
                                                    isStraight:
                                                        function (t, e, n, i) {
                                                            if (e.isZero() && n.isZero()) return !0;
                                                            var r = i.subtract(t);
                                                            if (r.isZero()) return !1;
                                                            if (r.isCollinear(e) && r.isCollinear(n)) {
                                                                var s = new C(t, i);
                                                                if (s.getDistance(t.add(e)) < 1e-7 && s.getDistance(i.add(n)) < 1e-7) {
                                                                    var a = r.dot(r), o = r.dot(e) / a, h = r.dot(n) / a;
                                                                    return o >= 0 && o <= 1 && h <= 0 && h >= -1
                                                                }
                                                            } return !1
                                                        }, isLinear:
                                                        function (t, e, n, i) {
                                                            var r = i.subtract(t).divide(3);
                                                            return e.equals(r) && n.negate().equals(r)
                                                        }
                                                }, (
                                                    function (t, e) {
                                                        this[e] =
                                                            function (e) {
                                                                var n = this._segment1, i = this._segment2;
                                                                return t(n._point, n._handleOut, i._handleIn, i._point, e)
                                                            }, this.statics[e] =
                                                            function (e, n) {
                                                                var i = e[0], r = e[1], s = e[6], a = e[7];
                                                                return t(new v(i, r), new v(e[2] - i, e[3] - r), new v(e[4] - s, e[5] - a), new v(s, a), n)
                                                            }
                                                    }), {
                                                    statics: {}, hasHandles:
                                                        function () { return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero() }, hasLength:
                                                        function (t) { return (!this.getPoint1().equals(this.getPoint2()) || this.hasHandles()) && this.getLength() > (t || 0) }, isCollinear:
                                                        function (t) { return t && this.isStraight() && t.isStraight() && this.getLine().isCollinear(t.getLine()) }, isHorizontal:
                                                        function () { return this.isStraight() && Math.abs(this.getTangentAtTime(.5).y) < 1e-8 }, isVertical:
                                                        function () { return this.isStraight() && Math.abs(this.getTangentAtTime(.5).x) < 1e-8 }
                                                }), {
                                                beans: !1, getLocationAt:
                                                    function (t, e) { return this.getLocationAtTime(e ? t : this.getTimeAt(t)) }, getLocationAtTime:
                                                    function (t) { return null != t && t >= 0 && t <= 1 ? new R(this, t) : null }, getTimeAt:
                                                    function (t, e) { return j.getTimeAt(this.getValues(), t, e) }, getParameterAt: "#getTimeAt", getTimesWithTangent:
                                                    function () {
                                                        var t = v.read(arguments);
                                                        return t.isZero() ? [] : j.getTimesWithTangent(this.getValues(), t)
                                                    }, getOffsetAtTime:
                                                    function (t) { return this.getPartLength(0, t) }, getLocationOf:
                                                    function () { return this.getLocationAtTime(this.getTimeOf(v.read(arguments))) }, getOffsetOf:
                                                    function () {
                                                        var t = this.getLocationOf.apply(this, arguments);
                                                        return t ? t.getOffset() : null
                                                    }, getTimeOf:
                                                    function () { return j.getTimeOf(this.getValues(), v.read(arguments)) }, getParameterOf: "#getTimeOf", getNearestLocation:
                                                    function () {
                                                        var t = v.read(arguments), e = this.getValues(), n = j.getNearestTime(e, t), i = j.getPoint(e, n);
                                                        return new R(this, n, i, null, t.getDistance(i))
                                                    }, getNearestPoint:
                                                    function () {
                                                        var t = this.getNearestLocation.apply(this, arguments);
                                                        return t ? t.getPoint() : t
                                                    }
                                            }, new
                                                function () {
                                                    var t = ["getPoint", "getTangent", "getNormal", "getWeightedTangent", "getWeightedNormal", "getCurvature"];
                                                    return l.each(t, (
                                                        function (t) {
                                                            this[t + "At"] =
                                                                function (e, n) {
                                                                    var i = this.getValues();
                                                                    return j[t](i, n ? e : j.getTimeAt(i, e))
                                                                }, this[t + "AtTime"] =
                                                                function (e) { return j[t](this.getValues(), e) }
                                                        }), { statics: { _evaluateMethods: t } })
                                                }, new
                                                function () {
                                                    function t(t) {
                                                        var e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = t[6], h = t[7], l = 9 * (i - s) + 3 * (o - e), u = 6 * (e + s) - 12 * i, c = 3 * (i - e), f = 9 * (r - a) + 3 * (h - n), d = 6 * (n + a) - 12 * r, _ = 3 * (r - n);
                                                        return
                                                        function (t) {
                                                            var e = (l * t + u) * t + c, n = (f * t + d) * t + _;
                                                            return Math.sqrt(e * e + n * n)
                                                        }
                                                    }
                                                    function e(t, e) { return Math.max(2, Math.min(16, Math.ceil(32 * Math.abs(e - t)))) }
                                                    function n(t, e, n, i) {
                                                        if (null == e || e < 0 || e > 1) return null;
                                                        var r = t[0], s = t[1], a = t[2], o = t[3], h = t[4], l = t[5], u = t[6], c = t[7], f = g.isZero;
                                                        f(a - r) && f(o - s) && (a = r, o = s), f(h - u) && f(l - c) && (h = u, l = c);
                                                        var d, _, p = 3 * (a - r), m = 3 * (h - a) - p, y = u - r - p - m, x = 3 * (o - s), w = 3 * (l - o) - x, b = c - s - x - w;
                                                        if (0 === n) d = 0 === e ? r : 1 === e ? u : ((y * e + m) * e + p) * e + r, _ = 0 === e ? s : 1 === e ? c : ((b * e + w) * e + x) * e + s;
                                                        else {
                                                            var S = 1e-8, C = 1 - S;
                                                            if (e < S ? (d = p, _ = x) : e > C ? (d = 3 * (u - h), _ = 3 * (c - l)) : (d = (3 * y * e + 2 * m) * e + p, _ = (3 * b * e + 2 * w) * e + x), i) {
                                                                0 === d && 0 === _ && (e < S || e > C) && (d = h - a, _ = l - o);
                                                                var k = Math.sqrt(d * d + _ * _);
                                                                k && (d /= k, _ /= k)
                                                            } if (3 === n) {
                                                                h = 6 * y * e + 2 * m, l = 6 * b * e + 2 * w;
                                                                var P = Math.pow(d * d + _ * _, 1.5);
                                                                d = 0 !== P ? (d * l - _ * h) / P : 0, _ = 0
                                                            }
                                                        } return 2 === n ? new v(_, -d) : new v(d, _)
                                                    } return {
                                                        statics: {
                                                            classify:
                                                                function (t) {
                                                                    var e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], o = t[5], h = t[6], l = t[7], u = i * (n - l) + r * (h - e) + e * l - n * h, c = 3 * (s * (r - n) + o * (e - i) + i * n - r * e), f = c - u, d = f - u + (e * (l - o) + n * (s - h) + h * o - l * s), _ = Math.sqrt(d * d + f * f + c * c), p = 0 !== _ ? 1 / _ : 0, v = g.isZero, m = "serpentine";

                                                                    function y(t, e, n) {
                                                                        var i = e !== a, r = i && e > 0 && e < 1, s = i && n > 0 && n < 1;
                                                                        return !i || (r || s) && ("loop" !== t || r && s) || (t = "arch", r = s = !1), { type: t, roots: r || s ? r && s ? e < n ? [e, n] : [n, e] : [r ? e : n] : null }
                                                                    } if (f *= p, c *= p, v(d *= p)) return v(f) ? y(v(c) ? "line" : "quadratic") : y(m, c / (3 * f));
                                                                    var x = 3 * f * f - 4 * d * c;
                                                                    if (v(x)) return y("cusp", f / (2 * d));
                                                                    var w = x > 0 ? Math.sqrt(x / 3) : Math.sqrt(-x), b = 2 * d;
                                                                    return y(x > 0 ? m : "loop", (f + w) / b, (f - w) / b)
                                                                }, getLength:
                                                                function (n, i, r, s) {
                                                                    if (i === a && (i = 0), r === a && (r = 1), j.isStraight(n)) {
                                                                        var o = n;
                                                                        r < 1 && (o = j.subdivide(o, r)[0], i /= r), i > 0 && (o = j.subdivide(o, i)[1]);
                                                                        var h = o[6] - o[0], l = o[7] - o[1];
                                                                        return Math.sqrt(h * h + l * l)
                                                                    } return g.integrate(s || t(n), i, r, e(i, r))
                                                                }, getTimeAt:
                                                                function (n, i, r) {
                                                                    if (r === a && (r = i < 0 ? 1 : 0), 0 === i) return r;
                                                                    var s = Math.abs, o = i > 0, h = o ? r : 0, l = o ? 1 : r, u = t(n), c = j.getLength(n, h, l, u), f = s(i) - c;
                                                                    if (s(f) < 1e-12) return o ? l : h;
                                                                    if (f > 1e-12) return null;
                                                                    var d = i / c, _ = 0;
                                                                    return g.findRoot((
                                                                        function (t) { return _ += g.integrate(u, r, t, e(r, t)), r = t, _ - i }), u, r + d, h, l, 32, 1e-12)
                                                                }, getPoint:
                                                                function (t, e) { return n(t, e, 0, !1) }, getTangent:
                                                                function (t, e) { return n(t, e, 1, !0) }, getWeightedTangent:
                                                                function (t, e) { return n(t, e, 1, !1) }, getNormal:
                                                                function (t, e) { return n(t, e, 2, !0) }, getWeightedNormal:
                                                                function (t, e) { return n(t, e, 2, !1) }, getCurvature:
                                                                function (t, e) { return n(t, e, 3, !1).x }, getPeaks:
                                                                function (t) {
                                                                    var e = t[0], n = t[1], i = t[2], r = t[3], s = t[4], a = t[5], o = 3 * i - e - 3 * s + t[6], h = 3 * e - 6 * i + 3 * s, l = -3 * e + 3 * i, u = 3 * r - n - 3 * a + t[7], c = 3 * n - 6 * r + 3 * a, f = -3 * n + 3 * r, d = [];
                                                                    return g.solveCubic(9 * (o * o + u * u), 9 * (o * h + c * u), 2 * (h * h + c * c) + 3 * (l * o + f * u), l * h + c * f, d, 1e-8, .99999999), d.sort()
                                                                }
                                                        }
                                                    }
                                                }, new
                                                function () {
                                                    function t(t, e, n, i, r, s, a) {
                                                        var o = !a && n.getPrevious() === r, h = !a && n !== r && n.getNext() === r, l = 1e-8, u = 1 - l;
                                                        if (null !== i && i >= (o ? l : 0) && i <= (h ? u : 1) && null !== s && s >= (h ? l : 0) && s <= (o ? u : 1)) {
                                                            var c = new R(n, i, null, a), f = new R(r, s, null, a);
                                                            c._intersection = f, f._intersection = c, e && !e(c) || R.insert(t, c, !0)
                                                        }
                                                    }
                                                    function e(i, r, s, a, o, h, l, u, c, f, d, _, g) {
                                                        if (++c >= 4096 || ++u >= 40) return c;
                                                        var p, v, m = r[0], y = r[1], x = r[6], w = r[7], b = C.getSignedDistance, S = b(m, y, x, w, r[2], r[3]), k = b(m, y, x, w, r[4], r[5]), P = S * k > 0 ? 3 / 4 : 4 / 9, M = P * Math.min(0, S, k), O = P * Math.max(0, S, k), A = b(m, y, x, w, i[0], i[1]), I = b(m, y, x, w, i[2], i[3]), T = b(m, y, x, w, i[4], i[5]), z = b(m, y, x, w, i[6], i[7]), E =
                                                            function (t, e, n, i) {
                                                                var r, s = [0, t], a = [1 / 3, e], o = [2 / 3, n], h = [1, i], l = e - (2 * t + i) / 3, u = n - (t + 2 * i) / 3;
                                                                if (l * u < 0) r = [[s, a, h], [s, o, h]];
                                                                else {
                                                                    var c = l / u;
                                                                    r = [c >= 2 ? [s, a, h] : c <= .5 ? [s, o, h] : [s, a, o, h], [s, h]]
                                                                } return (l || u) < 0 ? r.reverse() : r
                                                            }(A, I, T, z), L = E[0], N = E[1];
                                                        if (0 === S && 0 === k && 0 === A && 0 === I && 0 === T && 0 === z || null == (p = n(L, N, M, O)) || null == (v = n(L.reverse(), N.reverse(), M, O))) return c;
                                                        var R = f + (d - f) * p, B = f + (d - f) * v;
                                                        if (Math.max(g - _, B - R) < 1e-9) {
                                                            var D = (R + B) / 2, F = (_ + g) / 2;
                                                            t(o, h, l ? a : s, l ? F : D, l ? s : a, l ? D : F)
                                                        } else {
                                                            i = j.getPart(i, p, v);
                                                            var q = g - _;
                                                            if (v - p > .8) if (B - R > q) {
                                                                D = (R + B) / 2;
                                                                c = e(r, (V = j.subdivide(i, .5))[0], a, s, o, h, !l, u, c, _, g, R, D), c = e(r, V[1], a, s, o, h, !l, u, c, _, g, D, B)
                                                            } else {
                                                                var V;
                                                                F = (_ + g) / 2;
                                                                c = e((V = j.subdivide(r, .5))[0], i, a, s, o, h, !l, u, c, _, F, R, B), c = e(V[1], i, a, s, o, h, !l, u, c, F, g, R, B)
                                                            } else c = 0 === q || q >= 1e-9 ? e(r, i, a, s, o, h, !l, u, c, _, g, R, B) : e(i, r, s, a, o, h, l, u, c, R, B, _, g)
                                                        } return c
                                                    }
                                                    function n(t, e, n, r) { return t[0][1] < n ? i(t, !0, n) : e[0][1] > r ? i(e, !1, r) : t[0][0] }
                                                    function i(t, e, n) {
                                                        for (var i = t[0][0], r = t[0][1], s = 1, a = t.length;
                                                            s < a;
                                                            s++) {
                                                                var o = t[s][0], h = t[s][1];
                                                            if (e ? h >= n : h <= n) return h === n ? o : i + (n - r) * (o - i) / (h - r);
                                                            i = o, r = h
                                                        } return null
                                                    }
                                                    function r(t, e, n, i, r) {
                                                        var s = g.isZero;
                                                        if (s(i) && s(r)) {
                                                            var a = j.getTimeOf(t, new v(e, n));
                                                            return null === a ? [] : [a]
                                                        } for (var o = Math.atan2(-r, i), h = Math.sin(o), l = Math.cos(o), u = [], c = [], f = 0;
                                                            f < 8;
                                                            f += 2) {
                                                                var d = t[f] - e, _ = t[f + 1] - n;
                                                            u.push(d * l - _ * h, d * h + _ * l)
                                                        } return j.solveCubic(u, 1, 0, c, 0, 1), c
                                                    }
                                                    function s(e, n, i, s, a, o, h) {
                                                        for (var l = n[0], u = n[1], c = r(e, l, u, n[6] - l, n[7] - u), f = 0, d = c.length;
                                                            f < d;
                                                            f++) {
                                                                var _ = c[f], g = j.getPoint(e, _), p = j.getTimeOf(n, g);
                                                            null !== p && t(a, o, h ? s : i, h ? p : _, h ? i : s, h ? _ : p)
                                                        }
                                                    }
                                                    function a(e, n, i, r, s, a) {
                                                        var o = C.intersect(e[0], e[1], e[6], e[7], n[0], n[1], n[6], n[7]);
                                                        o && t(s, a, i, j.getTimeOf(e, o), r, j.getTimeOf(n, o))
                                                    }
                                                    function o(n, i, r, o, h, u) {
                                                        var c = 1e-12, f = Math.min, d = Math.max;
                                                        if (d(n[0], n[2], n[4], n[6]) + c > f(i[0], i[2], i[4], i[6]) && f(n[0], n[2], n[4], n[6]) - c < d(i[0], i[2], i[4], i[6]) && d(n[1], n[3], n[5], n[7]) + c > f(i[1], i[3], i[5], i[7]) && f(n[1], n[3], n[5], n[7]) - c < d(i[1], i[3], i[5], i[7])) {
                                                            var _ = l(n, i);
                                                            if (_) for (var g = 0;
                                                                g < 2;
                                                                g++) {
                                                                    var p = _[g];
                                                                t(h, u, r, p[0], o, p[1], !0)
                                                            } else {
                                                                var m = j.isStraight(n), y = j.isStraight(i), x = m && y, w = m && !y, b = h.length;
                                                                if ((x ? a : m || y ? s : e)(w ? i : n, w ? n : i, w ? o : r, w ? r : o, h, u, w, 0, 0, 0, 1, 0, 1), !x || h.length === b) for (g = 0;
                                                                    g < 4;
                                                                    g++) {
                                                                        var S = g >> 1, C = 1 & g, k = 6 * S, P = 6 * C, M = new v(n[k], n[k + 1]), O = new v(i[P], i[P + 1]);
                                                                    M.isClose(O, c) && t(h, u, r, S, o, C)
                                                                }
                                                            }
                                                        } return h
                                                    }
                                                    function h(e, n, i, r) {
                                                        var s = j.classify(e);
                                                        if ("loop" === s.type) {
                                                            var a = s.roots;
                                                            t(i, r, n, a[0], n, a[1])
                                                        } return i
                                                    }
                                                    function l(t, e) {
                                                        function n(t) {
                                                            var e = t[6] - t[0], n = t[7] - t[1];
                                                            return e * e + n * n
                                                        } var i = Math.abs, r = C.getDistance, s = 1e-7, a = j.isStraight(t), o = j.isStraight(e), h = a && o, l = n(t) < n(e), u = l ? e : t, c = l ? t : e, f = u[0], d = u[1], _ = u[6] - f, g = u[7] - d;
                                                        if (r(f, d, _, g, c[0], c[1], !0) < s && r(f, d, _, g, c[6], c[7], !0) < s) !h && r(f, d, _, g, u[2], u[3], !0) < s && r(f, d, _, g, u[4], u[5], !0) < s && r(f, d, _, g, c[2], c[3], !0) < s && r(f, d, _, g, c[4], c[5], !0) < s && (a = o = h = !0);
                                                        else if (h) return null;
                                                        if (a ^ o) return null;
                                                        for (var p = [t, e], m = [], y = 0;
                                                            y < 4 && m.length < 2;
                                                            y++) {
                                                                var x = 1 & y, w = 1 ^ x, b = y >> 1, S = j.getTimeOf(p[x], new v(p[w][b ? 6 : 0], p[w][b ? 7 : 1]));
                                                            if (null != S) {
                                                                var k = x ? [b, S] : [S, b];
                                                                (!m.length || i(k[0] - m[0][0]) > 1e-8 && i(k[1] - m[0][1]) > 1e-8) && m.push(k)
                                                            } if (y > 2 && !m.length) break
                                                        } if (2 !== m.length) m = null;
                                                        else if (!h) {
                                                            var P = j.getPart(t, m[0][0], m[1][0]), M = j.getPart(e, m[0][1], m[1][1]);
                                                            (i(M[2] - P[2]) > s || i(M[3] - P[3]) > s || i(M[4] - P[4]) > s || i(M[5] - P[5]) > s) && (m = null)
                                                        } return m
                                                    } return {
                                                        getIntersections:
                                                            function (t) {
                                                                var e = this.getValues(), n = t && t !== this && t.getValues();
                                                                return n ? o(e, n, this, t, []) : h(e, this, [])
                                                            }, statics: {
                                                                getOverlaps: l, getIntersections:
                                                                    function (t, e, n, i, r, s) {
                                                                        var a = !e;
                                                                        a && (e = t);
                                                                        for (var l = t.length, u = e.length, c = new Array(l), f = a ? c : new Array(u), _ = [], g = 0;
                                                                            g < l;
                                                                            g++)c[g] = t[g].getValues(i);
                                                                        if (!a) for (g = 0;
                                                                            g < u;
                                                                            g++)f[g] = e[g].getValues(r);
                                                                        for (var p = d.findCurveBoundsCollisions(c, f, 1e-7), v = 0;
                                                                            v < l;
                                                                            v++) {
                                                                                var m = t[v], y = c[v];
                                                                            a && h(y, m, _, n);
                                                                            var x = p[v];
                                                                            if (x) for (var w = 0;
                                                                                w < x.length;
                                                                                w++) {
                                                                                    if (s && _.length) return _;
                                                                                var b = x[w];
                                                                                if (!a || b > v) {
                                                                                    var S = e[b];
                                                                                    o(y, f[b], m, S, _, n)
                                                                                }
                                                                            }
                                                                        } return _
                                                                    }, getCurveLineIntersections: r, getTimesWithTangent:
                                                                    function (t, e) {
                                                                        var n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], h = t[6], l = t[7], u = e.normalize(), c = u.x, f = u.y, d = 3 * h - 9 * a + 9 * r - 3 * n, _ = 3 * l - 9 * o + 9 * s - 3 * i, p = 6 * a - 12 * r + 6 * n, v = 6 * o - 12 * s + 6 * i, m = 3 * r - 3 * n, y = 3 * s - 3 * i, x = 2 * d * f - 2 * _ * c, w = [];
                                                                        if (Math.abs(x) < g.CURVETIME_EPSILON) {
                                                                            if (0 != (x = d * v - _ * p)) {
                                                                                var b = -(d * y - _ * m) / x;
                                                                                b >= 0 && b <= 1 && w.push(b)
                                                                            }
                                                                        } else {
                                                                            var S = (p * p - 4 * d * m) * f * f + (-2 * p * v + 4 * _ * m + 4 * d * y) * c * f + (v * v - 4 * _ * y) * c * c, C = p * f - v * c;
                                                                            if (S >= 0 && 0 != x) {
                                                                                var k = Math.sqrt(S), P = -(C + k) / x, M = (-C + k) / x;
                                                                                P >= 0 && P <= 1 && w.push(P), M >= 0 && M <= 1 && w.push(M)
                                                                            }
                                                                        } return w
                                                                    }
                                                            }
                                                    }
                                                }), R = l.extend({
                                                    _class: "CurveLocation", initialize:
                                                        function (t, e, n, i, r) {
                                                            if (e >= .99999999) {
                                                                var s = t.getNext();
                                                                s && (e = 0, t = s)
                                                            } this._setCurve(t), this._time = e, this._point = n || t.getPointAtTime(e), this._overlap = i, this._distance = r, this._intersection = this._next = this._previous = null
                                                        }, _setPath:
                                                        function (t) { this._path = t, this._version = t ? t._version : 0 }, _setCurve:
                                                        function (t) { this._setPath(t._path), this._curve = t, this._segment = null, this._segment1 = t._segment1, this._segment2 = t._segment2 }, _setSegment:
                                                        function (t) {
                                                            var e = t.getCurve();
                                                            e ? this._setCurve(e) : (this._setPath(t._path), this._segment1 = t, this._segment2 = null), this._segment = t, this._time = t === this._segment1 ? 0 : 1, this._point = t._point.clone()
                                                        }, getSegment:
                                                        function () {
                                                            var t = this._segment;
                                                            if (!t) {
                                                                var e = this.getCurve(), n = this.getTime();
                                                                0 === n ? t = e._segment1 : 1 === n ? t = e._segment2 : null != n && (t = e.getPartLength(0, n) < e.getPartLength(n, 1) ? e._segment1 : e._segment2), this._segment = t
                                                            } return t
                                                        }, getCurve:
                                                        function () {
                                                            var t = this._path, e = this;

                                                            function n(t) {
                                                                var n = t && t.getCurve();
                                                                if (n && null != (e._time = n.getTimeOf(e._point))) return e._setCurve(n), n
                                                            } return t && t._version !== this._version && (this._time = this._offset = this._curveOffset = this._curve = null), this._curve || n(this._segment) || n(this._segment1) || n(this._segment2.getPrevious())
                                                        }, getPath:
                                                        function () {
                                                            var t = this.getCurve();
                                                            return t && t._path
                                                        }, getIndex:
                                                        function () {
                                                            var t = this.getCurve();
                                                            return t && t.getIndex()
                                                        }, getTime:
                                                        function () {
                                                            var t = this.getCurve(), e = this._time;
                                                            return t && null == e ? this._time = t.getTimeOf(this._point) : e
                                                        }, getParameter: "#getTime", getPoint:
                                                        function () { return this._point }, getOffset:
                                                        function () {
                                                            var t = this._offset;
                                                            if (null == t) {
                                                                t = 0;
                                                                var e = this.getPath(), n = this.getIndex();
                                                                if (e && null != n) for (var i = e.getCurves(), r = 0;
                                                                    r < n;
                                                                    r++)t += i[r].getLength();
                                                                this._offset = t += this.getCurveOffset()
                                                            } return t
                                                        }, getCurveOffset:
                                                        function () {
                                                            var t = this._curveOffset;
                                                            if (null == t) {
                                                                var e = this.getCurve(), n = this.getTime();
                                                                this._curveOffset = t = null != n && e && e.getPartLength(0, n)
                                                            } return t
                                                        }, getIntersection:
                                                        function () { return this._intersection }, getDistance:
                                                        function () { return this._distance }, divide:
                                                        function () {
                                                            var t = this.getCurve(), e = t && t.divideAtTime(this.getTime());
                                                            return e && this._setSegment(e._segment1), e
                                                        }, split:
                                                        function () {
                                                            var t = this.getCurve(), e = t._path, n = t && t.splitAtTime(this.getTime());
                                                            return n && this._setSegment(e.getLastSegment()), n
                                                        }, equals:
                                                        function (t, e) {
                                                            var n = this === t;
                                                            if (!n && t instanceof R) {
                                                                var i = this.getCurve(), r = t.getCurve(), s = i._path;
                                                                if (s === r._path) {
                                                                    var a = Math.abs, o = a(this.getOffset() - t.getOffset()), h = !e && this._intersection, l = !e && t._intersection;
                                                                    n = (o < 1e-7 || s && a(s.getLength() - o) < 1e-7) && (!h && !l || h && l && h.equals(l, !0))
                                                                }
                                                            } return n
                                                        }, toString:
                                                        function () {
                                                            var t = [], e = this.getPoint(), n = _.instance;
                                                            e && t.push("point: " + e);
                                                            var i = this.getIndex();
                                                            null != i && t.push("index: " + i);
                                                            var r = this.getTime();
                                                            return null != r && t.push("time: " + n.number(r)), null != this._distance && t.push("distance: " + n.number(this._distance)), "{ " + t.join(", ") + " }"
                                                        }, isTouching:
                                                        function () {
                                                            var t = this._intersection;
                                                            if (t && this.getTangent().isCollinear(t.getTangent())) {
                                                                var e = this.getCurve(), n = t.getCurve();
                                                                return !(e.isStraight() && n.isStraight() && e.getLine().intersect(n.getLine()))
                                                            } return !1
                                                        }, isCrossing:
                                                        function () {
                                                            var t = this._intersection;
                                                            if (!t) return !1;
                                                            var e = this.getTime(), n = t.getTime(), i = 1e-8, r = 1 - i, s = e >= i && e <= r, a = n >= i && n <= r;
                                                            if (s && a) return !this.isTouching();
                                                            var o = this.getCurve(), h = o && e < i ? o.getPrevious() : o, l = t.getCurve(), u = l && n < i ? l.getPrevious() : l;
                                                            if (e > r && (o = o.getNext()), n > r && (l = l.getNext()), !(h && o && u && l)) return !1;
                                                            var c = [];

                                                            function f(t, e) {
                                                                var n = t.getValues(), i = j.classify(n).roots || j.getPeaks(n), r = i.length, s = j.getLength(n, e && r ? i[r - 1] : 0, !e && r ? i[0] : 1);
                                                                c.push(r ? s : s / 32)
                                                            }
                                                            function d(t, e, n) { return e < n ? t > e && t < n : t > e || t < n } s || (f(h, !0), f(o, !1)), a || (f(u, !0), f(l, !1));
                                                            var _ = this.getPoint(), g = Math.min.apply(Math, c), p = s ? o.getTangentAtTime(e) : o.getPointAt(g).subtract(_), v = s ? p.negate() : h.getPointAt(-g).subtract(_), m = a ? l.getTangentAtTime(n) : l.getPointAt(g).subtract(_), y = a ? m.negate() : u.getPointAt(-g).subtract(_), x = v.getAngle(), w = p.getAngle(), b = y.getAngle(), S = m.getAngle();
                                                            return !!(s ? d(x, b, S) ^ d(w, b, S) && d(x, S, b) ^ d(w, S, b) : d(b, x, w) ^ d(S, x, w) && d(b, w, x) ^ d(S, w, x))
                                                        }, hasOverlap:
                                                        function () { return !!this._overlap }
                                                }, l.each(j._evaluateMethods, (
                                                    function (t) {
                                                        var e = t + "At";
                                                        this[t] =
                                                            function () {
                                                                var t = this.getCurve(), n = this.getTime();
                                                                return null != n && t && t[e](n, !0)
                                                            }
                                                    }), { preserve: !0 }), new
                                                    function () {
                                                        function t(t, e, n) {
                                                            var i = t.length, r = 0, s = i - 1;

                                                            function a(n, r) {
                                                                for (var s = n + r;
                                                                    s >= -1 && s <= i;
                                                                    s += r) {
                                                                        var a = t[(s % i + i) % i];
                                                                    if (!e.getPoint().isClose(a.getPoint(), 1e-7)) break;
                                                                    if (e.equals(a)) return a
                                                                } return null
                                                            } for (;
                                                                r <= s;
                                                            ) {
                                                                var o, h = r + s >>> 1, l = t[h];
                                                                if (n && (o = e.equals(l) ? l : a(h, -1) || a(h, 1))) return e._overlap && (o._overlap = o._intersection._overlap = !0), o;
                                                                var u = e.getPath(), c = l.getPath();
                                                                (u !== c ? u._id - c._id : e.getIndex() + e.getTime() - (l.getIndex() + l.getTime())) < 0 ? s = h - 1 : r = h + 1
                                                            } return t.splice(r, 0, e), e
                                                        } return {
                                                            statics: {
                                                                insert: t, expand:
                                                                    function (e) {
                                                                        for (var n = e.slice(), i = e.length - 1;
                                                                            i >= 0;
                                                                            i--)t(n, e[i]._intersection, !1);
                                                                        return n
                                                                    }
                                                            }
                                                        }
                                                    }), B = P.extend({
                                                        _class: "PathItem", _selectBounds: !1, _canScaleStroke: !0, beans: !0, initialize:
                                                            function () { }, statics: {
                                                                create:
                                                                    function (t) {
                                                                        var e, n, i;
                                                                        if (l.isPlainObject(t) ? (n = t.segments, e = t.pathData) : Array.isArray(t) ? n = t : "string" == typeof t && (e = t), n) {
                                                                            var r = n[0];
                                                                            i = r && Array.isArray(r[0])
                                                                        } else e && (i = (e.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(e));
                                                                        return new (i ? F : D)(t)
                                                                    }
                                                            }, _asPathItem:
                                                            function () { return this }, isClockwise:
                                                            function () { return this.getArea() >= 0 }, setClockwise:
                                                            function (t) { this.isClockwise() != (t = !!t) && this.reverse() }, setPathData:
                                                            function (t) {
                                                                var e, n, i, r = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi), s = !1, a = new v, o = new v;

                                                                function h(t, n) {
                                                                    var i = +e[t];
                                                                    return s && (i += a[n]), i
                                                                }
                                                                function l(t) { return new v(h(t, "x"), h(t + 1, "y")) } this.clear();
                                                                for (var u = 0, c = r && r.length;
                                                                    u < c;
                                                                    u++) {
                                                                        var f = r[u], d = f[0], _ = d.toLowerCase(), g = (e = f.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g)) && e.length;
                                                                    switch (s = d === _, "z" !== n || /[mz]/.test(_) || this.moveTo(a), _) {
                                                                        case "m": case "l": for (var p = "m" === _, m = 0;
                                                                            m < g;
                                                                            m += 2)this[p ? "moveTo" : "lineTo"](a = l(m)), p && (o = a, p = !1);
                                                                            i = a;
                                                                            break;
                                                                        case "h": case "v": var x = "h" === _ ? "x" : "y";
                                                                            a = a.clone();
                                                                            for (m = 0;
                                                                                m < g;
                                                                                m++)a[x] = h(m, x), this.lineTo(a);
                                                                            i = a;
                                                                            break;
                                                                        case "c": for (m = 0;
                                                                            m < g;
                                                                            m += 6)this.cubicCurveTo(l(m), i = l(m + 2), a = l(m + 4));
                                                                            break;
                                                                        case "s": for (m = 0;
                                                                            m < g;
                                                                            m += 4)this.cubicCurveTo(/[cs]/.test(n) ? a.multiply(2).subtract(i) : a, i = l(m), a = l(m + 2)), n = _;
                                                                            break;
                                                                        case "q": for (m = 0;
                                                                            m < g;
                                                                            m += 4)this.quadraticCurveTo(i = l(m), a = l(m + 2));
                                                                            break;
                                                                        case "t": for (m = 0;
                                                                            m < g;
                                                                            m += 2)this.quadraticCurveTo(i = /[qt]/.test(n) ? a.multiply(2).subtract(i) : a, a = l(m)), n = _;
                                                                            break;
                                                                        case "a": for (m = 0;
                                                                            m < g;
                                                                            m += 7)this.arcTo(a = l(m + 5), new y(+e[m], +e[m + 1]), +e[m + 2], +e[m + 4], +e[m + 3]);
                                                                            break;
                                                                        case "z": this.closePath(1e-12), a = o
                                                                    }n = _
                                                                }
                                                            }, _canComposite:
                                                            function () { return !(this.hasFill() && this.hasStroke()) }, _contains:
                                                            function (t) {
                                                                var e = t.isInside(this.getBounds({ internal: !0, handle: !0 })) ? this._getWinding(t) : {};

                                                                return e.onPath || !!("evenodd" === this.getFillRule() ? 1 & e.windingL || 1 & e.windingR : e.winding)
                                                            }, getIntersections:
                                                            function (t, e, n, i) {
                                                                var r = this === t || !t, s = this._matrix._orNullIfIdentity(), a = r ? s : (n || t._matrix)._orNullIfIdentity();
                                                                return r || this.getBounds(s).intersects(t.getBounds(a), 1e-12) ? j.getIntersections(this.getCurves(), !r && t.getCurves(), e, s, a, i) : []
                                                            }, getCrossings:
                                                            function (t) {
                                                                return this.getIntersections(t, (
                                                                    function (t) { return t.isCrossing() }))
                                                            }, getNearestLocation:
                                                            function () {
                                                                for (var t = v.read(arguments), e = this.getCurves(), n = 1 / 0, i = null, r = 0, s = e.length;
                                                                    r < s;
                                                                    r++) {
                                                                        var a = e[r].getNearestLocation(t);
                                                                    a._distance < n && (n = a._distance, i = a)
                                                                } return i
                                                            }, getNearestPoint:
                                                            function () {
                                                                var t = this.getNearestLocation.apply(this, arguments);
                                                                return t ? t.getPoint() : t
                                                            }, interpolate:
                                                            function (t, e, n) {
                                                                var i = !this._children, r = i ? "_segments" : "_children", s = t[r], a = e[r], o = this[r];
                                                                if (!s || !a || s.length !== a.length) throw new Error("Invalid operands in interpolate() call: " + t + ", " + e);
                                                                var h = o.length, l = a.length;
                                                                if (h < l) for (var u = i ? L : D, c = h;
                                                                    c < l;
                                                                    c++)this.add(new u);
                                                                else h > l && this[i ? "removeSegments" : "removeChildren"](l, h);
                                                                for (c = 0;
                                                                    c < l;
                                                                    c++)o[c].interpolate(s[c], a[c], n);
                                                                i && (this.setClosed(t._closed), this._changed(9))
                                                            }, compare:
                                                            function (t) {
                                                                var e = !1;
                                                                if (t) {
                                                                    var n = this._children || [this], i = t._children ? t._children.slice() : [t], r = n.length, s = i.length, a = [], o = 0;
                                                                    e = !0;
                                                                    for (var h = d.findItemBoundsCollisions(n, i, g.GEOMETRIC_EPSILON), l = r - 1;
                                                                        l >= 0 && e;
                                                                        l--) {
                                                                            var u = n[l];
                                                                        e = !1;
                                                                        var c = h[l];
                                                                        if (c) for (var f = c.length - 1;
                                                                            f >= 0 && !e;
                                                                            f--)u.compare(i[c[f]]) && (a[c[f]] || (a[c[f]] = !0, o++), e = !0)
                                                                    } e = e && o === s
                                                                } return e
                                                            }
                                                    }), D = B.extend({
                                                        _class: "Path", _serializeFields: { segments: [], closed: !1 }, initialize:
                                                            function (t) {
                                                                this._closed = !1, this._segments = [], this._version = 0;
                                                                var e = arguments, n = Array.isArray(t) ? "object" == typeof t[0] ? t : e : !t || t.size !== a || t.x === a && t.point === a ? null : e;
                                                                n && n.length > 0 ? this.setSegments(n) : (this._curves = a, this._segmentSelection = 0, n || "string" != typeof t || (this.setPathData(t), t = null)), this._initialize(!n && t)
                                                            }, _equals:
                                                            function (t) { return this._closed === t._closed && l.equals(this._segments, t._segments) }, copyContent:
                                                            function (t) { this.setSegments(t._segments), this._closed = t._closed }, _changed:
                                                            function t(e) {
                                                                if (t.base.call(this, e), 8 & e) {
                                                                    if (this._length = this._area = a, 32 & e) this._version++;
                                                                    else if (this._curves) for (var n = 0, i = this._curves.length;
                                                                        n < i;
                                                                        n++)this._curves[n]._changed()
                                                                } else 64 & e && (this._bounds = a)
                                                            }, getStyle:
                                                            function () {
                                                                var t = this._parent;
                                                                return (t instanceof F ? t : this)._style
                                                            }, getSegments:
                                                            function () { return this._segments }, setSegments:
                                                            function (t) {
                                                                var e = this.isFullySelected(), n = t && t.length;
                                                                if (this._segments.length = 0, this._segmentSelection = 0, this._curves = a, n) {
                                                                    var i = t[n - 1];
                                                                    "boolean" == typeof i && (this.setClosed(i), n--), this._add(L.readList(t, 0, {}, n))
                                                                } e && this.setFullySelected(!0)
                                                            }, getFirstSegment:
                                                            function () { return this._segments[0] }, getLastSegment:
                                                            function () { return this._segments[this._segments.length - 1] }, getCurves:
                                                            function () {
                                                                var t = this._curves, e = this._segments;
                                                                if (!t) {
                                                                    var n = this._countCurves();
                                                                    t = this._curves = new Array(n);
                                                                    for (var i = 0;
                                                                        i < n;
                                                                        i++)t[i] = new j(this, e[i], e[i + 1] || e[0])
                                                                } return t
                                                            }, getFirstCurve:
                                                            function () { return this.getCurves()[0] }, getLastCurve:
                                                            function () {
                                                                var t = this.getCurves();
                                                                return t[t.length - 1]
                                                            }, isClosed:
                                                            function () { return this._closed }, setClosed:
                                                            function (t) {
                                                                if (this._closed != (t = !!t)) {
                                                                    if (this._closed = t, this._curves) {
                                                                        var e = this._curves.length = this._countCurves();
                                                                        t && (this._curves[e - 1] = new j(this, this._segments[e - 1], this._segments[0]))
                                                                    } this._changed(41)
                                                                }
                                                            }
                                                    }, {
                                                        beans: !0, getPathData:
                                                            function (t, e) {
                                                                var n, i, r, s, a, o, h, l, u = this._segments, c = u.length, f = new _(e), d = new Array(6), g = !0, p = [];

                                                                function v(e, u) {
                                                                    if (e._transformCoordinates(t, d), n = d[0], i = d[1], g) p.push("M" + f.pair(n, i)), g = !1;
                                                                    else if (a = d[2], o = d[3], a === n && o === i && h === r && l === s) {
                                                                        if (!u) {
                                                                            var c = n - r, _ = i - s;
                                                                            p.push(0 === c ? "v" + f.number(_) : 0 === _ ? "h" + f.number(c) : "l" + f.pair(c, _))
                                                                        }
                                                                    } else p.push("c" + f.pair(h - r, l - s) + " " + f.pair(a - r, o - s) + " " + f.pair(n - r, i - s));
                                                                    r = n, s = i, h = d[4], l = d[5]
                                                                } if (!c) return "";
                                                                for (var m = 0;
                                                                    m < c;
                                                                    m++)v(u[m]);
                                                                return this._closed && c > 0 && (v(u[0], !0), p.push("z")), p.join("")
                                                            }, isEmpty:
                                                            function () { return !this._segments.length }, _transformContent:
                                                            function (t) {
                                                                for (var e = this._segments, n = new Array(6), i = 0, r = e.length;
                                                                    i < r;
                                                                    i++)e[i]._transformCoordinates(t, n, !0);
                                                                return !0
                                                            }, _add:
                                                            function (t, e) {
                                                                for (var n = this._segments, i = this._curves, r = t.length, s = null == e, a = (e = s ? n.length : e, 0);
                                                                    a < r;
                                                                    a++) {
                                                                        var o = t[a];
                                                                    o._path && (o = t[a] = o.clone()), o._path = this, o._index = e + a, o._selection && this._updateSelection(o, 0, o._selection)
                                                                } if (s) l.push(n, t);
                                                                else {
                                                                    n.splice.apply(n, [e, 0].concat(t));
                                                                    a = e + r;
                                                                    for (var h = n.length;
                                                                        a < h;
                                                                        a++)n[a]._index = a
                                                                } if (i) {
                                                                    var u = this._countCurves(), c = e > 0 && e + r - 1 === u ? e - 1 : e, f = c, d = Math.min(c + r, u);
                                                                    t._curves && (i.splice.apply(i, [c, 0].concat(t._curves)), f += t._curves.length);
                                                                    for (a = f;
                                                                        a < d;
                                                                        a++)i.splice(a, 0, new j(this, null, null));
                                                                    this._adjustCurves(c, d)
                                                                } return this._changed(41), t
                                                            }, _adjustCurves:
                                                            function (t, e) {
                                                                for (var n, i = this._segments, r = this._curves, s = t;
                                                                    s < e;
                                                                    s++)(n = r[s])._path = this, n._segment1 = i[s], n._segment2 = i[s + 1] || i[0], n._changed();
                                                                (n = r[this._closed && !t ? i.length - 1 : t - 1]) && (n._segment2 = i[t] || i[0], n._changed()), (n = r[e]) && (n._segment1 = i[e], n._changed())
                                                            }, _countCurves:
                                                            function () {
                                                                var t = this._segments.length;
                                                                return !this._closed && t > 0 ? t - 1 : t
                                                            }, add:
                                                            function (t) {
                                                                var e = arguments;
                                                                return e.length > 1 && "number" != typeof t ? this._add(L.readList(e)) : this._add([L.read(e)])[0]
                                                            }, insert:
                                                            function (t, e) {
                                                                var n = arguments;
                                                                return n.length > 2 && "number" != typeof e ? this._add(L.readList(n, 1), t) : this._add([L.read(n, 1)], t)[0]
                                                            }, addSegment:
                                                            function () { return this._add([L.read(arguments)])[0] }, insertSegment:
                                                            function (t) { return this._add([L.read(arguments, 1)], t)[0] }, addSegments:
                                                            function (t) { return this._add(L.readList(t)) }, insertSegments:
                                                            function (t, e) { return this._add(L.readList(e), t) }, removeSegment:
                                                            function (t) { return this.removeSegments(t, t + 1)[0] || null }, removeSegments:
                                                            function (t, e, n) {
                                                                t = t || 0, e = l.pick(e, this._segments.length);
                                                                var i = this._segments, r = this._curves, s = i.length, a = i.splice(t, e - t), o = a.length;
                                                                if (!o) return a;
                                                                for (var h = 0;
                                                                    h < o;
                                                                    h++) {
                                                                        var u = a[h];
                                                                    u._selection && this._updateSelection(u, u._selection, 0), u._index = u._path = null
                                                                } h = t;
                                                                for (var c = i.length;
                                                                    h < c;
                                                                    h++)i[h]._index = h;
                                                                if (r) {
                                                                    var f = t > 0 && e === s + (this._closed ? 1 : 0) ? t - 1 : t;
                                                                    for (h = (r = r.splice(f, o)).length - 1;
                                                                        h >= 0;
                                                                        h--)r[h]._path = null;
                                                                    n && (a._curves = r.slice(1)), this._adjustCurves(f, f)
                                                                } return this._changed(41), a
                                                            }, clear: "#removeSegments", hasHandles:
                                                            function () {
                                                                for (var t = this._segments, e = 0, n = t.length;
                                                                    e < n;
                                                                    e++)if (t[e].hasHandles()) return !0;
                                                                return !1
                                                            }, clearHandles:
                                                            function () {
                                                                for (var t = this._segments, e = 0, n = t.length;
                                                                    e < n;
                                                                    e++)t[e].clearHandles()
                                                            }, getLength:
                                                            function () {
                                                                if (null == this._length) {
                                                                    for (var t = this.getCurves(), e = 0, n = 0, i = t.length;
                                                                        n < i;
                                                                        n++)e += t[n].getLength();
                                                                    this._length = e
                                                                } return this._length
                                                            }, getArea:
                                                            function () {
                                                                var t = this._area;
                                                                if (null == t) {
                                                                    var e = this._segments, n = this._closed;
                                                                    t = 0;
                                                                    for (var i = 0, r = e.length;
                                                                        i < r;
                                                                        i++) {
                                                                            var s = i + 1 === r;
                                                                        t += j.getArea(j.getValues(e[i], e[s ? 0 : i + 1], null, s && !n))
                                                                    } this._area = t
                                                                } return t
                                                            }, isFullySelected:
                                                            function () {
                                                                var t = this._segments.length;
                                                                return this.isSelected() && t > 0 && this._segmentSelection === 7 * t
                                                            }, setFullySelected:
                                                            function (t) { t && this._selectSegments(!0), this.setSelected(t) }, setSelection:
                                                            function t(e) { 1 & e || this._selectSegments(!1), t.base.call(this, e) }, _selectSegments:
                                                            function (t) {
                                                                var e = this._segments, n = e.length, i = t ? 7 : 0;
                                                                this._segmentSelection = i * n;
                                                                for (var r = 0;
                                                                    r < n;
                                                                    r++)e[r]._selection = i
                                                            }, _updateSelection:
                                                            function (t, e, n) { t._selection = n, (this._segmentSelection += n - e) > 0 && this.setSelected(!0) }, divideAt:
                                                            function (t) {
                                                                var e, n = this.getLocationAt(t);
                                                                return n && (e = n.getCurve().divideAt(n.getCurveOffset())) ? e._segment1 : null
                                                            }, splitAt:
                                                            function (t) {
                                                                var e = this.getLocationAt(t), n = e && e.index, i = e && e.time;
                                                                i > .99999999 && (n++, i = 0);
                                                                var r = this.getCurves();
                                                                if (n >= 0 && n < r.length) {
                                                                    i >= 1e-8 && r[n++].divideAtTime(i);
                                                                    var s, a = this.removeSegments(n, this._segments.length, !0);
                                                                    return this._closed ? (this.setClosed(!1), s = this) : ((s = new D(P.NO_INSERT)).insertAbove(this), s.copyAttributes(this)), s._add(a, 0), this.addSegment(a[0]), s
                                                                } return null
                                                            }, split:
                                                            function (t, e) {
                                                                var n, i = e === a ? t : (n = this.getCurves()[t]) && n.getLocationAtTime(e);
                                                                return null != i ? this.splitAt(i) : null
                                                            }, join:
                                                            function (t, e) {
                                                                var n = e || 0;
                                                                if (t && t !== this) {
                                                                    var i = t._segments, r = this.getLastSegment(), s = t.getLastSegment();
                                                                    if (!s) return this;
                                                                    r && r._point.isClose(s._point, n) && t.reverse();
                                                                    var a = t.getFirstSegment();
                                                                    if (r && r._point.isClose(a._point, n)) r.setHandleOut(a._handleOut), this._add(i.slice(1));
                                                                    else {
                                                                        var o = this.getFirstSegment();
                                                                        o && o._point.isClose(a._point, n) && t.reverse(), s = t.getLastSegment(), o && o._point.isClose(s._point, n) ? (o.setHandleIn(s._handleIn), this._add(i.slice(0, i.length - 1), 0)) : this._add(i.slice())
                                                                    } t._closed && this._add([i[0]]), t.remove()
                                                                } var h = this.getFirstSegment(), l = this.getLastSegment();
                                                                return h !== l && h._point.isClose(l._point, n) && (h.setHandleIn(l._handleIn), l.remove(), this.setClosed(!0)), this
                                                            }, reduce:
                                                            function (t) {
                                                                for (var e = this.getCurves(), n = t && t.simplify, i = n ? 1e-7 : 0, r = e.length - 1;
                                                                    r >= 0;
                                                                    r--) {
                                                                        var s = e[r];
                                                                    !s.hasHandles() && (!s.hasLength(i) || n && s.isCollinear(s.getNext())) && s.remove()
                                                                } return this
                                                            }, reverse:
                                                            function () {
                                                                this._segments.reverse();
                                                                for (var t = 0, e = this._segments.length;
                                                                    t < e;
                                                                    t++) {
                                                                        var n = this._segments[t], i = n._handleIn;
                                                                    n._handleIn = n._handleOut, n._handleOut = i, n._index = t
                                                                } this._curves = null, this._changed(9)
                                                            }, flatten:
                                                            function (t) {
                                                                for (var e = new q(this, t || .25, 256, !0).parts, n = e.length, i = [], r = 0;
                                                                    r < n;
                                                                    r++)i.push(new L(e[r].curve.slice(0, 2)));
                                                                !this._closed && n > 0 && i.push(new L(e[n - 1].curve.slice(6))), this.setSegments(i)
                                                            }, simplify:
                                                            function (t) {
                                                                var e = new V(this).fit(t || 2.5);
                                                                return e && this.setSegments(e), !!e
                                                            }, smooth:
                                                            function (t) {
                                                                var e = this, n = t || {}, i = n.type || "asymmetric", r = this._segments, s = r.length, o = this._closed;

                                                                function h(t, n) {
                                                                    var i = t && t.index;
                                                                    if (null != i) {
                                                                        var r = t.path;
                                                                        if (r && r !== e) throw new Error(t._class + " " + i + " of " + r + " is not part of " + e);
                                                                        n && t instanceof j && i++
                                                                    } else i = "number" == typeof t ? t : n;
                                                                    return Math.min(i < 0 && o ? i % s : i < 0 ? i + s : i, s - 1)
                                                                } var l = o && n.from === a && n.to === a, u = h(n.from, 0), c = h(n.to, s - 1);
                                                                if (u > c) if (o) u -= s;
                                                                else {
                                                                    var f = u;
                                                                    u = c, c = f
                                                                } if (/^(?:asymmetric|continuous)$/.test(i)) {
                                                                    var d = "asymmetric" === i, _ = Math.min, g = c - u + 1, p = g - 1, v = l ? _(g, 4) : 1, m = v, y = v, x = [];
                                                                    if (o || (m = _(1, u), y = _(1, s - c - 1)), (p += m + y) <= 1) return;
                                                                    for (var w = 0, b = u - m;
                                                                        w <= p;
                                                                        w++, b++)x[w] = r[(b < 0 ? b + s : b) % s]._point;
                                                                    var S = x[0]._x + 2 * x[1]._x, C = x[0]._y + 2 * x[1]._y, k = 2, P = p - 1, M = [S], O = [C], A = [k], I = [], T = [];
                                                                    for (w = 1;
                                                                        w < p;
                                                                        w++) {
                                                                            var z = w < P, E = z ? 4 : d ? 2 : 7, L = z ? 4 : d ? 3 : 8, N = z ? 2 : d ? 0 : 1, R = (z || d ? 1 : 2) / k;
                                                                        k = A[w] = E - R, S = M[w] = L * x[w]._x + N * x[w + 1]._x - R * S, C = O[w] = L * x[w]._y + N * x[w + 1]._y - R * C
                                                                    } I[P] = M[P] / A[P], T[P] = O[P] / A[P];
                                                                    for (w = p - 2;
                                                                        w >= 0;
                                                                        w--)I[w] = (M[w] - I[w + 1]) / A[w], T[w] = (O[w] - T[w + 1]) / A[w];
                                                                    I[p] = (3 * x[p]._x - I[P]) / 2, T[p] = (3 * x[p]._y - T[P]) / 2;
                                                                    w = m;
                                                                    var B = p - y;
                                                                    for (b = u;
                                                                        w <= B;
                                                                        w++, b++) {
                                                                            var D = r[b < 0 ? b + s : b], F = D._point, q = I[w] - F._x, V = T[w] - F._y;
                                                                        (l || w < B) && D.setHandleOut(q, V), (l || w > m) && D.setHandleIn(-q, -V)
                                                                    }
                                                                } else for (w = u;
                                                                    w <= c;
                                                                    w++)r[w < 0 ? w + s : w].smooth(n, !l && w === u, !l && w === c)
                                                            }, toShape:
                                                            function (t) {
                                                                if (!this._closed) return null;
                                                                var e, n, i, r, s, o, h, l = this._segments;

                                                                function u(t, e) {
                                                                    var n = l[t], i = n.getNext(), r = l[e], s = r.getNext();
                                                                    return n._handleOut.isZero() && i._handleIn.isZero() && r._handleOut.isZero() && s._handleIn.isZero() && i._point.subtract(n._point).isCollinear(s._point.subtract(r._point))
                                                                }
                                                                function c(t) {
                                                                    var e = l[t], n = e.getNext(), i = e._handleOut, r = n._handleIn, s = .5522847498307936;
                                                                    if (i.isOrthogonal(r)) {
                                                                        var a = e._point, o = n._point, h = new C(a, i, !0).intersect(new C(o, r, !0), !0);
                                                                        return h && g.isZero(i.getLength() / h.subtract(a).getLength() - s) && g.isZero(r.getLength() / h.subtract(o).getLength() - s)
                                                                    } return !1
                                                                }
                                                                function f(t, e) { return l[t]._point.getDistance(l[e]._point) } if (!this.hasHandles() && 4 === l.length && u(0, 2) && u(1, 3) && (s = l[1], o = s.getPrevious(), h = s.getNext(), o._handleOut.isZero() && s._handleIn.isZero() && s._handleOut.isZero() && h._handleIn.isZero() && s._point.subtract(o._point).isOrthogonal(h._point.subtract(s._point))) ? (e = A.Rectangle, n = new y(f(0, 3), f(0, 1)), r = l[1]._point.add(l[2]._point).divide(2)) : 8 === l.length && c(0) && c(2) && c(4) && c(6) && u(1, 5) && u(3, 7) ? (e = A.Rectangle, i = (n = new y(f(1, 6), f(0, 3))).subtract(new y(f(0, 7), f(1, 2))).divide(2), r = l[3]._point.add(l[4]._point).divide(2)) : 4 === l.length && c(0) && c(1) && c(2) && c(3) && (g.isZero(f(0, 2) - f(1, 3)) ? (e = A.Circle, i = f(0, 2) / 2) : (e = A.Ellipse, i = new y(f(2, 0) / 2, f(3, 1) / 2)), r = l[1]._point), e) {
                                                                    var d = this.getPosition(!0), _ = new e({ center: d, size: n, radius: i, insert: !1 });
                                                                    return _.copyAttributes(this, !0), _._matrix.prepend(this._matrix), _.rotate(r.subtract(d).getAngle() + 90), (t === a || t) && _.insertAbove(this), _
                                                                } return null
                                                            }, toPath: "#clone", compare:
                                                            function t(e) {
                                                                if (!e || e instanceof F) return t.base.call(this, e);
                                                                var n = this.getCurves(), i = e.getCurves(), r = n.length, s = i.length;
                                                                if (!r || !s) return r == s;
                                                                for (var a, o, h = n[0].getValues(), l = [], u = 0, c = 0, f = 0;
                                                                    f < s;
                                                                    f++) {
                                                                        var d = i[f].getValues();
                                                                    if (l.push(d), p = j.getOverlaps(h, d)) {
                                                                        a = !f && p[0][0] > 0 ? s - 1 : f, o = p[0][1];
                                                                        break
                                                                    }
                                                                } var _, g = Math.abs;
                                                                for (d = l[a];
                                                                    h && d;
                                                                ) {
                                                                    var p;
                                                                    if (p = j.getOverlaps(h, d)) if (g(p[0][0] - c) < 1e-8) {
                                                                        1 === (c = p[1][0]) && (h = ++u < r ? n[u].getValues() : null, c = 0);
                                                                        var v = p[0][1];
                                                                        if (g(v - o) < 1e-8) {
                                                                            if (_ || (_ = [a, v]), 1 === (o = p[1][1]) && (++a >= s && (a = 0), d = l[a] || i[a].getValues(), o = 0), !h) return _[0] === a && _[1] === o;
                                                                            continue
                                                                        }
                                                                    } break
                                                                } return !1
                                                            }, _hitTestSelf:
                                                            function (t, e, n, i) {
                                                                var r, s, a, o, h, l, u = this, c = this.getStyle(), f = this._segments, d = f.length, _ = this._closed, g = e._tolerancePadding, p = g, v = e.stroke && c.hasStroke(), m = e.fill && c.hasFill(), y = e.curves, x = v ? c.getStrokeWidth() / 2 : m && e.tolerance > 0 || y ? 0 : null;

                                                                function w(e, n) { return t.subtract(e).divide(n).length <= 1 }
                                                                function b(t, n, i) {
                                                                    if (!e.selected || n.isSelected()) {
                                                                        var r = t._point;
                                                                        if (n !== r && (n = n.add(r)), w(n, p)) return new E(i, u, { segment: t, point: n })
                                                                    }
                                                                }
                                                                function S(t, n) { return (n || e.segments) && b(t, t._point, "segment") || !n && e.handles && (b(t, t._handleIn, "handle-in") || b(t, t._handleOut, "handle-out")) }
                                                                function C(t) { o.add(t) }
                                                                function k(e) {
                                                                    var n, h = _ || e._index > 0 && e._index < d - 1;
                                                                    return "round" === (h ? r : s) ? w(e._point, p) : (o = new D({ internal: !0, closed: !0 }), h ? e.isSmooth() || D._addBevelJoin(e, r, x, a, null, i, C, !0) : "square" === s && D._addSquareCap(e, s, x, null, i, C, !0), o.isEmpty() ? void 0 : o.contains(t) || (n = o.getNearestLocation(t)) && w(n.getPoint(), g))
                                                                } if (null !== x && (x > 0 ? (r = c.getStrokeJoin(), s = c.getStrokeCap(), a = c.getMiterLimit(), p = p.add(D._getStrokePadding(x, i))) : r = s = "round"), !e.ends || e.segments || _) {
                                                                    if (e.segments || e.handles) for (var P = 0;
                                                                        P < d;
                                                                        P++)if (l = S(f[P])) return l
                                                                } else if (l = S(f[0], !0) || S(f[d - 1], !0)) return l;
                                                                if (null !== x) {
                                                                    if (h = this.getNearestLocation(t)) {
                                                                        var M = h.getTime();
                                                                        0 === M || 1 === M && d > 1 ? k(h.getSegment()) || (h = null) : w(h.getPoint(), p) || (h = null)
                                                                    } if (!h && "miter" === r && d > 1) for (P = 0;
                                                                        P < d;
                                                                        P++) {
                                                                            var O = f[P];
                                                                        if (t.getDistance(O._point) <= a * x && k(O)) {
                                                                            h = O.getLocation();
                                                                            break
                                                                        }
                                                                    }
                                                                } return !h && m && this._contains(t) || h && !v && !y ? new E("fill", this) : h ? new E(v ? "stroke" : "curve", this, { location: h, point: h.getPoint() }) : null
                                                            }
                                                    }, l.each(j._evaluateMethods, (
                                                        function (t) {
                                                            this[t + "At"] =
                                                                function (e) {
                                                                    var n = this.getLocationAt(e);
                                                                    return n && n[t]()
                                                                }
                                                        }), {
                                                        beans: !1, getLocationOf:
                                                            function () {
                                                                for (var t = v.read(arguments), e = this.getCurves(), n = 0, i = e.length;
                                                                    n < i;
                                                                    n++) {
                                                                        var r = e[n].getLocationOf(t);
                                                                    if (r) return r
                                                                } return null
                                                            }, getOffsetOf:
                                                            function () {
                                                                var t = this.getLocationOf.apply(this, arguments);
                                                                return t ? t.getOffset() : null
                                                            }, getLocationAt:
                                                            function (t) {
                                                                if ("number" == typeof t) {
                                                                    for (var e = this.getCurves(), n = 0, i = 0, r = e.length;
                                                                        i < r;
                                                                        i++) {
                                                                            var s = n, a = e[i];
                                                                        if ((n += a.getLength()) > t) return a.getLocationAt(t - s)
                                                                    } if (e.length > 0 && t <= this.getLength()) return new R(e[e.length - 1], 1)
                                                                } else if (t && t.getPath && t.getPath() === this) return t;
                                                                return null
                                                            }, getOffsetsWithTangent:
                                                            function () {
                                                                var t = v.read(arguments);
                                                                if (t.isZero()) return [];
                                                                for (var e = [], n = 0, i = this.getCurves(), r = 0, s = i.length;
                                                                    r < s;
                                                                    r++) {
                                                                        for (var a = i[r], o = a.getTimesWithTangent(t), h = 0, l = o.length;
                                                                            h < l;
                                                                            h++) {
                                                                                var u = n + a.getOffsetAtTime(o[h]);
                                                                            e.indexOf(u) < 0 && e.push(u)
                                                                        } n += a.length
                                                                } return e
                                                            }
                                                    }), new
                                                        function () {
                                                            function t(t, e, n) {
                                                                var i, r, s, a, o, h, l, u, c = e._segments, f = c.length, d = new Array(6), _ = !0;

                                                                function g(e) {
                                                                    if (n) e._transformCoordinates(n, d), i = d[0], r = d[1];
                                                                    else {
                                                                        var c = e._point;
                                                                        i = c._x, r = c._y
                                                                    } if (_) t.moveTo(i, r), _ = !1;
                                                                    else {
                                                                        if (n) o = d[2], h = d[3];
                                                                        else {
                                                                            var f = e._handleIn;
                                                                            o = i + f._x, h = r + f._y
                                                                        } o === i && h === r && l === s && u === a ? t.lineTo(i, r) : t.bezierCurveTo(l, u, o, h, i, r)
                                                                    } if (s = i, a = r, n) l = d[4], u = d[5];
                                                                    else {
                                                                        f = e._handleOut;
                                                                        l = s + f._x, u = a + f._y
                                                                    }
                                                                } for (var p = 0;
                                                                    p < f;
                                                                    p++)g(c[p]);
                                                                e._closed && f > 0 && g(c[0])
                                                            } return {
                                                                _draw:
                                                                    function (e, n, i, r) {
                                                                        var s = n.dontStart, a = n.dontFinish || n.clip, o = this.getStyle(), h = o.hasFill(), l = o.hasStroke(), u = o.getDashArray(), c = !ut.support.nativeDash && l && u && u.length;

                                                                        function f(t) { return u[(t % c + c) % c] } if (s || e.beginPath(), (h || l && !c || a) && (t(e, this, r), this._closed && e.closePath()), !a && (h || l) && (this._setStyles(e, n, i), h && (e.fill(o.getFillRule()), e.shadowColor = "rgba(0,0,0,0)"), l)) {
                                                                            if (c) {
                                                                                s || e.beginPath();
                                                                                for (var d, _ = new q(this, .25, 32, !1, r), g = _.length, p = -o.getDashOffset(), v = 0;
                                                                                    p > 0;
                                                                                )p -= f(v--) + f(v--);
                                                                                for (;
                                                                                    p < g;
                                                                                )d = p + f(v++), (p > 0 || d > 0) && _.drawPart(e, Math.max(p, 0), Math.max(d, 0)), p = d + f(v++)
                                                                            } e.stroke()
                                                                        }
                                                                    }, _drawSelected:
                                                                    function (e, n) {
                                                                        e.beginPath(), t(e, this, n), e.stroke(),
                                                                            function (t, e, n, i) {
                                                                                if (!(i <= 0)) for (var r, s, a = i / 2, o = i - 2, h = a - 1, l = new Array(6), u = 0, c = e.length;
                                                                                    u < c;
                                                                                    u++) {
                                                                                        var f = e[u], d = f._selection;
                                                                                    if (f._transformCoordinates(n, l), r = l[0], s = l[1], 2 & d && g(2), 4 & d && g(4), t.fillRect(r - a, s - a, i, i), o > 0 && !(1 & d)) {
                                                                                        var _ = t.fillStyle;
                                                                                        t.fillStyle = "#ffffff", t.fillRect(r - h, s - h, o, o), t.fillStyle = _
                                                                                    }
                                                                                }
                                                                                function g(e) {
                                                                                    var n = l[e], i = l[e + 1];
                                                                                    r == n && s == i || (t.beginPath(), t.moveTo(r, s), t.lineTo(n, i), t.stroke(), t.beginPath(), t.arc(n, i, a, 0, 2 * Math.PI, !0), t.fill())
                                                                                }
                                                                            }(e, this._segments, n, ut.settings.handleSize)
                                                                    }
                                                            }
                                                        }, new
                                                        function () {
                                                            function t(t) {
                                                                var e = t._segments;
                                                                if (!e.length) throw new Error("Use a moveTo() command first");
                                                                return e[e.length - 1]
                                                            } return {
                                                                moveTo:
                                                                    function () {
                                                                        var t = this._segments;
                                                                        1 === t.length && this.removeSegment(0), t.length || this._add([new L(v.read(arguments))])
                                                                    }, moveBy:
                                                                    function () { throw new Error("moveBy() is unsupported on Path items.") }, lineTo:
                                                                    function () { this._add([new L(v.read(arguments))]) }, cubicCurveTo:
                                                                    function () {
                                                                        var e = arguments, n = v.read(e), i = v.read(e), r = v.read(e), s = t(this);
                                                                        s.setHandleOut(n.subtract(s._point)), this._add([new L(r, i.subtract(r))])
                                                                    }, quadraticCurveTo:
                                                                    function () {
                                                                        var e = arguments, n = v.read(e), i = v.read(e), r = t(this)._point;
                                                                        this.cubicCurveTo(n.add(r.subtract(n).multiply(1 / 3)), n.add(i.subtract(n).multiply(1 / 3)), i)
                                                                    }, curveTo:
                                                                    function () {
                                                                        var e = arguments, n = v.read(e), i = v.read(e), r = l.pick(l.read(e), .5), s = 1 - r, a = t(this)._point, o = n.subtract(a.multiply(s * s)).subtract(i.multiply(r * r)).divide(2 * r * s);
                                                                        if (o.isNaN()) throw new Error("Cannot put a curve through points with parameter = " + r);
                                                                        this.quadraticCurveTo(o, i)
                                                                    }, arcTo:
                                                                    function () {
                                                                        var e, n, i, r, s = arguments, a = Math.abs, o = Math.sqrt, h = t(this), u = h._point, c = v.read(s), f = l.peek(s);
                                                                        if ("boolean" == typeof (x = l.pick(f, !0))) var d = (b = u.add(c).divide(2)).add(b.subtract(u).rotate(x ? -90 : 90));
                                                                        else if (l.remain(s) <= 2) d = c, c = v.read(s);
                                                                        else if (!u.equals(c)) {
                                                                            var _ = y.read(s), p = g.isZero;
                                                                            if (p(_.width) || p(_.height)) return this.lineTo(c);
                                                                            var m = l.read(s), x = !!l.read(s), w = !!l.read(s), b = u.add(c).divide(2), k = (U = u.subtract(b).rotate(-m)).x, P = U.y, M = a(_.width), O = a(_.height), A = M * M, I = O * O, T = k * k, z = P * P, E = o(T / A + z / I);
                                                                            if (E > 1 && (A = (M *= E) * M, I = (O *= E) * O), a(E = (A * I - A * z - I * T) / (A * z + I * T)) < 1e-12 && (E = 0), E < 0) throw new Error("Cannot create an arc with the given arguments");
                                                                            e = new v(M * P / O, -O * k / M).multiply((w === x ? -1 : 1) * o(E)).rotate(m).add(b), n = (i = (r = (new S).translate(e).rotate(m).scale(M, O))._inverseTransform(u)).getDirectedAngle(r._inverseTransform(c)), !x && n > 0 ? n -= 360 : x && n < 0 && (n += 360)
                                                                        } if (d) {
                                                                            var N = new C(u.add(d).divide(2), d.subtract(u).rotate(90), !0), j = new C(d.add(c).divide(2), c.subtract(d).rotate(90), !0), R = new C(u, c), B = R.getSide(d);
                                                                            if (!(e = N.intersect(j, !0))) {
                                                                                if (!B) return this.lineTo(c);
                                                                                throw new Error("Cannot create an arc with the given arguments")
                                                                            } n = (i = u.subtract(e)).getDirectedAngle(c.subtract(e));
                                                                            var D = R.getSide(e, !0);
                                                                            0 === D ? n = B * a(n) : B === D && (n += n < 0 ? 360 : -360)
                                                                        } if (n) {
                                                                            for (var F = a(n), q = F >= 360 ? 4 : Math.ceil((F - 1e-5) / 90), V = n / q, $ = V * Math.PI / 360, H = 4 / 3 * Math.sin($) / (1 + Math.cos($)), W = [], Z = 0;
                                                                                Z <= q;
                                                                                Z++) {
                                                                                    var U = c, G = null;
                                                                                if (Z < q && (G = i.rotate(90).multiply(H), r ? (U = r._transformPoint(i), G = r._transformPoint(i.add(G)).subtract(U)) : U = e.add(i)), Z) {
                                                                                    var J = i.rotate(-90).multiply(H);
                                                                                    r && (J = r._transformPoint(i.add(J)).subtract(U)), W.push(new L(U, J, G))
                                                                                } else h.setHandleOut(G);
                                                                                i = i.rotate(V)
                                                                            } this._add(W)
                                                                        }
                                                                    }, lineBy:
                                                                    function () {
                                                                        var e = v.read(arguments), n = t(this)._point;
                                                                        this.lineTo(n.add(e))
                                                                    }, curveBy:
                                                                    function () {
                                                                        var e = arguments, n = v.read(e), i = v.read(e), r = l.read(e), s = t(this)._point;
                                                                        this.curveTo(s.add(n), s.add(i), r)
                                                                    }, cubicCurveBy:
                                                                    function () {
                                                                        var e = arguments, n = v.read(e), i = v.read(e), r = v.read(e), s = t(this)._point;
                                                                        this.cubicCurveTo(s.add(n), s.add(i), s.add(r))
                                                                    }, quadraticCurveBy:
                                                                    function () {
                                                                        var e = arguments, n = v.read(e), i = v.read(e), r = t(this)._point;
                                                                        this.quadraticCurveTo(r.add(n), r.add(i))
                                                                    }, arcBy:
                                                                    function () {
                                                                        var e = arguments, n = t(this)._point, i = n.add(v.read(e)), r = l.pick(l.peek(e), !0);
                                                                        "boolean" == typeof r ? this.arcTo(i, r) : this.arcTo(i, n.add(v.read(e)))
                                                                    }, closePath:
                                                                    function (t) { this.setClosed(!0), this.join(this, t) }
                                                            }
                                                        }, {
                                                        _getBounds:
                                                            function (t, e) {
                                                                var n = e.handle ? "getHandleBounds" : e.stroke ? "getStrokeBounds" : "getBounds";
                                                                return D[n](this._segments, this._closed, this, t, e)
                                                            }, statics: {
                                                                getBounds:
                                                                    function (t, e, n, i, r, s) {
                                                                        var a = t[0];
                                                                        if (!a) return new w;
                                                                        var o = new Array(6), h = a._transformCoordinates(i, new Array(6)), l = h.slice(0, 2), u = l.slice(), c = new Array(2);

                                                                        function f(t) {
                                                                            t._transformCoordinates(i, o);
                                                                            for (var e = 0;
                                                                                e < 2;
                                                                                e++)j._addBounds(h[e], h[e + 4], o[e + 2], o[e], e, s ? s[e] : 0, l, u, c);
                                                                            var n = h;
                                                                            h = o, o = n
                                                                        } for (var d = 1, _ = t.length;
                                                                            d < _;
                                                                            d++)f(t[d]);
                                                                        return e && f(a), new w(l[0], l[1], u[0] - l[0], u[1] - l[1])
                                                                    }, getStrokeBounds:
                                                                    function (t, e, n, i, r) {
                                                                        var s = n.getStyle(), a = s.hasStroke(), o = s.getStrokeWidth(), h = a && n._getStrokeMatrix(i, r), l = a && D._getStrokePadding(o, h), u = D.getBounds(t, e, n, i, r, l);
                                                                        if (!a) return u;
                                                                        var c = o / 2, f = s.getStrokeJoin(), d = s.getStrokeCap(), _ = s.getMiterLimit(), g = new w(new y(l));

                                                                        function p(t) { u = u.include(t) }
                                                                        function v(t) { u = u.unite(g.setCenter(t._point.transform(i))) }
                                                                        function m(t, e) { "round" === e || t.isSmooth() ? v(t) : D._addBevelJoin(t, e, c, _, i, h, p) }
                                                                        function x(t, e) { "round" === e ? v(t) : D._addSquareCap(t, e, c, i, h, p) } var b = t.length - (e ? 0 : 1);
                                                                        if (b > 0) {
                                                                            for (var S = 1;
                                                                                S < b;
                                                                                S++)m(t[S], f);
                                                                            e ? m(t[0], f) : (x(t[0], d), x(t[t.length - 1], d))
                                                                        } return u
                                                                    }, _getStrokePadding:
                                                                    function (t, e) {
                                                                        if (!e) return [t, t];
                                                                        var n = new v(t, 0).transform(e), i = new v(0, t).transform(e), r = n.getAngleInRadians(), s = n.getLength(), a = i.getLength(), o = Math.sin(r), h = Math.cos(r), l = Math.tan(r), u = Math.atan2(a * l, s), c = Math.atan2(a, l * s);
                                                                        return [Math.abs(s * Math.cos(u) * h + a * Math.sin(u) * o), Math.abs(a * Math.sin(c) * h + s * Math.cos(c) * o)]
                                                                    }, _addBevelJoin:
                                                                    function (t, e, n, i, r, s, a, o) {
                                                                        var h = t.getCurve(), l = h.getPrevious(), u = h.getPoint1().transform(r), c = l.getNormalAtTime(1).multiply(n).transform(s), f = h.getNormalAtTime(0).multiply(n).transform(s), d = c.getDirectedAngle(f);
                                                                        if ((d < 0 || d >= 180) && (c = c.negate(), f = f.negate()), o && a(u), a(u.add(c)), "miter" === e) {
                                                                            var _ = new C(u.add(c), new v(-c.y, c.x), !0).intersect(new C(u.add(f), new v(-f.y, f.x), !0), !0);
                                                                            _ && u.getDistance(_) <= i * n && a(_)
                                                                        } a(u.add(f))
                                                                    }, _addSquareCap:
                                                                    function (t, e, n, i, r, s, a) {
                                                                        var o = t._point.transform(i), h = t.getLocation(), l = h.getNormal().multiply(0 === h.getTime() ? n : -n).transform(r);
                                                                        "square" === e && (a && (s(o.subtract(l)), s(o.add(l))), o = o.add(l.rotate(-90))), s(o.add(l)), s(o.subtract(l))
                                                                    }, getHandleBounds:
                                                                    function (t, e, n, i, r) {
                                                                        var s, a, o = n.getStyle();
                                                                        if (r.stroke && o.hasStroke()) {
                                                                            var h = n._getStrokeMatrix(i, r), l = o.getStrokeWidth() / 2, u = l;
                                                                            "miter" === o.getStrokeJoin() && (u = l * o.getMiterLimit()), "square" === o.getStrokeCap() && (u = Math.max(u, l * Math.SQRT2)), s = D._getStrokePadding(l, h), a = D._getStrokePadding(u, h)
                                                                        } for (var c = new Array(6), f = 1 / 0, d = -f, _ = f, g = d, p = 0, v = t.length;
                                                                            p < v;
                                                                            p++) {
                                                                                t[p]._transformCoordinates(i, c);
                                                                            for (var m = 0;
                                                                                m < 6;
                                                                                m += 2) {
                                                                                    var y = m ? s : a, x = y ? y[0] : 0, b = y ? y[1] : 0, S = c[m], C = c[m + 1], k = S - x, P = S + x, M = C - b, O = C + b;
                                                                                k < f && (f = k), P > d && (d = P), M < _ && (_ = M), O > g && (g = O)
                                                                            }
                                                                        } return new w(f, _, d - f, g - _)
                                                                    }
                                                            }
                                                    });
                    D.inject({
                        statics: new
                            function () {
                                var t = .5522847498307936, e = [new L([-1, 0], [0, t], [0, -t]), new L([0, -1], [-t, 0], [t, 0]), new L([1, 0], [0, -t], [0, t]), new L([0, 1], [t, 0], [-t, 0])];

                                function n(t, e, n) {
                                    var i = l.getNamed(n), r = new D(i && (1 == i.insert ? P.INSERT : 0 == i.insert ? P.NO_INSERT : null));
                                    return r._add(t), r._closed = e, r.set(i, P.INSERT)
                                }
                                function i(t, i, r) {
                                    for (var s = new Array(4), a = 0;
                                        a < 4;
                                        a++) {
                                            var o = e[a];
                                        s[a] = new L(o._point.multiply(i).add(t), o._handleIn.multiply(i), o._handleOut.multiply(i))
                                    } return n(s, !0, r)
                                } return {
                                    Line:
                                        function () {
                                            var t = arguments;
                                            return n([new L(v.readNamed(t, "from")), new L(v.readNamed(t, "to"))], !1, t)
                                        }, Circle:
                                        function () {
                                            var t = arguments, e = v.readNamed(t, "center"), n = l.readNamed(t, "radius");
                                            return i(e, new y(n), t)
                                        }, Rectangle:
                                        function () {
                                            var e, i = arguments, r = w.readNamed(i, "rectangle"), s = y.readNamed(i, "radius", 0, { readNull: !0 }), a = r.getBottomLeft(!0), o = r.getTopLeft(!0), h = r.getTopRight(!0), l = r.getBottomRight(!0);
                                            if (!s || s.isZero()) e = [new L(a), new L(o), new L(h), new L(l)];
                                            else {
                                                var u = (s = y.min(s, r.getSize(!0).divide(2))).width, c = s.height, f = u * t, d = c * t;
                                                e = [new L(a.add(u, 0), null, [-f, 0]), new L(a.subtract(0, c), [0, d]), new L(o.add(0, c), null, [0, -d]), new L(o.add(u, 0), [-f, 0], null), new L(h.subtract(u, 0), null, [f, 0]), new L(h.add(0, c), [0, -d], null), new L(l.subtract(0, c), null, [0, d]), new L(l.subtract(u, 0), [f, 0])]
                                            } return n(e, !0, i)
                                        }, RoundRectangle: "#Rectangle", Ellipse:
                                        function () {
                                            var t = arguments, e = A._readEllipse(t);
                                            return i(e.center, e.radius, t)
                                        }, Oval: "#Ellipse", Arc:
                                        function () {
                                            var t = arguments, e = v.readNamed(t, "from"), n = v.readNamed(t, "through"), i = v.readNamed(t, "to"), r = l.getNamed(t), s = new D(r && 0 == r.insert && P.NO_INSERT);
                                            return s.moveTo(e), s.arcTo(n, i), s.set(r)
                                        }, RegularPolygon:
                                        function () {
                                            for (var t = arguments, e = v.readNamed(t, "center"), i = l.readNamed(t, "sides"), r = l.readNamed(t, "radius"), s = 360 / i, a = i % 3 == 0, o = new v(0, a ? -r : r), h = a ? -1 : .5, u = new Array(i), c = 0;
                                                c < i;
                                                c++)u[c] = new L(e.add(o.rotate((c + h) * s)));
                                            return n(u, !0, t)
                                        }, Star:
                                        function () {
                                            for (var t = arguments, e = v.readNamed(t, "center"), i = 2 * l.readNamed(t, "points"), r = l.readNamed(t, "radius1"), s = l.readNamed(t, "radius2"), a = 360 / i, o = new v(0, -1), h = new Array(i), u = 0;
                                                u < i;
                                                u++)h[u] = new L(e.add(o.rotate(a * u).multiply(u % 2 ? s : r)));
                                            return n(h, !0, t)
                                        }
                                }
                            }
                    });
                    var F = B.extend({
                        _class: "CompoundPath", _serializeFields: { children: [] }, beans: !0, initialize:
                            function (t) { this._children = [], this._namedChildren = {}, this._initialize(t) || ("string" == typeof t ? this.setPathData(t) : this.addChildren(Array.isArray(t) ? t : arguments)) }, insertChildren:
                            function t(e, n) {
                                var i = n, r = i[0];
                                r && "number" == typeof r[0] && (i = [i]);
                                for (var s = n.length - 1;
                                    s >= 0;
                                    s--) {
                                        var a = i[s];
                                    i !== n || a instanceof D || (i = l.slice(i)), Array.isArray(a) ? i[s] = new D({ segments: a, insert: !1 }) : a instanceof F && (i.splice.apply(i, [s, 1].concat(a.removeChildren())), a.remove())
                                } return t.base.call(this, e, i)
                            }, reduce:
                            function t(e) {
                                for (var n = this._children, i = n.length - 1;
                                    i >= 0;
                                    i--) {
                                        var r;
                                    (r = n[i].reduce(e)).isEmpty() && r.remove()
                                } return n.length ? t.base.call(this) : ((r = new D(P.NO_INSERT)).copyAttributes(this), r.insertAbove(this), this.remove(), r)
                            }, isClosed:
                            function () {
                                for (var t = this._children, e = 0, n = t.length;
                                    e < n;
                                    e++)if (!t[e]._closed) return !1;
                                return !0
                            }, setClosed:
                            function (t) {
                                for (var e = this._children, n = 0, i = e.length;
                                    n < i;
                                    n++)e[n].setClosed(t)
                            }, getFirstSegment:
                            function () {
                                var t = this.getFirstChild();
                                return t && t.getFirstSegment()
                            }, getLastSegment:
                            function () {
                                var t = this.getLastChild();
                                return t && t.getLastSegment()
                            }, getCurves:
                            function () {
                                for (var t = this._children, e = [], n = 0, i = t.length;
                                    n < i;
                                    n++)l.push(e, t[n].getCurves());
                                return e
                            }, getFirstCurve:
                            function () {
                                var t = this.getFirstChild();
                                return t && t.getFirstCurve()
                            }, getLastCurve:
                            function () {
                                var t = this.getLastChild();
                                return t && t.getLastCurve()
                            }, getArea:
                            function () {
                                for (var t = this._children, e = 0, n = 0, i = t.length;
                                    n < i;
                                    n++)e += t[n].getArea();
                                return e
                            }, getLength:
                            function () {
                                for (var t = this._children, e = 0, n = 0, i = t.length;
                                    n < i;
                                    n++)e += t[n].getLength();
                                return e
                            }, getPathData:
                            function (t, e) {
                                for (var n = this._children, i = [], r = 0, s = n.length;
                                    r < s;
                                    r++) {
                                        var a = n[r], o = a._matrix;
                                    i.push(a.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e))
                                } return i.join("")
                            }, _hitTestChildren:
                            function t(e, n, i) { return t.base.call(this, e, n.class === D || "path" === n.type ? n : l.set({}, n, { fill: !1 }), i) }, _draw:
                            function (t, e, n, i) {
                                var r = this._children;
                                if (r.length) {
                                    e = e.extend({ dontStart: !0, dontFinish: !0 }), t.beginPath();
                                    for (var s = 0, a = r.length;
                                        s < a;
                                        s++)r[s].draw(t, e, i);
                                    if (!e.clip) {
                                        this._setStyles(t, e, n);
                                        var o = this._style;
                                        o.hasFill() && (t.fill(o.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), o.hasStroke() && t.stroke()
                                    }
                                }
                            }, _drawSelected:
                            function (t, e, n) {
                                for (var i = this._children, r = 0, s = i.length;
                                    r < s;
                                    r++) {
                                        var a = i[r], o = a._matrix;
                                    n[a._id] || a._drawSelected(t, o.isIdentity() ? e : e.appended(o))
                                }
                            }
                    }, new
                        function () {
                            function t(t, e) {
                                var n = t._children;
                                if (e && !n.length) throw new Error("Use a moveTo() command first");
                                return n[n.length - 1]
                            } return l.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], (
                                function (e) {
                                    this[e] =
                                        function () {
                                            var n = t(this, !0);
                                            n[e].apply(n, arguments)
                                        }
                                }), {
                                moveTo:
                                    function () {
                                        var e = t(this), n = e && e.isEmpty() ? e : new D(P.NO_INSERT);
                                        n !== e && this.addChild(n), n.moveTo.apply(n, arguments)
                                    }, moveBy:
                                    function () {
                                        var e = t(this, !0), n = e && e.getLastSegment(), i = v.read(arguments);
                                        this.moveTo(n ? i.add(n._point) : i)
                                    }, closePath:
                                    function (e) { t(this, !0).closePath(e) }
                            })
                        }, l.each(["reverse", "flatten", "simplify", "smooth"], (
                            function (t) {
                                this[t] =
                                    function (e) {
                                        for (var n, i = this._children, r = 0, s = i.length;
                                            r < s;
                                            r++)n = i[r][t](e) || n;
                                        return n
                                    }
                            }), {}));
                    B.inject(new
                        function () {
                            var t = Math.min, e = Math.max, n = Math.abs, i = { unite: { 1: !0, 2: !0 }, intersect: { 2: !0 }, subtract: { 1: !0 }, exclude: { 1: !0, "-1": !0 } };


                            function r(t) { return t._children || [t] }
                            function s(t, e) {
                                var n = t.clone(!1).reduce({ simplify: !0 }).transform(null, !0, !0);
                                if (e) {
                                    for (var i = r(n), s = 0, a = i.length;
                                        s < a;
                                        s++) { (t = i[s])._closed || t.isEmpty() || (t.closePath(1e-12), t.getFirstSegment().setHandleIn(0, 0), t.getLastSegment().setHandleOut(0, 0)) } n = n.resolveCrossings().reorient("nonzero" === n.getFillRule(), !0)
                                } return n
                            }
                            function o(t, e, n, i, r) {
                                var s = new F(P.NO_INSERT);
                                return s.addChildren(t, !0), s = s.reduce({ simplify: e }), r && 0 == r.insert || s.insertAbove(i && n.isSibling(i) && n.getIndex() < i.getIndex() ? i : n), s.copyAttributes(n, !0), s
                            }
                            function h(t) { return t.hasOverlap() || t.isCrossing() }
                            function u(t, e, n, a) {
                                if (a && (0 == a.trace || a.stroke) && /^(subtract|intersect)$/.test(n)) return c(t, e, n);
                                var u = s(t, !0), f = e && t !== e && s(e, !0), _ = i[n];
                                _[n] = !0, f && (_.subtract || _.exclude) ^ f.isClockwise() ^ u.isClockwise() && f.reverse();
                                var g, m = v(R.expand(u.getIntersections(f, h))), w = r(u), b = f && r(f), S = [], C = [];

                                function k(t) {
                                    for (var e = 0, n = t.length;
                                        e < n;
                                        e++) {
                                            var i = t[e];
                                        l.push(S, i._segments), l.push(C, i.getCurves()), i._overlapsOnly = !0
                                    }
                                }
                                function P(t) {
                                    for (var e = [], n = 0, i = t && t.length;
                                        n < i;
                                        n++)e.push(C[t[n]]);
                                    return e
                                } if (m.length) {
                                    k(w), b && k(b);
                                    for (var M = new Array(C.length), O = 0, A = C.length;
                                        O < A;
                                        O++)M[O] = C[O].getValues();
                                    var I = d.findCurveBoundsCollisions(M, M, 0, !0), T = {};

                                    for (O = 0;
                                        O < C.length;
                                        O++) {
                                            var z = C[O], E = z._path._id;
                                        (T[E] = T[E] || {})[z.getIndex()] = { hor: P(I[O].hor), ver: P(I[O].ver) }
                                    } for (O = 0, A = m.length;
                                        O < A;
                                        O++)y(m[O]._segment, u, f, T, _);
                                    for (O = 0, A = S.length;
                                        O < A;
                                        O++) {
                                            var L = S[O], N = L._intersection;
                                        L._winding || y(L, u, f, T, _), N && N._overlap || (L._path._overlapsOnly = !1)
                                    } g = x(S, _)
                                } else g = p(b ? w.concat(b) : w.slice(), (
                                    function (t) { return !!_[t] }));
                                return o(g, !0, t, e, a)
                            }
                            function c(t, e, n) {
                                var i = s(t), r = s(e), a = i.getIntersections(r, h), l = "subtract" === n, u = "divide" === n, c = {}, f = [];

                                function d(t) { if (!c[t._id] && (u || r.contains(t.getPointAt(t.getLength() / 2)) ^ l)) return f.unshift(t), c[t._id] = !0 } for (var _ = a.length - 1;
                                    _ >= 0;
                                    _--) {
                                        var g = a[_].split();
                                    g && (d(g) && g.getFirstSegment().setHandleIn(0, 0), i.getLastSegment().setHandleOut(0, 0))
                                } return d(i), o(f, !1, t, e)
                            }
                            function f(t, e) {
                                for (var n = t;
                                    n;
                                ) {
                                    if (n === e) return;
                                    n = n._previous
                                } for (;
                                    t._next && t._next !== e;
                                )t = t._next;
                                if (!t._next) {
                                    for (;
                                        e._previous;
                                    )e = e._previous;
                                    t._next = e, e._previous = t
                                }
                            }
                            function _(t) {
                                for (var e = t.length - 1;
                                    e >= 0;
                                    e--)t[e].clearHandles()
                            }
                            function p(t, e, i) {
                                var r = t && t.length;
                                if (r) {
                                    var s = l.each(t, (
                                        function (t, e) { this[t._id] = { container: null, winding: t.isClockwise() ? 1 : -1, index: e } }), {}), a = t.slice().sort((
                                            function (t, e) { return n(e.getArea()) - n(t.getArea()) })), o = a[0], h = d.findItemBoundsCollisions(a, null, g.GEOMETRIC_EPSILON);
                                    null == i && (i = o.isClockwise());
                                    for (var u = 0;
                                        u < r;
                                        u++) {
                                            var c = a[u], f = s[c._id], _ = 0, p = h[u];
                                        if (p) for (var v = null, m = p.length - 1;
                                            m >= 0;
                                            m--)if (p[m] < u) {
                                                v = v || c.getInteriorPoint();
                                                var y = a[p[m]];
                                                if (y.contains(v)) {
                                                    var x = s[y._id];
                                                    _ = x.winding, f.winding += _, f.container = x.exclude ? x.container : y;
                                                    break
                                                }
                                            } if (e(f.winding) === e(_)) f.exclude = !0, t[f.index] = null;
                                        else {
                                            var w = f.container;
                                            c.setClockwise(w ? !w.isClockwise() : i)
                                        }
                                    }
                                } return t
                            }
                            function v(t, e, n) {
                                var i, r, s, a = e && [], o = 1e-8, h = 1 - o, l = !1, u = n || [], c = n && {};


                                function d(t) { return t._path._id + "." + t._segment1._index } for (var g = (n && n.length) - 1;
                                    g >= 0;
                                    g--) { (p = n[g])._path && (c[d(p)] = !0) } for (g = t.length - 1;
                                    g >= 0;
                                    g--) {
                                        var p, v, m = t[g], y = m._time, x = y, w = e && !e(m);
                                    if ((p = m._curve) && (p !== r ? (l = !p.hasHandles() || c && c[d(p)], i = [], s = null, r = p) : s >= o && (y /= s)), w) i && i.push(m);
                                    else {
                                        if (e && a.unshift(m), s = x, y < o) v = p._segment1;
                                        else if (y > h) v = p._segment2;
                                        else {
                                            var b = p.divideAtTime(y, !0);
                                            l && u.push(p, b), v = b._segment1;
                                            for (var S = i.length - 1;
                                                S >= 0;
                                                S--) {
                                                    var C = i[S];
                                                C._time = (C._time - y) / (1 - y)
                                            }
                                        } m._setSegment(v);
                                        var k = v._intersection, P = m._intersection;
                                        if (k) {
                                            f(k, P);
                                            for (var M = k;
                                                M;
                                            )f(M._intersection, k), M = M._next
                                        } else v._intersection = P
                                    }
                                } return n || _(u), a || t
                            }
                            function m(i, r, s, a, o) {
                                var h, l, u = Array.isArray(r) ? r : r[s ? "hor" : "ver"], c = s ? 1 : 0, f = 1 ^ c, d = [i.x, i.y], _ = d[c], g = d[f], p = 1e-6, v = _ - 1e-9, y = _ + 1e-9, x = 0, w = 0, b = 0, S = 0, C = !1, k = !1, P = 1, M = [];

                                function O(n) {
                                    var l = n[f + 0], u = n[f + 6];
                                    if (!(g < t(l, u) || g > e(l, u))) {
                                        var d = n[c + 0], x = n[c + 2], w = n[c + 4], k = n[c + 6];
                                        if (l !== u) {
                                            var O = g === l ? 0 : g === u || v > e(d, x, w, k) || y < t(d, x, w, k) ? 1 : j.solveCubic(n, f, g, M, 0, 1) > 0 ? M[0] : 1, A = 0 === O ? d : 1 === O ? k : j.getPoint(n, O)[s ? "y" : "x"], I = l > u ? 1 : -1, T = h[f] > h[f + 6] ? 1 : -1, z = h[c + 6];
                                            return g !== l ? (A < v ? b += I : A > y ? S += I : C = !0, A > _ - p && A < _ + p && (P /= 2)) : (I !== T ? d < v ? b += I : d > y && (S += I) : d != z && (z < y && A > y ? (S += I, C = !0) : z > v && A < v && (b += I, C = !0)), P /= 4), h = n, !o && A > v && A < y && 0 === j.getTangent(n, O)[s ? "x" : "y"] && m(i, r, !s, a, !0)
                                        } (d < y && k > v || k < y && d > v) && (C = !0)
                                    }
                                }
                                function A(n) {
                                    var i = n[f + 0], r = n[f + 2], a = n[f + 4], o = n[f + 6];
                                    if (g <= e(i, r, a, o) && g >= t(i, r, a, o)) for (var h, l = n[c + 0], u = n[c + 2], d = n[c + 4], _ = n[c + 6], p = v > e(l, u, d, _) || y < t(l, u, d, _) ? [n] : j.getMonoCurves(n, s), m = 0, x = p.length;
                                        m < x;
                                        m++)if (h = O(p[m])) return h
                                } for (var I = 0, T = u.length;
                                    I < T;
                                    I++) {
                                        var z, E = u[I], L = E._path, N = E.getValues();
                                    if (!(I && u[I - 1]._path === L || (h = null, L._closed || (l = j.getValues(L.getLastCurve().getSegment2(), E.getSegment1(), null, !a))[f] !== l[f + 6] && (h = l), h))) {
                                        h = N;
                                        for (var R = L.getLastCurve();
                                            R && R !== E;
                                        ) {
                                            var B = R.getValues();
                                            if (B[f] !== B[f + 6]) {
                                                h = B;
                                                break
                                            } R = R.getPrevious()
                                        }
                                    } if (z = A(N)) return z;
                                    if (I + 1 === T || u[I + 1]._path !== L) {
                                        if (l && (z = A(l))) return z;
                                        !C || b || S || (b = S = L.isClockwise(a) ^ s ? 1 : -1), x += b, w += S, b = S = 0, C && (k = !0, C = !1), l = null
                                    }
                                } return x = n(x), w = n(w), { winding: e(x, w), windingL: x, windingR: w, quality: P, onPath: k }
                            }
                            function y(t, e, i, r, s) {
                                var a = [], o = t, h = 0;
                                do {
                                    if (y = t.getCurve()) {
                                        var l = y.getLength();
                                        a.push({ segment: t, curve: y, length: l }), h += l
                                    } t = t.getNext()
                                } while (t && !t._intersection && t !== o);
                                for (var u = [.5, .25, .75], c = { winding: 0, quality: -1 }, f = 0;
                                    f < u.length && c.quality < .5;
                                    f++) {
                                        l = h * u[f];
                                    for (var d = 0, _ = a.length;
                                        d < _;
                                        d++) {
                                            var p = a[d], v = p.length;
                                        if (l <= v) {
                                            var y, x = (y = p.curve)._path, w = x._parent, b = w instanceof F ? w : x, S = g.clamp(y.getTimeAt(l), .001, .999), C = y.getPointAtTime(S), k = n(y.getTangentAtTime(S).y) < Math.SQRT1_2, P = null;
                                            if (s.subtract && i) {
                                                var M = (b === e ? i : e)._getWinding(C, k, !0);
                                                if (b === e && M.winding || b === i && !M.winding) {
                                                    if (M.quality < 1) continue;
                                                    P = { winding: 0, quality: 1 }
                                                }
                                            } (P = P || m(C, r[x._id][y.getIndex()], k, !0)).quality > c.quality && (c = P);
                                            break
                                        } l -= v
                                    }
                                } for (d = a.length - 1;
                                    d >= 0;
                                    d--)a[d].segment._winding = c
                            }
                            function x(t, e) {
                                var n, i = [];

                                function r(t) {
                                    var n;
                                    return !(!t || t._visited || e && (!e[(n = t._winding || {}).winding] || e.unite && 2 === n.winding && n.windingL && n.windingR))
                                }
                                function s(t) {
                                    if (t) for (var e = 0, i = n.length;
                                        e < i;
                                        e++)if (t === n[e]) return !0;
                                    return !1
                                }
                                function a(t) {
                                    for (var e = t._segments, n = 0, i = e.length;
                                        n < i;
                                        n++)e[n]._visited = !0
                                }
                                function o(t, e) {
                                    var i = t._intersection, a = i, o = [];

                                    function h(i, a) {
                                        for (;
                                            i && i !== a;
                                        ) {
                                            var h = i._segment, l = h && h._path;
                                            if (l) {
                                                var u = h.getNext() || l.getFirstSegment(), c = u._intersection;
                                                h !== t && (s(h) || s(u) || u && r(h) && (r(u) || c && r(c._segment))) && o.push(h), e && n.push(h)
                                            } i = i._next
                                        }
                                    } if (e && (n = [t]), i) {
                                        for (h(i);
                                            i && i._previous;
                                        )i = i._previous;
                                        h(i, a)
                                    } return o
                                } t.sort((
                                    function (t, e) {
                                        var n = t._intersection, i = e._intersection, r = !(!n || !n._overlap), s = !(!i || !i._overlap), a = t._path, o = e._path;
                                        return r ^ s ? r ? 1 : -1 : !n ^ !i ? n ? 1 : -1 : a !== o ? a._id - o._id : t._index - e._index
                                    }));
                                for (var h = 0, l = t.length;
                                    h < l;
                                    h++) {
                                        var u, c, f, d = t[h], _ = r(d), g = null, p = !1, v = !0, m = [];
                                    if (_ && d._path._overlapsOnly) {
                                        var y = d._path, x = d._intersection._segment._path;
                                        y.compare(x) && (y.getArea() && i.push(y.clone(!1)), a(y), a(x), _ = !1)
                                    } for (;
                                        _;
                                    ) {
                                        var w = !g, b = o(d, w), S = b.shift(), C = !(p = !w && (s(d) || s(S))) && S;
                                        if (w && (g = new D(P.NO_INSERT), u = null), p) {
                                            (d.isFirst() || d.isLast()) && (v = d._path._closed), d._visited = !0;
                                            break
                                        } if (C && u && (m.push(u), u = null), u || (C && b.push(d), u = { start: g._segments.length, crossings: b, visited: c = [], handleIn: f }), C && (d = S), !r(d)) {
                                            g.removeSegments(u.start);
                                            for (var k = 0, M = c.length;
                                                k < M;
                                                k++)c[k]._visited = !1;
                                            c.length = 0;
                                            do { (d = u && u.crossings.shift()) && d._path || (d = null, (u = m.pop()) && (c = u.visited, f = u.handleIn)) } while (u && !r(d));
                                            if (!d) break
                                        } var O = d.getNext();
                                        g.add(new L(d._point, f, O && d._handleOut)), d._visited = !0, c.push(d), d = O || d._path.getFirstSegment(), f = O && O._handleIn
                                    } p && (v && (g.getFirstSegment().setHandleIn(f), g.setClosed(v)), 0 !== g.getArea() && i.push(g))
                                } return i
                            } return {
                                _getWinding:
                                    function (t, e, n) { return m(t, this.getCurves(), e, n) }, unite:
                                    function (t, e) { return u(this, t, "unite", e) }, intersect:
                                    function (t, e) { return u(this, t, "intersect", e) }, subtract:
                                    function (t, e) { return u(this, t, "subtract", e) }, exclude:
                                    function (t, e) { return u(this, t, "exclude", e) }, divide:
                                    function (t, e) { return e && (0 == e.trace || e.stroke) ? c(this, t, "divide") : o([this.subtract(t, e), this.intersect(t, e)], !0, this, t, e) }, resolveCrossings:
                                    function () {
                                        var t = this._children, e = t || [this];

                                        function n(t, e) {
                                            var n = t && t._intersection;
                                            return n && n._overlap && n._path === e
                                        } var i = !1, r = !1, s = this.getIntersections(null, (
                                            function (t) { return t.hasOverlap() && (i = !0) || t.isCrossing() && (r = !0) })), a = i && r && [];
                                        if (s = R.expand(s), i) for (var o = v(s, (
                                            function (t) { return t.hasOverlap() }), a), h = o.length - 1;
                                            h >= 0;
                                            h--) {
                                                var u = o[h], c = u._path, f = u._segment, d = f.getPrevious(), g = f.getNext();
                                            n(d, c) && n(g, c) && (f.remove(), d._handleOut._set(0, 0), g._handleIn._set(0, 0), d === f || d.getCurve().hasLength() || (g._handleIn.set(d._handleIn), d.remove()))
                                        } r && (v(s, i &&
                                            function (t) {
                                                var e = t.getCurve(), n = t.getSegment(), i = t._intersection, r = i._curve, s = i._segment;
                                                if (e && r && e._path && r._path) return !0;
                                                n && (n._intersection = null), s && (s._intersection = null)
                                            }, a), a && _(a), e = x(l.each(e, (
                                                function (t) { l.push(this, t._segments) }), [])));
                                        var p, m = e.length;
                                        return m > 1 && t ? (e !== t && this.setChildren(e), p = this) : 1 !== m || t || (e[0] !== this && this.setSegments(e[0].removeSegments()), p = this), p || ((p = new F(P.NO_INSERT)).addChildren(e), (p = p.reduce()).copyAttributes(this), this.replaceWith(p)), p
                                    }, reorient:
                                    function (t, e) {
                                        var n = this._children;
                                        return n && n.length ? this.setChildren(p(this.removeChildren(), (
                                            function (e) { return !!(t ? e : 1 & e) }), e)) : e !== a && this.setClockwise(e), this
                                    }, getInteriorPoint:
                                    function () {
                                        var n = this.getBounds().getCenter(!0);
                                        if (!this.contains(n)) {
                                            for (var i = this.getCurves(), r = n.y, s = [], a = [], o = 0, h = i.length;
                                                o < h;
                                                o++) {
                                                    var l = i[o].getValues(), u = l[1], c = l[3], f = l[5], d = l[7];
                                                if (r >= t(u, c, f, d) && r <= e(u, c, f, d)) for (var _ = j.getMonoCurves(l), g = 0, p = _.length;
                                                    g < p;
                                                    g++) {
                                                        var v = _[g], m = v[1], y = v[7];
                                                    if (m !== y && (r >= m && r <= y || r >= y && r <= m)) {
                                                        var x = r === m ? v[0] : r === y ? v[6] : 1 === j.solveCubic(v, 1, r, a, 0, 1) ? j.getPoint(v, a[0]).x : (v[0] + v[6]) / 2;
                                                        s.push(x)
                                                    }
                                                }
                                            } s.length > 1 && (s.sort((
                                                function (t, e) { return t - e })), n.x = (s[0] + s[1]) / 2)
                                        } return n
                                    }
                            }
                        });
                    var q = l.extend({
                        _class: "PathFlattener", initialize:
                            function (t, e, n, i, r) {
                                var s, a = [], o = [], h = 0, l = 1 / (n || 32), u = t._segments, c = u[0];

                                function f(t, e) {
                                    var n = j.getValues(t, e, r);
                                    a.push(n), d(n, t._index, 0, 1)
                                }
                                function d(t, n, r, s) {
                                    if (!(s - r > l) || i && j.isStraight(t) || j.isFlatEnough(t, e || .25)) {
                                        var a = t[6] - t[0], u = t[7] - t[1], c = Math.sqrt(a * a + u * u);
                                        c > 0 && (h += c, o.push({ offset: h, curve: t, index: n, time: s }))
                                    } else {
                                        var f = j.subdivide(t, .5), _ = (r + s) / 2;
                                        d(f[0], n, r, _), d(f[1], n, _, s)
                                    }
                                } for (var _ = 1, g = u.length;
                                    _ < g;
                                    _++)f(c, s = u[_]), c = s;
                                t._closed && f(s || c, u[0]), this.curves = a, this.parts = o, this.length = h, this.index = 0
                            }, _get:
                            function (t) {
                                for (var e, n = this.parts, i = n.length, r = this.index;
                                    e = r, r && !(n[--r].offset < t);
                                );
                                for (;
                                    e < i;
                                    e++) {
                                        var s = n[e];
                                    if (s.offset >= t) {
                                        this.index = e;
                                        var a = n[e - 1], o = a && a.index === s.index ? a.time : 0, h = a ? a.offset : 0;
                                        return { index: s.index, time: o + (s.time - o) * (t - h) / (s.offset - h) }
                                    }
                                } return { index: n[i - 1].index, time: 1 }
                            }, drawPart:
                            function (t, e, n) {
                                for (var i = this._get(e), r = this._get(n), s = i.index, a = r.index;
                                    s <= a;
                                    s++) {
                                        var o = j.getPart(this.curves[s], s === i.index ? i.time : 0, s === r.index ? r.time : 1);
                                    s === i.index && t.moveTo(o[0], o[1]), t.bezierCurveTo.apply(t, o.slice(2))
                                }
                            }
                    }, l.each(j._evaluateMethods, (
                        function (t) {
                            this[t + "At"] =
                                function (e) {
                                    var n = this._get(e);
                                    return j[t](this.curves[n.index], n.time)
                                }
                        }), {})), V = l.extend({
                            initialize:
                                function (t) {
                                    for (var e, n = this.points = [], i = t._segments, r = t._closed, s = 0, a = i.length;
                                        s < a;
                                        s++) {
                                            var o = i[s].point;
                                        e && e.equals(o) || n.push(e = o.clone())
                                    } r && (n.unshift(n[n.length - 1]), n.push(n[1])), this.closed = r
                                }, fit:
                                function (t) {
                                    var e = this.points, n = e.length, i = null;
                                    return n > 0 && (i = [new L(e[0])], n > 1 && (this.fitCubic(i, t, 0, n - 1, e[1].subtract(e[0]), e[n - 2].subtract(e[n - 1])), this.closed && (i.shift(), i.pop()))), i
                                }, fitCubic:
                                function (t, e, n, i, r, s) {
                                    var a = this.points;
                                    if (i - n != 1) {
                                        for (var o, h = this.chordLengthParameterize(n, i), l = Math.max(e, e * e), u = !0, c = 0;
                                            c <= 4;
                                            c++) {
                                                var f = this.generateBezier(n, i, h, r, s), d = this.findMaxError(n, i, f, h);
                                            if (d.error < e && u) return void this.addCurve(t, f);
                                            if (o = d.index, d.error >= l) break;
                                            u = this.reparameterize(n, i, h, f), l = d.error
                                        } var _ = a[o - 1].subtract(a[o + 1]);
                                        this.fitCubic(t, e, n, o, r, _), this.fitCubic(t, e, o, i, _.negate(), s)
                                    } else {
                                        var g = a[n], p = a[i], v = g.getDistance(p) / 3;
                                        this.addCurve(t, [g, g.add(r.normalize(v)), p.add(s.normalize(v)), p])
                                    }
                                }, addCurve:
                                function (t, e) { t[t.length - 1].setHandleOut(e[1].subtract(e[0])), t.push(new L(e[3], e[2].subtract(e[3]))) }, generateBezier:
                                function (t, e, n, i, r) {
                                    for (var s = 1e-12, a = Math.abs, o = this.points, h = o[t], l = o[e], u = [[0, 0], [0, 0]], c = [0, 0], f = 0, d = e - t + 1;
                                        f < d;
                                        f++) {
                                            var _ = n[f], g = 1 - _, p = 3 * _ * g, v = g * g * g, m = p * g, y = p * _, x = _ * _ * _, w = i.normalize(m), b = r.normalize(y), S = o[t + f].subtract(h.multiply(v + m)).subtract(l.multiply(y + x));
                                        u[0][0] += w.dot(w), u[0][1] += w.dot(b), u[1][0] = u[0][1], u[1][1] += b.dot(b), c[0] += w.dot(S), c[1] += b.dot(S)
                                    } var C, k, P = u[0][0] * u[1][1] - u[1][0] * u[0][1];
                                    if (a(P) > s) {
                                        var M = u[0][0] * c[1] - u[1][0] * c[0];
                                        C = (c[0] * u[1][1] - c[1] * u[0][1]) / P, k = M / P
                                    } else {
                                        var O = u[0][0] + u[0][1], A = u[1][0] + u[1][1];
                                        C = k = a(O) > s ? c[0] / O : a(A) > s ? c[1] / A : 0
                                    } var I, T, z = l.getDistance(h), E = s * z;
                                    if (C < E || k < E) C = k = z / 3;
                                    else {
                                        var L = l.subtract(h);
                                        I = i.normalize(C), T = r.normalize(k), I.dot(L) - T.dot(L) > z * z && (C = k = z / 3, I = T = null)
                                    } return [h, h.add(I || i.normalize(C)), l.add(T || r.normalize(k)), l]
                                }, reparameterize:
                                function (t, e, n, i) {
                                    for (var r = t;
                                        r <= e;
                                        r++)n[r - t] = this.findRoot(i, this.points[r], n[r - t]);
                                    r = 1;
                                    for (var s = n.length;
                                        r < s;
                                        r++)if (n[r] <= n[r - 1]) return !1;
                                    return !0
                                }, findRoot:
                                function (t, e, n) {
                                    for (var i = [], r = [], s = 0;
                                        s <= 2;
                                        s++)i[s] = t[s + 1].subtract(t[s]).multiply(3);
                                    for (s = 0;
                                        s <= 1;
                                        s++)r[s] = i[s + 1].subtract(i[s]).multiply(2);
                                    var a = this.evaluate(3, t, n), o = this.evaluate(2, i, n), h = this.evaluate(1, r, n), l = a.subtract(e), u = o.dot(o) + l.dot(h);
                                    return g.isMachineZero(u) ? n : n - l.dot(o) / u
                                }, evaluate:
                                function (t, e, n) {
                                    for (var i = e.slice(), r = 1;
                                        r <= t;
                                        r++)for (var s = 0;
                                            s <= t - r;
                                            s++)i[s] = i[s].multiply(1 - n).add(i[s + 1].multiply(n));
                                    return i[0]
                                }, chordLengthParameterize:
                                function (t, e) {
                                    for (var n = [0], i = t + 1;
                                        i <= e;
                                        i++)n[i - t] = n[i - t - 1] + this.points[i].getDistance(this.points[i - 1]);
                                    i = 1;
                                    for (var r = e - t;
                                        i <= r;
                                        i++)n[i] /= n[r];
                                    return n
                                }, findMaxError:
                                function (t, e, n, i) {
                                    for (var r = Math.floor((e - t + 1) / 2), s = 0, a = t + 1;
                                        a < e;
                                        a++) {
                                            var o = this.evaluate(3, n, i[a - t]).subtract(this.points[a]), h = o.x * o.x + o.y * o.y;
                                        h >= s && (s = h, r = a)
                                    } return { error: s, index: r }
                                }
                        }), $ = P.extend({
                            _class: "TextItem", _applyMatrix: !1, _canApplyMatrix: !1, _serializeFields: { content: null }, _boundsOptions: { stroke: !1, handle: !1 }, initialize:
                                function (t) {
                                    this._content = "", this._lines = [];
                                    var e = t && l.isPlainObject(t) && t.x === a && t.y === a;
                                    this._initialize(e && t, !e && v.read(arguments))
                                }, _equals:
                                function (t) { return this._content === t._content }, copyContent:
                                function (t) { this.setContent(t._content) }, getContent:
                                function () { return this._content }, setContent:
                                function (t) { this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/gm), this._changed(521) }, isEmpty:
                                function () { return !this._content }, getCharacterStyle: "#getStyle", setCharacterStyle: "#setStyle", getParagraphStyle: "#getStyle", setParagraphStyle: "#setStyle"
                        }), H = $.extend({
                            _class: "PointText", initialize:
                                function () { $.apply(this, arguments) }, getPoint:
                                function () {
                                    var t = this._matrix.getTranslation();
                                    return new m(t.x, t.y, this, "setPoint")
                                }, setPoint:
                                function () {
                                    var t = v.read(arguments);
                                    this.translate(t.subtract(this._matrix.getTranslation()))
                                }, _draw:
                                function (t, e, n) {
                                    if (this._content) {
                                        this._setStyles(t, e, n);
                                        var i = this._lines, r = this._style, s = r.hasFill(), a = r.hasStroke(), o = r.getLeading(), h = t.shadowColor;
                                        t.font = r.getFontStyle(), t.textAlign = r.getJustification();
                                        for (var l = 0, u = i.length;
                                            l < u;
                                            l++) {
                                                t.shadowColor = h;
                                            var c = i[l];
                                            s && (t.fillText(c, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), a && t.strokeText(c, 0, 0), t.translate(0, o)
                                        }
                                    }
                                }, _getBounds:
                                function (t, e) {
                                    var n = this._style, i = this._lines, r = i.length, s = n.getJustification(), a = n.getLeading(), o = this.getView().getTextWidth(n.getFontStyle(), i), h = 0;
                                    "left" !== s && (h -= o / ("center" === s ? 2 : 1));
                                    var l = new w(h, r ? -.75 * a : 0, o, r * a);
                                    return t ? t._transformBounds(l, l) : l
                                }
                        }), W = l.extend(new
                            function () {
                                var t, e = { gray: ["gray"], rgb: ["red", "green", "blue"], hsb: ["hue", "saturation", "brightness"], hsl: ["hue", "saturation", "lightness"], gradient: ["gradient", "origin", "destination", "highlight"] }, n = {}, i = { transparent: [0, 0, 0, 0] };

                                var r = [[0, 3, 1], [2, 0, 1], [1, 0, 3], [1, 2, 0], [3, 1, 0], [0, 1, 2]], s = {
                                    "rgb-hsb":
                                        function (t, e, n) {
                                            var i = Math.max(t, e, n), r = i - Math.min(t, e, n);
                                            return [0 === r ? 0 : 60 * (i == t ? (e - n) / r + (e < n ? 6 : 0) : i == e ? (n - t) / r + 2 : (t - e) / r + 4), 0 === i ? 0 : r / i, i]
                                        }, "hsb-rgb":
                                        function (t, e, n) {
                                            var i, s = (t = (t / 60 % 6 + 6) % 6) - (i = Math.floor(t)), a = [n, n * (1 - e), n * (1 - e * s), n * (1 - e * (1 - s))];
                                            return [a[(i = r[i])[0]], a[i[1]], a[i[2]]]
                                        }, "rgb-hsl":
                                        function (t, e, n) {
                                            var i = Math.max(t, e, n), r = Math.min(t, e, n), s = i - r, a = 0 === s, o = (i + r) / 2;
                                            return [a ? 0 : 60 * (i == t ? (e - n) / s + (e < n ? 6 : 0) : i == e ? (n - t) / s + 2 : (t - e) / s + 4), a ? 0 : o < .5 ? s / (i + r) : s / (2 - i - r), o]
                                        }, "hsl-rgb":
                                        function (t, e, n) {
                                            if (0 === e) return [n, n, n];
                                            for (var i = [(t = (t / 360 % 1 + 1) % 1) + 1 / 3, t, t - 1 / 3], r = n < .5 ? n * (1 + e) : n + e - n * e, s = 2 * n - r, a = [], o = 0;
                                                o < 3;
                                                o++) {
                                                    var h = i[o];
                                                h < 0 && (h += 1), h > 1 && (h -= 1), a[o] = 6 * h < 1 ? s + 6 * (r - s) * h : 2 * h < 1 ? r : 3 * h < 2 ? s + (r - s) * (2 / 3 - h) * 6 : s
                                            } return a
                                        }, "rgb-gray":
                                        function (t, e, n) { return [.2989 * t + .587 * e + .114 * n] }, "gray-rgb":
                                        function (t) { return [t, t, t] }, "gray-hsb":
                                        function (t) { return [0, 0, t] }, "gray-hsl":
                                        function (t) { return [0, 0, t] }, "gradient-rgb":
                                        function () { return [] }, "rgb-gradient":
                                        function () { return [] }
                                };

                                return l.each(e, (
                                    function (t, i) {
                                        n[i] = [], l.each(t, (
                                            function (t, r) {
                                                var s = l.capitalize(t), a = /^(hue|saturation)$/.test(t), o = n[i][r] = "gradient" === i ? "gradient" === t ?
                                                    function (t) {
                                                        var e = this._components[0];
                                                        return e !== (t = Z.read(Array.isArray(t) ? t : arguments, 0, { readNull: !0 })) && (e && e._removeOwner(this), t && t._addOwner(this)), t
                                                    } :
                                                    function () { return v.read(arguments, 0, { readNull: "highlight" === t, clone: !0 }) } :
                                                    function (t) { return null == t || isNaN(t) ? 0 : +t };

                                                this["get" + s] =
                                                    function () { return this._type === i || a && /^hs[bl]$/.test(this._type) ? this._components[r] : this._convert(i)[r] }, this["set" + s] =
                                                    function (t) { this._type === i || a && /^hs[bl]$/.test(this._type) || (this._components = this._convert(i), this._properties = e[i], this._type = i), this._components[r] = o.call(this, t), this._changed() }
                                            }), this)
                                    }), {
                                    _class: "Color", _readIndex: !0, initialize:
                                        function r(s) {
                                            var a, h, u, c, f = arguments, d = this.__read, _ = 0;
                                            Array.isArray(s) && (s = (f = s)[0]);
                                            var g = null != s && typeof s;
                                            if ("string" === g && s in e && (a = s, s = f[1], Array.isArray(s) ? (h = s, u = f[2]) : (d && (_ = 1), f = l.slice(f, 1), g = typeof s)), !h) {
                                                if (c = "number" === g ? f : "object" === g && null != s.length ? s : null) {
                                                    a || (a = c.length >= 3 ? "rgb" : "gray");
                                                    var p = e[a].length;
                                                    u = c[p], d && (_ += c === arguments ? p + (null != u ? 1 : 0) : 1), c.length > p && (c = l.slice(c, 0, p))
                                                } else if ("string" === g) {
                                                    var v =
                                                        function (e) {
                                                            var n, r = e.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i) || e.match(/^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i), s = "rgb";
                                                            if (r) {
                                                                var a = r[4] ? 4 : 3;
                                                                n = new Array(a);
                                                                for (var h = 0;
                                                                    h < a;
                                                                    h++) {
                                                                        var l = r[h + 1];
                                                                    n[h] = parseInt(1 == l.length ? l + l : l, 16) / 255
                                                                }
                                                            } else if (r = e.match(/^(rgb|hsl)a?\((.*)\)$/)) {
                                                                s = r[1], n = r[2].trim().split(/[,\s]+/g);
                                                                for (var u = "hsl" === s, c = (h = 0, Math.min(n.length, 4));
                                                                    h < c;
                                                                    h++) {
                                                                        var f = n[h];
                                                                    if (l = parseFloat(f), u) if (0 === h) {
                                                                        var d = f.match(/([a-z]*)$/)[1];
                                                                        l *= { turn: 360, rad: 180 / Math.PI, grad: .9 }[d] || 1
                                                                    } else h < 3 && (l /= 100);
                                                                    else h < 3 && (l /= /%$/.test(f) ? 100 : 255);
                                                                    n[h] = l
                                                                }
                                                            } else {
                                                                var _ = i[e];
                                                                if (!_) if (o) {
                                                                    t || ((t = at.getContext(1, 1, { willReadFrequently: !0 })).globalCompositeOperation = "copy"), t.fillStyle = "rgba(0,0,0,0)", t.fillStyle = e, t.fillRect(0, 0, 1, 1);
                                                                    var g = t.getImageData(0, 0, 1, 1).data;
                                                                    _ = i[e] = [g[0] / 255, g[1] / 255, g[2] / 255]
                                                                } else _ = [0, 0, 0];
                                                                n = _.slice()
                                                            } return [s, n]
                                                        }(s);
                                                    a = v[0], 4 === (h = v[1]).length && (u = h[3], h.length--)
                                                } else if ("object" === g) if (s.constructor === r) {
                                                    if (a = s._type, h = s._components.slice(), u = s._alpha, "gradient" === a) for (var m = 1, y = h.length;
                                                        m < y;
                                                        m++) {
                                                            var x = h[m];
                                                        x && (h[m] = x.clone())
                                                    }
                                                } else if (s.constructor === Z) a = "gradient", c = f;
                                                else {
                                                    var w = e[a = "hue" in s ? "lightness" in s ? "hsl" : "hsb" : "gradient" in s || "stops" in s || "radial" in s ? "gradient" : "gray" in s ? "gray" : "rgb"], b = n[a];
                                                    this._components = h = [];
                                                    for (m = 0, y = w.length;
                                                        m < y;
                                                        m++) { null == (S = s[w[m]]) && !m && "gradient" === a && "stops" in s && (S = { stops: s.stops, radial: s.radial }), null != (S = b[m].call(this, S)) && (h[m] = S) } u = s.alpha
                                                } d && a && (_ = 1)
                                            } if (this._type = a || "rgb", !h) {
                                                this._components = h = [];
                                                for (m = 0, y = (b = n[this._type]).length;
                                                    m < y;
                                                    m++) {
                                                        var S;
                                                    null != (S = b[m].call(this, c && c[m])) && (h[m] = S)
                                                }
                                            } return this._components = h, this._properties = e[this._type], this._alpha = u, d && (this.__read = _), this
                                        }, set: "#initialize", _serialize:
                                        function (t, e) {
                                            var n = this.getComponents();
                                            return l.serialize(/^(gray|rgb)$/.test(this._type) ? n : [this._type].concat(n), t, !0, e)
                                        }, _changed:
                                        function () { this._canvasStyle = null, this._owner && (this._setter ? this._owner[this._setter](this) : this._owner._changed(129)) }, _convert:
                                        function (t) {
                                            var e;
                                            return this._type === t ? this._components.slice() : (e = s[this._type + "-" + t]) ? e.apply(this, this._components) : s["rgb-" + t].apply(this, s[this._type + "-rgb"].apply(this, this._components))
                                        }, convert:
                                        function (t) { return new W(t, this._convert(t), this._alpha) }, getType:
                                        function () { return this._type }, setType:
                                        function (t) { this._components = this._convert(t), this._properties = e[t], this._type = t }, getComponents:
                                        function () {
                                            var t = this._components.slice();
                                            return null != this._alpha && t.push(this._alpha), t
                                        }, getAlpha:
                                        function () { return null != this._alpha ? this._alpha : 1 }, setAlpha:
                                        function (t) { this._alpha = null == t ? null : Math.min(Math.max(t, 0), 1), this._changed() }, hasAlpha:
                                        function () { return null != this._alpha }, equals:
                                        function (t) {
                                            var e = l.isPlainValue(t, !0) ? W.read(arguments) : t;
                                            return e === this || e && this._class === e._class && this._type === e._type && this.getAlpha() === e.getAlpha() && l.equals(this._components, e._components) || !1
                                        }, toString:
                                        function () {
                                            for (var t = this._properties, e = [], n = "gradient" === this._type, i = _.instance, r = 0, s = t.length;
                                                r < s;
                                                r++) {
                                                    var a = this._components[r];
                                                null != a && e.push(t[r] + ": " + (n ? a : i.number(a)))
                                            } return null != this._alpha && e.push("alpha: " + i.number(this._alpha)), "{ " + e.join(", ") + " }"
                                        }, toCSS:
                                        function (t) {
                                            var e = this._convert("rgb"), n = t || null == this._alpha ? 1 : this._alpha;

                                            function i(t) { return Math.round(255 * (t < 0 ? 0 : t > 1 ? 1 : t)) } return e = [i(e[0]), i(e[1]), i(e[2])], n < 1 && e.push(n < 0 ? 0 : n), t ? "#" + ((1 << 24) + (e[0] << 16) + (e[1] << 8) + e[2]).toString(16).slice(1) : (4 == e.length ? "rgba(" : "rgb(") + e.join(",") + ")"
                                        }, toCanvasStyle:
                                        function (t, e) {
                                            if (this._canvasStyle) return this._canvasStyle;
                                            if ("gradient" !== this._type) return this._canvasStyle = this.toCSS();
                                            var n, i = this._components, r = i[0], s = r._stops, a = i[1], o = i[2], h = i[3], l = e && e.inverted();
                                            if (l && (a = l._transformPoint(a), o = l._transformPoint(o), h && (h = l._transformPoint(h))), r._radial) {
                                                var u = o.getDistance(a);
                                                if (h) {
                                                    var c = h.subtract(a);
                                                    c.getLength() > u && (h = a.add(c.normalize(u - .1)))
                                                } var f = h || a;
                                                n = t.createRadialGradient(f.x, f.y, 0, a.x, a.y, u)
                                            } else n = t.createLinearGradient(a.x, a.y, o.x, o.y);
                                            for (var d = 0, _ = s.length;
                                                d < _;
                                                d++) {
                                                    var g = s[d], p = g._offset;
                                                n.addColorStop(p ?? d / (_ - 1), g._color.toCanvasStyle())
                                            } return this._canvasStyle = n
                                        }, transform:
                                        function (t) {
                                            if ("gradient" === this._type) {
                                                for (var e = this._components, n = 1, i = e.length;
                                                    n < i;
                                                    n++) {
                                                        var r = e[n];
                                                    t._transformPoint(r, r, !0)
                                                } this._changed()
                                            }
                                        }, statics: {
                                            _types: e, random:
                                                function () {
                                                    var t = Math.random;
                                                    return new W(t(), t(), t())
                                                }, _setOwner:
                                                function (t, e, n) { return t && (t._owner && e && t._owner !== e && (t = t.clone()), !t._owner ^ !e && (t._owner = e || null, t._setter = n || null)), t }
                                        }
                                })
                            }, new
                            function () {
                                return l.each({
                                    add:
                                        function (t, e) { return t + e }, subtract:
                                        function (t, e) { return t - e }, multiply:
                                        function (t, e) { return t * e }, divide:
                                        function (t, e) { return t / e }
                                }, (
                                    function (t, e) {
                                        this[e] =
                                            function (e) {
                                                e = W.read(arguments);
                                                for (var n = this._type, i = this._components, r = e._convert(n), s = 0, a = i.length;
                                                    s < a;
                                                    s++)r[s] = t(i[s], r[s]);
                                                return new W(n, r, null != this._alpha ? t(this._alpha, e.getAlpha()) : null)
                                            }
                                    }), {})
                            }), Z = l.extend({
                                _class: "Gradient", initialize:
                                    function (t, e) { this._id = p.get(), t && l.isPlainObject(t) && (this.set(t), t = e = null), null == this._stops && this.setStops(t || ["white", "black"]), null == this._radial && this.setRadial("string" == typeof e && "radial" === e || e || !1) }, _serialize:
                                    function (t, e) {
                                        return e.add(this, (
                                            function () { return l.serialize([this._stops, this._radial], t, !0, e) }))
                                    }, _changed:
                                    function () {
                                        for (var t = 0, e = this._owners && this._owners.length;
                                            t < e;
                                            t++)this._owners[t]._changed()
                                    }, _addOwner:
                                    function (t) { this._owners || (this._owners = []), this._owners.push(t) }, _removeOwner:
                                    function (t) {
                                        var e = this._owners ? this._owners.indexOf(t) : -1;
                                        -1 != e && (this._owners.splice(e, 1), this._owners.length || (this._owners = a))
                                    }, clone:
                                    function () {
                                        for (var t = [], e = 0, n = this._stops.length;
                                            e < n;
                                            e++)t[e] = this._stops[e].clone();
                                        return new Z(t, this._radial)
                                    }, getStops:
                                    function () { return this._stops }, setStops:
                                    function (t) {
                                        if (t.length < 2) throw new Error("Gradient stop list needs to contain at least two stops.");
                                        var e = this._stops;
                                        if (e) for (var n = 0, i = e.length;
                                            n < i;
                                            n++)e[n]._owner = a;
                                        for (n = 0, i = (e = this._stops = U.readList(t, 0, { clone: !0 })).length;
                                            n < i;
                                            n++)e[n]._owner = this;
                                        this._changed()
                                    }, getRadial:
                                    function () { return this._radial }, setRadial:
                                    function (t) { this._radial = t, this._changed() }, equals:
                                    function (t) {
                                        if (t === this) return !0;
                                        if (t && this._class === t._class) {
                                            var e = this._stops, n = t._stops, i = e.length;
                                            if (i === n.length) {
                                                for (var r = 0;
                                                    r < i;
                                                    r++)if (!e[r].equals(n[r])) return !1;
                                                return !0
                                            }
                                        } return !1
                                    }
                            }), U = l.extend({
                                _class: "GradientStop", initialize:
                                    function (t, e) {
                                        var n = t, i = e;
                                        "object" == typeof t && e === a && (Array.isArray(t) && "number" != typeof t[0] ? (n = t[0], i = t[1]) : ("color" in t || "offset" in t || "rampPoint" in t) && (n = t.color, i = t.offset || t.rampPoint || 0)), this.setColor(n), this.setOffset(i)
                                    }, clone:
                                    function () { return new U(this._color.clone(), this._offset) }, _serialize:
                                    function (t, e) {
                                        var n = this._color, i = this._offset;
                                        return l.serialize(null == i ? [n] : [n, i], t, !0, e)
                                    }, _changed:
                                    function () { this._owner && this._owner._changed(129) }, getOffset:
                                    function () { return this._offset }, setOffset:
                                    function (t) { this._offset = t, this._changed() }, getRampPoint: "#getOffset", setRampPoint: "#setOffset", getColor:
                                    function () { return this._color }, setColor:
                                    function () { W._setOwner(this._color, null), this._color = W._setOwner(W.read(arguments, 0), this, "setColor"), this._changed() }, equals:
                                    function (t) { return t === this || t && this._class === t._class && this._color.equals(t._color) && this._offset == t._offset || !1 }
                            }), G = l.extend(new
                                function () {
                                    var t = { fillColor: null, fillRule: "nonzero", strokeColor: null, strokeWidth: 1, strokeCap: "butt", strokeJoin: "miter", strokeScaling: !0, miterLimit: 10, dashOffset: 0, dashArray: [], shadowColor: null, shadowBlur: 0, shadowOffset: new v, selectedColor: null }, e = l.set({}, t, { fontFamily: "sans-serif", fontWeight: "normal", fontSize: 12, leading: null, justification: "left" }), n = l.set({}, e, { fillColor: new W }), i = { strokeWidth: 193, strokeCap: 193, strokeJoin: 193, strokeScaling: 201, miterLimit: 193, fontFamily: 9, fontWeight: 9, fontSize: 9, font: 9, leading: 9, justification: 9 }, r = { beans: !0 }, s = {
                                        _class: "Style", beans: !0, initialize:
                                            function (i, r, s) { this._values = {}, this._owner = r, this._project = r && r._project || s || ut.project, this._defaults = !r || r instanceof M ? e : r instanceof $ ? n : t, i && this.set(i) }
                                    };

                                    return l.each(e, (
                                        function (t, e) {
                                            var n = /Color$/.test(e), o = "shadowOffset" === e, h = l.capitalize(e), u = i[e], c = "set" + h, f = "get" + h;
                                            s[c] =
                                                function (t) {
                                                    var i = this._owner, r = i && i._children, s = r && r.length > 0 && !(i instanceof F);
                                                    if (s) for (var a = 0, o = r.length;
                                                        a < o;
                                                        a++)r[a]._style[c](t);
                                                    if (("selectedColor" === e || !s) && e in this._defaults) {
                                                        var h = this._values[e];
                                                        h !== t && (n && (h && (W._setOwner(h, null), h._canvasStyle = null), t && t.constructor === W && (t = W._setOwner(t, i, s && c))), this._values[e] = t, i && i._changed(u || 129))
                                                    }
                                                }, s[f] =
                                                function (t) {
                                                    var i = this._owner, r = i && i._children, s = r && r.length > 0 && !(i instanceof F);
                                                    if (s && !t) for (var h = 0, u = r.length;
                                                        h < u;
                                                        h++) {
                                                            var d = r[h]._style[f]();
                                                        if (h) { if (!l.equals(_, d)) return a } else _ = d
                                                    } else if (e in this._defaults) {
                                                        var _;
                                                        if ((_ = this._values[e]) === a) (_ = this._defaults[e]) && _.clone && (_ = _.clone());
                                                        else {
                                                            var g = n ? W : o ? v : null;
                                                            !g || _ && _.constructor === g || (this._values[e] = _ = g.read([_], 0, { readNull: !0, clone: !0 }))
                                                        }
                                                    } return _ && n && (_ = W._setOwner(_, i, s && c)), _
                                                }, r[f] =
                                                function (t) { return this._style[f](t) }, r[c] =
                                                function (t) { this._style[c](t) }
                                        })), l.each({ Font: "FontFamily", WindingRule: "FillRule" }, (
                                            function (t, e) {
                                                var n = "get" + e, i = "set" + e;
                                                s[n] = r[n] = "#get" + t, s[i] = r[i] = "#set" + t
                                            })), P.inject(r), s
                                }, {
                                set:
                                    function (t) {
                                        var e = t instanceof G, n = e ? t._values : t;
                                        if (n) for (var i in n) if (i in this._defaults) {
                                            var r = n[i];
                                            this[i] = r && e && r.clone ? r.clone() : r
                                        }
                                    }, equals:
                                    function (t) {
                                        function e(t, e, n) {
                                            var i = t._values, r = e._values, s = e._defaults;
                                            for (var o in i) {
                                                var h = i[o], u = r[o];
                                                if (!(n && o in r || l.equals(h, u === a ? s[o] : u))) return !1
                                            } return !0
                                        } return t === this || t && this._class === t._class && e(this, t) && e(t, this, !0) || !1
                                    }, _dispose:
                                    function () {
                                        var t;
                                        (t = this.getFillColor()) && (t._canvasStyle = null), (t = this.getStrokeColor()) && (t._canvasStyle = null), (t = this.getShadowColor()) && (t._canvasStyle = null)
                                    }, hasFill:
                                    function () {
                                        var t = this.getFillColor();
                                        return !!t && t.alpha > 0
                                    }, hasStroke:
                                    function () {
                                        var t = this.getStrokeColor();
                                        return !!t && t.alpha > 0 && this.getStrokeWidth() > 0
                                    }, hasShadow:
                                    function () {
                                        var t = this.getShadowColor();
                                        return !!t && t.alpha > 0 && (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero())
                                    }, getView:
                                    function () { return this._project._view }, getFontStyle:
                                    function () {
                                        var t = this.getFontSize();
                                        return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily()
                                    }, getFont: "#getFontFamily", setFont: "#setFontFamily", getLeading:
                                    function t() {
                                        var e = t.base.call(this), n = this.getFontSize();
                                        return /pt|em|%|px/.test(n) && (n = this.getView().getPixelSize(n)), null != e ? e : 1.2 * n
                                    }
                            }), J = new
                                function () {
                                    function t(t, e, n, i) {
                                        for (var r = ["", "webkit", "moz", "Moz", "ms", "o"], s = e[0].toUpperCase() + e.substring(1), a = 0;
                                            a < 6;
                                            a++) {
                                                var o = r[a], h = o ? o + s : e;
                                            if (h in t) {
                                                if (!n) return t[h];
                                                t[h] = i;
                                                break
                                            }
                                        }
                                    } return {
                                        getStyles:
                                            function (t) {
                                                var e = t && 9 !== t.nodeType ? t.ownerDocument : t, n = e && e.defaultView;
                                                return n && n.getComputedStyle(t, "")
                                            }, getBounds:
                                            function (t, e) {
                                                var n, i = t.ownerDocument, r = i.body, s = i.documentElement;
                                                try { n = t.getBoundingClientRect() } catch (t) { n = { left: 0, top: 0, width: 0, height: 0 } } var a = n.left - (s.clientLeft || r.clientLeft || 0), o = n.top - (s.clientTop || r.clientTop || 0);
                                                if (!e) {
                                                    var h = i.defaultView;
                                                    a += h.pageXOffset || s.scrollLeft || r.scrollLeft, o += h.pageYOffset || s.scrollTop || r.scrollTop
                                                } return new w(a, o, n.width, n.height)
                                            }, getViewportBounds:
                                            function (t) {
                                                var e = t.ownerDocument, n = e.defaultView, i = e.documentElement;
                                                return new w(0, 0, n.innerWidth || i.clientWidth, n.innerHeight || i.clientHeight)
                                            }, getOffset:
                                            function (t, e) { return J.getBounds(t, e).getPoint() }, getSize:
                                            function (t) { return J.getBounds(t, !0).getSize() }, isInvisible:
                                            function (t) { return J.getSize(t).equals(new y(0, 0)) }, isInView:
                                            function (t) { return !J.isInvisible(t) && J.getViewportBounds(t).intersects(J.getBounds(t, !0)) }, isInserted:
                                            function (t) { return h.body.contains(t) }, getPrefixed:
                                            function (e, n) { return e && t(e, n) }, setPrefixed:
                                            function (e, n, i) {
                                                if ("object" == typeof n) for (var r in n) t(e, r, !0, n[r]);
                                                else t(e, n, !0, i)
                                            }
                                    }
                                }, K = {
                                    add:
                                        function (t, e) {
                                            if (t) for (var n in e) for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length;
                                                s < a;
                                                s++) {
                                                var o = r[s], l = t === h && ("touchstart" === o || "touchmove" === o) && { passive: !1 };

                                                t.addEventListener(o, i, l)
                                            }
                                        }, remove:
                                        function (t, e) {
                                            if (t) for (var n in e) for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length;
                                                s < a;
                                                s++)t.removeEventListener(r[s], i, !1)
                                        }, getPoint:
                                        function (t) {
                                            var e = t.targetTouches ? t.targetTouches.length ? t.targetTouches[0] : t.changedTouches[0] : t;
                                            return new v(e.pageX || e.clientX + h.documentElement.scrollLeft, e.pageY || e.clientY + h.documentElement.scrollTop)
                                        }, getTarget:
                                        function (t) { return t.target || t.srcElement }, getRelatedTarget:
                                        function (t) { return t.relatedTarget || t.toElement }, getOffset:
                                        function (t, e) { return K.getPoint(t).subtract(J.getOffset(e || K.getTarget(t))) }
                                };

                    K.requestAnimationFrame = new
                        function () {
                            var t, e = J.getPrefixed(o, "requestAnimationFrame"), n = !1, i = [];

                            function r() {
                                var t = i;
                                i = [];
                                for (var s = 0, a = t.length;
                                    s < a;
                                    s++)t[s]();
                                (n = e && i.length) && e(r)
                            } return
                            function (s) { i.push(s), e ? n || (e(r), n = !0) : t || (t = setInterval(r, 1e3 / 60)) }
                        };

                    var Y = l.extend(u, {
                        _class: "View", initialize:
                            function t(e, n) {
                                function i(t) { return n[t] || parseInt(n.getAttribute(t), 10) }
                                function r() {
                                    var t = J.getSize(n);
                                    return t.isNaN() || t.isZero() ? new y(i("width"), i("height")) : t
                                } var s;
                                if (o && n) {
                                    this._id = n.getAttribute("id"), null == this._id && n.setAttribute("id", this._id = "paper-view-" + t._id++), K.add(n, this._viewEvents);
                                    var a = "none";
                                    if (J.setPrefixed(n.style, { userDrag: a, userSelect: a, touchCallout: a, contentZooming: a, tapHighlightColor: "rgba(0,0,0,0)" }), c.hasAttribute(n, "resize")) {
                                        var l = this;
                                        K.add(o, this._windowEvents = {
                                            resize:
                                                function () { l.setViewSize(r()) }
                                        })
                                    } if (s = r(), c.hasAttribute(n, "stats") && "undefined" != typeof Stats) {
                                        this._stats = new Stats;
                                        var u = this._stats.domElement, f = u.style, d = J.getOffset(n);
                                        f.position = "absolute", f.left = d.x + "px", f.top = d.y + "px", h.body.appendChild(u)
                                    }
                                } else s = new y(n), n = null;
                                this._project = e, this._scope = e._scope, this._element = n, this._pixelRatio || (this._pixelRatio = o && o.devicePixelRatio || 1), this._setElementSize(s.width, s.height), this._viewSize = s, t._views.push(this), t._viewsById[this._id] = this, (this._matrix = new S)._owner = this, t._focused || (t._focused = this), this._frameItems = {}, this._frameItemCount = 0, this._itemEvents = { native: {}, virtual: {} }, this._autoUpdate = !ut.agent.node, this._needsUpdate = !1
                            }, remove:
                            function () {
                                if (!this._project) return !1;
                                Y._focused === this && (Y._focused = null), Y._views.splice(Y._views.indexOf(this), 1), delete Y._viewsById[this._id];
                                var t = this._project;
                                return t._view === this && (t._view = null), K.remove(this._element, this._viewEvents), K.remove(o, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0
                            }, _events: l.each(P._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]), (
                                function (t) { this[t] = {} }), {
                                onFrame: {
                                    install:
                                        function () { this.play() }, uninstall:
                                        function () { this.pause() }
                                }
                            }), _animate: !1, _time: 0, _count: 0, getAutoUpdate:
                            function () { return this._autoUpdate }, setAutoUpdate:
                            function (t) { this._autoUpdate = t, t && this.requestUpdate() }, update:
                            function () { }, draw:
                            function () { this.update() }, requestUpdate:
                            function () {
                                if (!this._requested) {
                                    var t = this;
                                    K.requestAnimationFrame((
                                        function () {
                                            if (t._requested = !1, t._animate) {
                                                t.requestUpdate();
                                                var e = t._element;
                                                J.getPrefixed(h, "hidden") && "true" !== c.getAttribute(e, "keepalive") || !J.isInView(e) || t._handleFrame()
                                            } t._autoUpdate && t.update()
                                        })), this._requested = !0
                                }
                            }, play:
                            function () { this._animate = !0, this.requestUpdate() }, pause:
                            function () { this._animate = !1 }, _handleFrame:
                            function () {
                                ut = this._scope;
                                var t = Date.now() / 1e3, e = this._last ? t - this._last : 0;
                                this._last = t, this.emit("frame", new l({ delta: e, time: this._time += e, count: this._count++ })), this._stats && this._stats.update()
                            }, _animateItem:
                            function (t, e) {
                                var n = this._frameItems;
                                e ? (n[t._id] = { item: t, time: 0, count: 0 }, 1 == ++this._frameItemCount && this.on("frame", this._handleFrameItems)) : (delete n[t._id], 0 == --this._frameItemCount && this.off("frame", this._handleFrameItems))
                            }, _handleFrameItems:
                            function (t) {
                                for (var e in this._frameItems) {
                                    var n = this._frameItems[e];
                                    n.item.emit("frame", new l(t, { time: n.time += t.delta, count: n.count++ }))
                                }
                            }, _changed:
                            function () { this._project._changed(4097), this._bounds = this._decomposed = a }, getElement:
                            function () { return this._element }, getPixelRatio:
                            function () { return this._pixelRatio }, getResolution:
                            function () { return 72 * this._pixelRatio }, getViewSize:
                            function () {
                                var t = this._viewSize;
                                return new x(t.width, t.height, this, "setViewSize")
                            }, setViewSize:
                            function () {
                                var t = y.read(arguments), e = t.subtract(this._viewSize);
                                e.isZero() || (this._setElementSize(t.width, t.height), this._viewSize.set(t), this._changed(), this.emit("resize", { size: t, delta: e }), this._autoUpdate && this.update())
                            }, _setElementSize:
                            function (t, e) {
                                var n = this._element;
                                n && (n.width !== t && (n.width = t), n.height !== e && (n.height = e))
                            }, getBounds:
                            function () { return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(new w(new v, this._viewSize))), this._bounds }, getSize:
                            function () { return this.getBounds().getSize() }, isVisible:
                            function () { return J.isInView(this._element) }, isInserted:
                            function () { return J.isInserted(this._element) }, getPixelSize:
                            function (t) {
                                var e, n = this._element;
                                if (n) {
                                    var i = n.parentNode, r = h.createElement("div");
                                    r.style.fontSize = t, i.appendChild(r), e = parseFloat(J.getStyles(r).fontSize), i.removeChild(r)
                                } else e = parseFloat(e);
                                return e
                            }, getTextWidth:
                            function (t, e) { return 0 }
                    }, l.each(["rotate", "scale", "shear", "skew"], (
                        function (t) {
                            var e = "rotate" === t;
                            this[t] =
                                function () {
                                    var n = arguments, i = (e ? l : v).read(n), r = v.read(n, 0, { readNull: !0 });
                                    return this.transform((new S)[t](i, r || this.getCenter(!0)))
                                }
                        }), {
                        _decompose:
                            function () { return this._decomposed || (this._decomposed = this._matrix.decompose()) }, translate:
                            function () {
                                var t = new S;
                                return this.transform(t.translate.apply(t, arguments))
                            }, getCenter:
                            function () { return this.getBounds().getCenter() }, setCenter:
                            function () {
                                var t = v.read(arguments);
                                this.translate(this.getCenter().subtract(t))
                            }, getZoom:
                            function () {
                                var t = this._decompose().scaling;
                                return (t.x + t.y) / 2
                            }, setZoom:
                            function (t) { this.transform((new S).scale(t / this.getZoom(), this.getCenter())) }, getRotation:
                            function () { return this._decompose().rotation }, setRotation:
                            function (t) {
                                var e = this.getRotation();
                                null != e && null != t && this.rotate(t - e)
                            }, getScaling:
                            function () {
                                var t = this._decompose().scaling;
                                return new m(t.x, t.y, this, "setScaling")
                            }, setScaling:
                            function () {
                                var t = this.getScaling(), e = v.read(arguments, 0, { clone: !0, readNull: !0 });
                                t && e && this.scale(e.x / t.x, e.y / t.y)
                            }, getMatrix:
                            function () { return this._matrix }, setMatrix:
                            function () {
                                var t = this._matrix;
                                t.set.apply(t, arguments)
                            }, transform:
                            function (t) { this._matrix.append(t) }, scrollBy:
                            function () { this.translate(v.read(arguments).negate()) }
                    }), {
                        projectToView:
                            function () { return this._matrix._transformPoint(v.read(arguments)) }, viewToProject:
                            function () { return this._matrix._inverseTransform(v.read(arguments)) }, getEventPoint:
                            function (t) { return this.viewToProject(K.getOffset(t, this._element)) }
                    }, {
                        statics: {
                            _views: [], _viewsById: {}, _id: 0, create:
                                function (t, e) { return h && "string" == typeof e && (e = h.getElementById(e)), new (o ? X : Y)(t, e) }
                        }
                    }, new
                        function () {
                            if (o) {
                                var t, e, n, i, r, s = !1, a = !1, l = o.navigator;
                                l.pointerEnabled || l.msPointerEnabled ? (n = "pointerdown MSPointerDown", i = "pointermove MSPointerMove", r = "pointerup pointercancel MSPointerUp MSPointerCancel") : (n = "touchstart", i = "touchmove", r = "touchend touchcancel", "ontouchstart" in o && l.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (n += " mousedown", i += " mousemove", r += " mouseup"));
                                var u = {}, c = {
                                    mouseout:
                                        function (t) {
                                            var e = Y._focused, n = K.getRelatedTarget(t);
                                            if (e && (!n || "HTML" === n.nodeName)) {
                                                var i = K.getOffset(t, e._element), r = i.x, s = Math.abs, a = s(r), o = a - (1 << 25);
                                                i.x = s(o) < a ? o * (r < 0 ? -1 : 1) : r, M(e, t, e.viewToProject(i))
                                            }
                                        }, scroll: P
                                };

                                u[n] =
                                    function (t) {
                                        var e = Y._focused = k(t);
                                        s || (s = !0, e._handleMouseEvent("mousedown", t))
                                    }, c[i] =
                                    function (n) {
                                        var i = Y._focused;
                                        if (!a) {
                                            var r = k(n);
                                            r ? i !== r && (i && M(i, n), t || (t = i), i = Y._focused = e = r) : e && e === i && (t && !t.isInserted() && (t = null), i = Y._focused = t, t = null, P())
                                        } i && M(i, n)
                                    }, c[n] =
                                    function () { a = !0 }, c[r] =
                                    function (t) {
                                        var e = Y._focused;
                                        e && s && e._handleMouseEvent("mouseup", t), a = s = !1
                                    }, K.add(h, c), K.add(o, { load: P });
                                var f, d, _, g, p, v, m, y, x = !1, w = !1, b = { doubleclick: "click", mousedrag: "mousemove" }, S = !1, C = { mousedown: { mousedown: 1, mousedrag: 1, click: 1, doubleclick: 1 }, mouseup: { mouseup: 1, mousedrag: 1, click: 1, doubleclick: 1 }, mousemove: { mousedrag: 1, mousemove: 1, mouseenter: 1, mouseleave: 1 } };

                                return {
                                    _viewEvents: u, _handleMouseEvent:
                                        function (t, e, n) {
                                            var i = this._itemEvents, r = i.native[t], a = "mousemove" === t, o = this._scope.tool, h = this;

                                            function l(t) { return i.virtual[t] || h.responds(t) || o && o.responds(t) } a && s && l("mousedrag") && (t = "mousedrag"), n || (n = this.getEventPoint(e));
                                            var u = this.getBounds().contains(n), c = r && u && h._project.hitTest(n, { tolerance: 0, fill: !0, stroke: !0 }), b = c && c.item || null, C = !1, k = {};

                                            if (k[t.substr(5)] = !0, r && b !== g && (g && O(g, null, "mouseleave", e, n), b && O(b, null, "mouseenter", e, n), g = b), S ^ u && (O(this, null, u ? "mouseenter" : "mouseleave", e, n), C = !0), !u && !k.drag || n.equals(d) || (A(this, b, a ? t : "mousemove", e, n, d), C = !0), S = u, k.down && u || k.up && f) {
                                                if (A(this, b, t, e, n, f), k.down) {
                                                    if (y = b === v && Date.now() - m < 300, _ = v = b, !w && b) {
                                                        for (var P = b;
                                                            P && !P.responds("mousedrag");
                                                        )P = P._parent;
                                                        P && (p = b)
                                                    } f = n
                                                } else k.up && (w || b !== _ || (m = Date.now(), A(this, b, y ? "doubleclick" : "click", e, n, f), y = !1), _ = p = null);
                                                S = !1, C = !0
                                            } d = n, C && o && (x = o._handleMouseEvent(t, e, n, k) || x), !1 !== e.cancelable && (x && !k.move || k.down && l("mouseup")) && e.preventDefault()
                                        }, _handleKeyEvent:
                                        function (t, e, n, i) {
                                            var r, s = this._scope, a = s.tool;

                                            function o(a) { a.responds(t) && (ut = s, a.emit(t, r = r || new tt(t, e, n, i))) } this.isVisible() && (o(this), a && a.responds(t) && o(a))
                                        }, _countItemEvent:
                                        function (t, e) {
                                            var n = this._itemEvents, i = n.native, r = n.virtual;
                                            for (var s in C) i[s] = (i[s] || 0) + (C[s][t] || 0) * e;
                                            r[t] = (r[t] || 0) + e
                                        }, statics: {
                                            updateFocus: P, _resetState:
                                                function () { s = a = x = S = !1, t = e = f = d = _ = g = p = v = m = y = null }
                                        }
                                }
                            }
                            function k(t) {
                                var e = K.getTarget(t);
                                return e.getAttribute && Y._viewsById[e.getAttribute("id")]
                            }
                            function P() {
                                var t = Y._focused;
                                if (!t || !t.isVisible()) for (var n = 0, i = Y._views.length;
                                    n < i;
                                    n++)if ((t = Y._views[n]).isVisible()) {
                                        Y._focused = e = t;
                                        break
                                    }
                            }
                            function M(t, e, n) { t._handleMouseEvent("mousemove", e, n) }
                            function O(t, e, n, i, r, s, a) {
                                var o, h = !1;

                                function l(t, n) {
                                    if (t.responds(n)) { if (o || (o = new nt(n, i, r, e || t, s ? r.subtract(s) : null)), t.emit(n, o) && (x = !0, o.prevented && (w = !0), o.stopped)) return h = !0 } else {
                                        var a = b[n];
                                        if (a) return l(t, a)
                                    }
                                } for (;
                                    t && t !== a && !l(t, n);
                                )t = t._parent;
                                return h
                            }
                            function A(t, e, n, i, r, s) { return t._project.removeOn(n), w = x = !1, p && O(p, null, n, i, r, s) || e && e !== p && !e.isDescendant(p) && O(e, null, "mousedrag" === n ? "mousemove" : n, i, r, s, p) || O(t, p || e || t, n, i, r, s) }
                        }), X = Y.extend({
                            _class: "CanvasView", initialize:
                                function (t, e) {
                                    if (!(e instanceof o.HTMLCanvasElement)) {
                                        var n = y.read(arguments, 1);
                                        if (n.isZero()) throw new Error("Cannot create CanvasView with the provided argument: " + l.slice(arguments, 1));
                                        e = at.getCanvas(n)
                                    } var i = this._context = e.getContext("2d");
                                    if (i.save(), this._pixelRatio = 1, !/^off|false$/.test(c.getAttribute(e, "hidpi"))) {
                                        var r = o.devicePixelRatio || 1, s = J.getPrefixed(i, "backingStorePixelRatio") || 1;
                                        this._pixelRatio = r / s
                                    } Y.call(this, t, e), this._needsUpdate = !0
                                }, remove:
                                function t() { return this._context.restore(), t.base.call(this) }, _setElementSize:
                                function t(e, n) {
                                    var i = this._pixelRatio;
                                    if (t.base.call(this, e * i, n * i), 1 !== i) {
                                        var r = this._element, s = this._context;
                                        if (!c.hasAttribute(r, "resize")) {
                                            var a = r.style;
                                            a.width = e + "px", a.height = n + "px"
                                        } s.restore(), s.save(), s.scale(i, i)
                                    }
                                }, getContext:
                                function () { return this._context }, getPixelSize:
                                function t(e) {
                                    var n, i = ut.agent;
                                    if (i && i.firefox) n = t.base.call(this, e);
                                    else {
                                        var r = this._context, s = r.font;
                                        r.font = e + " serif", n = parseFloat(r.font), r.font = s
                                    } return n
                                }, getTextWidth:
                                function (t, e) {
                                    var n = this._context, i = n.font, r = 0;
                                    n.font = t;
                                    for (var s = 0, a = e.length;
                                        s < a;
                                        s++)r = Math.max(r, n.measureText(e[s]).width);
                                    return n.font = i, r
                                }, update:
                                function () {
                                    if (!this._needsUpdate) return !1;
                                    var t = this._project, e = this._context, n = this._viewSize;
                                    return e.clearRect(0, 0, n.width + 1, n.height + 1), t && t.draw(e, this._matrix, this._pixelRatio), this._needsUpdate = !1, !0
                                }
                        }), Q = l.extend({
                            _class: "Event", initialize:
                                function (t) { this.event = t, this.type = t && t.type }, prevented: !1, stopped: !1, preventDefault:
                                function () { this.prevented = !0, this.event.preventDefault() }, stopPropagation:
                                function () { this.stopped = !0, this.event.stopPropagation() }, stop:
                                function () { this.stopPropagation(), this.preventDefault() }, getTimeStamp:
                                function () { return this.event.timeStamp }, getModifiers:
                                function () { return et.modifiers }
                        }), tt = Q.extend({
                            _class: "KeyEvent", initialize:
                                function (t, e, n, i) { this.type = t, this.event = e, this.key = n, this.character = i }, toString:
                                function () { return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }" }
                        }), et = new
                            function () {
                                var t, e, n = { "\t": "tab", " ": "space", "\b": "backspace", "\x7f": "delete", Spacebar: "space", Del: "delete", Win: "meta", Esc: "escape" }, i = { tab: "\t", space: " ", enter: "\r" }, r = {}, s = {}, u = new l({ shift: !1, control: !1, alt: !1, meta: !1, capsLock: !1, space: !1 }).inject({
                                    option: {
                                        get:
                                            function () { return this.alt }
                                    }, command: {
                                        get:
                                            function () {
                                                var t = ut && ut.agent;
                                                return t && t.mac ? this.meta : this.control
                                            }
                                    }
                                });

                                function c(t) {
                                    var e = t.key || t.keyIdentifier;
                                    return e = /^U\+/.test(e) ? String.fromCharCode(parseInt(e.substr(2), 16)) : /^Arrow[A-Z]/.test(e) ? e.substr(5) : "Unidentified" === e || e === a ? String.fromCharCode(t.keyCode) : e, n[e] || (e.length > 1 ? l.hyphenate(e) : e.toLowerCase())
                                }
                                function f(e, n, i, a) {
                                    var o, h = Y._focused;
                                    if (r[n] = e, e ? s[n] = i : delete s[n], n.length > 1 && (o = l.camelize(n)) in u) {
                                        u[o] = e;
                                        var c = ut && ut.agent;
                                        if ("meta" === o && c && c.mac) if (e) t = {};

                                        else {
                                            for (var d in t) d in s && f(!1, d, t[d], a);
                                            t = null
                                        }
                                    } else e && t && (t[n] = i);
                                    h && h._handleKeyEvent(e ? "keydown" : "keyup", a, n, i)
                                } return K.add(h, {
                                    keydown:
                                        function (t) {
                                            var n = c(t), r = ut && ut.agent;
                                            n.length > 1 || r && r.chrome && (t.altKey || r.mac && t.metaKey || !r.mac && t.ctrlKey) ? f(!0, n, i[n] || (n.length > 1 ? "" : n), t) : e = n
                                        }, keypress:
                                        function (t) {
                                            if (e) {
                                                var n = c(t), i = t.charCode, r = i >= 32 ? String.fromCharCode(i) : n.length > 1 ? "" : n;
                                                n !== e && (n = r.toLowerCase()), f(!0, n, r, t), e = null
                                            }
                                        }, keyup:
                                        function (t) {
                                            var e = c(t);
                                            e in s && f(!1, e, s[e], t)
                                        }
                                }), K.add(o, {
                                    blur:
                                        function (t) { for (var e in s) f(!1, e, s[e], t) }
                                }), {
                                    modifiers: u, isDown:
                                        function (t) { return !!r[t] }
                                }
                            }, nt = Q.extend({
                                _class: "MouseEvent", initialize:
                                    function (t, e, n, i, r) { this.type = t, this.event = e, this.point = n, this.target = i, this.delta = r }, toString:
                                    function () { return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }" }
                            }), it = Q.extend({
                                _class: "ToolEvent", _item: null, initialize:
                                    function (t, e, n) { this.tool = t, this.type = e, this.event = n }, _choosePoint:
                                    function (t, e) { return t || (e ? e.clone() : null) }, getPoint:
                                    function () { return this._choosePoint(this._point, this.tool._point) }, setPoint:
                                    function (t) { this._point = t }, getLastPoint:
                                    function () { return this._choosePoint(this._lastPoint, this.tool._lastPoint) }, setLastPoint:
                                    function (t) { this._lastPoint = t }, getDownPoint:
                                    function () { return this._choosePoint(this._downPoint, this.tool._downPoint) }, setDownPoint:
                                    function (t) { this._downPoint = t }, getMiddlePoint:
                                    function () { return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint).divide(2) : this._middlePoint }, setMiddlePoint:
                                    function (t) { this._middlePoint = t }, getDelta:
                                    function () { return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta }, setDelta:
                                    function (t) { this._delta = t }, getCount:
                                    function () { return this.tool[/^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"] }, setCount:
                                    function (t) { this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = t }, getItem:
                                    function () {
                                        if (!this._item) {
                                            var t = this.tool._scope.project.hitTest(this.getPoint());
                                            if (t) {
                                                for (var e = t.item, n = e._parent;
                                                    /^(Group|CompoundPath)$/.test(n._class);
                                                )e = n, n = n._parent;
                                                this._item = e
                                            }
                                        } return this._item
                                    }, setItem:
                                    function (t) { this._item = t }, toString:
                                    function () { return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }" }
                            }), rt = (f.extend({
                                _class: "Tool", _list: "tools", _reference: "tool", _events: ["onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onActivate", "onDeactivate", "onEditOptions", "onKeyDown", "onKeyUp"], initialize:
                                    function (t) { f.call(this), this._moveCount = -1, this._downCount = -1, this.set(t) }, getMinDistance:
                                    function () { return this._minDistance }, setMinDistance:
                                    function (t) { this._minDistance = t, null != t && null != this._maxDistance && t > this._maxDistance && (this._maxDistance = t) }, getMaxDistance:
                                    function () { return this._maxDistance }, setMaxDistance:
                                    function (t) { this._maxDistance = t, null != this._minDistance && null != t && t < this._minDistance && (this._minDistance = t) }, getFixedDistance:
                                    function () { return this._minDistance == this._maxDistance ? this._minDistance : null }, setFixedDistance:
                                    function (t) { this._minDistance = this._maxDistance = t }, _handleMouseEvent:
                                    function (t, e, n, i) {
                                        ut = this._scope, i.drag && !this.responds(t) && (t = "mousemove");
                                        var r = i.move || i.drag, s = this.responds(t), a = !1, o = this;

                                        function h(t, e) {
                                            var s = n, a = r ? o._point : o._downPoint || s;
                                            if (r) {
                                                if (o._moveCount >= 0 && s.equals(a)) return !1;
                                                if (a && (null != t || null != e)) {
                                                    var h = s.subtract(a), l = h.getLength();
                                                    if (l < (t || 0)) return !1;
                                                    e && (s = a.add(h.normalize(Math.min(l, e))))
                                                } o._moveCount++
                                            } return o._point = s, o._lastPoint = a || s, i.down && (o._moveCount = -1, o._downPoint = s, o._downCount++), !0
                                        }
                                        function l() { s && (a = o.emit(t, new it(o, t, e)) || a) } if (i.down) h(), l();
                                        else if (i.up) h(null, this._maxDistance), l();
                                        else if (s) for (;
                                            h(this._minDistance, this._maxDistance);
                                        )l();
                                        return a
                                    }
                            }), l.extend(u, {
                                _class: "Tween", statics: {
                                    easings: new l({
                                        linear:
                                            function (t) { return t }, easeInQuad:
                                            function (t) { return t * t }, easeOutQuad:
                                            function (t) { return t * (2 - t) }, easeInOutQuad:
                                            function (t) { return t < .5 ? 2 * t * t : 2 * (2 - t) * t - 1 }, easeInCubic:
                                            function (t) { return t * t * t }, easeOutCubic:
                                            function (t) { return --t * t * t + 1 }, easeInOutCubic:
                                            function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }, easeInQuart:
                                            function (t) { return t * t * t * t }, easeOutQuart:
                                            function (t) { return 1 - --t * t * t * t }, easeInOutQuart:
                                            function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t }, easeInQuint:
                                            function (t) { return t * t * t * t * t }, easeOutQuint:
                                            function (t) { return 1 + --t * t * t * t * t }, easeInOutQuint:
                                            function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t }
                                    })
                                }, initialize:
                                    function t(e, n, i, r, s, a) {
                                        this.object = e;
                                        var o = typeof s, h = "function" === o;
                                        this.type = h ? o : "string" === o ? s : "linear", this.easing = h ? s : t.easings[this.type], this.duration = r, this.running = !1, this._then = null, this._startTime = null;
                                        var l = n || i;
                                        this._keys = l ? Object.keys(l) : [], this._parsedKeys = this._parseKeys(this._keys), this._from = l && this._getState(n), this._to = l && this._getState(i), !1 !== a && this.start()
                                    }, then:
                                    function (t) { return this._then = t, this }, start:
                                    function () { return this._startTime = null, this.running = !0, this }, stop:
                                    function () { return this.running = !1, this }, update:
                                    function (t) {
                                        if (this.running) {
                                            t >= 1 && (t = 1, this.running = !1);
                                            for (var e = this.easing(t), n = this._keys, i =
                                                function (n) { return "function" == typeof n ? n(e, t) : n }, r = 0, s = n && n.length;
                                                r < s;
                                                r++) {
                                                    var a = n[r], o = i(this._from[a]), h = i(this._to[a]), u = o && h && o.__add && h.__add ? h.__subtract(o).__multiply(e).__add(o) : (h - o) * e + o;
                                                this._setProperty(this._parsedKeys[a], u)
                                            } this.responds("update") && this.emit("update", new l({ progress: t, factor: e })), !this.running && this._then && this._then(this.object)
                                        } return this
                                    }, _events: { onUpdate: {} }, _handleFrame:
                                    function (t) {
                                        var e = this._startTime, n = e ? (t - e) / this.duration : 0;
                                        e || (this._startTime = t), this.update(n)
                                    }, _getState:
                                    function (t) {
                                        for (var e = this._keys, n = {}, i = 0, r = e.length;
                                            i < r;
                                            i++) {
                                                var s, a = e[i], o = this._parsedKeys[a], h = this._getProperty(o);
                                            if (t) {
                                                var l = this._resolveValue(h, t[a]);
                                                this._setProperty(o, l), s = (s = this._getProperty(o)) && s.clone ? s.clone() : s, this._setProperty(o, h)
                                            } else s = h && h.clone ? h.clone() : h;
                                            n[a] = s
                                        } return n
                                    }, _resolveValue:
                                    function (t, e) {
                                        if (e) {
                                            if (Array.isArray(e) && 2 === e.length) {
                                                var n = e[0];
                                                return n && n.match && n.match(/^[+\-\*\/]=/) ? this._calculate(t, n[0], e[1]) : e
                                            } if ("string" == typeof e) {
                                                var i = e.match(/^[+\-*/]=(.*)/);
                                                if (i) {
                                                    var r = JSON.parse(i[1].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '));
                                                    return this._calculate(t, e[0], r)
                                                }
                                            }
                                        } return e
                                    }, _calculate:
                                    function (t, e, n) { return ut.PaperScript.calculateBinary(t, e, n) }, _parseKeys:
                                    function (t) {
                                        for (var e = {}, n = 0, i = t.length;
                                            n < i;
                                            n++) {
                                                var r = t[n], s = r.replace(/\.([^.]*)/g, "/$1").replace(/\[['"]?([^'"\]]*)['"]?\]/g, "/$1");
                                            e[r] = s.split("/")
                                        } return e
                                    }, _getProperty:
                                    function (t, e) {
                                        for (var n = this.object, i = 0, r = t.length - (e || 0);
                                            i < r && n;
                                            i++)n = n[t[i]];
                                        return n
                                    }, _setProperty:
                                    function (t, e) {
                                        var n = this._getProperty(t, 1);
                                        n && (n[t[t.length - 1]] = e)
                                    }
                            })), st =
                            function (t) {
                                var e = new s.XMLHttpRequest;
                                return e.open((t.method || "get").toUpperCase(), t.url, l.pick(t.async, !0)), t.mimeType && e.overrideMimeType(t.mimeType), e.onload =
                                    function () {
                                        var n = e.status;
                                        0 === n || 200 === n ? t.onLoad && t.onLoad.call(e, e.responseText) : e.onerror()
                                    }, e.onerror =
                                    function () {
                                        var n = e.status, i = 'Could not load "' + t.url + '" (Status: ' + n + ")";
                                        if (!t.onError) throw new Error(i);
                                        t.onError(i, n)
                                    }, e.send(null)
                            }, at = l.exports.CanvasProvider = {
                                canvases: [], getCanvas:
                                    function (t, e, n) {
                                        if (!o) return null;
                                        var i, r = !0;
                                        "object" == typeof t && (e = t.height, t = t.width), this.canvases.length ? i = this.canvases.pop() : (i = h.createElement("canvas"), r = !1);
                                        var s = i.getContext("2d", n || {});
                                        if (!s) throw new Error("Canvas " + i + " is unable to provide a 2D context.");
                                        return i.width === t && i.height === e ? r && s.clearRect(0, 0, t + 1, e + 1) : (i.width = t, i.height = e), s.save(), i
                                    }, getContext:
                                    function (t, e, n) {
                                        var i = this.getCanvas(t, e, n);
                                        return i ? i.getContext("2d", n || {}) : null
                                    }, release:
                                    function (t) {
                                        var e = t && t.canvas ? t.canvas : t;
                                        e && e.getContext && (e.getContext("2d").restore(), this.canvases.push(e))
                                    }
                            }, ot = new
                                function () {
                                    var t, e, n, i, r, s, a, o, h, u, c, f = Math.min, d = Math.max, _ = Math.abs;

                                    function g(t, e, n) { return .2989 * t + .587 * e + .114 * n }
                                    function p(t, e, n, i) {
                                        var r = i - g(t, e, n), s = (i = g(h = t + r, u = e + r, c = n + r), f(h, u, c)), a = d(h, u, c);
                                        if (s < 0) {
                                            var o = i - s;
                                            h = i + (h - i) * i / o, u = i + (u - i) * i / o, c = i + (c - i) * i / o
                                        } if (a > 255) {
                                            var l = 255 - i, _ = a - i;
                                            h = i + (h - i) * l / _, u = i + (u - i) * l / _, c = i + (c - i) * l / _
                                        }
                                    }
                                    function v(t, e, n) { return d(t, e, n) - f(t, e, n) }
                                    function m(t, e, n, i) {
                                        var r, s = [t, e, n], a = d(t, e, n), o = f(t, e, n);
                                        r = 0 === f(o = o === t ? 0 : o === e ? 1 : 2, a = a === t ? 0 : a === e ? 1 : 2) ? 1 === d(o, a) ? 2 : 1 : 0, s[a] > s[o] ? (s[r] = (s[r] - s[o]) * i / (s[a] - s[o]), s[a] = i) : s[r] = s[a] = 0, s[o] = 0, h = s[0], u = s[1], c = s[2]
                                    } var y = {
                                        multiply:
                                            function () { h = r * t / 255, u = s * e / 255, c = a * n / 255 }, screen:
                                            function () { h = r + t - r * t / 255, u = s + e - s * e / 255, c = a + n - a * n / 255 }, overlay:
                                            function () { h = r < 128 ? 2 * r * t / 255 : 255 - 2 * (255 - r) * (255 - t) / 255, u = s < 128 ? 2 * s * e / 255 : 255 - 2 * (255 - s) * (255 - e) / 255, c = a < 128 ? 2 * a * n / 255 : 255 - 2 * (255 - a) * (255 - n) / 255 }, "soft-light":
                                            function () {
                                                var i = t * r / 255;
                                                h = i + r * (255 - (255 - r) * (255 - t) / 255 - i) / 255, u = (i = e * s / 255) + s * (255 - (255 - s) * (255 - e) / 255 - i) / 255, c = (i = n * a / 255) + a * (255 - (255 - a) * (255 - n) / 255 - i) / 255
                                            }, "hard-light":
                                            function () { h = t < 128 ? 2 * t * r / 255 : 255 - 2 * (255 - t) * (255 - r) / 255, u = e < 128 ? 2 * e * s / 255 : 255 - 2 * (255 - e) * (255 - s) / 255, c = n < 128 ? 2 * n * a / 255 : 255 - 2 * (255 - n) * (255 - a) / 255 }, "color-dodge":
                                            function () { h = 0 === r ? 0 : 255 === t ? 255 : f(255, 255 * r / (255 - t)), u = 0 === s ? 0 : 255 === e ? 255 : f(255, 255 * s / (255 - e)), c = 0 === a ? 0 : 255 === n ? 255 : f(255, 255 * a / (255 - n)) }, "color-burn":
                                            function () { h = 255 === r ? 255 : 0 === t ? 0 : d(0, 255 - 255 * (255 - r) / t), u = 255 === s ? 255 : 0 === e ? 0 : d(0, 255 - 255 * (255 - s) / e), c = 255 === a ? 255 : 0 === n ? 0 : d(0, 255 - 255 * (255 - a) / n) }, darken:
                                            function () { h = r < t ? r : t, u = s < e ? s : e, c = a < n ? a : n }, lighten:
                                            function () { h = r > t ? r : t, u = s > e ? s : e, c = a > n ? a : n }, difference:
                                            function () { (h = r - t) < 0 && (h = -h), (u = s - e) < 0 && (u = -u), (c = a - n) < 0 && (c = -c) }, exclusion:
                                            function () { h = r + t * (255 - r - r) / 255, u = s + e * (255 - s - s) / 255, c = a + n * (255 - a - a) / 255 }, hue:
                                            function () { m(t, e, n, v(r, s, a)), p(h, u, c, g(r, s, a)) }, saturation:
                                            function () { m(r, s, a, v(t, e, n)), p(h, u, c, g(r, s, a)) }, luminosity:
                                            function () { p(r, s, a, g(t, e, n)) }, color:
                                            function () { p(t, e, n, g(r, s, a)) }, add:
                                            function () { h = f(r + t, 255), u = f(s + e, 255), c = f(a + n, 255) }, subtract:
                                            function () { h = d(r - t, 0), u = d(s - e, 0), c = d(a - n, 0) }, average:
                                            function () { h = (r + t) / 2, u = (s + e) / 2, c = (a + n) / 2 }, negation:
                                            function () { h = 255 - _(255 - t - r), u = 255 - _(255 - e - s), c = 255 - _(255 - n - a) }
                                    }, x = this.nativeModes = l.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], (
                                        function (t) { this[t] = !0 }), {}), w = at.getContext(1, 1, { willReadFrequently: !0 });
                                    w && (l.each(y, (
                                        function (t, e) {
                                            var n = "darken" === e, i = !1;
                                            w.save();
                                            try { w.fillStyle = n ? "#300" : "#a00", w.fillRect(0, 0, 1, 1), w.globalCompositeOperation = e, w.globalCompositeOperation === e && (w.fillStyle = n ? "#a00" : "#300", w.fillRect(0, 0, 1, 1), i = w.getImageData(0, 0, 1, 1).data[0] !== n ? 170 : 51) } catch (t) { } w.restore(), x[e] = i
                                        })), at.release(w)), this.process =
                                        function (l, f, d, _, g) {
                                            var p = f.canvas, v = "normal" === l;
                                            if (v || x[l]) d.save(), d.setTransform(1, 0, 0, 1, 0, 0), d.globalAlpha = _, v || (d.globalCompositeOperation = l), d.drawImage(p, g.x, g.y), d.restore();
                                            else {
                                                var m = y[l];
                                                if (!m) return;
                                                for (var w = d.getImageData(g.x, g.y, p.width, p.height), b = w.data, S = f.getImageData(0, 0, p.width, p.height).data, C = 0, k = b.length;
                                                    C < k;
                                                    C += 4) {
                                                        t = S[C], r = b[C], e = S[C + 1], s = b[C + 1], n = S[C + 2], a = b[C + 2], i = S[C + 3], o = b[C + 3], m();
                                                    var P = i * _ / 255, M = 1 - P;
                                                    b[C] = P * h + M * r, b[C + 1] = P * u + M * s, b[C + 2] = P * c + M * a, b[C + 3] = i * _ + M * o
                                                } d.putImageData(w, g.x, g.y)
                                            }
                                        }
                                }, ht = new
                                    function () {
                                        var t = "http://www.w3.org/2000/svg", e = "http://www.w3.org/2000/xmlns", n = "http://www.w3.org/1999/xlink", i = { href: n, xlink: e, xmlns: e + "/", "xmlns:xlink": e + "/" };


                                        function r(t, e, n) {
                                            for (var r in e) {
                                                var s = e[r], a = i[r];
                                                "number" == typeof s && n && (s = n.number(s)), a ? t.setAttributeNS(a, r, s) : t.setAttribute(r, s)
                                            } return t
                                        } return {
                                            svg: t, xmlns: e, xlink: n, create:
                                                function (e, n, i) { return r(h.createElementNS(t, e), n, i) }, get:
                                                function (t, e) {
                                                    var n = i[e], r = n ? t.getAttributeNS(n, e) : t.getAttribute(e);
                                                    return "null" === r ? null : r
                                                }, set: r
                                        }
                                    }, lt = l.each({
                                        fillColor: ["fill", "color"], fillRule: ["fill-rule", "string"], strokeColor: ["stroke", "color"], strokeWidth: ["stroke-width", "number"], strokeCap: ["stroke-linecap", "string"], strokeJoin: ["stroke-linejoin", "string"], strokeScaling: ["vector-effect", "lookup", { true: "none", false: "non-scaling-stroke" },
                                            function (t, e) { return !e && (t instanceof B || t instanceof A || t instanceof $) }], miterLimit: ["stroke-miterlimit", "number"], dashArray: ["stroke-dasharray", "array"], dashOffset: ["stroke-dashoffset", "number"], fontFamily: ["font-family", "string"], fontWeight: ["font-weight", "string"], fontSize: ["font-size", "number"], justification: ["text-anchor", "lookup", { left: "start", center: "middle", right: "end" }], opacity: ["opacity", "number"], blendMode: ["mix-blend-mode", "style"]
                                    }, (
                                        function (t, e) {
                                            var n = l.capitalize(e), i = t[2];
                                            this[e] = {
                                                type: t[1], property: e, attribute: t[0], toSVG: i, fromSVG: i && l.each(i, (
                                                    function (t, e) { this[t] = e }), {}), exportFilter: t[3], get: "get" + n, set: "set" + n
                                            }
                                        }), {});
                    new
                        function () {
                            var t;

                            function e(e, n, i) {
                                var r, s = new l, a = e.getTranslation();
                                n && (e.isInvertible() ? (r = (e = e._shiftless())._inverseTransform(a), a = null) : r = new v, s[i ? "cx" : "x"] = r.x, s[i ? "cy" : "y"] = r.y);
                                if (!e.isIdentity()) {
                                    var o = e.decompose();
                                    if (o) {
                                        var h = [], u = o.rotation, c = o.scaling, f = o.skewing;
                                        a && !a.isZero() && h.push("translate(" + t.point(a) + ")"), u && h.push("rotate(" + t.number(u) + ")"), g.isZero(c.x - 1) && g.isZero(c.y - 1) || h.push("scale(" + t.point(c) + ")"), f.x && h.push("skewX(" + t.number(f.x) + ")"), f.y && h.push("skewY(" + t.number(f.y) + ")"), s.transform = h.join(" ")
                                    } else s.transform = "matrix(" + e.getValues().join(",") + ")"
                                } return s
                            }
                            function n(n, i) {
                                for (var r = e(n._matrix), s = n._children, a = ht.create("g", r, t), o = 0, h = s.length;
                                    o < h;
                                    o++) {
                                        var l = s[o], c = f(l, i);
                                    if (c) if (l.isClipMask()) {
                                        var d = ht.create("clipPath");
                                        d.appendChild(c), u(l, d, "clip"), ht.set(a, { "clip-path": "url(#" + d.id + ")" })
                                    } else a.appendChild(c)
                                } return a
                            }
                            function i(n) {
                                var i = n._type, r = n._radius, s = e(n._matrix, !0, "rectangle" !== i);
                                if ("rectangle" === i) {
                                    i = "rect";
                                    var a = n._size, o = a.width, h = a.height;
                                    s.x -= o / 2, s.y -= h / 2, s.width = o, s.height = h, r.isZero() && (r = null)
                                } return r && ("circle" === i ? s.r = r : (s.rx = r.width, s.ry = r.height)), ht.create(i, s, t)
                            } var r, a = {
                                Group: n, Layer: n, Raster:
                                    function (n, i) {
                                        var r = e(n._matrix, !0), s = n.getSize(), a = n.getImage();
                                        return r.x -= s.width / 2, r.y -= s.height / 2, r.width = s.width, r.height = s.height, r.href = 0 == i.embedImages && a && a.src || n.toDataURL(), ht.create("image", r, t)
                                    }, Path:
                                    function (n, r) {
                                        var s = r.matchShapes;
                                        if (s) {
                                            var a = n.toShape(!1);
                                            if (a) return i(a)
                                        } var o, h = n._segments, l = h.length, u = e(n._matrix);
                                        if (s && l >= 2 && !n.hasHandles()) if (l > 2) {
                                            o = n._closed ? "polygon" : "polyline";
                                            for (var c = [], f = 0;
                                                f < l;
                                                f++)c.push(t.point(h[f]._point));
                                            u.points = c.join(" ")
                                        } else {
                                            o = "line";
                                            var d = h[0]._point, _ = h[1]._point;
                                            u.set({ x1: d.x, y1: d.y, x2: _.x, y2: _.y })
                                        } else o = "path", u.d = n.getPathData(null, r.precision);
                                        return ht.create(o, u, t)
                                    }, Shape: i, CompoundPath:
                                    function (n, i) {
                                        var r = e(n._matrix), s = n.getPathData(null, i.precision);
                                        return s && (r.d = s), ht.create("path", r, t)
                                    }, SymbolItem:
                                    function (n, i) {
                                        var r = e(n._matrix, !0), s = n._definition, a = h(s, "symbol"), o = s._item, l = o.getStrokeBounds();
                                        return a || ((a = ht.create("symbol", { viewBox: t.rectangle(l) })).appendChild(f(o, i)), u(s, a, "symbol")), r.href = "#" + a.id, r.x += l.x, r.y += l.y, r.width = l.width, r.height = l.height, r.overflow = "visible", ht.create("use", r, t)
                                    }, PointText:
                                    function (n) {
                                        var i = ht.create("text", e(n._matrix, !0), t);
                                        return i.textContent = n._content, i
                                    }
                            };


                            function o(e, n, i, r) {
                                var s = {}, a = !r && e.getParent(), o = [];
                                return null != e._name && (s.id = e._name), l.each(lt, (
                                    function (n) {
                                        var r = n.get, c = n.type, f = e[r]();
                                        if (n.exportFilter ? n.exportFilter(e, f) : 0 == i.reduceAttributes || !a || !l.equals(a[r](), f)) {
                                            if ("color" === c && null != f) {
                                                var d = f.getAlpha();
                                                d < 1 && (s[n.attribute + "-opacity"] = d)
                                            } "style" === c ? o.push(n.attribute + ": " + f) : s[n.attribute] = null == f ? "none" : "color" === c ? f.gradient ?
                                                function (e) {
                                                    var n = h(e, "color");
                                                    if (!n) {
                                                        var i, r = e.getGradient(), s = r._radial, a = e.getOrigin(), o = e.getDestination();
                                                        if (s) {
                                                            i = { cx: a.x, cy: a.y, r: a.getDistance(o) };

                                                            var l = e.getHighlight();
                                                            l && (i.fx = l.x, i.fy = l.y)
                                                        } else i = { x1: a.x, y1: a.y, x2: o.x, y2: o.y };

                                                        i.gradientUnits = "userSpaceOnUse", n = ht.create((s ? "radial" : "linear") + "Gradient", i, t);
                                                        for (var c = r._stops, f = 0, d = c.length;
                                                            f < d;
                                                            f++) {
                                                                var _ = c[f], g = _._color, p = g.getAlpha();
                                                            i = { offset: _._offset ?? f / (d - 1) }, g && (i["stop-color"] = g.toCSS(!0)), p < 1 && (i["stop-opacity"] = p), n.appendChild(ht.create("stop", i, t))
                                                        } u(e, n, "color")
                                                    } return "url(#" + n.id + ")"
                                                }(f) : f.toCSS(!0) : "array" === c ? f.join(",") : "lookup" === c ? n.toSVG[f] : f
                                        }
                                    })), o.length && (s.style = o.join(";
")), 1 === s.opacity && delete s.opacity, e._visible || (s.visibility = "hidden"), ht.set(n, s, t)
                                                }
                            function h(t, e) { return r || (r = { ids: {}, svgs: {} }), t && r.svgs[e + "-" + (t._id || t.__id || (t.__id = p.get("svg")))] }
                            function u(t, e, n) {
                                r || h();
                                var i = r.ids[n] = (r.ids[n] || 0) + 1;
                                e.id = n + "-" + i, r.svgs[n + "-" + (t._id || t.__id)] = e
                            }
                            function c(t, e) {
                                var n = t, i = null;
                                if (r) {
                                    for (var a in n = "svg" === t.nodeName.toLowerCase() && t, r.svgs) i || (n || (n = ht.create("svg")).appendChild(t), i = n.insertBefore(ht.create("defs"), n.firstChild)), i.appendChild(r.svgs[a]);
                                    r = null
                                } return e.asString ? (new s.XMLSerializer).serializeToString(n) : n
                            }
                            function f(t, e, n) {
                                var i = a[t._class], r = i && i(t, e);
                                if (r) {
                                    var s = e.onExport;
                                    s && (r = s(t, r, e) || r);
                                    var h = JSON.stringify(t._data);
                                    h && "{}" !== h && "null" !== h && r.setAttribute("data-paper-data", h)
                                } return r && o(t, r, e, n)
                            }
                            function d(e) { return e || (e = {}), t = new _(e.precision), e } P.inject({
                                exportSVG:
                                    function (t) { return c(f(this, t = d(t), !0), t) }
                            }), k.inject({
                                exportSVG:
                                    function (n) {
                                        n = d(n);
                                        var i = this._children, r = this.getView(), s = l.pick(n.bounds, "view"), a = n.matrix || "view" === s && r._matrix, o = a && S.read([a]), h = "view" === s ? new w([0, 0], r.getViewSize()) : "content" === s ? P._getBounds(i, o, { stroke: !0 }).rect : w.read([s], 0, { readNull: !0 }), u = { version: "1.1", xmlns: ht.svg, "xmlns:xlink": ht.xlink };

                                        h && (u.width = h.width, u.height = h.height, (h.x || 0 === h.x || h.y || 0 === h.y) && (u.viewBox = t.rectangle(h)));
                                        var _ = ht.create("svg", u, t), g = _;
                                        o && !o.isIdentity() && (g = _.appendChild(ht.create("g", e(o), t)));
                                        for (var p = 0, v = i.length;
                                            p < v;
                                            p++)g.appendChild(f(i[p], n, !0));
                                        return c(_, n)
                                    }
                            })
                        }, new
                            function () {
                                var t, e = {};


                                function n(e, n, i, r, s, a) {
                                    var o = ht.get(e, n) || a, h = null == o ? r ? null : i ? "" : 0 : i ? o : parseFloat(o);
                                    return /%\s*$/.test(o) ? h / 100 * (s ? 1 : t[/x|^width/.test(n) ? "width" : "height"]) : h
                                }
                                function i(t, e, i, r, s, a, o) { return e = n(t, e || "x", !1, r, s, a), i = n(t, i || "y", !1, r, s, o), !r || null != e && null != i ? new v(e, i) : null }
                                function r(t, e, i, r, s) { return e = n(t, e || "width", !1, r, s), i = n(t, i || "height", !1, r, s), !r || null != e && null != i ? new y(e, i) : null }
                                function u(t, e, n) { return "none" === t ? null : "number" === e ? parseFloat(t) : "array" === e ? t ? t.split(/[\s,]+/g).map(parseFloat) : [] : "color" === e ? C(t) || t : "lookup" === e ? n[t] : t }
                                function c(t, e, n, i) {
                                    var r = t.childNodes, s = "clippath" === e, a = "defs" === e, o = new M, h = o._project, l = h._currentStyle, u = [];
                                    if (s || a || (o = b(o, t, i), h._currentStyle = o._style.clone()), i) for (var c = t.querySelectorAll("defs"), f = 0, d = c.length;
                                        f < d;
                                        f++)O(c[f], n, !1);
                                    for (f = 0, d = r.length;
                                        f < d;
                                        f++) {
                                            var _, g = r[f];
                                        1 !== g.nodeType || /^defs$/i.test(g.nodeName) || !(_ = O(g, n, !1)) || _ instanceof z || u.push(_)
                                    } return o.addChildren(u), s && (o = b(o.reduce(), t, i)), h._currentStyle = l, (s || a) && (o.remove(), o = null), o
                                }
                                function f(t, e) {
                                    for (var n = t.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g), i = [], r = 0, s = n.length;
                                        r < s;
                                        r += 2)i.push(new v(parseFloat(n[r]), parseFloat(n[r + 1])));
                                    var a = new D(i);
                                    return "polygon" === e && a.closePath(), a
                                }
                                function d(t, r) {
                                    var s, a = (n(t, "href", !0) || "").substring(1), o = "radialgradient" === r;
                                    if (a) (s = e[a].getGradient())._radial ^ o && ((s = s.clone())._radial = o);
                                    else {
                                        for (var h = t.childNodes, l = [], u = 0, c = h.length;
                                            u < c;
                                            u++) {
                                                var f = h[u];
                                            1 === f.nodeType && l.push(b(new U, f))
                                        } s = new Z(l, o)
                                    } var d, _, g, p = "userSpaceOnUse" !== n(t, "gradientUnits", !0);
                                    return o ? (_ = (d = i(t, "cx", "cy", !1, p, "50%", "50%")).add(n(t, "r", !1, !1, p, "50%"), 0), g = i(t, "fx", "fy", !0, p)) : (d = i(t, "x1", "y1", !1, p, "0%", "0%"), _ = i(t, "x2", "y2", !1, p, "100%", "0%")), b(new W(s, d, _, g), t)._scaleToBounds = p, null
                                } var _ = {
                                    "#document":
                                        function (t, e, n, i) {
                                            for (var r = t.childNodes, s = 0, a = r.length;
                                                s < a;
                                                s++) {
                                                    var o = r[s];
                                                if (1 === o.nodeType) return O(o, n, i)
                                            }
                                        }, g: c, svg: c, clippath: c, polygon: f, polyline: f, path:
                                        function (t) { return B.create(t.getAttribute("d")) }, lineargradient: d, radialgradient: d, image:
                                        function (t) {
                                            var e = new I(n(t, "href", !0));
                                            return e.on("load", (
                                                function () {
                                                    var e = r(t);
                                                    this.setSize(e);
                                                    var n = i(t).add(e.divide(2));
                                                    this._matrix.append((new S).translate(n))
                                                })), e
                                        }, symbol:
                                        function (t, e, n, i) { return new z(c(t, e, n, i), !0) }, defs: c, use:
                                        function (t) {
                                            var r = (n(t, "href", !0) || "").substring(1), s = e[r], a = i(t);
                                            return s ? s instanceof z ? s.place(a) : s.clone().translate(a) : null
                                        }, circle:
                                        function (t) { return new A.Circle(i(t, "cx", "cy"), n(t, "r")) }, ellipse:
                                        function (t) { return new A.Ellipse({ center: i(t, "cx", "cy"), radius: r(t, "rx", "ry") }) }, rect:
                                        function (t) { return new A.Rectangle(new w(i(t), r(t)), r(t, "rx", "ry")) }, line:
                                        function (t) { return new D.Line(i(t, "x1", "y1"), i(t, "x2", "y2")) }, text:
                                        function (t) {
                                            var e = new H(i(t).add(i(t, "dx", "dy")));
                                            return e.setContent(t.textContent.trim() || ""), e
                                        }, switch: c
                                };


                                function g(t, e, n, i) {
                                    if (t.transform) {
                                        for (var r = (i.getAttribute(n) || "").split(/\)\s*/g), s = new S, a = 0, o = r.length;
                                            a < o;
                                            a++) {
                                                var h = r[a];
                                            if (!h) break;
                                            for (var l = h.split(/\(\s*/), u = l[0].trim(), c = l[1].split(/[\s,]+/g), f = 0, d = c.length;
                                                f < d;
                                                f++)c[f] = parseFloat(c[f]);
                                            switch (u) {
                                                case "matrix": s.append(new S(c[0], c[1], c[2], c[3], c[4], c[5]));
                                                    break;
                                                case "rotate": s.rotate(c[0], c[1] || 0, c[2] || 0);
                                                    break;
                                                case "translate": s.translate(c[0], c[1] || 0);
                                                    break;
                                                case "scale": s.scale(c);
                                                    break;
                                                case "skewX": s.skew(c[0], 0);
                                                    break;
                                                case "skewY": s.skew(0, c[0])
                                            }
                                        } t.transform(s)
                                    }
                                }
                                function p(t, e, n) {
                                    var i = "fill-opacity" === n ? "getFillColor" : "getStrokeColor", r = t[i] && t[i]();
                                    r && r.setAlpha(parseFloat(e))
                                } var m = l.set(l.each(lt, (
                                    function (t) {
                                        this[t.attribute] =
                                            function (e, n) {
                                                if (e[t.set] && (e[t.set](u(n, t.type, t.fromSVG)), "color" === t.type)) {
                                                    var i = e[t.get]();
                                                    if (i && i._scaleToBounds) {
                                                        var r = e.getBounds();
                                                        i.transform((new S).translate(r.getPoint()).scale(r.getSize()))
                                                    }
                                                }
                                            }
                                    }), {}), {
                                    id:
                                        function (t, n) { e[n] = t, t.setName && t.setName(n) }, "clip-path":
                                        function (t, e) {
                                            var n = C(e);
                                            if (n) {
                                                if ((n = n.clone()).setClipMask(!0), !(t instanceof M)) return new M(n, t);
                                                t.insertChild(0, n)
                                            }
                                        }, gradientTransform: g, transform: g, "fill-opacity": p, "stroke-opacity": p, visibility:
                                        function (t, e) { t.setVisible && t.setVisible("visible" === e) }, display:
                                        function (t, e) { t.setVisible && t.setVisible(null !== e) }, "stop-color":
                                        function (t, e) { t.setColor && t.setColor(e) }, "stop-opacity":
                                        function (t, e) { t._color && t._color.setAlpha(parseFloat(e)) }, offset:
                                        function (t, e) {
                                            if (t.setOffset) {
                                                var n = e.match(/(.*)%$/);
                                                t.setOffset(n ? n[1] / 100 : parseFloat(e))
                                            }
                                        }, viewBox:
                                        function (t, e, n, i, s) {
                                            var a, o = new w(u(e, "array")), h = r(i, null, null, !0);
                                            if (t instanceof M) {
                                                var l = h ? h.divide(o.getSize()) : 1, c = (new S).scale(l).translate(o.getPoint().negate());
                                                a = t
                                            } else t instanceof z && (h && o.setSize(h), a = t._item);
                                            if (a) {
                                                if ("visible" !== x(i, "overflow", s)) {
                                                    var f = new A.Rectangle(o);
                                                    f.setClipMask(!0), a.addChild(f)
                                                } c && a.transform(c)
                                            }
                                        }
                                });

                                function x(t, e, n) {
                                    var i = t.attributes[e], r = i && i.value;
                                    if (!r && t.style) {
                                        var s = l.camelize(e);
                                        (r = t.style[s]) || n.node[s] === n.parent[s] || (r = n.node[s])
                                    } return r ? "none" === r ? null : r : a
                                }
                                function b(t, e, n) {
                                    var i = e.parentNode, r = { node: J.getStyles(e) || {}, parent: !n && !/^defs$/i.test(i.tagName) && J.getStyles(i) || {} };

                                    return l.each(m, (
                                        function (n, i) {
                                            var s = x(e, i, r);
                                            t = s !== a && n(t, s, i, e, r) || t
                                        })), t
                                }
                                function C(t) {
                                    var n = t && t.match(/\((?:["'#]*)([^"')]+)/), i = n && n[1], r = i && e[o ? i.replace(o.location.href.split("#")[0] + "#", "") : i];
                                    return r && r._scaleToBounds && ((r = r.clone())._scaleToBounds = !0), r
                                }
                                function O(n, i, s) {
                                    var a, o, u, c = n.nodeName.toLowerCase(), f = "#document" !== c, d = h.body;
                                    s && f && (t = ut.getView().getSize(), t = r(n, null, null, !0) || t, a = ht.create("svg", {
                                        style: "stroke-width: 1px;
 stroke- miterlimit: 10" }), o = n.parentNode, u = n.nextSibling, a.appendChild(n), d.appendChild(a));
 var g = ut.settings, p = g.applyMatrix, v = g.insertItems;
                                    g.applyMatrix = !1, g.insertItems = !1;
                                    var m = _[c], y = m && m(n, c, i, s) || null;
                                    if (g.insertItems = v, g.applyMatrix = p, y) {
                                        !f || y instanceof M || (y = b(y, n, s));
                                        var x = i.onImport, w = f && n.getAttribute("data-paper-data");
                                        x && (y = x(n, y, i) || y), i.expandShapes && y instanceof A && (y.remove(), y = y.toPath()), w && (y._data = JSON.parse(w))
                                    } return a && (d.removeChild(a), o && (u ? o.insertBefore(n, u) : o.appendChild(n))), s && (e = {}, y && l.pick(i.applyMatrix, p) && y.matrix.apply(!0, !0)), y
                                }
                                function T(t, e, n) {
                                    if (!t) return null;
                                    e = "function" == typeof e ? { onLoad: e } : e || {};

                                    var i = ut, r = null;

                                    function o(o) {
                                        try {
                                            var h = "object" == typeof o ? o : (new s.DOMParser).parseFromString(o.trim(), "image/svg+xml");
                                            if (!h.nodeName) throw h = null, new Error("Unsupported SVG source: " + t);
                                            ut = i, r = O(h, e, !0), e && !1 === e.insert || n._insertItem(a, r);
                                            var u = e.onLoad;
                                            u && u(r, o)
                                        } catch (t) { l(t) }
                                    }
                                    function l(t, n) {
                                        var i = e.onError;
                                        if (!i) throw new Error(t);
                                        i(t, n)
                                    } if ("string" != typeof t || /^[\s\S]*</.test(t)) {
                                        if ("undefined" != typeof File && t instanceof File) {
                                            var u = new FileReader;
                                            return u.onload =
                                                function () { o(u.result) }, u.onerror =
                                                function () { l(u.error) }, u.readAsText(t)
                                        } o(t)
                                    } else {
                                        var c = h.getElementById(t);
                                        c ? o(c) : st({ url: t, async: !0, onLoad: o, onError: l })
                                    } return r
                                } P.inject({
                                    importSVG:
                                        function (t, e) { return T(t, e, this) }
                                }), k.inject({
                                    importSVG:
                                        function (t, e) { return this.activate(), T(t, e, this) }
                                })
                            };

                    var ut = new (c.inject(l.exports, { Base: l, Numerical: g, Key: et, DomEvent: K, DomElement: J, document: h, window: o, Symbol: z, PlacedSymbol: T }));
                    return ut.agent.node && n("?1419")(ut), (r = "function" == typeof (i = ut) ? i.call(e, n, e, t) : i) === a || (t.exports = r), ut
                }).call(this, "object" == typeof self ? self : null)
        }, "?1419":
        function () { }, "?7e0a":
        function () { }, "./scripts/app.js":
        function (t, e, n) {
            "use strict";
            var i, r, s, a, o = t => {
                window.requestAnimationFrame((async 
function e() { document.body ? await t() : window.requestAnimationFrame(e) })) }, h = !1, l = !1, u = [], c = -1;

function f(t) {
    !
        function (t) {
            u.includes(t) || u.push(t);
            l || h || (h = !0, queueMicrotask(_))
        }(t)
}
function d(t) {
    let e = u.indexOf(t);
    -1 !== e && e > c && u.splice(e, 1)
}
function _() {
    h = !1, l = !0;
    for (let t = 0;
        t < u.length;
        t++)u[t](), c = t;
    u.length = 0, c = -1, l = !1
} var g = !0;

function p(t) { r = t }
function v(t, e) {
    let n, i = !0, a = r((() => {
        let r = t();
        JSON.stringify(r), i ? n = r : queueMicrotask((() => { e(r, n), n = r })), i = !1
    }));
    return () => s(a)
} var m = [], y = [], x = [];

function w(t, e) { "function" == typeof e ? (t._x_cleanups || (t._x_cleanups = []), t._x_cleanups.push(e)) : (e = t, y.push(e)) }
function b(t) { m.push(t) }
function S(t, e, n) { t._x_attributeCleanups || (t._x_attributeCleanups = {}), t._x_attributeCleanups[e] || (t._x_attributeCleanups[e] = []), t._x_attributeCleanups[e].push(n) }
function C(t, e) { t._x_attributeCleanups && Object.entries(t._x_attributeCleanups).forEach((([n, i]) => { (void 0 === e || e.includes(n)) && (i.forEach((t => t())), delete t._x_attributeCleanups[n]) })) } var k = new MutationObserver(E), P = !1;

function M() { k.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), P = !0 }
function O() {
    !
        function () {
            let t = k.takeRecords();
            A.push((() => t.length > 0 && E(t)));
            let e = A.length;
            queueMicrotask((() => {
                if (A.length === e) for (;
                    A.length > 0;
                )A.shift()()
            }))
        }(), k.disconnect(), P = !1
} var A = [];

function I(t) {
    if (!P) return t();
    O();
    let e = t();
    return M(), e
} var T = !1, z = [];

function E(t) {
    if (T) return void (z = z.concat(t));
    let e = [], n = new Set, i = new Map, r = new Map;
    for (let s = 0;
        s < t.length;
        s++)if (!t[s].target._x_ignoreMutationObserver && ("childList" === t[s].type && (t[s].removedNodes.forEach((t => { 1 === t.nodeType && t._x_marker && n.add(t) })), t[s].addedNodes.forEach((t => { 1 === t.nodeType && (n.has(t) ? n.delete(t) : t._x_marker || e.push(t)) }))), "attributes" === t[s].type)) {
            let e = t[s].target, n = t[s].attributeName, a = t[s].oldValue, o = () => { i.has(e) || i.set(e, []), i.get(e).push({ name: n, value: e.getAttribute(n) }) }, h = () => { r.has(e) || r.set(e, []), r.get(e).push(n) };

            e.hasAttribute(n) && null === a ? o() : e.hasAttribute(n) ? (h(), o()) : h()
        } r.forEach(((t, e) => { C(e, t) })), i.forEach(((t, e) => { m.forEach((n => n(e, t))) }));
    for (let t of n) e.some((e => e.contains(t))) || y.forEach((e => e(t)));
    for (let t of e) t.isConnected && x.forEach((e => e(t)));
    e = null, n = null, i = null, r = null
}
function L(t) { return R(j(t)) }
function N(t, e, n) { return t._x_dataStack = [e, ...j(n || t)], () => { t._x_dataStack = t._x_dataStack.filter((t => t !== e)) } }
function j(t) { return t._x_dataStack ? t._x_dataStack : "function" == typeof ShadowRoot && t instanceof ShadowRoot ? j(t.host) : t.parentNode ? j(t.parentNode) : [] }
function R(t) { return new Proxy({ objects: t }, B) } var B = {
    ownKeys: ({ objects: t }) => Array.from(new Set(t.flatMap((t => Object.keys(t))))), has: ({ objects: t }, e) => e != Symbol.unscopables && t.some((t => Object.prototype.hasOwnProperty.call(t, e) || Reflect.has(t, e))), get: ({ objects: t }, e, n) => "toJSON" == e ? D : Reflect.get(t.find((t => Reflect.has(t, e))) || {}, e, n), set({ objects: t }, e, n, i) {
        const r = t.find((t => Object.prototype.hasOwnProperty.call(t, e))) || t[t.length - 1], s = Object.getOwnPropertyDescriptor(r, e);
        return s?.set && s?.get ? s.set.call(i, n) || !0 : Reflect.set(r, e, n)
    }
};


function D() { return Reflect.ownKeys(this).reduce(((t, e) => (t[e] = Reflect.get(this, e), t)), {}) }
function F(t) {
    let e = (n, i = "") => {
        Object.entries(Object.getOwnPropertyDescriptors(n)).forEach((([r, { value: s, enumerable: a }]) => {
            if (!1 === a || void 0 === s) return;
            if ("object" == typeof s && null !== s && s.__v_skip) return;
            let o = "" === i ? r : `${i}.${r}`;
            var h;
            "object" == typeof s && null !== s && s._x_interceptor ? n[r] = s.initialize(t, o, r) : "object" != typeof (h = s) || Array.isArray(h) || null === h || s === n || s instanceof Element || e(s, o)
        }))
    };

    return e(t)
}
function q(t, e = () => { }) {
    let n = {
        initialValue: void 0, _x_interceptor: !0, initialize(e, n, i) {
            return t(this.initialValue, (() =>
                function (t, e) { return e.split(".").reduce(((t, e) => t[e]), t) }(e, n)), (t => V(e, n, t)), n, i)
        }
    };

    return e(n), t => {
        if ("object" == typeof t && null !== t && t._x_interceptor) {
            let e = n.initialize.bind(n);
            n.initialize = (i, r, s) => {
                let a = t.initialize(i, r, s);
                return n.initialValue = a, e(i, r, s)
            }
        } else n.initialValue = t;
        return n
    }
}
function V(t, e, n) {
    if ("string" == typeof e && (e = e.split(".")), 1 !== e.length) {
        if (0 === e.length) throw error;
        return t[e[0]] || (t[e[0]] = {}), V(t[e[0]], e.slice(1), n)
    } t[e[0]] = n
} var $ = {};


function H(t, e) { $[t] = e }
function W(t, e) {
    let n =
        function (t) {
            let [e, n] = ct(t), i = { interceptor: q, ...e };

            return w(t, n), i
        }(e);
    return Object.entries($).forEach((([i, r]) => { Object.defineProperty(t, `$${i}`, { get: () => r(e, n), enumerable: !1 }) })), t
}
function Z(t, e, n, ...i) { try { return n(...i) } catch (n) { U(n, t, e) } }
function U(t, e, n = void 0) { t = Object.assign(t ?? { message: "No error message given." }, { el: e, expression: n }), console.warn(`Alpine Expression Error: ${t.message}\n\n${n ? 'Expression: "' + n + '"\n\n' : ""}`, e), setTimeout((() => { throw t }), 0) } var G = !0;

function J(t) {
    let e = G;
    G = !1;
    let n = t();
    return G = e, n
}
function K(t, e, n = {}) {
    let i;
    return Y(t, e)((t => i = t), n), i
}
function Y(...t) { return X(...t) } var X = Q;

function Q(t, e) {
    let n = {};

    W(n, t);
    let i = [n, ...j(t)], r = "function" == typeof e ?
        function (t, e) { return (n = () => { }, { scope: i = {}, params: r = [] } = {}) => { et(n, e.apply(R([i, ...t]), r)) } }(i, e) :
        function (t, e, n) {
            let i =
                function (t, e) {
                    if (tt[t]) return tt[t];
                    let n = Object.getPrototypeOf((async 
function () { })).constructor, i = /^[\n\s]*if.*\(.*\)/.test(t.trim()) || /^(let|const)\s/.test(t.trim()) ? `(async()=>{ ${t} })()` : t;
                    const r = () => {
                        try {
                            let e = new n(["__self", "scope"], `with (scope) { __self.result = ${i} };

 __self.finished = true;
 return __self.result;
`);
                            return Object.defineProperty(e, "name", { value: `[Alpine] ${t}` }), e
                        } catch (n) { return U(n, e, t), Promise.resolve() }
                    };

                    let s = r();
                    return tt[t] = s, s
                }(e, n);
            return (r = () => { }, { scope: s = {}, params: a = [] } = {}) => {
                i.result = void 0, i.finished = !1;
                let o = R([s, ...t]);
                if ("function" == typeof i) {
                    let t = i(i, o).catch((t => U(t, n, e)));
                    i.finished ? (et(r, i.result, o, a, n), i.result = void 0) : t.then((t => { et(r, t, o, a, n) })).catch((t => U(t, n, e))).finally((() => i.result = void 0))
                }
            }
        }(i, e, t);
    return Z.bind(null, t, e, r)
} var tt = {};


function et(t, e, n, i, r) {
    if (G && "function" == typeof e) {
        let s = e.apply(n, i);
        s instanceof Promise ? s.then((e => et(t, e, n, i))).catch((t => U(t, r, e))) : t(s)
    } else "object" == typeof e && e instanceof Promise ? e.then((e => t(e))) : t(e)
} var nt = "x-";

function it(t = "") { return nt + t } var rt = {};


function st(t, e) {
    return rt[t] = e, {
        before(e) {
            if (!rt[e]) return void console.warn(String.raw`Cannot find directive \`${e}\`. \`${t}\` will use the default order of execution`);
            const n = yt.indexOf(e);
            yt.splice(n >= 0 ? n : yt.indexOf("DEFAULT"), 0, t)
        }
    }
}
function at(t, e, n) {
    if (e = Array.from(e), t._x_virtualDirectives) {
        let n = Object.entries(t._x_virtualDirectives).map((([t, e]) => ({ name: t, value: e }))), i = ot(n);
        n = n.map((t => i.find((e => e.name === t.name)) ? { name: `x-bind:${t.name}`, value: `"${t.value}"` } : t)), e = e.concat(n)
    } let i = {}, r = e.map(dt(((t, e) => i[t] = e))).filter(pt).map(
        function (t, e) {
            return ({ name: n, value: i }) => {
                let r = n.match(vt()), s = n.match(/:([a-zA-Z0-9\-_:]+)/), a = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [], o = e || t[n] || n;
                return { type: r ? r[1] : null, value: s ? s[1] : null, modifiers: a.map((t => t.replace(".", ""))), expression: i, original: o }
            }
        }(i, n)).sort(xt);
    return r.map((e =>
        function (t, e) {
            let n = () => { }, i = rt[e.type] || n, [r, s] = ct(t);
            S(t, e.original, s);
            let a = () => { t._x_ignore || t._x_ignoreSelf || (i.inline && i.inline(t, e, r), i = i.bind(i, t, e, r), ht ? lt.get(ut).push(i) : i()) };

            return a.runCleanups = s, a
        }(t, e)))
}
function ot(t) { return Array.from(t).map(dt()).filter((t => !pt(t))) } var ht = !1, lt = new Map, ut = Symbol();

function ct(t) {
    let e = [], [n, i] =
        function (t) {
            let e = () => { };

            return [n => {
                let i = r(n);
                return t._x_effects || (t._x_effects = new Set, t._x_runEffects = () => { t._x_effects.forEach((t => t())) }), t._x_effects.add(i), e = () => { void 0 !== i && (t._x_effects.delete(i), s(i)) }, i
            }, () => { e() }]
        }(t);
    e.push(i);
    return [{ Alpine: ye, effect: n, cleanup: t => e.push(t), evaluateLater: Y.bind(Y, t), evaluate: K.bind(K, t) }, () => e.forEach((t => t()))]
} var ft = (t, e) => ({ name: n, value: i }) => (n.startsWith(t) && (n = n.replace(t, e)), { name: n, value: i });

function dt(t = () => { }) {
    return ({ name: e, value: n }) => {
        let { name: i, value: r } = _t.reduce(((t, e) => e(t)), { name: e, value: n });
        return i !== e && t(i, e), { name: i, value: r }
    }
} var _t = [];

function gt(t) { _t.push(t) }
function pt({ name: t }) { return vt().test(t) } var vt = () => new RegExp(`^${nt}([^:^.]+)\\b`);
var mt = "DEFAULT", yt = ["ignore", "ref", "data", "id", "anchor", "bind", "init", "for", "model", "modelable", "transition", "show", "if", mt, "teleport"];

function xt(t, e) {
    let n = -1 === yt.indexOf(t.type) ? mt : t.type, i = -1 === yt.indexOf(e.type) ? mt : e.type;
    return yt.indexOf(n) - yt.indexOf(i)
}
function wt(t, e, n = {}) { t.dispatchEvent(new CustomEvent(e, { detail: n, bubbles: !0, composed: !0, cancelable: !0 })) }
function bt(t, e) {
    if ("function" == typeof ShadowRoot && t instanceof ShadowRoot) return void Array.from(t.children).forEach((t => bt(t, e)));
    let n = !1;
    if (e(t, (() => n = !0)), n) return;
    let i = t.firstElementChild;
    for (;
        i;
    )bt(i, e), i = i.nextElementSibling
}
function St(t, ...e) { console.warn(`Alpine Warning: ${t}`, ...e) } var Ct = !1;
var kt = [], Pt = [];

function Mt() { return kt.map((t => t())) }
function Ot() { return kt.concat(Pt).map((t => t())) }
function At(t) { kt.push(t) }
function It(t) { Pt.push(t) }
function Tt(t, e = !1) { return zt(t, (t => { if ((e ? Ot() : Mt()).some((e => t.matches(e)))) return !0 })) }
function zt(t, e) {
    if (t) {
        if (e(t)) return t;
        if (t._x_teleportBack && (t = t._x_teleportBack), t.parentElement) return zt(t.parentElement, e)
    }
} var Et = [];
var Lt = 1;

function Nt(t, e = bt, n = () => { }) {
    zt(t, (t => t._x_ignore)) ||
        function (t) {
            ht = !0;
            let e = Symbol();
            ut = e, lt.set(e, []);
            let n = () => {
                for (;
                    lt.get(e).length;
                )lt.get(e).shift()();
                lt.delete(e)
            };

            t(n), ht = !1, n()
        }((() => { e(t, ((t, e) => { t._x_marker || (n(t, e), Et.forEach((n => n(t, e))), at(t, t.attributes).forEach((t => t())), t._x_ignore || (t._x_marker = Lt++), t._x_ignore && e()) })) }))
}
function jt(t, e = bt) {
    e(t, (t => {
        !
            function (t) {
                for (t._x_effects?.forEach(d);
                    t._x_cleanups?.length;
                )t._x_cleanups.pop()()
            }(t), C(t), delete t._x_marker
    }))
} var Rt = [], Bt = !1;

function Dt(t = () => { }) { return queueMicrotask((() => { Bt || setTimeout((() => { Ft() })) })), new Promise((e => { Rt.push((() => { t(), e() })) })) }
function Ft() {
    for (Bt = !1;
        Rt.length;
    )Rt.shift()()
}
function qt(t, e) {
    return Array.isArray(e) ? Vt(t, e.join(" ")) : "object" == typeof e && null !== e ?
        function (t, e) {
            let n = t => t.split(" ").filter(Boolean), i = Object.entries(e).flatMap((([t, e]) => !!e && n(t))).filter(Boolean), r = Object.entries(e).flatMap((([t, e]) => !e && n(t))).filter(Boolean), s = [], a = [];
            return r.forEach((e => { t.classList.contains(e) && (t.classList.remove(e), a.push(e)) })), i.forEach((e => { t.classList.contains(e) || (t.classList.add(e), s.push(e)) })), () => { a.forEach((e => t.classList.add(e))), s.forEach((e => t.classList.remove(e))) }
        }(t, e) : "function" == typeof e ? qt(t, e()) : Vt(t, e)
}
function Vt(t, e) {
    return e = !0 === e ? e = "" : e || "", n = e.split(" ").filter((e => !t.classList.contains(e))).filter(Boolean), t.classList.add(...n), () => { t.classList.remove(...n) };

    var n
}
function $t(t, e) {
    return "object" == typeof e && null !== e ?
        function (t, e) {
            let n = {};

            return Object.entries(e).forEach((([e, i]) => { n[e] = t.style[e], e.startsWith("--") || (e = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()), t.style.setProperty(e, i) })), setTimeout((() => { 0 === t.style.length && t.removeAttribute("style") })), () => { $t(t, n) }
        }(t, e) :
        function (t, e) {
            let n = t.getAttribute("style", e);
            return t.setAttribute("style", e), () => { t.setAttribute("style", n || "") }
        }(t, e)
}
function Ht(t, e = () => { }) {
    let n = !1;
    return
    function () { n ? e.apply(this, arguments) : (n = !0, t.apply(this, arguments)) }
}
function Wt(t, e, n = {}) { t._x_transition || (t._x_transition = { enter: { during: n, start: n, end: n }, leave: { during: n, start: n, end: n }, in(n = () => { }, i = () => { }) { Ut(t, e, { during: this.enter.during, start: this.enter.start, end: this.enter.end }, n, i) }, out(n = () => { }, i = () => { }) { Ut(t, e, { during: this.leave.during, start: this.leave.start, end: this.leave.end }, n, i) } }) }
function Zt(t) {
    let e = t.parentNode;
    if (e) return e._x_hidePromise ? e : Zt(e)
}
function Ut(t, e, { during: n, start: i, end: r } = {}, s = () => { }, a = () => { }) {
    if (t._x_transitioning && t._x_transitioning.cancel(), 0 === Object.keys(n).length && 0 === Object.keys(i).length && 0 === Object.keys(r).length) return s(), void a();
    let o, h, l;
    !
        function (t, e) {
            let n, i, r, s = Ht((() => { I((() => { n = !0, i || e.before(), r || (e.end(), Ft()), e.after(), t.isConnected && e.cleanup(), delete t._x_transitioning })) }));
            t._x_transitioning = {
                beforeCancels: [], beforeCancel(t) { this.beforeCancels.push(t) }, cancel: Ht((
                    function () {
                        for (;
                            this.beforeCancels.length;
                        )this.beforeCancels.shift()();
                        s()
                    })), finish: s
            }, I((() => { e.start(), e.during() })), Bt = !0, requestAnimationFrame((() => {
                if (n) return;
                let s = 1e3 * Number(getComputedStyle(t).transitionDuration.replace(/,.*/, "").replace("s", "")), a = 1e3 * Number(getComputedStyle(t).transitionDelay.replace(/,.*/, "").replace("s", ""));
                0 === s && (s = 1e3 * Number(getComputedStyle(t).animationDuration.replace("s", ""))), I((() => { e.before() })), i = !0, requestAnimationFrame((() => { n || (I((() => { e.end() })), Ft(), setTimeout(t._x_transitioning.finish, s + a), r = !0) }))
            }))
        }(t, { start() { o = e(t, i) }, during() { h = e(t, n) }, before: s, end() { o(), l = e(t, r) }, after: a, cleanup() { h(), l() } })
}
function Gt(t, e, n) {
    if (-1 === t.indexOf(e)) return n;
    const i = t[t.indexOf(e) + 1];
    if (!i) return n;
    if ("scale" === e && isNaN(i)) return n;
    if ("duration" === e || "delay" === e) {
        let t = i.match(/([0-9]+)ms/);
        if (t) return t[1]
    } return "origin" === e && ["top", "right", "left", "center", "bottom"].includes(t[t.indexOf(e) + 2]) ? [i, t[t.indexOf(e) + 2]].join(" ") : i
} st("transition", ((t, { value: e, modifiers: n, expression: i }, { evaluate: r }) => {
    "function" == typeof i && (i = r(i)), !1 !== i && (i && "boolean" != typeof i ?
        function (t, e, n) {
            Wt(t, qt, "");
            let i = { enter: e => { t._x_transition.enter.during = e }, "enter-start": e => { t._x_transition.enter.start = e }, "enter-end": e => { t._x_transition.enter.end = e }, leave: e => { t._x_transition.leave.during = e }, "leave-start": e => { t._x_transition.leave.start = e }, "leave-end": e => { t._x_transition.leave.end = e } };

            i[n](e)
        }(t, i, e) :
        function (t, e, n) {
            Wt(t, $t);
            let i = !e.includes("in") && !e.includes("out") && !n, r = i || e.includes("in") || ["enter"].includes(n), s = i || e.includes("out") || ["leave"].includes(n);
            e.includes("in") && !i && (e = e.filter(((t, n) => n < e.indexOf("out"))));
            e.includes("out") && !i && (e = e.filter(((t, n) => n > e.indexOf("out"))));
            let a = !e.includes("opacity") && !e.includes("scale"), o = a || e.includes("opacity"), h = a || e.includes("scale"), l = o ? 0 : 1, u = h ? Gt(e, "scale", 95) / 100 : 1, c = Gt(e, "delay", 0) / 1e3, f = Gt(e, "origin", "center"), d = "opacity, transform", _ = Gt(e, "duration", 150) / 1e3, g = Gt(e, "duration", 75) / 1e3, p = "cubic-bezier(0.4, 0.0, 0.2, 1)";
            r && (t._x_transition.enter.during = { transformOrigin: f, transitionDelay: `${c}s`, transitionProperty: d, transitionDuration: `${_}s`, transitionTimingFunction: p }, t._x_transition.enter.start = { opacity: l, transform: `scale(${u})` }, t._x_transition.enter.end = { opacity: 1, transform: "scale(1)" });
            s && (t._x_transition.leave.during = { transformOrigin: f, transitionDelay: `${c}s`, transitionProperty: d, transitionDuration: `${g}s`, transitionTimingFunction: p }, t._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }, t._x_transition.leave.end = { opacity: l, transform: `scale(${u})` })
        }(t, n, e))
})), window.Element.prototype._x_toggleAndCascadeWithTransitions =
    function (t, e, n, i) {
        const r = "visible" === document.visibilityState ? requestAnimationFrame : setTimeout;
        let s = () => r(n);
        e ? t._x_transition && (t._x_transition.enter || t._x_transition.leave) ? t._x_transition.enter && (Object.entries(t._x_transition.enter.during).length || Object.entries(t._x_transition.enter.start).length || Object.entries(t._x_transition.enter.end).length) ? t._x_transition.in(n) : s() : t._x_transition ? t._x_transition.in(n) : s() : (t._x_hidePromise = t._x_transition ? new Promise(((e, n) => { t._x_transition.out((() => { }), (() => e(i))), t._x_transitioning && t._x_transitioning.beforeCancel((() => n({ isFromCancelledTransition: !0 }))) })) : Promise.resolve(i), queueMicrotask((() => {
            let e = Zt(t);
            e ? (e._x_hideChildren || (e._x_hideChildren = []), e._x_hideChildren.push(t)) : r((() => {
                let e = t => {
                    let n = Promise.all([t._x_hidePromise, ...(t._x_hideChildren || []).map(e)]).then((([t]) => t?.()));
                    return delete t._x_hidePromise, delete t._x_hideChildren, n
                };

                e(t).catch((t => { if (!t.isFromCancelledTransition) throw t }))
            }))
        })))
    };

var Jt = !1;

function Kt(t, e = () => { }) { return (...n) => Jt ? e(...n) : t(...n) } var Yt = [];

function Xt(t) { Yt.push(t) } var Qt = !1;

function te(t) {
    let e = r;
    p(((t, n) => {
        let i = e(t);
        return s(i), () => { }
    })), t(), p(e)
}
function ee(t, e, n, r = []) {
    switch (t._x_bindings || (t._x_bindings = i({})), t._x_bindings[e] = n, e = r.includes("camel") ? e.toLowerCase().replace(/-(\w)/g, ((t, e) => e.toUpperCase())) : e) {
        case "value": !
            function (t, e) {
                if (le(t)) void 0 === t.attributes.value && (t.value = e), window.fromModel && (t.checked = "boolean" == typeof e ? re(t.value) === e : ie(t.value, e));
                else if (he(t)) Number.isInteger(e) ? t.value = e : Array.isArray(e) || "boolean" == typeof e || [null, void 0].includes(e) ? Array.isArray(e) ? t.checked = e.some((e => ie(e, t.value))) : t.checked = !!e : t.value = String(e);
                else if ("SELECT" === t.tagName) !
                    function (t, e) {
                        const n = [].concat(e).map((t => t + ""));
                        Array.from(t.options).forEach((t => { t.selected = n.includes(t.value) }))
                    }(t, e);
                else {
                    if (t.value === e) return;
                    t.value = void 0 === e ? "" : e
                }
            }(t, n);
            break;
        case "style": !
            function (t, e) {
                t._x_undoAddedStyles && t._x_undoAddedStyles();
                t._x_undoAddedStyles = $t(t, e)
            }(t, n);
            break;
        case "class": !
            function (t, e) {
                t._x_undoAddedClasses && t._x_undoAddedClasses();
                t._x_undoAddedClasses = qt(t, e)
            }(t, n);
            break;
        case "selected": case "checked": !
            function (t, e, n) {
                ne(t, e, n),
                    function (t, e, n) { t[e] !== n && (t[e] = n) }(t, e, n)
            }(t, e, n);
            break;
        default: ne(t, e, n)
    }
}
function ne(t, e, n) {
    [null, void 0, !1].includes(n) &&
        function (t) { return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(t) }(e) ? t.removeAttribute(e) : (ae(e) && (n = e),
            function (t, e, n) { t.getAttribute(e) != n && t.setAttribute(e, n) }(t, e, n))
}
function ie(t, e) { return t == e }
function re(t) { return !![1, "1", "true", "on", "yes", !0].includes(t) || ![0, "0", "false", "off", "no", !1].includes(t) && (t ? Boolean(t) : null) } var se = new Set(["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "inert", "ismap", "itemscope", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected", "shadowrootclonable", "shadowrootdelegatesfocus", "shadowrootserializable"]);

function ae(t) { return se.has(t) }
function oe(t, e, n) {
    let i = t.getAttribute(e);
    return null === i ? "function" == typeof n ? n() : n : "" === i || (ae(e) ? !![e, "true"].includes(i) : i)
}
function he(t) { return "checkbox" === t.type || "ui-checkbox" === t.localName || "ui-switch" === t.localName }
function le(t) { return "radio" === t.type || "ui-radio" === t.localName }
function ue(t, e) {
    var n;
    return
    function () {
        var i = this, r = arguments;
        clearTimeout(n), n = setTimeout((
            function () { n = null, t.apply(i, r) }), e)
    }
}
function ce(t, e) {
    let n;
    return
    function () {
        let i = this, r = arguments;
        n || (t.apply(i, r), n = !0, setTimeout((() => n = !1), e))
    }
}
function fe({ get: t, set: e }, { get: n, set: i }) {
    let a, o, h = !0, l = r((() => {
        let r = t(), s = n();
        if (h) i(de(r)), h = !1;
        else {
            let t = JSON.stringify(r), n = JSON.stringify(s);
            t !== a ? i(de(r)) : t !== n && e(de(s))
        } a = JSON.stringify(t()), o = JSON.stringify(n())
    }));
    return () => { s(l) }
}
function de(t) { return "object" == typeof t ? JSON.parse(JSON.stringify(t)) : t } var _e = {}, ge = !1;
var pe = {};


function ve(t, e, n) {
    let i = [];
    for (;
        i.length;
    )i.pop()();
    let r = Object.entries(e).map((([t, e]) => ({ name: t, value: e }))), s = ot(r);
    return r = r.map((t => s.find((e => e.name === t.name)) ? { name: `x-bind:${t.name}`, value: `"${t.value}"` } : t)), at(t, r, n).map((t => { i.push(t.runCleanups), t() })), () => {
        for (;
            i.length;
        )i.pop()()
    }
} var me = {};

var ye = {
    get reactive() { return i }, get release() { return s }, get effect() { return r }, get raw() { return a }, version: "3.14.8", flushAndStopDeferringMutations:
        function () { T = !1, E(z), z = [] }, dontAutoEvaluateFunctions: J, disableEffectScheduling:
        function (t) { g = !1, t(), g = !0 }, startObservingMutations: M, stopObservingMutations: O, setReactivityEngine:
        function (t) { i = t.reactive, s = t.release, r = e => t.effect(e, { scheduler: t => { g ? f(t) : t() } }), a = t.raw }, onAttributeRemoved: S, onAttributesAdded: b, closestDataStack: j, skipDuringClone: Kt, onlyDuringClone:
        function (t) { return (...e) => Jt && t(...e) }, addRootSelector: At, addInitSelector: It, interceptClone: Xt, addScopeToNode: N, deferMutations:
        function () { T = !0 }, mapAttributes: gt, evaluateLater: Y, interceptInit:
        function (t) { Et.push(t) }, setEvaluator:
        function (t) { X = t }, mergeProxies: R, extractProp:
        function (t, e, n, i = !0) {
            if (t._x_bindings && void 0 !== t._x_bindings[e]) return t._x_bindings[e];
            if (t._x_inlineBindings && void 0 !== t._x_inlineBindings[e]) {
                let n = t._x_inlineBindings[e];
                return n.extract = i, J((() => K(t, n.expression)))
            } return oe(t, e, n)
        }, findClosest: zt, onElRemoved: w, closestRoot: Tt, destroyTree: jt, interceptor: q, transition: Ut, setStyles: $t, mutateDom: I, directive: st, entangle: fe, throttle: ce, debounce: ue, evaluate: K, initTree: Nt, nextTick: Dt, prefixed: it, prefix:
        function (t) { nt = t }, plugin:
        function (t) { (Array.isArray(t) ? t : [t]).forEach((t => t(ye))) }, magic: H, store:
        function (t, e) {
            if (ge || (_e = i(_e), ge = !0), void 0 === e) return _e[t];
            _e[t] = e, F(_e[t]), "object" == typeof e && null !== e && e.hasOwnProperty("init") && "function" == typeof e.init && _e[t].init()
        }, start:
        function () {
            var t;
            Ct && St("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), Ct = !0, document.body || St("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), wt(document, "alpine:init"), wt(document, "alpine:initializing"), M(), t = t => Nt(t, bt), x.push(t), w((t => jt(t))), b(((t, e) => { at(t, e).forEach((t => t())) })), Array.from(document.querySelectorAll(Ot().join(","))).filter((t => !Tt(t.parentElement, !0))).forEach((t => { Nt(t) })), wt(document, "alpine:initialized"), setTimeout((() => {
                [["ui", "dialog", ["[x-dialog], [x-popover]"]], ["anchor", "anchor", ["[x-anchor]"]], ["sort", "sort", ["[x-sort]"]]].forEach((([t, e, n]) => {
                    var i;
                    i = e, Object.keys(rt).includes(i) || n.some((e => { if (document.querySelector(e)) return St(`found "${e}", but missing ${t} plugin`), !0 }))
                }))
            }))
        }, clone:
        function (t, e) {
            e._x_dataStack || (e._x_dataStack = t._x_dataStack), Jt = !0, Qt = !0, te((() => {
                !
                    function (t) {
                        let e = !1;
                        Nt(t, ((t, n) => {
                            bt(t, ((t, i) => {
                                if (e &&
                                    function (t) { return Mt().some((e => t.matches(e))) }(t)) return i();
                                e = !0, n(t, i)
                            }))
                        }))
                    }(e)
            })), Jt = !1, Qt = !1
        }, cloneNode:
        function (t, e) { Yt.forEach((n => n(t, e))), Jt = !0, te((() => { Nt(e, ((t, e) => { e(t, (() => { })) })) })), Jt = !1 }, bound:
        function (t, e, n) { return t._x_bindings && void 0 !== t._x_bindings[e] ? t._x_bindings[e] : oe(t, e, n) }, $data: L, watch: v, walk: bt, data:
        function (t, e) { me[t] = e }, bind:
        function (t, e) {
            let n = "function" != typeof e ? () => e : e;
            return t instanceof Element ? ve(t, n()) : (pe[t] = n, () => { })
        }
};


function xe(t, e) {
    const n = Object.create(null), i = t.split(",");
    for (let t = 0;
        t < i.length;
        t++)n[i[t]] = !0;
    return e ? t => !!n[t.toLowerCase()] : t => !!n[t]
} var we, be = Object.freeze({}), Se = (Object.freeze([]), Object.prototype.hasOwnProperty), Ce = (t, e) => Se.call(t, e), ke = Array.isArray, Pe = t => "[object Map]" === Ie(t), Me = t => "symbol" == typeof t, Oe = t => null !== t && "object" == typeof t, Ae = Object.prototype.toString, Ie = t => Ae.call(t), Te = t => Ie(t).slice(8, -1), ze = t => "string" == typeof t && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t, Ee = t => {
    const e = Object.create(null);
    return n => e[n] || (e[n] = t(n))
}, Le = /-(\w)/g, Ne = (Ee((t => t.replace(Le, ((t, e) => e ? e.toUpperCase() : "")))), /\B([A-Z])/g), je = (Ee((t => t.replace(Ne, "-$1").toLowerCase())), Ee((t => t.charAt(0).toUpperCase() + t.slice(1)))), Re = (Ee((t => t ? `on${je(t)}` : "")), (t, e) => t !== e && (t == t || e == e)), Be = new WeakMap, De = [], Fe = Symbol("iterate"), qe = Symbol("Map key iterate");
var Ve = 0;

function $e(t) {
    const { deps: e } = t;
    if (e.length) {
        for (let n = 0;
            n < e.length;
            n++)e[n].delete(t);
        e.length = 0
    }
} var He = !0, We = [];

function Ze() {
    const t = We.pop();
    He = void 0 === t || t
}
function Ue(t, e, n) {
    if (!He || void 0 === we) return;
    let i = Be.get(t);
    i || Be.set(t, i = new Map);
    let r = i.get(n);
    r || i.set(n, r = new Set), r.has(we) || (r.add(we), we.deps.push(r), we.options.onTrack && we.options.onTrack({ effect: we, target: t, type: e, key: n }))
}
function Ge(t, e, n, i, r, s) {
    const a = Be.get(t);
    if (!a) return;
    const o = new Set, h = t => { t && t.forEach((t => { (t !== we || t.allowRecurse) && o.add(t) })) };

    if ("clear" === e) a.forEach(h);
    else if ("length" === n && ke(t)) a.forEach(((t, e) => { ("length" === e || e >= i) && h(t) }));
    else switch (void 0 !== n && h(a.get(n)), e) {
        case "add": ke(t) ? ze(n) && h(a.get("length")) : (h(a.get(Fe)), Pe(t) && h(a.get(qe)));
            break;
        case "delete": ke(t) || (h(a.get(Fe)), Pe(t) && h(a.get(qe)));
            break;
        case "set": Pe(t) && h(a.get(Fe))
    }o.forEach((a => { a.options.onTrigger && a.options.onTrigger({ effect: a, target: t, key: n, type: e, newValue: i, oldValue: r, oldTarget: s }), a.options.scheduler ? a.options.scheduler(a) : a() }))
} var Je = xe("__proto__,__v_isRef,__isVue"), Ke = new Set(Object.getOwnPropertyNames(Symbol).map((t => Symbol[t])).filter(Me)), Ye = en(), Xe = en(!0), Qe = tn();

function tn() {
    const t = {};

    return ["includes", "indexOf", "lastIndexOf"].forEach((e => {
        t[e] =
            function (...t) {
                const n = jn(this);
                for (let t = 0, e = this.length;
                    t < e;
                    t++)Ue(n, "get", t + "");
                const i = n[e](...t);
                return -1 === i || !1 === i ? n[e](...t.map(jn)) : i
            }
    })), ["push", "pop", "shift", "unshift", "splice"].forEach((e => {
        t[e] =
            function (...t) {
                We.push(He), He = !1;
                const n = jn(this)[e].apply(this, t);
                return Ze(), n
            }
    })), t
}
function en(t = !1, e = !1) {
    return
    function (n, i, r) {
        if ("__v_isReactive" === i) return !t;
        if ("__v_isReadonly" === i) return t;
        if ("__v_raw" === i && r === (t ? e ? zn : Tn : e ? In : An).get(n)) return n;
        const s = ke(n);
        if (!t && s && Ce(Qe, i)) return Reflect.get(Qe, i, r);
        const a = Reflect.get(n, i, r);
        if (Me(i) ? Ke.has(i) : Je(i)) return a;
        if (t || Ue(n, "get", i), e) return a;
        if (Rn(a)) { return !s || !ze(i) ? a.value : a } return Oe(a) ? t ? Ln(a) : En(a) : a
    }
}
function nn(t = !1) {
    return
    function (e, n, i, r) {
        let s = e[n];
        if (!t && (i = jn(i), s = jn(s), !ke(e) && Rn(s) && !Rn(i))) return s.value = i, !0;
        const a = ke(e) && ze(n) ? Number(n) < e.length : Ce(e, n), o = Reflect.set(e, n, i, r);
        return e === jn(r) && (a ? Re(i, s) && Ge(e, "set", n, i, s) : Ge(e, "add", n, i)), o
    }
} var rn = {
    get: Ye, set: nn(), deleteProperty:
        function (t, e) {
            const n = Ce(t, e), i = t[e], r = Reflect.deleteProperty(t, e);
            return r && n && Ge(t, "delete", e, void 0, i), r
        }, has:
        function (t, e) {
            const n = Reflect.has(t, e);
            return Me(e) && Ke.has(e) || Ue(t, "has", e), n
        }, ownKeys:
        function (t) { return Ue(t, "iterate", ke(t) ? "length" : Fe), Reflect.ownKeys(t) }
}, sn = { get: Xe, set: (t, e) => (console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`, t), !0), deleteProperty: (t, e) => (console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`, t), !0) }, an = t => Oe(t) ? En(t) : t, on = t => Oe(t) ? Ln(t) : t, hn = t => t, ln = t => Reflect.getPrototypeOf(t);

function un(t, e, n = !1, i = !1) {
    const r = jn(t = t.__v_raw), s = jn(e);
    e !== s && !n && Ue(r, "get", e), !n && Ue(r, "get", s);
    const { has: a } = ln(r), o = i ? hn : n ? on : an;
    return a.call(r, e) ? o(t.get(e)) : a.call(r, s) ? o(t.get(s)) : void (t !== r && t.get(e))
}
function cn(t, e = !1) {
    const n = this.__v_raw, i = jn(n), r = jn(t);
    return t !== r && !e && Ue(i, "has", t), !e && Ue(i, "has", r), t === r ? n.has(t) : n.has(t) || n.has(r)
}
function fn(t, e = !1) { return t = t.__v_raw, !e && Ue(jn(t), "iterate", Fe), Reflect.get(t, "size", t) }
function dn(t) {
    t = jn(t);
    const e = jn(this);
    return ln(e).has.call(e, t) || (e.add(t), Ge(e, "add", t, t)), this
}
function _n(t, e) {
    e = jn(e);
    const n = jn(this), { has: i, get: r } = ln(n);
    let s = i.call(n, t);
    s ? On(n, i, t) : (t = jn(t), s = i.call(n, t));
    const a = r.call(n, t);
    return n.set(t, e), s ? Re(e, a) && Ge(n, "set", t, e, a) : Ge(n, "add", t, e), this
}
function gn(t) {
    const e = jn(this), { has: n, get: i } = ln(e);
    let r = n.call(e, t);
    r ? On(e, n, t) : (t = jn(t), r = n.call(e, t));
    const s = i ? i.call(e, t) : void 0, a = e.delete(t);
    return r && Ge(e, "delete", t, void 0, s), a
}
function pn() {
    const t = jn(this), e = 0 !== t.size, n = Pe(t) ? new Map(t) : new Set(t), i = t.clear();
    return e && Ge(t, "clear", void 0, void 0, n), i
}
function vn(t, e) {
    return
    function (n, i) {
        const r = this, s = r.__v_raw, a = jn(s), o = e ? hn : t ? on : an;
        return !t && Ue(a, "iterate", Fe), s.forEach(((t, e) => n.call(i, o(t), o(e), r)))
    }
}
function mn(t, e, n) {
    return
    function (...i) {
        const r = this.__v_raw, s = jn(r), a = Pe(s), o = "entries" === t || t === Symbol.iterator && a, h = "keys" === t && a, l = r[t](...i), u = n ? hn : e ? on : an;
        return !e && Ue(s, "iterate", h ? qe : Fe), {
            next() {
                const { value: t, done: e } = l.next();
                return e ? { value: t, done: e } : { value: o ? [u(t[0]), u(t[1])] : u(t), done: e }
            }, [Symbol.iterator]() { return this }
        }
    }
}
function yn(t) {
    return
    function (...e) {
        {
            const n = e[0] ? `on key "${e[0]}" ` : "";
            console.warn(`${je(t)} operation ${n}failed: target is readonly.`, jn(this))
        } return "delete" !== t && this
    }
}
function xn() {
    const t = { get(t) { return un(this, t) }, get size() { return fn(this) }, has: cn, add: dn, set: _n, delete: gn, clear: pn, forEach: vn(!1, !1) }, e = { get(t) { return un(this, t, !1, !0) }, get size() { return fn(this) }, has: cn, add: dn, set: _n, delete: gn, clear: pn, forEach: vn(!1, !0) }, n = { get(t) { return un(this, t, !0) }, get size() { return fn(this, !0) }, has(t) { return cn.call(this, t, !0) }, add: yn("add"), set: yn("set"), delete: yn("delete"), clear: yn("clear"), forEach: vn(!0, !1) }, i = { get(t) { return un(this, t, !0, !0) }, get size() { return fn(this, !0) }, has(t) { return cn.call(this, t, !0) }, add: yn("add"), set: yn("set"), delete: yn("delete"), clear: yn("clear"), forEach: vn(!0, !0) };

    return ["keys", "values", "entries", Symbol.iterator].forEach((r => { t[r] = mn(r, !1, !1), n[r] = mn(r, !0, !1), e[r] = mn(r, !1, !0), i[r] = mn(r, !0, !0) })), [t, n, e, i]
} var [wn, bn, Sn, Cn] = xn();

function kn(t, e) {
    const n = e ? t ? Cn : Sn : t ? bn : wn;
    return (e, i, r) => "__v_isReactive" === i ? !t : "__v_isReadonly" === i ? t : "__v_raw" === i ? e : Reflect.get(Ce(n, i) && i in e ? n : e, i, r)
} var Pn = { get: kn(!1, !1) }, Mn = { get: kn(!0, !1) };


function On(t, e, n) {
    const i = jn(n);
    if (i !== n && e.call(t, i)) {
        const e = Te(t);
        console.warn(`Reactive ${e} contains both the raw and reactive versions of the same object${"Map" === e ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
    }
} var An = new WeakMap, In = new WeakMap, Tn = new WeakMap, zn = new WeakMap;

function En(t) { return t && t.__v_isReadonly ? t : Nn(t, !1, rn, Pn, An) }
function Ln(t) { return Nn(t, !0, sn, Mn, Tn) }
function Nn(t, e, n, i, r) {
    if (!Oe(t)) return console.warn(`value cannot be made reactive: ${String(t)}`), t;
    if (t.__v_raw && (!e || !t.__v_isReactive)) return t;
    const s = r.get(t);
    if (s) return s;
    const a = (o = t).__v_skip || !Object.isExtensible(o) ? 0 :
        function (t) {
            switch (t) {
                case "Object": case "Array": return 1;
                case "Map": case "Set": case "WeakMap": case "WeakSet": return 2;
                default: return 0
            }
        }(Te(o));
    var o;
    if (0 === a) return t;
    const h = new Proxy(t, 2 === a ? i : n);
    return r.set(t, h), h
}
function jn(t) { return t && jn(t.__v_raw) || t }
function Rn(t) { return Boolean(t && !0 === t.__v_isRef) } H("nextTick", (() => Dt)), H("dispatch", (t => wt.bind(wt, t))), H("watch", ((t, { evaluateLater: e, cleanup: n }) => (t, i) => {
    let r = e(t), s = v((() => {
        let t;
        return r((e => t = e)), t
    }), i);
    n(s)
})), H("store", (
    function () { return _e })), H("data", (t => L(t))), H("root", (t => Tt(t))), H("refs", (t => (t._x_refs_proxy || (t._x_refs_proxy = R(
        function (t) {
            let e = [];
            return zt(t, (t => { t._x_refs && e.push(t._x_refs) })), e
        }(t))), t._x_refs_proxy)));
var Bn = {};


function Dn(t) { return Bn[t] || (Bn[t] = 0), ++Bn[t] }
function Fn(t, e, n) { H(e, (i => St(`You can't use [$${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`, i))) } H("id", ((t, { cleanup: e }) => (n, i = null) =>
    function (t, e, n, i) {
        t._x_id || (t._x_id = {});
        if (t._x_id[e]) return t._x_id[e];
        let r = i();
        return t._x_id[e] = r, n((() => { delete t._x_id[e] })), r
    }(t, `${n}${i ? `-${i}` : ""}`, e, (() => {
        let e =
            function (t, e) { return zt(t, (t => { if (t._x_ids && t._x_ids[e]) return !0 })) }(t, n), r = e ? e._x_ids[n] : Dn(n);
        return i ? `${n}-${r}-${i}` : `${n}-${r}`
    })))), Xt(((t, e) => { t._x_id && (e._x_id = t._x_id) })), H("el", (t => t)), Fn("Focus", "focus", "focus"), Fn("Persist", "persist", "persist"), st("modelable", ((t, { expression: e }, { effect: n, evaluateLater: i, cleanup: r }) => {
        let s = i(e), a = () => {
            let t;
            return s((e => t = e)), t
        }, o = i(`${e} = __placeholder`), h = t => o((() => { }), { scope: { __placeholder: t } }), l = a();
        h(l), queueMicrotask((() => {
            if (!t._x_model) return;
            t._x_removeModelListeners.default();
            let e = t._x_model.get, n = t._x_model.set, i = fe({ get: () => e(), set(t) { n(t) } }, { get: () => a(), set(t) { h(t) } });
            r(i)
        }))
    })), st("teleport", ((t, { modifiers: e, expression: n }, { cleanup: i }) => {
        "template" !== t.tagName.toLowerCase() && St("x-teleport can only be used on a <template> tag", t);
        let r = Vn(n), s = t.content.cloneNode(!0).firstElementChild;
        t._x_teleport = s, s._x_teleportBack = t, t.setAttribute("data-teleport-template", !0), s.setAttribute("data-teleport-target", !0), t._x_forwardEvents && t._x_forwardEvents.forEach((e => { s.addEventListener(e, (e => { e.stopPropagation(), t.dispatchEvent(new e.constructor(e.type, e)) })) })), N(s, {}, t);
        let a = (t, e, n) => { n.includes("prepend") ? e.parentNode.insertBefore(t, e) : n.includes("append") ? e.parentNode.insertBefore(t, e.nextSibling) : e.appendChild(t) };

        I((() => { a(s, r, e), Kt((() => { Nt(s) }))() })), t._x_teleportPutBack = () => {
            let i = Vn(n);
            I((() => { a(t._x_teleport, i, e) }))
        }, i((() => I((() => { s.remove(), jt(s) }))))
    }));
var qn = document.createElement("div");

function Vn(t) {
    let e = Kt((() => document.querySelector(t)), (() => qn))();
    return e || St(`Cannot find x-teleport element for selector: "${t}"`), e
} var $n = () => { };


function Hn(t, e, n, i) {
    let r = t, s = t => i(t), a = {}, o = (t, e) => n => e(t, n);
    if (n.includes("dot") && (e = e.replace(/-/g, ".")), n.includes("camel") && (e =
        function (t) { return t.toLowerCase().replace(/-(\w)/g, ((t, e) => e.toUpperCase())) }(e)), n.includes("passive") && (a.passive = !0), n.includes("capture") && (a.capture = !0), n.includes("window") && (r = window), n.includes("document") && (r = document), n.includes("debounce")) {
            let t = n[n.indexOf("debounce") + 1] || "invalid-wait", e = Wn(t.split("ms")[0]) ? Number(t.split("ms")[0]) : 250;
        s = ue(s, e)
    } if (n.includes("throttle")) {
        let t = n[n.indexOf("throttle") + 1] || "invalid-wait", e = Wn(t.split("ms")[0]) ? Number(t.split("ms")[0]) : 250;
        s = ce(s, e)
    } return n.includes("prevent") && (s = o(s, ((t, e) => { e.preventDefault(), t(e) }))), n.includes("stop") && (s = o(s, ((t, e) => { e.stopPropagation(), t(e) }))), n.includes("once") && (s = o(s, ((t, n) => { t(n), r.removeEventListener(e, s, a) }))), (n.includes("away") || n.includes("outside")) && (r = document, s = o(s, ((e, n) => { t.contains(n.target) || !1 !== n.target.isConnected && (t.offsetWidth < 1 && t.offsetHeight < 1 || !1 !== t._x_isShown && e(n)) }))), n.includes("self") && (s = o(s, ((e, n) => { n.target === t && e(n) }))), (
        function (t) { return ["keydown", "keyup"].includes(t) }(e) || Zn(e)) && (s = o(s, ((t, e) => {
            (
                function (t, e) {
                    let n = e.filter((t => !["window", "document", "prevent", "stop", "once", "capture", "self", "away", "outside", "passive"].includes(t)));
                    if (n.includes("debounce")) {
                        let t = n.indexOf("debounce");
                        n.splice(t, Wn((n[t + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                    } if (n.includes("throttle")) {
                        let t = n.indexOf("throttle");
                        n.splice(t, Wn((n[t + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
                    } if (0 === n.length) return !1;
                    if (1 === n.length && Un(t.key).includes(n[0])) return !1;
                    const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((t => n.includes(t)));
                    if (n = n.filter((t => !i.includes(t))), i.length > 0) {
                        if (i.filter((e => ("cmd" !== e && "super" !== e || (e = "meta"), t[`${e}Key`]))).length === i.length) {
                            if (Zn(t.type)) return !1;
                            if (Un(t.key).includes(n[0])) return !1
                        }
                    } return !0
                })(e, n) || t(e)
        }))), r.addEventListener(e, s, a), () => { r.removeEventListener(e, s, a) }
}
function Wn(t) { return !Array.isArray(t) && !isNaN(t) }
function Zn(t) { return ["contextmenu", "click", "mouse"].some((e => t.includes(e))) }
function Un(t) {
    if (!t) return [];
    var e;
    t = [" ", "_"].includes(e = t) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
    let n = { ctrl: "control", slash: "/", space: " ", spacebar: " ", cmd: "meta", esc: "escape", up: "arrow-up", down: "arrow-down", left: "arrow-left", right: "arrow-right", period: ".", comma: ",", equal: "=", minus: "-", underscore: "_" };

    return n[t] = t, Object.keys(n).map((e => { if (n[e] === t) return e })).filter((t => t))
}
function Gn(t, e, n, i) {
    return I((() => {
        if (n instanceof CustomEvent && void 0 !== n.detail) return null !== n.detail && void 0 !== n.detail ? n.detail : n.target.value;
        if (he(t)) {
            if (Array.isArray(i)) {
                let t = null;
                return t = e.includes("number") ? Jn(n.target.value) : e.includes("boolean") ? re(n.target.value) : n.target.value, n.target.checked ? i.includes(t) ? i : i.concat([t]) : i.filter((e => !(e == t)))
            } return n.target.checked
        } if ("select" === t.tagName.toLowerCase() && t.multiple) return e.includes("number") ? Array.from(n.target.selectedOptions).map((t => Jn(t.value || t.text))) : e.includes("boolean") ? Array.from(n.target.selectedOptions).map((t => re(t.value || t.text))) : Array.from(n.target.selectedOptions).map((t => t.value || t.text));
        {
            let r;
            return r = le(t) ? n.target.checked ? n.target.value : i : n.target.value, e.includes("number") ? Jn(r) : e.includes("boolean") ? re(r) : e.includes("trim") ? r.trim() : r
        }
    }))
}
function Jn(t) {
    let e = t ? parseFloat(t) : null;
    return n = e, Array.isArray(n) || isNaN(n) ? t : e;
    var n
}
function Kn(t) { return null !== t && "object" == typeof t && "function" == typeof t.get && "function" == typeof t.set } $n.inline = (t, { modifiers: e }, { cleanup: n }) => { e.includes("self") ? t._x_ignoreSelf = !0 : t._x_ignore = !0, n((() => { e.includes("self") ? delete t._x_ignoreSelf : delete t._x_ignore })) }, st("ignore", $n), st("effect", Kt(((t, { expression: e }, { effect: n }) => { n(Y(t, e)) }))), st("model", ((t, { modifiers: e, expression: n }, { effect: i, cleanup: r }) => {
    let s = t;
    e.includes("parent") && (s = t.parentNode);
    let a, o = Y(s, n);
    a = "string" == typeof n ? Y(s, `${n} = __placeholder`) : "function" == typeof n && "string" == typeof n() ? Y(s, `${n()} = __placeholder`) : () => { };

    let h = () => {
        let t;
        return o((e => t = e)), Kn(t) ? t.get() : t
    }, l = t => {
        let e;
        o((t => e = t)), Kn(e) ? e.set(t) : a((() => { }), { scope: { __placeholder: t } })
    };

    "string" == typeof n && "radio" === t.type && I((() => { t.hasAttribute("name") || t.setAttribute("name", n) }));
    var u = "select" === t.tagName.toLowerCase() || ["checkbox", "radio"].includes(t.type) || e.includes("lazy") ? "change" : "input";
    let c = Jt ? () => { } : Hn(t, u, e, (n => { l(Gn(t, e, n, h())) }));
    if (e.includes("fill") && ([void 0, null, ""].includes(h()) || he(t) && Array.isArray(h()) || "select" === t.tagName.toLowerCase() && t.multiple) && l(Gn(t, e, { target: t }, h())), t._x_removeModelListeners || (t._x_removeModelListeners = {}), t._x_removeModelListeners.default = c, r((() => t._x_removeModelListeners.default())), t.form) {
        let n = Hn(t.form, "reset", [], (n => { Dt((() => t._x_model && t._x_model.set(Gn(t, e, { target: t }, h())))) }));
        r((() => n()))
    } t._x_model = { get: () => h(), set(t) { l(t) } }, t._x_forceModelUpdate = e => { void 0 === e && "string" == typeof n && n.match(/\./) && (e = ""), window.fromModel = !0, I((() => ee(t, "value", e))), delete window.fromModel }, i((() => {
        let n = h();
        e.includes("unintrusive") && document.activeElement.isSameNode(t) || t._x_forceModelUpdate(n)
    }))
})), st("cloak", (t => queueMicrotask((() => I((() => t.removeAttribute(it("cloak")))))))), It((() => `[${it("init")}]`)), st("init", Kt(((t, { expression: e }, { evaluate: n }) => "string" == typeof e ? !!e.trim() && n(e, {}, !1) : n(e, {}, !1)))), st("text", ((t, { expression: e }, { effect: n, evaluateLater: i }) => {
    let r = i(e);
    n((() => { r((e => { I((() => { t.textContent = e })) })) }))
})), st("html", ((t, { expression: e }, { effect: n, evaluateLater: i }) => {
    let r = i(e);
    n((() => { r((e => { I((() => { t.innerHTML = e, t._x_ignoreSelf = !0, Nt(t), delete t._x_ignoreSelf })) })) }))
})), gt(ft(":", it("bind:")));
var Yn = (t, { value: e, modifiers: n, expression: i, original: r }, { effect: s, cleanup: a }) => {
    if (!e) {
        let e = {};

        return o = e, Object.entries(pe).forEach((([t, e]) => { Object.defineProperty(o, t, { get: () => (...t) => e(...t) }) })), void Y(t, i)((e => { ve(t, e, r) }), { scope: e })
    } var o;
    if ("key" === e) return
    function (t, e) { t._x_keyExpression = e } (t, i);
    if (t._x_inlineBindings && t._x_inlineBindings[e] && t._x_inlineBindings[e].extract) return;
    let h = Y(t, i);
    s((() => h((r => { void 0 === r && "string" == typeof i && i.match(/\./) && (r = ""), I((() => ee(t, e, r, n))) })))), a((() => { t._x_undoAddedClasses && t._x_undoAddedClasses(), t._x_undoAddedStyles && t._x_undoAddedStyles() }))
};


function Xn(t, e, n, i) {
    let r = {};

    if (/^\[.*\]$/.test(t.item) && Array.isArray(e)) { t.item.replace("[", "").replace("]", "").split(",").map((t => t.trim())).forEach(((t, n) => { r[t] = e[n] })) } else if (/^\{.*\}$/.test(t.item) && !Array.isArray(e) && "object" == typeof e) { t.item.replace("{", "").replace("}", "").split(",").map((t => t.trim())).forEach((t => { r[t] = e[t] })) } else r[t.item] = e;
    return t.index && (r[t.index] = n), t.collection && (r[t.collection] = i), r
}
function Qn() { }
function ti(t, e, n) { st(e, (i => St(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`, i))) } Yn.inline = (t, { value: e, modifiers: n, expression: i }) => { e && (t._x_inlineBindings || (t._x_inlineBindings = {}), t._x_inlineBindings[e] = { expression: i, extract: !1 }) }, st("bind", Yn), At((() => `[${it("data")}]`)), st("data", ((t, { expression: e }, { cleanup: n }) => {
    if (
        function (t) { return !!Jt && (!!Qt || t.hasAttribute("data-has-alpine-state")) }(t)) return;
    e = "" === e ? "{}" : e;
    let r = {};

    W(r, t);
    let s = {};

    var a, o;
    a = s, o = r, Object.entries(me).forEach((([t, e]) => { Object.defineProperty(a, t, { get: () => (...t) => e.bind(o)(...t), enumerable: !1 }) }));
    let h = K(t, e, { scope: s });
    void 0 !== h && !0 !== h || (h = {}), W(h, t);
    let l = i(h);
    F(l);
    let u = N(t, l);
    l.init && K(t, l.init), n((() => { l.destroy && K(t, l.destroy), u() }))
})), Xt(((t, e) => { t._x_dataStack && (e._x_dataStack = t._x_dataStack, e.setAttribute("data-has-alpine-state", !0)) })), st("show", ((t, { modifiers: e, expression: n }, { effect: i }) => {
    let r = Y(t, n);
    t._x_doHide || (t._x_doHide = () => { I((() => { t.style.setProperty("display", "none", e.includes("important") ? "important" : void 0) })) }), t._x_doShow || (t._x_doShow = () => { I((() => { 1 === t.style.length && "none" === t.style.display ? t.removeAttribute("style") : t.style.removeProperty("display") })) });
    let s, a = () => { t._x_doHide(), t._x_isShown = !1 }, o = () => { t._x_doShow(), t._x_isShown = !0 }, h = () => setTimeout(o), l = Ht((t => t ? o() : a()), (e => { "function" == typeof t._x_toggleAndCascadeWithTransitions ? t._x_toggleAndCascadeWithTransitions(t, e, o, a) : e ? h() : a() })), u = !0;
    i((() => r((t => { (u || t !== s) && (e.includes("immediate") && (t ? h() : a()), l(t), s = t, u = !1) }))))
})), st("for", ((t, { expression: e }, { effect: n, cleanup: r }) => {
    let s =
        function (t) {
            let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, n = /^\s*\(|\)\s*$/g, i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, r = t.match(i);
            if (!r) return;
            let s = {};

            s.items = r[2].trim();
            let a = r[1].replace(n, "").trim(), o = a.match(e);
            o ? (s.item = a.replace(e, "").trim(), s.index = o[1].trim(), o[2] && (s.collection = o[2].trim())) : s.item = a;
            return s
        }(e), a = Y(t, s.items), o = Y(t, t._x_keyExpression || "index");
    t._x_prevKeys = [], t._x_lookup = {}, n((() =>
        function (t, e, n, r) {
            let s = t => "object" == typeof t && !Array.isArray(t), a = t;
            n((n => {
                var o;
                o = n, !Array.isArray(o) && !isNaN(o) && n >= 0 && (n = Array.from(Array(n).keys(), (t => t + 1))), void 0 === n && (n = []);
                let h = t._x_lookup, l = t._x_prevKeys, u = [], c = [];
                if (s(n)) n = Object.entries(n).map((([i, s]) => {
                    let a = Xn(e, s, i, n);
                    r((e => { c.includes(e) && St("Duplicate key on x-for", t), c.push(e) }), { scope: { index: i, ...a } }), u.push(a)
                }));
                else for (let i = 0;
                    i < n.length;
                    i++) {
                        let s = Xn(e, n[i], i, n);
                    r((e => { c.includes(e) && St("Duplicate key on x-for", t), c.push(e) }), { scope: { index: i, ...s } }), u.push(s)
                } let f = [], d = [], _ = [], g = [];
                for (let t = 0;
                    t < l.length;
                    t++) {
                        let e = l[t];
                    -1 === c.indexOf(e) && _.push(e)
                } l = l.filter((t => !_.includes(t)));
                let p = "template";
                for (let t = 0;
                    t < c.length;
                    t++) {
                        let e = c[t], n = l.indexOf(e);
                    if (-1 === n) l.splice(t, 0, e), f.push([p, t]);
                    else if (n !== t) {
                        let e = l.splice(t, 1)[0], i = l.splice(n - 1, 1)[0];
                        l.splice(t, 0, i), l.splice(n, 0, e), d.push([e, i])
                    } else g.push(e);
                    p = e
                } for (let t = 0;
                    t < _.length;
                    t++) {
                        let e = _[t];
                    e in h && (I((() => { jt(h[e]), h[e].remove() })), delete h[e])
                } for (let t = 0;
                    t < d.length;
                    t++) {
                        let [e, n] = d[t], i = h[e], r = h[n], s = document.createElement("div");
                    I((() => { r || St('x-for ":key" is undefined or invalid', a, n, h), r.after(s), i.after(r), r._x_currentIfEl && r.after(r._x_currentIfEl), s.before(i), i._x_currentIfEl && i.after(i._x_currentIfEl), s.remove() })), r._x_refreshXForScope(u[c.indexOf(n)])
                } for (let t = 0;
                    t < f.length;
                    t++) {
                        let [e, n] = f[t], r = "template" === e ? a : h[e];
                    r._x_currentIfEl && (r = r._x_currentIfEl);
                    let s = u[n], o = c[n], l = document.importNode(a.content, !0).firstElementChild, d = i(s);
                    N(l, d, a), l._x_refreshXForScope = t => { Object.entries(t).forEach((([t, e]) => { d[t] = e })) }, I((() => { r.after(l), Kt((() => Nt(l)))() })), "object" == typeof o && St("x-for key cannot be an object, it must be a string or an integer", a), h[o] = l
                } for (let t = 0;
                    t < g.length;
                    t++)h[g[t]]._x_refreshXForScope(u[c.indexOf(g[t])]);
                a._x_prevKeys = c
            }))
        }(t, s, a, o))), r((() => { Object.values(t._x_lookup).forEach((t => I((() => { jt(t), t.remove() })))), delete t._x_prevKeys, delete t._x_lookup }))
})), Qn.inline = (t, { expression: e }, { cleanup: n }) => {
    let i = Tt(t);
    i._x_refs || (i._x_refs = {}), i._x_refs[e] = t, n((() => delete i._x_refs[e]))
}, st("ref", Qn), st("if", ((t, { expression: e }, { effect: n, cleanup: i }) => {
    "template" !== t.tagName.toLowerCase() && St("x-if can only be used on a <template> tag", t);
    let r = Y(t, e);
    n((() => r((e => {
        e ? (() => {
            if (t._x_currentIfEl) return t._x_currentIfEl;
            let e = t.content.cloneNode(!0).firstElementChild;
            N(e, {}, t), I((() => { t.after(e), Kt((() => Nt(e)))() })), t._x_currentIfEl = e, t._x_undoIf = () => { I((() => { jt(e), e.remove() })), delete t._x_currentIfEl }
        })() : t._x_undoIf && (t._x_undoIf(), delete t._x_undoIf)
    })))), i((() => t._x_undoIf && t._x_undoIf()))
})), st("id", ((t, { expression: e }, { evaluate: n }) => {
    n(e).forEach((e =>
        function (t, e) { t._x_ids || (t._x_ids = {}), t._x_ids[e] || (t._x_ids[e] = Dn(e)) }(t, e)))
})), Xt(((t, e) => { t._x_ids && (e._x_ids = t._x_ids) })), gt(ft("@", it("on:"))), st("on", Kt(((t, { value: e, modifiers: n, expression: i }, { cleanup: r }) => {
    let s = i ? Y(t, i) : () => { };

    "template" === t.tagName.toLowerCase() && (t._x_forwardEvents || (t._x_forwardEvents = []), t._x_forwardEvents.includes(e) || t._x_forwardEvents.push(e));
    let a = Hn(t, e, n, (t => { s((() => { }), { scope: { $event: t }, params: [t] }) }));
    r((() => a()))
}))), ti("Collapse", "collapse", "collapse"), ti("Intersect", "intersect", "intersect"), ti("Focus", "trap", "focus"), ti("Mask", "mask", "mask"), ye.setEvaluator(Q), ye.setReactivityEngine({
    reactive: En, effect:
        function (t, e = be) {
            (
                function (t) { return t && !0 === t._isEffect })(t) && (t = t.raw);
            const n =
                function (t, e) {
                    const n =
                        function () {
                            if (!n.active) return t();
                            if (!De.includes(n)) {
                                $e(n);
                                try { return We.push(He), He = !0, De.push(n), we = n, t() } finally { De.pop(), Ze(), we = De[De.length - 1] }
                            }
                        };

                    return n.id = Ve++, n.allowRecurse = !!e.allowRecurse, n._isEffect = !0, n.active = !0, n.raw = t, n.deps = [], n.options = e, n
                }(t, e);
            return e.lazy || n(), n
        }, release:


        function (t) { t.active && ($e(t), t.options.onStop && t.options.onStop(), t.active = !1) }, raw: jn
});
var ei = ye;
class ni {
    x = void 0;
    y = void 0;
    constructor(t = 0, e = 0) { this.x = t, this.y = e } normalize() {
        if (0 == this.x && 0 == this.y) return;
        const t = Math.max(Math.abs(this.x), Math.abs(this.y));
        this.x /= t, this.y /= t
    } multiply(t) { t instanceof ni ? (this.x *= t.x, this.y *= t.y) : (this.x *= t, this.y *= t) } add(t) { t instanceof ni ? (this.x += t.x, this.y += t.y) : (this.x += t, this.y += t) } subtract(t) { t instanceof ni ? (this.x -= t.x, this.y -= t.y) : (this.x -= t, this.y -= t) } divide(t) { t instanceof ni ? (this.x /= t.x, this.y /= t.y) : (this.x /= t, this.y /= t) } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } set(t, e) { this.x = t, this.y = e } withinBounds(t) { return this.x > t.left && this.x < t.right && this.y > t.top && this.y < t.bottom } mix(t, e) { t.multiply(e), this.multiply(1 - e), this.add(t) } copy() { return new ni(this.x, this.y) }
} var ii = ni;
var ri = class {
    container = void 0;
    elm = void 0;
    rotation = void 0;
    targetRotation = void 0;
    decay = void 0;
    constructor(t) {
        if (this.container = t, this.elm = this.container.querySelector(".dancing-image"), !this.elm) throw new Error("Dancing image container has no child!");
        t.style.perspective = "1000px", this.elm.style.transformStyle = "preserve-3d", this.rotation = new ii, this.targetRotation = new ii, this.decay = .035, this.bindEvents()
    } bindEvents() { this.container.addEventListener("mouseout", this.mouseOut.bind(this)), this.container.addEventListener("mousemove", this.mouseOver.bind(this)) } removeEvents() { this.container.removeEventListener("mouseout", this.mouseOut.bind(this)), this.container.removeEventListener("mousemove", this.mouseOver.bind(this)) } mouseOut(t) { this.targetRotation.set(0, 0), this.container.style.zIndex = "", this.container.style.position = "" } mouseOver(t) {
        let e = this.elm.getBoundingClientRect(), n = (t.clientX - e.left) / e.width;
        n *= 2, n -= 1;
        let i = (t.clientY - e.top) / e.height;
        i *= 2, i -= 1, i *= -1, this.targetRotation.set(i, n), this.container.style.zIndex = "999", this.container.style.position = "relative"
    } update() {
        let t = this.targetRotation.copy();
        if (t.subtract(this.rotation), t.multiply(this.decay), Math.abs(t) < .01) return;
        this.rotation.add(t);
        let e = this.rotation.length() / 1.41, n = this.rotation.copy();
        n.normalize(), this.elm.style.transform = `rotate3D(${n.x}, ${n.y}, 0, ${20 * e}deg)`
    } destroy() { this.removeEvents() }
}, si = n("../node_modules/paper/dist/paper-core.js");


var ai = class {
    position = void 0;
    positionV2 = void 0;
    normal = void 0;
    config = void 0;
    path = void 0;
    left = void 0;
    right = void 0;
    scale = void 0;
    width = void 0;
    constructor(t, e, n) { this.position = t, this.positionV2 = new ii(t.x, t.y), this.normal = e, this.config = n, this.width = this.config.width, this.buildPath() } buildPath() { this.left = this.position.add(this.normal.multiply(.5 * this.width)), this.right = this.position.add(this.normal.multiply(-.5 * this.width)), this.path = new si.Path([this.left, this.right, this.right.clone().add(new si.Point(2, 2)), this.left.clone().add(new si.Point(2, 2))]), this.path.closePath(), this.path.fillColor = new si.Color(this.config.color) } update(t, e, n, i) {
        let r = e.copy();
        r.subtract(new ii(this.position.x, this.position.y)), r.normalize(), r.mix(t.copy(), .4 + .5 * (1 - i));
        const s = this.config.move.max * n * .7 + this.config.move.min;
        this.path.segments[2].point.x = this.right.x - r.x * s, this.path.segments[2].point.y = this.right.y - r.y * s, this.path.segments[3].point.x = this.left.x - r.x * s, this.path.segments[3].point.y = this.left.y - r.y * s
    } cleanUp() { this.path.remove() }
}, oi = n.p + "scripts/effects/spring.697f67.svg", hi = n.p + "scripts/effects/s.d83d72.svg", li = n.p + "scripts/effects/sMobile.b0ddae.svg";
var ui = class {
    container = void 0;
    shape = void 0;
    images = [];
    areLinesInView = !1;
    type = "spring";
    isMobile = !1;
    windowWidth = window.innerWidth;



    constructor() { this.init = this.init.bind(this), this.initLetters = this.initLetters.bind(this), this.draw = this.draw.bind(this), this.resize = this.resize.bind(this), this.handleResize = this.handleResize.bind(this), this.loadShape = this.loadShape.bind(this), this.init(), this.handleResize() } init() {
        document.addEventListener("mousemove", this.mouseMove.bind(this)), window.addEventListener("scroll", this.scroll.bind(this)), this.destroy(), this.mouse = { pos: new ii(window.innerWidth / 2, window.innerHeight / 2), vel: new ii, strength: 0, mouseStrength: 1 }, this.scrollPos = 0, this.config = { mouse: { velDecay: .975, maxMovmentPercentage: .5 }, svg: {}, lines: { line: { angle: 10, color: window.accentColor, width: 20, move: { max: 50, min: 2 } } } }, this.lines = [], this.initLetters();
        document.querySelectorAll(".dancing-image-container").forEach((t => { this.images.push(new ri(t)) }))
    } initLetters() {
        this.container = document.querySelector(".effect-container"), this.container && (this.observer = new IntersectionObserver((t => {
            t.forEach((t => {
                const e = t.isIntersecting;
                this.areLinesInView = e
            }))
        })), this.observer.observe(this.container), this.canvas = this.container.querySelector("canvas"), this.paper = new si.PaperScope, this.paper.activate(), this.paper.setup(this.canvas), this.paper.view.onResize =
            function (t, e = 50) {
                let n;
                return (...i) => { clearTimeout(n), n = setTimeout((() => { t.apply(this, i) }), e) }
            }(this.handleResize))
    } loadShape() {
        let t = oi;
        this.type = document.body.classList.contains("single") ? "s" : "spring", this.paper && ("s" === this.type && (t = this.isMobile ? li : hi, this.config.lines = { line: { angle: 10, color: "#FFF", width: this.isMobile ? 150 : 300, move: { max: this.isMobile ? 100 : 250, min: 10 } } }), this.paper.project.importSVG(t, { onLoad: t => { this.shape = t, this.resize() }, expandShapes: !0, insert: !1 }))
    } handleResize() {
        const t = window.innerWidth, e = this.windowWidth;
        this.isMobile = window.innerWidth < 700, this.windowWidth = window.innerWidth, this.maxMov = Math.max(window.innerWidth, window.innerHeight) * this.config.mouse.maxMovmentPercentage, !this.shape || "s" === this.type && e >= 700 && t < 700 || "s" === this.type && e < 700 && t >= 700 ? this.loadShape() : this.resize()
    } resize() {
        this.paper.project.activeLayer.removeChildren(1);
        let t = .45, e = 1.05;
        "s" === this.type && (t = .75, e = 1.075), this.paper.view.viewSize = new si.Size(this.container.clientWidth, t * this.container.clientWidth), this.shape.fitBounds(this.paper.view.bounds), "s" === this.type && (this.shape.position.y = this.isMobile ? this.shape.bounds.height / 2 : this.shape.bounds.height / 2.5), this.shape.scale(e), this.config.svg.width = this.shape.bounds.width, this.config.svg.height = this.shape.bounds.height, this.workPaths = this.extractPaths(this.shape), this.bounds = [];
        const n = this.paper.view.element.getBoundingClientRect(), i = new si.Rectangle(n.left, n.top, n.width, n.height);
        if (this.container.nextElementSibling && this.container.nextElementSibling.querySelector("img")) {
            const t = this.container.nextElementSibling.querySelector("img").getBoundingClientRect(), e = new si.Rectangle(t.left, t.top, t.width, t.height), n = Math.max(e.left, i.left), r = Math.max(e.top, i.top), s = Math.min(e.right, i.right), a = Math.min(e.bottom, i.bottom);
            n < s && r < a && this.bounds.push({ left: n, right: s, top: 0, bottom: a - r })
        } this.config.lines.splitDistance = Math.round(.01 * this.windowWidth), this.config.lines.line.width = Math.round(.05 * this.windowWidth), this.config.lines.line.move.max = Math.round(.09 * this.windowWidth), "s" === this.type && (this.isMobile ? (this.config.lines.splitDistance *= 6, this.config.lines.line.width *= 7) : (this.config.lines.splitDistance *= 4, this.config.lines.line.width *= 4)), this.buildLines()
    } buildLines() {
        const t = this.config.lines.splitDistance;
        for (let t = 0;
            t < this.lines.length;
        ) { this.lines.pop().cleanUp() } for (let e of this.workPaths) {
            const n = Math.round(e.length / t), i = Math.round(e.length / n);
            for (let t = 0;
                t < n;
                t++) {
                    const n = e.getLocationAt(i * t);
                this.lines.push(new ai(n.point, n.normal, this.config.lines.line))
            } const r = e.getLocationAt(e.length);
            r && this.lines.push(new ai(r.point, r.normal, this.config.lines.line))
        }
    } extractPaths(t, e = []) {
        let n = new Array(...e);
        if (t.children) for (let e of t.children) "Path" == e.className ? n.push(e) : n = [...n, ...this.extractPaths(e)];
        else { "Shape" != t.className && console.error(`Not supported ${t.className}`) } return n
    } scroll(t) {
        let e = this.scrollPos - window.scrollY;
        this.mouse.mouseStrength *= .75, this.scrollPos = window.scrollY, this.updateMouseVel(this.mouse.pos.x, this.mouse.pos.y + .5 * e), this.paper.view.element.style.transform = `translateY(${.15 * window.scrollY}px)`
    } mouseMove(t) { this.updateMouseVel(t.clientX, t.clientY) } updateMouseVel(t, e) {
        const n = this.mouse.pos.x, i = this.mouse.pos.y;
        if (this.mouse.pos.set(t, e), -1 == n || -1 == i) return;
        if (n - t == 0 && i - e == 0) return;
        let r = new ii(n - t, i - e), s = r.length();
        r.normalize(), this.mouse.vel.mix(r, .15), s /= this.maxMov, this.mouse.strength += s, this.mouse.strength = Math.min(1, this.mouse.strength)
    } updateVel() {
        this.mouse.strength *= this.config.mouse.velDecay;
        let t = this.mouse.vel.copy();
        t.normalize(), this.mouse.vel.mix(t, .05), this.mouse.mouseStrength += .05 * (1 - this.mouse.mouseStrength)
    } draw() {
        if (this.images.forEach((t => t.update())), this.updateVel(), this.areLinesInView && this.lines) for (let t of this.lines) {
            let e = 1;
            for (let n of this.bounds) if (new ii(t.positionV2.x, t.positionV2.y + .15 * this.scrollPos).withinBounds(n)) {
                e = .1;
                break
            } t.update(this.mouse.vel, this.mouse.pos, this.mouse.strength * e, this.mouse.mouseStrength)
        }
    } destroy() { console.log("destroy effects"), document.removeEventListener("mousemove", this.mouseMove.bind(this)), window.removeEventListener("scroll", this.scroll.bind(this)), this.observer && this.observer.disconnect(), this.images.forEach((t => t.destroy())), this.images = [] }
};


function ci(t) {
    for (var e = 1;
        e < arguments.length;
        e++) {
            var n = arguments[e];
        for (var i in n) t[i] = n[i]
    } return t
} var fi =
    function t(e, n) {
        function i(t, i, r) {
            if ("undefined" != typeof document) {
                "number" == typeof (r = ci({}, n, r)).expires && (r.expires = new Date(Date.now() + 864e5 * r.expires)), r.expires && (r.expires = r.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var s = "";
                for (var a in r) r[a] && (s += ";
 " + a, !0 !== r[a] && (s += " = " + r[a].split(";
                ")[0]));
                return document.cookie = t + "=" + e.write(i, t) + s
            }
        } return Object.create({
            set: i, get:
                function (t) {
                    if ("undefined" != typeof document && (!arguments.length || t)) {
                        for (var n = document.cookie ? document.cookie.split(";
 ") : [], i = {}, r = 0;
 r < n.length;
                            r++) {
                                var s = n[r].split("="), a = s.slice(1).join("=");
                            try {
                                var o = decodeURIComponent(s[0]);
                                if (i[o] = e.read(a, o), t === o) break
                            } catch (t) { }
                        } return t ? i[t] : i
                    }
                }, remove:
                function (t, e) { i(t, "", ci({}, e, { expires: -1 })) }, withAttributes:
                function (e) { return t(this.converter, ci({}, this.attributes, e)) }, withConverter:
                function (e) { return t(ci({}, this.converter, e), this.attributes) }
        }, { attributes: { value: Object.freeze(n) }, converter: { value: Object.freeze(e) } })
    }({
        read:
            function (t) { return '"' === t[0] && (t = t.slice(1, -1)), t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write:
            function (t) { return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) }
    }, { path: "/" });
window.Alpine = ei;
const di = "off" !== fi.get("motion");
let _i, gi;
ei.data("motionToggle", (() => ({ motion: di, toggleOn() { console.log("toggle on"), this.motion = !0, fi.set("motion", "on"), vi.push(gi.draw) }, toggleOff() { console.log("toggle off"), this.motion = !1, fi.set("motion", "off"), vi = vi.filter((t => t != gi.draw)) } }))), ei.start();
let pi, vi = [];

function mi() { document.body.classList.add("tickets-overlay") } o((async () => {
    document.addEventListener("keydown", (
        function (t) { "q" !== t.key && "Q" !== t.key || document.body.classList.toggle("show-iframes") })),
        function () {
            const t = window.location.search, e = new URLSearchParams(t).get("id");
            e && document.querySelectorAll(".menu-language-container a").forEach((
                function (t) { t.href = t.href + "?id=" + e }))
        }(),
        function t() { vi.forEach((t => t())), _i = requestAnimationFrame(t) }(), document.fonts.ready.then((() => {
            document.querySelectorAll("[data-effect=quote]").forEach((
                function (t) {
                    const e = t.querySelector("figure"), n = JSON.parse(e.getAttribute("data-max-width")), i = window.innerWidth;
                    let r = 0;
                    for (let t in n) parseInt(t, 10) <= i && (r = n[t]);
                    let s = window.getComputedStyle(e).height;
                    for (let t = r;
                        t > r - 200;
                        t--) {
                            e.style.maxWidth = t + "px";
                        if (window.getComputedStyle(e).height != s) {
                            e.style.maxWidth = t + 1 + "px";
                            break
                        }
                    }
                })), document.querySelectorAll(".button--tickets").forEach((
                    function (t) {
                        t.addEventListener("click", (
                            function () { mi() }))
                    })), document.querySelectorAll(".close-tickets-overlay").forEach((
                        function (t) {
                            t.addEventListener("click", (
                                function () { document.body.classList.remove("tickets-overlay") }))
                        })),
                function () {
                    let t;
                    const e = document.querySelector(".button--tickets");

                    function n() { e && (t = e.getBoundingClientRect().top + document.documentElement.scrollTop + e.getBoundingClientRect().height, console.log("ticketsLink", t)) } n(), window.addEventListener("resize", (
                        function () { n() })), window.addEventListener("scroll", (
                            function () {
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                if (e && n > t && !document.querySelector(".button--tickets--clone")) {
                                    const t = e.cloneNode(!0);
                                    t.classList.add("button--tickets--clone"), t.classList.add("transition"), t.style.top = document.querySelector(".top-right-nav  button").getBoundingClientRect().height + "px", t.style.width = document.querySelector(".top-right-nav .button--menu").getBoundingClientRect().width + "px", t.classList.contains("button--with-fold-out") && t.addEventListener("click", (
                                        function () { mi() })), document.body.appendChild(t)
                                } else if (e && n > t && document.querySelector(".button--tickets--clone")) { document.querySelector(".button--tickets--clone").classList.remove("translate-x-[100%]") } else if (e && n < t && document.querySelector(".button--tickets--clone") && !document.querySelector(".button--tickets--clone").classList.contains("translate-x-[100%]")) { document.querySelector(".button--tickets--clone").classList.add("translate-x-[100%]") }
                            }))
                }()
        })), gi = new ui, di && vi.push(gi.draw),
        function () {
            let t = null;
            const e = document.querySelector(".submenu-container"), n = document.querySelectorAll(".page-anchor"), i = document.querySelectorAll(".sub-menu-item"), r = window.innerWidth < 1024;
            vi.push((
                function () {
                    const s = window.innerHeight / 4;
                    let a = null;
                    if (n.forEach((t => { t.getBoundingClientRect().top <= s && (a = t) })), a) {
                        const n = a.getAttribute("id");
                        n !== t &&
                            function (n) {
                                t = n, i.forEach((t => { t.classList.remove("is-active") }));
                                const s = document.querySelector(`[data-id="${n}"]`);
                                s && (s.classList.add("is-active"), r && (pi && clearTimeout(pi), pi = setTimeout((
                                    function () { e.scrollLeft = s.offsetLeft }), 1e3)))
                            }(n)
                    }
                }))
        }(), document.querySelectorAll(".item").forEach((
            function (t) {
                t.addEventListener("click", (
                    function () {
                        const e = t.querySelector("a");
                        document.location.href = e.getAttribute("href")
                    }))
            }))
})), window.onYouTubeIframeAPIReady = () => {
    window.players && window.players.forEach((
        function (t) { t() }))
}
    }
},
function (t) {
    var e =
        function (e) { return t(t.s = e) };

    e("./scripts/app.js"), e("./styles/app.css")
}]);
