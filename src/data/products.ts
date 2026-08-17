export type Product = {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  outcomes: string[];
  capabilities: string[];
  idealFor: string[];
};

export const products: Product[] = [
  {
    id: 'shipping',
    name: 'Shipping Management System',
    shortName: 'Shipping',
    tagline: 'Courier & last-mile control',
    shortDescription:
      'End-to-end shipping and courier operations — from pickup to proof of delivery — with live status and customer-ready tracking.',
    description:
      'MUTU Shipping (EMS) helps courier and distribution teams manage parcels across hubs and routes. Track every package through pickup, transit, and delivery, notify customers automatically, and give ops a clear board of what is moving, delayed, or complete.',
    image: '/products/shipping.png',
    features: [
      'Package tracking across stages',
      'Delivery scheduling & hub handoffs',
      'Customer notifications',
      'Proof of delivery capture',
      'Ops analytics dashboard',
    ],
    outcomes: [
      'Fewer lost or stalled parcels with stage-level visibility',
      'Faster customer updates without manual follow-ups',
      'Clear workload view for hubs and last-mile teams',
    ],
    capabilities: [
      'Inbound / outbound parcel workflows',
      'Route and delivery window planning',
      'Exception and attempt handling',
      'Customer SMS / email status updates',
      'Daily performance reporting',
    ],
    idealFor: ['Courier companies', 'E-commerce fulfillment', 'Regional distributors'],
  },
  {
    id: 'warehouse',
    name: 'Warehouse Management System',
    shortName: 'Warehouse',
    tagline: 'Inventory you can trust',
    shortDescription:
      'Complete warehouse control for receiving, storage, picking, and fulfillment — with live stock accuracy across zones.',
    description:
      'MUTU WMS gives warehouse teams a single system for inventory, orders, and floor execution. Barcode-ready workflows reduce stockouts and overstock, while supervisors see pick rates, open orders, and critical SKUs in one place.',
    image: '/products/warehouse.png',
    features: [
      'Multi-zone inventory management',
      'Order processing & fulfillment',
      'Barcode scanning workflows',
      'Stock level alerts',
      'Warehouse analytics',
    ],
    outcomes: [
      'Higher inventory accuracy across bins and zones',
      'Faster picking with clearer work queues',
      'Fewer stockouts through proactive low-stock signals',
    ],
    capabilities: [
      'Goods receipt and putaway',
      'Pick / pack / ship workflows',
      'Cycle counting and adjustments',
      'SKU and batch visibility',
      'Multi-warehouse support',
    ],
    idealFor: ['Distribution centers', 'Retail backrooms', '3PL operators'],
  },
  {
    id: 'transport',
    name: 'Transport Management System',
    shortName: 'Transport',
    tagline: 'Fleet dispatch & tracking',
    shortDescription:
      'Plan, dispatch, and track transport operations — vehicles, drivers, routes, and trip status in one live view.',
    description:
      'MUTU Transport connects fleet GPS, dispatch status, and trip management so logistics teams know what is en route, idle, or loading. Optimize routes, monitor utilization, and keep operations informed with reliable ETAs.',
    image: '/products/transport.png',
    features: [
      'GPS fleet tracking',
      'Dispatch & driver assignment',
      'Route optimization',
      'Fuel & maintenance signals',
      'Trip performance views',
    ],
    outcomes: [
      'Better on-time performance with live vehicle status',
      'Higher fleet utilization and fewer empty moves',
      'Clear accountability across drivers and dispatchers',
    ],
    capabilities: [
      'Live map and vehicle board',
      'Trip and load management',
      'Maintenance and fuel tracking',
      'Driver performance insights',
      'Dispatch workflows',
    ],
    idealFor: ['Fleet operators', 'Logistics providers', 'In-house transport teams'],
  },
  {
    id: 'tiep',
    name: 'TIEP Management System',
    shortName: 'TIEP',
    tagline: 'Transport corridor orchestration',
    shortDescription:
      'Orchestrate multi-hub transport corridors end to end — loads, routes, and weekly savings insights across your logistics network.',
    description:
      'MUTU TIEP is built for transport integrated execution and planning. Coordinate corridor loads between hubs, optimize routing across the network, and give planners a clear picture of active corridors, scheduled moves, and performance trends — tightly connected to the vehicles and warehouses already running on MUTU.',
    image: '/products/tiep.png',
    features: [
      'Multi-corridor load planning',
      'Hub-to-hub route orchestration',
      'Network visibility board',
      'Weekly savings insights',
      'Integration with fleet & warehouse',
    ],
    outcomes: [
      'Clearer corridor-level planning across hubs',
      'Fewer empty or poorly sequenced moves',
      'Better coordination between transport planning and live fleet ops',
    ],
    capabilities: [
      'Corridor and lane management',
      'Load allocation across hubs',
      'Route planning and optimization',
      'Performance and savings reporting',
      'Sync with Transport and Warehouse modules',
    ],
    idealFor: ['Multi-hub logistics networks', 'Regional carriers', 'Integrated transport planners'],
  },
  {
    id: 'factory',
    name: 'Factory Management System',
    shortName: 'Factory',
    tagline: 'Production with quality built in',
    shortDescription:
      'Plan production, monitor lines, and hold quality — work orders, targets, and defect signals in one manufacturing view.',
    description:
      'MUTU Factory helps manufacturing teams align planning with floor reality. Track line targets, open work orders, QC outcomes, and resource use so supervisors can correct issues early and keep shifts on schedule.',
    image: '/products/factory.png',
    features: [
      'Production planning',
      'Line-level progress tracking',
      'Quality control checkpoints',
      'Work order management',
      'OEE-style performance views',
    ],
    outcomes: [
      'Fewer missed targets with live line visibility',
      'Faster response to quality issues',
      'Clearer shift handoffs and work-order status',
    ],
    capabilities: [
      'Shift and line scheduling',
      'Machine / resource allocation',
      'Defect logging and QC gates',
      'Material consumption tracking',
      'Production KPIs and reports',
    ],
    idealFor: ['Manufacturers', 'Assembly plants', 'Packaging operations'],
  },
  {
    id: 'finance',
    name: 'Finance Management System',
    shortName: 'Finance',
    tagline: 'Money flow with operational context',
    shortDescription:
      'Connect invoicing, costs, and financial visibility to the same operations stack your teams already run.',
    description:
      'MUTU Finance brings operational transactions into a clear financial picture — invoices, receivables, cost centers, and period reporting — so finance and ops stop reconciling from separate spreadsheets.',
    image: '/products/finance.png',
    features: [
      'Invoicing & receivables',
      'Cost and expense tracking',
      'Period close reporting',
      'Operational cost linkage',
      'Finance dashboards',
    ],
    outcomes: [
      'Faster billing tied to completed operational work',
      'Clearer margin visibility by site or process',
      'Less manual reconciliation between ops and finance',
    ],
    capabilities: [
      'Customer and vendor invoicing',
      'Payment status tracking',
      'Cost center allocation',
      'Exportable financial reports',
      'Role-based finance access',
    ],
    idealFor: ['Growing enterprises', 'Multi-site operators', 'Finance + ops teams'],
  },
  {
    id: 'hr',
    name: 'HR Management System',
    shortName: 'HR',
    tagline: 'People ops that stay in sync',
    shortDescription:
      'Manage employees, attendance, and workforce basics alongside your MUTU operations modules.',
    description:
      'MUTU HR (HRIS) helps you keep employee records, attendance, and team structure organized — so workforce data supports the same sites and operations your warehouse, transport, and factory teams rely on.',
    image: '/products/hr.png',
    features: [
      'Employee profiles & records',
      'Attendance tracking',
      'Team and role structure',
      'Leave and status workflows',
      'HR reporting basics',
    ],
    outcomes: [
      'Cleaner employee master data across sites',
      'Simpler attendance and leave visibility',
      'Workforce context connected to operational systems',
    ],
    capabilities: [
      'Onboarding and employee records',
      'Attendance and time status',
      'Department / site organization',
      'Basic leave requests',
      'Headcount and attendance reports',
    ],
    idealFor: ['Multi-site employers', 'Ops-heavy organizations', 'Growing HR teams'],
  },
];

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
