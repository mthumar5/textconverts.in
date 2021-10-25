function we(a) {
    a = a.toLowerCase();
    for (var b = !0, c = "", d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        /\.|\!|\?|\n|\r/.test(e) ? b = !0 : "" != e.trim() && 1 == b && (e = e.toUpperCase(), b = !1), c += e
    }
    return "/" == window.location.pathname && -1 == window.location.search.indexOf("skip=i") && (c = c.replace(/\bi\b/g, "I")), c = _(c)
}

function Te(a) {
    a = a.toLowerCase();
    for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charAt(c);
        b += c % 2 ? d.toUpperCase() : d
    }
    return b
}

function ke(a) {
    return c = a.toLowerCase(), c = (c + "").replace(/^(\S)|\s+(\S)/g, function(a) {
        return a.toUpperCase()
    }), c = _(c), c = c.replace(/\(([A-Za-z])/g, function(a) {
        return a.toUpperCase()
    }), c
}

function _(c) {
    return c = c.replace(/\"([A-Za-z])/g, function(a) {
        return a.toUpperCase()
    })
}

function Te(a) {
    a = a.toLowerCase();
    for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charAt(c);
        b += c % 2 ? d.toUpperCase() : d
    }
    return b
}

function Ie(a) {
    for (var s = "", i = 0; i < a.length; i++) {
        var n = a.charAt(i);
        s += n == n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()
    }
    return s
}

function Be(a) {
    return a = (a = (a = ke(a)).replace(/\b(A|An|And|As|At|But|By|En|For|If|In|Is|Of|On|Or|The|To|Vs?\\.?|Via)\b/g, function(_) {
        return _.toLowerCase()
    })).replace(/(?:([\.\?!] |\n|^))(a|an|and|as|at|but|by|en|for|if|in|is|of|on|or|the|to|vs?\\.?|via)/g, function(_) {
        return ke(_)
    })
}

function Ce(_, $, ee) {
    for (var te = "", c = 0; c < _.length; c++) {
        var ne = _.charAt(c),
            oe = ne;
        if (ee) oe = ne.toLowerCase();
        $[oe] ? te += $[oe] : te += ne
    }
    return te = te.replace(/\n/g, "<br>")
}

function Se(_, ee) {
    var $ = _.split("").reduce(function(_, $) {
        return _ + $ + ee
    }, "");
    return $ = $.replace(/\n/g, "<br>")
}

function xe(_) {
    -1 < window.location.search.indexOf("hyphenate=true") && (_.value = _.value.replace(/ /g, "-"), _.placeholder = _.placeholder.replace(/ /g, "-")), -1 < window.location.search.indexOf("stripdashes=true") && (_.value = _.value.replace(/-/g, " "), _.placeholder = _.placeholder.replace(/-/g, " ")), -1 < window.location.search.indexOf("stripspaces=true") && (_.value = _.value.replace(/ /g, ""), _.placeholder = _.placeholder.replace(/ /g, ""))
}

function Ae(_, $) {
    "undefined" != typeof gtag && gtag("event", $, {
        event_category: _,
        value: parseInt(document.getElementById("word_count").innerHTML)
    })
}

function Me(_) {
    document.getElementById("char_count").innerHTML = _.value.length;
    var $ = 0,
        ee = _.value.trim().replace(/\s+/gi, " ");
    0 < ee.length && ($ = ee.split(" ").length), document.getElementById("word_count").innerHTML = $;
    var te = 0;
    0 < _.value.length && (te = _.value.split(/\r*\n/).length), document.getElementById("line_count").innerHTML = te
}
var te;

function He(_, $) {
    clearTimeout(te);
    var ee = document.querySelector(".messages");
    ee.innerHTML = '<div class="message ' + $ + '">' + _ + "</div>", te = setTimeout(function() {
        ee.innerHTML = ""
    }, 3e3)
}
var $ = Date.now();

function je() {
    if ($ + 5e3 < Date.now()) {
        if ("function" == typeof pbjs.refreshAll) {
            var _ = ["div-gpt-ad-1495620748765-0", "div-gpt-ad-textconverts_300x250_Belowtxtbox_1", "div-gpt-ad-textconverts_300x250_Belowtxtbox_2"];
            detectWidth() < 768 && _.push("div-gpt-ad-textconverts_Mob_StickyFooter"), pbjs.refreshBidsAndAds(_)
        }
        $ = Date.now()
    }
}

function Oe() {
    var _, $ = ((_ = new XMLHttpRequest).open("GET", document.location, !1), _.send(null), _.getResponseHeader("cloudfront-viewer-country"));
    return !!["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"].includes($)
}

function _e(_, ee) {
    return _.replace(/[\s\S]/g, function(_) {
        var $;
        return $ = _.charCodeAt().toString(2), _ = "00000000".slice(String($).length) + $, 0 == ee ? _ : _ + " "
    })
}

function Re(_) {
    var $ = (_ = (_ = _.replace(/\s+/g, "")).match(/.{1,8}/g).join(" ")).split(" "),
        ee = [];
    for (i = 0; i < $.length; i++) ee.push(String.fromCharCode(parseInt($[i], 2)));
    return ee.join("")
}
var t, e, a, b, Ue = {
        0: "⁰",
        1: "¹",
        2: "²",
        3: "³",
        4: "⁴",
        5: "⁵",
        6: "⁶",
        7: "⁷",
        8: "⁸",
        9: "⁹",
        "+": "⁺",
        "-": "⁻",
        "=": "⁼",
        "(": "⁽",
        ")": "⁾",
        a: "ᵃ",
        b: "ᵇ",
        c: "ᶜ",
        d: "ᵈ",
        e: "ᵉ",
        f: "ᶠ",
        g: "ᵍ",
        h: "ʰ",
        i: "ⁱ",
        j: "ʲ",
        k: "ᵏ",
        l: "ˡ",
        m: "ᵐ",
        n: "ⁿ",
        o: "ᵒ",
        p: "ᵖ",
        q: "ᵠ",
        r: "ʳ",
        s: "ˢ",
        t: "ᵗ",
        u: "ᵘ",
        v: "ᵛ",
        w: "ʷ",
        x: "ˣ",
        y: "ʸ",
        z: "ᶻ"
    },
    De = {
        a: "ᴀ",
        b: "ʙ",
        c: "ᴄ",
        d: "ᴅ",
        e: "ᴇ",
        f: "ꜰ",
        g: "ɢ",
        h: "ʜ",
        i: "ɪ",
        j: "ᴊ",
        k: "ᴋ",
        l: "ʟ",
        m: "ᴍ",
        n: "ɴ",
        o: "ᴏ",
        p: "ᴘ",
        r: "ʀ",
        s: "ꜱ",
        t: "ᴛ",
        u: "ᴜ",
        v: "ᴠ",
        w: "ᴡ",
        y: "ʏ",
        z: "ᴢ"
    },
    qe = {
        " ": " ",
        0: "０",
        1: "１",
        2: "２",
        3: "３",
        4: "４",
        5: "５",
        6: "６",
        7: "７",
        8: "８",
        9: "９",
        a: "ａ",
        b: "ｂ",
        c: "ｃ",
        d: "ｄ",
        e: "ｅ",
        f: "ｆ",
        g: "ｇ",
        h: "ｈ",
        i: "ｉ",
        j: "ｊ",
        k: "ｋ",
        l: "ｌ",
        m: "ｍ",
        n: "ｎ",
        o: "ｏ",
        p: "ｐ",
        q: "ｑ",
        r: "ｒ",
        s: "ｓ",
        t: "ｔ",
        u: "ｕ",
        v: "ｖ",
        w: "ｗ",
        x: "ｘ",
        y: "ｙ",
        z: "ｚ",
        A: "Ａ",
        B: "Ｂ",
        C: "Ｃ",
        D: "Ｄ",
        E: "Ｅ",
        F: "Ｆ",
        G: "Ｇ",
        H: "Ｈ",
        I: "Ｉ",
        J: "Ｊ",
        K: "Ｋ",
        L: "Ｌ",
        M: "Ｍ",
        N: "Ｎ",
        O: "Ｏ",
        P: "Ｐ",
        Q: "Ｑ",
        R: "Ｒ",
        S: "Ｓ",
        T: "Ｔ",
        U: "Ｕ",
        V: "Ｖ",
        W: "Ｗ",
        X: "Ｘ",
        Y: "Ｙ",
        Z: "Ｚ",
        "!": "！",
        '"': "゛",
        "#": "＃",
        $: "＄",
        "%": "％",
        "&": "＆",
        "(": "（",
        ")": "）",
        "*": "＊",
        "+": "＋",
        ",": "、",
        "-": "ー",
        ".": "。",
        "/": "／",
        ":": "：",
        ";": "；",
        "<": "〈",
        "=": "＝",
        ">": "〉",
        "?": "？",
        "@": "＠",
        "[": "［",
        "'": "'",
        "]": "］",
        "^": "＾",
        _: "＿",
        "`": "‘",
        "{": "｛",
        "|": "｜",
        "}": "｝",
        "~": "～"
    },
    Pe = {
        A: "𝗔",
        B: "𝗕",
        C: "𝗖",
        D: "𝗗",
        E: "𝗘",
        F: "𝗙",
        G: "𝗚",
        H: "𝗛",
        I: "𝗜",
        J: "𝗝",
        K: "𝗞",
        L: "𝗟",
        M: "𝗠",
        N: "𝗡",
        O: "𝗢",
        P: "𝗣",
        Q: "𝗤",
        R: "𝗥",
        S: "𝗦",
        T: "𝗧",
        U: "𝗨",
        V: "𝗩",
        W: "𝗪",
        X: "𝗫",
        Y: "𝗬",
        Z: "𝗭",
        a: "𝗮",
        b: "𝗯",
        c: "𝗰",
        d: "𝗱",
        e: "𝗲",
        f: "𝗳",
        g: "𝗴",
        h: "𝗵",
        i: "𝗶",
        j: "𝗷",
        k: "𝗸",
        l: "𝗹",
        m: "𝗺",
        n: "𝗻",
        o: "𝗼",
        p: "𝗽",
        q: "𝗾",
        r: "𝗿",
        s: "𝘀",
        t: "𝘁",
        u: "𝘂",
        v: "𝘃",
        w: "𝘄",
        x: "𝘅",
        y: "𝘆",
        z: "𝘇",
        0: "𝟬",
        1: "𝟭",
        2: "𝟮",
        3: "𝟯",
        4: "𝟰",
        5: "𝟱",
        6: "𝟲",
        7: "𝟳",
        8: "𝟴",
        9: "𝟵"
    },
    Fe = {
        A: "𝘈",
        B: "𝘉",
        C: "𝘊",
        D: "𝘋",
        E: "𝘌",
        F: "𝘍",
        G: "𝘎",
        H: "𝘏",
        I: "𝘐",
        J: "𝘑",
        K: "𝘒",
        L: "𝘓",
        M: "𝘔",
        N: "𝘕",
        O: "𝘖",
        P: "𝘗",
        Q: "𝘘",
        R: "𝘙",
        S: "𝘚",
        T: "𝘛",
        U: "𝘜",
        V: "𝘝",
        W: "𝘞",
        X: "𝘟",
        Y: "𝘠",
        Z: "𝘡",
        a: "𝘢",
        b: "𝘣",
        c: "𝘤",
        d: "𝘥",
        e: "𝘦",
        f: "𝘧",
        g: "𝘨",
        h: "𝘩",
        i: "𝘪",
        j: "𝘫",
        k: "𝘬",
        l: "𝘭",
        m: "𝘮",
        n: "𝘯",
        o: "𝘰",
        p: "𝘱",
        q: "𝘲",
        r: "𝘳",
        s: "𝘴",
        t: "𝘵",
        u: "𝘶",
        v: "𝘷",
        w: "𝘸",
        x: "𝘹",
        y: "𝘺",
        z: "𝘻"
    },
    Ne = {
        " ": " ",
        a: "ɐ",
        b: "q",
        c: "ɔ",
        d: "p",
        e: "ǝ",
        f: "ɟ",
        g: "ƃ",
        h: "ɥ",
        i: "ᴉ",
        j: "ɾ",
        k: "ʞ",
        l: "l",
        m: "ɯ",
        n: "u",
        o: "o",
        p: "d",
        q: "b",
        r: "ɹ",
        s: "s",
        t: "ʇ",
        u: "n",
        v: "ʌ",
        w: "ʍ",
        x: "x",
        y: "ʎ",
        z: "z",
        A: "∀",
        B: "B",
        C: "Ɔ",
        D: "ᗡ",
        E: "Ǝ",
        F: "Ⅎ",
        G: "פ",
        H: "H",
        I: "I",
        J: "ſ",
        K: "K",
        L: "˥",
        M: "W",
        N: "N",
        O: "O",
        P: "Ԁ",
        Q: "Q",
        R: "R",
        S: "S",
        T: "┴",
        U: "∩",
        V: "Λ",
        W: "M",
        X: "X",
        Y: "⅄",
        Z: "Z",
        0: "0",
        1: "Ɩ",
        2: "ᄅ",
        3: "Ɛ",
        4: "ㄣ",
        5: "ϛ",
        6: "9",
        7: "ㄥ",
        8: "8",
        9: "6",
        ",": "'",
        ".": "˙",
        "?": "¿",
        "!": "¡",
        '"': ",,",
        "'": ",",
        "`": ",",
        "(": ")",
        ")": "(",
        "[": "]",
        "]": "[",
        "{": "}",
        "}": "{",
        "<": ">",
        ">": "<",
        "&": "⅋",
        _: "‾"
    },
    ze = {
        a: "ɒ",
        b: "d",
        c: "ɔ",
        d: "b",
        e: "ɘ",
        f: "ʇ",
        g: "ǫ",
        h: "ʜ",
        i: "i",
        j: "Ⴑ",
        k: "ʞ",
        l: "l",
        m: "m",
        n: "n",
        o: "o",
        p: "q",
        q: "p",
        r: "ɿ",
        s: "ƨ",
        t: "ƚ",
        u: "u",
        v: "v",
        w: "w",
        x: "x",
        y: "y",
        z: "z",
        A: "A",
        B: "ᙠ",
        C: "Ɔ",
        D: "ᗡ",
        E: "Ǝ",
        F: "ᖷ",
        G: "Ꭾ",
        H: "H",
        I: "I",
        J: "Ⴑ",
        K: "ᐴ",
        L: "⅃",
        M: "M",
        N: "И",
        O: "O",
        P: "ꟼ",
        Q: "Ọ",
        R: "Я",
        S: "Ƨ",
        T: "T",
        U: "U",
        V: "V",
        W: "W",
        X: "X",
        Y: "Y",
        Z: "Ƹ",
        0: "0",
        1: "1",
        2: "2",
        3: "Ƹ",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        "?": "␚",
        ";": "⁏"
    },
    We = {
        a: "𝖺",
        b: "𝖻",
        c: "𝖼",
        d: "𝖽",
        e: "𝖾",
        f: "𝖿",
        g: "𝗀",
        h: "𝗁",
        i: "𝗂",
        j: "𝗃",
        k: "𝗄",
        l: "𝗅",
        m: "𝗆",
        n: "𝗇",
        o: "𝗈",
        p: "𝗉",
        q: "𝗊",
        r: "𝗋",
        s: "𝗌",
        t: "𝗍",
        u: "𝗎",
        v: "𝗏",
        w: "𝗐",
        x: "𝗑",
        y: "𝗒",
        z: "𝗓",
        A: "𝖠",
        B: "𝖡",
        C: "𝖢",
        D: "𝖣",
        E: "𝖤",
        F: "𝖥",
        G: "𝖦",
        H: "𝖧",
        I: "𝖨",
        J: "𝖩",
        K: "𝖪",
        L: "𝖫",
        M: "𝖬",
        N: "𝖭",
        O: "𝖮",
        P: "𝖯",
        Q: "𝖰",
        R: "𝖱",
        S: "𝖲",
        T: "𝖳",
        U: "𝖴",
        V: "𝖵",
        W: "𝖶",
        X: "𝖷",
        Y: "𝖸",
        Z: "𝖹",
        0: "𝟢",
        1: "𝟣",
        2: "𝟤",
        3: "𝟥",
        4: "𝟦",
        5: "𝟧",
        6: "𝟨",
        7: "𝟩",
        8: "𝟪",
        9: "𝟫",
        0: "𝟢"
    },
    Xe = {
        a: "𝘢",
        b: "𝘣",
        c: "𝘤",
        d: "𝘥",
        e: "𝘦",
        f: "𝘧",
        g: "𝘨",
        h: "𝘩",
        i: "𝘪",
        j: "𝘫",
        k: "𝘬",
        l: "𝘭",
        m: "𝘮",
        n: "𝘯",
        o: "𝘰",
        p: "𝘱",
        q: "𝘲",
        r: "𝘳",
        s: "𝘴",
        t: "𝘵",
        u: "𝘶",
        v: "𝘷",
        w: "𝘸",
        x: "𝘹",
        y: "𝘺",
        z: "𝘻",
        A: "𝘈",
        B: "𝘉",
        C: "𝘊",
        D: "𝘋",
        E: "𝘌",
        F: "𝘍",
        G: "𝘎",
        H: "𝘏",
        I: "𝘐",
        J: "𝘑",
        K: "𝘒",
        L: "𝘓",
        M: "𝘔",
        N: "𝘕",
        O: "𝘖",
        P: "𝘗",
        Q: "𝘘",
        R: "𝘙",
        S: "𝘚",
        T: "𝘛",
        U: "𝘜",
        V: "𝘝",
        W: "𝘞",
        X: "𝘟",
        Y: "𝘠",
        Z: "𝘡"
    },
    Ge = {
        a: "𝗮",
        b: "𝗯",
        c: "𝗰",
        d: "𝗱",
        e: "𝗲",
        f: "𝗳",
        g: "𝗴",
        h: "𝗵",
        i: "𝗶",
        j: "𝗷",
        k: "𝗸",
        l: "𝗹",
        m: "𝗺",
        n: "𝗻",
        o: "𝗼",
        p: "𝗽",
        q: "𝗾",
        r: "𝗿",
        s: "𝘀",
        t: "𝘁",
        u: "𝘂",
        v: "𝘃",
        w: "𝘄",
        x: "𝘅",
        y: "𝘆",
        z: "𝘇",
        A: "𝗔",
        B: "𝗕",
        C: "𝗖",
        D: "𝗗",
        E: "𝗘",
        F: "𝗙",
        G: "𝗚",
        H: "𝗛",
        I: "𝗜",
        J: "𝗝",
        K: "𝗞",
        L: "𝗟",
        M: "𝗠",
        N: "𝗡",
        O: "𝗢",
        P: "𝗣",
        Q: "𝗤",
        R: "𝗥",
        S: "𝗦",
        T: "𝗧",
        U: "𝗨",
        V: "𝗩",
        W: "𝗪",
        X: "𝗫",
        Y: "𝗬",
        Z: "𝗭",
        0: "𝟬",
        1: "𝟭",
        2: "𝟮",
        3: "𝟯",
        4: "𝟰",
        5: "𝟱",
        6: "𝟲",
        7: "𝟳",
        8: "𝟴",
        9: "𝟵",
        0: "𝟬"
    },
    Ve = {
        a: "𝙖",
        b: "𝙗",
        c: "𝙘",
        d: "𝙙",
        e: "𝙚",
        f: "𝙛",
        g: "𝙜",
        h: "𝙝",
        i: "𝙞",
        j: "𝙟",
        k: "𝙠",
        l: "𝙡",
        m: "𝙢",
        n: "𝙣",
        o: "𝙤",
        p: "𝙥",
        q: "𝙦",
        r: "𝙧",
        s: "𝙨",
        t: "𝙩",
        u: "𝙪",
        v: "𝙫",
        w: "𝙬",
        x: "𝙭",
        y: "𝙮",
        z: "𝙯",
        A: "𝘼",
        B: "𝘽",
        C: "𝘾",
        D: "𝘿",
        E: "𝙀",
        F: "𝙁",
        G: "𝙂",
        H: "𝙃",
        I: "𝙄",
        J: "𝙅",
        K: "𝙆",
        L: "𝙇",
        M: "𝙈",
        N: "𝙉",
        O: "𝙊",
        P: "𝙋",
        Q: "𝙌",
        R: "𝙍",
        S: "𝙎",
        T: "𝙏",
        U: "𝙐",
        V: "𝙑",
        W: "𝙒",
        X: "𝙓",
        Y: "𝙔",
        Z: "𝙕"
    },
    Ye = {
        a: "𝒶",
        b: "𝒷",
        c: "𝒸",
        d: "𝒹",
        e: "ℯ",
        f: "𝒻",
        g: "ℊ",
        h: "𝒽",
        i: "𝒾",
        j: "𝒿",
        k: "𝓀",
        l: "𝓁",
        m: "𝓂",
        n: "𝓃",
        o: "ℴ",
        p: "𝓅",
        q: "𝓆",
        r: "𝓇",
        s: "𝓈",
        t: "𝓉",
        u: "𝓊",
        v: "𝓋",
        w: "𝓌",
        x: "𝓍",
        y: "𝓎",
        z: "𝓏",
        A: "𝒜",
        B: "ℬ",
        C: "𝒞",
        D: "𝒟",
        E: "ℰ",
        F: "ℱ",
        G: "𝒢",
        H: "ℋ",
        I: "ℐ",
        J: "𝒥",
        K: "𝒦",
        L: "ℒ",
        M: "ℳ",
        N: "𝒩",
        O: "𝒪",
        P: "𝒫",
        Q: "𝒬",
        R: "ℛ",
        S: "𝒮",
        T: "𝒯",
        U: "𝒰",
        V: "𝒱",
        W: "𝒲",
        X: "𝒳",
        Y: "𝒴",
        Z: "𝒵"
    },
    Ze = {
        a: "𝓪",
        b: "𝓫",
        c: "𝓬",
        d: "𝓭",
        e: "𝓮",
        f: "𝓯",
        g: "𝓰",
        h: "𝓱",
        i: "𝓲",
        j: "𝓳",
        k: "𝓴",
        l: "𝓵",
        m: "𝓶",
        n: "𝓷",
        o: "𝓸",
        p: "𝓹",
        q: "𝓺",
        r: "𝓻",
        s: "𝓼",
        t: "𝓽",
        u: "𝓾",
        v: "𝓿",
        w: "𝔀",
        x: "𝔁",
        y: "𝔂",
        z: "𝔃",
        A: "𝓐",
        B: "𝓑",
        C: "𝓒",
        D: "𝓓",
        E: "𝓔",
        F: "𝓕",
        G: "𝓖",
        H: "𝓗",
        I: "𝓘",
        J: "𝓙",
        K: "𝓚",
        L: "𝓛",
        M: "𝓜",
        N: "𝓝",
        O: "𝓞",
        P: "𝓟",
        Q: "𝓠",
        R: "𝓡",
        S: "𝓢",
        T: "𝓣",
        U: "𝓤",
        V: "𝓥",
        W: "𝓦",
        X: "𝓧",
        Y: "𝓨",
        Z: "𝓩",
        1: "𝟏",
        2: "𝟐",
        3: "𝟑",
        4: "𝟒",
        5: "𝟓",
        6: "𝟔",
        7: "𝟕",
        8: "𝟖",
        9: "𝟗",
        0: "𝟎",
        "!": "❗",
        "?": "❓"
    },
    Je = {
        a: "𝔞",
        b: "𝔟",
        c: "𝔠",
        d: "𝔡",
        e: "𝔢",
        f: "𝔣",
        g: "𝔤",
        h: "𝔥",
        i: "𝔦",
        j: "𝔧",
        k: "𝔨",
        l: "𝔩",
        m: "𝔪",
        n: "𝔫",
        o: "𝔬",
        p: "𝔭",
        q: "𝔮",
        r: "𝔯",
        s: "𝔰",
        t: "𝔱",
        u: "𝔲",
        v: "𝔳",
        w: "𝔴",
        x: "𝔵",
        y: "𝔶",
        z: "𝔷",
        A: "𝔄",
        B: "𝔅",
        C: "ℭ",
        D: "𝔇",
        E: "𝔈",
        F: "𝔉",
        G: "𝔊",
        H: "ℌ",
        I: "ℑ",
        J: "𝔍",
        K: "𝔎",
        L: "𝔏",
        M: "𝔐",
        N: "𝔑",
        O: "𝔒",
        P: "𝔓",
        Q: "𝔔",
        R: "ℜ",
        S: "𝔖",
        T: "𝔗",
        U: "𝔘",
        V: "𝔙",
        W: "𝔚",
        X: "𝔛",
        Y: "𝔜",
        Z: "ℨ"
    },
    Ke = {
        a: "𝖆",
        b: "𝖇",
        c: "𝖈",
        d: "𝖉",
        e: "𝖊",
        f: "𝖋",
        g: "𝖌",
        h: "𝖍",
        i: "𝖎",
        j: "𝖏",
        k: "𝖐",
        l: "𝖑",
        m: "𝖒",
        n: "𝖓",
        o: "𝖔",
        p: "𝖕",
        q: "𝖖",
        r: "𝖗",
        s: "𝖘",
        t: "𝖙",
        u: "𝖚",
        v: "𝖛",
        w: "𝖜",
        x: "𝖝",
        y: "𝖞",
        z: "𝖟",
        A: "𝕬",
        B: "𝕭",
        C: "𝕮",
        D: "𝕯",
        E: "𝕰",
        F: "𝕱",
        G: "𝕲",
        H: "𝕳",
        I: "𝕴",
        J: "𝕵",
        K: "𝕶",
        L: "𝕷",
        M: "𝕸",
        N: "𝕹",
        O: "𝕺",
        P: "𝕻",
        Q: "𝕼",
        R: "𝕽",
        S: "𝕾",
        T: "𝕿",
        U: "𝖀",
        V: "𝖁",
        W: "𝖂",
        X: "𝖃",
        Y: "𝖄",
        Z: "𝖅",
        1: "𝟏",
        2: "𝟐",
        3: "𝟑",
        4: "𝟒",
        5: "𝟓",
        6: "𝟔",
        7: "𝟕",
        8: "𝟖",
        9: "𝟗",
        0: "𝟎",
        1: "❗",
        "?": "❓"
    },
    Qe = {
        a: "ⓐ",
        b: "ⓑ",
        c: "ⓒ",
        d: "ⓓ",
        e: "ⓔ",
        f: "ⓕ",
        g: "ⓖ",
        h: "ⓗ",
        i: "ⓘ",
        j: "ⓙ",
        k: "ⓚ",
        l: "ⓛ",
        m: "ⓜ",
        n: "ⓝ",
        o: "ⓞ",
        p: "ⓟ",
        q: "ⓠ",
        r: "ⓡ",
        s: "ⓢ",
        t: "ⓣ",
        u: "ⓤ",
        v: "ⓥ",
        w: "ⓦ",
        x: "ⓧ",
        y: "ⓨ",
        z: "ⓩ",
        A: "Ⓐ",
        B: "Ⓑ",
        C: "Ⓒ",
        D: "Ⓓ",
        E: "Ⓔ",
        F: "Ⓕ",
        G: "Ⓖ",
        H: "Ⓗ",
        I: "Ⓘ",
        J: "Ⓙ",
        K: "Ⓚ",
        L: "Ⓛ",
        M: "Ⓜ",
        N: "Ⓝ",
        O: "Ⓞ",
        P: "Ⓟ",
        Q: "Ⓠ",
        R: "Ⓡ",
        S: "Ⓢ",
        T: "Ⓣ",
        U: "Ⓤ",
        V: "Ⓥ",
        W: "Ⓦ",
        X: "Ⓧ",
        Y: "Ⓨ",
        Z: "Ⓩ",
        1: "①",
        2: "②",
        3: "③",
        4: "④",
        5: "⑤",
        6: "⑥",
        7: "⑦",
        8: "⑧",
        9: "⑨",
        ".": "⨀"
    },
    $e = {
        a: "🅐",
        b: "🅑",
        c: "🅒",
        d: "🅓",
        e: "🅔",
        f: "🅕",
        g: "🅖",
        h: "🅗",
        i: "🅘",
        j: "🅙",
        k: "🅚",
        l: "🅛",
        m: "🅜",
        n: "🅝",
        o: "🅞",
        p: "🅟",
        q: "🅠",
        r: "🅡",
        s: "🅢",
        t: "🅣",
        u: "🅤",
        v: "🅥",
        w: "🅦",
        x: "🅧",
        y: "🅨",
        z: "🅩",
        A: "🅐",
        B: "🅑",
        C: "🅒",
        D: "🅓",
        E: "🅔",
        F: "🅕",
        G: "🅖",
        H: "🅗",
        I: "🅘",
        J: "🅙",
        K: "🅚",
        L: "🅛",
        M: "🅜",
        N: "🅝",
        O: "🅞",
        P: "🅟",
        Q: "🅠",
        R: "🅡",
        S: "🅢",
        T: "🅣",
        U: "🅤",
        V: "🅥",
        W: "🅦",
        X: "🅧",
        Y: "🅨",
        Z: "🅩",
        0: "⓿"
    },
    et = {
        a: "🄰",
        b: "🄱",
        c: "🄲",
        d: "🄳",
        e: "🄴",
        f: "🄵",
        g: "🄶",
        h: "🄷",
        i: "🄸",
        j: "🄹",
        k: "🄺",
        l: "🄻",
        m: "🄼",
        n: "🄽",
        o: "🄾",
        p: "🄿",
        q: "🅀",
        r: "🅁",
        s: "🅂",
        t: "🅃",
        u: "🅄",
        v: "🅅",
        w: "🅆",
        x: "🅇",
        y: "🅈",
        z: "🅉",
        A: "🄰",
        B: "🄱",
        C: "🄲",
        D: "🄳",
        E: "🄴",
        F: "🄵",
        G: "🄶",
        H: "🄷",
        I: "🄸",
        J: "🄹",
        K: "🄺",
        L: "🄻",
        M: "🄼",
        N: "🄽",
        O: "🄾",
        P: "🄿",
        Q: "🅀",
        R: "🅁",
        S: "🅂",
        T: "🅃",
        U: "🅄",
        V: "🅅",
        W: "🅆",
        X: "🅇",
        Y: "🅈",
        Z: "🅉",
        ".": "⊡"
    },
    tt = {
        a: "🅰",
        b: "🅱",
        c: "🅲",
        d: "🅳",
        e: "🅴",
        f: "🅵",
        g: "🅶",
        h: "🅷",
        i: "🅸",
        j: "🅹",
        k: "🅺",
        l: "🅻",
        m: "🅼",
        n: "🅽",
        o: "🅾",
        p: "🅿",
        q: "🆀",
        r: "🆁",
        s: "🆂",
        t: "🆃",
        u: "🆄",
        v: "🆅",
        w: "🆆",
        x: "🆇",
        y: "🆈",
        z: "🆉",
        A: "🅰",
        B: "🅱",
        C: "🅲",
        D: "🅳",
        E: "🅴",
        F: "🅵",
        G: "🅶",
        H: "🅷",
        I: "🅸",
        J: "🅹",
        K: "🅺",
        L: "🅻",
        M: "🅼",
        N: "🅽",
        O: "🅾",
        P: "🅿",
        Q: "🆀",
        R: "🆁",
        S: "🆂",
        T: "🆃",
        U: "🆄",
        V: "🆅",
        W: "🆆",
        X: "🆇",
        Y: "🆈",
        Z: "🆉"
    },
    nt = {
        a: "𝚊",
        b: "𝚋",
        c: "𝚌",
        d: "𝚍",
        e: "𝚎",
        f: "𝚏",
        g: "𝚐",
        h: "𝚑",
        i: "𝚒",
        j: "𝚓",
        k: "𝚔",
        l: "𝚕",
        m: "𝚖",
        n: "𝚗",
        o: "𝚘",
        p: "𝚙",
        q: "𝚚",
        r: "𝚛",
        s: "𝚜",
        t: "𝚝",
        u: "𝚞",
        v: "𝚟",
        w: "𝚠",
        x: "𝚡",
        y: "𝚢",
        z: "𝚣",
        A: "𝙰",
        B: "𝙱",
        C: "𝙲",
        D: "𝙳",
        E: "𝙴",
        F: "𝙵",
        G: "𝙶",
        H: "𝙷",
        I: "𝙸",
        J: "𝙹",
        K: "𝙺",
        L: "𝙻",
        M: "𝙼",
        N: "𝙽",
        O: "𝙾",
        P: "𝙿",
        Q: "𝚀",
        R: "𝚁",
        S: "𝚂",
        T: "𝚃",
        U: "𝚄",
        V: "𝚅",
        W: "𝚆",
        X: "𝚇",
        Y: "𝚈",
        Z: "𝚉",
        1: "𝟷",
        2: "𝟸",
        3: "𝟹",
        4: "𝟺",
        5: "𝟻",
        6: "𝟼",
        7: "𝟽",
        8: "𝟾",
        9: "𝟿",
        0: "𝟶",
        "!": "！",
        "?": "？",
        ".": "．"
    };
t = this, e = function() {
    return o = {}, r.m = n = [function(t, e) {
        t.exports = function(t) {
            var e;
            if ("SELECT" === t.nodeName) t.focus(), e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection(),
                    r = document.createRange();
                r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString()
            }
            return e
        }
    }, function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: n
                }), this
            },
            once: function(t, e, n) {
                var o = this;

                function r() {
                    o.off(t, r), e.apply(n, arguments)
                }
                return r._ = e, this.on(t, r, n)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {}),
                    o = n[t],
                    r = [];
                if (o && e)
                    for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                return r.length ? n[t] = r : delete n[t], this
            }
        }, t.exports = n, t.exports.TinyEmitter = n
    }, function(t, e, n) {
        var d = n(3),
            h = n(4);
        t.exports = function(t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!d.string(e)) throw new TypeError("Second argument must be a String");
            if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
            if (d.node(t)) return s = e, f = n, (u = t).addEventListener(s, f), {
                destroy: function() {
                    u.removeEventListener(s, f)
                }
            };
            if (d.nodeList(t)) return a = t, c = e, l = n, Array.prototype.forEach.call(a, function(t) {
                t.addEventListener(c, l)
            }), {
                destroy: function() {
                    Array.prototype.forEach.call(a, function(t) {
                        t.removeEventListener(c, l)
                    })
                }
            };
            if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var o, r, i, a, c, l, u, s, f
        }
    }, function(t, n) {
        n.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }, n.nodeList = function(t) {
            var e = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
        }, n.string = function(t) {
            return "string" == typeof t || t instanceof String
        }, n.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }, function(t, e, n) {
        var a = n(5);

        function i(t, e, n, o, r) {
            var i = function(e, n, t, o) {
                return function(t) {
                    t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t)
                }
            }.apply(this, arguments);
            return t.addEventListener(n, i, r), {
                destroy: function() {
                    t.removeEventListener(n, i, r)
                }
            }
        }
        t.exports = function(t, e, n, o, r) {
            return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
                return i(t, e, n, o, r)
            }))
        }
    }, function(t, e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        t.exports = function(t, e) {
            for (; t && 9 !== t.nodeType;) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode
            }
        }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(0),
            r = n.n(o),
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };

        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }

        function c(t) {
            ! function(t, e) {
                if (!(t instanceof c)) throw new TypeError("Cannot call a class as a function")
            }(this), this.resolveOptions(t), this.initSelection()
        }
        var l = (function(t, e, n) {
                a(t.prototype, e)
            }(c, [{
                key: "resolveOptions",
                value: function(t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : {};
                    this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                }
            }, {
                key: "initSelection",
                value: function() {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake",
                value: function() {
                    var t = this,
                        e = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(), this.fakeHandlerCallback = function() {
                        return t.removeFake()
                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = r()(this.fakeElem), this.copyText()
                }
            }, {
                key: "removeFake",
                value: function() {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                }
            }, {
                key: "selectTarget",
                value: function() {
                    this.selectedText = r()(this.target), this.copyText()
                }
            }, {
                key: "copyText",
                value: function() {
                    var e = void 0;
                    try {
                        e = document.execCommand(this.action)
                    } catch (t) {
                        e = !1
                    }
                    this.handleResult(e)
                }
            }, {
                key: "handleResult",
                value: function(t) {
                    this.emitter.emit(t ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection",
                value: function() {
                    this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeFake()
                }
            }, {
                key: "action",
                set: function(t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : "copy";
                    if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                },
                get: function() {
                    return this._action
                }
            }, {
                key: "target",
                set: function(t) {
                    if (void 0 !== t) {
                        if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = t
                    }
                },
                get: function() {
                    return this._target
                }
            }]), c),
            u = n(1),
            s = n.n(u),
            f = n(2),
            d = n.n(f),
            h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };

        function y(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        var m = (function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(v, s.a), function(t, e, n) {
            e && y(t.prototype, e), n && y(t, n)
        }(v, [{
            key: "resolveOptions",
            value: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : {};
                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === h(e.container) ? e.container : document.body
            }
        }, {
            key: "listenClick",
            value: function(t) {
                var e = this;
                this.listener = d()(t, "click", function(t) {
                    return e.onClick(t)
                })
            }
        }, {
            key: "onClick",
            value: function(t) {
                var e = t.delegateTarget || t.currentTarget;
                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l({
                    action: this.action(e),
                    target: this.target(e),
                    text: this.text(e),
                    container: this.container,
                    trigger: e,
                    emitter: this
                })
            }
        }, {
            key: "defaultAction",
            value: function(t) {
                return b("action", t)
            }
        }, {
            key: "defaultTarget",
            value: function(t) {
                var e = b("target", t);
                if (e) return document.querySelector(e)
            }
        }, {
            key: "defaultText",
            value: function(t) {
                return b("text", t)
            }
        }, {
            key: "destroy",
            value: function() {
                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
            }
        }], [{
            key: "isSupported",
            value: function(t) {
                var e = 0 < arguments.length && void 0 !== t ? t : ["copy", "cut"],
                    n = "string" == typeof e ? [e] : e,
                    o = !!document.queryCommandSupported;
                return n.forEach(function(t) {
                    o = o && !!document.queryCommandSupported(t)
                }), o
            }
        }]), v);

        function v(t, e) {
            ! function(t, e) {
                if (!(t instanceof v)) throw new TypeError("Cannot call a class as a function")
            }(this);
            var n = function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this));
            return n.resolveOptions(e), n.listenClick(t), n
        }

        function b(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n)) return e.getAttribute(n)
        }
        e.default = m
    }], r.c = o, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 6).default;

    function r(t) {
        if (o[t]) return o[t].exports;
        var e = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
    }
    var n, o
}, "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e(), a = this, b = function() {
    "use strict";

    function c(b, c, d) {
        var e = new XMLHttpRequest;
        e.open("GET", b), e.responseType = "blob", e.onload = function() {
            a(e.response, c, d)
        }, e.onerror = function() {
            console.error("could not download file")
        }, e.send()
    }

    function d(a) {
        var b = new XMLHttpRequest;
        b.open("HEAD", a, !1);
        try {
            b.send()
        } catch (a) {}
        return 200 <= b.status && b.status <= 299
    }

    function e(a) {
        try {
            a.dispatchEvent(new MouseEvent("click"))
        } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b)
        }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
        a = f.saveAs || ("object" != typeof window || window !== f ? function() {} : "download" in HTMLAnchorElement.prototype ? function(b, g, h) {
            var i = f.URL || f.webkitURL,
                j = document.createElement("a");
            g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function() {
                i.revokeObjectURL(j.href)
            }, 4e4), setTimeout(function() {
                e(j)
            }, 0))
        } : "msSaveOrOpenBlob" in navigator ? function(f, g, h) {
            if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(function(a, b) {
                return void 0 === b ? b = {
                    autoBom: !1
                } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
                    autoBom: !b
                }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\ufeff", a], {
                    type: a.type
                }) : a
            }(f, h), g);
            else if (d(f)) c(f, g, h);
            else {
                var i = document.createElement("a");
                i.href = f, i.target = "_blank", setTimeout(function() {
                    e(i)
                })
            }
        } : function(a, b, d, e) {
            if ((e = e || open("", "_blank")) && (e.document.title = e.document.body.innerText = "downloading..."), "string" == typeof a) return c(a, b, d);
            var g = "application/octet-stream" === a.type,
                h = /constructor/i.test(f.HTMLElement) || f.safari,
                i = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((i || g && h) && "object" == typeof FileReader) {
                var j = new FileReader;
                j.onloadend = function() {
                    var a = j.result;
                    a = i ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), e ? e.location.href = a : location = a, e = null
                }, j.readAsDataURL(a)
            } else {
                var k = f.URL || f.webkitURL,
                    l = k.createObjectURL(a);
                e ? e.location = l : location.href = l, e = null, setTimeout(function() {
                    k.revokeObjectURL(l)
                }, 4e4)
            }
        });
    f.saveAs = a.saveAs = a, "undefined" != typeof module && (module.exports = a)
}, "function" == typeof define && define.amd ? define([], b) : "undefined" != typeof exports ? b() : (b(), a.FileSaver = {}), document.addEventListener("DOMContentLoaded", function() {
    var ne = document.getElementById("content");
    if (null != ne) {
        if (document.getElementById("upper") && document.getElementById("upper").addEventListener("click", function(e) {
                return e.preventDefault(), ne.value = ne.value.toUpperCase(), ne.placeholder = ne.placeholder.toUpperCase(), xe(ne), Ae("Convert", "Upper"), je(), !1
            }), document.getElementById("lower") && document.getElementById("lower").addEventListener("click", function(e) {
                return e.preventDefault(), ne.value = ne.value.toLowerCase(), ne.placeholder = ne.placeholder.toLowerCase(), xe(ne), Ae("Convert", "Lower"), je(), !1
            }), document.getElementById("capitalized") && document.getElementById("capitalized").addEventListener("click", function(e) {
                return e.preventDefault(), ne.value = ke(ne.value.toLowerCase()), ne.placeholder = ke(ne.placeholder.toLowerCase()), xe(ne), Ae("Convert", "Capitalized"), je(), !1
            }), document.getElementById("sentence") && document.getElementById("sentence").addEventListener("click", function(e) {
                return e.preventDefault(), ne.value = we(ne.value), ne.placeholder = we(ne.placeholder), xe(ne), Ae("Convert", "Sentence"), je(), !1
            }), document.getElementById("alternating") && document.getElementById("alternating").addEventListener("click", function(e) {
                return e.preventDefault(), ne.value = Te(ne.value), ne.placeholder = Te(ne.placeholder), xe(ne), Ae("Convert", "Alternating"), je(), !1
            }), document.getElementById("inverse") && document.getElementById("inverse").addEventListener("click", function(e) {
                return e.preventDefault(), ne.value = Ie(ne.value), ne.placeholder = Ie(ne.placeholder), xe(ne), Ae("Convert", "Inverse"), je(), !1
            }), document.getElementById("title") && document.getElementById("title").addEventListener("click", function(e) {
                return e.preventDefault(), ne.value = Be(ne.value), ne.placeholder = Be(ne.placeholder), xe(ne), Ae("Convert", "Title"), je(), !1
            }), document.getElementById("clear") && document.getElementById("clear").addEventListener("click", function(e) {
                return e.preventDefault(), ne.value = "", ne.placeholder = we(ne.placeholder.toLowerCase()), Me(ne), Ae("Clear", "Clear"), je(), !1
            }), document.getElementById("smalltext")) {
            function _() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), document.getElementById("output").innerHTML = "<h3>" + smallcaps + "</h3><p>" + Ce(_, De, !0) + "</p>", document.getElementById("output").innerHTML += "<h3>" + superscript + "</h3><p>" + Ce(_, Ue, !0) + "</p>"
            }
            _(), ne.addEventListener("input", function(e) {
                _(), je()
            }), ne.addEventListener("propertychange", function(e) {
                _(), je()
            })
        }
        if (document.getElementById("unicode")) {
            function $() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), document.getElementById("output").innerHTML = "<h3>" + script + "</h3><p>" + Ce(_, Ye, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + script_bold + "</h3><p>" + Ce(_, Ze, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + fraktur + "</h3><p>" + Ce(_, Je, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + fraktur_bold + "</h3><p>" + Ce(_, Ke, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + circled + "</h3><p>" + Ce(_, Qe, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + circled_inverted + "</h3><p>" + Ce(_, $e, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + squared + "</h3><p>" + Ce(_, et, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + squared_inverted + "</h3><p>" + Ce(_, tt, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + caps + "</h3><p>" + Ce(_, De, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + full + "</h3><p>" + Ce(_, qe, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + mono + "</h3><p>" + Ce(_, nt, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + sans + "</h3><p>" + Ce(_, We, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + sans_italic + "</h3><p>" + Ce(_, Xe, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + sans_bold + "</h3><p>" + Ce(_, Ge, !1) + "</p>", document.getElementById("output").innerHTML += "<h3>" + sans_bold_italic + "</h3><p>" + Ce(_, Ve, !1) + "</p>"
            }
            $(), ne.addEventListener("input", function(e) {
                $(), je()
            }), ne.addEventListener("propertychange", function(e) {
                $(), je()
            })
        }
        if (document.getElementById("widetext")) {
            function ee() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), document.getElementById("output").innerHTML = "<p>" + Ce(_, qe, !1) + "</p>"
            }
            ee(), ne.addEventListener("input", function(e) {
                ee(), je()
            }), ne.addEventListener("propertychange", function(e) {
                ee(), je()
            })
        }
        if (document.getElementById("boldtext")) {
            function te() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), document.getElementById("output").innerHTML = "<p>" + Ce(_, Pe, !1) + "</p>"
            }
            te(), ne.addEventListener("input", function(e) {
                te(), je()
            }), ne.addEventListener("propertychange", function(e) {
                te(), je()
            })
        }
        if (document.getElementById("italictext")) {
            function oe() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), document.getElementById("output").innerHTML = "<p>" + Ce(_, Fe, !1) + "</p>"
            }
            oe(), ne.addEventListener("input", function(e) {
                oe(), je()
            }), ne.addEventListener("propertychange", function(e) {
                oe(), je()
            })
        }
        if (document.getElementById("underlinetext")) {
            function re() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), document.getElementById("output").innerHTML = "<p>" + Se(_, "̲") + "</p>"
            }
            re(), ne.addEventListener("input", function(e) {
                re(), je()
            }), ne.addEventListener("propertychange", function(e) {
                re(), je()
            })
        }
        if (document.getElementById("upsidedown")) {
            function ie() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), _ = _.split("").reverse().join(""), document.getElementById("output").innerHTML = "<p>" + Ce(_, Ne, !1) + "</p>"
            }
            ie(), ne.addEventListener("input", function(e) {
                ie(), je()
            }), ne.addEventListener("propertychange", function(e) {
                ie(), je()
            })
        }
        if (document.getElementById("mirror")) {
            function ae() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), _ = _.split("").reverse().join(""), document.getElementById("output").innerHTML = "<p>" + Ce(_, ze, !1) + "</p>"
            }
            ae(), ne.addEventListener("input", function(e) {
                ae(), je()
            }), ne.addEventListener("propertychange", function(e) {
                ae(), je()
            })
        }
        if (document.getElementById("strikethrough")) {
            function ce() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), document.getElementById("output").innerHTML = "<p>" + Se(_, "̶") + "</p>"
            }
            ce(), ne.addEventListener("input", function(e) {
                ce(), je()
            }), ne.addEventListener("propertychange", function(e) {
                ce(), je()
            })
        }
        if (document.getElementById("backwards")) {
            function le() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), document.getElementById("output").innerHTML = "<p>" + _.split("").reverse().join("").replace(/\n/g, "<br>") + "</p>"
            }
            le(), ne.addEventListener("input", function(e) {
                le(), je()
            }), ne.addEventListener("propertychange", function(e) {
                le(), je()
            })
        }
        if (document.getElementById("morse")) {
            var ue = document.getElementById("translated");

            function de(_) {
                var $ = ne,
                    ee = "translated";
                if (_) $ = ue, ee = "content";
                var te = $.value;
                "" == te && (te = $.placeholder), document.getElementById(ee).value = function(_, $) {
                    var ee = {
                        a: ".-",
                        b: "-...",
                        c: "-.-.",
                        d: "-..",
                        e: ".",
                        f: "..-.",
                        g: "--.",
                        h: "....",
                        i: "..",
                        j: ".---",
                        k: "-.-",
                        l: ".-..",
                        m: "--",
                        n: "-.",
                        o: "---",
                        p: ".--.",
                        q: "--.-",
                        r: ".-.",
                        s: "...",
                        t: "-",
                        u: "..-",
                        v: "...-",
                        w: ".--",
                        x: "-..-",
                        y: "-.--",
                        z: "--..",
                        1: ".----",
                        2: "..---",
                        3: "...--",
                        4: "....-",
                        5: ".....",
                        6: "-....",
                        7: "--...",
                        8: "---..",
                        9: "----.",
                        0: "-----",
                        ".": ".-.-.-",
                        ",": "--..--",
                        "?": "..--..",
                        "'": ".----.",
                        "/": "-..-.",
                        "(": "-.--.",
                        ")": "-.--.-",
                        "&": ".-...",
                        ":": "---...",
                        ";": "-.-.-.",
                        "=": "-...-",
                        "+": ".-.-.",
                        "-": "-....-",
                        _: "..--.-",
                        '"': ".-..-.",
                        $: "...-..-",
                        "!": "-.-.--",
                        "@": ".--.-.",
                        " ": "/"
                    };
                    if ($) {
                        var k, te = {};
                        for (k in ee) ee.hasOwnProperty(k) && (te[ee[k]] = k);
                        return ee = te, we((_ = (_ = _.replace(/\_/g, "-")).replace(/\|/g, "/")).split(" ").filter(function(v) {
                            return ee.hasOwnProperty(v.toLowerCase())
                        }).map(function(v) {
                            return ee[v.toLowerCase()]
                        }).join(""))
                    }
                    return _.split("").filter(function(v) {
                        return ee.hasOwnProperty(v.toLowerCase())
                    }).map(function(v) {
                        return ee[v.toLowerCase()].toUpperCase()
                    }).join(" ").replace(/,\/,/g, "/")
                }(te, _), _ && Me(ne)
            }
            de(!1), ne.addEventListener("input", function(e) {
                de(!1), je()
            }), ne.addEventListener("propertychange", function(e) {
                de(!1), je()
            }), ue.addEventListener("input", function(e) {
                de(!0), je()
            }), ue.addEventListener("propertychange", function(e) {
                de(!0), je()
            })
        }
        if (document.getElementById("binary")) {
            ue = document.getElementById("translated");

            function se(_) {
                var $ = ne,
                    ee = "translated";
                if (_) $ = ue, ee = "content";
                var te = $.value;
                "" == te && (te = $.placeholder), _ ? (document.getElementById(ee).value = Re(te), Me(ne)) : document.getElementById(ee).value = _e(te)
            }
            se(!1), ne.addEventListener("input", function(e) {
                se(!1), je()
            }), ne.addEventListener("propertychange", function(e) {
                se(!1), je()
            }), ue.addEventListener("input", function(e) {
                se(!0), je()
            }), ue.addEventListener("propertychange", function(e) {
                se(!0), je()
            })
        }
        if (document.getElementById("titlecase")) {
            function pe() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), document.getElementById("output").innerHTML = "<p>" + Be(_).replace(/\n/g, "<br>") + "</p>"
            }
            pe(), ne.addEventListener("input", function(e) {
                pe(), je()
            }), ne.addEventListener("propertychange", function(e) {
                pe(), je()
            })
        }
        if (document.getElementById("sentencecase")) {
            function fe() {
                var _ = ne.value;
                "" == _ && (_ = ne.placeholder), document.getElementById("output").innerHTML = "<p>" + we(_).replace(/\n/g, "<br>") + "</p>"
            }
            fe(), ne.addEventListener("input", function(e) {
                fe(), je()
            }), ne.addEventListener("propertychange", function(e) {
                fe(), je()
            })
        }
        ne.addEventListener("focus", function() {
            Me(ne)
        }), ne.addEventListener("blur", function() {
            Me(ne)
        }), ne.addEventListener("input", function() {
            Me(ne)
        }), ne.addEventListener("propertychange", function() {
            Me(ne)
        }), Me(ne);
        var ve = new ClipboardJS("#copy");
        ve.on("success", function(e) {
            He(copied, "success"), Ae("Copied", "Copied"), je(), e.clearSelection()
        }), ve.on("error", function(e) {
            He(manual_copy, "info"), Ae("Copied", "Manual"), je()
        });
        try {
            new Blob;
            var he = document.getElementById("download");
            he && (he.style.display = "inline-block", he.addEventListener("click", function(e) {
                if (0 == ne.length) He(no_text, "error");
                else {
                    if ("innerText" === he.getAttribute("data-download-type")) var _ = document.getElementById(he.getAttribute("data-download-target").slice(1)).innerText.replace(/\n/g, "\r\n");
                    else _ = document.getElementById(he.getAttribute("data-download-target").slice(1)).value.replace(/\n/g, "\r\n");
                    var $ = new Blob([_], {
                        type: "text/plain;charset=utf-8"
                    });
                    saveAs($, file_name), He(downloaded, "success"), Ae("Download", "Download"), je()
                }
                return !1
            }))
        } catch (e) {}
        for (var me = document.querySelectorAll(".share"), i = 0; i < me.length; i++) me[i].addEventListener("click", function(e) {
            var _, $, ee, te, ne;
            return e.preventDefault(), _ = this.href, $ = 520, ee = 320, te = screen.width / 2 - $ / 2, ne = screen.height / 2 - ee / 2, window.open(_, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + $ + ",height=" + ee + ",top=" + ne + ",left=" + te), !1
        })
    }
    var ye = "ACCEPTCONSENT";
    if ("y" != function(_) {
            for (var $ = _ + "=", ee = document.cookie.split(";"), i = 0; i < ee.length; i++) {
                for (var c = ee[i];
                    " " == c.charAt(0);) c = c.substring(1);
                if (0 == c.indexOf($)) return c.substring($.length, c.length)
            }
            return ""
        }(ye) && Oe()) {
        var ge = document.getElementById("cookiebar");
        ge.style.display = "block", document.querySelectorAll("#cookiebar .ok")[0].addEventListener("click", function(e) {
            return ge.style.display = "none",
                function(_, $, ee, te) {
                    var d = new Date;
                    d.setTime(d.getTime() + 24 * ee * 60 * 60 * 1e3);
                    var ne = "expires=" + d.toUTCString();
                    document.cookie = _ + "=" + $ + ";" + ne + ";path=" + te
                }(ye, "y", 365, "/"), !1
        })
    }
    var Ee = document.getElementById("menu");
    Ee.classList.add("js");
    var be = window.location.pathname.split("/")[1];

    function Le() {
        var _ = Ee.offsetWidth,
            $ = 0;
        Ee.classList.remove("Text Converts");
        for (var ee = Ee.children, i = 0; i < ee.length; i++) ee[i].classList.remove("Text Converts"), ee[i].classList.contains("Text Converts") && ee[i].parentNode.removeChild(ee[i]);
        for (ee = Ee.children, i = 0; i < ee.length; i++) {
            var te = ee[i].childNodes[0];
            if ("" == be && 0 == i ? te.classList.add("active") : "" != be && te.getAttribute("href").includes("/" + be + "/") && !te.getAttribute("href").includes("onlinenotepad") && te.classList.add("active"), !ee[i].classList.contains("Text Converts")) {
                var ne = $ + ee[i].offsetWidth;
                if (_ < ne) {
                    if (0 == document.querySelectorAll("#menu .Text Converts ul").length) {
                        Ee.innerHTML += '<li class="Text Converts"><a href="#">More Tools</a><ul></ul></li>';
                        var oe = document.querySelectorAll("#menu .Text Converts ul")[0];
                        document.querySelectorAll("#menu .Text Converts > a")[0].addEventListener("click", function(e) {
                            return e.preventDefault(), oe.parentNode.classList.toggle("open"), !1
                        })
                    }
                    Ee.classList.add("Text Converts"), ee[i].classList.add("Text Converts"), oe.innerHTML += ee[i].innerHTML
                } else $ = ne
            }
        }
        var re = document.querySelectorAll("#menu li.Text Converts");
        if (0 < re.length) {
            var ie = re[0].previousElementSibling;
            ie.classList.add("Text Converts"), oe.innerHTML = ie.innerHTML + oe.innerHTML
        }
    }
    Le(), window.onresize = function(_) {
        Le()
    }
}), "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");