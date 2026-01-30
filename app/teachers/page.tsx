'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import TeacherCard from '../components/TeacherCard';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

interface Teacher {
  id: number;
  name: string;
  roleTags: string[];
  imageUrl: string;
  location?: string;
  bio?: string;
  levels: ('Beginner' | 'Intermediate' | 'Advanced')[];
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Sofia Martinez',
    roleTags: ['L-Basing', 'Washing Machines', 'Pops'],
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    location: 'Barcelona, Spain',
    bio: 'International performer and teacher specializing in dynamic acrobatics with 15+ years of experience.',
    levels: ['Intermediate', 'Advanced'],
  },
  {
    id: 2,
    name: 'Liam Chen',
    roleTags: ['Standing Acro', 'Icarian Games', 'Partner Flow'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    location: 'Vancouver, Canada',
    bio: 'Former Cirque performer bringing theatrical artistry to standing acrobatics and dynamic sequences.',
    levels: ['Intermediate', 'Advanced'],
  },
  {
    id: 3,
    name: 'Aria Kowalski',
    roleTags: ['Therapeutic Flying', 'Beginner Friendly', 'Thai Massage'],
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
    location: 'Berlin, Germany',
    bio: 'Certified yoga therapist combining mindful movement with accessible acro for healing and connection.',
    levels: ['Beginner', 'Intermediate'],
  },
  {
    id: 4,
    name: 'Marcus Johnson',
    roleTags: ['Hand-to-Hand', 'Strength Training', 'Advanced Technique'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    location: 'Los Angeles, USA',
    bio: 'Competition gymnast turned acro specialist, focusing on precision and progressive skill development.',
    levels: ['Advanced'],
  },
  {
    id: 5,
    name: 'Mei Zhang',
    roleTags: ['Trio Acro', 'Choreography', 'Performance'],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    location: 'Singapore',
    bio: 'Award-winning choreographer creating stunning group acrobatic performances for stage and festivals.',
    levels: ['Intermediate', 'Advanced'],
  },
  {
    id: 6,
    name: 'Diego Silva',
    roleTags: ['Inverse', 'Icarian', 'Creative Flow'],
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    location: 'Rio de Janeiro, Brazil',
    bio: 'Pioneer of innovative inverse techniques blending capoeira movement with contemporary acrobatics.',
    levels: ['Intermediate', 'Advanced'],
  },
  {
    id: 7,
    name: 'Emma Larsson',
    roleTags: ['Beginner Foundations', 'Safety & Spotting', 'Community Building'],
    imageUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=800&auto=format&fit=crop',
    location: 'Stockholm, Sweden',
    bio: 'Passionate about making acro accessible to everyone through clear communication and patient guidance.',
    levels: ['Beginner'],
  },
  {
    id: 8,
    name: 'Raj Patel',
    roleTags: ['Partner Yoga', 'Flexibility', 'Mindful Movement'],
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    location: 'Mumbai, India',
    bio: 'Blending traditional yoga philosophy with modern partner acrobatics for balanced practice.',
    levels: ['Beginner', 'Intermediate'],
  },
  {
    id: 9,
    name: 'Yuki Tanaka',
    roleTags: ['Pops & Whips', 'Dynamics', 'Precision'],
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    location: 'Tokyo, Japan',
    bio: 'Master of dynamic transitions and explosive movements with a focus on technical excellence.',
    levels: ['Advanced'],
  },
  {
    id: 10,
    name: 'Isabella Costa',
    roleTags: ['Trio & Group', 'Pyramids', 'Transitions'],
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
    location: 'Lisbon, Portugal',
    bio: 'Specializes in group dynamics and creative formations for festivals and community jams.',
    levels: ['Intermediate', 'Advanced'],
  },
  {
    id: 11,
    name: 'Oliver Schmidt',
    roleTags: ['Basing Fundamentals', 'Body Awareness', 'Alignment'],
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop',
    location: 'Munich, Germany',
    bio: 'Physical therapist bringing anatomical understanding to safe and sustainable acro practice.',
    levels: ['Beginner', 'Intermediate'],
  },
  {
    id: 12,
    name: 'Zara Williams',
    roleTags: ['Flying Skills', 'Aerial Awareness', 'Creative Expression'],
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
    location: 'Melbourne, Australia',
    bio: 'Aerial artist and acro flyer exploring the intersection of trust, play, and artistic movement.',
    levels: ['Beginner', 'Intermediate', 'Advanced'],
  },
];

type FilterLevel = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';

export default function TeachersPage() {
  const [selectedLevel, setSelectedLevel] = useState<FilterLevel>('All');

  const filteredTeachers = teachers.filter((teacher) => {
    if (selectedLevel === 'All') return true;
    return teacher.levels.includes(selectedLevel);
  });

  const filterOptions: FilterLevel[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

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

          {/* Filter Chips */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              {filterOptions.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedLevel === level
                      ? 'bg-brand-sea text-white shadow-lg scale-105'
                      : 'bg-white text-zinc-700 border border-neutral-200/40 hover:border-brand-sea/50 hover:shadow-md'
                  }`}
                  aria-pressed={selectedLevel === level}
                >
                  {level === 'All' ? 'All Levels' : level}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Results Count */}
          <Reveal delay={0.2}>
            <p className="text-center text-sm text-zinc-500 mt-6">
              Showing {filteredTeachers.length} {filteredTeachers.length === 1 ? 'teacher' : 'teachers'}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredTeachers.map((teacher, index) => (
              <Reveal key={teacher.id} delay={index * 0.05}>
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

          {/* Empty State */}
          {filteredTeachers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-zinc-500 mb-4">
                No teachers found for this level.
              </p>
              <Button
                variant="secondary"
                size="md"
                onClick={() => setSelectedLevel('All')}
              >
                Show All Teachers
              </Button>
            </div>
          )}
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
                  href="https://tickets.example.com"
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
