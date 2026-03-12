import { SectionWrapper } from "@/components/ui/section-wrapper"

const stats = [
  { value: "10+", label: "年豐富經驗", labelEn: "Years Experience" },
  { value: "3,000+", label: "服務患者人次", labelEn: "Patients Served" },
  { value: "4", label: "專業服務項目", labelEn: "Service Categories" },
  { value: "98%", label: "患者滿意度", labelEn: "Patient Satisfaction" },
]

export function StatsSection() {
  return (
    <SectionWrapper className="bg-primary text-primary-foreground">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
            <span className="text-sm font-medium opacity-90 mb-1">{stat.label}</span>
            <span className="text-xs opacity-60 tracking-wide">{stat.labelEn}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
