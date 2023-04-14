import { useRef, useEffect, RefObject } from 'react'

type TCallback = () => void

export const useClickOutside = <T extends HTMLElement>(callback: TCallback): RefObject<T> => {
  const ref = useRef<T>(null)

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return ref
}
