import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-4 pb-8 pt-2 text-center text-sm">
      <p>
        © 2022-2023{" "}
        <Link href="/" className="hover:underline">
          Tristan Yang
        </Link>
      </p>
    </footer>
  )
}

export default Footer
