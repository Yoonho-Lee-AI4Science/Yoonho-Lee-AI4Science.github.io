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
 *    venue    (필수) 학회 이름. 여러 곳이면 배열: ["NeurIPS 2026", "GenAI4Health@NeurIPS 2026"]
 *    year     (필수) 정렬용 연도
 *    topics   필터용 태그 배열, 예: ["vcell", "graph"]  (TOPICS의 key)
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
  { key: "preprint", label: "Preprints" },  // 아직 학회/저널 미게재 논문: topics에 "preprint" 추가
];

const PUBLICATIONS = [
  // ======================= Conferences =======================
  {
    title: "Screening Lipid Nanoparticles through Structure-Ratio Alignment",
    authors: "Yoonho Lee, Yunhak Oh, Hoyoung Choi, Chanyoung Park",
    venue: "NeurIPS 2026",
    year: 2026,
    topics: ["dds"],
    image: "img/papers/strata.png",
    links: { paper: "https://www.biorxiv.org/content/10.64898/2026.07.08.737142v2.abstract", code: "https://github.com/Yoonho-Lee-AI4Science/STRATA" },
  },
  {
    title: "scTrilemma: Balancing Identity, Invariance, and Fidelity in Single-Cell Representation Learning",
    authors: "Yunhak Oh, Yoonho Lee, Junseok Lee, Namkyeong Lee, Sangyeon Hwang, Yinhua Piao, Hyomin Kim, Seonghwan Kim, Jaechang Lim, Wooyoun Kim, Sungsoo Ahn, Chanyoung Park",
    venue: ["NeurIPS 2026", "GenAI4Health@NeurIPS 2026"],
    year: 2026,
    topics: ["vcell"],
    image: "img/papers/sctrilemma.png",
    links: { paper: "https://arxiv.org/abs/2609.38840", code: "https://github.com/yunhak0/scTrilemma" },
  },
  {
    title: "Disentangling Hyperedges through the Lens of Category Theory",
    authors: "Yoonho Lee, Junseok Lee, Sangwoo Seo, Sungwon Kim, Yeongmin Kim, Chanyoung Park",
    venue: "NeurIPS 2025",
    year: 2025,
    topics: ["graph"],
    image: "img/papers/natural-hnn.png",
    links: { paper: "https://arxiv.org/abs/2510.16289", code: "https://github.com/Yoonho-Lee-AI4Science/Natural-HNN" },
  },
  {
    title: "Target Circuit Matching in Large-Scale Netlists using GNN-Based Region Prediction",
    authors: "Sangwoo Seo, Jimin Seo, Yoonho Lee, Donghyeon Kim, Hyejin Shin, Banghyun Sung, Chanyoung Park",
    venue: "ICCAD 2025",
    year: 2025,
    topics: ["etc"],
    image: "img/papers/circuit-matching.png",
    links: { paper: "https://arxiv.org/abs/2507.19518", code: "https://github.com/sang-woo-seo/Circuit-matching-GNN" },
  },
  {
    title: "Subgraph Federated Learning for Local Generalization",
    authors: "Sungwon Kim, Yoonho Lee, Yunhak Oh, Namkyeong Lee, Sukwon Yun, Junseok Lee, Sein Kim, Carl Yang, Chanyoung Park",
    venue: "ICLR 2025",
    year: 2025,
    topics: ["graph"],
    image: "img/papers/fedlog-iclr.png",
    badges: ["Oral · top 1.8%"],
    links: { paper: "https://arxiv.org/abs/2503.03995", code: "https://github.com/sung-won-kim/FedLoG" },
  },
  {
    title: "Self-Explainable Temporal Graph Networks based on Graph Information Bottleneck",
    authors: "Sangwoo Seo, Sungwon Kim, Jihyeong Jung, Yoonho Lee, Chanyoung Park",
    venue: "KDD 2024",
    year: 2024,
    topics: ["graph"],
    image: "img/papers/tgib.png",
    links: { paper: "https://arxiv.org/abs/2406.13214", code: "https://github.com/sang-woo-seo/TGIB" },
  },
  {
    title: "IVIST: Interactive Video Search Tool in VBS 2021",
    authors: "Yoonho Lee*, Heeju Choi*, Sungjune Park, YongMan Ro",
    venue: "MMM 2021",
    year: 2021,
    topics: [],
    links: { paper: "https://dl.acm.org/doi/10.1007/978-3-030-67835-7_39" },
  },

  // ======================= Workshops =======================
  {
    title: "Capturing Functional Context of Genetic Pathways through Hyperedge Disentanglement",
    authors: "Yoonho Lee, Junseok Lee, Sangwoo Seo, Sungwon Kim, Yeongmin Kim, Chanyoung Park",
    venue: "MLGenX@ICLR 2025",
    year: 2025,
    topics: ["vcell"],
    image: "img/papers/mlgenx-pathways.png",
    links: { paper: "https://openreview.net/forum?id=uZ6B53QSHZ&noteId=xvauqIrm7b", code: "https://github.com/Yoonho-Lee-AI4Science/Natural-HNN" },
  },
  {
    title: "Subgraph Federated Learning for Local Generalization",
    authors: "Sungwon Kim, Yoonho Lee, Yunhak Oh, Namkyeong Lee, Sukwon Yun, Junseok Lee, Sein Kim, Carl Yang, Chanyoung Park",
    venue: "FedKDD@KDD 2024",
    year: 2024,
    topics: ["graph"],
    image: "img/papers/fedlog.png",
    badges: ["Best Paper Award"],
    links: { paper: "https://openreview.net/forum?id=dCrqPTrF7y", code: "https://github.com/sung-won-kim/FedLoG" },
  },
];
