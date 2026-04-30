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
  imageObjectPosition?: string;
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
    id: 3,
    name: 'Michal and Klara',
    duoName: 'Acro Klaris / Acro Misaris',
    roleTags: ['Flows', 'Icarians', 'Whip-Pops', 'F2F'],
    imageUrl: '/teachers/Michal and Klara/Eli and Bagaz.jpg',
    videoUrl: 'https://drive.google.com/file/d/1HU2F4eSZYzYFguuWxzS8nPZiWWnAynoG/preview',
    location: 'Slovakia',
    bio: `Klára has dedicated her whole life to sports, and is most defined by aesthetic disciplines—dance, gymnastics, and acrobatics. In her everyday work, she teaches movement preparation for children and parents from as early as 10 months old, gymnastics from age 3, and also works as a physiotherapist.

Miško has been involved in sports from athletics and soccer to calisthenics, and developed a passion for coaching while completing his Master's degree in Sports Sciences. Seven years ago, he witnessed his first acroyoga performance and fell in love with the physical and aesthetic dimensions of the practice—later discovering its community aspect too. Training alongside Sara (his Acro Misaris partner), he progressed rapidly while immersing himself in classes and festivals and helping grow the Bratislava acro community.

Together, Michal and Klara regularly train and teach workshops covering flows, icarians, whip-pops, and F2F—both at home and at festivals.

In their workshops, expect engaging, fun movement exploration with a strong focus on biomechanics and high-quality technique.`,
    levels: ['Intermediate', 'Advanced'],
    instagram: 'https://www.instagram.com/misaris_acro/',
    imageObjectPosition: 'object-[center_30%]',
  },
  {
    id: 4,
    name: 'Lloydie and Flo',
    duoName: 'Double Up Acro',
    roleTags: ['L-Base', 'Flows', 'Aesthetics'],
    imageUrl: '/teachers/Lloydie and Flo/3.png',
    videoUrl: '/teachers/Lloydie and Flo/video-output-C48C08F9-96F9-4613-848B-33F280A9B3EB.mov',
    location: 'Bali, Indonesia',
    bio: `We are Double Up, also known as Flo and Lloydie. We fell in love with acro in London 5 years ago, and just a couple of months into our acro journey we already knew we wanted to teach it together one day. Two years later, to pursue our dream we left everything behind to move to Bali, where we now teach multiple weekly acro classes, jams, workshops, and host our own acroyoga retreats regularly. In our classes we like to pay attention to technique down to the smallest details, all the while never forgetting to have fun in the process. We believe in meeting everyone at their skill level and helping them grow in their practice in a slow-paced, organic, progressive way.`,
    levels: ['Beginner', 'Intermediate'],
    instagram: 'https://www.instagram.com/doubleupacro/',
  },
  {
    id: 5,
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
    id: 8,
    name: 'Eli and Bagaz',
    duoName: 'Acrobagaz',
    roleTags: ['Icarians', 'Flows', 'Whip-Pops'],
    imageUrl: '/teachers/Eli and Bagaz/mini-BarefootyogaSLO-96.jpg',
    videoUrl: 'https://drive.google.com/file/d/1JyJT4wPnvKLyeocMB72C3wf4-LDfoHlB/preview',
    location: 'North-East Italy',
    instagram: 'https://www.instagram.com/acrobagaz/',
    bio: `Matteo, aka Acrobagaz, found his Acroyoga passion while balancing on a slackline between two trees. He dove into workshops, seminars, and retreats across Italy and Spain, creating inclusive Acroyoga communities along the way. After training at Acroyoga Montréal, he has been spreading joy through workshops across Europe for the past 12 years—his smile and enthusiasm making every experience truly magical.

Elisa danced her way through hip hop for over a decade before discovering Acroyoga. Exploring workshops and retreats throughout Italy and Europe, she found balance and trust while sharing her passion with others. Don't underestimate her petite frame—Elisa embraces both flying and basing with versatility and contagious enthusiasm!

They met in February 2022, and since then they have been playing, training, creating, and teaching together across Italy and Europe. They love creating highly "tangled" flows and are always on the hunt for new icarians, whip-pops, and standing sequences. At the core of their practice are communication, progressions, and safety—adapting to every body type and using each person's uniqueness as a resource to create something brand new.

You'll recognise them easily: he looks more or less like a drunken rainbow, and she makes herself heard like a howler monkey—but with chocolate instead of bananas!`,
    levels: ['Intermediate', 'Advanced'],
  },
  {
    id: 6,
    name: 'Nick and Chrysa',
    roleTags: ['Flow', 'Balance', 'Inversions'],
    imageUrl: '/teachers/Nick and Chrysa/profile.jpg',
    videoUrl: '/teachers/Nick and Chrysa/video.mp4',
    location: 'Greece',
    bio: `Nick and Chrysa are an acrobatic couple from Greece. They stumbled upon AcroYoga training about 6 years ago and that's when their life changed radically. Since then, they play, train and keep evolving together.

The last couple of years they have been continuously teaching weekly acroyoga beginner and intermediate classes as well as organizing thematic workshops and jams across Athens. Their aspiration is to spread their passion and share the acroyoga art along Greece!

Nick is a Certified Yoga & AcroYoga teacher and a Thai Massage Therapist. Through his valuable communication skills he achieves to build a safe environment for his students to flourish and make them feel as a family.

Chrysa is a Certified Yoga Teacher and an impressive handbalancer. Her passions are acroyoga, handstands and dancing. In her classes she manages to merge all her passions together creating unique flows and movements allowing their students to express freely.`,
    levels: ['Beginner', 'Intermediate'],
    instagram: 'https://www.instagram.com/nick_chrysa_acro/',
  },
  {
    id: 7,
    name: 'Maria and Flo',
    roleTags: ['Flows', 'Poses', 'Washing Machines'],
    imageUrl: '/teachers/Maria and Flo/AcroFlo-47.jpg',
    videoUrl: '/teachers/Maria and Flo/AcroGarden.mov',
    location: 'Malta',
    bio: `Maria discovered AcroYoga four years ago in Malta and it was love at first fly! Coming from a background in dance, yoga and pole dancing, she found AcroYoga to be an incredible way to build trust and connection, both with herself and others.

Her desire to improve her skills and challenge herself, led Maria to travel to Bali and Thailand, where she joined bigger and vibrant AcroYoga communities to deepen her practice.

For Maria, AcroYoga isn't just exercise; it's a super fun journey of self-discovery. It's helping her overcome fears and boost confidence, filling her days with joy and excitement.

Together with Flo, Maria is the co-organizer of the Mediterranean Acro Convention. Their passion lies in bringing people together and creating unforgettable experiences in Malta. Hosting the very first MAC in 2024 brought some of the best teachers from around the globe to Malta, and the second edition will be even bigger!

AcroYoga has been Flo's jam since the summer of 2018 and he's loved spinning, popping and turning people ever since. He's also known to step into the role of a flyer himself at times. 

Flo's approach to AcroYoga is simple: The sky's the limit & Safety is Sexy!

In addition to his Acroyoga experience, Flo is also a Yoga Teacher, Thai Massage Therapist and Breathwork facilitator. 

Together, they love fostering community, organizing workshops for beginners and improvers, and making sure every person feels seen, supported, and valued in their journey. They are dedicated to expanding the AcroYoga community in Malta and creating a welcoming space where practitioners from around the world can connect and grow together.`,
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
                  imageObjectPosition={teacher.imageObjectPosition}
                />
              </Reveal>
            ))}
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
