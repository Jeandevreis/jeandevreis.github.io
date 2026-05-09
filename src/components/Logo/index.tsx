export default function Logo() {
  return (
    <div className="text-2xl font-bold flex items-base">
      <img src="logo.png" className="w-8 h-8 mr-2" alt="" />

      <span className="hidden md:block">Jean</span>

      <span className="text-[#A44DFF] hidden md:block">R</span>

      <span className="hidden md:block">eis</span>
    </div>
  )
}