let messageInput = document.getElementById("messageInput");
let sendButton = document.getElementById("sendButton");
let getButton = document.getElementById("getButton");
    
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

let url = "http://127.0.0.1:5500/server/data.json";
let settings = { method: "Get" };
let localData = []

function getData (local){
    fetch(url, settings)
    .then(res => res.json())
    .then((res)  => {
        local = res
    });
}

getButton.addEventListener('click',() => {
    getData(localData)
})

    
 