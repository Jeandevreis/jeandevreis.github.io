import WidgetChart from "@/components/WidgetChart";
import WidgetScreen from "@/components/WidgetScreen";

export default function HeroPhoto() {
  return (
    <div className="w-full max-w-xs md:max-w-sm lg:max-w-md shrink-0">
      <div className="relative bg-[#002233]/70 rounded-3xl md:ml-5 md:mr-8 mt-5 rounded-tr-none flex items-center justify-center px-4">
        <img
          src="jean-reis-consultar-totvs.png"
          alt="Jean Reis Photo"
          className="w-11/12 h-auto relative z-10"
        />
        <WidgetChart className="absolute top-8 -right-8 z-20 md:-right-8" />
        <WidgetScreen className="absolute scale-95 bottom-8 -left-12 z-20 md:-left-28" />
      </div>
    </div>
  )
}
