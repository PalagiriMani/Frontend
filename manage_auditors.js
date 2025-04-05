console.log("manage_auditors.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
});

function addAuditorString() {
    const newAuditorString = prompt("Enter new auditor access string:");
    if (newAuditorString) {
        let auditorStrings = JSON.parse(localStorage.getItem('auditorStrings')) || [];
        auditorStrings.push(newAuditorString);
        localStorage.setItem('auditorStrings', JSON.stringify(auditorStrings));
        alert('New auditor string added!');
    }
}

function navigate(page) {
    window.location.href = page;
}
