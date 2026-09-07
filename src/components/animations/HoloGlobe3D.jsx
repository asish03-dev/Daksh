import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Radio, Activity, Zap } from "lucide-react";

/**
 * HoloGlobe3D - 3D Holographic Geospatial Network Sphere
 * 
 * Interactive 3D rotating wireframe sphere of India's statistical telemetry nodes:
 * - New Delhi (CSO / Ministry HQ)
 * - Kolkata (FOD Data Processing HQ)
 * - Mumbai (Industrial Statistics Wing)
 * - Chennai (Southern Zonal Hub)
 * - Nagpur (Training Academy - NSSTA)
 */
export default function HoloGlobe3D({ className = "" }) {
  const canvasRef = useRef(null);
  const [activeHub, setActiveHub] = useState("Kolkata (FOD HQ)");
  const [packetCount, setPacketCount] = useState(14820);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    const size = 320;
    canvas.width = size * 2;
    canvas.height = size * 2;
    ctx.scale(2, 2);

    const radius = 100;
    const centerX = size / 2;
    const centerY = size / 2;
    let angleY = 0;

    // 3D Nodes representing MoSPI hubs
    const nodes = [
      { name: "New Delhi (HQ)", lat: 28.6, lon: 77.2, color: "#FF7A1A", active: true },
      { name: "Kolkata (FOD)", lat: 22.5, lon: 88.3, color: "#00F2FE", active: true },
      { name: "Mumbai (CSO)", lat: 19.0, lon: 72.8, color: "#10B981", active: true },
      { name: "Chennai (Zonal)", lat: 13.0, lon: 80.2, color: "#F59E0B", active: true },
      { name: "Nagpur (NSSTA)", lat: 21.1, lon: 79.0, color: "#818CF8", active: true },
    ];

    // Convert lat/lon to 3D sphere coords
    const nodeCoords = nodes.map((n) => {
      const phi = (90 - n.lat) * (Math.PI / 180);
      const theta = (n.lon + 180) * (Math.PI / 180);
      return {
        ...n,
        x0: radius * Math.sin(phi) * Math.cos(theta),
        y0: -radius * Math.cos(phi),
        z0: radius * Math.sin(phi) * Math.sin(theta),
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      angleY += 0.008;

      // Draw glowing aura behind globe
      const aura = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, radius * 1.3);
      aura.addColorStop(0, "rgba(255, 122, 26, 0.12)");
      aura.addColorStop(0.6, "rgba(0, 242, 254, 0.08)");
      aura.addColorStop(1, "transparent");
      ctx.fillStyle = aura;
      ctx.fillRect(0, 0, size, size);

      // Draw latitude/longitude wireframe rings
      ctx.strokeStyle = "rgba(0, 242, 254, 0.22)";
      ctx.lineWidth = 1;

      // Latitude rings
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        const rLat = radius * Math.cos((lat * Math.PI) / 180);
        const yLat = centerY - radius * Math.sin((lat * Math.PI) / 180);
        ctx.ellipse(centerX, yLat, rLat, rLat * 0.35, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Outer Glow Rim
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 122, 26, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Project & Draw 3D Nodes
      const projectedNodes = nodeCoords.map((n) => {
        // Rotate around Y axis
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x = n.x0 * cosY - n.z0 * sinY;
        const z = n.z0 * cosY + n.x0 * sinY;
        const y = n.y0;

        return {
          ...n,
          projX: centerX + x,
          projY: centerY + y,
          isFront: z > -20,
          depthScale: (z + radius) / (2 * radius),
        };
      });

      // Draw connection lines between front nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];
          if (n1.isFront || n2.isFront) {
            ctx.beginPath();
            ctx.moveTo(n1.projX, n1.projY);
            ctx.lineTo(n2.projX, n2.projY);
            ctx.strokeStyle = "rgba(0, 242, 254, 0.25)";
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw node points
      projectedNodes.forEach((n) => {
        if (n.isFront) {
          ctx.beginPath();
          ctx.arc(n.projX, n.projY, 4 * Math.max(0.6, n.depthScale), 0, Math.PI * 2);
          ctx.fillStyle = n.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = n.color;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Pulse ring
          ctx.beginPath();
          ctx.arc(n.projX, n.projY, 8 * Math.max(0.6, n.depthScale), 0, Math.PI * 2);
          ctx.strokeStyle = n.color;
          ctx.globalAlpha = 0.4;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    const interval = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 5 + 1));
      const randomHub = nodes[Math.floor(Math.random() * nodes.length)].name;
      setActiveHub(randomHub);
    }, 2800);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        style={{ width: 280, height: 280 }}
        className="cursor-pointer hover:scale-105 transition-transform"
      />

      {/* Futuristic Telemetry Status Bar */}
      <div className="mt-2 w-full max-w-[280px] p-3 rounded-2xl bg-[#061026]/90 border border-cyan-500/30 backdrop-blur-xl flex items-center justify-between shadow-lg text-left">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
          <div>
            <p className="text-[10px] font-black text-cyan-300 uppercase tracking-wider leading-tight flex items-center gap-1">
              <span>Telemetry Node</span>
            </p>
            <p className="text-xs font-extrabold text-white truncate max-w-[130px]">
              {activeHub}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[9px] font-bold text-slate-400 uppercase">Live Records</span>
          <p className="text-xs font-mono font-black text-amber-400">
            {packetCount.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
