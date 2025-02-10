// Λίστα αγορών
let shoppingList = [];

// Προσθήκη προϊόντος
function addProduct() {
    const productName = document.getElementById('productName').value.trim();

    if (productName !== '') {
        shoppingList.push({ name: productName, purchased: false });
        renderList();
        document.getElementById('productName').value = ''; // Καθαρισμός πεδίου
    }
}

// Σήμανση ως αγορασμένο
function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased;
    renderList();
}

// Διαγραφή προϊόντος
function deleteProduct(index) {
    shoppingList.splice(index, 1);
    renderList();
}

// Εμφάνιση λίστας
function renderList() {
    const listElement = document.getElementById('shoppingList');
    listElement.innerHTML = '';

    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;

        if (item.purchased) {
            li.classList.add('purchased');
        }

        // Κουμπιά ενεργειών
        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('button-group');

        const purchasedButton = document.createElement('button');
        purchasedButton.textContent = item.purchased ? 'Undo' : '✅';
        purchasedButton.classList.add('purchased-btn');
        purchasedButton.onclick = () => togglePurchased(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => deleteProduct(index);

        buttonGroup.appendChild(purchasedButton);
        buttonGroup.appendChild(deleteButton);
        li.appendChild(buttonGroup);
        listElement.appendChild(li);
    });
}

// Αρχική εμφάνιση
renderList();

