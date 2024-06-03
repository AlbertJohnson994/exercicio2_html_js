document.addEventListener('DOMContentLoaded', (event) => {
    loadContacts();

    document.getElementById('btn-cadastrar').addEventListener('click', function() {
        addContact();
    });
});

function addContact() {
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    
    if (name && phone) {
       
        addContactToTable(name, phone);

        saveContact(name, phone);

        document.getElementById("contactForm").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function addContactToTable(name, phone) {
   
    var table = document.getElementById("contactsTable").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = name; 
    cell2.textContent = phone;
}

function saveContact(name, phone) {
   
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    contacts.push({ name: name, phone: phone });

    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function loadContacts() {
   
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];


    contacts.forEach(function(contact) {
        addContactToTable(contact.name, contact.phone);
    });
}
