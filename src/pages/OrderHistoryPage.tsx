import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, ShoppingBag, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

interface OrderItem {
  id: string;
  menu_item_name: string;
  quantity: number;
  price: number;
  customizations?: Record<string, string>;
}

interface Order {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  order_items: OrderItem[];
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  preparing: 'bg-orange-100 text-orange-800',
  ready: 'bg-green-100 text-green-800',
  delivered: 'bg-gray-100 text-gray-800',
  cancelled: 'bg-red-100 text-red-800',
};

const OrderHistoryPage = () => {
  const { user } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const t = (en: string, hi: string) => language === 'en' ? en : hi;

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('orders')
        .select(`
          id, status, total_amount, created_at,
          order_items (id, menu_item_name, quantity, price, customizations)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (err: unknown) {
      setError(t('Failed to load orders.', 'ऑर्डर लोड नहीं हो सके।'));
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(language === 'en' ? 'en-IN' : 'hi-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate('/')}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold">
            {t('Order History', 'ऑर्डर इतिहास')}
          </h1>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm">{error}</div>
        )}

        {!loading && orders.length === 0 && (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              {t('No orders yet', 'अभी तक कोई ऑर्डर नहीं')}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t('Your order history will appear here.', 'आपका ऑर्डर इतिहास यहाँ दिखेगा।')}
            </p>
            <Button onClick={() => navigate('/')}>
              {t('Browse Menu', 'मेनू देखें')}
            </Button>
          </div>
        )}

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-card border rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{formatDate(order.created_at)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    #{order.id.slice(0, 8).toUpperCase()}
                  </p>
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${
                    statusColors[order.status] || 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {order.status === 'pending' ? t('Pending', 'प्रतीक्षारत') :
                   order.status === 'confirmed' ? t('Confirmed', 'पुष्टि हुई') :
                   order.status === 'preparing' ? t('Preparing', 'तैयार हो रहा') :
                   order.status === 'ready' ? t('Ready', 'तैयार') :
                   order.status === 'delivered' ? t('Delivered', 'डिलीवर हुआ') :
                   t('Cancelled', 'रद्द')}
                </span>
              </div>

              <div className="space-y-1.5 mb-3">
                {order.order_items?.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-foreground">
                      {item.menu_item_name} × {item.quantity}
                    </span>
                    <span className="font-medium">₹{(item.price * item.quantity).toFixed(0)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-2 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {t('Total', 'कुल')}
                </span>
                <span className="font-bold text-base">₹{order.total_amount.toFixed(0)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
