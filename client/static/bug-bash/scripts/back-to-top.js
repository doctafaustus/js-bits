(function() {
	if (window.backToTopAdded) return;

	document.head.insertAdjacentHTML(`beforeend`, `<style>
		#back-to-top-btn {
			display: none;
			position: fixed;
			z-index: 20;
			top: 0;
			left: 0;
			width: 100%;
			background: #000;
			color: #fff;
			cursor: pointer;
			padding: 10px;
		}
		.show-back #back-to-top-btn {
			display: block;
		}
	</style>`);

	document.body.insertAdjacentHTML('afterbegin', '<button id="back-to-top-btn">Back to Top</button>');
	const backToTopBtn = document.querySelector('#back-to-top-btn');
	backToTopBtn.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	window.onscroll = toggleVisibility;
	toggleVisibility();
	window.backToTopAdded = true;

	function toggleVisibility() {
		const valueProps = document.querySelector('.value-props');
		const method = elementInViewport(valueProps) ? 'remove': 'add';

		document.body.classList[method]('show-back');
	}

	function elementInViewport(el) {
		const rect = el.getBoundingClientRect();

		return rect.bottom > 0 &&
			rect.right > 0 &&
			rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
			rect.top < (window.innerHeight || document.documentElement.clientHeight);
	}
})();
