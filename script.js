// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

function colorCell(cell) {
    cell.style.backgroundColor = colorSelected;
}
// Add a row
function addR() {
    const table = document.getElementById("grid"); // Get the table
    const newRow = document.createElement("tr"); // Create a new row

    if (numRows === 0 && numCols === 0) {
        // If it's the first row, add one cell
        const newCell = document.createElement("td");
        newCell.onclick = function () { colorCell(newCell); };
        newRow.appendChild(newCell);
        numCols++;
    } else {
        // Create new cells
        for (let i = 0; i < numCols; i++) {
            const newCell = document.createElement("td");
            newCell.onclick = function () { colorCell(newCell); };
            newRow.appendChild(newCell);
        }
    }
    // Append the new row to the table
    table.appendChild(newRow);

    numRows++;
}


// Add a column
function addC() {
    //alert("Clicked Add Col"); 
    const table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        const row = table.rows[i];
        const newCell = document.createElement("td");
        newCell.onclick = function () { colorCell(newCell); };
        row.appendChild(newCell);
    }
    numCols++;
}

// Remove a row
function removeR() {
    //alert("Clicked Remove Row"); 
    if (numRows > 0) {
        document.getElementById("grid").deleteRow(numRows - 1);
        numRows--;
    }
}

// Remove a column
function removeC() {
    //alert("Clicked Remove Col"); // Replace this line with your code.
    if (numCols > 0) {
        const table = document.getElementById("grid");
        for (let i = 0; i < numRows; i++) {
            const row = table.rows[i];
            row.deleteCell(numCols - 1);
        }
        numCols--;
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    //alert("Clicked Fill All Uncolored"); // Replace this line with your code.
    const table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        const row = table.rows[i];
        for (let j = 0; j < numCols; j++) {
            const cell = row.cells[j];
            if (cell.style.backgroundColor === "" || cell.style.backgroundColor === "white") {
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll() {
    //alert("Clicked Fill All"); // Replace this line with your code.
    const table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        const row = table.rows[i];
        for (let j = 0; j < numCols; j++) {
            const cell = row.cells[j];
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll() {
    //alert("Clicked Clear All"); // Replace this line with your code.
    const table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        const row = table.rows[i];
        for (let j = 0; j < numCols; j++) {
            const cell = row.cells[j];
            cell.style.backgroundColor = "white";
        }
    }
}