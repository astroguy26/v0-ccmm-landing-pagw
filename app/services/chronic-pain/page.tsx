import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { CTAButton } from "@/components/ui/cta-button"
import { CheckCircle2, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "慢性痛症管理 Chronic Pain Management",
  description:
    "張弛肌肉保健提供專業慢性痛症管理，有效緩解頸椎腰椎痛症、坐骨神經痛等長期痛症問題。",
  openGraph: {
    title: "慢性痛症管理 | 張弛肌肉保健",
    description: "專業慢性痛症評估與治療 — 改善生活質素",
  },
}

const conditions = [
  "頸椎退化性關節炎",
  "腰椎間盤突出",
  "坐骨神經痛",
  "慢性腰背痛",
  "肩周炎（五十肩）",
  "膝關節退化",
  "類風濕性關節炎",
  "纖維肌痛症",
  "髖關節痛",
  "慢性頭痛",
]

const approach = [
  {
    step: "01",
    title: "全面評估",
    desc: "詳細問診及身體評估，找出痛症根源及影響因素",
  },
  {
    step: "02",
    title: "個人化治療",
    desc: "結合手法治療、運動治療及儀器治療的綜合方案",
  },
  {
    step: "03",
    title: "自我管理教育",
    desc: "教授居家練習及日常生活注意事項，預防復發",
  },
  {
    step: "04",
    title: "持續跟進",
    desc: "定期檢視治療進展，適時調整方案，確保最佳效果",
  },
]

export default function ChronicPainPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100 transition-opacity mb-6">
              <ArrowLeft size={14} /> 返回服務項目
            </Link>
            <p className="text-sm tracking-widest uppercase opacity-70 mb-3">Chronic Pain Management</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">慢性痛症管理</h1>
            <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
              運用多元化物理治療技術，有效緩解長期痛症，改善功能，提升生活質素。
            </p>
          </div>
        </section>

        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-72 md:h-96 rounded-xl overflow-hidden mb-8">
                <Image src="/images/chronic-pain.jpg" alt="慢性痛症管理" fill className="object-cover" />
              </div>
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-4">可治療的慢性痛症</h3>
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
              <h2 className="text-2xl font-bold mb-4">我們的治療方法</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                慢性痛症需要全面、持續的管理方案。我們的治療師不僅關注即時疼痛緩解，更致力幫助患者了解痛症成因，建立長期管理策略，從根本改善問題。
              </p>
              <div className="space-y-5 mb-8">
                {approach.map((a) => (
                  <div key={a.step} className="flex gap-5 items-start">
                    <span className="text-3xl font-bold text-primary/20 shrink-0 leading-none">{a.step}</span>
                    <div>
                      <h4 className="font-semibold mb-1">{a.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
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
