export default function WidgetScreen({ className = "" }: { className?: string }) {
  const rows = [
    { id: "PC-4821", cli: "Alfa Ind.", status: "Faturado", badge: "ok", selected: true },
    { id: "PC-4820", cli: "Beta Com.", status: "Pendente", badge: "warn" },
    { id: "PC-4819", cli: "Gama Log.", status: "Bloqueado", badge: "err" },
    { id: "PC-4818", cli: "Delta SA", status: "Faturado", badge: "ok" },
  ]

  // Cores alinhadas com o estilo Totvs (o verde "ok" agora é o mesmo do chart: #0ea56a)
  const badgeClass: Record<string, string> = {
    ok: "bg-[#e6f7f0] text-[#0ea56a]",
    warn: "bg-[#fff3d6] text-[#c28600]",
    err: "bg-[#fde8e8] text-[#c84848]",
  }

  return (
    <div
      // Aqui usamos a mesma sombra e o mesmo border-radius do Chart
      className={`w-36 h-28 bg-white rounded-sm shadow-[0_4px_18px_rgba(0,34,51,0.13),0_1px_4px_rgba(0,34,51,0.07)] border border-[#c8d2da] overflow-hidden flex flex-col ${className}`}
    >
      {/* Titlebar */}
      <div className="h-4 min-h-4 bg-[#f4f7f9] border-b border-[#c8d2da] flex items-center px-[7px] gap-3">
        <div className="flex gap-[3.5px] items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
        </div>

        <div className="flex gap-[2px] items-end pt-[2px]">
          <span className="text-[5px] font-semibold px-[5px] py-[2px] rounded-t-[2px] leading-none bg-white text-[#002233] border border-b-0 border-[#c8d2da]">
            Pedidos
          </span>
          {/* Usando o mesmo cinza do eixo X do Chart */}
          <span className="text-[5px] font-semibold px-[5px] py-[2px] rounded-t-[2px] leading-none text-[#9ab0bf]">
            Estoque
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex overflow-hidden">

        {/* Sidebar */}
        <div className="w-8 min-w-8 bg-[#f9fbfc] border-r border-[#c8d2da] flex flex-col p-[4px] gap-[2px]">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className={`flex items-center gap-[3px] p-[2px] rounded-[2px] ${active ? "bg-[#e6fbff]" : ""}`}>
              <div className="w-[4px] h-[4px] rounded-[1px] flex-shrink-0" style={{ background: active ? "#00DBFF" : "#c8d2da" }} />
              <div className="h-[3px] flex-1 rounded-full" style={{ background: active ? "#00DBFF" : "#e2e9ee" }} />
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 flex flex-col p-[6px] gap-[4px] overflow-hidden">

          <div className="flex items-center justify-between mb-[2px]">
            {/* Título com o mesmo uppercase e tracking do Chart */}
            <span className="text-[6px] font-bold text-[#002233] uppercase tracking-[0.05em] leading-none">
              Ordens de Venda
            </span>
            {/* Botão com o ciano exato do Totvs */}
            <span className="text-[4.5px] font-semibold bg-[#00DBFF] text-[#002233] px-[4px] py-[2px] rounded-[2px] leading-none shadow-sm">
              + Novo
            </span>
          </div>

          <div className="flex flex-col gap-[1px]">
            {rows.map(row => (
              <div key={row.id} className={`grid gap-[3px] items-center border-b border-[#e2e9ee] py-[3px] ${row.selected ? "bg-[#e6fbff] -mx-[4px] px-[4px] rounded-[2px]" : ""}`} style={{ gridTemplateColumns: "1.2fr 1.5fr 1.2fr" }}>
                <span className="text-[5px] font-medium text-[#002233] leading-none">{row.id}</span>
                <span className={`text-[5px] truncate leading-none ${row.selected ? "font-medium text-[#002233]" : "text-[#9ab0bf]"}`}>{row.cli}</span>
                <div className="flex justify-end">
                  <span className={`text-[4px] font-bold px-[3px] py-[1px] rounded-[2px] leading-none inline-block ${badgeClass[row.badge]}`}>{row.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="h-[10px] min-h-[10px] bg-white border-t border-[#c8d2da] flex items-center justify-between px-[6px]">
        <span className="text-[4.5px] text-[#9ab0bf] font-medium leading-none">Admin · Filial 01</span>
        <div className="flex items-center gap-[3px]">
          <div className="w-1 h-1 rounded-full bg-[#0ea56a]" />
          <span className="text-[4.5px] text-[#9ab0bf] font-medium leading-none">Online</span>
        </div>
      </div>
    </div>
  )
}