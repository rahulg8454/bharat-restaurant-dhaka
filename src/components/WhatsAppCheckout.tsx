import { MessageCircle, Phone, User } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const WHATSAPP_NUMBER = '917979745730';

interface WhatsAppCheckoutProps {
  onClose: () => void;
}

export const WhatsAppCheckout = ({ onClose }: WhatsAppCheckoutProps) => {
  const { cart, totalPrice, clearCart } = useCart();
  const { language, t } = useLanguage();
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const handleWhatsAppOrder = () => {
    // If not logged in, redirect to login first
    if (!user) {
      navigate('/login');
      onClose();
      return;
    }

    const items = cart.map((item) => {
      const displayName = language === 'en' ? item.nameEn : item.name;
      const option = item.quantity ? ` (${item.quantity})` : '';
      return `• ${displayName}${option} x${item.qty} - \u20B9${parseFloat(item.price.split('/')[0]) * item.qty}`;
    }).join('\n');

    // Build customer info block
    const customerName = profile?.name || t('Guest', 'गेस्ट');
    const customerPhone = profile?.phone || t('Not provided', 'नहीं दिया');
    const customerAddress = profile?.address || t('Not provided', 'नहीं दिया');

    const message = encodeURIComponent(
      `\uD83D\uDE4F *${t('Bharat Restaurant - New Order', '\u092D\u093E\u0930\u0924 \u0930\u0947\u0938\u094D\u091F\u094B\u0930\u0947\u0902\u091F - \u0928\u092F\u093E \u0911\u0930\u094D\u0921\u0930')}*\n\n` +
      `\uD83D\uDC64 *${t('Name', '\u0928\u093E\u092E')}:* ${customerName}\n` +
      `\uD83D\uDCF1 *${t('Phone', '\u092B\u093C\u094B\u0928')}:* ${customerPhone}\n` +
      `\uD83D\uDCCD *${t('Address', '\u092A\u0924\u093E')}:* ${customerAddress}\n\n` +
      `\uD83D\uDED2 *${t('Order Items', '\u0911\u0930\u094D\u0921\u0930 \u0906\u0907\u091F\u092E')}:*\n${items}\n\n` +
      `*${t('Total', '\u0915\u0941\u0932')}: \u20B9${totalPrice.toFixed(0)}*\n\n` +
      `\u26A0\uFE0F ${t('Please call to confirm the order', '\u0911\u0930\u094D\u0921\u0930 \u0915\u0928\u094D\u092B\u0930\u094D\u092E \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u0949\u0932 \u0915\u0930\u0947\u0902')}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    clearCart();
    onClose();
  };

  // Show profile warning if user is logged in but no profile filled
  const profileIncomplete = user && (!profile?.name || !profile?.phone || !profile?.address);

  return (
    <div className="space-y-3">
      {/* Profile incomplete warning */}
      {profileIncomplete && (
        <div
          className="flex items-center gap-2 p-3 rounded-lg text-xs font-medium"
          style={{
            background: 'hsl(38 90% 95%)',
            border: '1px solid hsl(38 80% 75%)',
            color: 'hsl(28 80% 40%)'
          }}
        >
          <User className="h-3.5 w-3.5 flex-shrink-0" />
          <span>
            {t(
              'Add your name, phone & address in profile for faster ordering.',
              '\u0924\u0947\u091C\u0940 \u0911\u0930\u094D\u0921\u0930 \u0915\u0947 \u0932\u093F\u090F \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932 \u092E\u0947\u0902 \u0928\u093E\u092E, \u092B\u093C\u094B\u0928 \u0935 \u092A\u0924\u093E \u091C\u094B\u0921\u093C\u0947\u0902\u0964'
            )}
          </span>
          <button
            onClick={() => { navigate('/profile'); onClose(); }}
            className="ml-auto underline font-semibold whitespace-nowrap"
          >
            {t('Edit', '\u0938\u0902\u092A\u093E\u0926\u093F\u0924 \u0915\u0930\u0947\u0902')}
          </button>
        </div>
      )}

      <Button
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold"
        onClick={handleWhatsAppOrder}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        {!user
          ? t('Login to Order on WhatsApp', '\u0911\u0930\u094D\u0921\u0930 \u0915\u0947 \u0932\u093F\u090F \u0932\u0949\u0917\u093F\u0928 \u0915\u0930\u0947\u0902')
          : t('Order on WhatsApp', 'WhatsApp \u092A\u0930 \u0911\u0930\u094D\u0921\u0930 \u0915\u0930\u0947\u0902')
        }
      </Button>
      <div className="text-xs text-center text-muted-foreground px-2 py-2 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
        <Phone className="inline h-3 w-3 mr-1 text-amber-600" />
        <span className="text-amber-700 dark:text-amber-400 font-medium">
          {t(
            'After sending the order on WhatsApp, you must call to confirm: 7979745730',
            'WhatsApp \u092A\u0930 \u0911\u0930\u094D\u0921\u0930 \u092D\u0947\u091C\u0928\u0947 \u0915\u0947 \u092C\u093E\u0926 \u0915\u0928\u094D\u092B\u0930\u094D\u092E \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u0949\u0932 \u0915\u0930\u0947\u0902: 7979745730'
          )}
        </span>
      </div>
    </div>
  );
};
