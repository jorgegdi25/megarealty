import type { Metadata } from 'next';
import ConditionalLayout from '@/components/ConditionalLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mega Realty International',
  description: 'The New Real Estate Concept in Florida',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
