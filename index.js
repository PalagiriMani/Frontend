console.log("user.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
    document.getElementById('userForm').addEventListener('submit', saveUserResponse);
    document.getElementById('addProject').addEventListener('click', addProjectFields);
});

function saveUserResponse(event) {
    event.preventDefault();

    const response = {
        projectName: document.getElementById('projectName').value,
        description: document.getElementById('description').value,
        energySaving: document.getElementById('energy_saving').value,
        savings: document.getElementById('savings').value,
        investments: document.getElementById('investments').value,
        photo: document.getElementById('photo').value,
        projectCost: document.getElementById('projectCost').value
    };

    // Save response to localStorage
    let responses = JSON.parse(localStorage.getItem('responses')) || [];
    responses.push(response);
    localStorage.setItem('responses', JSON.stringify(responses));

    console.log('Saved responses:', responses); // Log saved responses

    alert('Response saved!');
}

function addProjectFields() {
    const projectFields = `
        <label for="projectName">Project Name:</label>
        <input type="text" id="projectName" name="projectName"><br>

        <label for="description">Description of the Project:</label>
        <input type="text" id="description" name="description"><br>

        <label for="energy_saving">Type of Energy saving for the project:</label>
        <input type="text" id="energy_saving" name="energy_saving"><br>

        <label for="savings">Estimated Energy savings in kWh:</label>
        <input type="number" id="savings" name="savings"><br>

        <label for="investments">Investments in the project:</label>
        <input type="number" id="investments" name="investments"><br>

        <label for="photo">Include any image of the project:</label>
        <input type="file" accept="image/*" name="imageInput" id="photo"><br>

        <label for="projectCost">Project Cost:</label>
        <input type="number" id="projectCost" name="projectCost"><br>
    `;
    document.getElementById('module1').insertAdjacentHTML('beforeend', projectFields);
}

function navigate(page) {
    window.location.href = page;
}
