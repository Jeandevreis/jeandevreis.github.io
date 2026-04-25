export default function Logo() {
  return (
    <div className="text-2xl font-bold flex items-base">
      <img src="/logo.png" alt="Willian Daniel Logo"
        className="w-7 h-7 inline-block mr-2"
      />

      <span className="hidden md:block">Willian</span>

      <span className="text-amber-300 hidden md:block">D</span>

      <span className="hidden md:block">Daniel</span>
    </div>
  )
}