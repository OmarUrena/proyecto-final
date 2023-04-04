// Function that generate an array of n length
function generateArray(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

// Binary search algorithm
function binarySearch(generatedArray, searchValue) {
    generatedArray.sort((a, b) => a - b);

    let left = 0;
    let right = generatedArray.length - 1;
    while (left <= right) {

        let mid = Math.floor((left + right) / 2);
        if (generatedArray[mid] == searchValue) {
            return mid;
        }

        if (searchValue < generatedArray[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1; // Valor no encontrado
}

// Bubble sort algorithm
function bubbleSort(generatedArray) {
    var len = generatedArray.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (generatedArray[j] > generatedArray[j + 1]) {
                // Intercambiar los elementos
                var temp = generatedArray[j];
                generatedArray[j] = generatedArray[j + 1];
                generatedArray[j + 1] = temp;
            }
        }
    }
    return generatedArray;
}



// export this function
module.exports = { generateArray, bubbleSort, binarySearch };