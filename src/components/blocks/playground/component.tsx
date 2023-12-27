import { Sandpack, type SandpackPredefinedTemplate } from "@codesandbox/sandpack-react"
import { atomDark } from "@codesandbox/sandpack-themes"

export type PlaygroundProps = {
  files: { file: string; content: string }[]
  template: SandpackPredefinedTemplate
  dependencies: { name: string; version: string }[]
}

export const Playground = ({ files, template, dependencies }: PlaygroundProps) => {
  return (
    <Sandpack
      theme={atomDark}
      files={Object.fromEntries(files.map((it) => [it.file, it.content]))}
      template={template}
      customSetup={{
        dependencies: Object.fromEntries(dependencies.map((it) => [it.name, it.version]))
      }}
      options={{
        showConsoleButton: true,
        showInlineErrors: true,
        showLineNumbers: true,
        showTabs: true
      }}
    />
  )
}
