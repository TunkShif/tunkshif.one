import { Component, For } from "solid-js"
import projects from "../data/projects.json"
import { GitHub2Icon } from "./Icons"

interface CardProps {
  name: string
  description: string
  icons: string[]
  links: {
    github: string
    website?: string
  }
}

const Card: Component<CardProps> = (props) => {
  return (
    <li class="bg-gray-50 dark:bg-slate-800 rounded-md ring-1 ring-inset ring-gray-100 hover:ring-gray-300 dark:ring-white/10 hover:dark:ring-white/20 transform hover:-translate-y-1 transition duration-200 ease-in-out">
      <div class="px-6 py-4 flex justify-between items-center">
        <div>
          <h2 class="font-medium">
            <a
              class="hover:underline"
              href={props.links.website || props.links.github}
              target="_blank"
              aria-label="project website"
            >
              {props.name}
            </a>
          </h2>
          <p class="pt-2 text-sm text-gray-600 dark:text-gray-400">{props.description}</p>
        </div>
        <div class="ml-2 text-gray-700 dark:text-gray-50 opacity-80">
          <ul class="flex justify-end space-x-2">
            <For each={props.icons}>
              {(icon) => (
                <li class="inline-flex justify-center items-center">
                  <i class={`devicon-${icon}-plain`}></i>
                </li>
              )}
            </For>
          </ul>
          <div class="pt-4 flex justify-end">
            <a href={props.links.github} target="_blank" aria-label="github repository url">
              <GitHub2Icon class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

const ProjectCards: Component = () => {
  return (
    <ul class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <For each={projects}>{(project) => <Card {...project} />}</For>
    </ul>
  )
}

export default ProjectCards
