'use client'

import { motion } from 'framer-motion'
import { Calendar, Award, Rocket, Target } from 'lucide-react'

const Timeline = () => {
  const milestones = [
    {
      year: '2013',
      icon: <Rocket className="w-5 h-5" />,
      title: '회사 설립',
      description: '퍼스트코어 설립 및 수원본사 개소',
      details: '정밀 제조 전문기업으로 시작'
    },
    {
      year: '2014',
      icon: <Award className="w-5 h-5" />,
      title: 'Etching/Additive 공정 업무제휴',
      description: '2D MASK / 3D MASK 공급 / 변전마스크',
      details: 'MCT 도입을 통합 Soldering, Carrier 공급'
    },
    {
      year: '2015',
      icon: <Target className="w-5 h-5" />,
      title: '국내 Vector Guard Mask 공급시작',
      description: '조신 FIBER LASER 1대도입',
      details: 'MCT 추가설비 도입을 통합 공급처 확대'
    },
    {
      year: '2017',
      icon: <Award className="w-5 h-5" />,
      title: '운행를의선기업 인증',
      description: '충첥화장경제혁신센터 입주',
      details: '전국 매출 1위 달성'
    },
    {
      year: '2019',
      icon: <Award className="w-5 h-5" />,
      title: '본스펙이(주) 라이센스 계약',
      description: '국내 Vector Guard Mask 공급',
      details: '현대모비스외 설비공급 협력사 체결'
    },
    {
      year: '2022',
      icon: <Award className="w-5 h-5" />,
      title: 'ISO9001, ISO45001 인증',
      description: '글로벌시스템인증원에서 품질경영시스템 인증',
      details: '한국산업기술진흥원 연구개발전담부서 설립'
    },
    {
      year: '2023',
      icon: <Target className="w-5 h-5" />,
      title: '벤처기업 인증',
      description: '중소기업진흥공단 벤처기업 인증',
      details: '소재부품전문 전문기업 인증'
    },
    {
      year: '2025',
      icon: <Rocket className="w-5 h-5" />,
      title: '미래 비전',
      description: '글로벌 시장 확대',
      details: '지속적인 기술 혁신과 성장'
    }
  ]

  return (
    <section id="timeline" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            찬란한 <span className="text-primary-600">성장 역사</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            2013년 설립 이후 지속적인 혁신과 성장으로 글로벌 선도기업으로 발전하고 있습니다
          </p>
        </motion.div>

        <div className="relative">
          {/* 중앙 라인 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-300 hidden md:block"></div>

          {/* 마일스톤 */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* 컨텐츠 */}
              <div className="flex-1 md:pr-8">
                <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-bold">
                      {milestone.year}
                    </span>
                    <div className="text-primary-600">
                      {milestone.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {milestone.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {milestone.details}
                  </p>
                </div>
              </div>

              {/* 중앙 동그라미 */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* 모바일 동그라미 */}
              <div className="md:hidden w-8 h-8 bg-primary-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center mr-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              {/* 빈 공간 */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>

        {/* 비전 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            2030 비전: 글로벌 TOP 10 제조기업
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            지속적인 기술 혁신과 품질 경영을 통해 세계 시장에서 인정받는
            <br />
            글로벌 TOP 10 제조기업으로 도약하겠습니다
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline