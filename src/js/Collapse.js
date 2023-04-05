export default class Collapse {
	static get up() {
		return 'Свернуть';
	}

	static get down() {
		return 'Развернуть';
	}

	static get selectorBtnCollapse() {
		return '.btn-collapse';
	}

	static get selectorContent() {
		return '.content';
	}

	static get markup() {
		return `
			<button class="btn-collapse">${Collapse.up}</button>
			<div class="content">
				<p>CollapseCollapse
				Collapse<br>
				Collapse</p>
			</div>
			<button class="copy-content">Copy</button>		
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
		this.container.innerHTML = Collapse.markup;
	}

	registerEvents() {
		const btnCollapse = this.container.querySelector(Collapse.selectorBtnCollapse);
		const content = this.container.querySelector(Collapse.selectorContent);
		btnCollapse.addEventListener('click', () => {
			content.classList.toggle('collapse');
			const isCollapse = btnCollapse.textContent === Collapse.up;
			btnCollapse.textContent = isCollapse ? Collapse.down : Collapse.up;
		});
	}
}
