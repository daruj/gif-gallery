import { useEffect, useRef } from 'react'
import debounce from '@src/utils/debounce.util'

const useIntersectionObserver = (callback?: () => void, preventCallback = false) => {
  const observerTarget = useRef(null)

  // by adding this short debounce I give the browser a little bit of time to render the elements
  // before starting to check for the intersection observer. This prevents the initial re-fetching
  const handleIntersection = debounce((entries: IntersectionObserverEntry[]) => {
    if (callback && entries[0].isIntersecting && !preventCallback) {
      callback()
    }
  }, 100)

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
