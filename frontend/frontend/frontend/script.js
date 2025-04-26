const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Temporary test - remove this when connecting to OpenAI
sendBtn.addEventListener('click', () => {
  const message = userInput.value;
  chatBox.innerHTML += `<div>You: ${message}</div>`;
  userInput.value = '';
  chatBox.innerHTML += `<div>Bot: [Test] Your frontend works!</div>`;
});

