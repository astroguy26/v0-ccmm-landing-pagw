// Global LocalBusiness + MedicalBusiness schema
export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": "https://cheungchimuscle.com/#business",
        name: "張弛肌肉保健 Cheung Chi Muscle Matters",
        alternateName: "Cheung Chi Muscle Matters",
        description:
          "香港中環專業物理治療診所，提供運動傷患治療、慢性痛症管理、姿勢矯正及術後復康服務。",
        url: "https://cheungchimuscle.com",
        telephone: "+85223886618",
        email: "info@cheungchimuscle.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "安蘭街 11-15 號安蘭中心 1 樓",
          addressLocality: "中環",
          addressRegion: "香港島",
          addressCountry: "HK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.282165,
          longitude: 114.153518,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "14:00",
          },
        ],
        founder: [
          {
            "@type": "Person",
            name: "Lewis 張智誠",
            jobTitle: "物理治療師 · 聯合創辦人",
          },
          {
            "@type": "Person",
            name: "Raymond 陳祖龍",
            jobTitle: "物理治療師 · 聯合創辦人",
          },
        ],
        hasMap: "https://maps.google.com/?q=On+Lan+Street+Central+Hong+Kong",
        priceRange: "$$",
        currenciesAccepted: "HKD",
        paymentAccepted: "Cash, Credit Card",
        areaServed: "Hong Kong",
        medicalSpecialty: ["PhysicalTherapy", "Orthopedic"],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Service-specific JSON-LD
export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    provider: {
      "@type": "MedicalBusiness",
      name: "張弛肌肉保健 Cheung Chi Muscle Matters",
      url: "https://cheungchimuscle.com",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Person schema for About page
export function PersonJsonLd({
  name,
  jobTitle,
  image,
}: {
  name: string
  jobTitle: string
  image: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    image,
    worksFor: {
      "@type": "MedicalBusiness",
      name: "張弛肌肉保健 Cheung Chi Muscle Matters",
      url: "https://cheungchimuscle.com",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
