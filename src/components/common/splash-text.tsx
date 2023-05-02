import type { ReactNode } from "react"

type SplashTextProps = {
  children: ReactNode
}

const SplashText = ({ children }: SplashTextProps) => {
  return (
    <div className="relative inline-block after:absolute after:-bottom-2 after:left-1 after:top-1/2 after:inline-block after:h-1/2 after:w-full after:-skew-x-12 after:-skew-y-2 after:rounded-[8px_14px_22px_16px] after:bg-black after:bg-opacity-20 after:mix-blend-multiply after:transition-colors after:duration-500 after:ease-in-out after:content-[''] hover:after:bg-sky-200 dark:after:bg-white dark:after:mix-blend-soft-light dark:hover:after:bg-sky-300">
      {children}
    </div>
  )
}

export default SplashText
