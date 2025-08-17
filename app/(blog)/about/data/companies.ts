import { Company } from "../types";

export const companies: Company[] = [
  {
    id: "company2",
    name: "모난돌컴퍼니",
    period: "2025.08 ~ 진행중",
    position: "프론트엔드 개발자",
    projects: [
      {
        id: "project1",
        title: "럭키밀",
        period: "2025.08 - 진행중",
        shortDescription: "베이커리 50% 마감 할인 서비스",
        description: "베이커리 50% 마감 할인 서비스",
        mainTechStack: ["React", "Next.js", "TypeScript", "Zustand", "Tailwind CSS", "Tanstack Query"],
        subTechStack: ["Capacitor"],
        details: {
          role: "프론트엔드",
          achievements: ["No-Code 툴 Bubble 기반 프로젝트를 Next.js로 전환"],
          screenshots: [
            "https://oopy.lazyrockets.com/api/v2/notion/image?src=attachment%3Ac0d083ee-721e-4099-97ae-d31a68aba4ff%3ASlide_16_9_-_1.png&blockId=23bffa41-3387-81ab-923b-c347df30b918",
          ],
        },
      },
    ],
  },
  {
    id: "company1",
    name: "(주)키트웍스",
    period: "2023.11 ~ 2025.07",
    position: "프론트엔드 개발자",
    projects: [
      {
        id: "project1",
        title: "스터디모아",
        period: "2023.11 - 2025.07",
        shortDescription: "스터디카페 중개 서비스",
        description: `스터디카페 중개 서비스`,
        mainTechStack: ["React", "Next.js", "TypeScript", "Zustand", "Tailwind CSS", "Emotion", "Tanstack Query"],
        subTechStack: ["React-Native", "Node.js", "Nest.js"],
        details: {
          role: "프론트엔드",
          achievements: [
            "스터디모아의 전체 프론트엔드 개발을 주도하여 신규 서비스 2개 배포, 기존 서비스 2개 리뉴얼 작업",
            "JQuery -> Next.js 이관 마이그레이션 작업",
            "class 형 컴포넌트 -> 함수형 컴포넌트로 변경",
            "기존 프론트엔드 Github Action CI/CD 파이프라인 수정",
            "Docusaurus 사용하여 스터디모아 가이드 문서 개발",
            "스터디카페 점주 대상 백오피스 / 슈퍼관리자 대상 백오피스 개발 및 유지보수",
            "앱 외부 광고 기능 개발 (팝업, 피드, 배너) 및 트래킹",
            "광고주 대상 외부 광고 리포트 서비스 신규 개발",
            "백엔드 API 신규 개발 및 수정",
            "Firebase App Distribution, Test Flight 사용 내부 앱 테스트",
            "CodePush 사용 앱 배포",
          ],
          screenshots: [
            "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/42/14/62/421462e1-b2f6-a203-4559-38249d21beac/69f9a2ff-ea44-4171-90ff-3ab888596d66_Screenshot_green_U00286.5_U0029_01-min.png/230x0w.webp",
            "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d7/1b/b7/d71bb75a-49da-d16c-439f-72d64e8ab5c7/c4853480-bd93-4f37-af76-156b35df2151_Screenshot_green_U00286.5_U0029_02-min.png/230x0w.webp",
            "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/fe/27/cb/fe27cb21-1497-bcd2-8a73-9532e288a637/42eafca5-20a6-4988-a48a-ce3dcbce2170_Screenshot_green_U00286.5_U0029_03-min.png/230x0w.webp",
            "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/0c/2e/3c/0c2e3c86-64c4-ccef-0055-961ff1bc64e2/3b6d7987-6876-44ed-a294-80798b7474e4_Screenshot_green_U00286.5_U0029_04-min.png/230x0w.webpp",
          ],
        },
      },
    ],
  },
];
