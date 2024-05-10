"use strict";
let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

window.onload = function () {
  initDropdown();
  let buttonForTeams = document.querySelector("#buttonForTeam");
  buttonForTeams.addEventListener("click", teamCodes);
};
function initDropdown() {
  let theDropdown = document.querySelector("#sectionTeam");
  let numberOfTeams = teams.length;
  for (let i = 0; i < numberOfTeams; i++) {
    let newOption = document.createElement("option");
    newOption.textContent = teams[i].name;
    newOption.value = teams[i].code;
    theDropdown.appendChild(newOption);
  }
}
function teamCodes() {
  let theDropdown = document.querySelector("#sectionTeam");
  let resutls = document.querySelector("#results");
  let selectedIndex = theDropdown.selectedIndex;
  let selectedTeam = teams[selectedIndex];
  resutls.innerHTML = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`
}
