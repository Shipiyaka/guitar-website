// $(document).ready(function () {
//   $("a").on("click", function (event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;

//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         800,
//         function () {
//           window.location.hash = hash;
//         }
//       );
//     }
//   });
// });
// jQuery(document).ready(function ($) {
//   var myHash = location.hash;
//   location.hash = "";
//   if (myHash[1] != undefined) {
//     $("html, body").animate({ scrollTop: $(myHash).offset().top - 110 }, 700);
//     location.hash = myHash;
//   }
// });

AOS.init({ offset: 150, duration: 1000 });

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
