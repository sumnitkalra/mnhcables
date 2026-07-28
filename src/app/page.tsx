import { Hero } from '@/sections/home/hero';
import { Statistics } from '@/sections/home/statistics';
import { About } from '@/sections/home/about';
import { Products } from '@/sections/home/products';
import { ManufacturingProcess } from '@/sections/home/manufacturing-process';
import { Industries } from '@/sections/home/industries';
import { Testimonials } from '@/sections/home/testimonials';
import { FAQ } from '@/sections/home/faq';
import { ContactCTA } from '@/sections/home/contact-cta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Statistics />
      <About />
      <Products />
      <ManufacturingProcess />
      <Industries />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
