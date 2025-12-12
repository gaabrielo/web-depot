import { DJProject } from '@/components/projects/dj';
import { Button } from '@/components/ui/button';

interface Props {
  params: { slug: string };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  let ProjectComponent: React.ComponentType | null = null;

  switch (slug) {
    case 'dj-profile':
      ProjectComponent = DJProject;
      break;
    // case 'architect-landing-page':
    //   ProjectComponent = (<p>Architect Landing Page</p>);
    //   break;
    default:
      return (
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
          <p className="text-xl">[Project not found]</p>
          <Button asChild>
            <a href="/">Back to home</a>
          </Button>
        </div>
      );
  }
  // ... renderiza o projeto
  return <ProjectComponent />;
}
