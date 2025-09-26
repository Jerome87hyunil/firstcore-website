'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Check, Cpu, Settings, Grid3X3, ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceDetail } from '@/app/lib/servicesData'

interface ServiceDetailClientProps {
  service: ServiceDetail
}

const iconMap: Record<string, any> = {
  'automated-system': Cpu,
  'metal-mask': Grid3X3,
  'process-jig': Settings
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const Icon = iconMap[service.slug] || Cpu

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-primary-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* 뒤로가기 버튼 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/#services"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              서비스 목록으로 돌아가기
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-6"
          >
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg mr-6">
              <Icon className="w-16 h-16" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{service.title}</h1>
              <p className="text-xl text-white/90">{service.subtitle}</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/90 max-w-4xl"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* 갤러리 섹션 */}
      {service.gallery && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                제품 및 시설 갤러리
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                최첨단 설비와 고품질 제품을 확인하세요
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-64 bg-gray-100">
                    <Image 
                      src={image.url} 
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  {image.caption && (
                    <div className="p-4 bg-white">
                      <p className="text-sm text-gray-700 font-medium text-center">{image.caption}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 핵심 기능 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              핵심 기능 및 서비스
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              최고의 기술력과 경험을 바탕으로 제공하는 차별화된 솔루션
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                {feature.items && (
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 사양 테이블 (Metal Mask인 경우에만) */}
      {service.specifications && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                기술 사양
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                업계 최고 수준의 정밀도와 품질을 보장합니다
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {service.specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                    {spec.category}
                  </h3>
                  <div className="space-y-3">
                    {spec.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-semibold text-gray-900">
                          {item.value}
                          {item.unit && <span className="text-gray-500 ml-1">{item.unit}</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 제품/서비스 목록 */}
      {service.products && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                주요 제품 및 서비스
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                다양한 산업 분야에 최적화된 맞춤형 솔루션
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  {product.details && (
                    <ul className="space-y-1">
                      {product.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 장비 정보 */}
      {service.equipment && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                보유 장비
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                최신 설비와 기술력으로 최고의 품질을 보장합니다
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.equipment.map((equip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{equip.name}</h4>
                  <p className="text-primary-600 font-medium mb-4">{equip.model}</p>
                  <ul className="space-y-2">
                    {equip.specs.map((spec, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 장점 및 특징 */}
      {service.advantages && (
        <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                왜 퍼스트코어인가?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                업계 최고의 기술력과 경험으로 차별화된 가치를 제공합니다
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {service.advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-6 flex items-start"
                >
                  <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-gray-700">{advantage}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {service.title} 도입을 고려하고 계신가요?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              퍼스트코어의 전문가들이 최적의 솔루션을 제안해 드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                prefetch={true}
              >
                견적 문의하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="https://www.dropbox.com/scl/fi/ynfr5j23tsy6aq31dei05/.pdf?rlkey=kx8ej8arloy1xh1ttrxm8ymsa&st=56yiu2by&dl=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/30 transition-colors"
              >
                <Download className="mr-2 w-5 h-5" />
                회사소개서 다운로드
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}