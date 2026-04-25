import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Card({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { t, i18n } = useTranslation();

  const currentLang = i18n.language ? i18n.language.substring(0, 2) : "pt";

  const content = project.translations.find(t => t.language === currentLang)
    || project.translations.find(t => t.language === 'pt');

  if (!content) return null;

  const maxLength = 190;
  const isLongText = content.description.length > maxLength;

  return (
    <div className="
      bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden 
      hover:-translate-y-1 hover:shadow-md transition-all duration-300 
      flex flex-col shadow-sm
    ">

      <div className="relative h-48 overflow-hidden shrink-0 border-b border-zinc-100 dark:border-zinc-800 group transition-colors duration-300">
        <img
          src={project.imageUrl}
          alt={content.title}
          className="w-full h-auto md:h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-zinc-100/10 dark:bg-zinc-950/30 transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          {content.title}
        </h3>

        <div className="mb-4 flex flex-col grow">
          <div className="min-h-18">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-all duration-300">

              {!isExpanded && isLongText
                ? content.description.slice(0, maxLength).trim() + "... "
                : content.description + " "}

              {isLongText && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-zinc-800 dark:text-zinc-300 font-bold hover:underline transition-colors ml-1"
                >
                  {isExpanded ? t("projects.showLess") : t("projects.readMore")}
                </button>
              )}
            </p>
          </div>
        </div>

        {project.githubStats && (
          <div className="
            mb-6 flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400
            border-t border-zinc-100 dark:border-zinc-800 pt-4 mt-2 transition-colors duration-300
          ">
            <span className="flex items-center gap-1 font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-300" title="Estrelas no GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              {project.githubStats.stars}
            </span>

            {project.githubStats.languages && project.githubStats.languages.length > 0 && (
              <span className="text-zinc-300 dark:text-zinc-700 transition-colors duration-300">•</span>
            )}

            {project.githubStats.languages && project.githubStats.languages.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.githubStats.languages.slice(0, 3).map(lang => (
                  <span key={lang}
                    className="
                      bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 
                      text-zinc-600 dark:text-zinc-300 px-2 py-1 
                      rounded-md text-[11px] uppercase tracking-wider font-medium
                      transition-colors duration-300
                    "
                  >
                    {lang}
                  </span>
                ))}

                {project.githubStats.languages.length > 3 && (
                  <span className="text-zinc-500 dark:text-zinc-500 px-1 py-1 text-[11px] transition-colors duration-300">+</span>
                )}
              </div>
            )}
          </div>
        )}

        <div className="flex gap-3 mt-auto">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="
                flex-1 text-center bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 
                text-white dark:text-zinc-900 text-sm font-medium py-2.5 px-4 rounded-md 
                transition-colors shadow-sm
              "
            >
              {t("projects.viewProject")}
            </a>
          )}

          {project.repoUrl && project.repoUrl !== "" && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              className="
                flex-1 text-center bg-white dark:bg-transparent border border-zinc-200 dark:border-zinc-700 
                hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 
                text-sm font-medium py-2.5 px-4 rounded-md transition-colors shadow-sm
              "
            >
              {t("projects.code")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
