const addNotesBtn = document.querySelector("#addTask");
const notesContainer = document.querySelector(".add-notes-container");
const sendBtn = document.querySelector("button[type='submit']");
const deletBtn = document.querySelector(".delete");
const notesCategory = document.querySelector("#notesCategories");
const overlay = document.querySelector(".overlay");
const savedNotes = document.querySelector(".saved-notes");
const submitNotes = document.getElementById("submitNotes");

function showModal(modal) {
  modal.classList.add("show-card");
  overlay.classList.add("show-overlay");
}
// hide notes start
function hideNotes(container) {
  container.classList.add("hidden");
}

function showNotes(container) {
  container.classList.remove("hidden");
}

// hide notes end

function closeModal(modal) {
  modal.classList.remove("show-card");
  overlay.classList.remove("show-overlay");
}

addNotesBtn.addEventListener("click", () => {
  showModal(notesContainer);
  hideNotes(savedNotes);
});

deletBtn.addEventListener("click", () => {
  closeModal(notesContainer);
  showNotes(savedNotes);
});

// afunction to grabe all the input value and store them in a card

const createNotes = () => {
  const [title, description] = document.querySelectorAll(".task-input");
  const note = document.querySelector("textarea");

  const notesCard = {
    cardTitle: title.value,
    cardDescription: description.value,
    cardNote: note.value,
  };

  const card = document.createElement("div");
  card.classList.add("notes-card");
  card.innerHTML = `
    <h3 class="card-title">${notesCard.cardTitle}</h3>  
    <p class="description">${notesCard.cardDescription}</p>
    <small class="notes">${notesCard.cardNote}</small>
  `;

  savedNotes.appendChild(card);
};

submitNotes.addEventListener("click", (e) => {
  e.preventDefault();
  createNotes();
});
