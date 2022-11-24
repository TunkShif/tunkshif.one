import { Toggle } from "solid-headless"
import { Component, createEffect, createSignal, onMount, Show } from "solid-js"

const MoonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    class="w-3 h-3 text-gray-300"
  >
    <path
      fill-rule="evenodd"
      d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
      clip-rule="evenodd"
    />
  </svg>
)

const SunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    class="w-3 h-3 text-gray-500"
  >
    <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
  </svg>
)

const trackClasses =
  "relative inline-flex flex-shrink-0 items-center h-[24px] w-[44px] bg-gray-200 dark:bg-transparent rounded-full ring-1 ring-inset ring-gray-200 dark:ring-white/10 cursor-pointer transition duration-200 ease-in-out"

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
          {theme() === "dark" ? MoonIcon : SunIcon}
        </span>
      </Toggle>
    </Show>
  )
}

export default ThemeToggle
