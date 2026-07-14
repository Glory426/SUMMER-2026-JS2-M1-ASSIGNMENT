window.addEventListener("load", () => {
       
// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

    const form = document.getElementById("addForm");
    const table = document.getElementById("employees");
    const empCount = document.getElementById("empCount");

    let count = 0;
    empCount.textContent = count;


// ADD EMPLOYEE 

  form.addEventListener("submit", (e) => {
      
// PREVENT FORM SUBMISSION
    e.preventDefault();

// GET THE VALUES FROM THE TEXT BOXES

        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const extension = document.getElementById("extension").value;
        const email = document.getElementById("email").value;
        const department = document.getElementById("department").value;

// INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

        const row = table.insertRow(-1);

// INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

        const cellID = row.insertCell(0);
        const cellName = row.insertCell(1);
        const cellExtension = row.insertCell(2);
        const cellEmail = row.insertCell(3);
        const cellDepartment = row.insertCell(4);
        const deleteCell = row.insertCell(5);
        
// APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

        cellID.appendChild(document.createTextNode(id));
        cellName.appendChild(document.createTextNode(name));
        cellExtension.appendChild(document.createTextNode(extension));
        cellEmail.appendChild(document.createTextNode(email));
        cellDepartment.appendChild(document.createTextNode(department));

        
// CREATE THE DELETE BUTTON

        const button = document.createElement("button");
        button.textContent = "x";
        button.className = "btn btn-danger btn-sm";
        deleteCell.appendChild(button);


// RESET THE FORM

        form.reset();
       
// SET FOCUS BACK TO THE ID TEXT BOX

        document.getElementById("id").focus();

// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

 count++;
        empCount.textContent = count;

        console.log("Employee added:", name);

   }); // end submit event

 // DELETE EMPLOYEE


  table.addEventListener("click", (e) => {

    if (e.target.tagName === "BUTTON") {

        if (confirm("Are you sure you want to delete this employee?")) {

            table.deleteRow(e.target.parentNode.parentNode.rowIndex);

            count--;
            empCount.textContent = count;
        }
    }

});

});
