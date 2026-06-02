// ===============================
// MAGICAL SPELL GENERATOR (DOM)
// ===============================

// Create basic page structure
document.title = "Magical Spell Generator";

// Create heading
const heading = document.createElement("h1");
heading.textContent = "Welcome to the Magical Spell Generator!";
document.body.appendChild(heading);

// Create spell area
const spellArea = document.createElement("div");
spellArea.id = "spellArea";
spellArea.textContent = "Your spell will appear here.";
spellArea.style.width = "300px";
spellArea.style.margin = "20px auto";
spellArea.style.padding = "20px";
spellArea.style.border = "2px solid black";
spellArea.style.minHeight = "50px";
spellArea.style.backgroundColor = "lightgray";
spellArea.style.fontSize = "20px";
spellArea.style.fontWeight = "bold";
spellArea.style.textAlign = "center";
document.body.appendChild(spellArea);

// Create Generate Button
const generateButton = document.createElement("button");
generateButton.id = "generateButton";
generateButton.textContent = "Generate Spell";
document.body.appendChild(generateButton);

// Create Reset Button
const resetButton = document.createElement("button");
resetButton.id = "resetButton";
resetButton.textContent = "Reset";
document.body.appendChild(resetButton);

// Create ingredients list
const ingredientsList = document.createElement("ul");
ingredientsList.id = "ingredientsList";

const ingredients = ["Dragon Scale", "Phoenix Feather", "Unicorn Horn"];

ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ingredientsList.appendChild(li);
});

document.body.appendChild(ingredientsList);

// ===============================
// FUNCTIONS
// ===============================

// Random color generator
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// ===============================
// EVENT: Generate Spell
// ===============================
generateButton.addEventListener("click", () => {
    let count = 3;

    spellArea.textContent = count;

    const countdown = setInterval(() => {
        count--;

        if (count > 0) {
            spellArea.textContent = count;
        } else {
            clearInterval(countdown);

            const randomIndex = Math.floor(Math.random() * ingredients.length);
            const spell = ingredients[randomIndex];

            spellArea.textContent = `✨ Spell Created: ${spell}`;
            spellArea.style.backgroundColor = getRandomColor();
        }
    }, 1000);
});

// ===============================
// EVENT: Reset
// ===============================
resetButton.addEventListener("click", () => {
    spellArea.textContent = "Your spell will appear here.";
    spellArea.style.backgroundColor = "lightgray";
});