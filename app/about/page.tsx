import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { CTAButton } from "@/components/ui/cta-button"
import { Award, GraduationCap, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "關於我們 About Us",
  description:
    "了解張弛肌肉保健的診所故事及專業治療師團隊。創辦人 Lewis 張智誠及 Raymond 陳祖龍，致力以「張弛有道」為理念，提供專業物理治療。",
  openGraph: {
    title: "關於我們 | 張弛肌肉保健",
    description: "認識我們的專業物理治療師團隊",
  },
}

const values = [
  {
    icon: Heart,
    title: "以患者為本",
    titleEn: "Patient-centred",
    desc: "每位患者的需求都是獨特的。我們聆聽、理解，並為每個人制訂最合適的個人化治療方案。",
  },
  {
    icon: GraduationCap,
    title: "循證醫學",
    titleEn: "Evidence-based",
    desc: "我們的治療方法建基於最新的科學研究，不斷進修更新知識，確保為患者提供最有效的治療。",
  },
  {
    icon: Award,
    title: "專業卓越",
    titleEn: "Professional excellence",
    desc: "我們對工作充滿熱忱，追求卓越。每次治療都全力以赴，致力達到最佳治療效果。",
  },
]

const therapists = [
  {
    name: "Lewis 張智誠",
    nameEn: "Lewis Cheung",
    title: "物理治療師 · 聯合創辦人",
    titleEn: "Physiotherapist · Co-founder",
    image: "/images/therapist-lewis.jpg",
    qualifications: [
      "香港理工大學物理治療學士",
      "運動物理治療碩士",
      "香港物理治療師管理委員會註冊",
      "運動傷患專科認證",
    ],
    bio: "Lewis 擁有逾十年物理治療及運動康復經驗，專注於運動傷患及肌肉骨骼問題。曾服務多支本地運動隊伍，對各類運動創傷的評估及治療有豐富經驗。他相信治療師與患者之間的溝通至關重要，致力確保每位患者完全了解自己的狀況及治療方向。",
  },
  {
    name: "Raymond 陳祖龍",
    nameEn: "Raymond Chan",
    title: "物理治療師 · 聯合創辦人",
    titleEn: "Physiotherapist · Co-founder",
    image: "/images/therapist-raymond.jpg",
    qualifications: [
      "香港大學物理治療學士",
      "肌肉骨骼物理治療碩士",
      "香港物理治療師管理委員會註冊",
      "術後復康專科認證",
    ],
    bio: "Raymond 在慢性痛症管理及術後復康方面擁有豐富專業知識。他相信良好的姿勢是健康的基礎，特別熱衷於幫助都市人解決因長期坐辦公室引起的頸肩腰痛問題。Raymond 以耐心、細心的態度對待每位患者，深受患者信任與愛戴。",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary dark:bg-primary/90 text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-sm tracking-widest uppercase opacity-70 mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">關於我們</h1>
            <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
              張弛有道 — 以專業、現代、值得信賴的理念，守護您的肌肉骨骼健康。
            </p>
          </div>
        </section>

        {/* Our Story */}
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-[480px] rounded-xl overflow-hidden">
              <Image
                src="/images/about-clinic.jpg"
                alt="張弛肌肉保健診所"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">診所故事</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  張弛肌肉保健由兩位擁有共同理念的物理治療師 Lewis 張智誠及 Raymond 陳祖龍聯合創辦。二人在求學及從業期間深深感受到，香港都市人普遍面對肌肉骨骼健康問題，卻往往缺乏正確的認識及適當的治療。
                </p>
                <p>
                  「張弛有道」是我們的核心理念。「張弛」取自創辦人的姓氏，亦寓意肌肉的鬆弛與緊張需要達到適當的平衡；「有道」則代表我們對專業知識及治療方法的執著追求。我們相信，每個人都有能力恢復健康、重拾活力，只要配合正確的指導與治療。
                </p>
                <p>
                  診所位於香港中環，交通便利，環境舒適。我們採用最新的治療技術與設備，結合個人化的治療方案，致力為每位患者提供最優質的物理治療體驗。
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Values */}
        <SectionWrapper className="bg-muted/40 dark:bg-slate-900/40">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">我們的核心價值</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card dark:bg-slate-900 rounded-xl p-7 border border-border dark:border-slate-700 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{v.title}</h3>
                <p className="text-xs text-primary font-medium mb-3">{v.titleEn}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Team */}
        <SectionWrapper>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">治療師團隊</h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              認識我們的專業物理治療師
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {therapists.map((t) => (
              <article key={t.name} className="bg-card dark:bg-slate-900 rounded-xl overflow-hidden border border-border dark:border-slate-700 shadow-sm dark:shadow-md">
                <div className="relative h-72 overflow-hidden">
                  <Image src={t.image} alt={t.name} fill className="object-cover object-top" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold">{t.name}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{t.nameEn}</p>
                  <p className="text-sm text-muted-foreground mb-5">{t.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.bio}</p>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">資歷</h4>
                    <ul className="space-y-2">
                      {t.qualifications.map((q) => (
                        <li key={q} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="bg-primary dark:bg-primary/90 text-primary-foreground">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">與我們的專業團隊見面</h2>
            <p className="opacity-80 leading-relaxed mb-8">
              立即預約，讓我們為您進行全面評估，踏出健康恢復的第一步。
            </p>
            <CTAButton href="/contact" size="lg" className="bg-white text-primary hover:bg-white/90">
              立即預約 Book Now
            </CTAButton>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
