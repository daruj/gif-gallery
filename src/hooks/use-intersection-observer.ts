import { useEffect, useRef } from 'react'

const useIntersectionObserver = (callback?: () => void, preventCallback = false) => {
  const observerTarget = useRef(null)

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (callback && entries[0].isIntersecting && !preventCallback) {
      callback()
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 1 })

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [observerTarget, handleIntersection])

  return observerTarget
}

export default useIntersectionObserver
