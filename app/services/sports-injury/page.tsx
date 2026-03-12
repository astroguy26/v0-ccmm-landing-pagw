import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { CTAButton } from "@/components/ui/cta-button"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "運動傷患治療 Sports Injury Treatment",
  description:
    "張弛肌肉保健提供專業運動傷患治療服務，針對肌肉撕裂、關節扭傷、肌腱炎等運動創傷，制訂個人化康復方案。",
  openGraph: {
    title: "運動傷患治療 | 張弛肌肉保健",
    description: "專業運動傷患評估與治療 — 助您重返運動場",
  },
}

const conditions = [
  "急慢性肌肉拉傷",
  "踝關節扭傷",
  "膝蓋半月板損傷",
  "前後十字韌帶損傷",
  "肩旋袖肌撕裂",
  "跟腱炎",
  "網球肘 / 高爾夫球肘",
  "跑步膝（髂脛束綜合症）",
  "足底筋膜炎",
  "腰背運動傷患",
]

const treatments = [
  { name: "手法治療", desc: "Joint mobilization, soft tissue manipulation 改善關節活動度及肌肉靈活性" },
  { name: "運動治療", desc: "Therapeutic exercise 針對性強化訓練，加速恢復並預防再受傷" },
  { name: "超聲波治療", desc: "Ultrasound therapy 促進組織修復，消炎止痛" },
  { name: "電療", desc: "Electrotherapy (TENS/IFT) 有效緩解疼痛及肌肉痙攣" },
  { name: "肌貼技術", desc: "Kinesio taping 支撐受傷部位，減輕負荷" },
  { name: "運動復康", desc: "Sports rehabilitation 回歸運動前的全面功能評估" },
]

export default function SportsInjuryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100 transition-opacity mb-6">
              <ArrowLeft size={14} /> 返回服務項目
            </Link>
            <p className="text-sm tracking-widest uppercase opacity-70 mb-3">Sports Injury Treatment</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">運動傷患治療</h1>
            <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
              專業評估各類運動創傷，制訂個人化康復計劃，助您安全、有效地重返運動場。
            </p>
          </div>
        </section>

        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-72 md:h-96 rounded-xl overflow-hidden mb-8">
                <Image src="/images/sports-injury.jpg" alt="運動傷患治療" fill className="object-cover" />
              </div>
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-4">常見治療情況</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {conditions.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">治療方法</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                我們採用循證醫學方法，結合多種物理治療技術，為每位患者制訂最合適的治療計劃。治療師會全程跟進您的康復進度，適時調整方案，確保最佳效果。
              </p>
              <div className="space-y-4 mb-8">
                {treatments.map((t) => (
                  <div key={t.name} className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="w-2 shrink-0 bg-primary rounded-full mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{t.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <CTAButton href="/contact" size="lg">預約諮詢 Book Consultation</CTAButton>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
