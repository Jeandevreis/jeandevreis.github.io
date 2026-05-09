import Background from "@/components/Background";
import Copy from "@/components/Copy";
import HeroPhoto from "@/components/HeroPhoto";

export default function Hero() {
  return (
    <section id="hero" className="
        scroll-mt-14 flex items-stretch justify-center px-6 py-8 md:px-16
        text-zinc-900 dark:text-zinc-100 w-full min-h-[calc(100vh-3.5rem)] relative gap-8 md:gap-10
        transition-colors duration-300 flex-col md:flex-row
      "
    >
      <Background />
      <Copy />
      <HeroPhoto />
    </section>
  )
}