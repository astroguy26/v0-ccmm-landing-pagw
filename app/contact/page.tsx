import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { ContactForm } from "@/components/contact/contact-form"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "預約聯絡 Contact Us",
  description:
    "聯絡張弛肌肉保健預約物理治療服務。地址：香港中環安蘭街 11-15 號安蘭中心 1 樓。電話：+852 2388-6618。",
  openGraph: {
    title: "預約聯絡 | 張弛肌肉保健",
    description: "立即預約物理治療服務",
  },
}

const contactInfo = [
  {
    icon: MapPin,
    title: "診所地址",
    titleEn: "Address",
    content: "香港中環安蘭街 11-15 號安蘭中心 1 樓",
    contentEn: "1/F, On Lan Centre, 11-15 On Lan St, Central, Hong Kong",
  },
  {
    icon: Phone,
    title: "聯絡電話",
    titleEn: "Phone",
    content: "+852 2388-6618",
    contentEn: "Mon-Fri 09:00 - 19:00 · Sat 09:00 - 14:00",
    link: "tel:+85223886618",
  },
  {
    icon: Mail,
    title: "電郵地址",
    titleEn: "Email",
    content: "info@cheungchimuscle.com",
    contentEn: "We reply within 24 hours",
    link: "mailto:info@cheungchimuscle.com",
  },
  {
    icon: Clock,
    title: "營業時間",
    titleEn: "Opening Hours",
    content: "週一至五：09:00 – 19:00",
    contentEn: "週六：09:00 – 14:00 · 週日及公眾假期：休診",
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-sm tracking-widest uppercase opacity-70 mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">預約聯絡</h1>
            <p className="text-lg opacity-80 max-w-2xl leading-relaxed">
              歡迎透過以下方式聯絡我們，預約診症或查詢服務詳情。我們期待為您提供專業的物理治療服務。
            </p>
          </div>
        </section>

        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-2">預約診症</h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                請填寫以下表格，我們將於一個工作天內與您聯絡確認預約。
              </p>
              <ContactForm />
            </div>

            {/* Contact info & map */}
            <div className="space-y-6">
              {/* Contact info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => {
                  const Content = (
                    <div className="bg-card border border-border rounded-xl p-5 h-full">
                      <info.icon size={20} className="text-primary mb-3" />
                      <h3 className="font-semibold text-sm mb-0.5">{info.title}</h3>
                      <p className="text-xs text-primary/70 mb-2">{info.titleEn}</p>
                      <p className="text-sm font-medium mb-1">{info.content}</p>
                      <p className="text-xs text-muted-foreground">{info.contentEn}</p>
                    </div>
                  )

                  return info.link ? (
                    <a
                      key={info.title}
                      href={info.link}
                      className="hover:shadow-md hover:border-primary/30 transition-all block"
                    >
                      {Content}
                    </a>
                  ) : (
                    <div key={info.title}>{Content}</div>
                  )
                })}
              </div>

              {/* Google Maps embed */}
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-5 border-b border-border">
                  <h3 className="font-semibold text-sm">地圖 Map</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    中環站 D2 出口步行 3 分鐘 · 3 mins walk from Central MTR Exit D2
                  </p>
                </div>
                <div className="relative h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8976892564835!2d114.15351831495747!3d22.282165685323634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007b3d5c4d1f%3A0x5c5c7c7c7c7c7c7c!2sOn%20Lan%20Street%2C%20Central%2C%20Hong%20Kong!5e0!3m2!1sen!2shk!4v1234567890123!5m2!1sen!2shk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="張弛肌肉保健診所地圖"
                  />
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#25d366]/10 border border-[#25d366]/30 rounded-xl p-6 text-center">
                <h3 className="font-bold mb-2">即時對話</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  需要即時查詢或緊急預約？歡迎透過 WhatsApp 聯絡我們。
                </p>
                <a
                  href="https://wa.me/85223886618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25d366] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#20b958] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp 聯絡我們
                </a>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  )
}
