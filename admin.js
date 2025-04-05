console.log("admin.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
    loadResponses();
});

function loadResponses() {
    const responses = JSON.parse(localStorage.getItem('responses')) || [];
    const responsesDiv = document.getElementById('responses');
    responsesDiv.innerHTML = ''; // Clear previous responses

    responses.forEach((response, index) => {
        const responseDiv = document.createElement('div');
        responseDiv.classList.add('response');
        responseDiv.innerHTML = `
            <p><strong>Project Name:</strong> ${response.projectName}</p>
            <p><strong>Description:</strong> ${response.description}</p>
            <p><strong>Energy Saving:</strong> ${response.energySaving}</p>
            <p><strong>Savings:</strong> ${response.savings}</p>
            <p><strong>Investments:</strong> ${response.investments}</p>
            <p><strong>Project Cost:</strong> ${response.projectCost}</p>
            <button onclick="deleteResponse(${index})">Delete</button>
        `;
        responsesDiv.appendChild(responseDiv);
    });
}

function deleteResponse(index) {
    let responses = JSON.parse(localStorage.getItem('responses')) || [];
    responses.splice(index, 1);
    localStorage.setItem('responses', JSON.stringify(responses));
    location.reload();
}

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
