/*const keywords = [
    { text: "schedule", response: "The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "schedul", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "shedule", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "shcedule", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "scheduele", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "shcedul", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "scedule", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "location", response: "The event is located at the Grand Convention Center, 123 Main Street, Cityville." },
    { text: "contact", response: "You can contact us at support@event.com or call us at (123) 456-7890." }
];

const fuse = new Fuse(keywords, {
    keys: ['text'],
    threshold: 0.3 // Adjust this value for sensitivity
});


function startChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = 'flex';
}

function closeChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    const chatMessages = document.getElementById('chat-messages');

    // User message
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    const userMessageContent = document.createElement('div');
    userMessageContent.classList.add('message-content');
    userMessageContent.textContent = messageText;
    userMessage.appendChild(userMessageContent);
    chatMessages.appendChild(userMessage);

    // Bot response
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');
    const botMessageContent = document.createElement('div');
    botMessageContent.classList.add('message-content');
    botMessageContent.textContent = getBotResponse(messageText);
    botMessage.appendChild(botMessageContent);
    chatMessages.appendChild(botMessage);

    // Scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Clear input
    userInput.value = '';
}*/

// Include Fuse.js for fuzzy searching
const keywords = [
    { text: "schedule", response: "The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "schedul", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "shedule", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "shcedule", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "scheduele", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "shcedul", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "scedule", response: "Did you mean 'schedule'? The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM." },
    { text: "location", response: "The event is located at the Grand Convention Center, 123 Main Street, Cityville." },
    { text: "speakers", response: "Our keynote speakers are John Doe, Jane Smith, and Alice Johnson." },
    { text: "help", response: "You can ask about the schedule, location, or speakers." }
];

// Initialize Fuse.js for fuzzy searching
const fuse = new Fuse(keywords, {
    keys: ['text'],
    threshold: 0.3
});

// Function to start the chat
function startChat() {
    document.getElementById('chat-container').style.display = 'block';
}

// Function to close the chat
function closeChat() {
    document.getElementById('chat-container').style.display = 'none';
}

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatMessages = document.getElementById('chat-messages');

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `<span class="message-content">${userInput}</span>`;
    chatMessages.appendChild(userMessage);

    // Clear input
    document.getElementById('user-input').value = '';

    // Find the best match
    const result = fuse.search(userInput);
    const botResponse = result.length > 0 ? result[0].item.response : "I'm sorry, I didn't understand that. Please ask about the schedule, location, or speakers.";

    // Display bot response
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.innerHTML = `<span class="message-content">${botResponse}</span>`;
    chatMessages.appendChild(botMessage);

    // Scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    
    // Check for greetings
    if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
        return "Hello there, how can I help you?";
    } 
    else if (lowerCaseMessage.includes('schedule')) {
        if (lowerCaseMessage.includes('day-1')) {
            return "The morning schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM.";
        } 
        else if (lowerCaseMessage.includes('day-2')) {
            return "The afternoon schedule is as follows: Lunch Break at 12 PM, Workshops at 1 PM.";
        } 
        else if (lowerCaseMessage.includes('evening')) {
            return "The evening schedule is as follows: Networking Session at 4 PM, Closing Ceremony at 5 PM.";
        } 
        else {
            return "The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM.";
        }
    } 
    else if (lowerCaseMessage.includes('location')) {
        return "The event is located at the Grand Convention Center, 123 Main Street, Cityville.";
    } 
    else if (lowerCaseMessage.includes('speakers')) {
        return "Our keynote speakers are John Doe, Jane Smith, and Dr. Emily Johnson.";
    } 
    else if (lowerCaseMessage.includes('contact')) {
        return "You can contact us at support@event.com or call us at (123) 456-7890.";
    } 
    else {
        return "Thank you for your message. We will get back to you shortly.";
    }
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('schedule')) {
        if (lowerCaseMessage.includes('Day-1')) {
            return "The morning schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM.";
        } 
        else if (lowerCaseMessage.includes('Day-2')) {
            return "The afternoon schedule is as follows: Lunch Break at 12 PM, Workshops at 1 PM.";
        } 
        else if (lowerCaseMessage.includes('evening')) {
            return "The evening schedule is as follows: Networking Session at 4 PM, Closing Ceremony at 5 PM.";
        } 
        else {
            return "The event schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM, Lunch Break at 12 PM, Workshops at 1 PM, Networking Session at 4 PM, and Closing Ceremony at 5 PM.";
        }
    } 
    else if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
        return "Hello there, how can I help you?";
    } 
    else if (lowerCaseMessage.includes('location')) {
        return "The event is located at the Grand Convention Center, 123 Main Street, Cityville.";
    } 
    else if (lowerCaseMessage.includes('hi')) {
        return "Hello there, how can I help you ? ";
    } 
    else if (lowerCaseMessage.includes('speakers')) {
        return "Our keynote speakers are John Doe, Jane Smith, and Dr. Emily Johnson.";
    } else if (lowerCaseMessage.includes('contact')) {
        return "You can contact us at support@event.com or call us at (123) 456-7890.";
    } else {
        return "Thank you for your message. We will get back to you shortly.";
    }
}