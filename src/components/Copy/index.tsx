import { useTranslation } from "react-i18next";

export default function Copy() {
  const { t } = useTranslation();

  return (
    <div className="z-10 md:-mt-8 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">

      <div className="mb-6 md:mb-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f0f4f6] border border-[#d4dde3] text-[11px] font-medium text-[#002233] tracking-widest uppercase transition-colors duration-300">
        <span className="w-4.5 h-[1.5px] bg-[#002233] rounded-sm opacity-70"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#00DBFF]"></span>
        {t("hero.badge")}
      </div>

      <span className="text-[13px] md:text-sm md:ml-0.5 text-[#002233]/60 font-medium tracking-wide transition-colors duration-300">
        {t("hero.intro")}
      </span>

      <h1 className="text-[26px] md:text-[30px] font-bold tracking-tight leading-snug text-[#002233] transition-colors duration-300 mt-2">
        {t("hero.titlePart1")}
        <span className="text-[#075b85]">{t("hero.titleHighlight")}</span>
        {t("hero.titlePart2")}
      </h1>

      <p className="mt-3 md:mt-4 mx-auto md:mx-0 text-[13.5px] md:text-[15px] text-[#002233]/65 max-w-lg leading-relaxed transition-colors duration-300">
        {t("hero.description")}
      </p>

      <div className="flex flex-wrap justify-center md:justify-start items-center gap-2.5 md:gap-3 mt-6 md:mt-10 w-full">

        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold cursor-pointer bg-[#00DBFF] text-[#002233] px-5 py-2 text-[13px]
            rounded-[7px] hover:bg-[#A44DFF] hover:text-white transition-colors duration-300
            flex items-center gap-1.5"
        >
          {t("hero.ctaTalk")}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>

        <a
          className="font-medium cursor-pointer bg-white text-[#002233] px-5 py-2 text-[13px]
            border border-[#d4dde3] rounded-[7px] hover:bg-[#f5f7f9] transition-colors duration-300
            flex items-center gap-1.5"
          href="#experiencia"
        >
          {t("hero.ctaSpecialties")}
        </a>

      </div>
    </div>
  )
}
