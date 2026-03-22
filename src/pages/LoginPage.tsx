import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, ArrowLeft, MessageSquare } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = (en: string, hi: string) => language === 'en' ? en : hi;

  // Step: 'phone' | 'otp'
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const formatPhone = (num: string) => {
    const cleaned = num.replace(/\D/g, '');
    if (cleaned.startsWith('91') && cleaned.length === 12) return '+' + cleaned;
    if (cleaned.length === 10) return '+91' + cleaned;
    return '+' + cleaned;
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const formatted = formatPhone(phoneNumber);
      const { error } = await supabase.auth.signInWithOtp({ phone: formatted });
      if (error) throw error;
      setStep('otp');
      setMessage(t('OTP sent to your mobile number!', 'OTP आपके मोबाइल नंबर पर भेजा गया!'));
    } catch (err: any) {
      setError(err.message || t('Failed to send OTP. Please try again.', 'OTP भेजने में विफल। कृपया पुनः प्रयास करें।'));
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const formatted = formatPhone(phoneNumber);
      const { error } = await supabase.auth.verifyOtp({
        phone: formatted,
        token: otp,
        type: 'sms',
      });
      if (error) throw error;
      navigate('/');
    } catch (err: any) {
      setError(err.message || t('Invalid OTP. Please try again.', 'गलत OTP। कृपया पुनः प्रयास करें।'));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || t('Google login failed. Please try again.', 'Google लॉगिन विफल। कृपया पुनः प्रयास करें।'));
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10"
      style={{ background: 'hsl(36 40% 97%)' }}
    >
      <div className="w-full max-w-sm">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('Back to Menu', 'मेनू पर वापस जाएं')}
        </button>

        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: 'linear-gradient(135deg, hsl(var(--gold)), hsl(var(--saffron)))' }}
          >
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            {t('Welcome Back!', 'स्वागत है!')}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {t('Login to track your orders', 'ऑर्डर ट्रैक करने के लिए लॉगिन करें')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          {/* Error message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}
          {/* Success message */}
          {message && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              {message}
            </div>
          )}

          {step === 'phone' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  {t('Mobile Number', 'मोबाइल नंबर')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 font-medium text-sm">🇮🇳 +91</span>
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="9876543210"
                    required
                    maxLength={10}
                    className="w-full pl-20 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">{t('Enter 10-digit Indian mobile number', '10 अंक का भारतीय मोबाइल नंबर दर्ज करें')}</p>
              </div>
              <button
                type="submit"
                disabled={loading || phoneNumber.replace(/\D/g, '').length < 10}
                className="w-full py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, hsl(140 65% 30%), hsl(140 55% 40%))', color: 'white' }}
              >
                <MessageSquare className="w-4 h-4" />
                {loading ? t('Sending OTP...', 'OTP भेज रहे हैं...') : t('Send OTP', 'OTP भेजें')}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {t('Enter OTP', 'OTP दर्ज करें')}
                  </label>
                  <button
                    type="button"
                    onClick={() => { setStep('phone'); setError(''); setMessage(''); }}
                    className="text-xs text-green-600 hover:underline"
                  >
                    {t('Change number', 'नंबर बदलें')}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  {t(`OTP sent to +91${phoneNumber}`, `+91${phoneNumber} पर OTP भेजा गया`)}
                </p>
                <input
                  type="number"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="123456"
                  required
                  maxLength={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-center tracking-widest text-lg font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading || otp.length < 4}
                className="w-full py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-50"
                style={{ background: 'linear-gradient(135deg, hsl(140 65% 30%), hsl(140 55% 40%))', color: 'white' }}
              >
                {loading ? t('Verifying...', 'सत्यापित कर रहे हैं...') : t('Verify & Login', 'OTP सत्यापित करें')}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-white text-gray-400">{t('or', 'या')}</span>
            </div>
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {t('Continue with Google', 'Google से जारी रखें')}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          {t(
            'By continuing, you agree to our Terms of Service',
            'जारी रखने से आप हमारी सेवा शर्तों से सहमत हैं'
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
