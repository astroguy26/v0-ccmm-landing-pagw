import { SectionWrapper } from "@/components/ui/section-wrapper"

export function PhilosophySection() {
  return (
    <SectionWrapper className="bg-card dark:bg-slate-900/50">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
          Our Philosophy
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          張弛有道
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          我們以「張」與「弛」的平衡哲學，為您提供專業物理治療
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* 張 */}
        <div className="bg-background dark:bg-slate-800 rounded-2xl p-8 border border-border dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">張</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">張 — 專注精準</h3>
              <p className="text-sm text-muted-foreground">Tension · Precision · Focus</p>
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              「張」代表我們對專業的堅持與精準的態度。每一次治療，我們都以嚴謹的評估為基礎，深入了解您的身體狀況，找出問題根源。
            </p>
            <p>
              我們相信，唯有透過專注與精準的診斷，才能制訂最有效的治療方案，幫助您重拾健康。
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>詳細問診與評估</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>個人化治療方案</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>持續追蹤與調整</span>
            </li>
          </ul>
        </div>

        {/* 弛 */}
        <div className="bg-background dark:bg-slate-800 rounded-2xl p-8 border border-border dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-accent/50 dark:bg-accent/30 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">弛</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">弛 — 放鬆復元</h3>
              <p className="text-sm text-muted-foreground">Relaxation · Recovery · Balance</p>
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              「弛」象徵放鬆與康復的過程。我們明白，真正的療癒需要時間與耐心，治療師會陪伴您走過每一個復康階段。
            </p>
            <p>
              在張弛之間找到平衡，讓身體得到充分的休息與修復，這正是我們追求的治療理念。
            </p>
          </div>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>舒適放鬆的治療環境</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>循序漸進的康復計劃</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>身心平衡的健康目標</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom quote */}
      <div className="mt-12 text-center max-w-2xl mx-auto">
        <blockquote className="text-lg md:text-xl text-foreground/80 italic leading-relaxed">
          「張弛有道，收放自如。我們相信，專業的治療結合適當的休息，才能讓身體回復最佳狀態。」
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">
          — 張弛肌肉保健 創辦理念
        </p>
      </div>
    </SectionWrapper>
  )
}
