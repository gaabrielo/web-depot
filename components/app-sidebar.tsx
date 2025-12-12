import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { IconArrowUpRight, IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';

// Menu items.
const items = [
  {
    title: 'DJ / Artist Profile',
    url: '/dj-profile',
    // icon: Home,
    type: 'bio',
  },
  {
    title: 'Traveling YouTube Channel',
    url: '/traveling-youtube-channel',
    // icon: Inbox,
    type: 'bio',
  },
  {
    title: 'Restaurant Menu',
    url: 'https://burgerastro.vercel.app/',
    // icon: Inbox,
    type: 'bio',
  },
  {
    title: 'Cybersecurity Landing Page',
    url: '/cybersec-lading-page',
    // icon: Calendar,
    type: 'lp',
  },
  {
    title: 'Architect Portfolio',
    url: 'https://arqtaniadias.vercel.app',
    // icon: Search,
    type: 'lp',
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <Link href="/">
          <p className="font-semibold font-mono uppercase text-sm">
            [web depot]
          </p>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Premium Link in Bio
                <IconChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items
                    .filter((i) => i.type === 'bio')
                    .map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a
                            href={item.url}
                            about={item.title}
                            target={
                              item.url.includes('http') ? '_blank' : '_self'
                            }
                          >
                            {/* <item.icon /> */}
                            <span>{item.title}</span>
                            {item.url.includes('http') && (
                              <IconArrowUpRight
                                size={20}
                                className="ml-0 text-zinc-700 dark:text-zinc-400"
                              />
                            )}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Landing Page
                <IconChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items
                    .filter((i) => i.type === 'lp')
                    .map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a
                            href={item.url}
                            about={item.title}
                            target={
                              item.url.includes('http') ? '_blank' : '_self'
                            }
                          >
                            {/* <item.icon /> */}
                            <span>{item.title}</span>
                            {item.url.includes('http') && (
                              <IconArrowUpRight
                                size={20}
                                className="ml-0 text-zinc-700 dark:text-zinc-400"
                              />
                            )}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter>
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          href="https://gabrielo.xyz/contact"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Let's work together
          <IconArrowUpRight size={20} />
        </a>

        {/* <a
          className="flex h-12 w-12 px-2.5 items-center justify-center rounded-full border border-solid border-black/[.08] transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] shadow-xs"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconMailFilled size={28} className="text-foreground" />
        </a> */}
      </SidebarFooter>
    </Sidebar>
  );
}
