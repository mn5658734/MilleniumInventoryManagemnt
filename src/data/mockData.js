export const kpiMetrics = [
  { label: 'Revenue (YTD)', value: '₹42.8 Cr', change: '+18.4%', trend: 'up', target: '₹150 Cr' },
  { label: 'Active Orders', value: '1,247', change: '+12%', trend: 'up', target: '—' },
  { label: 'Inventory Turnover', value: '4.2x', change: '+0.6', trend: 'up', target: '5.0x' },
  { label: 'Customer Activation', value: '2,184', change: '+340', trend: 'up', target: '3,000+' },
  { label: 'Surplus Monetised', value: '₹8.2 Cr', change: '+22%', trend: 'up', target: '₹50+ Cr' },
  { label: 'Repeat Order Rate', value: '34%', change: '+5%', trend: 'up', target: '40%' },
];

export const inventoryItems = [
  { sku: 'STM32F407VGT6', brand: 'STMicroelectronics', category: 'MCU', qty: 12400, ageing: 45, status: 'In Stock', warehouse: 'Mumbai WH-01' },
  { sku: 'LM358DR', brand: 'Texas Instruments', category: 'Passive', qty: 85000, ageing: 120, status: 'Surplus', warehouse: 'Pune WH-02' },
  { sku: 'ESP32-WROOM-32', brand: 'Espressif', category: 'Evaluation Board', qty: 3200, ageing: 15, status: 'In Stock', warehouse: 'Mumbai WH-01' },
  { sku: '1N4148WS', brand: 'Vishay', category: 'Commodity', qty: 250000, ageing: 210, status: 'Liquidation', warehouse: 'Chennai WH-03' },
  { sku: 'ATmega328P-PU', brand: 'Microchip', category: 'MCU', qty: 6800, ageing: 60, status: 'In Stock', warehouse: 'Pune WH-02' },
  { sku: 'NE555P', brand: 'TI', category: 'Commodity', qty: 42000, ageing: 180, status: 'Surplus', warehouse: 'Mumbai WH-01' },
];

export const shipments = [
  { id: 'SHP-2026-0847', order: 'ORD-45821', carrier: 'BlueDart', origin: 'Mumbai WH-01', destination: 'Bangalore', status: 'In Transit', eta: 'Jun 11, 2026' },
  { id: 'SHP-2026-0846', order: 'ORD-45819', carrier: 'Delhivery', origin: 'Pune WH-02', destination: 'Hyderabad', status: 'Delivered', eta: 'Jun 8, 2026' },
  { id: 'SHP-2026-0845', order: 'ORD-45815', carrier: 'DTDC', origin: 'Chennai WH-03', destination: 'Coimbatore', status: 'Dispatched', eta: 'Jun 10, 2026' },
  { id: 'SHP-2026-0844', order: 'ORD-45810', carrier: 'BlueDart', origin: 'Mumbai WH-01', destination: 'Delhi NCR', status: 'Pending Pickup', eta: 'Jun 12, 2026' },
];

export const orders = [
  { id: 'ORD-45821', customer: 'TechStart Electronics', type: 'Production', amount: '₹2,45,000', status: 'Processing', date: 'Jun 8, 2026', items: 12 },
  { id: 'ORD-45819', customer: 'Bharat IoT Solutions', type: 'Sample', amount: '₹8,500', status: 'Shipped', date: 'Jun 7, 2026', items: 3 },
  { id: 'ORD-45815', customer: 'Precision Circuits Pvt Ltd', type: 'RFQ', amount: '₹12,80,000', status: 'Quote Approved', date: 'Jun 6, 2026', items: 45 },
  { id: 'ORD-45810', customer: 'Nova Embedded Systems', type: 'Production', amount: '₹5,60,000', status: 'Awaiting Payment', date: 'Jun 5, 2026', items: 28 },
  { id: 'ORD-45805', customer: 'GreenPower Innovations', type: 'Reorder', amount: '₹1,15,000', status: 'Delivered', date: 'Jun 3, 2026', items: 8 },
];

export const rbacRoles = [
  { role: 'Super Admin', users: 3, permissions: 'Full platform access, IAM management, audit logs', makerChecker: false },
  { role: 'E-Commerce Head', users: 2, permissions: 'Executive dashboards, approvals, policy changes', makerChecker: true },
  { role: 'SCM Head', users: 4, permissions: 'Pricing, inventory, surplus liquidation, demand data', makerChecker: true },
  { role: 'Finance Head', users: 3, permissions: 'Tax rules, invoicing, payment reconciliation', makerChecker: true },
  { role: 'Operations Head', users: 5, permissions: 'Warehouse, dispatch, returns, shipping', makerChecker: false },
  { role: 'Catalog Manager', users: 6, permissions: 'SKU onboarding, bulk upload, content approval', makerChecker: true },
  { role: 'Support Agent', users: 12, permissions: 'Customer lookup, quote/order support, cases', makerChecker: false },
  { role: 'B2B Buyer', users: 2184, permissions: 'Account area, orders, RFQ, reorder', makerChecker: false },
  { role: 'Seller / Vendor', users: 48, permissions: 'Stock upload, order handling, performance', makerChecker: false },
];

export const notifications = [
  { id: 1, type: 'alert', title: 'Surplus stock alert: LM358DR ageing > 90 days', time: '2 min ago', priority: 'high' },
  { id: 2, type: 'prediction', title: 'Demand forecast: ESP32-WROOM-32 +35% next quarter', time: '15 min ago', priority: 'medium' },
  { id: 3, type: 'integration', title: 'SAP sync completed — 12,400 SKUs updated', time: '32 min ago', priority: 'low' },
  { id: 4, type: 'alert', title: 'Order ORD-45810 payment overdue by 2 days', time: '1 hr ago', priority: 'high' },
  { id: 5, type: 'prediction', title: 'Liquidation opportunity: ₹1.2 Cr recoverable on passive components', time: '2 hrs ago', priority: 'medium' },
  { id: 6, type: 'integration', title: 'Salesforce lead sync — 28 new SME accounts', time: '3 hrs ago', priority: 'low' },
];

export const predictions = [
  { metric: 'Q3 Demand — MCUs', forecast: '+28%', confidence: '87%', action: 'Increase safety stock by 15%' },
  { metric: 'Surplus Liquidation ROI', forecast: '₹3.4 Cr', confidence: '92%', action: 'Launch targeted promo campaign' },
  { metric: 'Sample-to-Volume Conversion', forecast: '18%', confidence: '74%', action: 'Follow-up on 142 sample orders' },
  { metric: 'Import Lead Time Risk', forecast: '+5 days', confidence: '81%', action: 'Expedite PO-2026-0892' },
];

export const integrationStatus = {
  sap: {
    name: 'SAP ERP / Open Stock',
    status: 'Connected',
    lastSync: '32 min ago',
    successRate: '99.2%',
    endpoints: ['Material Master', 'Stock Availability', 'Sales Orders', 'Pricing Conditions'],
    pendingErrors: 2,
  },
  salesforce: {
    name: 'Salesforce CRM',
    status: 'Connected',
    lastSync: '3 hrs ago',
    successRate: '98.7%',
    endpoints: ['Leads', 'Accounts', 'Opportunities', 'Lifecycle Events'],
    pendingErrors: 0,
  },
};
