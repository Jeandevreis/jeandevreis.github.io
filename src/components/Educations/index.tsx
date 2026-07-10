import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Translation {
  language: string;
  name: string;
  institution: string;
  description: string;
}

interface Education {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  durationHours: number;
  imageUrl: string;
  certificateUrl: string;
  status: string;
  translations: Translation[];
}

export default function Educations() {
  const { t, i18n } = useTranslation();
  const [educations, setEducations] = useState<Education[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/educations`);
        if (!response.ok) {
          throw new Error("Erro ao buscar as formações");
        }
        const data = await response.json();
        setEducations(data);
      } catch (err: any) {
        setError(err.message || "Erro desconhecido");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEducations();
  }, []);

  // Formatar data para exibição (Ex: "Jun 2023")
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(i18n.language || "pt-BR", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <section id="educations" className="py-16 md:py-24 px-6 md:px-16 w-full bg-[#f9fbfc] border-t border-[#e2e9ee]">
      <div className="max-w-7xl mx-auto flex flex-col">

        {/* Cabeçalho da Seção */}
        <div className="mb-10 md:mb-14 flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f0f4f6] border border-[#d4dde3] text-[11px] font-medium text-[#002233] tracking-widest uppercase">
            <span className="w-4.5 h-[1.5px] bg-[#002233] rounded-sm opacity-70"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00DBFF]"></span>
            {t("educations.badge", "Formações & Certificações")}
          </div>
          <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#002233]">
            {t("educations.title", "Meu Histórico Educacional")}
          </h2>
        </div>

        {/* Estados de Loading e Erro */}
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <div className="w-8 h-8 border-4 border-[#e2e9ee] border-t-[#00DBFF] rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-10 text-[#c84848] bg-[#fde8e8] border border-[#f8b4b4] rounded-md max-w-md mx-auto">
            <p className="text-[13px] font-medium">{error}</p>
          </div>
        )}

        {/* Grid de Cards */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {educations.map((edu) => {
              // Busca a tradução baseada no idioma atual, com fallback para 'pt' ou a primeira disponível
              const langData =
                edu.translations.find((tr) => tr.language === (i18n.language || "pt")) ||
                edu.translations.find((tr) => tr.language === "pt") ||
                edu.translations[0];

              return (
                <div
                  key={edu.id}
                  className="flex flex-col bg-white border border-[#c8d2da] rounded-md shadow-[0_2px_10px_rgba(0,34,51,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,34,51,0.08)] hover:-translate-y-1"
                >
                  {/* Imagem do Curso */}
                  <div className="w-full h-40 bg-[#f4f7f9] border-b border-[#e2e9ee] relative overflow-hidden group">
                    <img
                      src={edu.imageUrl}
                      alt={langData?.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-[4px] text-[10px] font-bold text-[#002233] border border-[#d4dde3] shadow-sm">
                      {edu.durationHours}h
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 text-[11px] font-semibold tracking-wide text-[#9ab0bf] uppercase">
                      <span>{langData?.institution}</span>
                      <span className="w-1 h-1 rounded-full bg-[#d4dde3]"></span>
                      <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                    </div>

                    <h3 className="text-[15px] md:text-[16px] font-bold text-[#002233] leading-snug mb-3 line-clamp-2">
                      {langData?.name}
                    </h3>

                    <p className="text-[13px] text-[#002233]/65 leading-relaxed flex-1 line-clamp-3 mb-5">
                      {langData?.description}
                    </p>

                    {/* Botão de Certificado */}
                    <a
                      href={edu.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex justify-center items-center gap-2 w-full py-2.5 bg-white text-[#002233] border border-[#c8d2da] rounded-[4px] text-[12px] font-semibold transition-colors duration-300 hover:bg-[#00DBFF] hover:border-[#00DBFF] group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:scale-110">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      {t("educations.certificateBtn", "Visualizar Certificado")}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
