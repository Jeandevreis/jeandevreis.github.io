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
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#eeede6] overflow-hidden">

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#e4e4e7 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.015), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-white/60 via-transparent to-white/90 pointer-events-none" />

    </div>
  );
}