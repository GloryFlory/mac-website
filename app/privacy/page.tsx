'use client';

import { FC } from 'react';
import Reveal from '../components/Reveal';

const PrivacyPage: FC = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-sea mb-6">
            Privacy Policy
          </h1>
          <p className="text-zinc-600 mb-12">
            Last updated: February 2, 2026
          </p>
        </Reveal>

        <div className="prose prose-lg max-w-none">
          <Reveal delay={0.1}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Introduction</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                Mediterranean Acro Convention ("MAC", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or register for our event.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.2}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Information We Collect</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                We collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li><strong>Contact Information:</strong> Name, email address, phone number when you register for the convention</li>
                <li><strong>Registration Details:</strong> Accommodation preferences, dietary requirements, workshop selections</li>
                <li><strong>Payment Information:</strong> Processed securely through our payment provider (WeTravel) - we do not store credit card details</li>
                <li><strong>Communication Data:</strong> Correspondence when you contact us via email or social media</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.3}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">How We Use Your Information</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Process your convention registration and payment</li>
                <li>Communicate event updates, schedule changes, and important information</li>
                <li>Arrange accommodations and meals according to your preferences</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send promotional materials about future events (with your consent)</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.4}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Data Sharing</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                We do not sell your personal data. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li><strong>Riviera Spa Hotel:</strong> To arrange your accommodation and dietary requirements</li>
                <li><strong>Payment Processor (WeTravel):</strong> To process your registration payment securely</li>
                <li><strong>Teachers:</strong> Limited information necessary for workshop organization</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.5}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Data Security</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.6}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Your Rights</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                Under GDPR (if applicable), you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.7}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Cookies</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                Our website currently does not use cookies or tracking technologies. If this changes, we will update this policy and notify users accordingly.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.8}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">Contact Us</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <p className="text-zinc-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:mediterraneanacroconvention@gmail.com" className="text-brand-sea hover:text-brand-sun underline">
                  mediterraneanacroconvention@gmail.com
                </a>
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
