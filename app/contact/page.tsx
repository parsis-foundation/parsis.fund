import type { Metadata } from 'next';
import { ContactContent } from '@/components/contact-content';

export const metadata: Metadata = {
  title: 'Contact | Parsis Fund',
  description: 'Official communication channels for HRH Parsis Fund. All official communications originate only from verified channels.',
  openGraph: {
    title: 'Contact | Parsis Fund',
    description: 'Official communication channels for HRH Parsis Fund.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
