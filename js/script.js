var addFormX = document.getElementById('addFormX');
var membersX = document.getElementById('membersX');
var newMemberX = document.getElementById('newMemberX')
var filterX = document.getElementById('filterX');

// X-Team Events
addFormX.addEventListener('submit', addMember);
membersX.addEventListener('click', removeMember);
filterX.addEventListener('keyup', filterMembers);

// Add Member 
function addMember(e) {
    e.preventDefault();
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = newMemberX.value;
    newMemberX.value = '';

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right deleteX';
    deleteBtn.textContent = 'X';

    li.appendChild(deleteBtn);
    membersX.appendChild(li);
}

// Remove Member 
function removeMember(e) {
    if (e.target.classList.contains('deleteX')) {
        if (confirm('Anta mot2kd Yasta mn 2lly bt3mloh?!')) {
            var li = e.target.parentElement;
            membersX.removeChild(li);
        }
    }
}

// Filter Members
function filterMembers(e) {
    var textX = e.target.value.toLowerCase();
    var membersListX = membersX.getElementsByTagName('li');

    for (let member of membersListX) {
        let memberName = member.firstChild.textContent;
        if (memberName.toLowerCase().indexOf(textX) != -1) {
            member.style.display = 'block';
        } else {
            member.style.display = 'none';
        }
    }
}