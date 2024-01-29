// API.js

function getData() {
    // Fetch data from the API
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(response => response.json())
        .then(data => {
            // Call the function to populate the table with the retrieved data
            populateTable(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function populateTable(data) {
    // Get the table element
    const table = document.getElementById('Table');

    // Loop through the data and populate the table
    data.forEach(product => {
        // Create a new row
        const row = table.insertRow();

        // Insert product name into the first cell
        const nameCell = row.insertCell(0);
        nameCell.textContent = product.name;

        // Insert product detail into the second cell
        const detailCell = row.insertCell(1);
        detailCell.textContent = product.description;
    });
}
