// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

    const form = document.getElementById("addForm");
    const table = document.getElementById("employees");
    const empCount = document.getElementById("empCount");

// ADD EMPLOYEE

 let count = 0;
    empCount.value = count;

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

        const row = table.insertRow();


    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

        row.insertCell().appendChild(document.createTextNode(id));
                 
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

        row.insertCell().appendChild(document.createTextNode(name));
        row.insertCell().appendChild(document.createTextNode(extension));
        row.insertCell().appendChild(document.createTextNode(email));
        row.insertCell().appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON

        const deleteCell = row.insertCell();
        const button = document.createElement("button");
        button.textContent = "X";
        button.className = "btn btn-danger btn-sm";
        deleteCell.appendChild(button);
       
        employeeCount++;
        count.value = employeeCount;

    // RESET THE FORM
        form.reset();
        $("id").focus();
    });


    // SET FOCUS BACK TO THE ID TEXT BOX

        document.getElementById("id").focus();

     
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

 count++;
        empCount.value = count;
        console.log(count);

    // DELETE EMPLOYEE

table.addEventListener("click", (e) => {

        if (e.target.tagName === "BUTTON") {

            if (confirm("Are you sure you want to delete this employee?")) {

                table.deleteRow(e.target.parentNode.parentNode.rowIndex);

                count--;
                empCount.value = count;
            }
        }
    });


