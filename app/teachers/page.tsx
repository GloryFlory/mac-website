'use client';

import TeacherCard from '../components/TeacherCard';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

interface Teacher {
  id: number;
  name: string;
  duoName?: string;
  roleTags: string[];
  imageUrl: string;
  videoUrl?: string;
  location?: string;
  bio?: string;
  instagram?: string;
  youtube?: string;
  website?: string;
  levels: ('Beginner' | 'Intermediate' | 'Advanced')[];
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Coni and Mati',
    duoName: 'Acro Conciencia',
    roleTags: ['Whips', 'Whip-Pops', 'Icarians'],
    imageUrl: '/teachers/Coni and Mati/20230222_202131.jpg',
    videoUrl: '/teachers/Coni and Mati/20250404_143043.mp4',
    location: 'Chile',
    bio: `We are Coni and Mati, two movement lovers who found in Acroyoga a magical way to connect. We love exploring the endless possibilities that arise when two bodies move together — searching for softness, reaching for height, and discovering new ways to flow in connection.

We're especially drawn to Whipops and Icarians, and we enjoy playing with how to blend them creatively, safely, and with joy. Beyond tricks, what truly drives us is connection — with our bodies, with each other, and with the global Acroyoga community.

Traveling and sharing this practice fills our hearts. We're inspired by discovering how Acro is lived and taught in different places, and by meeting people who expand our perspective. Creating spaces to learn, trust, and play together is what we love most.`,
    levels: ['Intermediate', 'Advanced'],
    instagram: 'https://www.instagram.com/acro.conciencia/',
  },
  {
    id: 2,
    name: 'Caspian and Laura',
    duoName: 'AcroSpirit',
    roleTags: ['Flows', 'Icarians', 'Acro Dance', 'Pops'],
    imageUrl: '/teachers/Caspian and Laura/Vertical Headshots Cuddle.jpg',
  videoUrl: '/teachers/Caspian and Laura/Vertical Bali 2023 L-base Part2 Highlights Reel.mp4',
    location: 'Bali, Indonesia',
    bio: `Caspian and Laura are acro teachers who strive to be skilled in all areas of acro. They enjoy teaching students of all levels, and enjoy the different challenges and disciplines that acroyoga has to offer.

They are skilled in Icarians, Hand to Hands, Whips, Standing Acrobatics, Flows, Washing Machines, Therapeutics and more, with a current focus on more dynamic icarian and standing skills. 

They are increasingly inspired and motivated to improve their technique and understanding in all areas of acro whilst also being creative, and developing new moves and washing machines. 

Caspian is great in analysing and understanding technical details and Laura's embodiment and implementation of refinements, as well as her excited celebrations compliment their partnership. Together they have built a powerful and balanced teaching dynamic that allows each of their unique personalities and skills to shine together.

They had the opportunity to learn from many highly skilled teachers like Wybren Da Silva, Evan Josef, Pri & Jenn, Mediogiromas and many more who've all ignited the desire to be the best practitioners and teachers they can be!

Their classes are technical, focussed on giving detailed cues, smart progressions, personal coaching and always having safety as a high priority. They both have a background in martial arts which contributed to their interest in safe exit strategies, falling and rolling which they use in their own practice as well as in their teaching. 

They aim to empower their students by sharing a foundational understanding of acro skills, and also by embracing and highlighting the non-physical aspects of acroyoga. With the goal that students will safely and successfully grow their own practice independently. 

As a couple with a training and teaching partnership they experience the continuous opportunity that acroyoga offers to develop in communication, interpersonal skills and mindset, and like to share these benefits with students too. 

Bali is their home base where they run the AcroSpirit community, and organise the AcroSpirit festival, retreats and other acro training events. They also teach internationally and have taught at many amazing acro festivals across Europe and Asia.`,
    levels: ['Beginner', 'Intermediate', 'Advanced'],
    instagram: 'https://www.instagram.com/acrospirit/',
    youtube: 'https://youtube.com/c/TheAcroyogaShow',
  },
  {
    id: 3,
    name: 'Michal and Sara',
    duoName: 'Acro Misaris',
    roleTags: ['Whips', 'Pops', 'Icarians'],
    imageUrl: '/teachers/Michal and Sara/472529068_18033178583442028_7109940112774191055_n.jpg',
    videoUrl: '/teachers/Michal and Sara/AQMuydaPPC31VQIJj7EbpXt-HNolmjsNis836XvE7CLyu32uRiyXlPRvuXO9dCWAOxyKIRAY0snUzHRMWzlsnBmLGQIxhlPU4kIPe0k.mp4',
    location: 'Slovakia',
    bio: `We are Misaris! (Michal + Sara "Saris")

We are a partner and acrobatic duo based in Bratislava, where we conduct regular acroyoga lessons.

Sara is a professional physiotherapist and Michal is a fitness trainer, both of which we are passionate about professionally.

Saris discovered the world of acroyoga more than a decade ago while in high school. When we met five years ago, Michal was quickly smitten by Akroyoga. Thanks to Sara's experience and Michal's rich sporting past, we easily progressed together.

During our cooperation we have participated in a number of domestic and international workshops and festivals, where we not only trained but also coached. We enthusiastically combined our favourite disciplines such as whips, pops and icarians (bouncers) into smooth, harmonious sequences.

Recently we have also ventured into the artistic realm with performances that we have come to love as much as our audiences.`,
    levels: ['Intermediate', 'Advanced'],
    instagram: 'https://www.instagram.com/misaris_acro/',
  },
  {
    id: 4,
    name: 'Manas and Mira',
    roleTags: ['Flows', 'Washing Machines', 'Elegance'],
    imageUrl: '/teachers/Manas and Mira/IMG_1800.jpeg',
    videoUrl: '/teachers/Manas and Mira/Back to training some of our fave moves on day one in Morocco 😍.mp4',
    location: 'Germany / Sweden',
    bio: `Mira's joy is contagious, and she loves sharing her passion for Acro Yoga. Based in Germany, she discovered Acro as the perfect mix of movement, play, and connection. For her, it's more than just strength and flexibility—it's about trust, growth, and finding balance in every way.

She's trained with amazing teachers and traveled the world to deepen her practice. But more than anything, she believes Acro is about community—creating a playful, safe space where everyone feels welcome to explore, express, and lift each other up (literally!).

Manas, originally from India, finds joy in AcroYoga as it brings him to a state of complete presence. He embraces the fun in the process of attempting and failing repeatedly. Manas's passion lies in exploring new, unconventional acro transitions and delving into the technical aspects to achieve simplicity and elegance. As a certified teacher with The Acro Way, he has shared his knowledge at various international Acro conventions and conducts regular workshops in Stockholm. His expertise lies in Acro flow, Slackro, Icarians, and Whips, focusing on teaching funky and goofy as well as elegant and spinny flows.`,
    levels: ['Intermediate', 'Advanced'],
    instagram: 'https://www.instagram.com/manas_acro_addict/',
  },
  {
    id: 5,
    name: 'Maria and Flo',
    roleTags: ['Flows', 'Poses', 'Washing Machines'],
    imageUrl: '/teachers/Maria and Flo/AcroFlo-47.jpg',
    videoUrl: '/teachers/Maria and Flo/AcroGarden.mov',
    location: 'Malta',
    bio: `Maria discovered AcroYoga four years ago in Malta and it was love at first fly! Coming from a background in dance, yoga and pole dancing, she found AcroYoga to be an incredible way to build trust and connection, both with herself and others.

Her desire to improve her skills and challenge herself, led Maria to travel to Bali and Thailand, where she joined bigger and vibrant AcroYoga communities to deepen her practice.

For Maria, AcroYoga isn't just exercise; it's a super fun journey of self-discovery. It's helping her overcome fears and boost confidence, filling her days with joy and excitement.

Together with Flo, they organize workshops for beginners and improvers, aiming to spread the love for this wonderful practice and expand the AcroYoga community in Malta.

AcroYoga has been Flo's jam since the summer of 2018 and he's loved spinning, popping and turning people ever since. He's also known to step into the role of a flyer himself at times. 

Flo's approach to AcroYoga is simple: The sky's the limit & Safety is Sexy!

In addition to his Acroyoga experience, Flo is also a Yoga Teacher, Thai Massage Therapist and Breathwork facilitator. 

Together, they are organizing workshops for beginners with the goal to share this wonderful practice and expand the AcroYoga community in Malta! Hosting the very first MAC in 2024 has already brought some of the best teachers around the globe to Malta and the second edition will be even bigger!`,
    levels: ['Beginner', 'Intermediate'],
    instagram: 'https://www.instagram.com/acroyoga_malta/',
  },
];

export default function TeachersPage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-b from-brand-sand/20 to-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea mb-6">
                Our Teachers
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                Learn from world-class instructors bringing diverse styles and decades of combined experience.
              </p>
            </div>
          </Reveal>

          {/* Teaching Styles Info */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="px-6 py-2.5 rounded-full bg-brand-sand/20 text-brand-sea font-medium text-sm border border-brand-sand/40">
                All Levels Welcome
              </div>
              <div className="px-6 py-2.5 rounded-full bg-brand-sand/20 text-brand-sea font-medium text-sm border border-brand-sand/40">
                Multiple Teaching Styles
              </div>
              <div className="px-6 py-2.5 rounded-full bg-brand-sand/20 text-brand-sea font-medium text-sm border border-brand-sand/40">
                Experienced Instructors
              </div>
            </div>
          </Reveal>

          {/* Additional Info */}
          <Reveal delay={0.2}>
            <p className="text-center text-sm text-zinc-500 mt-6">
              Workshop levels are indicated in the interactive schedule — find the perfect classes for your journey!
            </p>
          </Reveal>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teachers.map((teacher, index) => (
              <Reveal key={teacher.id} delay={index * 0.05}>
                <TeacherCard
                  name={teacher.name}
                  duoName={teacher.duoName}
                  roleTags={teacher.roleTags}
                  imageUrl={teacher.imageUrl}
                  videoUrl={teacher.videoUrl}
                  location={teacher.location}
                  bio={teacher.bio}
                  instagram={teacher.instagram}
                  youtube={teacher.youtube}
                  website={teacher.website}
                />
              </Reveal>
            ))}
            
            {/* More Teachers Coming Soon Card */}
            <Reveal delay={teachers.length * 0.05}>
              <article className="bg-gradient-to-br from-brand-sand/30 to-brand-sun/20 rounded-2xl overflow-hidden border-2 border-dashed border-brand-sea/30 hover:border-brand-sea/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[400px] p-8">
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto bg-brand-sea/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-brand-sea"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-brand-sea">
                    More Teachers
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-lg text-zinc-600 font-medium">
                    Announced Soon
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm text-zinc-500 max-w-xs">
                    Stay tuned for exciting announcements about additional world-class instructors joining MAC 2026
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-b from-white to-brand-sand/20">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-sea">
                Ready to learn from the best?
              </h2>
              <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                Secure your spot at MAC 2026 and experience transformative workshops with our incredible teacher lineup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  href="https://www.wetravel.com/trips/mediterranean-acro-convention-2026-mediterranean-acro-convention-4587517817"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  Get Tickets
                </Button>
                <Button
                  href="/schedule"
                  variant="secondary"
                  size="lg"
                >
                  View Schedule
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
