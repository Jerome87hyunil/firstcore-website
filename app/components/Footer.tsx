'use client'

import Link from 'next/link'
import { Facebook, Youtube, Mail, Phone, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 푸터 메인 컨텐츠 */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* 회사 정보 */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              FIRST<span className="text-primary-400">CORE</span>
            </h2>
            <p className="text-gray-400 mb-4">
              퍼스트코어는 최고의 기술력과 품질로<br />
              고객사의 성공적인 비즈니스를 지원합니다.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>회사명: (주)퍼스트코어</p>
              <p>대표자: 김태훈</p>
              <p>사업자등록번호: 153-86-00012</p>
              <p>주소: 경상북도 구미시 1공단로6길 64-23 (공단동)</p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#about" className="hover:text-primary-400 transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors">
                  사업영역
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-primary-400 transition-colors">
                  기술력
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="hover:text-primary-400 transition-colors">
                  인증현황
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-400 transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-bold mb-4">연락처</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>054-973-2100</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>fcore@chol.com</span>
              </div>
            </div>
            
            {/* 소셜 미디어 */}
            <div className="flex gap-3 mt-6">
              <button className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* 저작권 */}
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2015-2025 First Core Co., Ltd. All rights reserved.</p>
            </div>

            {/* 개인정보 및 약관 링크 */}
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 위로 스크롤 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  )
}

export default Footer