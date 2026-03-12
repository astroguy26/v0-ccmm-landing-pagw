import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { CTAButton } from "@/components/ui/cta-button"
import { CheckCircle2, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "姿勢矯正 Posture Correction",
  description:
    "張弛肌肉保健提供專業姿勢評估與矯正服務，改善圓肩駝背、頭頸前傾等不良體態，預防痛症。",
  openGraph: {
    title: "姿勢矯正 | 張弛肌肉保健",
    description: "專業姿勢評估與矯正方案 — 預防及改善痛症",
  },
}

const problems = [
  "頭頸前傾（電腦頸）",
  "圓肩駝背",
  "脊椎側彎",
  "骨盆前/後傾",
  "膝蓋過度內扣",
  "扁平足引起的姿勢問題",
]

const benefits = [
  "減輕頸肩腰背痛症",
  "改善呼吸功能",
  "提升運動表現",
  "增強核心穩定",
  "預防勞損性傷患",
  "改善外觀體態",
]

export default function PostureCorrectionPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100 transition-opacity mb-6">
              <ArrowLeft size={14} /> 返回服務項目
            </Link>
            <p className="text-sm tracking-widest uppercase opacity-70 mb-3">Posture Correction</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">姿勢矯正</h1>
            <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
              透過科學化姿勢評估與針對性訓練，糾正不良體態，預防痛症，改善整體健康。
            </p>
          </div>
        </section>

        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-72 md:h-96 rounded-xl overflow-hidden mb-8">
                <Image src="/images/posture-correction.jpg" alt="姿勢矯正" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-xl p-5 border border-border">
                  <h3 className="font-bold mb-3 text-sm">常見姿勢問題</h3>
                  <ul className="space-y-2">
                    {problems.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                  <h3 className="font-bold mb-3 text-sm text-primary">矯正效益</h3>
                  <ul className="space-y-2">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">評估與治療流程</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                不良姿勢是現代都市人的普遍問題，長期維持錯誤體態會導致肌肉失衡、關節磨損，引發各種痛症。我們採用系統化評估方法，從根本找出問題，制訂針對性的矯正方案。
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: "靜態及動態姿勢分析", desc: "從多角度評估您的站姿、坐姿及動作模式，找出問題所在" },
                  { title: "肌力及柔韌性評估", desc: "識別肌肉失衡情況，了解緊張及無力的肌群" },
                  { title: "個人化矯正計劃", desc: "結合伸展、強化及手法治療，針對個人需要制訂方案" },
                  { title: "工作/生活環境建議", desc: "提供辦公室環境人體工學建議，從日常生活改善姿勢" },
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-card border border-border rounded-lg">
                    <h4 className="font-semibold text-sm mb-1.5">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <CTAButton href="/contact" size="lg">預約姿勢評估 Book Assessment</CTAButton>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
