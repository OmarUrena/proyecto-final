const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { generateArray, binarySearch, bubbleSort } = require('./functions');


const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up static directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to retrieve generated array
app.get('/getNewArray', (req, res) => {
    //generate a random number between 7 and 15
    const arrayLength = Math.floor(Math.random() * 8) + 7;
    const array = generateArray(arrayLength); // Call the function to generate the array
    res.json(array); // Send the array as JSON response
});


app.post('/binarySearch', (req, res) => {
    const searchValue = parseInt(req.body.searchValue);
    const generatedArray = req.body.generatedArray.split(',').map(Number);
    const searchResultIndex = binarySearch(generatedArray, searchValue);

    if (searchResultIndex !== -1) {
        res.html = `<h1> Binary Search Results</h1 >
                    <h2> the array must be sorted in order to implement the binarySearch</h2>
                    <p>here is the array sorted: <b>${generatedArray}</b></p>
                    <p>The value <b>${searchValue}</b> was found at index <b>${searchResultIndex}</b>.</p>`;
        res.send(res.html);
    } else {
        res.html = `<h1> Binary Search Results</h1 >
                    <h2>The value <b>${searchValue}</b> was not found in the array.</h2>`;
        res.send(res.html);
    }
});



app.post('/bubbleSearch', (req, res) => {
    const generatedArray = req.body.generatedArray.split(',').map(Number);
    const searchResultIndex = bubbleSort(generatedArray);

    if (searchResultIndex !== -1) {
        // res with a formated string
        res.html = `<h1> Bubble Sort Results</h1>
                    <p>here is the array sorted: <b>${generatedArray}</b></p>`;
        res.send(res.html);

    } else {
        res.html = `< h1 > Bubble Sort Results</h1 >
                    <h2>Error</h2>`
        res.send(res.html);
    }
});

// Start the server
app.listen(process.env.PORT || 3002, () => console.log('Server started.'));


