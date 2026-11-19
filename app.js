const B = [
  {n:"Swissquote Bank",c:"t1",y:"1996",r:"FINMA (Shveytsariya), FCA, DFSA",z:"Shveytsariya (FINMA) yoki BAA",ex:"100% A-Book (SIX birjasi)",h:"1996-yilda tashkil etilgan Shveytsariya bank-brokeri. Eng yuqori bank kafolatiga ega."},
  {n:"WouFX",c:"off",y:"2019",r:"MISA (Komor orollari) / Ofshor",z:"Ofshor zona (MDH va Osiyo)",ex:"Gibrid (STP / A-Book va B-Book)",h:"Zamonaviy texnologik broker. Yuqori kredit yelkasi, tezkor kripto/karta oʻtkazmalari va MT5 bilan mashhur."},
  {n:"Interactive Brokers",c:"t1",y:"1978",r:"SEC, FINRA (AQSh), FCA, CBI",z:"AQSh (IB LLC) yoki Irlandiya",ex:"100% DMA (150+ jahon birjalari)",h:"NASDAQ birjasida sotiladigan gigant broker. Institutsional treyderlar uchun №1 tanlov."},
  {n:"Saxo Bank",c:"t1",y:"1992",r:"FSA (Daniya), FINMA, FCA",z:"Daniya yoki Shveytsariya",ex:"100% A-Book (Banklararo likvidlik)",h:"Kopengagenda tashkil etilgan Yevropa investitsiya banki. 70 000+ birja instrumentlari mavjud."},
  {n:"IG Markets",c:"t1",y:"1974",r:"FCA (Buyuk Britaniya), ASIC, BaFin",z:"Buyuk Britaniya yoki Bermud",ex:"A-Book / Ichki xedjirlash",h:"1974-yilda ochilgan birinchi CFD brokeri. London fond birjasida (FTSE 250) roʻyxatga olingan."},
  {n:"CMC Markets",c:"t1",y:"1989",r:"FCA, ASIC, BaFin, MAS",z:"Buyuk Britaniya yoki Avstraliya",ex:"100% STP / DMA",h:"London fond birjasida roʻyxatga olingan yuqori texnologiyali broker."},
  {n:"OANDA",c:"t1",y:"1996",r:"CFTC/NFA (AQSh), FCA, ASIC",z:"AQSh, Yevropa yoki BVI",ex:"A-Book / Avto-xedjirlash",h:"Valyuta kurslari maʼlumotlari boʻyicha jahon standarti. 25+ yillik benuqson tarix."},
  {n:"FOREX.com",c:"t1",y:"2001",r:"CFTC/NFA, FCA, ASIC",z:"AQSh, Buyuk Britaniya yoki Kayman",ex:"STP / ECN (StoneX Group)",h:"Fortune 500 roʻyxatidagi StoneX korporatsiyasiga tegishli yirik broker."},
  {n:"Dukascopy Bank",c:"t1",y:"2004",r:"FINMA (Shveytsariya)",z:"Shveytsariya (FINMA bank hisobi)",ex:"100% ECN (SWFX bozori)",h:"Jenevada joylashgan Shveytsariya banki. JForex platformasi yaratuvchisi."},
  {n:"Pepperstone",c:"t1",y:"2010",r:"ASIC, FCA, DFSA, SCB",z:"Avstraliya, BAA yoki Bagama",ex:"100% NDD / ECN-STP",h:"Melburnda tashkil etilgan. Skalping va oltin savdosi boʻyicha eng tez ijrochi."},
  {n:"IC Markets",c:"off",y:"2007",r:"ASIC, CySEC, FSA (Seyshel)",z:"Seyshel orollari (1:1000 yelka)",ex:"100% True ECN (Equinix NY4)",h:"Dunyodagi eng katta oylik savdo aylanmasiga ($1.5 trln+) ega chakana ECN broker."},
  {n:"Exness",c:"off",y:"2008",r:"FCA, CySEC, FSA (Seyshel)",z:"Seyshel orollari yoki Kyurasao",ex:"Gibrid (A-Book va B-Book)",h:"Oylik $4 trillion savdo hajmi va bir soniyada avtomatik pul yechish bilan mashhur."},
  {n:"XM Global",c:"off",y:"2009",r:"CySEC, ASIC, DFSA, FSC",z:"Beliz (FSC) — 1:1000 yelka",ex:"Market Maker / STP (No Requotes)",h:"190+ davlatda 10 milliondan ziyod mijozlarga ega xalqaro guruh."},
  {n:"RoboForex",c:"off",y:"2009",r:"FSC (Beliz)",z:"Beliz (FSC) ofshor zonasi",ex:"STP / ECN (Prime va ProCent)",h:"CopyFX investitsiya tizimi va sent hisoblari bilan mashhur broker."},
  {n:"FBS",c:"off",y:"2009",r:"FSC (Beliz), ASIC, CySEC",z:"Beliz (FSC) — 1:3000 yelka",ex:"STP / Market Maker",h:"Osiyo va rivojlanayotgan bozorlarda 27 milliondan ortiq treyderlarga xizmat qiladi."},
  {n:"Octa (OctaFX)",c:"off",y:"2011",r:"MISA (Komor), FSCA",z:"Sent-Vinsent / MISA ofshor",ex:"STP / NDD (Svopsiz hisoblar)",h:"Kriptovalyuta oʻtkazmalari va komissiyasiz savdo shartlari bilan tanilgan."},
  {n:"Tickmill",c:"t1",y:"2014",r:"FCA, CySEC, FSA (Seyshel)",z:"Seyshel orollari yoki Britaniya",ex:"100% DMA / ECN (0.0 pips)",h:"Professional skalperlar va algoritmik treyderlar uchun moʻljallangan broker."},
  {n:"Admirals",c:"t1",y:"2001",r:"FCA, ASIC, CySEC, JSC",z:"Iordaniya (JSC) yoki Kipr",ex:"STP / ECN",h:"20 yildan ortiq tajribaga ega Yevropa investitsiya firmasi."},
  {n:"FxPro",c:"t1",y:"2006",r:"FCA, CySEC, FSCA, SCB",z:"Bagama orollari (SCB) — 1:500",ex:"100% NDD (cTrader va MT5)",h:"100 dan ortiq xalqaro mukofotlar sohibi boʻlgan nufuzli broker."},
  {n:"AvaTrade",c:"t1",y:"2006",r:"CBI (Irlandiya), ASIC, ADGM",z:"Britaniya Virjiniya orollari",ex:"Market Maker (Qatʼiy spred)",h:"Dublinda tashkil etilgan, AvaProtect xavfni sugʻurtalash tizimi yaratuvchisi."},
  {n:"Alpari",c:"off",y:"1998",r:"MISA (Komor orollari)",z:"Komor orollari (MDH zonasi)",ex:"ECN / STP (PAMM tizimi)",h:"MDH davlatlarida Forex va PAMM investitsiya tizimini ommalashtirgan brend."},
  {n:"AMarkets",c:"off",y:"2007",r:"FSA (Sent-Vinsent), MISA",z:"Sent-Vinsent va Grenadin",ex:"100% STP / ECN",h:"Verify My Trade mustaqil auditi tomonidan orderlar ijrosi tasdiqlangan."},
  {n:"FXOpen",c:"t1",y:"2005",r:"FCA, ASIC, Nevis",z:"Nevis yoki Buyuk Britaniya",ex:"100% True ECN",h:"MT4/MT5 da ECN agregatorini birinchi boʻlib joriy qilgan broker."},
  {n:"FP Markets",c:"t1",y:"2005",r:"ASIC, CySEC, FSA",z:"Sent-Vinsent yoki Avstraliya",ex:"100% DMA / ECN",h:"Sidneyda tashkil etilgan, eng past xom spredlar boʻyicha koʻp karra gʻolib."},
  {n:"Eightcap",c:"t1",y:"2009",r:"ASIC, FCA, SCB",z:"Bagama orollari (SCB)",ex:"STP / ECN (TradingView)",h:"TradingView va kripto-derivativlar savdosi boʻyicha yetakchi broker."},
  {n:"Vantage",c:"off",y:"2009",r:"ASIC, CIMA, VFSC",z:"Vanuatu (VFSC) — 1:1000",ex:"ECN / STP",h:"Institutsional likvidlik provayderlariga ulangan global broker."},
  {n:"HFM (HotForex)",c:"off",y:"2010",r:"FCA, DFSA, FSCA, FSA",z:"Sent-Vinsent / Seyshel",ex:"STP / NDD (HFCopy)",h:"3.5 milliondan ortiq jonli hisoblarga ega yirik xalqaro xolding."},
  {n:"JustMarkets",c:"off",y:"2012",r:"CySEC, FSA (Seyshel)",z:"Seyshel orollari (FSA)",ex:"STP / ECN",h:"Osiyo va Yaqin Sharq treyderlari orasida mashhur broker."},
  {n:"Libertex",c:"t1",y:"1997",r:"CySEC (Kipr), FSC",z:"Mavrikiy (FSC) yoki Kipr",ex:"STP / CFD ijro",h:"1997-yildan beri faoliyat yurituvchi xalqaro moliyaviy guruh."},
  {n:"Plus500",c:"t1",y:"2008",r:"FCA, ASIC, MAS, DFSA",z:"Buyuk Britaniya / Seyshel",ex:"Market Maker (FTSE 250)",h:"London fond birjasida sotiladigan CFD platformasi."},
  {n:"eToro",c:"t1",y:"2007",r:"FCA, ASIC, CySEC, FINRA",z:"Kipr / Avstraliya / Seyshel",ex:"STP / Social Copy-Trading",h:"Dunyodagi eng yirik ijtimoiy treyding va aksiyalar nusxalash platformasi."},
  {n:"Darwinex",c:"t1",y:"2012",r:"FCA (Buyuk Britaniya)",z:"Buyuk Britaniya (FCA)",ex:"100% DMA / ECN",h:"Treyder strategiyalarini birja aktiviga (DARWIN) aylantiruvchi London brokeri."}
];

let usersDB = JSON.parse(localStorage.getItem('apmu_users') || '{}');
let pendingCode = null, tempUser = null, curC = 'all';
const TOT_SECRET = "JBSWY3DPEHPK3PXP";

function toggleAuthMode(m) {
  document.getElementById('box-login').style.display = m === 'login' ? 'block' : 'none';
  document.getElementById('box-reg').style.display = m === 'reg' ? 'block' : 'none';
}

function sendVerifyCode() {
  const contact = document.getElementById('regContact').value.trim();
  const pass = document.getElementById('regPass').value.trim();
  const role = document.getElementById('regRole').value;
  if (!contact || pass.length < 4) { alert("Gmail/Telefon va kamida 4 belgili parol kiriting!"); return; }
  pendingCode = String(Math.floor(100000 + Math.random() * 900000));
  tempUser = { contact, pass, role };
  document.getElementById('verifyStep').style.display = 'block';
  alert(contact + " manziliga tasdiqlash kodi yuborildi.\nTasdiqlash kodingiz: " + pendingCode);
}

function confirmRegistration() {
  if (!pendingCode || document.getElementById('regCodeInp').value.trim() !== pendingCode) {
    alert("XATO! Tasdiqlash kodi notoʻgʻri."); return;
  }
  usersDB[tempUser.contact] = tempUser;
  localStorage.setItem('apmu_users', JSON.stringify(usersDB));
  open2FASetup(tempUser);
}

function loginExistingUser() {
  const c = document.getElementById('logContact').value.trim();
  const p = document.getElementById('logPass').value.trim();
  if (!usersDB[c] || usersDB[c].pass !== p) {
    alert("XATO! Bunday foydalanuvchi roʻyxatdan oʻtmagan yoki parol notoʻgʻri."); return;
  }
  tempUser = usersDB[c];
  open2FASetup(tempUser);
}

function base32ToBytes(b32) {
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"; let bits = "", bytes = [];
  for (let i = 0; i < b32.length; i++) {
    const v = a.indexOf(b32.charAt(i).toUpperCase());
    if (v >= 0) bits += v.toString(2).padStart(5, '0');
  }
  for (let i = 0; i + 8 <= bits.length; i += 8) bytes.push(parseInt(bits.substr(i, 8), 2));
  return new Uint8Array(bytes);
}

async function computeRealTOTP(secret) {
  const keyBytes = base32ToBytes(secret);
  const counter = Math.floor(Math.floor(Date.now() / 1000) / 30);
  const msg = new ArrayBuffer(8);
  new DataView(msg).setUint32(4, counter, false);
  const k = await crypto.subtle.importKey("raw", keyBytes, { name: "HMAC", hash: "SHA-1" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", k, msg));
  const off = sig[sig.length - 1] & 0xf;
  const bin = ((sig[off] & 0x7f) << 24) | ((sig[off + 1] & 0xff) << 16) | ((sig[off + 2] & 0xff) << 8) | (sig[off + 3] & 0xff);
  return String(bin % 1000000).padStart(6, '0');
}

function open2FASetup(u) {
  const url = "otpauth://totp/APMU:" + encodeURIComponent(u.contact) + "?secret=" + TOT_SECRET + "&issuer=APMU";
  document.getElementById('qrImg').src = "https://qrserver.com" + encodeURIComponent(url);
  document.getElementById('m-2fa').classList.add('open');
}

async function verifyReal2FA() {
  const code = document.getElementById('tinp').value.trim();
  const valid = await computeRealTOTP(TOT_SECRET);
  if (code !== valid) {
    alert("XATO! Google Authenticator ilovangizdagi joriy 6 xonali kod bilan mos kelmadi!"); return;
  }
  document.getElementById('m-2fa').classList.remove('open');
  if (tempUser.role === 'trader' || tempUser.role === 'ret') showS('s-kyc');
  else inApp();
}

function doneKYC() {
  if (!document.getElementById('k1').value.trim() || !document.getElementById('k2').value.trim()) {
