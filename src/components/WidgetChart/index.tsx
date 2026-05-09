export default function WidgetChart({ className = "" }: { className?: string }) {
  const bars = [
    { h: "40%", dark: true },
    { h: "72%", dark: false },
    { h: "55%", dark: true },
    { h: "90%", dark: false },
    { h: "63%", dark: true },
    { h: "94%", dark: false },
  ]

  return (
    <div
      className={`w-24 bg-white rounded-sm shadow-[0_4px_18px_rgba(0,34,51,0.13),0_1px_4px_rgba(0,34,51,0.07)] border border-[#c8d2da] p-[6px] pb-[5px] flex flex-col gap-[3px] ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[6px] font-bold text-[#002233] uppercase tracking-[0.05em] leading-none">
          Faturamento
        </span>
        <div className="flex items-center gap-[3px]">
          <span className="text-[5px] font-semibold text-[#0ea56a] leading-none">▲12,4%</span>
        </div>
      </div>

      {/* Barras */}
      <div className="flex items-end gap-[1.5px] h-4 w-full">
        {bars.map((bar, i) => (
          <div key={i} className="flex-1 h-full flex flex-col justify-end">
            <div
              className="w-full rounded-t-[1px]"
              style={{
                height: bar.h,
                background: bar.dark ? "#002233" : "#00DBFF",
              }}
            />
          </div>
        ))}
      </div>

      {/* Eixo X */}
      <div className="flex justify-between border-t border-[#c8d2da] pt-[1.5px]">
        {["Out", "Nov", "Dez", "Jan", "Fev", "Mar"].map(m => (
          <span key={m} className="text-[4.5px] text-[#9ab0bf] font-medium">{m}</span>
        ))}
      </div>
    </div>
  )
}