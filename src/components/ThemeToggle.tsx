import { Toggle } from "solid-headless"
import { Component, createEffect, createSignal, onMount, Show } from "solid-js"
import { MoonIcon, SunIcon } from "./Icons"

const trackClasses =
  "relative inline-flex flex-shrink-0 items-center h-[24px] w-[44px] bg-gray-100 dark:bg-transparent rounded-full ring-1 ring-inset ring-gray-100 hover:ring-gray-300 dark:ring-white/10 hover:dark:ring-white/20 cursor-pointer transition duration-200 ease-in-out"

const ThemeToggle: Component = () => {
  const [isMounted, setIsMounted] = createSignal(false)
  const [theme, setTheme] = createSignal<string | null>(null)
  const isDarkTheme = () => theme() === "dark"

  onMount(() => {
    setIsMounted(true)
    setTheme(localStorage.getItem("theme"))
  })

  createEffect(() => {
    if (theme() === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  })

  const handleChange = () => {
    const changedTheme = theme() === "dark" ? "light" : "dark"
    setTheme(changedTheme)
    localStorage.setItem("theme", changedTheme)
  }

  return (
    <Show when={isMounted()} fallback={<button class={trackClasses}></button>}>
      <Toggle class={trackClasses} pressed={isDarkTheme()} onChange={handleChange}>
        <span class="sr-only">Theme Toggle</span>
        <span class="inline-flex justify-center items-center pointer-events-none h-[22px] w-[22px] bg-white dark:bg-slate-800 rounded-full shadow-lg ring-0 transform transition duration-200 ease-in-out dark:translate-x-5">
          {theme() === "dark" ? (
            <MoonIcon class="w-3 h-3 text-gray-300" />
          ) : (
            <SunIcon class="w-3 h-3 text-gray-500" />
          )}
        </span>
      </Toggle>
    </Show>
  )
}

export default ThemeToggle
