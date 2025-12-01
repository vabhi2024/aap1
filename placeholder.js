const input = document.getElementById("searchInput"); // same input

const texts = [
  "Search your apps",
  "Find premium apps",
  "Get 100% free apps",
  "Testesd secure apps",
  "Explore trending apps",
  "with Lifetime validity",
  "Apps for anyone devices"
];

let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let pauseBetween = 2000;
let cycleCount = 0;
let maxCycles = 5;

function typePlaceholder() {
    if (cycleCount >= maxCycles) return;

    const currentText = texts[textIndex];

    if (charIndex <= currentText.length) {
        input.placeholder = currentText.slice(0, charIndex);
        charIndex++;
        setTimeout(typePlaceholder, typingSpeed);
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            if (textIndex === 0) cycleCount++;
            typePlaceholder();
        }, pauseBetween);
    }
}

typePlaceholder();
