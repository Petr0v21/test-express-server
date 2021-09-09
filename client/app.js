let messageInput = document.getElementById("messageInput");
    let sendButton = document.getElementById("sendButton");
    
    let value = messageInput.value
    messageInput.oninput = function(){
        value = messageInput.value
    }

    function sendMessage (){
        console.log(messageInput.value)
        fetch('http://localhost:3000/db', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message: value})
        })
    }

    sendButton.addEventListener('click',() => sendMessage())