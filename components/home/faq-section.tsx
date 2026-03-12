"use client"

import { SectionWrapper } from "@/components/ui/section-wrapper"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "faq-1",
    question: "第一次來張弛肌肉保健需要準備什麼？",
    answer:
      "建議帶同以前的檢查報告、醫生轉介信（如有）、以及方便活動的運動服裝。我們會先進行詳細問診和評估，再為你制定治療計劃。",
  },
  {
    id: "faq-2",
    question: "每次治療大約需時多久？",
    answer:
      "一般首次評估連治療約 60 分鐘，其後每次治療約 45–60 分鐘，視乎個案情況而定。",
  },
  {
    id: "faq-3",
    question: "一定要有醫生轉介信先可以做物理治療嗎？",
    answer:
      "不一定。如你已有醫生轉介信，我們會一併參考；如沒有，我們亦可先為你作專業評估，再按需要建議你轉介到合適專科。",
  },
  {
    id: "faq-4",
    question: "治療收費大約多少？可以用醫療保險嗎？",
    answer:
      "收費會因治療項目和時長而有所不同，歡迎透過 WhatsApp 或電話查詢最新收費。部分醫療保險計劃可報銷物理治療費用，建議先向保險公司查詢。",
  },
  {
    id: "faq-5",
    question: "如痛症突然惡化，可以即日安排治療嗎？",
    answer:
      "如遇急性痛症，請盡快致電或 WhatsApp 我們，我們會盡量為你安排即日或最接近時段的預約。",
  },
]

export function FAQSection() {
  return (
    <SectionWrapper className="bg-card dark:bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            常見問題
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            以下是新症患者最常查詢的問題，如有其他疑問歡迎隨時聯絡我們。
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-background dark:bg-slate-800 rounded-lg mb-3 px-6 border border-border dark:border-slate-700 shadow-sm dark:shadow-md"
            >
              <AccordionTrigger className="text-base font-medium py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}
