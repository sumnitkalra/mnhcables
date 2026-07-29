'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';

export function Manufacturing() {
  const steps = [
    {
      title: 'Raw Material Selection',
      description: 'Premium copper and insulation materials sourced from certified suppliers',
      icon: '🔍',
    },
    {
      title: 'Wire Drawing',
      description: 'Precise copper drawing to exact specifications and gauges',
      icon: '⚙️',
    },
    {
      title: 'Insulation & Shielding',
      description: 'Advanced insulation and protective shielding application',
      icon: '🛡️',
    },
    {
      title: 'Jacket Application',
      description: 'Professional outer jacket coating for durability and protection',
      icon: '🎨',
    },
    {
      title: 'Testing & QA',
      description: 'Rigorous quality testing and compliance verification',
      icon: '✓',
    },
    {
      title: 'Packaging & Delivery',
      description: 'Secure packaging and timely delivery to your location',
      icon: '📦',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">How We Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each cable is manufactured with precision, quality, and care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-xl p-8 h-full">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
