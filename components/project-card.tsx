import { cn } from '@/lib/utils';
import { IconArrowUpRight } from '@tabler/icons-react';
import Image from 'next/image';

const transitionConfig = 'transition-all duration-200';
const rotationCardConfig = '-rotate-4 group-hover:-rotate-2';

type ProjectCardProps = {
  data: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
};

export function ProjectCard({ data, ...rest }: ProjectCardProps) {
  return (
    <a
      href={data.url}
      className="border block border-zinc-200 dark:border-zinc-800 bg-white dark:bg-transparent rounded-2xl col-span-1 p-4 pb-0 w-full overflow-clip group"
      {...rest}
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <p className="font-semibold">{data.title}</p>
        <IconArrowUpRight
          size={18}
          className={cn(
            'scale-80 opacity-0 -translate-x-2 blur-xs group-hover:translate-x-0 group-hover:blur-none group-hover:scale-100 group-hover:opacity-100',
            transitionConfig
          )}
        />
      </div>
      <p className="text-sm leading-4 max-w-60 text-zinc-700 dark:text-zinc-400">
        {data.description}
      </p>

      <Image
        src={data.image}
        className={cn(
          'w-68 ml-auto mt-6 -mr-6 rounded-xl -mb-6 shadow-[0_20px_15px_-2px_rgba(0,0,0,0.25)]',
          transitionConfig,
          rotationCardConfig
        )}
        alt={data.title}
        width={512}
        height={512}
      />
    </a>
  );
}
