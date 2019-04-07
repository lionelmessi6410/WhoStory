// Google Analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

// TODO add your tracking id here
ga('create', 'tracking-id', 'auto');
ga('send', 'pageview');

window.onload = function() {
    init();
}

// language reload anchor
var dataReloadEN = document.querySelector(".en");
var dataReloadTW = document.querySelector(".zh-TW");
var textWhy = document.querySelector("#text-why");
var textFeature = document.querySelector("#text-feature");
var textAbout = document.querySelector("#text-about");
var textSlogan = document.querySelector("#text-slogan");
var sectionWhy = document.querySelector("#why");
var sectionFeature = document.querySelector("#feature");
var sectionAbout = document.querySelector("#about");
var sectionEarlyBird = document.querySelector("#text-early-bird");
var textFooter = document.querySelector("#text-footer");

// language translation
var language = {
    en: {
        why: "Why",
        feature: "Features",
        about: "About",
        slogan: "3 letters, 3 stories, and there is another one happening between you.",
        earlyBird: "Early Bird",
        footer: "We are enthusiastic students from National Tsing Hua University, who believe software can make the world a little bit better."
    },
    tw: {
        why: "為什麼 WhoStory",
        feature: "產品特色",
        about: "關於我們",
        slogan: "三封信，有著三個不同的故事。而屬於你的另一篇故事，正在發生。",
        earlyBird: "搶先看",
        footer: "我們是一群來自國立清華大學的學生，希望能透過coding讓世界變得更美好！"
    }
}

function init() {
    if (dataReloadEN.classList.contains("onload")) {
        textWhy.textContent = language.en.why;
        textFeature.textContent = language.en.feature;
        textAbout.textContent = language.en.about;
        textSlogan.textContent = language.en.slogan;
        sectionWhy.textContent = language.en.why;
        sectionFeature.textContent = language.en.feature;
        sectionAbout.textContent = language.en.about;
        sectionEarlyBird.textContent = language.en.earlyBird;
        textFooter.textContent = language.en.footer;
    }
    else if (dataReloadTW.classList.contains("onload")) {
        textWhy.textContent = language.tw.why;
        textFeature.textContent = language.tw.feature;
        textAbout.textContent = language.tw.about;
        textSlogan.textContent = language.tw.slogan;
        sectionWhy.textContent = language.tw.why;
        sectionFeature.textContent = language.tw.feature;
        sectionAbout.textContent = language.tw.about;
        sectionEarlyBird.textContent = language.tw.earlyBird;
        textFooter.textContent = language.tw.footer;
    }
}

// define language via window hash
// if (window.location.hash) {
//     if (window.location.hash === "#zh-TW") {
//         textWhy.textContent = language.tw.why;
//         textFeature.textContent = language.tw.feature;
//         textAbout.textContent = language.tw.about;
//         textSlogan.textContent = language.tw.slogan;
//         sectionWhy.textContent = language.tw.why;
//         sectionFeature.textContent = language.tw.feature;
//         sectionAbout.textContent = language.tw.about;
//         sectionEarlyBird.textContent = language.tw.earlyBird;
//         textFooter.textContent = language.tw.footer;
//     }
// }

dataReloadEN.addEventListener("click", function(e) {
    dataReloadTW.classList.remove("onload")
    dataReloadEN.classList.add("onload");
    init();
    // location.reload(true);
})

dataReloadTW.addEventListener("click", function(e) {
    dataReloadEN.classList.remove("onload");
    dataReloadTW.classList.add("onload");
    init();
    // location.reload(true);
    // textWhy.textContent = language.tw.why;
    // textFeature.textContent = language.tw.feature;
    // textAbout.textContent = language.tw.about;
    // textSlogan.textContent = language.tw.slogan;
    // sectionWhy.textContent = language.tw.why;
    // sectionFeature.textContent = language.tw.feature;
    // sectionAbout.textContent = language.tw.about;
    // sectionEarlyBird.textContent = language.tw.earlyBird;
    // textFooter.textContent = language.tw.footer;
})

// dataReloadEN.onclick() = function () {
//     location.reload();
// }

// dataReloadTW.onclick() = function() {
//     location.reload();
//     textWhy.textContent = language.tw.why;
//     textFeature.textContent = language.tw.feature;
//     textAbout.textContent = language.tw.about;
//     textSlogan.textContent = language.tw.slogan;
//     sectionWhy.textContent = language.tw.why;
//     sectionFeature.textContent = language.tw.feature;
//     sectionAbout.textContent = language.tw.about;
//     sectionEarlyBird.textContent = language.tw.earlyBird;
//     textFooter.textContent = language.tw.footer;
// }
