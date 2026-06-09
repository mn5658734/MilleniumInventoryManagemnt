import { RefreshCw, ExternalLink } from 'lucide-react';
import { integrationStatus } from '../data/mockData';

function IntegrationCard({ system, data }) {
  return (
    <div className="integration-card">
      <div className="integration-card-header">
        <div>
          <h3>{data.name}</h3>
          <div className="integration-status">
            <span className="status-dot" />
            {data.status}
          </div>
        </div>
        <button type="button" className="btn btn-outline">
          <RefreshCw size={14} /> Sync Now
        </button>
      </div>

      <div className="integration-stat">
        <span>Last Sync</span>
        <span>{data.lastSync}</span>
      </div>
      <div className="integration-stat">
        <span>Success Rate (24h)</span>
        <span style={{ color: 'var(--success)' }}>{data.successRate}</span>
      </div>
      <div className="integration-stat">
        <span>Pending Errors</span>
        <span style={{ color: data.pendingErrors ? 'var(--danger)' : 'var(--success)' }}>
          {data.pendingErrors}
        </span>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          Active Endpoints
        </div>
        <div className="endpoint-list">
          {data.endpoints.map((ep) => (
            <span key={ep} className="endpoint-tag">{ep}</span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }}
      >
        <ExternalLink size={14} />
        SAP & Salesforce Integration — {system.toUpperCase()} Console
      </button>
    </div>
  );
}

export default function Integrations() {
  return (
    <>
      <div className="mvp-banner">
        <strong>SAP & Salesforce Integration</strong>
        — ERP stock/order sync (TP-08) and CRM lifecycle events (TP-16) with monitoring, error handling, and reconciliation.
      </div>

      <div className="page-header">
        <h2>SAP & Salesforce Integration</h2>
        <p>Manage ERP and CRM connectors, sync status, and interface health monitoring.</p>
      </div>

      <div className="integration-cards">
        <IntegrationCard system="sap" data={integrationStatus.sap} />
        <IntegrationCard system="salesforce" data={integrationStatus.salesforce} />
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Integration Event Log</h3>
        </div>
        <div className="card-body">
          <table className="data-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>System</th>
                <th>Event</th>
                <th>Records</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: 'Jun 9, 10:28', system: 'SAP', event: 'Material Master Sync', records: '12,400', status: 'Success' },
                { time: 'Jun 9, 10:15', system: 'SAP', event: 'Stock Availability Update', records: '8,921', status: 'Success' },
                { time: 'Jun 9, 09:45', system: 'SAP', event: 'Pricing Conditions', records: '2', status: 'Error' },
                { time: 'Jun 9, 07:30', system: 'Salesforce', event: 'Lead Import', records: '28', status: 'Success' },
                { time: 'Jun 9, 07:00', system: 'Salesforce', event: 'Account Lifecycle Update', records: '156', status: 'Success' },
                { time: 'Jun 8, 22:00', system: 'SAP', event: 'Sales Order Export', records: '47', status: 'Success' },
              ].map((row, i) => (
                <tr key={i}>
                  <td>{row.time}</td>
                  <td className="mono">{row.system}</td>
                  <td>{row.event}</td>
                  <td>{row.records}</td>
                  <td>
                    <span className={`status-badge ${row.status === 'Success' ? 'in-stock' : 'liquidation'}`}>
                      {row.status}
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
