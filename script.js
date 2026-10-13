// // CREATE an array of at least 12 emoji codes

// // FIND the gallery container

// // DEFINE showEmojis(count)
// //     DEFAULT count to the array's length

//     CLEAR the existing gallery

//     REPEAT count times, starting at array index zero
//         READ the emoji code at the current index
//         CREATE a card containing the emoji and its code
//         ADD the card to the gallery

// CALL showEmojis() to display all emojis 

const emojiCodes = [
    128512, // Grinning face
  128514, // Face with tears of joy
  128525, // Smiling face with heart-eyes
  128526, // Smiling face with sunglasses
  128515, // Grinning face with big eyes
  128522, // Smiling face
  128521, // Winking face
  128523, // Face savoring food
  128536, // Face blowing a kiss
  128077, // Thumbs up
  128156, // Purple heart
  127881  // Party popper
];

const gallery = document.querySelector('#emoji-gallery');

function showEmojis(count = emojiCodes.length) {
    gallery.innerHTML = ''; // Clear the existing gallery

    for (let index = 0; index < count; index++) {
        const code = emojiCodes[index];

        const card = document.createElement('div');
        card.classList.add('emoji-card');

        const emoji = document.createElement('span');
        emoji.classList.add('emoji');
        emoji.textContent = String.fromCodePoint(code);

        const decimalCode = document.createElement('p');
        decimalCode.classList.add('emoji-code');
        decimalCode.textContent = code;

        card.appendChild(emoji);
        card.appendChild(decimalCode);
        gallery.appendChild(card);
    }
}

showEmojis(); // Display all emojis