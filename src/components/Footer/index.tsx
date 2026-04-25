import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="
      flex items-center justify-center
      w-full h-14 bg-zinc-950 border-t border-zinc-800 text-sm text-zinc-400
      shadow-sm shadow-zinc-900 sticky mt-auto
    ">
      {t("footer.rights", { year: new Date().getFullYear() })}
    </footer>
  )
}
