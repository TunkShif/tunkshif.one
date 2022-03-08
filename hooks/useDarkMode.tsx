import { useEffect, useState } from "react"

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    let value = null
    const isServer = typeof window === "undefined"
    if (!isServer) {
      value = localStorage.getItem("theme")
    }
    return value == null || value == "light" ? false : true
  })

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light")
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return [darkMode, setDarkMode] as const
}

export default useDarkMode
