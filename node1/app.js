const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { generateArray, linearSearch, jumpSearch } = require('./functions');


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


app.post('/linearSearch', (req, res) => {
  const searchValue = parseInt(req.body.searchValue);
  const generatedArray = req.body.generatedArray.split(',').map(Number);
  const searchResultIndex = linearSearch(generatedArray, searchValue);

  if (searchResultIndex !== -1) {
    res.html = `<h1>Linear Search Results</h1>
                <p>The value <b>${searchValue}</b> was found at index <b>${searchResultIndex}</b>.</p>`;
    res.send(res.html);
  } else {
    res.html = `<h1>Linear Search Results</h1>
                <h2>The value <b>${searchValue}</b> was not found in the array.</h2>`;
    res.send(res.html);
  }
});



app.post('/jumpSearch', (req, res) => {
  const searchValue = parseInt(req.body.searchValue);
  const generatedArray = req.body.generatedArray.split(',').map(Number);
  generatedArray.sort((a, b) => a - b);

  const searchResultIndex = jumpSearch(generatedArray, searchValue);

  if (searchResultIndex !== -1) {
    // res with a formated string
    res.html = `<h1>Jump Search Results</h1>
                <p>The array had to be sorted to work with the JumpSearch Algorithm</p>
                <p>here is the array sorted: <b>${generatedArray}</b></p>
                <p>The value <b>${searchValue}</b> was found at index <b>${searchResultIndex}</b>.</p>`;
    res.send(res.html);

  } else {
    res.html = `<h1>Jump Search Results</h1>
                <h2>The value <b>${searchValue}</b> was not found in the array.</h2>`
    res.send(res.html);
  }
});

// Start the server
app.listen(3001, () => console.log('Server started on port http://localhost:3001.'));


