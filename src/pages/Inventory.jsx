import { inventoryItems } from '../data/mockData';

function statusClass(status) {
  const map = {
    'In Stock': 'in-stock',
    Surplus: 'surplus',
    Liquidation: 'liquidation',
  };
  return map[status] || 'in-stock';
}

export default function Inventory() {
  return (
    <>
      <div className="mvp-banner">
        <strong>Inventory Management</strong>
        — SKU master, ERP stock sync (TP-08), surplus monetisation (₹50+ Cr opportunity), and ageing stock tracking.
      </div>

      <div className="page-header">
        <h2>Inventory Management</h2>
        <p>Real-time stock visibility across warehouses with surplus and liquidation flags.</p>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="kpi-card">
          <div className="label">Total SKUs</div>
          <div className="value">12,400</div>
        </div>
        <div className="kpi-card">
          <div className="label">Surplus Stock Value</div>
          <div className="value">₹50+ Cr</div>
        </div>
        <div className="kpi-card">
          <div className="label">Ageing &gt; 90 Days</div>
          <div className="value">1,842</div>
        </div>
        <div className="kpi-card">
          <div className="label">Last SAP Sync</div>
          <div className="value" style={{ fontSize: '1rem' }}>32 min ago</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Stock Register</h3>
          <button type="button" className="btn btn-outline">Bulk Upload</button>
        </div>
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>SKU / Part No.</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Ageing (days)</th>
                <th>Warehouse</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map((item) => (
                <tr key={item.sku}>
                  <td className="mono">{item.sku}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>{item.qty.toLocaleString()}</td>
                  <td>{item.ageing}</td>
                  <td>{item.warehouse}</td>
                  <td>
                    <span className={`status-badge ${statusClass(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
