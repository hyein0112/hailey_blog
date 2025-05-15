import { Project } from '../types';

export const personalProjects: Project[] = [
  {
    id: "personal1",
    title: "Hailey's Blog",
    period: "2024.12 - 2025.05",
    shortDescription: "Next.js App Router를 활용한 개인 블로그 서비스",
    description: "Next.js 15 버전을 활용하여 개발한 개인 블로그 서비스입니다.",
    mainTechStack: ["Next.js", "TypeScript", "Tailwind CSS", "Emotion", "Zustand"],
    subTechStack: ["MongoDB", "Cloudflare R2", "Vercel"],
    link: "https://github.com/hyein0112/hailey_blog",
    demoUrl: "https://devhailey.com",
    details: {
      role: "풀스택 개발자",
      achievements: [
        "Api Routes를 활용한 API 개발",
        "마크다운 에디터 구현",
        "이미지 업로드 및 압축 기능",
        "태그 기반 포스트 관리 시스템 구축",
        "모바일 환경 반응형 디자인",
        "Skeleton UI를 활용한 사용자 경험 개선",
        "태그 기반 포스트 분류 및 필터링",
        "Vercel을 통한 배포 자동화",
        "SEO 최적화 및 검색엔진 등록",
        "실시간 데이터 동기화 및 사이트맵 재검증",
      ],
      screenshots: [
        "https://pub-24c7455649c447158e9e42357ec70220.r2.dev/hailey-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202025-05-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.51.37.png",
        "https://pub-24c7455649c447158e9e42357ec70220.r2.dev/hailey-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202025-05-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.51.51.png",
        "https://pub-24c7455649c447158e9e42357ec70220.r2.dev/hailey-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202025-05-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.52.10.png",
        "https://pub-24c7455649c447158e9e42357ec70220.r2.dev/hailey-blog/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202025-05-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.52.31.png",
        "https://pub-24c7455649c447158e9e42357ec70220.r2.dev/hailey-blog/1747284024365nzkgi.png",
        
      ]
    }
  },
  {
    id: "personal2",
    title: "MindWay",
    period: "2023.03 - 2023.7",
    shortDescription: "교내 도서관 종합 서비스",
    description: "기존의 학교 도서실 내 필요한 도서를 수기로 작성하여 신청하는 방법이 아닌,\n웹 사이트를 통해 신청할 수 있도록 하기 위해 개발된 서비스입니다.\n\n기존 불편한 도서실 이용 환경이 크게 개선될 것이라는 교사 및 학생들의 의견으로\n학생 졸업 작품 경진대회에서 3등을 수상하였습니다.",
    mainTechStack: ["React.js", "TypeScript", "Emotion", "Recoil", "Vercel"],
    subTechStack: [],
    demoUrl: "https://mindway-front-v2.vercel.app",
    details: {
      role: "프론트엔드 개발자",
      achievements: [
        "javascript -> typescript 마이그레이션",
        "react-hook-form을 활용한 폼 관리",
        "관리자 전용 백오피스 개발"
      ],
      challenges: [
        "서버리스 아키텍처 설계",
        "보안 취약점 해결"
      ],
      screenshots: [
        "https://pub-24c7455649c447158e9e42357ec70220.r2.dev/hailey-blog/1747202948819n1og1v.svg",
        "https://pub-24c7455649c447158e9e42357ec70220.r2.dev/hailey-blog/1747202987493zwvbv.svg"
      ]
    }
  },
]; 