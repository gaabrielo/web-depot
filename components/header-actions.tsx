'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMenu,
} from '@tabler/icons-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';

export function HeaderActions() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <div className="space-x-2 sr-only sm:not-sr-only">
        <Button size="icon" variant="outline" className="sm:size-7">
          <IconBrandGithub size={20} className="text-foreground" />
        </Button>
        <Button size="icon" variant="outline" className="sm:size-7">
          <IconBrandLinkedin size={20} className="text-foreground" />
        </Button>
        <ThemeToggle />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="sm:size-7 sm:sr-only"
          >
            <IconMenu size={20} className="text-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Github <IconArrowUpRight size={14} />
          </DropdownMenuItem>
          <DropdownMenuItem>
            LinkedIn <IconArrowUpRight size={14} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="dark:text-zinc-400 text-zinc-600 text-xs">
            Theme
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
