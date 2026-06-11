import type { Metadata } from 'next';
import { StatementsContent } from '@/components/statements-content';

export const metadata: Metadata = {
  title: 'Statements | Parsis Fund',
  description: 'Official statements and addresses from HRH Parsis Fund on matters of importance.',
  openGraph: {
    title: 'Statements | Parsis Fund',
    description: 'Official statements and addresses from HRH Parsis Fund on matters of importance.',
  },
};

export default function StatementsPage() {
  return <StatementsContent />;
}
