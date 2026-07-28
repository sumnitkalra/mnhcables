import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { RootLayout } from '@/components/layout/root-layout';
import { Toaster } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MNH Cables | Reliable Cable Solutions Built for Performance',
  description: 'Premium CCTV, CAT5, CAT6 and networking cables for distributors, contractors and businesses across India. 15+ years of manufacturing excellence.',
  keywords: 'cables, CCTV cables, CAT5 cables, CAT6 cables, networking cables, cable manufacturing, India',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mnhcables.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mnhcables.com',
    siteName: 'MNH Cables',
    title: 'MNH Cables | Reliable Cable Solutions Built for Performance',
    description: 'Premium CCTV, CAT5, CAT6 and networking cables for distributors, contractors and businesses across India.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MNH Cables',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MNH Cables',
    description: 'Premium Cable Solutions Built for Performance',
    creator: '@mnhcables',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mnhcables.com',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MNH Cables',
              url: 'https://mnhcables.com',
              logo: 'https://mnhcables.com/logo.png',
              description: 'Premium cable manufacturing company',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+91-9555555055',
                email: 'mnhcables@gmail.com',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <RootLayout>
          {children}
        </RootLayout>
        <Toaster
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
