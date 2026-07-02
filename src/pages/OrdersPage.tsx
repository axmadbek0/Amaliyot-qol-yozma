import OrdersCart from '../components/OrdersCart';

export default function OrdersPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Orders</h1>
      <div className="space-y-4">
        <OrdersCart />
        <OrdersCart />
      </div>
    </div>
  );
}
