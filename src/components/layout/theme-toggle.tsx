import useMounted from "@/hooks/useMounted"
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid"
import * as Switch from "@radix-ui/react-switch"
import { useTheme } from "next-themes"

const track = /* tw */ `relative inline-flex flex-shrink-0 items-center h-[24px] w-[44px] bg-slate-200 dark:bg-slate-900 rounded-full ring-1 ring-inset ring-gray-100 hover:ring-gray-300 dark:ring-white/10 hover:dark:ring-white/30 cursor-pointer transition duration-200 ease-in-out`

const ThemeToggle = () => {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  if (!mounted) return <button className={track} />

  return (
    <Switch.Root className={track} onClick={() => setTheme(isDark ? "light" : "dark")}>
      <span className="sr-only">theme toggle</span>
      <Switch.Thumb className="pointer-events-none inline-flex h-[22px] w-[22px] translate-x-px transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out dark:translate-x-5 dark:bg-slate-800">
        {isDark ? (
          <MoonIcon className="h-3 w-3 text-gray-300" />
        ) : (
          <SunIcon className="h-3 w-3 text-gray-500" />
        )}
      </Switch.Thumb>
    </Switch.Root>
  )
}

export default ThemeToggle
