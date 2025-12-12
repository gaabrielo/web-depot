import {
  IconBrandInstagram,
  IconBrandNeteaseMusic,
  IconBrandSpotify,
  IconBrandX,
} from '@tabler/icons-react';

export function Socials() {
  return (
    <div className="flex flex-col w-fit gap-2">
      <div className="bg-zinc-900 text-zinc-50 text-xs px-6 py-1.5 w-fit rounded-full">
        Discover more
      </div>
      <div className="grid grid-cols-2 space-y-2 text-center">
        <IconBrandInstagram size={32} className="mx-auto" />
        <IconBrandX size={32} className="mx-auto" />
        <IconBrandSpotify size={32} className="mx-auto" />
        <IconBrandNeteaseMusic size={32} className="mx-auto" />
      </div>
    </div>
  );
}
