function goToStep2() {
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');

    step1.style.display = 'none';
    step2.classList.remove('hidden');
    step2.classList.add('fade-in');
}


function Concern(choice) {
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const ConcernDiv = document.getElementById('Concern-content');
    const reaction = document.getElementById('reaction-text');

   
    step1.style.display = 'none';
    step2.style.display = 'none';

   
    ConcernDiv.classList.remove('hidden');
    ConcernDiv.classList.add('fade-in');

    if (choice === 'yes') {
        reaction.innerHTML = "<strong>Wag ka po mag alala, di ka nag iisa nandito kami karamay mo sa iyong problema</strong>";
    // else if (choice === 'unsure') {
    //     reaction.innerHTML = "<strong>Sabi ko na nga ba eh. Pero kahit slight lang, gusto ko pa ring bumawi.</strong>";
    // } 
    // else {
    //     reaction.innerHTML = "<strong>Buti naman kung ganun! Pero kahit na, gusto ko pa rin sabihin 'to:</strong>";
    // }
       
        setInterval(createHeart, 300);

      
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff7675', '#ffc0cb']
            });
        }
    }
}


function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-fly'); 
    heart.innerHTML = '❤'; 
    
   
    heart.style.left = Math.random() * 100 + "vw";
    
  
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    
  
    heart.style.fontSize = Math.random() * 15 + 15 + "px";

    document.body.appendChild(heart);

   
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
  