const chatElement = document.getElementById('chat');
const chatWindow = document.getElementById('chatWindow');
const chatButton = document.getElementById('chatButton');
chatWindow.style.display = 'none'
chatButton.onclick = () => startChat();

const startChat = () => {
    const input = document.createElement('input');
    input.classList.add('col-4')
    chatElement.removeChild(chatButton);
    chatWindow.style.display = 'block'


    input.addEventListener('keyup', (event) => {
        if (event.code === 'Enter') {
            const value = event.target.value;
            chatWindow.innerHTML += `
                <div class="row justify-content-end">
                    <div class="col-6 bg-primary">${value}</div>
                </div>
            `

            setTimeout(() => {
                chatWindow.innerHTML += `
                <div class="row>
                    <div class="col-6 bg-light">${value}</div>
                </div>
            `
            }, 1000)

            event.target.value = '';
        }

    })

    chatElement.appendChild(input);
    input.focus();
}
