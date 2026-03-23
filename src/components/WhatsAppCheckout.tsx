import { MessageCircle, Phone, User } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const WHATSAPP_NUMBER = '917979745730';

interface WhatsAppCheckoutProps {
  onClose: () => void;
}

export const WhatsAppCheckout = ({ onClose }: WhatsAppCheckoutProps) => {
  const { cart, totalPrice, clearCart } = useCart();
  const { language, t } = useLanguage();
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const saveOrderToSupabase = async () => {
    if (!user) return;
    try {
      const totalAmount = totalPrice;
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          status: 'pending',
          total_amount: totalAmount,
          phone_number: profile?.phone || null,
          delivery_address: profile?.address || null,
        })
        .select()
        .single();

      if (orderError || !order) {
        console.error('Error saving order:', orderError);
        return;
      }

      const orderItems = cart.map((item) => ({
        order_id: order.id,
        menu_item_name: language === 'en' ? item.nameEn : item.name,
        menu_item_id: item.id?.toString() || null,
        quantity: item.qty,
        price: parseFloat(item.price.split('/')[0]),
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) {
        console.error('Error saving order items:', itemsError);
      }
    } catch (err) {
      console.error('Error saving order to Supabase:', err);
    }
  };

  const handleWhatsAppOrder = async () => {
    // If not logged in, redirect to login first
    if (!user) {
      navigate('/login');
      onClose();
      return;
    }

    const items = cart.map((item) => {
      const displayName = language === 'en' ? item.nameEn : item.name;
      const option = item.quantity ? ` (${item.quantity})` : '';
      return `• ${displayName}${option} x${item.qty} - ₹${parseFloat(item.price.split('/')[0]) * item.qty}`;
    }).join('\n');

    // Build customer info block
    const customerName = profile?.name || t('Guest', 'गेस्ट');
    const customerPhone = profile?.phone || t('Not provided', 'नहीं दिया');
    const customerAddress = profile?.address || t('Not provided', 'नहीं दिया');

    const message = encodeURIComponent(
      `🙏 *${t('Bharat Restaurant - New Order', 'भारत रेस्टोरेंट - नया ऑर्डर')}*\n\n` +
      `👤 *${t('Name', 'नाम')}:* ${customerName}\n` +
      `📱 *${t('Phone', 'फ़ोन')}:* ${customerPhone}\n` +
      `📍 *${t('Address', 'पता')}:* ${customerAddress}\n\n` +
      `🛒 *${t('Order Items', 'ऑर्डर आइटम')}:*\n${items}\n\n` +
      `*${t('Total', 'कुल')}: ₹${totalPrice.toFixed(0)}*\n\n` +
      `⚠️ ${t('Please call to confirm the order', 'ऑर्डर कन्फर्म करने के लिए कॉल करें')}`
    );

    // Save order to Supabase first
    await saveOrderToSupabase();

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
              'Add your name, phone & address in profile for ordering.',
              'ऑर्डर के लिए प्रोफाइल में नाम, फ़ोन व पता जोड़ें।'
            )}
          </span>
          <button
            onClick={() => { navigate('/profile'); onClose(); }}
            className="ml-auto underline font-semibold whitespace-nowrap"
          >
            {t('Edit', 'संपादित करें')}
          </button>
        </div>
      )}
      <Button
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold"
        onClick={handleWhatsAppOrder}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        {!user
          ? t('Login to Order on WhatsApp', 'ऑर्डर के लिए लॉगिन करें')
          : t('Order on WhatsApp', 'WhatsApp पर ऑर्डर करें')
        }
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
