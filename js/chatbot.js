function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const startChatButton = document.getElementById('start-chat-button');

    if (chatContainer.style.display === 'flex') {
        // Close the chat
        chatContainer.style.display = 'none';
        startChatButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
            </svg>`;
        startChatButton.classList.remove('close'); // Remove close class
    } else {
        // Open the chat
        chatContainer.style.display = 'flex';
        startChatButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>`;
        startChatButton.classList.add('close'); 
    }
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
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    
    // Check for greetings
    if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
        return "Hello there, how can I help you?";
    }
    else if (lowerCaseMessage.includes('how are you?') || (lowerCaseMessage.includes('how r u?')) || (lowerCaseMessage.includes('you good?')) || (lowerCaseMessage.includes('how are you ?')) || (lowerCaseMessage.includes('how are you'))){
        return "I'm doing well, thank you! How about you? It's a great day to connect."
    }
    else if (lowerCaseMessage.includes('bye') || (lowerCaseMessage.includes('bye-bye')) || (lowerCaseMessage.includes('goodbye')) || (lowerCaseMessage.includes('tata')) || (lowerCaseMessage.includes('how are you'))){
        return "Bye-bye! If you ever need assistance again, don’t hesitate to reach out. Have a great day! 👋😊"
    }
    /*registrations*/
    else if ((lowerCaseMessage.includes('register')) || (lowerCaseMessage.includes('registration')) || (lowerCaseMessage.includes('registrations'))) {
        if ((lowerCaseMessage.includes('online')) || (lowerCaseMessage.includes('online payments'))) {
            return "Online payments are done through Website";
        } 
        if (lowerCaseMessage.includes('cash') || lowerCaseMessage.includes('offline') || lowerCaseMessage.includes('offline payments') || lowerCaseMessage.includes('offline registrations')) {
            return "For offline registration, visit the stalls and pay in cash. ";
        } 
        else {
            return "You can register online via a Google Form or offline by paying cash at the stalls.";
        }
    } 
    /* cash and online registrations*/
    else if ((lowerCaseMessage.includes('online')) || (lowerCaseMessage.includes('online payments'))) {
        return "Online payments are done through Website";
    } 
    else if (lowerCaseMessage.includes('cash') || lowerCaseMessage.includes('offline') || lowerCaseMessage.includes('offline payments') || lowerCaseMessage.includes('offline registrations')) {
        return "For offline registration, visit the stalls and pay in cash. ";
    } 

    /* Events or events schedule*/
    else if (lowerCaseMessage.includes('event schedule') || (lowerCaseMessage.includes('schedule')) || (lowerCaseMessage.includes('events list')) || (lowerCaseMessage.includes('events'))) {
        if (lowerCaseMessage.includes('day-1')) {
            return "The morning schedule is as follows: Opening Ceremony at 9 AM, Keynote Speech at 10 AM.";
        } 
        else if (lowerCaseMessage.includes('day-2')) {
            return "The afternoon schedule is as follows: Lunch Break at 12 PM, Workshops at 1 PM.";
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
