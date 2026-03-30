function goToStep2() {

    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const concernDiv = document.getElementById('Concern-content');

  
    step1.style.display = 'none';
    concernDiv.classList.add('hidden');
    concernDiv.style.display = 'none';

    step2.classList.remove('hidden');
    step2.style.display = 'block';
    step2.classList.add('fade-in');
}


function Concern(choice) {
    // Kunin ang lahat ng elements
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const concernDiv = document.getElementById('Concern-content');
    const reaction = document.getElementById('reaction-text');


    step1.style.display = 'none';
    step2.classList.add('hidden');
    step2.style.display = 'none';

    concernDiv.classList.remove('hidden');
    concernDiv.style.display = 'block';
    concernDiv.classList.add('fade-in');

    if (choice === 'yes') {
        reaction.innerHTML = "<strong>Napunta ako ng Manila hindi dahil dun, may ibang rason</strong>";
    }


    triggerConfetti();
    startHeartRain();
}


function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff7675', '#ffc0cb']
        });
    }
}

let heartInterval;
function startHeartRain() {
    if (!heartInterval) {
        heartInterval = setInterval(createHeart, 300);
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-fly'); 
    heart.innerHTML = '❤'; 
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}