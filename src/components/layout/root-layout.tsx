'use client';

import { ReactNode } from 'react';
import { Navigation } from '@/components/navigation/navigation';
import { Footer } from '@/components/layout/footer';
import { ScrollProgress } from '@/components/common/scroll-progress';
import { BackToTop } from '@/components/common/back-to-top';
import { StickyButtons } from '@/components/common/sticky-buttons';
import { ThemeProvider } from '@/components/providers/theme-provider';

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-background text-text transition-colors duration-300">
        <ScrollProgress />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <StickyButtons />
      </div>
    </ThemeProvider>
  );
}
