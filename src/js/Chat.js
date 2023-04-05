export default class Chat {
	static get selectorBtnChatShow() {
		return '.chat-show';
	}

	static get selectorChat() {
		return '.chat';
	}

	static get selectorBtnChatClose() {
		return '.chat-close';
	}

	static get selectorBtnChatSend() {
		return '.chat-send';
	}

	static get markup() {
		return `
			<button class="chat-show show" type="button"></button>
			<div class="chat">
				<div class="chat-header">
					<div class="title">
						<h4>Напишите нам</h4>
					</div>
					<button class="chat-close" type="button"></button>
				</div>
				<div class="chat-body">
					<textarea name="message" id="chat-message" cols="35" rows="20"></textarea>
				</div>
				<div class="chat-footer">
					<button type="button" class="chat-send">
						Отправить
					</button>
				</div>
			</div>
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
		this.container.innerHTML = Chat.markup;
	}

	registerEvents() {
		const chat = this.container.querySelector(Chat.selectorChat);
		const btnChatShow = this.container.querySelector(Chat.selectorBtnChatShow);
		const btnChatClose = this.container.querySelector(Chat.selectorBtnChatClose);
		const btnChatSend = this.container.querySelector(Chat.selectorBtnChatSend);

		btnChatShow.addEventListener('click', () => {
			btnChatShow.classList.remove('show');
			chat.classList.add('show');
		});

		btnChatClose.addEventListener('click', () => {
			btnChatShow.classList.add('show');
			chat.classList.remove('show');
		});

		btnChatSend.addEventListener('click', () => {
			btnChatShow.classList.add('show');
			chat.classList.remove('show');
		});
	}
}
