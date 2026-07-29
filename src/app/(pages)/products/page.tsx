import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/config/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products | MNH Cables - CCTV, CAT5, CAT6 & Networking Cables',
  description: 'Browse our premium cable products - CCTV cables, CAT5, CAT6, and networking cables. Quality assured and tested.',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary to-primary/90">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Premium cable solutions engineered for performance and reliability
            </p>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="py-20 px-4 md:px-8">
        <Container>
          <div className="space-y-16">
            {PRODUCTS.map((product, index) => (
              <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <Badge variant="secondary" className="mb-4">{product.id.toUpperCase()}</Badge>
                  <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {product.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-bold text-primary dark:text-white mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-bold text-primary dark:text-white mb-4">Applications:</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, i) => (
                        <Badge key={i} variant="accent">{app}</Badge>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button variant="secondary" size="lg">
                      Get Quote
                    </Button>
                  </Link>
                </div>
                <div className="bg-gradient-primary rounded-xl p-8 text-white min-h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">📦</div>
                    <p className="font-semibold text-lg">{product.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-background dark:bg-gray-800">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We can customize cables based on your specific requirements. Contact our team for details.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Our Sales Team
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
