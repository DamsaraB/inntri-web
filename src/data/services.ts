export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  outcomes: string[];
  capabilities: string[];
};

export const services: Service[] = [
  {
    id: 'custom',
    name: 'Custom Software Development',
    shortDescription:
      'Tailored software solutions designed to address your unique business challenges and integrate seamlessly with your existing systems.',
    description:
      'We design and build custom software that fits the way your business actually works — from internal tools to customer-facing platforms. Every solution is engineered for reliability, scalability, and long-term maintainability.',
    image: '/services/custom-software.png',
    outcomes: [
      'Solutions shaped around your workflows, not generic templates',
      'Clean architecture that grows with your team and data',
      'Faster delivery through iterative design and clear milestones',
    ],
    capabilities: [
      'Requirements discovery & solution architecture',
      'Full-stack application development',
      'System integration & API design',
      'Quality assurance and ongoing support',
    ],
  },
  {
    id: 'web',
    name: 'Web Application Development',
    shortDescription:
      'Modern, responsive web applications built with cutting-edge technologies that deliver exceptional user experiences and business value.',
    description:
      'From marketing sites to complex business portals, we build fast, accessible web applications that work across devices and scale with demand — with UX that keeps users confident and productive.',
    image: '/services/web-apps.png',
    outcomes: [
      'Responsive experiences that feel native on every screen',
      'Performance-focused frontends with measurable business impact',
      'Secure, maintainable codebases ready for continuous iteration',
    ],
    capabilities: [
      'SPA & multi-page web applications',
      'Admin portals and customer dashboards',
      'Design systems and component libraries',
      'SEO-friendly and accessible implementations',
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile App Development',
    shortDescription:
      'Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.',
    description:
      'We create mobile apps that feel polished in the hand — whether you need a field-ops companion for MUTU modules or a customer engagement product. Cross-platform or native, we optimize for usability and reliability.',
    image: '/services/mobile-apps.png',
    outcomes: [
      'Apps your teams and customers actually enjoy using',
      'Offline-friendly patterns for real-world field conditions',
      'Consistent brand experience across iOS and Android',
    ],
    capabilities: [
      'iOS & Android app development',
      'Cross-platform frameworks',
      'Push notifications and device integrations',
      'App store release and maintenance',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Systems',
    shortDescription:
      'Comprehensive enterprise solutions including ERP, CRM, and business intelligence systems that scale with your organization.',
    description:
      'Inntrilabs delivers enterprise-grade systems for operations, logistics, manufacturing, and more. We implement MUTU modules and custom enterprise platforms that give leadership clear visibility and teams reliable day-to-day tools.',
    image: '/services/enterprise-systems.png',
    outcomes: [
      'One source of truth across departments and sites',
      'Role-based control with audit-friendly processes',
      'Dashboards that turn operational data into decisions',
    ],
    capabilities: [
      'ERP / CRM / BI implementations',
      'MUTU warehouse, fleet, shipping & factory modules',
      'Workflow automation and reporting',
      'Multi-site rollout and training',
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & Automation Solutions',
    shortDescription:
      'Cloud infrastructure, DevOps automation, and scalable architectures that ensure reliability, security, and performance.',
    description:
      'We help you move confidently to the cloud — with secure infrastructure, automated deployments, and monitoring that keeps systems healthy. Less manual ops, more predictable releases.',
    image: '/services/cloud-automation.png',
    outcomes: [
      'Reliable uptime with scalable cloud architectures',
      'Automated pipelines that reduce release risk',
      'Security and observability built into the foundation',
    ],
    capabilities: [
      'Cloud architecture & migration',
      'CI/CD and infrastructure automation',
      'Monitoring, logging, and alerting',
      'Backup, recovery, and security hardening',
    ],
  },
];

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}
