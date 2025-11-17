import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [counts, setCounts] = useState({ a: 0, b: 0, c: 0 });

  useEffect(() => {
    if (!isInView) return;
    const targets = { a: 10000, b: 500, c: 5 };
    const start = performance.now();
    const duration = 1200;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setCounts({
        a: Math.floor(targets.a * t),
        b: Math.floor(targets.b * t),
        c: Math.floor(targets.c * t),
      });
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView]);

  const Card = ({ label, value }) => (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="p-6 rounded-xl bg-white border border-gray-200">
      <div className="text-3xl font-extrabold text-gray-900">{value}</div>
      <div className="text-gray-600 mt-1">{label}</div>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">By the Numbers</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <Card label="Packages Shipped" value={`${counts.a.toLocaleString()}+`} />
          <Card label="Businesses Served" value={`${counts.b.toLocaleString()}+`} />
          <Card label="Years in Business" value={`${counts.c}+`} />
        </div>
      </div>
    </section>
  );
}
