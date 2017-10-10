System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      /*
       * SystemJS v0.20.5 Dev
       */
      !function () {
        "use strict";
        function e(e) {
          return st ? Symbol() : "@@" + e;
        }function t(e, t) {
          nt || (t = t.replace(it ? /file:\/\/\//g : /file:\/\//g, ""));var r,
              n = (e.message || e) + "\n  " + t;r = lt && e.fileName ? new Error(n, e.fileName, e.lineNumber) : new Error(n);var o = e.originalErr ? e.originalErr.stack : e.stack;return ot ? r.stack = n + "\n  " + o : r.stack = o, r.originalErr = e.originalErr || e, r;
        }function r() {
          throw new RangeError('Unable to resolve "' + relUrl + '" to ' + parentUrl);
        }function n(e, t) {
          var n = t && t.substr(0, t.indexOf(":") + 1),
              o = e[0],
              i = e[1];if ("/" === o && "/" === i) return n || r(e, t), n + e;if ("." === o && ("/" === i || "." === i && ("/" === e[2] || 2 === e.length) || 1 === e.length) || "/" === o) {
            var a,
                s = !n || "/" !== t[n.length];if (s ? (void 0 === t && r(e, t), a = t) : "/" === t[n.length + 1] ? "file:" !== n ? (a = t.substr(n.length + 2), a = a.substr(a.indexOf("/") + 1)) : a = t.substr(8) : a = t.substr(n.length + 1), "/" === o) {
              if (!s) return t.substr(0, t.length - a.length - 1) + e;r(e, t);
            }for (var u = a.substr(0, a.lastIndexOf("/") + 1) + e, l = [], c = void 0, f = 0; f < u.length; f++) if (void 0 === c) {
              if ("." !== u[f]) c = f;else {
                if ("." !== u[f + 1] || "/" !== u[f + 2] && f !== u.length - 2) {
                  if ("/" !== u[f + 1] && f !== u.length - 1) {
                    c = f;continue;
                  }f += 1;
                } else l.pop(), f += 2;s && 0 === l.length && r(e, t), f === u.length && l.push("");
              }
            } else "/" === u[f] && (l.push(u.substr(c, f - c + 1)), c = void 0);return void 0 !== c && l.push(u.substr(c, u.length - c)), t.substr(0, t.length - a.length) + l.join("");
          }var d = e.indexOf(":");return -1 !== d ? ot && ":" === e[1] && "\\" === e[2] && e[0].match(/[a-z]/i) ? "file:///" + e.replace(/\\/g, "/") : e : void 0;
        }function o(e) {
          if (e.values) return e.values();if ("undefined" == typeof Symbol || !Symbol.iterator) throw new Error("Symbol.iterator not supported in this browser");var t = {};return t[Symbol.iterator] = function () {
            var t = Object.keys(e),
                r = 0;return { next: function () {
                return r < t.length ? { value: e[t[r++]], done: !1 } : { value: void 0, done: !0 };
              } };
          }, t;
        }function i() {
          this.registry = new u();
        }function a(e) {
          if (!(e instanceof l)) throw new TypeError("Module instantiation did not return a valid namespace object.");return e;
        }function s(e) {
          if (void 0 === e) throw new RangeError("No resolution found.");return e;
        }function u() {
          this[gt] = {}, this._registry = gt;
        }function l(e) {
          Object.defineProperty(this, ht, { value: e }), Object.keys(e).forEach(c, this);
        }function c(e) {
          Object.defineProperty(this, e, { enumerable: !0, get: function () {
              return this[ht][e];
            } });
        }function f() {
          i.call(this), this[mt] = { lastRegister: void 0, records: {} }, this.trace = !1;
        }function d(e, t, r) {
          return e.records[t] = { key: t, registration: r, module: void 0, importerSetters: void 0, linkRecord: { instantiatePromise: void 0, dependencies: void 0, execute: void 0, executingRequire: !1, moduleObj: void 0, setters: void 0, depsInstantiatePromise: void 0, dependencyInstantiations: void 0, linked: !1, error: void 0 } };
        }function p(e, t, r, n, o) {
          var i = n[t];if (i) return Promise.resolve(i);var a = o.records[t];return a && !a.module ? h(e, a, a.linkRecord, n, o) : e.resolve(t, r).then(function (t) {
            if (i = n[t]) return i;a = o.records[t], (!a || a.module) && (a = d(o, t, a && a.registration));var r = a.linkRecord;return r ? h(e, a, r, n, o) : a;
          });
        }function g(e, t, r) {
          return function () {
            var e = r.lastRegister;return e ? (r.lastRegister = void 0, t.registration = e, !0) : !!t.registration;
          };
        }function h(e, r, n, o, i) {
          return n.instantiatePromise || (n.instantiatePromise = (r.registration ? Promise.resolve() : Promise.resolve().then(function () {
            return i.lastRegister = void 0, e[vt](r.key, e[vt].length > 1 && g(e, r, i));
          })).then(function (t) {
            if (void 0 !== t) {
              if (!(t instanceof l)) throw new TypeError("Instantiate did not return a valid Module object.");return delete i.records[r.key], e.trace && v(e, r, n), o[r.key] = t;
            }var a = r.registration;if (r.registration = void 0, !a) throw new TypeError("Module instantiation did not call an anonymous or correctly named System.register.");return n.dependencies = a[0], r.importerSetters = [], n.moduleObj = {}, a[2] ? (n.moduleObj.default = {}, n.moduleObj.__useDefault = !0, n.executingRequire = a[1], n.execute = a[2]) : y(e, r, n, a[1]), n.dependencies.length || (n.linked = !0, e.trace && v(e, r, n)), r;
          }).catch(function (e) {
            throw n.error = t(e, "Instantiating " + r.key);
          }));
        }function m(e, t, r, n, o, i) {
          return e.resolve(t, r).then(function (r) {
            i && (i[t] = t);var a = o.records[r],
                s = n[r];if (s && (!a || a.module && s !== a.module)) return s;(!a || !s && a.module) && (a = d(o, r, a && a.registration));var u = a.linkRecord;return u ? h(e, a, u, n, o) : a;
          });
        }function v(e, t, r) {
          e.loads = e.loads || {}, e.loads[t.key] = { key: t.key, deps: r.dependencies, depMap: r.depMap || {} };
        }function y(e, t, r, n) {
          var o = r.moduleObj,
              i = t.importerSetters,
              a = !1,
              s = n.call(at, function (e, t) {
            if (!a) {
              if ("object" == typeof e) for (var r in e) "__useDefault" !== r && (o[r] = e[r]);else o[e] = t;a = !0;for (var n = 0; n < i.length; n++) i[n](o);return a = !1, t;
            }
          }, new k(e, t.key));r.setters = s.setters, r.execute = s.execute, s.exports && (r.moduleObj = o = s.exports);
        }function b(e, r, n, o, i, a) {
          return (n.depsInstantiatePromise || (n.depsInstantiatePromise = Promise.resolve().then(function () {
            for (var t = Array(n.dependencies.length), a = 0; a < n.dependencies.length; a++) t[a] = m(e, n.dependencies[a], r.key, o, i, e.trace && (n.depMap = {}));return Promise.all(t);
          }).then(function (e) {
            if (n.dependencyInstantiations = e, n.setters) for (var t = 0; t < e.length; t++) {
              var r = n.setters[t];if (r) {
                var o = e[t];o instanceof l ? r(o) : (r(o.module || o.linkRecord.moduleObj), o.importerSetters && o.importerSetters.push(r));
              }
            }
          }))).then(function () {
            for (var t = [], r = 0; r < n.dependencies.length; r++) {
              var s = n.dependencyInstantiations[r],
                  u = s.linkRecord;u && !u.linked && -1 === a.indexOf(s) && (a.push(s), t.push(b(e, s, s.linkRecord, o, i, a)));
            }return Promise.all(t);
          }).then(function () {
            return n.linked = !0, e.trace && v(e, r, n), r;
          }).catch(function (e) {
            throw e = t(e, "Loading " + r.key), n.error = n.error || e, e;
          });
        }function w(e, t) {
          var r = e[mt];r.records[t.key] === t && delete r.records[t.key];var n = t.linkRecord;n && n.dependencyInstantiations && n.dependencyInstantiations.forEach(function (t, o) {
            if (t && !(t instanceof l) && t.linkRecord && (t.linkRecord.error && r.records[t.key] === t && w(e, t), n.setters && t.importerSetters)) {
              var i = t.importerSetters.indexOf(n.setters[o]);t.importerSetters.splice(i, 1);
            }
          });
        }function k(e, t) {
          this.loader = e, this.key = this.id = t;
        }function x(e, t, r, n, o, i) {
          if (t.module) return t.module;if (r.error) throw r.error;if (i && -1 !== i.indexOf(t)) return t.linkRecord.moduleObj;var a = S(e, t, r, n, o, r.setters ? [] : i || []);if (a) throw w(e, t), a;return t.module;
        }function O(e, t, r, n, o, i, a) {
          return function (s) {
            for (var u = 0; u < r.length; u++) if (r[u] === s) {
              var c,
                  f = n[u];return c = f instanceof l ? f : x(e, f, f.linkRecord, o, i, a), c.__useDefault ? c.default : c;
            }throw new Error("Module " + s + " not declared as a System.registerDynamic dependency of " + t);
          };
        }function S(e, r, n, o, i, a) {
          a.push(r);var s;if (n.setters) for (var u, c, f = 0; f < n.dependencies.length; f++) if (u = n.dependencyInstantiations[f], !(u instanceof l) && (c = u.linkRecord, c && -1 === a.indexOf(u) && (s = c.error ? c.error : S(e, u, c, o, i, c.setters ? a : [])), s)) return n.error = t(s, "Evaluating " + r.key);if (n.execute) if (n.setters) s = E(n.execute);else {
            var d = { id: r.key },
                p = n.moduleObj;Object.defineProperty(d, "exports", { configurable: !0, set: function (e) {
                p.default = e;
              }, get: function () {
                return p.default;
              } });var g = O(e, r.key, n.dependencies, n.dependencyInstantiations, o, i, a);if (!n.executingRequire) for (var f = 0; f < n.dependencies.length; f++) g(n.dependencies[f]);if (s = j(n.execute, g, p.default, d), d.exports !== p.default && (p.default = d.exports), p.default && p.default.__esModule) for (var h in p.default) Object.hasOwnProperty.call(p.default, h) && "default" !== h && (p[h] = p.default[h]);
          }if (s) return n.error = t(s, "Evaluating " + r.key);if (o[r.key] = r.module = new l(n.moduleObj), !n.setters) {
            if (r.importerSetters) for (var f = 0; f < r.importerSetters.length; f++) r.importerSetters[f](r.module);r.importerSetters = void 0;
          }r.linkRecord = void 0;
        }function E(e) {
          try {
            e.call(yt);
          } catch (e) {
            return e;
          }
        }function j(e, t, r, n) {
          try {
            var o = e.call(at, t, r, n);void 0 !== o && (n.exports = o);
          } catch (e) {
            return e;
          }
        }function R() {}function P(e) {
          return e instanceof l ? e : new l(e && e.__esModule ? e : { default: e, __useDefault: !0 });
        }function _(e) {
          return void 0 === bt && (bt = "undefined" != typeof Symbol && !!Symbol.toStringTag), e instanceof l || bt && "[object Module]" == Object.prototype.toString.call(e);
        }function M(e, t) {
          (t || this.warnings && "undefined" != typeof console && console.warn) && console.warn(e);
        }function C(e, t) {
          if ("." === e[0]) throw new Error("Node module " + e + " can't be loaded as it is not a package require.");if (!wt) {
            var r = this._nodeRequire("module"),
                n = t.substr(it ? 8 : 7);wt = new r(n), wt.paths = r._nodeModulePaths(n);
          }return wt.require(e);
        }function L(e, t) {
          for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);return e;
        }function A(e, t) {
          for (var r in t) Object.hasOwnProperty.call(t, r) && void 0 === e[r] && (e[r] = t[r]);return e;
        }function I(e, t, r) {
          for (var n in t) if (Object.hasOwnProperty.call(t, n)) {
            var o = t[n];void 0 === e[n] ? e[n] = o : o instanceof Array && e[n] instanceof Array ? e[n] = [].concat(r ? o : e[n]).concat(r ? e[n] : o) : "object" == typeof o && null !== o && "object" == typeof e[n] ? e[n] = (r ? A : L)(L({}, e[n]), o) : r || (e[n] = o);
          }
        }function F(e) {
          if (!jt && !Rt) {
            var t = new Image();return void (t.src = e);
          }var r = document.createElement("link");jt ? (r.rel = "preload", r.as = "script") : r.rel = "prefetch", r.href = e, document.head.appendChild(r), document.head.removeChild(r);
        }function K(e, t, r) {
          try {
            importScripts(e);
          } catch (e) {
            r(e);
          }t();
        }function D(e, t, r, n, o) {
          function i() {
            n(), s();
          }function a(t) {
            s(), o(new Error("Fetching " + e));
          }function s() {
            for (var e = 0; e < Pt.length; e++) if (Pt[e].err === a) {
              Pt.splice(e, 1);break;
            }u.removeEventListener("load", i, !1), u.removeEventListener("error", a, !1), document.head.removeChild(u);
          }if (e = e.replace(/#/g, "%23"), Et) return K(e, n, o);var u = document.createElement("script");u.type = "text/javascript", u.charset = "utf-8", u.async = !0, t && (u.crossOrigin = t), r && (u.integrity = r), u.addEventListener("load", i, !1), u.addEventListener("error", a, !1), u.src = e, document.head.appendChild(u);
        }function T(e, t) {
          for (var r = e.split("."); r.length;) t = t[r.shift()];return t;
        }function U(e, t, r) {
          var o = z(t, r);if (o) {
            var i = t[o] + r.substr(o.length),
                a = n(i, rt);return void 0 !== a ? a : e + i;
          }return -1 !== r.indexOf(":") ? r : e + r;
        }function q(e) {
          var t = this.name;if (t.substr(0, e.length) === e && (t.length === e.length || "/" === t[e.length] || "/" === e[e.length - 1] || ":" === e[e.length - 1])) {
            var r = e.split("/").length;r > this.len && (this.match = e, this.len = r);
          }
        }function z(e, t) {
          if (Object.hasOwnProperty.call(e, t)) return t;var r = { name: t, match: void 0, len: 0 };return Object.keys(e).forEach(q, r), r.match;
        }function N(e, t, r, n) {
          if ("file:///" === e.substr(0, 8)) {
            if (At) return J(e, t, r, n);throw new Error("Unable to fetch file URLs in this environment.");
          }e = e.replace(/#/g, "%23");var o = { headers: { Accept: "application/x-es-module, */*" } };return r && (o.integrity = r), t && ("string" == typeof t && (o.headers.Authorization = t), o.credentials = "include"), fetch(e, o).then(function (e) {
            if (e.ok) return n ? e.arrayBuffer() : e.text();throw new Error("Fetch error: " + e.status + " " + e.statusText);
          });
        }function J(e, t, r, n) {
          return new Promise(function (r, o) {
            function i() {
              r(n ? s.response : s.responseText);
            }function a() {
              o(new Error("XHR error: " + (s.status ? " (" + s.status + (s.statusText ? " " + s.statusText : "") + ")" : "") + " loading " + e));
            }e = e.replace(/#/g, "%23");var s = new XMLHttpRequest();n && (s.responseType = "arraybuffer"), s.onreadystatechange = function () {
              4 === s.readyState && (0 == s.status ? s.response ? i() : (s.addEventListener("error", a), s.addEventListener("load", i)) : 200 === s.status ? i() : a());
            }, s.open("GET", e, !0), s.setRequestHeader && (s.setRequestHeader("Accept", "application/x-es-module, */*"), t && ("string" == typeof t && s.setRequestHeader("Authorization", t), s.withCredentials = !0)), s.send(null);
          });
        }function $(e, t, r, n) {
          return "file:///" != e.substr(0, 8) ? Promise.reject(new Error('Unable to fetch "' + e + '". Only file URLs of the form file:/// supported running in Node.')) : (Mt = Mt || require("fs"), e = it ? e.replace(/\//g, "\\").substr(8) : e.substr(7), new Promise(function (t, r) {
            Mt.readFile(e, function (e, o) {
              if (e) return r(e);if (n) t(o);else {
                var i = o + "";"\ufeff" === i[0] && (i = i.substr(1)), t(i);
              }
            });
          }));
        }function B() {
          throw new Error("No fetch method is defined for this environment.");
        }function W() {
          return { pluginKey: void 0, pluginArgument: void 0, pluginModule: void 0, packageKey: void 0, packageConfig: void 0, load: void 0 };
        }function G(e, t, r) {
          var n = W();if (r) {
            var o;t.pluginFirst ? -1 !== (o = r.lastIndexOf("!")) && (n.pluginArgument = n.pluginKey = r.substr(0, o)) : -1 !== (o = r.indexOf("!")) && (n.pluginArgument = n.pluginKey = r.substr(o + 1)), n.packageKey = z(t.packages, r), n.packageKey && (n.packageConfig = t.packages[n.packageKey]);
          }return n;
        }function H(e, t) {
          var r = this[Ot],
              n = W(),
              o = G(this, r, t),
              i = this;return Promise.resolve().then(function () {
            var r = e.lastIndexOf("#?");if (-1 === r) return Promise.resolve(e);var n = ge.call(i, e.substr(r + 2));return he.call(i, n, t, !0).then(function (t) {
              return t ? e.substr(0, r) : "@empty";
            });
          }).then(function (e) {
            var a = re(r.pluginFirst, e);return a ? (n.pluginKey = a.plugin, Promise.all([V.call(i, r, a.argument, o && o.pluginArgument || t, n, o, !0), i.resolve(a.plugin, t)]).then(function (e) {
              if (n.pluginArgument = e[0], n.pluginKey = e[1], n.pluginArgument === n.pluginKey) throw new Error("Plugin " + n.pluginArgument + " cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.");return ne(r.pluginFirst, e[0], e[1]);
            })) : V.call(i, r, e, o && o.pluginArgument || t, n, o, !1);
          }).then(function (e) {
            return me.call(i, e, t, o);
          }).then(function (e) {
            return te.call(i, r, e, n), n.pluginKey || !n.load.loader ? e : i.resolve(n.load.loader, e).then(function (t) {
              return n.pluginKey = t, n.pluginArgument = e, e;
            });
          }).then(function (e) {
            return i[St][e] = n, e;
          });
        }function Z(e, t) {
          var r = re(e.pluginFirst, t);if (r) {
            var n = Z.call(this, e, r.plugin);return ne(e.pluginFirst, Y.call(this, e, r.argument, void 0, !1, !1), n);
          }return Y.call(this, e, t, void 0, !1, !1);
        }function X(e, t) {
          var r = this[Ot],
              n = W(),
              o = o || G(this, r, t),
              i = re(r.pluginFirst, e);return i ? (n.pluginKey = X.call(this, i.plugin, t), ne(r.pluginFirst, Q.call(this, r, i.argument, o.pluginArgument || t, n, o, !!n.pluginKey), n.pluginKey)) : Q.call(this, r, e, o.pluginArgument || t, n, o, !!n.pluginKey);
        }function Y(e, t, r, o, i) {
          var a = n(t, r || rt);if (a) return U(e.baseURL, e.paths, a);if (o) {
            var s = z(e.map, t);if (s && (t = e.map[s] + t.substr(s.length), a = n(t, rt))) return U(e.baseURL, e.paths, a);
          }if (this.registry.has(t)) return t;if ("@node/" === t.substr(0, 6)) return t;var u = i && "/" !== t[t.length - 1],
              l = U(e.baseURL, e.paths, u ? t + "/" : t);return u ? l.substr(0, l.length - 1) : l;
        }function Q(e, t, r, n, o, i) {
          if (o && o.packageConfig && "." !== t[0]) {
            var a = o.packageConfig.map,
                s = a && z(a, t);if (s && "string" == typeof a[s]) {
              var u = se(this, e, o.packageConfig, o.packageKey, s, t, n, i);if (u) return u;
            }
          }var l = Y.call(this, e, t, r, !0, !0),
              c = fe(e, l);if (n.packageKey = c && c.packageKey || z(e.packages, l), !n.packageKey) return l;if (-1 !== e.packageConfigKeys.indexOf(l)) return n.packageKey = void 0, l;n.packageConfig = e.packages[n.packageKey] || (e.packages[n.packageKey] = xe());var f = l.substr(n.packageKey.length + 1);return ie(this, e, n.packageConfig, n.packageKey, f, n, i);
        }function V(e, t, r, n, o, i) {
          var a = this;return kt.then(function () {
            if (o && o.packageConfig && "./" !== t.substr(0, 2)) {
              var r = o.packageConfig.map,
                  s = r && z(r, t);if (s) return le(a, e, o.packageConfig, o.packageKey, s, t, n, i);
            }return kt;
          }).then(function (o) {
            if (o) return o;var s = Y.call(a, e, t, r, !0, !0),
                u = fe(e, s);if (n.packageKey = u && u.packageKey || z(e.packages, s), !n.packageKey) return Promise.resolve(s);if (-1 !== e.packageConfigKeys.indexOf(s)) return n.packageKey = void 0, n.load = ee(), n.load.format = "json", Promise.resolve(s);n.packageConfig = e.packages[n.packageKey] || (e.packages[n.packageKey] = xe());var l = u && !n.packageConfig.configured;return (l ? de(a, e, u.configPath, n) : kt).then(function () {
              var t = s.substr(n.packageKey.length + 1);return ue(a, e, n.packageConfig, n.packageKey, t, n, i);
            });
          });
        }function ee() {
          return { extension: "", deps: void 0, format: void 0, loader: void 0, scriptLoad: void 0, globals: void 0, nonce: void 0, integrity: void 0, sourceMap: void 0, exports: void 0, encapsulateGlobal: !1, crossOrigin: void 0, cjsRequireDetection: !0, cjsDeferDepsExecute: !1, esModule: !1 };
        }function te(e, t, r) {
          r.load = r.load || ee();var n,
              o = 0;for (var i in e.meta) if (n = i.indexOf("*"), -1 !== n && i.substr(0, n) === t.substr(0, n) && i.substr(n + 1) === t.substr(t.length - i.length + n + 1)) {
            var a = i.split("/").length;a > o && (o = a), I(r.load, e.meta[i], o !== a);
          }if (e.meta[t] && I(r.load, e.meta[t], !1), r.packageKey) {
            var s = t.substr(r.packageKey.length + 1),
                u = {};if (r.packageConfig.meta) {
              var o = 0;pe(r.packageConfig.meta, s, function (e, t, r) {
                r > o && (o = r), I(u, t, r && o > r);
              }), I(r.load, u, !1);
            }!r.packageConfig.format || r.pluginKey || r.load.loader || (r.load.format = r.load.format || r.packageConfig.format);
          }
        }function re(e, t) {
          var r,
              n,
              o = e ? t.indexOf("!") : t.lastIndexOf("!");return -1 !== o ? (e ? (r = t.substr(o + 1), n = t.substr(0, o)) : (r = t.substr(0, o), n = t.substr(o + 1) || r.substr(r.lastIndexOf(".") + 1)), { argument: r, plugin: n }) : void 0;
        }function ne(e, t, r) {
          return e ? r + "!" + t : t + "!" + r;
        }function oe(e, t, r, n, o) {
          if (!n || !t.defaultExtension || "/" === n[n.length - 1] || o) return n;var i = !1;if (t.meta && pe(t.meta, n, function (e, t, r) {
            return 0 === r || e.lastIndexOf("*") !== e.length - 1 ? i = !0 : void 0;
          }), !i && e.meta && pe(e.meta, r + "/" + n, function (e, t, r) {
            return 0 === r || e.lastIndexOf("*") !== e.length - 1 ? i = !0 : void 0;
          }), i) return n;var a = "." + t.defaultExtension;return n.substr(n.length - a.length) !== a ? n + a : n;
        }function ie(e, t, r, n, o, i, a) {
          if (!o) {
            if (!r.main) return n;o = "./" === r.main.substr(0, 2) ? r.main.substr(2) : r.main;
          }if (r.map) {
            var s = "./" + o,
                u = z(r.map, s);if (u || (s = "./" + oe(e, r, n, o, a), s !== "./" + o && (u = z(r.map, s))), u) {
              var l = se(e, t, r, n, u, s, i, a);if (l) return l;
            }
          }return n + "/" + oe(e, r, n, o, a);
        }function ae(e, t, r) {
          return t.substr(0, e.length) === e && r.length > e.length ? !1 : !0;
        }function se(e, t, r, n, o, i, a, s) {
          "/" === i[i.length - 1] && (i = i.substr(0, i.length - 1));var u = r.map[o];if ("object" == typeof u) throw new Error("Synchronous conditional normalization not supported sync normalizing " + o + " in " + n);if (ae(o, u, i) && "string" == typeof u) return Q.call(this, t, u + i.substr(o.length), n + "/", a, a, s);
        }function ue(e, t, r, n, o, i, a) {
          if (!o) {
            if (!r.main) return Promise.resolve(n);o = "./" === r.main.substr(0, 2) ? r.main.substr(2) : r.main;
          }var s, u;return r.map && (s = "./" + o, u = z(r.map, s), u || (s = "./" + oe(e, r, n, o, a), s !== "./" + o && (u = z(r.map, s)))), (u ? le(e, t, r, n, u, s, i, a) : kt).then(function (t) {
            return t ? Promise.resolve(t) : Promise.resolve(n + "/" + oe(e, r, n, o, a));
          });
        }function le(e, t, r, n, o, i, a, s) {
          "/" === i[i.length - 1] && (i = i.substr(0, i.length - 1));var u = r.map[o];if ("string" == typeof u) return ae(o, u, i) ? V.call(e, t, u + i.substr(o.length), n + "/", a, a, s).then(function (t) {
            return me.call(e, t, n + "/", a);
          }) : kt;var l = [],
              c = [];for (var d in u) {
            var p = ge(d);c.push({ condition: p, map: u[d] }), l.push(f.prototype.import.call(e, p.module, n));
          }return Promise.all(l).then(function (e) {
            for (var t = 0; t < c.length; t++) {
              var r = c[t].condition,
                  n = T(r.prop, e[t].__useDefault ? e[t].default : e[t]);if (!r.negate && n || r.negate && !n) return c[t].map;
            }
          }).then(function (r) {
            return r ? ae(o, r, i) ? V.call(e, t, r + i.substr(o.length), n + "/", a, a, s).then(function (t) {
              return me.call(e, t, n + "/", a);
            }) : kt : void 0;
          });
        }function ce(e) {
          var t = e.lastIndexOf("*"),
              r = Math.max(t + 1, e.lastIndexOf("/"));return { length: r, regEx: new RegExp("^(" + e.substr(0, r).replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^\\/]+") + ")(\\/|$)"), wildcard: -1 !== t };
        }function fe(e, t) {
          for (var r, n, o = !1, i = 0; i < e.packageConfigPaths.length; i++) {
            var a = e.packageConfigPaths[i],
                s = Ft[a] || (Ft[a] = ce(a));if (!(t.length < s.length)) {
              var u = t.match(s.regEx);!u || r && (o && s.wildcard || !(r.length < u[1].length)) || (r = u[1], o = !s.wildcard, n = r + a.substr(s.length));
            }
          }return r ? { packageKey: r, configPath: n } : void 0;
        }function de(e, r, n, o, i) {
          var a = e.pluginLoader || e;return -1 === r.packageConfigKeys.indexOf(n) && r.packageConfigKeys.push(n), a.import(n).then(function (e) {
            Oe(o.packageConfig, e, o.packageKey, !0, r), o.packageConfig.configured = !0;
          }).catch(function (e) {
            throw t(e, "Unable to fetch package configuration file " + n);
          });
        }function pe(e, t, r) {
          var n;for (var o in e) {
            var i = "./" === o.substr(0, 2) ? "./" : "";if (i && (o = o.substr(2)), n = o.indexOf("*"), -1 !== n && o.substr(0, n) === t.substr(0, n) && o.substr(n + 1) === t.substr(t.length - o.length + n + 1) && r(o, e[i + o], o.split("/").length)) return;
          }var a = e[t] && Object.hasOwnProperty.call(e, t) ? e[t] : e["./" + t];a && r(a, a, 0);
        }function ge(e) {
          var t,
              r,
              n,
              n,
              o = e.lastIndexOf("|");return -1 !== o ? (t = e.substr(o + 1), r = e.substr(0, o), "~" === t[0] && (n = !0, t = t.substr(1))) : (n = "~" === e[0], t = "default", r = e.substr(n), -1 !== Kt.indexOf(r) && (t = r, r = null)), { module: r || "@system-env", prop: t, negate: n };
        }function he(e, t, r) {
          return f.prototype.import.call(this, e.module, t).then(function (t) {
            var n = T(e.prop, t);if (r && "boolean" != typeof n) throw new TypeError("Condition did not resolve to a boolean.");return e.negate ? !n : n;
          });
        }function me(e, t, r) {
          var n = e.match(Dt);if (!n) return Promise.resolve(e);var o = ge.call(this, n[0].substr(2, n[0].length - 3));return he.call(this, o, t, !1).then(function (r) {
            if ("string" != typeof r) throw new TypeError("The condition value for " + e + " doesn't resolve to a string.");if (-1 !== r.indexOf("/")) throw new TypeError("Unabled to interpolate conditional " + e + (t ? " in " + t : "") + "\n	The condition value " + r + ' cannot contain a "/" separator.');return e.replace(Dt, r);
          });
        }function ve(e, t, r) {
          for (var n = 0; n < Tt.length; n++) {
            var o = Tt[n];t[o] && kr[o.substr(0, o.length - 6)] && r(t[o]);
          }
        }function ye(e, t) {
          var r = {};for (var n in e) {
            var o = e[n];t > 1 ? "object" == typeof o ? r[n] = ye(o, t - 1) : "packageConfig" !== n && (r[n] = o) : r[n] = o;
          }return r;
        }function be(e, t) {
          var r = e[t];return r instanceof Array ? e[t].concat([]) : "object" == typeof r ? ye(r, 3) : e[t];
        }function we(e) {
          if (e) {
            if (-1 !== xr.indexOf(e)) return be(this[Ot], e);throw new Error('"' + e + '" is not a valid configuration name. Must be one of ' + xr.join(", ") + ".");
          }for (var t = {}, r = 0; r < xr.length; r++) {
            var n = xr[r],
                o = be(this[Ot], n);void 0 !== o && (t[n] = o);
          }return t;
        }function ke(e, t) {
          var r = this,
              o = this[Ot];if ("warnings" in e && (o.warnings = e.warnings), "wasm" in e && (o.wasm = "undefined" != typeof WebAssembly && e.wasm), ("production" in e || "build" in e) && et.call(r, !!e.production, !!(e.build || kr && kr.build)), !t) {
            var i;ve(r, e, function (e) {
              i = i || e.baseURL;
            }), i = i || e.baseURL, i && (o.baseURL = n(i, rt) || n("./" + i, rt), "/" !== o.baseURL[o.baseURL.length - 1] && (o.baseURL += "/")), e.paths && L(o.paths, e.paths), ve(r, e, function (e) {
              e.paths && L(o.paths, e.paths);
            });for (var a in o.paths) -1 !== o.paths[a].indexOf("*") && (M.call(o, "Path config " + a + " -> " + o.paths[a] + " is no longer supported as wildcards are deprecated."), delete o.paths[a]);
          }if (e.defaultJSExtensions && M.call(o, "The defaultJSExtensions configuration option is deprecated.\n  Use packages defaultExtension instead.", !0), "boolean" == typeof e.pluginFirst && (o.pluginFirst = e.pluginFirst), e.map) for (var a in e.map) {
            var s = e.map[a];if ("string" == typeof s) o.map[a] = Y.call(r, o, s, void 0, !1, !1);else {
              var u = Y.call(r, o, a, void 0, !0, !0),
                  l = o.packages[u];l || (l = o.packages[u] = xe(), l.defaultExtension = ""), Oe(l, { map: s }, u, !1, o);
            }
          }if (e.packageConfigPaths) {
            for (var c = [], f = 0; f < e.packageConfigPaths.length; f++) {
              var d = e.packageConfigPaths[f],
                  p = Math.max(d.lastIndexOf("*") + 1, d.lastIndexOf("/")),
                  g = Y.call(r, o, d.substr(0, p), void 0, !1, !1);c[f] = g + d.substr(p);
            }o.packageConfigPaths = c;
          }if (e.bundles) for (var a in e.bundles) {
            for (var h = [], f = 0; f < e.bundles[a].length; f++) h.push(r.normalizeSync(e.bundles[a][f]));o.bundles[a] = h;
          }if (e.packages) for (var a in e.packages) {
            if (a.match(/^([^\/]+:)?\/\/$/)) throw new TypeError('"' + a + '" is not a valid package name.');var u = Y.call(r, o, "/" !== a[a.length - 1] ? a + "/" : a, void 0, !0, !0);u = u.substr(0, u.length - 1), Oe(o.packages[u] = o.packages[u] || xe(), e.packages[a], u, !1, o);
          }if (e.depCache) for (var a in e.depCache) o.depCache[r.normalizeSync(a)] = [].concat(e.depCache[a]);if (e.meta) for (var a in e.meta) if ("*" === a[0]) L(o.meta[a] = o.meta[a] || {}, e.meta[a]);else {
            var m = Y.call(r, o, a, void 0, !0, !0);L(o.meta[m] = o.meta[m] || {}, e.meta[a]);
          }"transpiler" in e && (o.transpiler = e.transpiler);for (var v in e) -1 === xr.indexOf(v) && -1 === Tt.indexOf(v) && (r[v] = e[v]);ve(r, e, function (e) {
            r.config(e, !0);
          });
        }function xe() {
          return { defaultExtension: void 0, main: void 0, format: void 0, meta: void 0, map: void 0, packageConfig: void 0, configured: !1 };
        }function Oe(e, t, r, n, o) {
          for (var i in t) "main" === i || "format" === i || "defaultExtension" === i || "configured" === i ? n && void 0 !== e[i] || (e[i] = t[i]) : "map" === i ? (n ? A : L)(e.map = e.map || {}, t.map) : "meta" === i ? (n ? A : L)(e.meta = e.meta || {}, t.meta) : Object.hasOwnProperty.call(t, i) && M.call(o, '"' + i + '" is not a valid package configuration option in package ' + r);return void 0 === e.defaultExtension && (e.defaultExtension = "js"), void 0 === e.main && e.map && e.map["."] ? (e.main = e.map["."], delete e.map["."]) : "object" == typeof e.main && (e.map = e.map || {}, e.map["./@main"] = e.main, e.main.default = e.main.default || "./", e.main = "@main"), e;
        }function Se(e) {
          return Ut ? $t + new Buffer(e).toString("base64") : "undefined" != typeof btoa ? $t + btoa(unescape(encodeURIComponent(e))) : "";
        }function Ee(e, t, r, n) {
          var o = e.lastIndexOf("\n");if (t) {
            if ("object" != typeof t) throw new TypeError("load.metadata.sourceMap must be set to an object.");t = JSON.stringify(t);
          }return (n ? "(function(System, SystemJS) {" : "") + e + (n ? "\n})(System, System);" : "") + ("\n//# sourceURL=" != e.substr(o, 15) ? "\n//# sourceURL=" + r + (t ? "!transpiled" : "") : "") + (t && Se(t) || "");
        }function je(e, t, r, n, o) {
          qt || (qt = document.head || document.body || document.documentElement);var i = document.createElement("script");i.text = Ee(t, r, n, !1);var a,
              s = window.onerror;return window.onerror = function (e) {
            a = addToError(e, "Evaluating " + n), s && s.apply(this, arguments);
          }, Re(e), o && i.setAttribute("nonce", o), qt.appendChild(i), qt.removeChild(i), Pe(), window.onerror = s, a ? a : void 0;
        }function Re(e) {
          0 == Bt++ && (Jt = at.System), at.System = at.SystemJS = e;
        }function Pe() {
          0 == --Bt && (at.System = at.SystemJS = Jt);
        }function _e(e, t, r, n, o, i, a) {
          if (t) {
            if (i && Wt) return je(e, t, r, n, i);try {
              Re(e), !zt && e._nodeRequire && (zt = e._nodeRequire("vm"), Nt = zt.runInThisContext("typeof System !== 'undefined' && System") === e), Nt ? zt.runInThisContext(Ee(t, r, n, !a), { filename: n + (r ? "!transpiled" : "") }) : (0, eval)(Ee(t, r, n, !a)), Pe();
            } catch (e) {
              return Pe(), e;
            }
          }
        }function Me(e) {
          return "file:///" === e.substr(0, 8) ? e.substr(7 + !!it) : Gt && e.substr(0, Gt.length) === Gt ? e.substr(Gt.length) : e;
        }function Ce(e, t) {
          return Me(this.normalizeSync(e, t));
        }function Le(e) {
          var t,
              r = e.lastIndexOf("!");t = -1 !== r ? e.substr(0, r) : e;var n = t.split("/");return n.pop(), n = n.join("/"), { filename: Me(t), dirname: Me(n) };
        }function Ae(e) {
          function t(e, t) {
            for (var r = 0; r < e.length; r++) if (e[r][0] < t.index && e[r][1] > t.index) return !0;return !1;
          }Lt.lastIndex = Vt.lastIndex = er.lastIndex = 0;var r,
              n = [],
              o = [],
              i = [];if (e.length / e.split("\n").length < 200) {
            for (; r = er.exec(e);) o.push([r.index, r.index + r[0].length]);for (; r = Vt.exec(e);) t(o, r) || i.push([r.index + r[1].length, r.index + r[0].length - 1]);
          }for (; r = Lt.exec(e);) if (!t(o, r) && !t(i, r)) {
            var a = r[1].substr(1, r[1].length - 2);if (a.match(/"|'/)) continue;n.push(a);
          }return n;
        }function Ie(e) {
          if (-1 === tr.indexOf(e)) {
            try {
              var t = at[e];
            } catch (t) {
              tr.push(e);
            }this(e, t);
          }
        }function Fe(e) {
          if ("string" == typeof e) return T(e, at);if (!(e instanceof Array)) throw new Error("Global exports must be a string or array.");for (var t = {}, r = 0; r < e.length; r++) t[e[r].split(".").pop()] = T(e[r], at);return t;
        }function Ke(e, t, r, n) {
          var o = at.define;at.define = void 0;var i;if (r) {
            i = {};for (var a in r) i[a] = at[a], at[a] = r[a];
          }return t || (Zt = {}, Object.keys(at).forEach(Ie, function (e, t) {
            Zt[e] = t;
          })), function () {
            var e,
                r = t ? Fe(t) : {},
                a = !!t;if ((!t || n) && Object.keys(at).forEach(Ie, function (o, i) {
              Zt[o] !== i && void 0 !== i && (n && (at[o] = void 0), t || (r[o] = i, void 0 !== e ? a || e === i || (a = !0) : e = i));
            }), r = a ? r : e, i) for (var s in i) at[s] = i[s];return at.define = o, r;
          };
        }function De(e, t) {
          e = e.replace(Vt, "");var r = e.match(or),
              n = (r[1].split(",")[t] || "require").replace(ir, ""),
              o = ar[n] || (ar[n] = new RegExp(rr + n + nr, "g"));o.lastIndex = 0;for (var i, a = []; i = o.exec(e);) a.push(i[2] || i[3]);return a;
        }function Te(e) {
          return function (t, r, n) {
            e(t, r, n), Object.defineProperty(n.exports, "__esModule", { value: !0 });
          };
        }function Ue(e, t) {
          Yt = e, ur = t, Xt = void 0, sr = !1;
        }function qe(e) {
          Xt ? e.registerDynamic(Yt ? Xt[0].concat(Yt) : Xt[0], !1, ur ? Te(Xt[1]) : Xt[1]) : sr && e.registerDynamic([], !1, R);
        }function ze(e, t) {
          !e.load.esModule || "__esModule" in t || Object.defineProperty(t, "__esModule", { value: !0 });
        }function Ne(e, t) {
          var r = this,
              n = this[Ot],
              o = this[St][e];return ($e(n, this, e) || kt).then(function () {
            if (!t()) {
              if ("@node/" === e.substr(0, 6)) {
                if (!r._nodeRequire) throw new TypeError("Error loading " + e + ". Can only load node core modules in Node.");return r.registerDynamic([], !1, function () {
                  return C.call(r, e.substr(6), r.baseURL);
                }), void t();
              }return o.load.scriptLoad ? (o.load.pluginKey || !lr) && (o.load.scriptLoad = !1, M.call(n, 'scriptLoad not supported for "' + e + '"')) : o.load.scriptLoad !== !1 && !o.load.pluginKey && lr && (o.load.deps || o.load.globals || !("system" === o.load.format || "register" === o.load.format || "global" === o.load.format && o.load.exports) || (o.load.scriptLoad = !0)), o.load.scriptLoad ? new Promise(function (n, i) {
                if ("amd" === o.load.format && at.define !== r.amdDefine) throw new Error("Loading AMD with scriptLoad requires setting the global `" + fr + ".define = SystemJS.amdDefine`");D(e, o.load.crossOrigin, o.load.integrity, function () {
                  if (!t()) {
                    o.load.format = "global";var e = o.load.exports && Fe(o.load.exports);r.registerDynamic([], !1, function () {
                      return ze(o, e), e;
                    }), t();
                  }n();
                }, i);
              }) : Je(r, e, o).then(function () {
                return Be(r, e, o, t, n.wasm);
              });
            }
          }).then(function (t) {
            return r[St][e] = void 0, t;
          });
        }function Je(e, t, r) {
          return r.pluginKey ? e.import(r.pluginKey).then(function (e) {
            r.pluginModule = e, r.pluginLoad = { name: t, address: r.pluginArgument, source: void 0, metadata: r.load }, r.load.deps = r.load.deps || [];
          }) : kt;
        }function $e(e, t, r) {
          var n = e.depCache[r];if (n) for (var o = 0; o < n.length; o++) t.normalize(n[o], r).then(F);else {
            var i = !1;for (var a in e.bundles) {
              for (var o = 0; o < e.bundles[a].length; o++) {
                var s = e.bundles[a][o];if (s == r) {
                  i = !0;break;
                }if (-1 != s.indexOf("*")) {
                  var u = s.split("*");if (2 != u.length) {
                    e.bundles[a].splice(o--, 1);continue;
                  }if (r.substring(0, u[0].length) == u[0] && r.substr(r.length - u[1].length, u[1].length) == u[1]) {
                    i = !0;break;
                  }
                }
              }if (i) return t.import(a);
            }
          }
        }function Be(e, t, r, n, o) {
          return r.load.exports && !r.load.format && (r.load.format = "global"), kt.then(function () {
            return r.pluginModule && r.pluginModule.locate ? r.pluginModule.locate.call(e, r.pluginLoad).then(function (e) {
              e && (r.pluginLoad.address = e);
            }) : void 0;
          }).then(function () {
            return r.pluginModule ? r.pluginModule.fetch ? (o = !1, r.pluginModule.fetch.call(e, r.pluginLoad, function (e) {
              return It(e.address, r.load.authorization, r.load.integrity, !1);
            })) : It(r.pluginArgument, r.load.authorization, r.load.integrity, o) : It(t, r.load.authorization, r.load.integrity, o);
          }).then(function (i) {
            if (!o || "string" == typeof i) return We(e, t, i, r, n);var a = new Uint8Array(i);if (0 === a[0] && 97 === a[1] && 115 === a[2]) return WebAssembly.compile(a).then(function (t) {
              var r = new WebAssembly.Instance(t, {});return e.newModule(r.exports);
            });var s = new TextDecoder("utf-8").decode(a);return We(e, t, s, r, n);
          });
        }function We(e, t, r, n, o) {
          return Promise.resolve(r).then(function (t) {
            return "detect" === n.load.format && (n.load.format = void 0), Qe(t, n), n.pluginModule && n.pluginModule.translate ? (n.pluginLoad.source = t, Promise.resolve(n.pluginModule.translate.call(e, n.pluginLoad, n.traceOpts)).then(function (e) {
              if (n.load.sourceMap) {
                if ("object" != typeof n.load.sourceMap) throw new Error("metadata.load.sourceMap must be set to an object.");Ze(n.pluginLoad.address, n.load.sourceMap);
              }return "string" == typeof e ? e : n.pluginLoad.source;
            })) : t;
          }).then(function (r) {
            return "register" === n.load.format || !n.load.format && Ge(r) ? (n.load.format = "register", r) : "esm" === n.load.format || !n.load.format && r.match(dr) ? (n.load.format = "esm", Xe(e, r, t, n, o)) : r;
          }).then(function (t) {
            if ("string" != typeof t || !n.pluginModule || !n.pluginModule.instantiate) return t;var r = !1;return n.pluginLoad.source = t, Promise.resolve(n.pluginModule.instantiate.call(e, n.pluginLoad, function (e) {
              if (t = e.source, n.load = e.metadata, r) throw new Error("Instantiate must only be called once.");r = !0;
            })).then(function (e) {
              return r ? t : P(e);
            });
          }).then(function (r) {
            if ("string" != typeof r) return r;n.load.format || (n.load.format = He(r));var i = !1;switch (n.load.format) {case "esm":case "register":case "system":
                var a = _e(e, r, n.load.sourceMap, t, n.load.integrity, n.load.nonce, !1);if (a) throw a;if (!o()) return xt;return;case "json":
                return e.newModule({ default: JSON.parse(r), __useDefault: !0 });case "amd":
                var s = at.define;at.define = e.amdDefine, Ue(n.load.deps, n.load.esModule);var a = _e(e, r, n.load.sourceMap, t, n.load.integrity, n.load.nonce, !1);if (i = o(), i || (qe(e), i = o()), at.define = s, a) throw a;break;case "cjs":
                var u = n.load.deps,
                    l = (n.load.deps || []).concat(n.load.cjsRequireDetection ? Ae(r) : []);for (var c in n.load.globals) n.load.globals[c] && l.push(n.load.globals[c]);e.registerDynamic(l, !0, function (o, i, a) {
                  if (o.resolve = function (t) {
                    return Ce.call(e, t, a.id);
                  }, a.paths = [], a.require = o, !n.load.cjsDeferDepsExecute && u) for (var s = 0; s < u.length; s++) o(u[s]);var l = Le(a.id),
                      c = { exports: i, args: [o, i, a, l.filename, l.dirname, at, at] },
                      f = "(function (require, exports, module, __filename, __dirname, global, GLOBAL";if (n.load.globals) for (var d in n.load.globals) c.args.push(o(n.load.globals[d])), f += ", " + d;var p = at.define;at.define = void 0, at.__cjsWrapper = c, r = f + ") {" + r.replace(mr, "") + "\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);";var g = _e(e, r, n.load.sourceMap, t, n.load.integrity, n.load.nonce, !1);if (g) throw g;ze(n, i), at.__cjsWrapper = void 0, at.define = p;
                }), i = o();break;case "global":
                var l = n.load.deps || [];for (var c in n.load.globals) {
                  var f = n.load.globals[c];f && l.push(f);
                }e.registerDynamic(l, !1, function (o, i, a) {
                  var s;if (n.load.globals) {
                    s = {};for (var u in n.load.globals) n.load.globals[u] && (s[u] = o(n.load.globals[u]));
                  }var l = n.load.exports;l && (r += "\n" + fr + '["' + l + '"] = ' + l + ";");var c = Ke(a.id, l, s, n.load.encapsulateGlobal),
                      f = _e(e, r, n.load.sourceMap, t, n.load.integrity, n.load.nonce, !0);if (f) throw f;var d = c();return ze(n, d), d;
                }), i = o();break;default:
                throw new TypeError('Unknown module format "' + n.load.format + '" for "' + t + '".' + ("es6" === n.load.format ? ' Use "esm" instead here.' : ""));}if (!i) throw new Error("Module " + t + " detected as " + n.load.format + " but didn't execute correctly.");
          });
        }function Ge(e) {
          var t = e.match(pr);return t && "System.register" === e.substr(t[0].length, 15);
        }function He(e) {
          return e.match(gr) ? "amd" : (hr.lastIndex = 0, Lt.lastIndex = 0, Lt.exec(e) || hr.exec(e) ? "cjs" : "global");
        }function Ze(e, t) {
          var r = e.split("!")[0];t.file && t.file != e || (t.file = r + "!transpiled"), (!t.sources || t.sources.length <= 1 && (!t.sources[0] || t.sources[0] === e)) && (t.sources = [r]);
        }function Xe(e, r, n, o, i) {
          if (!e.transpiler) throw new TypeError("Unable to dynamically transpile ES module\n   A loader plugin needs to be configured via `SystemJS.config({ transpiler: 'transpiler-module' })`.");if (o.load.deps) {
            for (var a = "", s = 0; s < o.load.deps.length; s++) a += 'import "' + o.load.deps[s] + '"; ';r = a + r;
          }return e.import.call(e, e.transpiler).then(function (t) {
            if (t.__useDefault && (t = t.default), !t.translate) throw new Error(e.transpier + " is not a valid transpiler plugin.");return t === o.pluginModule ? load.source : ("string" == typeof o.load.sourceMap && (o.load.sourceMap = JSON.parse(o.load.sourceMap)), o.pluginLoad = o.pluginLoad || { name: n, address: n, source: r, metadata: o.load }, o.load.deps = o.load.deps || [], Promise.resolve(t.translate.call(e, o.pluginLoad, o.traceOpts)).then(function (e) {
              var t = o.load.sourceMap;return t && "object" == typeof t && Ze(n, t), "esm" === o.load.format && Ge(e) && (o.load.format = "register"), e;
            }));
          }, function (e) {
            throw t(e, "Unable to load transpiler to transpile " + n);
          });
        }function Ye(e, t, r) {
          for (var n, o = t.split("."); o.length > 1;) n = o.shift(), e = e[n] = e[n] || {};n = o.shift(), void 0 === e[n] && (e[n] = r);
        }function Qe(e, t) {
          var r = e.match(vr);if (r) for (var n = r[0].match(yr), o = 0; o < n.length; o++) {
            var i = n[o],
                a = i.length,
                s = i.substr(0, 1);if (";" == i.substr(a - 1, 1) && a--, '"' == s || "'" == s) {
              var u = i.substr(1, i.length - 3),
                  l = u.substr(0, u.indexOf(" "));if (l) {
                var c = u.substr(l.length + 1, u.length - l.length - 1);"deps" === l && (l = "deps[]"), "[]" === l.substr(l.length - 2, 2) ? (l = l.substr(0, l.length - 2), t.load[l] = t.load[l] || [], t.load[l].push(c)) : "use" !== l && Ye(t.load, l, c);
              } else t.load[u] = !0;
            }
          }
        }function Ve() {
          f.call(this), this._loader = {}, this[St] = {}, this[Ot] = { baseURL: rt, paths: {}, packageConfigPaths: [], packageConfigKeys: [], map: {}, packages: {}, depCache: {}, meta: {}, bundles: {}, production: !1, transpiler: void 0, loadedBundles: {}, warnings: !1, pluginFirst: !1, wasm: !1 }, this.scriptSrc = cr, this._nodeRequire = Qt, this.registry.set("@empty", xt), et.call(this, !1, !1), Ht(this);
        }function et(e, t) {
          this[Ot].production = e, this.registry.set("@system-env", kr = this.newModule({ browser: nt, node: !!this._nodeRequire, production: !t && e, dev: t || !e, build: t, default: !0 }));
        }function tt(e, t) {
          M.call(e[Ot], "SystemJS." + t + " is deprecated for SystemJS.registry." + t);
        }var rt,
            nt = "undefined" != typeof window && "undefined" != typeof document,
            ot = "undefined" != typeof process && process.versions && process.versions.node,
            it = "undefined" != typeof process && "string" == typeof process.platform && process.platform.match(/^win/),
            at = "undefined" != typeof self ? self : global,
            st = "undefined" != typeof Symbol;if ("undefined" != typeof document && document.getElementsByTagName) {
          if (rt = document.baseURI, !rt) {
            var ut = document.getElementsByTagName("base");rt = ut[0] && ut[0].href || window.location.href;
          }
        } else "undefined" != typeof location && (rt = location.href);if (rt) rt = rt.split("#")[0].split("?")[0], rt = rt.substr(0, rt.lastIndexOf("/") + 1);else {
          if ("undefined" == typeof process || !process.cwd) throw new TypeError("No environment baseURI");rt = "file://" + (it ? "/" : "") + process.cwd(), it && (rt = rt.replace(/\\/g, "/"));
        }"/" !== rt[rt.length - 1] && (rt += "/");var lt = "_" == new Error(0, "_").fileName,
            ct = Promise.resolve();i.prototype.constructor = i, i.prototype.import = function (e, r) {
          if ("string" != typeof e) throw new TypeError("Loader import method must be passed a module key string");var n = this;return ct.then(function () {
            return n[dt](e, r);
          }).then(a).catch(function (n) {
            throw t(n, "Loading " + e + (r ? " from " + r : ""));
          });
        };var ft = i.resolve = e("resolve"),
            dt = i.resolveInstantiate = e("resolveInstantiate");i.prototype[dt] = function (e, t) {
          var r = this;return r.resolve(e, t).then(function (e) {
            return r.registry.get(e);
          });
        }, i.prototype.resolve = function (e, r) {
          var n = this;return ct.then(function () {
            return n[ft](e, r);
          }).then(s).catch(function (n) {
            throw t(n, "Resolving " + e + (r ? " to " + r : ""));
          });
        };var pt = "undefined" != typeof Symbol && Symbol.iterator,
            gt = e("registry");pt && (u.prototype[Symbol.iterator] = function () {
          return this.entries()[Symbol.iterator]();
        }, u.prototype.entries = function () {
          var e = this[gt];return o(Object.keys(e).map(function (t) {
            return [t, e[t]];
          }));
        }), u.prototype.keys = function () {
          return o(Object.keys(this[gt]));
        }, u.prototype.values = function () {
          var e = this[gt];return o(Object.keys(e).map(function (t) {
            return e[t];
          }));
        }, u.prototype.get = function (e) {
          return this[gt][e];
        }, u.prototype.set = function (e, t) {
          if (!(t instanceof l)) throw new Error("Registry must be set with an instance of Module Namespace");return this[gt][e] = t, this;
        }, u.prototype.has = function (e) {
          return Object.hasOwnProperty.call(this[gt], e);
        }, u.prototype.delete = function (e) {
          return Object.hasOwnProperty.call(this[gt], e) ? (delete this[gt][e], !0) : !1;
        };var ht = e("baseObject");l.prototype = Object.create(null), "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(l.prototype, Symbol.toStringTag, { value: "Module" });var mt = e("register-internal");f.prototype = Object.create(i.prototype), f.prototype.constructor = f;var vt = f.instantiate = e("instantiate");f.prototype[f.resolve = i.resolve] = function (e, t) {
          return n(e, t || rt);
        }, f.prototype[vt] = function (e, t) {}, f.prototype[i.resolveInstantiate] = function (e, t) {
          var r = this,
              n = this[mt],
              o = r.registry[r.registry._registry];return p(r, e, t, o, n).then(function (e) {
            return e instanceof l ? e : e.module ? e.module : e.linkRecord.linked ? x(r, e, e.linkRecord, o, n, void 0) : b(r, e, e.linkRecord, o, n, [e]).then(function () {
              return x(r, e, e.linkRecord, o, n, void 0);
            }).catch(function (t) {
              throw w(r, e), t;
            });
          });
        }, f.prototype.register = function (e, t, r) {
          var n = this[mt];if (void 0 === r) n.lastRegister = [e, t, void 0];else {
            var o = n.records[e] || d(n, e, void 0);o.registration = [t, r, void 0];
          }
        }, f.prototype.registerDynamic = function (e, t, r, n) {
          var o = this[mt];if ("string" != typeof e) o.lastRegister = [e, t, r];else {
            var i = o.records[e] || d(o, e, void 0);i.registration = [t, r, n];
          }
        }, k.prototype.constructor = function () {
          throw new TypeError("Cannot subclass the contextual loader only Reflect.Loader.");
        }, k.prototype.import = function (e) {
          return this.loader.import(e, this.key);
        }, k.prototype.resolve = function (e) {
          return this.loader.resolve(e, this.key);
        }, k.prototype.load = function (e) {
          return this.loader.load(e, this.key);
        };var yt = {};Object.freeze && Object.freeze(yt);var bt,
            wt,
            kt = Promise.resolve(),
            xt = new l({}),
            Ot = e("loader-config"),
            St = e("metadata"),
            Et = "undefined" == typeof window && "undefined" != typeof self && "undefined" != typeof importScripts,
            jt = !1,
            Rt = !1;if (nt && function () {
          var e = document.createElement("link").relList;if (e && e.supports) {
            Rt = !0;try {
              jt = e.supports("preload");
            } catch (e) {}
          }
        }(), nt) {
          var Pt = [],
              _t = window.onerror;window.onerror = function (e, t) {
            for (var r = 0; r < Pt.length; r++) if (Pt[r].src === t) return void Pt[r].err(e);_t.apply(this, arguments);
          };
        }var Mt,
            Ct,
            Lt = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,
            At = "undefined" != typeof XMLHttpRequest;Ct = "undefined" != typeof self && "undefined" != typeof self.fetch ? N : At ? J : "undefined" != typeof require && "undefined" != typeof process ? $ : B;var It = Ct,
            Ft = {},
            Kt = ["browser", "node", "dev", "build", "production", "default"],
            Dt = /#\{[^\}]+\}/,
            Tt = ["browserConfig", "nodeConfig", "devConfig", "buildConfig", "productionConfig"],
            Ut = "undefined" != typeof Buffer;try {
          Ut && "YQ==" !== new Buffer("a").toString("base64") && (Ut = !1);
        } catch (e) {
          Ut = !1;
        }var qt,
            zt,
            Nt,
            Jt,
            $t = "\n//# sourceMappingURL=data:application/json;base64,",
            Bt = 0,
            Wt = !1;nt && "undefined" != typeof document && document.getElementsByTagName && (window.chrome && window.chrome.extension || navigator.userAgent.match(/^Node\.js/) || (Wt = !0));var Gt,
            Ht = function (e) {
          function t(r, n, o, i) {
            if ("object" == typeof r && !(r instanceof Array)) return t.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));if ("string" == typeof r && "function" == typeof n && (r = [r]), !(r instanceof Array)) {
              if ("string" == typeof r) {
                var a = e.decanonicalize(r, i),
                    s = e.get(a);if (!s) throw new Error('Module not already loaded loading "' + r + '" as ' + a + (i ? ' from "' + i + '".' : "."));return s.__useDefault ? s.default : s;
              }throw new TypeError("Invalid require");
            }for (var u = [], l = 0; l < r.length; l++) u.push(e.import(r[l], i));Promise.all(u).then(function (e) {
              for (var t = 0; t < e.length; t++) e[t] = e[t].__useDefault ? e[t].default : e[t];n && n.apply(null, e);
            }, o);
          }function r(r, n, o) {
            function i(r, i, l) {
              for (var c = [], f = 0; f < n.length; f++) c.push(r(n[f]));if (l.uri = l.id, l.config = R, -1 !== u && c.splice(u, 0, l), -1 !== s && c.splice(s, 0, i), -1 !== a) {
                var d = function (n, o, i) {
                  return "string" == typeof n && "function" != typeof o ? r(n) : t.call(e, n, o, i, l.id);
                };d.toUrl = function (t) {
                  return e.normalizeSync(t, l.id);
                }, c.splice(a, 0, d);
              }var p = at.require;at.require = t;var g = o.apply(-1 === s ? at : i, c);at.require = p, "undefined" != typeof g && (l.exports = g);
            }"string" != typeof r && (o = n, n = r, r = null), n instanceof Array || (o = n, n = ["require", "exports", "module"].splice(0, o.length)), "function" != typeof o && (o = function (e) {
              return function () {
                return e;
              };
            }(o)), r || Yt && (n = n.concat(Yt), Yt = void 0);var a, s, u;-1 !== (a = n.indexOf("require")) && (n.splice(a, 1), r || (n = n.concat(De(o.toString(), a)))), -1 !== (s = n.indexOf("exports")) && n.splice(s, 1), -1 !== (u = n.indexOf("module")) && n.splice(u, 1), r ? (e.registerDynamic(r, n, !1, i), Xt ? (Xt = void 0, sr = !0) : sr || (Xt = [n, i])) : e.registerDynamic(n, !1, ur ? Te(i) : i);
          }e.set("@@cjs-helpers", e.newModule({ requireResolve: Ce.bind(e), getPathVars: Le })), e.set("@@global-helpers", e.newModule({ prepareGlobal: Ke })), r.amd = {}, e.amdDefine = r, e.amdRequire = t;
        };"undefined" != typeof window && "undefined" != typeof document && window.location && (Gt = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : ""));var Zt,
            Xt,
            Yt,
            Qt,
            Vt = /(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
            er = /("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g,
            tr = ["_g", "sessionStorage", "localStorage", "clipboardData", "frames", "frameElement", "external", "mozAnimationStartTime", "webkitStorageInfo", "webkitIndexedDB", "mozInnerScreenY", "mozInnerScreenX"],
            rr = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",
            nr = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",
            or = /\(([^\)]*)\)/,
            ir = /^\s+|\s+$/g,
            ar = {},
            sr = !1,
            ur = !1,
            lr = (nt || Et) && "undefined" != typeof navigator && navigator.userAgent && !navigator.userAgent.match(/MSIE (9|10).0/);"undefined" == typeof require || "undefined" == typeof process || process.browser || (Qt = require);var cr,
            fr = "undefined" != typeof self ? "self" : "global",
            dr = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/,
            pr = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/,
            gr = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/,
            hr = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/,
            mr = /^\#\!.*/,
            vr = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,
            yr = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;if ("undefined" == typeof Promise) throw new Error("SystemJS needs a Promise polyfill.");if ("undefined" != typeof document) {
          var br = document.getElementsByTagName("script"),
              wr = br[br.length - 1];document.currentScript && (wr.defer || wr.async) && (wr = document.currentScript), cr = wr && wr.src;
        } else if ("undefined" != typeof importScripts) try {
          throw new Error("_");
        } catch (e) {
          e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function (e, t) {
            cr = t;
          });
        } else "undefined" != typeof __filename && (cr = __filename);var kr;Ve.prototype = Object.create(f.prototype), Ve.prototype.constructor = Ve, Ve.prototype[Ve.resolve = f.resolve] = Ve.prototype.normalize = H, Ve.prototype.load = function (e, t) {
          return M.call(this[Ot], "System.load is deprecated."), this.import(e, t);
        }, Ve.prototype.decanonicalize = Ve.prototype.normalizeSync = Ve.prototype.resolveSync = X, Ve.prototype[Ve.instantiate = f.instantiate] = Ne, Ve.prototype.config = ke, Ve.prototype.getConfig = we, Ve.prototype.global = at, Ve.prototype.import = function () {
          return f.prototype.import.apply(this, arguments).then(function (e) {
            return e.__useDefault ? e.default : e;
          });
        };for (var xr = ["baseURL", "map", "paths", "packages", "packageConfigPaths", "depCache", "meta", "bundles", "transpiler", "warnings", "pluginFirst", "production", "wasm"], Or = "undefined" != typeof Proxy, Sr = 0; Sr < xr.length; Sr++) (function (e) {
          Object.defineProperty(Ve.prototype, e, { get: function () {
              var t = be(this[Ot], e);return Or && "object" == typeof t && (t = new Proxy(t, { set: function (t, r) {
                  throw new Error("Cannot set SystemJS." + e + '["' + r + '"] directly. Use SystemJS.config({ ' + e + ': { "' + r + '": ... } }) rather.');
                } })), t;
            }, set: function (t) {
              throw new Error("Setting `SystemJS." + e + "` directly is no longer supported. Use `SystemJS.config({ " + e + ": ... })`.");
            } });
        })(xr[Sr]);Ve.prototype.delete = function (e) {
          tt(this, "delete"), this.registry.delete(e);
        }, Ve.prototype.get = function (e) {
          return tt(this, "get"), this.registry.get(e);
        }, Ve.prototype.has = function (e) {
          return tt(this, "has"), this.registry.has(e);
        }, Ve.prototype.set = function (e, t) {
          return tt(this, "set"), this.registry.set(e, t);
        }, Ve.prototype.newModule = function (e) {
          return new l(e);
        }, Ve.prototype.isModule = _, Ve.prototype.register = function (e, t, r) {
          return "string" == typeof e && (e = Z.call(this, this[Ot], e)), f.prototype.register.call(this, e, t, r);
        }, Ve.prototype.registerDynamic = function (e, t, r, n) {
          return "string" == typeof e && (e = Z.call(this, this[Ot], e)), f.prototype.registerDynamic.call(this, e, t, r, n);
        }, Ve.prototype.version = "0.20.5 Dev";var Er = new Ve();(nt || Et) && (at.SystemJS = at.System = Er), "undefined" != typeof module && module.exports && (module.exports = Er);
      }();
      //# sourceMappingURL=system.js.map
    }
  };
});