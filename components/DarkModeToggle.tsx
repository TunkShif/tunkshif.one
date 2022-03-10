import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/solid"
import useDarkMode from "../hooks/useDarkMode"

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useDarkMode()

  useEffect(() => setMounted(true), [])

  // avoid hydration mismatch
  if (!mounted) return null

  return (
    <div className="flex content-center justify-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="dark mode toggle"
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6 text-gray-100 opacity-80 hover:opacity-100" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-500 opacity-80 hover:opacity-100" />
        )}
      </button>
    </div>
  )
}
export default DarkModeToggle
