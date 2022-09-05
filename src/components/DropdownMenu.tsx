import React from "react"
import * as Primitive from "@radix-ui/react-dropdown-menu"

const links = [
  { text: "Home", route: "/" },
  { text: "Posts", route: "/posts" },
  { text: "About", route: "/about" }
]

export default function DropdownMenu() {
  return (
    <Primitive.Root>
      <Primitive.Trigger asChild>
        <button className="ml-2 inline-flex md:hidden justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-7 h-7 md:w-6 md:h-6 text-gray-500 dark:text-gray-100 opacity-80 hover:opacity-100"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </Primitive.Trigger>
      <Primitive.Portal>
        <Primitive.Content
          align="end"
          sideOffset={10}
          className="w-24 rounded-sm px-2 py-1 shadow-sm bg-white dark:bg-gray-800"
        >
          {links.map((link) => (
            <Primitive.Item
              key={link.route}
              className="outline-none rounded-sm focus:bg-gray-100 dark:focus:bg-gray-900"
            >
              <a href={link.route} className="p-1.5 block w-full font-medium">
                {link.text}
              </a>
            </Primitive.Item>
          ))}
        </Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  )
}
