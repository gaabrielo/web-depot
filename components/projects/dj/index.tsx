import { HeroSection } from '@/components/projects/dj/hero';
import { Socials } from '@/components/projects/dj/socials';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const cardData = [
  {
    id: 1,
    icon: '/projects/dj/calendar.png',
    title: 'Booking & Availability',
    description: 'Book my shows',
    action: 'Get in touch',
  },
  {
    id: 2,
    icon: '/projects/dj/album-2.png',
    title: 'Listen to my new album!',
    description: 'Peaceful Waves',
    action: 'Spotify',
  },
  // {
  //   id: 3,
  //   icon: '/projects/dj/album-3.png',
  //   title: 'Acampamento na represas',
  //   description: 'Discover more',
  // },
];

export function DJProject() {
  return (
    <ScrollArea className="w-full h-full bg-zinc-50 text-zinc-900 pl-2">
      <HeroSection />

      <Tabs defaultValue="work">
        <TabsList className="mt-4 p-0 bg-transparent h-6 space-x-2.5">
          <TabsTrigger value="work" asChild>
            <TabButton>Work</TabButton>
          </TabsTrigger>
          <TabsTrigger value="store" asChild>
            <TabButton>Store</TabButton>
          </TabsTrigger>
          <TabsTrigger value="coupons" asChild>
            <TabButton>Coupons</TabButton>
          </TabsTrigger>
        </TabsList>
        <div className="pr-2">
          <TabsContent value="work" asChild>
            {/* Cards List */}
            <div className="space-y-2">
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className="flex items-start gap-4 bg-gray-100 p-4 rounded-2xl"
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{card.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {card.description}
                    </p>
                    <a
                      href="#"
                      className="text-xs text-red-600 font-semibold mt-2 inline-block"
                    >
                      {card.action} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="store"></TabsContent>
          <TabsContent value="coupons"></TabsContent>
        </div>
      </Tabs>

      <div className="flex items-center my-4">
        <Socials />
        <Image
          src="/projects/dj/album-3.png"
          alt="Cover image of album Summer Vibes by DJ Pulse"
          width={512}
          height={512}
          className="flex-1 aspect-square w-1/3 rounded-xl translate-x-[20%] max-w-80"
        />
      </div>

      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}

function TabButton({ children }: { children: React.ReactNode }) {
  return (
    <TabsTrigger value="work" asChild>
      <button className="text-zinc-400 aria-selected:text-zinc-900 aria-selected:dark:text-zinc-900! text-base! bg-transparent! shadow-none! p-0! cursor-pointer">
        {children}
      </button>
    </TabsTrigger>
  );
}
