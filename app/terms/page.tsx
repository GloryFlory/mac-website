'use client';

import { FC } from 'react';
import Reveal from '../components/Reveal';

const TermsPage: FC = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-sea mb-6">
            Terms & Conditions
          </h1>
          <p className="text-zinc-600 mb-12">
            Last updated: February 2, 2026
          </p>
        </Reveal>

        <div className="prose prose-lg max-w-none">
          <Reveal delay={0.1}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">1. Agreement to Terms</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                By registering for the Mediterranean Acro Convention 2026 ("MAC 2026"), you agree to be bound by these Terms and Conditions. Please read them carefully before completing your registration.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.2}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">2. Registration & Payment</h2>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Registration is confirmed upon receipt of payment through our booking platform (WeTravel)</li>
                <li>All prices are in EUR and include accommodation, meals (breakfast & dinner buffet), and all workshop access</li>
                <li>Payment plans may be available - see booking platform for details</li>
                <li>We reserve the right to refuse registration at our discretion</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.3}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">3. Cancellation & Refund Policy</h2>
              
              <div className="mb-4">
                <p className="text-zinc-700 leading-relaxed mb-3">
                  <strong>Cancellations before 31 March 2026:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700 mb-4">
                  <li>Full refund minus a €40 administrative fee</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-zinc-700 leading-relaxed mb-3">
                  <strong>From 31 March 2026 onward:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700 mb-4">
                  <li>The €299 deposit is non-refundable</li>
                  <li>Tickets are non-refundable, as accommodation and event costs are fully committed</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-zinc-700 leading-relaxed mb-3">
                  <strong>Super Early Bird tickets:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700 mb-4">
                  <li>Require full payment</li>
                  <li>€299 is treated as a non-refundable deposit from 31 March 2026</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-zinc-700 leading-relaxed mb-3">
                  <strong>Name Changes & Modifications:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-700 mb-4">
                  <li>Name changes are allowed until 15 September 2026 for a €40 admin fee</li>
                  <li>Room upgrades and add-ons are non-refundable after 31 March 2026</li>
                </ul>
              </div>

              <div className="p-4 bg-brand-sun/10 rounded-lg mb-4">
                <p className="text-zinc-700 leading-relaxed">
                  <strong>Important:</strong> All cancellation and refund requests must be sent to{' '}
                  <a href="mailto:mediterraneanacroconvention@gmail.com" className="text-brand-sea hover:text-brand-sun underline">
                    mediterraneanacroconvention@gmail.com
                  </a>
                </p>
                <p className="text-zinc-700 leading-relaxed mt-2">
                  We strongly recommend purchasing travel insurance that covers cancellation.
                </p>
              </div>

              <p className="text-zinc-700 leading-relaxed mb-4">
                <strong>Cancellation by Organizers:</strong> In the unlikely event that MAC 2026 is cancelled, participants will receive a full refund.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.4}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">4. Health & Safety</h2>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Participants must be in good physical health and capable of participating in acrobatic activities</li>
                <li>You are responsible for informing instructors of any injuries, limitations, or medical conditions</li>
                <li>Participation in workshops is entirely at your own risk</li>
                <li>We recommend appropriate insurance coverage for the activities</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.5}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">5. Liability Waiver</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                By participating in MAC 2026, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Acrobatic activities carry inherent risks of injury</li>
                <li>You participate entirely at your own risk</li>
                <li>MAC, its organizers, teachers, and venue are not liable for any injuries, accidents, loss, or damage</li>
                <li>You have adequate insurance coverage for your participation</li>
                <li>You will follow all safety guidelines and instructions provided by teachers</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.6}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">6. Code of Conduct</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                All participants must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Treat all attendees, teachers, and staff with respect</li>
                <li>Always ask for consent before physical contact</li>
                <li>Respect personal boundaries and practice safe spotting</li>
                <li>Follow venue rules and local laws</li>
                <li>Refrain from harassment, discrimination, or inappropriate behavior</li>
              </ul>
              <p className="text-zinc-700 leading-relaxed mt-4">
                Violation of the code of conduct may result in removal from the event without refund.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.7}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">7. Photography & Media</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                By attending MAC 2026, you consent to being photographed and filmed. These images may be used for promotional purposes on our website, social media, and marketing materials. If you do not wish to be photographed, please inform the organizers.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.8}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">8. Schedule Changes</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                We reserve the right to make changes to the schedule, teachers, and program as necessary. Every effort will be made to notify participants of significant changes in advance.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.9}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">9. Travel & Accommodation</h2>
              <ul className="list-disc pl-6 space-y-2 text-zinc-700">
                <li>Participants are responsible for arranging their own travel to Malta</li>
                <li>Accommodation at Riviera Spa Hotel is included in the registration fee for the convention dates (October 7-11, 2026)</li>
                <li>Additional nights at the hotel may be available upon request and subject to availability - please contact us at{' '}
                  <a href="mailto:mediterraneanacroconvention@gmail.com" className="text-brand-sea hover:text-brand-sun underline">
                    mediterraneanacroconvention@gmail.com
                  </a>
                </li>
                <li>Check-in and check-out times follow hotel policy</li>
                <li>Any damage to hotel property will be the participant's responsibility</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={1.0}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">10. Force Majeure</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                MAC is not liable for failure to perform obligations due to circumstances beyond our reasonable control, including natural disasters, pandemics, government restrictions, or other force majeure events.
              </p>
            </section>
          </Reveal>

          <Reveal delay={1.1}>
            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-brand-sea mb-4">11. Contact Information</h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                For questions about these Terms & Conditions, please contact:
              </p>
              <p className="text-zinc-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:mediterraneanacroconvention@gmail.com" className="text-brand-sea hover:text-brand-sun underline">
                  mediterraneanacroconvention@gmail.com
                </a>
              </p>
            </section>
          </Reveal>

          <Reveal delay={1.2}>
            <section className="mb-8">
              <p className="text-sm text-zinc-600 italic">
                By completing your registration, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
