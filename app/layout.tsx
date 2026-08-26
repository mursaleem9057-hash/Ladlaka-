import type { Metadata } from 'next';
import './globals.css';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';

export const metadata: Metadata = {
  title: 'LADLAKA - Marketplace & Delivery',
  description: 'LADLAKA: Shop from your favorite sellers and get fast delivery. Download the app or order online today!',
  keywords: 'marketplace, delivery, online shopping, LADLAKA',
  openGraph: {
    title: 'LADLAKA - Marketplace & Delivery',
    description: 'Shop from your favorite sellers and get fast delivery',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ef4444" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-white text-gray-900">
        {/* Client-side service worker registration and online/offline handling */}
        <ServiceWorkerRegistration />

        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
