# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요
퍼스트코어(First Core) 제조기업의 Next.js 기반 회사 홈페이지입니다. 자동화 시스템, 메탈 마스크, 공정 지그 분야 전문 기업의 웹사이트로 기술력과 신뢰감을 강조하는 디자인을 구현합니다.

## 개발 명령어

### 개발 서버
```bash
npm run dev    # localhost:3000에서 개발 서버 실행
```

### 빌드 및 배포
```bash
npm run build  # 프로덕션 빌드 생성
npm run start  # 프로덕션 서버 실행
npm run lint   # ESLint 실행
```

## 아키텍처 및 기술 스택

### 핵심 기술
- **Framework**: Next.js 15.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom color system (primary, gray)
- **Animations**: Framer Motion
- **Icons**: Lucide React

### 프로젝트 구조
```
app/
├── page.tsx                 # 메인 페이지 (모든 섹션 통합)
├── layout.tsx               # 루트 레이아웃 (Navigation + Footer 포함)
├── globals.css              # 전역 스타일
└── components/
    ├── Navigation.tsx       # 상단 네비게이션
    ├── Footer.tsx          # 하단 푸터
    └── sections/           # 페이지 섹션 컴포넌트
        ├── Hero.tsx        # 히어로 섹션 (통계, CTA 포함)
        ├── Services.tsx    # 3대 사업영역
        ├── Technology.tsx  # 기술력 쇼케이스
        ├── Timeline.tsx    # 회사 연혁
        ├── Certifications.tsx # ISO 인증 현황
        └── Contact.tsx     # 문의 양식
```

### 컴포넌트 패턴
- 모든 섹션 컴포넌트는 `'use client'` 지시문 사용
- Framer Motion으로 스크롤 애니메이션 구현
- 반응형 디자인 (mobile-first approach)
- 섹션별 독립적인 컴포넌트 구조

### 스타일링 가이드
- Tailwind 커스텀 컬러 사용: `primary-*` (파란색 계열), `gray-*`
- 그라데이션: `bg-gradient-to-*` 패턴 활용
- 애니메이션: `fade-in`, `slide-up`, `slide-down` 커스텀 애니메이션 정의

## 한글 소통 규칙

### 기본 원칙
- 모든 응답은 한글로 작성합니다
- 코드 주석은 한글로 작성합니다
- 변수명과 함수명은 영문을 유지하되, 설명이 필요한 경우 한글 주석을 추가합니다

### 기술 용어 처리
- 널리 사용되는 영문 기술 용어는 그대로 사용 (예: API, UI, UX, REST, GraphQL)
- 한글 번역이 자연스러운 경우 한글 사용 (예: 배포, 빌드, 테스트)
- 처음 사용하는 용어는 한글(영문) 형식으로 표기

### 커밋 메시지
- 한글로 작성하되 conventional commit 형식 유지
- 예: `feat: 회원가입 기능 추가`, `fix: 네비게이션 버그 수정`

### 에러 메시지 및 로그
- 사용자 대면 메시지: 한글
- 개발자 콘솔 로그: 한글/영문 혼용 가능
- 에러 추적을 위한 코드는 영문 유지

### 문서화
- README, 가이드 문서: 한글
- API 문서: 한글 설명 + 영문 예제 코드
- 코드 내 JSDoc: 한글

## 개발 워크플로우

### 작업 완료 시 필수 검증 프로세스
모든 기능 개발 또는 버그 수정 후 다음 단계를 반드시 수행:

1. **빌드 검증**
   ```bash
   npm run build  # 빌드 성공 확인
   ```

2. **린트 검사**
   ```bash
   npm run lint   # 코드 스타일 및 품질 검증
   ```

3. **테스트 실행** (테스트가 있는 경우)
   ```bash
   npm test       # 단위 테스트 실행
   ```

4. **로컬 테스트**
   ```bash
   npm run start  # 프로덕션 빌드 로컬 실행
   # localhost:3000에서 수동 테스트
   ```

5. **커밋 생성**
   ```bash
   git add .
   git commit -m "타입: 작업 내용 간단 설명"
   ```

### 커밋 전 체크리스트
- [ ] 빌드가 성공적으로 완료됨
- [ ] 린트 에러가 없음
- [ ] 타입스크립트 에러가 없음
- [ ] 브라우저에서 기능이 정상 작동함
- [ ] 반응형 디자인이 모바일/태블릿/데스크톱에서 정상 작동함
- [ ] 콘솔에 불필요한 로그나 에러가 없음

### 작업 단위 가이드라인
- **작은 단위로 커밋**: 하나의 기능이나 버그 수정마다 커밋
- **의미있는 단위 구분**: 논리적으로 연관된 변경사항끼리 묶기
- **미완성 코드 커밋 금지**: 빌드가 깨지는 상태로 커밋하지 않기
- **테스트 후 커밋**: 항상 로컬에서 테스트 후 커밋

## 개발 시 주의사항

### SEO 및 메타데이터
- `layout.tsx`의 metadata 객체 유지
- 한글 키워드 최적화 고려
- Open Graph 이미지 설정 확인

### 성능 최적화
- 이미지는 Next.js Image 컴포넌트 사용
- 폰트는 next/font로 최적화
- 불필요한 re-render 방지 (React.memo 활용)

### 접근성
- 시맨틱 HTML 태그 사용
- ARIA 레이블 한글로 작성
- 키보드 네비게이션 지원