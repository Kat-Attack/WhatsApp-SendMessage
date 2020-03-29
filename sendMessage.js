// Author: Kathy Xu 2020
// Sends a message in Web WhatsApp to your contact using Javascript and the DOM.


// Function to click on person's name to bring up their chat from left sidebar
//      Parameter: 
//          name: the name of the person as seen on the left sidebar
//      Returns: 
//          nothing, simply sends an event to the dom
function goToChat(name){
    let personsChat = document.querySelector('[title="' + name + '"]')
    let mouseEvent = document.createEvent('MouseEvents'); 
    mouseEvent.initEvent('mousedown', true, true); 
    personsChat.dispatchEvent(mouseEvent); 
}  

  
// Function to send a message in What's App. 
//      Parameter: 
//          messageToSend: the message you want to send
//      Returns: 
//          nothing, simply sends an event to the dom
function sendMessage(messageToSend) 
{ 
    let textBox = document.querySelectorAll("[contenteditable='true']")[1];   
    
    textBox.innerHTML = messageToSend

    // write message to textbox
    let inputEvent = document.createEvent("UIEvents"); 
    inputEvent.initUIEvent("input", true, true, window, 1); 
    textBox.dispatchEvent(inputEvent); 

    // press the send button
    let sendButton = document.querySelector('span[data-icon="send"]')
    let sendEvent = document.createEvent("MouseEvents"); 
    sendEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
    sendButton.dispatchEvent(sendEvent); 
}

goToChat("Johnny Appleseed")
sendMessage("Due to covid19, all TCP applications are being converted to UDP to avoid handshakes.")
