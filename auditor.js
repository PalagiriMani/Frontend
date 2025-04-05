console.log("auditor.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
    loadUserResponses();
});

function loadUserResponses() {
    const responses = JSON.parse(localStorage.getItem('responses')) || [];
    console.log('Loaded responses:', responses); // Log loaded responses
    const userSelect = document.getElementById('userSelect');
    userSelect.innerHTML = '<option value="">Select a Project</option>'; // Clear previous options

    responses.forEach((response, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = response.projectName;
        userSelect.appendChild(option);
    });
}

document.getElementById('userSelect').addEventListener('change', function() {
    const index = this.value;
    const responses = JSON.parse(localStorage.getItem('responses')) || [];
    const response = responses[index];
    const responseDetails = document.getElementById('responseDetails');
    
    if (response) {
        responseDetails.innerHTML = `
            <p><strong>Project Name:</strong> ${response.projectName}</p>
            <p><strong>Description of the Project:</strong> ${response.description}</p>
            <p><strong>Type of Energy saving for the project:</strong> ${response.energy_saving}</p>
            <p><strong>Estimated Energy savings in kWh:</strong> ${response.savings}</p>
            <p><strong>Investments in the project:</strong> ${response.investments}</p>
            <p><strong>Image of the project:</strong> ${response.photo}</p>
            <p><strong>Project Cost:</strong> ${response.projectCost}</p>
            <label for="marks">Marks:</label>
            <input type="number" id="marks" value="${response.marks || ''}">
            <label for="remarks">Remarks:</label>
            <textarea id="remarks">${response.remarks || ''}</textarea>
            <button onclick="submitAudit(${index})">Submit Audit</button>
        `;
    } else {
        responseDetails.innerHTML = '';
    }
});

function submitAudit(index) {
    const marks = document.getElementById('marks').value;
    const remarks = document.getElementById('remarks').value;
    let responses = JSON.parse(localStorage.getItem('responses')) || [];
    responses[index].marks = marks;
    responses[index].remarks = remarks;
    localStorage.setItem('responses', JSON.stringify(responses));
    console.log('Updated responses after audit:', responses); // Log updated responses
    alert('Audit submitted successfully!');
}
