// Figma 4003:80 artwork for the yellow, continuously scrolling banner.
(async function installChocolateMarquee() {
  const sources = {
    lettering: './assets/figma-banner-c4b22.png',
    bittenChocolate: './assets/figma-banner-38a95.png',
    brushMarks: './assets/figma-banner-36a19.png',
    peanutSlab: './assets/figma-banner-ac563.png',
    creamyMilk: './assets/figma-banner-363c5.png',
    starArrow: './assets/figma-banner-e752c.png'
  };

  const loaded = await Promise.all(Object.values(sources).map(src => new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  })));
  if (loaded.some(ok => !ok)) return;

  const banner = document.querySelector('.bicycle-art');
  if (!banner) return;

  function picture(className, src) {
    const image = document.createElement('img');
    image.className = className;
    image.src = src;
    image.alt = '';
    image.draggable = false;
    return image;
  }

  function decoration(className, src) {
    const item = document.createElement('span');
    item.className = `${className} figma-banner-decoration`;
    item.style.setProperty('--decoration-mask', `url("${src}")`);
    return item;
  }

  function lettering(className) {
    const frame = document.createElement('div');
    frame.className = `figma-banner-lettering ${className}`;
    frame.append(picture('', sources.lettering));
    return frame;
  }

  function group() {
    const item = document.createElement('div');
    item.className = 'chocolate-marquee-group figma-banner-group';
    item.append(
      lettering('figma-banner-whittakers'),
      lettering('figma-banner-chocolate'),
      picture('figma-banner-bite', sources.bittenChocolate),
      decoration('figma-banner-brush', sources.brushMarks),
      picture('figma-banner-peanut', sources.peanutSlab),
      picture('figma-banner-creamy', sources.creamyMilk),
      decoration('figma-banner-arrow', sources.starArrow)
    );
    return item;
  }

  const track = document.createElement('div');
  track.className = 'chocolate-marquee-track';
  track.setAttribute('aria-hidden', 'true');
  track.append(group(), group());
  banner.className = 'bicycle-art chocolate-marquee';
  banner.setAttribute('aria-label', 'Whittaker’s Chocolate');
  banner.replaceChildren(track);
})();
