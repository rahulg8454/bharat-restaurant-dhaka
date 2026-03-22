import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

const ProfilePage = () => {
  const { user, profile, signOut, refreshProfile } = useAuth();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { language } = useLanguage();

  const t = (en: string, hi: string) => language === 'en' ? en : hi;

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (profile) {
      setName(profile.name || '');
      setPhone(profile.phone || '');
      setAddress(profile.address || '');
    }
  }, [user, profile, navigate]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    setError('');
    setSaved(false);
    try {
      const { error } = await supabase
        .from('users')
        .upsert({
          id: user.id,
          name,
          phone,
          address,
        });
      if (error) throw error;
      await refreshProfile();
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen px-4 py-10"
      style={{ background: 'hsl(36 40% 97%)' }}>
      <div className="max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="text-sm text-gray-500 hover:text-gray-800">
            {t('← Menu', '← मेनू')}
          </button>
          <h1 className="text-xl font-bold" style={{ color: 'hsl(var(--foreground))' }}>
            {t('My Profile', 'मेरा प्रोफाइल')}
          </h1>
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:text-red-700 font-semibold"
          >
            {t('Logout', 'लॉगआउट')}
          </button>
        </div>

        {/* User email display */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
          <p className="text-xs text-gray-400 mb-1">{t('Logged in as', 'लॉगिन हैं')}</p>
          <p className="font-semibold text-sm text-gray-700 truncate">
            {user?.email || user?.phone || t('User', 'उपयोगकर्ता')}
          </p>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSave} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
          <h2 className="font-bold text-gray-800 mb-2">
            {t('Delivery Details', 'डिलीवरी जानकारी')}
          </h2>

          <div>
            <label className="block text-xs text-gray-500 mb-1">
              {t('Full Name', 'पूरा नाम')} *
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={t('Enter your name', 'अपना नाम दर्ज करें')}
              required
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">
              {t('Mobile Number', 'मोबाइल नंबर')} *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder={t('10-digit mobile number', '10 अंक का मोबाइल नंबर')}
              required
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">
              {t('Delivery Address', 'डिलीवरी पता')} *
            </label>
            <textarea
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder={t('House no., Street, Area, City', 'घर नंबर, गली, ऐरिया, शहर')}
              required
              rows={3}
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          {saved && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
              {t('✓ Profile saved successfully!', '✓ प्रोफाइल सफलतापूर्वक सहेजा गया!')}
            </div>
          )}

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-60"
          >
            {saving ? t('Saving...', 'सहेज रहे हैं...') : t('Save Profile', 'प्रोफाइल सहेजें')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
