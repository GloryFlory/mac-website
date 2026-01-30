import { FC } from 'react';
import TeacherCard from './TeacherCard';
import Reveal from './Reveal';
import Button from './Button';

interface Teacher {
  id: number;
  name: string;
  roleTags: string[];
  imageUrl: string;
  location?: string;
  bio?: string;
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Sofia Martinez',
    roleTags: ['L-Basing', 'Washing Machines', 'Pops'],
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    location: 'Barcelona, Spain',
    bio: 'International performer and teacher specializing in dynamic acrobatics with 15+ years of experience.',
  },
  {
    id: 2,
    name: 'Liam Chen',
    roleTags: ['Standing Acro', 'Icarian Games', 'Partner Flow'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    location: 'Vancouver, Canada',
    bio: 'Former Cirque performer bringing theatrical artistry to standing acrobatics and dynamic sequences.',
  },
  {
    id: 3,
    name: 'Aria Kowalski',
    roleTags: ['Therapeutic Flying', 'Beginner Friendly', 'Thai Massage'],
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
    location: 'Berlin, Germany',
    bio: 'Certified yoga therapist combining mindful movement with accessible acro for healing and connection.',
  },
  {
    id: 4,
    name: 'Marcus Johnson',
    roleTags: ['Hand-to-Hand', 'Strength Training', 'Advanced Technique'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    location: 'Los Angeles, USA',
    bio: 'Competition gymnast turned acro specialist, focusing on precision and progressive skill development.',
  },
  {
    id: 5,
    name: 'Mei Zhang',
    roleTags: ['Trio Acro', 'Choreography', 'Performance'],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    location: 'Singapore',
    bio: 'Award-winning choreographer creating stunning group acrobatic performances for stage and festivals.',
  },
  {
    id: 6,
    name: 'Diego Silva',
    roleTags: ['Inverse', 'Icarian', 'Creative Flow'],
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    location: 'Rio de Janeiro, Brazil',
    bio: 'Pioneer of innovative inverse techniques blending capoeira movement with contemporary acrobatics.',
  },
];

const TeachersPreview: FC = () => {
  return (
    <section
      id="teachers"
      className="py-20 sm:py-24 lg:py-32 px-6 bg-gradient-to-b from-brand-sand/20 to-brand-sand/10 dark:from-zinc-950 dark:to-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-sea dark:text-white mb-4">
              Meet the Teachers
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
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
                roleTags={teacher.roleTags}
                imageUrl={teacher.imageUrl}
                location={teacher.location}
                bio={teacher.bio}
              />
            </Reveal>
          ))}
        </div>

        {/* CTA Button */}
        <Reveal delay={0.6}>
          <div className="flex justify-center">
            <Button
              href="#all-teachers"
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
