import type { Metadata, Viewport } from 'next'
import { Noto_Sans_TC, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-tc',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: '張弛肌肉保健 Cheung Chi Muscle Matters | 香港中環物理治療',
    template: '%s | 張弛肌肉保健 Cheung Chi Muscle Matters',
  },
  description:
    '張弛肌肉保健提供專業物理治療服務，包括運動傷患、慢性痛症、姿勢矯正及術後復康。香港中環安蘭街11-15號。',
  keywords: ['物理治療', '香港', '中環', '運動傷患', '慢性痛症', '姿勢矯正', 'physiotherapy', 'Hong Kong'],
  authors: [{ name: 'Lewis 張智誠' }, { name: 'Raymond 陳祖龍' }],
  creator: '張弛肌肉保健 Cheung Chi Muscle Matters',
  metadataBase: new URL('https://cheungchimuscle.com'),
  openGraph: {
    type: 'website',
    locale: 'zh_HK',
    alternateLocale: 'en_HK',
    siteName: '張弛肌肉保健 Cheung Chi Muscle Matters',
    title: '張弛肌肉保健 Cheung Chi Muscle Matters',
    description: '張弛有道 — 專業物理治療，香港中環',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '張弛肌肉保健 Cheung Chi Muscle Matters',
    description: '張弛有道 — 專業物理治療，香港中環',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#c04545',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-HK">
      <body className={`${notoSansTC.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
