const products = [
    {
        "type":  "chocolate",
        "image":  "assets/chocolate-hokey-pokey-block.png",
        "title":  "Hokey Pokey Crunch Block 250g",
        "date":  "250g",
        "region":  "Classic Blocks",
        "description":  "바삭한 허니콤 조각을 부드러운 밀크 초콜릿으로 감싼 넉넉한 250g 블록.",
        "url":  "https://www.whittakers.co.nz/en_WW/products/hokey-pokey-crunch/block-250g"
    },
    {
        "type":  "chocolate",
        "image":  "assets/chocolate-marlborough.png",
        "title":  "Marlborough Sea Salt \u0026 Caramel Brittle Block 100g",
        "date":  "100g",
        "region":  "Specialty Blocks",
        "description":  "말버러 씨솔트와 카라멜 브리틀을 카카오 33% 밀크 초콜릿에 담은 100g 블록.",
        "url":  "https://www.whittakers.co.nz/en_WW/products/marlborough-salt-and-caramel-brittle/block-100g"
    },
    {
        "type":  "chocolate",
        "image":  "assets/chocolate-hokey-pokey-minislab.png",
        "title":  "Hokey Pokey Crunch Minislab",
        "date":  "12개입 · 180g",
        "region":  "Mini Slabs",
        "description":  "바삭한 허니콤 조각과 부드러운 밀크 초콜릿을 함께 나누기 좋은 미니 슬랩.",
        "url":  "https://www.whittakers.co.nz/en_WW/products/hokey-pokey-crunch/minislab"
    },
    {
        "type":  "chocolate",
        "image":  "assets/chocolate-hokey-pokey-slab.png",
        "title":  "Hokey Pokey Crunch Slab",
        "date":  "50g",
        "region":  "Slabs",
        "description":  "허니콤의 바삭함과 크리미한 밀크 초콜릿을 간편하게 즐기는 슬랩.",
        "url":  "https://www.whittakers.co.nz/en_WW/products/hokey-pokey-crunch/slab"
    },
    {
        "type":  "chocolate",
        "image":  "assets/chocolate-pods.png",
        "title":  "Whittaker’s Chocolate Pods® 125g Pouch",
        "date":  "125g",
        "region":  "Gifting",
        "description":  "카카오 33% 밀크 초콜릿 쉘에 헤이즐넛 지안두야 필링을 담은 개별 포장 초콜릿 팟.",
        "url":  "https://www.whittakers.co.nz/en_WW/products/whittakers-chocolate-pods/125g-pouch"
    },
    {
        "type":  "chocolate",
        "image":  "assets/chocolate-white-sante.png",
        "title":  "White Chocolate Sante",
        "date":  "화이트 초콜릿",
        "region":  "Sante",
        "description":  "은은한 바닐라 향을 더한 카카오 28% 화이트 초콜릿의 부드러운 맛.",
        "url":  "https://www.whittakers.co.nz/en_WW/products/white-chocolate/sante"
    },
    {
        "type":  "chocolate",
        "image":  "assets/chocolate-milk-squares.png",
        "title":  "Creamy Milk Squares",
        "date":  "개별 포장",
        "region":  "Squares",
        "description":  "크리미한 밀크 초콜릿을 작은 정사각형으로 즐기는 개별 포장 초콜릿.",
        "url":  "https://www.whittakers.co.nz/en_WW/products/creamy-milk/squares"
    },
    {
        "type":  "chocolate",
        "image":  "assets/chocolate-milk-pips.png",
        "title":  "Creamy Milk Pips",
        "date":  "2kg",
        "region":  "Baking",
        "description":  "베이킹을 위해 만든 카카오 33% 밀크 초콜릿 핍. 다양한 레시피에 사용하기 좋은 2kg 팩.",
        "url":  "https://www.whittakers.co.nz/en_WW/products/creamy-milk/pips"
    }
];
const dialog = document.querySelector('#detail-dialog');
const content = document.querySelector('#dialog-content');
let lastFocus;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function openDialog(markup) {
  content.innerHTML = markup;
  if (!dialog.open) { lastFocus = document.activeElement; dialog.showModal(); }
  document.body.style.overflow = 'hidden';
}
function showProduct(title) {
  const product = products[Number(title)];
  if (!product) return;
  if (product.type === 'chocolate') {
    openDialog('<img class="dialog-image chocolate-dialog-image" src="' + product.image + '" alt="' + escapeHTML(product.title) + '"><h2 id="dialog-title">' + escapeHTML(product.title) + '</h2><p>' + escapeHTML(product.region) + ' · ' + escapeHTML(product.date) + '</p><p>' + escapeHTML(product.description) + '</p><a class="dialog-action" href="' + product.url + '" target="_blank" rel="noopener noreferrer">공식 제품 정보 보기 ↗</a>');
    return;
  }
  openDialog('<img class="dialog-image" src="' + product.image + '" alt="' + escapeHTML(product.title) + '"><h2 id="dialog-title">' + escapeHTML(product.title) + '</h2><p>' + product.region + ' · ' + product.date + '</p><p class="dialog-price">' + product.price + (/\d/.test(product.price) ? '원' : '') + '</p><p>디자인에 표시된 프로그램 정보입니다. 실제 모집 여부와 예약 가능 여부는 고객센터에 문의해 주세요.</p><a class="dialog-action" href="tel:0234464567">고객센터 문의 · 02-3446-4567</a>');
}
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; lastFocus?.focus(); });
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#site-menu');
menu.classList.add('menu-drawer');
menu.setAttribute('role', 'dialog');
menu.setAttribute('aria-modal', 'true');
const menuBackdrop = document.createElement('div');
menuBackdrop.className = 'menu-drawer-backdrop';
menuBackdrop.hidden = true;
menuBackdrop.setAttribute('aria-hidden', 'true');
const menuHead = document.createElement('div');
menuHead.className = 'menu-drawer-head';
menuHead.innerHTML = '<img src="assets/whittakers-logo.svg" alt="Whittaker’s" width="134" height="50"><button type="button" class="menu-drawer-close" aria-label="메뉴 닫기">×</button>';
menu.prepend(menuHead);
document.body.append(menuBackdrop, menu);
function closeSiteMenu() {
  if (menu.hidden) return;
  menu.hidden = true;
  menuBackdrop.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-drawer-open');
  menuButton.focus({preventScroll:true});
}
menuButton.addEventListener('click', () => {
  if (!menu.hidden) { closeSiteMenu(); return; }
  closeChocolateMenu();
  menu.hidden = false;
  menuBackdrop.hidden = false;
  menuButton.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-drawer-open');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    menu.animate([{transform:'translateX(-100%)'},{transform:'translateX(0)'}], {duration:260,easing:'ease-out'});
    menuBackdrop.animate([{opacity:0},{opacity:1}], {duration:260});
  }
  menu.querySelector('.menu-drawer-close').focus({preventScroll:true});
});
menuHead.querySelector('button').addEventListener('click', closeSiteMenu);
menuBackdrop.addEventListener('click', closeSiteMenu);
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeSiteMenu));
menu.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const controls = [...menu.querySelectorAll('a[href],button:not([disabled])')];
  const first = controls[0], last = controls[controls.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeSiteMenu(); document.querySelector('.language-options').hidden = true; document.querySelector('.language').setAttribute('aria-expanded','false'); } });
const languageButton = document.querySelector('.language');
const languageOptions = document.querySelector('.language-options');
languageButton.addEventListener('click', () => { languageOptions.hidden = !languageOptions.hidden; languageButton.setAttribute('aria-expanded', String(!languageOptions.hidden)); });
languageOptions.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
  if (button.lang === 'en') { openDialog('<h2 id="dialog-title">English assistance</h2><p>For information about K-Velo cycling tours, please contact our customer service team.</p><a class="dialog-action" href="mailto:help@naver.com">help@naver.com</a>'); }
  languageOptions.hidden = true; languageButton.setAttribute('aria-expanded','false');
}));
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => showProduct(button.dataset.product)));
document.querySelectorAll('[data-list]').forEach(button => button.addEventListener('click', () => {
  const isTravel = button.dataset.list === 'travel';
  const list = isTravel ? products.slice(0,4) : products.slice(4);
  openDialog('<h2 id="dialog-title">' + (isTravel ? '초콜릿 컬렉션' : '전국 자전거 행사') + '</h2><div class="dialog-list">' + list.map(item => '<button data-detail="' + products.indexOf(item) + '">' + escapeHTML(item.title) + '<br><small>' + escapeHTML(item.date) + (item.price ? ' · ' + escapeHTML(item.price) : '') + '</small></button>').join('') + '</div>');
  content.querySelectorAll('[data-detail]').forEach(item => item.addEventListener('click', () => showProduct(item.dataset.detail)));
}));
document.querySelectorAll('[data-about]').forEach(button => button.addEventListener('click', () => openDialog('<h2 id="dialog-title">이 곳은 케이벨로입니다.</h2><p>자전거 여행의 꿈을 실현하는 곳.<br>모험을 더욱 특별하게 만들어 드리는 곳.</p><p>사람을 행복하게 지구를 건강하게 만드는 자전거 컨텐츠 전문기업입니다.</p><a class="dialog-action" href="tel:0234464567">고객센터 문의</a>')));
document.querySelectorAll('[data-info]').forEach(button => button.addEventListener('click', () => openDialog('<h2 id="dialog-title">' + escapeHTML(button.dataset.info) + '</h2><p>이 클론 페이지에는 계정·예약 서버와 정책 문서가 연결되어 있지 않습니다.</p><p>관련 문의는 고객센터를 이용해 주세요.</p><a class="dialog-action" href="tel:0234464567">02-3446-4567</a>')));
document.querySelectorAll('[data-faq]').forEach(button => button.addEventListener('click', () => {
  closeSiteMenu();
  openDialog('<h2 id="dialog-title">자주 묻는 질문</h2><details open><summary>제품 설명과 용량은 어디서 확인하나요?</summary><p>초콜릿 카드를 누르면 제품 설명과 용량을 볼 수 있습니다. 상세 화면의 공식 제품 정보 버튼에서 Whittaker’s 제품 페이지로 이동할 수 있습니다.</p></details><details><summary>이 사이트에서 바로 구매할 수 있나요?</summary><p>현재 페이지는 제품과 후기를 소개하는 사이트입니다. 구매·결제 기능은 제공하지 않습니다.</p></details>');
}));

const chocolateMenuButton = document.querySelector('.chocolate-menu-button');
const brandPanels = {
  story: {title:'휘태커스 이야기',content:'<p>1896년부터 이어온 뉴질랜드 초콜릿 브랜드, Whittaker’s.</p><p>클래식 밀크 초콜릿부터 과일·견과류·카라멜을 더한 다양한 조합까지, 이곳에서는 HANA의 시선으로 초콜릿 컬렉션과 후기를 소개합니다.</p>'},
  beans: {title:'빈 투 바',content:'<p>카카오빈에서 한 조각의 초콜릿이 되기까지.</p><p>카카오를 볶고 곱게 갈아 다른 재료와 섞은 뒤, 정련과 템퍼링을 거쳐 초콜릿의 맛과 질감을 완성합니다.</p><p>카카오의 풍미와 우유의 부드러움, 다양한 재료가 어우러지는 초콜릿의 여정을 만나보세요.</p>'},
  recipes: {title:'초콜릿 레시피',content:'<p>초콜릿을 즐기는 또 다른 방법.</p><details open><summary>밀크 초콜릿 브라우니</summary><p>크리미 밀크 초콜릿을 브라우니에 더해 진하고 부드러운 풍미를 즐겨보세요.</p></details><details><summary>허니콤 초콜릿 토핑</summary><p>호키포키 크런치를 잘게 부숴 아이스크림이나 디저트 위에 올려보세요.</p></details><details><summary>초콜릿 베이킹</summary><p>작은 핍 형태의 초콜릿은 쿠키나 머핀 반죽에 더하기 좋습니다.</p></details><p>HANA가 제안하는 초콜릿 활용 아이디어입니다.</p>'}
};
document.querySelectorAll('[data-brand-panel]').forEach(button => button.addEventListener('click', () => {
  const panel = brandPanels[button.dataset.brandPanel];
  closeSiteMenu();
  closeChocolateMenu();
  if (button.matches('.categories > .category')) selectChocolateCategory(button);
  openDialog('<h2 id="dialog-title">' + panel.title + '</h2>' + panel.content);
}));
const chocolateSubmenu = document.querySelector('#chocolate-submenu');
function closeChocolateMenu() {
  chocolateSubmenu.hidden = true;
  chocolateMenuButton.setAttribute('aria-expanded', 'false');
}
chocolateMenuButton.addEventListener('click', () => {
  const isOpen = chocolateMenuButton.getAttribute('aria-expanded') === 'true';
  chocolateSubmenu.hidden = isOpen;
  chocolateMenuButton.setAttribute('aria-expanded', String(!isOpen));
});
function selectChocolateCategory(item) {
  document.querySelectorAll('.categories > .category').forEach(link => { link.classList.remove('active'); link.removeAttribute('aria-current'); });
  item.classList.add('active');
  item.setAttribute('aria-current', 'location');
}
chocolateSubmenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { selectChocolateCategory(chocolateMenuButton); closeChocolateMenu(); }));
document.querySelector('.categories > a[href="#reviews"]').addEventListener('click', event => { selectChocolateCategory(event.currentTarget); closeChocolateMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.chocolate-navigation')) closeChocolateMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !chocolateSubmenu.hidden) { closeChocolateMenu(); chocolateMenuButton.focus(); } });
document.querySelectorAll('[data-notice]').forEach(button => button.addEventListener('click', () => openDialog('<h2 id="dialog-title">' + escapeHTML(button.dataset.notice) + '</h2><p>2024.08.15</p><p>원본 디자인에는 공지 제목과 날짜만 제공되어 있습니다. 상세 내용은 고객센터에 문의해 주세요.</p>')));
document.querySelector('[data-notices]')?.addEventListener('click', () => openDialog('<h2 id="dialog-title">공지사항</h2>' + [...document.querySelectorAll('[data-notice]')].map(item => '<p>' + escapeHTML(item.dataset.notice) + ' · 2024.08.15</p>').join('')));

