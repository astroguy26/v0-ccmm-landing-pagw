import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "陳小姐",
    nameEn: "Ms Chan",
    role: "跑步愛好者",
    content:
      "膝蓋傷患困擾我多年，在張弛接受治療後，疼痛大幅改善。Lewis 治療師非常專業，詳細解釋每個步驟，讓我安心接受治療。",
    rating: 5,
  },
  {
    name: "黎先生",
    nameEn: "Mr Lai",
    role: "辦公室白領",
    content:
      "長期坐辦公室導致頸椎問題，Raymond 為我制訂了全面的姿勢矯正計劃。治療後明顯感覺改善，工作效率也提高了不少。",
    rating: 5,
  },
  {
    name: "張太太",
    nameEn: "Mrs Cheung",
    role: "主婦",
    content:
      "膝關節手術後在這裏做復康，整個團隊非常貼心。治療進展超乎預期，現在已能正常行走，非常感謝！",
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} 星評價`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <SectionWrapper className="bg-muted/40 dark:bg-slate-900/40">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">患者心聲</h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          聆聽我們患者的真實治療體驗
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="bg-card dark:bg-slate-900 rounded-xl p-6 border border-border dark:border-slate-700 shadow-sm dark:shadow-lg flex flex-col gap-4"
          >
            <StarRating rating={t.rating} />
            <blockquote className="text-sm text-foreground leading-relaxed flex-1">
              <p>「{t.content}」</p>
            </blockquote>
            <figcaption className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                {t.name[0]}
              </div>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.nameEn} · {t.role}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  )
}
