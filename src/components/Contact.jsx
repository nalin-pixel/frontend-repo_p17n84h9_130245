import { useState } from 'react';
import { motion } from 'framer-motion';

const BACKEND = import.meta.env.VITE_BACKEND_URL || '';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch(`${BACKEND}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Error');
      setStatus('Message sent! We will get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Get in Touch</h2>
            <p className="mt-2 text-gray-600">We’re here to help with shipping, printing, and business services.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-black outline-none" />
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-black outline-none" />
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-black outline-none" />
              <button type="submit" className="px-6 py-3 rounded-md bg-black text-white font-semibold hover:bg-zinc-800 transition">Send</button>
              {status && <div className="text-sm text-gray-700">{status}</div>}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <iframe title="map" src="https://www.google.com/maps?q=5970%20E%20State%20St,%20Rockford,%20IL%2061108&output=embed" className="w-full h-64"></iframe>
            </div>
            <div className="flex items-center gap-6 text-gray-700">
              <div>
                <div className="font-bold">Address</div>
                <div>5970 E State St, Rockford, IL 61108</div>
              </div>
              <div>
                <div className="font-bold">Phone</div>
                <div>(815) 505-2509</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
