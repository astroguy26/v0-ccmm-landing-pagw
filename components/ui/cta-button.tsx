import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTAButtonProps {
  href?: string
  children?: React.ReactNode
  variant?: "primary" | "outline" | "whatsapp"
  size?: "sm" | "md" | "lg"
  className?: string
  external?: boolean
}

export function CTAButton({
  href = "/contact",
  children = "立即預約",
  variant = "primary",
  size = "md",
  className,
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-sm dark:shadow-md",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary/80",
    whatsapp: "bg-[#25d366] text-white hover:bg-[#20b958] shadow-sm dark:shadow-md",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
