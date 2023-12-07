!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("IA", [], t) : "object" == typeof exports ? exports.IA = t() : e.IA = t()
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var a = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n),
                a.l = !0,
                a.exports
        }
        return n.m = e,
            n.c = t,
            n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.r = function(e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                ;
                return n.d(t, "a", t),
                    t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "",
            n(n.s = 14)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                    "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                    t
            }
        }();
        var a = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return r(e, null, [{
                key: "assert",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "No message provided.";
                    if (!e)
                        throw new Error(t)
                }
            }, {
                key: "reportError",
                value: function(t) {
                    try {
                        if (!e.baseUrl || !e.authToken)
                            return void console.warn("Problem with client initialization, please contact the Insights team");
                        console.warn("Looks like there was a problem with the KT Insights integration, the error below has been caught and sent to Insights"),
                            console.warn(t);
                        var n = new XMLHttpRequest;
                        n.open("POST", e.baseUrl + "/errors"),
                            n.setRequestHeader("Content-type", "application/json"),
                            n.setRequestHeader("Authorization", "Bearer " + e.authToken);
                        var r = {
                            Message: t.message + ": " + t.stack + " " + navigator.userAgent
                        };
                        n.send(JSON.stringify(r))
                    } catch (e) {
                        console.warn("Insights client had a problem reporting an error. Please contact the Insights team.")
                    }
                }
            }, {
                key: "nullFunction",
                value: function() {}
            }]),
                e
        }();
        t.default = a
    }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }();
            for (var a = [], i = 0; i < 256; ++i)
                a.push((i + 256).toString(16).substr(1));
            var o = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return r(e, null, [{
                    key: "bytes_to_uuid",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return (a[e[t + 0]] + a[e[t + 1]] + a[e[t + 2]] + a[e[t + 3]] + "-" + a[e[t + 4]] + a[e[t + 5]] + "-" + a[e[t + 6]] + a[e[t + 7]] + "-" + a[e[t + 8]] + a[e[t + 9]] + "-" + a[e[t + 10]] + a[e[t + 11]] + a[e[t + 12]] + a[e[t + 13]] + a[e[t + 14]] + a[e[t + 15]]).toLowerCase()
                    }
                }, {
                    key: "math_random_generate",
                    value: function() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" == e ? t : 3 & t | 8).toString(16)
                        })
                    }
                }, {
                    key: "webcrypto_generate",
                    value: function() {
                        var t = crypto.getRandomValues(new Uint8Array(16));
                        return t[6] = 15 & t[6] | 64,
                            t[8] = 63 & t[8] | 128,
                            e.bytes_to_uuid(t)
                    }
                }, {
                    key: "generate",
                    value: function() {
                        var t = window.crypto || window.msCrypto;
                        return t && t.getRandomValues ? e.webcrypto_generate() : e.math_random_generate()
                    }
                }]),
                    e
            }();
            t.default = o
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(0));
            var i = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.attributes = {}
                }
                return r(e, null, [{
                    key: "USER",
                    get: function() {
                        return "USER"
                    }
                }, {
                    key: "ASSET",
                    get: function() {
                        return "ASSET"
                    }
                }, {
                    key: "PROPERTY_ID",
                    get: function() {
                        return "PropertyId"
                    }
                }, {
                    key: "TYPE",
                    get: function() {
                        return "Type"
                    }
                }, {
                    key: "CONTEXT_ID",
                    get: function() {
                        return "ContextId"
                    }
                }, {
                    key: "ACTION",
                    get: function() {
                        return "Action"
                    }
                }, {
                    key: "UID",
                    get: function() {
                        return "ClientUID"
                    }
                }, {
                    key: "TIMESTAMP",
                    get: function() {
                        return "ClientTimestamp"
                    }
                }, {
                    key: "FULL_PATH",
                    get: function() {
                        return "Url"
                    }
                }, {
                    key: "REFERRER",
                    get: function() {
                        return "Referrer"
                    }
                }, {
                    key: "SCHEMA_VERSION",
                    get: function() {
                        return "SchemaVersion"
                    }
                }, {
                    key: "USER_AGENT",
                    get: function() {
                        return "UserAgent"
                    }
                }, {
                    key: "REQUIRED_ATTRIBUTES",
                    get: function() {
                        return [e.PROPERTY_ID, e.TYPE, e.CONTEXT_ID, e.ACTION, e.FULL_PATH, e.REFERRER, e.SCHEMA_VERSION, e.USER_AGENT]
                    }
                }]),
                    r(e, [{
                        key: "setAttribute",
                        value: function(t, n) {
                            if (e.isValidAttributeName(t))
                                if (e.isValidAttributeValue(n))
                                    this.attributes[t] = n;
                                else {
                                    var r = new Error(t + " attribute value must be a string or list of strings: " + n);
                                    a.default.reportError(r)
                                }
                            else {
                                var i = new Error("Trying to set an attribute with a non-string name: " + t);
                                a.default.reportError(i)
                            }
                        }
                    }, {
                        key: "getAttribute",
                        value: function(e) {
                            if (e in this.attributes)
                                return this.attributes[e]
                        }
                    }, {
                        key: "getAttributes",
                        value: function() {
                            return this.attributes
                        }
                    }], [{
                        key: "isValidAttributeName",
                        value: function(e) {
                            return "string" == typeof e && e.length > 0
                        }
                    }, {
                        key: "isValidAttributeValue",
                        value: function(e) {
                            var t = Array.isArray(e) && e.every(function(e) {
                                return "string" == typeof e
                            });
                            return "string" == typeof e || t
                        }
                    }]),
                    e
            }();
            t.default = i
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , a = o(n(1))
                , i = o(n(0));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = function() {
                function e(t, n) {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.setQuery(t),
                        this.setAlias(n)
                }
                return r(e, null, [{
                    key: "QUERY_SESSION_ID_URL_PARAMETER",
                    get: function() {
                        return "KTInsightsQuerySessionId"
                    }
                }, {
                    key: "DEFAULT_QUERY_SESSION_ALIAS",
                    get: function() {
                        return "xxx"
                    }
                }, {
                    key: "DEFAULT_QUERY_SESSION_QUERY",
                    get: function() {
                        return "cd2eb0837c9b4c962c22d2ff8b5441b7b45805887f051d39bf133b583baf6860"
                    }
                }, {
                    key: "QUERY_SESSION_UUID_LENGTH",
                    get: function() {
                        return 36
                    }
                }]),
                    r(e, [{
                        key: "setQuery",
                        value: function(t) {
                            "string" == typeof t ? this.query = t : (this.query = e.DEFAULT_QUERY_SESSION_QUERY,
                                i.default.reportError(new Error("Invalid parameter query=" + t + ", fallback to default.")))
                        }
                    }, {
                        key: "setAlias",
                        value: function(t) {
                            t && "string" == typeof t ? this.alias = t : (this.alias = e.DEFAULT_QUERY_SESSION_ALIAS,
                                i.default.reportError(new Error("Invalid parameter alias=" + t + ", fallback to default.")))
                        }
                    }, {
                        key: "generateSessionInfo",
                        value: function() {
                            return e.generateNewSessionId(this.query, this.alias).then(function(t) {
                                var n = e.getSessionIdFromUrl()
                                    , r = void 0;
                                return e.doesQueryAliasMatch(n, t) ? r = {
                                    isInNewSession: !1,
                                    sessionId: n,
                                    sanitizedSessionId: e.getSanitizedSessionId(n)
                                } : (e.embedQuerySessionIdInUrl(t),
                                    r = {
                                        isInNewSession: !0,
                                        sessionId: t,
                                        sanitizedSessionId: e.getSanitizedSessionId(t)
                                    }),
                                    r
                            })
                        }
                    }], [{
                        key: "getSessionIdFromUrl",
                        value: function() {
                            return new URLSearchParams(window.location.search).get(e.QUERY_SESSION_ID_URL_PARAMETER)
                        }
                    }, {
                        key: "doesQueryAliasMatch",
                        value: function(t, n) {
                            return e.validQuerySessionId(t) ? n.substring(e.QUERY_SESSION_UUID_LENGTH) === t.substring(e.QUERY_SESSION_UUID_LENGTH) : (t && i.default.reportError(new Error("Invalid parameter urlQuerySessionId=" + t + ".")),
                                !1)
                        }
                    }, {
                        key: "validQuerySessionId",
                        value: function(e) {
                            if (!e)
                                return !1;
                            return RegExp("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}-[A-Fa-f0-9]{64}-.{1,64}$").test(e)
                        }
                    }, {
                        key: "generateNewSessionId",
                        value: function(e, t) {
                            var n = (new TextEncoder).encode(e);
                            return crypto.subtle.digest("SHA-256", n).then(function(e) {
                                var n = Array.from(new Uint8Array(e)).map(function(e) {
                                    return e.toString(16).padStart(2, "0")
                                }).join("");
                                return a.default.generate() + "-" + n + "-" + encodeURIComponent(t)
                            })
                        }
                    }, {
                        key: "embedQuerySessionIdInUrl",
                        value: function(t) {
                            var n = new URL(window.location.href);
                            n.searchParams.has(e.QUERY_SESSION_ID_URL_PARAMETER) && n.searchParams.delete(e.QUERY_SESSION_ID_URL_PARAMETER),
                                n.searchParams.append(e.QUERY_SESSION_ID_URL_PARAMETER, t),
                                window.history.replaceState(null, null, n)
                        }
                    }, {
                        key: "getSanitizedSessionId",
                        value: function(t) {
                            return t.substring(0, e.QUERY_SESSION_UUID_LENGTH)
                        }
                    }, {
                        key: "addIdToLinks",
                        value: function(t, n) {
                            t.forEach(function(t) {
                                var r = t.getAttribute("href")
                                    , a = new URL(r,document.baseURI);
                                a.searchParams.append(e.QUERY_SESSION_ID_URL_PARAMETER, n),
                                    t.setAttribute("href", a.toString())
                            })
                        }
                    }]),
                    e
            }();
            t.default = u
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                , a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }();
            var i = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    e.isBrowserCompatible() && (t.querySessionManager || t.initializeQuerySessionManager(n.query),
                        this.querySessionManager = t.querySessionManager,
                        e.validateParameters(n),
                        e.sanitizeParameters(n),
                        this.client = t)
                }
                return a(e, null, [{
                    key: "validateParameters",
                    value: function(e) {
                        if (!("query"in e && "page"in e))
                            throw new Error("Missing required parameter for SearchPageTracker");
                        if ("string" != typeof e.query)
                            throw new Error("Query parameter for SearchPageTracker must be a string");
                        if (Number.isNaN(e.page) || !Number.isFinite(e.page))
                            throw new Error("Page parameter for SearchPageTracker must be a number")
                    }
                }, {
                    key: "sanitizeParameters",
                    value: function(e) {
                        "customAttributes"in e && "object" === r(e.customAttributes) && null !== e.customAttributes || (e.customAttributes = {}),
                            e.page = e.page.toString()
                    }
                }, {
                    key: "isBrowserCompatible",
                    value: function() {
                        return window.URLSearchParams && window.URL && window.performance && navigator.sendBeacon && Object.assign && Object.fromEntries && window.crypto && window.crypto.subtle
                    }
                }]),
                    e
            }();
            t.default = i
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }();
            var a = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return r(e, null, [{
                    key: "capitalizeKeys",
                    value: function(e) {
                        for (var t in e)
                            if (Object.hasOwnProperty.call(e, t)) {
                                var n = e[t];
                                delete e[t],
                                    e[t.charAt(0).toUpperCase() + t.substring(1)] = n
                            }
                    }
                }]),
                    e
            }();
            t.default = a
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(0));
            var i = function() {
                function e(t, n) {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this.endpoint = t,
                        this.authToken = n
                }
                return r(e, null, [{
                    key: "XHR",
                    get: function() {
                        return "xhr"
                    }
                }, {
                    key: "BEACON",
                    get: function() {
                        return "beacon"
                    }
                }]),
                    r(e, [{
                        key: "xhrRequest",
                        value: function(e) {
                            try {
                                var t = new XMLHttpRequest;
                                t.open("POST", this.endpoint),
                                    t.setRequestHeader("Content-type", "application/json"),
                                    t.setRequestHeader("Authorization", "Bearer " + this.authToken),
                                    t.send(JSON.stringify(e))
                            } catch (e) {
                                a.default.reportError(e)
                            }
                        }
                    }, {
                        key: "beaconRequest",
                        value: function(e) {
                            try {
                                var t = new Blob([JSON.stringify(e)],{
                                    type: "text/plain"
                                });
                                navigator.sendBeacon(this.endpoint, t)
                            } catch (e) {
                                a.default.reportError(e)
                            }
                        }
                    }]),
                    e
            }();
            t.default = i
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                , a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , i = s(n(0))
                , o = s(n(6))
                , u = s(n(5));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                        , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.CLICKED_LINK;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    try {
                        this.client = t,
                            e.validateParameters(n),
                            e.sanitizeParameters(n),
                            this.addClickEventListeners(n, r)
                    } catch (e) {
                        i.default.reportError(e)
                    }
                }
                return a(e, [{
                    key: "addClickEventListeners",
                    value: function(e, t) {
                        var n = this;
                        try {
                            e.linksData.forEach(function(r) {
                                var a = r.LinkElement;
                                ["click", "contextmenu", "mousedown"].forEach(function(u) {
                                    a.addEventListener(u, function(a) {
                                        try {
                                            if ("contextmenu" === a.type || "click" === a.type && (0 === a.button || 2 === a.button) || "mousedown" === a.type && 1 === a.button) {
                                                var u = Object.assign({}, e.customAttributes);
                                                Object.assign(u, r),
                                                    delete u.LinkElement,
                                                    n.client.track(t, u, o.default.BEACON)
                                            }
                                        } catch (e) {
                                            i.default.reportError(e)
                                        }
                                    })
                                })
                            })
                        } catch (e) {
                            i.default.reportError(e)
                        }
                    }
                }], [{
                    key: "validateParameters",
                    value: function(e) {
                        "linksData"in e && e.linksData.forEach(function(e) {
                            if (!("linkElement"in e))
                                throw new Error("A link in linksData is missing the required link element attribute");
                            if ("A" !== e.linkElement.tagName)
                                throw new Error("A link element must be an anchor tag")
                        })
                    }
                }, {
                    key: "sanitizeParameters",
                    value: function(t) {
                        "customAttributes"in t && "object" === r(t.customAttributes) && null !== t.customAttributes || (t.customAttributes = {}),
                        "linksData"in t || (console.warn("No links passed to KT Insights when trying to track link clicks!"),
                            t.linksData = []),
                            t.linksData.forEach(function(t) {
                                u.default.capitalizeKeys(t),
                                    e.addTitleAndUrl(t)
                            })
                    }
                }, {
                    key: "isAbsoluteUrl",
                    value: function(e) {
                        return new RegExp("^(?:[a-z]+:)?//","i").test(e)
                    }
                }, {
                    key: "addTitleAndUrl",
                    value: function(t) {
                        if (!("LinkUrl"in t) || "string" != typeof t.LinkUrl) {
                            var n = t.LinkElement.getAttribute("href");
                            t.LinkUrl = n
                        }
                        if (!e.isAbsoluteUrl(t.LinkUrl)) {
                            var r = new URL(t.LinkUrl,document.baseURI).toString();
                            t.LinkUrl = r
                        }
                        "LinkTitle"in t && "string" == typeof t.LinkTitle || (t.LinkTitle = t.LinkElement.innerText || t.LinkElement.textContent)
                    }
                }]),
                    e
            }();
            t.default = c
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , a = l(n(0))
                , i = l(n(4))
                , o = l(n(2))
                , u = l(n(1))
                , s = l(n(5))
                , c = l(n(7));
            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function f(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var d = function(e) {
                function t(e, n) {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    try {
                        var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                        if (!i.default.isBrowserCompatible())
                            return f(r);
                        r.client = e,
                            t.validateParameters(n),
                            t.sanitizeParameters(n);
                        var o = r;
                        r.client.querySessionManager.generateSessionInfo().then(function(e) {
                            n.searchResultsData.length > 0 && (o.trackLoadedSearchResults(n, e.sanitizedSessionId),
                                o.trackSearchResultClicks(n, e.sanitizedSessionId))
                        })
                    } catch (e) {
                        a.default.reportError(e)
                    }
                    return r
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default),
                    r(t, [{
                        key: "trackLoadedSearchResults",
                        value: function(e, t) {
                            var n = Object.assign({}, e.customAttributes)
                                , r = e.searchResultsData.map(function(e) {
                                var t = Object.assign({}, e);
                                return delete t.LinkElement,
                                    t[o.default.UID] = u.default.generate(),
                                    t
                            });
                            n.SearchResults = JSON.stringify(r),
                                n.Page = e.page,
                                n.Query = e.query,
                                n.QuerySessionId = t,
                                this.client.track(this.client.LOADED_SEARCH_RESULTS, n)
                        }
                    }, {
                        key: "trackSearchResultClicks",
                        value: function(e, t) {
                            var n = e.searchResultsData.map(function(n) {
                                var r = {};
                                return r.linkElement = n.LinkElement,
                                    r.LinkUrl = n.LinkUrl,
                                    r.LinkTitle = n.LinkTitle,
                                    r.Rank = n.Rank,
                                    r.Page = e.page,
                                    r.QuerySessionId = t,
                                    r.Query = e.query,
                                    r
                            });
                            this.clickedLinkTracker = new c.default(this.client,{
                                linksData: n,
                                customAttributes: Object.assign({}, e.customAttributes)
                            },this.client.CLICKED_SEARCH_RESULT)
                        }
                    }], [{
                        key: "validateParameters",
                        value: function(e) {
                            "searchResultsData"in e && e.searchResultsData.forEach(function(e) {
                                if (!("linkElement"in e && "rank"in e))
                                    throw new Error("A search result is missing a required attribute.");
                                if ("A" !== e.linkElement.tagName)
                                    throw new Error("Search result link must be an anchor tag.");
                                if (Number.isNaN(e.rank) || !Number.isFinite(e.rank))
                                    throw new Error("Search result rank must be a number")
                            })
                        }
                    }, {
                        key: "sanitizeParameters",
                        value: function(e) {
                            "searchResultsData"in e || (console.warn("No search results passed to KT Insights when trying to track search results!"),
                                e.searchResultsData = []),
                                e.searchResultsData.forEach(function(e) {
                                    s.default.capitalizeKeys(e),
                                        c.default.addTitleAndUrl(e),
                                        e.Rank = e.Rank.toString()
                                })
                        }
                    }]),
                    t
            }();
            t.default = d
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , a = u(n(0))
                , i = u(n(4))
                , o = u(n(3));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function s(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var c = function(e) {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    try {
                        var r = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                        if (!i.default.isBrowserCompatible())
                            return s(r);
                        r.client = e,
                            t.validateParameters(n),
                            t.sanitizeParameters(n);
                        var u = r;
                        r.client.querySessionManager.generateSessionInfo().then(function(e) {
                            e.isInNewSession && u.trackSearchedFor(n.page, n.query, n.customAttributes, e.sanitizedSessionId),
                                o.default.addIdToLinks(n.searchResultsPageLinks, e.sessionId)
                        })
                    } catch (e) {
                        a.default.reportError(e)
                    }
                    return r
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.default),
                    r(t, [{
                        key: "trackSearchedFor",
                        value: function(e, t, n, r) {
                            var a = Object.assign({}, n);
                            a.Query = t,
                                a.QuerySessionId = r,
                                a.Page = e,
                                this.client.track(this.client.SEARCHED_FOR, a)
                        }
                    }], [{
                        key: "validateParameters",
                        value: function(e) {
                            "searchResultsPageLinks"in e && e.searchResultsPageLinks.forEach(function(e) {
                                if ("A" !== e.tagName)
                                    throw new Error("Search result page link must be an anchor tag")
                            })
                        }
                    }, {
                        key: "sanitizeParameters",
                        value: function(e) {
                            "searchResultsPageLinks"in e || (e.searchResultsPageLinks = []),
                                e.searchResultsPageLinks = Array.prototype.slice.call(e.searchResultsPageLinks)
                        }
                    }]),
                    t
            }();
            t.default = c
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }();
            var a = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return r(e, null, [{
                    key: "runAfterInteractive",
                    value: function(e) {
                        "loading" !== document.readyState ? e() : window.addEventListener("DOMContentLoaded", e)
                    }
                }]),
                    e
            }();
            t.default = a
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                , a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , i = u(n(0))
                , o = u(n(10));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function s(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            var c = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    try {
                        this.client = t,
                            this.params = n,
                            e.sanitizeParameters(n),
                            o.default.runAfterInteractive(this.trackPageVisit.bind(this))
                    } catch (e) {
                        i.default.reportError(e)
                    }
                }
                return a(e, [{
                    key: "trackPageVisit",
                    value: function() {
                        try {
                            var e = {};
                            if (window.performance.timing) {
                                var t = window.performance.timing
                                    , n = t.domInteractive - t.navigationStart;
                                e.LoadTime = "" + n;
                                var r = t.requestStart - t.navigationStart;
                                e.BeforeRequestTime = "" + r;
                                var a = t.responseStart - t.requestStart;
                                e.RequestTime = "" + a
                            }
                            var o = document.querySelectorAll(".intranet-analytics-tags");
                            if (o.length > 0) {
                                var u, c = [].concat(s(o)).map(function(e) {
                                    return e.innerText.split(",").map(function(e) {
                                        return e.trim()
                                    }).filter(function(e) {
                                        return "" !== e
                                    })
                                }), l = (u = []).concat.apply(u, s(c));
                                e.Tags = l
                            }
                            var f = Object.assign({}, this.params.customAttributes, e);
                            this.client.track(this.client.PAGE_VISIT, f)
                        } catch (e) {
                            i.default.reportError(e)
                        }
                    }
                }], [{
                    key: "sanitizeParameters",
                    value: function(e) {
                        "customAttributes"in e && "object" === r(e.customAttributes) && null !== e.customAttributes || (e.customAttributes = {})
                    }
                }]),
                    e
            }();
            t.default = c
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , a = s(n(11))
                , i = s(n(7))
                , o = s(n(9))
                , u = s(n(8));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return r(e, null, [{
                    key: "setActionConstants",
                    value: function(t) {
                        e.RESERVED_ACTIONS.forEach(function(e) {
                            Object.defineProperty(t, e, {
                                value: e,
                                writable: !1,
                                enumerable: !0
                            })
                        })
                    }
                }, {
                    key: "RESERVED_ACTIONS",
                    get: function() {
                        return ["ANSWERED_QUESTION", "ASSET_CONSUMED", "FLAGGED", "CLICKED_LINK", "CLICKED_SEARCH_RESULT", "DOWN_VOTED", "PAGE_VISIT", "POSTED_COMMENT", "POSTED_QUESTION", "SEARCHED_FOR", "TAB_ENTRY", "TAB_EXIT", "UP_VOTED", "COMPLETED_VIDEO", "PAUSED_VIDEO", "PLAYED_VIDEO", "SET_VIDEO_POSITION", "VISITED_CHANNEL", "VOTED_ON_ANSWER", "SUBSCRIBED_TO", "SUBSCRIBED_TOPIC", "LIKED", "UNLIKED", "UNSUBSCRIBED", "UNSUBSCRIBED_TOPIC", "TAGGED", "UNTAGGED", "CREATED", "EDITED", "DELETED", "RATED", "DOWNLOADED", "UPLOADED", "ALL", "SEARCH_PAGE", "SEARCH_RESULTS", "LOADED_SEARCH_RESULTS"]
                    }
                }, {
                    key: "AUTO_TRACKERS",
                    get: function() {
                        return {
                            PAGE_VISIT: a.default,
                            SEARCH_PAGE: o.default,
                            CLICKED_LINK: i.default,
                            SEARCH_RESULTS: u.default
                        }
                    }
                }, {
                    key: "NO_PARAMS_TRACKERS",
                    get: function() {
                        return ["PAGE_VISIT"]
                    }
                }]),
                    e
            }();
            t.default = c
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                        "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                        t
                }
            }()
                , a = l(n(12))
                , i = l(n(2))
                , o = l(n(0))
                , u = l(n(1))
                , s = l(n(6))
                , c = l(n(3));
            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return r(e, [{
                    key: "initialize",
                    value: function(e, t, n, r) {
                        var i = this
                            , u = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                            , c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                        try {
                            if (!(e && t && n && r))
                                throw this.track = o.default.nullFunction,
                                    new Error("Missing required parameter for Client constructor.");
                            var l = this.getEndpoint(r);
                            o.default.baseUrl = l,
                                o.default.authToken = n,
                                a.default.setActionConstants(this),
                                this.endpoint = l + "/events",
                                this.propertyId = e,
                                this.userAlias = t,
                                this.authToken = n,
                                this.defaultAttributes = c,
                                this.requests = new s.default(this.endpoint,this.authToken),
                                this.eventTrackers = {},
                            u && a.default.NO_PARAMS_TRACKERS.forEach(function(e) {
                                i.autoTrack(e, {})
                            })
                        } catch (e) {
                            this.track = o.default.nullFunction,
                                o.default.reportError(e)
                        }
                    }
                }, {
                    key: "track",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.XHR;
                        try {
                            var a = this.createEvent(t, n);
                            a.setAttribute("Authorization", "Bearer " + this.authToken);
                            var i = {
                                PartitionKey: this.userAlias,
                                Data: a.getAttributes()
                            };
                            r === e.XHR ? this.requests.xhrRequest(i, this.authToken) : r === e.BEACON && navigator.sendBeacon && this.requests.beaconRequest(i)
                        } catch (e) {
                            o.default.reportError(e)
                        }
                    }
                }, {
                    key: "initializeQuerySessionManager",
                    value: function(e) {
                        try {
                            this.querySessionManager = new c.default(e,this.userAlias)
                        } catch (e) {
                            o.default.reportError(e)
                        }
                    }
                }, {
                    key: "autoTrack",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        try {
                            this.eventTrackers[e] = new a.default.AUTO_TRACKERS[e](this,t)
                        } catch (e) {
                            o.default.reportError(e)
                        }
                    }
                }, {
                    key: "createEvent",
                    value: function(e) {
                        var t = this
                            , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.default.USER;
                        if (!e)
                            throw new Error("Tried creating an event without an action.");
                        var a = new i.default;
                        return Object.getOwnPropertyNames(this.defaultAttributes).forEach(function(e) {
                            var n = t.defaultAttributes[e];
                            a.setAttribute(e, n)
                        }),
                            Object.getOwnPropertyNames(n).forEach(function(e) {
                                var t = n[e];
                                a.setAttribute(e, t)
                            }),
                            a.setAttribute(i.default.ACTION, e),
                            a.setAttribute(i.default.PROPERTY_ID, this.propertyId),
                            a.setAttribute(i.default.TYPE, r),
                        r === i.default.USER && a.setAttribute(i.default.CONTEXT_ID, this.userAlias),
                            a.setAttribute(i.default.UID, u.default.generate()),
                            a.setAttribute(i.default.TIMESTAMP, "" + (new Date).getTime()),
                            a.setAttribute(i.default.FULL_PATH, window.location.href),
                            a.setAttribute(i.default.REFERRER, document.referrer),
                            a.setAttribute(i.default.SCHEMA_VERSION, "1"),
                            a.setAttribute(i.default.USER_AGENT, navigator.userAgent),
                            a
                    }
                }, {
                    key: "getEndpoint",
                    value: function(e) {
                        try {
                            var t = e.toLowerCase().trim()
                                , n = {
                                insightsdev: "https://pmmwa12p7j.execute-api.us-west-2.amazonaws.com/development",
                                beta: "https://ingestion.collection.beta.insights.knowledge-tech.a2z.com",
                                prod: "https://ingestion.collection.insights.knowledge-tech.a2z.com"
                            };
                            return t in n ? n[t] : "https://ingestion.collection.beta.insights.knowledge-tech.a2z.com"
                        } catch (e) {
                            return "https://ingestion.collection.beta.insights.knowledge-tech.a2z.com"
                        }
                    }
                }], [{
                    key: "XHR",
                    get: function() {
                        return "xhr"
                    }
                }, {
                    key: "BEACON",
                    get: function() {
                        return "beacon"
                    }
                }]),
                    e
            }();
            t.default = f
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = new (function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(13)).default)
                , a = new Event("KTInsightsLoaded");
            document.dispatchEvent(a),
                t.default = r
        }
    ]).default
});
//# sourceMappingURL=analytics.js.map
