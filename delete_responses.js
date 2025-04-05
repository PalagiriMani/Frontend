console.log("delete_responses.js loaded");

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
            <p><strong>Project Cost:</strong> ${response.projectCost}</p>
            <!-- Add other fields here -->
            <button onclick="confirmDeleteResponse(${index})">Delete</button>
        `;
        responsesDiv.appendChild(responseDiv);
    });
}

function confirmDeleteResponse(index) {
    if (confirm('Are you sure you want to delete this response?')) {
        deleteResponse(index);
    }
}

function deleteResponse(index) {
    let responses = JSON.parse(localStorage.getItem('responses')) || [];
    responses.splice(index, 1);
    localStorage.setItem('responses', JSON.stringify(responses));
    loadResponses();
}

function navigate(page) {
    window.location.href = page;
}
