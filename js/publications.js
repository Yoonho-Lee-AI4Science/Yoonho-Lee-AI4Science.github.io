/*
 * ============================================================
 *  Publications — 여기만 수정하면 논문 목록이 자동으로 갱신됩니다.
 * ============================================================
 *
 *  TOPICS: 상단 필터 버튼. key는 PUBLICATIONS의 topics 값과 일치해야 합니다.
 *
 *  각 논문 필드:
 *    title    (필수) 논문 제목
 *    authors  (필수) 저자 문자열. 본인 이름은 자동으로 굵게 표시됩니다 (ME 참고).
 *                    공동 1저자는 "*", 교신저자는 "†"를 이름 뒤에 붙이세요.
 *    venue    (필수) 학회/저널 이름, 예: "NeurIPS 2026"
 *    year     (필수) 정렬용 연도
 *    topics   필터용 태그 배열, 예: ["ai4sci"]
 *    image    썸네일 경로 (img/papers/xxx.png). 없으면 생략
 *    badges   강조 배지 배열, 예: ["Oral"], ["Spotlight"]
 *    selected true면 "Selected" 필터에 표시
 *    links    { paper, arxiv, code, project, slides, poster, bibtex } 중 원하는 것만
 *    tldr     한 줄 요약 (선택)
 */

const ME = ["Yoonho Lee"]; // 굵게 표시할 본인 이름 (표기 변형이 있으면 추가)

const TOPICS = [
  { key: "all",      label: "All" },
  { key: "selected", label: "Selected" },
  { key: "ai4sci",   label: "AI for Science" },
  { key: "ml",       label: "Machine Learning" },
];

const PUBLICATIONS = [
  // ---------- 예시 (실제 논문으로 교체하세요) ----------
  {
    title: "Example Paper Title: A Geometric Deep Learning Approach to Molecular Design",
    authors: "Yoonho Lee*, Coauthor One*, Coauthor Two, Advisor Name†",
    venue: "NeurIPS 2026",
    year: 2026,
    topics: ["ai4sci"],
    badges: ["Spotlight"],
    selected: true,
    image: "img/papers/example1.png",
    links: { paper: "#", arxiv: "#", code: "#" },
    tldr: "One-sentence summary of the key idea and result.",
  },
  {
    title: "Another Example Paper on Representation Learning",
    authors: "Coauthor One, Yoonho Lee, Advisor Name",
    venue: "ICML 2026",
    year: 2026,
    topics: ["ml"],
    links: { arxiv: "#" },
  },
];
