'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Teachers', href: '/teachers' },
    { name: 'Info', href: '/info' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-sand/30 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-sun to-brand-sea flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-xl font-bold text-brand-sea">MAC</div>
              <div className="text-xs text-zinc-500 -mt-0.5">2026</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-brand-sun/10 text-brand-sea'
                    : 'text-zinc-600 hover:text-brand-sea hover:bg-brand-sand/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#pricing"
              className="ml-4 px-6 py-2 bg-brand-sun text-black font-semibold rounded-full hover:bg-brand-sun/90 hover:scale-105 transition-all duration-200 shadow-md"
            >
              Get Tickets
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-zinc-600 hover:bg-brand-sand/20 transition-colors"
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
          <div className="md:hidden py-4 border-t border-brand-sand/30">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-brand-sun/10 text-brand-sea'
                      : 'text-zinc-600 hover:bg-brand-sand/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-brand-sun text-black font-semibold rounded-lg text-center hover:bg-brand-sun/90 transition-colors"
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
