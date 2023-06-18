$(document).ready(function () {
	// Scroll Sections Active Link
	var sections = $("section");
	var navLinks = $("header nav a");

	$(window).on("scroll", function () {
		var top = $(window).scrollTop();

		sections.each(function () {
			var offset = $(this).offset().top - 150;
			var height = $(this).outerHeight();
			var id = $(this).attr("id");

			if (top >= offset && top < offset + height) {
				navLinks.removeClass("active");
				$("header nav a[href*='" + id + "']").addClass("active");
			}
		});
	});

	// Smooth Scroll
	$("a").on("click", function (event) {
		var hash = this.hash;

		if (hash !== "") {
			event.preventDefault();

			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				500,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});

	// Sticky Navbar
	var header = $("header");
	var menuIcon = $("#menu-icon");
	var navbar = $("header nav");

	$(window).on("scroll", function () {
		header.toggleClass("sticky", $(window).scrollTop() > 100);
	});

	// Toggle Icon and Navbar
	menuIcon.on("click", function () {
		menuIcon.toggleClass("bx-x");
		navbar.toggleClass("active");
	});

	// Remove Toggle Icon and Navbar When Clicked on Navbar Link (scroll)
	navbar.find("a").on("click", function () {
		menuIcon.removeClass("bx-x");
		navbar.removeClass("active");
	});

	// Scroll Reveal
	ScrollReveal({
		distance: "80px",
		duration: 2000,
		delay: 200,
	});

	ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
	ScrollReveal().reveal(
		".home-img, .services-container, .portfolio-box, .contact form",
		{ origin: "bottom" }
	);
	ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
	ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

	// Typed.js
	var typed = new Typed(".multiple-text", {
		strings: ["Frontend Developer", "Web Designer", "Content Creator"],
		typeSpeed: 100,
		backSpeed: 100,
		backDelay: 1000,
		loop: true,
	});
});
