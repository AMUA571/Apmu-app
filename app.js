// 32 TA JAHON BROKERLARI ENSIKLOPEDIYASI (WOUFX BILAN)
const B = [
  {n:"Swissquote Bank",c:"t1",y:"1996",r:"FINMA (Shveytsariya), FCA, DFSA, MAS",z:"Shveytsariya (FINMA) yoki BAA (DIFC)",ex:"100% A-Book (Shveytsariya bank likvidligi va SIX birjasi)",h:"1996-yilda tashkil etilgan. 2000-yildan SIX Shveytsariya birjasida ommaviy sotiladi. Eng yuqori bank kafolatiga ega."},
  {n:"WouFX",c:"off",y:"2019",r:"MISA (Komor orollari) / Xalqaro ofshor",z:"Ofshor zona (MDH va Osiyo mijozlari uchun)",ex:"Gibrid (STP / A-Book va B-Book likvidlik koʻprigi)",h:"Zamonaviy texnologik broker. Yuqori kredit yelkasi, tezkor kripto/karta oʻtkazmalari va MT5 platformasi bilan MDH bozorida faol."},
  {n:"Interactive Brokers",c:"t1",y:"1978",r:"SEC, FINRA (AQSh), FCA, CBI, MAS",z:"AQSh (IB LLC) yoki Irlandiya (IBIE)",ex:"100% DMA (Toʻgʻridan-toʻgʻri 150+ jahon birjalariga chiqish)",h:"Tomas Peterffy tomonidan asos solingan. NASDAQ birjasida sotiladi. Institutsional treyderlar uchun №1 tanlov."},
  {n:"Saxo Bank",c:"t1",y:"1992",r:"FSA (Daniya), FINMA, FCA, MAS",z:"Daniya (Yevropa Ittifoqi) yoki Shveytsariya",ex:"100% A-Book (Tier-1 banklararo likvidlik)",h:"Kopengagenda tashkil etilgan Yevropa investitsiya banki. 70 000 dan ortiq birja instrumentlariga ega."},
  {n:"IG Markets",c:"t1",y:"1974",r:"FCA (Buyuk Britaniya), ASIC, BaFin, FINMA",z:"Buyuk Britaniya (FCA) yoki Bermud orollari",ex:"Asosan A-Book / Ichki xedjirlash (FTSE 250 kompaniyasi)",h:"Dunyodagi eng birinchi CFD brokeri. London fond birjasida roʻyxatga olingan."},
  {n:"CMC Markets",c:"t1",y:"1989",r:"FCA, ASIC, BaFin, MAS",z:"Buyuk Britaniya yoki Avstraliya",ex:"100% STP / DMA (Next Generation platformasi)",h:"Piter Kruddas tomonidan ochilgan. London fond birjasida (LSE) roʻyxatga olingan."},
  {n:"OANDA",c:"t1",y:"1996",r:"CFTC/NFA (AQSh), FCA, ASIC, MAS",z:"AQSh, Yevropa yoki BVI (Ofshor)",ex:"A-Book / Avtomatlashtirilgan xedjirlash tizimi",h:"Valyuta kurslari maʼlumotlari boʻyicha jahon standarti. 25 yildan ortiq benuqson tarixga ega."},
  {n:"FOREX.com (StoneX)",c:"t1",y:"2001",r:"CFTC/NFA, FCA, ASIC, IIROC",z:"AQSh, Buyuk Britaniya yoki Kayman orollari",ex:"STP / ECN (NASDAQ: SNEX tarkibida)",h:"Fortune 500 roʻyxatidagi StoneX Group korporatsiyasiga tegishli gigant broker."},
  {n:"Dukascopy Bank",c:"t1",y:"2004",r:"FINMA (Shveytsariya), FCMC (Latviya)",z:"Shveytsariya (FINMA bank hisobi)",ex:"100% ECN (SWFX Shveytsariya valyuta bozori)",h:"Jenevada joylashgan innovatsion Shveytsariya banki. JForex platformasi yaratuvchisi."},
  {n:"Pepperstone",c:"t1",y:"2010",r:"ASIC (Avstraliya), FCA, DFSA, BaFin, SCB",z:"Avstraliya, BAA yoki Bagama orollari (SCB)",ex:"100% No Dealing Desk (NDD) / ECN-STP",h:"Melburnda tashkil etilgan. Skalping va algoritmik savdo boʻyicha dunyodagi eng tez ijrochi."},
  {n:"IC Markets",c:"off",y:"2007",r:"ASIC (Avstraliya), CySEC, FSA (Seyshel)",z:"Seyshel orollari (FSA) — 1:1000 yelka uchun",ex:"100% True ECN (Equinix NY4 serverlari)",h:"Dunyodagi eng katta oylik savdo aylanmasiga ($1.5 trln+) ega boʻlgan chakana ECN broker."},
  {n:"Exness",c:"off",y:"2008",r:"FCA, CySEC, FSA (Seyshel), CBCS",z:"Seyshel orollari (FSA) yoki Kyurasao",ex:"Gibrid (Yirik orderlar A-Book, kichik orderlar B-Book)",h:"Oylik $4 trillion savdo hajmi va bir soniyada avtomatik pul yechish tizimi bilan mashhur."},
  {n:"XM Global",c:"off",y:"2009",r:"CySEC, ASIC, DFSA, FSC (Beliz)",z:"Beliz (FSC) — 1:1000 yelka va bonuslar",ex:"Market Maker / STP ijro (No Requotes)",h:"190 dan ortiq davlatda 10 milliondan ziyod mijozlarga ega xalqaro guruh."},
  {n:"RoboForex",c:"off",y:"2009",r:"FSC (Beliz)",z:"Beliz (FSC) — Xalqaro ofshor zona",ex:"STP / ECN (Prime va ProCent hisoblari)",h:"CopyFX investitsiya platformasi va R StocksTrader terminali bilan tanilgan."},
  {n:"FBS",c:"off",y:"2009",r:"FSC (Beliz), ASIC, CySEC",z:"Beliz (FSC) — 1:3000 gacha yelka",ex:"STP / Market Maker ijro modeli",h:"Osiyo va rivojlanayotgan bozorlarda 27 milliondan ortiq treyderlarga xizmat koʻrsatadi."},
  {n:"Octa (OctaFX)",c:"off",y:"2011",r:"MISA (Komor orollari), FSCA",z:"Sent-Lyusiya / MISA ofshor zonasi",ex:"STP / NDD (Svopsiz hisoblar)",h:"Kriptovalyuta oʻtkazmalari va komissiyasiz savdo shartlari bilan mashhur."},
  {n:"Tickmill",c:"t1",y:"2014",r:"FCA, CySEC, FSA (Seyshel), FSCA",z:"Seyshel orollari (FSA) yoki Buyuk Britaniya",ex:"100% DMA / ECN (0.0 pips spred)",h:"Estoniyalik treyderlar tomonidan asos solingan, professional skalperlar brokeri."},
  {n:"Admiral Markets (Admirals)",c:"t1",y:"2001",r:"FCA, ASIC, CySEC, EFSA, JSC",z:"Iordaniya (JSC) yoki Kipr (CySEC)",ex:"STP / ECN (MetaTrader Supreme Edition)",h:"20 yildan ortiq tajribaga ega Yevropa investitsiya firmasi."},
  {n:"FxPro",c:"t1",y:"2006",r:"FCA, CySEC, FSCA, SCB (Bagama)",z:"Bagama orollari (SCB) — 1:500 yelka",ex:"100% NDD (No Dealing Desk) — cTrader va MT5",h:"Formula-1 va koʻplab sport klublari homiysi, 100+ xalqaro mukofot sohibi."},
  {n:"AvaTrade",c:"t1",y:"2006",r:"CBI (Irlandiya), ASIC, FSA (Yaponiya), ADGM",z:"Britaniya Virjiniya orollari (BVI)",ex:"Market Maker (Qatʼiy belgilangan spredlar)",h:"Dublinda tashkil etilgan, AvaProtect xavfni sugʻurtalash tizimi yaratuvchisi."},
  {n:"Alpari",c:"off",y:"1998",r:"MISA (Komor orollari) / Xalqaro",z:"Komor orollari (MISA) — MDH zonasi",ex:"ECN / STP (PAMM hisoblar tizimi)",h:"MDH davlatlarida Forex va PAMM investitsiya tizimini ommalashtirgan eng keksa brend."},
  {n:"AMarkets",c:"off",y:"2007",r:"FSA (Sent-Vinsent), MISA, The Financial Commission",z:"Sent-Vinsent va Grenadin orollari",ex:"100% STP / ECN (€20,000 gacha kompensatsiya fondi)",h:"Verify My Trade mustaqil auditi tomonidan orderlar ijrosi tasdiqlangan broker."},
  {n:"FXOpen",c:"t1",y:"2005",r:"FCA (Buyuk Britaniya), ASIC, Nevis",z:"Nevis (Ofshor) yoki Buyuk Britaniya",ex:"100% True ECN (Kripto va Forex ECN)",h:"MT4/MT5 da ECN agregatorini birinchi boʻlib joriy qilgan kashshof broker."},
  {n:"FP Markets",c:"t1",y:"2005",r:"ASIC (Avstraliya), CySEC, FSCA, FSA",z:"Sent-Vinsent yoki Avstraliya",ex:"100% DMA / ECN (Equinix NY4)",h:"Sidneyda tashkil etilgan, eng past xom spredlar boʻyicha koʻp karra gʻolib."},
  {n:"Eightcap",c:"t1",y:"2009",r:"ASIC, FCA, CySEC, SCB (Bagama)",z:"Bagama orollari (SCB)",ex:"STP / ECN (TradingView toʻgʻridan-toʻgʻri savdo)",h:"TradingView va kripto-derivativlar savdosi boʻyicha yetakchi Avstraliya brokeri."},
  {n:"Vantage Markets",c:"off",y:"2009",r:"ASIC, CIMA (Kayman), VFSC (Vanuatu)",z:"Vanuatu (VFSC) — 1:1000 yelka",ex:"ECN / STP (oneZero likvidlik koʻprigi)",h:"Institutsional likvidlik provayderlariga ulangan global multi-aktiv broker."},
  {n:"HFM (HotForex)",c:"off",y:"2010",r:"FCA, DFSA, FSCA, FSA (Seyshel)",z:"Sent-Vinsent / Seyshel orollari",ex:"STP / NDD (HFCopy nusxalash tizimi)",h:"3.5 milliondan ortiq jonli hisoblarga ega yirik xalqaro xolding."},
  {n:"FBS / JustMarkets",c:"off",y:"2012",r:"CySEC, FSA (Seyshel), FSCA",z:"Seyshel orollari (FSA)",ex:"STP / ECN (Raw Spread hisoblari)",h:"Osiyo va Yaqin Sharq treyderlari orasida mashhur koʻp funksiyali broker."},
  {n:"Libertex (Forex Club)",c:"t1",y:"1997",r:"CySEC (Kipr), FSC (Mavrikiy)",z:"Mavrikiy (FSC) yoki Kipr",ex:"STP / CFD ijro (25+ yillik tarix)",h:"1997-yildan beri faoliyat yurituvchi xalqaro moliyaviy texnologiyalar guruhi."},
  {n:"Plus500",c:"t1",y:"2008",r:"FCA, ASIC, CySEC, MAS, DFSA",z:"Buyuk Britaniya / Singapur / Seyshel",ex:"Market Maker (FTSE 250 ommaviy kompaniyasi)",h:"London fond birjasida sotiladigan, soddalashtirilgan CFD platformasi."},
  {n:"eToro",c:"t1",y:"2007",r:"FCA, ASIC, CySEC, FINRA (AQSh)",z:"Kipr / Avstraliya / Seyshel",ex:"STP / Social Copy-Trading tarmogʻi",h:"Dunyodagi eng yirik ijtimoiy treyding va aksiyalar nusxalash platformasi."},
  {n:"Darwinex",c:"t1",y:"2012",r:"FCA (Buyuk Britaniya), CNMV (Ispaniya)",z:"Buyuk Britaniya (FCA) yoki Ispaniya",ex:"100% DMA / ECN (Treyderlar kapitalini boshqarish)",h:"Treyder strategiyalarini birja aktiviga (DARWIN) aylantirib investorlar jalb qiluvchi London brokeri."}
];

// RO'YXATDAN O'TISH VA TASDIQLASH BAZASI
let usersDB = JSON.parse(localStorage.getItem('apmu_users') || '{}');
let pendingCode = null;
let tempUser = null;
const TOT_SECRET = "JBSWY3DPEHPK3PXP";

function toggleAuthMode(mode) {
  document.getElementById('box-login').style.display = mode === 'login' ? 'block' : 'none';
  document.getElementById('box-reg').style.display = mode === 'reg' ? 'block' : 'none';
}

function sendVerifyCode() {
  const contact = document.getElementById('regContact').value.trim();
  const pass = document.getElementById('regPass').value.trim();
  const role = document.getElementById('regRole').value;
  if (!contact || pass.length < 4) { alert("Gmail/Telefon va kamida 4 belgili parol kiriting!"); return; }
  
  // Haqiqiy tasdiqlash kodi yaratish (Real serverda EmailJS / Twilio SMS orqali boradi)
  pendingCode = String(Math.floor(100000 + Math.random() * 900000));
  tempUser = { contact, pass, role };
  document.getElementById('verifyStep').style.display = 'block';
  alert(`[APMU Xavfsizlik Xizmati]\n${contact} manziliga tasdiqlash kodi yuborildi.\n\n(Sinov rejimi uchun kodingiz: ${pendingCode})`);
}

function confirmRegistration() {
  const code = document.getElementById('regCodeInp').value.trim();
  if (!pendingCode || code !== pendingCode) {
    alert("XATO! Kiritilgan tasdiqlash kodi notoʻgʻri. Roʻyxatdan oʻtish rad etildi!");
    return;
  }
  usersDB[tempUser.contact] = tempUser;
  localStorage.setItem('apmu_users', JSON.stringify(usersDB));
  open2FASetup(tempUser);
}

function loginExistingUser() {
  const contact = document.getElementById('logContact').value.trim();
  const pass = document.getElementById('logPass').value.trim();
  if (!usersDB[contact] || usersDB[contact].pass !== pass) {
    alert("XATO! Bunday foydalanuvchi roʻyxatdan oʻtmagan yoki parol notoʻgʻri. Avval roʻyxatdan oʻting!");
    return;
  }
  tempUser = usersDB[contact];
  open2FASetup(tempUser);
}

// HAQIQIY RFC 6238 TOTP (GOOGLE AUTHENTICATOR ALGORITMI)
