import { SANDBOX_TEMPLATES, type SandpackPredefinedTemplate } from "@codesandbox/sandpack-react"
import { component, fields } from "@keystatic/core"
import { Playground } from "@/components/blocks/playground/component"

const schema = {
  template: fields.select({
    label: "Template",
    options: Object.keys(SANDBOX_TEMPLATES).map((template) => ({
      label: template,
      value: template
    })),
    defaultValue: "static"
  }),
  files: fields.array(
    fields.object({
      file: fields.text({ label: "File" }),
      content: fields.text({ label: "Content", multiline: true })
    }),
    { label: "Files", itemLabel: (item) => item.fields.file.value }
  ),
  dependencies: fields.array(
    fields.object({
      name: fields.text({ label: "Name" }),
      version: fields.text({ label: "Version", defaultValue: "latest" })
    }),
    { label: "Dependencies", itemLabel: (item) => `${item.fields.name}@${item.fields.version}` }
  )
}

export const playground = component({
  label: "Playground",
  schema,
  preview: (props) => (
    <Playground
      template={props.fields.template.value as SandpackPredefinedTemplate}
      files={props.fields.files.elements.map((it) => ({
        file: it.fields.file.value,
        content: it.fields.content.value
      }))}
      dependencies={props.fields.dependencies.elements.map((it) => ({
        name: it.fields.name.value,
        version: it.fields.version.value
      }))}
    />
  )
})
