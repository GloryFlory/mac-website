import { FC } from 'react';
import Button from './Button';
import Reveal from './Reveal';

const FinalCTA: FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-6 bg-gradient-to-br from-brand-sea to-[#0D5A8A] dark:from-brand-sea dark:to-[#0A4A70] overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-sun rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <Reveal>
          <div className="space-y-8">
            {/* Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Ready for MAC 2026?
            </h2>
            
            {/* Supportive Line */}
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join us in Malta for five unforgettable days of connection, growth, and Mediterranean magic.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                href="https://tickets.example.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="shadow-2xl hover:shadow-brand-sun/50"
              >
                Secure Your Spot
              </Button>
            </div>

            {/* Divider */}
            <div className="pt-8">
              <div className="w-16 h-0.5 bg-white/30 mx-auto" />
            </div>

            {/* Contact Information */}
            <div className="space-y-4 text-white/80">
              <p className="text-sm uppercase tracking-wider font-medium text-white/60">
                Get in Touch
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm sm:text-base">
                {/* Email */}
                <a
                  href="mailto:hello@mac-convention.com"
                  className="flex items-center gap-2 hover:text-brand-sun transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>hello@mac-convention.com</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+35621234567"
                  className="flex items-center gap-2 hover:text-brand-sun transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+356 2123 4567</span>
                </a>

                {/* Website/Social */}
                <a
                  href="https://instagram.com/mac_convention"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-sun transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>@mac_convention</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
