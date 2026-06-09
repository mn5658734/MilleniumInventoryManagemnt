export const personaMenuConfig = {
  board: {
    sections: [
      { label: 'Executive', navIds: ['dashboard'] },
      { label: 'Platform & Governance', navIds: ['architecture', 'integrations', 'notifications'] },
    ],
    labels: {
      dashboard: 'Executive Dashboard',
      architecture: 'Technical Architecture',
      integrations: 'SAP & Salesforce Integration',
      notifications: 'Predictive Analysis',
    },
    descriptions: {
      dashboard: 'Revenue, risk reporting, milestone visibility, and board KPIs',
      architecture: 'Platform architecture, security design, and integration model',
      integrations: 'ERP and CRM sync status, reconciliation, and interface health',
      notifications: 'Demand forecasts, surplus alerts, and strategic intelligence',
    },
  },

  'programme-manager': {
    sections: [
      { label: 'Programme Control', navIds: ['dashboard', 'orders', 'logistics'] },
      { label: 'Monitoring', navIds: ['notifications'] },
    ],
    labels: {
      dashboard: 'Programme Dashboard',
      orders: 'Order Pipeline',
      logistics: 'Logistics & Dispatch',
      notifications: 'SLA Alerts & Notifications',
    },
    descriptions: {
      dashboard: 'Rollout progress, milestones, issue tracking, and SLA overview',
      orders: 'Order lifecycle tracking across pilot and go-live phases',
      logistics: 'Shipment status, carrier performance, and delivery SLA',
      notifications: 'Incident alerts, sync failures, and programme notifications',
    },
  },

  'catalog-manager': {
    sections: [
      { label: 'Product & Catalog', navIds: ['inventory', 'orders'] },
      { label: 'Overview', navIds: ['dashboard'] },
    ],
    labels: {
      inventory: 'Catalog & SKU Management',
      orders: 'Catalog Orders',
      dashboard: 'Catalog Dashboard',
    },
    descriptions: {
      inventory: 'SKU onboarding, bulk upload, content enrichment, and approvals',
      orders: 'Orders linked to catalog items and assortment performance',
      dashboard: 'SKU completeness, category coverage, and onboarding KPIs',
    },
  },

  'scm-pricing': {
    sections: [
      { label: 'SCM & Pricing', navIds: ['inventory', 'dashboard'] },
      { label: 'Intelligence', navIds: ['notifications'] },
    ],
    labels: {
      inventory: 'Stock & Surplus Management',
      dashboard: 'Pricing Dashboard',
      notifications: 'Demand & Pricing Intelligence',
    },
    descriptions: {
      inventory: 'Surplus stock, ageing inventory, liquidation, and open stock sync',
      dashboard: 'Dynamic pricing KPIs, turnover, and commercial performance',
      notifications: 'Demand forecasts, pricing signals, and surplus predictions',
    },
  },

  finance: {
    sections: [
      { label: 'Finance & Commerce', navIds: ['orders', 'dashboard'] },
      { label: 'Integrations', navIds: ['integrations'] },
    ],
    labels: {
      orders: 'Orders & Invoicing',
      dashboard: 'Finance Dashboard',
      integrations: 'ERP & Payment Sync',
    },
    descriptions: {
      orders: 'GST-compliant orders, invoicing, and payment reconciliation',
      dashboard: 'Revenue, settlement reporting, and tax compliance KPIs',
      integrations: 'SAP financial sync, payment gateway, and CRM settlement data',
    },
  },

  warehouse: {
    sections: [
      { label: 'Warehouse Operations', navIds: ['inventory', 'logistics', 'orders'] },
    ],
    labels: {
      inventory: 'Warehouse Stock',
      logistics: 'Dispatch & Shipping',
      orders: 'Fulfilment Orders',
    },
    descriptions: {
      inventory: 'Stock allocation, warehouse levels, and pick/pack readiness',
      logistics: 'Shipment creation, carrier tracking, and delivery management',
      orders: 'Dispatch queue, returns/RMA, and split shipment handling',
    },
  },

  support: {
    sections: [
      { label: 'Customer Support', navIds: ['orders', 'dashboard', 'notifications'] },
    ],
    labels: {
      orders: 'Customer Orders & Quotes',
      dashboard: 'Support Dashboard',
      notifications: 'Case & Order Alerts',
    },
    descriptions: {
      orders: 'Quote assistance, order lookup, RFQ support, and case handling',
      dashboard: 'Open cases, order volumes, and support performance KPIs',
      notifications: 'Customer alerts, quote updates, and order status changes',
    },
  },

  seller: {
    sections: [
      { label: 'Seller Portal', navIds: ['inventory', 'orders', 'logistics'] },
    ],
    labels: {
      inventory: 'My Stock & Listings',
      orders: 'Seller Orders',
      logistics: 'Seller Shipments',
    },
    descriptions: {
      inventory: 'Stock and price upload, listing management, and catalog sync',
      orders: 'Incoming orders, order handling, and fulfilment status',
      logistics: 'Shipment labels, tracking, and delivery updates',
    },
  },

  'b2b-buyer': {
    sections: [
      { label: 'My Account', navIds: ['dashboard', 'orders', 'notifications'] },
    ],
    labels: {
      dashboard: 'My Dashboard',
      orders: 'My Orders & RFQs',
      notifications: 'My Notifications',
    },
    descriptions: {
      dashboard: 'Your orders, reorders, and account activity',
      orders: 'Place orders, track RFQs, and manage reorders',
      notifications: 'Order updates, shipment alerts, and quote notifications',
    },
  },
};
