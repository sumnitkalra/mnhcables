'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // EmailJS integration
      // For now, just show success message
      toast.success('Message sent! We will contact you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-text mb-2">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none transition-all duration-300"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-text mb-2">
            Company Name *
          </label>
          <input
            type="text"
            placeholder="Your company"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none transition-all duration-300"
            {...register('company')}
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-text mb-2">
            Email Address *
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none transition-all duration-300"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-text mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="+91 XXXXXXXXXX"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none transition-all duration-300"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Product */}
        <div>
          <label className="block text-sm font-semibold text-text mb-2">
            Product *
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none transition-all duration-300"
            {...register('product')}
          >
            <option value="">Select a product</option>
            <option value="CCTV Cable">CCTV Cable</option>
            <option value="CAT5 Cable">CAT5 Cable</option>
            <option value="CAT6 Cable">CAT6 Cable</option>
            <option value="Networking Cable">Networking Cable</option>
          </select>
          {errors.product && (
            <p className="text-red-500 text-sm mt-1">{errors.product.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-text mb-2">
          Message *
        </label>
        <textarea
          placeholder="Tell us about your requirements"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:outline-none transition-all duration-300 resize-none"
          {...register('message')}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
