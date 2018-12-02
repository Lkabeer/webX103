// X-Team Selectors
var addFormX = document.getElementById('addFormX');
var contactsX = document.getElementById('contactsX');

var nameX = document.getElementById('nameX');
var mobileX = document.getElementById('mobileX');
var emailX = document.getElementById('emailX');
var filterX = document.getElementById('filterX');

var contactsJson = [];

// X-Team Events
addFormX.addEventListener('submit', addContact);
filterX.addEventListener('keyup', filterMembers);

// Class Contact X-Team
class Contact {
    constructor(name, mobile, email) {
        this.name = name;
        this.mobile = mobile;
        this.email = email;
    }
}

// Load Data from JSON File
function loadData() {
    $.getJSON("js/dataX.json", function (data) {
        contactsJson = data;
        // console.log(contactsJson);

        readContacts();
    });
}

// List Contacts X-Team 
function readContacts() {
    contactsX.innerHTML = '';

    for (let i = 0; i < contactsJson.length; ++i) {
        createContactView(contactsJson[i], i);
    }
}

// Create Contact X-Team
function createContactView(newContact, i) {

    let newContactX = new Contact(newContact.name, newContact.mobile, newContact.email);
    // console.log(newContactX);

    let sectionContact = document.createElement('section');
    sectionContact.classList = 'col-sm-6 text-center';
    contactsX.appendChild(sectionContact);

    let divContact = document.createElement('div');
    divContact.className = "card p-3 mb-3";
    sectionContact.appendChild(divContact);

    let nameX = document.createElement('h4');
    nameX.className = "card-title";
    nameX.appendChild(document.createTextNode(newContactX.name));
    divContact.appendChild(nameX);

    let removeButton = document.createElement('button');
    removeButton.className = "btn btn-danger btn-sm float-right font-weight-bold";
    removeButton.appendChild(document.createTextNode('X'));
    nameX.appendChild(removeButton);

    let phoneX = document.createElement('p');
    phoneX.className = "card-text";
    phoneX.appendChild(document.createTextNode(newContactX.mobile));
    divContact.appendChild(phoneX);

    let emailX = document.createElement('p');
    emailX.className = "card-text";
    emailX.appendChild(document.createTextNode(newContactX.email));
    divContact.appendChild(emailX);

    // Remove Member 
    removeButton.onclick = function () {
        if (confirm('Anta mot2kd Yasta mn 2lly bt3mloh?!')) {
            contactsJson.splice(i, 1);
            readContacts();
        }
    }

}

// Add new Contact X-Team 
function addContact(e) {
    e.preventDefault();

    let newContactX = new Contact(nameX.value, mobileX.value, emailX.value);
    nameX.value = '';
    mobileX.value = '';
    emailX.value = '';

    contactsJson.push(newContactX);
    readContacts();
}

// Filter Members
function filterMembers(e) {
    var searchX = e.target.value.toLowerCase();
    var contactsListX = contactsX.querySelectorAll('section');

    for (let contact of contactsListX) {
        let contactName = contact.querySelector('h4').firstChild.textContent;
        console.log(contactName);
        if (contactName.toLowerCase().indexOf(searchX) != -1) {
            contact.style.display = 'block';
        } else {
            contact.style.display = 'none';
        }
    }
}

// Start App X-Team
$(function () {
    loadData();
});