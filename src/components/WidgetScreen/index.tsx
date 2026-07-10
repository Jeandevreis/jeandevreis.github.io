export default function WidgetScreen({ className = "" }: { className?: string }) {
  const rows = [
    { id: "PC-4821", cli: "Alfa Ind.", status: "Faturado", badge: "ok", selected: true },
    { id: "PC-4820", cli: "Beta Com.", status: "Pendente", badge: "warn" },
    { id: "PC-4819", cli: "Gama Log.", status: "Bloqueado", badge: "err" },
    { id: "PC-4818", cli: "Delta SA", status: "Faturado", badge: "ok" },
  ]

  const badgeClass: Record<string, string> = {
    ok: "bg-[#e6f7f0] text-[#0ea56a]",
    warn: "bg-[#fff3d6] text-[#c28600]",
    err: "bg-[#fde8e8] text-[#c84848]",
  }

  return (
    <div
      className={`w-28 h-20 md:w-36 md:h-28 bg-white rounded-sm shadow-[0_4px_18px_rgba(0,34,51,0.13),0_1px_4px_rgba(0,34,51,0.07)] border border-[#c8d2da] overflow-hidden flex flex-col ${className}`}
    >
      {/* Header */}
      <div className="h-3 min-h-[12px] md:h-4 md:min-h-[16px] bg-[#f4f7f9] border-b border-[#c8d2da] flex items-center px-[5px] md:px-[7px] gap-2 md:gap-3">
        <div className="flex gap-[2.5px] md:gap-[3.5px] items-center">
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-red-400/70" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-amber-400/70" />
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-400/70" />
        </div>

        <div className="flex gap-[1.5px] md:gap-[2px] items-end pt-[1.5px] md:pt-[2px]">
          <span className="text-[4px] md:text-[5px] font-semibold px-[4px] py-[1.5px] md:px-[5px] md:py-[2px] rounded-t-[2px] leading-none bg-white text-[#002233] border border-b-0 border-[#c8d2da]">
            Pedidos
          </span>
          <span className="text-[4px] md:text-[5px] font-semibold px-[4px] py-[1.5px] md:px-[5px] md:py-[2px] rounded-t-[2px] leading-none text-[#9ab0bf]">
            Estoque
          </span>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-6 min-w-[24px] md:w-8 md:min-w-[32px] bg-[#f9fbfc] border-r border-[#c8d2da] flex flex-col p-[3px] md:p-[4px] gap-[1.5px] md:gap-[2px]">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className={`flex items-center gap-[2px] md:gap-[3px] p-[1.5px] md:p-[2px] rounded-[2px] ${active ? "bg-[#e6fbff]" : ""}`}>
              <div className="w-[3px] h-[3px] md:w-[4px] md:h-[4px] rounded-[1px] flex-shrink-0" style={{ background: active ? "#00DBFF" : "#c8d2da" }} />
              <div className="h-[2px] md:h-[3px] flex-1 rounded-full" style={{ background: active ? "#00DBFF" : "#e2e9ee" }} />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col p-[4.5px] md:p-[6px] gap-[3px] md:gap-[4px] overflow-hidden">
          <div className="flex items-center justify-between mb-[1.5px] md:mb-[2px]">
            <span className="text-[4.5px] md:text-[6px] font-bold text-[#002233] uppercase tracking-[0.05em] leading-none">
              Ordens de Venda
            </span>
            <span className="text-[3.5px] md:text-[4.5px] font-semibold bg-[#00DBFF] text-[#002233] px-[3px] py-[1.5px] md:px-[4px] md:py-[2px] rounded-[2px] leading-none shadow-sm">
              + Novo
            </span>
          </div>

          <div className="flex flex-col gap-[0.5px] md:gap-[1px]">
            {rows.map(row => (
              <div key={row.id} className={`grid gap-[2px] md:gap-[3px] items-center border-b border-[#e2e9ee] py-[2px] md:py-[3px] ${row.selected ? "bg-[#e6fbff] -mx-[3px] md:-mx-[4px] px-[3px] md:px-[4px] rounded-[2px]" : ""}`} style={{ gridTemplateColumns: "1.2fr 1.5fr 1.2fr" }}>
                <span className="text-[4px] md:text-[5px] font-medium text-[#002233] leading-none">{row.id}</span>
                <span className={`text-[4px] md:text-[5px] truncate leading-none ${row.selected ? "font-medium text-[#002233]" : "text-[#9ab0bf]"}`}>{row.cli}</span>
                <div className="flex justify-end">
                  <span className={`text-[3.5px] md:text-[4px] font-bold px-[2px] py-[1px] md:px-[3px] md:py-[1px] rounded-[2px] leading-none inline-block ${badgeClass[row.badge]}`}>{row.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="h-[8px] min-h-[8px] md:h-[10px] md:min-h-[10px] bg-white border-t border-[#c8d2da] flex items-center justify-between px-[4.5px] md:px-[6px]">
        <span className="text-[3.5px] md:text-[4.5px] text-[#9ab0bf] font-medium leading-none">Admin · Filial 01</span>
        <div className="flex items-center gap-[2px] md:gap-[3px]">
          <div className="w-[3px] h-[3px] md:w-1 md:h-1 rounded-full bg-[#0ea56a]" />
          <span className="text-[3.5px] md:text-[4.5px] text-[#9ab0bf] font-medium leading-none">Online</span>
        </div>
      </div>
    </div>
  )
}
