import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import EducationItem from '@/components/EducationItem';

export default function Educations() {
  const [educations, setEducations] = useState<Education[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/educations`)
      .then((res) => res.json())
      .then((data: Education[]) => {
        setEducations(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar formações:", err);
        setIsLoading(false);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % educations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + educations.length) % educations.length);
  };

  if (isLoading) {
    return (
      <section className="flex flex-col items-center py-20 px-6 w-full text-zinc-900 dark:text-zinc-100 min-h-150 justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-zinc-900 dark:border-zinc-100"></div>
      </section>
    );
  }

  if (educations.length === 0) return null;

  return (
    <section id="educations" className="
      flex flex-col items-center py-20 px-6 md:px-16 w-full 
      text-zinc-900 dark:text-zinc-100 
      transition-colors duration-300
    ">

      <div className="mb-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight">{t("educations.title", "Educação")}</h2>
        <div className="w-12 h-1 bg-zinc-900 dark:bg-zinc-100 mt-2 rounded-full transition-colors duration-300"></div>
      </div>

      <EducationItem currentEdu={educations[currentIndex]} />

      {educations.length > 1 && (
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-500"
            aria-label="Formação anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {educations.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-zinc-300 dark:bg-zinc-700'}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-500"
            aria-label="Próxima formação"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

    </section>
  );
}