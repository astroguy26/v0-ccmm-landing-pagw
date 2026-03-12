import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Calendar, Tag, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "健康專欄 Health Blog",
  description:
    "張弛肌肉保健健康專欄 — 物理治療師分享肌肉骨骼健康知識、運動建議及痛症預防貼士。",
  openGraph: {
    title: "健康專欄 | 張弛肌肉保健",
    description: "物理治療師的專業健康知識分享",
  },
}

const posts = [
  {
    slug: "office-neck-pain-prevention",
    title: "辦公室一族必看：預防頸椎痛的5個習慣",
    titleEn: "5 Habits to Prevent Neck Pain for Office Workers",
    excerpt:
      "長時間低頭使用電腦或手機，是現代都市人頸椎問題的主要元兇。本文分享5個簡單易行的日常習慣，幫助您預防及改善頸椎痛。",
    date: "2024-03-15",
    category: "痛症預防",
    image: "/images/chronic-pain.jpg",
    author: "Raymond 陳祖龍",
  },
  {
    slug: "running-knee-pain",
    title: "跑步膝是什麼？成因、預防與治療",
    titleEn: "What is Runner's Knee? Causes, Prevention and Treatment",
    excerpt:
      "「跑步膝」是最常見的跑步傷患之一，正式名稱為髂脛束綜合症。了解其成因，有助於預防及更有效地處理這個問題。",
    date: "2024-02-28",
    category: "運動傷患",
    image: "/images/sports-injury.jpg",
    author: "Lewis 張智誠",
  },
  {
    slug: "posture-at-work",
    title: "工作中的正確坐姿：人體工學全指南",
    titleEn: "Correct Sitting Posture at Work: A Complete Ergonomics Guide",
    excerpt:
      "不良坐姿是導致腰背痛、頸肩痠痛的主要原因。本文詳細介紹工作時的正確坐姿及辦公室人體工學設置建議。",
    date: "2024-02-10",
    category: "姿勢健康",
    image: "/images/posture-correction.jpg",
    author: "Raymond 陳祖龍",
  },
  {
    slug: "post-knee-replacement",
    title: "膝關節置換術後復康：治療師的完整指引",
    titleEn: "Rehab After Knee Replacement: A Complete Therapist's Guide",
    excerpt:
      "膝關節置換手術後，適當的物理治療復康對於恢復活動能力至關重要。本文逐步介紹術後各階段的復康重點。",
    date: "2024-01-25",
    category: "術後復康",
    image: "/images/post-surgery-rehab.jpg",
    author: "Lewis 張智誠",
  },
  {
    slug: "shoulder-pain-causes",
    title: "肩膀痛不一定是五十肩：常見肩痛原因解析",
    titleEn: "Shoulder Pain Isn't Always Frozen Shoulder: Common Causes Explained",
    excerpt:
      "很多人一有肩痛就以為是五十肩，其實肩膀痛的成因多種多樣。本文解析最常見的肩痛原因，幫助您了解自己的狀況。",
    date: "2024-01-08",
    category: "痛症預防",
    image: "/images/sports-injury.jpg",
    author: "Lewis 張智誠",
  },
  {
    slug: "stretching-for-flexibility",
    title: "提升柔韌性的正確伸展方法：靜態 vs 動態伸展",
    titleEn: "Correct Stretching for Flexibility: Static vs Dynamic Stretching",
    excerpt:
      "伸展運動對於改善柔韌性及預防受傷非常重要，但不同類型的伸展適用於不同情況。本文詳細解釋靜態與動態伸展的分別與應用。",
    date: "2023-12-20",
    category: "運動健康",
    image: "/images/posture-correction.jpg",
    author: "Raymond 陳祖龍",
  },
]

const categories = ["全部", "痛症預防", "運動傷患", "姿勢健康", "術後復康", "運動健康"]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-sm tracking-widest uppercase opacity-70 mb-3">Health Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">健康專欄</h1>
            <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
              我們的物理治療師定期分享專業健康知識，幫助您了解肌肉骨骼健康，預防及改善痛症。
            </p>
          </div>
        </section>

        <SectionWrapper>
          {/* Category Filter (static, visual only) */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-default select-none transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${posts[0].slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 gap-6 bg-card border border-border rounded-xl overflow-hidden mb-10 hover:shadow-md hover:border-primary/30 transition-all"
          >
            <div className="relative h-56 md:h-72 overflow-hidden">
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary mb-3">
                <Tag size={11} /> {posts[0].category}
              </span>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-balance group-hover:text-primary transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-xs text-primary/80 mb-3">{posts[0].titleEn}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  <span>{posts[0].date}</span>
                  <span className="mx-1">·</span>
                  <span>{posts[0].author}</span>
                </div>
                <span className="flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  閱讀 <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mb-2">
                    <Tag size={10} /> {post.category}
                  </span>
                  <h3 className="font-bold text-sm mb-2 text-balance group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar size={11} />
                    <span>{post.date}</span>
                    <span className="mx-0.5">·</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
