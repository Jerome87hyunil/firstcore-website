'use client'

import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle, Star } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'ISO 9001:2015',
      organization: '글로벌시스템인증원',
      description: '품질경영시스템 국제인증',
      date: '2022.11'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'ISO 45001:2018',
      organization: '글로벌시스템인증원',
      description: '안전보건경영시스템 국제인증',
      date: '2022.11'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '벤처기업 인증',
      organization: '중소기업진흥공단',
      description: '기술혁신성 벤처기업',
      date: '2023.01'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '전문기업 인증',
      organization: '중소기업진흥공단',
      description: '소재·부품·장비 전문기업',
      date: '2023.01'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'INNOBIZ 인증',
      organization: '중소기업기술혁신협회',
      description: '기술혁신형 중소기업',
      date: '2019.09'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'KOITA 회원사',
      organization: '한국산업기술진흥협회',
      description: '산업기술협회 회원',
      date: '2017.09'
    }
  ]

  const partners = [
    { name: 'Kelt', logo: 'KELT' },
    { name: 'MAINBiz', logo: 'MAINBiz' },
    { name: 'INNOBIZ', logo: 'INNOBIZ' },
    { name: 'KOITA', logo: 'KOITA' },
    { name: 'KOVA', logo: 'KOVA' },
    { name: '벤처기업협회', logo: '벤처기업협회' },
    { name: '경복창조경제혁신센터', logo: '경복창조' },
    { name: 'ISO 9001', logo: 'ISO 9001' },
    { name: 'ISO 45001', logo: 'ISO 45001' },
  ]

  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            신뢰받는 <span className="text-primary-600">인증 현황</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            국제 표준 인증과 정부 공인을 통해 기술력과 신뢰성을 입증하고 있습니다
          </p>
        </motion.div>

        {/* 인증 카드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary-600 bg-primary-100 rounded-lg p-3">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium mb-2">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {cert.description}
                  </p>
                  <p className="text-xs text-gray-400">
                    인증일: {cert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 협력사 로고 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            협력 기관 및 파트너사
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-xs font-bold text-gray-600 text-center">
                  {partner.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            검증된 기술력, 확실한 품질 보증
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            퍼스트코어는 국제 표준 인증과 철저한 품질 관리로 고객사의 신뢰를 얻고 있습니다
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-gray-400">품질 검증</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-400">품질 관리</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">365</div>
              <div className="text-gray-400">안전 경영</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications