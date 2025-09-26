'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const offices = [
    {
      name: '구미사업장',
      address: '경상북도 구미시 1공단로6길 64-23',
      phone: '054-462-9786',
      fax: '054-462-9787',
      email: 'gfcore@chol.com'
    },
    {
      name: '군포사업장',
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
      name: '인산사업장 (MCT 가공)',
      address: '경기도 시흥시 경기과기대로219, 1층 145호',
      phone: '070-5161-8800',
      fax: '070-5161-8820',
      email: 'fcore@unitel.co.kr'
    }
  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    const data = {
      company: formData.get('company') as string,
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      type: formData.get('type') as string,
      message: formData.get('message') as string,
      send_time: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
    }

    try {
      // EmailJS 초기화 (환경 변수 사용)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

      // EmailJS로 이메일 전송
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        // 환경 변수가 설정되지 않은 경우 콘솔 출력 (개발용)
        console.log('EmailJS 설정이 필요합니다. .env.local 파일을 확인하세요.')
        console.log('문의 데이터:', data)
        
        // 데모 모드: 2초 후 성공
        await new Promise(resolve => setTimeout(resolve, 2000))
      } else {
        // 실제 이메일 전송
        await emailjs.send(
          serviceId,
          templateId,
          data,
          publicKey
        )
      }
      
      setSubmitStatus('success')
      // 폼 초기화
      e.currentTarget.reset()
    } catch (error) {
      console.error('문의 전송 실패:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    회사명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
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
                    name="name"
                    required
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
                    name="phone"
                    required
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
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="example@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  문의 유형 <span className="text-red-500">*</span>
                </label>
                <select name="type" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
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
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="문의하실 내용을 자세히 작성해주세요"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    전송 중...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    문의 전송
                  </>
                )}
              </button>

              {/* 상태 메시지 */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  ✅ 문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  ❌ 전송 중 오류가 발생했습니다. 다시 시도해주시거나 전화로 문의해주세요.
                </div>
              )}
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
                <span className="font-bold text-xl">054-462-9786</span>
              </div>
              <p className="text-sm text-white/80 mt-2">
                운영시간: 평일 10:00 - 17:00
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
            구미사업장 위치
          </h3>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.926476017603!2d128.37017917691492!3d36.09528027245642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565c116231ad991%3A0xe3e3e2fbcfd89881!2z6rK97IOB67aB64-EIOq1rOuvuOyLnCAx6rO164uo66GcNuq4uCA2NC0yMw!5e0!3m2!1sko!2skr!4v1758845160390!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="퍼스트코어 구미사업장 위치"
            ></iframe>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">구미사업장 주소</h4>
              <p className="text-sm text-gray-600">
                경상북도 구미시 1공단로6길 64-23
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">연락처</h4>
              <p className="text-sm text-gray-600">
                Tel: 054-462-9786 | Fax: 054-462-9787
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact