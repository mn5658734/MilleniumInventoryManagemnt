export default function Architecture() {
  return (
    <>
      <div className="mvp-banner">
        <strong>Technical Architecture</strong>
        — Solution architecture deliverable (SOW M2) covering platform design, integration model, security, and environment design.
      </div>

      <div className="page-header">
        <h2>Technical Architecture</h2>
        <p>Millennium Digital platform architecture — hybrid marketplace + aggregator commerce aligned to 70/20/10 revenue model.</p>
      </div>

      <div className="arch-diagram">
        <div className="arch-layer">
          <div className="arch-layer-title">Presentation Layer</div>
          <div className="arch-boxes">
            <div className="arch-box highlight">B2B Storefront</div>
            <div className="arch-box highlight">Admin Console</div>
            <div className="arch-box">Seller Portal</div>
            <div className="arch-box">Mobile-Responsive UI</div>
          </div>
        </div>

        <div className="arch-connector">▼</div>

        <div className="arch-layer">
          <div className="arch-layer-title">API Gateway & Security</div>
          <div className="arch-boxes">
            <div className="arch-box">API Gateway (REST/GraphQL)</div>
            <div className="arch-box">OAuth 2.0 / JWT Auth</div>
            <div className="arch-box">RBAC & Maker-Checker</div>
            <div className="arch-box">Rate Limiting & WAF</div>
          </div>
        </div>

        <div className="arch-connector">▼</div>

        <div className="arch-layer">
          <div className="arch-layer-title">Application Services (Microservices)</div>
          <div className="arch-boxes">
            <div className="arch-box highlight">Catalog Service</div>
            <div className="arch-box highlight">Order Management</div>
            <div className="arch-box highlight">Inventory Service</div>
            <div className="arch-box">Pricing Engine</div>
            <div className="arch-box">Logistics Service</div>
            <div className="arch-box">Notification Service</div>
            <div className="arch-box">Analytics & Predictive AI</div>
            <div className="arch-box">Marketplace / Seller Mgmt</div>
          </div>
        </div>

        <div className="arch-connector">▼</div>

        <div className="arch-layer">
          <div className="arch-layer-title">Integration Layer</div>
          <div className="arch-boxes">
            <div className="arch-box highlight">SAP ERP Connector</div>
            <div className="arch-box highlight">Salesforce CRM Connector</div>
            <div className="arch-box">Payment Gateway</div>
            <div className="arch-box">Logistics / Shipping APIs</div>
            <div className="arch-box">Email / SMS Gateway</div>
            <div className="arch-box">Event Bus (Kafka/RabbitMQ)</div>
          </div>
        </div>

        <div className="arch-connector">▼</div>

        <div className="arch-layer">
          <div className="arch-layer-title">Data Layer</div>
          <div className="arch-boxes">
            <div className="arch-box">PostgreSQL (Transactional)</div>
            <div className="arch-box">Elasticsearch (Search)</div>
            <div className="arch-box">Redis (Cache / Sessions)</div>
            <div className="arch-box">S3 / Object Storage</div>
            <div className="arch-box">Data Warehouse (Analytics)</div>
          </div>
        </div>

        <div className="arch-connector">▼</div>

        <div className="arch-layer">
          <div className="arch-layer-title">Infrastructure & Observability</div>
          <div className="arch-boxes">
            <div className="arch-box">Cloud Hosting (AWS/Azure)</div>
            <div className="arch-box">CI/CD Pipeline</div>
            <div className="arch-box">Monitoring & Alerting</div>
            <div className="arch-box">Backup & DR</div>
            <div className="arch-box">VAPT / Security Hardening</div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header"><h3>Non-Functional Requirements</h3></div>
          <div className="card-body" style={{ padding: '1.25rem', fontSize: '0.85rem' }}>
            <div className="integration-stat"><span>Scalability</span><span>MVP → National scale (5-year)</span></div>
            <div className="integration-stat"><span>Availability</span><span>Enterprise-grade SLA uptime</span></div>
            <div className="integration-stat"><span>Performance</span><span>Sub-second search & checkout</span></div>
            <div className="integration-stat"><span>Security</span><span>OWASP, access control, logging, DR</span></div>
            <div className="integration-stat"><span>Compliance</span><span>India GST, digital/legal readiness</span></div>
          </div>
        </div>

        <div className="card">
          <div className="card-header"><h3>Deployment Environments</h3></div>
          <div className="card-body" style={{ padding: '1.25rem', fontSize: '0.85rem' }}>
            <div className="integration-stat"><span>Development</span><span>Feature branches, mock integrations</span></div>
            <div className="integration-stat"><span>Staging / SIT</span><span>ERP/CRM sandbox connectors</span></div>
            <div className="integration-stat"><span>UAT / Pilot</span><span>Controlled customer onboarding</span></div>
            <div className="integration-stat"><span>Production</span><span>Go-live with 30-60 day hypercare</span></div>
          </div>
        </div>
      </div>
    </>
  );
}
