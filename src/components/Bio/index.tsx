import { Trans, useTranslation } from "react-i18next";

export default function Bio() {
  const { t } = useTranslation();

  return (
    <div className="
      w-full md:w-8/12 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-2xl p-8 md:p-10 
      border border-zinc-100 dark:border-zinc-800 flex flex-col justify-center
      transition-colors duration-300
    ">
      <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        {t("about.bio.title")}
      </h3>

      <div className="space-y-5 text-justify text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors duration-300">
        <p><Trans>{t("about.bio.paragraph1")}</Trans></p>
        <p><Trans>{t("about.bio.paragraph2")}</Trans></p>
      </div>
    </div>
  )
}
