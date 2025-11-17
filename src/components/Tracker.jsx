import { motion } from 'framer-motion';
import { useState } from 'react';

const carriers = {
  USPS: (n) => `https://tools.usps.com/go/TrackConfirmAction?tLabels=${n}`,
  UPS: (n) => `https://www.ups.com/track?tracknum=${n}`,
  DHL: (n) => `https://www.dhl.com/global-en/home/tracking/tracking-express.html?submit=1&tracking-id=${n}`,
};

export default function Tracker() {
  const [number, setNumber] = useState('');
  const [carrier, setCarrier] = useState('USPS');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!number) return;
    const url = carriers[carrier](encodeURIComponent(number.trim()));
    window.open(url, '_blank');
  };

  return (
    <section id="track" className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-black to-zinc-900 border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Track a Package</h2>
          <p className="mt-2 text-white/70">Enter your tracking number and pick a carrier.</p>
          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-3">
            <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Tracking number" className="sm:col-span-3 px-4 py-3 rounded-md bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:border-[#FFD700]" />
            <select value={carrier} onChange={(e) => setCarrier(e.target.value)} className="sm:col-span-1 px-4 py-3 rounded-md bg-white/10 text-white outline-none border border-white/20 focus:border-[#FFD700]">
              {Object.keys(carriers).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <button type="submit" className="sm:col-span-1 px-4 py-3 rounded-md bg-[#FFD700] text-black font-semibold hover:shadow-lg transition">Track</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
