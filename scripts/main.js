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
var notification = document.querySelector("#notification");
var sectionWhy = document.querySelector("#why");
var sectionFeature = document.querySelector("#feature");
var sectionAbout = document.querySelector("#about");
var contentWhy = document.querySelector("#why-content");
var contentWhy2 = document.querySelector("#why-content-2");
var step1 = document.querySelector("#step1");
var step2 = document.querySelector("#step2");
var step3 = document.querySelector("#step3");
var step4 = document.querySelector("#step4");
var step5 = document.querySelector("#step5");
var whoStoryPlus = document.querySelector("#price-content");
var whoStoryPlusHead1 = document.querySelector("#price-feature-1-head");
var whoStoryPlusHead2 = document.querySelector("#price-feature-2-head");
var whoStoryPlusHead3 = document.querySelector("#price-feature-3-head");
var whoStoryPlusFeature1 = document.querySelector("#price-feature-1");
var whoStoryPlusFeature2 = document.querySelector("#price-feature-2");
var whoStoryPlusFeature3 = document.querySelector("#price-feature-3");
var sectionEarlyBird = document.querySelector("#text-early-bird");
var earlyBirdContent = document.querySelector("#early-bird-content");
var notification2 = document.querySelector("#notification2");
var textFooter = document.querySelector("#text-footer");

var items = document.querySelectorAll(".nav-item");
var navbarIcon = document.querySelector("#navbar-icon");
var navbarNav = document.querySelector("#navbarNav");
var navWhoStory = document.querySelector("#whostory");

// language translation
var language = {
    en: {
        why: "Why",
        whyLOGO: "Why",
        feature: "Features",
        about: "About",
        slogan: "3 letters, 3 stories, and there is another one going to happen...",
        notification: "<i class=\"fas fa-bullhorn\"></i>&nbsp;&nbsp;Get Notified When Available",
        contentWhy: "\"I'm gonna wait 'till the midnight hour. That's when my love come tumbling down.\" There is a personal story in our mind, and it might make us feel frustrated, lonely, delighted or excited. At that moment, perhaps we just want to talk to someone anonymously...<br>This is why we build a new app for you:</p>",
        contentWhy2: "<span class=\"logo\">WhoStory</span>, another chance for you, to share your story to someone you have never met.</p>",
        step1: "STEP 1: SEND LETTERS<br><br>3 letters / day. You have 3 chances to send letters to someone you have never met.",
        step2: "STEP 2: RECEIVE LETTERS<br><br>Choose the letter you are interested in, and reply. You can reply all or none of them. It doesn't matter.",
        step3: "STEP 3: CHAT ANONYMOUSLY<br><br>Chat anonymously for 5 days. Under this mode, you won't know each other.",
        step4: "FINAL STEP: DECIDE NEXT STEP<br><br>Decide whether you want to send a friend request in 5 days. If you become friends, you can continue chatting and see profiles of each other. Otherwise all messages will be deleted and you will meet her/him again.",
        step5: "WHAT'S MORE...<br><br>Set up to 3 filters, and you will receive 3 letters based on your expectations.",
        whoStoryPlus: "<strong>$0.99 / month</strong> &mdash; after downloading <span class=\"logo\">WhoStory</span> from Apple App Store or Google Play, you can decide whether you want to pay for <span class=\"logo\">WhoStory Plus+</span>. Once you buy it, you can send 30 letters everyday, and you are able to set as many filters as you want. Last but not least, your messages will be reserved for 5 more days, which means you will have more time to decide if you want to become friends with the pen pal. Trust us, it's worthy!</p>",
        whoStoryPlusHead1: "30 letters / day<br>&nbsp;",
        whoStoryPlusHead2: "10 days messages reserved",
        whoStoryPlusHead3: "Set all filters<br>&nbsp;",
        whoStoryPlusFeature1: "10 times chance to send messages. You can share your stories with more people! Higher chance to find people with common interest.",
        whoStoryPlusFeature2: "Have more time to consider if you want to become friend with your pen pal. In case you forget to add friend in time.",
        whoStoryPlusFeature3: "Receive anonymous messages more precisely. It is easier for you to find someone you're interested in or with common interest.",
        earlyBird: "Early Bird",
        earlyBirdContent: "Please help us improve by taking a 30sec survey. Your feedback is highly appreciated, and, to express our thankfulness, we will send you notification once <span class=\"logo\">WhoStory</span> is available. Therefore, you will have chance to become the <strong>first user</strong>. It is exciting! Isn't it?",
        notification2: "<i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Ok, I'd Like to Help",
        footer: "We are enthusiastic students from National Tsing Hua University, who believe software can make the world a little bit better.<br>Having questions? We love to help! Drop us an email at <a href=\"chyuan@datalab.cs.nthu.edu.tw\">chyuan@datalab.cs.nthu.edu.tw</a>. We will get back to you as soon as possible."
    },
    tw: {
        why: "為什麼 WhyStory",
        whyLOGO: "為什麼 <span class=\"logo\">WhoStory</span>",
        feature: "產品特色",
        about: "關於我們",
        slogan: "三封信、三則故事，屬於你的人生漂書站。",
        notification: "<i class=\"fas fa-bullhorn\"></i>&nbsp;&nbsp;app上線時請通知我",
        contentWhy: "每個人的心中，都有屬於自己的故事，這些故事有的可能會讓你感到挫折、寂寞，有的可能會使你感到高興或是興奮。當某個時候這些故事壓的你喘不過氣了，你可能會希望有個人能聽你講這些故事、替你分擔情緒，但同時你希望能跟不認識的人去分享，因為有時跟一位萍水相逢的人聊天，你反而能暢所欲言、抒發你內心真正的情感，不必擔心未來還需要持續相處而有所保留。",
        contentWhy2: "這就是為什麼我們要開發 <span class=\"logo\">WhoStory</span> ，一款全新的筆友app給你!",
        step1: "STEP 1: 寫信<br><br>每天有三封信的機會，能夠和三位你不曾遇過的人，分享屬於自己的故事。",
        step2: "STEP 2: 收信<br><br>在收到的三封信中，選擇有興趣的故事並回應給你的筆友。當然，你也可以什麼都不選。",
        step3: "STEP 3: 匿名聊天<br><br>現在你和你的筆友有五天的時間能夠聊著屬於你們的故事，在這期間你們不會知道對方的身份。",
        step4: "FINAL STEP: 決定下一步<br><br>你們必須在五天內決定是否要送好友邀請給你的筆友。如果成為朋友，你們可以持續跟彼此聊天並得知對方的真實身分。如果沒有在五天內成為朋友，那麼之前所有的聊天記錄將被刪除，未來也沒有機會再遇見對方。",
        step5: "除此之外。。。<br><br>設置過濾器來接收你希望收到的故事類型，每位使用者每天都會收到三封信。",
        whoStoryPlus: "<strong>$30 / 月</strong> &mdash; 下載完 <span class=\"logo\">WhoStory</span> 後可以決定是否要付費成為 <span class=\"logo\">WhoStory Plus+</span> 會員。會員享有每天三十封信的機會，而且可以設定不限制數量的過濾器，並且多保留你們的聊天內容五天。也因此，你們將有更多的時間去考慮你是否要跟你的筆友成為朋友！",
        whoStoryPlusHead1: "30封信 / 日<br>&nbsp;",
        whoStoryPlusHead2: "10天的信件保留<br>&nbsp;",
        whoStoryPlusHead3: "設定所有過濾器<br>&nbsp;",
        whoStoryPlusFeature1: "10倍的機會能夠分享更多的故事給其他人，有更多的機會找到對你的故事有興趣的人。",
        whoStoryPlusFeature2: "更多的時間去考慮是否和筆友成為朋友，避免忘記或是來不及送邀請的遺憾。",
        whoStoryPlusFeature3: "設定更精確的過濾器來收到你可能感興趣的故事，讓你更容易找到有同樣心情、故事的筆友。",
        earlyBird: "搶先看",
        earlyBirdContent: "請花30秒幫我們填寫一下問卷，我們會仔細審視您的意見，並將您的意見作為我們產品開發的參考，提高產品品質。當產品開發完成後，您將有機會成為 <strong>第一位使用者</strong>。",
        notification2: "<i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>&nbsp;&nbsp;感覺不錯！寫個問卷",
        footer: "我們是一群來自國立清華大學的學生，希望能透過coding讓世界變得更美好！<br>如果您對WhoStory有任何疑問，歡迎來信到<a href=\"chyuan@datalab.cs.nthu.edu.tw\">chyuan@datalab.cs.nthu.edu.tw</a>，我們會盡快回信給您。"
    }
}

function init() {
    if (dataReloadEN.classList.contains("onload")) {
        textWhy.textContent = language.en.why;
        textFeature.textContent = language.en.feature;
        textAbout.textContent = language.en.about;
        textSlogan.textContent = language.en.slogan;
        notification.innerHTML = language.en.notification;
        sectionWhy.innerHTML = language.en.whyLOGO;
        sectionFeature.textContent = language.en.feature;
        sectionAbout.textContent = language.en.about;
        sectionEarlyBird.textContent = language.en.earlyBird;
        contentWhy.innerHTML = language.en.contentWhy;
        contentWhy2.innerHTML = language.en.contentWhy2;
        step1.innerHTML = language.en.step1;
        step2.innerHTML = language.en.step2;
        step3.innerHTML = language.en.step3;
        step4.innerHTML = language.en.step4;
        step5.innerHTML = language.en.step5;
        whoStoryPlus.innerHTML = language.en.whoStoryPlus;
        whoStoryPlusHead1.innerHTML = language.en.whoStoryPlusHead1;
        whoStoryPlusHead2.innerHTML = language.en.whoStoryPlusHead2;
        whoStoryPlusHead3.innerHTML = language.en.whoStoryPlusHead3;
        whoStoryPlusFeature1.innerHTML = language.en.whoStoryPlusFeature1;
        whoStoryPlusFeature2.innerHTML = language.en.whoStoryPlusFeature2;
        whoStoryPlusFeature3.innerHTML = language.en.whoStoryPlusFeature3;
        earlyBirdContent.innerHTML = language.en.earlyBirdContent;
        notification2.innerHTML = language.en.notification2;
        textFooter.innerHTML = language.en.footer;
    }
    else if (dataReloadTW.classList.contains("onload")) {
        textWhy.textContent = language.tw.why;
        textFeature.textContent = language.tw.feature;
        textAbout.textContent = language.tw.about;
        textSlogan.textContent = language.tw.slogan;
        notification.innerHTML = language.tw.notification;
        sectionWhy.innerHTML = language.tw.whyLOGO;
        sectionFeature.textContent = language.tw.feature;
        sectionAbout.textContent = language.tw.about;
        sectionEarlyBird.textContent = language.tw.earlyBird;
        contentWhy.innerHTML = language.tw.contentWhy;
        contentWhy2.innerHTML = language.tw.contentWhy2;
        step1.innerHTML = language.tw.step1;
        step2.innerHTML = language.tw.step2;
        step3.innerHTML = language.tw.step3;
        step4.innerHTML = language.tw.step4;
        step5.innerHTML = language.tw.step5;
        whoStoryPlus.innerHTML = language.tw.whoStoryPlus;
        whoStoryPlusHead1.innerHTML = language.tw.whoStoryPlusHead1;
        whoStoryPlusHead2.innerHTML = language.tw.whoStoryPlusHead2;
        whoStoryPlusHead3.innerHTML = language.tw.whoStoryPlusHead3;
        whoStoryPlusFeature1.innerHTML = language.tw.whoStoryPlusFeature1;
        whoStoryPlusFeature2.innerHTML = language.tw.whoStoryPlusFeature2;
        whoStoryPlusFeature3.innerHTML = language.tw.whoStoryPlusFeature3;
        earlyBirdContent.innerHTML = language.tw.earlyBirdContent;
        notification2.innerHTML = language.tw.notification2;
        textFooter.innerHTML = language.tw.footer;
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

navWhoStory.addEventListener("click", function() {
    navbarIcon.setAttribute("class", "navbar-toggler navbar-toggler-right collapsed");
    navbarIcon.setAttribute("aria-expanded", "false");
    navbarNav.setAttribute("class", "navbar-collapse collapse");
    navbarNav.setAttribute("aria-expanded", "false");
})

for (let i=0; i<items.length; i++) {
    if (i === 3 || i ===4) {
        continue;
    }
    else {
        var item = items[i];
        item.addEventListener("click", function() {
        navbarIcon.setAttribute("class", "navbar-toggler navbar-toggler-right collapsed");
        navbarIcon.setAttribute("aria-expanded", "false");
        navbarNav.setAttribute("class", "navbar-collapse collapse");
        navbarNav.setAttribute("aria-expanded", "false");
    })
    }
}

// function handleItemClick() {
//     navbarIcon.setAttribute("class", "navbar-toggler navbar-toggler-right collapsed");
//     navbarIcon.setAttribute("aria-expanded", "false");
//     navbarNav.setAttribute("class", "navbar-collapse collapse");
//     navbarNav.setAttribute("aria-expanded", "false");
// }

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
