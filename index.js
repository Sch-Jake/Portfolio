document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.getElementById('typing');
    const phrases = [
        "Welcome to my page",
        "I like to code",
        "I like to learn",
        "Exploring new technologies",
        "Building cool projects",
        "Creating innovative solutions",
        "Coding is my passion",
        "Continuous learning",
        "Problem-solving with code",
        "Software engineer in training",
        "Making ideas come to life"
    ];
    let currentPhrase = 0;

    function typePhrase(phrase) {
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            typingElement.textContent += phrase[charIndex];
            charIndex++;
            if (charIndex > phrase.length - 1) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    removePhrase(phrase);
                }, 2000); // Wait 2 seconds before removing the phrase
            }
        }, 100); // Adjust typing speed if needed
    }

    function removePhrase(phrase) {
        const removingInterval = setInterval(() => {
            if (typingElement.textContent.length > 0) {
                typingElement.textContent = typingElement.textContent.slice(0, -1);
            } else {
                clearInterval(removingInterval);
                currentPhrase = (currentPhrase + 1) % phrases.length;
                typePhrase(phrases[currentPhrase]);
            }
        }, 50); // Adjust removing speed if needed
    }

    typePhrase(phrases[currentPhrase]);
});
