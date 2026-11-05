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
 *    venue    (필수) 학회/저널 이름, 예: "NeurIPS 2025"
 *    year     (필수) 정렬용 연도
 *    topics   필터용 태그 배열, 예: ["ai4sci"]
 *    image    썸네일 경로 (img/papers/xxx.png). 없으면 생략
 *    badges   강조 배지 배열, 예: ["Oral"], ["Spotlight"]
 *    selected true면 "Selected" 필터에 표시
 *    links    { paper, arxiv, code, project, slides, poster, bibtex } 중 원하는 것만
 *    tldr     한 줄 요약 (선택)
 *
 *  ※ 아래 목록은 Google Scholar에서 가져온 것이라 저자 이름이 이니셜로 되어 있습니다.
 *    링크(paper/code)와 썸네일은 직접 채워주세요.
 */

const ME = ["Yoonho Lee", "Y Lee"]; // 굵게 표시할 본인 이름 (표기 변형이 있으면 추가)

const TOPICS = [
  { key: "all",      label: "All" },
  { key: "selected", label: "Selected" },
  { key: "ai4sci",   label: "AI for Science" },
  { key: "graph",    label: "Graph Learning" },
  { key: "other",    label: "Others" },
];

const PUBLICATIONS = [
  // ---------------- 2026 ----------------
  {
    title: "scTrilemma: Balancing Identity, Invariance, and Fidelity in Single-Cell Representation Learning",
    authors: "Y Oh, Y Lee, J Lee, N Lee, SY Hwang, Y Piao, H Kim, S Kim, J Lim, et al.",
    venue: "arXiv preprint",
    year: 2026,
    topics: ["ai4sci"],
    links: { arxiv: "https://arxiv.org/abs/2609.38840" },
  },
  {
    title: "Screening Lipid Nanoparticles through Structure-Ratio Alignment",
    authors: "Y Lee, Y Oh, H Choi, C Park",
    venue: "bioRxiv preprint",
    year: 2026,
    topics: ["ai4sci"],
    selected: true,
    links: { paper: "https://doi.org/10.1101/2026.07.08.737142" },
  },

  // ---------------- 2025 ----------------
  {
    title: "Disentangling Hyperedges through the Lens of Category Theory",
    authors: "Y Lee, J Lee, S Seo, S Kim, Y Kim, C Park",
    venue: "NeurIPS 2025",
    year: 2025,
    topics: ["graph", "ai4sci"],
    selected: true,
  },
  {
    title: "Subgraph Federated Learning for Local Generalization",
    authors: "S Kim, Y Lee, Y Oh, N Lee, S Yun, J Lee, S Kim, C Yang, C Park",
    venue: "ICLR 2025",
    year: 2025,
    topics: ["graph"],
  },
  {
    title: "Target Circuit Matching in Large-Scale Netlists Using GNN-Based Region Prediction",
    authors: "S Seo, J Seo, Y Lee, D Kim, H Shin, B Sung, C Park",
    venue: "ICCAD 2025",
    year: 2025,
    topics: ["graph"],
  },
  {
    title: "Capturing Functional Context of Genetic Pathways through Hyperedge Disentanglement",
    authors: "Y Lee, J Lee, S Seo, S Kim, Y Kim, C Park",
    venue: "ICLR 2025 Workshop on Machine Learning for Genomics Explorations (MLGenX)",
    year: 2025,
    topics: ["ai4sci", "graph"],
  },

  // ---------------- 2024 ----------------
  {
    title: "Self-Explainable Temporal Graph Networks based on Graph Information Bottleneck",
    authors: "S Seo, S Kim, J Jung, Y Lee, C Park",
    venue: "KDD 2024",
    year: 2024,
    topics: ["graph"],
  },

  // ---------------- 2021 ----------------
  {
    title: "IVIST: Interactive Video Search Tool in VBS 2021",
    authors: "Y Lee, H Choi, S Park, YM Ro",
    venue: "MMM 2021",
    year: 2021,
    topics: ["other"],
  },
];
