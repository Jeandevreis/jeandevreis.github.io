import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@/components/Card';
import SkeletonCard from '@/components/Skeleton';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar projetos:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="
      flex flex-col items-center py-20 px-6 md:px-16 w-full 
      text-zinc-900 dark:text-zinc-100 
      transition-colors duration-300
    ">

      <div className="mb-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight">{t("menu.projects")}</h2>
        <div className="w-12 h-1 bg-zinc-900 dark:bg-zinc-100 mt-2 rounded-full transition-colors duration-300"></div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {isLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          projects.map((project) => (
            <Card key={project.id} project={project} />
          ))
        )}
      </div>

    </section>
  );
}
