import Collapse from './Collapse';
import Chat from './Chat';
import Like from './Like';

const collapseContainer = document.querySelector('.collapse-container');
const collapse = new Collapse(collapseContainer);
collapse.init();

const chatContainer = document.querySelector('.chat-container');
const chat = new Chat(chatContainer);
chat.init();

const likeContainer = document.querySelector('.like-container');
const like = new Like(likeContainer);
like.init();
