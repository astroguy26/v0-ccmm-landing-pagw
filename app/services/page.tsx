import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { CTAButton } from "@/components/ui/cta-button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "服務項目 Services",
  description:
    "張弛肌肉保健提供運動傷患治療、慢性痛症管理、姿勢矯正及術後復康等專業物理治療服務。",
  openGraph: {
    title: "服務項目 | 張弛肌肉保健",
    description: "全面物理治療服務 — 香港中環",
  },
}

const services = [
  {
    href: "/services/sports-injury",
    title: "運動傷患治療",
    titleEn: "Sports Injury Treatment",
    description:
      "針對各類急性及慢性運動創傷，包括肌肉撕裂、關節扭傷、肌腱炎等。我們提供全面評估與個人化康復方案，助您安全重返運動場。",
    image: "/images/sports-injury.jpg",
    highlights: ["急慢性運動創傷", "關節扭傷及脫臼", "肌腱炎及滑囊炎", "運動表現優化"],
  },
  {
    href: "/services/chronic-pain",
    title: "慢性痛症管理",
    titleEn: "Chronic Pain Management",
    description:
      "運用多元化物理治療技術，有效緩解頸椎、腰椎、肩關節等長期痛症。透過系統化治療計劃，改善功能，提升日常生活質素。",
    image: "/images/chronic-pain.jpg",
    highlights: ["頸椎及腰椎痛症", "肩頸痠痛", "坐骨神經痛", "纖維肌痛症"],
  },
  {
    href: "/services/posture-correction",
    title: "姿勢矯正",
    titleEn: "Posture Correction",
    description:
      "透過專業評估找出姿勢問題根源，配合針對性訓練及手法治療，糾正不良體態，預防痛症及相關功能障礙。",
    image: "/images/posture-correction.jpg",
    highlights: ["脊椎側彎評估", "頭頸前傾矯正", "圓肩駝背改善", "核心肌群訓練"],
  },
  {
    href: "/services/post-surgery-rehab",
    title: "術後復康",
    titleEn: "Post-Surgery Rehabilitation",
    description:
      "為各類手術後患者提供系統性復康計劃，包括關節置換、脊椎手術等。協助加速組織修復，安全有效地恢復肌力與活動能力。",
    image: "/images/post-surgery-rehab.jpg",
    highlights: ["關節置換術後復康", "脊椎手術復康", "韌帶重建復康", "分階段功能訓練"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-sm tracking-widest uppercase opacity-70 mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">服務項目</h1>
            <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
              我們提供全面的物理治療服務，以循證醫學為基礎，結合最新技術與豐富臨床經驗，為您制訂最合適的治療方案。
            </p>
          </div>
        </section>

        {/* Services list */}
        <SectionWrapper>
          <div className="space-y-16">
            {services.map((service, idx) => (
              <article
                key={service.href}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`relative h-72 md:h-96 rounded-xl overflow-hidden ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={idx % 2 === 1 ? "lg:col-start-1" : ""}>
                  <p className="text-sm text-primary font-medium tracking-wide mb-2">{service.titleEn}</p>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-7">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 size={15} className="text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    了解詳情 <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        {/* Bottom CTA */}
        <SectionWrapper className="bg-muted/40">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">準備好了嗎？</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              立即預約，讓我們的專業治療師為您進行評估，制訂最適合您的治療計劃。
            </p>
            <CTAButton href="/contact" size="lg">立即預約 Book Now</CTAButton>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
