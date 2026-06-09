import { shipments } from '../data/mockData';

function statusClass(status) {
  const map = {
    'In Transit': 'in-transit',
    Delivered: 'delivered',
    Dispatched: 'dispatched',
    'Pending Pickup': 'pending',
  };
  return map[status] || 'pending';
}

export default function Logistics() {
  return (
    <>
      <div className="mvp-banner">
        <strong>Logistics Management</strong>
        — Shipment creation, carrier tracking, delivery SLA monitoring, and import-export logistics visibility.
      </div>

      <div className="page-header">
        <h2>Logistics Management</h2>
        <p>End-to-end shipment tracking from warehouse dispatch to customer delivery.</p>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="kpi-card">
          <div className="label">Active Shipments</div>
          <div className="value">47</div>
        </div>
        <div className="kpi-card">
          <div className="label">On-Time Delivery</div>
          <div className="value">94.2%</div>
        </div>
        <div className="kpi-card">
          <div className="label">Warehouses</div>
          <div className="value">3</div>
        </div>
        <div className="kpi-card">
          <div className="label">Import POs In Transit</div>
          <div className="value">12</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Shipment Tracker</h3>
          <button type="button" className="btn btn-primary">Create Shipment</button>
        </div>
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Shipment ID</th>
                <th>Order Ref</th>
                <th>Carrier</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Status</th>
                <th>ETA</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((s) => (
                <tr key={s.id}>
                  <td className="mono">{s.id}</td>
                  <td className="mono">{s.order}</td>
                  <td>{s.carrier}</td>
                  <td>{s.origin}</td>
                  <td>{s.destination}</td>
                  <td>
                    <span className={`status-badge ${statusClass(s.status)}`}>{s.status}</span>
                  </td>
                  <td>{s.eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
