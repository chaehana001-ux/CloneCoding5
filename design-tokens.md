# 디자인 토큰 — 참고 가이드 및 케이벨로

## 최신 테마: BHC 분위기 적용

참고: [BHC 메인](https://www.bhc.co.kr/main). `theme.css`가 아래의 기존 Figma 토큰보다 우선합니다.

| 토큰 | 값 | 용도 |
| --- | --- | --- |
| `--color-primary` | `#FFC700` | 메인 노란색, 상품 섹션·버튼 |
| `--color-orange` | `#FFC62D` | 노란색 보조 포인트 |
| `--color-brown`, `--color-ink` | `#4E352A` | 제목·본문·내비게이션 |
| `--color-brown-deep` | `#3C1D0E` | 진한 제목·푸터·TOP |
| `--color-price` | `#8B5E3C` | 갈색 보조 포인트 |
| `--color-surface`, `--color-cream` | `#FFF8E9` | 따뜻한 크림색 배경 |
| `--color-yellow-light` | `#FFE9A5` | 연한 노란색 |

BHC 공개 CSS에서 확인한 본문 NanumSquareNeo와 내비게이션 Pretendard 조합을 사용합니다. NanumSquareNeo는 Regular(400), Bold(600~700), Heavy(800~900) 로컬 WOFF2를 사용합니다. 제목은 900 굵기, 둥근 모서리는 데스크톱 26~36px, 모바일 16~22px이며, 카드 호버 시 가볍게 떠오릅니다. 크림색 배경과 반응형 값은 케이벨로 콘텐츠에 맞춰 조정한 값입니다.

다운로드 출처: [NanumSquareNeo 배포 CSS](https://cdn.jsdelivr.net/gh/moonspam/NanumSquareNeo@1.0/nanumsquareneo.css). BHC의 그래픽·로고·제품 이미지는 가져오지 않았습니다.

## 현재 구현: 케이벨로 메인 페이지

출처: [Figma 2134:1613](https://www.figma.com/design/zgv8NpDMlnYMgPNxKVXqiO/?node-id=2134-1613). 아래 값은 해당 화면의 디자인 컨텍스트 기준입니다. 이후의 iOS News app 가이드는 별도 참고 자료이며 현재 화면과 다른 값은 현재 화면을 우선합니다.

| 용도 | CSS 토큰 | 값 |
| --- | --- | --- |
| 주색 | `--color-primary` | `#00A1E9` |
| 보조색 | `--color-lime` | `#8FC31F` |
| 가격·서울 배지 | `--color-price` | `#FF5F6D` |
| TOP·해외 배지 | `--color-orange` | `#F39800` |
| 본문 | `--color-ink` | `#000000` |
| 보조 텍스트 | `--color-muted` | `#999999` |
| 후기 배경 | `--color-surface` | `#F3FBFF` |
| 국내 배지 | — | `#30BFFF` |
| 경남 배지 | — | `#FAD414` |
| 콘텐츠 너비 | `--content` | 기준 1480px |

본문 글꼴은 로컬 `PretendardVariable.woff2`이며 100~900 굵기를 지원합니다. 공식 [Pretendard 저장소](https://github.com/orioncactus/pretendard)의 SIL Open Font License를 따릅니다. 하단 영문 장식은 Leelawadee Bold, 미설치 시 Arial로 표시합니다.

| 텍스트 | 기준 크기 / 굵기 / 행간 |
| --- | --- |
| 히어로 제목 | 80px / 700 / 1.3 |
| 섹션 제목 | 60px / 800 / 1.5 |
| 후기 제목 | 60px / 800 / 1.3 |
| 브랜드 제목 | 40px / 500~800 / 1.5 |
| 목록 제목·가격 | 30px / 700~800 / 1 |
| 상품명 | 23px / 700 / 1 |
| 섹션 소개 | 22px / 400 / 1.5 |
| 일정·내비게이션 | 18px / 400~800 |
| VIEW MORE | 16px / 700 / 1.5 |

1920px 화면 기준: 헤더 80px, 카테고리 영역 158px(원본의 1px 경계 포함), 히어로 848px, 카드 간격 약 46.984px, 카드 이미지 약 334.762px, 사진 모서리 10px, 후기 카드 모서리 20px, 알약 버튼 높이 50px. 모바일 분기점 767px과 2열 배치는 원본에 없는 구현상 반응형 보완입니다.

---

# 참고: iOS News app 스타일 가이드

출처: [Figma sample 참고 · 2134:2850](https://www.figma.com/design/zgv8NpDMlnYMgPNxKVXqiO/?node-id=2134-2850)

원본은 `900 × 2841px`의 단일 이미지 레이어(`2134:2851`)입니다. 아래 값은 이미지에 표기된 내용을 전사한 것으로, Figma Variables에서 추출한 값이 아닙니다. 행간, 자간, 폰트 파일, 아이콘 벡터는 제공되지 않았습니다.

## 글꼴

| 대상 | 글꼴 | 규칙 |
| --- | --- | --- |
| 국문 | Noto Sans CJK KR | 예시 Regular/Bold 18px |
| 영문·숫자 | DIN Pro | 국문보다 1~2px 크게, 예시 20px |
| 공통 | — | Baseline 기준 정렬 |

## 텍스트 스타일

| 스타일 | 크기 | 굵기 | 추가 속성 |
| --- | --- | --- | --- |
| Headline 1 | 56px | Bold / 700 | — |
| Headline 2 | 48px | Bold / 700 | Condensed, Italic |
| Headline 3 | 38px | Bold / 700 | Condensed, Italic |
| Headline 4 | 25px | Medium / 500 | Condensed, Italic |
| Headline 5 | 18px | Bold / 700 | — |
| Title | 14px | Medium / 500 | — |
| Price 1 | 14px | Bold / 700 | — |
| Price 2 | 14px | Regular / 400 | — |
| Price 3 | 14px | Regular / 400 | 취소선 |
| Tag | 12px | Bold / 700 | — |
| Subtitle | 12px | Medium / 500 | — |
| Caption 1 | 12px | Regular / 400 | — |
| Caption 2 | 11px | Medium / 500 | — |

숫자 굵기 400/500/700은 Regular/Medium/Bold의 CSS 매핑입니다. Condensed는 해당 글꼴 너비 변형을 의미하며 임의의 가로 축소 비율을 지정하지 않습니다.

## 기본 색상

| 원본 명칭 | CSS 토큰 | HEX |
| --- | --- | --- |
| Gray 0 | `--color-gray-0` | `#FFFFFF` |
| Gray 1 | `--color-gray-1` | `#F3F3F3` |
| Gray 2 | `--color-gray-2` | `#E9E9E9` |
| Gray 3 | `--color-gray-3` | `#A6A6A6` |
| Gray 4 | `--color-gray-4` | `#787878` |
| Gray 5 | `--color-gray-5` | `#575757` |
| Black | `--color-black` | `#000000` |
| Red | `--color-red` | `#FF5353` |

## 용도별 색상

| 용도 | 원본 표기 | HEX 표기 기준 매핑 |
| --- | --- | --- |
| Background / BTN 1 | Gray 1 · #F3F3F3 | `--color-gray-1` |
| Background / BTN 2 | Gray 2 · #E9E9E9 | `--color-gray-2` |
| Line | Gray 1 · #F3F3F3 | `--color-gray-1` |
| Text 1 | Black · #000000 | `--color-black` |
| Text 2 | Gray 3 · #787878 | `--color-gray-4` |

주의: Text 2의 명칭은 Gray 3이지만 HEX는 기본 팔레트의 Gray 4와 같습니다. BTN 2의 실제 견본도 표기 HEX보다 어둡게 보입니다. 이 문서는 HEX 표기를 기준으로 매핑하며 원본 이미지의 모순을 임의로 수정하지 않습니다.

## 간격

| CSS 토큰 | 값 |
| --- | --- |
| `--space-16` | 16px |
| `--space-24` | 24px |
| `--space-36` | 36px |
| `--space-44` | 44px |
| `--space-50` | 50px |

## 아이콘과 구현 범위

쇼핑백, 검색, 사용자, 메뉴, 하트(두 크기), 재생, 이전, 다음이 보입니다. 개별 아이콘 파일과 크기·선 두께 토큰은 제공되지 않았습니다.

이전 스타일 가이드의 원본은 `assets/style-guide.png`에 보존했습니다. 현재 `index.html`은 케이벨로 메인 화면으로 교체되었습니다.
