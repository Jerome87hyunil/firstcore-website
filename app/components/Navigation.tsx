'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('KO')

  const menuItems = [
    { name: '회사소개', href: '/#about' },
    { name: '사업영역', href: '/#services' },
    { name: '기술력', href: '/#technology' },
    { name: '연혁', href: '/#timeline' },
    { name: '인증', href: '/#certifications' },
    { name: '문의', href: '/#contact' },
  ]

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" prefetch={true}>
              <div className="text-2xl font-bold text-primary-600">
                FIRST<span className="text-gray-800">CORE</span>
              </div>
            </Link>
          </div>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                prefetch={true}
              >
                {item.name}
              </Link>
            ))}
            
            {/* 언어 선택 */}
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600"
              onClick={() => setLanguage(language === 'KO' ? 'EN' : 'KO')}
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
                prefetch={true}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="w-full flex items-center px-3 py-2 space-x-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
              onClick={() => setLanguage(language === 'KO' ? 'EN' : 'KO')}
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'KO' ? '한국어' : 'English'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation