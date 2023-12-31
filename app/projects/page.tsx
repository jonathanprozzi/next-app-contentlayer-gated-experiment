import Link from 'next/link';
import { allProjects } from 'contentlayer/generated';

export default function Projects() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-bold text-xl md:text-3xl text-transparent bg-clip-text  bg-gradient-to-r from-teal-300 to-indigo-500 w-fit">
          Projects
        </h1>
        <div className="flex flex-col gap-2">
          <p>Lfg</p>
        </div>
        {allProjects.map((project, idx) => (
          <div key={idx}>
            <h2 className="mb-1 text-xl">
              <Link
                href={project.slug}
                className="transition-all text-slate-200 hover:text-teal-300 flex align-middle"
              >
                {project.title}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
