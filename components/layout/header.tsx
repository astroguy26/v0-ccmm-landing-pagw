"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "首頁", labelEn: "Home" },
  { href: "/services", label: "服務", labelEn: "Services" },
  { href: "/about", label: "關於我們", labelEn: "About" },
  { href: "/blog", label: "健康專欄", labelEn: "Blog" },
  { href: "/contact", label: "預約", labelEn: "Contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group" aria-label="張弛肌肉保健 首頁">
            <span className="text-base md:text-lg font-bold text-primary tracking-wide group-hover:text-accent-foreground transition-colors">
              張弛肌肉保健
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase">
              Cheung Chi Muscle Matters
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="主導航">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary bg-secondary"
                    : "text-foreground/70 hover:text-primary hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+85223886618"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="致電診所"
            >
              <Phone size={14} />
              <span>2388-6618</span>
            </a>
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-clinic-teal-dark transition-colors"
            >
              立即預約
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
            aria-label={isOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav
          className="md:hidden bg-white border-t border-border"
          aria-label="手機導航"
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary bg-secondary"
                    : "text-foreground/70 hover:text-primary hover:bg-secondary"
                )}
              >
                <span>{link.label}</span>
                <span className="text-xs text-muted-foreground">{link.labelEn}</span>
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
              <a
                href="tel:+85223886618"
                className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={14} />
                <span>+852 2388-6618</span>
              </a>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-4 py-3 rounded-md text-sm font-medium text-center hover:bg-clinic-teal-dark transition-colors"
              >
                立即預約 Book Now
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
