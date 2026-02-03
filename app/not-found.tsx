import Link from 'next/link';
import Button from './components/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-brand-sand/20 to-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="font-serif text-6xl sm:text-8xl font-bold text-brand-sea mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-zinc-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/schedule" variant="secondary" size="lg">
            View Schedule
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200">
          <p className="text-sm text-zinc-500 mb-4">Quick links:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/teachers" className="text-brand-sea hover:text-brand-sun underline">
              Teachers
            </Link>
            <Link href="/venue" className="text-brand-sea hover:text-brand-sun underline">
              Venue
            </Link>
            <Link href="/info" className="text-brand-sea hover:text-brand-sun underline">
              Info
            </Link>
            <a 
              href="https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-sea hover:text-brand-sun underline"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
