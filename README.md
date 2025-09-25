# 퍼스트코어 회사 홈페이지

## 프로젝트 소개
퍼스트코어 제조기업의 공식 홈페이지입니다.
기술력과 전문성을 강조하고, 신뢰감 있는 이미지를 전달하며, 글로벌 수출 기업으로의 확장을 나타내는 디자인입니다.

## 기술 스택
- **Framework**: Next.js 15.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 브라우저에서 확인
```
http://localhost:3000
```
(현재 포트 3001에서 실행 중 - 3000 포트가 사용 중인 경우)

## 프로젝트 구조
```
firstcore-website/
├── app/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # 히어로 섹션
│   │   │   ├── Services.tsx        # 사업영역 소개
│   │   │   ├── Technology.tsx      # 기술력 쇼케이스
│   │   │   ├── Timeline.tsx        # 회사 연혁
│   │   │   ├── Certifications.tsx  # 인증 현황
│   │   │   └── Contact.tsx         # 문의 양식
│   │   ├── Navigation.tsx          # 네비게이션 바
│   │   └── Footer.tsx              # 푸터
│   ├── page.tsx                    # 메인 페이지
│   ├── layout.tsx                  # 레이아웃
│   └── globals.css                 # 전역 CSS
├── public/
│   └── images/                     # 회사 이미지 파일
└── package.json                    # 프로젝트 설정
```

## 주요 기능
- 회사 소개 및 비전 제시
- 3가지 핵심 사업영역 소개
- 기술력 및 장비 쇼케이스
- 회사 연혁 타임라인
- ISO 인증 및 협력사 소개
- 문의 폼 및 사업장 정보
- 반응형 디자인
- 한/영 언어 전환 기능

## 빌드 및 배포

### 프로덕션 빌드
```bash
npm run build
```

### 프로덕션 서버 실행
```bash
npm run start
```