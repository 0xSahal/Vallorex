'use client'

import { useState, useEffect, useCallback, Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setShouldLoad(true))
      return () => window.cancelIdleCallback(id)
    }
    const timer = setTimeout(() => setShouldLoad(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`relative ${className ?? ''}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-white/10 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}

      {shouldLoad && (
        <Suspense fallback={null}>
          <div
            className="w-full h-full transition-opacity duration-700"
            style={{ opacity: isLoaded ? 1 : 0 }}
          >
            <Spline
              scene={scene}
              onLoad={handleLoad}
            />
          </div>
        </Suspense>
      )}
    </div>
  )
}
