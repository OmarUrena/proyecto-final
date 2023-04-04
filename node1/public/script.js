let generatedArray = [];
let searchValue = 0;
let searchResultIndex = 0;
let searchResult = '';

// Fetch API is used to make HTTP requests
fetch('http://localhost:3001/getNewArray')
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

    fetch('http://localhost:3001/linearSearch', {
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

    fetch('http://localhost:3001/jumpSearch', {
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



