import { useSyncExternalStore } from "react"

const subscribe = (onChange: () => void) => {
  document.addEventListener("astro:page-load", onChange)
  return () => document.removeEventListener("astro:page-load", onChange)
}

export const useRoute = (defaultRoute: string) =>
  useSyncExternalStore(
    subscribe,
    () => window.location.pathname,
    () => defaultRoute
  )
