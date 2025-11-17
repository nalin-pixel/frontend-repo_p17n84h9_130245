import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl"
        >
          Your Local Partner for Mail, Print & Business Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl"
        >
          Fast, reliable, and friendly service in Rockford.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#track" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#FFD700] text-black font-semibold shadow hover:shadow-lg transition">
            Track a Package
          </a>
          <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white/10 text-white backdrop-blur border border-white/20 hover:bg-white/20 transition font-semibold">
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
