import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About MNH Cables | Premium Cable Manufacturing',
  description: 'Learn about MNH Cables - 15+ years of excellence in cable manufacturing with quality assurance and customer satisfaction.',
};

export default function AboutPage() {
  const values = [
    { title: 'Quality', description: 'Premium materials and strict quality control' },
    { title: 'Reliability', description: 'Consistent performance across all products' },
    { title: 'Innovation', description: 'Modern manufacturing with cutting-edge technology' },
    { title: 'Support', description: 'Expert guidance and customer-first approach' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary to-primary/90">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About MNH Cables</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Leading manufacturer of premium cable solutions trusted by thousands of businesses across India
            </p>
          </div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 md:px-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Founded with a mission to provide premium cable solutions, MNH Cables has grown to become one of India's most trusted cable manufacturers.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                With over 15 years of experience, we've served more than 1,000 satisfied clients across diverse industries including construction, security, telecommunications, and more.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our commitment to excellence, innovation, and customer satisfaction drives everything we do. We invest in modern technology and skilled workforce to deliver products that exceed expectations.
              </p>
            </div>
            <div className="bg-gradient-primary rounded-xl p-8 text-white">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold">15+</p>
                  <p>Years of Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">1000+</p>
                  <p>Happy Clients</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">500+</p>
                  <p>Successful Projects</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">ISO</p>
                  <p>Quality Certified</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8 bg-background dark:bg-gray-800">
        <Container>
          <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch today to discuss your cable requirements and discover how we can help your business thrive.
            </p>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
