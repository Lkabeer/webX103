// X-Team Selectors
var addFormX = document.getElementById('addFormX');
var membersX = document.getElementById('membersX');
var newMemberX = document.getElementById('newMemberX')
var filterX = document.getElementById('filterX');

var membersArray = ['X-Team', 'Ahmed Samir'];

// X-Team Events
addFormX.addEventListener('submit', addMember);
filterX.addEventListener('keyup', filterMembers);

// Read Members
function readMembers() {

    resetMembersView();

    for (let i = 0; i < membersArray.length; ++i) {

        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = membersArray[i];

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right deleteX';
        deleteBtn.textContent = 'X';

        let editBtn = document.createElement('button');
        editBtn.className = 'btn btn-primary btn-sm float-right mr-2 editX';
        editBtn.textContent = 'Edit';

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        membersX.appendChild(li);

        // Remove Member 
        deleteBtn.onclick = function () {
            if (confirm('Anta mot2kd Yasta mn 2lly bt3mloh?!')) {
                membersArray.splice(i, 1);
                console.log(membersArray);
            }
            readMembers();
        }

        // Edit Member 
        editBtn.addEventListener('click', editMember);

        function editMember() {
            editBtn.removeEventListener('click', editMember);

            var textX = membersX.children[i].firstChild.textContent;
            membersX.children[i].firstChild.textContent = '';

            let editInput = document.createElement('input');
            editInput.className = 'col-sm-7 form-control';
            editInput.value = textX;
            li.appendChild(editInput);
            editInput.focus();

            // Save Member
            editInput.addEventListener("keydown", saveMember)

            function saveMember(e) {
                if (e.keyCode === 13) {
                    membersArray.splice(i, 1, editInput.value);
                    readMembers();
                }
            }
        }
    }
}

// Reset Members View 
function resetMembersView() {
    membersX.innerHTML = '';
}

// Add Member 
function addMember(e) {
    e.preventDefault();

    membersArray.push(newMemberX.value);
    newMemberX.value = '';
    console.log(membersArray);

    readMembers();
}

// Filter Members
function filterMembers(e) {
    var searchX = e.target.value.toLowerCase();
    var membersListX = membersX.getElementsByTagName('li');

    for (let member of membersListX) {
        console.log(member.firstChild);
        let memberName = member.firstChild.textContent;
        if (memberName.toLowerCase().indexOf(searchX) != -1) {
            member.style.display = 'block';
        } else {
            member.style.display = 'none';
        }
    }
}

// Start AppX 
readMembers();