import Tag from "@/components/common/tag"
import * as ScrollArea from "@radix-ui/react-scroll-area"

type TagsProps = {
  tags: string[]
}

const Tags = ({ tags }: TagsProps) => {
  if (tags.length === 0) return null
  return (
    <ScrollArea.Root className="overflow-hidden">
      <ScrollArea.Viewport className="h-full w-full">
        <div className="flex space-x-1.5">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex touch-none select-none bg-black/10 p-0.5 transition-colors duration-200 ease-out hover:bg-black/20 data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:flex-col"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-gray-100 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[20px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-gray-400" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="bg-black/20" />
    </ScrollArea.Root>
  )
}

export default Tags
