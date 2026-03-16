import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { WhatsAppCheckout } from './WhatsAppCheckout';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { cart, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();
  const { language, t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{t('Your Cart', 'आपकी टोकरी')}</span>
            {cart.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-red-500 hover:text-red-700"
              >
                {t('Clear', 'साफ़ करें')}
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        {cart.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {t('Your cart is empty', 'आपकी टोकरी खाली है')}
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-3 border-b pb-3">
                <div className="flex-1">
                  <h4 className="font-semibold">
                    {language === 'hi' ? item.nameHi : item.name}
                  </h4>
                  <p className="text-sm text-gray-600">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-bold mb-4">
                <span>{t('Total', 'कुल')}:</span>
                <span>₹{totalPrice}</span>
              </div>
              <WhatsAppCheckout />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
