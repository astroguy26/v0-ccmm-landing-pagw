import { SectionWrapper } from "@/components/ui/section-wrapper"
import { TeamCard, type TeamMember } from "./team-card"

interface TeamSectionProps {
  title?: string
  titleEn?: string
  subtitle?: string
  members: TeamMember[]
  className?: string
}

export function TeamSection({
  title = "治療師團隊",
  titleEn = "Our Team",
  subtitle = "認識我們的專業物理治療師",
  members,
  className,
}: TeamSectionProps) {
  return (
    <SectionWrapper className={className}>
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
          {titleEn}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* 
        Grid layout:
        - Mobile: 1 column
        - Tablet (md): 2 columns  
        - Desktop (lg): 3 columns
        Gap matches the services cards for consistency
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {members.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </SectionWrapper>
  )
}
