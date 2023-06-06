{
  
  let formButton = document.querySelector("#form-button");
  let itemsName = document.querySelector("#items-name");
  
  let formInput = document.querySelector("#form-input");
  
  let date = document.querySelector("#Date");
  
  let addExpense = document.querySelector("#Add-Expense");
  
  let expenseList = document.getElementById('Expense-List');
  
  let totalAmount = document.getElementById("total-Amount");
  
  let price = document.getElementById("Price");

  // Part (01).. 
  // Set Budget button to Remaining Budget....................................//
  formButton.addEventListener('click',totalValue);

  formInput.addEventListener('keydown', function(event){

  if(event.key === 'Backspace'){
    totalAmount.textContent = totalAmount.textContent.slice(0,-1);
  }
  })

    function totalValue(){
      
      let enterAmount = parseFloat(formInput.value);
      if (!isNaN(enterAmount)) {
        totalAmount.textContent = '$' + enterAmount;
      }
    }

    // Part (2)..
    // Add Expense items Categroy with Add Expense Button....................................//
    addExpense.addEventListener('click', function(){
      
      let itemName = itemsName.value;
      
      let prices = parseFloat(price.value);
      
      let dates = date.value;

      // Create Table of tr and td  to add items..   
      
      let newRow = document.createElement('tr');
      
      let itemNameCell = document.createElement('td');
      itemNameCell.textContent = itemName;

      let priceCell = document.createElement('td');
      priceCell.textContent = "$" + prices;

      let dateCell = document.createElement('td');
      dateCell.textContent = dates;

      // td for icons of Edit & Delete..
      let checkIcon = document.createElement('td');
      let editIcon = document.createElement('i');
      editIcon.classList.add('fas', 'fa-edit', 'edit-icon');
      checkIcon.appendChild(editIcon);

      let deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');
      checkIcon.appendChild(deleteIcon);

      // Append the cells to the row..
      newRow.appendChild(itemNameCell);
      newRow.appendChild(priceCell);
      newRow.appendChild(dateCell);
      newRow.appendChild(checkIcon);

      // Append the row to the expense list table..
      expenseList.appendChild(newRow);

      // Clear the input fields..
      itemsName.value = '';
      price.value = '';
      date.value = '';

      // Dtelete list of td...
      
      deleteIcon.addEventListener('click', ()=>{
        newRow.remove();
      });

      // Subtract item price from total amount
      
      let tamount = parseFloat(totalAmount.textContent.slice(1));
      let tprice = prices;
      let updatedAmount = tamount - tprice;
      totalAmount.textContent = '$' + updatedAmount;
    });
};