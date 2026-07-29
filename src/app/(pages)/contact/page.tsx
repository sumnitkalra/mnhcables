import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/forms/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us | MNH Cables - Get in Touch',
  description: 'Contact MNH Cables for quotes, support, or to discuss your cable requirements.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary to-primary/90">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Contact our team for quotes, support, or to discuss your cable requirements
            </p>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 md:px-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  📞 Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <a href="tel:+919555555055" className="hover:text-secondary transition-colors">
                    +91 9555555055
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  📧 Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <a href="mailto:mnhcables@gmail.com" className="hover:text-secondary transition-colors">
                    mnhcables@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  ⏰ Working Hours
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sunday–Friday<br />
                  10 AM – 6 PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  💬 WhatsApp
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <a
                    href="https://wa.me/919555555055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    Chat with us on WhatsApp
                  </a>
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft">
                <h2 className="text-3xl font-bold text-primary dark:text-white mb-8">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
