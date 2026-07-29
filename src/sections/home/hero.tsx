'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Reliable Cable Solutions Built for{' '}
              <span className="text-secondary">Performance</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Manufacturing premium CCTV, CAT5, CAT6 and networking cables for distributors, contractors and businesses across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Get Quote
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                View Products
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <p className="text-3xl font-bold text-secondary">15+</p>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">1000+</p>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">500+</p>
                <p className="text-gray-300">Projects Delivered</p>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square bg-gradient-secondary rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏭</div>
                  <p className="text-white font-semibold">Premium Manufacturing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
