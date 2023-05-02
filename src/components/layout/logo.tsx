import { Reem_Kufi } from "next/font/google"

const reemKufi = Reem_Kufi({ subsets: ["arabic"], weight: "variable" })

const Logo = () => {
  return (
    <h1
      className={`${reemKufi.className} group relative transform select-none text-2xl font-semibold md:text-3xl`}
    >
      <span
        className="absolute left-0 top-0 z-0 inline-block text-sky-200 transition-all duration-300 group-hover:left-1 group-hover:top-1 dark:text-sky-800"
        aria-hidden
      >
        طنكشيف
      </span>
      <span className="relative z-10 inline-block text-slate-700 dark:text-slate-200" aria-hidden>
        طنكشيف
      </span>
    </h1>
  )
}

export default Logo
