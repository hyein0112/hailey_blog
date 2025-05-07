# Hailey's Blog

Next.js를 사용한 개인 블로그 프로젝트입니다.

Demo: [devhailey.com](https://devhailey.com)

## 기술 스택
### 프론트엔드

| 카테고리 | 기술 | 버전 | 설명 |
|---------|------|------|------|
| **프레임워크** | Next.js | 15.1.3 | React 기반 프레임워크 |
| | React | 19.0.0 | UI 라이브러리 |
| | TypeScript | 5.x | 정적 타입 지원 |
| **스타일링** | Tailwind CSS | 3.4.17 | 유틸리티 기반 CSS 프레임워크 |
| | Emotion | 11.14.0 | CSS-in-JS 솔루션 |
| **상태 관리** | Zustand | 5.0.2 | 경량 상태 관리 라이브러리 |
| **UI/UX** | react-icons | 5.4.0 | 아이콘 라이브러리 |
| | @uiw/react-md-editor | 4.0.5 | 마크다운 에디터 |

### 서버 및 배포

| 카테고리 | 기술 |  설명 |
|---------|------|------|
| **데이터베이스** | MongoDB | NoSQL 데이터베이스 |
| **클라우드** | Cloudflare R2 (aws s3 sdk 사용) |  파일 스토리지 서비스 |
| **배포** | Vercel | 웹 호스팅 서비스 |



## 프로젝트 구조
```
app/
├── api/ # API 라우트
├── assets/ # 정적 자산
├── components/ # 재사용 가능한 컴포넌트
├── constants/ # 상수 정의
├── lib/ # 유틸리티 함수
├── stores/ # Zustand 스토어
├── styles/ # 전역 스타일
├── types/ # TypeScript 타입 정의
└── (blog)/ # 블로그 관련 페이지
```

## 프로젝트 시작하기
### 개발모드

**1. 의존성 설치 후 dev 서버 실행**
```bash
yarn install
yarn dev
```
**2. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속**

### 빌드 및 배포

```bash
yarn build
yarn start
```
