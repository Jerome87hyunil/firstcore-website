'use client'

import { motion } from 'framer-motion'
import { Cpu, Grid3X3, Settings, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Automated System',
      subtitle: '자동화 시스템',
      description: 'Software/Firmware/Hardware 차돕화 기기 Concept 설계 및 제작/개발',
      features: [
        '다관절 로봇 디스펜서 설비',
        'IR TEST M/C',
        '신뢰성 검사 설비',
        '55inch 패널 비전검사 설비'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: <Grid3X3 className="w-12 h-12" />,
      title: 'Metal Mask & Stencil',
      subtitle: '메탈 마스크 & 스텐실',
      description: 'FIBER LASER/Etching/Electro Forming/Additive mask/Screen',
      features: [
        'Fiber Stencil',
        'Vector Guard-DEK',
        'Cavity Mask',
        'COB-Mask'
      ],
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Process Jig',
      subtitle: '공정 지그',
      description: 'Testing Machine/Soldering Wave Jig/SMT Jig 및 각종 생산용 지그',
      features: [
        'Wave Soldering Carrier',
        'SMT Jig',
        'Selective Soldering Jig',
        'Durostone/Rico cell/TM8100'
      ],
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            핵심 <span className="text-primary-600">사업영역</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            퍼스트코어는 세 가지 핵심 영역에서 최고의 기술력과 품질로
            <br />
            고객사의 성공적인 비즈니스를 지원합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl transform group-hover:scale-105 transition-transform duration-300 opacity-50`}></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                {/* 아이콘 */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>

                {/* 타이틀 */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>

                {/* 설명 */}
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* 기능 리스트 */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* 더 알아보기 버튼 */}
                <button className="group/btn flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  자세히 보기
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            귀사의 성공적인 비즈니스를 위한 최고의 파트너
          </h3>
          <p className="text-xl mb-8 text-white/90">
            퍼스트코어와 함께 글로벌 시장을 선도해 나가세요
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            문의하기
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services