'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Counter } from '@/components/ui/counter';
import { useInViewport } from '@/hooks/useScroll';

export function Statistics() {
  const ref = useRef(null);
  const isInViewport = useInViewport(ref);

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isInViewport && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
              >
                <Counter end={15} label="Years Experience" suffix="+" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Counter end={1000} label="Happy Clients" suffix="+" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Counter end={500} label="Projects Delivered" suffix="+" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                    ISO
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Quality Standards</p>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
