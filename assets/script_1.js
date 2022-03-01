// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{ "function": "__e" }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "IS_OUTBOUND", "vtp_affiliatedDomains": ["list"] }, { "function": "__v", "vtp_name": "gtm.triggers", "vtp_dataLayerVersion": 2, "vtp_setDefaultValue": true, "vtp_defaultValue": "" }, { "function": "__v", "vtp_name": "gtm.elementId", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.elementClasses", "vtp_dataLayerVersion": 1 }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "URL_NO_FRAGMENT" }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "HOST", "vtp_stripWww": true }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "EXTENSION" }, { "function": "__aev", "vtp_varType": "TEXT" }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "PATH" }, { "function": "__v", "vtp_name": "gtm.videoStatus", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoUrl", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoTitle", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoProvider", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoCurrentTime", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoDuration", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoPercent", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoVisible", "vtp_dataLayerVersion": 1 }, { "function": "__u", "vtp_component": "QUERY", "vtp_queryKey": "q,s,search,query,keyword", "vtp_multiQueryKeys": true, "vtp_ignoreEmptyQueryParam": true, "vtp_enableMultiQueryKeys": false, "vtp_enableIgnoreEmptyQueryParam": false }, { "function": "__v", "vtp_name": "gtm.scrollThreshold", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.historyChangeSource", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.oldUrl", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.newUrl", "vtp_dataLayerVersion": 1 }, { "function": "__c", "vtp_value": "google.cn" }, { "function": "__c", "vtp_value": 1 }, { "vtp_signal": 0, "function": "__c", "vtp_value": 0 }],
            "tags": [{ "function": "__ogt_cross_domain", "priority": 10, "original_activity_id": 2, "tag_id": 36 }, { "function": "__gct", "vtp_trackingId": "G-VY3Y6182VG", "vtp_sessionDuration": 0, "tag_id": 1 }, { "function": "__get", "vtp_eventName": "click", "vtp_settings": ["map", "streamId", "G-VY3Y6182VG", "eventParameters", ["map", "link_id", ["macro", 3], "link_classes", ["macro", 4], "link_url", ["macro", 5], "link_domain", ["macro", 6], "outbound", true]], "vtp_deferrable": false, "tag_id": 11 }, { "function": "__get", "vtp_eventName": "file_download", "vtp_settings": ["map", "streamId", "G-VY3Y6182VG", "eventParameters", ["map", "link_id", ["macro", 3], "link_text", ["macro", 8], "link_url", ["macro", 5], "file_name", ["macro", 9], "file_extension", ["macro", 7]]], "vtp_deferrable": false, "tag_id": 18 }, { "function": "__get", "vtp_eventName": ["template", "video_", ["macro", 10]], "vtp_settings": ["map", "streamId", "G-VY3Y6182VG", "eventParameters", ["map", "video_url", ["macro", 11], "video_title", ["macro", 12], "video_provider", ["macro", 13], "video_current_time", ["macro", 14], "video_duration", ["macro", 15], "video_percent", ["macro", 16], "visible", ["macro", 17]]], "vtp_deferrable": false, "tag_id": 21 }, { "function": "__get", "vtp_eventName": "view_search_results", "vtp_settings": ["map", "streamId", "G-VY3Y6182VG", "eventParameters", ["map", "search_term", ["macro", 18]]], "vtp_deferrable": true, "tag_id": 26 }, { "function": "__get", "vtp_eventName": "scroll", "vtp_settings": ["map", "streamId", "G-VY3Y6182VG", "eventParameters", ["map", "percent_scrolled", ["macro", 19]]], "vtp_deferrable": false, "tag_id": 29 }, { "function": "__get", "vtp_eventName": "page_view", "vtp_settings": ["map", "streamId", "G-VY3Y6182VG", "eventParameters", ["map", "page_referrer", ["macro", 21]]], "vtp_deferrable": false, "tag_id": 32 }, { "function": "__dlm", "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-VY3Y6182VG", "value", ["macro", 21]]], "tag_id": 33 }, { "function": "__set_product_settings", "original_activity_id": 3, "vtp_foreignTldMacroResult": ["macro", 23], "vtp_isChinaVipRegionMacroResult": ["macro", 24], "tag_id": 37 }, { "function": "__ogt_event_settings", "original_activity_id": 4, "vtp_eventSettings": ["list", ["map", "name", "purchase", "conversion", true],
                    ["map", "name", "signup-success", "conversion", true],
                    ["map", "name", "homepage_view", "conversion", true],
                    ["map", "name", "community", "conversion", true],
                    ["map", "name", "initiate-signup-homepage-CTA", "conversion", true]
                ], "tag_id": 38 }, { "function": "__ogt_google_signals", "original_activity_id": 5, "vtp_googleSignals": "DISABLED", "vtp_serverMacroResult": ["macro", 25], "tag_id": 39 }, { "function": "__lcl", "vtp_waitForTags": false, "vtp_checkValidation": true, "vtp_uniqueTriggerId": "1_9", "tag_id": 40 }, { "function": "__lcl", "vtp_waitForTags": false, "vtp_checkValidation": true, "vtp_uniqueTriggerId": "1_16", "tag_id": 41 }, { "function": "__ytl", "vtp_captureStart": true, "vtp_captureComplete": true, "vtp_captureProgress": true, "vtp_progressThresholdsPercent": "10,25,50,75", "vtp_triggerStartOption": "DOM_READY", "vtp_uniqueTriggerId": "1_19", "vtp_enableTriggerStartOption": true, "tag_id": 42 }, { "function": "__sdl", "vtp_verticalThresholdUnits": "PERCENT", "vtp_verticalThresholdsPercent": "90", "vtp_verticalThresholdOn": true, "vtp_horizontalThresholdOn": false, "vtp_triggerStartOption": "WINDOW_LOAD", "vtp_uniqueTriggerId": "1_27", "vtp_enableTriggerStartOption": true, "tag_id": 43 }, { "function": "__ehl", "vtp_groupEvents": true, "vtp_groupEventsInterval": 1000, "vtp_uniqueTriggerId": "1_30", "tag_id": 44 }],
            "predicates": [{ "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js" }, { "function": "_eq", "arg0": ["macro", 1], "arg1": true }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.linkClick" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_9($|,)))" }, { "function": "_re", "arg0": ["macro", 7], "arg1": "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma", "ignore_case": true }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_16($|,)))" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.video" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_19($|,)))" }, { "function": "_eq", "arg0": ["macro", 18], "arg1": "undefined" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.scrollDepth" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_27($|,)))" }, { "function": "_eq", "arg0": ["macro", 20], "arg1": ["list", "pushState", "popstate", "replaceState"], "any_of": true }, { "function": "_eq", "arg0": ["macro", 21], "arg1": ["macro", 22] }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.historyChange-v2" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_30($|,)))" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.init" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.dom" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.load" }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 1, 12, 13, 16]
                ],
                [
                    ["if", 1, 2, 3],
                    ["add", 2]
                ],
                [
                    ["if", 2, 4, 5],
                    ["add", 3]
                ],
                [
                    ["if", 6, 7],
                    ["add", 4]
                ],
                [
                    ["if", 0],
                    ["unless", 8],
                    ["add", 5]
                ],
                [
                    ["if", 9, 10],
                    ["add", 6]
                ],
                [
                    ["if", 11, 13, 14],
                    ["unless", 12],
                    ["add", 7, 8]
                ],
                [
                    ["if", 15],
                    ["add", 0, 9, 10, 11]
                ],
                [
                    ["if", 16],
                    ["add", 14]
                ],
                [
                    ["if", 17],
                    ["add", 15]
                ]
            ]
        },
        "runtime": [
            [50, "__ogt_event_settings", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [8]],
                [53, [41, "f"],
                    [3, "f", 0],
                    [63, [7, "f"],
                        [23, [15, "f"],
                            [17, [17, [15, "a"], "eventSettings"], "length"]
                        ],
                        [33, [15, "f"],
                            [3, "f", [0, [15, "f"], 1]]
                        ],
                        [46, [53, [52, "g", [16, [16, [17, [15, "a"], "eventSettings"],
                                [15, "f"]
                            ], "name"]],
                            [43, [15, "d"],
                                [15, "g"],
                                [8, "blacklisted", [16, [16, [17, [15, "a"], "eventSettings"],
                                    [15, "f"]
                                ], "blacklisted"], "conversion", [16, [16, [17, [15, "a"], "eventSettings"],
                                    [15, "f"]
                                ], "conversion"]]
                            ]
                        ]]
                    ]
                ],
                [52, "e", [17, ["c"], "containerId"]],
                ["b", [15, "e"], "event_settings", [15, "d"]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__set_product_settings", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [17, ["c"], "containerId"]],
                ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]],
                ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ogt_google_signals", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "e", [17, ["c"], "containerId"]],
                ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]],
                [22, [17, [15, "d"], "enableGa4OnoRemarketing"],
                    [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ogt_cross_domain", [46, "a"],
                [52, "b", ["require", "getContainerVersion"]],
                [52, "c", ["require", "internal.setRemoteConfigParameter"]],
                [22, [17, [15, "a"], "rules"],
                    [46, [53, [52, "d", [17, ["b"], "containerId"]],
                        ["c", [15, "d"], "cross_domain_conditions", [17, [15, "a"], "rules"]]
                    ]]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ]
        ],
        "permissions": { "__ogt_event_settings": { "read_container_data": {} }, "__set_product_settings": { "read_container_data": {} }, "__ogt_google_signals": { "read_container_data": {} }, "__ogt_cross_domain": { "read_container_data": {} } }

        ,
        "security_groups": {
            "google": ["__ogt_event_settings", "__set_product_settings", "__ogt_google_signals", "__ogt_cross_domain"]
        }

    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l, aa = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } },
        ca = function(a) { return a.raw = a },
        ea = function(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: aa(a) } },
        fa = "function" == typeof Object.create ? Object.create : function(a) { var b = function() {};
            b.prototype = a; return new b },
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else { var ia;
        a: { var ja = { a: !0 },
                ka = {}; try { ka.__proto__ = ja;
                ia = ka.a; break a } catch (a) {}
            ia = !1 }
        ha = ia ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
    var la = ha,
        ma = function(a, b) { a.prototype = fa(b.prototype);
            a.prototype.constructor = a; if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d) } else a[c] = b[c];
            a.Tk = b.prototype },
        na = this || self,
        oa = function(a) { return a };
    var pa = function(a, b) { this.g = a;
        this.o = b };
    var qa = function(a) { return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10) },
        ra = function() { this.C = {};
            this.s = !1;
            this.I = {} },
        ta = function(a, b) { var c = [],
                d; for (d in a.C)
                if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d); break;
                    case 2:
                        c.push(a.get(d)); break;
                    case 3:
                        c.push([d, a.get(d)]) }
                return c };
    ra.prototype.get = function(a) { return this.C["dust." + a] };
    ra.prototype.set = function(a, b) { this.s || (a = "dust." + a, this.I.hasOwnProperty(a) || (this.C[a] = b)) };
    ra.prototype.has = function(a) { return this.C.hasOwnProperty("dust." + a) };
    var ua = function(a, b) { b = "dust." + b;
        a.s || a.I.hasOwnProperty(b) || delete a.C[b] };
    ra.prototype.Lb = function() { this.s = !0 };
    var va = function(a) { this.o = new ra;
        this.g = [];
        this.s = !1;
        a = a || []; for (var b in a) a.hasOwnProperty(b) && (qa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b])) };
    l = va.prototype;
    l.toString = function(a) { if (a && 0 <= a.indexOf(this)) return ""; for (var b = [], c = 0; c < this.g.length; c++) { var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof va ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString()) } return b.join(",") };
    l.set = function(a, b) { if (!this.s)
            if ("length" === a) { if (!qa(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b) } else qa(a) ? this.g[Number(a)] = b : this.o.set(a, b) };
    l.get = function(a) { return "length" === a ? this.length() : qa(a) ? this.g[Number(a)] : this.o.get(a) };
    l.length = function() { return this.g.length };
    l.Kb = function() { for (var a = ta(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + ""); return new va(a) };
    var wa = function(a, b) { qa(b) ? delete a.g[Number(b)] : ua(a.o, b) };
    l = va.prototype;
    l.pop = function() { return this.g.pop() };
    l.push = function(a) { return this.g.push.apply(this.g, Array.prototype.slice.call(arguments)) };
    l.shift = function() { return this.g.shift() };
    l.splice = function(a, b, c) { return new va(this.g.splice.apply(this.g, arguments)) };
    l.unshift = function(a) { return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments)) };
    l.has = function(a) { return qa(a) && this.g.hasOwnProperty(a) || this.o.has(a) };
    l.Lb = function() { this.s = !0;
        Object.freeze(this.g);
        this.o.Lb() };
    var ya = function() {
        function a(f, g) { if (b[f]) { if (b[f].fe + g > b[f].max) throw Error("Quota exceeded");
                b[f].fe += g } } var b = {},
            c = void 0,
            d = void 0,
            e = { Wj: function(f) { c = f }, fh: function() { c && a(c, 1) }, Yj: function(f) { d = f }, Nb: function(f) { d && a(d, f) }, wk: function(f, g) { b[f] = b[f] || { fe: 0 };
                    b[f].max = g }, xj: function(f) { return b[f] && b[f].fe || 0 }, reset: function() { b = {} }, jj: a };
        e.onFnConsume = e.Wj;
        e.consumeFn = e.fh;
        e.onStorageConsume = e.Yj;
        e.consumeStorage = e.Nb;
        e.setMax = e.wk;
        e.getConsumed = e.xj;
        e.reset = e.reset;
        e.consume = e.jj; return e };
    var za = function(a, b) { this.s = a;
        this.P = function(c, d, e) { return c.apply(d, e) };
        this.C = b;
        this.o = new ra;
        this.g = this.I = void 0 };
    za.prototype.add = function(a, b) { Aa(this, a, b, !1) };
    var Aa = function(a, b, c, d) { if (!a.o.s)
            if (a.s.Nb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) { var e = a.o;
                e.set(b, c);
                e.I["dust." + b] = !0 } else a.o.set(b, c) };
    za.prototype.set = function(a, b) { this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Nb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b))) };
    za.prototype.get = function(a) { return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0 };
    za.prototype.has = function(a) { return !!this.o.has(a) || !(!this.C || !this.C.has(a)) };
    var Ca = function(a) { var b = new za(a.s, a);
        a.I && (b.I = a.I);
        b.P = a.P;
        b.g = a.g; return b };
    var Da = function() {},
        Ea = function(a) { return "function" == typeof a },
        Fa = function(a) { return "string" == typeof a },
        Ha = function(a) { return "number" == typeof a && !isNaN(a) },
        Ja = Array.isArray,
        Ka = function(a, b) { if (a && Ja(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c] },
        La = function(a, b) { if (!Ha(a) || !Ha(b) || a > b) a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a) },
        Na = function(a, b) { for (var c = new Ma, d = 0; d < a.length; d++) c.set(a[d], !0); for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1 },
        Pa = function(a,
            b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) },
        Qa = function(a) { return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee")) },
        Ra = function(a) { return Math.round(Number(a)) || 0 },
        Sa = function(a) { return "false" == String(a).toLowerCase() ? !1 : !!a },
        Ua = function(a) { var b = []; if (Ja(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c])); return b },
        Va = function(a) { return a ? a.replace(/^\s+|\s+$/g, "") : "" },
        Wa = function() { return new Date(Date.now()) },
        Xa = function() { return Wa().getTime() },
        Ma = function() { this.prefix = "gtm.";
            this.values = {} };
    Ma.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    Ma.prototype.get = function(a) { return this.values[this.prefix + a] };
    var Ya = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        Za = function(a) { var b = a; return function() { if (b) { var c = b;
                    b = void 0; try { c() } catch (d) {} } } },
        ab = function(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) },
        bb = function(a) { for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1 },
        cb = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c },
        db = function(a, b) {
            var c = m;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        eb = function(a, b) { for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b; return c },
        fb = /^\w{1,9}$/,
        gb = function(a, b) { a = a || {};
            b = b || ","; var c = [];
            Pa(a, function(d, e) { fb.test(d) && e && c.push(d) }); return c.join(b) },
        hb = function(a, b) {
            function c() {++d === b && (e(), e = null, c.done = !0) } var d = 0,
                e = a;
            c.done = !1; return c };
    var ib = function(a, b) { ra.call(this);
        this.P = a;
        this.$a = b };
    ma(ib, ra);
    ib.prototype.toString = function() { return this.P };
    ib.prototype.Kb = function() { return new va(ta(this, 1)) };
    ib.prototype.g = function(a, b) { a.s.fh(); return this.$a.apply(new jb(this, a), Array.prototype.slice.call(arguments, 1)) };
    ib.prototype.o = function(a, b) { try { return this.g.apply(this, Array.prototype.slice.call(arguments, 0)) } catch (c) {} };
    var lb = function(a, b) { for (var c, d = 0; d < b.length && !(c = kb(a, b[d]), c instanceof pa); d++); return c },
        kb = function(a, b) { try { var c = a.get(String(b[0])); if (!(c && c instanceof ib)) throw Error("Attempting to execute non-function " + b[0] + "."); return c.g.apply(c, [a].concat(b.slice(1))) } catch (e) { var d = a.I;
                d && d(e, b.context ? { id: b[0], line: b.context.line } : null); throw e; } },
        jb = function(a, b) { this.o = a;
            this.g = b },
        z = function(a, b) { return Ja(b) ? kb(a.g, b) : b },
        G = function(a) { return a.o.P };
    var mb = function() { ra.call(this) };
    ma(mb, ra);
    mb.prototype.Kb = function() { return new va(ta(this, 1)) };
    var nb = {
        control: function(a, b) { return new pa(a, z(this, b)) },
        fn: function(a, b, c) {
            var d = this.g,
                e = z(this, b);
            if (!(e instanceof va)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.s.Nb(a.length + f.length);
            return new ib(a, function() {
                return function(g) {
                    var h = Ca(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                        if (k[n] = z(this, k[n]), k[n] instanceof pa) return k[n];
                    for (var p = e.get("length"), q =
                            0; q < p; q++) q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new va(k));
                    var r = lb(h, f);
                    if (r instanceof pa) return "return" === r.g ? r.o : r
                }
            }())
        },
        list: function(a) { var b = this.g.s;
            b.Nb(arguments.length); for (var c = new va, d = 0; d < arguments.length; d++) { var e = z(this, arguments[d]); "string" === typeof e && b.Nb(e.length ? e.length - 1 : 0);
                c.push(e) } return c },
        map: function(a) {
            for (var b = this.g.s, c = new mb, d = 0; d < arguments.length - 1; d += 2) {
                var e = z(this, arguments[d]) + "",
                    f = z(this, arguments[d + 1]),
                    g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.Nb(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var ob = function() { this.s = ya();
            this.g = new za(this.s) },
        pb = function(a, b, c) { var d = new ib(b, c);
            d.Lb();
            a.g.set(b, d) },
        qb = function(a, b, c) { nb.hasOwnProperty(b) && pb(a, c || b, nb[b]) };
    ob.prototype.execute = function(a, b) { var c = Array.prototype.slice.call(arguments, 0); return this.o(c) };
    ob.prototype.o = function(a) { for (var b, c = 0; c < arguments.length; c++) b = kb(this.g, arguments[c]); return b };
    ob.prototype.C = function(a, b) { var c = Ca(this.g);
        c.g = a; for (var d, e = 1; e < arguments.length; e++) d = d = kb(c, arguments[e]); return d };
    var rb, sb = function() { if (void 0 === rb) { var a = null,
                b = na.trustedTypes; if (b && b.createPolicy) { try { a = b.createPolicy("goog#html", { createHTML: oa, createScript: oa, createScriptURL: oa }) } catch (c) { na.console && na.console.error(c.message) }
                rb = a } else rb = a } return rb };
    var ub = function(a, b) { this.s = b === tb ? a : "" };
    ub.prototype.o = !0;
    ub.prototype.g = function() { return this.s.toString() };
    ub.prototype.toString = function() { return this.s + "" };
    var vb = function(a) { return a instanceof ub && a.constructor === ub ? a.s : "type_error:TrustedResourceUrl" },
        tb = {},
        wb = function(a) { var b = sb(),
                c = b ? b.createScriptURL(a) : a; return new ub(c, tb) };
    var zb = function(a, b) { this.s = b === yb ? a : "" };
    zb.prototype.o = !0;
    zb.prototype.g = function() { return this.s.toString() };
    zb.prototype.toString = function() { return this.s.toString() };
    var Ab = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        yb = {};

    function Bb() { var a = na.navigator; if (a) { var b = a.userAgent; if (b) return b } return "" }

    function Cb(a) { return -1 != Bb().indexOf(a) };
    var Db = {},
        Eb = function(a, b, c) { this.s = c === Db ? a : "";
            this.o = !0 };
    Eb.prototype.g = function() { return this.s.toString() };
    Eb.prototype.toString = function() { return this.s.toString() };
    var Fb = function(a) { return a instanceof Eb && a.constructor === Eb ? a.s : "type_error:SafeHtml" },
        Gb = function(a) { var b = sb(),
                c = b ? b.createHTML(a) : a; return new Eb(c, null, Db) };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Hb = {};
    var Ib = function() {},
        Jb = function(a) { this.g = a };
    ma(Jb, Ib);
    Jb.prototype.toString = function() { return this.g };

    function Lb(a, b) { var c = [new Jb(Mb[0].toLowerCase(), Hb)]; if (0 === c.length) throw Error("No prefixes are provided"); var d = c.map(function(f) { var g; if (f instanceof Jb) g = f.g;
                else throw Error(""); return g }),
            e = b.toLowerCase(); if (d.every(function(f) { return 0 !== e.indexOf(f) })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true") }

    function Nb(a) { if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript."); if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet."); };
    var m = window,
        H = document,
        Ob = navigator,
        Pb = H.currentScript && H.currentScript.src,
        Qb = function(a, b) { var c = m[a];
            m[a] = void 0 === c ? b : c; return m[a] },
        Rb = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        Sb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        Tb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };

    function Ub(a, b, c) { b && Pa(b, function(d, e) { d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e) }) }
    var Vb = function(a, b, c, d) { var e = H.createElement("script");
            Ub(e, d, Sb);
            e.type = "text/javascript";
            e.async = !0; var f = wb(a);
            e.src = vb(f); var g, h, k = (e.ownerDocument && e.ownerDocument.defaultView || window).document,
                n = null === (h = k.querySelector) || void 0 === h ? void 0 : h.call(k, "script[nonce]");
            (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
            Rb(e, b);
            c && (e.onerror = c); var p = H.getElementsByTagName("script")[0] || H.body || H.head;
            p.parentNode.insertBefore(e, p); return e },
        Wb = function() {
            if (Pb) {
                var a = Pb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Xb = function(a, b, c, d, e) { var f = e,
                g = !1;
            f || (f = H.createElement("iframe"), g = !0);
            Ub(f, c, Tb);
            d && Pa(d, function(k, n) { f.dataset[k] = n });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden"; if (g) { var h = H.body && H.body.lastChild || H.body || H.head;
                h.parentNode.insertBefore(f, h) }
            Rb(f, b);
            void 0 !== a && (f.src = a); return f },
        Yb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() { d.onload = null;
                b && b() };
            d.onerror =
                function() { d.onerror = null;
                    c && c() };
            d.src = a;
            return d
        },
        Zb = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        $b = function(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) },
        I = function(a) { m.setTimeout(a, 0) },
        ac = function(a, b) { return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null },
        bc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b &&
                (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        cc = function(a) { var b = H.createElement("div"),
                c = b,
                d = Gb("A<div>" + a + "</div>");
            void 0 !== c.tagName && Nb(c);
            c.innerHTML = Fb(d);
            b = b.lastChild; for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild)); return e },
        dc = function(a, b, c) { c = c || 100; for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0; for (var f = a, g = 0; f && g <= c; g++) { if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement } return null },
        ec = function(a) {
            var b;
            try { b = Ob.sendBeacon && Ob.sendBeacon(a) } catch (c) {}
            b ||
                Yb(a)
        },
        fc = function(a, b) { var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal); return c },
        gc = function(a) { var b = H.featurePolicy; return b && Ea(b.allowsFeature) ? b.allowsFeature(a) : !1 };
    var hc = function(a, b) { return z(this, a) && z(this, b) },
        ic = function(a, b) { return z(this, a) === z(this, b) },
        jc = function(a, b) { return z(this, a) || z(this, b) },
        kc = function(a, b) { a = z(this, a);
            b = z(this, b); return -1 < String(a).indexOf(String(b)) },
        lc = function(a, b) { a = String(z(this, a));
            b = String(z(this, b)); return a.substring(0, b.length) === b },
        mc = function(a, b) { a = z(this, a);
            b = z(this, b); switch (a) {
                case "pageLocation":
                    var c = m.location.href;
                    b instanceof mb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, "")); return c } };
    var oc = function() { this.g = new ob;
        nc(this) };
    oc.prototype.execute = function(a) { return this.g.o(a) };
    var nc = function(a) { qb(a.g, "map"); var b = function(c, d) { pb(a.g, c, d) };
        b("and", hc);
        b("contains", kc);
        b("equals", ic);
        b("or", jc);
        b("startsWith", lc);
        b("variable", mc) };
    var pc = function(a) { if (a instanceof pc) return a;
        this.hb = a };
    pc.prototype.toString = function() { return String(this.hb) };
    var rc = function(a) { ra.call(this);
        this.g = a;
        this.set("then", qc(this));
        this.set("catch", qc(this, !0));
        this.set("finally", qc(this, !1, !0)) };
    ma(rc, mb);
    var qc = function(a, b, c) { b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c; return new ib("", function(d, e) { b && (e = d, d = void 0);
            c && (e = d);
            d instanceof ib || (d = void 0);
            e instanceof ib || (e = void 0); var f = Ca(this.g),
                g = function(k) { return function(n) { return c ? (k.g(f), a.g) : k.g(f, n) } },
                h = a.g.then(d && g(d), e && g(e)); return new rc(h) }) };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var sc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        tc = function(a) { if (null == a) return String(a); var b = sc.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        uc = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        vc = function(a) {
            if (!a || "object" != tc(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !uc(a, "constructor") && !uc(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || uc(a, b)
        },
        wc = function(a, b) { var c = b || ("array" == tc(a) ? [] : {}),
                d; for (d in a)
                if (uc(a, d)) { var e = a[d]; "array" == tc(e) ? ("array" != tc(c[d]) && (c[d] = []), c[d] = wc(e, c[d])) : vc(e) ? (vc(c[d]) || (c[d] = {}), c[d] = wc(e, c[d])) : c[d] = e }
            return c };
    var yc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) { for (var n = ta(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p])) },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (h instanceof va) { var n = [];
                        d.push(h);
                        e.push(n); for (var p = h.Kb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q))); return n }
                    if (h instanceof rc) return h.g;
                    if (h instanceof mb) { var r = {};
                        d.push(h);
                        e.push(r);
                        f(h, r); return r }
                    if (h instanceof ib) {
                        var t = function() {
                            for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = xc(u[v],
                                b, !!c);
                            var y = b ? b.s : ya(),
                                x = new za(y);
                            b && (x.g = b.g);
                            return g(h.g.apply(h, [x].concat(u)))
                        };
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null }
                };
            return g(a)
        },
        xc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n in h) h.hasOwnProperty(n) && k.set(n,
                        g(h[n]))
                },
                g = function(h) { var k = d.indexOf(h); if (-1 < k) return e[k]; if (Ja(h) || Qa(h)) { var n = new va([]);
                        d.push(h);
                        e.push(n); for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p])); return n } if (vc(h)) { var q = new mb;
                        d.push(h);
                        e.push(q);
                        f(h, q); return q } if ("function" === typeof h) { var r = new ib("", function(x) { for (var w = Array.prototype.slice.call(arguments, 0), A = 0; A < w.length; A++) w[A] = yc(z(this, w[A]), b, !!c); return g((0, this.g.P)(h, h, w)) });
                        d.push(h);
                        e.push(r);
                        f(h, r); return r } var y = typeof h; if (null === h || "string" === y || "number" === y || "boolean" === y) return h; };
            return g(a)
        };
    var zc = function(a) { for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c)); return b },
        Ac = function(a) { if (void 0 === a || Ja(a) || vc(a)) return !0; switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0 } return !1 };
    var Bc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) { for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d)); for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof va)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new va(c) },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e)); return new va(d) },
        forEach: function(a, b) { for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this) },
        hasOwnProperty: function(a, b) { return this.has(b) },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) { for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d)); return c.join(b) },
        lastIndexOf: function(a, b, c) { var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e)); for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1 },
        map: function(a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this)); return new va(d) },
        pop: function() { return this.pop() },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) { var d = this.length(),
                e, f = 0; if (void 0 !== c) e = c;
            else { if (0 === d) throw Error("TypeError: Reduce on List with no elements."); for (var g = 0; g < d; g++)
                    if (this.has(g)) { e = this.get(g);
                        f = g + 1; break }
                if (g === d) throw Error("TypeError: Reduce on List with no elements."); } for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this)); return e },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) { e = this.get(d - g);
                        f = d - (g + 1); break }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() { for (var a = zc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : wa(this, c); return this },
        shift: function() { return this.shift() },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new va(e)
        },
        some: function(a, b) { for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1 },
        sort: function(a, b) { var c = zc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) { return Number(b.g(a, e, f)) }); for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : wa(this, d); return this },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() { return this.toString() },
        unshift: function(a, b) { return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1)) }
    };
    var Cc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Dc = new pa("break"),
        Ec = new pa("continue"),
        Fc = function(a, b) { return z(this, a) + z(this, b) },
        Gc = function(a, b) { return z(this, a) && z(this, b) },
        Ic = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            if (!(c instanceof va)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) { if ("toString" === b) { if (d && c.length()) { var e = yc(c.get(0)); try { return a.toString(e) } catch (q) {} } return a.toString() } throw Error("TypeError: " + a + "." + b + " is not a function."); }
            if ("string" === typeof a) { if (0 <= Cc.indexOf(b)) { var f = yc(c); return xc(a[b].apply(a, f), this.g) } throw Error("TypeError: " + b + " is not a function"); }
            if (a instanceof va) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof ib) { var h = zc(c);
                        h.unshift(this.g); return g.g.apply(g, h) }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= Bc.supportedMethods.indexOf(b)) { var k = zc(c);
                    k.unshift(this.g); return Bc[b].apply(a, k) }
            }
            if (a instanceof ib || a instanceof mb) { if (a.has(b)) { var n = a.get(b); if (n instanceof ib) { var p = zc(c);
                        p.unshift(this.g); return n.g.apply(n, p) } throw Error("TypeError: " + b + " is not a function"); } if ("toString" === b) return a instanceof ib ? a.P : a.toString(); if ("hasOwnProperty" === b) return a.has.apply(a, zc(c)) }
            if (a instanceof pc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        },
        Jc = function(a, b) { a = z(this, a); if ("string" !== typeof a) throw Error("Invalid key name given for assignment."); var c = this.g; if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b); var d = z(this, b);
            c.set(a, d); return d },
        Kc = function(a) { var b = Ca(this.g),
                c = lb(b, Array.prototype.slice.apply(arguments)); if (c instanceof pa) return c },
        Lc = function() { return Dc },
        Mc = function(a) { for (var b = z(this, a), c = 0; c < b.length; c++) { var d = z(this, b[c]); if (d instanceof pa) return d } },
        Nc = function(a) {
            for (var b =
                    this.g, c = 0; c < arguments.length - 1; c += 2) { var d = arguments[c]; if ("string" === typeof d) { var e = z(this, arguments[c + 1]);
                    Aa(b, d, e, !0) } }
        },
        Oc = function() { return Ec },
        Pc = function(a, b, c) { var d = new va;
            b = z(this, b); for (var e = 0; e < b.length; e++) d.push(b[e]); var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, z(this, f)) },
        Qc = function(a, b) { return z(this, a) / z(this, b) },
        Rc = function(a, b) {
            a = z(this, a);
            b = z(this, b);
            var c = a instanceof pc,
                d = b instanceof pc;
            return c || d ? c && d ? a.hb == b.hb : !1 : a ==
                b
        },
        Sc = function(a) { for (var b, c = 0; c < arguments.length; c++) b = z(this, arguments[c]); return b };

    function Tc(a, b, c, d) { for (var e = 0; e < b(); e++) { var f = a(c(e)),
                g = lb(f, d); if (g instanceof pa) { if ("break" === g.g) break; if ("return" === g.g) return g } } }

    function Uc(a, b, c) { if ("string" === typeof b) return Tc(a, function() { return b.length }, function(f) { return f }, c); if (b instanceof mb || b instanceof va || b instanceof ib) { var d = b.Kb(),
                e = d.length(); return Tc(a, function() { return e }, function(f) { return d.get(f) }, c) } }
    var Vc = function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.g; return Uc(function(e) { d.set(a, e); return d }, b, c) },
        Wc = function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.g; return Uc(function(e) { var f = Ca(d);
                Aa(f, a, e, !0); return f }, b, c) },
        Xc = function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.g; return Uc(function(e) { var f = Ca(d);
                f.add(a, e); return f }, b, c) },
        Zc = function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.g; return Yc(function(e) { d.set(a, e); return d }, b, c) },
        $c =
        function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.g; return Yc(function(e) { var f = Ca(d);
                Aa(f, a, e, !0); return f }, b, c) },
        ad = function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.g; return Yc(function(e) { var f = Ca(d);
                f.add(a, e); return f }, b, c) };

    function Yc(a, b, c) { if ("string" === typeof b) return Tc(a, function() { return b.length }, function(d) { return b[d] }, c); if (b instanceof va) return Tc(a, function() { return b.length() }, function(d) { return b.get(d) }, c); throw new TypeError("The value is not iterable."); }
    var bd = function(a, b, c, d) {
            function e(p, q) { for (var r = 0; r < f.length(); r++) { var t = f.get(r);
                    q.add(t, p.get(t)) } } var f = z(this, a); if (!(f instanceof va)) throw Error("TypeError: Non-List argument given to ForLet instruction."); var g = this.g;
            d = z(this, d); var h = Ca(g); for (e(g, h); kb(h, b);) { var k = lb(h, d); if (k instanceof pa) { if ("break" === k.g) break; if ("return" === k.g) return k } var n = Ca(g);
                e(h, n);
                kb(n, c);
                h = n } },
        cd = function(a) { a = z(this, a); var b = this.g,
                c = !1; if (c && !b.has(a)) throw new ReferenceError(a + " is not defined."); return b.get(a) },
        dd = function(a, b) { var c;
            a = z(this, a);
            b = z(this, b); if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + "."); if (a instanceof mb || a instanceof va || a instanceof ib) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : qa(b) && (c = a[b]);
            else if (a instanceof pc) return; return c },
        ed = function(a, b) {
            return z(this, a) > z(this,
                b)
        },
        fd = function(a, b) { return z(this, a) >= z(this, b) },
        gd = function(a, b) { a = z(this, a);
            b = z(this, b);
            a instanceof pc && (a = a.hb);
            b instanceof pc && (b = b.hb); return a === b },
        hd = function(a, b) { return !gd.call(this, a, b) },
        id = function(a, b, c) { var d = [];
            z(this, a) ? d = z(this, b) : c && (d = z(this, c)); var e = lb(this.g, d); if (e instanceof pa) return e },
        jd = function(a, b) { return z(this, a) < z(this, b) },
        kd = function(a, b) { return z(this, a) <= z(this, b) },
        ld = function(a, b) { return z(this, a) % z(this, b) },
        md = function(a, b) { return z(this, a) * z(this, b) },
        nd = function(a) {
            return -z(this,
                a)
        },
        od = function(a) { return !z(this, a) },
        pd = function(a, b) { return !Rc.call(this, a, b) },
        qd = function() { return null },
        rd = function(a, b) { return z(this, a) || z(this, b) },
        sd = function(a, b) { var c = z(this, a);
            z(this, b); return c },
        td = function(a) { return z(this, a) },
        ud = function(a) { return Array.prototype.slice.apply(arguments) },
        vd = function(a) { return new pa("return", z(this, a)) },
        wd = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof ib || a instanceof va || a instanceof mb) && a.set(b, c);
            return c
        },
        xd = function(a, b) { return z(this, a) - z(this, b) },
        yd = function(a, b, c) {
            a = z(this, a);
            var d = z(this, b),
                e = z(this, c);
            if (!Ja(d) || !Ja(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === z(this, d[h]))
                    if (f = z(this, e[h]), f instanceof pa) { var k = f.g; if ("break" === k) return; if ("return" === k || "continue" === k) return f } else g = !0;
            if (e.length === d.length + 1 && (f = z(this, e[e.length - 1]), f instanceof pa && ("return" === f.g || "continue" ===
                    f.g))) return f
        },
        zd = function(a, b, c) { return z(this, a) ? z(this, b) : z(this, c) },
        Bd = function(a) { a = z(this, a); return a instanceof ib ? "function" : typeof a },
        Cd = function(a) { for (var b = this.g, c = 0; c < arguments.length; c++) { var d = arguments[c]; "string" !== typeof d || b.add(d, void 0) } },
        Dd = function(a, b, c, d) {
            var e = z(this, d);
            if (z(this, c)) { var f = lb(this.g, e); if (f instanceof pa) { if ("break" === f.g) return; if ("return" === f.g) return f } }
            for (; z(this, a);) {
                var g = lb(this.g, e);
                if (g instanceof pa) { if ("break" === g.g) break; if ("return" === g.g) return g }
                z(this,
                    b)
            }
        },
        Ed = function(a) { return ~Number(z(this, a)) },
        Fd = function(a, b) { return Number(z(this, a)) << Number(z(this, b)) },
        Gd = function(a, b) { return Number(z(this, a)) >> Number(z(this, b)) },
        Hd = function(a, b) { return Number(z(this, a)) >>> Number(z(this, b)) },
        Id = function(a, b) { return Number(z(this, a)) & Number(z(this, b)) },
        Jd = function(a, b) { return Number(z(this, a)) ^ Number(z(this, b)) },
        Kd = function(a, b) { return Number(z(this, a)) | Number(z(this, b)) };
    var Md = function() { this.g = new ob;
        Ld(this) };
    Md.prototype.execute = function(a) { return Nd(this.g.o(a)) };
    var Od = function(a, b, c) { return Nd(a.g.C(b, c)) },
        Ld = function(a) {
            var b = function(d, e) { qb(a.g, d, String(e)) };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) { pb(a.g, String(d), e) };
            c(0, Fc);
            c(1, Gc);
            c(2, Ic);
            c(3, Jc);
            c(53, Kc);
            c(4, Lc);
            c(5, Mc);
            c(52, Nc);
            c(6, Oc);
            c(9, Mc);
            c(50, Pc);
            c(10, Qc);
            c(12, Rc);
            c(13, Sc);
            c(47, Vc);
            c(54, Wc);
            c(55, Xc);
            c(63, bd);
            c(64, Zc);
            c(65, $c);
            c(66, ad);
            c(15, cd);
            c(16, dd);
            c(17, dd);
            c(18, ed);
            c(19, fd);
            c(20, gd);
            c(21, hd);
            c(22, id);
            c(23, jd);
            c(24, kd);
            c(25, ld);
            c(26, md);
            c(27,
                nd);
            c(28, od);
            c(29, pd);
            c(45, qd);
            c(30, rd);
            c(32, sd);
            c(33, sd);
            c(34, td);
            c(35, td);
            c(46, ud);
            c(36, vd);
            c(43, wd);
            c(37, xd);
            c(38, yd);
            c(39, zd);
            c(40, Bd);
            c(41, Cd);
            c(42, Dd);
            c(58, Ed);
            c(57, Fd);
            c(60, Gd);
            c(61, Hd);
            c(56, Id);
            c(62, Jd);
            c(59, Kd)
        };

    function Nd(a) { if (a instanceof pa || a instanceof ib || a instanceof va || a instanceof mb || a instanceof pc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a };
    var Pd = function() {
        var a = function(b) { return { toString: function() { return b } } };
        return {
            Yh: a("consent"),
            De: a("consent_always_fire"),
            bg: a("convert_case_to"),
            cg: a("convert_false_to"),
            dg: a("convert_null_to"),
            eg: a("convert_true_to"),
            fg: a("convert_undefined_to"),
            Gk: a("debug_mode_metadata"),
            Jb: a("function"),
            Ji: a("instance_name"),
            Ni: a("live_only"),
            Oi: a("malware_disabled"),
            Pi: a("metadata"),
            Ui: a("original_activity_id"),
            Lk: a("original_vendor_template_id"),
            Kk: a("once_on_load"),
            Ti: a("once_per_event"),
            Jg: a("once_per_load"),
            Nk: a("priority_override"),
            Ok: a("respected_consent_types"),
            Pg: a("setup_tags"),
            Rg: a("tag_id"),
            Sg: a("teardown_tags")
        }
    }();
    var me;
    var ne = [],
        oe = [],
        pe = [],
        qe = [],
        re = [],
        se = {},
        te, ue, ve, we = function(a, b) { var c = {};
            c["function"] = "__" + a; for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]); return c },
        xe = function(a, b) { var c = a["function"],
                d = b && b.event; if (!c) throw Error("Error: No function name given for function call."); var e = se[c],
                f = {},
                g; for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.eh && d.eh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Pd.De.toString() && a[g]) {}
            e && d && d.dh && (f.vtp_gtmCachedValues = d.dh); return void 0 !== e ? e(f) : me(c, f, b) },
        ze = function(a, b, c) { c = c || []; var d = {},
                e; for (e in a) a.hasOwnProperty(e) && (d[e] = ye(a[e], b, c)); return d },
        ye = function(a, b, c) {
            if (Ja(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(ye(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ne[f];
                        if (!g || b.If(g)) return;
                        c[f] = !0;
                        try {
                            var h = ze(g, b, c);
                            h.vtp_gtmEventId =
                                b.id;
                            d = xe(h, { event: b, index: f, type: 2 });
                            ve && (d = ve.kj(d, h))
                        } catch (x) { b.xh && b.xh(x, Number(f)), d = !1 }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var k = 1; k < a.length; k += 2) d[ye(a[k], b, c)] = ye(a[k + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) { var q = ye(a[p], b, c);
                            ue && (n = n || q === ue.Vd);
                            d.push(q) }
                        return ue && n ? ue.oj(d) : d.join("");
                    case "escape":
                        d = ye(a[1], b, c);
                        if (ue && Ja(a[1]) && "macro" === a[1][0] && ue.Kj(a)) return ue.dk(d);
                        d = String(d);
                        for (var r = 2; r < a.length; r++) Qd[a[r]] && (d = Qd[a[r]](d));
                        return d;
                    case "tag":
                        var t =
                            a[1];
                        if (!qe[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return d = { lh: a[2], index: t };
                    case "zb":
                        var u = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        u["function"] = a[1];
                        var v = Ae(u, b, c),
                            y = !!a[4];
                        return y || 2 !== v ? y !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Ae = function(a, b, c) { try { return te(ze(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 };
    var Be = function(a, b, c) { var d;
        d = Error.call(this);
        this.message = d.message; "stack" in d && (this.stack = d.stack);
        this.o = a;
        this.g = c };
    ma(Be, Error);

    function Ce(a, b) { if (Ja(a)) { Object.defineProperty(a, "context", { value: { line: b[0] } }); for (var c = 1; c < a.length; c++) Ce(a[c], b[c]) } };
    var De = function(a, b) { var c;
        c = Error.call(this);
        this.message = c.message; "stack" in c && (this.stack = c.stack);
        this.Zj = a;
        this.o = b;
        this.g = [] };
    ma(De, Error);
    var Fe = function() { return function(a, b) { a instanceof De || (a = new De(a, Ee));
            b && a.g.push(b); throw a; } };

    function Ee(a) { if (!a.length) return a;
        a.push({ id: "main", line: 0 }); for (var b = a.length - 1; 0 < b; b--) Ha(a[b].id) && a.splice(b++, 1); for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1); return a };
    var Ie = function(a) {
            function b(r) { for (var t = 0; t < r.length; t++) d[r[t]] = !0 } for (var c = [], d = [], e = Ge(a), f = 0; f < oe.length; f++) { var g = oe[f],
                    h = He(g, e); if (h) { for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || []) } else null === h && b(g.block || []); } for (var p = [], q = 0; q < qe.length; q++) c[q] && !d[q] && (p[q] = !0); return p },
        He = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) { var e = b(c[d]); if (0 === e) return !1; if (2 === e) return null }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) { var h = b(f[g]); if (2 === h) return null; if (1 === h) return !1 }
            return !0
        },
        Ge = function(a) { var b = []; return function(c) { void 0 === b[c] && (b[c] = Ae(pe[c], a)); return b[c] } };
    var Je = { kj: function(a, b) { b[Pd.bg] && "string" === typeof a && (a = 1 == b[Pd.bg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Pd.dg) && null === a && (a = b[Pd.dg]);
            b.hasOwnProperty(Pd.fg) && void 0 === a && (a = b[Pd.fg]);
            b.hasOwnProperty(Pd.eg) && !0 === a && (a = b[Pd.eg]);
            b.hasOwnProperty(Pd.cg) && !1 === a && (a = b[Pd.cg]); return a } };
    var Ke = function() { this.g = {} };

    function Le(a, b, c, d) { if (a)
            for (var e = 0; e < a.length; e++) { var f = void 0,
                    g = "A policy function denied the permission request"; try { f = a[e].call(void 0, b, c, d), g += "." } catch (h) { g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "." } if (!f) throw new Be(c, d, g); } }

    function Me(a, b, c) { return function() { var d = arguments[0]; if (d) { var e = a.g[d],
                    f = a.g.all; if (e || f) { var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Le(e, b, d, g);
                    Le(f, b, d, g) } } } };
    var Pe = function() { var a = data.permissions || {},
                b = L.K,
                c = this;
            this.o = new Ke;
            this.g = {}; var d = {},
                e = Me(this.o, b, function() { var f = arguments[0]; return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {} });
            Pa(a, function(f, g) { var h = {};
                Pa(g, function(k, n) { var p = Ne(k, n);
                    h[k] = p.assert;
                    d[k] || (d[k] = p.U) });
                c.g[f] = function(k, n) { var p = h[k]; if (!p) throw Oe(k, {}, "The requested permission " + k + " is not configured."); var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q) } }) },
        Re =
        function(a) { return Qe.g[a] || function() {} };

    function Ne(a, b) { var c = we(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Oe; try { return xe(c) } catch (d) { return { assert: function(e) { throw new Be(e, {}, "Permission " + e + " is unknown."); }, U: function() { for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f]; return e } } } }

    function Oe(a, b, c) { return new Be(a, b, c) };
    var Se = !1;
    var Te = {};
    Te.Fk = Sa('');
    Te.rj = Sa('');
    var Ue = Se,
        Ve = Te.rj,
        We = Te.Fk;
    var Xe = function(a, b) { var c = String(a); return c };
    var bf = function(a) { var b = {},
                c = 0;
            Pa(a, function(e, f) { if (void 0 !== f)
                    if (f = Xe(f, 100), Ye.hasOwnProperty(e)) b[Ye[e]] = Ze(f);
                    else if ($e.hasOwnProperty(e)) { var g = $e[e],
                        h = Ze(f);
                    b.hasOwnProperty(g) || (b[g] = h) } else if ("category" === e)
                    for (var k = Ze(f).split("/", 5), n = 0; n < k.length; n++) { var p = af[n],
                            q = k[n];
                        b.hasOwnProperty(p) || (b[p] = q) } else 10 > c && (b["k" + c] = Ze(Xe(e, 40)), b["v" + c] = Ze(f), c++) }); var d = [];
            Pa(b, function(e, f) { d.push("" + e + f) }); return d.join("~") },
        Ze = function(a) { return ("" + a).replace(/~/g, function() { return "~~" }) },
        Ye = { item_id: "id", item_name: "nm", item_brand: "br", item_category: "ca", item_category2: "c2", item_category3: "c3", item_category4: "c4", item_category5: "c5", item_variant: "va", price: "pr", quantity: "qt", coupon: "cp", item_list_name: "ln", index: "lp", item_list_id: "li", discount: "ds", affiliation: "af", promotion_id: "pi", promotion_name: "pn", creative_name: "cn", creative_slot: "cs", location_id: "lo" },
        $e = { id: "id", name: "nm", brand: "br", variant: "va", list_name: "ln", list_position: "lp", list: "ln", position: "lp", creative: "cn" },
        af = ["ca",
            "c2", "c3", "c4", "c5"
        ];
    var cf = function(a) { var b = [];
            Pa(a, function(c, d) { null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d))) }); return b.join("&") },
        df = function(a, b, c, d) { this.Ea = a.Ea;
            this.Xb = a.Xb;
            this.M = a.M;
            this.o = b;
            this.C = c;
            this.s = cf(a.Ea);
            this.g = cf(a.M);
            this.I = this.g.length; if (d && 16384 < this.I) throw Error("EVENT_TOO_LARGE"); };
    var ef = function() { this.events = [];
        this.g = this.Ea = "";
        this.s = 0;
        this.o = !1 };
    ef.prototype.add = function(a) { return this.C(a) ? (this.events.push(a), this.Ea = a.s, this.g = a.o, this.s += a.I, this.o = a.C, !0) : !1 };
    ef.prototype.C = function(a) { var b = 20 > this.events.length && 16384 > a.I + this.s,
            c = this.Ea === a.s && this.g === a.o && this.o === a.C; return 0 == this.events.length || b && c };

    var ff = function(a, b) { Pa(a, function(c, d) { null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d)) }) },
        gf = function(a, b) { var c = [];
            a.s && c.push(a.s);
            b && c.push("_s=" + b);
            ff(a.Xb, c); var d = !1;
            a.g && (c.push(a.g), d = !0); var e = c.join("&"),
                f = "",
                g = e.length + a.o.length + 1;
            d && 2048 < g && (f = c.pop(), e = c.join("&")); return { Rf: e, body: f } },
        hf = function(a, b) {
            var c = a.events;
            if (1 == c.length) return gf(c[0], b);
            var d = [];
            a.Ea && d.push(a.Ea);
            for (var e = {}, f = 0; f < c.length; f++) Pa(c[f].Xb, function(t, u) {
                null != u && (e[t] = e[t] || {}, e[t][String(u)] =
                    e[t][String(u)] + 1 || 1)
            });
            var g = {};
            Pa(e, function(t, u) { var v, y = -1,
                    x = 0;
                Pa(u, function(w, A) { x += A; var B = (w.length + t.length + 2) * (A - 1);
                    B > y && (v = w, y = B) });
                x == c.length && (g[t] = v) });
            ff(g, d);
            b && d.push("_s=" + b);
            for (var h = d.join("&"), k = [], n = {}, p = 0; p < c.length; n = { Gd: n.Gd }, p++) { var q = [];
                n.Gd = {};
                Pa(c[p].Xb, function(t) { return function(u, v) { g[u] != "" + v && (t.Gd[u] = v) } }(n));
                c[p].g && q.push(c[p].g);
                ff(n.Gd, q);
                k.push(q.join("&")) }
            var r = k.join("\r\n");
            return { Rf: h, body: r }
        };
    var vf = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        wf = { Fn: "function", DustMap: "Object", List: "Array" },
        O = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = vf.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    k = c[d];
                if (null == k) { if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied."); } else if ("*" !== h) {
                    var n = typeof k;
                    k instanceof ib ? n = "Fn" : k instanceof va ? n = "List" : k instanceof mb ? n = "DustMap" : k instanceof pc && (n = "OpaqueValue");
                    if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (wf[n] || n) + ", which does not match required type " + (wf[h] || h) + ".");
                }
            }
        };

    function xf(a) { return "" + a }

    function yf(a, b) { var c = []; return c };
    var zf = function(a, b) { var c = new ib(a, function() { for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = z(this, d[e]); return b.apply(this, d) });
            c.Lb(); return c },
        Af = function(a, b) { var c = new mb,
                d; for (d in b)
                if (b.hasOwnProperty(d)) { var e = b[d];
                    Ea(e) ? c.set(d, zf(a + "_" + d, e)) : (Ha(e) || Fa(e) || "boolean" == typeof e) && c.set(d, e) }
            c.Lb(); return c };
    var Bf = function(a, b) { O(G(this), ["apiName:!string", "message:?string"], arguments); var c = {},
            d = new mb; return d = Af("AssertApiSubject", c) };
    var Cf = function(a, b) { O(G(this), ["actual:?*", "message:?string"], arguments); if (a instanceof rc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."); var c = {},
            d = new mb; return d = Af("AssertThatSubject", c) };

    function Df(a) { return function() { for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(yc(arguments[d], c)); return xc(a.apply(null, b)) } }
    var Ff = function() { for (var a = Math, b = Ef, c = {}, d = 0; d < b.length; d++) { var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Df(a[e].bind(a))) } return c };
    var Gf = function(a) { var b; return b };
    var Hf = function(a) { var b; return b };
    var If = function(a) { return encodeURI(a) };
    var Jf = function(a) { return encodeURIComponent(a) };
    var Kf = function(a) { O(G(this), ["message:?string"], arguments); };
    var Lf = function(a, b) { O(G(this), ["min:!number", "max:!number"], arguments); return La(a, b) };
    var P = function(a, b, c) { var d = a.g.g; if (!d) throw Error("Missing program state.");
        d.dj.apply(null, Array.prototype.slice.call(arguments, 1)) };
    var Mf = function() { P(this, "read_container_data"); var a = new mb;
        a.set("containerId", 'G-VY3Y6182VG');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", Ue);
        a.set("previewMode", We);
        a.set("environmentMode", Ve);
        a.Lb(); return a };
    var Nf = {};
    Nf.sstECEnableData = !0;
    Nf.enableAdsEc = !0;
    Nf.sstFFConversionEnabled = !0;
    Nf.sstEnableAuid = !0;
    Nf.enableGbraidUpdate = !0;
    Nf.enable1pScripts = !0;
    Nf.enableGlobalEventDeveloperIds = !1;
    Nf.enableGa4OnoRemarketing = !1;
    Nf.omitAuidIfWbraidPresent = !1;
    Nf.sstEnableDclid = !0;
    Nf.reconcileCampaignFields = !1;
    Nf.enableEmFormCcd = !1;
    Nf.enableEmFormCcdPart2 = !1;
    Nf.enableUrlPassthrough = !0;
    Nf.enableLandingPageDeduplication = !0;
    Nf.requireGtagUserDataTos = !0;

    function Of() { return xc(Nf) };
    var Pf = function() { return (new Date).getTime() };
    var Qf = function(a) { if (null === a) return "null"; if (a instanceof va) return "array"; if (a instanceof ib) return "function"; if (a instanceof pc) { a = a.hb; if (void 0 === a.constructor || void 0 === a.constructor.name) { var b = String(a); return b.substring(8, b.length - 1) } return String(a.constructor.name) } return typeof a };
    var Rf = function(a) {
        function b(c) { return function(d) { try { return c(d) } catch (e) {
                    (Ue || We) && a.call(this, e.message) } } } return { parse: b(function(c) { return xc(JSON.parse(c)) }), stringify: b(function(c) { return JSON.stringify(yc(c)) }) } };
    var Sf = function(a) { return Ra(yc(a, this.g)) };
    var Tf = function(a) { return Number(yc(a, this.g)) };
    var Uf = function(a) { return null === a ? "null" : void 0 === a ? "undefined" : a.toString() };
    var Vf = function(a, b, c) { var d = null,
            e = !1; return e ? d : null };
    var Ef = "floor ceil round max min abs pow sqrt".split(" ");
    var Wf = function() { var a = {}; return { zj: function(b) { return a.hasOwnProperty(b) ? a[b] : void 0 }, xk: function(b, c) { a[b] = c }, reset: function() { a = {} } } },
        Xf = function(a, b) { return function() { var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b); return ib.prototype.g.apply(a, c) } },
        Yf = function(a, b) { O(G(this), ["apiName:!string", "mock:?*"], arguments); };
    var Zf = {};
    Zf.keys = function(a) { return new va };
    Zf.values = function(a) { return new va };
    Zf.entries = function(a) { return new va };
    Zf.freeze = function(a) { return a };
    Zf.delete = function(a, b) { return !1 };
    var ag = function() { this.g = {};
        this.o = {}; };
    ag.prototype.get = function(a, b) { var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0; return c };
    ag.prototype.add = function(a, b, c) { if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + "."; if (this.o.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Ea(b) ? zf(a, b) : Af(a, b) };
    var cg = function(a, b, c) { if (a.o.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + "."; if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.o[b] = Ea(c) ? zf(b, c) : Af(b, c) };

    function bg(a, b) { var c = void 0; return c };

    function dg() { var a = {}; return a };
    var T = {
        Ib: "_ee",
        vc: "_syn_or_mod",
        Pk: "_uei",
        Yc: "_eu",
        Mk: "_pci",
        kc: "event_callback",
        Nd: "event_timeout",
        Ga: "gtag.config",
        Pa: "gtag.get",
        xa: "purchase",
        hc: "refund",
        Eb: "begin_checkout",
        bc: "add_to_cart",
        cc: "remove_from_cart",
        gi: "view_cart",
        hg: "add_to_wishlist",
        ya: "view_item",
        fc: "view_promotion",
        Je: "select_promotion",
        Ie: "select_item",
        Fb: "view_item_list",
        gg: "add_payment_info",
        fi: "add_shipping_info",
        eb: "value_key",
        rb: "value_callback",
        ba: "allow_ad_personalization_signals",
        Uc: "restricted_data_processing",
        Hc: "allow_google_signals",
        Aa: "cookie_expires",
        jc: "cookie_update",
        Vc: "session_duration",
        Rd: "session_engaged_time",
        Ld: "engagement_time_msec",
        Ka: "user_properties",
        Ba: "transport_url",
        aa: "ads_data_redaction",
        Ca: "user_data",
        Qc: "first_party_collection",
        D: "ad_storage",
        R: "analytics_storage",
        Ee: "region",
        ag: "wait_for_update",
        za: "conversion_linker",
        Qa: "conversion_cookie_prefix",
        na: "value",
        ka: "currency",
        Dg: "trip_type",
        da: "items",
        ug: "passengers",
        Me: "allow_custom_scripts",
        Hb: "session_id",
        zg: "quantity",
        ub: "transaction_id",
        tb: "language",
        Kd: "country",
        Jd: "allow_enhanced_conversions",
        Re: "aw_merchant_id",
        Pe: "aw_feed_country",
        Qe: "aw_feed_language",
        Oe: "discount",
        Z: "developer_id",
        qg: "global_developer_id_string",
        ng: "event_developer_id_string",
        Sd: "delivery_postal_code",
        Xe: "estimated_delivery_date",
        Ve: "shipping",
        bf: "new_customer",
        Se: "customer_lifetime_value",
        We: "enhanced_conversions",
        Gc: "page_view",
        ra: "linker",
        T: "domains",
        nc: "decorate_forms",
        mg: "enhanced_conversions_automatic_settings",
        ni: "auto_detection_enabled",
        og: "ga_temp_client_id",
        Ke: "user_engagement",
        ai: "app_remove",
        bi: "app_store_refund",
        ci: "app_store_subscription_cancel",
        di: "app_store_subscription_convert",
        ei: "app_store_subscription_renew",
        hi: "first_open",
        ii: "first_visit",
        ji: "in_app_purchase",
        ki: "session_start",
        li: "allow_display_features",
        cb: "campaign",
        Ic: "campaign_content",
        Jc: "campaign_id",
        Kc: "campaign_medium",
        Lc: "campaign_name",
        Mc: "campaign_source",
        Nc: "campaign_term",
        Ha: "client_id",
        qa: "cookie_domain",
        ic: "cookie_name",
        pb: "cookie_path",
        Ra: "cookie_flags",
        Oc: "custom_map",
        $e: "groups",
        sg: "non_interaction",
        fb: "page_location",
        cf: "page_path",
        Sa: "page_referrer",
        Tc: "page_title",
        ma: "send_page_view",
        oc: "send_to",
        Wc: "session_engaged",
        Pc: "euid_logged_in_state",
        Xc: "session_number",
        Gi: "tracking_id",
        vb: "url_passthrough",
        mc: "accept_incoming",
        Sc: "url_position",
        xg: "phone_conversion_number",
        vg: "phone_conversion_callback",
        wg: "phone_conversion_css_class",
        yg: "phone_conversion_options",
        Bi: "phone_conversion_ids",
        Ai: "phone_conversion_country_code",
        ab: "aw_remarketing",
        Ne: "aw_remarketing_only",
        Le: "gclid",
        mi: "auid",
        vi: "affiliation",
        lg: "tax",
        Ue: "list_name",
        kg: "checkout_step",
        jg: "checkout_option",
        wi: "coupon",
        xi: "promotions",
        Ja: "user_id",
        Ei: "retoken",
        Ia: "cookie_prefix",
        ig: "disable_merchant_reported_purchases",
        ui: "dc_natural_search",
        si: "dc_custom_params",
        rg: "method",
        Fi: "search_term",
        ri: "content_type",
        zi: "optimize_id",
        yi: "experiments",
        sb: "google_signals"
    };
    T.Pd = "google_tld";
    T.Ud = "update";
    T.Ye = "firebase_id";
    T.Ze = "ga_restrict_domain";
    T.Md = "event_settings";
    T.Te = "dynamic_event_settings";
    T.qc = "user_data_settings";
    T.Bg = "screen_name";
    T.ef = "screen_resolution";
    T.Gb = "_x_19";
    T.qb = "enhanced_client_id";
    T.Od = "_x_20";
    T.af = "internal_traffic_results";
    T.Td = "traffic_type";
    T.Qd = "referral_exclusion_definition";
    T.Rc = "ignore_referrer";
    T.oi = "content_group";
    T.la = "allow_interest_groups";
    var eg = {};
    T.Fg = Object.freeze((eg[T.ba] = 1, eg[T.Jd] = 1, eg[T.Hc] = 1, eg[T.da] = 1, eg[T.qa] = 1, eg[T.Aa] = 1, eg[T.Ra] = 1, eg[T.ic] = 1, eg[T.pb] = 1, eg[T.Ia] = 1, eg[T.jc] = 1, eg[T.Oc] = 1, eg[T.Z] = 1, eg[T.Te] = 1, eg[T.kc] = 1, eg[T.Md] = 1, eg[T.Nd] = 1, eg[T.Qc] = 1, eg[T.Ze] = 1, eg[T.sb] = 1, eg[T.Pd] = 1, eg[T.$e] = 1, eg[T.af] = 1, eg[T.ra] = 1, eg[T.Qd] = 1, eg[T.Uc] = 1, eg[T.ma] = 1, eg[T.oc] = 1, eg[T.Vc] = 1, eg[T.Rd] = 1, eg[T.Sd] = 1, eg[T.Ba] = 1, eg[T.Ud] = 1, eg[T.qc] = 1, eg[T.Ka] = 1, eg[T.Yc] = 1, eg));
    T.Eg = Object.freeze([T.fb, T.Sa, T.Tc, T.tb, T.Bg, T.Ja, T.Ye, T.oi]);
    var fg = {};
    T.Ii = Object.freeze((fg[T.ai] = 1, fg[T.bi] = 1, fg[T.ci] = 1, fg[T.di] = 1, fg[T.ei] = 1, fg[T.hi] = 1, fg[T.ii] = 1, fg[T.ji] = 1, fg[T.ki] = 1, fg[T.Ke] = 1, fg));
    var gg = {};
    T.Gg = Object.freeze((gg[T.gg] = 1, gg[T.fi] = 1, gg[T.bc] = 1, gg[T.cc] = 1, gg[T.gi] = 1, gg[T.Eb] = 1, gg[T.Ie] = 1, gg[T.Fb] = 1, gg[T.Je] = 1, gg[T.fc] = 1, gg[T.xa] = 1, gg[T.hc] = 1, gg[T.ya] = 1, gg[T.hg] = 1, gg));
    T.hf = Object.freeze([T.ba, T.Hc, T.jc]);
    T.Ri = Object.freeze([].concat(T.hf));
    T.jf = Object.freeze([T.Aa, T.Nd, T.Vc, T.Rd, T.Ld]);
    T.Si = Object.freeze([].concat(T.jf));
    var hg = {};
    T.Fe = (hg[T.D] = "1", hg[T.R] = "2", hg);
    var jg = { hh: "CN", Fh: "CN-21" };
    var kg = {},
        lg = function(a, b) { kg[a] = kg[a] || [];
            kg[a][b] = !0 },
        mg = function(a) { for (var b = [], c = kg[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") },
        ng = function() { for (var a = [], b = kg.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c); return 0 < a.length ? a : void 0 };
    var og = function(a) { lg("GTM", a) };
    var pg = new function(a, b) { this.g = a;
        this.defaultValue = void 0 === b ? !1 : b }(1933);
    var rg = function() { var a = qg,
            b = "Gf"; if (a.Gf && a.hasOwnProperty(b)) return a.Gf; var c = new a;
        a.Gf = c;
        a.hasOwnProperty(b); return c };
    var qg = function() { var a = {};
        this.g = function() { var b = pg.g,
                c = pg.defaultValue; return null != a[b] ? a[b] : c };
        this.o = function() { a[pg.g] = !0 } };
    var sg = [];

    function tg() { var a = Qb("google_tag_data", {});
        a.ics || (a.ics = { entries: {}, set: ug, update: vg, addListener: wg, notifyListeners: xg, active: !1, usedDefault: !1, usedUpdate: !1, accessedDefault: !1, accessedAny: !1, wasSetLate: !1 }); return a.ics }

    function ug(a, b, c, d, e, f) {
        var g = tg();
        !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                k = h[a] || {},
                n = k.region,
                p = c && Fa(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === k.update),
                    r = { region: p, initial: "granted" === b, update: k.update, quiet: q };
                if ("" !== d || !1 !== k.initial) h[a] = r;
                q && m.setTimeout(function() {
                    h[a] ===
                        r && r.quiet && (r.quiet = !1, yg(a), xg(), lg("TAGGING", 2))
                }, f)
            }
        }
    }

    function vg(a, b) { var c = tg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0; if (void 0 != b) { var d = zg(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b; var g = zg(a);
            f.quiet ? (f.quiet = !1, yg(a)) : g !== d && yg(a) } }

    function wg(a, b) { sg.push({ yf: a, uj: b }) }

    function yg(a) { for (var b = 0; b < sg.length; ++b) { var c = sg[b];
            Ja(c.yf) && -1 !== c.yf.indexOf(a) && (c.Bh = !0) } }

    function xg(a) { for (var b = 0; b < sg.length; ++b) { var c = sg[b]; if (c.Bh) { c.Bh = !1; try { c.uj({ consentEventId: a }) } catch (d) {} } } }
    var zg = function(a) { var b = tg();
            b.accessedAny = !0; var c = b.entries[a] || {}; return void 0 !== c.update ? c.update : c.initial },
        Ag = function(a) { var b = tg();
            b.accessedDefault = !0; return (b.entries[a] || {}).initial },
        Bg = function(a) { var b = tg();
            b.accessedAny = !0; return !(b.entries[a] || {}).quiet },
        Cg = function() { if (!rg().g()) return !1; var a = tg();
            a.accessedAny = !0; return a.active },
        Dg = function() { var a = tg();
            a.accessedDefault = !0; return a.usedDefault },
        Eg = function(a, b) { tg().addListener(a, b) },
        Fg = function(a) { tg().notifyListeners(a) },
        Gg = function(a, b) {
            function c() { for (var e = 0; e < b.length; e++)
                    if (!Bg(b[e])) return !0;
                return !1 } if (c()) { var d = !1;
                Eg(b, function(e) { d || c() || (d = !0, a(e)) }) } else a({}) },
        Hg = function(a, b) {
            function c() { for (var f = [], g = 0; g < d.length; g++) { var h = d[g];!1 === zg(h) || e[h] || (f.push(h), e[h] = !0) } return f } var d = Fa(b) ? [b] : b,
                e = {};
            c().length !== d.length && Eg(d, function(f) { var g = c();
                0 < g.length && (f.yf = g, a(f)) }) };

    function Ig() {}

    function Jg() {};

    function Kg(a) { for (var b = [], c = 0; c < Lg.length; c++) { var d = a(Lg[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-" } return b.join("") }
    var Lg = [T.D, T.R],
        Mg = function(a) { var b = a[T.Ee];
            b && og(40); var c = a[T.ag];
            c && og(41); for (var d = Ja(b) ? b : [b], e = { Cc: 0 }; e.Cc < d.length; e = { Cc: e.Cc }, ++e.Cc) Pa(a, function(f) { return function(g, h) { if (g !== T.Ee && g !== T.ag) { var k = d[f.Cc],
                            n = jg.hh,
                            p = jg.Fh;
                        tg().set(g, h, k, n, p, c) } } }(e)) },
        Ng = 0,
        Og = function(a, b) { Pa(a, function(e, f) { tg().update(e, f) });
            Fg(b); var c = Xa(),
                d = c - Ng;
            Ng && 0 <= d && 1E3 > d && og(66);
            Ng = c },
        Pg = function(a) { var b = zg(a); return void 0 != b ? b : !0 },
        Qg = function() { return "G1" + Kg(zg) },
        Rg = function() { return "G1" + Kg(Ag) },
        Sg = function(a,
            b) { Eg(a, b) },
        Tg = function(a, b) { Hg(a, b) },
        Ug = function(a, b) { Gg(a, b) };
    var Wg = function(a) { return Vg ? H.querySelectorAll(a) : null },
        Xg = function(a, b) {
            if (!Vg) return null;
            if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!H.documentElement.contains(d)) return null;
            do { try { if (c.call(d, b)) return d } catch (e) { break }
                d = d.parentElement || d.parentNode } while (null !== d && 1 === d.nodeType);
            return null
        },
        Yg = !1;
    if (H.querySelectorAll) try { var Zg = H.querySelectorAll(":root");
        Zg && 1 == Zg.length && Zg[0] == H.documentElement && (Yg = !0) } catch (a) {}
    var Vg = Yg;
    var $g = function(a) { return null == a ? "" : Fa(a) ? Va(String(a)) : "e0" },
        bh = function(a) { return a.replace(ah, "") },
        dh = function(a) { return ch(a.replace(/\s/g, "")) },
        ch = function(a) { return Va(a.replace(eh, "").toLowerCase()) },
        gh = function(a) { a = a.replace(/[\s-()/.]/g, ""); "+" !== a.charAt(0) && (a = "+" + a); return fh.test(a) ? a : "e0" },
        ih = function(a) { var b = a.toLowerCase().split("@"); if (2 == b.length) { var c = b[0]; /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1]; if (hh.test(c)) return c } return "e0" },
        lh = function(a,
            b) { window.Promise || b([]);
            Promise.all(a.map(function(c) { return c.value && -1 !== jh.indexOf(c.name) ? kh(c.value).then(function(d) { c.value = d }) : Promise.resolve() })).then(function() { b(a) }).catch(function() { b([]) }) },
        kh = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (m.crypto && m.crypto.subtle) try {
                var b = mh(a);
                return m.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) { return String.fromCharCode(e) }).join("");
                    return m.btoa(d).replace(/\+/g, "-").replace(/\//g,
                        "_").replace(/=+$/, "")
                }).catch(function() { return "e2" })
            } catch (c) { return Promise.resolve("e2") } else return Promise.resolve("e1")
        },
        mh = function(a) { var b; if (m.TextEncoder) b = (new m.TextEncoder("utf-8")).encode(a);
            else { for (var c = [], d = 0; d < a.length; d++) { var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63)) }
                b = new Uint8Array(c) } return b },
        eh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        hh = /^\S+@\S+\.\S+$/,
        fh = /^\+\d{11,15}$/,
        ah = /[.~]/g,
        nh = {},
        oh = (nh.email = "em", nh.phone_number = "pn", nh.first_name = "fn", nh.last_name = "ln", nh.street = "sa", nh.city = "ct", nh.region = "rg", nh.country = "co", nh.postal_code = "pc", nh.error_code = "ec", nh),
        ph = function(a, b) {
            function c(n, p, q) { var r = n[p];
                Ja(r) || (r = [r]); for (var t = 0; t < r.length; ++t) { var u = $g(r[t]); "" !== u && f.push({ name: p, value: q(u), index: void 0 }) } }

            function d(n, p, q, r) { var t = $g(n[p]); "" !== t && f.push({ name: p, value: q(t), index: r }) }

            function e(n) { return function(p) { og(64); return n(p) } }
            var f = [];
            if ("https:" === m.location.protocol) {
                c(a, "email", ih);
                c(a, "phone_number", gh);
                c(a, "first_name", e(dh));
                c(a, "last_name", e(dh));
                var g = a.home_address || {};
                c(g, "street", e(ch));
                c(g, "city", e(ch));
                c(g, "postal_code", e(bh));
                c(g, "region", e(ch));
                c(g, "country", e(bh));
                var h = a.address || {};
                Ja(h) || (h = [h]);
                for (var k = 0; k < h.length; k++) d(h[k], "first_name", dh, k), d(h[k], "last_name", dh, k), d(h[k], "street", ch, k), d(h[k], "city", ch, k), d(h[k], "postal_code", bh, k), d(h[k],
                    "region", ch, k), d(h[k], "country", bh, k);
                lh(f, b)
            } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f)
        },
        qh = function(a, b) { ph(a, function(c) { for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) { var g = c[f].name,
                        h = c[f].value,
                        k = c[f].index,
                        n = oh[g];
                    n && h && (-1 === jh.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++) }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e) }) },
        rh = function(a) {
            if (m.Promise) try {
                return new Promise(function(b) {
                    qh(a,
                        function(c, d) { b({ ud: c, Sk: d }) })
                })
            } catch (b) {}
        },
        jh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var L = {},
        U = m.google_tag_manager = m.google_tag_manager || {},
        sh = Math.random();
    L.K = "G-VY3Y6182VG";
    L.Id = "";
    L.Zd = "2s0";
    L.ca = "dataLayer";
    L.$h = "ChEIgKX3kAYQ19GrrOjtm9XFARIlACRej6sH6KA477pdTX7SiX9wGWsl/LuM+yB6Ysmui9pY7OvemhoCQPE\x3d";
    var th = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 },
        Bh = { __paused: !0, __tg: !0 },
        Ch;
    for (Ch in th) th.hasOwnProperty(Ch) && (Bh[Ch] = !0);
    L.Ge = "www.googletagmanager.com";
    var Dh, Eh = L.Ge + "/gtm.js";
    Eh = L.Ge + "/gtag/js";
    Dh = Eh;
    var Fh = Sa("true"),
        Gh = null,
        Hh = null,
        Ih = "https://www.googletagmanager.com/a?id=" + L.K + "&cv=1",
        Jh = {},
        Kh = {},
        Lh = function() { var a = U.sequence || 1;
            U.sequence = a + 1; return a };
    L.Zh = "";
    var Mh = "";
    L.$d = Mh;
    var Nh = new Ma,
        Oh = {},
        Ph = {},
        Sh = { name: L.ca, set: function(a, b) { wc(eb(a, b), Oh);
                Qh() }, get: function(a) { return Rh(a, 2) }, reset: function() { Nh = new Ma;
                Oh = {};
                Qh() } },
        Rh = function(a, b) { return 2 != b ? Nh.get(a) : Th(a) },
        Th = function(a, b) { var c = a.split(".");
            b = b || []; for (var d = Oh, e = 0; e < c.length; e++) { if (null === d) return !1; if (void 0 === d) break;
                d = d[c[e]]; if (-1 !== b.indexOf(d)) return } return d },
        Uh = function(a, b) { Ph.hasOwnProperty(a) || (Nh.set(a, b), wc(eb(a, b), Oh), Qh()) },
        Vh = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) { var c = a[b],
                    d = Rh(c, 1); if (Ja(d) || vc(d)) d = wc(d);
                Ph[c] = d }
        },
        Qh = function(a) { Pa(Ph, function(b, c) { Nh.set(b, c);
                wc(eb(b, void 0), Oh);
                wc(eb(b, c), Oh);
                a && delete Ph[b] }) },
        Wh = function(a, b) { var c, d = 1 !== (void 0 === b ? 2 : b) ? Th(a) : Nh.get(a); "array" === tc(d) || "object" === tc(d) ? c = wc(d) : c = d; return c };
    var Xh, Yh = !1;

    function Zh() { Yh = !0;
        Xh = Xh || {} }
    var $h = function(a) { Yh || Zh(); return Xh[a] };
    var ai = function(a) {
        if (H.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
        var c = m.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) { var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f)) }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = m.getComputedStyle(d,
                null))
        }
        return !1
    };
    var bi = function() { var a = H.body,
                b = H.documentElement || a && a.parentElement,
                c, d; if (H.compatMode && "BackCompat" !== H.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else { var e = function(f, g) { return f && g ? Math.min(f, g) : Math.max(f, g) };
                og(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0) } return { width: d, height: c } },
        ci = function(a) {
            var b = bi(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var ji = /:[0-9]+$/,
        ki = function(a, b, c, d) { for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) { var h = f[g].split("="); if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) { var k = h.slice(1).join("="); if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                    e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " ")) } } return c ? e : void 0 },
        ni = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = li(a.protocol) || li(m.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                m.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || m.location.hostname).replace(ji, "").toLowerCase());
            return mi(a, b, c, d, e)
        },
        mi = function(a, b, c, d, e) {
            var f, g = li(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = oi(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(ji, "").toLowerCase();
                    if (c) { var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length)) }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ==
                        g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || lg("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = ki(f, e, !1, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        li = function(a) {
            return a ?
                a.replace(":", "").toLowerCase() : ""
        },
        oi = function(a) { var b = ""; if (a && a.href) { var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c) } return b },
        pi = function(a) { var b = H.createElement("a");
            a && (b.href = a); var c = b.pathname; "/" !== c[0] && (a || lg("TAGGING", 1), c = "/" + c); var d = b.hostname.replace(ji, ""); return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port } },
        qi = function(a) {
            function b(n) { var p = n.split("=")[0]; return 0 > d.indexOf(p) ? n : p + "=0" }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !=
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = pi(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var k = "" + f + g + h;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k
        };
    var ri = {};
    var ui = function(a) { if (0 == a.length) return null; var b;
            b = si(a, function(c) { return !ti.test(c.Ya) });
            b = si(b, function(c) { return "INPUT" === c.element.tagName.toUpperCase() });
            b = si(b, function(c) { return !ai(c.element) }); return b[0] },
        si = function(a, b) { if (1 >= a.length) return a; var c = a.filter(b); return 0 == c.length ? a : c },
        vi = function(a) {
            var b;
            if (a === H.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e =
                                            g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = vi(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        wi = !0,
        xi = !1;
    ri.Wh = "true";
    var yi = function(a) {
            if ("false" === ri.Wh || !wi) return !1;
            if (xi) return !0;
            var b = $h("AW-" +
                a);
            return !!b && !!b.preAutoPii
        },
        zi = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        Ai = new RegExp(/@(gmail|googlemail)\./i),
        ti = new RegExp(/support|noreply/i),
        Bi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "),
        Ci = ["BR"],
        Di = {},
        Ei = function(a) {
            a = a || { ue: !0, ve: !0 };
            a.xb = a.xb || { email: !0, phone: !0, Zg: !0 };
            var b, c = a,
                d = !!c.ue + "." + !!c.ve;
            c && c.jd && c.jd.length && (d += "." + c.jd.join("."));
            c && c.xb && (d += "." + c.xb.email + "." + c.xb.phone + "." + c.xb.Zg);
            b = d;
            var e = Di[b];
            if (e && 200 > Xa() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = H.body;
            if (h) { for (var k = h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) { var p = k[n]; if (!(0 <= Bi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) { for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                            if (!(0 <= Ci.indexOf(p.children[r].tagName.toUpperCase()))) { q = !0; break }
                        q || g.push(p) } }
                f = { elements: g, status: 1E4 < k.length ? "2" : "1" } } else f = { elements: g, status: "4" };
            var t = f,
                u = t.status,
                v;
            if (a.xb && a.xb.email) {
                for (var y = t.elements, x = [], w = 0; w < y.length; w++) {
                    var A = y[w],
                        B = A.textContent;
                    "INPUT" ===
                    A.tagName.toUpperCase() && A.value && (B = A.value);
                    if (B) { var D = B.match(zi); if (D) { var C = D[0],
                                E; if (m.location) { var F = mi(m.location, "host", !0);
                                E = 0 <= C.toLowerCase().indexOf(F) } else E = !1;
                            E || x.push({ element: A, Ya: C }) } }
                }
                var Q;
                var K = a && a.jd;
                if (K && 0 !== K.length) { for (var J = [], R = 0; R < x.length; R++) { for (var N = !0, M = 0; M < K.length; M++) { var V = K[M]; if (V && Xg(x[R].element, V)) { N = !1; break } }
                        N && J.push(x[R]) }
                    Q = J } else Q = x;
                v = ui(Q);
                10 < x.length && (u = "3")
            }
            var ba = [];
            if (v) {
                var S = v.element,
                    sa = { Ya: v.Ya, tagName: S.tagName, type: 1 };
                a.ue && (sa.querySelector =
                    vi(S));
                a.ve && (sa.isVisible = !ai(S));
                ba.push(sa)
            }
            var Ga = { elements: ba, status: u };
            Di[b] = { timestamp: Xa(), result: Ga };
            return Ga
        },
        Fi = function(a) { return a.tagName + ":" + a.isVisible + ":" + a.Ya.length + ":" + Ai.test(a.Ya) };
    var Gi = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) { e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, ""); for (var g = e.split(","), h = 0; h < g.length; h++) { var k = g[h].trim(); if (k) { if (0 === k.indexOf("dataLayer.")) f = Rh(k.substring(10));
                            else { var n = k.split(".");
                                f = m[n.shift()]; for (var p = 0; p < n.length; p++) f = f && f[n[p]] } if (void 0 !== f) break } } } else if ("css_selector" === d && Vg) {
                    var q = Wg(e);
                    if (q && 0 < q.length) {
                        f = [];
                        for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(bc(q[r]) ||
                            Va(q[r].value));
                        f = 1 === f.length ? f[0] : f
                    }
                }
                f && (a[b] = f)
            }
        },
        Hi = function(a) { if (a) { var b = {};
                Gi(b, "email", a.email);
                Gi(b, "phone_number", a.phone);
                b.address = []; for (var c = a.name_and_address || [], d = 0; d < c.length; d++) { var e = {};
                    Gi(e, "first_name", c[d].first_name);
                    Gi(e, "last_name", c[d].last_name);
                    Gi(e, "street", c[d].street);
                    Gi(e, "city", c[d].city);
                    Gi(e, "region", c[d].region);
                    Gi(e, "country", c[d].country);
                    Gi(e, "postal_code", c[d].postal_code);
                    b.address.push(e) } return b } },
        Ii = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return Hi(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) { var d = Ei({ ue: !1, ve: !1, jd: c.exclude_element_selectors, xb: { email: !!c.email, phone: !!c.phone, Zg: !!c.address } }).elements,
                            e = {}; if (0 < d.length)
                            for (var f = 0; f < d.length; f++) { var g = d[f]; if (1 === g.type) { e.email = g.Ya; break } }
                        b = e } else b = void 0;
                    return b
            }
        },
        Ji = function(a) { switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var; return void 0 !== b ? b : m.enhanced_conversion_data;
                case "automatic":
                    return Hi(a[T.mg]) } };
    var Ki = {},
        Li = function(a, b) { if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
            void 0 === Ki[a] && (Ki[a] = Math.floor(Math.random() * b)); return Ki[a] };
    var Mi = function(a) { var b = 1,
            c, d, e; if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b; return b };
    var Ni = function(a, b, c) { for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) { var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, ""); if (h && h == a) { var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k) } } return d };
    var Oi = function(a, b) { var c = function() {};
            c.prototype = a.prototype; var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1)); return d },
        Pi = function(a) { var b = a; return function() { if (b) { var c = b;
                    b = null;
                    c() } } };

    function Qi(a) { return "null" !== a.origin };
    var Ti = function(a, b, c, d) { return Ri(d) ? Ni(a, String(b || Si()), c) : [] },
        Wi = function(a, b, c, d, e) { if (Ri(e)) { var f = Ui(a, d, e); if (1 === f.length) return f[0].id; if (0 !== f.length) { f = Vi(f, function(g) { return g.je }, b); if (1 === f.length) return f[0].id;
                    f = Vi(f, function(g) { return g.vd }, c); return f[0] ? f[0].id : void 0 } } };

    function Xi(a, b, c, d) { var e = Si(),
            f = window;
        Qi(f) && (f.document.cookie = a); var g = Si(); return e != g || void 0 != c && 0 <= Ti(b, g, !1, d).indexOf(c) }
    var aj = function(a, b, c, d) {
            function e(y, x, w) { if (null == w) return delete h[x], y;
                h[x] = w; return y + "; " + x + "=" + w }

            function f(y, x) { if (null == x) return delete h[x], y;
                h[x] = !0; return y + "; " + x }
            if (!Ri(c.lb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Yi(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            g = e(g, "expires", k);
            g = e(g, "max-age", c.Tj);
            g = e(g, "samesite",
                c.nk);
            c.qk && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) { for (var p = Zi(), q = void 0, r = !1, t = 0; t < p.length; ++t) { var u = "none" !== p[t] ? p[t] : void 0,
                        v = e(g, "domain", u);
                    v = f(v, c.flags); try { d && d(a, h) } catch (y) { q = y; continue }
                    r = !0; if (!$i(u, c.path) && Xi(v, a, b, c.lb)) return 0 } if (q && !r) throw q; return 1 }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return $i(n, c.path) ? 1 : Xi(g, a, b, c.lb) ? 0 : 1
        },
        bj = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return aj(a,
                b, c)
        };

    function Vi(a, b, c) { for (var d = [], e = [], f, g = 0; g < a.length; g++) { var h = a[g],
                k = b(h);
            k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h) } return 0 < d.length ? d : e }

    function Ui(a, b, c) { for (var d = [], e = Ti(a, void 0, void 0, c), f = 0; f < e.length; f++) { var g = e[f].split("."),
                h = g.shift(); if (!b || -1 !== b.indexOf(h)) { var k = g.shift();
                k && (k = k.split("-"), d.push({ id: g.join("."), je: 1 * k[0] || 1, vd: 1 * k[1] || 1 })) } } return d }
    var Yi = function(a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a },
        cj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        dj = /(^|\.)doubleclick\.net$/i,
        $i = function(a, b) { return dj.test(window.document.location.hostname) || "/" === b && cj.test(a) },
        Si = function() { return Qi(window) ? window.document.cookie : "" },
        Zi = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            dj.test(e) || cj.test(e) || a.push("none");
            return a
        },
        Ri = function(a) { if (!rg().g() || !a || !Cg()) return !0; if (!Bg(a)) return !1; var b = zg(a); return null == b ? !0 : !!b };
    var ej = function(a) { var b = Math.round(2147483647 * Math.random()); return a ? String(b ^ Mi(a) & 2147483647) : String(b) },
        fj = function(a) { return [ej(a), Math.round(Xa() / 1E3)].join(".") },
        ij = function(a, b, c, d, e) { var f = gj(b); return Wi(a, f, hj(c), d, e) },
        jj = function(a, b, c, d) { var e = "" + gj(c),
                f = hj(d);
            1 < f && (e += "-" + f); return [b, e, a].join(".") },
        gj = function(a) { if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a; return a.split(".").length },
        hj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function kj(a, b, c) { var d, e = Number(null != a.Vb ? a.Vb : void 0);
        0 !== e && (d = new Date((b || Xa()) + 1E3 * (e || 7776E3))); return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d } };
    var lj = ["1"],
        mj = {},
        nj = {},
        rj = function(a, b) { b = void 0 === b ? !0 : b; var c = oj(a.prefix); if (!mj[c] && !pj(c, a.path, a.domain) && b) { var d = oj(a.prefix),
                    e = fj(); if (0 === qj(d, e, a)) { var f = Qb("google_tag_data", {});
                    f._gcl_au ? lg("GTM", 57) : f._gcl_au = e }
                pj(c, a.path, a.domain) } };

    function qj(a, b, c, d) { var e = jj(b, "1", c.domain, c.path),
            f = kj(c, d);
        f.lb = "ad_storage"; return bj(a, e, f) }

    function pj(a, b, c) { var d = ij(a, b, c, lj, "ad_storage"); if (!d) return !1; var e = d.split(".");
        5 === e.length ? (mj[a] = e.slice(0, 2).join("."), nj[a] = { id: e.slice(2, 4).join("."), vh: Number(e[4]) || 0 }) : 3 === e.length ? nj[a] = { id: e.slice(0, 2).join("."), vh: Number(e[2]) || 0 } : mj[a] = d; return !0 }

    function oj(a) { return (a || "_gcl") + "_au" };
    var sj = function(a) { for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) { var f = c[e].match(d);
            f && b.push({ Yf: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 }) }
        b.sort(function(g, h) { return h.timestamp - g.timestamp }); return b };

    function tj(a, b) { var c = sj(a),
            d = {}; if (!c || !c.length) return d; for (var e = 0; e < c.length; e++) { var f = c[e].value.split("."); if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) { d[c[e].Yf] || (d[c[e].Yf] = []); var g = { version: f[0], timestamp: 1E3 * Number(f[1]), Da: f[2] };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Yf].push(g) } } return d };

    function uj() { for (var a = vj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c; return b }

    function wj() { var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_"; return a + "." }
    var vj, xj;

    function yj(a) {
        function b(k) { for (; d < a.length;) { var n = a.charAt(d++),
                    p = xj[n]; if (null != p) return p; if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n); } return k }
        vj = vj || wj();
        xj = xj || uj(); for (var c = "", d = 0;;) { var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64); if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h))) } };
    var zj;
    var Dj = function() { var a = Aj,
                b = Bj,
                c = Cj(),
                d = function(g) { a(g.target || g.srcElement || {}) },
                e = function(g) { b(g.target || g.srcElement || {}) }; if (!c.init) { Zb(H, "mousedown", d);
                Zb(H, "keyup", d);
                Zb(H, "submit", e); var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() { b(this);
                    f.call(this) };
                c.init = !0 } },
        Ej = function(a, b, c, d, e) { var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
            Cj().decorators.push(f) },
        Fj = function(a, b, c) {
            for (var d = Cj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: { var k = g.domains,
                        n = a,
                        p = !!g.sameHost; if (k && (p || n !== H.location.hostname))
                        for (var q = 0; q < k.length; q++)
                            if (k[q] instanceof RegExp) { if (k[q].test(n)) { h = !0; break a } } else if (0 <= n.indexOf(k[q]) || p && 0 <= k[q].indexOf(n)) { h = !0; break a }
                    h = !1 }
                if (h) { var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && ab(e, g.callback()) }
            }
            return e
        };

    function Cj() { var a = Qb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = { decorators: [] }, a.gl = b); return b };
    var Gj = /(.*?)\*(.*?)\*(.*)/,
        Hj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ij = /^(?:www\.|m\.|amp\.)+/,
        Jj = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Kj(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)") }
    var Mj = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c]; if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) { b.push(c); var e = b,
                        f = e.push,
                        g, h = String(d);
                    vj = vj || wj();
                    xj = xj || uj(); for (var k = [], n = 0; n < h.length; n += 3) { var p = n + 1 < h.length,
                            q = n + 2 < h.length,
                            r = h.charCodeAt(n),
                            t = p ? h.charCodeAt(n + 1) : 0,
                            u = q ? h.charCodeAt(n + 2) : 0,
                            v = r >> 2,
                            y = (r & 3) << 4 | t >> 4,
                            x = (t & 15) << 2 | u >> 6,
                            w = u & 63;
                        q || (w = 64, p || (x = 64));
                        k.push(vj[v], vj[y], vj[x], vj[w]) }
                    g = k.join("");
                    f.call(e, g) } }
        var A = b.join("*");
        return ["1", Lj(A),
            A
        ].join("*")
    };

    function Lj(a, b) { var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Ob.userLanguage || Ob.language, Math.floor(Xa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d; if (!(d = zj)) { for (var e = Array(256), f = 0; 256 > f; f++) { for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g }
            d = e }
        zj = d; for (var k = 4294967295, n = 0; n < c.length; n++) k = k >>> 8 ^ zj[(k ^ c.charCodeAt(n)) & 255]; return ((k ^ -1) >>> 0).toString(36) }

    function Nj() { return function(a) { var b = pi(m.location.href),
                c = b.search.replace("?", ""),
                d = ki(c, "_gl", !1, !0) || "";
            a.query = Oj(d) || {}; var e = ni(b, "fragment").match(Kj("_gl"));
            a.fragment = Oj(e && e[3] || "") || {} } }

    function Pj(a, b) { var c = Kj(a).exec(b),
            d = b; if (c) { var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f) } return d }
    var Qj = function(a, b) { b || (b = "_gl"); var c = Jj.exec(a); if (!c) return ""; var d = c[1],
                e = Pj(b, (c[2] || "").slice(1)),
                f = Pj(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f); return "" + d + e + f },
        Rj = function(a) { var b = Nj(),
                c = Cj();
            c.data || (c.data = { query: {}, fragment: {} }, b(c.data)); var d = {},
                e = c.data;
            e && (ab(d, e.query), a && ab(d, e.fragment)); return d },
        Oj = function(a) {
            try { var b = Sj(a, 3); if (void 0 !== b) { for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) { var f = d[e],
                            g = yj(d[e + 1]);
                        c[f] = g }
                    lg("TAGGING", 6); return c } } catch (h) {
                lg("TAGGING",
                    8)
            }
        };

    function Sj(a, b) { if (a) { var c;
            a: { for (var d = a, e = 0; 3 > e; ++e) { var f = Gj.exec(d); if (f) { c = f; break a }
                    d = decodeURIComponent(d) }
                c = void 0 }
            var g = c; if (g && "1" === g[1]) { var h = g[3],
                    k;
                a: { for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Lj(h, p)) { k = !0; break a }
                    k = !1 }
                if (k) return h;
                lg("TAGGING", 7) } } }

    function Tj(a, b, c, d) {
        function e(p) { p = Pj(a, p); var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&"); return p + n }
        d = void 0 === d ? !1 : d; var f = Jj.exec(c); if (!f) return ""; var g = f[1],
            h = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1)); return "" + g + h + k }

    function Uj(a, b) { var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Fj(b, 1, c),
            e = Fj(b, 2, c),
            f = Fj(b, 3, c); if (bb(d)) { var g = Mj(d);
            c ? Vj("_gl", g, a) : Wj("_gl", g, a, !1) } if (!c && bb(e)) { var h = Mj(e);
            Wj("_gl", h, a, !0) } for (var k in f)
            if (f.hasOwnProperty(k)) a: { var n = k,
                    p = f[k],
                    q = a; if (q.tagName) { if ("a" === q.tagName.toLowerCase()) { Wj(n, p, q, void 0); break a } if ("form" === q.tagName.toLowerCase()) { Vj(n, p, q); break a } } "string" == typeof q && Tj(n, p, q, void 0) } }

    function Wj(a, b, c, d) { if (c.href) { var e = Tj(a, b, c.href, void 0 === d ? !1 : d);
            Ab.test(e) && (c.href = e) } }

    function Vj(a, b, c) { if (c && c.action) { var d = (c.method || "").toLowerCase(); if ("get" === d) { for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) { var h = e[g]; if (h.name === a) { h.setAttribute("value", b);
                        f = !0; break } } if (!f) { var k = H.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k) } } else if ("post" === d) { var n = Tj(a, b, c.action);
                Ab.test(n) && (c.action = n) } } }

    function Aj(a) { try { var b;
            a: { for (var c = a, d = 100; c && 0 < d;) { if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a }
                    c = c.parentNode;
                    d-- }
                b = null }
            var e = b; if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || Uj(e, e.hostname) } } catch (g) {} }

    function Bj(a) { try { if (a.action) { var b = ni(pi(a.action), "host");
                Uj(a, b) } } catch (c) {} }
    var Xj = function(a, b, c, d) { Dj();
            Ej(a, b, "fragment" === c ? 2 : 1, !!d, !1) },
        Yj = function(a, b) { Dj();
            Ej(a, [mi(m.location, "host", !0)], b, !0, !0) },
        Zj = function() {
            var a = H.location.hostname,
                b = Hj.exec(H.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) { var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g) } else if (d) { if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-") }
            var h = a.replace(Ij, ""),
                k = e.replace(Ij, ""),
                n;
            if (!(n = h === k)) {
                var p = "." + k;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        ak = function(a, b) { return !1 === a ? !1 : a || b || Zj() };
    var bk = {};
    var ck = /^\w+$/,
        dk = /^[\w-]+$/,
        ek = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
        fk = function() { if (!rg().g() || !Cg()) return !0; var a = zg("ad_storage"); return null == a ? !0 : !!a },
        gk = function(a, b) { Bg("ad_storage") ? fk() ? a() : Hg(a, "ad_storage") : b ? lg("TAGGING", 3) : Gg(function() { gk(a, !0) }, ["ad_storage"]) },
        ik = function(a) { return hk(a).map(function(b) { return b.Da }) },
        hk = function(a) {
            var b = [];
            if (!Qi(m) || !H.cookie) return b;
            var c = Ti(a, H.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = { Fd: d.Fd }, e++) { var f = jk(c[e]); if (null != f) { var g = f,
                        h = g.version;
                    d.Fd = g.Da; var k = g.timestamp,
                        n = g.labels,
                        p = Ka(b, function(q) { return function(r) { return r.Da === q.Fd } }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = kk(p.labels, n || [])) : b.push({ version: h, Da: d.Fd, timestamp: k, labels: n }) } }
            b.sort(function(q, r) { return r.timestamp - q.timestamp });
            return lk(b)
        };

    function kk(a, b) { for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]); for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]); return d }

    function mk(a) { return a && "string" == typeof a && a.match(ck) ? a : "_gcl" }
    var ok = function() { var a = pi(m.location.href),
                b = ni(a, "query", !1, void 0, "gclid"),
                c = ni(a, "query", !1, void 0, "gclsrc"),
                d = ni(a, "query", !1, void 0, "wbraid"),
                e = ni(a, "query", !1, void 0, "dclid"); if (!b || !c || !d) { var f = a.hash.replace("#", "");
                b = b || ki(f, "gclid", !1, void 0);
                c = c || ki(f, "gclsrc", !1, void 0);
                d = d || ki(f, "wbraid", !1, void 0) } return nk(b, c, e, d) },
        nk = function(a, b, c, d) {
            var e = {},
                f = function(g, h) { e[h] || (e[h] = []);
                    e[h].push(g) };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && dk.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !==
                a && a.match(dk)) switch (b) {
                case void 0:
                    f(a, "aw"); break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc"); break;
                case "ds":
                    f(a, "dc"); break;
                case "3p.ds":
                    f(a, "dc"); break;
                case "gf":
                    f(a, "gf"); break;
                case "ha":
                    f(a, "ha") }
            c && f(c, "dc");
            return e
        },
        qk = function(a) { var b = ok();
            gk(function() { pk(b, !1, a) }) };

    function pk(a, b, c, d, e) {
        function f(y, x) { var w = rk(y, g);
            w && (bj(w, x, h), k = !0) }
        c = c || {};
        e = e || [];
        var g = mk(c.prefix);
        d = d || Xa();
        var h = kj(c, d, !0);
        h.lb = "ad_storage";
        var k = !1,
            n = Math.round(d / 1E3),
            p = function(y) { var x = ["GCL", n, y];
                0 < e.length && x.push(e.join(".")); return x.join(".") };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == bk.enable_gbraid_cookie_write ? 0 : bk.enable_gbraid_cookie_write) && !k && a.gb) {
            var q = a.gb[0],
                r = rk("gb",
                    g),
                t = !1;
            if (!b)
                for (var u = hk(r), v = 0; v < u.length; v++) u[v].Da === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var tk = function(a, b) { var c = Rj(!0);
            gk(function() { for (var d = mk(b.prefix), e = 0; e < a.length; ++e) { var f = a[e]; if (void 0 !== ek[f]) { var g = rk(f, d),
                            h = c[g]; if (h) { var k = Math.min(sk(h), Xa()),
                                n;
                            b: { var p = k; if (Qi(m))
                                    for (var q = Ti(g, H.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (sk(q[r]) > p) { n = !0; break b }
                                n = !1 }
                            if (!n) { var t = kj(b, k, !0);
                                t.lb = "ad_storage";
                                bj(g, h, t) } } } }
                pk(nk(c.gclid, c.gclsrc), !1, b) }) },
        rk = function(a, b) { var c = ek[a]; if (void 0 !== c) return b + c },
        sk = function(a) {
            return 0 !== uk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function jk(a) { var b = uk(a.split(".")); return 0 === b.length ? null : { version: b[0], Da: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3) } }

    function uk(a) { return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !dk.test(a[2]) ? [] : a }
    var vk = function(a, b, c, d, e) { if (Ja(b) && Qi(m)) { var f = mk(e),
                    g = function() { for (var h = {}, k = 0; k < a.length; ++k) { var n = rk(a[k], f); if (n) { var p = Ti(n, H.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1]) } } return h };
                gk(function() { Xj(g, b, c, d) }) } },
        lk = function(a) { return a.filter(function(b) { return dk.test(b.Da) }) },
        wk = function(a, b) {
            if (Qi(m)) {
                for (var c = mk(b.prefix), d = {}, e = 0; e < a.length; e++) ek[a[e]] && (d[a[e]] = ek[a[e]]);
                gk(function() {
                    Pa(d, function(f, g) {
                        var h = Ti(c + g, H.cookie, void 0, "ad_storage");
                        h.sort(function(t,
                            u) { return sk(u) - sk(t) });
                        if (h.length) { var k = h[0],
                                n = sk(k),
                                p = 0 !== uk(k.split(".")).length ? k.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== uk(k.split(".")).length ? k.split(".")[2] : void 0;
                            q[f] = [r];
                            pk(q, !0, b, n, p) }
                    })
                })
            }
        };

    function xk(a, b) { for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1 }
    var yk = function(a) {
        function b(e, f, g) { g && (e[f] = g) } if (Cg()) { var c = ok(); if (xk(c, a)) { var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Yj(function() { return d }, 3);
                Yj(function() { var e = {}; return e._up = "1", e }, 1) } } };

    function zk(a, b) { var c = mk(b),
            d = rk(a, c); if (!d) return 0; for (var e = hk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp); return f }

    function Ak(a) { var b = 0,
            c; for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp)); return b };
    var Wk = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Xk = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        Yk = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        ll = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var ml = function() { var a = !1;
            a = !0; return a },
        ol = function(a) {
            var b = Rh("gtm.allowlist") || Rh("gtm.whitelist");
            b && og(9);
            ml() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && cb(Ua(b), Xk),
                d = Rh("gtm.blocklist") ||
                Rh("gtm.blacklist");
            d || (d = Rh("tagTypeBlacklist")) && og(3);
            d ? og(8) : d = [];
            nl() && (d = Ua(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ua(d).indexOf("google") && og(2);
            var e = d && cb(Ua(d), Yk),
                f = {};
            return function(g) {
                var h = g && g[Pd.Jb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var k = Kh[h] || [],
                    n = a(h, k);
                if (b) {
                    var p;
                    if (p = n) a: { if (0 > c.indexOf(h))
                            if (k && 0 < k.length)
                                for (var q = 0; q < k.length; q++) { if (0 > c.indexOf(k[q])) { og(11);
                                        p = !1; break a } } else { p = !1; break a }
                            p = !0 }
                    n = p
                }
                var r = !1;
                if (d) { var t = 0 <= e.indexOf(h); if (t) r = t;
                    else { var u = Na(e, k || []);
                        u && og(10);
                        r = u } }
                var v = !n || r;
                v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Na(e, ll));
                return f[h] = v
            }
        },
        nl = function() { return Wk.test(m.location && m.location.hostname) };
    var pl = !1,
        ql = 0,
        rl = [];

    function sl(a) { if (!pl) { var b = H.createEventObject,
                c = "complete" == H.readyState,
                d = "interactive" == H.readyState; if (!a || "readystatechange" != a.type || c || !b && d) { pl = !0; for (var e = 0; e < rl.length; e++) I(rl[e]) }
            rl.push = function() { for (var f = 0; f < arguments.length; f++) I(arguments[f]); return 0 } } }

    function tl() { if (!pl && 140 > ql) { ql++; try { H.documentElement.doScroll("left"), sl() } catch (a) { m.setTimeout(tl, 50) } } }
    var ul = function(a) { pl ? a() : rl.push(a) };
    var xl = function(a, b) { this.g = !1;
            this.C = [];
            this.I = { tags: [] };
            this.P = !1;
            this.o = this.s = 0;
            wl(this, a, b) },
        yl = function(a, b, c, d) { if (Bh.hasOwnProperty(b) || "__zone" === b) return -1; var e = {};
            vc(d) && (e = wc(d, e));
            e.id = c;
            e.status = "timeout"; return a.I.tags.push(e) - 1 },
        zl = function(a, b, c, d) { var e = a.I.tags[b];
            e && (e.status = c, e.executionTime = d) },
        Al = function(a) { if (!a.g) { for (var b = a.C, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.C.length = 0 } },
        wl = function(a, b, c) { Ea(b) && a.ce(b);
            c && m.setTimeout(function() { return Al(a) }, Number(c)) };
    xl.prototype.ce = function(a) { var b = this,
            c = Za(function() { return I(function() { a(L.K, b.I) }) });
        this.g ? c() : this.C.push(c) };
    var Bl = function(a) { a.s++; return Za(function() { a.o++;
            a.P && a.o >= a.s && Al(a) }) };
    var Cl = function() {
            function a(d) { return !Ha(d) || 0 > d ? 0 : d } if (!U._li && m.performance && m.performance.timing) { var b = m.performance.timing.navigationStart,
                    c = Ha(Sh.get("gtm.start")) ? Sh.get("gtm.start") : 0;
                U._li = { cst: a(c - b), cbt: a(Hh - b) } } },
        Dl = function(a) { m.performance && m.performance.mark(L.K + "_" + a + "_start") },
        El = function(a) {
            if (m.performance) {
                var b = L.K + "_" + a + "_start",
                    c = L.K + "_" + a + "_duration";
                m.performance.measure(c, b);
                var d = m.performance.getEntriesByName(c)[0];
                m.performance.clearMarks(b);
                m.performance.clearMeasures(c);
                var e = U._p || {};
                void 0 === e[a] && (e[a] = d.duration, U._p = e);
                return d.duration
            }
        },
        Fl = function() { if (m.performance && m.performance.now) { var a = U._p || {};
                a.PAGEVIEW = m.performance.now();
                U._p = a } };
    var Gl = {},
        Hl = function() { return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject] },
        Il = !1;

    function Ll() { return m.GoogleAnalyticsObject || "ga" }
    var Ml = function(a) {},
        Nl = function(a, b) {
            return function() {
                var c = Hl(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        k && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Ul = function(a) {},
        Yl = function(a) {},
        Zl =
        function() { return "&tc=" + qe.filter(function(a) { return a }).length },
        bm = function() { 2022 <= $l().length && am() },
        cm = function(a) { return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*" },
        em = function() { dm || (dm = m.setTimeout(am, 500)) },
        am = function() {
            dm && (m.clearTimeout(dm), dm = void 0);
            if (void 0 !== fm && (!gm[fm] || hm || im))
                if (jm[fm] || km.Lj() || 0 >= lm--) og(1), jm[fm] = !0;
                else {
                    km.ik();
                    var a = $l(!0);
                    Yb(a);
                    gm[fm] = !0;
                    mm = nm = om = pm = im = hm = ""
                }
        },
        $l = function(a) { var b = fm; if (void 0 === b) return ""; var c = mg("GTM"),
                d = mg("TAGGING"); return [qm, gm[b] ? "" : "&es=1", rm[b], Ul(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Zl(), hm, im, pm, om, Yl(a), nm, mm, "&z=0"].join("") },
        tm = function() { qm = sm() },
        sm = function() { return [Ih, "&v=3&t=t", "&pid=" + La(), "&rv=" + L.Zd].join("") },
        Xl = ["L", "S", "Y"],
        Tl = ["S", "E"],
        um = { sampleRate: "0.005000", Th: "", Sh: Number("5") },
        vm = 0 <= H.location.search.indexOf("?gtm_latency=") ||
        0 <= H.location.search.indexOf("&gtm_latency="),
        wm;
    if (!(wm = vm)) { var xm = Math.random(),
            ym = um.sampleRate;
        wm = xm < ym }
    var zm = wm,
        Am = { label: L.K + " Container", children: [{ label: "Initialization", children: [] }] },
        qm = sm(),
        gm = {},
        hm = "",
        im = "",
        nm = "",
        om = "",
        mm = "",
        Wl = {},
        Vl = !1,
        Sl = {},
        Bm = {},
        pm = "",
        fm = void 0,
        rm = {},
        jm = {},
        dm = void 0,
        Cm = 5;
    0 < um.Sh && (Cm = um.Sh);
    var km = function(a, b) {
            for (var c =
                    0, d = [], e = 0; e < a; ++e) d.push(0);
            return { Lj: function() { return c < a ? !1 : Xa() - d[c % a] < b }, ik: function() { var f = c++ % a;
                    d[f] = Xa() } }
        }(Cm, 1E3),
        lm = 1E3,
        Em = function(a, b) { if (zm && !jm[a] && fm !== a) { am();
                fm = a;
                nm = hm = "";
                rm[a] = "&e=" + cm(b) + "&eid=" + a;
                em(); } },
        Fm = function(a,
            b, c, d) {
            if (zm && b) {
                var e, f = String(b[Pd.Jb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!jm[a]) {
                    a !== fm && (am(), fm = a);
                    hm = hm ? hm + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h) throw Error("Error: No function name given for function call.");
                    var k = (se[h] ? "1" : "2") + e;
                    nm = nm ? nm + "." + k : "&ti=" + k;
                    em();
                    bm()
                }
            }
        };
    var Mm = function(a, b, c) { if (zm && !jm[a]) { a !== fm && (am(), fm = a); var d = c + b;
                im = im ? im + "." + d : "&epr=" + d;
                em();
                bm() } },
        Nm = function(a,
            b, c) {};

    function Om(a, b, c, d) { var e = qe[a],
            f = Pm(a, b, c, d); if (!f) return null; var g = ye(e[Pd.Pg], c, []); if (g && g.length) { var h = g[0];
            f = Om(h.index, { onSuccess: f, onFailure: 1 === h.lh ? b.terminate : f, terminate: b.terminate }, c, d) } return f }

    function Pm(a, b, c, d) {
        function e() {
            if (f[Pd.Oi]) h();
            else {
                var y = ze(f, c, []);
                var x = y[Pd.Yh];
                if (null != x)
                    for (var w = 0; w < x.length; w++)
                        if (!Pg(x[w])) { h(); return }
                var A = yl(c.Mb, String(f[Pd.Jb]), Number(f[Pd.Rg]), y[Pd.Pi]),
                    B = !1;
                y.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var E = Xa() - C;
                        Fm(c.id, qe[a], "5", E);
                        zl(c.Mb, A, "success",
                            E);
                        g()
                    }
                };
                y.vtp_gtmOnFailure = function() { if (!B) { B = !0; var E = Xa() - C;
                        Fm(c.id, qe[a], "6", E);
                        zl(c.Mb, A, "failure", E);
                        h() } };
                y.vtp_gtmTagId = f.tag_id;
                y.vtp_gtmEventId = c.id;
                Fm(c.id, f, "1");
                var D = function() { var E = Xa() - C;
                    Fm(c.id, f, "7", E);
                    zl(c.Mb, A, "exception", E);
                    B || (B = !0, h()) };
                var C = Xa();
                try { xe(y, { event: c, index: a, type: 1 }) } catch (E) { D(E) }
            }
        }
        var f = qe[a],
            g = b.onSuccess,
            h = b.onFailure,
            k = b.terminate;
        if (c.If(f)) return null;
        var n = ye(f[Pd.Sg], c, []);
        if (n && n.length) { var p = n[0],
                q = Om(p.index, { onSuccess: g, onFailure: h, terminate: k }, c, d); if (!q) return null;
            g = q;
            h = 2 === p.lh ? k : q }
        if (f[Pd.Jg] || f[Pd.Ti]) {
            var r =
                f[Pd.Jg] ? re : c.yk,
                t = g,
                u = h;
            if (!r[a]) { e = Za(e); var v = Qm(a, r, e);
                g = v.onSuccess;
                h = v.onFailure }
            return function() { r[a](t, u) }
        }
        return e
    }

    function Qm(a, b, c) { var d = [],
            e = [];
        b[a] = Rm(d, e, c); return { onSuccess: function() { b[a] = Sm; for (var f = 0; f < d.length; f++) d[f]() }, onFailure: function() { b[a] = Tm; for (var f = 0; f < e.length; f++) e[f]() } } }

    function Rm(a, b, c) { return function(d, e) { a.push(d);
            b.push(e);
            c() } }

    function Sm(a) { a() }

    function Tm(a, b) { b() };

    function Um(a, b) { if (a) { var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c); "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1)); return pi("" + c + b).href } }

    function Vm(a, b) { return Wm() ? Um(a, b) : void 0 }

    function Wm() { var a = !1; return a }

    function Xm() { return !!L.$d && "SGTM_TOKEN" !== L.$d.replaceAll("@@", "") };
    var Ym = {},
        Zm = Object.freeze((Ym[T.Ib] = !0, Ym[T.vc] = !0, Ym)),
        $m = {},
        an = Object.freeze(($m[T.ma] = !0, $m)),
        bn = {},
        cn = 0 <= H.location.search.indexOf("?gtm_diagnostics=") || 0 <= H.location.search.indexOf("&gtm_diagnostics="),
        en = function(a, b, c) {};

    function fn(a, b) { var c = {},
            d; for (d in b) b.hasOwnProperty(d) && (c[d] = !0); for (var e in a) a.hasOwnProperty(e) && (c[e] = !0); return c }

    function dn(a, b, c, d) { c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d; if (a === b) return []; var e = function(q, r) { var t = r[q]; return void 0 === t ? an[q] : t },
            f; for (f in fn(a, b))
            if (!Zm[f]) { var g = (d ? d + "." : "") + f,
                    h = e(f, a),
                    k = e(f, b),
                    n = "object" === tc(h) || "array" === tc(h),
                    p = "object" === tc(k) || "array" === tc(k); if (n && p) dn(h, k, c, g);
                else if (n || p || h !== k) c[g] = !0 }
        return Object.keys(c) }
    var gn = function() { this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1 },
        hn = function(a) { var b = new gn;
            b.eventModel = a; return b },
        jn = function(a, b) { a.targetConfig = b; return a },
        kn = function(a, b) { a.containerConfig = b; return a },
        ln = function(a, b) { a.globalConfig = b; return a },
        mn = function(a,
            b) { a.remoteConfig = b; return a },
        nn = function(a, b) { a.onSuccess = b; return a },
        on = function(a, b) { a.setContainerTypeLoaded = b; return a },
        pn = function(a, b) { a.getContainerTypeLoaded = b; return a },
        qn = function(a, b) { a.onFailure = b; return a };
    l = gn.prototype;
    l.getWithConfig = function(a) { if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]; if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a] };
    l.getTopLevelKeys = function() {
        function a(c) { for (var d = Object.keys(c), e = 0; e < d.length; ++e) b[d[e]] = 1 } var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig); return Object.keys(b) };
    l.getMergedValues = function(a, b) {
        function c(f) { vc(f) && Pa(f, function(g, h) { e = !0;
                d[g] = h }) } var d = {},
            e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]); return e ? d : void 0 };
    l.getKeysFromFirstOfAnyScope = function(a) { var b = {},
            c = !1,
            d = function(e) { for (var f = 0; f < a.length; f++) void 0 !== e[a[f]] && (b[a[f]] = e[a[f]], c = !0); return c }; if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig) || d(this.globalConfig)) return b;
        d(this.remoteConfig); return b };
    l.getEventModelKeys = function() { var a = [],
            b; for (b in this.eventModel) b !== T.Ib && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b); return a };

    function rn() { U.dedupe_gclid || (U.dedupe_gclid = "" + fj()); return U.dedupe_gclid };
    var sn = function() { var a = !1; return a };
    var tn;
    if (3 === L.Zd.length) tn = "g";
    else { var un = "G";
        un = "g";
        tn = un }
    var vn = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: tn, OPT: "o" },
        wn = function(a) { var b = L.K.split("-"),
                c = b[0].toUpperCase(),
                d = vn[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f; if (3 === L.Zd.length) { var g = "w";
                g = sn() ? "s" : "o";
                f = "2" + g } else f = ""; return f + d + L.Zd + e };

    function xn(a, b) { if ("" === a) return b; var c = Number(a); return isNaN(c) ? b : c };
    var yn = function(a, b) { a.addEventListener && a.addEventListener.call(a, "message", b, !1) };

    function zn() { return Cb("iPhone") && !Cb("iPod") && !Cb("iPad") };
    Cb("Opera");
    Cb("Trident") || Cb("MSIE");
    Cb("Edge");
    !Cb("Gecko") || -1 != Bb().toLowerCase().indexOf("webkit") && !Cb("Edge") || Cb("Trident") || Cb("MSIE") || Cb("Edge"); - 1 != Bb().toLowerCase().indexOf("webkit") && !Cb("Edge") && Cb("Mobile");
    Cb("Macintosh");
    Cb("Windows");
    Cb("Linux") || Cb("CrOS");
    var An = na.navigator || null;
    An && (An.appVersion || "").indexOf("X11");
    Cb("Android");
    zn();
    Cb("iPad");
    Cb("iPod");
    zn() || Cb("iPad") || Cb("iPod");
    Bb().toLowerCase().indexOf("kaios");
    var Bn = function(a) { if (!a || !H.head) return null; var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        H.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a; return b };
    var Cn = function() {};
    var Dn = function(a) { void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0); return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3 },
        En = function(a, b) { this.o = a;
            this.g = null;
            this.C = {};
            this.P = 0;
            this.I = void 0 === b ? 500 : b;
            this.s = null };
    ma(En, Cn);
    En.prototype.addEventListener = function(a) {
        var b = {},
            c = Pi(function() { return a(b) }),
            d = 0; - 1 !== this.I && (d = setTimeout(function() { b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c() }, this.I));
        var e = function(f, g) { clearTimeout(d);
            f ? (b = f, b.internalErrorState = Dn(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b) };
        try { Fn(this, "addEventListener", e) } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    En.prototype.removeEventListener = function(a) { a && a.listenerId && Fn(this, "removeEventListener", null, a.listenerId) };
    var Hn = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: { if (a.publisher && a.publisher.restrictions) { var f = a.publisher.restrictions[b]; if (void 0 !== f) { e = f[void 0 === d ? "755" : d]; break a } }
                e = void 0 }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var k;
            if (0 === h)
                if (a.purpose && a.vendor) { var n = Gn(a.vendor.consents, void 0 === d ? "755" : d);
                    k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Gn(a.purpose.consents, b) } else k = !0;
            else k = 1 === h ? a.purpose && a.vendor ? Gn(a.purpose.legitimateInterests,
                b) && Gn(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return k
        },
        Gn = function(a, b) { return !(!a || !a[b]) },
        Fn = function(a, b, c, d) { c || (c = function() {}); if ("function" === typeof a.o.__tcfapi) { var e = a.o.__tcfapi;
                e(b, 2, c, d) } else if (In(a)) { Jn(a); var f = ++a.P;
                a.C[f] = c; if (a.g) { var g = {};
                    a.g.postMessage((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }, g), "*") } } else c({}, !1) },
        In = function(a) {
            if (a.g) return a.g;
            var b;
            a: {
                for (var c = a.o, d = 0; 50 > d; ++d) {
                    var e;
                    try { e = !(!c.frames || !c.frames.__tcfapiLocator) } catch (h) {
                        e = !1
                    }
                    if (e) { b = c; break a }
                    var f;
                    b: { try { var g = c.parent; if (g && g != c) { f = g; break b } } catch (h) {}
                        f = null }
                    if (!(c = f)) break
                }
                b = null
            }
            a.g = b;
            return a.g
        },
        Jn = function(a) { a.s || (a.s = function(b) { try { var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.C[c.callId](c.returnValue, c.success) } catch (d) {} }, yn(a.o, a.s)) };
    var Kn = !0;
    Kn = !1;
    var Ln = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        Mn = xn("", 550),
        Nn = xn("", 500);

    function On() { var a = U.tcf || {}; return U.tcf = a }
    var Tn = function() {
        var a = On(),
            b = new En(m, Kn ? 3E3 : -1);
        if (!0 === m.gtag_enable_tcf_support && !a.active && ("function" === typeof m.__tcfapi || "function" === typeof b.o.__tcfapi || null != In(b))) {
            a.active = !0;
            a.zd = {};
            Pn();
            var c = null;
            Kn ? c = m.setTimeout(function() { Qn(a);
                Rn(a);
                c = null }, Nn) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Qn(a), Rn(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Sn(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in Ln)
                                if (Ln.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var h = d,
                                            k = !0;
                                        k = void 0 === k ? !1 : k;
                                        var n;
                                        var p = h;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Dn(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                        f["1"] = n ? !1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies &&
                                            !k || "string" !== typeof h.tcString || !h.tcString.length ? !0 : Hn(h, "1", 0) : !1
                                    } else f[g] = Hn(d, g, Ln[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.zd = e, Rn(a))
                    }
                })
            } catch (d) { c && (clearTimeout(c), c = null), Qn(a), Rn(a) }
        }
    };

    function Qn(a) { a.type = "e";
        a.tcString = "tcunavailable";
        Kn && (a.zd = Sn()) }

    function Pn() { var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Mn, a);
        Mg(b) }

    function Sn() { var a = {},
            b; for (b in Ln) Ln.hasOwnProperty(b) && (a[b] = !0); return a }

    function Rn(a) { var b = {},
            c = (b.ad_storage = a.zd["1"] ? "granted" : "denied", b);
        Og(c, 0, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Un() }) }
    var Un = function() { var a = On(); return a.active ? a.tcString || "" : "" },
        Vn = function() { var a = On(); return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : "" },
        Wn = function(a) { if (!Ln.hasOwnProperty(String(a))) return !0; var b = On(); return b.active && b.zd ? !!b.zd[String(a)] : !0 };
    var co = !1;
    var eo = function() { this.g = {} },
        fo = function(a, b, c) { null != c && (a.g[b] = c) },
        go = function(a) { return Object.keys(a.g).map(function(b) { return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b]) }).join("&") },
        io = function(a, b, c, d, e) {};
    var ko = /[A-Z]+/,
        lo = /\s/,
        mo = function(a) { if (Fa(a)) { a = Va(a); var b = a.indexOf("-"); if (!(0 > b)) { var c = a.substring(0, b); if (ko.test(c)) { for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || lo.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return { id: a, prefix: c, containerId: c + "-" + d[0], O: d } } } } },
        oo = function(a) { for (var b = {}, c = 0; c < a.length; ++c) { var d = mo(a[c]);
                d && (b[d.id] = d) }
            no(b); var e = [];
            Pa(b, function(f, g) { e.push(g) }); return e };

    function no(a) { var b = [],
            c; for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.O[1] && b.push(d.containerId) }
        for (var e = 0; e < b.length; ++e) delete a[b[e]] };
    var qo = function(a, b, c, d) { return (2 === po() || d || "http:" != m.location.protocol ? a : b) + c },
        po = function() { var a = Wb(),
                b; if (1 === a) a: { var c = Dh;c = c.toLowerCase(); for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) { var k = g[h].src; if (k) { k = k.toLowerCase(); if (0 === k.indexOf(e)) { b = 3; break a }
                        1 === f && 0 === k.indexOf(d) && (f = 2) } }
                b = f }
            else b = a; return b };
    var Jo = !1;

    function Ko() { if (Ea(Ob.joinAdInterestGroup)) return !0;
        Jo || (Bn(''), Jo = !0); return Ea(Ob.joinAdInterestGroup) }

    function Lo(a, b) { var c = void 0; try { c = H.querySelector('iframe[data-tagging-id="' + b + '"]') } catch (e) {} if (c) { var d = Number(c.dataset.loadTime); if (d && 6E4 > Xa() - d) { lg("TAGGING", 9); return } } else try { if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) { lg("TAGGING", 10); return } } catch (e) {}
        Xb(a, void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: Xa() }, c) };
    var up = function(a, b, c) { this.va = a;
            this.eventName = b;
            this.F = c;
            this.H = {};
            this.metadata = {};
            this.jb = !1 },
        vp = function(a, b, c) { var d = a.F.getWithConfig(b);
            void 0 !== d ? a.H[b] = d : void 0 !== c && (a.H[b] = c) };

    function wp(a) { return { getDestinationId: function() { return a.va }, getEventName: function() { return a.eventName }, setEventName: function(b) { return void(a.eventName = b) }, getHitData: function(b) { return a.H[b] }, setHitData: function(b, c) { return void(a.H[b] = c) }, setHitDataIfNotDefined: function(b, c) { void 0 === a.H[b] && (a.H[b] = c) }, copyToHitData: function(b, c) { vp(a, b, c) }, getMetadata: function(b) { return a.metadata[b] }, setMetadata: function(b, c) { return void(a.metadata[b] = c) }, abort: function() { return void(a.jb = !0) }, getProcessedEvent: function() { return a } } };
    var yp = function(a) { var b = xp[a.va]; if (!a.jb && b)
                for (var c = wp(a), d = 0; d < b.length && (b[d](c), !a.jb); ++d); },
        zp = function(a, b) { var c = xp[a];
            c || (c = xp[a] = []);
            c.push(b) },
        xp = {};
    var Vp = function() { var a = !0;
            Wn(7) && Wn(9) && Wn(10) || (a = !1); return a },
        Wp = function() { var a = !0;
            Wn(3) && Wn(4) || (a = !1); return a };

    function Pq() { return U.gcq = U.gcq || new Qq }
    var Rq = function(a, b, c) { Pq().register(a, b, c) },
        Sq = function(a, b, c, d) { Pq().push("event", [b, a], c, d) },
        Tq = function(a, b, c) { Pq().insert("event", [b, a], c) },
        Uq = function(a, b) { Pq().push("config", [a], b) },
        Vq = function(a, b, c, d) { Pq().push("get", [a, b], c, d) },
        Wq = function(a) { return Pq().getRemoteConfig(a) },
        Xq = {},
        Yq = function() { this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.claimed = this.g = !1 },
        Zq = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.V = c || "";
            this.g = d;
            this.o =
                e
        },
        Qq = function() { this.o = {};
            this.s = {};
            this.g = [];
            this.C = { AW: !1, UA: !1 } },
        $q = function(a, b) { var c = mo(b); return a.o[c.containerId] = a.o[c.containerId] || new Yq },
        ar = function(a, b, c) { if (b) { var d = mo(b); if (d && 1 === $q(a, b).status) { $q(a, b).status = 2; var e = {};
                    zm && (e.timeoutId = m.setTimeout(function() { og(38);
                        em() }, 3E3));
                    a.push("require", [e], d.containerId);
                    Xq[d.containerId] = Xa(); if (sn()) {} else { var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + L.ca + "&cx=c";
                        Xm() && (g += "&sign=" + L.$d); var h = ("http:" != m.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            k = Vm(c, g) || h;
                        Vb(k) } } } },
        br = function(a, b, c, d) {
            if (d.V) {
                var e = $q(a, d.V),
                    f = e.s;
                if (f) {
                    var g = wc(c),
                        h = wc(e.targetConfig[d.V]),
                        k = wc(e.containerConfig),
                        n = wc(e.remoteConfig),
                        p = wc(a.s),
                        q = Rh("gtm.uniqueEventId"),
                        r = mo(d.V).prefix,
                        t = Za(function() { var v = g[T.kc];
                            v && I(v) }),
                        u = pn(on(qn(nn(ln(mn(kn(jn(hn(g), h), k), n), p), function() { Mm(q, r, "2");
                            t() }), function() { Mm(q, r, "3");
                            t() }), function(v, y) { a.C[v] = y }), function(v) { return a.C[v] });
                    try { Mm(q, r, "1"), en(d.type, d.V, u);
                        f(d.V, b, d.s, u) } catch (v) {
                        Mm(q, r, "4");
                    }
                }
            }
        };
    l = Qq.prototype;
    l.register = function(a, b, c) { var d = $q(this, a); if (3 !== d.status) { d.s = b;
            d.status = 3;
            c && (wc(d.remoteConfig, c), d.remoteConfig = c); var e = mo(a),
                f = Xq[e.containerId]; if (void 0 !== f) { var g = U[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                U[e.containerId]._spx && (h = h.toLowerCase()); var k = Rh("gtm.uniqueEventId"),
                    n = h,
                    p = Xa() - g; if (zm && !jm[k]) { k !== fm && (am(), fm = k); var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    om = om ? om + "," + q : "&cl=" + q }
                delete Xq[e.containerId] }
            this.flush() } };
    l.notifyContainerLoaded = function(a, b) { var c = this,
            d = function(f) { if (mo(f)) { var g = $q(c, f);
                    g.status = 3;
                    g.claimed = !0 } };
        d(a); for (var e = 0; e < b.length; e++) d(b[e]);
        this.flush() };
    l.push = function(a, b, c, d) { if (void 0 !== c) { if (!mo(c)) return;
            ar(this, c, b[0][T.Ba] || this.s[T.Ba]);
            $q(this, c).g && (d = !1) }
        this.g.push(new Zq(a, Math.floor(Xa() / 1E3), c, b, d));
        d || this.flush() };
    l.insert = function(a, b, c) { var d = Math.floor(Xa() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new Zq(a, d, c, b, !1)) : this.g.push(new Zq(a, d, c, b, !1)) };
    l.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) { var f = this.g[0]; if (f.o) !f.V || $q(this, f.V).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift();
            else { var g = void 0; switch (f.type) {
                    case "require":
                        g = $q(this, f.V); if (3 !== g.status && !a) { this.g.push.apply(this.g, c); return }
                        zm && m.clearTimeout(f.g[0].timeoutId); break;
                    case "set":
                        Pa(f.g[0], function(r, t) { wc(eb(r, t), b.s) }); break;
                    case "config":
                        g = $q(this, f.V);
                        e.Za = {};
                        Pa(f.g[0], function(r) { return function(t, u) { wc(eb(t, u), r.Za) } }(e)); var h = !!e.Za[T.Ud];
                        delete e.Za[T.Ud]; var k = mo(f.V),
                            n = k.containerId === k.id;
                        h || (n ? g.containerConfig = {} : g.targetConfig[f.V] = {});
                        g.g && h || br(this, T.Ga, e.Za, f);
                        g.g = !0;
                        delete e.Za[T.Ib];
                        n ? wc(e.Za, g.containerConfig) : wc(e.Za, g.targetConfig[f.V]);
                        d = !0; break;
                    case "event":
                        e.Ed = {};
                        Pa(f.g[0], function(r) { return function(t, u) { wc(eb(t, u), r.Ed) } }(e));
                        br(this, f.g[1], e.Ed, f); break;
                    case "get":
                        var p = {},
                            q = (p[T.eb] = f.g[0], p[T.rb] = f.g[1], p);
                        br(this, T.Pa, q, f) }
                this.g.shift();
                cr(this, f) }
            e = { Za: e.Za, Ed: e.Ed } }
        this.g.push.apply(this.g, c);
        d &&
            this.flush()
    };
    var cr = function(a, b) { if ("require" !== b.type)
            if (b.V)
                for (var c = a.getCommandListeners(b.V)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) { var f = a.o[e]; if (f && f.o)
                            for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]() } };
    Qq.prototype.getRemoteConfig = function(a) { return $q(this, a).remoteConfig };
    Qq.prototype.getCommandListeners = function(a) { return $q(this, a).o };
    var dr = !1;
    var er = {},
        fr = {},
        gr = function(a, b) { var c = fr[b] || [];
            c.push(a);
            fr[b] = c },
        ir = function() { U.addTargetToGroup = function(e) { hr(e, "default") };
            U.addDestinationToContainer = function(e, f) { gr(e, f) }; var a = U.pendingDefaultTargets;
            delete U.pendingDefaultTargets; if (Array.isArray(a))
                for (var b = 0; b < a.length; ++b) hr(a[b], "default"); var c = U.pendingDestinationIds;
            delete U.pendingDestinationIds; if (Array.isArray(c))
                for (var d = 0; d < c.length; ++d) gr(c[d][0], c[d][1]) },
        hr = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d =
                    er[b[c]] || [];
                er[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        jr = function(a) { Pa(er, function(b, c) { var d = c.indexOf(a);
                0 <= d && c.splice(d, 1) }) };
    var kr = { active: !1, isAllowed: function() { return !1 } },
        lr = { active: !0, isAllowed: function() { return !0 } },
        mr = { zone: !0, cn: !0, css: !0, ew: !0, eq: !0, ge: !0, gt: !0, lc: !0, le: !0, lt: !0, re: !0, sw: !0, um: !0 },
        nr = { cl: ["ecl"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"] };

    function or() { var a = U.zones;
        a || (a = U.zones = new pr); return a }

    function qr(a) { if (sn()) {} else { var b = Dh,
                c = "?id=" + encodeURIComponent(a) + "&l=" + L.ca;
            Xm() && (c += "&sign=" + L.$d, Pb && (b = Pb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0])); var d = qo("https://", "http://", b + c);
            Vb(d) } }
    var pr = function() { this.o = {};
        this.g = {};
        this.s = 0 };
    l = pr.prototype;
    l.isActive = function(a, b) { var c = this.o[a]; if (!c) return !0; if (!this.isActive(c.we, b)) return !1; for (var d = 0; d < c.Yb.length; d++)
            if (this.g[c.Yb[d]].Sb(b)) return !0;
        return !1 };
    l.getIsAllowedFn = function(a, b) { if (!this.isActive(a, b)) return function() { return !1 }; var c = this.o[a]; if (!c) return function() { return !0 }; for (var d = [], e = 0; e < c.Yb.length; e++) { var f = this.g[c.Yb[e]];
            f.Sb(b) && d.push(f) } if (!d.length) return function() { return !1 }; var g = this.getIsAllowedFn(c.we, b); return function(h, k) { k = k || []; if (!g(h, k)) return !1; for (var n = 0; n < d.length; ++n)
                if (d[n].isAllowed(h, k)) return !0;
            return !1 } };
    l.checkState = function(a, b) { var c = this.o[a]; if (!c) return lr; var d = this.checkState(c.we, b); if (!d.active) return kr; for (var e = [], f = 0; f < c.Yb.length; f++) { var g = this.g[c.Yb[f]];
            g.Sb(b) && e.push(g) } return e.length ? { active: !0, isAllowed: function(h, k) { k = k || []; var n = d.isAllowed; if (!n(h, k)) return !1; for (var p = 0; p < e.length; ++p)
                    if (e[p].isAllowed(h, k)) return !0;
                return !1 } } : kr };
    l.unregisterChild = function(a) { delete this.o[a] };
    l.createZone = function(a, b) { var c = String(++this.s);
        this.g[c] = new rr(a, b || null); return c };
    l.updateZone = function(a, b, c) { var d = this.g[a];
        d && sr(d, b, c) };
    l.registerZone = function(a, b, c, d) { var e = this.g[a]; if (e) return sr(e, b, c), !1; if (!c) return !1;
        this.g[a] = new rr(b, d); return !0 };
    l.registerChild = function(a, b, c) { var d = this.o[a]; if (!d && U[a] || d && d.we !== b) return !1; if (d) return d.Yb.push(c), !1;
        this.o[a] = { we: b, Yb: [c] }; return !0 };
    var rr = function(a, b) { this.g = [{ eventId: a, Sb: !0 }];
            this.o = null; if (b) { this.o = {}; for (var c = 0; c < b.length; c++) this.o[b[c]] = !0 } },
        sr = function(a, b, c) { var d = a.g[a.g.length - 1];
            b <= d.eventId || d.Sb !== c && a.g.push({ eventId: b, Sb: c }) };
    rr.prototype.Sb = function(a) { for (var b = this.g.length - 1; 0 <= b; b--)
            if (this.g[b].eventId <= a) return this.g[b].Sb;
        return !1 };
    rr.prototype.isAllowed = function(a, b) { b = b || []; if (!this.o || mr[a] || this.o[a]) return !0; for (var c = 0; c < b.length; ++c)
            if (this.o[b[c]]) return !0;
        return !1 };
    var tr = function(a, b, c, d, e) { var f = L.K + ":" + b,
                g = Rh("gtm.uniqueEventId", 2) || 0,
                h = or();
            c = c && cb(c, nr); if (h.registerZone(f, g, a, c))
                for (var k = 0; k < d.length; k++) { var n = String(d[k]);
                    h.registerChild(n, L.K, f) && (0 === n.indexOf("GTM-") ? qr(n) : (function(p, q) { m[L.ca].push(arguments) }("js", Wa()), U.addTargetToGroup ? U.addTargetToGroup(n) : (U.pendingDefaultTargets = U.pendingDefaultTargets || [], U.pendingDefaultTargets.push(n)), Uq(e, n))) } },
        ur = function(a) { var b = U.zones; return b ? b.getIsAllowedFn(L.K, a) : lr.isAllowed },
        vr = function(a) {
            var b =
                U.zones;
            return b ? b.isActive(L.K, a) : lr.active
        };
    var wr = function(a) { return arguments },
        zr = function(a, b) {
            for (var c = [], d = 0; d < qe.length; d++)
                if (a[d]) { var e = qe[d]; var f = Bl(b.Mb); try { var g = Om(d, { onSuccess: f, onFailure: f, terminate: f }, b, d); if (g) { var h = c,
                                k = h.push,
                                n = d,
                                p = e["function"]; if (!p) throw "Error: No function name given for function call."; var q = se[p];
                            k.call(h, { Lh: n, Ch: q ? q.priorityOverride || 0 : 0, execute: g }) } else xr(d, b), f() } catch (u) { f() } }
            var r = b.Mb;
            r.P = !0;
            r.o >= r.s &&
                Al(r);
            c.sort(yr);
            for (var t = 0; t < c.length; t++) c[t].execute();
            return 0 < c.length
        };

    function yr(a, b) { var c, d = b.Ch,
            e = a.Ch;
        c = d > e ? 1 : d < e ? -1 : 0; var f; if (0 !== c) f = c;
        else { var g = a.Lh,
                h = b.Lh;
            f = g > h ? 1 : g < h ? -1 : 0 } return f }

    function xr(a, b) { if (!zm) return; var c = function(d) { var e = b.If(qe[d]) ? "3" : "4",
                f = ye(qe[d][Pd.Pg], b, []);
            f && f.length && c(f[0].index);
            Fm(b.id, qe[d], e); var g = ye(qe[d][Pd.Sg], b, []);
            g && g.length && c(g[0].index) };
        c(a); }
    var Ar = !1,
        Br;
    var Hr = function(a) {
        var b = Xa(),
            c = a["gtm.uniqueEventId"],
            d = a.event;
        if ("gtm.js" === d) { if (Ar) return !1;
            Ar = !0; }
        var g, h = !1;
        if (vr(c)) g = ur(c);
        else { if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            h = !0;
            g = ur(Number.MAX_SAFE_INTEGER) }
        Em(c, d);
        var k = a.eventCallback,
            n = a.eventTimeout,
            p = k;
        var q = { id: c, name: d, If: ol(g), yk: [], xh: function() { og(6) }, dh: Dr(), eh: Er(c), Mb: new xl(p, n) },
            r = Ie(q);
        h && (r =
            Fr(r));
        var t = zr(r, q);
        "gtm.js" !==
        d && "gtm.sync" !== d || Ml(L.K);
        return Gr(r, t)
    };

    function Er(a) { return function(b) { zm && (Ac(b) || Nm(a, "input", b)) } }

    function Dr() { var a = {};
        a.event = Wh("event", 1);
        a.ecommerce = Wh("ecommerce", 1);
        a.gtm = Wh("gtm");
        a.eventModel = Wh("eventModel"); return a }

    function Fr(a) { for (var b = [], c = 0; c < a.length; c++) a[c] && (th[String(qe[c][Pd.Jb])] && (b[c] = !0), void 0 !== qe[c][Pd.Ui] && (b[c] = !0)); return b }

    function Gr(a, b) { if (!b) return b; for (var c = 0; c < a.length; c++)
            if (a[c] && qe[c] && !Bh[String(qe[c][Pd.Jb])]) return !0;
        return !1 }
    var Qe;
    var Ir = "HA GF G UA AW DC".split(" "),
        Jr = !1,
        Kr = !1,
        $r = 0;

    function as(a) { a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: Lh() }); return a["gtm.uniqueEventId"] }

    function bs() { Jr || U.gtagRegistered || (Jr = U.gtagRegistered = !0, ir()); return Jr }
    var cs = {
            config: function(a) { as(a); if (2 > a.length || !Fa(a[1])) return; var b = {}; if (2 < a.length) { if (void 0 != a[2] && !vc(a[2]) || 3 < a.length) return;
                    b = a[2] } var c = mo(a[1]); if (!c) return; var d = bs();
                jr(c.id);
                hr(c.id, b[T.$e] || "default");
                delete b[T.$e];
                Kr || og(43); if (d && -1 !== Ir.indexOf(c.prefix)) { "G" === c.prefix && (b[T.Ib] = !0);
                    delete b[T.kc];
                    c.id === c.containerId && (U.configCount = ++$r);
                    Uq(b, c.id); return }
                Uh("gtag.targets." + c.id, void 0);
                Uh("gtag.targets." + c.id, wc(b)); },
            consent: function(a) { if (3 === a.length) { og(39); var b = Lh(),
                        c = a[1]; "default" === c ? Mg(a[2]) : "update" === c && Og(a[2], b) } },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && Fa(b)) {
                    var c;
                    if (2 < a.length) { if (!vc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2] }
                    var d = c,
                        e = {},
                        f = (e.event = b, e);
                    d && (f.eventModel = wc(d), d[T.kc] && (f.eventCallback = d[T.kc]), d[T.Nd] && (f.eventTimeout = d[T.Nd]));
                    var g = as(a);
                    f["gtm.uniqueEventId"] = g;
                    if ("optimize.callback" === b) return f.eventModel = f.eventModel || {}, f;
                    var h;
                    var k = c && c[T.oc];
                    void 0 === k && (k = Rh(T.oc, 2), void 0 === k && (k = "default"));
                    if (Fa(k) || Ja(k)) { for (var n = k.toString().replace(/\s+/g, "").split(","), p = [], q = 0; q < n.length; q++)
                            if (0 <= n[q].indexOf("-")) p.push(n[q]);
                            else { var r = er[n[q]]; if (dr)
                                    for (var t = 0; r && t < r.length; t++) { var u = fr[r[t]];
                                        u && u.length && (p = p.concat(u)) } else r && r.length && (p = p.concat(r)) }
                        h = oo(p) } else h = void 0;
                    var v = h;
                    if (!v) return;
                    for (var y = bs(), x = [], w = 0; y && w < v.length; w++) {
                        var A = v[w];
                        if (-1 !== Ir.indexOf(A.prefix)) {
                            var B = wc(c);
                            "G" === A.prefix && (B[T.Ib] = !0);
                            delete B[T.kc];
                            Sq(b, B, A.id)
                        }
                        x.push(A.id)
                    }
                    f.eventModel = f.eventModel || {};
                    0 < v.length ? f.eventModel[T.oc] = x.join() : delete f.eventModel[T.oc];
                    Kr || og(43);
                    return f
                }
            },
            get: function(a) { og(53); if (4 !== a.length || !Fa(a[1]) || !Fa(a[2]) || !Ea(a[3])) return; var b = mo(a[1]),
                    c = String(a[2]),
                    d = a[3]; if (!b) return;
                Kr || og(43); if (!bs() || -1 === Ir.indexOf(b.prefix)) return;
                Lh(); var e = {};
                Ig(wc((e[T.eb] = c, e[T.rb] = d, e)));
                Vq(c, function(f) { I(function() { return d(f) }) }, b.id); },
            js: function(a) { if (2 == a.length && a[1].getTime) { Kr = !0;
                    bs(); var b = {}; return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = as(a), b } },
            policy: function(a) { if (3 === a.length) { var b = a[1],
                        c = a[2],
                        d = Qe.o;
                    d.g[b] ? d.g[b].push(c) : d.g[b] = [c] } },
            set: function(a) {
                var b;
                2 == a.length && vc(a[1]) ? b = wc(a[1]) : 3 == a.length && Fa(a[1]) && (b = {}, vc(a[2]) || Ja(a[2]) ? b[a[1]] = wc(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (Lh(), wc(b), bs()) { var c = wc(b);
                        Pq().push("set", [c]) }
                    b._clear = !0;
                    return b
                }
            }
        },
        ds = { policy: !0 };
    var es = function() { this.g = [];
        this.o = [] };
    es.prototype.push = function(a, b, c) { var d = this.g.length + 1;
        c = wc(c);
        c.priorityId = d; var e = { debugContext: c, message: a, notBeforeEventId: b, priorityId: d };
        this.g.push(e); for (var f = 0; f < this.o.length; f++) try { this.o[f](e) } catch (g) {} };
    es.prototype.listen = function(a) { this.o.push(a) };
    es.prototype.get = function() { for (var a = {}, b = 0; b < this.g.length; b++) { var c = this.g[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c) } return a };

    function fs(a, b) { return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId };
    var gs = function(a) { var b = m[L.ca].hide; if (b && void 0 !== b[a] && b.end) { b[a] = !1; var c = !0,
                    d; for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) { c = !1; break }
                c && (b.end(), b.end = null) } },
        hs = function(a) { var b = m[L.ca],
                c = b && b.hide;
            c && c.end && (c[a] = !0) };
    var is = !1,
        js = [];

    function ks() { if (!is) { is = !0; for (var a = 0; a < js.length; a++) I(js[a]) } }
    var ls = function(a) { is ? I(a) : js.push(a) };
    var Cs = function(a) { if (Bs(a)) return a;
        this.g = a };
    Cs.prototype.Ej = function() { return this.g };
    var Bs = function(a) { return !a || "object" !== tc(a) || vc(a) ? !1 : "getUntrustedMessageValue" in a };
    Cs.prototype.getUntrustedMessageValue = Cs.prototype.Ej;
    var Ds = 0,
        Es, Fs = {},
        Gs = [],
        Hs = [],
        Is = !1,
        Js = !1,
        Ks = function(a) { return m[L.ca].push(a) },
        Ls = function(a, b, c) { a.eventCallback = b;
            c && (a.eventTimeout = c); return Ks(a) },
        Ms = function(a, b) { var c = U[L.ca],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = m.setTimeout(function() { f || (f = !0, a());
                g = void 0 }, b)); return function() {++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0)) } };

    function Ns(a) { var b = a._clear;
        Pa(a, function(d, e) { "_clear" !== d && (b && Uh(d, void 0), Uh(d, e)) });
        Gh || (Gh = a["gtm.start"]); var c = a["gtm.uniqueEventId"]; if (!a.event) return !1;
        c || (c = Lh(), a["gtm.uniqueEventId"] = c, Uh("gtm.uniqueEventId", c)); return Hr(a) }

    function Os(a) { if (null == a || "object" !== typeof a) return !1; if (a.event) return !0; if (Qa(a)) { var b = a[0]; if ("config" === b || "event" === b || "js" === b) return !0 } return !1 }

    function Ps() {
        for (var a = !1; !Js && (0 < Gs.length || 0 < Hs.length);) {
            if (!Is && Os(Gs[0])) { var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = Gs[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                Gs.unshift(c, e);
                Is = !0 }
            Js = !0;
            delete Oh.eventModel;
            Qh();
            var g = null,
                h = void 0;
            null == g && (g = Gs.shift());
            if (null != g) {
                var n = Bs(g);
                if (n) { var p = g;
                    g = Bs(p) ? p.getUntrustedMessageValue() : void 0;
                    Vh() }
                try {
                    if (Ea(g)) try { g.call(Sh) } catch (B) {} else if (Ja(g)) { var q = g; if (Fa(q[0])) { var r = q[0].split("."),
                                t = r.pop(),
                                u = q.slice(1),
                                v = Rh(r.join("."), 2); if (null != v) try { v[t].apply(v, u) } catch (B) {} } } else {
                        if (Qa(g)) {
                            a: {
                                var y = g,
                                    x = h;
                                if (y.length && Fa(y[0])) { var w = cs[y[0]]; if (w && (!n || !ds[y[0]])) { g = w(y, x); break a } }
                                g =
                                void 0
                            }
                            if (!g) { Js = !1; continue }
                        }
                        a = Ns(g) || a;
                    }
                } finally { n && Qh(!0) }
            }
            Js = !1
        }
        return !a
    }

    function Rs() { var b = Ps(); try { gs(L.K) } catch (c) {} return b }
    var Us = function() {
        var a = Qb(L.ca, []),
            b = Qb("google_tag_manager", {});
        b = b[L.ca] = b[L.ca] || {};
        ul(function() { if (!b.gtmDom) { b.gtmDom = !0; var e = {};
                a.push((e.event = "gtm.dom", e)) } });
        ls(function() { if (!b.gtmLoad) { b.gtmLoad = !0; var e = {};
                a.push((e.event = "gtm.load", e)) } });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 <
                U.SANDBOXED_JS_SEMAPHORE) { e = []; for (var f = 0; f < arguments.length; f++) e[f] = new Cs(arguments[f]) } else e = [].slice.call(arguments, 0);
            Gs.push.apply(Gs, e);
            var g = c.apply(a, e);
            if (300 < this.length)
                for (og(4); 300 < this.length;) this.shift();
            var h = "boolean" !== typeof g || g;
            return Ps() && h
        };
        var d = a.slice(0);
        Gs.push.apply(Gs, d);
        if (Ss()) {
            I(Rs)
        }
    };
    var Ss = function() { var a = !0; return a };

    function Vs(a) { if (null == a || 0 === a.length) return !1; var b = Number(a),
            c = Xa(); return b < c + 3E5 && b > c - 9E5 };
    var Ws = { Ah: "G-VY3Y6182VG" },
        Xs = function() { var a = []; return a };
    var Ys = {};
    Ys.Vd = new String("undefined");
    var at = function(a, b, c) { var d = { event: b, "gtm.element": a, "gtm.elementClasses": fc(a, "className"), "gtm.elementId": a["for"] || ac(a, "id") || "", "gtm.elementTarget": a.formTarget || fc(a, "target") || "" };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || fc(a, "href") || a.src || a.code || a.codebase || ""; return d },
        bt = function(a) {
            U.hasOwnProperty("autoEventsSettings") || (U.autoEventsSettings = {});
            var b = U.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        ct = function(a, b, c) { bt(a)[b] = c },
        dt = function(a, b, c, d) { var e = bt(a),
                f = Ya(e, b, d);
            e[b] = c(f) },
        et = function(a, b, c) { var d = bt(a); return Ya(d, b, c) },
        ft = function(a) { return "string" === typeof a ? a : String(Lh()) };
    var lt = !!m.MutationObserver,
        mt = void 0,
        nt = function(a) { if (!mt) { var b = function() { var c = H.body; if (c)
                        if (lt)(new MutationObserver(function() { for (var e = 0; e < mt.length; e++) I(mt[e]) })).observe(c, { childList: !0, subtree: !0 });
                        else { var d = !1;
                            Zb(c, "DOMNodeInserted", function() { d || (d = !0, I(function() { d = !1; for (var e = 0; e < mt.length; e++) I(mt[e]) })) }) } };
                mt = [];
                H.body ? b() : I(b) }
            mt.push(a) };
    var yt = function(a, b, c) {
        function d() { var g = a();
            f += e ? (Xa() - e) * g.playbackRate / 1E3 : 0;
            e = Xa() }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, h, k) {
                var n = a(),
                    p = n.ke,
                    q = void 0 !== k ? Math.round(k) : void 0 !== h ? Math.round(n.ke * h) : Math.round(n.Af),
                    r = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                    t = H.hidden ? !1 : .5 <= ci(c);
                d();
                var u = void 0;
                void 0 !== b && (u = [b]);
                var v = at(c, "gtm.video", u);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = t;
                return v
            },
            Uf: function() { e = Xa() },
            ib: function() { d() }
        }
    };
    var zt = m.clearTimeout,
        At = m.setTimeout,
        W = function(a, b, c, d) { if (sn()) { b && I(b) } else return Vb(a, b, c, d) },
        Bt = function() { return new Date },
        Ct = function() { return m.location.href },
        Dt = function(a) { return ni(pi(a), "fragment") },
        Et = function(a) { return oi(pi(a)) },
        Ft = function(a, b) { return Rh(a, b || 2) },
        Gt = function(a, b, c) { return b ? Ls(a, b, c) : Ks(a) },
        Ht = function(a, b) { m[a] = b },
        X = function(a, b, c) { b && (void 0 === m[a] || c && !m[a]) && (m[a] = b); return m[a] },
        It = function(a, b, c) { return Ti(a, b, void 0 === c ? !0 : !!c) },
        Jt = function(a, b, c) { return 0 === bj(a, b, c) },
        Kt = function(a, b) { if (sn()) { b && I(b) } else Xb(a, b) },
        Lt = function(a) { return !!et(a, "init", !1) },
        Mt = function(a) { ct(a, "init", !0) },
        Nt = function(a, b, c) { zm && (Ac(a) || Nm(c, b, a)) };
    var ku = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function lu(a, b) { a = String(a);
        b = String(b); var c = a.length - b.length; return 0 <= c && a.indexOf(b, c) === c }
    var mu = new Ma;

    function nu(a, b, c) { var d = c ? "i" : void 0; try { var e = String(b) + d,
                f = mu.get(e);
            f || (f = new RegExp(b, d), mu.set(e, f)); return f.test(a) } catch (g) { return !1 } }

    function ou(a, b) {
        function c(g) { var h = pi(g),
                k = ni(h, "protocol"),
                n = ni(h, "host", !0),
                p = ni(h, "port"),
                q = ni(h, "path").toLowerCase().replace(/\/$/, ""); if (void 0 === k || "http" === k && "80" === p || "https" === k && "443" === p) k = "web", p = "default"; return [k, n, p, q] } for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0 }

    function pu(a) { return qu(a) ? 1 : 0 }

    function qu(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) { for (var d = 0; d < c.length; d++) { var e = wc(a, {});
                wc({ arg1: c[d], any_of: void 0 }, e); if (pu(e)) return !0 } return !1 }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: { if (b) try { for (var g = 0; g < ku.length; g++) { var h = ku[g]; if (b[h]) { f = b[h](c); break a } } } catch (k) {}
                    f = !1 }
                return f;
            case "_ew":
                return lu(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return nu(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return ou(b, c)
        }
        return !1
    };

    function ru(a, b) { var c = this; };
    var su = !0;

    function tu(a, b, c) { var d; return d }

    function uu(a, b, c) {};

    function vu(a, b, c, d) {};

    function wu(a) {};

    function Au(a) {};
    var Bu = {},
        Cu = [],
        Du = {},
        Eu = 0,
        Fu = 0;

    function Mu(a, b) {}

    function Tu(a, b) {};

    function Yu(a) {};
    var Zu = {},
        $u = [];
    var gv = function(a, b) {};

    function nv(a, b) {};
    var ov = /^\s*$/,
        pv, qv = !1;

    function Bv(a, b) {}

    function Cv(a, b, c) {};
    var Dv = ["www.youtube.com", "www.youtube-nocookie.com"],
        Ev, Fv = !1,
        Gv = 0;

    function Qv(a, b) {}

    function Rv(a, b) { return !0 };

    function Sv(a, b, c) {};

    function Tv(a, b) { var c; return c };

    function Uv(a) {};

    function Vv(a) {};

    function Wv(a) { O(G(this), ["listener:!Fn"], arguments);
        P(this, "process_dom_events", "window", "load");
        ls(yc(a)) };

    function Xv(a) { var b; return b };

    function Yv(a, b) { var c; var d = !1; var e = xc(c, this.g, d);
        void 0 === e && void 0 !== c && og(45); return e };

    function Zv(a) { var b; return b };

    function $v(a, b) { var c; return c };

    function aw(a, b) { var c = null,
            d = !1; return xc(c, this.g, d) };

    function bw(a) { var b; var g = !1; return xc(b, this.g, g) };
    var cw = {},
        dw = [],
        ew = {},
        fw = 0,
        gw = 0;
    var mw = !0;
    var nw = function(a, b) { return b };
    var sw = !0;

    function tw(a, b) { return b }
    var yw = !0;

    function zw() {}
    var Aw = {},
        Bw = [];
    var Iw = !0;

    function Jw(a, b) { return b }
    var Nw = !0;

    function Ow(a, b) { return b }
    var Pw, Qw;
    var Zw = !0;
    var $w = function(a, b) { return b };
    var Mb = ca(["data-gtm-yt-inspected-"]),
        ax = ["www.youtube.com", "www.youtube-nocookie.com"],
        bx, cx = !1;
    var mx = !0;

    function nx(a, b) { return b }

    function ox(a) { return !1 }
    var px;

    function qx(a) { var b = !1; return b };
    var sx = function(a, b, c) { if (c) switch (c.type) {
                case "event_name":
                    return a;
                case "const":
                    return c.const_value;
                case "event_param":
                    var d = c.event_param.param_name; return b[d] } },
        vx = function(a, b, c, d) { if (c && !tx(a, b, c)) return !1; if (!d || 0 === d.length) return !0; for (var e = 0; e < d.length; e++)
                if (ux(a, b, d[e].predicates || [])) return !0;
            return !1 },
        ux = function(a, b, c) {
            for (var d = 0; d < c.length; d++)
                if (!tx(a,
                        b, c[d])) return !1;
            return !0
        },
        tx = function(a, b, c) {
            var d = c.values || [],
                e = sx(a, b, d[0]),
                f = sx(a, b, d[1]),
                g = c.type;
            if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g) Fa(e) && (e = e.toLowerCase()), Fa(f) && (f = f.toLowerCase());
            var h = !1;
            switch (g) {
                case "eq":
                case "eqi":
                    h = String(e) === String(f);
                    break;
                case "sw":
                case "swi":
                    h = 0 === String(e).indexOf(String(f));
                    break;
                case "ew":
                case "ewi":
                    h = lu(e, f);
                    break;
                case "cn":
                case "cni":
                    h = 0 <= String(e).indexOf(String(f));
                    break;
                case "lt":
                    h = Number(e) < Number(f);
                    break;
                case "le":
                    h = Number(e) <= Number(f);
                    break;
                case "gt":
                    h = Number(e) > Number(f);
                    break;
                case "ge":
                    h = Number(e) >= Number(f);
                    break;
                case "re":
                case "rei":
                    h = nu(e, f, "rei" === g)
            }
            return !!c.negate !== h
        };

    function wx(a, b) { var c = !1; return c };
    var xx = function(a) { var b; return b };

    function yx(a, b) { b = void 0 === b ? !0 : b; var c; return c };

    function zx() { return jg.hh };

    function Ax() { var a = []; return xc(a) };

    function Bx(a) { var b = null; return b };

    function Cx(a, b) { var c; return c };

    function Dx(a, b) { var c; return c };

    function Ex(a, b) { var c; return c };

    function Fx(a) { var b = ""; return b };

    function Gx() { return jg.Fh };

    function Hx(a, b) { var c; return c };

    function Ix(a) { var b = ""; return b };

    function Jx() { P(this, "get_user_agent"); return m.navigator.userAgent };

    function Kx(a) { return a ? { entityType: a.kh.type, indexInOriginContainer: a.kh.index, nameInOriginContainer: void 0, originContainerId: L.K } : {} };

    function Mx(a, b) {};

    function Nx(a, b) {};
    var Ox = {};

    function Px(a, b, c, d, e, f) { f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], Vb(a, function() { for (var g = e[f][0], h = 0; h < g.length; h++) I(g[h]);
            g.push = function(k) { I(k); return 0 } }, function() { for (var g = e[f][1], h = 0; h < g.length; h++) I(g[h]);
            e[f] = null }, b)) : Vb(a, c, d, b) }

    function Qx(a, b, c, d) {}
    var Rx = Object.freeze({ dl: 1, id: 1 }),
        Sx = {};

    function Tx(a, b, c, d) {};

    function Ux(a) { var b = !0; return b };
    var Vx = function() { return !1 },
        Wx = {
            getItem: function(a) { var b = null; return b },
            setItem: function(a,
                b) { return !1 },
            removeItem: function(a) {}
        };
    var Xx = ["textContent", "value", "tagName", "children", "childElementCount"];

    function Yx(a) { var b; return b };

    function Zx() {};

    function $x(a, b) { var c; return c };

    function ay(a) { var b = void 0; return b };

    function by(a) {};

    function cy(a, b) { var c = !1; return c };

    function dy() { var a = ""; return a };

    function ey() { var a = ""; return a };

    function fy(a, b) { var c = this; };
    var gy = Object.freeze(["config", "event", "get", "set"]);

    function hy(a, b, c) {};
    var iy = !0;

    function jy(a, b) { var c = !1; return c }

    function ky() {};

    function ly(a, b, c, d) { d = void 0 === d ? !1 : d; };

    function my(a, b, c) {};

    function ny(a, b, c, d) { var e = this;
        d = void 0 === d ? !0 : d; var f = !1; return f };
    var oy = !1;

    function py(a) { O(G(this), ["consentSettings:!DustMap"], arguments); for (var b = a.Kb(), c = b.length(), d = 0; d < c; d++) { var e = b.get(d);
            e !== T.Ee && P(this, "access_consent", e, "write") } var f = this.g.g,
            g = Kx(f); if (oy) { var h = wr("consent", "default", yc(a)),
                k = f.eventId;
            Es.push(new Cs(h), k, g) } else Mg(yc(a)) }

    function qy(a, b, c) { return !1 };

    function ry(a, b, c) { O(G(this), ["targetId:!string", "name:!string", "value:!*"], arguments); var d = $h(a) || {};
        d[b] = yc(c, this.g); var e = a;
        Yh || Zh();
        Xh[e] = d; };

    function sy(a, b, c) { O(G(this), ["targetId:!string", "name:!string", "value:!*"], arguments); for (var d = b.split("."), e = Wq(a), f = 0; f < d.length - 1; f++) { if (void 0 === e[d[f]]) e[d[f]] = {};
            else if (!vc(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]] }
        e[d[f]] = yc(c, this.g); };
    var ty = function(a) { for (var b = [], c = 0, d = 0; d < a.length; d++) { var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128) } return b };

    function uy(a, b, c, d) { var e = this; };

    function vy(a, b, c) {};
    var wy = {},
        xy = {};
    wy.getItem = function(a) { var b = null; return b };
    wy.setItem = function(a, b) {};
    wy.removeItem = function(a) {};
    wy.clear = function() {};
    var yy = function(a) { var b; return b };
    var zy = !1;

    function Ay(a) { O(G(this), ["consentSettings:!DustMap"], arguments); var b = yc(a),
            c; for (c in b) b.hasOwnProperty(c) && P(this, "access_consent", c, "write"); var d = this.g.g,
            e = Kx(d); if (zy) { var f = d.eventId;
            Es.push(new Cs(wr("consent", "update", b)), f, e) } else Og(b, d.eventId) }
    var By = function() {
        var a = new ag;
        sn() ? (a.add("injectHiddenIframe", Da), a.add("injectScript", Da)) : (a.add("injectHiddenIframe", Nx), a.add("injectScript", Qx));
        var b = my;
        a.add("Math", Ff());
        a.add("Object", Zf);
        a.add("TestHelper", dg());
        a.add("addConsentListener", ru);
        a.add("addEventCallback", wu);
        a.add("aliasInWindow", Rv);
        a.add("assertApi",
            Bf);
        a.add("assertThat", Cf);
        a.add("callInWindow", Tv);
        a.add("callLater", Uv);
        a.add("copyFromDataLayer", Yv);
        a.add("copyFromWindow", Zv);
        a.add("createArgumentsQueue", aw);
        a.add("createQueue", bw);
        a.add("decodeUri", Gf);
        a.add("decodeUriComponent", Hf);
        a.add("encodeUri", If);
        a.add("encodeUriComponent", Jf);
        a.add("fail", Kf);
        a.add("fromBase64", xx, !("atob" in m));
        a.add("generateRandom", Lf);
        a.add("getContainerVersion", Mf);
        a.add("getCookieValues", yx);
        a.add("getQueryParameters", Dx);
        a.add("getReferrerQueryParameters",
            Ex);
        a.add("getReferrerUrl", Fx);
        a.add("getTimestamp", Pf);
        a.add("getTimestampMillis", Pf);
        a.add("getType", Qf);
        a.add("getUrl", Ix);
        a.add("isConsentGranted", Ux);
        a.add("localStorage", Wx, !Vx());
        a.add("logToConsole", Zx);
        a.add("makeInteger", Sf);
        a.add("makeNumber", Tf);
        a.add("makeString", Uf);
        a.add("makeTableMap", Vf);
        a.add("mock", Yf);
        a.add("parseUrl", ay);
        a.add("queryPermission", cy);
        a.add("readCharacterSet", dy);
        a.add("readTitle", ey);
        a.add("sendPixel", b);
        a.add("setCookie", ny);
        a.add("setDefaultConsentState", py);
        a.add("setInWindow", qy);
        a.add("sha256", uy);
        a.add("templateStorage", wy);
        a.add("toBase64", yy, !("btoa" in m));
        a.add("updateConsentState", Ay);
        cg(a, "callOnWindowLoad", Wv);
        cg(a, "internal.addFormInteractionListener", Mu);
        cg(a, "internal.addFormSubmitListener", Tu);
        cg(a, "internal.addGaSendListener", Yu);
        cg(a, "internal.addHistoryChangeListener", gv);
        cg(a, "internal.evaluateFilteringRules", ox);
        cg(a, "internal.evaluateMatchingRules", qx);
        cg(a, "internal.getFlags", Of);
        cg(a, "internal.locateUserData", Yx);
        cg(a, "internal.registerGtagCommandListener",
            hy);
        cg(a, "internal.sendGtagEvent", ly);
        a.add("JSON", Rf(function(c) { var d = this.g.g;
            d && d.log.call(this, "error", c) }));
        cg(a, "internal.appendRemoteConfigParameter", Sv), cg(a, "internal.getRemoteConfigParameter", Hx), cg(a, "internal.setRemoteConfigParameter", sy), cg(a, "internal.sortRemoteConfigParameters", vy), cg(a, "internal.getProductSettingsParameter", Cx), cg(a, "internal.setProductSettingsParameter",
            ry);
        sn() ? cg(a, "internal.injectScript", Da) : cg(a, "internal.injectScript", Tx);

        return function(c) {
            var d;
            if (a.g.hasOwnProperty(c)) d = a.get(c, this);
            else {
                var e;
                if (e = a.o.hasOwnProperty(c)) { var f = !1,
                        g = this.g.g; if (g) { var h = g.md(); if (h) { 0 !== h.indexOf("__cvt_") && (f = !0); } }
                    e = f }
                if (e) {
                    var k = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
                    d = k
                } else throw Error(c + " is not a valid API name.");
            }
            return d
        }
    };
    var Cy = function() { return !1 },
        Dy = function() { var a = {}; return function(b, c, d) {} };
    var Ey;

    function Fy() {
        var a = Ey;
        return function(b, c, d) {
            var e = d && d.event;
            Gy(c);
            var f = new mb;
            Pa(c, function(q, r) { var t = xc(r);
                void 0 === t && void 0 !== r && og(44);
                f.set(q, t) });
            a.g.g.I = Fe();
            var g = { dj: Re(b), eventId: void 0 !== e ? e.id : void 0, ce: void 0 !== e ? function(q) { return e.Mb.ce(q) } : void 0, md: function() { return b }, log: function() {}, kh: { index: d && d.index, type: d && d.type } };
            if (Cy()) {
                var h =
                    Dy(),
                    k = void 0,
                    n = void 0;
                g.Oa = { Xf: [], ad: {}, Va: function(q, r, t) { 1 === r && (k = q);
                        7 === r && (n = t);
                        h(q, r, t) }, Nf: Wf() };
                g.log = function(q, r) { if (k) { var t = Array.prototype.slice.call(arguments, 1);
                        h(k, 4, { level: q, source: n, message: t }) } }
            }
            var p = Od(a, g, [b, f]);
            a.g.g.I = void 0;
            p instanceof pa && "return" === p.g && (p = p.o);
            return yc(p)
        }
    }

    function Gy(a) { var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ea(b) && (a.gtmOnSuccess = function() { I(b) });
        Ea(c) && (a.gtmOnFailure = function() { I(c) }) }

    function Hy() { Ey.g.g.P = function(a, b, c) { U.SANDBOXED_JS_SEMAPHORE = U.SANDBOXED_JS_SEMAPHORE || 0;
            U.SANDBOXED_JS_SEMAPHORE++; try { return a.apply(b, c) } finally { U.SANDBOXED_JS_SEMAPHORE-- } } }

    function Iy(a) { void 0 !== a && Pa(a, function(b, c) { for (var d = 0; d < c.length; d++) { var e = c[d].replace(/^_*/, "");
                Kh[e] = Kh[e] || [];
                Kh[e].push(b) } }) };
    var Jy = encodeURI,
        Y = encodeURIComponent,
        Ky = Yb;
    var Ly = function(a, b) { if (!a) return !1; var c = ni(pi(a), "host"); if (!c) return !1; for (var d = 0; b && d < b.length; d++) { var e = b[d] && b[d].toLowerCase(); if (e) { var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e); if (0 <= f && c.indexOf(e, f) == f) return !0 } } return !1 };
    var My = function(a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null };
    var Wz = !1;
    var Xz = {};
    Xz[T.ic] = "";
    Xz[T.Ia] = "";
    Xz[T.Ra] = "";
    Xz[T.qa] = "auto";
    Xz[T.pb] = "/";
    Xz[T.Aa] = 63072E3;
    Xz[T.Vc] = 30;
    Xz[T.Rd] = 1E4;
    Xz[T.ma] = !0;
    var Yz = function(a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        up.call(this, a, b, d);
        this.o = c;
        this.M = d.eventModel;
        this.Ig = d.containerConfig;
        Wz || (this.I = d.getWithConfig(T.Ha) ? 1 : 8, this.Qg = this.sc = !1);
        Wz || (this.lf = d.getWithConfig(T.qb) ? 1 : 8);
        this.C =
            e;
        this.P = this.kf = this.Xg = this.s = this.Tg = !1;
        this.Tb = 0;
        this.rf = this.Db = !1;
        this.sf = void 0;
        this.$a = 0;
        this.Wg = this.g = this.pf = this.Mg = void 0;
        this.Ug = !1;
        this.Kg = this.qf = void 0;
        this.Xi = f
    };
    ma(Yz, up);
    l = Yz.prototype;
    l.Ta = function(a, b) { void 0 === this.B(a) && (this.M[a] = b) };
    l.Jh = function(a, b) { if (Wz) { var c = this.metadata.client_id_source; if (void 0 === c || b <= c) this.H[T.Ha] = a, this.M[T.Ha] = void 0, this.metadata.client_id_source = b } else b <= this.I && (this.M[T.Ha] = a, this.I = b) };
    l.vk = function(a, b) {
        if (Wz) {
            var c = this.metadata.enhanced_client_id_source;
            if (void 0 === c || b <= c) this.H[T.qb] = a, this.metadata.enhanced_client_id_source = b
        } else b <= this.lf && (this.M[T.qb] = a, this.lf = b)
    };
    l.B = function(a) { return void 0 !== this.M[a] ? this.M[a] : void 0 !== this.F.getWithConfig(a) ? this.F.getWithConfig(a) : void 0 !== this.C[a] ? this.C[a] : Xz[a] };
    l.getRemoteConfig = function(a) { return void 0 !== this.F.remoteConfig[a] ? this.F.remoteConfig[a] : this.C[a] };
    l.Qb = function(a) { var b = this.Rb(T.Md, this.C[T.Md]); if (b && void 0 !== b[a || this.eventName]) return b[a || this.eventName] };
    l.Rb = function(a,
        b) { var c = $h(this.va); return c && c.hasOwnProperty(a) ? c[a] : b };
    l.ph = function() { var a;
        a = Wz ? this.metadata.user_data : this.B(T.Ca); if ("object" === typeof a) return a };
    l.rh = function() { return !!this.ph() };
    l.abort = function() { throw "ABORT"; };
    l.Ma = function() { return !(!0 !== this.B(T.Qc) && "true" !== this.B(T.Qc) || !this.B(T.Ba)) };
    l.Vj = function() { return (Wz ? this.metadata.is_session_start : this.s) || !!this.B(T.og) };
    l.Jf = function() {
        var a = !1;
        return a
    };
    l.rd = function() { return this.Rb(T.Ze, !1) };
    var Zz = !1,
        $z = function(a) { var b = a.eventName === T.Gc && Cg() && a.Ma(),
                c = a.metadata.is_conversion || a.Db,
                d = a.metadata.is_session_start || a.s,
                e = a.metadata.create_dc_join || a.kf,
                f = a.metadata.create_google_join || a.P,
                g = (a.g || a.metadata.euid_mode_enabled) && a.rh(); return !(!Ob.sendBeacon || c || g || d || e || f || b || Zz) };
    var aA = !1;
    var bA = function(a) { lg("GA4_EVENT", a) };
    var dA = function(a) { return !a || cA.test(a) || T.Ii.hasOwnProperty(a) },
        eA = function(a, b, c) { for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) { var f = d[e]; if (f.edit_param) { var g = f.edit_param.param_name,
                        h = sx(a, b, f.edit_param.param_value),
                        k; if (h) { var n = Number(h);
                        k = isNaN(n) ? h : n } else k = h;
                    b[g] = k } else f.delete_param && delete b[f.delete_param.param_name] } },
        cA = /^(_|ga_|google_|gtag\.|firebase_).*$/;
    var fA = function(a) { var b = 0,
                c = 0; return { start: function() { b = Xa() }, stop: function() { c = this.get() }, get: function() { var d = 0;
                    a.Kf() && (d = Xa() - b); return d + c } } },
        gA = !1;
    var hA = function() { this.g = void 0;
        this.o = 0;
        this.isActive = this.isVisible = this.s = !1;
        this.I = this.C = void 0 };
    l = hA.prototype;
    l.Li = function(a) {
        var b = this;
        if (!this.g) {
            this.s = H.hasFocus();
            this.isVisible = !H.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                Zb(d,
                    e,
                    function(g) { b.g.stop();
                        f(g);
                        b.Kf() && b.g.start() })
            };
            c(m, "focus", function() { b.s = !0 });
            c(m, "blur", function() { b.s = !1 });
            c(m, "pageshow", function(d) { b.isActive = !0;
                d.persisted && og(56);
                b.I && b.I() });
            c(m, "pagehide", function() { b.isActive = !1;
                b.C && b.C() });
            c(H, "visibilitychange", function() { b.isVisible = !H.hidden });
            a.Ma() && -1 === (Ob.userAgent || "").indexOf("Firefox") && -1 === (Ob.userAgent || "").indexOf("FxiOS") && c(m, "beforeunload", function() {
                Zz = !0
            });
            this.Tf();
            this.o = 0
        }
    };
    l.Tf = function() { this.o += this.qe();
        this.g = fA(this);
        this.Kf() && this.g.start() };
    l.Bk = function(a) { var b = this.qe();
        a.$a = b };
    l.Hj = function(a) { gA ? a.H[T.Ld] = void 0 : a.$a = 0;
        this.Tf();
        this.o = 0 };
    l.Kf = function() { return this.s && this.isVisible && this.isActive };
    l.Cj = function() {
        return this.o +
            this.qe()
    };
    l.qe = function() { return this.g && this.g.get() || 0 };
    l.kk = function(a) { this.C = a };
    l.Gh = function(a) { this.I = a };

    function iA() { return m.gaGlobal = m.gaGlobal || {} }
    var jA = function() { var a = iA();
            a.hid = a.hid || La(); return a.hid },
        kA = function(a, b) { var c = iA(); if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b };
    var oA = function(a, b) { var c; var d = lA(b),
                e = String(b.B(T.qa)),
                f = String(b.B(T.pb)),
                g = Number(b.B(T.Aa)),
                h = b.B(T.jc),
                k = { lb: T.R, domain: e, path: f, expires: g ? new Date(Xa() + 1E3 * g) : void 0, flags: "" + b.B(T.Ra) }; if (!1 === h && mA(b) === a) c = !0;
            else { var n = jj(a, nA[0], e, f);
                c = 1 !== bj(d, n, k) } return c },
        mA = function(a) { var b = lA(a),
                c = "" + a.B(T.qa),
                d = "" + a.B(T.pb),
                e = ij(b, c, d, nA, T.R); if (!e) { var f = String(a.B(T.ic));
                f && f != b && (e = ij(f, c, d, nA, T.R)) } return e },
        lA = function(a) { return String(a.B(T.Ia)) + "_ga" },
        pA = !1;
    var nA = ["GA1"];
    var sA = function(a, b) { var c = qA(b),
                d = String(b.B(T.qa)),
                e = String(b.B(T.pb)),
                f = Number(b.B(T.Aa)),
                g = jj(a, rA[0], d, e),
                h = { lb: T.R, domain: d, path: e, expires: f ? new Date(Xa() + 1E3 * f) : void 0, flags: String(b.B(T.Ra)) }; return 1 !== bj(c, g, h) },
        tA = function(a) { var b = qA(a),
                c = String(a.B(T.qa)),
                d = String(a.B(T.pb)); return ij(b, c, d, rA, T.R) },
        uA = function(a, b, c, d, e, f, g) { if (a && b) { var h = [a, b, Ra(c), d, e]; return h.join(".") } },
        vA = !1;
    var rA = ["GS1"],
        qA = function(a) { return String(a.B(T.Ia)) + "_ga_" + a.va.substr(2) },
        wA = function(a) { return vA ? uA(a.H[T.Hb], a.H[T.Xc], a.H[T.Wc], a.o, a.metadata.join_timer_sec || 0, !!a.metadata[T.Pc], a.H[T.qb]) : uA(a.M[T.Hb], a.M[T.Xc], a.M[T.Wc], a.o, a.Tb, !!a.M[T.Pc], a.M[T.qb]) };
    var xA = function(a) { var b = a.B(T.ra),
                c = a.getRemoteConfig(T.ra); if (c === b) return c; var d = wc(b);
            c && c[T.T] && (d[T.T] = (d[T.T] || []).concat(c[T.T])); return d },
        yA = function(a, b) { var c = Rj(!0); return "1" !== c._up ? {} : { clientId: c[a], Ih: c[b] } },
        zA = function(a, b, c) { var d = Rj(!0),
                e = d[b];
            e && (a.Jh(e, 2), oA(e, a)); var f = d[c];
            f && sA(f, a); return !(!e || !f) },
        AA = !1,
        BA = function(a) {
            var b = xA(a) || {},
                c = lA(a),
                d = qA(a);
            ak(b[T.mc], !!b[T.T]) && zA(a, c, d) && (AA = !0);
            b[T.T] && Xj(function() {
                var e = {},
                    f = mA(a);
                f && (e[c] = f);
                var g = tA(a);
                g && (e[d] = g);
                var h =
                    Ti("FPLC", void 0, void 0, T.R);
                h.length && (e._fplc = h[0]);
                return e
            }, b[T.T], b[T.Sc], !!b[T.nc])
        },
        DA = function(a) { if (!a.B(T.vb)) return {}; var b = lA(a),
                c = qA(a);
            Yj(function() { var d; if (Pg("analytics_storage")) d = {};
                else { var e = {};
                    d = (e._up = "1", e[b] = a.M[T.Ha], e[c] = wA(a), e) } return d }, 1); return !Pg("analytics_storage") && CA() ? yA(b, c) : {} },
        CA = function() { var a = mi(m.location, "host"),
                b = mi(pi(H.referrer), "host"); return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1 },
        EA = function(a) {
            if (!a) return a;
            var b = String(a);
            b = Qj(b);
            return b = Qj(b, "_ga")
        };
    var FA = function() { var a = Xa(),
            b = a + 864E5,
            c = 20,
            d = 5E3; return function() { var e = Xa();
            e >= b && (b = e + 864E5, d = 5E3); if (1 > d) return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e; if (1 > c) return !1;
            d--;
            c--; return !0 } };
    var HA = function(a) { var b;
            b = GA ? a.H[T.Sa] : a.B(T.Sa); return ni(pi(b), "host", !0) },
        IA = !1;
    var GA = !1;
    var JA = !1;
    JA = !0;
    var KA = "" + La(),
        LA = !1,
        MA = void 0;
    var NA = function() { if (Ea(m.__uspapi)) { var a = ""; try { m.__uspapi("getUSPData", 1, function(b, c) { if (c && b) { var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d) } }) } catch (b) {} return a } };
    var OA = function(a, b) { if (b.Ma()) { var c = NA();
                c && (a.us_privacy = c); var d = Vn();
                d && (a.gdpr = d); var e = Un();
                e && (a.gdpr_consent = e) } },
        PA = function(a, b) { if (Cg() && (a.gcs = Qg(), b.qf && (a.gcu = "1"), b.Ma())) { Dg() && (a.gcd = Rg()); var c = b.B(T.aa);
                a.adr = void 0 !== c && !1 !== c ? "1" : "0";
                b.qf && (a.gcut = T.Fe[b.Kg || ""]) } },
        QA = function(a, b, c) { void 0 === c && (c = {}); if ("object" === typeof b)
                for (var d in b) QA(a + "." + d, b[d], c);
            else c[a] = b; return c },
        TA = function(a) { var b = Um(a.B(T.Ba), "/g/collect"); if (b) return b; var c = a.Rb(T.sb, a.B(T.sb)); return c && !a.rd() && !1 !== a.B(T.Hc) && Vp() && Pg(T.D) && Pg(T.R) ? RA() : SA() },
        UA = !1;
    var VA = !1;
    var WA = !1;
    var XA = !1;
    var YA = "",
        ZA = !1;
    var $A = {};
    $A[T.Gi] = "tid";
    $A[T.Ha] = "cid";
    $A[T.tb] = "ul";
    $A[T.Ye] = "_fid";
    $A[T.Td] = "tt";
    $A[T.Rc] = "ir";
    $A[T.ef] = "sr";
    var aB = {};
    aB[T.Hb] = "sid";
    aB[T.Xc] = "sct";
    aB[T.Wc] = "seg";
    aB[T.fb] = "dl";
    aB[T.Sa] = "dr";
    aB[T.Tc] = "dt";
    aB[T.ka] = "cu";
    aB[T.Ja] = "uid";
    var bB = {};
    var cB = {};
    cB[T.Ic] = "cc";
    cB[T.Jc] = "ci";
    cB[T.Kc] = "cm";
    cB[T.Lc] = "cn";
    cB[T.Mc] = "cs";
    cB[T.Nc] =
        "ck";
    var SA = function() { var a = "www";
            ZA && YA && (a = YA); return "https://" + a + ".google-analytics.com/g/collect" },
        RA = function() { var a;
            ZA && YA && (a = YA); return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect" },
        dB = function(a, b, c) {
            function d(C, E) {
                if (void 0 !== E && !T.Fg.hasOwnProperty(C)) {
                    null === E && (E = "");
                    var Q =
                        E;
                    !0 === E && (Q = "1");
                    !1 === E && (Q = "0");
                    var K;
                    if ("_" === C.charAt(0)) e[C] = Xe(Q, 300);
                    else if ($A[C]) K = $A[C], e[K] = Xe(Q, 300);
                    else if (aB[C]) K = aB[C], g[K] = Xe(Q, 300);
                    else if (bB[C]) K = bB[C], f[K] = Xe(Q, 300);
                    else { var J;
                        (J = v(C, E)) || (cB[C] ? J = !0 : C !== T.cb ? J = !1 : ("object" !== typeof E && u(C, E), J = !0));
                        J || u(C, E) }
                }
            }
            var e = {},
                f = {},
                g = {};
            e.v = "2";
            e.tid = a.va;
            e.gtm = wn();
            e._p = jA();
            a.sf && (e.sr = a.sf);
            a.pf && (e._z = a.pf);
            c && (e.em = c);
            if (UA ? a.metadata.create_google_join : a.P) e._gaz = 1;
            PA(e, a);
            OA(e, a);
            a.Wg && (e.gtm_up = "1");
            var h = void 0;
            VA ? h = a.H[T.Jk] : h = gb(a.F.getMergedValues(T.Z, 1), ".");
            h && (e.gdid = h);
            f.en = Xe(a.eventName, 40);
            var k = UA ? a.metadata.is_first_visit_conversion : a.Tg;
            UA ? a.metadata.is_first_visit && (f._fv = k ? 2 : 1) : a.sc && (f._fv = k ? 2 : 1);
            UA ? a.metadata.is_new_to_site && (f._nsi =
                1) : a.Qg && (f._nsi = 1);
            var n = UA ? a.metadata.is_session_start_conversion : a.Xg;
            UA ? a.metadata.is_session_start && (f._ss = n ? 2 : 1) : a.s && (f._ss = n ? 2 : 1);
            UA ? a.metadata.is_conversion && (f._c = 1) : a.Db && (f._c = 1);
            0 < a.$a && !UA && (f._et = a.$a);
            if (a.metadata.is_ecommerce || a.rf) { var p = a.H[T.da] || a.B(T.da); if (Ja(p))
                    for (var q = 0; q < p.length && 200 > q; q++) f["pr" + (q + 1)] = bf(p[q]) }
            var r = WA ? a.metadata.event_usage : a.Mg;
            r && (f._eu = r);
            var t = void 0;
            VA ? t = a.H[T.Ik] : t = gb(a.F.getMergedValues(T.Z, 2), ".");
            t && (f.edid = t);
            for (var u = function(C, E) {
                    C = Xe(C,
                        40);
                    var F = "ep." + C,
                        Q = "epn." + C;
                    C = Ha(E) ? Q : F;
                    var K = Ha(E) ? F : Q;
                    f.hasOwnProperty(K) && delete f[K];
                    f[C] = Xe(E, 100)
                }, v = function(C, E) { var F = C.split("."); if (C === T.Ca && "object" !== typeof E) return u(C, E), !0; if (F[0] === T.Ca) { if ((1 < F.length || "object" === typeof E) && a.Ma()) { var Q = QA(C, E);
                            Pa(Q, function(K, J) { return void u(K, J) }) } return !0 } return !1 }, y = 0; y < T.Eg.length; ++y) { var x = T.Eg[y];
                d(x, a.B(x)) }
            a.rf && d(T.ka, a.B(T.ka));
            Pa(a.Ig, d);
            Pa(a.M, d);
            Pa(a.H, d);
            if (!XA) { var w = a.F.getKeysFromFirstOfAnyScope([T.cb, T.Ic, T.Jc, T.Kc, T.Lc, T.Mc, T.Nc]),
                    A = function(C, E) { if (void 0 !== E) { null === E && (E = ""); var F = cB[C];
                            F && (g[F] = Xe(E, 300)) } };
                vc(w[T.cb]) ? Pa(w[T.cb], function(C, E) { A((T.cb + "_" + C).toLowerCase(), E) }) : Pa(w, A) }
            var B;
            B = a.H[T.Ka];
            B = B || a.B(T.Ka) || {};
            !1 !== a.B(T.ba) && Wp() || (B._npa = "1");
            Pa(B, function(C, E) {
                if (void 0 !== E && (null === E && (E = ""), b[C] !== E)) {
                    if (C !== T.Ja || g.uid) {
                        var F =
                            (Ha(E) ? "upn." : "up.") + Xe(C, 24);
                        f[F] = Xe(E, 36)
                    } else g.uid = Xe(E, 36);
                    b[C] = E
                }
            });
            var D = !1;
            return df.call(this, { Ea: e, Xb: g, M: f }, TA(a), a.Ma(), D) || this
        };
    ma(dB, df);
    var eB = function(a, b) { return a.replace(/\$\{([^\}]+)\}/g, function(c, d) { return b[d] || c }) },
        fB = function(a) { var b = a.search; return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse") },
        gB = function(a) { var b = {},
                c = "",
                d = a.pathname.indexOf("/g/collect");
            0 <= d && (c = a.pathname.substring(0, d));
            b.transport_url = a.protocol + "//" + a.hostname + c; return b },
        hB = function(a, b) {
            var c = new m.XMLHttpRequest;
            c.withCredentials = !0;
            var d = b ? "POST" : "GET",
                e = "",
                f = 0,
                g = pi(a),
                h = gB(g),
                k = fB(g);
            c.onprogress = function(n) {
                if (200 ===
                    c.status) {
                    e += c.responseText.substring(f);
                    f = n.loaded;
                    for (var p = eB(e, h), q = p.indexOf("\n\n"); - 1 !== q;) {
                        var r;
                        a: { var t = ea(p.substring(0, q).split("\n")),
                                u = t.next().value,
                                v = t.next().value; if (u.startsWith("event: message") && v.startsWith("data: ")) try { r = JSON.parse(v.substring(v.indexOf(":") + 1)); break a } catch (Q) {}
                            r = void 0 }
                        if (r) {
                            var y = r.send_pixel || [];
                            if (Array.isArray(y))
                                for (var x = 0; x < y.length; x++) {
                                    var w = y[x],
                                        A = xn('', 0);
                                    if (1 === A) {
                                        var B = Math.floor(2 * Math.random()) +
                                            1,
                                            D, C = w,
                                            E = B,
                                            F = 0 < C.indexOf("?") ? "&" : "?";
                                        D = "" + C + F + "gtmexpsb=" + E;
                                        2 === B ? ec(D) : Yb(D)
                                    } else 2 === A ? ec(w) : Yb(w)
                                }
                        }
                        p = p.substring(q + 2);
                        q = p.indexOf("\n\n")
                    }
                    e = p
                }
            };
            c.open(d, k);
            c.send(b)
        };
    var kB = function(a, b, c, d) { var e = a + "?" + b;
            iB && (d = !(0 === e.indexOf(SA()) || 0 === e.indexOf(RA())));
            d && !Zz ? hB(e, c) : jB(a, b, c) },
        iB = !1;
    var lB = !1;
    var mB = function() { this.C = 1;
        this.I = {};
        this.g = new ef;
        this.o = -1 };
    mB.prototype.s = function(a,
        b) { var c = this,
            d; try { d = new dB(a, this.I, b) } catch (t) { a.abort() } var e = $z(a);
        e && this.g.C(d) || this.flush(); if (e && this.g.add(d)) { if (0 > this.o) { var f = m,
                    g = f.setTimeout,
                    h;
                a.Ma() ? nB ? (nB = !1, h = oB) : h = pB : h = 5E3;
                this.o = g.call(f, function() { return c.flush() }, h) } } else { var k = gf(d, this.C++);
            kB(d.o, k.Rf, k.body, d.C); var n = a.metadata.create_dc_join || a.kf,
                p = a.metadata.create_google_join || a.P,
                q = !1 !== a.B(T.la),
                r = !1 !== a.B(T.ba);
            qB(d, { sk: n, tk: p, Fj: String(a.Rb(T.Pd, a.B(T.Pd))), vf: q, aj: r, rd: a.rd() }) } };
    mB.prototype.add = function(a) {
        (lB ?
            a.metadata.euid_mode_enabled : a.g) && !Zz ? this.P(a) : this.s(a)
    };
    mB.prototype.flush = function() { if (this.g.events.length) { var a = hf(this.g, this.C++);
            kB(this.g.g, a.Rf, a.body, this.g.o);
            this.g = new ef;
            0 <= this.o && (m.clearTimeout(this.o), this.o = -1) } };
    mB.prototype.P = function(a) { var b = this,
            c = a.ph();
        c ? qh(c, function(d) { b.s(a, 1 === d.split("~").length ? void 0 : d) }) : this.s(a) };
    var qB = function(a, b) {
            function c(q) { n.push(q + "=" + encodeURIComponent("" + a.Ea[q])) } var d = b.sk,
                e = b.tk,
                f = b.Fj,
                g = b.vf,
                h = b.aj,
                k = b.rd; if (d || e) { var n = [];
                c("tid");
                c("cid");
                c("gtm");
                n.push("aip=1");
                a.Xb.uid && n.push("uid=" + encodeURIComponent("" + a.Xb.uid));
                d && (jB("https://stats.g.doubleclick.net/g/collect", "v=2&" + n.join("&")), Jg("https://stats.g.doubleclick.net/g/collect?v=2&" + n.join("&"))); if (e) { n.push("z=" + La()); if (!k) { var p = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                        p && Yb(p + n.join("&")) } } } },
        jB = function(a, b, c) { var d = a + "?" + b;
            c ? Ob.sendBeacon && Ob.sendBeacon(d, c) : ec(d) },
        oB = xn('', 500),
        pB = xn('', 5E3),
        nB = !0;
    var rB = window,
        sB = document,
        tB = function(a) { var b = rB._gaUserPrefs; if (b && b.ioo && b.ioo() || a && !0 === rB["ga-disable-" + a]) return !0; try { var c = rB.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) {} for (var d = Ni("AMP_TOKEN", String(sB.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return sB.getElementById("__gaOptOutExtension") ? !0 : !1 };
    var uB = {};
    var vB = function(a, b, c) { c || (c = function() {}); var d = function(e) { void 0 !== e[b] && (e[b] = c(e[b])) };
            d(a.H);
            d(a.M);
            d(a.Ig);
            d(a.F.globalConfig) },
        wB = function() { var a = m.screen; return (a ? a.width : 0) + "x" + (a ? a.height : 0) },
        xB = function(a) { var b = Ti("_opt_expid", void 0, void 0, T.R)[0]; if (b) { var c = decodeURIComponent(b).split("$"); if (3 === c.length) return c[2] } if (void 0 !== U.ga4_referrer_override) return U.ga4_referrer_override; var d = Rh("gtm.gtagReferrer." + a.va); return d ? "" + d : H.referrer },
        yB = function() {
            var a = "",
                b = H.location;
            if (b) {
                var c =
                    b.pathname || "";
                "/" != c.charAt(0) && (c = "/" + c);
                a = b.protocol + "//" + b.hostname + c + b.search
            }
            return a
        },
        zB = function(a, b) { var c = T.D;
            Pg(c) || Tg(function() { b.qf = !0;
                b.Kg = c;
                a.Yg(b) }, c) },
        AB = {};
    uB.Hi = "";
    var BB = {},
        CB = (BB[T.Ic] = !0, BB[T.Jc] = !0, BB[T.Kc] = !0, BB[T.Lc] = !0, BB[T.Mc] = !0, BB[T.Nc] = !0, BB),
        DB = function(a, b) { this.$a = a;
            this.sc = b;
            this.P = new mB;
            this.g = void 0;
            this.C = new hA;
            this.o = this.s = void 0;
            this.I = !1;
            this.Db = void 0 };
    l = DB.prototype;
    l.ek = function(a, b, c) {
        var d = this,
            e = !1;
        if (c.eventModel[T.Ib]) {
            e = !0;
            if ("_" ===
                a.charAt(0)) return;
            a !== T.Ga && a !== T.Pa && dA(a) && og(58);
            EB(c)
        }
        var f = new Yz(this.$a, a, b, c, this.sc, e),
            g = [T.R],
            h = !1;
        h = f.Ma();
        (f.Rb(T.sb, f.B(T.sb)) || h) && g.push(T.D);
        Ug(function() { d.fk(f) }, g)
    };
    l.fk = function(a) {
        this.o = a;
        try {
            tB(a.va) && (og(28), a.abort());
            0 <= uB.Hi.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (og(33), a.abort());
            var b = a.Qb();
            b && b.blacklisted && (og(34), a.abort());
            var c = H.location.protocol;
            "http:" !=
            c && "https:" != c && (og(29), a.abort());
            Ob && "preview" == Ob.loadPurpose && (og(30), a.abort());
            var d = U.grl;
            d || (d = FA(), U.grl = d);
            d() || (og(35), a.abort());
            FB(a);
            this.Mi(a);
            this.C.Bk(a);
            var g = this.Eh,
                h;
            a.B(T.vb) && !Pg(T.R) && 1 !== a.I && (a.Wg = !0);
            a.eventName === T.Ga ? (a.B(T.vb) && yk(["aw", "dc"]), BA(a), h = DA(a)) : h = {};
            g.call(this, h);
            a.eventName == T.Ga && (a.Xi && 0 < a.F.getEventModelKeys().length && (og(68), 1 < U.configCount && og(69)), a.B(T.ma) || a.abort(), a.F.eventModel[T.Z] && (a.F.containerConfig[T.Z] =
                a.F.eventModel[T.Z], a.F.eventModel[T.Z] = void 0, AB[8] && (a.H[T.Z] = void 0)), a.eventName = T.Gc);
            var v = this.g,
                y = this.s,
                x = this.C,
                w = tA(a);
            w || (w = y);
            var A = Ra(a.B(T.Vc)),
                B;
            B = Ra(a.B(T.Rd));
            var D;
            a: { if (w) { var C = w.split("."); if (!(5 > C.length || 7 < C.length)) { D = { sessionId: C[0], ze: Number(C[1]), Ad: !!Number(C[2]), Lf: Number(C[3]), Tb: Number(C[4] || 0), Ub: "1" === C[5], ne: "0" !== C[6] ? C[6] : void 0 }; break a } }
                D = void 0 }
            vA && (a.metadata.is_first_visit = !1, a.metadata.is_session_start = !1, a.metadata.join_timer_sec = 0);
            if (D && D.Tb) { var E = Math.max(0, D.Tb - Math.max(0, a.o - D.Lf));
                vA ? a.metadata.join_timer_sec = E : a.Tb = E }
            var F = !1;
            D || (vA ? a.metadata.is_first_visit = !0 : a.sc = !0, F = !0, D = {
                sessionId: String(a.o),
                ze: 1,
                Ad: !1,
                Lf: a.o,
                Ub: !1,
                ne: void 0
            });
            a.o > D.Lf + 60 * A && (F = !0, D.sessionId = String(a.o), D.ze++, D.Ad = !1, D.ne = void 0);
            if (F) vA ? a.metadata.is_session_start = !0 : a.s = !0, x.Hj(a);
            else if (x.Cj() > B || a.eventName == T.Gc) D.Ad = !0;
            if (vA) { vp(a, T.Hb, D.sessionId);
                vp(a, T.Xc, D.ze);
                vp(a, T.Wc, D.Ad ? 1 : 0); } else { a.Ta(T.Hb, D.sessionId);
                a.Ta(T.Xc, D.ze);
                a.Ta(T.Wc, D.Ad ? 1 : 0); }
            var N =
                a.B(T.Ha),
                M;
            pA ? (a.metadata.is_new_to_site = !1, M = N ? 1 : 8) : M = a.I;
            N || (N = mA(a), M = 3);
            N || (N = v, M = 5);
            if (!N) { var V = Pg(T.R),
                    ba = iA();
                N = !ba.from_cookie || V ? ba.vid : void 0;
                M = 6 }
            N ? N = "" + N : (N = fj(), M = 7, pA ? a.metadata.is_first_visit = a.metadata.is_new_to_site = !0 : a.sc = a.Qg = !0);
            a.Jh(N, M);
            HB(a);
            a: {
                a.Ta(T.fb, yB());
                var S = xB(a);S && a.Ta(T.Sa, S);a.Ta(T.Tc, H.title);a.Ta(T.tb, (Ob.language || "").toLowerCase());a.sf = wB()
            }
            AB[1] && (a.metadata.create_dc_join = !1, a.metadata.create_google_join = !1);
            if (!1 !== a.B(T.Hc) && Vp() && Pg(T.D)) {
                var sa = a.Rb(T.sb, a.B(T.sb));
                a.Vj() && (AB[1] ? a.metadata.create_dc_join = !!sa : a.kf = !!sa);
                var Ga;
                AB[1] ? Ga = a.metadata.join_timer_sec : Ga = a.Tb;
                sa && 0 === (Ga || 0) &&
                    (AB[1] ? (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0) : (a.Tb = 60, a.P = !0))
            }
            IB(a);
            var Ba = T.Gg.hasOwnProperty(a.eventName);
            AB[2] ? Ba && (a.metadata.is_ecommerce = !0, vp(a, T.da), vp(a, T.ka)) : a.rf = Ba;
            AB[6] && vp(a, T.Td);
            for (var Ia = a.B(T.af) || [], da = 0; da < Ia.length; da++) { var xa = Ia[da]; if (xa.rule_result) { AB[6] ? vp(a, T.Td, xa.traffic_type) : a.Ta(T.Td, xa.traffic_type);
                    bA(3); break } }
            if (a.B(T.Ba)) {
                var Oa = xA(a) || {},
                    Ta = ak(Oa[T.mc], !!Oa[T.T]) ? Rj(!0)._fplc : void 0;
                a.M._fplc = Ta || (0 < Ti("FPLC", void 0, void 0, T.R).length ?
                    void 0 : "0")
            }
            if (void 0 !== a.B(T.Rc)) IA && vp(a, T.Rc);
            else {
                var xb = a.B(T.Qd),
                    $a, he;
                a: { if (AA) { var Zk = xA(a) || {}; if (Zk && Zk[T.T])
                            for (var Lr = HA(a), uh = Zk[T.T], pf = 0; pf < uh.length; pf++)
                                if (uh[pf] instanceof RegExp) { if (uh[pf].test(Lr)) { he = !0; break a } } else if (0 <= Lr.indexOf(uh[pf])) { he = !0; break a } }
                    he = !1 }
                var vh;
                if (!(vh = he))
                    if (JA) vh = !1;
                    else {
                        var NB = HA(a),
                            wh;
                        var $k = String(a.B(T.qa));
                        if ("none" !== $k)
                            if ("auto" !== $k) wh = $k;
                            else {
                                if (!LA) {
                                    for (var Mr = String(a.B(T.pb)), qf = Zi(), ie = 0; ie < qf.length; ie++)
                                        if ("none" !== qf[ie]) {
                                            var Nr = String(a.B(T.Ia)) +
                                                "_ga_autodomain";
                                            if (0 === bj(Nr, KA, { lb: T.R, domain: qf[ie], path: Mr })) { bj(Nr, void 0, { lb: T.R, domain: qf[ie], path: Mr });
                                                MA = qf[ie]; break }
                                        }
                                    LA = !0
                                }
                                wh = MA
                            }
                        else wh = void 0;
                        var Or = wh;
                        vh = Or ? 0 <= NB.indexOf(Or) : !1
                    }
                if (!($a = vh)) { var xh; if (xh = xb) a: { for (var Pr = xb.include_conditions || [], OB = HA(a), al = 0; al < Pr.length; al++)
                            if (Pr[al].test(OB)) { xh = !0; break a }
                        xh = !1 }
                    $a = xh }
                $a && (IA ? a.H[T.Rc] = "1" : a.Ta(T.Rc, 1), bA(4))
            }
            if (a.Ma() && Cg()) {}
            if (a.eventName ==
                T.Pa) { var Qr = a.B(T.eb),
                    PB = a.B(T.rb),
                    Rr = void 0;
                Rr = a.H[Qr];
                PB(Rr || a.B(Qr));
                a.abort() }
            if (a.M[T.vc]) delete a.M[T.vc];
            else {
                var bl = a.B(T.Te);
                if (bl) {
                    for (var Sr = bl.edit_rules || [], Tr = !1, cl = 0; cl < Sr.length; cl++) {
                        var yh;
                        a: {
                            var Kb = a,
                                Ad = Sr[cl];
                            if (vx(Kb.eventName, Kb.M, Ad.event_name_predicate, Ad.conditions || [])) {
                                if (Ad.new_event_name) {
                                    var Ur = Fa(Ad.new_event_name) ? String(Ad.new_event_name) : sx(Kb.eventName, Kb.M, Ad.new_event_name);
                                    if (dA(Ur)) { yh = !1; break a }
                                    Kb.eventName = String(Ur)
                                }
                                eA(Kb.eventName, Kb.M, Ad);
                                var Vr = Kb.M[T.vc] = !0;
                                bA(2);
                                if (Vr) { var Wr = ng();
                                    Wr && (Kb.M[T.Yc] = Wr);
                                    Tq(Kb.eventName, Kb.M, Kb.va);
                                    Kb.abort() }
                                yh = !0
                            } else yh = !1
                        }
                        yh && (Tr = !0)
                    }
                    for (var Xr = bl.synthesis_rules || [], dl = 0; dl < Xr.length; dl++) {
                        var zh = a,
                            rf = Xr[dl];
                        if (vx(zh.eventName, zh.M, rf.event_name_predicate, rf.conditions || [])) {
                            var el = rf.new_event_name;
                            if (!dA(el)) { var fl = rf.merge_source_event_params ? wc(zh.M) : {};
                                fl[T.vc] = !0;
                                eA(el, fl, rf);
                                Tq(el, fl, zh.va);
                                bA(1) }
                        }
                    }
                }
            }
            var gl = a.M[T.Yc];
            if (Ja(gl))
                for (var hl = 0; hl < gl.length; hl++) bA(gl[hl]);
            var il = mg("GA4_EVENT");
            il && (aA ? a.metadata.event_usage =
                il : a.Mg = il);
            JB(a);
            var RB = this.Eh,
                Zr = this.g,
                jl;
            var kl = wA(a);
            kl ? (sA(kl, a) || (og(25), a.abort()), jl = kl) : jl = void 0;
            var SB = jl,
                Ah;
            var Hc;
            Hc = pA ? a.H[T.Ha] : a.M[T.Ha];
            Zr && Hc === Zr ? Ah = Hc : Hc ? (Hc = "" + Hc, oA(Hc, a) || (og(31), a.abort()), kA(Hc, Pg(T.R)), Ah = Hc) : (og(32), a.abort(), Ah = "");
            RB.call(this, { clientId: Ah, Ih: SB });
            this.zk();
            if (a.Ma()) { var TB = AB[1] ? a.metadata.is_conversion : a.Db;
                ("page_view" === a.eventName || TB) && zB(this, a) }
            this.C.Tf();
            this.Db = KB(a, this.Db);
            this.Yg(a);
            a.F.onSuccess()
        } catch (ZB) { a.F.onFailure() }
        delete kg.GA4_EVENT
    };
    l.Yg = function(a) { this.P.add(a) };
    l.Eh = function(a) { var b = a.clientId,
            c = a.Ih;
        b && c && (this.g = b, this.s = c) };
    l.flush = function() { this.P.flush() };
    l.zk = function() {
        var a = this;
        if (!this.I) {
            var b = Pg(T.R);
            Sg([T.R], function() {
                var c = Pg(T.R);
                if (b ^ c && a.o && a.s && a.g) {
                    var d = a.g;
                    if (c) { var e = !0;
                        e = !1; var f = mA(a.o); if (f) { a.g = f; var g = tA(a.o);
                            e || g ? a.s = g : sA(a.s, a.o) } else oA(a.g, a.o), kA(a.g, !0), sA(a.s, a.o); var h = {};
                        h[T.og] = d;
                        Sq(T.Ke, h, a.$a); } else {
                        a.s = void 0;
                        a.g = void 0;
                        m.gaGlobal = {};
                    }
                    b = c
                }
            });
            this.I = !0
        }
    };
    l.Mi = function(a) { a.eventName !== T.Pa && this.C.Li(a) };
    var GB = function(a) { if (a.B(T.Ag)) a.g = !1, a.metadata.euid_mode_enabled = !1;
            else { var b = function(c) { return !!c && ("auto_detect" === c.mode || "selectors" === c.mode || "code" === c.mode) };
                AB[1] ? a.metadata.euid_mode_enabled = b(a.getRemoteConfig(T.qc)) : a.g = b(a.getRemoteConfig(T.qc)) } },
        FB = function(a) {},
        HB = function(a) {},
        IB = function(a) {
            var b = function(c) { return !!c && c.conversion };
            AB[1] ? a.metadata.is_conversion =
                b(a.Qb()) : a.Db = b(a.Qb());
            if (AB[1] ? a.metadata.is_first_visit : a.sc) AB[1] ? a.metadata.is_first_visit_conversion = b(a.Qb("first_visit")) : a.Tg = b(a.Qb("first_visit"));
            if (AB[1] ? a.metadata.is_session_start : a.s) AB[1] ? a.metadata.is_session_start_conversion = b(a.Qb("session_start")) : a.Xg = b(a.Qb("session_start"))
        },
        JB = function(a) { var b = Object.keys(AB); if (b.length) { b.forEach(function(d) { AB[d] && lg("CCD", Number(d)) }); var c = mg("CCD");
                c && (a.pf = "ccd." + c) } },
        KB = function(a, b) { var c = void 0; return c };

    function EB(a) { delete a.eventModel[T.Ib];
        LB(a.eventModel) }
    var LB = function(a) { Pa(a, function(c) { "_" === c.charAt(0) && delete a[c] }); var b = a[T.Ka] || {};
        Pa(b, function(c) { "_" === c.charAt(0) && delete b[c] }) };
    var MB = function(a) { if ("prerender" == H.visibilityState) return !1;
            a(); return !0 },
        QB = function(a) { if (!MB(a)) { var b = !1,
                    c = function() {!b && MB(a) && (b = !0, $b(H, "visibilitychange", c), og(55)) };
                Zb(H, "visibilitychange", c);
                og(54) } };
    var UB = function(a, b, c) { Sq(b, c, a) },
        VB = function(a, b, c) { Sq(b, c, a, !0) },
        XB = function(a, b) { var c = new DB(a, b);
            QB(function() { WB(a, c) }); };

    function WB(a, b) { var c = b.C;
        Rq(a, function(d, e, f, g) { b.ek(e, f, g) });
        c.kk(function() { Pq().flush();
            1E3 <= c.qe() && Ob.sendBeacon && UB(a, T.Ke, {});
            Zz = !0;
            b.flush();
            c.Gh(function() { Zz = !1;
                c.Gh(void 0) }) }); }
    var Z = { h: {} };


    Z.h.ehl = ["google"],
        function() {
            function a(k) { return k.target && k.target.location && k.target.location.href ? k.target.location.href : Ct() }

            function b(k, n) { Zb(k, "hashchange", function(p) { var q = a(p);
                    n({ source: "hashchange", state: null, url: Et(q), N: Dt(q) }) }) }

            function c(k, n) { Zb(k, "popstate", function(p) { var q = a(p);
                    n({ source: "popstate", state: p.state, url: Et(q), N: Dt(q) }) }) }

            function d(k, n, p) {
                var q = n.history,
                    r = q[k];
                if (Ea(r)) try {
                    q[k] = function(t, u, v) {
                        r.apply(q, [].slice.call(arguments, 0));
                        p({
                            source: k,
                            state: t,
                            url: Et(Ct()),
                            N: Dt(Ct())
                        })
                    }
                } catch (t) {}
            }

            function e() { var k = { source: null, state: X("history").state || null, url: Et(Ct()), N: Dt(Ct()) }; return function(n, p) { var q = k,
                        r = {};
                    r[q.source] = !0;
                    r[n.source] = !0; if (!r.popstate || !r.hashchange || q.N != n.N) { var t = { event: "gtm.historyChange-v2", "gtm.historyChangeSource": n.source, "gtm.oldUrlFragment": k.N, "gtm.newUrlFragment": n.N, "gtm.oldHistoryState": k.state, "gtm.newHistoryState": n.state, "gtm.oldUrl": k.url, "gtm.newUrl": n.url, "gtm.triggers": p.join(",") };
                        k = n;
                        Gt(t) } } }

            function f(k, n) {
                var p = "" +
                    n;
                if (g[p]) g[p].push(k);
                else { var q = [k];
                    g[p] = q; var r = e(),
                        t = -1;
                    h.push(function(u) { 0 <= t && zt(t);
                        n ? t = At(function() { r(u, q);
                            t = -1 }, n) : r(u, q) }) }
            }
            var g = {},
                h = [];
            (function(k) { Z.__ehl = k;
                Z.__ehl.m = "ehl";
                Z.__ehl.isVendorTemplate = !0;
                Z.__ehl.priorityOverride = 0 })(function(k) {
                var n = X("self"),
                    p = k.vtp_uniqueTriggerId || "0",
                    q = k.vtp_groupEvents ? Number(k.vtp_groupEventsInterval) : 0;
                0 > q ? q = 0 : isNaN(q) && (q = 1E3);
                if (Lt("ehl")) {
                    var r = et("ehl", "reg");
                    r ? (r(p, q),
                        I(k.vtp_gtmOnSuccess)) : I(k.vtp_gtmOnFailure)
                } else { var t = function(u) { for (var v = 0; v < h.length; v++) h[v](u) };
                    b(n, t);
                    c(n, t);
                    d("pushState", n, t);
                    d("replaceState", n, t);
                    f(p, q);
                    ct("ehl", "reg", f);
                    Mt("ehl");
                    I(k.vtp_gtmOnSuccess) }
            })
        }();
    Z.h.sdl = ["google"],
        function() {
            function a() { return !!(Object.keys(k("horiz.pix")).length || Object.keys(k("horiz.pct")).length || Object.keys(k("vert.pix")).length || Object.keys(k("vert.pct")).length) }

            function b(w) { for (var A = [], B = w.split(","), D = 0; D < B.length; D++) { var C = Number(B[D]); if (isNaN(C)) return [];
                    p.test(B[D]) || A.push(C) } return A }

            function c() { var w = 0,
                    A = 0; return function() { var B = bi(),
                        D = B.height;
                    w = Math.max(v.scrollLeft + B.width, w);
                    A = Math.max(v.scrollTop + D, A); return { gd: w, hd: A } } }

            function d() {
                t = X("self");
                u = t.document;
                v = u.scrollingElement || u.body && u.body.parentNode;
                x = c()
            }

            function e(w, A, B, D) { var C = k(A),
                    E = {},
                    F; for (F in C) { E.ac = F; if (C.hasOwnProperty(E.ac)) { var Q = Number(E.ac);
                        w < Q || (Gt({ event: "gtm.scrollDepth", "gtm.scrollThreshold": Q, "gtm.scrollUnits": B.toLowerCase(), "gtm.scrollDirection": D, "gtm.triggers": C[E.ac].join(",") }), dt("sdl", A, function(K) { return function(J) { delete J[K.ac]; return J } }(E), {})) }
                    E = { ac: E.ac } } }

            function f() {
                var w = x(),
                    A = w.gd,
                    B = w.hd,
                    D = A / v.scrollWidth * 100,
                    C = B / v.scrollHeight * 100;
                e(A, "horiz.pix",
                    q.Xd, r.Hg);
                e(D, "horiz.pct", q.Wd, r.Hg);
                e(B, "vert.pix", q.Xd, r.Vg);
                e(C, "vert.pct", q.Wd, r.Vg);
                ct("sdl", "pending", !1)
            }

            function g() { var w = 250,
                    A = !1;
                u.scrollingElement && u.documentElement && t.addEventListener && (w = 50, A = !0); var B = 0,
                    D = !1,
                    C = function() { D ? B = At(C, w) : (B = 0, f(), Lt("sdl") && !a() && ($b(t, "scroll", E), $b(t, "resize", E), ct("sdl", "init", !1)));
                        D = !1 },
                    E = function() { A && x();
                        B ? D = !0 : (B = At(C, w), ct("sdl", "pending", !0)) }; return E }

            function h(w, A, B) {
                if (A) {
                    var D = b(String(w));
                    dt("sdl", B, function(C) {
                        for (var E = 0; E < D.length; E++) {
                            var F =
                                String(D[E]);
                            C.hasOwnProperty(F) || (C[F] = []);
                            C[F].push(A)
                        }
                        return C
                    }, {})
                }
            }

            function k(w) { return et("sdl", w, {}) }

            function n(w) {
                I(w.vtp_gtmOnSuccess);
                var A = w.vtp_uniqueTriggerId,
                    B = w.vtp_horizontalThresholdsPixels,
                    D = w.vtp_horizontalThresholdsPercent,
                    C = w.vtp_verticalThresholdUnits,
                    E = w.vtp_verticalThresholdsPixels,
                    F = w.vtp_verticalThresholdsPercent;
                switch (w.vtp_horizontalThresholdUnits) {
                    case q.Xd:
                        h(B, A, "horiz.pix"); break;
                    case q.Wd:
                        h(D, A, "horiz.pct") }
                switch (C) {
                    case q.Xd:
                        h(E, A, "vert.pix");
                        break;
                    case q.Wd:
                        h(F,
                            A, "vert.pct")
                }
                Lt("sdl") ? et("sdl", "pending") || (y || (d(), y = !0), I(function() { return f() })) : (d(), y = !0, v && (Mt("sdl"), ct("sdl", "pending", !0), I(function() { f(); if (a()) { var Q = g();
                        Zb(t, "scroll", Q);
                        Zb(t, "resize", Q) } else ct("sdl", "init", !1) })))
            }
            var p = /^\s*$/,
                q = { Wd: "PERCENT", Xd: "PIXELS" },
                r = { Vg: "vertical", Hg: "horizontal" },
                t, u, v, y = !1,
                x;
            (function(w) { Z.__sdl = w;
                Z.__sdl.m = "sdl";
                Z.__sdl.isVendorTemplate = !0;
                Z.__sdl.priorityOverride = 0 })(function(w) { w.vtp_triggerStartOption ? n(w) : ls(function() { n(w) }) })
        }();



    Z.h.read_container_data = ["google"],
        function() {
            (function(a) { Z.__read_container_data = a;
                Z.__read_container_data.m = "read_container_data";
                Z.__read_container_data.isVendorTemplate = !0;
                Z.__read_container_data.priorityOverride = 0 })(function() { return { assert: function() {}, U: function() { return {} } } }) }();
    Z.h.c = ["google"],
        function() {
            (function(a) { Z.__c = a;
                Z.__c.m = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0 })(function(a) { Nt(a.vtp_value, "c", a.vtp_gtmEventId); return a.vtp_value }) }();
    Z.h.e = ["google"],
        function() {
            (function(a) { Z.__e = a;
                Z.__e.m = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0 })(function(a) { return String(a.vtp_gtmCachedValues.event) }) }();

    Z.h.u = ["google"],
        function() {
            var a = function(b) { return { toString: function() { return b } } };
            (function(b) { Z.__u = b;
                Z.__u.m = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0 })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Ft("gtm.url", 1)) || Ct();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Et(String(c));
                var e = pi(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        k = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ja(h) ?
                    n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) { var q = ni(e, "QUERY", void 0, void 0, n[p]); if (void 0 != q && (!k || "" !== q)) { f = q; break a } }
                    f = void 0
                }
                else f = ni(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.h.v = ["google"],
        function() {
            (function(a) { Z.__v = a;
                Z.__v.m = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0 })(function(a) { var b = a.vtp_name; if (!b || !b.replace) return !1; var c = Ft(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Nt(d, "v", a.vtp_gtmEventId); return d }) }();

    Z.h.ytl = ["google"],
        function() {
            function a() { var u = Math.round(1E9 * Math.random()) + ""; return H.getElementById(u) ? a() : u }

            function b(u, v) { if (!u) return !1; for (var y = 0; y < p.length; y++)
                    if (0 <= u.indexOf("//" + p[y] + "/" + v)) return !0;
                return !1 }

            function c(u, v) {
                var y = u.getAttribute("src");
                if (b(y, "embed/")) {
                    if (0 < y.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var x = u.setAttribute,
                            w;
                        var A = -1 !== y.indexOf("?") ? "&" : "?";
                        if (-1 < y.indexOf("origin=")) w = y + A + "enablejsapi=1";
                        else {
                            if (!r) {
                                var B = X("document");
                                r = B.location.protocol + "//" + B.location.hostname;
                                B.location.port && (r += ":" + B.location.port)
                            }
                            w = y + A + "enablejsapi=1&origin=" + encodeURIComponent(r)
                        }
                        x.call(u, "src", w);
                        return !0
                    }
                }
                return !1
            }

            function d(u, v) { if (!u.getAttribute("data-gtm-yt-inspected-" + v.Xa) && (u.setAttribute("data-gtm-yt-inspected-" + v.Xa, "true"), c(u, v.yb))) { u.id || (u.id = a()); var y = X("YT"),
                        x = y.get(u.id);
                    x || (x = new y.Player(u.id)); var w = f(x, v),
                        A = {},
                        B; for (B in w) A.Fc = B, w.hasOwnProperty(A.Fc) && x.addEventListener(A.Fc, function(D) { return function(C) { return w[D.Fc](C.data) } }(A)), A = { Fc: A.Fc } } }

            function e(u) {
                I(function() {
                    function v() {
                        for (var x =
                                y.getElementsByTagName("iframe"), w = x.length, A = 0; A < w; A++) d(x[A], u)
                    }
                    var y = X("document");
                    v();
                    nt(v)
                })
            }

            function f(u, v) {
                var y, x;

                function w() { J = yt(function() { return { url: M, title: V, ke: N, Af: u.getCurrentTime(), playbackRate: ba } }, v.Xa, u.getIframe());
                    N = 0;
                    V = M = "";
                    ba = 1; return A }

                function A(Ba) {
                    switch (Ba) {
                        case q.PLAYING:
                            N = Math.round(u.getDuration());
                            M = u.getVideoUrl();
                            if (u.getVideoData) { var Ia = u.getVideoData();
                                V = Ia ? Ia.title : "" }
                            ba = u.getPlaybackRate();
                            v.ed ? Gt(J.createEvent("start")) : J.ib();
                            R = k(v.xd, v.wd, u.getDuration());
                            return B(Ba);
                        default:
                            return A
                    }
                }

                function B() { S = u.getCurrentTime();
                    sa = Bt().getTime();
                    J.Uf();
                    K(); return D }

                function D(Ba) { var Ia; switch (Ba) {
                        case q.ENDED:
                            return E(Ba);
                        case q.PAUSED:
                            Ia = "pause";
                        case q.BUFFERING:
                            var da = u.getCurrentTime() - S;
                            Ia = 1 < Math.abs((Bt().getTime() - sa) / 1E3 * ba - da) ? "seek" : Ia || "buffering";
                            u.getCurrentTime() && (v.dd ? Gt(J.createEvent(Ia)) : J.ib());
                            Q(); return C;
                        case q.UNSTARTED:
                            return w(Ba);
                        default:
                            return D } }

                function C(Ba) {
                    switch (Ba) {
                        case q.ENDED:
                            return E(Ba);
                        case q.PLAYING:
                            return B(Ba);
                        case q.UNSTARTED:
                            return w(Ba);
                        default:
                            return C
                    }
                }

                function E() { for (; x;) { var Ba = y;
                        zt(x);
                        Ba() }
                    v.cd && Gt(J.createEvent("complete", 1)); return w(q.UNSTARTED) }

                function F() {}

                function Q() { x && (zt(x), x = 0, y = F) }

                function K() { if (R.length && 0 !== ba) { var Ba = -1,
                            Ia;
                        do { Ia = R[0]; if (Ia.W > u.getDuration()) return;
                            Ba = (Ia.W - u.getCurrentTime()) / ba; if (0 > Ba && (R.shift(), 0 === R.length)) return } while (0 > Ba);
                        y = function() { x = 0;
                            y = F;
                            0 < R.length && R[0].W === Ia.W && (R.shift(), Gt(J.createEvent("progress", Ia.zb, Ia.Ab)));
                            K() };
                        x = At(y, 1E3 * Ba) } }
                var J, R = [],
                    N, M, V, ba, S, sa, Ga = w(q.UNSTARTED);
                x = 0;
                y = F;
                return { onStateChange: function(Ba) { Ga = Ga(Ba) }, onPlaybackRateChange: function(Ba) { S = u.getCurrentTime();
                        sa = Bt().getTime();
                        J.ib();
                        ba = Ba;
                        Q();
                        K() } }
            }

            function g(u) { for (var v = u.split(","), y = v.length, x = [], w = 0; w < y; w++) { var A = parseInt(v[w], 10);
                    isNaN(A) || 100 < A || 0 > A || x.push(A / 100) }
                x.sort(function(B, D) { return B - D }); return x }

            function h(u) { for (var v = u.split(","), y = v.length, x = [], w = 0; w < y; w++) { var A = parseInt(v[w], 10);
                    isNaN(A) || 0 > A || x.push(A) }
                x.sort(function(B, D) { return B - D }); return x }

            function k(u, v, y) {
                var x = u.map(function(B) {
                    return {
                        W: B,
                        Ab: B,
                        zb: void 0
                    }
                });
                if (!v.length) return x;
                var w = v.map(function(B) { return { W: B * y, Ab: void 0, zb: B } });
                if (!x.length) return w;
                var A = x.concat(w);
                A.sort(function(B, D) { return B.W - D.W });
                return A
            }

            function n(u) {
                var v = !!u.vtp_captureStart,
                    y = !!u.vtp_captureComplete,
                    x = !!u.vtp_capturePause,
                    w = g(u.vtp_progressThresholdsPercent + ""),
                    A = h(u.vtp_progressThresholdsTimeInSeconds + ""),
                    B = !!u.vtp_fixMissingApi;
                if (v || y || x || w.length || A.length) {
                    var D = { ed: v, cd: y, dd: x, wd: w, xd: A, yb: B, Xa: void 0 === u.vtp_uniqueTriggerId ? "" : u.vtp_uniqueTriggerId },
                        C = X("YT"),
                        E = function() { e(D) };
                    I(u.vtp_gtmOnSuccess);
                    if (C) C.ready && C.ready(E);
                    else { var F = X("onYouTubeIframeAPIReady");
                        Ht("onYouTubeIframeAPIReady", function() { F && F();
                            E() });
                        I(function() { for (var Q = X("document"), K = Q.getElementsByTagName("script"), J = K.length, R = 0; R < J; R++) { var N = K[R].getAttribute("src"); if (b(N, "iframe_api") || b(N, "player_api")) return } for (var M = Q.getElementsByTagName("iframe"), V = M.length, ba = 0; ba < V; ba++)
                                if (!t && c(M[ba], D.yb)) { W("https://www.youtube.com/iframe_api");
                                    t = !0; break } }) }
                } else I(u.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 },
                r, t = !1;
            (function(u) { Z.__ytl = u;
                Z.__ytl.m = "ytl";
                Z.__ytl.isVendorTemplate = !0;
                Z.__ytl.priorityOverride = 0 })(function(u) { u.vtp_triggerStartOption ? n(u) : ul(function() { n(u) }) })
        }();

    Z.h.aev = ["google"],
        function() {
            function a(r, t, u, v, y) { y || (y = "element"); var x = t + "." + u,
                    w; if (n.hasOwnProperty(x)) w = n[x];
                else { var A = r[y]; if (A && (w = v(A), n[x] = w, p.push(x), 35 < p.length)) { var B = p.shift();
                        delete n[B] } } return w }

            function b(r, t, u) { var v = r[q[t]]; return void 0 !== v ? v : u }

            function c(r, t) {
                if (!r) return !1;
                var u = d(Ct());
                Ja(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], y = 0; y < t.length; y++) {
                    var x = t[y];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try { x = new RegExp(x.domain) } catch (B) { continue } else x =
                            x.domain;
                    var w = d(r);
                    if (x instanceof RegExp) { if (x.test(w)) return !1 } else { var A = x; if (0 != A.length) { if (0 <= w.indexOf(A)) return !1;
                            v.push(d(A)) } }
                }
                return !Ly(r, v)
            }

            function d(r) { k.test(r) || (r = "http://" + r); return ni(pi(r), "HOST", !0) }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var y = a(t, u, "FORM." + r, g);
                        return void 0 === y ? v : y;
                    case "INTERACTED_FIELD_ID":
                        return h(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return h(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return h(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var w = t.interactSequenceNumber;
                        return void 0 === w ? v : w;
                    default:
                        return v
                }
            }

            function f(r) { switch (r.tagName.toLowerCase()) {
                    case "input":
                        return ac(r, "value");
                    case "button":
                        return bc(r);
                    default:
                        return null } }

            function g(r) { if ("form" === r.tagName.toLowerCase() && r.elements) { for (var t = 0, u = 0; u < r.elements.length; u++) it(r.elements[u]) && t++; return t } }

            function h(r, t, u) {
                var v = r.interactedFormField;
                return v && ac(v, t) || u
            }
            var k = /^https?:\/\//i,
                n = {},
                p = [],
                q = { ATTRIBUTE: "elementAttribute", CLASSES: "elementClasses", ELEMENT: "element", ID: "elementId", HISTORY_CHANGE_SOURCE: "historyChangeSource", HISTORY_NEW_STATE: "newHistoryState", HISTORY_NEW_URL_FRAGMENT: "newUrlFragment", HISTORY_OLD_STATE: "oldHistoryState", HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment", TARGET: "elementTarget" };
            (function(r) { Z.__aev = r;
                Z.__aev.m = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0 })(function(r) {
                var t = r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    y = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = y.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(y, t, v, bc) || u;
                    case "URL":
                        var w;
                        a: { var A = String(y.elementUrl || u || ""),
                                B = pi(A),
                                D = String(r.vtp_component || "URL"); switch (D) {
                                case "URL":
                                    w = A; break a;
                                case "IS_OUTBOUND":
                                    w = c(A, r.vtp_affiliatedDomains); break a;
                                default:
                                    w = ni(B, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey) } }
                        return w;
                    case "ATTRIBUTE":
                        var C;
                        if (void 0 === r.vtp_attribute) C = b(y, v, u);
                        else {
                            var E = y.element;
                            C = E && ac(E, r.vtp_attribute) ||
                                u || ""
                        }
                        return C;
                    case "MD":
                        var F = r.vtp_mdValue,
                            Q = a(y, t, "MD", ut);
                        return F && Q ? xt(Q, F) || u : Q || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), y, t, u);
                    default:
                        var K = b(y, v, u);
                        Nt(K, "aev", r.vtp_gtmEventId);
                        return K
                }
            })
        }();
    Z.h.dlm = ["google"],
        function() {
            (function(a) { Z.__dlm = a;
                Z.__dlm.m = "dlm";
                Z.__dlm.isVendorTemplate = !0;
                Z.__dlm.priorityOverride = 0 })(function(a) { var b = My(a.vtp_userInput || [], "key", "value") || {};
                a.vtp_synchronousWrite ? Pa(b, function(c, d) { Uh(c, d) }) : Gt(b);
                I(a.vtp_gtmOnSuccess) }) }();

    Z.h.gct = ["google"],
        function() {
            function a(d) { for (var e = [], f = 0; f < d.length; f++) try { e.push(new RegExp(d[f])) } catch (g) {}
                return e }

            function b(d) { return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&") }

            function c(d) { for (var e = [], f = 0; f < d.length; f++) { var g = d[f].matchValue,
                        h; switch (d[f].matchType) {
                        case "BEGINS_WITH":
                            h = "^" + b(g); break;
                        case "ENDS_WITH":
                            h = b(g) + "$"; break;
                        case "EQUALS":
                            h = "^" + b(g) + "$"; break;
                        case "REGEX":
                            h = g; break;
                        default:
                            h = b(g) }
                    e.push(h) } return e }(function(d) {
                Z.__gct = d;
                Z.__gct.m = "gct";
                Z.__gct.isVendorTemplate = !0;
                Z.__gct.priorityOverride = 0
            })(function(d) {
                var e = {};
                0 < d.vtp_sessionDuration && (e[T.Vc] = d.vtp_sessionDuration);
                e[T.Md] = d.vtp_eventSettings;
                e[T.Te] = d.vtp_dynamicEventSettings;
                e[T.sb] = 1 === d.vtp_googleSignals;
                e[T.Pd] = d.vtp_foreignTld;
                e[T.Ze] = 1 === d.vtp_restrictDomain;
                e[T.af] = d.vtp_internalTrafficResults;
                var f = T.ra,
                    g = d.vtp_linker;
                g && g[T.T] && (g[T.T] = a(g[T.T]));
                e[f] = g;
                var h = T.Qd,
                    k = d.vtp_referralExclusionDefinition;
                k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
                e[h] = k;
                var n = Wq(d.vtp_trackingId),
                    p = n.referral_exclusion_conditions;
                p && (p.length && "object" === typeof p[0] && (p = c(p)), e[T.Qd] = { include_conditions: a(p) });
                var q = n.cross_domain_conditions;
                if (q) { q.length && "object" === typeof q[0] && (q = c(q)); var r = {};
                    e[T.ra] = (r[T.T] = a(q), r[T.nc] = !0, r[T.mc] = !0, r[T.Sc] = "query", r) }
                XB(d.vtp_trackingId, e);
                I(d.vtp_gtmOnSuccess)
            })
        }();



    Z.h.get = ["google"],
        function() {
            (function(a) { Z.__get = a;
                Z.__get.m = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0 })(function(a) { var b = a.vtp_settings;
                (a.vtp_deferrable ? VB : UB)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess() }) }();








    Z.h.lcl = [],
        function() {
            function a() {
                var c = X("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.sd || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = dc(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var h = f.defaultPrevented || !1 === f.returnValue,
                                k = et("lcl", h ? "nv.mwt" : "mwt", 0),
                                n;
                            n = h ? et("lcl", "nv.ids", []) : et("lcl", "ids", []);
                            if (n.length) {
                                var p = at(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !h && k && g.href) {
                                    var q = !!Ka(String(fc(g, "rel") || "").split(" "), function(v) { return "noreferrer" === v.toLowerCase() });
                                    q && og(36);
                                    var r = X((fc(g, "target") || "_self").substring(1)),
                                        t = !0,
                                        u = Ms(function() { var v; if (v = t && r) { var y;
                                                a: if (q) { var x; try { x = new MouseEvent(f.type, { bubbles: !0 }) } catch (w) { if (!c.createEvent) { y = !1; break a }
                                                        x = c.createEvent("MouseEvents");
                                                        x.initEvent(f.type, !0, !0) }
                                                    x.sd = !0;
                                                    f.target.dispatchEvent(x);
                                                    y = !0 } else y = !1;
                                                v = !y }
                                            v && (r.location.href = fc(g, "href")) }, k);
                                    if (Gt(p, u, k)) t = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else Gt(p, function() {}, k || 2E3);
                                return !0
                            }
                        }
                    };
                Zb(c, "click", e, !1);
                Zb(c, "auxclick",
                    e, !1)
            }

            function b(c, d, e) { if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1; var f = fc(d, "href"),
                    g = f.indexOf("#"),
                    h = fc(d, "target"); if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1; if (0 < g) { var k = Et(f),
                        n = Et(e.location); return k !== n } return !0 }(function(c) { Z.__lcl = c;
                Z.__lcl.m = "lcl";
                Z.__lcl.isVendorTemplate = !0;
                Z.__lcl.priorityOverride = 0 })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) { var h = function(n) { return Math.max(f, n) };
                    dt("lcl", "mwt", h, 0);
                    e || dt("lcl", "nv.mwt", h, 0) }
                var k = function(n) { n.push(g); return n };
                dt("lcl", "ids", k, []);
                e || dt("lcl", "nv.ids", k, []);
                Lt("lcl") || (a(), Mt("lcl"));
                I(c.vtp_gtmOnSuccess)
            })
        }();
    var YB = {};
    YB.dataLayer = Sh;
    YB.callback = function(a) { Jh.hasOwnProperty(a) && Ea(Jh[a]) && Jh[a]();
        delete Jh[a] };
    YB.bootstrap = 0;
    YB._spx = !1;
    (function(a) {
        if (!m["__TAGGY_INSTALLED"]) { var b = !1; if (H.referrer) { var c = pi(H.referrer);
                b = "cct.google" === mi(c, "host") } if (!b) { var d = Ti("googTaggyReferrer");
                b = d.length && d[0].length }
            b && (m["__TAGGY_INSTALLED"] = !0, Vb("https://cct.google/taggy/agent.js")) }
        var f = function(q) {
                var r = "GTM",
                    t = "GTM";
                r = "OGT", t = "GTAG";
                var u = m["google.tagmanager.debugui2.queue"];
                u || (u = [], m["google.tagmanager.debugui2.queue"] = u, Vb("https://" + L.Ge + "/debug/bootstrap?id=" + L.K + "&src=" + t + "&cond=" + q + "&gtm=" + wn()));
                var v = { messageType: "CONTAINER_STARTING", data: { scriptSource: Pb, containerProduct: r, debug: !1, id: L.K } };
                v.data.resume = function() { a() };
                L.Zh && (v.data.initialPublish = !0);
                u.push(v)
            },
            g = void 0,
            h = ni(m.location, "query", !1, void 0, "gtm_debug");
        Vs(h) && (g = 2);
        if (!g && H.referrer) { var k = pi(H.referrer); "tagassistant.google.com" === mi(k, "host") && (g = 3) }
        if (!g) { var n = Ti("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4) }
        if (!g) { var p = H.documentElement.getAttribute("data-tag-assistant-present");
            Vs(p) && (g = 5) }
        g && Pb ? f(g) : a()
    })(function() {
        var a = !1;
        a && Dl("INIT");
        rg().o();
        Tn();
        bk.enable_gbraid_cookie_write = !0;
        var b = !!U[L.K];
        if (b) { var c = U.zones;
            c && c.unregisterChild(L.K); } else {
            for (var g = data.resource || {}, h = g.macros || [], k = 0; k < h.length; k++) ne.push(h[k]);
            for (var n = g.tags || [], p = 0; p < n.length; p++) qe.push(n[p]);
            for (var q = g.predicates || [], r = 0; r < q.length; r++) pe.push(q[r]);
            for (var t = g.rules || [], u = 0; u < t.length; u++) { for (var v = t[u], y = {}, x = 0; x < v.length; x++) y[v[x][0]] = Array.prototype.slice.call(v[x], 1);
                oe.push(y) }
            se = Z;
            te = pu;
            Qe = new Pe;
            var w = data.sandboxed_scripts,
                A = data.security_groups,
                B = data.runtime || [],
                D = data.runtime_lines;
            Ey = new Md;
            Hy();
            me = Fy();
            var C = Ey,
                E = By();
            pb(C.g, "require", E);
            for (var F = 0; F < B.length; F++) { var Q = B[F]; if (!Ja(Q) || 3 > Q.length) { if (0 === Q.length) continue; break }
                D && D[F] && D[F].length && Ce(Q, D[F]);
                Ey.execute(Q) }
            if (void 0 !==
                w)
                for (var K = ["sandboxedScripts"], J = 0; J < w.length; J++) { var R = w[J].replace(/^_*/, "");
                    Kh[R] = K }
            Iy(A);
            U[L.K] = YB;
            ab(Kh, Z.h);
            ve = Je;
            Us();
            pl = !1;
            ql = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) sl();
            else {
                Zb(H, "DOMContentLoaded",
                    sl);
                Zb(H, "readystatechange", sl);
                if (H.createEventObject && H.documentElement.doScroll) { var N = !0; try { N = !m.frameElement } catch (sa) {}
                    N && tl() }
                Zb(m, "load", sl)
            }
            is = !1;
            "complete" === H.readyState ? ks() : Zb(m, "load", ks);
            zm && m.setInterval(tm, 864E5);
            Hh = Xa();
            YB.bootstrap = Hh;
            if (a) {
                var S = El("INIT");
            }
        }
    });

})()