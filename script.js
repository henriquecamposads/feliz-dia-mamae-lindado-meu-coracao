document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const button = document.getElementById('showMessageButton');
    const messageDiv = document.getElementById('specialMessage');
    
    // Mensagens
    const messages = [
        "Com você, a vida não tem 'bugs'!",
        "Obrigado por 'debugar' nossos problemas com tanto amor!",
        "Seu amor é o 'kernel' que mantém nosso sistema funcionando!",
        "Você transforma qualquer 'erro 404' em 'página encontrada' com sucesso!",
        "Mãe: nossa 'desenvolvedora full-stack' de felicidade!"
    ];
    
    let currentIndex = 0;
    
    // Botão de mensagens
    if (button) {
        button.addEventListener('click', function() {
            messageDiv.style.opacity = 0;
            
            setTimeout(() => {
                messageDiv.textContent = messages[currentIndex];
                messageDiv.style.opacity = 1;
                currentIndex = (currentIndex + 1) % messages.length;
            }, 400);
        });
    }
    
    // Corações flutuantes
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    setInterval(createHeart, 300);
});
