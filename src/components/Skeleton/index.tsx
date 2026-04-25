export default function Skeleton() {
  return (
    <div className="
      bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden 
      flex flex-col shadow-sm animate-pulse
    ">

      <div className="h-48 shrink-0 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800/50"></div>

      <div className="p-6 flex flex-col grow">
        <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-md w-3/4 mb-4"></div>

        <div className="mb-4 flex flex-col grow gap-2 min-h-18">
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-5/6"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-4/6"></div>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-3 border-t border-zinc-100 dark:border-zinc-800 pt-4 mt-2">
          <div className="h-4 w-12 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
          <div className="h-6 w-14 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
          <div className="h-6 w-16 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
        </div>

        <div className="flex gap-3 mt-auto">
          <div className="flex-1 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
          <div className="flex-1 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
