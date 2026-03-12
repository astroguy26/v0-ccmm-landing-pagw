import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { CTAButton } from "@/components/ui/cta-button"
import { CheckCircle2, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "術後復康 Post-Surgery Rehabilitation",
  description:
    "張弛肌肉保健提供專業術後復康服務，針對關節置換、脊椎手術、韌帶重建等，幫助患者安全恢復功能。",
  openGraph: {
    title: "術後復康 | 張弛肌肉保健",
    description: "專業術後復康計劃 — 安全有效恢復功能",
  },
}

const surgeries = [
  "全/半膝關節置換",
  "全/半髖關節置換",
  "前十字韌帶重建",
  "肩關節鏡手術",
  "椎間盤切除手術",
  "脊椎融合手術",
  "跟腱修復手術",
  "腕管綜合症手術",
]

const phases = [
  {
    phase: "第一階段",
    phaseEn: "Phase 1",
    title: "急性期管理（術後 0-2 週）",
    desc: "控制腫脹及疼痛，早期活動度訓練，預防肌肉萎縮，教授輔具使用。",
  },
  {
    phase: "第二階段",
    phaseEn: "Phase 2",
    title: "功能恢復期（術後 2-8 週）",
    desc: "漸進式關節活動，肌力重建訓練，步態及平衡訓練，日常生活功能恢復。",
  },
  {
    phase: "第三階段",
    phaseEn: "Phase 3",
    title: "強化期（術後 8-16 週）",
    desc: "進階肌力及耐力訓練，功能性動作訓練，為重返工作/運動做準備。",
  },
  {
    phase: "第四階段",
    phaseEn: "Phase 4",
    title: "回歸活動期（術後 16 週+）",
    desc: "運動專項訓練，動作模式優化，長期自我管理策略，預防再受傷。",
  },
]

export default function PostSurgeryRehabPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100 transition-opacity mb-6">
              <ArrowLeft size={14} /> 返回服務項目
            </Link>
            <p className="text-sm tracking-widest uppercase opacity-70 mb-3">Post-Surgery Rehabilitation</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">術後復康</h1>
            <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
              為各類手術後患者提供分階段復康計劃，配合外科醫生意見，安全有效地恢復功能。
            </p>
          </div>
        </section>

        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-72 md:h-96 rounded-xl overflow-hidden mb-8">
                <Image src="/images/post-surgery-rehab.jpg" alt="術後復康" fill className="object-cover" />
              </div>
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-4">適用手術類型</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {surgeries.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">分階段復康計劃</h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                術後復康需要嚴格按照組織癒合規律，循序漸進地進行。我們的治療師會與您的外科醫生緊密合作，確保每個階段的治療安全有效，不會對手術效果造成影響。
              </p>
              <div className="space-y-4 mb-8">
                {phases.map((p) => (
                  <div key={p.phase} className="flex gap-4 items-start p-4 bg-card border border-border rounded-lg">
                    <div className="shrink-0 text-center">
                      <span className="text-xs font-bold text-primary">{p.phaseEn}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{p.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <CTAButton href="/contact" size="lg">預約復康評估 Book Assessment</CTAButton>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
