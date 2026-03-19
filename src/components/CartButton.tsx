import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import { CartModal } from './CartModal';

export const CartButton = () => {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
       className="fixed bottom-24 right-4 z-50 rounded-full w-16 h-16 shadow-lg"
        size="icon"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
            {totalItems}
          </span>
        )}
      </Button>
      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
export default CartButton; 
