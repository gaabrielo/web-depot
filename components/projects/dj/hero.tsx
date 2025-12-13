import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="relative rounded-l-3xl overflow-hidden bg-zinc-200 h-80 mt-12">
      <Image
        src="/projects/dj/hero.png"
        alt="Dj Pulse Image"
        className="w-full h-full object-cover"
        width={400}
        height={400}
      />

      {/* Overlapping Button */}
      <div className="absolute bottom-0 right-0 z-20">
        <div className="absolute bg-transparent -left-12 bottom-0 w-12 h-12 rounded-full shadow-[24px_24px_0_#fafafa]"></div>

        <div className="bg-zinc-50 rounded-tl-3xl p-2 pb-0">
          <button className="bg-black text-white pl-6 pr-5 py-2 rounded-2xl hover:bg-gray-900 transition relative flex items-center gap-1.5 z-30">
            Listen
            <IconArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
