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
 *    topics   필터용 태그 배열, 예: ["vcell", "graph"]  (TOPICS의 key)
 *    workshop true면 "Workshop" 태그 표시
 *    image    썸네일 경로 (img/papers/xxx.png). 없으면 생략
 *    badges   강조 배지 배열, 예: ["Oral"], ["Spotlight"]
 *    links    { paper, arxiv, code, project, slides, poster, bibtex } 중 원하는 것만
 *    tldr     한 줄 요약 (선택)
 */

const ME = ["Yoonho Lee"]; // 굵게 표시할 본인 이름

const TOPICS = [
  { key: "all",    label: "All" },
  { key: "vcell",  label: "Virtual Cell" },
  { key: "nad",    label: "Nucleic Acid Design" },
  { key: "dds",    label: "Drug Delivery System" },
  { key: "graph",  label: "Graphs & Geometric Deep Learning" },
  { key: "etc",    label: "AI4Science (ETC)" },
];

const PUBLICATIONS = [
  // ======================= Conferences =======================
  {
    title: "Screening Lipid Nanoparticles through Structure-Ratio Alignment",
    authors: "Yoonho Lee, Yunhak Oh, Hoyoung Choi, Chanyoung Park",
    venue: "NeurIPS 2026",
    year: 2026,
    topics: ["dds"],
    links: { paper: "https://doi.org/10.1101/2026.07.08.737142" },
  },
  {
    title: "scTrilemma: Balancing Identity, Invariance, and Fidelity in Single-Cell Representation Learning",
    authors: "Yunhak Oh, Yoonho Lee, Junseok Lee, Namkyeong Lee, Sangyeon Hwang, Yinhua Piao, Hyomin Kim, Seonghwan Kim, Jaechang Lim, Wooyoun Kim, Sungsoo Ahn, Chanyoung Park",
    venue: "NeurIPS 2026",
    year: 2026,
    topics: ["vcell"],
    links: { arxiv: "https://arxiv.org/abs/2609.38840" },
  },
  {
    title: "Disentangling Hyperedges through the Lens of Category Theory",
    authors: "Yoonho Lee, Junseok Lee, Sangwoo Seo, Sungwon Kim, Yeongmin Kim, Chanyoung Park",
    venue: "NeurIPS 2025",
    year: 2025,
    topics: ["graph", "etc"],
  },
  {
    title: "Target Circuit Matching in Large-Scale Netlists using GNN-Based Region Prediction",
    authors: "Sangwoo Seo, Jimin Seo, Yoonho Lee, Donghyeon Kim, Hyejin Shin, Banghyun Sung, Chanyoung Park",
    venue: "ICCAD 2025",
    year: 2025,
    topics: ["graph"],
  },
  {
    title: "Subgraph Federated Learning for Local Generalization",
    authors: "Sungwon Kim, Yoonho Lee, Yunhak Oh, Namkyeong Lee, Sukwon Yun, Junseok Lee, Sein Kim, Carl Yang, Chanyoung Park",
    venue: "ICLR 2025",
    year: 2025,
    topics: ["graph"],
    badges: ["Oral · top 1.8%"],
  },
  {
    title: "Self-Explainable Temporal Graph Networks based on Graph Information Bottleneck",
    authors: "Sangwoo Seo, Sungwon Kim, Jihyeong Jung, Yoonho Lee, Chanyoung Park",
    venue: "KDD 2024",
    year: 2024,
    topics: ["graph"],
  },
  {
    title: "IVIST: Interactive Video Search Tool in VBS 2021",
    authors: "Yoonho Lee*, Heeju Choi*, Sungjune Park, YongMan Ro",
    venue: "MMM 2021",
    year: 2021,
    topics: [],
  },

  // ======================= Workshops =======================
  {
    title: "scTrilemma: Balancing Identity, Invariance, and Expression in Single-Cell Representation Learning",
    authors: "Yunhak Oh, Yoonho Lee, Junseok Lee, Namkyeong Lee, Sangyeon Hwang, Yinhua Piao, Hyomin Kim, Seonghwan Kim, Jaechang Lim, Wooyoun Kim, Sungsoo Ahn, Chanyoung Park",
    venue: "NeurIPS 2026 Workshop on GenAI for Health",
    year: 2026,
    topics: ["vcell"],
    workshop: true,
  },
  {
    title: "Capturing Functional Context of Genetic Pathways through Hyperedge Disentanglement",
    authors: "Yoonho Lee, Junseok Lee, Sangwoo Seo, Sungwon Kim, Yeongmin Kim, Chanyoung Park",
    venue: "ICLR 2025 Workshop on Machine Learning for Genomics Explorations (MLGenX)",
    year: 2025,
    topics: ["graph", "etc"],
    workshop: true,
  },
  {
    title: "Subgraph Federated Learning for Local Generalization",
    authors: "Sungwon Kim, Yoonho Lee, Yunhak Oh, Namkyeong Lee, Sukwon Yun, Junseok Lee, Sein Kim, Carl Yang, Chanyoung Park",
    venue: "KDD 2024 Workshop on Federated Learning for Data Mining and Graph Analytics (FedKDD)",
    year: 2024,
    topics: ["graph"],
    workshop: true,
    badges: ["Best Paper Award"],
  },
];
