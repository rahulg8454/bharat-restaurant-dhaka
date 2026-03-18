import { Phone, MapPin, Clock } from "lucide-react";
import logoImg from "@/assets/br-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = ({ onContactClick }: { onContactClick: () => void }) => {
  const { language } = useLanguage();

  return (
    <header className="relative overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url('/bg-pattern.png')`,
        backgroundSize: "200px 200px",
        backgroundRepeat: "repeat"
      }} />

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(ellipse at 10% 30%, hsl(38 90% 60% / 0.2) 0%, transparent 50%), radial-gradient(ellipse at 90% 70%, hsl(0 70% 50% / 0.15) 0%, transparent 50%)"
      }} />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border-[3px] opacity-[0.08]" style={{borderColor: "hsl(var(--gold))"}} />
      <div className="absolute top-8 -right-8 w-40 h-40 rounded-full border-[2px] opacity-[0.06]" style={{borderColor: "hsl(var(--gold-light))"}} />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border-[2px] opacity-[0.07]" style={{borderColor: "hsl(var(--gold))"}} />

      {/* Top shimmer bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] gradient-gold" />

      <div className="relative z-10 text-primary-foreground py-10 px-4 text-center max-w-2xl mx-auto">
        {/* Logo + Sanskrit blessing */}
        <div className="mb-3 flex flex-col items-center gap-3">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl bg-white flex items-center justify-center"
              style={{
                border: "3px solid hsl(var(--gold) / 0.8)",
                boxShadow: "0 0 0 6px hsl(var(--gold) / 0.25), 0 8px 32px hsl(0 0% 0% / 0.5), inset 0 0 0 1px hsl(var(--gold-light) / 0.3)"
              }}>
              <img src={logoImg} alt="Bharat Restaurant Logo" className="w-full h-full object-contain p-1" />
            </div>
          </div>
          <p className="text-base tracking-[0.2em] font-semibold shimmer-text">
            {language === 'en' ? "🌸 Om Shri Ganeshay Namah 🌸" : "🌸 ॐ श्री गणेशाय नमः 🌸"}
          </p>
          <p className="text-primary-foreground/70 text-sm tracking-wider">
            {language === 'en' ? "🙏 Welcome 🙏" : "🙏 आपका स्वागत है 🙏"}
          </p>
        </div>

        {/* Restaurant name */}
        <div className="mb-4">
          <h1 
            className="font-extrabold drop-shadow-2xl leading-tight"
            style={{
              fontSize: "clamp(3rem, 12vw, 5.5rem)",
              fontFamily: "'Tiro Devanagari Hindi', 'Baloo 2', serif",
              textShadow: "0 2px 16px hsl(0 0% 0% / 0.4), 0 0 40px hsl(var(--gold) / 0.3)",
              letterSpacing: "0.04em",
              background: "linear-gradient(135deg, #fff 0%, hsl(var(--gold-light)) 50%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            {language === 'en' ? "Bharat Restaurant" : "भारत रेस्टोरेंट"}
          </h1>
                 {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-3 mb-2">
            <div className="h-px flex-1 max-w-[80px] opacity-50" style={{background: "linear-gradient(to right, transparent, hsl(var(--gold)))"}} />
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{background: "hsl(var(--gold))"}} />
              <span className="text-lg" style={{color: "hsl(var(--gold))"}}>✦</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{background: "hsl(var(--gold))"}} />
            </div>
            <div className="h-px flex-1 max-w-[80px] opacity-50" style={{background: "linear-gradient(to left, transparent, hsl(var(--gold)))"}} />
          </div>


        {/* 100% Pure Veg badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-4 shadow-lg" style={{
          background: "linear-gradient(135deg, hsl(140 65% 18% / 0.95), hsl(140 55% 24% / 0.95))",
          border: "1.5px solid hsl(140 60% 42% / 0.6)",
          boxShadow: "0 4px 16px hsl(140 65% 20% / 0.4), inset 0 1px 0 hsl(140 60% 50% / 0.2)"
        }}>
          <span className="text-base">🌿</span>
          <span style={{color: "hsl(140 70% 72%)"}}>
            {language === 'en' ? "100% Pure Vegetarian Restaurant" : "100% शुद्ध शाकाहारी रेस्टोरेंट"}
          </span>
        </div>

        {/* Taglines */}
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-1 font-bold" style={{textShadow: "0 1px 4px hsl(0 0% 0% / 0.3)"}}>
          {language === 'en' ? "🍛 Pure Veg Food — Taste Like Home 🍛" : "🍛 शुद्ध शाकाहारी भोजन — घर जैसा स्वाद 🍛"}
        </p>
        <p className="text-primary-foreground/60 text-sm mb-5 italic font-medium">
          {language === 'en' ? '"Where every bite speaks mother\'s love"' : '"जहाँ हर निवाला बोले — माँ के हाथ का प्यार"'}
        </p>

        {/* Birthday / Celebration Box */}
        <div className="rounded-2xl px-5 py-4 mb-5 mx-auto max-w-sm relative overflow-hidden" style={{
          background: "linear-gradient(135deg, hsl(40 80% 55% / 0.14), hsl(30 70% 40% / 0.1))",
          border: "1.5px solid hsl(var(--gold) / 0.35)",
          boxShadow: "inset 0 1px 0 hsl(var(--gold-light) / 0.15)"
        }}>
          <div className="absolute top-0 left-0 right-0 h-[1.5px]" style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.6), transparent)"
          }} />
          <p className="text-sm font-semibold leading-relaxed">
            🎂 <span className="font-bold" style={{color: "hsl(var(--gold-light))\"}}>
              {language === 'en' ? "For Birthdays, Anniversaries & Celebrations" : "बर्थडे पार्टी, एनिवर्सरी व सेलिब्रेशन के लिए"}
            </span>
            <br />
            {language === 'en' ? "Customized Cakes & Orders Available" : "कस्टमाइज़्ड केक व ऑर्डर उपलब्ध"}
            <br />
            <span className="font-bold" style={{color: "hsl(var(--gold-light))\"}}>
              {language === 'en' ? "— Give us a chance to serve you 🎉" : "— एक बार सेवा का अवसर अवश्य दें 🎉"}
            </span>
          </p>
        </div>

        {/* Wait time note */}
        <p className="text-primary-foreground/50 text-xs mb-5 italic">
          {language === 'en' ? "⏳ Please wait 20-25 minutes after ordering" : "⏳ ऑर्डर के बाद 20-25 मिनट प्रतीक्षा करें"}
        </p>

        {/* Info pills */}
        <div className="flex flex-col items-center gap-2.5 mb-6">
          <a
            href="https://maps.app.goo.gl/b3CPJy7fJHVZFhJ98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: "hsl(var(--primary-foreground) / 0.1)",
              border: "1px solid hsl(var(--primary-foreground) / 0.18)",
              backdropFilter: "blur(8px)"
            }}
          >
            <MapPin className="w-4 h-4 flex-shrink-0" style={{color: "hsl(var(--gold))\"}} />
            <span>
              {language === 'en' 
                ? "Opp. SBI Bank, Gandhi Chowk, Dhaka, East Champaran" 
                : "एसबीआई बैंक के सामने, गांधी चौक, ढाका, पूर्वी चम्पारण"}
            </span>
          </a>
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-sm font-medium" style={{
            background: "hsl(var(--primary-foreground) / 0.08)",
            border: "1px solid hsl(var(--primary-foreground) / 0.15)",
            backdropFilter: "blur(8px)"
          }}>
            <Clock className="w-4 h-4 flex-shrink-0" style={{color: "hsl(var(--gold))\"}} />
            <span>
              {language === 'en' 
                ? "7:00 AM — 11:00 PM " 
                : "सुबह 7:00 AM — रात 11:00 PM"}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-extrabold text-xl transition-all hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--saffron)))",
              color: "hsl(16 82% 14%)",
              boxShadow: "0 6px 28px hsl(var(--gold) / 0.5), 0 2px 8px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(44 100% 80% / 0.4)"
            }}
          >
            <Phone className="w-6 h-6" />
            {language === 'en' ? "Order Now" : "अभी ऑर्डर करें"}
          </button>
        </div>

        {/* Phone numbers */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="flex flex-col items-center gap-0.5">
            <a href="tel:7979745730" className="inline-flex items-center gap-1.5 font-bold text-base hover:underline transition-colors" style={{color: "hsl(var(--gold))\"}}>
              📞 +91-7979745730
              <span className="text-xs" style={{color: "hsl(var(--primary-foreground) / 0.55)\"}}>Vivek Gupta</span>
            </a>
          </div>
          <span className="hidden sm:flex text-primary-foreground/20 self-center text-xl">|</span>
          <div className="flex flex-col items-center gap-0.5">
            <a href="tel:9471217870" className="inline-flex items-center gap-1.5 font-bold text-base hover:underline transition-colors" style={{color: "hsl(var(--gold))\"}}>
              📞 +91-9471217870
              <span className="text-xs" style={{color: "hsl(var(--primary-foreground) / 0.55)\"}}>Niraj Gupta</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom shimmer bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] gradient-gold" />
    </header>
  );
};

export default HeroSection;
