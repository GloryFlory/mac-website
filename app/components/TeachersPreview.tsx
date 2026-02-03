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
    bio: `We are Coni and Mati, two movement lovers who found in Acroyoga a magical way to connect. We love exploring the endless possibilities that arise when two bodies move together — searching for softness, reaching for height, and discovering new ways to flow in connection.`,
    instagram: 'https://www.instagram.com/acro.conciencia/',
  },
  {
    id: 2,
    name: 'Caspian and Laura',
    duoName: 'AcroSpirit',
    roleTags: ['Flows', 'Icarians', 'Acro Dance', 'Pops'],
    imageUrl: '/teachers/Caspian and Laura/Vertical Headshots Cuddle.jpg',
    videoUrl: '/teachers/Caspian and Laura/Vertical Bali 2023 L-base Part2 Highlights Reel.MP4',
    location: 'Bali, Indonesia',
    bio: `Caspian and Laura are acro teachers who strive to be skilled in all areas of acro. They enjoy teaching students of all levels, and enjoy the different challenges and disciplines that acroyoga has to offer.`,
    instagram: 'https://www.instagram.com/acrospirit/',
    youtube: 'https://youtube.com/c/TheAcroyogaShow',
  },
  {
    id: 3,
    name: 'Manas and Mira',
    roleTags: ['Flows', 'Washing Machines', 'Elegance'],
    imageUrl: '/teachers/Manas and Mira/IMG_1800.jpeg',
    videoUrl: '/teachers/Manas and Mira/Back to training some of our fave moves on day one in Morocco 😍.mp4',
    location: 'Germany / Sweden',
    bio: `Mira's joy is contagious, and she loves sharing her passion for Acro Yoga. Based in Germany, she discovered Acro as the perfect mix of movement, play, and connection.`,
    instagram: 'https://www.instagram.com/manas_acro_addict/',
  },
  {
    id: 4,
    name: 'Maria and Flo',
    roleTags: ['Flows', 'Poses', 'Washing Machines'],
    imageUrl: '/teachers/Maria and Flo/AcroFlo-47.jpg',
    videoUrl: '/teachers/Maria and Flo/AcroGarden.mov',
    location: 'Malta',
    bio: `Maria discovered AcroYoga four years ago in Malta and it was love at first fly! Together with Flo, they organize workshops for beginners and improvers, aiming to spread the love for this wonderful practice.`,
    instagram: 'https://www.instagram.com/acroyoga_malta/',
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
