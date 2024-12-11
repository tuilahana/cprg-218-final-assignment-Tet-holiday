const zodiacAnimals = [
    { animal: "Rat", fortune: "This year will bring new opportunities for growth." },
    { animal: "Ox", fortune: "Patience will pay off for you this year." },
    { animal: "Tiger", fortune: "Expect excitement and adventure in the new year!" },
    { animal: "Rabbit", fortune: "This year brings peace and prosperity to you and your family." },
    { animal: "Dragon", fortune: "Success and recognition are in your future." },
    { animal: "Snake", fortune: "Trust your instincts and be cautious." },
    { animal: "Horse", fortune: "This year will bring you closer to your goals." },
    { animal: "Goat", fortune: "A year of good luck and health awaits." },
    { animal: "Monkey", fortune: "Innovation and creativity will lead to success." },
    { animal: "Rooster", fortune: "This year, your hard work will shine." },
    { animal: "Dog", fortune: "Be kind to others, and good things will come to you." },
    { animal: "Pig", fortune: "A year full of happiness and joy for you." },
];


function getZodiacFortune() {
    const birthYear = document.getElementById('birthYear').value;

    if (birthYear === '' || isNaN(birthYear)) {
        document.getElementById('fortuneMessage').textContent = 'Please enter a valid year.';
        return;
    }

    const zodiacIndex = (birthYear - 4) % 12;
    const zodiac = zodiacAnimals[zodiacIndex];

    document.getElementById('fortuneMessage').textContent = `Your Zodiac Animal: ${zodiac.animal}. ${zodiac.fortune}`;
}
