# 케이벨로 메인 페이지 클론

후기 카드는 왼쪽 아래·오른쪽 위로 자동 순환하며, 마우스 드래그와 모바일 터치로 위치를 직접 조절할 수 있습니다. 놓은 위치에서 자동 순환이 이어지고, 드래그 직후에는 카드 상세가 잘못 열리지 않도록 처리합니다.

후기 영역은 실제 SNS 썸네일 7개와 공개 게시물 설명의 한국어 요약으로 변경했습니다. 기존 두 열·엇갈린 카드·크림색/노란색 디자인을 유지하며, 외부 링크 없이 카드 상세와 MORE 모아보기로 열립니다. `reviews.js`에서 후기 데이터를 관리합니다. 영상 전체 발언을 전사한 내용은 아니며, 확인되지 않은 평점·맛 평가를 추가하지 않았습니다. 모아보기의 맛별 메모 5종은 사용자가 제공한 별도 참고 이미지 기준입니다.

현재 화면은 [BHC 메인](https://www.bhc.co.kr/main)을 참고해 노란색·갈색, NanumSquareNeo 글꼴, 둥근 카드와 버튼 중심으로 변경했습니다. `theme.css`가 기본 Figma 스타일 뒤에서 적용됩니다.

첫 번째 카드 영역은 요청한 Whittaker’s 초콜릿 4종으로 교체했습니다. 공식 제품 이미지, 제품명·용량과 한국어 요약을 표시하고, 상세 대화상자에서 공식 제품 페이지로 이동합니다. 가격은 표시하지 않습니다. 출처: [Whittaker’s 제품 목록](https://www.whittakers.co.nz/en_WW/products).

두 번째 카드 영역도 Chocolate Pods® 125g Pouch, White Chocolate Sante, Creamy Milk Squares, Creamy Milk Pips로 교체했습니다. 모든 8개 제품의 상세보기는 공식 설명을 한국어로 요약하며 공식 제품 페이지로 연결됩니다.

`index.html`을 브라우저에서 열면 실행됩니다. 별도 설치와 빌드가 필요하지 않습니다.

- `index.html`: 의미 있는 HTML로 구성한 메인 화면
- `styles.css`: 디자인 토큰, 데스크톱 및 모바일 스타일
- `theme.css`: BHC 분위기의 색상·글꼴·레이아웃 및 모바일 보완
- `script.js`: 메뉴·언어 안내·카드 상세·목록·후기·FAQ·공지 대화상자
- `assets/`: Figma 원본 사진·SVG 및 로컬 글꼴
- `design-tokens.md`: 현재 화면의 디자인 값 및 기존 참고 가이드
- `project.md`: 구현 지침
- `verification/`: 브라우저 검증 페이지와 화면 캡처

원본: [Figma 2134:1613](https://www.figma.com/design/zgv8NpDMlnYMgPNxKVXqiO/?node-id=2134-1613)

1920px 원본 기준으로 구현했으며, 767px 이하에서는 모바일용 레이아웃을 적용합니다. 카드와 후기의 상세보기는 Figma에 제공된 정보만 표시합니다. 회원 인증·예약·결제 서버는 연결하지 않았습니다. 히어로 양쪽 화살표는 여행·행사 섹션으로 이동합니다. 별도 배너 슬라이드 이미지는 제공되지 않았습니다.

Pretendard는 공식 배포본을 로컬에서 사용합니다. [공식 글꼴 라이선스](https://github.com/orioncactus/pretendard/blob/v1.3.9/LICENSE)를 참고하세요. 하단 장식 글꼴 Leelawadee가 없는 환경에서는 Arial로 대체됩니다.

최신 BHC 테마는 데스크톱과 390px 모바일 브라우저에서 자산 56개 로드, 가로 넘침, 메뉴·상세·목록·후기·FAQ·언어 동작을 확인했습니다. 결과는 `verification/theme-desktop-check.html`, `verification/theme-mobile-check.html`에 있습니다.
# -5
# CloneCoding5
