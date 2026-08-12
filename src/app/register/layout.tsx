import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Registration | MUTU',
  description:
    'Register your company for MUTU enterprise solutions. Create your company account and select a MUTU service module.',
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
