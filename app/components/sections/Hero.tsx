'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 태그라인 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-8 bg-primary-600/10 backdrop-blur-sm rounded-full border border-primary-500/30"
          >
            <span className="text-primary-300 text-sm font-medium">
              ISO 9001 & ISO 45001 인증 기업
            </span>
          </motion.div>

          {/* 메인 타이틀 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            정밀 제조 기술의
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
              글로벌 리더
            </span>
          </motion.h1>

          {/* 서브 타이틀 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            퍼스트코어는 최첨단 <span className="text-primary-400 font-semibold">자동화 시스템</span>,{' '}
            <span className="text-primary-400 font-semibold">메탈 마스크</span>,{' '}
            <span className="text-primary-400 font-semibold">공정 지그</span> 분야에서
            <br />
            최고의 품질과 기술력으로 Total Solution을 제공합니다
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
              회사소개서 다운로드
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold transition-all">
              <Play className="mr-2 w-5 h-5" />
              기업 소개 영상
            </button>
          </motion.div>

          {/* 통계 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400">10+</div>
              <div className="text-gray-400 mt-2">년간 경험</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400">50+</div>
              <div className="text-gray-400 mt-2">특허 및 기술</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400">100+</div>
              <div className="text-gray-400 mt-2">고객사</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400">24/7</div>
              <div className="text-gray-400 mt-2">기술 지원</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-white/50">
          <span className="text-sm">스크롤</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce mx-auto"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero