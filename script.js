document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('showMessageButton');
    const specialMessageDiv = document.getElementById('specialMessage');

    const messages = [
        "Com você, a vida não tem 'bugs'!",
        "Obrigado por 'debugar' nossos problemas com tanto amor!",
        "Seu amor é o 'kernel' que mantém nosso sistema funcionando!",
        "Você transforma qualquer 'erro 404' em 'página encontrada' com sucesso!",
        "Mãe: nossa 'desenvolvedora full-stack' de felicidade!"
    ];

    let messageIndex = 0;

    if (button) {
        button.addEventListener('click', () => {
            specialMessageDiv.style.opacity = 0;
            setTimeout(() => {
                specialMessageDiv.textContent = messages[messageIndex];
                specialMessageDiv.style.opacity = 1;
                messageIndex = (messageIndex + 1) % messages.length;
            }, 400);
        });
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.innerHTML = '&#10084;';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    setInterval(createHeart, 300);
});