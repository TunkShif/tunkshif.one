import Link from "next/link"

type NavLinkProps = {
  to: string
  text: string
}

const NavLink = ({ to, text }: NavLinkProps) => {
  return (
    <Link
      href={to}
      className="inline-block rounded p-1.5 text-sm font-medium transition duration-300 ease-in-out hover:bg-slate-100 hover:text-slate-800 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-slate-200"
    >
      {text}
    </Link>
  )
}

export default NavLink
