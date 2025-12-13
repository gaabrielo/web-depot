'use client';

import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useDevice } from '@/app/providers/device-context';
import {
  IconDeviceDesktop,
  IconDeviceDesktopFilled,
  IconDeviceIpad,
  IconDeviceIpadFilled,
  IconDeviceMobile,
  IconDeviceMobileFilled,
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';

export function DeviceToggleGroup() {
  const { device, setDevice } = useDevice();
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <ToggleGroup
      type="single"
      value={device}
      onValueChange={(value) => setDevice(value as any)}
      defaultValue="mobile"
      size="default"
      className="bg-background absolute right-1/2 translate-x-1/2"
    >
      <ToggleGroupItem value="mobile" aria-label="Toggle mobile" asChild>
        <Button
          size="icon"
          variant="outline"
          className="sm:size-7 bg-background!"
        >
          {device === 'mobile' ? (
            <IconDeviceMobileFilled className="h-4 w-4" />
          ) : (
            <IconDeviceMobile className="h-4 w-4" />
          )}
        </Button>
      </ToggleGroupItem>
      <ToggleGroupItem value="tablet" aria-label="Toggle tablet" asChild>
        <Button
          size="icon"
          variant="outline"
          className="sm:size-7 border-x-0 bg-background!"
        >
          {device === 'tablet' ? (
            <IconDeviceIpadFilled className="h-4 w-4" />
          ) : (
            <IconDeviceIpad className="h-4 w-4" />
          )}
        </Button>
      </ToggleGroupItem>
      <ToggleGroupItem value="desktop" aria-label="Toggle desktop" asChild>
        <Button
          size="icon"
          variant="outline"
          className="sm:size-7 bg-background!"
        >
          {device === 'desktop' ? (
            <IconDeviceDesktopFilled className="h-4 w-4" />
          ) : (
            <IconDeviceDesktop className="h-4 w-4" />
          )}
        </Button>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
