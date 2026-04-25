import { useTranslation } from "react-i18next";

import Profile from "@/components/Profile";
import Bio from "@/components/Bio";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="flex flex-col items-center py-20 px-6 w-full text-zinc-900 dark:text-zinc-100 transition-colors duration-300">

      <div className="mb-20 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight">{t("about.title")}</h2>
        <div className="w-12 h-1 bg-zinc-900 dark:bg-zinc-100 mt-2 rounded-full transition-colors duration-300"></div>
      </div>

      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
        <Profile />
        <Bio />
      </div>
    </section>
  )
}