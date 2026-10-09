(function(){
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Dark / light theme switch ---------- */
  try{
    var themeButton = document.getElementById("themeToggle");
    var savedTheme = localStorage.getItem("mina-theme");
    var themeBody = document.body;
    function updateThemeButton(){
      var light = themeBody.getAttribute("data-theme") === "light";
      themeBody.classList.toggle("theme-light", light);
      themeBody.classList.toggle("theme-dark", !light);
      if(themeButton){
        themeButton.querySelector(".theme-toggle__icon").textContent = light ? "☾" : "☼";
        themeButton.querySelector(".theme-toggle__label").textContent = light ? "Dark" : "Light";
        themeButton.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
      }
    }
    if(themeBody.getAttribute("data-lock-theme") !== "true" && (savedTheme === "light" || savedTheme === "dark")) themeBody.setAttribute("data-theme", savedTheme);
    updateThemeButton();
    if(themeButton) themeButton.addEventListener("click", function(){
      var next = themeBody.getAttribute("data-theme") === "light" ? "dark" : "light";
      themeBody.setAttribute("data-theme", next);
      themeBody.classList.toggle("theme-light", next === "light");
      themeBody.classList.toggle("theme-dark", next === "dark");
      localStorage.setItem("mina-theme", next);
      updateThemeButton();
    });
  } catch(e){}

  /* ---------- EN / AR language toggle ---------- */
  try{
    var languageButton = document.getElementById("languageToggle");
    var language = localStorage.getItem("mina-language") || "en";
    var languageMap = {
      "Home":"الرئيسية", "About":"نبذة عني", "Experience":"الخبرة", "Projects":"المشاريع", "Skills":"المهارات", "Certifications":"الشهادات", "Contact":"تواصل معي",
      "DATA ANALYST / BUSINESS INTELLIGENCE":"محلل بيانات / ذكاء الأعمال", "TURNING DATA":"أحوّل البيانات", "INTO CLEAR":"إلى قرارات واضحة", "DECISIONS.":"ذكية.",
      "Explore My Work":"استكشف أعمالي", "Download CV":"تحميل السيرة الذاتية", "Contact Me":"تواصل معي", "Email Me":"راسلني", "LinkedIn":"لينكدإن", "Drive Folder":"ملفات Drive",
      "OPEN TO DATA ANALYST OPPORTUNITIES":"متاح لفرص محلل بيانات", "Scroll to explore":"مرر للاستكشاف", "Scroll to play":"مرر للتجربة",
      "More than numbers.":"أكثر من مجرد أرقام.", "What I Build":"ما أبنيه", "From data to direction.":"من البيانات إلى الاتجاه.", "Tools that turn data into insight.":"أدوات تحول البيانات إلى رؤى.", "Details matter.":"التفاصيل تصنع الفارق.", "Projects that answer questions.":"مشاريع تجيب عن الأسئلة.", "Always building the next skill.":"أطوّر مهاراتي باستمرار.", "Let's make data clearer.":"لنجعل البيانات أوضح.",
      "Have data that needs a clearer story? Let's turn it into dashboards, insights, and better decisions.":"لديك بيانات تحتاج إلى قصة أوضح؟ لنحوّلها إلى لوحات معلومات ورؤى وقرارات أفضل.",
      "Not just charts. Clear answers to real business questions.":"ليست مجرد رسوم بيانية، بل إجابات واضحة لأسئلة أعمال حقيقية.", "Academic Background":"الخلفية الأكاديمية", "Bachelor of Science in Mathematics":"بكالوريوس العلوم في الرياضيات", "Faculty of Science, Mansoura University":"كلية العلوم، جامعة المنصورة", "Cairo, Egypt":"القاهرة، مصر",
      "Data Analysis":"تحليل البيانات", "Dashboard Design":"تصميم لوحات المعلومات", "Business Storytelling":"سرد قصص الأعمال", "Capabilities":"القدرات", "Learning":"التعلم", "Languages":"اللغات", "What This Project Analyzes":"ما الذي يحلله المشروع؟", "Business Question":"سؤال العمل", "Key Insight":"الرؤية الأساسية", "Tools Used":"الأدوات المستخدمة", "Project Metrics":"مقاييس المشروع", "Video Summary":"ملخص الفيديو", "Pharmacist Assistant":"مساعد صيدلي", "Pharmacy — Mansoura, Egypt":"صيدلية — المنصورة، مصر", "Arabic":"العربية", "English":"الإنجليزية", "Native":"اللغة الأم", "Very Good":"جيد جدًا", "Data Cleaning":"تنظيف البيانات", "Power BI Dashboards":"لوحات Power BI", "Excel Analytics":"تحليلات Excel", "Business Insights":"رؤى الأعمال", "Database Design":"تصميم قواعد البيانات", "Microsoft Excel":"Microsoft Excel", "Business Intelligence":"ذكاء الأعمال", "Databases":"قواعد البيانات", "Programming & Web":"البرمجة والويب", "Hands-on Experience":"خبرة عملية", "Applied in Projects":"مطبق في مشاريع", "Working Knowledge":"معرفة عملية", "Open to Data Analyst opportunities":"متاح لفرص محلل بيانات", "Project video coming soon":"فيديو المشروع قريبًا", "Portfolio Files":"ملفات البورتفوليو", "Open Drive Folder":"فتح مجلد Drive"
    };
    var arabicProjects = {
      1:["تحليل سلوك حجز الرحلات","تحليلات المبيعات وسلوك العملاء","حللت أكثر من 50 ألف حجز لفهم سلوك العملاء وقنوات الحجز وأنواع الرحلات.","أي قنوات الحجز وأنواع الرحلات تحقق تحويلًا أفضل؟","حققت قناة الحجز عبر الإنترنت أعلى معدل تحويل بنسبة 15.48%.","يستعرض الفيديو لوحة Excel التفاعلية وقنوات الحجز وأنواع الرحلات وسلوك العملاء وأداء التحويل."],
      2:["تحليلات الإيرادات والعمليات AdventureWorks","تحليلات الإيرادات والعمليات","بنيت نموذج بيانات منظمًا لتحليل الإيرادات وهامش الربح والطلبات والاحتفاظ بالعملاء والأداء حسب المنطقة.","كيف تعمل الإيرادات والربحية والاحتفاظ والعمليات عبر المناطق؟","يساعد نموذج الحقائق والأبعاد على تحليل الإيرادات والاحتفاظ حسب المنطقة بسرعة.","يشرح الفيديو نموذج البيانات وكيفية تحليل الإيرادات والربحية والطلبات والاحتفاظ والأداء الإقليمي."],
      3:["تحليلات مستحضرات التجميل Over Glowed Data","تحليلات التجارة الإلكترونية والمبيعات","حللت مبيعات بقيمة 3.85 مليون دولار عبر 30 ألف طلب لفهم أداء المنتجات وقنوات البيع.","ما قنوات البيع والمنتجات الأكثر مساهمة في نمو الإيرادات؟","حققت المبيعات الإلكترونية 65% من الإيرادات مع نمو سنوي 26.6%.","يستعرض الفيديو لوحة المبيعات وقنوات الإيرادات واتجاهات الطلبات وأداء المنتجات والنمو السنوي."],
      4:["تحليلات الموارد البشرية: العدد والاحتفاظ ودوران الموظفين","تحليلات الموارد البشرية","بنيت لوحة لمتابعة عدد الموظفين والاحتفاظ والدوران وأنماط مغادرة الموظفين.","ما العوامل المؤثرة في الاحتفاظ بالموظفين ودورانهم؟","بلغ الاحتفاظ 89.47% وبلغ معدل الدوران 32.48%.","يستعرض الفيديو لوحة الموارد البشرية وعدد الموظفين والاحتفاظ والدوران وأسباب المغادرة الطوعية."],
      5:["Soly Vie — ذكاء مبيعات العقارات","تحليلات العقارات","صممت لوحة لمتابعة قيمة المشروعات والوحدات والعملاء المحتملين وتحويل المشترين.","كيف نتابع أداء مبيعات العقارات وتحويل العملاء المحتملين بوضوح؟","بلغت قيمة المشروعات 3,874 مليون جنيه وبلغ التحويل من عميل محتمل إلى مشترٍ 56.4%.","يشرح الفيديو متابعة المشروعات والوحدات والقيمة وتوليد العملاء وتحويلهم إلى مشترين."],
      6:["لوحة تحليل فقدان العملاء","تحليلات العملاء","حللت سلوك فقدان العملاء لتحديد الشرائح الأكثر عرضة للمغادرة.","ما مجموعات العملاء الأكثر احتمالًا للمغادرة وتحتاج إلى اهتمام بالاحتفاظ؟","كان مستخدمو الدفع بالشيك الإلكتروني ومستخدمو الألياف الضوئية من أعلى الشرائح في فقدان العملاء.","يستعرض الفيديو تحليل فقدان العملاء وتقسيم الشرائح وأسباب المغادرة والمجموعات التي تحتاج إلى تدخل."],
      7:["مجموعة المرشدي — تحليل التحصيل ومحفظة المشروعات","تحليلات تحصيل ومحفظة عقارية — مشروع جماعي","تحليل واحد يغطي المشروعات الثمانية: وان قطامية، زهرة الساحل الشمالي، ديجلا لاندمارك، سكاي لاين قطامية، ديجلا بالمز 6 أكتوبر، ليك فرونت 6، كريستال بلازا المعادي، وريهانا.","أين تتأخر السيولة وأين تتركز المخاطر وأي مشروع يحتاج إلى أسلوب متابعة مختلف؟","ليك فرونت 6 هو فرصة التحسين، وريهانا هو التحدي. التحليل يساعد الإدارة على حماية السيولة وتوزيع الاهتمام ومراقبة تركّز التمويل عبر المحفظة كاملة.","الفيديو عرض شامل للمشروعات الثمانية كلها، ويغطي التحصيل مقارنة بالتسليم ونضج المشروعات وتركيز البنوك وفرصة ليك فرونت 6 وتحدي ريهانا."],
      8:["نظام إدارة الجامعة — مخطط ERD","تصميم قواعد البيانات","صممت مخطط قاعدة بيانات جامعية منظمًا بالعلاقات والكيانات الضعيفة والسمات المشتقة.","كيف نصمم نظام إدارة جامعيًا بقاعدة بيانات علائقية واضحة ومنظمة؟","كان تمثيل العلاقة الثلاثية بين الطالب والأستاذ والقسم هو المفتاح لصحة المخطط.","يشرح الفيديو مخطط العلاقات وبنية قاعدة البيانات والتطبيع ومنطق النظام."],
      9:["Salary Sleuth — أين يذهب راتبي؟","تحليلات التمويل الشخصي","حللت إنفاق الأسرة حسب الفئات والديموغرافيا والموقع لفهم سبب اختفاء الدخل قبل نهاية الشهر.","أين يذهب الإنفاق الشهري وما الفئات والمناطق التي تسبب أكبر الفجوات؟","كان الطعام أكبر فئة إنفاق، وظهرت فروق واضحة بين شمال وجنوب مصر.","يستعرض الفيديو صفحات التقرير الأربع: الملخص وتحليل الفئات والديموغرافيا والموقع وكيف ترتبط لفهم الإنفاق."],
      10:["كأس العالم 2026 — تقرير المحلل ليوم المباراة","تحليلات رياضية — تقرير تفاعلي","بنيت تقريرًا تفاعليًا يغطي 48 دولة و104 مباريات، مع ملفات الفرق والمجموعات والهدافين والأهداف والملاعب وتقرير ويب مصاحب.","ماذا كشفت أرقام البطولة عن سباق اللقب والتسجيل المتأخر واللاعبين الجديرين بالمراجعة؟","تم تسجيل 308 أهداف، منها 81 هدفًا بين الدقيقتين 76 و90، وأنهت إسبانيا البطولة بطلة بعدما استقبلت هدفًا واحدًا في ثماني مباريات.","يستعرض الفيديو تقرير Power BI المكوّن من 56 صفحة، من القراءة التنفيذية ومسار البطولة إلى الأرقام القياسية ومتابعة المواهب ورؤية المحلل."]
    };
    var toolArabic={Excel:"إكسل", "Power Query":"Power Query", "Pivot Tables":"الجداول المحورية", "Power BI":"Power BI", DAX:"DAX", Python:"بايثون", SQL:"SQL", "Data Modeling":"نمذجة البيانات", "Data Cleaning":"تنظيف البيانات", HTML:"HTML", CSS:"CSS", ERD:"ERD", "Pivot Charts":"المخططات المحورية", "Database Normalization":"تطبيع قواعد البيانات"};
    window.applyArabicProjects=function(rtl){
      document.querySelectorAll(".project-card").forEach(function(card){
        var p=arabicProjects[card.id.replace("project-","")]; if(!p) return;
        var title=card.querySelector(".project-card__title"), cat=card.querySelector(".project-card__cat"), info=card.querySelector(".video-info");
        if(!card.dataset.enTitle){ card.dataset.enTitle=title.textContent; card.dataset.enCat=cat.textContent; card.dataset.enInfo=JSON.stringify(Array.from(info.querySelectorAll("p")).map(function(x){return x.textContent;})); }
        title.textContent=rtl?p[0]:card.dataset.enTitle; cat.textContent=rtl?p[1]:card.dataset.enCat;
        var ps=info.querySelectorAll("p"), vals=rtl?p.slice(5,6).concat([p[2],p[3],p[4]]):JSON.parse(card.dataset.enInfo); ps.forEach(function(x,i){x.textContent=rtl?(vals[i]||p[2]):vals[i];});
        info.querySelectorAll("h4").forEach(function(h,i){h.textContent=rtl?["ملخص الفيديو","ما الذي يحلله المشروع؟","سؤال العمل","الرؤية الأساسية","الأدوات المستخدمة","المشروعات الثمانية المشمولة","مقاييس المشروع"][i]:["Video Summary","What This Project Analyzes","Business Question","Key Insight","Tools Used","Portfolio Projects Covered","Project Metrics"][i];});
        info.querySelectorAll(".tools-list span").forEach(function(x){var en=x.dataset.en||x.textContent;x.dataset.en=en;x.textContent=rtl?(toolArabic[en]||en):en;});
        info.querySelectorAll(".metrics-list span").forEach(function(x){var en=x.dataset.en||x.textContent;x.dataset.en=en;x.textContent=rtl?en.replace("bookings analyzed","حجز تم تحليلها").replace("employees analyzed","موظف تم تحليلهم").replace("customers analyzed","عميل تم تحليلهم").replace("highest conversion rate","أعلى معدل تحويل"):en;});
        var portfolioList=card.querySelector(".portfolio-projects-list");
        if(portfolioList && rtl){ var namesAr=["وان قطامية كومباوند","زهرة الساحل الشمالي","ديجلا لاندمارك","سكاي لاين قطامية كومباوند","ديجلا بالمز 6 أكتوبر","ليك فرونت 6","كريستال بلازا المعادي","ريهانا"]; portfolioList.querySelectorAll("span").forEach(function(x,i){ if(!x.dataset.en) x.dataset.en=x.textContent; x.innerHTML='<b>0'+(i+1)+'</b>'+(namesAr[i]||x.dataset.en); }); }
      });
    };
    function setLanguage(next){
      language = next;
      var rtl = language === "ar";
      document.documentElement.lang = rtl ? "ar" : "en";
      document.documentElement.dir = rtl ? "rtl" : "ltr";
      document.querySelectorAll(".nav__links a,.mobile-menu a").forEach(function(a){ var key=a.textContent.trim(); if(languageMap[key]) a.textContent=rtl?languageMap[key]:Object.keys(languageMap).find(function(k){return languageMap[k]===key})||key; });
      document.querySelectorAll(".hero__badge,.hero__title .line span,.hero__actions .btn,.nav__right .btn,.hero__scroll span,.kinetic__eyebrow,.section-title,.section-text,.academic-card__label,.academic-card h4,.academic-card .faculty,.showcase__statement,.exp-card__role,.exp-card__meta,.contact-row span,.footer__statement,.footer__links a").forEach(function(el){
        var key=el.getAttribute("data-original")||el.textContent.trim();
        if(!el.getAttribute("data-original")) el.setAttribute("data-original",key);
        var original=el.getAttribute("data-original");
        el.textContent = rtl && languageMap[original] ? languageMap[original] : original;
      });
      if(languageButton){ languageButton.setAttribute("aria-pressed",rtl?"true":"false"); languageButton.setAttribute("aria-label",rtl?"Switch language to English":"Switch language to Arabic"); }
      if(window.applyArabicProjects) window.applyArabicProjects(rtl);
      localStorage.setItem("mina-language", language);
    }
    if(languageButton) languageButton.addEventListener("click",function(){ setLanguage(language === "ar" ? "en" : "ar"); window.location.reload(); });
    setLanguage(language);
  } catch(e){}

  /* ---------- Reveal on scroll (runs first, isolated) ---------- */
  function armReveal(){
    try{
      var els = document.querySelectorAll(".reveal, .kinetic__word");
      if("IntersectionObserver" in window && !reduceMotion){
        var io = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if(entry.isIntersecting){ entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
          });
        }, { threshold: 0.14, rootMargin: "0px 0px -60px 0px" });
        els.forEach(function(el){ io.observe(el); });
        setTimeout(function(){ els.forEach(function(el){ el.classList.add("is-visible"); }); }, 4000);
      } else {
        els.forEach(function(el){ el.classList.add("is-visible"); });
      }
    } catch(e){
      document.querySelectorAll(".reveal, .kinetic__word").forEach(function(el){ el.classList.add("is-visible"); });
    }
  }

  /* ---------- Loading screen ---------- */
  try{
    var fill = document.getElementById("loaderFill");
    var loader = document.getElementById("loader");
    var pct = 0;
    var iv = setInterval(function(){
      pct += Math.random()*22 + 8;
      if(pct >= 100){ pct = 100; clearInterval(iv); }
      if(fill) fill.style.width = pct + "%";
      if(pct >= 100){
        setTimeout(function(){
          if(loader) loader.classList.add("is-hidden");
          document.body.style.overflow = "";
          var ht = document.getElementById("heroTitle");
          if(ht) ht.classList.add("in");
          armReveal();
        }, 280);
      }
    }, 140);
    document.body.style.overflow = "hidden";
    // hard safety net: never trap the user behind the loader
    setTimeout(function(){
      if(loader && !loader.classList.contains("is-hidden")){
        loader.classList.add("is-hidden");
        document.body.style.overflow = "";
        var ht2 = document.getElementById("heroTitle");
        if(ht2) ht2.classList.add("in");
        armReveal();
      }
    }, 2600);
  } catch(e){
    var loaderFallback = document.getElementById("loader");
    if(loaderFallback) loaderFallback.classList.add("is-hidden");
    document.body.style.overflow = "";
    armReveal();
  }

  /* ---------- Mobile nav menu ---------- */
  try{
    var burger = document.getElementById("navBurger");
    var menu = document.getElementById("mobileMenu");
    var close = document.getElementById("menuClose");
    if(burger && menu){ burger.addEventListener("click", function(){ menu.classList.add("is-open"); }); }
    if(close && menu){ close.addEventListener("click", function(){ menu.classList.remove("is-open"); }); }
    if(menu){ menu.querySelectorAll("a").forEach(function(a){ a.addEventListener("click", function(){ menu.classList.remove("is-open"); }); }); }
  } catch(e){}

  /* ---------- Sticky nav scrolled state + active link ---------- */
  try{
    var nav = document.getElementById("siteNav");
    var navLinks = document.querySelectorAll(".nav__links a, .mobile-menu a");
    var sectionIds = ["home","about","experience","projects","skills","certifications","contact"];
    var sectionEls = sectionIds.map(function(id){ return document.getElementById(id); }).filter(Boolean);
    function onScroll(){
      if(nav){ nav.classList.toggle("is-scrolled", window.scrollY > 30); }
      var progress = document.getElementById("scrollProgress");
      if(progress){
        var max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
      }
      var y = window.scrollY + 160;
      var current = sectionEls[0];
      sectionEls.forEach(function(s){ if(s.offsetTop <= y) current = s; });
      navLinks.forEach(function(a){
        var href = a.getAttribute("href").slice(1);
        a.classList.toggle("is-active", current && href === current.id);
      });
    }
    document.addEventListener("scroll", onScroll, { passive:true });
    onScroll();
  } catch(e){}

  /* ---------- Count-up stats ---------- */
  try{
    var stats = document.querySelectorAll(".stat__value");
    if("IntersectionObserver" in window){
      var ioStats = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(!entry.isIntersecting) return;
          var el = entry.target;
          var target = parseInt(el.getAttribute("data-count"), 10) || 0;
          var suffix = el.getAttribute("data-suffix") || "";
          var start = 0, duration = 1200, startTime = null;
          function step(ts){
            if(!startTime) startTime = ts;
            var progress = Math.min((ts - startTime) / duration, 1);
            el.textContent = Math.floor(progress * target) + suffix;
            if(progress < 1) requestAnimationFrame(step); else el.textContent = target + suffix;
          }
          requestAnimationFrame(step);
          ioStats.unobserve(el);
        });
      }, { threshold:0.5 });
      stats.forEach(function(s){ ioStats.observe(s); });
    }
  } catch(e){}

  /* ---------- Render skills ---------- */
  try{
    var groupsEl = document.getElementById("skillsGroups");
    if(groupsEl && typeof SKILL_GROUPS !== "undefined"){
      groupsEl.innerHTML = SKILL_GROUPS.map(function(g){
        var skillAr={"Microsoft Excel":"Microsoft Excel","Pivot Tables":"الجداول المحورية","Pivot Charts":"المخططات المحورية","Power Query":"Power Query","Advanced Formulas":"المعادلات المتقدمة","Data Cleaning":"تنظيف البيانات","Data Modeling":"نمذجة البيانات","Conditional Formatting":"التنسيق الشرطي","Slicers and Timelines":"أدوات التصفية والجداول الزمنية","Dynamic Dashboards":"لوحات معلومات ديناميكية","Power BI":"Power BI","DAX":"DAX","Interactive Report Design":"تصميم تقارير تفاعلية","Data Visualization":"تصور البيانات","Dashboard Development":"تطوير لوحات المعلومات","SQL":"SQL","ERD":"ERD","Database Normalization":"تطبيع قواعد البيانات","Relational Database Modeling":"نمذجة قواعد البيانات العلائقية","Python":"بايثون","HTML":"HTML","CSS":"CSS"};
        var pills = g.items.map(function(i){
          var name=localStorage.getItem("mina-language")==="ar"?(skillAr[i.name]||i.name):i.name;
          return '<span class="skill-pill" data-level="'+i.level+'"><span class="skill-pill__dot"></span>'+name+'</span>';
        }).join("");
        var groupAr={"Data Analysis":"تحليل البيانات","Business Intelligence":"ذكاء الأعمال","Databases":"قواعد البيانات","Programming & Web":"البرمجة والويب"};
        var groupName=localStorage.getItem("mina-language")==="ar"?(groupAr[g.group]||g.group):g.group;
        return '<div class="skill-group"><h4>'+groupName+'</h4><div class="skill-pills">'+pills+'</div></div>';
      }).join("");
    }
  } catch(e){}

  /* ---------- Render certifications ---------- */
  try{
    var certsEl = document.getElementById("certsGrid");
    if(certsEl && typeof CERTIFICATIONS !== "undefined"){
      certsEl.innerHTML = CERTIFICATIONS.map(function(c){
        var ar=localStorage.getItem("mina-language")==="ar";
        var image=c.image?'<img class="cert-card__image" src="'+c.image+'" alt="'+c.title+' certificate" loading="lazy">':'';
        var status=c.status?'<span class="cert-card__status">Certificate pending</span>':'';
        return '<div class="cert-card reveal is-visible">'+image+'<div class="cert-card__body"><h5>'+c.title+'</h5><span>'+ (ar?"جهة التدريب: ":"")+c.org+' · '+c.meta+'</span>'+status+'</div></div>';
      }).join("");
    }
  } catch(e){}

  /* ---------- Render languages ---------- */
  try{
    var langEl = document.getElementById("langRow");
    if(langEl && typeof LANGUAGES !== "undefined"){
      langEl.innerHTML = LANGUAGES.map(function(l){
        var ar=localStorage.getItem("mina-language")==="ar";
        return '<div class="lang-chip"><strong>'+(ar?(l.name==="Arabic"?"العربية":"الإنجليزية"):l.name)+'</strong><span>'+(ar?(l.level==="Native"?"اللغة الأم":"جيد جدًا"):l.level)+'</span></div>';
      }).join("");
    }
  } catch(e){}

  /* ---------- Render projects ---------- */
  try{
    var listEl = document.getElementById("projectsList");
    if(listEl && typeof PROJECTS !== "undefined"){
      listEl.innerHTML = PROJECTS.map(function(p){
        var num = String(p.id).padStart(2,"0");

        var mediaHtml;
        if(p.videoType === "mp4" && p.videoUrl){
          mediaHtml = '<div class="project-video-wrapper"><video controls preload="metadata" playsinline poster="'+p.videoPoster+'">'+
            '<source src="'+p.videoUrl+'" type="video/mp4">Your browser does not support HTML5 video.</video></div>';
        } else if(p.videoType === "youtube" && p.videoUrl){
          mediaHtml = '<div class="project-video-wrapper" style="aspect-ratio:16/9"><iframe src="'+p.videoUrl+'" style="width:100%;height:100%;aspect-ratio:16/9" loading="lazy" allowfullscreen title="'+p.title+' video"></iframe></div>';
        } else if(p.videoType === "vimeo" && p.videoUrl){
          mediaHtml = '<div class="project-video-wrapper" style="aspect-ratio:16/9"><iframe src="'+p.videoUrl+'" style="width:100%;height:100%;aspect-ratio:16/9" loading="lazy" allowfullscreen title="'+p.title+' video"></iframe></div>';
        } else {
          mediaHtml = '<div class="project-video-wrapper"><img src="'+p.dashboardImage+'" alt="'+p.title+' dashboard" loading="lazy">'+
            '<div class="video-soon"><span>Project video coming soon</span></div></div>';
        }

        var toolsHtml = p.tools.map(function(t){ return "<span>"+t+"</span>"; }).join("");
        var metricsHtml = p.metrics.map(function(m){ return "<span>"+m+"</span>"; }).join("");
        var portfolioHtml = p.portfolioProjects ? '<h4>Portfolio Projects Covered</h4><div class="portfolio-projects-list">'+p.portfolioProjects.map(function(name,i){ return '<span><b>0'+(i+1)+'</b>'+name+'</span>'; }).join('')+'</div>' : '';

        var actionsHtml = '<div class="project-card__actions">';
        if(p.projectLink){ actionsHtml += '<a href="'+p.projectLink+'" target="_blank" rel="noopener" class="btn btn--outline">'+(p.projectLinkLabel||"Open case study")+'</a>'; }
        if(p.githubLink){ actionsHtml += '<a href="'+p.githubLink+'" target="_blank" rel="noopener" class="btn btn--outline">GitHub</a>'; }
        actionsHtml += '</div>';

        return (
          '<article class="project-card reveal" id="project-'+p.id+'">' +
            '<div class="project-card__top">' +
              '<div><p class="project-card__cat">'+p.category+'</p><h3 class="project-card__title">'+p.title+'</h3></div>' +
              '<div class="project-card__num">'+num+'</div>' +
            '</div>' +
            mediaHtml +
            '<div class="video-info">' +
              '<h4>Video Summary</h4><p>'+p.videoDescription+'</p>' +
              '<h4>What This Project Analyzes</h4><p>'+p.description+'</p>' +
              '<h4>Business Question</h4><p>'+p.businessQuestion+'</p>' +
              '<h4>Key Insight</h4><p>'+p.keyInsight+'</p>' +
              '<h4>Tools Used</h4><div class="tools-list">'+toolsHtml+'</div>' +
              portfolioHtml +
              '<h4>Project Metrics</h4><div class="metrics-list">'+metricsHtml+'</div>' +
            '</div>' +
            actionsHtml +
          '</article>'
        );
      }).join("");
      if(localStorage.getItem("mina-language") === "ar" && window.applyArabicProjects) window.applyArabicProjects(true);
    }
  } catch(e){}

  /* ---------- Gentle card tilt and hero parallax ---------- */
  try{
    if(!reduceMotion && window.matchMedia("(pointer:fine)").matches){
      var tiltSelector = ".project-card, .feature-card, .bento-card, .showcase-panel, .cert-card";
      document.addEventListener("pointermove", function(ev){
        var card = ev.target.closest(tiltSelector);
        document.querySelectorAll(".tilt-active").forEach(function(old){ if(old !== card){ old.classList.remove("tilt-active"); old.style.transform=""; } });
        if(card){
          var r = card.getBoundingClientRect(), x=(ev.clientX-r.left)/r.width-.5, y=(ev.clientY-r.top)/r.height-.5;
          card.classList.add("tilt-active");
          card.style.transform="perspective(900px) rotateX("+(-y*2.5)+"deg) rotateY("+(x*3)+"deg) translateY(-3px)";
        }
      }, {passive:true});
      document.addEventListener("pointerout", function(ev){
        var card=ev.target.closest(tiltSelector);
        if(card && !card.contains(ev.relatedTarget)){ card.classList.remove("tilt-active"); card.style.transform=""; }
      }, {passive:true});
    }
  } catch(e){}

  /* ---------- Footer year ---------- */
  try{
    var cy = document.getElementById("copyYear");
    if(cy) cy.textContent = "\u00A9 " + new Date().getFullYear() + " Mina Hany Wahba";
  } catch(e){}

})();
