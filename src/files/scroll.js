AOS.init({ offset: 150, duration: 1000 });

jQuery(document).ready(function () {
  // Scrolling for anchor links in within the same page
  jQuery('a[href*="#"]:not([href="#"])').click(function () {
    _hash = this.hash;
    _scroll_it(_hash);
  });

  // scrolling for anchor links coming from a different page
  var _hash = window.location.hash;
  if (_hash.length > 0) {
    window.scrollTo(0, 0);

    setTimeout(function () {
      _scroll_it(_hash);
    }, 500);
  }

  function _scroll_it(_hash) {
    jQuery("html,body").animate(
      {
        scrollTop: jQuery(_hash).offset().top - 150,
      },
      500
    );
  }
});

Barba.Dispatcher.on("newPageReady", function (current, prev, container) {
  history.scrollRestoration = "manual";
});

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});
