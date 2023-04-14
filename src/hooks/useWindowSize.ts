import { useState, useEffect } from 'react'

type TWindowSize = {
  width: number
  height: number
  isMoblie: boolean
}

export const useWindowSize = (): TWindowSize => {
  const [windowSize, setWindowSize] = useState<TWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    isMoblie: false,
  })

  const handleResize = () => {
    const screen = { width: window.innerWidth, height: window.innerHeight }
    if (screen) {
      setWindowSize((previousState) => ({ ...previousState, ...screen }))
    }
    if (screen.width <= 640) {
      setWindowSize((previousState) => ({ ...previousState, isMoblie: true }))
    } else {
      setWindowSize((previousState) => ({ ...previousState, isMoblie: false }))
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
