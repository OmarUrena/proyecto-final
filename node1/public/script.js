let generatedArray = [];
let searchValue = 0;
let searchResultIndex = 0;
let searchResult = '';
let ip = 'localhost';
let port = '3001';



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


function LinearSearchButton() {
    searchValue = document.getElementById('searchValue').value;
    generatedArray = document.getElementById('generatedArray').textContent;

    //pass these variables to a json format variable
    parameters = {
        'searchValue': searchValue,
        'generatedArray': generatedArray
    }

    fetch(`http://${ip}:${port}/linearSearch`, {
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

function JumpSearchButton() {
    searchValue = document.getElementById('searchValue').value;
    generatedArray = document.getElementById('generatedArray').textContent;

    // console.log(`searchValue: ${searchValue}`);
    // console.log(`generatedArray: ${generatedArray}`);

    //pass these variables to a json format variable
    parameters = {
        'searchValue': searchValue,
        'generatedArray': generatedArray
    }

    fetch(`http://${ip}:${port}/jumpSearch`, {
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



