import { BrowserRouter, Routes, Route, NavLink, Outlet, Navigate } from 'react-router-dom';

const orders = {
  current: [
    { id: 'ORD-1042', item: 'Chicken Burger', status: 'Preparing' },
    { id: 'ORD-1048', item: 'Veg Pizza', status: 'Out for delivery' }
  ],
  history: [
    { id: 'ORD-0988', item: 'Veg Pizza', status: 'Delivered' },
    { id: 'ORD-0974', item: 'Family Combo', status: 'Delivered' }
  ],
  cancelled: [
    { id: 'ORD-1011', item: 'Family Combo', status: 'Cancelled' }
  ]
};

function OrderList({ title, data }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {data.map(order => (
        <div className="notice" key={order.id}>
          <strong>{order.id}</strong>
          <div>{order.item}</div>
          <span>{order.status}</span>
        </div>
      ))}
    </section>
  );
}

function OrdersLayout() {
  return (
    <>
      <div className="panel">
        <h2>Orders</h2>
        <p className="subtitle">
          The Orders page contains nested routes for Current Orders,
          Order History, and Cancelled Orders.
        </p>

        <nav className="nav">
          <NavLink to="current">Current Orders</NavLink>
          <NavLink to="history">Order History</NavLink>
          <NavLink to="cancelled">Cancelled Orders</NavLink>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="shell">
          <header className="hero">
            <div className="eyebrow">Practical 12 · Unit 4</div>
            <h1 className="title">E-commerce Order Management</h1>
            <p className="subtitle">
              Nested Routing using Orders → Current Orders, Order History and Cancelled Orders.
            </p>
          </header>

          <main className="card">
            <Routes>
              <Route path="/" element={<Navigate to="/orders" replace />} />
              <Route path="/orders" element={<OrdersLayout />}>
                <Route index element={<div className="empty">Select an order category above.</div>} />
                <Route path="current" element={<OrderList title="Current Orders" data={orders.current} />} />
                <Route path="history" element={<OrderList title="Order History" data={orders.history} />} />
                <Route path="cancelled" element={<OrderList title="Cancelled Orders" data={orders.cancelled} />} />
              </Route>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
