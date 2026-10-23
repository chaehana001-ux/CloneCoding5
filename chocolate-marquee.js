// Text-only brand marquee between the campaign film and collection.
(function installChocolateMarquee() {
  const banner = document.querySelector('.bicycle-art');
  if (!banner) return;

  function group() {
    const item = document.createElement('div');
    item.className = 'chocolate-marquee-group';
    item.innerHTML = '<span>Whittaker’s Chocolate</span><i aria-hidden="true">✦</i><span>Good Honest Chocolate</span><i aria-hidden="true">✦</i>';
    return item;
  }

  const track = document.createElement('div');
  track.className = 'chocolate-marquee-track';
  track.setAttribute('aria-hidden', 'true');
  track.append(group(), group());
  banner.className = 'bicycle-art chocolate-marquee';
  banner.setAttribute('aria-label', 'Whittaker’s Chocolate · Good Honest Chocolate');
  banner.replaceChildren(track);
})();
