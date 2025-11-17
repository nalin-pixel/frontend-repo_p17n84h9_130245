import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItem = (
    path,
    label
  ) => (
    <NavLink
      to={path}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
          isActive ? 'text-[#FFD700]' : 'text-white/90 hover:text-[#FFD700]'
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-extrabold tracking-tight text-lg">
          <span className="text-[#FFD700]">MAS</span> Mail & Print
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItem('/', 'Home')}
          {navItem('/services', 'Services')}
          {navItem('/about', 'About')}
          {navItem('/contact', 'Contact')}
          {navItem('/blog', 'Blog')}
        </nav>
        <button onClick={() => setOpen(v => !v)} className="md:hidden text-white" aria-label="Open menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 py-3 flex flex-col">
            {navItem('/', 'Home')}
            {navItem('/services', 'Services')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
            {navItem('/blog', 'Blog')}
          </div>
        </div>
      )}
    </header>
  );
}
