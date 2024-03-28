const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
    document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
    elem.addEventListener("click", function() {
        const hrefLinkClick = elem.href;

        allLinks.forEach((link) => {
            if(link.href == hrefLinkClick) {
                link.classList.add("active");
            }
            else {
                link.classList.remove("active");
            }
        });
    });
});

const searchInput = document.querySelector(".search__wrapper input");

searchInput.addEventListener("focus", (e) => {
    document.body.classList.remove("collapsed");
});

var swiper = new Swiper(".swiper.categories-slider", {
	slidesPerView: auto,
	spaceBetween: 10,
	
	breakpoints: {
	  750: {
		/*slidesPerView: 2,*/
		spaceBetween: 20,
	  },
	  1000: {
		/*slidesPerView: 3,*/
		spaceBetween: 40,
	  },
	  1500: {
		/*slidesPerView: 4,*/
		spaceBetween: 50,
	  },
	},
  });