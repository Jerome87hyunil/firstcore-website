'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react'

const Contact = () => {
  const offices = [
    {
      name: '본사 (수원)',
      address: '경기도 군포시 군포로 166 SK텐카면 103동 1101호',
      phone: '031-429-6840~1',
      fax: '031-429-6842',
      email: 'fcore@chol.com'
    },
    {
      name: '천안사업장',
      address: '충청남도 천안시 서북구 직산읍 금공로 52-11',
      phone: '041-582-5323~4',
      fax: '041-582-5325',
      email: 'fcore@unitel.co.kr'
    },
    {
      name: '구미사업장',
      address: '경상북도 구미시 1공단로6길 64-23',
      phone: '054-462-9786',
      fax: '054-462-9787',
      email: 'gfcore@chol.com'
    },
    {
      name: '인산사업장 (MCT 가공)',
      address: '경기도 시흥시 경기과기대로219, 1층 145호',
      phone: '070-5161-8800',
      fax: '070-5161-8820',
      email: 'fcore@unitel.co.kr'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gray-50">
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
            함께 <span className="text-primary-600">성장하는</span> 파트너
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            퍼스트코어와 함께 미래를 만들어가실 파트너를 기다립니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 문의 폼 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              문의하기
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    회사명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    담당자명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="담당자명을 입력해주세요"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="example@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  문의 유형 <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                  <option value="">선택해주세요</option>
                  <option value="automated-system">자동화 시스템</option>
                  <option value="metal-mask">메탈 마스크</option>
                  <option value="process-jig">공정 지그</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  문의 내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="문의하실 내용을 자세히 작성해주세요"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
              >
                <Send className="mr-2 w-5 h-5" />
                문의 전송
              </button>
            </form>
          </motion.div>

          {/* 사업장 정보 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              사업장 안내
            </h3>
            
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {office.name}
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">T: {office.phone} / F: {office.fax}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 추가 정보 */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-bold mb-3">
                빠른 응대를 원하시나요?
              </h4>
              <p className="text-white/90 mb-4">
                긴급한 문의는 전화로 연락주시기 바랍니다.
              </p>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-bold text-xl">031-429-6840</span>
              </div>
              <p className="text-sm text-white/80 mt-2">
                운영시간: 평일 09:00 - 18:00
              </p>
            </div>
          </motion.div>
        </div>

        {/* 지도 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            글로벌 네트워크
          </h3>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">
                전국 4개 사업장에서 신속한 서비스를 제공합니다
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact