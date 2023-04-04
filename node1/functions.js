// Function that generate an array of n length
function generateArray(n) {
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

// Linear search algorithm
function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
}



function jumpSearch(generatedArray, searchValue) {
    const length = generatedArray.length
    let step = Math.floor(Math.sqrt(length))

    let lower_Bound = 0
    while (generatedArray[Math.min(step, length) - 1] < searchValue) {
        lower_Bound = step
        step += lower_Bound
        if (lower_Bound >= length) {
            return -1
        }
    }
    const upper_Bound = Math.min(step, length)
    while (generatedArray[lower_Bound] < searchValue) {
        lower_Bound++
        if (lower_Bound === upper_Bound) {
            return -1
        }
    }
    if (generatedArray[lower_Bound] === searchValue) {
        return lower_Bound
    }
    return -1
}



// export this function
module.exports = { generateArray, linearSearch, jumpSearch };