import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  product: z.string().min(1, 'Please select a product'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
