// asyncBreeds.js
const fs = require('fs');
const breedDetails = require('./syncBreeds');

const breedDetailsFromFile = function(breed, callback) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data.");
    if (!error) callback(data);
  });
};

const printOutCatBreed = breed => console.log('Return Value: ', breed) 
const bombay = breedDetailsFromFile('Bombay', printOutCatBreed);
module.exports = breedDetailsFromFile;
