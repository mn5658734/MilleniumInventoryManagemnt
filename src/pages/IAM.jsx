import { rbacRoles } from '../data/mockData';

export default function IAM() {
  return (
    <>
      <div className="mvp-banner">
        <strong>IAM & RBAC</strong>
        — Role-based access control (TP-19), maker-checker approvals, and audit trail (TP-20) for catalog, pricing, and policy changes.
      </div>

      <div className="page-header">
        <h2>Identity & Access Management</h2>
        <p>Manage roles, permissions, and approval hierarchies across stakeholder groups.</p>
      </div>

      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="kpi-card">
          <div className="label">Total Users</div>
          <div className="value">2,267</div>
        </div>
        <div className="kpi-card">
          <div className="label">Active Roles</div>
          <div className="value">9</div>
        </div>
        <div className="kpi-card">
          <div className="label">Maker-Checker Policies</div>
          <div className="value">4</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Role & Permission Matrix</h3>
          <button type="button" className="btn btn-primary">Add Role</button>
        </div>
        <div className="card-body">
          <table className="data-table permission-matrix">
            <thead>
              <tr>
                <th>Role</th>
                <th>Users</th>
                <th>Permissions</th>
                <th>Maker-Checker</th>
              </tr>
            </thead>
            <tbody>
              {rbacRoles.map((r) => (
                <tr key={r.role}>
                  <td style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{r.role}</td>
                  <td>{r.users.toLocaleString()}</td>
                  <td>{r.permissions}</td>
                  <td>
                    {r.makerChecker ? (
                      <span className="status-badge in-stock">Enabled</span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)' }}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginTop: '1.25rem' }}>
        <div className="card-header">
          <h3>Approval Workflows</h3>
        </div>
        <div className="card-body" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { name: 'Catalog Changes', steps: 'Maker → Catalog Manager → Live' },
              { name: 'Pricing / Discount', steps: 'Maker → SCM Head → Finance Head' },
              { name: 'Quote Approval', steps: 'Sales → Pricing Team → Customer' },
              { name: 'Policy Changes', steps: 'Maker → E-Commerce Head → Board' },
            ].map((wf) => (
              <div key={wf.name} style={{
                padding: '1rem',
                background: 'var(--bg-hover)',
                borderRadius: '8px',
                fontSize: '0.85rem',
              }}>
                <div style={{ fontWeight: 600, marginBottom: '0.35rem' }}>{wf.name}</div>
                <div style={{ color: 'var(--text-muted)' }}>{wf.steps}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
