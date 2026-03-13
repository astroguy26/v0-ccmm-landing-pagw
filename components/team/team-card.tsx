import Image from "next/image"

export interface TeamMember {
  name: string
  nameEn: string
  title: string
  titleEn: string
  image: string
  specialty: string
  credential?: string
}

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30">
      <div className="relative h-64 overflow-hidden bg-muted">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        {/* Warm overlay on hover for a more personal feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
        <p className="text-xs text-primary font-medium mb-1">{member.nameEn}</p>
        <p className="text-sm text-muted-foreground mb-3">{member.title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{member.specialty}</p>
        {member.credential && (
          <p className="text-xs text-primary/80 font-medium border-t border-border pt-3 mt-3">
            {member.credential}
          </p>
        )}
      </div>
    </article>
  )
}
