import { useState, useEffect } from "react";
import { menuData } from "@/data/menuData";
import HeroSection from "@/components/HeroSection";
import CategoryNav from "@/components/CategoryNav";
import MenuSection from "@/components/MenuSection";
import ContactModal from "@/components/ContactModal";
import FloatingContact from "@/components/FloatingContact";
import DeveloperCredit from "@/components/DeveloperCredit";
import LanguageToggle from "@/components/LanguageToggle";
import CartButton from "@/components/CartButton";
import CartModal from "@/components/CartModal";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImg from "@/assets/br-logo.png";
import StickyCartBar from "@/components/StickyCartBar";
import LoginButton from "@/components/LoginButton";
import SearchButton from "@/components/SearchButton";
import SearchModal from "@/components/SearchModal";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [contactOpen, setContactOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { language } = useLanguage();

  const handleSelect = (id: string) => {
    setActiveCategory(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    menuData.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Fixed top bar with Language Toggle, Login and Cart */}
{/* LEFT SIDE buttons */}
        <div className="fixed top-3 right-3 z-50">

  <LanguageToggle />

</div>


{/* RIGHT SIDE  */}
<div className="fixed top-3 left-3 z-50 flex flex-col items-start gap-2">

  <LoginButton />

  <SearchButton onClick={() => setSearchOpen(true)} />

  <CartButton onClick={() => setCartOpen(true)} />

</div>
      <HeroSection onContactClick={() => setContactOpen(true)} />
      <CategoryNav activeCategory={activeCategory} onSelect={handleSelect} />
      <main className="pb-28">
        {menuData.map((cat) => (
          <MenuSection key={cat.id} category={cat} />
        ))}
      </main>
      {/* Footer */}
      <footer>
        {/* Gold top border */}
        <div className="h-[3px] gradient-gold" />
        <div
          className="text-center py-8 px-4"
          style={{
            background: "hsl(36 40% 97% / 0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)"
          }}
        >
          {/* Restaurant logo + name */}
          <div className="mb-3 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-lg"
              style={{border: "2px solid hsl(var(--gold) / 0.6)", boxShadow: "0 0 0 3px hsl(var(--gold) / 0.15), 0 4px 16px hsl(0 0% 0% / 0.12)"}}>
              <img src={logoImg} alt="Bharat Restaurant" className="w-full h-full object-cover" />
            </div>
            <p className="text-2xl font-extrabold" style={{color: "hsl(var(--foreground))"}}>
              {language === "en" ? "Bharat Restaurant" : "भारत रेस्टोरेंट"}
            </p>
            <div className="flex items-center justify-center gap-2 mt-0.5">
              <div className="h-px w-12" style={{background: "hsl(var(--gold) / 0.4)"}} />
              <span className="text-xs" style={{color: "hsl(var(--gold))"}}>✦</span>
              <div className="h-px w-12" style={{background: "hsl(var(--gold) / 0.4)"}} />
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/b3CPJy7fJHVZFhJ98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm mb-1.5 inline-block hover:underline transition-all"
            style={{color: "hsl(var(--muted-foreground))"}}
          >
            {language === "en"
              ? "📍 Opp. SBI Bank, Gandhi Chowk, Dhaka, East Champaran"
              : "📍 एसबीआई बैंक के सामने, गांधी चौक, ढाका, पूर्वी चम्पारण"}
          </a>
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-1.5 text-sm" style={{color: "hsl(var(--muted-foreground))"}}>
            <div className="flex flex-col items-center gap-0.5">
              <span>📞 +91-7979745730</span>
              <span className="text-xs" style={{color: "hsl(var(--muted-foreground) / 0.7)"}}> Vivek Gupta</span>
            </div>
            <span className="hidden sm:inline opacity-40">|</span>
            <div className="flex flex-col items-center gap-0.5">
              <span>📞 +91-9471217870</span>
              <span className="text-xs" style={{color: "hsl(var(--muted-foreground) / 0.7)"}}> Niraj Gupta</span>
            </div>
          </div>
          <p className="text-sm font-medium mb-1" style={{color: "hsl(var(--muted-foreground))"}}>
            {language === "en" ? "🕐 Mon–Sun: 7:00 AM — 11:00 PM" : "🕐 सुबह 7:00 — रात 11:00 बजे"}
          </p>
          <div className="mt-4 pt-4" style={{borderTop: "1px solid hsl(var(--border))"}}>
            <p className="text-xs" style={{color: "hsl(var(--muted-foreground) / 0.7)"}}>
              {language === "en"
                ? "© Bharat Restaurant — All rights reserved"
                : "© भारत रेस्टोरेंट — सभी अधिकार सुरक्षित"}
            </p>
          </div>
        </div>
        <DeveloperCredit />
      </footer>
      <FloatingContact onClick={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <StickyCartBar onClick={() => setCartOpen(true)} />
    </div>
  );
};

export default Index;
