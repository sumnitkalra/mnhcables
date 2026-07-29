'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function About() {
  const features = [
    'Premium raw materials',
    'Modern manufacturing',
    'Competitive pricing',
    'Quality assurance',
    'On-time delivery',
    'Expert support',
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background dark:bg-gray-800">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square bg-gradient-primary rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚙️</div>
                  <p className="text-white font-semibold">Advanced Technology</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
              Why Choose MNH Cables
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              With over 15 years of experience, MNH Cables has established itself as a trusted name in cable manufacturing. We combine cutting-edge technology with traditional craftsmanship to deliver products that exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-text dark:text-white">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
