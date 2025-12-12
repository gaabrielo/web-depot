import { Viewer } from '@/app/[slug]/components/viewer';
import React from 'react';

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Viewer>{children}</Viewer>;
}
