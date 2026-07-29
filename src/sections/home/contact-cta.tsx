'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ContactCTA() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-primary to-primary/80 dark:from-primary/90 dark:to-primary/70">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white hover:bg-white/30">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Cable Needs?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Connect with our expert team today for premium cable solutions tailored to your requirements. Fast quotes, reliable delivery, exceptional support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get Quote Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white/10"
            >
              View Catalog
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <p className="text-3xl mb-2">📞</p>
              <p className="text-white font-semibold">Call Us</p>
              <p className="text-gray-200">+91 9555555055</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <p className="text-3xl mb-2">📧</p>
              <p className="text-white font-semibold">Email Us</p>
              <p className="text-gray-200">mnhcables@gmail.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <p className="text-3xl mb-2">⏰</p>
              <p className="text-white font-semibold">Hours</p>
              <p className="text-gray-200">Sunday–Friday, 10 AM – 6 PM</p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
