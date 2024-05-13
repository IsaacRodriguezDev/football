"use strict";
let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

window.onload = function () {
 
  initDropdown();
  
  let form = document.querySelector('#formId')
 
  form.addEventListener('submit',teamCodes)
  
  
};


function initDropdown() {
  let theDropdown = document.querySelector("#sectionTeam");
  let numberOfTeams = teams.length;
  let selectTeam = document.createElement('option')
    selectTeam.textContent = 'Select a team'
  selectTeam.value = ''
  theDropdown.appendChild(selectTeam)
  for (let i = 0; i < numberOfTeams; i++) {
    let newOption = document.createElement("option");
    newOption.textContent = teams[i].name;
    newOption.value = teams[i].code;
    theDropdown.appendChild(newOption);
  }
}
function teamCodes(e) {
e.preventDefault()
  let theDropdown = document.querySelector("#sectionTeam");
  let resutls = document.querySelector("#results");
  let selectedIndex = theDropdown.selectedIndex - 1
 
  let selectedTeam = teams[selectedIndex];
  
  if(theDropdown.selectedIndex == '0'){
 
    resutls.innerHTML = ''
  }else{
  resutls.innerHTML = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`
  theDropdown.selectedIndex ='0'
  }
  return false
}
