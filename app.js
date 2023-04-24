const teams = [
  {
    name: "Alianza Lima",
    foundationYear: 1901,
    position: 10,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_Alianza_Lima.svg/1200px-Logo_Alianza_Lima.svg.png"
  },
  {
    name: "Universitario de Deportes",
    foundationYear: 1924,
    position: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Club_Universitario_de_Deportes_%28escudo%29.svg/1200px-Club_Universitario_de_Deportes_%28escudo%29.svg.png"
  },
  {
    name: "Sporting Cristal",
    foundationYear: 1955,
    position: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Escudo_del_Club_Sporting_Cristal.svg/1200px-Escudo_del_Club_Sporting_Cristal.svg.png"
  }
];

const teamsTableBody = document.getElementById("teamsTableBody");

teams.forEach(team => {
  const row = document.createElement("tr");

  const imageCell = document.createElement("td");
  const image = document.createElement("img");
  image.src = team.image;
  imageCell.appendChild(image);
  row.appendChild(imageCell);

  const nameCell = document.createElement("td");
  nameCell.textContent = team.name;
  row.appendChild(nameCell);

  const foundationYearCell = document.createElement("td");
  foundationYearCell.textContent = team.foundationYear;
  row.appendChild(foundationYearCell);

  const positionCell = document.createElement("td");
  positionCell.textContent = team.position;
  row.appendChild(positionCell);

  teamsTableBody.appendChild(row);
});