export default function EducationImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-full lg:w-1/2 flex border-t lg:border-t-0 lg:border-l border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
      {imageUrl ? (
        <img
          key={imageUrl}
          src={imageUrl}
          alt="Education"
          className="w-full h-auto block animate-fade-in"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-zinc-300 dark:text-zinc-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
      )}
    </div>
  );
}
