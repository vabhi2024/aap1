const input = document.getElementById("searchInput"); // changed id
const texts = [
    "Search your apps",
  "Find premium apps",
  "Get 100% free apps",
  "Testesd secure apps",
  "Explore trending apps",
  "with Lifetime validity",
  "Apps for anyone devices"
]; // Your placeholder texts
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100; // typing speed in ms
let pauseBetween = 2000; // pause before next text
let cycleCount = 0; // number of cycles
let maxCycles = 5; // total cycles

function typePlaceholder() {
    if(cycleCount >= maxCycles) return; // stop after 5 cycles

    const currentText = texts[textIndex];
    
    if(charIndex <= currentText.length){
        input.placeholder = currentText.slice(0, charIndex);
        charIndex++;
        setTimeout(typePlaceholder, typingSpeed);
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            if(textIndex === 0) cycleCount++; // increment cycle after finishing all texts
            typePlaceholder();
        }, pauseBetween);
    }
}

typePlaceholder();