const generateButton = document.getElementById('generateButton');
const loveLetterContainer = document.getElementById('loveLetter');

const loveLetters = [
  "My dearest Adewunmi,\n\nYou mean the world to me. Every moment spent with you fills my heart with joy and love. On this special day, I want you to know how much you are cherished and adored. Happy Valentine's Day, my love!",
  "To my beloved Adewunmi,\n\nWith every beat of my heart, I am reminded of the love I have for you. You bring light and happiness into my life, and I am grateful for your presence every single day. Wishing you a Valentine's Day filled with endless love and happiness.",
  "Dear Adewunmi,\n\nAs I sit here thinking about you, my heart is overflowing with love. You are the most amazing person I have ever known, and I am blessed to have you in my life. May this Valentine's Day be as special and beautiful as you are."
];

generateButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * loveLetters.length);
  loveLetterContainer.textContent = loveLetters[randomIndex];
  loveLetterContainer.style.display = "block";
  generateButton.textContent = "Click me again";
});

loveLetterContainer.addEventListener('click', () => {
  loveLetterContainer.style.display = "none";
  generateButton.textContent = "Click me";
});
