import { card } from "@/styles/classes"
import type { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type CardProps = {
  className?: string
  children?: ReactNode
}

const Card = ({ className, children }: CardProps) => {
  return <div className={`${twMerge(card, className)}`}>{children}</div>
}

export default Card
