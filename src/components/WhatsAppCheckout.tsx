import { MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_NUMBER = '7979';

export const WhatsAppCheckout = () => {
  const { cart, totalPrice } = useCart();
  const { language, t } = useLanguage();

  const handleWhatsAppOrder = () => {
    const items = cart.map(item => 
      `${language === 'hi' ? item.nameHi : item.name} x${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');

    const message = encodeURIComponent(
      `*${t('New Order from Bharat Swad Menu', 'भारत स्वाद मेनू से नया ऑर्डर')}*\n\n${items}\n\n*${t('Total', 'कुल')}: ₹${totalPrice}*\n\n_${t('Note: I will call shortly to confirm this order.', 'नोट: मैं इस ऑर्डर की पुष्टि के लिए शीघ्र ही कॉल करूंगा।')}_`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-2">
      <Button 
        onClick={handleWhatsAppOrder}
        className="w-full bg-green-600 hover:bg-green-700 gap-2"
        size="lg"
      >
        <MessageCircle className="w-5 h-5" />
        {t('Order on WhatsApp', 'WhatsApp पर ऑर्डर करें')}
      </Button>
      <a href={`tel:${WHATSAPP_NUMBER}`} className="block">
        <Button variant="outline" className="w-full gap-2" size="lg">
          <Phone className="w-5 h-5" />
          {t('Call to Confirm', 'पुष्टि के लिए कॉल करें')}
        </Button>
      </a>
      <p className="text-xs text-gray-600 mt-3 text-center">
        {t('⚠️ Please call after sending WhatsApp order to confirm', '⚠️ पुष्टि के लिए WhatsApp ऑर्डर भेजने के बाद कृपया कॉल करें')}
      </p>
    </div>
  );
};
