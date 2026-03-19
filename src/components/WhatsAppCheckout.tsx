import { MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_NUMBER = '917979745730';

interface WhatsAppCheckoutProps {
  onClose: () => void;
}

export const WhatsAppCheckout = ({ onClose }: WhatsAppCheckoutProps) => {
  const { cart, totalPrice, clearCart } = useCart();
  const { language, t } = useLanguage();

  const handleWhatsAppOrder = () => {
    const items = cart.map((item) => {
      const displayName = language === 'en' ? item.nameEn : item.name;
      return `• ${displayName} x${item.qty} - ₹${parseFloat(item.price.split('/')[0]) * item.qty}`;
    }).join('\n');

    const message = encodeURIComponent(
      `🙏 *${t('Please note my order.', 'कृपया मेरा ऑर्डर नोट कर लें।')}*\n\n${items}\n\n*${t('Total', 'कुल')}: ₹${totalPrice.toFixed(0)}*\n\n⚠️ ${t('Please call to confirm the order', 'ऑर्डर कन्फर्म करने के लिए कॉल करें')}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    clearCart();
    onClose();
  };

  return (
    <div className="space-y-3">
      <Button
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold"
        onClick={handleWhatsAppOrder}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        {t('Order on WhatsApp', 'WhatsApp पर ऑर्डर करें')}
      </Button>

      <div className="text-xs text-center text-muted-foreground px-2 py-2 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
        <Phone className="inline h-3 w-3 mr-1 text-amber-600" />
        <span className="text-amber-700 dark:text-amber-400 font-medium">
          {t(
            'After sending the order on WhatsApp, you must call to confirm: 7979745730',
            'WhatsApp पर ऑर्डर भेजने के बाद कन्फर्म करने के लिए कॉल करें: 7979745730'
          )}
        </span>
      </div>
    </div>
  );
};
