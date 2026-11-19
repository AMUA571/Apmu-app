const B=[
{n:"Swissquote Bank",c:"t1",b:"Tier-1 Shveytsariya",r:"FINMA, FCA, DFSA",l:"1:100",s:"0.0 pips",d:"$1,000",i:"Shveytsariya bank-brokeri. SIX birjasida roʻyxatga olingan. APMU rasmiy bazasi."},
{n:"Interactive Brokers",c:"t1",b:"Tier-1 AQSh",r:"SEC, FINRA, FCA",l:"1:50",s:"Birja",d:"$0",i:"150 dan ortiq jahon birjalariga toʻgʻridan-toʻgʻri ulanuvchi gigant broker."},
{n:"Saxo Bank",c:"t1",b:"Tier-1 Yevropa",r:"FSA, FINMA",l:"1:100",s:"0.4 pips",d:"$2,000",i:"Yirik investorlar uchun Daniya investitsiya banki."},
{n:"IG Markets",c:"t1",b:"Tier-1 FTSE 250",r:"FCA, ASIC",l:"1:200",s:"0.6 pips",d:"$250",i:"1974-yilda tashkil etilgan London birjasidagi nufuzli broker."},
{n:"Pepperstone",c:"t1",b:"Tier-1 ECN",r:"ASIC, FCA, DFSA",l:"1:500",s:"0.0 pips",d:"$200",i:"MT5, cTrader va TradingView bilan ishlovchi tezkor ECN broker."},
{n:"IC Markets",c:"off",b:"Ofshor / ECN",r:"ASIC, FSA Seyshel",l:"1:1000",s:"0.0 pips",d:"$200",i:"Katta savdo aylanmasiga ega True ECN broker."},
{n:"Exness",c:"off",b:"Ofshor FSA",r:"FSA Seyshel, FCA",l:"1:2000 / Cheksiz",s:"0.0 pips",d:"$10",i:"Bir zumda pul yechish va yuqori yelka bilan mashhur ofshor broker."},
{n:"XM Global",c:"off",b:"Ofshor Beliz",r:"FSC Beliz, DFSA",l:"1:1000",s:"0.6 pips",d:"$5",i:"Kichik depozitlar bilan ishlovchi ommaviy xalqaro broker."},
{n:"RoboForex",c:"off",b:"Ofshor Beliz",r:"FSC Beliz",l:"1:2000",s:"0.0 pips",d:"$10",i:"CopyFX va sent hisoblari bilan tanilgan ofshor broker."},
{n:"FBS",c:"off",b:"Ofshor Beliz",r:"FSC Beliz, ASIC",l:"1:3000",s:"0.7 pips",d:"$5",i:"Yuqori kredit yelkasi taklif qiluvchi ofshor broker."},
{n:"OctaFX",c:"off",b:"Ofshor MISA",r:"MISA Komor",l:"1:1000",s:"0.6 pips",d:"$25",i:"Svopsiz va kripto toʻlovli ofshor broker."}
];
let curC='all';
function drawB(){
const q=(document.getElementById('bq').value||'').toLowerCase(),box=document.getElementById('blist');box.innerHTML='';
B.filter(x=>(curC=='all'||x.c==curC)&&(x.n.toLowerCase().includes(q)||x.r.toLowerCase().includes(q))).forEach(x=>{
box.innerHTML+=`<div class="card"><div style="display:flex;justify-content:space-between"><b>${x.n}</b><span class="tag">${x.b}</span></div><div class="mut">${x.r}</div><div class="grid"><div><div class="mut">Yelka</div><b>${x.l}</b></div><div><div class="mut">Spred</div><b style="color:var(--grn)">${x.s}</b></div><div><div class="mut">Depozit</div><b>${x.d}</b></div></div><button class="btn-o" onclick="infoB('${x.n}')">Batafsil</button></div>`;
});
}
function catB(c,el){curC=c;el.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('act'));el.classList.add('act');drawB();}
function infoB(n){const x=B.find(i=>i.n==n);document.getElementById('bdet').innerHTML=`<h3 style="color:var(--gold)">${x.n}</h3><p class="mut" style="margin:8px 0">${x.i}</p><div class="row"><span>Litsenziya:</span><b>${x.r}</b></div><div class="row"><span>Yelka:</span><b>${x.l}</b></div><div class="row"><span>Depozit:</span><b>${x.d}</b></div><button class="btn" style="margin-top:10px" onclick="alert('${x.n} tanlandi!')">Tanlash</button><button class="btn-o" onclick="closeM()">Yopish</button>`;openM('m-binfo');}
function authT(m,el){el.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('act'));el.classList.add('act');const f=document.getElementById('afields');if(m=='u')f.innerHTML='<input placeholder="Username"><input type="password" placeholder="Parol">';if(m=='g')f.innerHTML='<input type="email" placeholder="Gmail"><input type="password" placeholder="Parol">';if(m=='s')f.innerHTML='<input type="tel" placeholder="+998 90 123 45 67"><input type="number" placeholder="SMS kod">';}
function openOAuth(p){document.getElementById('oat').innerText=p;openM('m-oa');}
function openM(id){document.getElementById(id).classList.add('open');}
function closeM(){document.querySelectorAll('.modal').forEach(m=>m.classList.remove('open'));}
setInterval(()=>{const e=Math.floor(Date.now()/1000);if(document.getElementById('tsec')){document.getElementById('tsec').innerText=30-(e%30);document.getElementById('tcode').innerText=String((Math.floor(e/30)*7919+104729)%900000+100000);}},1000);
function check2FA(){if((document.getElementById('tinp').value||'').length<4){alert('Kod kiriting!');return;}closeM();const r=document.getElementById('role').value;if(r=='trader'||r=='ret')showS('s-kyc');else inApp();}
function doneKYC(){if(!document.getElementById('k1').value){alert('F.I.Sh kiriting!');return;}inApp();}
function inApp(){document.getElementById('nav').classList.add('vis');showS('s-brok');drawB();}
function bossIn(){if(prompt('Rahbar paroli (7777):')!==null){document.getElementById('nav').classList.remove('vis');showS('s-boss');}}
function addW(){const n=document.getElementById('wn').value,l=document.getElementById('wl').value,t=document.getElementById('wt').value;if(!n)return;document.getElementById('wlist').innerHTML+=`<div class="card"><div class="row"><b>${n} (${l})</b><span style="color:var(--grn)">● Faol</span></div><div class="mut">${t}</div></div>`;}
function showS(id){document.querySelectorAll('.scr').forEach(s=>s.classList.remove('act'));document.getElementById(id).classList.add('act');}
function go(id,el){showS(id);document.querySelectorAll('.nbtn').forEach(b=>b.classList.remove('act'));el.classList.add('act');}
function exitApp(){document.getElementById('nav').classList.remove('vis');showS('s-login');}
const L={
uz:{t1:"APMU Tizimiga Kirish",t2:"Username / Parol",t3:"Telefon SMS",r1:"1. Treyder (Chempionat)",r2:"2. Yirik Investor",r3:"3. Hamkor (IB) va Broker",r4:"4. Mahalliy Investor ($100-$10k)",b1:"Davom etish (2FA)",or:"yoki",bg:"Google ID orqali kirish",ba:"Apple ID orqali kirish",bb:"👑 Rahbar kabineti (Super-Admin)",kyc:"KYC Tasdiqlash",bkyc:"Tasdiqlash",brt:"Jahon Brokerlari",c1:"Barchasi",c2:"Nufuzli",c3:"Ofshor",nb:"Brokerlar",nc:"Chempionat",nr:"Rahbar",ne:"Chiqish"},
ru:{t1:"Вход в APMU",t2:"Логин / Пароль",t3:"Телефон SMS",r1:"1. Трейдер",r2:"2. Крупный Инвестор",r3:"3. Партнер (IB)",r4:"4. Локальный Инвестор",b1:"Продолжить (2FA)",or:"или",bg:"Войти через Google ID",ba:"Войти через Apple ID",bb:"👑 Кабинет Руководителя",kyc:"KYC Верификация",bkyc:"Подтвердить",brt:"Мировые Брокеры",c1:"Все",c2:"Tier-1",c3:"Офшор",nb:"Брокеры",nc:"Чемпионат",nr:"Руководитель",ne:"Выход"},
en:{t1:"APMU Login",t2:"Username / Pass",t3:"Phone SMS",r1:"1. Trader",r2:"2. Corporate Investor",r3:"3. Partner (IB)",r4:"4. Local Investor",b1:"Continue (2FA)",or:"or",bg:"Sign in with Google ID",ba:"Sign in with Apple ID",bb:"👑 Executive Cabinet",kyc:"KYC Verification",bkyc:"Verify",brt:"Global Brokers",c1:"All",c2:"Tier-1",c3:"Offshore",nb:"Brokers",nc:"Championship",nr:"Executive",ne:"Logout"},
kk:{t1:"APMU Кіру",t2:"Логин",t3:"SMS",r1:"1. Трейдер",r2:"2. Ірі Инвестор",r3:"3. Серіктес",r4:"4. Шағын Инвестор",b1:"Жалғастыру (2FA)",or:"немесе",bg:"Google ID",ba:"Apple ID",bb:"👑 Басшы кабинеті",kyc:"KYC Растау",bkyc:"Растау",brt:"Брокерлер",c1:"Барлығы",c2:"Tier-1",c3:"Офшор",nb:"Брокерлер",nc:"Чемпионат",nr:"Басшы",ne:"Шығу"},
tg:{t1:"Воридшавӣ APMU",t2:"Логин",t3:"SMS",r1:"1. Трейдер",r2:"2. Сармоягузор",r3:"3. Шарик",r4:"4. Сармоягузори хурд",b1:"Идома (2FA)",or:"ё",bg:"Google ID",ba:"Apple ID",bb:"👑 Кабинети Роҳбар",kyc:"Тасдиқи KYC",bkyc:"Тасдиқ",brt:"Брокерҳо",c1:"Ҳама",c2:"Tier-1",c3:"Офшор",nb:"Брокерҳо",nc:"Чемпионат",nr:"Роҳбар",ne:"Баромад"},
ky:{t1:"APMU Кирүү",t2:"Логин",t3:"SMS",r1:"1. Трейдер",r2:"2. Ири Инвестор",r3:"3. Өнөктөш",r4:"4. Чакан Инвестор",b1:"Улантуу (2FA)",or:"же",bg:"Google ID",ba:"Apple ID",bb:"👑 Жетекчи кабинети",kyc:"KYC Тастыктоо",bkyc:"Тастыктоо",brt:"Брокерлер",c1:"Баары",c2:"Tier-1",c3:"Офшор",nb:"Брокерлер",nc:"Чемпионат",nr:"Жетекчи",ne:"Чыгуу"},
ar:{t1:"دخول APMU",t2:"اسم المستخدم",t3:"SMS",r1:"1. متداول",r2:"2. مستثمر كبير",r3:"3. شريك",r4:"4. مستثمر صغير",b1:"متابعة (2FA)",or:"أو",bg:"Google ID",ba:"Apple ID",bb:"👑 مكتب المدير",kyc:"التحقق KYC",bkyc:"تأكيد",brt:"الوسطاء",c1:"الكل",c2:"Tier-1",c3:"أوفشور",nb:"الوسطاء",nc:"البطولة",nr:"المدير",ne:"خروج"},
zh:{t1:"登录 APMU",t2:"用户名",t3:"短信",r1:"1. 交易员",r2:"2. 机构投资者",r3:"3. 合作伙伴",r4:"4. 个人投资者",b1:"继续 (2FA)",or:"或",bg:"Google ID",ba:"Apple ID",bb:"👑 总裁后台",kyc:"KYC 认证",bkyc:"确认",brt:"全球经纪商",c1:"全部",c2:"Tier-1",c3:"离岸",nb:"经纪商",nc:"锦标赛",nr:"总裁",ne:"退出"},
ms:{t1:"Log Masuk APMU",t2:"Pengguna",t3:"SMS",r1:"1. Pedagang",r2:"2. Pelabur Korporat",r3:"3. Rakan Kongsi",r4:"4. Pelabur Kecil",b1:"Teruskan (2FA)",or:"atau",bg:"Google ID",ba:"Apple ID",bb:"👑 Kabinet Pengarah",kyc:"KYC",bkyc:"Sahkan",brt:"Broker Dunia",c1:"Semua",c2:"Tier-1",c3:"Luar Pesisir",nb:"Broker",nc:"Kejohanan",nr:"Pengarah",ne:"Keluar"},
ja:{t1:"APMU ログイン",t2:"ユーザー名",t3:"SMS",r1:"1. トレーダー",r2:"2. 法人投資家",r3:"3. パートナー",r4:"4. 個人投資家",b1:"続行 (2FA)",or:"または",bg:"Google ID",ba:"Apple ID",bb:"👑 経営者",kyc:"KYC 確認",bkyc:"確認",brt:"世界のブローカー",c1:"すべて",c2:"Tier-1",c3:"オフショア",nb:"ブローカー",nc:"選手権",nr:"経営者",ne:"ログアウト"}
};
function setL(v){const d=L[v]||L.uz;document.querySelectorAll('[data-t]').forEach(e=>{const k=e.getAttribute('data-t');if(d[k])e.innerText=d[k];});}
