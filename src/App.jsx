import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Tracker from './components/Tracker';
import Stats from './components/Stats';
import Contact from './components/Contact';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';

function HomePage(){
  return (
    <>
      <Hero />
      <Tracker />
      <ServicesGrid />
      <Stats />
    </>
  );
}

function ServicesPage(){
  return (
    <>
      <div className="pt-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-extrabold">Our Services</h1>
          <p className="text-white/80 mt-2">Everything you need to ship, print, and run your business.</p>
        </div>
      </div>
      <ServicesGrid />
    </>
  );
}

function AboutPage(){
  return (
    <>
      <div className="pt-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-extrabold">Our Story</h1>
          <p className="text-white/80 mt-2 max-w-3xl">MAS Mail & Print Center is a trusted local business in Rockford, offering fast, reliable print, ship, and business services. Our mission is to support individuals and small businesses with affordable and professional solutions.</p>
        </div>
      </div>
      <Stats />
    </>
  );
}

function ContactPage(){
  return (
    <>
      <div className="pt-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-extrabold">Get in Touch</h1>
          <p className="text-white/80 mt-2">We’d love to hear from you.</p>
        </div>
      </div>
      <Contact />
    </>
  );
}

function BlogPage(){
  return (
    <>
      <div className="pt-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-extrabold">Blog</h1>
          <p className="text-white/80 mt-2">News, guides, and insights for small businesses and local shipping needs.</p>
        </div>
      </div>
      <BlogGrid />
    </>
  );
}

export default function App(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
