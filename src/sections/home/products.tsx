'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/config/constants';

export function Products() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background dark:bg-gray-800">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Our Products</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Premium Cable Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            High-quality cables manufactured with precision for reliability and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="w-full h-48 bg-gradient-primary rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl">📦</div>
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-text dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-text dark:text-white mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, i) => (
                      <Badge key={i} variant="accent">{app}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
