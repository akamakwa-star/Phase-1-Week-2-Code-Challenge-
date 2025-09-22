// Base URL for API requests
const BASE_URL = 'http://localhost:5003/characters';
// DOM elements for animal list, details, and form
const characterList = document.getElementById('character-list');
const characterDetails = document.getElementById('character-details');
const addAnimalForm = document.getElementById('add-animal-form');

// Fetch and display all characters from the server
function fetchCharacters() {
  fetch(BASE_URL)
    .then(response => response.json())
    .then(characters => {
      // Clear existing list
      characterList.innerHTML = '';
      // Create list item for each character
      characters.forEach(character => {
        const li = document.createElement('li');
        li.textContent = character.name;
        // Add click event to show character details
        li.addEventListener('click', () => displayCharacterDetails(character.id));
        characterList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching characters:', error));
}

// Display details for a specific character by ID
function displayCharacterDetails(id) {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(character => {
      // Render character details with image, votes, and buttons
      characterDetails.innerHTML = `
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}">
        <p>Votes: <span id="vote-count-${character.id}">${character.votes}</span></p>
        <button onclick="addVote(${character.id})">Vote</button>
        <button class="reset" onclick="resetVotes(${character.id})">Reset Votes</button>
      `;
    })
    .catch(error => console.error('Error fetching character details:', error));
}

// Increment vote count for a character (client-side only)
function addVote(id) {
  const voteCountElement = document.getElementById(`vote-count-${id}`);
  let votes = parseInt(voteCountElement.textContent);
  // Update vote count in the DOM
  voteCountElement.textContent = ++votes;
}

// Reset vote count for a character to 0 (client-side only)
function resetVotes(id) {
  const voteCountElement = document.getElementById(`vote-count-${id}`);
  // Reset vote count in the DOM
  voteCountElement.textContent = 0;
}

// Handle form submission to add a new animal
addAnimalForm.addEventListener('submit', event => {
  // Prevent default form submission
  event.preventDefault();
  // Get form input values
  const name = document.getElementById('name').value;
  const image = document.getElementById('image').value;

  // Send POST request to add new animal
  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      image,
      votes: 0,
    }),
  })
    .then(response => response.json())
    .then(() => {
      // Refresh character list and clear form
      fetchCharacters();
      addAnimalForm.reset();
    })
    .catch(error => console.error('Error adding animal:', error));
});

// Initialize the app by fetching characters
fetchCharacters();