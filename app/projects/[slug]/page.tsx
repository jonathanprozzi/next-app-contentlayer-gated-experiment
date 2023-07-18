import { Mdx } from '@/components/mdx-components';
import { allProjects } from 'contentlayer/generated';

export const generateStaticParams = async () =>
  allProjects.map((project) => ({
    slug: project._raw.flattenedPath.replace(/projects\/?/, ''),
  }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project.slugAsParams === params.slug
  );

  if (!project)
    throw new Error(`Project not found for slug ${params.slug} path 1`);
  return { title: project.title };
};

const ProjectLayout = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project.slugAsParams === params.slug
  );

  if (!project)
    throw new Error(`Project not found for slug ${params.slug}) path 2`);

  return (
    <section className="max-auto max-w-xl py-8">
      <div className="mb-8 ">
        <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight">
          {project.title}
        </h1>
      </div>
      <Mdx code={project.body.code} />
    </section>
  );
};

export default ProjectLayout;
