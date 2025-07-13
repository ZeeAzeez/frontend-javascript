interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Azeezah",
  lastName: "Abdulazeez",
  age: 23,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Chris",
  lastName: "Eze",
  age: 25,
  location: "Abuja",
};

// Add to students list
const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
const headerRow = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

// Populate rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Add table to the body
document.body.appendChild(table);
