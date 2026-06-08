document.addEventListener("DOMContentLoaded", () => {
    const tulip = document.querySelector(".tulip-grand");
    const garden = document.querySelector(".garden");

    function createPollen() {
        if (!tulip.matches(':hover')) return;

        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.borderRadius = "50%";
        
        const size = Math.random() * 4 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const randomX = (garden.offsetWidth / 2) + (Math.random() * 60 - 30);
        const startY = 320; 

        particle.style.left = `${randomX}px`;
        particle.style.bottom = `${startY}px`;

        // Magical Pink Particle Palette
        const colors = ["#ffffff", "#ffe5ec", "#ffb3c6", "#ff4d6d"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.background = randomColor;
        particle.style.boxShadow = `0 0 8px ${randomColor}, 0 0 15px ${randomColor}`;
        particle.style.opacity = "0";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "4"; 

        garden.appendChild(particle);

        const driftX = Math.random() * 100 - 50; 
        const driftY = Math.random() * 150 + 100; 

        particle.animate([
            { transform: 'translate(0, 0)', opacity: 0 },
            { opacity: 1, offset: 0.2 },
            { transform: `translate(${driftX}px, -${driftY}px)`, opacity: 0 }
        ], {
            duration: Math.random() * 1500 + 1500, 
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            fill: 'forwards'
        });

        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

    tulip.addEventListener("mousemove", () => {
        if (Math.random() > 0.6) {
            createPollen();
        }
    });

    tulip.addEventListener("click", () => {
        for (let i = 0; i < 15; i++) {
            setTimeout(createPollen, i * 50);
        }
    });
});