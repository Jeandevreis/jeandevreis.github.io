import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function EducationInfo({ currentEdu }: { currentEdu: Education }) {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const currentLang = i18n.language ? i18n.language.substring(0, 2) : "pt";

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const locales: Record<string, string> = { en: 'en-US', es: 'es-ES', pt: 'pt-BR' };
    const locale = locales[currentLang] || 'pt-BR';
    return date.toLocaleDateString(locale, { month: 'short', year: 'numeric' });
  };

  const formatType = (type: string) => t(`educations.Educations.types.${type}`);

  const content = currentEdu.translations.find(t => t.language === currentLang)
    || currentEdu.translations.find(t => t.language === 'pt');

  if (!content) return null;

  return (
    <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors">
          {formatType(currentEdu.type)}
        </span>
        {currentEdu.durationHours && (
          <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {currentEdu.durationHours}h
          </span>
        )}
      </div>

      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2 transition-colors">
        {content.institution}
      </span>

      <h3 className="text-3xl font-bold mb-4 leading-tight transition-colors">
        {content.name}
      </h3>

      <div className="mb-8 grow">
        <p className={`text-zinc-600 dark:text-zinc-400 leading-relaxed transition-all duration-300 
            ${isExpanded
            ? 'max-h-28 overflow-y-auto pr-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full'
            : 'line-clamp-3'
          }`}
        >
          {content.description}
        </p>

        {!isExpanded && (
          <button onClick={() => setIsExpanded(true)}
            className="text-blue-600 dark:text-blue-400 text-sm font-bold mt-2 hover:underline focus:outline-none"
          >
            {t('educations.readMore') || 'Continuar lendo'}
          </button>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-100 dark:border-zinc-800 pt-6 mt-auto transition-colors">
        <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
          {formatDate(currentEdu.startDate)}
          {currentEdu.endDate ? ` — ${formatDate(currentEdu.endDate)}` : ` — ${t('educations.date.present')}`}
        </div>

        {currentEdu.certificateUrl && (
          <a href={currentEdu.certificateUrl} target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {t('educations.viewCertificate')}
          </a>
        )}
      </div>
    </div>
  );
}