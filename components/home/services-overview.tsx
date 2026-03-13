import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"

const services = [
  {
    href: "/services/sports-injury",
    title: "運動傷患治療",
    titleEn: "Sports Injury Treatment",
    description: "針對各類急性及慢性運動創傷，提供全面評估與個人化康復方案，助您重返運動場。",
    image: "/images/sports-injury.jpg",
  },
  {
    href: "/services/chronic-pain",
    title: "慢性痛症管理",
    titleEn: "Chronic Pain Management",
    description: "運用多元化物理治療技術，有效緩解頸椎、腰椎等長期痛症，改善日常生活質素。",
    image: "/images/chronic-pain.jpg",
  },
  {
    href: "/services/posture-correction",
    title: "姿勢矯正",
    titleEn: "Posture Correction",
    description: "透過專業評估找出姿勢問題根源，配合針對性訓練，糾正不良體態，預防痛症。",
    image: "/images/posture-correction.jpg",
  },
  {
    href: "/services/post-surgery-rehab",
    title: "術後復康",
    titleEn: "Post-Surgery Rehabilitation",
    description: "為術後患者提供系統性復康計劃，加速組織修復，安全有效地恢復功能。",
    image: "/images/post-surgery-rehab.jpg",
  },
]

export function ServicesOverview() {
  return (
    <SectionWrapper id="services" className="bg-background dark:bg-slate-950">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">專業服務項目</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          我們提供全面的物理治療服務，結合最新科技與傳統手法，為每位患者制訂個人化治療方案。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group bg-card dark:bg-slate-900 rounded-xl overflow-hidden border border-border dark:border-slate-700 hover:shadow-lg hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-xs text-primary font-medium mb-3">{service.titleEn}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <span className="flex items-center gap-1.5 text-sm text-primary font-medium group-hover:gap-2.5 transition-all">
                了解更多 <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all border-b-2 border-primary/30 hover:border-primary pb-0.5"
        >
          查看所有服務 View All Services <ArrowRight size={16} />
        </Link>
      </div>
    </SectionWrapper>
  )
}
