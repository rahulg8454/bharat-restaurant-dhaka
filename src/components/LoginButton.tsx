import { useNavigate } from 'react-router-dom';
import { User, LogOut, UserCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

const LoginButton = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const t = (en: string, hi: string) => language === 'en' ? en : hi;

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (!user) {
    return (
      <button
        onClick={() => navigate('/login')}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full font-semibold text-xs transition-all hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--gold)), hsl(var(--saffron)))',
          color: 'hsl(16 82% 14%)',
          boxShadow: '0 2px 8px hsl(var(--gold) / 0.4)',
        }}
        title={t('Login', 'लॉगिन')}
      >
        <User className="w-4 h-4" />
        <span className="hidden sm:inline">{t('Login', 'लॉगिन')}</span>
      </button>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full font-semibold text-xs transition-all hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, hsl(140 65% 30%), hsl(140 55% 40%))',
          color: 'white',
          boxShadow: '0 2px 8px hsl(140 65% 20% / 0.4)',
        }}
        title={profile?.name || t('Profile', 'प्रोफाइल')}
      >
        <UserCircle className="w-4 h-4" />
        <span className="hidden sm:inline max-w-[60px] truncate">
          {profile?.name?.split(' ')[0] || t('Me', 'मैं')}
        </span>
      </button>

      {menuOpen && (
        <div className="absolute right-0 top-10 bg-white rounded-xl shadow-xl border border-gray-100 py-1 min-w-[140px] z-50">
          <button
            onClick={() => { navigate('/profile'); setMenuOpen(false); }}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <User className="w-4 h-4 text-gray-400" />
            {t('My Profile', 'मेरा प्रोफाइल')}
          </button>
          <div className="border-t border-gray-100" />
          <button
            onClick={async () => { await signOut(); setMenuOpen(false); navigate('/'); }}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            {t('Logout', 'लॉगआउट')}
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
