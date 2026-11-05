# Yoonho-Lee-AI4Science.github.io

Personal homepage & blog → https://yoonho-lee-ai4science.github.io

## 어디를 고치면 되나요?

| 바꿀 내용 | 파일 |
|---|---|
| 소개글, 연락처, News, Education, Experience, Service | `index.html` (`TODO` 표시된 곳) |
| 논문 목록 / 필터 주제 | `js/publications.js` |
| 프로필 사진 | `img/profile.jpg` (3:4 비율 권장) |
| 논문 썸네일 | `img/papers/*.png` (16:10 비율 권장) |
| 학교/회사 로고 | `img/logos/*.png` |
| CV | `files/CV.pdf` |
| 색상 / 폰트 | `css/main.css` 맨 위 `:root` 변수 (`--accent` 등) |
| 블로그 글 | `_posts/YYYY-MM-DD-title.md` 추가 |

## 로컬 미리보기

```bash
# 메인 페이지만 (블로그 제외)
python3 -m http.server 8000   # → http://localhost:8000

# 블로그 포함 전체 (Jekyll 필요)
gem install --user-install jekyll && jekyll serve
```

## 배포

`main` 브랜치에 push 하면 GitHub Pages가 자동으로 빌드/배포합니다
(Settings → Pages → Source: *Deploy from a branch*, `main` / root).
