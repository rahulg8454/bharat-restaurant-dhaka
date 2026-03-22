import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useLanguage } from '../contexts/LanguageContext';

type AuthTab = 'email' | 'otp' | 'google';

const LoginPage = () => {
  const [tab, setTab] = useState<AuthTab>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const t = (en: string, hi: string) => language === 'en' ? en : hi;

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (isSignup) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: '+91' + phone,
      });
      if (error) throw error;
      setOtpSent(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const { error } = await supabase.auth.verifyOtp({
        phone: '+91' + phone,
        token: otp,
        type: 'sms',
      });
      if (error) throw error;
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/' },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{ background: 'hsl(36 40% 97%)' }}>
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: 'hsl(var(--foreground))' }}>
            {t('Welcome', 'स्वागत है')}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {t('Login to place your order', 'ऑर्डर करने के लिए लॉगिन करें')}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-lg overflow-hidden border border-gray-200 mb-5">
          {(['email', 'otp', 'google'] as AuthTab[]).map((t_) => (
            <button
              key={t_}
              onClick={() => { setTab(t_); setError(''); }}
              className={`flex-1 py-2 text-xs font-semibold transition-colors ${
                tab === t_
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {t_ === 'email' ? t('Email', 'ईमेल') :
               t_ === 'otp' ? t('OTP', 'OTP') :
               t('Google', 'Google')}
            </button>
          ))}
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Email / Password */}
        {tab === 'email' && (
          <form onSubmit={handleEmailAuth} className="space-y-4">
            <input
              type="email"
              placeholder={t('Email address', 'ईमेल पता')}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder={t('Password', 'पासवर्ड')}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-60"
            >
              {loading ? t('Please wait...', 'कृपया प्रतीक्षा करें...') :
                isSignup ? t('Sign Up', 'साइन अप करें') : t('Login', 'लॉगिन करें')}
            </button>
            <p className="text-center text-xs text-gray-500">
              {isSignup ? t('Already have an account?', 'पहले से अकाउंट है?') : t("Don't have an account?", 'अकाउंट नहीं है?')}
              {' '}
              <button type="button" onClick={() => setIsSignup(!isSignup)}
                className="text-green-600 font-semibold underline">
                {isSignup ? t('Login', 'लॉगिन') : t('Sign Up', 'साइन अप')}
              </button>
            </p>
          </form>
        )}

        {/* Mobile OTP */}
        {tab === 'otp' && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <span className="border rounded-lg px-3 py-3 text-sm bg-gray-50 text-gray-500">+91</span>
              <input
                type="tel"
                placeholder={t('Mobile number', 'मोबाइल नंबर')}
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                disabled={otpSent}
                className="flex-1 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-50"
              />
            </div>
            {!otpSent ? (
              <button
                onClick={handleSendOtp}
                disabled={loading || phone.length < 10}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-60"
              >
                {loading ? t('Sending...', 'भेज रहे हैं...') : t('Send OTP', 'OTP भेजें')}
              </button>
            ) : (
              <>
                <input
                  type="text"
                  placeholder={t('Enter OTP', 'OTP दर्ज करें')}
                  value={otp}
                  onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-center tracking-widest text-xl"
                  maxLength={6}
                />
                <button
                  onClick={handleVerifyOtp}
                  disabled={loading || otp.length < 6}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-60"
                >
                  {loading ? t('Verifying...', 'जांच रहे हैं...') : t('Verify OTP', 'OTP सत्यापित करें')}
                </button>
                <button onClick={() => { setOtpSent(false); setOtp(''); }}
                  className="w-full text-sm text-gray-500 underline">
                  {t('Change number', 'नंबर बदलें')}
                </button>
              </>
            )}
          </div>
        )}

        {/* Google */}
        {tab === 'google' && (
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-green-500 py-3 rounded-lg font-semibold text-gray-700 transition-colors disabled:opacity-60"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {loading ? t('Redirecting...', 'रीडायरेक्ट हो रहे हैं...') : t('Continue with Google', 'Google से जारी रखें')}
          </button>
        )}

        <button onClick={() => navigate('/')} className="w-full mt-5 text-sm text-gray-400 hover:text-gray-600">
          {t('← Back to Menu', '← मेनू पर वापस')}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
