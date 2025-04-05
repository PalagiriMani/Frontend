console.log("view_responses.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
    loadResponses();
});

function loadResponses() {
    const responses = JSON.parse(localStorage.getItem('responses')) || [];
    const responsesDiv = document.getElementById('responses');
    
    responses.forEach((response, index) => {
        const responseDiv = document.createElement('div');
        responseDiv.classList.add('response');
        responseDiv.innerHTML = `
            <p><strong>Project Name:</strong> ${response.projectName}</p>
            <p><strong>Project Cost:</strong> ${response.projectCost}</p>
            <p><strong>Marks:</strong> ${response.marks || 'Not graded yet'}</p>
            <p><strong>Remarks:</strong> ${response.remarks || 'No remarks yet'}</p>
        `;
        responsesDiv.appendChild(responseDiv);
    });
}

function navigate(page) {
    window.location.href = page;
}
