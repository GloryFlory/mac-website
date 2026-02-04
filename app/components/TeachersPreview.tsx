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
    id: 2,
    name: 'Caspian and Laura',
    duoName: 'Caspian and Laura',
    roleTags: ['L-Base', 'Flow', 'Whips'],
    imageUrl: '/teachers/Caspian and Laura/laura_caspian.jpg',
    videoUrl: '/teachers/Caspian and Laura/AQMm8VPMj4wJaxIlUiDk4RfC-Qbz0c5N3ATyA_KGHWdD0LMQTJsvEMzCvE3Gl2JxNRZe5e5MghGSC0n5P2eJCdZ-4-9NcGnRr5e2C-k.mp4',
    location: 'Bali',
    bio: `Caspian and Laura are a UK-based duo who have made a name for themselves with their refined, creative approach to Partner Acrobatics. With a shared background in Gymnastics and over a decade of training together, their work is defined by technical precision, innovative choreography, and seamless flow. They are known for infusing a contemporary, movement-based aesthetic into their practice, often bridging Acro and Dance in unique ways.

What sets them apart is their deeply collaborative and methodical approach to progression—they break down skills with clarity, offer strategic insights into positioning and mechanics, and help students move from foundational L-Basing all the way into dynamic, high-level training. They are especially recognized for their work in Whips and Flow-based transitions, and their teaching is as polished as their performance.

Beyond technique, Caspian and Laura bring a calm, supportive teaching presence. They foster confidence, encourage exploration, and create an environment where students feel seen and empowered in their practice.`,
    instagram: 'https://www.instagram.com/caspiananddlaura/',
    youtube: 'https://www.youtube.com/@CaspianandLaura',
  },
  {
    id: 3,
    name: 'Michal and Sara',
    duoName: 'Acro Misaris',
    roleTags: ['Whips', 'Pops', 'Icarians'],
    imageUrl: '/teachers/Michal and Sara/472529068_18033178583442028_7109940112774191055_n.jpg',
    videoUrl: '/teachers/Michal and Sara/AQMuydaPPC31VQIJj7EbpXt-HNolmjsNis836XvE7CLyu32uRiyXlPRvuXO9dCWAOxyKIRAY0snUzHRMWzlsnBmLGQIxhlPU4kIPe0k.mp4',
    location: 'Slovakia',
    bio: `We are Misaris! (Michal + Sara "Saris"). We are a partner and acrobatic duo based in Bratislava, where we conduct regular acroyoga lessons. We enthusiastically combine our favourite disciplines such as whips, pops and icarians into smooth, harmonious sequences.

Sara is a physiotherapist and fitness trainer and her vast body knowledge, solid handstands and flexible whips are the basis of our mutual partnership. Michal dedicates himself mainly to physical and mental preparation, often brings a new perspective, and his knowledge of technique, physics and catching makes our practice significantly safer.

Our specialization is whips, pops and icarians. As a physiotherapist and base, we are particularly strong in biomechanics, position and active movement.

Together we have been practicing acroyoga since 2020. We have attended numerous international jams, workshops, retreats, and festivals. It's a lifestyle that fills us with energy and joy. We love sharing what we know and creating a space where everyone can find their own flow, test their limits, and move forward with confidence.`,
    instagram: 'https://www.instagram.com/misaris_acro/',
  },
  {
    id: 4,
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
    id: 5,
    name: 'Maria and Flo',
    roleTags: ['Flows', 'Poses', 'Washing Machines'],
    imageUrl: '/teachers/Maria and Flo/AcroFlo-47.jpg',
    videoUrl: '/teachers/Maria and Flo/AcroGarden.mov',
    location: 'Malta',
    bio: `Maria discovered AcroYoga four years ago in Malta and it was love at first fly! Together with Flo, they organize workshops for beginners and improvers, aiming to spread the love for this wonderful practice. They hosted the first Mediterranean Acro Convention in 2024.

Flo has a background in breakdancing and acrobatics, which naturally led him to Acroyoga as a way to explore movement through connection. With over 5 years of practice, he's developed a strong passion for coaching beginners and helping them discover the joy of L-Basing. 

Maria and Flo are dedicated to making AcroYoga accessible, joyful, and empowering for practitioners at every stage of their journey. They are committed to making sure every person feels seen, supported, and valued in their journey. The sky's the limit & Safety is Sexy!`,
    instagram: 'https://www.instagram.com/acroflo_malta/',
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
              />
            </Reveal>
          ))}
          
          {/* More Teachers Coming Soon Card */}
          <Reveal delay={teachers.length * 0.1}>
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
                  Stay tuned for exciting announcements about additional world-class instructors
                </p>
              </div>
            </article>
          </Reveal>
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
