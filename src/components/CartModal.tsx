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
                className="text-white-500 hover:text-red-400"
              >
                {t('Clear', 'साफ़ करें')}
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        {cart.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p className="text-4xl mb-2">🛒</p>
            <p>{t('Your cart is empty', 'आपकी टोकरी खाली है')}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => {
              const displayName = language === 'en' ? item.nameEn : item.name;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-lg border"
                >
                  <div
                    className={`w-3 h-3 rounded-sm border-2 flex-shrink-0 ${
                      item.veg ? 'border-green-500' : 'border-blue-500'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full m-auto mt-0.5 ${
                      item.veg ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{displayName}</p>
                    {item.quantity && (
                      <p className="text-xs text-muted-foreground">{item.quantity}</p>
                    )}
                    <p className="text-sm font-bold text-primary">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6"
                      onClick={() => updateQuantity(item.id, item.qty - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center text-sm font-bold">{item.qty}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6"
                      onClick={() => updateQuantity(item.id, item.qty + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-6 w-6 text-red-500 hover:text-white-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              );
            })}

            <div className="border-t pt-3">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold">{t('Total', 'कुल')}</span>
                <span className="font-bold text-primary text-lg">₹{totalPrice.toFixed(0)}</span>
              </div>
              <WhatsAppCheckout onClose={onClose} />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default CartModal;
