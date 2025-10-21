const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", handleChat);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") handleChat();
});

function handleChat() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage("user", text);
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(text.toLowerCase());
    addMessage("bot", reply);
  }, 600);
}

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = `${sender === "user" ? "You" : "AI"}: ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// === MAIN AI LOGIC (keyword detection + smart responses) ===
function getBotReply(input) {
  // Greetings
  if (input.includes("hello") || input.includes("hi")) 
    return "Hello there! 👋 How are you doing today?";
  if (input.includes("how are you") || input.includes("are you good") || input.includes("fine and you"))
    return"Am doing Great"; 
    // return "I'm feeling great and ready to chat with you! 😊";

  // Personal
  if (input.includes("your name"))
    return "I'm your AI friend — you can call me  ID SmartBot 🤖 if u dont mind";
  if (input.includes("who made you"))
    return "I was created by a creative mind like you using HTML, CSS, and JavaScript!";

  // Help
  if (input.includes("help"))
    return "Sure! You can ask me about technology, motivation, facts, or even jokes!";

  // Motivation
  if (input.includes("motivate") || input.includes("sad"))
    return "Cheer up! 🌈 Remember, even the darkest nights end with sunrise. You’ve got this! 💪";

  // Tech
  if (input.includes("html"))
    return "HTML stands for HyperText Markup Language — it’s the skeleton of every website 🕸️";
  if (input.includes("css"))
    return "CSS is what makes websites beautiful! It handles colors, layouts, and animations 🎨";
  if (input.includes("javascript"))
    return "JavaScript brings websites to life with interactivity and logic ⚡";

  // Jokes
  if (input.includes("joke"))
    return "😂 Why did the computer get cold? Because it forgot to close its Windows!";


    // who are you
    if (input.includes("who are you"))
    return "Am ID AI 💪";


  // Facts
  if (input.includes("fact"))
    return "Here’s a fun fact: The first computer bug was an actual moth stuck in a computer in 1947! 🦋";

  // Date/Time
  if (input.includes("time"))
    return "⏰ The current time is " + new Date().toLocaleTimeString();
  if (input.includes("date"))
    return "📅 Today’s date is " + new Date().toLocaleDateString();

  // Love / Emotions
  if (input.includes("love"))
    return "Aww 💖 love is the most beautiful emotion — are you in love?";
  if (input.includes("bored"))
    return "Let’s fix that! 🎲 How about I tell you a joke or an interesting fact?";

  // Default / fallback
  const responses = [
    "Hmm, that’s interesting! Tell me more 👀",
    "I want to know you better?",
    "How old are you?",
    "Are you single?",
    "What do you do for a living?",
    "I’m not sure I understand, but I’d love to learn more!",
    "Can you explain that a bit better? 🤔",
    "That’s cool! What else would you like to talk about?",
    "I love chatting with you — keep going! 😄"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
