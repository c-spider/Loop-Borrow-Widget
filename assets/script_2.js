// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{ "function": "__e" }, { "function": "__cid" }],
            "tags": [{ "function": "__rep", "once_per_event": true, "vtp_containerId": ["macro", 1], "tag_id": 1 }],
            "predicates": [{ "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js" }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ]
            ]
        },
        "runtime": []




    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h, aa = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } },
        ba = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var ea = { a: !0 },
                fa = {};
            try {
                fa.__proto__ = ea;
                da = fa.a;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null
    }
    var ja = ca,
        ka = function(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (ja) ja(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.bk = b.prototype
        },
        la = this || self,
        ma = function(a) { return a };
    var oa = function() {},
        pa = function(a) { return "function" == typeof a },
        k = function(a) { return "string" == typeof a },
        qa = function(a) { return "number" == typeof a && !isNaN(a) },
        sa = Array.isArray,
        ta = function(a, b) {
            if (a && sa(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        va = function(a, b) { if (!qa(a) || !qa(b) || a > b) a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a) },
        xa = function(a, b) {
            for (var c = new wa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        ya = function(a,
            b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) },
        Aa = function(a) { return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee")) },
        Ba = function(a) { return Math.round(Number(a)) || 0 },
        Ca = function(a) { return "false" == String(a).toLowerCase() ? !1 : !!a },
        Ea = function(a) {
            var b = [];
            if (sa(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Fa = function(a) { return a ? a.replace(/^\s+|\s+$/g, "") : "" },
        Ga = function() { return new Date(Date.now()) },
        Ha = function() { return Ga().getTime() },
        wa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    wa.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    wa.prototype.get = function(a) { return this.values[this.prefix + a] };
    var Ia = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        Ja = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try { c() } catch (d) {}
                }
            }
        },
        Ka = function(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) },
        La = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Na = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c },
        Oa = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Pa = /^\w{1,9}$/,
        Qa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            ya(a, function(d, e) { Pa.test(d) && e && c.push(d) });
            return c.join(b)
        };
    var Ra, Sa = function() {
        if (void 0 === Ra) {
            var a = null,
                b = la.trustedTypes;
            if (b && b.createPolicy) {
                try { a = b.createPolicy("goog#html", { createHTML: ma, createScript: ma, createScriptURL: ma }) } catch (c) { la.console && la.console.error(c.message) }
                Ra = a
            } else Ra = a
        }
        return Ra
    };
    var Ua = function(a, b) { this.m = b === Ta ? a : "" };
    Ua.prototype.toString = function() { return this.m + "" };
    var Ta = {};
    var Va = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Wa() { var a = la.navigator; if (a) { var b = a.userAgent; if (b) return b } return "" }

    function Xa(a) { return -1 != Wa().indexOf(a) };
    var Ya = {},
        Za = function(a, b, c) { this.m = c === Ya ? a : "" };
    Za.prototype.toString = function() { return this.m.toString() };
    var $a = function(a) { return a instanceof Za && a.constructor === Za ? a.m : "type_error:SafeHtml" },
        ab = function(a) {
            var b = Sa(),
                c = b ? b.createHTML(a) : a;
            return new Za(c, null, Ya)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function bb(a) { if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript."); if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet."); };
    var B = window,
        G = document,
        cb = navigator,
        db = G.currentScript && G.currentScript.src,
        eb = function(a, b) {
            var c = B[a];
            B[a] = void 0 === c ? b : c;
            return B[a]
        },
        fb = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        gb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        hb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };

    function ib(a, b, c) {
        b && ya(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var jb = function(a, b, c, d) {
            var e = G.createElement("script");
            ib(e, d, gb);
            e.type = "text/javascript";
            e.async = !0;
            var f, g = Sa(),
                m = g ? g.createScriptURL(a) : a;
            f = new Ua(m, Ta);
            e.src = f instanceof Ua && f.constructor === Ua ? f.m : "type_error:TrustedResourceUrl";
            var l, n, p = (e.ownerDocument && e.ownerDocument.defaultView || window).document,
                q = null === (n = p.querySelector) || void 0 === n ? void 0 : n.call(p, "script[nonce]");
            (l = q ? q.nonce || q.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", l);
            fb(e, b);
            c && (e.onerror = c);
            var r = G.getElementsByTagName("script")[0] ||
                G.body || G.head;
            r.parentNode.insertBefore(e, r);
            return e
        },
        kb = function() { if (db) { var a = db.toLowerCase(); if (0 === a.indexOf("https://")) return 2; if (0 === a.indexOf("http://")) return 3 } return 1 },
        lb = function(a, b, c, d, e) {
            var f = e,
                g = !1;
            f || (f = G.createElement("iframe"), g = !0);
            ib(f, c, hb);
            d && ya(d, function(l, n) { f.dataset[l] = n });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden";
            if (g) {
                var m = G.body && G.body.lastChild || G.body || G.head;
                m.parentNode.insertBefore(f, m)
            }
            fb(f, b);
            void 0 !== a && (f.src = a);
            return f
        },
        ob = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        pb = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        qb = function(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) },
        H = function(a) { B.setTimeout(a, 0) },
        rb = function(a, b) { return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null },
        sb = function(a) {
            var b =
                a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        tb = function(a) {
            var b = G.createElement("div"),
                c = b,
                d = ab("A<div>" + a + "</div>");
            void 0 !== c.tagName && bb(c);
            c.innerHTML = $a(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        ub = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        vb = function(a) {
            var b;
            try { b = cb.sendBeacon && cb.sendBeacon(a) } catch (c) {}
            b || ob(a)
        },
        wb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        xb = function(a) { var b = G.featurePolicy; return b && pa(b.allowsFeature) ? b.allowsFeature(a) : !1 };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var yb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        zb = function(a) { if (null == a) return String(a); var b = yb.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        Ab = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        Bb = function(a) {
            if (!a || "object" != zb(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !Ab(a, "constructor") && !Ab(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || Ab(a, b)
        },
        M = function(a, b) {
            var c = b || ("array" == zb(a) ? [] : {}),
                d;
            for (d in a)
                if (Ab(a, d)) { var e = a[d]; "array" == zb(e) ? ("array" != zb(c[d]) && (c[d] = []), c[d] = M(e, c[d])) : Bb(e) ? (Bb(c[d]) || (c[d] = {}), c[d] = M(e, c[d])) : c[d] = e }
            return c
        };
    var Cb = function(a) {
        if (void 0 === a || sa(a) || Bb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Db = function() {
        var a = function(b) { return { toString: function() { return b } } };
        return {
            mh: a("consent"),
            nh: a("consent_always_fire"),
            sf: a("convert_case_to"),
            tf: a("convert_false_to"),
            uf: a("convert_null_to"),
            vf: a("convert_true_to"),
            wf: a("convert_undefined_to"),
            Lj: a("debug_mode_metadata"),
            sb: a("function"),
            Wh: a("instance_name"),
            $h: a("live_only"),
            ai: a("malware_disabled"),
            bi: a("metadata"),
            gi: a("original_activity_id"),
            Qj: a("original_vendor_template_id"),
            Pj: a("once_on_load"),
            fi: a("once_per_event"),
            Yf: a("once_per_load"),
            Sj: a("priority_override"),
            Tj: a("respected_consent_types"),
            bg: a("setup_tags"),
            cg: a("tag_id"),
            dg: a("teardown_tags")
        }
    }();
    var Zb;
    var $b = [],
        ac = [],
        bc = [],
        cc = [],
        dc = [],
        ec = {},
        gc, hc, ic, jc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = ec[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.sg && d.sg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Db.nh.toString() && a[g]) {}
            e && d && d.rg && (f.vtp_gtmCachedValues = d.rg);
            return void 0 !== e ? e(f) : Zb(c, f, b)
        },
        lc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = kc(a[e], b, c));
            return d
        },
        kc = function(a, b, c) {
            if (sa(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(kc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = $b[f];
                        if (!g || b.Xe(g)) return;
                        c[f] = !0;
                        try {
                            var m = lc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            d = jc(m, { event: b, index: f, type: 2 });
                            ic && (d = ic.wi(d, m))
                        } catch (x) { b.Kg && b.Kg(x, Number(f)), d = !1 }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[kc(a[l], b, c)] = kc(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var q = kc(a[p], b, c);
                            hc && (n = n || q === hc.od);
                            d.push(q)
                        }
                        return hc && n ? hc.Bi(d) : d.join("");
                    case "escape":
                        d = kc(a[1], b, c);
                        if (hc && sa(a[1]) && "macro" === a[1][0] && hc.Wi(a)) return hc.lj(d);
                        d = String(d);
                        for (var r = 2; r < a.length; r++) Eb[a[r]] && (d = Eb[a[r]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!cc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            yg: a[2],
                            index: u
                        };
                    case "zb":
                        var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        t["function"] = a[1];
                        var v = mc(t, b, c),
                            z = !!a[4];
                        return z || 2 !== v ? z !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        mc = function(a, b, c) { try { return gc(lc(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 };
    var pc = function(a) {
            function b(r) { for (var u = 0; u < r.length; u++) d[r[u]] = !0 }
            for (var c = [], d = [], e = nc(a), f = 0; f < ac.length; f++) {
                var g = ac[f],
                    m = oc(g, e);
                if (m) {
                    for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                    b(g.block || [])
                } else null === m && b(g.block || []);
            }
            for (var p = [], q = 0; q < cc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        oc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) { var e = b(c[d]); if (0 === e) return !1; if (2 === e) return null }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) { var m = b(f[g]); if (2 === m) return null; if (1 === m) return !1 }
            return !0
        },
        nc = function(a) { var b = []; return function(c) { void 0 === b[c] && (b[c] = mc(bc[c], a)); return b[c] } };
    var qc = {
        wi: function(a, b) {
            b[Db.sf] && "string" === typeof a && (a = 1 == b[Db.sf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Db.uf) && null === a && (a = b[Db.uf]);
            b.hasOwnProperty(Db.wf) && void 0 === a && (a = b[Db.wf]);
            b.hasOwnProperty(Db.vf) && !0 === a && (a = b[Db.vf]);
            b.hasOwnProperty(Db.tf) && !1 === a && (a = b[Db.tf]);
            return a
        }
    };

    var Q = {
        rb: "_ee",
        Ec: "_syn_or_mod",
        Uj: "_uei",
        Cc: "_eu",
        Rj: "_pci",
        Nb: "event_callback",
        dd: "event_timeout",
        Aa: "gtag.config",
        Ia: "gtag.get",
        oa: "purchase",
        Kb: "refund",
        nb: "begin_checkout",
        Hb: "add_to_cart",
        Ib: "remove_from_cart",
        wh: "view_cart",
        yf: "add_to_wishlist",
        qa: "view_item",
        Jb: "view_promotion",
        Xd: "select_promotion",
        Wd: "select_item",
        ob: "view_item_list",
        xf: "add_payment_info",
        vh: "add_shipping_info",
        Sa: "value_key",
        cb: "value_callback",
        V: "allow_ad_personalization_signals",
        yc: "restricted_data_processing",
        hc: "allow_google_signals",
        sa: "cookie_expires",
        Mb: "cookie_update",
        zc: "session_duration",
        hd: "session_engaged_time",
        bd: "engagement_time_msec",
        Ea: "user_properties",
        va: "transport_url",
        U: "ads_data_redaction",
        wa: "user_data",
        uc: "first_party_collection",
        C: "ad_storage",
        M: "analytics_storage",
        qf: "region",
        rf: "wait_for_update",
        ra: "conversion_linker",
        Ja: "conversion_cookie_prefix",
        ja: "value",
        ca: "currency",
        Tf: "trip_type",
        Z: "items",
        Kf: "passengers",
        $d: "allow_custom_scripts",
        qb: "session_id",
        Pf: "quantity",
        hb: "transaction_id",
        fb: "language",
        ad: "country",
        $c: "allow_enhanced_conversions",
        ee: "aw_merchant_id",
        ce: "aw_feed_country",
        de: "aw_feed_language",
        be: "discount",
        T: "developer_id",
        Hf: "global_developer_id_string",
        Ef: "event_developer_id_string",
        jd: "delivery_postal_code",
        me: "estimated_delivery_date",
        je: "shipping",
        se: "new_customer",
        fe: "customer_lifetime_value",
        ke: "enhanced_conversions",
        fc: "page_view",
        la: "linker",
        N: "domains",
        Pb: "decorate_forms",
        Df: "enhanced_conversions_automatic_settings",
        Dh: "auto_detection_enabled",
        Ff: "ga_temp_client_id",
        Yd: "user_engagement",
        qh: "app_remove",
        rh: "app_store_refund",
        sh: "app_store_subscription_cancel",
        th: "app_store_subscription_convert",
        uh: "app_store_subscription_renew",
        xh: "first_open",
        yh: "first_visit",
        zh: "in_app_purchase",
        Ah: "session_start",
        Bh: "allow_display_features",
        Ra: "campaign",
        ic: "campaign_content",
        jc: "campaign_id",
        kc: "campaign_medium",
        mc: "campaign_name",
        nc: "campaign_source",
        oc: "campaign_term",
        Ba: "client_id",
        ka: "cookie_domain",
        Lb: "cookie_name",
        $a: "cookie_path",
        Ka: "cookie_flags",
        qc: "custom_map",
        pe: "groups",
        Jf: "non_interaction",
        Ta: "page_location",
        te: "page_path",
        La: "page_referrer",
        xc: "page_title",
        ia: "send_page_view",
        Qb: "send_to",
        Ac: "session_engaged",
        sc: "euid_logged_in_state",
        Bc: "session_number",
        Th: "tracking_id",
        ib: "url_passthrough",
        Ob: "accept_incoming",
        wc: "url_position",
        Nf: "phone_conversion_number",
        Lf: "phone_conversion_callback",
        Mf: "phone_conversion_css_class",
        Of: "phone_conversion_options",
        Oh: "phone_conversion_ids",
        Nh: "phone_conversion_country_code",
        Qa: "aw_remarketing",
        ae: "aw_remarketing_only",
        Zd: "gclid",
        Ch: "auid",
        Ih: "affiliation",
        Cf: "tax",
        ie: "list_name",
        Bf: "checkout_step",
        Af: "checkout_option",
        Jh: "coupon",
        Kh: "promotions",
        Da: "user_id",
        Rh: "retoken",
        Ca: "cookie_prefix",
        zf: "disable_merchant_reported_purchases",
        Hh: "dc_natural_search",
        Gh: "dc_custom_params",
        If: "method",
        Sh: "search_term",
        Fh: "content_type",
        Mh: "optimize_id",
        Lh: "experiments",
        eb: "google_signals"
    };
    Q.fd = "google_tld";
    Q.ld = "update";
    Q.ne = "firebase_id";
    Q.oe = "ga_restrict_domain";
    Q.cd = "event_settings";
    Q.he = "dynamic_event_settings";
    Q.Rb = "user_data_settings";
    Q.Rf = "screen_name";
    Q.ve = "screen_resolution";
    Q.pb = "_x_19";
    Q.ab = "enhanced_client_id";
    Q.ed = "_x_20";
    Q.qe = "internal_traffic_results";
    Q.kd = "traffic_type";
    Q.gd = "referral_exclusion_definition";
    Q.vc = "ignore_referrer";
    Q.Eh = "content_group";
    Q.fa = "allow_interest_groups";
    var Oc = {};
    Q.Wf = Object.freeze((Oc[Q.xf] = 1, Oc[Q.vh] = 1, Oc[Q.Hb] = 1, Oc[Q.Ib] = 1, Oc[Q.wh] = 1, Oc[Q.nb] = 1, Oc[Q.Wd] = 1, Oc[Q.ob] = 1, Oc[Q.Xd] = 1, Oc[Q.Jb] = 1, Oc[Q.oa] = 1, Oc[Q.Kb] = 1, Oc[Q.qa] = 1, Oc[Q.yf] = 1, Oc));
    Q.xe = Object.freeze([Q.V, Q.hc, Q.Mb]);
    Q.di = Object.freeze([].concat(Q.xe));
    Q.ye = Object.freeze([Q.sa, Q.dd, Q.zc, Q.hd, Q.bd]);
    Q.ei = Object.freeze([].concat(Q.ye));
    var Pc = {};
    Q.Td = (Pc[Q.C] = "1", Pc[Q.M] = "2", Pc);
    var Rc = { Ai: "CN", sj: "CN-21" };
    var Sc = {},
        Tc = function(a, b) {
            Sc[a] = Sc[a] || [];
            Sc[a][b] = !0
        },
        Uc = function(a) { for (var b = [], c = Sc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") },
        Wc = function() { for (var a = [], b = Sc.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c); return 0 < a.length ? a : void 0 };
    var Xc = function(a) { Tc("GTM", a) };
    var Yc = new function(a, b) {
        this.m = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var $c = function() {
        var a = Zc,
            b = "Ve";
        if (a.Ve && a.hasOwnProperty(b)) return a.Ve;
        var c = new a;
        a.Ve = c;
        a.hasOwnProperty(b);
        return c
    };
    var Zc = function() {
        var a = {};
        this.m = function() {
            var b = Yc.m,
                c = Yc.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function() { a[Yc.m] = !0 }
    };
    var ad = [];

    function bd() {
        var a = eb("google_tag_data", {});
        a.ics || (a.ics = { entries: {}, set: cd, update: dd, addListener: ed, notifyListeners: fd, active: !1, usedDefault: !1, usedUpdate: !1, accessedDefault: !1, accessedAny: !1, wasSetLate: !1 });
        return a.ics
    }

    function cd(a, b, c, d, e, f) {
        var g = bd();
        !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var m = g.entries,
                l = m[a] || {},
                n = l.region,
                p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    r = { region: p, initial: "granted" === b, update: l.update, quiet: q };
                if ("" !== d || !1 !== l.initial) m[a] = r;
                q && B.setTimeout(function() {
                    m[a] ===
                        r && r.quiet && (r.quiet = !1, gd(a), fd(), Tc("TAGGING", 2))
                }, f)
            }
        }
    }

    function dd(a, b) {
        var c = bd();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = hd(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = hd(a);
            f.quiet ? (f.quiet = !1, gd(a)) : g !== d && gd(a)
        }
    }

    function ed(a, b) { ad.push({ Me: a, Ji: b }) }

    function gd(a) {
        for (var b = 0; b < ad.length; ++b) {
            var c = ad[b];
            sa(c.Me) && -1 !== c.Me.indexOf(a) && (c.Pg = !0)
        }
    }

    function fd(a) { for (var b = 0; b < ad.length; ++b) { var c = ad[b]; if (c.Pg) { c.Pg = !1; try { c.Ji({ consentEventId: a }) } catch (d) {} } } }
    var hd = function(a) {
            var b = bd();
            b.accessedAny = !0;
            var c = b.entries[a] || {};
            return void 0 !== c.update ? c.update : c.initial
        },
        id = function(a) {
            var b = bd();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        jd = function(a) {
            var b = bd();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        kd = function() {
            if (!$c().m()) return !1;
            var a = bd();
            a.accessedAny = !0;
            return a.active
        },
        ld = function() {
            var a = bd();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        md = function(a, b) { bd().addListener(a, b) },
        nd = function(a) { bd().notifyListeners(a) },
        od = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!jd(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                md(b, function(e) { d || c() || (d = !0, a(e)) })
            } else a({})
        },
        pd = function(a, b) {
            function c() { for (var f = [], g = 0; g < d.length; g++) { var m = d[g];!1 === hd(m) || e[m] || (f.push(m), e[m] = !0) } return f }
            var d = k(b) ? [b] : b,
                e = {};
            c().length !== d.length && md(d, function(f) {
                var g = c();
                0 < g.length && (f.Me = g, a(f))
            })
        };

    function rd() {}

    function sd() {};

    function td(a) {
        for (var b = [], c = 0; c < ud.length; c++) {
            var d = a(ud[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var ud = [Q.C, Q.M],
        vd = function(a) {
            var b = a[Q.qf];
            b && Xc(40);
            var c = a[Q.rf];
            c && Xc(41);
            for (var d = sa(b) ? b : [b], e = { bc: 0 }; e.bc < d.length; e = { bc: e.bc }, ++e.bc) ya(a, function(f) {
                return function(g, m) {
                    if (g !== Q.qf && g !== Q.rf) {
                        var l = d[f.bc],
                            n = Rc.Ai,
                            p = Rc.sj;
                        bd().set(g, m, l, n, p, c)
                    }
                }
            }(e))
        },
        wd = 0,
        xd = function(a, b) {
            ya(a, function(e, f) { bd().update(e, f) });
            nd(b);
            var c = Ha(),
                d = c - wd;
            wd && 0 <= d && 1E3 > d && Xc(66);
            wd = c
        },
        yd = function(a) { var b = hd(a); return void 0 != b ? b : !0 },
        zd = function() { return "G1" + td(hd) },
        Ad = function() { return "G1" + td(id) },
        Bd = function(a,
            b) { pd(a, b) },
        Cd = function(a, b) { od(a, b) };
    var Ed = function(a) { return Dd ? G.querySelectorAll(a) : null },
        Fd = function(a, b) {
            if (!Dd) return null;
            if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!G.documentElement.contains(d)) return null;
            do {
                try { if (c.call(d, b)) return d } catch (e) { break }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Gd = !1;
    if (G.querySelectorAll) try {
        var Hd = G.querySelectorAll(":root");
        Hd && 1 == Hd.length && Hd[0] == G.documentElement && (Gd = !0)
    } catch (a) {}
    var Dd = Gd;
    var R = {},
        T = B.google_tag_manager = B.google_tag_manager || {},
        ae = Math.random();
    R.H = "UA-103677783-11";
    R.Zc = "";
    R.ud = "2s0";
    R.X = "dataLayer";
    R.ph = "ChEIgKX3kAYQ19GrrOjtm9XFARIoACRej6uoJXcZop8Qqg6xBGqlue5J8YYlNWCHru+xoSE2Qr2K0tcGrxoCca4\x3d";
    var be = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 },
        ce = { __paused: !0, __tg: !0 },
        de;
    for (de in be) be.hasOwnProperty(de) && (ce[de] = !0);
    R.Ud = "www.googletagmanager.com";
    var ee, fe = R.Ud + "/gtm.js";
    fe = R.Ud + "/gtag/js";
    ee = fe;
    var ge = Ca("true"),
        he = null,
        me = null,
        ne = "https://www.googletagmanager.com/a?id=" + R.H + "&cv=1",
        oe = {},
        pe = {},
        qe = function() {
            var a = T.sequence || 1;
            T.sequence = a + 1;
            return a
        };
    R.oh = "";
    var re = "";
    R.vd = re;
    var se = new wa,
        te = {},
        ue = {},
        xe = {
            name: R.X,
            set: function(a, b) {
                M(Oa(a, b), te);
                ve()
            },
            get: function(a) { return we(a, 2) },
            reset: function() {
                se = new wa;
                te = {};
                ve()
            }
        },
        we = function(a, b) { return 2 != b ? se.get(a) : ye(a) },
        ye = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = te, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        ze = function(a, b) { ue.hasOwnProperty(a) || (se.set(a, b), M(Oa(a, b), te), ve()) },
        ve = function(a) {
            ya(ue, function(b, c) {
                se.set(b, c);
                M(Oa(b, void 0), te);
                M(Oa(b,
                    c), te);
                a && delete ue[b]
            })
        },
        Ae = function(a, b) { var c, d = 1 !== (void 0 === b ? 2 : b) ? ye(a) : se.get(a); "array" === zb(d) || "object" === zb(d) ? c = M(d) : c = d; return c };
    var Be, Ce = !1,
        De = function(a) {
            if (!Ce) {
                Ce = !0;
                Be = Be || {}
            }
            return Be[a]
        };
    var Ee = function(a) {
        if (G.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !B.getComputedStyle) return !0;
        var c = B.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var m = g.indexOf("opacity(");
                0 <= m && (g = g.substring(m + 8, g.indexOf(")", m)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = B.getComputedStyle(d,
                null))
        }
        return !1
    };
    var Ne = /:[0-9]+$/,
        Oe = function(a, b, c) { for (var d = a.split("&"), e = 0; e < d.length; e++) { var f = d[e].split("="); if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) { var g = f.slice(1).join("="); return c ? g : decodeURIComponent(g).replace(/\+/g, " ") } } },
        Re = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Pe(a.protocol) || Pe(B.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : B.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || B.location.hostname).replace(Ne, "").toLowerCase());
            return Qe(a, b, c, d, e)
        },
        Qe = function(a, b, c, d, e) {
            var f, g = Pe(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Se(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Ne, "").toLowerCase();
                    if (c) {
                        var m = /^www\d*\./.exec(f);
                        m && m[0] && (f = f.substr(m[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Tc("TAGGING",
                        1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Oe(f, e, void 0));
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
        Pe = function(a) { return a ? a.replace(":", "").toLowerCase() : "" },
        Se = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Te = function(a) {
            var b = G.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Tc("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Ne, "");
            return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port }
        },
        Ue = function(a) {
            function b(n) { var p = n.split("=")[0]; return 0 > d.indexOf(p) ? n : p + "=0" }

            function c(n) { return n.split("&").map(b).filter(function(p) { return void 0 != p }).join("&") }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Te(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                m = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === m[0] && (m = m.substring(1));
            g = c(g);
            m = c(m);
            "" !== g && (g = "?" + g);
            "" !== m && (m = "#" + m);
            var l = "" + f + g + m;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };
    var Ve = {};
    var of = {},
        pf = function(a, b) {
            if (B._gtmexpgrp && B._gtmexpgrp.hasOwnProperty(a)) return B._gtmexpgrp[a];
            void 0 === of[a] && (of[a] = Math.floor(Math.random() * b));
            return of[a]
        };
    var qf = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var rf = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                m = g[0].replace(/^\s*|\s*$/g, "");
            if (m && m == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var sf = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        tf = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function uf(a) { return "null" !== a.origin };
    var xf = function(a, b, c, d) { return vf(d) ? rf(a, String(b || wf()), c) : [] },
        Af = function(a, b, c, d, e) {
            if (vf(e)) {
                var f = yf(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = zf(f, function(g) { return g.Cd }, b);
                    if (1 === f.length) return f[0].id;
                    f = zf(f, function(g) { return g.Oc }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Bf(a, b, c, d) {
        var e = wf(),
            f = window;
        uf(f) && (f.document.cookie = a);
        var g = wf();
        return e != g || void 0 != c && 0 <= xf(b, g, !1, d).indexOf(c)
    }
    var Ff = function(a, b, c) {
            function d(u, t, v) {
                if (null == v) return delete g[t], u;
                g[t] = v;
                return u + "; " + t + "=" + v
            }

            function e(u, t) {
                if (null == t) return delete g[t], u;
                g[t] = !0;
                return u + "; " + t
            }
            if (!vf(c.Va)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Cf(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var m;
            c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
            f = d(f, "expires", m);
            f = d(f, "max-age", c.Xj);
            f = d(f, "samesite",
                c.Zj);
            c.$j && (f = e(f, "secure"));
            var l = c.domain;
            if (l && "auto" === l.toLowerCase()) {
                for (var n = Df(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Ef(q, c.path) && Bf(r, a, b, c.Va)) return 0
                }
                return 1
            }
            l && "none" !== l.toLowerCase() && (f = d(f, "domain", l));
            f = e(f, c.flags);
            return Ef(l, c.path) ? 1 : Bf(f, a, b, c.Va) ? 0 : 1
        },
        Gf = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Ff(a, b, c)
        };

    function zf(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var m = a[g],
                l = b(m);
            l === c ? d.push(m) : void 0 === f || l < f ? (e = [m], f = l) : l === f && e.push(m)
        }
        return 0 < d.length ? d : e
    }

    function yf(a, b, c) {
        for (var d = [], e = xf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                m = g.shift();
            if (!b || -1 !== b.indexOf(m)) {
                var l = g.shift();
                l && (l = l.split("-"), d.push({ id: g.join("."), Cd: 1 * l[0] || 1, Oc: 1 * l[1] || 1 }))
            }
        }
        return d
    }
    var Cf = function(a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a },
        Hf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        If = /(^|\.)doubleclick\.net$/i,
        Ef = function(a, b) { return If.test(window.document.location.hostname) || "/" === b && Hf.test(a) },
        wf = function() { return uf(window) ? window.document.cookie : "" },
        Df = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            If.test(e) || Hf.test(e) || a.push("none");
            return a
        },
        vf = function(a) { if (!$c().m() || !a || !kd()) return !0; if (!jd(a)) return !1; var b = hd(a); return null == b ? !0 : !!b };
    var Jf = function(a) { var b = Math.round(2147483647 * Math.random()); return a ? String(b ^ qf(a) & 2147483647) : String(b) },
        Kf = function(a) { return [Jf(a), Math.round(Ha() / 1E3)].join(".") },
        Nf = function(a, b, c, d, e) { var f = Lf(b); return Af(a, f, Mf(c), d, e) },
        Of = function(a, b, c, d) {
            var e = "" + Lf(c),
                f = Mf(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Lf = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Mf = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function Pf(a, b, c) {
        var d, e = Number(null != a.Ab ? a.Ab : void 0);
        0 !== e && (d = new Date((b || Ha()) + 1E3 * (e || 7776E3)));
        return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d }
    };
    var Qf = ["1"],
        Rf = {},
        Sf = {},
        Wf = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Tf(a.prefix);
            if (!Rf[c] && !Uf(c, a.path, a.domain) && b) {
                var d = Tf(a.prefix),
                    e = Kf();
                if (0 === Vf(d, e, a)) {
                    var f = eb("google_tag_data", {});
                    f._gcl_au ? Tc("GTM", 57) : f._gcl_au = e
                }
                Uf(c, a.path, a.domain)
            }
        };

    function Vf(a, b, c, d) {
        var e = Of(b, "1", c.domain, c.path),
            f = Pf(c, d);
        f.Va = "ad_storage";
        return Gf(a, e, f)
    }

    function Uf(a, b, c) {
        var d = Nf(a, b, c, Qf, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (Rf[a] = e.slice(0, 2).join("."), Sf[a] = { id: e.slice(2, 4).join("."), Ig: Number(e[4]) || 0 }) : 3 === e.length ? Sf[a] = { id: e.slice(0, 2).join("."), Ig: Number(e[2]) || 0 } : Rf[a] = d;
        return !0
    }

    function Tf(a) { return (a || "_gcl") + "_au" };
    var Xf = function(a) {
        for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({ lf: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 })
        }
        b.sort(function(g, m) { return m.timestamp - g.timestamp });
        return b
    };

    function fg(a, b) {
        var c = Xf(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].lf] || (d[c[e].lf] = []);
                var g = { version: f[0], timestamp: 1E3 * Number(f[1]), xa: f[2] };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].lf].push(g)
            }
        }
        return d
    };

    function gg() { for (var a = hg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c; return b }

    function ig() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var hg, jg;

    function kg(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = jg[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        hg = hg || ig();
        jg = jg || gg();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                m = b(64);
            if (64 === m && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != m && (c += String.fromCharCode(g << 6 & 192 | m)))
        }
    };
    var lg;
    var pg = function() {
            var a = mg,
                b = ng,
                c = og(),
                d = function(g) { a(g.target || g.srcElement || {}) },
                e = function(g) { b(g.target || g.srcElement || {}) };
            if (!c.init) {
                pb(G, "mousedown", d);
                pb(G, "keyup", d);
                pb(G, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        qg = function(a, b, c, d, e) {
            var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
            og().decorators.push(f)
        },
        rg = function(a, b, c) {
            for (var d = og().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    m;
                if (m = !c || g.forms) a: {
                    var l = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (l && (p || n !== G.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) { if (l[q].test(n)) { m = !0; break a } } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) { m = !0; break a }
                    m = !1
                }
                if (m) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Ka(e, g.callback())
                }
            }
            return e
        };

    function og() {
        var a = eb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = { decorators: [] }, a.gl = b);
        return b
    };
    var sg = /(.*?)\*(.*?)\*(.*)/,
        tg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        ug = /^(?:www\.|m\.|amp\.)+/,
        vg = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function wg(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)") }
    var yg = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g, m = String(d);
                    hg = hg || ig();
                    jg = jg || gg();
                    for (var l = [], n = 0; n < m.length; n += 3) {
                        var p = n + 1 < m.length,
                            q = n + 2 < m.length,
                            r = m.charCodeAt(n),
                            u = p ? m.charCodeAt(n + 1) : 0,
                            t = q ? m.charCodeAt(n + 2) : 0,
                            v = r >> 2,
                            z = (r & 3) << 4 | u >> 4,
                            x = (u & 15) << 2 | t >> 6,
                            w = t & 63;
                        q || (w = 64, p || (x = 64));
                        l.push(hg[v], hg[z], hg[x], hg[w])
                    }
                    g = l.join("");
                    f.call(e, g)
                }
            }
        var A = b.join("*");
        return ["1", xg(A),
            A
        ].join("*")
    };

    function xg(a, b) {
        var c = [B.navigator.userAgent, (new Date).getTimezoneOffset(), cb.userLanguage || cb.language, Math.floor(Ha() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = lg)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, m = 0; 8 > m; m++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        lg = d;
        for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ lg[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }

    function zg() {
        return function(a) {
            var b = Te(B.location.href),
                c = b.search.replace("?", ""),
                d = Oe(c, "_gl", !0) || "";
            a.query = Ag(d) || {};
            var e = Re(b, "fragment").match(wg("_gl"));
            a.fragment = Ag(e && e[3] || "") || {}
        }
    }

    function Bg(a, b) {
        var c = wg(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Cg = function(a, b) {
            b || (b = "_gl");
            var c = vg.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Bg(b, (c[2] || "").slice(1)),
                f = Bg(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Dg = function(a) {
            var b = zg(),
                c = og();
            c.data || (c.data = { query: {}, fragment: {} }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ka(d, e.query), a && Ka(d, e.fragment));
            return d
        },
        Ag = function(a) {
            try {
                var b = Eg(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = kg(d[e + 1]);
                        c[f] = g
                    }
                    Tc("TAGGING", 6);
                    return c
                }
            } catch (m) {
                Tc("TAGGING",
                    8)
            }
        };

    function Eg(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = sg.exec(d);
                    if (f) { c = f; break a }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var m = g[3],
                    l;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === xg(m, p)) { l = !0; break a }
                    l = !1
                }
                if (l) return m;
                Tc("TAGGING", 7)
            }
        }
    }

    function Fg(a, b, c, d) {
        function e(p) {
            p = Bg(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = vg.exec(c);
        if (!f) return "";
        var g = f[1],
            m = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : m = "?" + e(m.substring(1));
        return "" + g + m + l
    }

    function Gg(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = rg(b, 1, c),
            e = rg(b, 2, c),
            f = rg(b, 3, c);
        if (La(d)) {
            var g = yg(d);
            c ? Hg("_gl", g, a) : Ig("_gl", g, a, !1)
        }
        if (!c && La(e)) {
            var m = yg(e);
            Ig("_gl", m, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l)) a: {
                var n = l,
                    p = f[l],
                    q = a;
                if (q.tagName) { if ("a" === q.tagName.toLowerCase()) { Ig(n, p, q, void 0); break a } if ("form" === q.tagName.toLowerCase()) { Hg(n, p, q); break a } }
                "string" == typeof q && Fg(n, p, q, void 0)
            }
    }

    function Ig(a, b, c, d) {
        if (c.href) {
            var e = Fg(a, b, c.href, void 0 === d ? !1 : d);
            Va.test(e) && (c.href = e)
        }
    }

    function Hg(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var m = e[g];
                    if (m.name === a) {
                        m.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = G.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = Fg(a, b, c.action);
                Va.test(n) && (c.action = n)
            }
        }
    }

    function mg(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || Gg(e, e.hostname) }
        } catch (g) {}
    }

    function ng(a) {
        try {
            if (a.action) {
                var b = Re(Te(a.action), "host");
                Gg(a, b)
            }
        } catch (c) {}
    }
    var Jg = function(a, b, c, d) {
            pg();
            qg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Kg = function(a, b) {
            pg();
            qg(a, [Qe(B.location, "host", !0)], b, !0, !0)
        },
        Lg = function() {
            var a = G.location.hostname,
                b = tg.exec(G.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var m = a.replace(ug, ""),
                l = e.replace(ug, ""),
                n;
            if (!(n = m === l)) {
                var p = "." + l;
                n = m.substring(m.length - p.length,
                    m.length) === p
            }
            return n
        },
        Mg = function(a, b) { return !1 === a ? !1 : a || b || Lg() };
    var Ng = {};
    var Og = /^\w+$/,
        Pg = /^[\w-]+$/,
        Qg = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
        Rg = function() { if (!$c().m() || !kd()) return !0; var a = hd("ad_storage"); return null == a ? !0 : !!a },
        Sg = function(a, b) { jd("ad_storage") ? Rg() ? a() : pd(a, "ad_storage") : b ? Tc("TAGGING", 3) : od(function() { Sg(a, !0) }, ["ad_storage"]) },
        Ug = function(a) { return Tg(a).map(function(b) { return b.xa }) },
        Tg = function(a) {
            var b = [];
            if (!uf(B) || !G.cookie) return b;
            var c = xf(a, G.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = { Wc: d.Wc }, e++) {
                var f = Vg(c[e]);
                if (null != f) {
                    var g = f,
                        m = g.version;
                    d.Wc = g.xa;
                    var l = g.timestamp,
                        n = g.labels,
                        p = ta(b, function(q) { return function(r) { return r.xa === q.Wc } }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = Wg(p.labels, n || [])) : b.push({ version: m, xa: d.Wc, timestamp: l, labels: n })
                }
            }
            b.sort(function(q, r) { return r.timestamp - q.timestamp });
            return Xg(b)
        };

    function Wg(a, b) { for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]); for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]); return d }

    function Yg(a) { return a && "string" == typeof a && a.match(Og) ? a : "_gcl" }
    var $g = function() {
            var a = Te(B.location.href),
                b = Re(a, "query", !1, void 0, "gclid"),
                c = Re(a, "query", !1, void 0, "gclsrc"),
                d = Re(a, "query", !1, void 0, "wbraid"),
                e = Re(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Oe(f, "gclid", void 0);
                c = c || Oe(f, "gclsrc", void 0);
                d = d || Oe(f, "wbraid", void 0)
            }
            return Zg(b, c, e, d)
        },
        Zg = function(a, b, c, d) {
            var e = {},
                f = function(g, m) {
                    e[m] || (e[m] = []);
                    e[m].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Pg.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Pg)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        bh = function(a) {
            var b = $g();
            Sg(function() { ah(b, !1, a) })
        };

    function ah(a, b, c, d, e) {
        function f(z, x) {
            var w = ch(z, g);
            w && (Gf(w, x, m), l = !0)
        }
        c = c || {};
        e = e || [];
        var g = Yg(c.prefix);
        d = d || Ha();
        var m = Pf(c, d, !0);
        m.Va = "ad_storage";
        var l = !1,
            n = Math.round(d / 1E3),
            p = function(z) {
                var x = ["GCL", n, z];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Ng.enable_gbraid_cookie_write ? 0 : Ng.enable_gbraid_cookie_write) && !l && a.gb) {
            var q = a.gb[0],
                r = ch("gb",
                    g),
                u = !1;
            if (!b)
                for (var t = Tg(r), v = 0; v < t.length; v++) t[v].xa === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var eh = function(a, b) {
            var c = Dg(!0);
            Sg(function() {
                for (var d = Yg(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Qg[f]) {
                        var g = ch(f, d),
                            m = c[g];
                        if (m) {
                            var l = Math.min(dh(m), Ha()),
                                n;
                            b: {
                                var p = l;
                                if (uf(B))
                                    for (var q = xf(g, G.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (dh(q[r]) > p) { n = !0; break b }
                                n = !1
                            }
                            if (!n) {
                                var u = Pf(b, l, !0);
                                u.Va = "ad_storage";
                                Gf(g, m, u)
                            }
                        }
                    }
                }
                ah(Zg(c.gclid, c.gclsrc), !1, b)
            })
        },
        ch = function(a, b) { var c = Qg[a]; if (void 0 !== c) return b + c },
        dh = function(a) {
            return 0 !== fh(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Vg(a) { var b = fh(a.split(".")); return 0 === b.length ? null : { version: b[0], xa: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3) } }

    function fh(a) { return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Pg.test(a[2]) ? [] : a }
    var gh = function(a, b, c, d, e) {
            if (sa(b) && uf(B)) {
                var f = Yg(e),
                    g = function() {
                        for (var m = {}, l = 0; l < a.length; ++l) {
                            var n = ch(a[l], f);
                            if (n) {
                                var p = xf(n, G.cookie, void 0, "ad_storage");
                                p.length && (m[n] = p.sort()[p.length - 1])
                            }
                        }
                        return m
                    };
                Sg(function() { Jg(g, b, c, d) })
            }
        },
        Xg = function(a) { return a.filter(function(b) { return Pg.test(b.xa) }) },
        hh = function(a, b) {
            if (uf(B)) {
                for (var c = Yg(b.prefix), d = {}, e = 0; e < a.length; e++) Qg[a[e]] && (d[a[e]] = Qg[a[e]]);
                Sg(function() {
                    ya(d, function(f, g) {
                        var m = xf(c + g, G.cookie, void 0, "ad_storage");
                        m.sort(function(u,
                            t) { return dh(t) - dh(u) });
                        if (m.length) {
                            var l = m[0],
                                n = dh(l),
                                p = 0 !== fh(l.split(".")).length ? l.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== fh(l.split(".")).length ? l.split(".")[2] : void 0;
                            q[f] = [r];
                            ah(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function ih(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var jh = function(a) {
        function b(e, f, g) { g && (e[f] = g) }
        if (kd()) {
            var c = $g();
            if (ih(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Kg(function() { return d }, 3);
                Kg(function() { var e = {}; return e._up = "1", e }, 1)
            }
        }
    };

    function kh(a, b) {
        var c = Yg(b),
            d = ch(a, c);
        if (!d) return 0;
        for (var e = Tg(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function lh(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Hh = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Ih = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        Jh = {
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
        Kh = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Lh = function() {
            var a = !1;
            a = !0;
            return a
        },
        Nh = function(a) {
            var b = we("gtm.allowlist") || we("gtm.whitelist");
            b && Xc(9);
            Lh() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Na(Ea(b), Ih),
                d = we("gtm.blocklist") ||
                we("gtm.blacklist");
            d || (d = we("tagTypeBlacklist")) && Xc(3);
            d ? Xc(8) : d = [];
            Mh() && (d = Ea(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ea(d).indexOf("google") && Xc(2);
            var e = d && Na(Ea(d), Jh),
                f = {};
            return function(g) {
                var m = g && g[Db.sb];
                if (!m || "string" != typeof m) return !0;
                m = m.replace(/^_*/, "");
                if (void 0 !== f[m]) return f[m];
                var l = pe[m] || [],
                    n = a(m, l);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(m))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > c.indexOf(l[q])) {
                                        Xc(11);
                                        p = !1;
                                        break a
                                    }
                                } else { p = !1; break a }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var u = 0 <= e.indexOf(m);
                    if (u) r = u;
                    else {
                        var t = xa(e, l || []);
                        t && Xc(10);
                        r = t
                    }
                }
                var v = !n || r;
                v || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = xa(e, Kh));
                return f[m] = v
            }
        },
        Mh = function() { return Hh.test(B.location && B.location.hostname) };
    var Oh = !1,
        Ph = 0,
        Qh = [];

    function Rh(a) {
        if (!Oh) {
            var b = G.createEventObject,
                c = "complete" == G.readyState,
                d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) { Oh = !0; for (var e = 0; e < Qh.length; e++) H(Qh[e]) }
            Qh.push = function() { for (var f = 0; f < arguments.length; f++) H(arguments[f]); return 0 }
        }
    }

    function Sh() { if (!Oh && 140 > Ph) { Ph++; try { G.documentElement.doScroll("left"), Rh() } catch (a) { B.setTimeout(Sh, 50) } } }
    var Th = function(a) { Oh ? a() : Qh.push(a) };
    var Vh = function(a, b) {
            this.m = !1;
            this.D = [];
            this.J = { tags: [] };
            this.W = !1;
            this.o = this.s = 0;
            Uh(this, a, b)
        },
        Wh = function(a, b, c, d) {
            if (ce.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Bb(d) && (e = M(d, e));
            e.id = c;
            e.status = "timeout";
            return a.J.tags.push(e) - 1
        },
        Xh = function(a, b, c, d) {
            var e = a.J.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Yh = function(a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.D.length = 0
            }
        },
        Uh = function(a, b, c) {
            pa(b) && Zh(a, b);
            c && B.setTimeout(function() { return Yh(a) }, Number(c))
        },
        Zh = function(a,
            b) {
            var c = Ja(function() { return H(function() { b(R.H, a.J) }) });
            a.m ? c() : a.D.push(c)
        },
        $h = function(a) {
            a.s++;
            return Ja(function() {
                a.o++;
                a.W && a.o >= a.s && Yh(a)
            })
        };
    var ai = function() {
            function a(d) { return !qa(d) || 0 > d ? 0 : d }
            if (!T._li && B.performance && B.performance.timing) {
                var b = B.performance.timing.navigationStart,
                    c = qa(xe.get("gtm.start")) ? xe.get("gtm.start") : 0;
                T._li = { cst: a(c - b), cbt: a(me - b) }
            }
        },
        bi = function(a) { B.performance && B.performance.mark(R.H + "_" + a + "_start") },
        ci = function(a) {
            if (B.performance) {
                var b = R.H + "_" + a + "_start",
                    c = R.H + "_" + a + "_duration";
                B.performance.measure(c, b);
                var d = B.performance.getEntriesByName(c)[0];
                B.performance.clearMarks(b);
                B.performance.clearMeasures(c);
                var e = T._p || {};
                void 0 === e[a] && (e[a] = d.duration, T._p = e);
                return d.duration
            }
        },
        di = function() {
            if (B.performance && B.performance.now) {
                var a = T._p || {};
                a.PAGEVIEW = B.performance.now();
                T._p = a
            }
        };
    var ei = {},
        fi = function() { return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject] },
        gi = !1;
    var hi = function(a) {
            B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
            var b = B.GoogleAnalyticsObject;
            if (B[b]) B.hasOwnProperty(b) || Xc(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ga());
                B[b] = c
            }
            ai();
            return B[b]
        },
        ii = function(a) {
            if (kd()) {
                var b = fi();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function ji() { return B.GoogleAnalyticsObject || "ga" }
    var ki = function(a) {},
        li = function(a, b) {
            return function() {
                var c = fi(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            m = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", m, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var si = function(a) {},
        wi = function(a) {},
        xi =
        function() { return "&tc=" + cc.filter(function(a) { return a }).length },
        Ai = function() { 2022 <= yi().length && zi() },
        Bi = function(a) { return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*" },
        Di = function() { Ci || (Ci = B.setTimeout(zi, 500)) },
        zi = function() {
            Ci && (B.clearTimeout(Ci), Ci = void 0);
            if (void 0 !== Ei && (!Fi[Ei] || Gi || Hi))
                if (Ii[Ei] || Ji.Xi() || 0 >= Ki--) Xc(1), Ii[Ei] = !0;
                else {
                    Ji.tj();
                    var a = yi(!0);
                    ob(a);
                    Fi[Ei] = !0;
                    Li = Mi = Ni = Oi = Hi = Gi = ""
                }
        },
        yi = function(a) {
            var b = Ei;
            if (void 0 === b) return "";
            var c = Uc("GTM"),
                d = Uc("TAGGING");
            return [Pi, Fi[b] ? "" : "&es=1", Qi[b], si(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", xi(), Gi, Hi, Oi, Ni, wi(a), Mi, Li, "&z=0"].join("")
        },
        Si = function() { Pi = Ri() },
        Ri = function() { return [ne, "&v=3&t=t", "&pid=" + va(), "&rv=" + R.ud].join("") },
        vi = ["L", "S", "Y"],
        ri = ["S", "E"],
        Ti = { sampleRate: "0.005000", ih: "", hh: Number("5") },
        Ui = 0 <= G.location.search.indexOf("?gtm_latency=") ||
        0 <= G.location.search.indexOf("&gtm_latency="),
        Vi;
    if (!(Vi = Ui)) {
        var Wi = Math.random(),
            Xi = Ti.sampleRate;
        Vi = Wi < Xi
    }
    var kj = Vi,
        lj = { label: R.H + " Container", children: [{ label: "Initialization", children: [] }] },
        Pi = Ri(),
        Fi = {},
        Gi = "",
        Hi = "",
        Mi = "",
        Ni = "",
        Li = "",
        ui = {},
        ti = !1,
        qi = {},
        mj = {},
        Oi = "",
        Ei = void 0,
        Qi = {},
        Ii = {},
        Ci = void 0,
        nj = 5;
    0 < Ti.hh && (nj = Ti.hh);
    var Ji = function(a, b) {
            for (var c =
                    0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Xi: function() { return c < a ? !1 : Ha() - d[c % a] < b },
                tj: function() {
                    var f = c++ % a;
                    d[f] = Ha()
                }
            }
        }(nj, 1E3),
        Ki = 1E3,
        pj = function(a, b) {
            if (kj && !Ii[a] && Ei !== a) {
                zi();
                Ei = a;
                Mi = Gi = "";
                Qi[a] = "&e=" + Bi(b) + "&eid=" + a;
                Di();
            }
        },
        qj = function(a,
            b, c, d) {
            if (kj && b) {
                var e, f = String(b[Db.sb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Ii[a]) {
                    a !== Ei && (zi(), Ei = a);
                    Gi = Gi ? Gi + "." + g : "&tr=" + g;
                    var m = b["function"];
                    if (!m) throw Error("Error: No function name given for function call.");
                    var l = (ec[m] ? "1" : "2") + e;
                    Mi = Mi ? Mi + "." + l : "&ti=" + l;
                    Di();
                    Ai()
                }
            }
        };
    var xj = function(a, b, c) {
            if (kj && !Ii[a]) {
                a !== Ei && (zi(), Ei = a);
                var d = c + b;
                Hi = Hi ? Hi + "." + d : "&epr=" + d;
                Di();
                Ai()
            }
        },
        yj = function(a,
            b, c) {};

    function zj(a, b, c, d) {
        var e = cc[a],
            f = Aj(a, b, c, d);
        if (!f) return null;
        var g = kc(e[Db.bg], c, []);
        if (g && g.length) {
            var m = g[0];
            f = zj(m.index, { onSuccess: f, onFailure: 1 === m.yg ? b.terminate : f, terminate: b.terminate }, c, d)
        }
        return f
    }

    function Aj(a, b, c, d) {
        function e() {
            if (f[Db.ai]) m();
            else {
                var z = lc(f, c, []);
                var x = z[Db.mh];
                if (null != x)
                    for (var w = 0; w < x.length; w++)
                        if (!yd(x[w])) { m(); return }
                var A = Wh(c.Vb, String(f[Db.sb]), Number(f[Db.cg]), z[Db.bi]),
                    y = !1;
                z.vtp_gtmOnSuccess = function() {
                    if (!y) {
                        y = !0;
                        var E = Ha() - D;
                        qj(c.id, cc[a], "5", E);
                        Xh(c.Vb, A, "success",
                            E);
                        g()
                    }
                };
                z.vtp_gtmOnFailure = function() {
                    if (!y) {
                        y = !0;
                        var E = Ha() - D;
                        qj(c.id, cc[a], "6", E);
                        Xh(c.Vb, A, "failure", E);
                        m()
                    }
                };
                z.vtp_gtmTagId = f.tag_id;
                z.vtp_gtmEventId = c.id;
                qj(c.id, f, "1");
                var C = function() {
                    var E = Ha() - D;
                    qj(c.id, f, "7", E);
                    Xh(c.Vb, A, "exception", E);
                    y || (y = !0, m())
                };
                var D = Ha();
                try { jc(z, { event: c, index: a, type: 1 }) } catch (E) { C(E) }
            }
        }
        var f = cc[a],
            g = b.onSuccess,
            m = b.onFailure,
            l = b.terminate;
        if (c.Xe(f)) return null;
        var n = kc(f[Db.dg], c, []);
        if (n && n.length) {
            var p = n[0],
                q = zj(p.index, { onSuccess: g, onFailure: m, terminate: l }, c, d);
            if (!q) return null;
            g = q;
            m = 2 === p.yg ? l : q
        }
        if (f[Db.Yf] || f[Db.fi]) {
            var r =
                f[Db.Yf] ? dc : c.Fj,
                u = g,
                t = m;
            if (!r[a]) {
                e = Ja(e);
                var v = Bj(a, r, e);
                g = v.onSuccess;
                m = v.onFailure
            }
            return function() { r[a](u, t) }
        }
        return e
    }

    function Bj(a, b, c) {
        var d = [],
            e = [];
        b[a] = Cj(d, e, c);
        return { onSuccess: function() { b[a] = Dj; for (var f = 0; f < d.length; f++) d[f]() }, onFailure: function() { b[a] = Ej; for (var f = 0; f < e.length; f++) e[f]() } }
    }

    function Cj(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Dj(a) { a() }

    function Ej(a, b) { b() };

    function Fj(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Te("" + c + b).href
        }
    }

    function Gj(a, b) { return Hj() ? Fj(a, b) : void 0 }

    function Hj() { var a = !1; return a }

    function Ij() { return !!R.vd && "SGTM_TOKEN" !== R.vd.replaceAll("@@", "") };
    var Jj = {},
        Kj = Object.freeze((Jj[Q.rb] = !0, Jj[Q.Ec] = !0, Jj)),
        Lj = {},
        Mj = Object.freeze((Lj[Q.ia] = !0, Lj)),
        Nj = {},
        Oj = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics="),
        Qj = function(a, b, c) {};

    function Rj(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Pj(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) { var u = r[q]; return void 0 === u ? Mj[q] : u },
            f;
        for (f in Rj(a, b))
            if (!Kj[f]) {
                var g = (d ? d + "." : "") + f,
                    m = e(f, a),
                    l = e(f, b),
                    n = "object" === zb(m) || "array" === zb(m),
                    p = "object" === zb(l) || "array" === zb(l);
                if (n && p) Pj(m, l, c, g);
                else if (n || p || m !== l) c[g] = !0
            }
        return Object.keys(c)
    }
    var Sj = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Tj = function(a) {
            var b = new Sj;
            b.eventModel = a;
            return b
        },
        Uj = function(a, b) { a.targetConfig = b; return a },
        Vj = function(a, b) { a.containerConfig = b; return a },
        Wj = function(a, b) { a.globalConfig = b; return a },
        Xj = function(a,
            b) { a.remoteConfig = b; return a },
        Yj = function(a, b) { a.onSuccess = b; return a },
        Zj = function(a, b) { a.setContainerTypeLoaded = b; return a },
        ak = function(a, b) { a.getContainerTypeLoaded = b; return a },
        bk = function(a, b) { a.onFailure = b; return a };
    h = Sj.prototype;
    h.getWithConfig = function(a) { if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]; if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a] };
    h.getTopLevelKeys = function() {
        function a(c) { for (var d = Object.keys(c), e = 0; e < d.length; ++e) b[d[e]] = 1 }
        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        return Object.keys(b)
    };
    h.getMergedValues = function(a, b) {
        function c(f) {
            Bb(f) && ya(f, function(g, m) {
                e = !0;
                d[g] = m
            })
        }
        var d = {},
            e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        return e ? d : void 0
    };
    h.getKeysFromFirstOfAnyScope = function(a) {
        var b = {},
            c = !1,
            d = function(e) { for (var f = 0; f < a.length; f++) void 0 !== e[a[f]] && (b[a[f]] = e[a[f]], c = !0); return c };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig) || d(this.globalConfig)) return b;
        d(this.remoteConfig);
        return b
    };
    h.getEventModelKeys = function() {
        var a = [],
            b;
        for (b in this.eventModel) b !== Q.rb && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b);
        return a
    };

    function ck() { T.dedupe_gclid || (T.dedupe_gclid = "" + Kf()); return T.dedupe_gclid };
    var dk = function() { var a = !1; return a };
    var ek;
    if (3 === R.ud.length) ek = "g";
    else {
        var fk = "G";
        fk = "g";
        ek = fk
    }
    var gk = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: ek, OPT: "o" },
        hk = function(a) {
            var b = R.H.split("-"),
                c = b[0].toUpperCase(),
                d = gk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === R.ud.length) {
                var g = "w";
                g = dk() ? "s" : "o";
                f = "2" + g
            } else f = "";
            return f + d + R.ud + e
        };

    function ik(a, b) { if ("" === a) return b; var c = Number(a); return isNaN(c) ? b : c };
    var jk = function(a, b) { a.addEventListener && a.addEventListener.call(a, "message", b, !1) };

    function kk() { return Xa("iPhone") && !Xa("iPod") && !Xa("iPad") };
    Xa("Opera");
    Xa("Trident") || Xa("MSIE");
    Xa("Edge");
    !Xa("Gecko") || -1 != Wa().toLowerCase().indexOf("webkit") && !Xa("Edge") || Xa("Trident") || Xa("MSIE") || Xa("Edge"); - 1 != Wa().toLowerCase().indexOf("webkit") && !Xa("Edge") && Xa("Mobile");
    Xa("Macintosh");
    Xa("Windows");
    Xa("Linux") || Xa("CrOS");
    var lk = la.navigator || null;
    lk && (lk.appVersion || "").indexOf("X11");
    Xa("Android");
    kk();
    Xa("iPad");
    Xa("iPod");
    kk() || Xa("iPad") || Xa("iPod");
    Wa().toLowerCase().indexOf("kaios");
    var mk = function(a) {
        if (!a || !G.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        G.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var nk = function() {};
    var ok = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        pk = function(a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.W = 0;
            this.J = void 0 === b ? 500 : b;
            this.s = null
        };
    ka(pk, nk);
    pk.prototype.addEventListener = function(a) {
        var b = {},
            c = tf(function() { return a(b) }),
            d = 0; - 1 !== this.J && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.J));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = ok(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try { qk(this, "addEventListener", e) } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    pk.prototype.removeEventListener = function(a) { a && a.listenerId && qk(this, "removeEventListener", null, a.listenerId) };
    var sk = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) { var f = a.publisher.restrictions[b]; if (void 0 !== f) { e = f[void 0 === d ? "755" : d]; break a } }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var m = c;
            2 === c ? (m = 0, 2 === g && (m = 1)) : 3 === c && (m = 1, 1 === g && (m = 0));
            var l;
            if (0 === m)
                if (a.purpose && a.vendor) {
                    var n = rk(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && rk(a.purpose.consents, b)
                } else l = !0;
            else l = 1 === m ? a.purpose && a.vendor ? rk(a.purpose.legitimateInterests,
                b) && rk(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        rk = function(a, b) { return !(!a || !a[b]) },
        qk = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (tk(a)) {
                uk(a);
                var f = ++a.W;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }, g), "*")
                }
            } else c({}, !1)
        },
        tk = function(a) {
            if (a.m) return a.m;
            var b;
            a: {
                for (var c = a.o, d = 0; 50 > d; ++d) {
                    var e;
                    try { e = !(!c.frames || !c.frames.__tcfapiLocator) } catch (m) {
                        e = !1
                    }
                    if (e) { b = c; break a }
                    var f;
                    b: {
                        try { var g = c.parent; if (g && g != c) { f = g; break b } } catch (m) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.m = b;
            return a.m
        },
        uk = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, jk(a.o, a.s))
        };
    var vk = !0;
    vk = !1;
    var wk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        xk = ik("", 550),
        yk = ik("", 500);

    function zk() { var a = T.tcf || {}; return T.tcf = a }
    var Ek = function() {
        var a = zk(),
            b = new pk(B, vk ? 3E3 : -1);
        if (!0 === B.gtag_enable_tcf_support && !a.active && ("function" === typeof B.__tcfapi || "function" === typeof b.o.__tcfapi || null != tk(b))) {
            a.active = !0;
            a.Qc = {};
            Ak();
            var c = null;
            vk ? c = B.setTimeout(function() {
                Bk(a);
                Ck(a);
                c = null
            }, yk) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Bk(a), Ck(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Dk(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in wk)
                                if (wk.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var m = d,
                                            l = !0;
                                        l = void 0 === l ? !1 : l;
                                        var n;
                                        var p = m;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = ok(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                        f["1"] = n ? !1 === m.gdprApplies || "tcunavailable" === m.tcString || void 0 === m.gdprApplies &&
                                            !l || "string" !== typeof m.tcString || !m.tcString.length ? !0 : sk(m, "1", 0) : !1
                                    } else f[g] = sk(d, g, wk[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.Qc = e, Ck(a))
                    }
                })
            } catch (d) { c && (clearTimeout(c), c = null), Bk(a), Ck(a) }
        }
    };

    function Bk(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        vk && (a.Qc = Dk())
    }

    function Ak() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = xk, a);
        vd(b)
    }

    function Dk() {
        var a = {},
            b;
        for (b in wk) wk.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Ck(a) {
        var b = {},
            c = (b.ad_storage = a.Qc["1"] ? "granted" : "denied", b);
        xd(c, 0, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Fk() })
    }
    var Fk = function() { var a = zk(); return a.active ? a.tcString || "" : "" },
        Gk = function() { var a = zk(); return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : "" },
        Hk = function(a) { if (!wk.hasOwnProperty(String(a))) return !0; var b = zk(); return b.active && b.Qc ? !!b.Qc[String(a)] : !0 };
    var Ok = !1;
    var Pk = function() { this.m = {} },
        Qk = function(a, b, c) { null != c && (a.m[b] = c) },
        Rk = function(a) { return Object.keys(a.m).map(function(b) { return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b]) }).join("&") },
        Tk = function(a, b, c, d, e) {};
    var Vk = /[A-Z]+/,
        Wk = /\s/,
        Xk = function(a) {
            if (k(a)) {
                a = Fa(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Vk.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Wk.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return { id: a, prefix: c, containerId: c + "-" + d[0], K: d }
                    }
                }
            }
        },
        Zk = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Xk(a[c]);
                d && (b[d.id] = d)
            }
            Yk(b);
            var e = [];
            ya(b, function(f, g) { e.push(g) });
            return e
        };

    function Yk(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.K[1] && b.push(d.containerId) }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var al = function(a, b, c, d) { return (2 === $k() || d || "http:" != B.location.protocol ? a : b) + c },
        $k = function() {
            var a = kb(),
                b;
            if (1 === a) a: {
                var c = ee;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = G.getElementsByTagName("script"), m = 0; m < g.length && 100 > m; m++) {
                    var l = g[m].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) { b = 3; break a }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var cl = function(a, b, c) {
            if (B[a.functionName]) return b.cf && H(b.cf), B[a.functionName];
            var d = bl();
            B[a.functionName] = d;
            if (a.yd)
                for (var e = 0; e < a.yd.length; e++) B[a.yd[e]] = B[a.yd[e]] || bl();
            a.Jd && void 0 === B[a.Jd] && (B[a.Jd] = c);
            jb(al("https://", "http://", a.kf), b.cf, b.gj);
            return d
        },
        bl = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        dl = { functionName: "_googWcmImpl", Jd: "_googWcmAk", kf: "www.gstatic.com/wcm/loader.js" },
        el = { functionName: "_gaPhoneImpl", Jd: "ga_wpid", kf: "www.gstatic.com/gaphone/loader.js" },
        fl = { lh: "", hi: "5" },
        gl = { functionName: "_googCallTrackingImpl", yd: [el.functionName, dl.functionName], kf: "www.gstatic.com/call-tracking/call-tracking_" + (fl.lh || fl.hi) + ".js" },
        hl = {},
        il = function(a, b, c, d) {
            Xc(22);
            if (c) {
                d = d || {};
                var e = cl(dl, d, a),
                    f = { ak: a, cl: b };
                void 0 === d.Ua && (f.autoreplace = c);
                e(2, d.Ua, f, c, 0, Ga(), d.options)
            }
        },
        jl = function(a, b, c, d) {
            Xc(21);
            if (b && c) {
                d = d || {};
                for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: Ga() }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    hl[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length ? (e.adData = { ak: g.K[0], cl: g.K[1] }, hl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = { gaWpid: g.containerId }, hl[g.id] = !0))
                }(e.gaData || e.adData) && cl(gl, d)(d.Ua, e, d.options)
            }
        },
        kl = function() { var a = !1; return a },
        ll = function(a, b) {
            if (a)
                if (dk()) {} else {
                    if (k(a)) {
                        var c =
                            Xk(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(Q.Oh);
                    if (f && sa(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var m = Xk(f[g]);
                            m && (d.push(m), (a.id === m.id || a.id === a.containerId && a.containerId === m.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var l = b.getWithConfig(Q.Nf),
                            n;
                        if (l) {
                            sa(l) ? n = l : n = [l];
                            var p = b.getWithConfig(Q.Lf),
                                q = b.getWithConfig(Q.Mf),
                                r = b.getWithConfig(Q.Of),
                                u = b.getWithConfig(Q.Nh),
                                t = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var z = 0; z < n.length; z++)
                                if (z < v)
                                    if (d) jl(d, n[z], u, { Ua: t, options: r });
                                    else if ("AW" === a.prefix &&
                                a.K[1]) kl() ? jl([a], n[z], u || "US", { Ua: t, options: r }) : il(a.K[0], a.K[1], n[z], { Ua: t, options: r });
                            else if ("UA" === a.prefix)
                                if (kl()) jl([a], n[z], u || "US", { Ua: t });
                                else {
                                    var x = a.containerId,
                                        w = n[z],
                                        A = { Ua: t };
                                    Xc(23);
                                    if (w) {
                                        A = A || {};
                                        var y = cl(el, A, x),
                                            C = {};
                                        void 0 !== A.Ua ? C.receiver = A.Ua : C.replace = w;
                                        C.ga_wpid = x;
                                        C.destination = w;
                                        y(2, Ga(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var tl = !1;

    function ul() {
        if (pa(cb.joinAdInterestGroup)) return !0;
        tl || (mk(''), tl = !0);
        return pa(cb.joinAdInterestGroup)
    }

    function vl(a, b) {
        var c = void 0;
        try { c = G.querySelector('iframe[data-tagging-id="' + b + '"]') } catch (e) {}
        if (c) { var d = Number(c.dataset.loadTime); if (d && 6E4 > Ha() - d) { Tc("TAGGING", 9); return } } else try { if (50 <= G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) { Tc("TAGGING", 10); return } } catch (e) {}
        lb(a, void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: Ha() }, c)
    };
    var em = function(a, b, c) {
            this.s = a;
            this.eventName = b;
            this.m = c;
            this.o = {};
            this.metadata = {};
            this.W = !1
        },
        fm = function(a, b, c) {
            var d = a.m.getWithConfig(b);
            void 0 !== d ? a.o[b] = d : void 0 !== c && (a.o[b] = c)
        };

    function gm(a) { return { getDestinationId: function() { return a.s }, getEventName: function() { return a.eventName }, setEventName: function(b) { return void(a.eventName = b) }, getHitData: function(b) { return a.o[b] }, setHitData: function(b, c) { return void(a.o[b] = c) }, setHitDataIfNotDefined: function(b, c) { void 0 === a.o[b] && (a.o[b] = c) }, copyToHitData: function(b, c) { fm(a, b, c) }, getMetadata: function(b) { return a.metadata[b] }, setMetadata: function(b, c) { return void(a.metadata[b] = c) }, abort: function() { return void(a.W = !0) }, getProcessedEvent: function() { return a } } };
    var Em = function() {
            var a = !0;
            Hk(7) && Hk(9) && Hk(10) || (a = !1);
            return a
        },
        Fm = function() {
            var a = !0;
            Hk(3) && Hk(4) || (a = !1);
            return a
        };
    var Jm = function(a, b) {
            var c = b.getWithConfig(Q.Sa),
                d = b.getWithConfig(Q.cb),
                e = b.getWithConfig(c);
            if (void 0 === e) {
                var f = void 0;
                Gm.hasOwnProperty(c) ? f = Gm[c] : Hm.hasOwnProperty(c) && (f = Hm[c]);
                1 === f && (f = Im(c));
                k(f) ? fi()(function() {
                    var g = fi().getByName(a).get(f);
                    d(g)
                }) : d(void 0)
            } else d(e);
        },
        Km = function(a, b) {
            var c = a[Q.wc],
                d = b + ".",
                e = a[Q.N] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[Q.Pb];
            e = String(e).replace(/\s+/g, "").split(",");
            var m = fi();
            m(d +
                "require", "linker");
            m(d + "linker:autoLink", e, f, g)
        },
        Om = function(a, b, c) {
            if (kd() && (!c.isGtmEvent || !Lm[a])) {
                var d = !yd(Q.M),
                    e = function(f) {
                        var g, m, l = fi(),
                            n = Mm(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || Nm(b, n.createOnlyFields)) {
                            c.isGtmEvent && (g = "gtm" + qe(), m = n.createOnlyFields, n.gtmTrackerName && (m.name = g));
                            l(function() {
                                var u = l.getByName(b);
                                u && (p = u.get("clientId"));
                                c.isGtmEvent || l.remove(b)
                            });
                            l("create", a, c.isGtmEvent ? m : n.createOnlyFields);
                            d && yd(Q.M) && (d = !1, l(function() { var u = fi().getByName(c.isGtmEvent ? g : b);!u || u.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = Q.Td[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&gcut"] = Q.Td[f]), u.set(n.fieldsToSet), c.isGtmEvent ? u.send("pageview") : u.send("pageview", n.fieldsToSend)) }));
                            c.isGtmEvent && l(function() { l.remove(g) })
                        }
                    };
                Bd(function() { return e(Q.M) },
                    Q.M);
                Bd(function() { return e(Q.C) }, Q.C);
                c.isGtmEvent && (Lm[a] = !0)
            }
        },
        Pm = function(a, b) { Ij() && b && (a[Q.pb] = b) },
        Ym = function(a, b, c) {
            function d() {
                var J = c.getWithConfig(Q.qc);
                m(function() {
                    if (!c.isGtmEvent && Bb(J)) {
                        var I = t.fieldsToSend,
                            N = l().getByName(n),
                            L;
                        for (L in J)
                            if (J.hasOwnProperty(L) && /^(dimension|metric)\d+$/.test(L) && void 0 != J[L]) {
                                var K = N.get(Im(J[L]));
                                Qm(I, L, K)
                            }
                    }
                })
            }

            function e() {
                if (t.displayfeatures) {
                    var J = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, { cookieName: J })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                m = c.isGtmEvent ? hi(c.getWithConfig("gaFunctionName")) : hi();
            if (pa(m)) {
                var l = fi,
                    n;
                c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(J) {
                        var I = [].slice.call(arguments, 0);
                        I[0] = n ? n + "." + I[0] : "" + I[0];
                        m.apply(window, I)
                    },
                    q = function(J) {
                        var I = function(P, ha) { for (var ra = 0; ha && ra < ha.length; ra++) p(P, ha[ra]) },
                            N = c.isGtmEvent,
                            L = N ? Rm(t) : Sm(b, c);
                        if (L) {
                            var K = {};
                            Pm(K, J);
                            p("require", "ec", "ec.js",
                                K);
                            N && L.Ne && p("set", "&cu", L.Ne);
                            var S = L.action;
                            if (N || "impressions" === S)
                                if (I("ec:addImpression", L.Hg), !N) return;
                            if ("promo_click" === S || "promo_view" === S || N && L.Pc) {
                                var W = L.Pc;
                                I("ec:addPromo", W);
                                if (W && 0 < W.length && "promo_click" === S) { N ? p("ec:setAction", S, L.jb) : p("ec:setAction", S); return }
                                if (!N) return
                            }
                            "promo_view" !== S && "impressions" !== S && (I("ec:addProduct", L.Bb), p("ec:setAction", S, L.jb))
                        }
                    },
                    r = function(J) {
                        if (J) {
                            var I = {};
                            if (Bb(J))
                                for (var N in Tm) Tm.hasOwnProperty(N) && Um(Tm[N], N, J[N], I);
                            Pm(I, x);
                            p("require", "linkid", I)
                        }
                    },
                    u = function() {
                        if (dk()) {} else {
                            var J = c.getWithConfig(Q.Mh);
                            J && (p("require", J, { dataLayer: R.X }), p("require", "render"))
                        }
                    },
                    t = Mm(n, b, c),
                    v = function(J, I, N) {
                        N && (I = "" + I);
                        t.fieldsToSend[J] = I
                    };
                !c.isGtmEvent && Nm(n, t.createOnlyFields) && (m(function() { l() && l().remove(n) }), Vm[n] = !1);
                m("create", f, t.createOnlyFields);
                if (t.createOnlyFields[Q.pb] &&
                    !c.isGtmEvent) {
                    var z = Gj(t.createOnlyFields[Q.pb], "/analytics.js");
                    z && (g = z)
                }
                var x = c.isGtmEvent ? t.fieldsToSet[Q.pb] : t.createOnlyFields[Q.pb];
                if (x) {
                    var w = c.isGtmEvent ? t.fieldsToSet[Q.ed] : t.createOnlyFields[Q.ed];
                    w && !Vm[n] && (Vm[n] = !0, m(li(n, w)))
                }
                c.isGtmEvent ? t.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(t.linkAttribution));
                var A = t[Q.la];
                A && A[Q.N] && Km(A, n);
                p("set", t.fieldsToSet);
                if (c.isGtmEvent) {
                    if (t.enableLinkId) {
                        var y = {};
                        Pm(y, x);
                        p("require", "linkid", "linkid.js", y)
                    }
                    kd() && Om(f, n, c)
                }
                if (b === Q.fc)
                    if (c.isGtmEvent) {
                        e();
                        if (t.remarketingLists) {
                            var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", { cookieName: C })
                        }
                        q(x);
                        p("send", "pageview");
                        t.createOnlyFields._useUp && ii(n + ".")
                    } else u(), p("send", "pageview", t.fieldsToSend);
                else b === Q.Aa ? (u(), ll(f, c), c.getWithConfig(Q.ib) && (jh(["aw", "dc"]), ii(n + ".")), 0 != t.sendPageView && p("send", "pageview", t.fieldsToSend),
                        Om(f, n, c), !c.isGtmEvent && 0 < c.getEventModelKeys().length && (Xc(68), 1 < T.configCount && Xc(69))) : b === Q.Ia ? Jm(n, c) : "screen_view" === b ? p("send", "screenview", t.fieldsToSend) : "timing_complete" === b ? (t.fieldsToSend.hitType = "timing", v("timingCategory", t.eventCategory, !0), c.isGtmEvent ? v("timingVar", t.timingVar, !0) : v("timingVar", t.name, !0), v("timingValue", Ba(t.value)), void 0 !== t.eventLabel && v("timingLabel", t.eventLabel, !0), p("send", t.fieldsToSend)) : "exception" === b ? p("send", "exception", t.fieldsToSend) : "" === b && c.isGtmEvent ||
                    ("track_social" === b && c.isGtmEvent ? (t.fieldsToSend.hitType = "social", v("socialNetwork", t.socialNetwork, !0), v("socialAction", t.socialAction, !0), v("socialTarget", t.socialTarget, !0)) : ((c.isGtmEvent || Wm[b]) && q(x), c.isGtmEvent && e(), t.fieldsToSend.hitType = "event", v("eventCategory", t.eventCategory, !0), v("eventAction", t.eventAction || b, !0), void 0 !== t.eventLabel && v("eventLabel", t.eventLabel, !0), void 0 !== t.value && v("eventValue", Ba(t.value))), p("send", t.fieldsToSend));
                var D = !1;
                var E = Xm;
                D && (E = c.getContainerTypeLoaded("UA"));
                if (!E && !c.isGtmEvent) {
                    Xm = !0;
                    D && c.setContainerTypeLoaded("UA", !0);
                    ai();
                    var F = function() {
                            D && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure()
                        },
                        O = function() { l().loaded || F() };
                    dk() ? H(O) : jb(g, O, F)
                }
            } else H(c.onFailure)
        },
        Zm = function(a, b, c, d) { Cd(function() { Ym(a, b, d) }, [Q.M, Q.C]) },
        an = function(a, b) {
            function c(f) {
                function g(p, q) { for (var r = 0; r < q.length; r++) { var u = q[r]; if (f[u]) { l[p] = f[u]; break } } }

                function m() {
                    if (f.category) l.category = f.category;
                    else {
                        for (var p = "", q = 0; q < $m.length; q++) void 0 !== f[$m[q]] && (p && (p += "/"), p += f[$m[q]]);
                        p && (l.category = p)
                    }
                }
                var l = M(f),
                    n = !1;
                if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]),
                    g("position", ["list_position", "creative_slot", "index"]), m();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return l
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++) a[e] && Bb(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0
        },
        bn = function(a) { return yd(a) },
        cn = !1;
    var Xm, Vm = {},
        Lm = {},
        dn = {},
        Gm = Object.freeze((dn.client_storage =
            "storage", dn.sample_rate = 1, dn.site_speed_sample_rate = 1, dn.store_gac = 1, dn.use_amp_client_id = 1, dn[Q.Ba] = 1, dn[Q.ra] = "storeGac", dn[Q.ka] = 1, dn[Q.sa] = 1, dn[Q.Ka] = 1, dn[Q.Lb] = 1, dn[Q.$a] = 1, dn[Q.Mb] = 1, dn)),
        en = {},
        fn = Object.freeze((en._cs = 1, en._useUp = 1, en.allowAnchor = 1, en.allowLinker = 1, en.alwaysSendReferrer = 1, en.clientId = 1, en.cookieDomain = 1, en.cookieExpires = 1, en.cookieFlags = 1, en.cookieName = 1, en.cookiePath = 1, en.cookieUpdate = 1, en.legacyCookieDomain = 1, en.legacyHistoryImport = 1, en.name = 1, en.sampleRate = 1, en.siteSpeedSampleRate =
            1, en.storage = 1, en.storeGac = 1, en.useAmpClientId = 1, en._cd2l = 1, en)),
        gn = Object.freeze({ anonymize_ip: 1 }),
        hn = {},
        Hm = Object.freeze((hn.campaign = { content: "campaignContent", id: "campaignId", medium: "campaignMedium", name: "campaignName", source: "campaignSource", term: "campaignKeyword" }, hn.app_id = 1, hn.app_installer_id = 1, hn.app_name = 1, hn.app_version = 1, hn.description = "exDescription", hn.fatal = "exFatal", hn.language = 1, hn.page_hostname = "hostname", hn.transport_type = "transport", hn[Q.ca] = "currencyCode", hn[Q.Jf] = 1, hn[Q.Ta] =
            "location", hn[Q.te] = "page", hn[Q.La] = "referrer", hn[Q.xc] = "title", hn[Q.Rf] = 1, hn[Q.Da] = 1, hn)),
        jn = {},
        kn = Object.freeze((jn.content_id = 1, jn.event_action = 1, jn.event_category = 1, jn.event_label = 1, jn.link_attribution = 1, jn.name = 1, jn[Q.la] = 1, jn[Q.If] = 1, jn[Q.ia] = 1, jn[Q.ja] = 1, jn)),
        ln = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        $m = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        mn = {},
        Tm = Object.freeze((mn.levels = 1, mn[Q.sa] = "duration", mn[Q.Lb] = 1, mn)),
        nn = {},
        on = Object.freeze((nn.anonymize_ip = 1, nn.fatal = 1, nn.send_page_view = 1, nn.store_gac = 1, nn.use_amp_client_id = 1, nn[Q.ra] = 1, nn[Q.Jf] = 1, nn)),
        Um = function(a, b, c, d) {
            if (void 0 !== c)
                if (on[b] && (c = Ca(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Im(b)] = c;
                else if (k(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) &&
                    void 0 !== c[e] && (d[a[e]] = c[e])
        },
        Im = function(a) { return a && k(a) ? a.replace(/(_[a-z])/g, function(b) { return b[1].toUpperCase() }) : a },
        pn = {},
        Wm = Object.freeze((pn.checkout_progress = 1, pn.select_content = 1, pn.set_checkout_option = 1, pn[Q.Hb] = 1, pn[Q.Ib] = 1, pn[Q.nb] = 1, pn[Q.ob] = 1, pn[Q.Jb] = 1, pn[Q.oa] = 1, pn[Q.Kb] = 1, pn[Q.qa] = 1, pn)),
        qn = {},
        rn = Object.freeze((qn.checkout_progress = 1, qn.set_checkout_option = 1, qn[Q.xf] = 1, qn[Q.Hb] = 1, qn[Q.Ib] = 1, qn[Q.nb] = 1, qn[Q.oa] = 1, qn[Q.Kb] = 1, qn[Q.yf] = 1, qn)),
        sn = {},
        tn = Object.freeze((sn.generate_lead =
            1, sn.login = 1, sn.search = 1, sn.select_content = 1, sn.share = 1, sn.sign_up = 1, sn.view_search_results = 1, sn[Q.ob] = 1, sn[Q.Jb] = 1, sn[Q.qa] = 1, sn)),
        un = function(a) {
            var b = "general";
            rn[a] ? b = "ecommerce" : tn[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        vn = {},
        wn = Object.freeze((vn.view_search_results = 1, vn[Q.ob] = 1, vn[Q.Jb] = 1, vn[Q.qa] = 1, vn)),
        Qm = function(a, b, c) { a.hasOwnProperty(b) || (a[b] = c) },
        xn = function(a) {
            if (sa(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 !=
                            f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        Mm = function(a, b, c) {
            var d = function(O) { return c.getWithConfig(O) },
                e = {},
                f = {},
                g = {},
                m = {},
                l = xn(d(Q.Lh));
            !c.isGtmEvent && l && Qm(f, "exp", l);
            g["&gtm"] = hk(!0);
            kd() && (m._cs = bn);
            var n = d(Q.qc);
            if (!c.isGtmEvent && Bb(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && Qm(f, p, q)
                    }
            for (var r = c.getTopLevelKeys(), u = 0; u < r.length; ++u) {
                var t = r[u];
                if (c.isGtmEvent) {
                    var v = d(t);
                    ln.hasOwnProperty(t) ?
                        e[t] = v : fn.hasOwnProperty(t) ? m[t] = v : g[t] = v
                } else {
                    var z = void 0;
                    z = t !== Q.T ? d(t) : c.getMergedValues(t);
                    if (kn.hasOwnProperty(t)) Um(kn[t], t, z, e);
                    else if (gn.hasOwnProperty(t)) Um(gn[t], t, z, g);
                    else if (Hm.hasOwnProperty(t)) Um(Hm[t], t, z, f);
                    else if (Gm.hasOwnProperty(t)) Um(Gm[t], t, z, m);
                    else if (/^(dimension|metric|content_group)\d+$/.test(t)) Um(1, t, z, f);
                    else if (t === Q.T) {
                        if (!cn) {
                            var x = Qa(z);
                            x && (f["&did"] = x)
                        }
                        var w = void 0,
                            A = void 0;
                        b === Q.Aa ? w = Qa(c.getMergedValues(t), ".") : (w = Qa(c.getMergedValues(t, 1), "."), A = Qa(c.getMergedValues(t,
                            2), "."));
                        w && (f["&gdid"] = w);
                        A && (f["&edid"] = A)
                    } else t === Q.Ca && 0 > r.indexOf(Q.Lb) && (m.cookieName = z + "_ga")
                }
            }!1 !== d(Q.Bh) && !1 !== d(Q.hc) && Em() || (g.allowAdFeatures = !1);
            !1 !== d(Q.V) && Fm() || (g.allowAdPersonalizationSignals = !1);
            !c.isGtmEvent && d(Q.ib) && (m._useUp = !0);
            if (c.isGtmEvent) {
                m.name = m.name || e.gtmTrackerName;
                var y = g.hitCallback;
                g.hitCallback = function() {
                    pa(y) && y();
                    c.onSuccess()
                }
            } else {
                Qm(m, "cookieDomain", "auto");
                Qm(g, "forceSSL", !0);
                Qm(e, "eventCategory", un(b));
                wn[b] && Qm(f, "nonInteraction", !0);
                "login" === b ||
                    "sign_up" === b || "share" === b ? Qm(e, "eventLabel", d(Q.If)) : "search" === b || "view_search_results" === b ? Qm(e, "eventLabel", d(Q.Sh)) : "select_content" === b && Qm(e, "eventLabel", d(Q.Fh));
                var C = e[Q.la] || {},
                    D = C[Q.Ob];
                D || 0 != D && C[Q.N] ? m.allowLinker = !0 : !1 === D && Qm(m, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                m.name = a
            }
            kd() && (g["&gcs"] = zd(), yd(Q.M) || (m.storage = "none"), yd(Q.C) || (g.allowAdFeatures = !1, m.storeGac = !1));
            var E = d(Q.va) || d(Q.pb),
                F = d(Q.ed);
            E && (c.isGtmEvent || (m[Q.pb] = E), m._cd2l = !0);
            F && !c.isGtmEvent && (m[Q.ed] = F);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = m;
            return e
        },
        Rm = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Ne = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.Hg = "impressions" === b.translateIfKeyEquals ? an(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Pc = "promoView" === b.translateIfKeyEquals ? an(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Pc = "promoClick" === b.translateIfKeyEquals ?
                    an(f, !0) : f;
                c.jb = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var m = b[g].products;
                    c.Bb = "products" === b.translateIfKeyEquals ? an(m, !0) : m;
                    c.jb = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        Sm = function(a, b) {
            function c(u) { return { id: d(Q.hb), affiliation: d(Q.Ih), revenue: d(Q.ja), tax: d(Q.Cf), shipping: d(Q.je), coupon: d(Q.Jh), list: d(Q.ie) || u } }
            for (var d = function(u) { return b.getWithConfig(u) },
                    e = d(Q.Z), f, g = 0; e && g < e.length && !(f = e[g][Q.ie]); g++);
            var m = d(Q.qc);
            if (Bb(m))
                for (var l = 0; e && l < e.length; ++l) {
                    var n = e[l],
                        p;
                    for (p in m) m.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != m[p] && Qm(n, p, n[m[p]])
                }
            var q = null,
                r = d(Q.Kh);
            a === Q.oa || a === Q.Kb ? q = { action: a, jb: c(), Bb: an(e) } : a === Q.Hb ? q = { action: "add", Bb: an(e) } : a === Q.Ib ? q = { action: "remove", Bb: an(e) } : a === Q.qa ? q = { action: "detail", jb: c(f), Bb: an(e) } : a === Q.ob ? q = { action: "impressions", Hg: an(e) } : "view_promotion" === a ? q = { action: "promo_view", Pc: an(r) } : "select_content" ===
                a && r && 0 < r.length ? q = { action: "promo_click", Pc: an(r) } : "select_content" === a ? q = { action: "click", jb: { list: d(Q.ie) || f }, Bb: an(e) } : a === Q.nb || "checkout_progress" === a ? q = { action: "checkout", Bb: an(e), jb: { step: a === Q.nb ? 1 : d(Q.Bf), option: d(Q.Af) } } : "set_checkout_option" === a && (q = { action: "checkout_option", jb: { step: d(Q.Bf), option: d(Q.Af) } });
            q && (q.Ne = d(Q.ca));
            return q
        },
        yn = {},
        Nm = function(a, b) {
            var c = yn[a];
            yn[a] = M(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) &&
                    c[e] !== b[e]) return !0;
            return !1
        };

    function zn() { return T.gcq = T.gcq || new An }
    var Bn = function(a, b, c) { zn().register(a, b, c) },
        Cn = function(a, b, c, d) { zn().push("event", [b, a], c, d) },
        Dn = function(a, b) { zn().push("config", [a], b) },
        En = function(a, b, c, d) { zn().push("get", [a, b], c, d) },
        Fn = {},
        Gn = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.claimed = this.m = !1
        },
        Hn = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.O = c || "";
            this.m = d;
            this.o = e
        },
        An = function() {
            this.o = {};
            this.s = {};
            this.m = [];
            this.D = { AW: !1, UA: !1 }
        },
        In = function(a, b) {
            var c = Xk(b);
            return a.o[c.containerId] = a.o[c.containerId] || new Gn
        },
        Jn = function(a, b, c) {
            if (b) {
                var d = Xk(b);
                if (d && 1 === In(a, b).status) {
                    In(a, b).status = 2;
                    var e = {};
                    kj && (e.timeoutId = B.setTimeout(function() {
                        Xc(38);
                        Di()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    Fn[d.containerId] = Ha();
                    if (dk()) {} else {
                        var g =
                            "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + R.X + "&cx=c";
                        Ij() && (g += "&sign=" + R.vd);
                        var m = ("http:" != B.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            l = Gj(c, g) || m;
                        jb(l)
                    }
                }
            }
        },
        Kn = function(a, b, c, d) {
            if (d.O) {
                var e = In(a, d.O),
                    f = e.s;
                if (f) {
                    var g = M(c),
                        m = M(e.targetConfig[d.O]),
                        l = M(e.containerConfig),
                        n = M(e.remoteConfig),
                        p = M(a.s),
                        q = we("gtm.uniqueEventId"),
                        r = Xk(d.O).prefix,
                        u = Ja(function() {
                            var v = g[Q.Nb];
                            v && H(v)
                        }),
                        t = ak(Zj(bk(Yj(Wj(Xj(Vj(Uj(Tj(g), m), l), n), p), function() {
                            xj(q, r, "2");
                            u()
                        }), function() {
                            xj(q, r, "3");
                            u()
                        }), function(v, z) { a.D[v] = z }), function(v) { return a.D[v] });
                    try {
                        xj(q, r, "1"), Qj(d.type, d.O, t);
                        f(d.O, b, d.s, t)
                    } catch (v) { xj(q, r, "4"); }
                }
            }
        };
    h = An.prototype;
    h.register = function(a, b, c) {
        var d = In(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (M(d.remoteConfig, c), d.remoteConfig = c);
            var e = Xk(a),
                f = Fn[e.containerId];
            if (void 0 !== f) {
                var g = T[e.containerId].bootstrap,
                    m = e.prefix.toUpperCase();
                T[e.containerId]._spx && (m = m.toLowerCase());
                var l = we("gtm.uniqueEventId"),
                    n = m,
                    p = Ha() - g;
                if (kj && !Ii[l]) {
                    l !== Ei && (zi(), Ei = l);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Ni = Ni ? Ni + "," + q : "&cl=" + q
                }
                delete Fn[e.containerId]
            }
            this.flush()
        }
    };
    h.notifyContainerLoaded = function(a, b) {
        var c = this,
            d = function(f) {
                if (Xk(f)) {
                    var g = In(c, f);
                    g.status = 3;
                    g.claimed = !0
                }
            };
        d(a);
        for (var e = 0; e < b.length; e++) d(b[e]);
        this.flush()
    };
    h.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Xk(c)) return;
            Jn(this, c, b[0][Q.va] || this.s[Q.va]);
            In(this, c).m && (d = !1)
        }
        this.m.push(new Hn(a, Math.floor(Ha() / 1E3), c, b, d));
        d || this.flush()
    };
    h.insert = function(a, b, c) {
        var d = Math.floor(Ha() / 1E3);
        0 < this.m.length ? this.m.splice(1, 0, new Hn(a, d, c, b, !1)) : this.m.push(new Hn(a, d, c, b, !1))
    };
    h.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length;) {
            var f = this.m[0];
            if (f.o) !f.O || In(this, f.O).m ? (f.o = !1, this.m.push(f)) : c.push(f), this.m.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = In(this, f.O);
                        if (3 !== g.status && !a) { this.m.push.apply(this.m, c); return }
                        kj && B.clearTimeout(f.m[0].timeoutId);
                        break;
                    case "set":
                        ya(f.m[0], function(r, u) { M(Oa(r, u), b.s) });
                        break;
                    case "config":
                        g = In(this, f.O);
                        e.Pa = {};
                        ya(f.m[0], function(r) { return function(u, t) { M(Oa(u, t), r.Pa) } }(e));
                        var m = !!e.Pa[Q.ld];
                        delete e.Pa[Q.ld];
                        var l = Xk(f.O),
                            n = l.containerId === l.id;
                        m || (n ? g.containerConfig = {} : g.targetConfig[f.O] = {});
                        g.m && m || Kn(this, Q.Aa, e.Pa, f);
                        g.m = !0;
                        delete e.Pa[Q.rb];
                        n ? M(e.Pa, g.containerConfig) : M(e.Pa, g.targetConfig[f.O]);
                        d = !0;
                        break;
                    case "event":
                        e.Vc = {};
                        ya(f.m[0], function(r) { return function(u, t) { M(Oa(u, t), r.Vc) } }(e));
                        Kn(this, f.m[1], e.Vc, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[Q.Sa] = f.m[0], p[Q.cb] = f.m[1], p);
                        Kn(this, Q.Ia, q, f)
                }
                this.m.shift();
                Ln(this, f)
            }
            e = { Pa: e.Pa, Vc: e.Vc }
        }
        this.m.push.apply(this.m, c);
        d && this.flush()
    };
    var Ln = function(a, b) {
        if ("require" !== b.type)
            if (b.O)
                for (var c = a.getCommandListeners(b.O)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], m = 0; m < g.length; m++) g[m]()
                    }
    };
    An.prototype.getRemoteConfig = function(a) { return In(this, a).remoteConfig };
    An.prototype.getCommandListeners = function(a) { return In(this, a).o };
    var Mn = !1;
    var Nn = {},
        On = {},
        Pn = function(a, b) {
            var c = On[b] || [];
            c.push(a);
            On[b] = c
        },
        Rn = function() {
            T.addTargetToGroup = function(e) { Qn(e, "default") };
            T.addDestinationToContainer = function(e, f) { Pn(e, f) };
            var a = T.pendingDefaultTargets;
            delete T.pendingDefaultTargets;
            if (Array.isArray(a))
                for (var b = 0; b < a.length; ++b) Qn(a[b], "default");
            var c = T.pendingDestinationIds;
            delete T.pendingDestinationIds;
            if (Array.isArray(c))
                for (var d = 0; d < c.length; ++d) Pn(c[d][0], c[d][1])
        },
        Qn = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d =
                    Nn[b[c]] || [];
                Nn[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        Sn = function(a) {
            ya(Nn, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Tn = { active: !1, isAllowed: function() { return !1 } },
        Un = { active: !0, isAllowed: function() { return !0 } },
        Vn = { zone: !0, cn: !0, css: !0, ew: !0, eq: !0, ge: !0, gt: !0, lc: !0, le: !0, lt: !0, re: !0, sw: !0, um: !0 },
        Wn = { cl: ["ecl"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"] };

    function Xn() {
        var a = T.zones;
        a || (a = T.zones = new Yn);
        return a
    }

    function Zn(a) {
        if (dk()) {} else {
            var b = ee,
                c = "?id=" + encodeURIComponent(a) + "&l=" + R.X;
            Ij() && (c += "&sign=" + R.vd, db && (b = db.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = al("https://", "http://", b + c);
            jb(d)
        }
    }
    var Yn = function() {
        this.o = {};
        this.m = {};
        this.s = 0
    };
    h = Yn.prototype;
    h.isActive = function(a, b) {
        var c = this.o[a];
        if (!c) return !0;
        if (!this.isActive(c.Ld, b)) return !1;
        for (var d = 0; d < c.Eb.length; d++)
            if (this.m[c.Eb[d]].xb(b)) return !0;
        return !1
    };
    h.getIsAllowedFn = function(a, b) {
        if (!this.isActive(a, b)) return function() { return !1 };
        var c = this.o[a];
        if (!c) return function() { return !0 };
        for (var d = [], e = 0; e < c.Eb.length; e++) {
            var f = this.m[c.Eb[e]];
            f.xb(b) && d.push(f)
        }
        if (!d.length) return function() { return !1 };
        var g = this.getIsAllowedFn(c.Ld, b);
        return function(m, l) {
            l = l || [];
            if (!g(m, l)) return !1;
            for (var n = 0; n < d.length; ++n)
                if (d[n].isAllowed(m, l)) return !0;
            return !1
        }
    };
    h.checkState = function(a, b) {
        var c = this.o[a];
        if (!c) return Un;
        var d = this.checkState(c.Ld, b);
        if (!d.active) return Tn;
        for (var e = [], f = 0; f < c.Eb.length; f++) {
            var g = this.m[c.Eb[f]];
            g.xb(b) && e.push(g)
        }
        return e.length ? {
            active: !0,
            isAllowed: function(m, l) {
                l = l || [];
                var n = d.isAllowed;
                if (!n(m, l)) return !1;
                for (var p = 0; p < e.length; ++p)
                    if (e[p].isAllowed(m, l)) return !0;
                return !1
            }
        } : Tn
    };
    h.unregisterChild = function(a) { delete this.o[a] };
    h.createZone = function(a, b) {
        var c = String(++this.s);
        this.m[c] = new $n(a, b || null);
        return c
    };
    h.updateZone = function(a, b, c) {
        var d = this.m[a];
        d && ao(d, b, c)
    };
    h.registerZone = function(a, b, c, d) {
        var e = this.m[a];
        if (e) return ao(e, b, c), !1;
        if (!c) return !1;
        this.m[a] = new $n(b, d);
        return !0
    };
    h.registerChild = function(a, b, c) {
        var d = this.o[a];
        if (!d && T[a] || d && d.Ld !== b) return !1;
        if (d) return d.Eb.push(c), !1;
        this.o[a] = { Ld: b, Eb: [c] };
        return !0
    };
    var $n = function(a, b) {
            this.m = [{ eventId: a, xb: !0 }];
            this.o = null;
            if (b) { this.o = {}; for (var c = 0; c < b.length; c++) this.o[b[c]] = !0 }
        },
        ao = function(a, b, c) {
            var d = a.m[a.m.length - 1];
            b <= d.eventId || d.xb !== c && a.m.push({ eventId: b, xb: c })
        };
    $n.prototype.xb = function(a) {
        for (var b = this.m.length - 1; 0 <= b; b--)
            if (this.m[b].eventId <= a) return this.m[b].xb;
        return !1
    };
    $n.prototype.isAllowed = function(a, b) {
        b = b || [];
        if (!this.o || Vn[a] || this.o[a]) return !0;
        for (var c = 0; c < b.length; ++c)
            if (this.o[b[c]]) return !0;
        return !1
    };
    var bo = function(a, b, c, d, e) {
            var f = R.H + ":" + b,
                g = we("gtm.uniqueEventId", 2) || 0,
                m = Xn();
            c = c && Na(c, Wn);
            if (m.registerZone(f, g, a, c))
                for (var l = 0; l < d.length; l++) {
                    var n = String(d[l]);
                    m.registerChild(n, R.H, f) && (0 === n.indexOf("GTM-") ? Zn(n) : (function(p, q) { B[R.X].push(arguments) }("js", Ga()), T.addTargetToGroup ? T.addTargetToGroup(n) : (T.pendingDefaultTargets = T.pendingDefaultTargets || [], T.pendingDefaultTargets.push(n)), Dn(e, n)))
                }
        },
        co = function(a) { var b = T.zones; return b ? b.getIsAllowedFn(R.H, a) : Un.isAllowed },
        eo = function(a) {
            var b =
                T.zones;
            return b ? b.isActive(R.H, a) : Un.active
        };
    var ho = function(a, b) {
        for (var c = [], d = 0; d < cc.length; d++)
            if (a[d]) {
                var e = cc[d];
                var f = $h(b.Vb);
                try {
                    var g = zj(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                    if (g) {
                        var m = c,
                            l = m.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = ec[p];
                        l.call(m, { $g: n, Qg: q ? q.priorityOverride || 0 : 0, execute: g })
                    } else fo(d, b), f()
                } catch (t) { f() }
            }
        var r = b.Vb;
        r.W = !0;
        r.o >= r.s && Yh(r);
        c.sort(go);
        for (var u = 0; u < c.length; u++) c[u].execute();
        return 0 < c.length
    };

    function go(a, b) {
        var c, d = b.Qg,
            e = a.Qg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.$g,
                m = b.$g;
            f = g > m ? 1 : g < m ? -1 : 0
        }
        return f
    }

    function fo(a, b) {
        if (!kj) return;
        var c = function(d) {
            var e = b.Xe(cc[d]) ? "3" : "4",
                f = kc(cc[d][Db.bg], b, []);
            f && f.length && c(f[0].index);
            qj(b.id, cc[d], e);
            var g = kc(cc[d][Db.dg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var io = !1;
    var no = function(a) {
        var b = Ha(),
            c = a["gtm.uniqueEventId"],
            d = a.event;
        if ("gtm.js" === d) {
            if (io) return !1;
            io = !0;
        }
        var g, m = !1;
        if (eo(c)) g = co(c);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            m = !0;
            g = co(Number.MAX_SAFE_INTEGER)
        }
        pj(c, d);
        var l = a.eventCallback,
            n = a.eventTimeout,
            p = l;
        var q = { id: c, name: d, Xe: Nh(g), Fj: [], Kg: function() { Xc(6) }, rg: jo(), sg: ko(c), Vb: new Vh(p, n) },
            r = pc(q);
        m && (r =
            lo(r));
        var u = ho(r, q);
        "gtm.js" !== d && "gtm.sync" !== d || ki(R.H);
        return mo(r, u)
    };

    function ko(a) { return function(b) { kj && (Cb(b) || yj(a, "input", b)) } }

    function jo() {
        var a = {};
        a.event = Ae("event", 1);
        a.ecommerce = Ae("ecommerce", 1);
        a.gtm = Ae("gtm");
        a.eventModel = Ae("eventModel");
        return a
    }

    function lo(a) { for (var b = [], c = 0; c < a.length; c++) a[c] && (be[String(cc[c][Db.sb])] && (b[c] = !0), void 0 !== cc[c][Db.gi] && (b[c] = !0)); return b }

    function mo(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && cc[c] && !ce[String(cc[c][Db.sb])]) return !0;
        return !1
    }
    var oo = "HA GF G UA AW DC".split(" "),
        po = !1,
        qo = !1,
        ro = 0;

    function so(a) { a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: qe() }); return a["gtm.uniqueEventId"] }

    function to() { po || T.gtagRegistered || (po = T.gtagRegistered = !0, Rn()); return po }
    var uo = {
            config: function(a) {
                so(a);
                if (2 > a.length || !k(a[1])) return;
                var b = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Bb(a[2]) || 3 < a.length) return;
                    b = a[2]
                }
                var c = Xk(a[1]);
                if (!c) return;
                var d = to();
                Sn(c.id);
                Qn(c.id, b[Q.pe] || "default");
                delete b[Q.pe];
                qo || Xc(43);
                if (d && -1 !== oo.indexOf(c.prefix)) {
                    "G" === c.prefix && (b[Q.rb] = !0);
                    delete b[Q.Nb];
                    c.id === c.containerId && (T.configCount = ++ro);
                    Dn(b, c.id);
                    return
                }
                ze("gtag.targets." + c.id, void 0);
                ze("gtag.targets." + c.id, M(b));
            },
            consent: function(a) {
                if (3 === a.length) {
                    Xc(39);
                    var b = qe(),
                        c = a[1];
                    "default" === c ? vd(a[2]) : "update" === c && xd(a[2], b)
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && k(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Bb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = c,
                        e = {},
                        f = (e.event = b, e);
                    d && (f.eventModel = M(d), d[Q.Nb] && (f.eventCallback = d[Q.Nb]), d[Q.dd] && (f.eventTimeout = d[Q.dd]));
                    var g = so(a);
                    f["gtm.uniqueEventId"] = g;
                    if ("optimize.callback" === b) return f.eventModel = f.eventModel || {}, f;
                    var m;
                    var l =
                        c && c[Q.Qb];
                    void 0 === l && (l = we(Q.Qb, 2), void 0 === l && (l = "default"));
                    if (k(l) || sa(l)) {
                        for (var n = l.toString().replace(/\s+/g, "").split(","), p = [], q = 0; q < n.length; q++)
                            if (0 <= n[q].indexOf("-")) p.push(n[q]);
                            else {
                                var r = Nn[n[q]];
                                if (Mn)
                                    for (var u = 0; r && u < r.length; u++) {
                                        var t = On[r[u]];
                                        t && t.length && (p = p.concat(t))
                                    } else r && r.length && (p = p.concat(r))
                            }
                        m = Zk(p)
                    } else m = void 0;
                    var v = m;
                    if (!v) return;
                    for (var z = to(), x = [], w = 0; z && w < v.length; w++) {
                        var A = v[w];
                        if (-1 !== oo.indexOf(A.prefix)) {
                            var y = M(c);
                            "G" === A.prefix && (y[Q.rb] = !0);
                            delete y[Q.Nb];
                            Cn(b, y, A.id)
                        }
                        x.push(A.id)
                    }
                    f.eventModel = f.eventModel || {};
                    0 < v.length ? f.eventModel[Q.Qb] = x.join() : delete f.eventModel[Q.Qb];
                    qo || Xc(43);
                    return f
                }
            },
            get: function(a) {
                Xc(53);
                if (4 !== a.length || !k(a[1]) || !k(a[2]) || !pa(a[3])) return;
                var b = Xk(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                qo || Xc(43);
                if (!to() || -1 === oo.indexOf(b.prefix)) return;
                qe();
                var e = {};
                rd(M((e[Q.Sa] = c, e[Q.cb] = d, e)));
                En(c, function(f) { H(function() { return d(f) }) }, b.id);
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    qo = !0;
                    to();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = so(a), b
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && Bb(a[1]) ? b = M(a[1]) : 3 == a.length && k(a[1]) && (b = {}, Bb(a[2]) || sa(a[2]) ? b[a[1]] = M(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (qe(), M(b), to()) {
                        var c = M(b);
                        zn().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        vo = { policy: !0 };
    var wo = function() {
        this.m = [];
        this.o = []
    };
    wo.prototype.push = function(a, b, c) {
        var d = this.m.length + 1;
        c = M(c);
        c.priorityId = d;
        var e = { debugContext: c, message: a, notBeforeEventId: b, priorityId: d };
        this.m.push(e);
        for (var f = 0; f < this.o.length; f++) try { this.o[f](e) } catch (g) {}
    };
    wo.prototype.listen = function(a) { this.o.push(a) };
    wo.prototype.get = function() {
        for (var a = {}, b = 0; b < this.m.length; b++) {
            var c = this.m[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };

    function xo(a, b) { return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId };
    var yo = function(a) {
            var b = B[R.X].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) { c = !1; break }
                c && (b.end(), b.end = null)
            }
        },
        zo = function(a) {
            var b = B[R.X],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Po = !1,
        Qo = [];

    function Ro() { if (!Po) { Po = !0; for (var a = 0; a < Qo.length; a++) H(Qo[a]) } }
    var So = function(a) { Po ? H(a) : Qo.push(a) };
    var ip = function(a) {
        if (hp(a)) return a;
        this.m = a
    };
    ip.prototype.Pi = function() { return this.m };
    var hp = function(a) { return !a || "object" !== zb(a) || Bb(a) ? !1 : "getUntrustedMessageValue" in a };
    ip.prototype.getUntrustedMessageValue = ip.prototype.Pi;
    var jp = 0,
        kp, lp = {},
        mp = [],
        np = [],
        op = !1,
        pp = !1,
        qp = function(a) { return B[R.X].push(a) },
        rp = function(a, b) {
            var c = T[R.X],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = B.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {++e === d && (g && (B.clearTimeout(g), g = void 0), f || (a(), f = !0)) }
        };

    function sp(a) {
        var b = a._clear;
        ya(a, function(d, e) { "_clear" !== d && (b && ze(d, void 0), ze(d, e)) });
        he || (he = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = qe(), a["gtm.uniqueEventId"] = c, ze("gtm.uniqueEventId", c));
        return no(a)
    }

    function tp(a) { if (null == a || "object" !== typeof a) return !1; if (a.event) return !0; if (Aa(a)) { var b = a[0]; if ("config" === b || "event" === b || "js" === b) return !0 } return !1 }

    function up() {
        for (var a = !1; !pp && (0 < mp.length || 0 < np.length);) {
            if (!op && tp(mp[0])) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = mp[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                mp.unshift(c, e);
                op = !0
            }
            pp = !0;
            delete te.eventModel;
            ve();
            var g = null,
                m = void 0;
            null == g && (g = mp.shift());
            if (null != g) {
                var n = hp(g);
                if (n) {
                    var p = g;
                    g = hp(p) ? p.getUntrustedMessageValue() : void 0;
                    for (var q = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], r = 0; r < q.length; r++) {
                        var u = q[r],
                            t = we(u, 1);
                        if (sa(t) || Bb(t)) t = M(t);
                        ue[u] = t
                    }
                }
                try {
                    if (pa(g)) try { g.call(xe) } catch (F) {} else if (sa(g)) {
                        var v = g;
                        if (k(v[0])) {
                            var z = v[0].split("."),
                                x = z.pop(),
                                w = v.slice(1),
                                A = we(z.join("."),
                                    2);
                            if (null != A) try { A[x].apply(A, w) } catch (F) {}
                        }
                    } else {
                        if (Aa(g)) {
                            a: {
                                var y = g,
                                    C = m;
                                if (y.length && k(y[0])) { var D = uo[y[0]]; if (D && (!n || !vo[y[0]])) { g = D(y, C); break a } }
                                g = void 0
                            }
                            if (!g) { pp = !1; continue }
                        }
                        a = sp(g) || a;
                    }
                } finally { n && ve(!0) }
            }
            pp = !1
        }
        return !a
    }

    function wp() { var b = up(); try { yo(R.H) } catch (c) {} return b }
    var zp = function() {
        var a = eb(R.X, []),
            b = eb("google_tag_manager", {});
        b = b[R.X] = b[R.X] || {};
        Th(function() {
            if (!b.gtmDom) {
                b.gtmDom = !0;
                var e = {};
                a.push((e.event = "gtm.dom", e))
            }
        });
        So(function() {
            if (!b.gtmLoad) {
                b.gtmLoad = !0;
                var e = {};
                a.push((e.event = "gtm.load", e))
            }
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < T.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f = 0; f < arguments.length; f++) e[f] = new ip(arguments[f])
            } else e = [].slice.call(arguments, 0);
            mp.push.apply(mp, e);
            var g = c.apply(a, e);
            if (300 < this.length)
                for (Xc(4); 300 < this.length;) this.shift();
            var m = "boolean" !== typeof g || g;
            return up() && m
        };
        var d = a.slice(0);
        mp.push.apply(mp, d);
        if (xp()) {
            H(wp)
        }
    };
    var xp = function() { var a = !0; return a };

    function Ap(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ha();
        return b < c + 3E5 && b > c - 9E5
    };
    var Bp = { Og: "UA-103677783-11" };
    var Cp = {};
    Cp.od = new String("undefined");
    var cq = B.clearTimeout,
        dq = B.setTimeout,
        U = function(a, b, c, d) { if (dk()) { b && H(b) } else return jb(a, b, c, d) },
        eq = function() { return new Date },
        fq = function() { return B.location.href },
        gq = function(a) { return Re(Te(a), "fragment") },
        hq = function(a) { return Se(Te(a)) },
        iq = function(a, b) { return we(a, b || 2) },
        jq = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = qp(a)) : d = qp(a);
            return d
        },
        kq = function(a, b) { B[a] = b },
        V = function(a, b,
            c) { b && (void 0 === B[a] || c && !B[a]) && (B[a] = b); return B[a] },
        lq = function(a, b, c) { return xf(a, b, void 0 === c ? !0 : !!c) },
        mq = function(a, b, c) { return 0 === Gf(a, b, c) },
        nq = function(a, b) { if (dk()) { b && H(b) } else lb(a, b) },
        oq = function(a) { return !!Jp(a, "init", !1) },
        pq = function(a) { Hp(a, "init", !0) },
        qq = function(a, b, c) { kj && (Cb(a) || yj(c, b, a)) };

    var Oq = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Pq(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Qq = new wa;

    function Rq(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Qq.get(e);
            f || (f = new RegExp(b, d), Qq.set(e, f));
            return f.test(a)
        } catch (g) { return !1 }
    }

    function Sq(a, b) {
        function c(g) {
            var m = Te(g),
                l = Re(m, "protocol"),
                n = Re(m, "host", !0),
                p = Re(m, "port"),
                q = Re(m, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" === l && "80" === p || "https" === l && "443" === p) l = "web", p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Tq(a) { return Uq(a) ? 1 : 0 }

    function Uq(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = M(a, {});
                M({ arg1: c[d], any_of: void 0 }, e);
                if (Tq(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try { for (var g = 0; g < Oq.length; g++) { var m = Oq[g]; if (b[m]) { f = b[m](c); break a } } } catch (l) {}
                    f = !1
                }
                return f;
            case "_ew":
                return Pq(b, c);
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
                return Rq(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Sq(b, c)
        }
        return !1
    };
    Object.freeze({ dl: 1, id: 1 });
    Object.freeze(["config", "event", "get", "set"]);
    var Zq = encodeURI,
        Y = encodeURIComponent,
        $q = ob;
    var ar = function(a, b) {
        if (!a) return !1;
        var c = Re(Te(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var br = function(a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null };

    function ys() { return B.gaGlobal = B.gaGlobal || {} }
    var zs = function() {
            var a = ys();
            a.hid = a.hid || va();
            return a.hid
        },
        As = function(a, b) { var c = ys(); if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b };
    var ct = function() {
        if (pa(B.__uspapi)) {
            var a = "";
            try {
                B.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Ht = window,
        It = document,
        Jt = function(a) {
            var b = Ht._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Ht["ga-disable-" + a]) return !0;
            try { var c = Ht.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) {}
            for (var d = rf("AMP_TOKEN", String(It.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return It.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var Kt = {};

    function Ut(a) {
        delete a.eventModel[Q.rb];
        au(a.eventModel)
    }
    var au = function(a) {
        ya(a, function(c) { "_" === c.charAt(0) && delete a[c] });
        var b = a[Q.Ea] || {};
        ya(b, function(c) { "_" === c.charAt(0) && delete b[c] })
    };
    var su = function(a, b, c) { Cn(b, c, a) },
        tu = function(a, b, c) { Cn(b, c, a, !0) },
        vu = function(a, b) {};

    function uu(a, b) {}
    var Z = { g: {} };





    Z.g.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) { return String(a.vtp_gtmCachedValues.event) })
        }();

    Z.g.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.h = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = iq(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                qq(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.g.rep = ["google"],
        function() {
            (function(a) {
                Z.__rep = a;
                Z.__rep.h = "rep";
                Z.__rep.isVendorTemplate = !0;
                Z.__rep.priorityOverride = 0
            })(function(a) {
                var b;
                switch (Xk(a.vtp_containerId).prefix) {
                    case "AW":
                        b = Rl;
                        break;
                    case "DC":
                        b = dm;
                        break;
                    case "GF":
                        b = vm;
                        break;
                    case "HA":
                        b = Am;
                        break;
                    case "UA":
                        b = Zm;
                        break;
                    default:
                        H(a.vtp_gtmOnFailure);
                        return
                }
                H(a.vtp_gtmOnSuccess);
                Bn(a.vtp_containerId, b, a.vtp_remoteConfig || {})
            })
        }();

    Z.g.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.h = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0
            })(function() { return R.H })
        }();





    Z.g.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.h = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_settings;
                (a.vtp_deferrable ? tu : su)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess()
            })
        }();








    var wu = {};
    wu.dataLayer = xe;
    wu.callback = function(a) {
        oe.hasOwnProperty(a) && pa(oe[a]) && oe[a]();
        delete oe[a]
    };
    wu.bootstrap = 0;
    wu._spx = !1;
    (function(a) {
        if (!B["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (G.referrer) {
                var c = Te(G.referrer);
                b = "cct.google" === Qe(c, "host")
            }
            if (!b) {
                var d = xf("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (B["__TAGGY_INSTALLED"] = !0, jb("https://cct.google/taggy/agent.js"))
        }
        var f = function(q) {
                var r = "GTM",
                    u = "GTM";
                r = "OGT", u = "GTAG";
                var t = B["google.tagmanager.debugui2.queue"];
                t || (t = [], B["google.tagmanager.debugui2.queue"] = t, jb("https://" + R.Ud + "/debug/bootstrap?id=" + R.H + "&src=" + u + "&cond=" + q + "&gtm=" + hk()));
                var v = { messageType: "CONTAINER_STARTING", data: { scriptSource: db, containerProduct: r, debug: !1, id: R.H } };
                v.data.resume = function() { a() };
                R.oh && (v.data.initialPublish = !0);
                t.push(v)
            },
            g = void 0,
            m = Re(B.location, "query", !1, void 0, "gtm_debug");
        Ap(m) && (g = 2);
        if (!g && G.referrer) { var l = Te(G.referrer); "tagassistant.google.com" === Qe(l, "host") && (g = 3) }
        if (!g) {
            var n = xf("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = G.documentElement.getAttribute("data-tag-assistant-present");
            Ap(p) && (g = 5)
        }
        g && db ? f(g) : a()
    })(function() {
        var a = !1;
        a && bi("INIT");
        $c().o();
        Ek();
        Ng.enable_gbraid_cookie_write = !0;
        var b = !!T[R.H];
        if (b) {
            var c = T.zones;
            c && c.unregisterChild(R.H);
        } else {
            for (var m = data.resource || {}, l = m.macros || [], n = 0; n < l.length; n++) $b.push(l[n]);
            for (var p = m.tags || [], q = 0; q < p.length; q++) cc.push(p[q]);
            for (var r = m.predicates || [], u = 0; u < r.length; u++) bc.push(r[u]);
            for (var t = m.rules || [], v = 0; v < t.length; v++) {
                for (var z = t[v], x = {}, w = 0; w < z.length; w++) x[z[w][0]] = Array.prototype.slice.call(z[w], 1);
                ac.push(x)
            }
            ec = Z;
            gc = Tq;
            T[R.H] = wu;
            Ka(pe, Z.g);
            ic = qc;
            zp();
            Oh = !1;
            Ph = 0;
            if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState) Rh();
            else {
                pb(G, "DOMContentLoaded", Rh);
                pb(G, "readystatechange", Rh);
                if (G.createEventObject && G.documentElement.doScroll) {
                    var A = !0;
                    try { A = !B.frameElement } catch (F) {}
                    A && Sh()
                }
                pb(B, "load", Rh)
            }
            Po = !1;
            "complete" === G.readyState ? Ro() : pb(B, "load", Ro);
            kj && B.setInterval(Si, 864E5);
            me = Ha();
            wu.bootstrap = me;
            if (a) { var E = ci("INIT"); }
        }
    });

})()