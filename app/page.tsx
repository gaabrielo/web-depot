import { Viewer } from '@/app/[slug]/components/viewer';
import { ProjectCard } from '@/components/project-card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const projectsMock = [
  {
    id: 1,
    title: 'DJ / Artist Profile',
    description:
      'For DJs and artists. Mobile-first, fast, and built to convert fans into followers',
    image: '/mocks/dj.png',
    url: '/dj-profile',
  },
  {
    id: 5,
    title: 'Restaurant Menu',
    description:
      'For food businesses. Mobile-first, fast, and built to convert new customers into repeat customers',
    image: '/mocks/astro.png',
    url: 'https://burgerastro.vercel.app/',
  },
  // {
  //   id: 2,
  //   title: 'Traveling Youtube Channel',
  //   description:
  //     'For travelers. All important information in one place. Reach your audience and fund your next project',
  //   image: '/mocks/architect.png',
  //   url: '/traveling-youtube-channel',
  // },

  {
    id: 3,
    title: 'Cybersecurity Landing Page',
    description:
      'A professional space for your brand to stand out. SEO friendly, custom layout and content management',
    image: '/mocks/personal-website.png',
    url: '',
  },
  {
    id: 4,
    title: 'Architect Portfolio',
    description:
      'Architecture showcase. The impact your personal brand causes in one place',
    image: '/mocks/architect.png',
    url: 'https://arqtaniadias.vercel.app',
  },
];

export default function Home() {
  return (
    // <Viewer>
    <ScrollArea className="w-full h-full">
      <div className="flex min-h-screen items-center justify-center font-sans">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-12 px-12 sm:items-start">
          <div className="w-full flex flex-col items-center gap-12 text-center sm:items-start sm:text-left">
            <Section
              title="Premium Link in Bio"
              projects={projectsMock.slice(0, 2)}
            />

            <Section title="Landing Page" projects={projectsMock.slice(-2)} />
          </div>
        </main>
      </div>

      <ScrollBar orientation="vertical" />
    </ScrollArea>
    // </Viewer>
  );
}

function Section({
  title,
  projects,
}: {
  title: string;
  projects: typeof projectsMock;
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        {title}
      </h1>
      <div className="w-full grid grid-cols-2 not-sm:grid-cols-1 gap-4">
        {projects.map((pjt) => (
          <ProjectCard data={pjt} key={pjt.id} />
        ))}
      </div>
    </div>
  );
}
