// script.js
window.addEventListener("scroll", function() {
    var heroSection = document.querySelector(".hero");
    var featuredArtworksSection = document.querySelector(".featured-artworks");
    var heroHeight = heroSection.offsetHeight;
    var scrollPosition = window.pageYOffset;
  
    if (scrollPosition > heroHeight) {
      featuredArtworksSection.classList.add("show");
    } else {
      featuredArtworksSection.classList.remove("show");
    }
  });
  