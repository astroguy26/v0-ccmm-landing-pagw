import Link from "next/link"
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react"

const serviceLinks = [
  { href: "/services/sports-injury", label: "運動傷患治療" },
  { href: "/services/chronic-pain", label: "慢性痛症管理" },
  { href: "/services/posture-correction", label: "姿勢矯正" },
  { href: "/services/post-surgery-rehab", label: "術後復康" },
]

const quickLinks = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於我們" },
  { href: "/blog", label: "健康專欄" },
  { href: "/contact", label: "預約聯絡" },
]

const hours = [
  { day: "週一至週五", time: "09:00 – 19:00" },
  { day: "週六", time: "09:00 – 14:00" },
  { day: "週日及公眾假期", time: "休診" },
]

export default function Footer() {
  return (
    <footer className="bg-clinic-teal-dark dark:bg-slate-950 text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <p className="text-lg font-bold tracking-wide">張弛肌肉保健</p>
            <p className="text-xs tracking-widest uppercase opacity-70 mt-0.5">
              Cheung Chi Muscle Matters
            </p>
          </div>
          <p className="text-sm opacity-70 leading-relaxed mb-5">
            張弛有道 — 以專業、現代、值得信賴的理念，為您提供全面物理治療服務。
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://wa.me/85223886618"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-sm tracking-wider uppercase opacity-60 mb-4">服務項目</h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm opacity-80 hover:opacity-100 hover:underline underline-offset-2 transition-opacity"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-semibold text-sm tracking-wider uppercase opacity-60 mb-4">快速連結</h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm opacity-80 hover:opacity-100 hover:underline underline-offset-2 transition-opacity"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h3 className="font-semibold text-sm tracking-wider uppercase opacity-60 mb-4">聯絡資訊</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2.5 items-start">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                香港中環安蘭街 11-15 號安蘭中心 1 樓<br />
                <span className="opacity-70 text-xs">1/F, On Lan Centre, 11-15 On Lan St, Central, HK</span>
              </span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone size={14} className="shrink-0" />
              <a href="tel:+85223886618" className="hover:opacity-100 transition-opacity">
                +852 2388-6618
              </a>
            </li>
            <li className="flex gap-2.5 items-start mt-2">
              <Clock size={14} className="mt-0.5 shrink-0" />
              <ul className="space-y-1">
                {hours.map((h) => (
                  <li key={h.day} className="text-xs">
                    <span className="opacity-70">{h.day}：</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-50">
          <p>© {new Date().getFullYear()} 張弛肌肉保健 Cheung Chi Muscle Matters. 版權所有。</p>
          <p>香港中環 Central, Hong Kong</p>
        </div>
      </div>
    </footer>
  )
}
