import { useEffect, useState } from "react";

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-white dark:bg-zinc-950 overflow-hidden transition-colors duration-300">

      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 dark:hidden"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(24, 24, 27, 0.03), transparent 40%)`,
        }}
      />


      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 hidden dark:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.04), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white dark:to-zinc-950 pointer-events-none transition-colors duration-300" />
    </div>
  );
}