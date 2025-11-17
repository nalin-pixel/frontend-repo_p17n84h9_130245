import { motion } from 'framer-motion';

const items = [
  { icon: '📦', title: 'Shipping Services', description: 'USPS, UPS, DHL (no FedEx). Domestic and international. Label printing and drop-off.' },
  { icon: '📍', title: 'Package Tracking', description: 'Input field for tracking numbers. Choose carrier: USPS, UPS, or DHL. Show results or redirect to official site.' },
  { icon: '✉️', title: 'Mailbox Rental', description: 'Real street address, 24/7 access, and email/text alerts for incoming mail.' },
  { icon: '🖨️', title: 'Printing & Copies', description: 'Flyers, business cards, forms, and more. Color and black & white options.' },
  { icon: '📠', title: 'Faxing & Shredding', description: 'Send and receive faxes. On-site document shredding available.' },
  { icon: '📑', title: 'Document Scanning', description: 'Scan documents to email, USB, or PDF. Bulk and single-page options.' },
  { icon: '✒️', title: 'Notary Services', description: 'Professional notarization for legal, business, and personal documents.' },
  { icon: '🎨', title: 'Graphic Design', description: 'Logos, menus, flyers, business cards and more. In-house design services.' },
  { icon: '👕', title: 'Custom T-Shirts', description: 'DTF printing for custom apparel, staff shirts, or branded merch.' },
  { icon: '🪧', title: 'Posters & Banners', description: 'Large format signage for storefronts, events, and promotions.' },
  { icon: '💳', title: 'Credit Card Machines', description: 'Clover POS sales and setup. Includes merchant processing setup.' },
  { icon: '📦', title: 'Packaging & Supplies', description: 'Boxes, tape, bubble wrap, packing peanuts and more.' },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 rounded-xl border border-gray-200 hover:border-black/20 hover:shadow-lg transition bg-white">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-3 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
