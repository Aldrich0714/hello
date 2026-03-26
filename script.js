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
    } 
    // else if (choice === 'unsure') {
    //     reaction.innerHTML = "<strong>Sabi ko na nga ba eh. Pero kahit slight lang, gusto ko pa ring bumawi.</strong>";
    // } 
    // else {
    //     reaction.innerHTML = "<strong>Buti naman kung ganun! Pero kahit na, gusto ko pa rin sabihin 'to:</strong>";
    // }

}