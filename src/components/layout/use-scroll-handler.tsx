import { throttle } from "radash"
import { useCallback, useRef } from "react"

export const useScrollHandler = <T extends HTMLElement>(options: { offset: number }) => {
  const ref = useRef<T>(null)
  const handleScroll = useCallback(
    throttle({ interval: 20 }, () => {
      if (!ref.current) return
      const isScrolled = ref.current.scrollTop > options.offset
      ref.current.dataset.scrolled = `${isScrolled}`
    }),
    []
  )
  return { ref, handleScroll }
}
