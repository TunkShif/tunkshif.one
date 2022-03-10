import "react"

type ErrorProps = {
  children: React.ReactNode
}

const Error = ({ children }: ErrorProps) => {
  return (
    <div className="my-24 flex items-center justify-center space-x-12 text-gray-700 dark:text-gray-200">
      <div className="flex-shrink-0 font-mono text-4xl font-bold md:text-5xl">
        :(
      </div>
      <div className="text-base md:text-lg">{children}</div>
    </div>
  )
}

export default Error
