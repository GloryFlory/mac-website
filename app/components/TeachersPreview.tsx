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

As a couple with a training and teaching partnership they experience the continuous opportunity that acroyoga offers to develop in communication, interpersonal skills and mindset, and like to share these benefits with students too.`,
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
    bio: `We are Misaris! (Michal + Sara "Saris"). We are a partner and acrobatic duo based in Bratislava, where we conduct regular acroyoga lessons. We enthusiastically combine our favourite disciplines such as whips, pops and icarians into smooth, harmonious sequences.

Sara is a physiotherapist and fitness trainer and her vast body knowledge, solid handstands and flexible whips are the basis of our mutual partnership. Michal dedicates himself mainly to physical and mental preparation, often brings a new perspective, and his knowledge of technique, physics and catching makes our practice significantly safer.

Our specialization is whips, pops and icarians. As a physiotherapist and base, we are particularly strong in biomechanics, position and active movement.

Together we have been practicing acroyoga since 2020. We have attended numerous international jams, workshops, retreats, and festivals. It's a lifestyle that fills us with energy and joy. We love sharing what we know and creating a space where everyone can find their own flow, test their limits, and move forward with confidence.`,
    instagram: 'https://www.instagram.com/misaris_acro/',
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
