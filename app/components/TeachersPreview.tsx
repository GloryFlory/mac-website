import { FC } from 'react';
import TeacherCard from './TeacherCard';
import Reveal from './Reveal';
import Button from './Button';

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
  imageObjectPosition?: string;
  imageFit?: 'cover' | 'contain';
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
    instagram: 'https://www.instagram.com/acro.conciencia/',
  },
  {
    id: 3,
    name: 'Michal and Klara',
    duoName: 'Acro Klaris / Acro Misaris',
    roleTags: ['Flows', 'Icarians', 'Whip-Pops', 'F2F'],
    imageUrl: '/teachers/Michal and Klara/Michal and Klara.jpeg',
    videoUrl: 'https://drive.google.com/file/d/1HU2F4eSZYzYFguuWxzS8nPZiWWnAynoG/preview',
    location: 'Slovakia',
    bio: `Klára has dedicated her whole life to sports, and is most defined by aesthetic disciplines—dance, gymnastics, and acrobatics. In her everyday work, she teaches movement preparation for children and parents from as early as 10 months old, gymnastics from age 3, and also works as a physiotherapist.

Miško has been involved in sports from athletics and soccer to calisthenics, and developed a passion for coaching while completing his Master's degree in Sports Sciences. Seven years ago, he witnessed his first acroyoga performance and fell in love with the physical and aesthetic dimensions of the practice—later discovering its community aspect too. Training alongside Sara (his Acro Misaris partner), he progressed rapidly while immersing himself in classes and festivals and helping grow the Bratislava acro community.

Together, Michal and Klara regularly train and teach workshops covering flows, icarians, whip-pops, and F2F—both at home and at festivals.

In their workshops, expect engaging, fun movement exploration with a strong focus on biomechanics and high-quality technique.`,
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
    instagram: 'https://www.instagram.com/doubleupacro/',
  },
  {
    id: 5,
    name: 'Manas and Mira',
    roleTags: ['Flows', 'Washing Machines', 'Elegance'],
    imageUrl: '/teachers/Manas and Mira/IMG_1800.jpeg',
    videoUrl: '/teachers/Manas and Mira/Back to training some of our fave moves on day one in Morocco 😍.mp4',
    location: 'Germany / Sweden',
    bio: `Mira's joy is contagious, and she loves sharing her passion for Acro Yoga. Based in Germany, she discovered Acro as the perfect mix of movement, play, and connection. Her teaching style is warm, inclusive, and filled with laughter—she creates a space where students feel seen, supported, and encouraged to explore with curiosity and confidence. She loves making even the most challenging flows feel approachable, intuitive, and fun!

Manas is one of the kindest, most humble teachers you'll meet—and also one of the most skilled. Originally from Sweden, he's a seasoned practitioner and event organizer with deep expertise in L-Basing, Washing Machines, and dynamic Acro flows. Known for his precision, calm teaching style, and sharp eye for detail, Manas helps students refine their technique while maintaining safety, fluidity, and grace. He has a gift for breaking down complex transitions into achievable steps—and his quiet confidence and supportive presence make learning feel effortless.

Together, Manas and Mira bring the perfect balance: technical mastery meets playful creativity. Their classes are equal parts skill-building, connection, and joy—and their energy together is nothing short of inspiring!`,
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

They met in February 2022, and since then they have been playing, training, creating, and teaching together across Italy and Europe. They love creating highly "tangled" flows and are always on the hunt for new icarians, whip-pops, and standing sequences. At the core of their practice are communication, progressions, and safety—adapting to every body type and using each person's uniqueness as a resource.

You'll recognise them easily: he looks more or less like a drunken rainbow, and she makes herself heard like a howler monkey—but with chocolate instead of bananas!`,
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
    instagram: 'https://www.instagram.com/nick_chrysa_acro/',
  },
  {
    id: 7,
    name: 'Maria and Flo',
    roleTags: ['Flows', 'Poses', 'Washing Machines'],
    imageUrl: '/teachers/Maria and Flo/AcroFlo-47.jpg',
    videoUrl: '/teachers/Maria and Flo/AcroGarden.mov',
    location: 'Malta',
    bio: `Maria discovered AcroYoga four years ago in Malta and it was love at first fly! Together with Flo, they are the organizers of the Mediterranean Acro Convention, having hosted the first edition in 2024. Their passion lies in bringing people together and creating unforgettable experiences in Malta.

Flo has a background in breakdancing and acrobatics, which naturally led him to Acroyoga as a way to explore movement through connection. With over 5 years of practice, he's developed a strong passion for coaching beginners and helping them discover the joy of L-Basing.

Maria and Flo are dedicated to making AcroYoga accessible, joyful, and empowering for practitioners at every stage of their journey. They love fostering community, bringing acro enthusiasts from around the world to Malta, and making sure every person feels seen, supported, and valued in their journey. The sky's the limit & Safety is Sexy!`,
    instagram: 'https://www.instagram.com/acroflo_malta/',
  },
  {
    id: 9,
    name: 'Skyhawk Clan',
    duoName: 'A Surprise Flow Awaits',
    roleTags: ['Mystery Guest', 'Surprise Flow', 'Balance'],
    imageUrl: '/teachers/Skyhawk Clan/Skyhawk clan image.jpeg',
    location: 'Undisclosed',
    bio: `A hidden favor has been called in. The Skyhawk Clan emerges just once, bringing something entirely different to MAC 2026 — a special surprise session, revealed only on the day.

Expect the unexpected: precision, mystery, and a flow unlike anything else on the schedule. We won't say more — you'll just have to be there.

Come with curiosity. Prepare for balance.`,
    imageFit: 'contain',
  },
];

const TeachersPreview: FC = () => {
  return (
    <section
      id="teachers"
      className="py-20 sm:py-24 lg:py-32 px-6 bg-gradient-to-b from-brand-sand/20 to-brand-sand/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea mb-4">
              Meet the Teachers
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto">
              Learn from world-renowned instructors bringing expertise from across the globe.
            </p>
          </div>
        </Reveal>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {teachers.map((teacher, index) => (
            <Reveal key={teacher.id} delay={index * 0.1}>
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
                imageFit={teacher.imageFit}
              />
            </Reveal>
          ))}
        </div>

        {/* CTA Button */}
        <Reveal delay={0.6}>
          <div className="flex justify-center">
            <Button
              href="/teachers"
              variant="primary"
              size="lg"
            >
              View All Teachers
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TeachersPreview;
