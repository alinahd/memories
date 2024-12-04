function viewDetails(entryNumber) {
    const entries = document.querySelectorAll('.story-entry');

    // Hide all entries first
    entries.forEach(entry => {
        entry.classList.remove('active');
    });

    // Show the selected entry in an active state
    const selectedEntry = entries[entryNumber - 1];
    selectedEntry.classList.add('active');

    // Change the button to "Back" to return to the main view
    const button = selectedEntry.querySelector('button');
    button.textContent = "Back";
    button.setAttribute("onclick", `goBack(${entryNumber})`);
}

function goBack(entryNumber) {
    const entries = document.querySelectorAll('.story-entry');
    const selectedEntry = entries[entryNumber - 1];

    selectedEntry.classList.remove('active');
    const button = selectedEntry.querySelector('button');
    button.textContent = "Read More";
    button.setAttribute("onclick", `viewDetails(${entryNumber})`);
}
