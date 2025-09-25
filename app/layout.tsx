import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'First Core - 정밀 제조 기술의 리더',
  description: '퍼스트코어는 자동화 시스템, 메탈 마스크, 공정 지그 전문 제조기업으로 최고의 기술력과 품질로 글로벌 시장을 선도합니다.',
  keywords: '퍼스트코어, First Core, 자동화 시스템, 메탈 마스크, 공정 지그, 정밀 제조, 레이저 가공',
  openGraph: {
    title: 'First Core - 정밀 제조 기술의 리더',
    description: '자동화 시스템과 정밀 제조 솔루션을 제공하는 글로벌 기업',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}