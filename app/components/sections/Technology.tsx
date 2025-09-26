'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Monitor, Cpu, Zap, Shield, ChevronLeft, ChevronRight, X } from 'lucide-react'

const Technology = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const technologies = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'FIBER LASER 설비',
      description: '최첨단 파이버 레이저 기술로 초정밀 가공',
      specs: ['14년 1대 / 15년 1대', '최대 550*400mm', '±10μm 정밀도']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'CNC 가공 장비',
      description: '고정밀 CNC 장비로 복잡한 형상 가공',
      specs: ['3축/5축 가공', '±5μm 가공정밀도', '24시간 무인운전']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'MCT 도입 통합 설비',
      description: '자동화 통합 제어 시스템',
      specs: ['SMT Carrier', 'Wave Soldering', 'Vision 검사']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '품질검사 시스템',
      description: '완벽한 품질관리를 위한 검사 체계',
      specs: ['3D 측정', 'X-Ray 검사', 'AOI 자동검사']
    }
  ]

  const equipmentImages = [
    { src: '/images/laser-equipment-1.jpg', alt: 'LASER 장비 1', category: 'laser' },
    { src: '/images/laser-equipment-2.jpg', alt: 'LASER 장비 2', category: 'laser' },
    { src: '/images/cnc-equipment-1.jpg', alt: 'CNC 장비 1', category: 'cnc' },
    { src: '/images/cnc-equipment-2.jpg', alt: 'CNC 장비 2', category: 'cnc' },
    { src: '/images/mask-process-1.jpg', alt: '마스크 공정 1', category: 'process' },
    { src: '/images/mask-process-2.jpg', alt: '마스크 공정 2', category: 'process' },
    { src: '/images/facility-1.jpg', alt: '내부전경 1', category: 'facility' },
    { src: '/images/facility-2.jpg', alt: '내부전경 2', category: 'facility' },
  ]

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === equipmentImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? equipmentImages.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="technology" className="py-24 bg-white">
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
            최첨단 <span className="text-primary-600">기술력</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            퍼스트코어는 최신 설비와 기술로 고객사의 요구사항을 완벽히 충족시킵니다
          </p>
        </motion.div>

        {/* 기술 카드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-primary-600 mb-4">{tech.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
              <ul className="space-y-1">
                {tech.specs.map((spec, idx) => (
                  <li key={idx} className="text-xs text-gray-500 flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 이미지 갤러리 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            세계 수준의 제조 시설
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {equipmentImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setSelectedImage(index)
                  setCurrentIndex(index)
                }}
                className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
              >
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="absolute bottom-2 left-2 text-white text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 라이트박스 */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative">
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src={equipmentImages[currentIndex].src}
                  alt={equipmentImages[currentIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1536px) 100vw, 1536px"
                  priority
                />
              </div>
              <p className="text-white text-center mt-4 text-lg">
                {equipmentImages[currentIndex].alt}
              </p>
            </div>
          </div>
        )}

        {/* 특허 및 기술 현황 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">기술 혁신의 선두주자</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
              <div className="text-gray-300">특허 및 기술인증</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">99.9%</div>
              <div className="text-gray-300">품질 보증율</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
              <div className="text-gray-300">기술 지원 서비스</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technology