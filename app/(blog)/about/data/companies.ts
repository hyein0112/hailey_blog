import { Company } from '../types';

export const companies: Company[] = [
  {
    id: "company1",
    name: "(주)키트웍스",
    period: "2023.11 ~",
    position: "프론트엔드 개발자",
    projects: [
      {
        id: "project1",
        title: "스터디모아",
        period: "2023.11 - 진행중",
        description: "회사에서 진행한 주요 프로젝트 설명",
        techStack: ["React", "Next.js", "Node.js",],
        details: {
          role: "프론트엔드",
          achievements: [
            "성능 최적화로 페이지 로딩 시간 50% 감소",
            "사용자 경험 개선으로 전환율 30% 향상"
          ],
          challenges: [
            "대규모 데이터 처리 최적화",
            "크로스 브라우저 호환성 이슈 해결"
          ],
          screenshots: [
            "https://example.com/screenshot1.jpg",
            "https://example.com/screenshot2.jpg"
          ]
        }
      }
    ]
  },
  // ... 다른 회사 데이터
]; 