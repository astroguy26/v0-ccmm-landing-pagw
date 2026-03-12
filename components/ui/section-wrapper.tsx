import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  id?: string
  as?: "section" | "div" | "article"
}

export function SectionWrapper({
  children,
  className,
  innerClassName,
  id,
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6", innerClassName)}>
        {children}
      </div>
    </Tag>
  )
}
