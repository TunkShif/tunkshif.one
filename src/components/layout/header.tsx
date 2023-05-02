import Logo from "@/components/layout/logo"
import NavLink from "@/components/layout/nav-link"
import ThemeToggle from "@/components/layout/theme-toggle"
import Link from "next/link"

const Header = () => {
  return (
    <header className="supports-backdrop-blur:bg-white/60 md:sticky top-0 z-50 w-full border-b border-slate-900/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-slate-800/90">
      <div className="mx-4 h-20 max-w-full py-2 md:mx-8 md:h-14 md:py-0 lg:mx-auto lg:max-w-4xl">
        <div className="flex h-full flex-col items-center justify-between md:flex-row">
          <Link className="inline-block md:mt-0.5" href="/">
            <span className="sr-only">back to home page</span>
            <Logo />
          </Link>

          <div className="flex items-center">
            <nav>
              <ul className="flex items-center space-x-1">
                <li>
                  <NavLink to="/articles" text="Articles" />
                </li>
                <li>
                  <NavLink to="/series" text="Series" />
                </li>
                <li>
                  <NavLink to="/updates" text="Updates" />
                </li>
                <li>
                  <NavLink to="/about" text="About" />
                </li>
              </ul>
            </nav>

            <div className="ml-2 flex items-center border-slate-300 pl-4 dark:border-slate-700 md:border-l">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
