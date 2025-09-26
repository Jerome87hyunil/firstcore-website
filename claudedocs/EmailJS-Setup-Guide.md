# EmailJS 설정 가이드

## 1. EmailJS 계정 설정

### 1.1 EmailJS 가입
1. [EmailJS](https://www.emailjs.com/) 웹사이트 접속
2. 무료 계정 생성 (월 200건까지 무료)

### 1.2 이메일 서비스 연결
1. EmailJS 대시보드 로그인
2. **Email Services** 탭 클릭
3. **Add New Service** 클릭
4. 서비스 선택:
   - **Gmail** (추천 - 가장 간단)
   - **Outlook**
   - **Personal (SMTP)** - 회사 메일 서버 사용 시

#### Gmail 설정 방법:
1. Gmail 선택
2. **Connect Account** 클릭
3. Google 계정 로그인
4. EmailJS 권한 허용
5. Service ID 확인 (예: `service_xxx`)

#### 회사 메일(SMTP) 설정 방법:
1. Personal (SMTP) 선택
2. SMTP 정보 입력:
   ```
   SMTP Server: smtp.company.com (회사 메일 서버)
   Port: 587 (또는 465)
   Username: your-email@company.com
   Password: 이메일 비밀번호
   ```
3. **Create Service** 클릭
4. Service ID 확인

### 1.3 이메일 템플릿 생성
1. **Email Templates** 탭 클릭
2. **Create New Template** 클릭
3. 템플릿 설정:

```
Subject: [퍼스트코어] {{company}} - {{name}}님 문의사항

To: gfcore@chol.com (수신 이메일)
From: {{email}} (발신자 이메일)
Reply To: {{email}}

내용:
----------------------------------------
새로운 문의가 접수되었습니다.

회사명: {{company}}
담당자: {{name}}
연락처: {{phone}}
이메일: {{email}}
문의유형: {{type}}

문의내용:
{{message}}
----------------------------------------

발송 시간: {{send_time}}
```

4. **Save** 클릭
5. Template ID 확인 (예: `template_xxx`)

### 1.4 API 키 확인
1. **Account** 페이지 이동
2. **Public Key** 확인 (예: `public_key_xxx`)

## 2. Next.js 프로젝트 설정

### 2.1 환경 변수 설정
`.env.local` 파일 생성:
```bash
# EmailJS 설정
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key_xxx
```

### 2.2 발송 이메일 설정 옵션

#### 옵션 1: Gmail 계정 사용
- 장점: 설정 간단, 무료
- 단점: 발신자가 Gmail 주소로 표시
- 설정: Gmail 계정으로 EmailJS 서비스 연결

#### 옵션 2: 회사 도메인 이메일 (권장)
- 장점: 전문적인 발신자 주소 (예: noreply@firstcore.com)
- 단점: SMTP 설정 필요
- 필요 정보:
  - SMTP 서버 주소
  - 포트 번호 (587 또는 465)
  - 이메일 계정 정보

#### 옵션 3: 고객 이메일로 직접 발송
- 장점: Reply가 편함
- 단점: 스팸 필터에 걸릴 가능성
- 설정: 템플릿에서 From 필드를 {{email}}로 설정

## 3. 테스트 방법

1. 개발 서버 실행
2. 문의 폼 작성 및 제출
3. EmailJS 대시보드에서 발송 로그 확인
4. 수신 이메일 확인

## 4. 프로덕션 체크리스트

- [ ] 환경 변수 설정 완료
- [ ] 이메일 템플릿 최종 확인
- [ ] 수신 이메일 주소 확인
- [ ] 스팸 필터 테스트
- [ ] 발송 한도 확인 (무료: 월 200건)
- [ ] 에러 처리 구현

## 5. 추가 보안 설정

### Domain Restriction (선택사항)
1. EmailJS 대시보드 → Account
2. **Whitelist Domains** 설정
3. 도메인 추가: `https://firstcore.com`
4. 이렇게 하면 해당 도메인에서만 이메일 발송 가능

## 6. 문제 해결

### 이메일이 전송되지 않을 때:
1. 브라우저 콘솔에서 에러 메시지 확인
2. EmailJS 대시보드에서 발송 로그 확인
3. 환경 변수가 올바르게 설정되었는지 확인
4. 템플릿 변수명이 코드와 일치하는지 확인

### 스팸함으로 들어갈 때:
1. SPF/DKIM 설정 (회사 도메인 사용 시)
2. 발신자 이메일을 회사 도메인으로 변경
3. 템플릿 내용에 스팸 키워드 제거