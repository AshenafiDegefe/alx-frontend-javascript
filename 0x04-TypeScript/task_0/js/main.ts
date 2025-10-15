interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 = {
  firstName: "Lamli",
  lastName: "Mati",
  age: 24,
  location: "Addis Ababa",
};

const student2 = {
  firstName: "Amanu",
  lastName: "Dani",
  age: 24,
  location: "Addis Ababa",
};

const studentsList: Student[] = [student1, student2];

const body = document.getElementsByTagName("body")[0];


const table = document.createElement("table");


const tBody = document.createElement("tbody");


const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";

headerRow.appendChild(th1);
headerRow.appendChild(th2);
tBody.appendChild(headerRow);


studentsList.forEach((student) => {

  const row = document.createElement("tr");

  
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  
  tBody.appendChild(row);
});


table.appendChild(tBody);


table.style.borderCollapse = "collapse";
table.style.width = "400px";
tBody.querySelectorAll('td, th').forEach(cell => {
    const htmlCell = cell as HTMLElement;
    htmlCell.style.border = "1px solid black";
    htmlCell.style.padding = "8px";
    htmlCell.style.textAlign = "left";
});

body.appendChild(table);