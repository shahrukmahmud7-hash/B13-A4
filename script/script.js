
console.log('hello world'); 
let currentStatus = "all";

const total = document.getElementById("total");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");
const allCards = document.getElementById("allCards");
const cards = document.querySelectorAll(".job-card");

// -----------------------
// COUNT FUNCTION
// -----------------------
function calculateCount() {
  let interview = 0;
  let rejected = 0;
  let all = 0;

  document.querySelectorAll(".job-card").forEach((card) => {
    const status = card.dataset.status;

    if (status === "all") all++;
    if (status === "interview") interview++;
    if (status === "rejected") rejected++;
  });

  total.innerText = all;
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
}

// -----------------------
// FILTER FUNCTION
// -----------------------

function filterCards(status) {
  currentStatus = status;

  cards.forEach((card) => {
    if (card.dataset.status === status) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  checkEmptyState();
}

function checkEmptyState() {
  const visibleCards = [...cards].filter(
    (card) => !card.classList.contains("hidden"),
  );

  const emptyMessage = document.getElementById("emptyMessage");

  if (visibleCards.length === 0) {
    emptyMessage.classList.remove("hidden");
    emptyMessage.classList.add("flex");
  } else {
    emptyMessage.classList.remove("flex");
    emptyMessage.classList.add("hidden");
  }
}

// -----------------------
// BUTTON STYLE TOGGLE
// -----------------------
function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-blue-500");
  interviewFilterBtn.classList.remove("bg-blue-500");
  rejectedFilterBtn.classList.remove("bg-blue-500");

  allFilterBtn.classList.add("bg-gray-500");
  interviewFilterBtn.classList.add("bg-gray-500");
  rejectedFilterBtn.classList.add("bg-gray-500");

  const selected = document.getElementById(id);
  selected.classList.remove("bg-gray-500");
  selected.classList.add("bg-blue-500");

  if (id === "all-filter-btn") filterCards("all");
  if (id === "interview-filter-btn") filterCards("interview");
  if (id === "rejected-filter-btn") filterCards("rejected");
}

// -----------------------
// EVENT DELEGATION
// -----------------------
allCards.addEventListener("click", function (event) {
  const card = event.target.closest(".job-card");
  if (!card) return;

  // INTERVIEW BUTTON
  if (event.target.classList.contains("interview-btn")) {
    card.dataset.status = "interview";
    card.querySelector("span").innerText = "INTERVIEW";
  }

  // REJECTED BUTTON
  if (event.target.classList.contains("rejected-btn")) {
    card.dataset.status = "rejected";
    card.querySelector("span").innerText = "REJECTED";
  }

  // DELETE BUTTON
  if (event.target.closest(".btn-delete")) {
    card.dataset.status = "all";
    card.querySelector("span").innerText = "NOT APPLIED";
  }

  calculateCount();
  filterCards(currentStatus);
});

calculateCount();