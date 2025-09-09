// simple multilingual texts and small interactivity
const texts = {
  en: {
    heroTitle: "Reliable CCTV & Security — Installed Fast, Monitored 24/7",
    heroSub: "Design • Supply • Professional Installation • AMC. Live mobile monitoring & local support.",
    services: ["CCTV Cameras (Indoor/Outdoor)","DVR / NVR Setup & Hard Disk","Mobile Live Monitoring","Installation & Service"],
    contactCTA: "Call / WhatsApp: 84449-80008"
  },
  hi: {
    heroTitle: "Reliable CCTV & Security — 24x7 निगरानी",
    heroSub: "डिज़ाइन • सप्लाई • इंस्टॉलेशन • AMC। मोबाइल पर लाइव मॉनिटरिंग।",
    services: ["CCTV कैमरा (इनडोर/आउटडोर)","DVR / NVR सेटअप","मोबाइल लाइव मॉनिटरिंग","इंस्टॉलेशन और सर्विस"],
    contactCTA: "कॉल / व्हाट्सएप: 84449-80008"
  },
  bn: {
    heroTitle: "Reliable CCTV & Security — ২৪×৭ নজরদারি",
    heroSub: "ডিজাইন • সরবরাহ • ইনস্টলেশন • AMC। মোবাইলে লাইভ মনিটরিং।",
    services: ["CCTV ক্যামেরা (ইনডোর/আউটডোর)","DVR / NVR সেটআপ","মোবাইল লাইভ মনিটরিং","ইনস্টলেশন ও সার্ভিস"],
    contactCTA: "কল / হোয়াটসঅ্যাপ: 84449-80008"
  }
};

function setLang(lang){
  const t = texts[lang] || texts.en;
  document.getElementById('hero-title').textContent = t.heroTitle;
  document.getElementById('hero-sub').textContent = t.heroSub;
  const servicesList = document.getElementById('services-list');
  servicesList.innerHTML = '';
  t.services.forEach(s=>{ const li=document.createElement('li'); li.textContent=s; servicesList.appendChild(li); });
  document.getElementById('year').textContent = new Date().getFullYear();
}
document.getElementById('lang').addEventListener('change', (e)=> setLang(e.target.value));
setLang('en');
