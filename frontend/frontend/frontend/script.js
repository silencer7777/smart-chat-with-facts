const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Replace with your OpenAI API key
const API_KEY = "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"; 

sendBtn.addEventListener('click', async () => {
  const message = userInput.value;
  chatBox.innerHTML += `<div>You: ${message}</div>`;
  userInput.value = '';
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: message}],
        temperature: 0.7
      })
    });
    
    const data = await response.json();
    chatBox.innerHTML += `<div>Bot: ${data.choices[0].message.content}</div>`;
  } catch (error) {
    chatBox.innerHTML += `<div>Error: ${error.message}</div>`;
  }
});

