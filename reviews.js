const chocolateReviews = [
    {
        id: 'berry-comparison',
        image: 'assets/review-instagram-1.jpg',
        title: '베리의 새콤함, 아몬드의 고소함',
        tag: '베리 & 비스킷 · 아몬드 골드',
        author: 'imtyulo',
        platform: 'Instagram',
        summary:
            '딸기 젤리와 쿠키의 새콤달콤한 조합, 진한 베리 풍미, 아몬드의 고소함을 비교한 후기.',
        detail: '베리 & 비스킷은 딸기 젤리와 쿠키가 밀크 초콜릿에 어우러져 새콤달콤하고 색다른 식감을 준다고 평가했습니다. 베리 포레스트는 체리·베리 풍미가 더 진하고 젤리가 이에 붙는 느낌을 언급했습니다. 아몬드 골드는 아몬드가 듬뿍 들어 고소하고 무난하게 즐기기 좋다는 반응입니다. 세 맛의 선호는 취향에 따라 나뉩니다.',
    },
    {
        id: 'berry-asmr',
        image: 'assets/review-instagram-2.jpg',
        title: 'ASMR을 보고 궁금해진 그 초콜릿',
        tag: '베리 & 비스킷',
        author: 'hseoww',
        platform: 'Instagram',
        summary:
            'ASMR 영상을 계기로 구매한 베리 & 비스킷. 직접 먹어보며 남긴 반응을 담은 시식 콘텐츠.',
        detail: '공개 캡션에서 ASMR 크리에이터의 영상을 본 뒤 베리 & 비스킷을 구매했다고 소개했습니다. 짧고 강한 긍정적 반응을 남긴 시식 게시물입니다.',
    },
    {
        id: 'four-flavours',
        image: 'assets/review-instagram-3.jpg',
        title: '네 가지 맛, 나만의 취향 찾기',
        tag: '베리 · 젤리팁 · 아몬드 · 피어',
        author: 'veryong_ee',
        platform: 'Instagram',
        summary:
            '베리 & 비스킷부터 젤리팁, 아몬드 골드, 넬슨 피어 & 마누카 허니까지 네 가지 맛을 한자리에.',
        detail: '베리 & 비스킷, 젤리팁 블록, 아몬드 골드, 넬슨 피어 & 마누카 허니의 네 가지 맛을 먹어보는 콘텐츠입니다. 공개 캡션에서 시식 제품 목록을 확인했습니다.',
    },
    {
        id: 'dessert-review',
        image: 'assets/review-instagram-4.jpg',
        title: '디저트 러버의 휘태커스 탐방',
        tag: '초콜릿 시식',
        author: 'kok_of_ilm',
        platform: 'Instagram',
        summary:
            '화제의 휘태커스를 직접 만나본 디저트 리뷰. 썸네일 속 베리 & 비스킷이 눈길을 끕니다.',
        detail: '디저트 리뷰를 소개하는 공개 캡션과 베리 & 비스킷 제품을 보여주는 썸네일을 확인했습니다. 게시물은 휘태커스 시식 리뷰로 소개되어 있습니다.',
    },
    {
        id: 'coconut-favourite',
        image: 'assets/review-instagram-5.jpg',
        title: '다크 초콜릿 취향에게 의외의 코코넛',
        tag: '베리 & 비스킷 · 코코넛',
        author: 'hwituru.archive',
        platform: 'Instagram',
        summary:
            '여러 맛을 먹어본 뒤 베리 & 비스킷과 코코넛을 꼽은 후기. 단맛의 체감은 취향에 따라 달라요.',
        detail: '호주에서 네 가지 이상의 맛을 먹어봤다고 소개합니다. 평소 다크 초콜릿을 즐겨 먹는 작성자는 다른 맛이 다소 달게 느껴졌다고 했습니다. 그중 베리 & 비스킷은 맛있었고 코코넛은 의외로 좋았다는 반응을 남겼습니다. 개인의 단맛 선호에 따라 선택이 달라질 수 있음을 보여주는 후기입니다.',
    },
    {
        id: 'jelly-tip',
        image: 'assets/review-youtube.jpg',
        title: '젤리팁이 궁금했던 초콜릿 러버',
        tag: '젤리팁',
        author: '휘태커스 초콜릿 리뷰(젤리팁)',
        platform: 'YouTube Shorts',
        summary: '다른 시식 영상을 보고 주문한 휘태커스. 이번 짧은 리뷰에서는 젤리팁을 소개합니다.',
        detail: '공개 제목과 영상 설명에서 젤리팁 리뷰임을 확인했습니다. 다른 크리에이터의 영상을 보고 초콜릿을 주문했으며, 이번 게시물에는 젤리팁 후기를 담았다고 설명합니다.',
    },
    {
        id: 'family-tasting',
        image: 'assets/review-tiktok.jpg',
        title: '함께 맛보는 화제의 초콜릿',
        tag: '휘태커스 시식',
        author: '재술아빠와 개공주 둘',
        platform: 'TikTok',
        summary: '베리 & 비스킷을 들고 함께 등장한 시식 콘텐츠. 화제의 휘태커스를 직접 만나봅니다.',
        detail: '재술아빠와 개공주 둘 계정의 공개 게시물 설명은 휘태커스 초콜릿 후기입니다. 썸네일에서 베리 & 비스킷 제품과 함께 등장한 모습을 확인했습니다.',
    },
];

// Taste notes supplied in the user's reference image; separate from post summaries.
const tasteNotes = [
    {
        title: '피넛버터 밀크',
        text: '꾸덕한 피넛버터의 진한 고소함이 포인트. 피넛버터를 좋아하는 입맛에 잘 맞는 맛으로 정리했어요.',
    },
    {
        title: '다크 초콜릿 86% / 92%',
        text: '높은 카카오 함량에서도 부드러운 질감과 고소함을 언급한 후기 메모. 진한 카카오를 좋아한다면 눈여겨볼 맛이에요.',
    },
    {
        title: '씨솔트 카라멜',
        text: '단맛과 짭짤함의 균형이 매력. 카라멜이 살짝 늘어나 손에 묻을 수 있다는 식감 메모도 있어요.',
    },
    {
        title: '넬슨 피어 & 마누카 허니',
        text: '배 조각과 마누카 허니의 은은한 달콤함이 특징으로 언급돼요. 과일과 꿀의 조합을 찾는 분들을 위한 맛별 메모예요.',
    },
    {
        title: '크리미 밀크 / 미니슬랩',
        text: '우유의 부드럽고 고소한 풍미를 좋아한다면 살펴볼 조합. 한 번에 나누어 즐기는 형태도 매력으로 정리했어요.',
    },
];

function showChocolateReview(id) {
    const review = chocolateReviews.find((item) => item.id === id);
    if (!review) return;
    delete dialog.dataset.view;
    openDialog(
        '<img class="dialog-image review-dialog-image" src="' +
            review.image +
            '" alt="' +
            escapeHTML(review.author) +
            '의 초콜릿 후기 썸네일"><p class="review-dialog-tag">' +
            escapeHTML(review.tag) +
            '</p><h2 id="dialog-title">' +
            escapeHTML(review.title) +
            '</h2><p class="review-dialog-author">' +
            escapeHTML(review.platform) +
            ' · ' +
            escapeHTML(review.author) +
            '</p><p>' +
            escapeHTML(review.detail) +
            '</p><p class="review-editorial-note">공개 게시물 설명을 바탕으로 정리한 후기 요약입니다.</p><button class="dialog-action" data-review-back>전체 후기 보기</button>'
    );
    content.querySelector('[data-review-back]').addEventListener('click', showAllChocolateReviews);
}

function showAllChocolateReviews() {
    dialog.dataset.view = 'reviews';
    openDialog(
        '<h2 id="dialog-title">휘태커스 후기 모아보기</h2><p>각자의 취향으로 만난 초콜릿 이야기.</p><div class="review-gallery">' +
            chocolateReviews
                .map(
                    (review) =>
                        '<button class="review-gallery-card" data-review-open="' +
                        review.id +
                        '"><img src="' +
                        review.image +
                        '" alt="' +
                        escapeHTML(review.author) +
                        '의 후기 썸네일"><span><strong>' +
                        escapeHTML(review.title) +
                        '</strong><span>' +
                        escapeHTML(review.summary) +
                        '</span><small>' +
                        escapeHTML(review.platform) +
                        ' · ' +
                        escapeHTML(review.author) +
                        '</small></span></button>'
                )
                .join('') +
            '</div><section class="taste-notes"><h3>맛별 후기 포인트</h3>' +
            tasteNotes
                .map(
                    (note) =>
                        '<details><summary>' +
                        escapeHTML(note.title) +
                        '</summary><p>' +
                        escapeHTML(note.text) +
                        '</p></details>'
                )
                .join('') +
            '</section>'
    );
    content
        .querySelectorAll('[data-review-open]')
        .forEach((button) =>
            button.addEventListener('click', () => showChocolateReview(button.dataset.reviewOpen))
        );
}

document
    .querySelectorAll('[data-review]')
    .forEach((button) =>
        button.addEventListener('click', () => showChocolateReview(button.dataset.review))
    );
document.querySelector('[data-review-all]').addEventListener('click', showAllChocolateReviews);
dialog.addEventListener('close', () => {
    delete dialog.dataset.view;
});

// Repeat full groups on both sides so the loop never reveals an empty column.
let reviewMotionPaused = false;
const motionToggle = document.createElement('button');
motionToggle.type = 'button';
motionToggle.className = 'review-motion-toggle';
motionToggle.setAttribute('aria-pressed', 'false');
document.querySelector('.reviews-heading').append(motionToggle);
const reviewMotionTracks = [];
document.querySelectorAll('.review-column').forEach((column) => {
    const originals = [...column.children];
    const track = document.createElement('div');
    track.className = 'review-scroll-track';
    const group = document.createElement('div');
    group.className = 'review-scroll-group';
    originals.forEach((card) => group.append(card));
    const makeCopy = () => {
        const copy = group.cloneNode(true);
        copy.setAttribute('aria-hidden', 'true');
        copy.dataset.reviewCopy = '';
        copy.querySelectorAll('button').forEach((button) => {
            button.tabIndex = -1;
            button.dataset.reviewDuplicate = '';
        });
        return copy;
    };
    track.append(makeCopy(), group, makeCopy());
    column.append(track);
    track.addEventListener('click', (event) => {
        const card = event.target.closest('[data-review-duplicate]');
        if (card) showChocolateReview(card.dataset.review);
    });
    const state = { column, track, group, animation: null, visible: true, dragging: false, distance: 0, duration: 0 };
    const updatePlayback = () => {
        if (!state.animation) return;
        const paused =
            reviewMotionPaused ||
            state.dragging ||
            !state.visible ||
            document.hidden ||
            dialog.open ||
            column.matches(':focus-within');
        if (paused) state.animation.pause();
        else state.animation.play();
    };
    const measure = () => {
        const progress = state.animation
            ? (Number(state.animation.currentTime || 0) /
                  Number(state.animation.effect.getTiming().duration)) %
              1
            : 0;
        state.animation?.cancel();
        state.animation = null;
        const distance = group.offsetTop - track.firstElementChild.offsetTop;
        if (!distance) return;
        const duration = (distance / (window.innerWidth <= 767 ? 30 : 42)) * 1000;
        state.distance = distance;
        state.duration = duration;
        state.animation = track.animate(
            [
                { transform: 'translateY(' + -distance + 'px)' },
                {
                    transform:
                        'translateY(' +
                        (column.classList.contains('first') ? 0 : -distance * 2) +
                        'px)',
                },
            ],
            { duration, iterations: Infinity, easing: 'linear' }
        );
        state.animation.currentTime = progress * duration;
        updatePlayback();
    };
    column.addEventListener('focusin', updatePlayback);
    column.addEventListener('focusout', () => requestAnimationFrame(updatePlayback));
    let pointer = null;
    let blockClickUntil = 0;
    column.title = '위아래로 드래그해서 후기를 둘러보세요';
    column.addEventListener('dragstart', event => event.preventDefault());
    column.addEventListener('pointerdown', event => {
        if (!event.isPrimary || event.button !== 0 || !state.animation) return;
        pointer = {id: event.pointerId, startY: event.clientY, lastY: event.clientY, moved: false};
        state.dragging = true;
        updatePlayback();
    });
    column.addEventListener('pointermove', event => {
        if (!pointer || pointer.id !== event.pointerId) return;
        if (!pointer.moved && Math.abs(event.clientY - pointer.startY) < 6) return;
        if (!pointer.moved) {
            pointer.moved = true;
            column.setPointerCapture(event.pointerId);
            column.classList.add('is-dragging');
        }
        event.preventDefault();
        const direction = column.classList.contains('first') ? 1 : -1;
        const delta = (event.clientY - pointer.lastY) / (direction * state.distance) * state.duration;
        const nextTime = Number(state.animation.currentTime || 0) + delta;
        state.animation.currentTime = ((nextTime % state.duration) + state.duration) % state.duration;
        pointer.lastY = event.clientY;
    });
    const finishDrag = event => {
        if (!pointer || pointer.id !== event.pointerId) return;
        if (pointer.moved) {
            blockClickUntil = performance.now() + 400;
            if (column.contains(document.activeElement)) document.activeElement.blur();
        }
        pointer = null;
        state.dragging = false;
        column.classList.remove('is-dragging');
        if (column.hasPointerCapture(event.pointerId)) column.releasePointerCapture(event.pointerId);
        updatePlayback();
    };
    column.addEventListener('pointerup', finishDrag);
    column.addEventListener('pointercancel', finishDrag);
    column.addEventListener('lostpointercapture', finishDrag);
    column.addEventListener('pointerleave', event => { if (pointer && !pointer.moved) finishDrag(event); });
    column.addEventListener('click', event => {
        if (performance.now() < blockClickUntil) { event.preventDefault(); event.stopImmediatePropagation(); }
    }, true);
    new ResizeObserver(measure).observe(group);
    reviewMotionTracks.push({ state, measure, updatePlayback });
});
const reviewVisibility = new IntersectionObserver((entries) => {
    reviewMotionTracks.forEach((item) => {
        item.state.visible = entries[0].isIntersecting;
        item.updatePlayback();
    });
});
reviewVisibility.observe(document.querySelector('.reviews'));
motionToggle.addEventListener('click', () => {
    reviewMotionPaused = !reviewMotionPaused;
    motionToggle.setAttribute('aria-pressed', String(reviewMotionPaused));

    reviewMotionTracks.forEach((item) => item.updatePlayback());
});
document.addEventListener('visibilitychange', () =>
    reviewMotionTracks.forEach((item) => item.updatePlayback())
);
new MutationObserver(() => reviewMotionTracks.forEach((item) => item.updatePlayback())).observe(
    dialog,
    { attributes: true, attributeFilter: ['open'] }
);
