"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import createGlobe from "cobe"

interface CdnMarker {
  id: string
  location: [number, number]
  region: string
}

interface CdnArc {
  id: string
  from: [number, number]
  to: [number, number]
}

interface GlobeCdnProps {
  markers?: CdnMarker[]
  arcs?: CdnArc[]
  className?: string
  speed?: number
}

const defaultMarkers: CdnMarker[] = [
  { id: "node-nyc", location: [40.71, -74.01], region: "AI Integration" },
  { id: "node-sfo", location: [37.77, -122.42], region: "Smart Contracts" },
  { id: "node-cdg", location: [48.86, 2.35], region: "DeFi Solutions" },
  { id: "node-hnd", location: [35.68, 139.65], region: "ML Pipeline" },
  { id: "node-syd", location: [-33.87, 151.21], region: "Web3 Dev" },
  { id: "node-gru", location: [-23.55, -46.63], region: "Blockchain Audit" },
  { id: "node-sin", location: [1.35, 103.82], region: "LLM Fine-tuning" },
  { id: "node-dub", location: [25.21, 55.27], region: "NFT Platform" },
  { id: "node-blr", location: [12.97, 77.59], region: "AI Automation" },
  { id: "node-lon", location: [51.51, -0.13], region: "Token Launch" },
]

const defaultArcs: CdnArc[] = [
  { id: "arc-1", from: [40.71, -74.01], to: [48.86, 2.35] },
  { id: "arc-2", from: [37.77, -122.42], to: [35.68, 139.65] },
  { id: "arc-3", from: [48.86, 2.35], to: [1.35, 103.82] },
  { id: "arc-4", from: [40.71, -74.01], to: [-23.55, -46.63] },
  { id: "arc-5", from: [35.68, 139.65], to: [-33.87, 151.21] },
  { id: "arc-6", from: [51.51, -0.13], to: [12.97, 77.59] },
]

export function GlobeCdn({
  markers = defaultMarkers,
  arcs = defaultArcs,
  className = "",
  speed = 0.003,
}: GlobeCdnProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  /** Touch-primary devices: skip drag + allow page scroll (see canvas touchAction). */
  const [allowPointerDrag, setAllowPointerDrag] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)")
    const apply = () => setAllowPointerDrag(!mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    if (!allowPointerDrag) return
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [allowPointerDrag, handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      // Vallorex Brand Colors
      // Blue: #2563EB -> [0.145, 0.388, 0.922]
      // Midnight: #0F172A -> [0.059, 0.090, 0.165]
      
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width, 
        height: width,
        phi: 0, 
        theta: 0.2, 
        dark: 0, 
        diffuse: 1.5,
        mapSamples: 16000, 
        mapBrightness: 10,
        baseColor: [1, 1, 1],
        markerColor: [0.145, 0.388, 0.922], // Brand Blue
        glowColor: [0.145, 0.388, 0.922],
        markerElevation: 0.02,
        markers: markers.map((m) => ({ location: m.location, size: 0.012, id: m.id })),
        arcs: arcs.map((a) => ({ from: a.from, to: a.to, id: a.id })),
        arcColor: [0.059, 0.090, 0.165], // Midnight
        arcWidth: 0.5, 
        arcHeight: 0.25, 
        opacity: 0.7,
      })

      function animate() {
        if (!isPausedRef.current) phi += speed
        globe!.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }
      animate()
      setTimeout(() => canvas && (canvas.style.opacity = "1"))
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, arcs, speed])

  const pyramidFaceStyle = (nth: number): React.CSSProperties => {
    const transforms = [
      "rotateY(0deg) translateZ(4px) rotateX(19.5deg)",
      "rotateY(120deg) translateZ(4px) rotateX(19.5deg)",
      "rotateY(240deg) translateZ(4px) rotateX(19.5deg)",
      "rotateX(-90deg) rotateZ(60deg) translateY(4px)",
    ]
    // Use Midnight and Brand Blue for pyramid faces
    const colors = ["#0F172A", "#2563EB", "#1D4ED8", "#111827"]
    return {
      position: "absolute", left: -0.5, top: 0,
      width: 0, height: 0,
      borderLeft: "6.5px solid transparent",
      borderRight: "6.5px solid transparent",
      borderBottom: `13px solid ${colors[nth]}`,
      transformOrigin: "center bottom",
      transform: transforms[nth],
    }
  }

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <style>{`
        @keyframes pyramid-spin {
          0% { transform: rotateX(20deg) rotateY(0deg); }
          100% { transform: rotateX(20deg) rotateY(360deg); }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        onPointerDown={allowPointerDrag ? handlePointerDown : undefined}
        style={{
          width: "100%", height: "100%",
          cursor: allowPointerDrag ? "grab" : "default",
          opacity: 0,
          transition: "opacity 1.2s ease", borderRadius: "50%",
          touchAction: allowPointerDrag ? "none" : "auto",
        }}
      />
      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            positionAnchor: `--cobe-${m.id}`,
            bottom: "anchor(top)",
            left: "anchor(center)",
            translate: "-50% 0",
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            gap: 6,
            pointerEvents: "none" as const,
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
            transition: "opacity 0.3s, filter 0.3s",
          }}
        >
          <div style={{
            width: 12, height: 12, position: "relative",
            transformStyle: "preserve-3d" as const,
            animation: "pyramid-spin 4s linear infinite",
          }}>
            {[0, 1, 2, 3].map((n) => (
              <div key={n} style={pyramidFaceStyle(n)} />
            ))}
          </div>
          <span style={{
            fontFamily: "monospace", fontSize: "0.5rem", color: "#0F172A", // Midnight
            background: "#fff", padding: "2px 6px", borderRadius: 3,
            letterSpacing: "0.05em", whiteSpace: "nowrap" as const,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            border: "1px solid #E2E8F0"
          }}>{m.region}</span>
        </div>
      ))}
    </div>
  )
}
