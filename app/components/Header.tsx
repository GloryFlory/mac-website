'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Schedule', href: '/schedule' },
    { name: 'Teachers', href: '/teachers' },
    { name: 'Venue', href: '/venue' },
    { name: 'Info', href: '/info' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`font-serif text-2xl font-bold transition-colors ${
              scrolled ? 'text-brand-sea' : 'text-white drop-shadow-lg'
            }`}>
              MAC
              <span className="text-brand-sun ml-1">2026</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  scrolled
                    ? pathname === item.href
                      ? 'text-brand-sea bg-brand-sun/10'
                      : 'text-zinc-700 hover:text-brand-sea hover:bg-brand-sand/20'
                    : pathname === item.href
                      ? 'text-white bg-white/20'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#pricing"
              className="ml-4 px-6 py-2.5 bg-brand-sun text-zinc-900 font-semibold rounded-full hover:bg-brand-sun/90 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Tickets
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-zinc-700 hover:bg-brand-sand/20'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-b-2xl shadow-lg">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-brand-sun/10 text-brand-sea'
                      : 'text-zinc-700 hover:bg-brand-sand/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-brand-sun text-zinc-900 font-semibold rounded-lg text-center hover:bg-brand-sun/90 transition-colors"
              >
                Get Tickets
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
