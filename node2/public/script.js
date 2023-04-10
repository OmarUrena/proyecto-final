let generatedArray = [];
let searchValue = 0;
let searchResultIndex = 0;
let searchResult = '';
let ip = 'localhost';
let port = '3002';



function SetNetwork() {
    ip = document.getElementById('ipAddress').value;
    port = document.getElementById('portNumber').value;
    console.log(`ip: ${ip}`);
    console.log(`port: ${port}`);

    fetch(`http://${ip}:${port}/getNewArray`)
        .then(response => response.json())
        .then(data => document.getElementById('generatedArray').textContent = data)
        .catch(err => console.log(err));
}

// Fetch API is used to make HTTP requests
fetch(`http://${ip}:${port}/getNewArray`)
    .then(response => response.json())
    .then(data => document.getElementById('generatedArray').textContent = data)
    .catch(err => console.log(err));


function BinarySearchButton() {
    searchValue = document.getElementById('searchValue').value;
    generatedArray = document.getElementById('generatedArray').textContent;

    parameters = {
        'searchValue': searchValue,
        'generatedArray': generatedArray
    }

    fetch(`http://${ip}:${port}/binarySearch`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parameters)
    })
        .then(response => response.text())
        .then(result => document.getElementById('searchResult').innerHTML = result)
        .catch(err => console.log(err));
}

function BubbleSortButton() {
    searchValue = document.getElementById('searchValue').value;
    generatedArray = document.getElementById('generatedArray').textContent;

    parameters = {
        'searchValue': searchValue,
        'generatedArray': generatedArray
    }

    fetch(`http://${ip}:${port}/bubbleSearch`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parameters)
    })
        .then(response => response.text())
        .then(result => document.getElementById('searchResult').innerHTML = result)
        //add the html format to the result
        // .then(result => document.getElementById('searchResult').innerHTML = result)
        .catch(err => console.log(err));
}



