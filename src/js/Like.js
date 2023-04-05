export default class Like {
	static get selectorBtnLike() {
		return '.btn-like';
	}

	static get markup() {
		return `
			<button class="btn-like" type="button">Like</button>
		`;
	}

	constructor(container) {
		this.container = container;
	}

	init() {
		this.bindToDOM();
		this.registerEvents();
	}

	bindToDOM() {
		this.container.innerHTML = Like.markup;
	}

	registerEvents() {
		const btnLike = this.container.querySelector(
			Like.selectorBtnLike,
		);
		btnLike.addEventListener('click', () => {
			btnLike.append(this.createLike());
		});
	}

	// eslint-disable-next-line class-methods-use-this
	createLike() {
		// eslint-disable-next-line no-extend-native
		Array.prototype.random = function () {
			return this[Math.floor(Math.random() * this.length)];
		};
		const like = document.createElement('div');
		const deviation = [50, 0, -50];
		const deviationOne = deviation.random();
		const deviationTwo = deviation.filter((item) => item !== deviationOne).random();
		const deviationThree = deviation.filter((item) => item !== deviationTwo).random();
		like.classList.add('like');
		const animation = like.animate(
			[
				{ transform: 'translate(0, 0)', opacity: 1 },
				{ transform: `translate(${deviationOne}px, -50px)` },
				{ transform: `translate(${deviationTwo}px, -100px)` },
				{ transform: `translate(${deviationThree}px, -150px)` },
				{ transform: 'translate(0, -200px)', opacity: 0 },
			],
			500,
		);
		animation.finished.then(() => {
			like.remove();
		});
		return like;
	}
}
