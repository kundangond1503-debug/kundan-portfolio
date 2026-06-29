import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });

  const [render, setRender] = useState({
    x: 0,
    y: 0,
    scale: 1,
  });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let animationId;

    const animate = () => {
      const dx = mouse.current.x - circle.current.x;
      const dy = mouse.current.y - circle.current.y;

      const speed = Math.sqrt(dx * dx + dy * dy);

      // 🎯 smooth follow
      circle.current.x += dx * 0.18;
      circle.current.y += dy * 0.18;

      // 🎯 snap when very close (fix drift)
      if (Math.abs(dx) < 0.05) circle.current.x = mouse.current.x;
      if (Math.abs(dy) < 0.05) circle.current.y = mouse.current.y;

      // 🎯 dynamic scale (bada-chhota effect)
      let scale = 1 + speed / 80;

      if (scale > 2.2) scale = 2.2;
      if (scale < 1) scale = 1;

      setRender({
        x: circle.current.x,
        y: circle.current.y,
        scale,
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const down = () => {
      setRender((p) => ({ ...p, scale: 2.5 }));
    };

    const up = () => {
      setRender((p) => ({ ...p, scale: 1 }));
    };

    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* ⭕ OUTER CIRCLE (dynamic size + smooth follow) */}
      <div
        style={{
          position: "fixed",
          left: render.x,
          top: render.y,
          transform: `translate(-50%, -50%) scale(${render.scale})`,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1px solid rgba(0, 246, 255, 0.25)",
          background: "rgba(0,0,0,0.2)",
          pointerEvents: "none",
          zIndex: 40,
          transition: "transform 0.05s linear",
        }}
      />

      {/* 🔵 INNER DOT */}
      <div
        style={{
          position: "fixed",
          left: mouse.current.x,
          top: mouse.current.y,
          transform: "translate(-50%, -50%)",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#00f6ff",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />
    </>
  );
}