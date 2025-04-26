document.getElementById('send-btn').addEventListener('click', async () => {
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();
  if (!message) return;

  // Add user message
  addMessage('user', message);
  userInput.value = '';

  try {
    // Replace with your backend URL
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    addMessage('bot', data.response);
  } catch (error) {
    addMessage('bot', "⚠️ Error connecting to the AI service");
  }
});

function addMessage(sender, text) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(`${sender}-message`);
  messageDiv.innerHTML = `<strong>${sender === 'user' ? '👤 You' : '🤖 Bot'}:</strong> ${text}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
