export const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/app/dashboard',
    icon: 'LayoutDashboard',
    moduleKey: 'Dashboard',
    description: 'Revenue, orders, inventory turnover, customer activation KPIs',
  },
  {
    id: 'inventory',
    label: 'Inventory Management',
    path: '/app/inventory',
    icon: 'Boxes',
    moduleKey: 'Inventory',
    description: 'SKU master, stock sync, surplus monetisation, ageing stock',
  },
  {
    id: 'logistics',
    label: 'Logistics Management',
    path: '/app/logistics',
    icon: 'Truck',
    moduleKey: 'Logistics',
    description: 'Shipment tracking, dispatch, carrier integration, delivery SLA',
  },
  {
    id: 'orders',
    label: 'Order Management',
    path: '/app/orders',
    icon: 'FileText',
    moduleKey: 'Orders',
    description: 'Order lifecycle, RFQ, quotes, returns/RMA, split shipments',
  },
  {
    id: 'iam',
    label: 'IAM & RBAC',
    path: '/app/iam',
    icon: 'Shield',
    moduleKey: 'IAM & RBAC',
    description: 'Role-based access, maker-checker approvals, audit trail',
  },
  {
    id: 'architecture',
    label: 'Technical Architecture',
    path: '/app/architecture',
    icon: 'Network',
    moduleKey: 'Architecture',
    description: 'Platform architecture, integration model, security design',
  },
  {
    id: 'integrations',
    label: 'SAP & Salesforce Integration',
    path: '/app/integrations',
    icon: 'Plug',
    moduleKey: 'Integrations',
    description: 'ERP stock sync, CRM lifecycle events, reconciliation',
  },
  {
    id: 'notifications',
    label: 'Notifications & Predictive Analysis',
    path: '/app/notifications',
    icon: 'Bell',
    moduleKey: 'Notifications',
    altModuleKeys: ['Predictive Analytics'],
    description: 'Alerts, demand forecasting, pricing intelligence, surplus predictions',
  },
];

export const roleLabels = {
  admin: 'Administrator',
  dept_head: 'Department Head',
  user: 'Standard User',
};

const navById = Object.fromEntries(navItems.map((item) => [item.id, item]));

const personaNavOverrides = {
  'b2b-buyer': {
    dashboard: 'Your orders, reorders, and account activity',
    orders: 'Place orders, track RFQs, and manage reorders',
    notifications: 'Order updates, shipment alerts, and quote notifications',
  },
};

export function getNavForPersona(modules = [], excludedNavIds = []) {
  const moduleSet = new Set(modules);
  const excluded = new Set(excludedNavIds);
  return navItems.filter(
    (item) =>
      !excluded.has(item.id) &&
      (moduleSet.has(item.moduleKey) ||
        item.altModuleKeys?.some((key) => moduleSet.has(key)))
  );
}

export function getNavDescription(item, personaId) {
  return personaNavOverrides[personaId]?.[item.id] || item.description;
}

export function canAccessNav(navId, modules = [], excludedNavIds = []) {
  const allowed = getNavForPersona(modules, excludedNavIds).map((item) => item.id);
  return allowed.includes(navId);
}

export function getNavSections(modules = [], personaId = null, excludedNavIds = []) {
  const visible = getNavForPersona(modules, excludedNavIds);
  const opsIds = ['dashboard', 'orders', 'inventory', 'logistics'];
  const platformIds = ['iam', 'architecture', 'integrations'];

  const operations = visible.filter((i) => opsIds.includes(i.id));
  const platform = visible.filter((i) => platformIds.includes(i.id));
  const intelligence = visible.filter((i) => i.id === 'notifications');

  const sections = [];
  const opsLabel = personaId === 'b2b-buyer' ? 'My Account' : 'Operations';
  if (operations.length) sections.push({ label: opsLabel, items: operations });
  if (platform.length) sections.push({ label: 'Platform', items: platform });
  if (intelligence.length) sections.push({ label: 'Intelligence', items: intelligence });

  return sections.length ? sections : [{ label: 'My Workspace', items: visible }];
}

export function getNavItemByPath(path) {
  return navItems.find((item) => item.path === path);
}

export { navById };
