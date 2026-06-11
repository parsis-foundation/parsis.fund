import type { Metadata } from 'next';
import { WorksContent } from '@/components/works-content';

export const metadata: Metadata = {
  title: 'Works | Parsis Fund',
  description: 'Art, technology, and innovation—visual arts, privacy technology, investment, writing, and creative practice.',
  openGraph: {
    title: 'Works | Parsis Fund',
    description: 'Art, technology, and innovation—visual arts, privacy technology, investment, writing, and creative practice.',
  },
};

export default function WorksPage() {
  return <WorksContent />;
}
