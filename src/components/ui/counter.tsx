'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
}

export function Counter({ end, label, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 100;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600 dark:text-gray-300">{label}</p>
    </div>
  );
}
