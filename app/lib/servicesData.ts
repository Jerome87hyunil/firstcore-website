export interface ServiceDetail {
  slug: string
  title: string
  subtitle: string
  description: string
  mainImage?: string
  features: Feature[]
  products?: Product[]
  specifications?: Specification[]
  equipment?: Equipment[]
  advantages?: string[]
  gallery?: GalleryImage[]
}

interface GalleryImage {
  url: string
  alt: string
  caption?: string
}

interface Feature {
  title: string
  description: string
  items?: string[]
}

interface Product {
  name: string
  description: string
  image?: string
  details?: string[]
}

interface Specification {
  category: string
  items: {
    label: string
    value: string
    unit?: string
  }[]
}

interface Equipment {
  name: string
  model: string
  specs: string[]
  image?: string
}

export const servicesData: Record<string, ServiceDetail> = {
  'automated-system': {
    slug: 'automated-system',
    title: 'Automated System',
    subtitle: '자동화 시스템',
    description: 'Software/Firmware/Hardware 자동화 기기 Concept 설계 및 제작/개발로 고객사의 품질, 생산성, 경쟁력 향상에 도움이 될 수 있는 Total Solution을 제공합니다.',
    features: [
      {
        title: '다관절 로봇 디스펜서 설비',
        description: 'EPSON사 로봇을 활용한 고정밀 자동 분사 시스템',
        items: [
          '다각도 티칭 적용',
          '액상류 자동분사',
          'EPSON사 로봇'
        ]
      },
      {
        title: 'IR TEST M/C',
        description: 'IR신호 검증 및 센서 테스트 자동화',
        items: [
          '스마트 테더링 기능',
          'Pc & PLC 통합 제어',
          '센서 정량치 0.01mm/s 검사'
        ]
      },
      {
        title: '신뢰성 검사 설비',
        description: '제품 품질 및 신뢰성 자동 검증',
        items: [
          '판넬 비전 검사설비',
          '일루미네이션 검사',
          '형상, 색상 검사',
          '작동력 검사'
        ]
      },
      {
        title: '55inch 패널 비전검사 설비',
        description: '대형 디스플레이 패널 자동 검사',
        items: [
          '고해상도 비전 시스템',
          '실시간 결함 검출',
          '자동 판정 시스템'
        ]
      }
    ],
    equipment: [
      {
        name: '다관절 로봇 디스펜서',
        model: 'EPSON Robot System',
        specs: [
          '반복 정밀도: ±0.02mm',
          '최대 작업 반경: 800mm',
          '페이로드: 5kg'
        ]
      },
      {
        name: 'IR TEST 설비',
        model: 'Custom IR Testing Machine',
        specs: [
          '측정 정밀도: 0.01mm/s',
          'PC & PLC 통합 제어',
          '자동 판정 시스템'
        ]
      }
    ],
    advantages: [
      '완전 자동화로 생산성 극대화',
      '정밀 제어로 품질 향상',
      '실시간 모니터링 및 데이터 분석',
      '맞춤형 Total Solution 제공'
    ],
    gallery: [
      {
        url: '/images/automated-system-1.jpg',
        alt: '다관절 로봇 디스펜서 설비',
        caption: 'EPSON 로봇 기반 고정밀 디스펜서 시스템'
      },
      {
        url: '/images/automated-system-2.jpg',
        alt: 'IR TEST M/C 장비',
        caption: 'IR신호 검증 및 센서 테스트 자동화 장비'
      },
      {
        url: '/images/automated-system-3.jpg',
        alt: 'LED 점등검사',
        caption: 'LED조도 자동검사 (자동판정시스템)'
      }
    ],
    products: [
      {
        name: '열 융착 지그',
        description: '정밀 열융착 공정 자동화',
        details: ['온도 제어', '압력 자동 조절', '품질 모니터링']
      },
      {
        name: 'PCB Cutting JIG',
        description: 'PCB 자동 절단 시스템',
        details: ['일자형 연배열 PCB 컷팅', '정밀 절단', '버 제거 기능']
      },
      {
        name: 'Aging JIG',
        description: '제품 에이징 테스트 자동화',
        details: ['온도 TEST', '전격 부하 전류/전력 TEST', '자동 개별 동작 및 양불 판정']
      },
      {
        name: 'Conveyor System',
        description: '자동 이송 시스템',
        details: ['다양한 크기 대응', '속도 조절 가능', 'PLC 연동']
      }
    ]
  },
  'metal-mask': {
    slug: 'metal-mask',
    title: 'Metal Mask & Stencil',
    subtitle: '메탈 마스크 & 스텐실',
    description: 'FIBER LASER/Etching/Electro Forming/Additive mask/Screen 기술을 활용한 고정밀 Metal Mask 및 Stencil 제작으로 SMT 공정의 품질과 생산성을 향상시킵니다.',
    features: [
      {
        title: 'Fiber Stencil',
        description: '최신 FIBER LASER 기술을 활용한 고정밀 스텐실',
        items: [
          'LPKF사 Fiber Laser 장비 4대 보유',
          '5/1000mm 오차관리',
          '최대 가공 규격: 600 x 600mm',
          '소재 가공 두께: 0.02~0.6mm'
        ]
      },
      {
        title: 'Vector Guard-DEK',
        description: '혁신적인 프레임 분리형 시스템',
        items: [
          'Frame 불필요로 원가 절감',
          'Mask만 보관으로 공간 대폭 감소',
          'SUS만 세척 가능',
          '균일한 Tension 관리 유지',
          'DEK Print M/C License 보유'
        ]
      },
      {
        title: 'Cavity Mask',
        description: '특수 용도 캐비티 마스크',
        items: [
          '고정밀 개구부 가공',
          '다양한 두께 대응',
          'Step 가공 가능'
        ]
      },
      {
        title: 'Mesh/Screen Mask',
        description: '정밀 스크린 마스크',
        items: [
          'Plano mesh 기술',
          '고정밀 유제 도포',
          'Clean Room 환경 제작',
          '40μm Lines 30μm Line Space 구현'
        ]
      }
    ],
    specifications: [
      {
        category: 'Laser 가공 사양',
        items: [
          { label: '재질', value: 'SUS304, Ni Alloy(Invar)', unit: '' },
          { label: '최대 크기', value: '550-600', unit: 'mm' },
          { label: '제조 두께', value: '50-250', unit: 'μm' },
          { label: '최소 홀 크기 (t50)', value: '55', unit: 'μm' },
          { label: '최소 홀 크기 (t80)', value: '60', unit: 'μm' },
          { label: '최소 홀 크기 (t100)', value: '70', unit: 'μm' },
          { label: '홀 크기 정확도', value: '±10', unit: 'μm' },
          { label: '최소 리브 폭', value: '30', unit: 'μm' },
          { label: 'Total Pitch 정확도', value: '±15', unit: 'μm' }
        ]
      },
      {
        category: 'Etching 가공 사양',
        items: [
          { label: '재질', value: 'SUS304', unit: '' },
          { label: '최대 크기', value: '500-600', unit: 'mm' },
          { label: '제조 두께', value: '50-150', unit: 'μm' },
          { label: '최소 홀 크기 (t50)', value: '70', unit: 'μm' },
          { label: '최소 홀 크기 (t80)', value: '90', unit: 'μm' },
          { label: '최소 홀 크기 (t100)', value: '120', unit: 'μm' },
          { label: '홀 크기 정확도', value: '±20', unit: 'μm' },
          { label: '최소 리브 폭', value: '20', unit: 'μm' }
        ]
      },
      {
        category: 'E.Forming 가공 사양',
        items: [
          { label: '재질', value: 'Nikel', unit: '' },
          { label: '최대 크기', value: '550-650', unit: 'mm' },
          { label: '제조 두께', value: 'Ni 15-200', unit: 'μm' },
          { label: '최소 홀 크기 (t25)', value: '25', unit: 'μm' },
          { label: '홀 크기 정확도', value: '±2~3', unit: 'μm' },
          { label: '최소 리브 폭', value: '15', unit: 'μm' },
          { label: 'Total Pitch 정확도', value: '200*200/±4, 370*470/±7', unit: 'μm' }
        ]
      }
    ],
    equipment: [
      {
        name: 'FIBER LASER기',
        model: 'LPKF P6060/P6080',
        specs: [
          '가공 규격: 600 x 600mm',
          '축 정밀도: ±4μm',
          '반복 정밀도: ±4μm',
          '레이저 반복 최대 속도: 10kHz'
        ]
      },
      {
        name: 'MCT 장비',
        model: '두산 REVO 51P/510M',
        specs: [
          '가공 규격: 1200 x 510mm',
          '축 정밀도: ±10μm',
          'BEAT 반복 최대 속도: 12000Hz',
          '소재 가공 두께: 1.0 ~ 100mm'
        ]
      }
    ],
    advantages: [
      'ISO 9001, ISO 45001 인증 보유',
      '최신 FIBER LASER 장비 4대 보유',
      'Clean Room 환경 (50평, 3000클래스)',
      '20년 이상의 기술 노하우',
      '국내 대기업 200여개사 거래'
    ],
    gallery: [
      {
        url: '/images/metal-mask-1.jpg',
        alt: 'FIBER LASER 가공 장비',
        caption: 'LPKF사 최신 FIBER LASER 장비'
      },
      {
        url: '/images/metal-mask-2.jpg',
        alt: 'Metal Mask 제품',
        caption: '고정밀 Metal Mask 및 Stencil 제품'
      },
      {
        url: '/images/metal-mask-3.jpg',
        alt: 'Clean Room 작업 환경',
        caption: 'Clean Room 생산 환경'
      }
    ]
  },
  'process-jig': {
    slug: 'process-jig',
    title: 'Process Jig',
    subtitle: '공정 지그',
    description: 'Testing Machine/Soldering Wave Jig/SMT Jig 및 각종 생산용 지그를 제작하여 PCB 생산 효율과 품질을 향상시킵니다.',
    features: [
      {
        title: 'Wave Soldering Carrier',
        description: '웨이브 솔더링 공정용 캐리어',
        items: [
          'Aluminum/Magnesium 재질',
          'FR4 재질의 Twist 문제 보완',
          '내구성과 내열성 우수',
          '가이드 없는 FPCB 생산 용이'
        ]
      },
      {
        title: 'SMT Jig',
        description: 'SMT 공정용 지그',
        items: [
          'Reflow 고열 대응',
          '정밀한 위치 고정',
          '다양한 PCB 크기 대응',
          '반복 사용 가능'
        ]
      },
      {
        title: 'Selective Soldering Jig',
        description: '선택적 솔더링 지그',
        items: [
          '특정 부위만 솔더링',
          '정밀한 마스킹',
          '열 보호 기능'
        ]
      },
      {
        title: 'Durostone Jig',
        description: '듀로스톤 재질 지그',
        items: [
          '열전도 문제 해결',
          'Wave 솔더링 최적화',
          '냉땜 방지',
          '뛰어난 내구성',
          'Rico cell/TM8100 재질 대응'
        ]
      }
    ],
    products: [
      {
        name: 'VACUUM PLATE',
        description: '진공 흡착 플레이트',
        details: ['PCB 고정', '평탄도 유지', '다양한 크기 대응']
      },
      {
        name: 'ROUTER JIG',
        description: '라우터 가공용 지그',
        details: ['정밀 가공', 'PCB 외형 가공', '버 제거']
      },
      {
        name: '압력TEST 지그',
        description: '압력 테스트용 지그',
        details: ['기능 검사', '내구성 테스트', '품질 검증']
      },
      {
        name: 'Screw 조립 Jig',
        description: '스크류 조립용 지그',
        details: ['정확한 위치 고정', '조립 효율 향상', '품질 일관성']
      },
      {
        name: '코팅 지그',
        description: '코팅 공정용 지그',
        details: ['균일한 코팅', '마스킹 기능', '재사용 가능']
      },
      {
        name: 'PIN Block 지그',
        description: 'PIN 블록 테스트 지그',
        details: ['전기 검사', '접촉 테스트', '신호 검증']
      }
    ],
    specifications: [
      {
        category: 'Aluminum JIG 사양',
        items: [
          { label: '재질', value: 'AL6061-T6', unit: '' },
          { label: '최대 크기', value: '1200 x 800', unit: 'mm' },
          { label: '가공 정밀도', value: '±0.05', unit: 'mm' },
          { label: '내열 온도', value: '350', unit: '°C' },
          { label: '표면 처리', value: '아노다이징', unit: '' }
        ]
      },
      {
        category: 'Magnesium JIG 사양',
        items: [
          { label: '재질', value: 'AZ31B', unit: '' },
          { label: '비중', value: '1.78 (AL 대비 2/3)', unit: 'g/cm³' },
          { label: '강도', value: '높음 (비중 대비)', unit: '' },
          { label: '충격흡수력', value: '우수', unit: '' },
          { label: '친환경성', value: '수은, 납, 카드뮴 미함유', unit: '' }
        ]
      },
      {
        category: 'Durostone 사양',
        items: [
          { label: '재질', value: 'Durostone CAS-761', unit: '' },
          { label: '최대 온도', value: '350', unit: '°C' },
          { label: '열전도율', value: '낮음', unit: '' },
          { label: '가공성', value: '우수', unit: '' },
          { label: '내화학성', value: '우수', unit: '' }
        ]
      }
    ],
    advantages: [
      'FR4 대비 뛰어난 내구성과 내열성',
      '맞춤형 설계 및 제작',
      '다양한 재질 선택 가능',
      '생산성 향상 및 불량률 감소',
      '반복 사용으로 경제성 확보'
    ],
    gallery: [
      {
        url: '/images/process-jig-1.jpg',
        alt: 'EMI Cover ASSY JIG',
        caption: 'EMI Cover ASSY JIG'
      },
      {
        url: '/images/process-jig-2.jpg',
        alt: 'LDM SCREW JIG',
        caption: 'LDM SCREW JIG'
      },
      {
        url: '/images/process-jig-3.jpg',
        alt: 'LAM SCREW JIG',
        caption: 'LAM SCREW JIG'
      }
    ]
  }
}

export function getServiceBySlug(slug: string): ServiceDetail | null {
  return servicesData[slug] || null
}