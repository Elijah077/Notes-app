const addNotesBtn = document.querySelector("#addTask");
const notesContainer = document.querySelector(".add-notes-container");
const sendBtn = document.querySelector("button[type='submit']");
const deletBtn = document.querySelector(".delete");
const notesCategory = document.querySelector("#notesCategories");
const overlay = document.querySelector(".overlay");

function showModal(modal) {
  modal.classList.add("show-card");
  overlay.classList.add("show-overlay");
}

function closeModal(modal) {
  modal.classList.remove("show-card");
  overlay.classList.remove("show-overlay");
}

addNotesBtn.addEventListener("click", () => {
  showModal(notesContainer);
});

deletBtn.addEventListener("click", () => {
  closeModal(notesContainer);
});
